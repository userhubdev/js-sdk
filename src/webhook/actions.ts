// Code generated. DO NOT EDIT.
import type * as connectionsv1 from "../connectionsv1.ts";
import type * as eventsv1 from "../eventsv1.ts";
import { BaseWebhook } from "./base.ts";
import { WebhookRequest, WebhookResponse, jsonDecode } from "./http.ts";

/**
 * Webhook is a parsing and dispatch helper for UserHub webhooks.
 */
export class Webhook extends BaseWebhook {
  /**
   * Registers a handler for the `challenge` action.
   */
  public onChallenge(
    handler?: (
      r: connectionsv1.Challenge,
    ) => connectionsv1.Challenge | Promise<connectionsv1.Challenge>,
  ): this {
    return this.onAction(
      "challenge",
      handler
        ? async (r: WebhookRequest): Promise<WebhookResponse> =>
            this.createResponse(await handler(jsonDecode(r.body)))
        : undefined,
    );
  }

  /**
   * Registers a handler for the `events.handle` action.
   */
  public onEvent(handler?: (r: eventsv1.Event) => void | Promise<void>): this {
    return this.onAction(
      "events.handle",
      handler
        ? async (r: WebhookRequest): Promise<WebhookResponse> =>
            this.createResponse(await handler(jsonDecode(r.body)))
        : undefined,
    );
  }

  /**
   * Registers a handler for the `users.list` action.
   */
  public onListUsers(
    handler?: (
      r: connectionsv1.ListCustomUsersRequest,
    ) =>
      | connectionsv1.ListCustomUsersResponse
      | Promise<connectionsv1.ListCustomUsersResponse>,
  ): this {
    return this.onAction(
      "users.list",
      handler
        ? async (r: WebhookRequest): Promise<WebhookResponse> =>
            this.createResponse(await handler(jsonDecode(r.body)))
        : undefined,
    );
  }

  /**
   * Registers a handler for the `users.create` action.
   */
  public onCreateUser(
    handler?: (
      r: connectionsv1.CustomUser,
    ) => connectionsv1.CustomUser | Promise<connectionsv1.CustomUser>,
  ): this {
    return this.onAction(
      "users.create",
      handler
        ? async (r: WebhookRequest): Promise<WebhookResponse> =>
            this.createResponse(await handler(jsonDecode(r.body)))
        : undefined,
    );
  }

  /**
   * Registers a handler for the `users.get` action.
   */
  public onGetUser(
    handler?: (
      r: connectionsv1.GetCustomUserRequest,
    ) => connectionsv1.CustomUser | Promise<connectionsv1.CustomUser>,
  ): this {
    return this.onAction(
      "users.get",
      handler
        ? async (r: WebhookRequest): Promise<WebhookResponse> =>
            this.createResponse(await handler(jsonDecode(r.body)))
        : undefined,
    );
  }

  /**
   * Registers a handler for the `users.update` action.
   */
  public onUpdateUser(
    handler?: (
      r: connectionsv1.CustomUser,
    ) => connectionsv1.CustomUser | Promise<connectionsv1.CustomUser>,
  ): this {
    return this.onAction(
      "users.update",
      handler
        ? async (r: WebhookRequest): Promise<WebhookResponse> =>
            this.createResponse(await handler(jsonDecode(r.body)))
        : undefined,
    );
  }

  /**
   * Registers a handler for the `users.delete` action.
   */
  public onDeleteUser(
    handler?: (
      r: connectionsv1.DeleteCustomUserRequest,
    ) => void | Promise<void>,
  ): this {
    return this.onAction(
      "users.delete",
      handler
        ? async (r: WebhookRequest): Promise<WebhookResponse> =>
            this.createResponse(await handler(jsonDecode(r.body)))
        : undefined,
    );
  }
}
