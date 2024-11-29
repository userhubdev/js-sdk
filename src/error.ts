import type { Status } from "./apiv1.ts";
import { Code } from "./code.ts";

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

interface ToJSON {
  message: string;
  code: string;
}

export type UserHubErrorOptions =
  | BaseOptionsWithMessage
  | BaseOptionsWithStatus;

export class UserHubError extends Error {
  public readonly apiCode: Code;
  public readonly apiMessage: string;
  public readonly reason?: string;
  public readonly param?: string;
  public readonly metadata: Record<string, string>;
  public readonly call?: string;
  // @ts-ignore
  public readonly cause?: Error;
  public readonly statusCode?: number;

  constructor(init: string | UserHubErrorOptions) {
    const opts: UserHubErrorOptions =
      typeof init === "string" ? { message: init } : { ...init };

    const status = opts.status;
    if (status) {
      if (!opts.apiCode && status.code) opts.apiCode = status.code as Code;
      if (!opts.message && status.message) opts.message = status.message;
      if (!opts.param && status.param) opts.param = status.param;
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

    if (opts.cause && opts.cause instanceof Error) {
      message = `${message}: ${opts.cause.message}`;
    }

    super(message);

    this.apiMessage = apiMessage;
    this.apiCode = opts.apiCode || Code.Unknown;
    if (opts.reason) this.reason = opts.reason;
    if (opts.param) this.param = opts.param;
    this.metadata = opts.metadata || {};
    if (opts.call) this.call = opts.call;
    if (opts.cause && opts.cause instanceof Error) {
      this.cause = opts.cause;
      this.stack = opts.cause.stack;
    }
    if (opts.statusCode) this.statusCode = opts.statusCode;
  }

  public toJSON(): ToJSON {
    return {
      message: this.apiMessage,
      code: String(this.apiCode),
    };
  }
}
