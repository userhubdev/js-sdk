// Code generated. DO NOT EDIT.

/**
 * A challenge issued by webhooks to validate the
 * endpoint is working correctly.
 */
export interface Challenge {
  /**
   * The challenge string.
   */
  challenge: string;
}

/**
 * The user object for the Custom Users connection.
 */
export interface CustomUser {
  /**
   * The external identifier for the user.
   */
  id: string;
  /**
   * The human-readable display name of the user.
   *
   * The maximum length is 200 characters.
   */
  displayName?: string;
  /**
   * The email address of the user.
   *
   * The maximum length is 320 characters.
   */
  email?: string;
  /**
   * Whether the user's email address has been verified.
   */
  emailVerified?: boolean;
  /**
   * The E164 phone number for the user (e.g. `+12125550123`).
   */
  phoneNumber?: string;
  /**
   * Whether the user's phone number has been verified.
   */
  phoneNumberVerified?: boolean;
  /**
   * The photo/avatar URL of the user.
   *
   * The maximum length is 2000 characters.
   */
  imageUrl?: string;
  /**
   * Whether the user is disabled.
   */
  disabled?: boolean;
}

/**
 * Request message for deleting a custom user.
 */
export interface DeleteCustomUserRequest {
  /**
   * The external identifier for the user.
   */
  id: string;
}

/**
 * The connection error response.
 */
export interface ErrorResponse {
  /**
   * The error code (e.g. `INVALID_ARGUMENT`).
   */
  code: string;
  /**
   * A user-facing error message.
   */
  message: string;
}

/**
 * Request message for getting a custom user.
 */
export interface GetCustomUserRequest {
  /**
   * The external identifier for the user.
   */
  id: string;
}

/**
 * Request message for listing custom users.
 */
export interface ListCustomUsersRequest {
  /**
   * The maximum number of users to return. The webhook is allowed to
   * return fewer than this value, but it should never return more.
   */
  pageSize: number;
  /**
   * A page token, this is from the response of the previous list
   * request.
   *
   * This should be used to determine the next page of results.
   */
  pageToken?: string;
}

/**
 * Response message for listing custom users.
 */
export interface ListCustomUsersResponse {
  /**
   * The list of users.
   */
  users: CustomUser[];
  /**
   * A token the webhook can set to indicate it has more results.
   *
   * This can be a page number, offset number, timestamp, or any value
   * the webhook handler wants to use for pagination.
   *
   * It must be encoded as a string.
   */
  nextPageToken?: string;
}
