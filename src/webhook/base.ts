import * as constants from "../internal/constants.ts";
import { Code, UserHubError } from "../mod.ts";
import {
  WebhookRequest,
  type WebhookRequestOptions,
  WebhookResponse,
} from "./http.ts";

const dot = new TextEncoder().encode(".");

export interface WebhookOptions {
  signingSecret: string;
  onError?: (e: unknown) => void;
}

export type HandleOptions = WebhookRequestOptions;

export type Handler =
  | ((r: WebhookRequest) => Promise<WebhookResponse>)
  | ((r: WebhookRequest) => WebhookResponse);

export class BaseWebhook {
  private _signingSecret?: string;
  private _key: CryptoKey | undefined;
  private _handlers: Record<string, Handler>;
  private _onError?: (e: unknown) => void;
  private _crypto?: Crypto;

  constructor(
    signingSecret: string,
    options?: Omit<WebhookOptions, "signingSecret">,
  );
  constructor(options: WebhookOptions);
  constructor(...args: any[]) {
    this._handlers = {};

    let signingSecret = "";
    let options: Partial<WebhookOptions> | undefined;

    if (args.length > 0 && args[0]) {
      switch (typeof args[0]) {
        case "string":
          signingSecret = args[0];
          break;
        case "object":
          options = args[0];
          break;
      }
    }
    if (args.length > 1 && args[1] && typeof args[1] === "object") {
      options = args[1];
    }

    if (!options) {
      options = {};
    }
    if (!signingSecret && options.signingSecret) {
      signingSecret = options.signingSecret;
    }

    this._onError = options.onError || defaultOnError;
    this._signingSecret = signingSecret;
  }

  /**
   * Executes a handler based on specified `WebhookRequest`.
   */
  public async handleAction(req: WebhookRequest): Promise<WebhookResponse> {
    try {
      await this.verify(req);

      const action = req.getAction();

      let handler = this._handlers[action];
      if (!handler) {
        if (action === "challenge") {
          return this._challengeHandler(req);
        }
        handler = this._handlers[""];
        if (!handler) {
          return this._unimplementedHandler(req);
        }
      }

      return await handler(req);
    } catch (e) {
      return this.createResponse(e);
    }
  }

  /**
   * Executes a handler based on specified headers/body.
   */
  public async handle(opts: HandleOptions): Promise<WebhookResponse> {
    return await this.handleAction(new WebhookRequest(opts));
  }

  /**
   * Executes a handler based on specified Web API `Request` and
   * returns a Web API `Response`.
   */
  public async handleFromWeb(req: Request): Promise<Response> {
    let r: WebhookResponse;
    try {
      r = await this.handleAction(
        new WebhookRequest({
          headers: req.headers,
          body: await req.arrayBuffer(),
        }),
      );
    } catch (e) {
      r = this.createResponse(e);
    }

    return new Response(r.body, {
      status: r.statusCode,
      headers: r.headers,
    });
  }

  /**
   * Registers a handler for the specified action.
   */
  public onAction(name: string, handler?: Handler | null): this {
    if (handler) {
      this._handlers[name] = handler;
    } else {
      delete this._handlers[name];
    }
    return this;
  }

  /**
   * Registers a fallback action handler.
   */
  public onDefault(handler?: Handler | null): this {
    return this.onAction("", handler);
  }

