// Code generated. DO NOT EDIT.
import type * as apiv1 from "./apiv1.ts";
import { build } from "./internal/http.ts";
import { Transport } from "./internal/transport.ts";
import type { RequestOptions } from "./request.ts";
import type * as userv1 from "./userv1.ts";

export class Client {
  private readonly transport: Transport;

  constructor(transport: Transport) {
    this.transport = transport;
  }

  /**
   * The flow methods.
   */
  public get flows(): Flows {
    return new Flows(this.transport);
  }

  /**
   * The invoice methods.
   */
  public get invoices(): Invoices {
    return new Invoices(this.transport);
  }

  /**
   * The organization methods.
   */
  public get organizations(): Organizations {
    return new Organizations(this.transport);
  }

  /**
   * The Portal session.
   */
  public get session(): Session {
    return new Session(this.transport);
  }
}

/**
 * The flow methods.
 */
class Flows {
  private readonly transport: Transport;

  constructor(transport: Transport) {
    this.transport = transport;
  }

  /**
   * Lists flows.
   */
  async list(input?: FlowListInput): Promise<userv1.ListFlowsResponse>;
  async list(...args: any[]): Promise<userv1.ListFlowsResponse> {
    const req = build({
      call: "user.flows.list",
      method: "GET",
      path: "/user/v1/flows",
      query: [
        "organizationId",
        "type",
        "active",
        "creator",
        "pageSize",
        "pageToken",
        "orderBy",
      ],
      idempotent: true,
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as userv1.ListFlowsResponse;
  }

  /**
   * Creates a join organization flow.
   *
   * This invites a person to join an organization.
   */
  async createJoinOrganization(
    input: FlowCreateJoinOrganizationInput,
  ): Promise<userv1.Flow>;
  async createJoinOrganization(...args: any[]): Promise<userv1.Flow> {
    const req = build({
      call: "user.flows.createJoinOrganization",
      method: "POST",
      path: "/user/v1/flows:createJoinOrganization",
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as userv1.Flow;
  }

  /**
   * Creates a signup flow.
   *
   * This invites a person to join the app.
   */
  async createSignup(input: FlowCreateSignupInput): Promise<userv1.Flow>;
  async createSignup(...args: any[]): Promise<userv1.Flow> {
    const req = build({
      call: "user.flows.createSignup",
      method: "POST",
      path: "/user/v1/flows:createSignup",
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as userv1.Flow;
  }

  /**
   * Retrieves specified flow.
   */
  async get(
    flowId: string,
    input?: Omit<FlowGetInput, "flowId">,
  ): Promise<userv1.Flow>;
  async get(input: FlowGetInput): Promise<userv1.Flow>;
  async get(...args: any[]): Promise<userv1.Flow> {
    const req = build({
      call: "user.flows.get",
      method: "GET",
      path: "/user/v1/flows/{flowId}",
      idempotent: true,
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as userv1.Flow;
  }

  /**
   * Approve a flow.
   *
   * This will approve the specified flow and start the next step
   * in the flow (e.g. for a join organization flow it will send the
   * invitee an email with a link to join the organization).
   */
  async approve(
    flowId: string,
    input?: Omit<FlowApproveInput, "flowId">,
  ): Promise<userv1.Flow>;
  async approve(input: FlowApproveInput): Promise<userv1.Flow>;
  async approve(...args: any[]): Promise<userv1.Flow> {
    const req = build({
      call: "user.flows.approve",
      method: "POST",
      path: "/user/v1/flows/{flowId}:approve",
      idempotent: true,
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as userv1.Flow;
  }

  /**
   * Consume the flow.
   *
   * This accepts the flow (e.g. for a join organization flow it will
   * accept the invitation and add the member to the organization).
   */
  async consume(
    flowId: string,
    input?: Omit<FlowConsumeInput, "flowId">,
  ): Promise<userv1.Flow>;
  async consume(input: FlowConsumeInput): Promise<userv1.Flow>;
  async consume(...args: any[]): Promise<userv1.Flow> {
    const req = build({
      call: "user.flows.consume",
      method: "POST",
      path: "/user/v1/flows/{flowId}:consume",
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as userv1.Flow;
  }

  /**
   * Cancels specified flow.
   *
   * This cancels the flow and hides it from the user.
   */
  async cancel(
    flowId: string,
    input?: Omit<FlowCancelInput, "flowId">,
  ): Promise<userv1.Flow>;
  async cancel(input: FlowCancelInput): Promise<userv1.Flow>;
  async cancel(...args: any[]): Promise<userv1.Flow> {
    const req = build({
      call: "user.flows.cancel",
      method: "POST",
      path: "/user/v1/flows/{flowId}:cancel",
      idempotent: true,
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as userv1.Flow;
  }
}

/**
 * The invoice methods.
 */
class Invoices {
  private readonly transport: Transport;

  constructor(transport: Transport) {
    this.transport = transport;
  }

  /**
   * Lists invoices.
   */
  async list(input?: InvoiceListInput): Promise<userv1.ListInvoicesResponse>;
  async list(...args: any[]): Promise<userv1.ListInvoicesResponse> {
    const req = build({
      call: "user.invoices.list",
      method: "GET",
      path: "/user/v1/invoices",
      query: ["organizationId", "pageSize", "pageToken", "orderBy"],
      idempotent: true,
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as userv1.ListInvoicesResponse;
  }

  /**
   * Retrieves specified invoice.
   */
  async get(
    invoiceId: string,
    input?: Omit<InvoiceGetInput, "invoiceId">,
  ): Promise<userv1.Invoice>;
  async get(input: InvoiceGetInput): Promise<userv1.Invoice>;
  async get(...args: any[]): Promise<userv1.Invoice> {
    const req = build({
      call: "user.invoices.get",
      method: "GET",
      path: "/user/v1/invoices/{invoiceId}",
      idempotent: true,
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as userv1.Invoice;
  }
}

/**
 * The organization methods.
 */
class Organizations {
  private readonly transport: Transport;

  constructor(transport: Transport) {
    this.transport = transport;
  }

  /**
   * Lists organizations.
   */
  async list(
    input?: OrganizationListInput,
  ): Promise<userv1.ListOrganizationsResponse>;
  async list(...args: any[]): Promise<userv1.ListOrganizationsResponse> {
    const req = build({
      call: "user.organizations.list",
      method: "GET",
      path: "/user/v1/organizations",
      query: ["pageSize", "pageToken", "orderBy"],
      idempotent: true,
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as userv1.ListOrganizationsResponse;
  }

  /**
   * Creates a new organization.
   */
  async create(input?: OrganizationCreateInput): Promise<userv1.Organization>;
  async create(...args: any[]): Promise<userv1.Organization> {
    const req = build({
      call: "user.organizations.create",
      method: "POST",
      path: "/user/v1/organizations",
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as userv1.Organization;
  }

  /**
   * Retrieves specified organization.
   */
  async get(
    organizationId: string,
    input?: Omit<OrganizationGetInput, "organizationId">,
  ): Promise<userv1.Organization>;
  async get(input: OrganizationGetInput): Promise<userv1.Organization>;
  async get(...args: any[]): Promise<userv1.Organization> {
    const req = build({
      call: "user.organizations.get",
      method: "GET",
      path: "/user/v1/organizations/{organizationId}",
      idempotent: true,
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as userv1.Organization;
  }

  /**
   * Updates specified organization.
   */
  async update(
    organizationId: string,
    input?: Omit<OrganizationUpdateInput, "organizationId">,
  ): Promise<userv1.Organization>;
  async update(input: OrganizationUpdateInput): Promise<userv1.Organization>;
  async update(...args: any[]): Promise<userv1.Organization> {
    const req = build({
      call: "user.organizations.update",
      method: "PATCH",
      path: "/user/v1/organizations/{organizationId}",
      idempotent: true,
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as userv1.Organization;
  }

  /**
   * Delete specified organization.
   */
  async delete(
    organizationId: string,
    input?: Omit<OrganizationDeleteInput, "organizationId">,
  ): Promise<apiv1.EmptyResponse>;
  async delete(input: OrganizationDeleteInput): Promise<apiv1.EmptyResponse>;
  async delete(...args: any[]): Promise<apiv1.EmptyResponse> {
    const req = build({
      call: "user.organizations.delete",
      method: "DELETE",
      path: "/user/v1/organizations/{organizationId}",
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as apiv1.EmptyResponse;
  }

  /**
   * Leave organization.
   *
   * This allows a user to remove themselves from an organization
   * without have permission to manage the organization.
   */
  async leave(
    organizationId: string,
    input?: Omit<OrganizationLeaveInput, "organizationId">,
  ): Promise<apiv1.EmptyResponse>;
  async leave(input: OrganizationLeaveInput): Promise<apiv1.EmptyResponse>;
  async leave(...args: any[]): Promise<apiv1.EmptyResponse> {
    const req = build({
      call: "user.organizations.leave",
      method: "DELETE",
      path: "/user/v1/organizations/{organizationId}:leave",
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as apiv1.EmptyResponse;
  }
}

/**
 * The Portal session.
 */
class Session {
  private readonly transport: Transport;

  constructor(transport: Transport) {
    this.transport = transport;
  }

  /**
   * Get current session details.
   */
  async get(input?: SessionGetInput): Promise<userv1.Session>;
  async get(...args: any[]): Promise<userv1.Session> {
    const req = build({
      call: "user.session.get",
      method: "GET",
      path: "/user/v1/session",
      idempotent: true,
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as userv1.Session;
  }
}

/**
 * The input options for the `flows.list` method.
 */
interface FlowListInput extends RequestOptions {
  // The identifier of the organization.
  //
  // When not set the user's flows are returned.
  //
  // Otherwise if the user is an admin of the provided organization then
  // the flows associated with that organization are returned.
  organizationId?: string;
  // Filter the results by the specified flow type.
  type?: string;
  // Whether to filter out flows not in the `START_PENDING` or `STARTED`
  // state.
  active?: boolean;
  // Whether to only return flows created by the authenticated user.
  creator?: boolean;
  // The maximum number of flows to return. The API may return fewer than
  // this value.
  //
  // If unspecified, at most 20 flows will be returned.
  // The maximum value is 100; values above 100 will be coerced to 100.
  pageSize?: number;
  // A page token, received from a previous list flows call.
  // Provide this to retrieve the subsequent page.
  //
  // When paginating, all other parameters provided to list flows must match
  // the call that provided the page token.
  pageToken?: string;
  // A comma-separated list of fields to order by.
  //
  // Supports:
  // - `createTime desc`
  orderBy?: string;
}

/**
 * The input options for the `flows.createJoinOrganization` method.
 */
interface FlowCreateJoinOrganizationInput extends RequestOptions {
  // The identifier of the organization.
  organizationId?: string;
  // The identifier of the user.
  //
  // This is required if email is not specified.
  userId?: string;
  // The email address of the person to invite.
  //
  // This is required if user is not specified or the user
  // does not have an email address.
  email?: string;
  // The display name of the person to invite.
  displayName?: string;
}

/**
 * The input options for the `flows.createSignup` method.
 */
interface FlowCreateSignupInput extends RequestOptions {
  // The email address of the person to invite.
  email?: string;
  // The display name of the person to invite.
  displayName?: string;
  // Whether to create an organization as part of the signup flow.
  createOrganization?: boolean;
}

/**
 * The input options for the `flows.get` method.
 */
interface FlowGetInput extends RequestOptions {
  // The identifier of the flow or the flow secret.
  flowId: string;
}

/**
 * The input options for the `flows.approve` method.
 */
interface FlowApproveInput extends RequestOptions {
  // The identifier of the flow.
  flowId: string;
}

/**
 * The input options for the `flows.consume` method.
 */
interface FlowConsumeInput extends RequestOptions {
  // The identifier of the flow or the flow secret.
  flowId: string;
}

/**
 * The input options for the `flows.cancel` method.
 */
interface FlowCancelInput extends RequestOptions {
  // The identifier of the flow or the flow secret.
  flowId: string;
}

/**
 * The input options for the `invoices.list` method.
 */
interface InvoiceListInput extends RequestOptions {
  // Show results for specified organization.
  //
  // If this is not provided the user's individual subscription(s)
  // will be returned.
  organizationId?: string;
  // The maximum number of invoices to return. The API may return fewer than
  // this value.
  //
  // If unspecified, at most 20 invoices will be returned.
  // The maximum value is 100; values above 100 will be coerced to 100.
  pageSize?: number;
  // A page token, received from a previous list invoices call.
  // Provide this to retrieve the subsequent page.
  //
  // When paginating, all other parameters provided to list invoices must match
  // the call that provided the page token.
  pageToken?: string;
  // A comma-separated list of fields to order by.
  //
  // Supports:
  // - `createTime asc`
  // - `createTime desc`
  orderBy?: string;
}

/**
 * The input options for the `invoices.get` method.
 */
interface InvoiceGetInput extends RequestOptions {
  // The identifier of the invoice.
  invoiceId: string;
}

/**
 * The input options for the `organizations.list` method.
 */
interface OrganizationListInput extends RequestOptions {
  // The maximum number of organizations to return. The API may return fewer than
  // this value.
  //
  // If unspecified, at most 20 organizations will be returned.
  // The maximum value is 100; values above 100 will be coerced to 100.
  pageSize?: number;
  // A page token, received from a previous list organizations call.
  // Provide this to retrieve the subsequent page.
  //
  // When paginating, all other parameters provided to list organizations must match
  // the call that provided the page token.
  pageToken?: string;
  // A comma-separated list of fields to order by.
  //
  // Supports:
  // - `displayName asc`
  // - `email asc`
  orderBy?: string;
}

/**
 * The input options for the `organizations.create` method.
 */
interface OrganizationCreateInput extends RequestOptions {
  // The client defined unique identifier of the organization account.
  //
  // It is restricted to letters, numbers, underscores, and hyphens,
  // with the first character a letter or a number, and a 255
  // character maximum.
  //
  // ID's starting with `org_` are reserved.
  uniqueId?: string;
  // The human-readable display name of the organization.
  //
  // The maximum length is 200 characters.
  displayName?: string;
  // The email address of the organization.
  //
  // The maximum length is 320 characters.
  email?: string;
  // The flow identifier associated with the creation of the organization.
  //
  // The flow type must be `SIGNUP` and associated with the user creating the organization.
  flowId?: string;
}

/**
 * The input options for the `organizations.get` method.
 */
interface OrganizationGetInput extends RequestOptions {
  // The identifier of the organization.
  organizationId: string;
}

/**
 * The input options for the `organizations.update` method.
 */
interface OrganizationUpdateInput extends RequestOptions {
  // The identifier of the organization.
  organizationId: string;

  // The client defined unique identifier of the organization account.
  //
  // It is restricted to letters, numbers, underscores, and hyphens,
  // with the first character a letter or a number, and a 255
  // character maximum.
  //
  // ID's starting with `org_` are reserved.
  uniqueId?: string;
  // The human-readable display name of the organization.
  //
  // The maximum length is 200 characters.
  displayName?: string;
  // The email address of the organization.
  //
  // The maximum length is 320 characters.
  email?: string;
  // The flow identifier associated with the creation of the organization.
  //
  // The flow type must be `SIGNUP` and associated with the user creating the organization.
  flowId?: string;
}

/**
 * The input options for the `organizations.delete` method.
 */
interface OrganizationDeleteInput extends RequestOptions {
  // The identifier of the organization.
  organizationId: string;
}

/**
 * The input options for the `organizations.leave` method.
 */
interface OrganizationLeaveInput extends RequestOptions {
  // The identifier of the organization.
  organizationId: string;
}

/**
 * The input options for the `session.get` method.
 */
interface SessionGetInput extends RequestOptions {}
