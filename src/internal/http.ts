import { UserHubError } from "../error";
import * as constants from "./constants";
import { encodePath, isNetworkError } from "./util";

export type HttpMethod = "GET" | "POST" | "PATCH" | "DELETE";

export class TransportRequest {
  public readonly call: string;
  public readonly method: HttpMethod;
  public readonly path: string;
  public readonly headers: Headers;
  public readonly query: Record<string, string>;
  public body: unknown;
  public attempt: number;
  public idempotent: boolean;
  public signal?: AbortSignal | null;

  constructor(call: string, method: HttpMethod, path: string) {
    this.call = call;
    this.method = method;
    this.path = path;
    this.headers = new Headers();
    this.query = {};
    this.body = undefined;
    this.attempt = 0;
    this.idempotent = false;
  }

  public setQuery(name: string, value: unknown) {
    if (value || typeof value === "number") {
      let v;

      if (typeof value === "boolean") {
        v = value ? "true" : "false";
      } else if (value instanceof Date) {
        v = value.toISOString();
      } else {
        v = String(value);
      }

      this.query[name] = v;
    }
  }

  private shouldRetry(ex: unknown): boolean {
    let cause: Error | undefined;

    if (this.signal && this.signal.aborted) {
      return false;
    }

    if (ex instanceof UserHubError) {
      const sc = ex.statusCode || 0;
      if (ex.statusCode === 429) return true;
      if (this.idempotent && sc >= 500 && sc <= 599) return true;
      cause = ex.cause;
    }

    if (isNetworkError(ex)) {
      return true;
    }

    if (cause) {
      return this.shouldRetry(cause);
    }

    return false;
  }

  public retry(ex: unknown): number | null {
    return this.attempt <= constants.RETRY_MAX_ATTEMPTS && this.shouldRetry(ex)
      ? Math.min(
          Math.pow(2, this.attempt - 1) * constants.RETRY_MULTIPLIER_MS,
          constants.RETRY_MAX_SLEEP_MS,
        )
      : null;
  }
}

export class TransportResponse {
  public readonly request: TransportRequest;
  public readonly statusCode: number;
  public readonly headers: Headers;
  public readonly body: unknown;

  constructor(
    request: TransportRequest,
    statusCode: number,
    headers: Headers,
    body: unknown,
  ) {
    this.request = request;
    this.statusCode = statusCode;
    this.headers = headers;
    this.body = body;
  }
}

export interface BuildInput {
  call: string;
  method: HttpMethod;
  args: any[];
  path: string;
  query?: string[];
  idempotent?: boolean;
}

export function build(input: BuildInput): TransportRequest {
  let body: any;
  let idx = 0;

  const path = input.path.replace(/\{(\w+)}/g, (src, dst) => {
    if (!body) {
      const arg = input.args[idx++];

      if (arg) {
        switch (typeof arg) {
          case "string":
            return encodePath(arg);
          case "object":
            body = { ...arg };
        }
      }

      if (!body) body = {};
    }

    const value = body[dst];
    if (value) {
      delete body[dst];
      return encodePath(value);
    }

    throw new UserHubError({
      message: `The "${dst}" argument is required`,
      call: input.call,
    });
  });

  const req = new TransportRequest(input.call, input.method, path);

  if (!body && input.args[idx] && typeof input.args[idx] === "object") {
    body = { ...input.args[idx] };
  }

  if (body) {
    if (input.query) {
      for (const name of input.query) {
        const value = body[name];
        delete body[name];

        if (value !== undefined && value !== null) {
          req.setQuery(name, value);
        }
      }
    }

    if (body.signal) req.signal = body.signal;
    delete body.signal;
  }

  if (req.method === "POST" || req.method === "PATCH") {
    req.body = body;
  }

  if (input.idempotent) req.idempotent = input.idempotent;

  return req;
}
