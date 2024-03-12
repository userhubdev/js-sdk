// Code generated. DO NOT EDIT.

export const API_BASE_URL = "https://api.userhub.com";
export const USER_AGENT = "UserHub-JavaScript/0.5.1";
export const VERSION = "0.5.1";

export const AUTH_HEADER = "Authorization";
export const API_KEY_HEADER = "UserHub-Api-Key";
export const ADMIN_KEY_PREFIX = "sk_";
export const USER_KEY_PREFIX = "pk_";

export const WEBHOOK_ACTION_HEADER = "UserHub-Action";
export const WEBHOOK_AGENT_HEADER = "Webhook-Agent";
export const WEBHOOK_MAX_REQUEST_SIZE_BYTES = 5242880;
export const WEBHOOK_MAX_TIMESTAMP_DIFF = 300000;
export const WEBHOOK_SIGNATURE_HEADER = "UserHub-Signature";
export const WEBHOOK_TIMESTAMP_HEADER = "UserHub-Timestamp";
export const WEBHOOK_SERVER_ERROR_JSON =
  '{"message":"Webhook server error","code":"INTERNAL"}';

export const SUMMARIZE_BODY_LENGTH = 20;

export const CONNECT_TIMEOUT_MS = 30000;
export const CONNECTION_IDLE_TIMEOUT_MS = 30000;
export const MAX_BODY_SIZE_BYTES = 5242880;
export const MAX_CONNECTIONS = 100;
export const MAX_IDLE_CONNECTIONS = 5;
export const READ_TIMEOUT_MS = 30000;
export const REQUEST_TIMEOUT_MS = 60000;
export const RETRY_MAX_ATTEMPTS = 5;
export const RETRY_MAX_SLEEP_MS = 20000;
export const RETRY_MULTIPLIER_MS = 100;
export const RETRY_OVERHEAD_MS = 100;
export const TLS_TIMEOUT_MS = 10000;
export const WRITE_TIMEOUT_MS = 30000;

export const RETRY_ERROR_CODES = [
  "ECONNRESET",
  "ECONNREFUSED",
  "ENOTFOUND",
  "ENETDOWN",
  "ENETUNREACH",
  "EHOSTDOWN",
  "EHOSTUNREACH",
  "EPIPE",
];

export const IGNORE_ERROR_CODES = ["ERR_INVALID_URL"];
