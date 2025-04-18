// Code generated. DO NOT EDIT.

/**
 * Empty response.
 */
export interface EmptyResponse {}

/**
 * The field view options..
 */
export interface FieldView {
  /**
   * Whether the field is included in the view.
   *
   * THis overrides the message default.
   */
  include?: string;
  /**
   * Whether the field is excluded from the view.
   *
   * THis overrides the message default.
   */
  exclude?: string;
  /**
   * The referenced type's view.
   */
  type?: string;
}

/**
 * The message view options.
 */
export interface MessageView {
  /**
   * Whether all fields are included in the view by default.
   */
  include?: string;
  /**
   * Whether all fields are excluded from the view by default.
   */
  exclude?: string;
}

/**
 * Operations metadata.
 */
export interface OperationInfo {
  /**
   * The message name of the primary return type for this operation.
   */
  responseType?: string;
}

/**
 * The full API error.
 */
export interface Status {
  /**
   * The general error code (e.g. `INVALID_ARGUMENT`).
   */
  code?: string;
  /**
   * A developer-facing error message.
   */
  message?: string;
  /**
   * A reason code for the error (e.g. `USER_PENDING_DELETION`).
   */
  reason?: string;
  /**
   * The parameter path related to the error (e.g. `member.userId`).
   */
  param?: string;
  /**
   * Additional metadata related to the error.
   */
  metadata?: Record<string, string>;
  /**
   * A user-facing error message.
   */
  localeMessage?: string;
}

/**
 * The API error with the fields that already exist
 * in Status removed.
 */
export interface StatusDetails {
  /**
   * A reason code for the error (e.g. `PENDING_DELETION`).
   */
  reason?: string;
  /**
   * The parameter path related to the error (e.g. `member.userId`).
   */
  param?: string;
  /**
   * Additional metadata related to the error.
   */
  metadata?: Record<string, string>;
  /**
   * A user-facing error message.
   */
  localeMessage?: string;
}
