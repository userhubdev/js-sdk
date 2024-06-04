import { Code } from "../code.ts";
import { UserHubError } from "../error.ts";

/**
 * WebhookUserNotFound is an error which can be used to indicate a user was
 * not found in the onGetUser, onUpdateUser, and onDeleteUser methods.
 */
export class WebhookUserNotFound extends UserHubError {
  constructor() {
    super({
      message: "User not found",
      apiCode: Code.NotFound,
    });
  }
}
