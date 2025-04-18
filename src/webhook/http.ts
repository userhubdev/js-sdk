import { UserHubError } from "../error.ts";
import * as constants from "../internal/constants.ts";
import { jsonReviser, summarizeBody } from "../internal/util.ts";

export interface WebhookRequestOptions {
  headers?:
    | Headers
    | {
        [key: string]: string | string[] | null | undefined;
      }
    | null;
  body?: ArrayBuffer | Uint8Array | string | null;
}

export class WebhookRequest {
  public headers: Headers;
  public body: Uint8Array;

  constructor({ headers, body }: WebhookRequestOptions) {
    if (!headers) {
      this.headers = new Headers();
    } else if (headers instanceof Headers) {
      this.headers = headers;
    } else {
      this.headers = new Headers();

      for (const [name, value] of Object.entries(headers)) {
        if (!name || !value) continue;

        if (Array.isArray(value)) {
          for (const v of value) {
            this.headers.append(name, v);
          }
        } else {
          this.headers.append(name, value);
        }
      }
    }

    if (!body) {
      this.body = new Uint8Array();
    } else if (body instanceof ArrayBuffer) {
      this.body = new Uint8Array(body);
    } else if (typeof body === "string") {
      this.body = new TextEncoder().encode(body);
    } else {
      this.body = body;
    }
  }

  public getAction(): string {
    const action = getHeader(this.headers, constants.WEBHOOK_ACTION_HEADER);
    if (!action) {
      throw new UserHubError(
        `${constants.WEBHOOK_ACTION_HEADER} header is missing`,
      );
    }
    return action;
  }

  public getTimestamp(): string {
    const timestamp = getHeader(
      this.headers,
      constants.WEBHOOK_TIMESTAMP_HEADER,
    );
    if (!timestamp) {
      throw new UserHubError(
        `${constants.WEBHOOK_TIMESTAMP_HEADER} header is missing`,
      );
    }
    return timestamp;
  }

  public getSignatures(): string[] {
    const signatures = getHeaders(
      this.headers,
      constants.WEBHOOK_SIGNATURE_HEADER,
    );
    if (!signatures.length) {
      if (this.headers.get(constants.WEBHOOK_SIGNATURE_HEADER)) {
        throw new UserHubError(
          `${constants.WEBHOOK_SIGNATURE_HEADER} header normalized to nothing`,
        );
      } else {
        throw new UserHubError(
          `${constants.WEBHOOK_SIGNATURE_HEADER} header is missing`,
        );
      }
    }
    return signatures;
  }
}

export interface WebhookResponseOptions {
  statusCode?: number;
  headers?: Headers;
  body?: string;
}

export class WebhookResponse {
  public statusCode: number;
  public headers: Headers;
  public body: string;

  constructor({ statusCode, headers, body }: WebhookResponseOptions) {
    this.statusCode = statusCode || 200;
    this.headers = headers || new Headers();
    this.body = body || "{}";
  }
}

export function getHeader(headers: Headers, name: string): string {
  let value = headers.get(name);
  if (!value) return "";

  const idx = value.indexOf(",");
  if (idx >= 0) {
    value = value.slice(0, idx);
  }
  return value.trim();
}

export function getHeaders(headers: Headers, name: string): string[] {
  const value = headers.get(name);
  if (!value) return [];

  return value
    .split(",")
    .map((v) => v.trim())
    .filter(Boolean);
}

export function jsonDecode(value: ArrayBuffer | ArrayBufferView): any {
  let body = "";
  try {
    body = new TextDecoder().decode(value);

    return JSON.parse(body, jsonReviser);
  } catch {
    throw new UserHubError(
      `Failed to decode error request${summarizeBody(body)}`,
    );
  }
}
