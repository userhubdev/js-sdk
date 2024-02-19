// Code generated. DO NOT EDIT.

/**
 * Empty response.
 */
export interface EmptyResponse {}

/**
 * Operations metadata.
 */
export interface OperationInfo {
  /**
   * The message name of the primary return type for this operation.
   */
  responseType?: string | null;
}

/**
 * The full API error.
 */
export interface Status {
  /**
   * The general error code (e.g. `INVALID_ARGUMENT`).
   */
  code?: string | null;
  /**
   * A developer-facing error message.
   */
  message?: string | null;
  /**
   * A reason code for the error (e.g. `USER_PENDING_DELETION`).
   */
  reason?: string | null;
  /**
   * The parameter path related to the error (e.g. `member.userId`).
   */
  param?: string | null;
  /**
   * Additional metadata related to the error.
   */
  metadata: Record<string, string>;
}

/**
 * The API error with the fields that already exist
 * in Status removed.
 */
export interface StatusDetails {
  /**
   * A reason code for the error (e.g. `PENDING_DELETION`).
   */
  reason?: string | null;
  /**
   * The parameter path related to the error (e.g. `member.userId`).
   */
  param?: string | null;
  /**
   * Additional metadata related to the error.
   */
  metadata: Record<string, string>;
}
