import type { Status } from "../apiv1";
import { Code } from "../code";
import { UserHubError, UserHubErrorOptions } from "../error";
import * as constants from "./constants";
import { TransportRequest, TransportResponse } from "./http";
import type { Transport } from "./transport";
import { jsonReviser, sleep, summarizeBody } from "./util";

export interface HttpTransportOptions {
  baseUrl?: string;
  headers: Headers;
}

export interface FetchInput {
  url: URL;
  init: RequestInit;
}

export class HttpTransport implements Transport {
  private readonly baseUrl: string;
  private readonly headers: Headers;

  constructor(options: HttpTransportOptions) {
    this.baseUrl = options.baseUrl || constants.API_BASE_URL;
    this.headers = options.headers;

    if (constants.IS_SERVER_SIDE) {
      this.headers.set("user-agent", constants.USER_AGENT);
    }
  }

  private setupExecute(req: TransportRequest): FetchInput {
    const url = new URL(this.baseUrl + req.path);

    for (const [name, value] of Object.entries(req.query)) {
      url.searchParams.append(name, value);
    }

    const headers = new Headers();
    this.headers.forEach((value, name) => {
      headers.set(name, value);
    });
    req.headers.forEach((value, name) => {
      headers.set(name, value);
    });

    headers.set("accept", "application/json");
    if (req.body) {
      headers.set("content-type", "application/json");
    }

    const body = req.body ? JSON.stringify(req.body) : null;

    return {
      url,
      init: {
        method: req.method,
        body,
        headers,
        cache: "no-cache",
        redirect: "error",
        signal: req.signal,
      },
    };
  }

  private async buildResponse(
    req: TransportRequest,
    res: Response,
  ): Promise<TransportResponse> {
    let text: string | undefined;
    try {
      text = await res.text();
    } catch (e) {
      throw new UserHubError({
        ...errorArgs(req, res),
        message: "Failed to read body",
        cause: e,
      });
    }

    let body, parseError: unknown;
    try {
      body = JSON.parse(text, jsonReviser);
    } catch (e) {
      parseError = e;
    }

    if (!res.ok) {
      const contentType = res.headers.get("content-type") || "";

      if (contentType.includes("json") && parseError) {
        throw new UserHubError({
          ...errorArgs(req, res),
          message: `Failed to decode error response${summarizeBody(text)}`,
        });
      }

      if (body) {
        throw new UserHubError({
          ...errorArgs(req, res),
          status: body as Status,
        });
      }

      if (res.status === 429) {
        throw new UserHubError({
          ...errorArgs(req, res),
          message: "API call rate limited",
          apiCode: Code.ResourceExhausted,
        });
      }

      throw new UserHubError({
        ...errorArgs(req, res),
        message: `API returned non-JSON error${summarizeBody(text)}`,
      });
    }

    try {
      body = JSON.parse(text, jsonReviser);
    } catch (e) {
      throw new UserHubError({
        ...errorArgs(req, res),
        message: "Failed to decode error response",
        cause: e,
      });
    }

    return new TransportResponse(req, res.status, res.headers, body);
  }

  async execute(req: TransportRequest): Promise<TransportResponse> {
    const input = this.setupExecute(req);

    while (true) {
      req.attempt++;

      if (req.signal && req.signal.aborted) {
        throw new UserHubError({
          ...errorArgs(req),
          message: "Signal aborted",
          cause: req.signal.reason,
        });
      }

      let res: Response | undefined;

      try {
        try {
          res = await fetch(input.url, input.init);
        } catch (e2) {
          throw new UserHubError({
            ...errorArgs(req, res),
            message: "Failed to execute request",
            cause: e2,
          });
        }

        return await this.buildResponse(req, res);
      } catch (e) {
        const timeout = req.retry(e);
        if (timeout) {
          await sleep(timeout, req.signal);

          if (!req.signal || !req.signal.aborted) {
            continue;
          }
        }

        throw e;
      }
    }
  }
}

function errorArgs(
  req?: TransportRequest,
  res?: Response,
): Partial<UserHubErrorOptions> {
  const opts: Partial<UserHubErrorOptions> = {};

  if (req) {
    opts.call = req.call;
  }
  if (res) {
    opts.statusCode = res.status;
  }

  return opts;
}
