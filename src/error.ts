import type { Status } from "./apiv1";
import { Code } from "./code";

interface BaseOptions {
  apiCode?: Code | null;
  reason?: string | null;
  param?: string | null;
  metadata?: Record<string, string> | null;
  call?: string | null;
  cause?: unknown;
  statusCode?: number;
}

interface BaseOptionsWithMessage extends BaseOptions {
  message: string;
  status?: Status | null;
}

interface BaseOptionsWithStatus extends BaseOptions {
  message?: string;
  status: Status;
}

export type UserHubErrorOptions =
  | BaseOptionsWithMessage
  | BaseOptionsWithStatus;

export class UserHubError extends Error {
  private readonly _apiCode?: Code;
  private readonly _message: string;
  private readonly _reason?: string;
  private readonly _param?: string;
  private readonly _metadata?: Record<string, string>;
  private readonly _call?: string;
  private readonly _cause?: Error;
  private readonly _statusCode?: number;

  constructor(init: string | UserHubErrorOptions) {
    const opts: UserHubErrorOptions =
      typeof init === "string" ? { message: init } : { ...init };

    const status = opts.status;
    if (status) {
      if (!opts.apiCode && status.code) opts.apiCode = status.code as Code;
      if (!opts.message && status.message) opts.message = status.message;
      if (!opts.reason && status.reason) opts.reason = status.reason;
      if (!opts.metadata && status.metadata) opts.metadata = status.metadata;
    }

    const hasApiCode = opts.apiCode && opts.apiCode != Code.Unknown;

    const apiMessage = opts.message || opts?.status?.message || "<no message>";

    const parts: string[] = [];

    if (opts.call) parts.push(`call: ${opts.call}`);
    if (hasApiCode) parts.push(`apiCode: ${opts.apiCode}`);
    if (opts.reason) parts.push(`reason: ${opts.reason}`);
    if (opts.param) parts.push(`param: ${opts.param}`);

    if (!hasApiCode && opts.statusCode) {
      parts.push(`statusCode: ${opts.statusCode}`);
    }

    let message = parts.length
      ? `${apiMessage} (${parts.join(", ")})`
      : apiMessage;

    if (opts.cause) message = `${message}: ${opts.cause}`;

    super(message);

    this._message = apiMessage;

    if (opts.apiCode) this._apiCode = opts.apiCode;
    if (opts.reason) this._reason = opts.reason;
    if (opts.param) this._param = opts.param;
    if (opts.metadata) this._metadata = opts.metadata;
    if (opts.cause && opts.cause instanceof Error) {
      this._cause = opts.cause;
      this.stack = opts.cause.stack;
    }
    if (opts.statusCode) this._statusCode = opts.statusCode;
  }

  public get apiCode(): Code {
    return this._apiCode || Code.Unknown;
  }

  public get apiMessage(): string {
    return this._message;
  }

  public get reason(): string {
    return this._reason || "";
  }

  public get param(): string {
    return this._param || "";
  }

  public get metadata(): Record<string, string> {
    return { ...this._metadata };
  }

  public get call(): string {
    return this._call || "";
  }

  public get cause(): Error | undefined {
    return this._cause;
  }

  public get statusCode(): number | null {
    return this._statusCode || null;
  }

  public toJSON() {
    return {
      message: this.apiMessage,
      code: String(this.apiCode),
    };
  }
}