  /**
   * Ensures the body matches the specified signature/timestamp and throws
   * an error if verification fails.
   */
  public async verify(req: WebhookRequest): Promise<void> {
    if (!this._crypto) {
      this._crypto = await loadCrypto();
    }
    if (!this._key) {
      if (!this._signingSecret) {
        throw new UserHubError("Signing secret is required");
      }

      this._key = await this._crypto.subtle.importKey(
        "raw",
        new TextEncoder().encode(this._signingSecret),
        {
          name: "HMAC",
          hash: { name: "SHA-256" },
        },
        false,
        ["verify"],
      );

      delete this._signingSecret;
    }
    if (!req) {
      throw new UserHubError("Request is required");
    }
    if (!req.headers || req.headers.entries().next().done) {
      throw new UserHubError("Headers are required");
    }
    if (!req.body || !req.body.byteLength) {
      throw new UserHubError("Body is required");
    }

    req.getAction();
    const timestamp = req.getTimestamp();
    const signatures = req.getSignatures();

    const unixTime = parseInt(timestamp, 10) * 1000;
    const diff = Date.now() - unixTime;
    if (isNaN(diff)) {
      throw new UserHubError(`Timestamp is invalid: ${timestamp}`);
    }
    if (diff > constants.WEBHOOK_MAX_TIMESTAMP_DIFF) {
      throw new UserHubError(`Timestamp is too far in the past: ${timestamp}`);
    }
    if (diff < -constants.WEBHOOK_MAX_TIMESTAMP_DIFF) {
      throw new UserHubError(
        `Timestamp is too far in the future: ${timestamp}`,
      );
    }

    const encoder = new TextEncoder();

    const data = concatArrays(encoder.encode(timestamp), dot, req.body);

    for (const signature of signatures) {
      let array: Uint8Array;
      try {
        array = decodeHex(signature);
      } catch {
        continue;
      }

      const valid = await this._crypto.subtle.verify(
        "hmac",
        this._key,
        array,
        data,
      );
      if (valid) {
        return;
      }
    }

    throw new UserHubError("Signatures do not match");
  }

  private _tryError(error: Error) {
    if (this._onError) {
      this._onError(error);
    }
  }

  /**
   * Creates a response from an object that can be encoded
   * using JSON.stringify or an Error.
   */
  public createResponse(value: any): WebhookResponse {
    let statusCode = 200;
    const headers = new Headers();
    let body: string;

    headers.set("content-type", "application/json");
    headers.set(constants.WEBHOOK_AGENT_HEADER, constants.USER_AGENT);

    if (!value) {
      body = "{}";
    } else if (value instanceof ArrayBuffer || value instanceof Uint8Array) {
      body = new TextDecoder().decode(value);
    } else if (value instanceof UserHubError) {
      this._tryError(value);
      statusCode = webhookStatusCode(value.apiCode);
      body = JSON.stringify(value);
    } else if (value instanceof Error) {
      this._tryError(value);
      statusCode = 500;
      body = constants.WEBHOOK_SERVER_ERROR_JSON;
    } else {
      body = JSON.stringify(value);
    }

    return new WebhookResponse({
      statusCode,
      headers,
      body,
    });
  }

  private _challengeHandler(req: WebhookRequest): WebhookResponse {
    return this.createResponse(req.body);
  }

  private _unimplementedHandler(req: WebhookRequest): Promise<WebhookResponse> {
    const name = req.getAction();

    throw new UserHubError({
      message: `Handler not implemented: ${name}`,
      apiCode: Code.Unimplemented,
    });
  }
}

export async function loadCrypto(): Promise<Crypto> {
  if (typeof globalThis.crypto === "object") {
    return globalThis.crypto;
  } else {
    try {
      return (await import("crypto")).webcrypto as Crypto;
    } catch (e) {
      throw new UserHubError({
        message: `The Web Crypto API is not available`,
        apiCode: Code.Unimplemented,
        cause: e,
      });
    }
  }
}

export function decodeHex(value: string): Uint8Array {
  if (value.length % 2 !== 0) {
    throw new Error("Invalid hex value");
  }

  const array = new Uint8Array(value.length / 2);

  for (let i = 0; i < value.length; i += 2) {
    array[i / 2] = parseInt(value.substring(i, i + 2), 16);
  }

  return array;
}

export function concatArrays(...arrays: Uint8Array[]): Uint8Array {
  let byteLength = 0;
  let offset = 0;

  for (const array of arrays) {
    byteLength += array.byteLength;
  }

  const data = new Uint8Array(byteLength);

  for (const array of arrays) {
    data.set(array, offset);
    offset += array.byteLength;
  }

  return data;
}

export function webhookStatusCode(code: Code): number {
  switch (code) {
    case Code.OK:
      return 200;
    case Code.AlreadyExists:
    case Code.FailedPrecondition:
    case Code.InvalidArgument:
      return 400;
    case Code.NotFound:
      return 404;
    case Code.ResourceExhausted:
      return 429;
    case Code.Unimplemented:
      return 501;
    default:
      return 500;
  }
}

function defaultOnError(e: unknown) {
  if (e) {
    console.error("UserHub webhook:", e);
  }
}
