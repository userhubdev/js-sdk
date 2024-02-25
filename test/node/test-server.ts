import { IncomingHttpHeaders, createServer } from "node:http";
import { onTestFinished } from "vitest";

export interface TestRequest {
  url: string;
  method: string;
  headers: IncomingHttpHeaders;
  body: string;
}

interface TestServer {
  baseUrl: string;
  requests: TestRequest[];
}

export async function createTestServer(mock: {
  statusCode?: number;
  method?: string;
  headers?: Record<string, string | string[]>;
  body?: string | Record<string, unknown>;
  delay?: number;
  closeImmediately?: boolean;
}): Promise<TestServer> {
  const testServer: TestServer = { baseUrl: "", requests: [] };

  if (!mock.headers) mock.headers = {};

  if (mock.body && typeof mock.body === "object") {
    mock.body = JSON.stringify(mock.body);
    mock.headers["content-type"] = "application/json";
  }

  const server = createServer((req, res) => {
    const testReq: TestRequest = {
      url: req.url ?? "",
      method: req.method ?? "",
      headers: req.headers,
      body: "",
    };

    testServer.requests.push(testReq);

    if (mock.closeImmediately) {
      req.socket.end();
      return;
    }

    const chunks: string[] = [];

    req.on("data", (v) => chunks.push(v));

    req.on("end", () => {
      testReq.body = chunks.join("");

      for (const [name, value] of Object.entries(mock.headers || {})) {
        res.setHeader(name, value);
      }
      res.statusCode = mock.statusCode ?? 200;
      res.write(mock.body, () => {
        if (mock.delay) {
          setTimeout(res.end.bind(res), mock.delay);
        } else {
          res.end();
        }
      });
    });
  });

  onTestFinished(async () => {
    return new Promise((resolve, reject) => {
      if (!server.listening) {
        return resolve();
      }

      server.close((err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  });

  return await new Promise((resolve, reject) => {
    server.on("error", reject);

    server.listen(0, "127.0.0.1", () => {
      const addr = server.address();
      if (addr && typeof addr === "object" && "port" in addr) {
        testServer.baseUrl = `http://${addr.address}:${addr.port}`;
        resolve(testServer);
      } else {
        reject(new Error("failed to start test server"));
      }
    });
  });
}
