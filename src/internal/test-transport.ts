import { HttpMethod, TransportRequest, TransportResponse } from "./http.ts";
import type { Transport } from "./transport.ts";

export class TestTransport implements Transport {
  public req?: TransportRequest;
  public readonly res: TransportResponse;

  constructor({
    call = "test",
    method = "GET",
    path = "/test",
    request,
    statusCode = 200,
    headers,
    body = {},
  }: {
    call: string;
    method?: HttpMethod;
    path?: string;
    request?: TransportRequest;
    statusCode: number;
    headers?: Headers;
    body?: unknown;
  }) {
    if (!request) request = new TransportRequest(call, method, path);
    if (!headers) headers = new Headers();

    this.res = new TransportResponse(request, statusCode, headers, body);
  }

  execute(req: TransportRequest): Promise<TransportResponse> {
    this.req = req;
    return Promise.resolve(this.res);
  }
}
