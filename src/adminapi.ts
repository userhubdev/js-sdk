// Code generated. DO NOT EDIT.
import type * as adminv1 from "./adminv1.ts";
import type * as apiv1 from "./apiv1.ts";
import type * as commonv1 from "./commonv1.ts";
import { build } from "./internal/http.ts";
import { Transport } from "./internal/transport.ts";
import type { RequestOptions } from "./request.ts";

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
   * The subscription methods.
   */
  public get subscriptions(): Subscriptions {
    return new Subscriptions(this.transport);
  }

  /**
   * The user methods.
   */
  public get users(): Users {
    return new Users(this.transport);
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
  async list(input?: FlowListInput): Promise<adminv1.ListFlowsResponse>;
  async list(...args: any[]): Promise<adminv1.ListFlowsResponse> {
    const req = build({
      call: "admin.flows.list",
      method: "GET",
      path: "/admin/v1/flows",
      query: [
        "organizationId",
        "userId",
        "type",
        "pageSize",
        "pageToken",
        "orderBy",
        "view",
      ],
      idempotent: true,
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as adminv1.ListFlowsResponse;
  }

  /**
   * Create a join organization flow.
   *
   * This invites a person to join an organization.
   */
  async createJoinOrganization(
    input: FlowCreateJoinOrganizationInput,
  ): Promise<adminv1.Flow>;
  async createJoinOrganization(...args: any[]): Promise<adminv1.Flow> {
    const req = build({
      call: "admin.flows.createJoinOrganization",
      method: "POST",
      path: "/admin/v1/flows:createJoinOrganization",
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as adminv1.Flow;
  }

  /**
   * Create a signup flow.
   *
   * This invites a person to join the app.
   */
  async createSignup(input: FlowCreateSignupInput): Promise<adminv1.Flow>;
  async createSignup(...args: any[]): Promise<adminv1.Flow> {
    const req = build({
      call: "admin.flows.createSignup",
      method: "POST",
      path: "/admin/v1/flows:createSignup",
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as adminv1.Flow;
  }

  /**
   * Retrieves specified flow.
   */
  async get(
    flowId: string,
    input?: Omit<FlowGetInput, "flowId">,
  ): Promise<adminv1.Flow>;
  async get(input: FlowGetInput): Promise<adminv1.Flow>;
  async get(...args: any[]): Promise<adminv1.Flow> {
    const req = build({
      call: "admin.flows.get",
      method: "GET",
      path: "/admin/v1/flows/{flowId}",
      idempotent: true,
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as adminv1.Flow;
  }

  /**
   * Cancels specified flow.
   */
  async cancel(
    flowId: string,
    input?: Omit<FlowCancelInput, "flowId">,
  ): Promise<adminv1.Flow>;
  async cancel(input: FlowCancelInput): Promise<adminv1.Flow>;
  async cancel(...args: any[]): Promise<adminv1.Flow> {
    const req = build({
      call: "admin.flows.cancel",
      method: "POST",
      path: "/admin/v1/flows/{flowId}:cancel",
      idempotent: true,
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as adminv1.Flow;
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
  async list(input?: InvoiceListInput): Promise<adminv1.ListInvoicesResponse>;
  async list(...args: any[]): Promise<adminv1.ListInvoicesResponse> {
    const req = build({
      call: "admin.invoices.list",
      method: "GET",
      path: "/admin/v1/invoices",
      query: ["organizationId", "userId", "pageSize", "pageToken", "orderBy"],
      idempotent: true,
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as adminv1.ListInvoicesResponse;
  }

  /**
   * Retrieves specified invoice.
   */
  async get(
    invoiceId: string,
    input?: Omit<InvoiceGetInput, "invoiceId">,
  ): Promise<adminv1.Invoice>;
  async get(input: InvoiceGetInput): Promise<adminv1.Invoice>;
  async get(...args: any[]): Promise<adminv1.Invoice> {
    const req = build({
      call: "admin.invoices.get",
      method: "GET",
      path: "/admin/v1/invoices/{invoiceId}",
      query: ["organizationId", "userId"],
      idempotent: true,
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as adminv1.Invoice;
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
  ): Promise<adminv1.ListOrganizationsResponse>;
  async list(...args: any[]): Promise<adminv1.ListOrganizationsResponse> {
    const req = build({
      call: "admin.organizations.list",
      method: "GET",
      path: "/admin/v1/organizations",
      query: ["pageSize", "pageToken", "orderBy", "showDeleted", "view"],
      idempotent: true,
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as adminv1.ListOrganizationsResponse;
  }

  /**
   * Creates a new organization.
   */
  async create(input?: OrganizationCreateInput): Promise<adminv1.Organization>;
  async create(...args: any[]): Promise<adminv1.Organization> {
    const req = build({
      call: "admin.organizations.create",
      method: "POST",
      path: "/admin/v1/organizations",
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as adminv1.Organization;
  }

  /**
   * Retrieves specified organization.
   */
  async get(
    organizationId: string,
    input?: Omit<OrganizationGetInput, "organizationId">,
  ): Promise<adminv1.Organization>;
  async get(input: OrganizationGetInput): Promise<adminv1.Organization>;
  async get(...args: any[]): Promise<adminv1.Organization> {
    const req = build({
      call: "admin.organizations.get",
      method: "GET",
      path: "/admin/v1/organizations/{organizationId}",
      idempotent: true,
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as adminv1.Organization;
  }

  /**
   * Updates specified organization.
   */
  async update(
    organizationId: string,
    input?: Omit<OrganizationUpdateInput, "organizationId">,
  ): Promise<adminv1.Organization>;
  async update(input: OrganizationUpdateInput): Promise<adminv1.Organization>;
  async update(...args: any[]): Promise<adminv1.Organization> {
    const req = build({
      call: "admin.organizations.update",
      method: "PATCH",
      path: "/admin/v1/organizations/{organizationId}",
      query: ["allowMissing"],
      idempotent: true,
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as adminv1.Organization;
  }

  /**
   * Marks specified organization for deletion.
   */
  async delete(
    organizationId: string,
    input?: Omit<OrganizationDeleteInput, "organizationId">,
  ): Promise<adminv1.Organization>;
  async delete(input: OrganizationDeleteInput): Promise<adminv1.Organization>;
  async delete(...args: any[]): Promise<adminv1.Organization> {
    const req = build({
      call: "admin.organizations.delete",
      method: "DELETE",
      path: "/admin/v1/organizations/{organizationId}",
      idempotent: true,
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as adminv1.Organization;
  }

  /**
   * Un-marks specified organization for deletion.
   */
  async undelete(
    organizationId: string,
    input?: Omit<OrganizationUndeleteInput, "organizationId">,
  ): Promise<adminv1.Organization>;
  async undelete(
    input: OrganizationUndeleteInput,
  ): Promise<adminv1.Organization>;
  async undelete(...args: any[]): Promise<adminv1.Organization> {
    const req = build({
      call: "admin.organizations.undelete",
      method: "POST",
      path: "/admin/v1/organizations/{organizationId}:undelete",
      idempotent: true,
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as adminv1.Organization;
  }

  /**
   * Connect specified organization to external account.
   */
  async connect(
    organizationId: string,
    input: Omit<OrganizationConnectInput, "organizationId">,
  ): Promise<adminv1.Organization>;
  async connect(input: OrganizationConnectInput): Promise<adminv1.Organization>;
  async connect(...args: any[]): Promise<adminv1.Organization> {
    const req = build({
      call: "admin.organizations.connect",
      method: "POST",
      path: "/admin/v1/organizations/{organizationId}:connect",
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as adminv1.Organization;
  }

  /**
   * Disconnect specified organization from external account.
   *
   * This will delete all the data associated with the connected account, including
   * payment methods, invoices, and subscriptions.
   *
   * If the delete external account option is enabled it will also attempt to delete
   * the external account (e.g. Stripe Customer object).
   *
   * WARNING: This can irreversibly destroy data and should be
   * used with extreme caution.
   */
  async disconnect(
    organizationId: string,
    input: Omit<OrganizationDisconnectInput, "organizationId">,
  ): Promise<adminv1.Organization>;
  async disconnect(
    input: OrganizationDisconnectInput,
  ): Promise<adminv1.Organization>;
  async disconnect(...args: any[]): Promise<adminv1.Organization> {
    const req = build({
      call: "admin.organizations.disconnect",
      method: "POST",
      path: "/admin/v1/organizations/{organizationId}:disconnect",
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as adminv1.Organization;
  }

  /**
   * Lists organization members.
   */
  async listMembers(
    organizationId: string,
    input?: Omit<OrganizationListMembersInput, "organizationId">,
  ): Promise<adminv1.ListMembersResponse>;
  async listMembers(
    input: OrganizationListMembersInput,
  ): Promise<adminv1.ListMembersResponse>;
  async listMembers(...args: any[]): Promise<adminv1.ListMembersResponse> {
    const req = build({
      call: "admin.organizations.listMembers",
      method: "GET",
      path: "/admin/v1/organizations/{organizationId}/members",
      query: ["pageSize", "pageToken", "orderBy"],
      idempotent: true,
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as adminv1.ListMembersResponse;
  }

  /**
   * Creates a new organization member.
   */
  async addMember(
    organizationId: string,
    input?: Omit<OrganizationAddMemberInput, "organizationId">,
  ): Promise<adminv1.Member>;
  async addMember(input: OrganizationAddMemberInput): Promise<adminv1.Member>;
  async addMember(...args: any[]): Promise<adminv1.Member> {
    const req = build({
      call: "admin.organizations.addMember",
      method: "POST",
      path: "/admin/v1/organizations/{organizationId}/members",
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as adminv1.Member;
  }

  /**
   * Retrieves specified organization member.
   */
  async getMember(
    organizationId: string,
    userId: string,
    input?: Omit<OrganizationGetMemberInput, "organizationId" | "userId">,
  ): Promise<adminv1.Member>;
  async getMember(input: OrganizationGetMemberInput): Promise<adminv1.Member>;
  async getMember(...args: any[]): Promise<adminv1.Member> {
    const req = build({
      call: "admin.organizations.getMember",
      method: "GET",
      path: "/admin/v1/organizations/{organizationId}/members/{userId}",
      idempotent: true,
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as adminv1.Member;
  }

  /**
   * Updates specified organization member.
   */
  async updateMember(
    organizationId: string,
    userId: string,
    input?: Omit<OrganizationUpdateMemberInput, "organizationId" | "userId">,
  ): Promise<adminv1.Member>;
  async updateMember(
    input: OrganizationUpdateMemberInput,
  ): Promise<adminv1.Member>;
  async updateMember(...args: any[]): Promise<adminv1.Member> {
    const req = build({
      call: "admin.organizations.updateMember",
      method: "PATCH",
      path: "/admin/v1/organizations/{organizationId}/members/{userId}",
      query: ["allowMissing"],
      idempotent: true,
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as adminv1.Member;
  }

  /**
   * Deletes specified organization member.
   */
  async removeMember(
    organizationId: string,
    userId: string,
    input?: Omit<OrganizationRemoveMemberInput, "organizationId" | "userId">,
  ): Promise<apiv1.EmptyResponse>;
  async removeMember(
    input: OrganizationRemoveMemberInput,
  ): Promise<apiv1.EmptyResponse>;
  async removeMember(...args: any[]): Promise<apiv1.EmptyResponse> {
    const req = build({
      call: "admin.organizations.removeMember",
      method: "DELETE",
      path: "/admin/v1/organizations/{organizationId}/members/{userId}",
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as apiv1.EmptyResponse;
  }
}

/**
 * The subscription methods.
 */
class Subscriptions {
  private readonly transport: Transport;

  constructor(transport: Transport) {
    this.transport = transport;
  }

  /**
   * Lists subscriptions.
   */
  async list(
    input?: SubscriptionListInput,
  ): Promise<adminv1.ListSubscriptionsResponse>;
  async list(...args: any[]): Promise<adminv1.ListSubscriptionsResponse> {
    const req = build({
      call: "admin.subscriptions.list",
      method: "GET",
      path: "/admin/v1/subscriptions",
      query: [
        "organizationId",
        "userId",
        "pageSize",
        "pageToken",
        "orderBy",
        "view",
      ],
      idempotent: true,
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as adminv1.ListSubscriptionsResponse;
  }

  /**
   * Retrieves specified subscription.
   */
  async get(
    subscriptionId: string,
    input?: Omit<SubscriptionGetInput, "subscriptionId">,
  ): Promise<adminv1.Subscription>;
  async get(input: SubscriptionGetInput): Promise<adminv1.Subscription>;
  async get(...args: any[]): Promise<adminv1.Subscription> {
    const req = build({
      call: "admin.subscriptions.get",
      method: "GET",
      path: "/admin/v1/subscriptions/{subscriptionId}",
      query: ["organizationId", "userId"],
      idempotent: true,
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as adminv1.Subscription;
  }
}

/**
 * The user methods.
 */
class Users {
  private readonly transport: Transport;

  constructor(transport: Transport) {
    this.transport = transport;
  }

  /**
   * Lists users.
   */
  async list(input?: UserListInput): Promise<adminv1.ListUsersResponse>;
  async list(...args: any[]): Promise<adminv1.ListUsersResponse> {
    const req = build({
      call: "admin.users.list",
      method: "GET",
      path: "/admin/v1/users",
      query: ["pageSize", "pageToken", "orderBy", "showDeleted", "view"],
      idempotent: true,
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as adminv1.ListUsersResponse;
  }

  /**
   * Creates a new user.
   */
  async create(input?: UserCreateInput): Promise<adminv1.User>;
  async create(...args: any[]): Promise<adminv1.User> {
    const req = build({
      call: "admin.users.create",
      method: "POST",
      path: "/admin/v1/users",
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as adminv1.User;
  }

  /**
   * Retrieves specified user.
   */
  async get(
    userId: string,
    input?: Omit<UserGetInput, "userId">,
  ): Promise<adminv1.User>;
  async get(input: UserGetInput): Promise<adminv1.User>;
  async get(...args: any[]): Promise<adminv1.User> {
    const req = build({
      call: "admin.users.get",
      method: "GET",
      path: "/admin/v1/users/{userId}",
      idempotent: true,
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as adminv1.User;
  }

  /**
   * Updates specified user.
   */
  async update(
    userId: string,
    input?: Omit<UserUpdateInput, "userId">,
  ): Promise<adminv1.User>;
  async update(input: UserUpdateInput): Promise<adminv1.User>;
  async update(...args: any[]): Promise<adminv1.User> {
    const req = build({
      call: "admin.users.update",
      method: "PATCH",
      path: "/admin/v1/users/{userId}",
      query: ["allowMissing"],
      idempotent: true,
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as adminv1.User;
  }

  /**
   * Marks specified user for deletion.
   */
  async delete(
    userId: string,
    input?: Omit<UserDeleteInput, "userId">,
  ): Promise<adminv1.User>;
  async delete(input: UserDeleteInput): Promise<adminv1.User>;
  async delete(...args: any[]): Promise<adminv1.User> {
    const req = build({
      call: "admin.users.delete",
      method: "DELETE",
      path: "/admin/v1/users/{userId}",
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as adminv1.User;
  }

  /**
   * Un-marks specified user for deletion.
   */
  async undelete(
    userId: string,
    input?: Omit<UserUndeleteInput, "userId">,
  ): Promise<adminv1.User>;
  async undelete(input: UserUndeleteInput): Promise<adminv1.User>;
  async undelete(...args: any[]): Promise<adminv1.User> {
    const req = build({
      call: "admin.users.undelete",
      method: "POST",
      path: "/admin/v1/users/{userId}:undelete",
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as adminv1.User;
  }

  /**
   * Connect specified user to external account.
   */
  async connect(
    userId: string,
    input: Omit<UserConnectInput, "userId">,
  ): Promise<adminv1.User>;
  async connect(input: UserConnectInput): Promise<adminv1.User>;
  async connect(...args: any[]): Promise<adminv1.User> {
    const req = build({
      call: "admin.users.connect",
      method: "POST",
      path: "/admin/v1/users/{userId}:connect",
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as adminv1.User;
  }

  /**
   * Disconnect specified user from external account.
   *
   * This will delete all the data associated with the connected account, including
   * payment methods, invoices, and subscriptions.
   *
   * If the delete external account option is enabled it will also attempt to delete
   * the external account (e.g. Stripe Customer object).
   *
   * WARNING: This can irreversibly destroy data and should be
   * used with extreme caution.
   */
  async disconnect(
    userId: string,
    input: Omit<UserDisconnectInput, "userId">,
  ): Promise<adminv1.User>;
  async disconnect(input: UserDisconnectInput): Promise<adminv1.User>;
  async disconnect(...args: any[]): Promise<adminv1.User> {
    const req = build({
      call: "admin.users.disconnect",
      method: "POST",
      path: "/admin/v1/users/{userId}:disconnect",
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as adminv1.User;
  }

  /**
   * Import user from external identity provider if they don't already
   * exist.
   *
   * If the user already exists in UserHub, this is a no-op.
   */
  async importAccount(
    userId: string,
    input?: Omit<UserImportAccountInput, "userId">,
  ): Promise<adminv1.User>;
  async importAccount(input: UserImportAccountInput): Promise<adminv1.User>;
  async importAccount(...args: any[]): Promise<adminv1.User> {
    const req = build({
      call: "admin.users.importAccount",
      method: "POST",
      path: "/admin/v1/users/{userId}:import",
      idempotent: true,
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as adminv1.User;
  }

  /**
   * Create a User API session.
   */
  async createApiSession(
    userId: string,
    input?: Omit<UserCreateApiSessionInput, "userId">,
  ): Promise<adminv1.CreateApiSessionResponse>;
  async createApiSession(
    input: UserCreateApiSessionInput,
  ): Promise<adminv1.CreateApiSessionResponse>;
  async createApiSession(
    ...args: any[]
  ): Promise<adminv1.CreateApiSessionResponse> {
    const req = build({
      call: "admin.users.createApiSession",
      method: "POST",
      path: "/admin/v1/users/{userId}:createApiSession",
      idempotent: true,
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as adminv1.CreateApiSessionResponse;
  }

  /**
   * Create Portal session.
   */
  async createPortalSession(
    userId: string,
    input?: Omit<UserCreatePortalSessionInput, "userId">,
  ): Promise<adminv1.CreatePortalSessionResponse>;
  async createPortalSession(
    input: UserCreatePortalSessionInput,
  ): Promise<adminv1.CreatePortalSessionResponse>;
  async createPortalSession(
    ...args: any[]
  ): Promise<adminv1.CreatePortalSessionResponse> {
    const req = build({
      call: "admin.users.createPortalSession",
      method: "POST",
      path: "/admin/v1/users/{userId}:createPortalSession",
      idempotent: true,
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as adminv1.CreatePortalSessionResponse;
  }
}

/**
 * The input options for the `flows.list` method.
 */
interface FlowListInput extends RequestOptions {
  // Filter results by organization identifier.
  organizationId?: string;
  // Filter results by user identifier.
  userId?: string;
  // Filter the results by the specified flow type.
  type?: string;
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
  // A comma-separated list of fields to order by, sorted in ascending order.
  // Use `desc` after a field name for descending.
  //
  // Supported fields:
  // - `type`
  // - `createTime`
  orderBy?: string;
  // The Flow view to return in the results.
  //
  // This defaults to the `BASIC` view.
  view?: string;
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
  // The identifier of the user sending the invite.
  creatorUserId?: string;
  // The time the flow will expire.
  //
  // This field is not allowed if `ttl` is specified.
  expireTime?: Date | null;
  // The amount of time a flow will be available (e.g. `86400s`).
  //
  // This must be a string with the number of seconds followed by a
  // trailing `s`.
  //
  // This field is not allowed if `expireTime` is specified.
  ttl?: string;
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
  // The identifier of the user sending the invite.
  creatorUserId?: string;
  // The time the flow will expire.
  //
  // This field is not allowed if `ttl` is specified.
  expireTime?: Date | null;
  // The amount of time a flow will be available (e.g. `86400s`).
  //
  // This must be a string with the number of seconds followed by a
  // trailing `s`.
  //
  // This field is not allowed if `expireTime` is specified.
  ttl?: string;
}

/**
 * The input options for the `flows.get` method.
 */
interface FlowGetInput extends RequestOptions {
  // The identifier of the flow.
  flowId: string;
}

/**
 * The input options for the `flows.cancel` method.
 */
interface FlowCancelInput extends RequestOptions {
  // The identifier of the flow.
  flowId: string;
}

/**
 * The input options for the `invoices.list` method.
 */
interface InvoiceListInput extends RequestOptions {
  // Filter results by organization identifier.
  //
  // This is required if user identifier is not specified.
  organizationId?: string;
  // Filter results by user identifier.
  //
  // This is required if organization identifier is not specified.
  userId?: string;
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
  // A comma-separated list of fields to order by, sorted in ascending order.
  // Use `desc` after a field name for descending.
  //
  // Supported fields:
  // - `state`
  // - `dueTime`
  // - `createTime`
  // - `updateTime`
  orderBy?: string;
}

/**
 * The input options for the `invoices.get` method.
 */
interface InvoiceGetInput extends RequestOptions {
  // The identifier of the invoice.
  invoiceId: string;

  // Restrict by organization identifier.
  organizationId?: string;
  // Restrict by user identifier.
  userId?: string;
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
  // A comma-separated list of fields to order by, sorted in ascending order.
  // Use `desc` after a field name for descending.
  //
  // Supported fields:
  // - `displayName`
  // - `email`
  // - `createTime`
  // - `deleteTime`
  orderBy?: string;
  // Whether to show deleted organizations.
  showDeleted?: boolean;
  // The organization view to return in the results.
  //
  // This defaults to the `BASIC` view.
  view?: string;
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
  // Whether the organization's email address has been verified.
  emailVerified?: boolean;
  // The E164 phone number for the organization (e.g. `+12125550123`).
  phoneNumber?: string;
  // Whether the organization's phone number has been verified.
  phoneNumberVerified?: boolean;
  // The photo/avatar URL of the organization.
  //
  // The maximum length is 2000 characters.
  imageUrl?: string;
  // The default ISO-4217 currency code for the organization (e.g. `USD`).
  currencyCode?: string;
  // The IETF BCP-47 language code for the organization (e.g. `en`).
  languageCode?: string;
  // The country/region code for the organization (e.g. `US`).
  regionCode?: string;
  // The IANA time zone for the organization (e.g. `America/New_York`).
  timeZone?: string;
  // The billing address for the organization.
  address?: commonv1.Address | null;
  // The sign-up time for the organization.
  signupTime?: Date | null;
  // Whether the organization is disabled.
  disabled?: boolean;
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
  // Whether the organization's email address has been verified.
  emailVerified?: boolean;
  // The E164 phone number for the organization (e.g. `+12125550123`).
  phoneNumber?: string;
  // Whether the organization's phone number has been verified.
  phoneNumberVerified?: boolean;
  // The photo/avatar URL of the organization.
  //
  // The maximum length is 2000 characters.
  imageUrl?: string;
  // The default ISO-4217 currency code for the organization (e.g. `USD`).
  currencyCode?: string;
  // The IETF BCP-47 language code for the organization (e.g. `en`).
  languageCode?: string;
  // The country/region code for the organization (e.g. `US`).
  regionCode?: string;
  // The IANA time zone for the organization (e.g. `America/New_York`).
  timeZone?: string;
  // The billing address for the organization.
  address?: commonv1.Address | null;
  // The sign-up time for the organization.
  signupTime?: Date | null;
  // Whether the organization is disabled.
  disabled?: boolean;

  // If set to true, and the organization is not found, a new organization will be created.
  //
  // You must use the unique identifier for the identifier when this is true.
  allowMissing?: boolean;
}

/**
 * The input options for the `organizations.delete` method.
 */
interface OrganizationDeleteInput extends RequestOptions {
  // The identifier of the organization.
  organizationId: string;
}

/**
 * The input options for the `organizations.undelete` method.
 */
interface OrganizationUndeleteInput extends RequestOptions {
  // The identifier of the organization.
  organizationId: string;
}

/**
 * The input options for the `organizations.connect` method.
 */
interface OrganizationConnectInput extends RequestOptions {
  // The organization identifier.
  organizationId: string;

  // The identifier of the connection.
  connectionId?: string;
  // The external identifier of the organization to connect.
  //
  // On create if this is empty a new external organization will
  // be created if the connection supports it.
  externalId?: string;
}

/**
 * The input options for the `organizations.disconnect` method.
 */
interface OrganizationDisconnectInput extends RequestOptions {
  // The organization identifier.
  organizationId: string;

  // The identifier of the connection.
  connectionId?: string;
  // Whether to attempt to delete the external account and all
  // it's associated data (e.g. Stripe Customer object).
  deleteExternalAccount?: boolean;
}

/**
 * The input options for the `organizations.listMembers` method.
 */
interface OrganizationListMembersInput extends RequestOptions {
  // The identifier of the organization.
  organizationId: string;

  // The maximum number of members to return. The API may return fewer than
  // this value.
  //
  // If unspecified, at most 20 members will be returned.
  // The maximum value is 100; values above 100 will be coerced to 100.
  pageSize?: number;
  // A page token, received from a previous list members call.
  // Provide this to retrieve the subsequent page.
  //
  // When paginating, all other parameters provided to list members must match
  // the call that provided the page token.
  pageToken?: string;
  // A comma-separated list of fields to order by, sorted in ascending order.
  // Use `desc` after a field name for descending.
  //
  // Supported fields:
  // - `createTime`
  // - `updateTime`
  orderBy?: string;
}

/**
 * The input options for the `organizations.addMember` method.
 */
interface OrganizationAddMemberInput extends RequestOptions {
  // The identifier of the organization.
  organizationId: string;

  // The identifier of the user.
  userId?: string;
  // The identifier of the role.
  //
  // This is currently limited to `member`, `admin`, and `owner`.
  roleId?: string;
}

/**
 * The input options for the `organizations.getMember` method.
 */
interface OrganizationGetMemberInput extends RequestOptions {
  // The identifier of the organization.
  organizationId: string;
  // The identifier of the user.
  userId: string;
}

/**
 * The input options for the `organizations.updateMember` method.
 */
interface OrganizationUpdateMemberInput extends RequestOptions {
  // The identifier of the organization.
  organizationId: string;
  // The identifier of the user.
  userId: string;

  // The identifier of the role.
  //
  // This is currently limited to `member`, `admin`, and `owner`.
  roleId?: string;

  // If set to true, and the member is not found, a new member will be created.
  allowMissing?: boolean;
}

/**
 * The input options for the `organizations.removeMember` method.
 */
interface OrganizationRemoveMemberInput extends RequestOptions {
  // The identifier of the organization.
  organizationId: string;
  // The identifier of the user.
  userId: string;
}

/**
 * The input options for the `subscriptions.list` method.
 */
interface SubscriptionListInput extends RequestOptions {
  // Filter results by organization identifier.
  //
  // This is required if user identifier is not specified.
  organizationId?: string;
  // Filter results by user identifier.
  //
  // This is required if organization identifier is not specified.
  userId?: string;
  // The maximum number of subscriptions to return. The API may return fewer than
  // this value.
  //
  // If unspecified, at most 20 subscriptions will be returned.
  // The maximum value is 100; values above 100 will be coerced to 100.
  pageSize?: number;
  // A page token, received from a previous list subscriptions call.
  // Provide this to retrieve the subsequent page.
  //
  // When paginating, all other parameters provided to list subscriptions must match
  // the call that provided the page token.
  pageToken?: string;
  // A comma-separated list of fields to order by, sorted in ascending order.
  // Use `desc` after a field name for descending.
  //
  // Supported fields:
  // - `createTime`
  orderBy?: string;
  // The Subscription view to return in the results.
  //
  // This defaults to the `BASIC` view.
  view?: string;
}

/**
 * The input options for the `subscriptions.get` method.
 */
interface SubscriptionGetInput extends RequestOptions {
  // The identifier of the subscription.
  subscriptionId: string;

  // Restrict by organization identifier.
  organizationId?: string;
  // Restrict by user identifier.
  userId?: string;
}

/**
 * The input options for the `users.list` method.
 */
interface UserListInput extends RequestOptions {
  // The maximum number of users to return. The API may return fewer than
  // this value.
  //
  // If unspecified, at most 20 users will be returned.
  // The maximum value is 100; values above 100 will be coerced to 100.
  pageSize?: number;
  // A page token, received from a previous list users call.
  // Provide this to retrieve the subsequent page.
  //
  // When paginating, all other parameters provided to list users must match
  // the call that provided the page token.
  pageToken?: string;
  // A comma-separated list of fields to order by, sorted in ascending order.
  // Use `desc` after a field name for descending.
  //
  // Supported fields:
  // - `displayName`
  // - `email`
  // - `createTime`
  // - `deleteTime`
  orderBy?: string;
  // Whether to show deleted users.
  showDeleted?: boolean;
  // The User view to return in the results.
  //
  // This defaults to the `BASIC` view.
  view?: string;
}

/**
 * The input options for the `users.create` method.
 */
interface UserCreateInput extends RequestOptions {
  // The client defined unique identifier of the user account.
  //
  // It is restricted to letters, numbers, underscores, and hyphens,
  // with the first character a letter or a number, and a 255
  // character maximum.
  //
  // ID's starting with `usr_` are reserved.
  uniqueId?: string;
  // The human-readable display name of the user.
  //
  // The maximum length is 200 characters.
  displayName?: string;
  // The email address of the user.
  //
  // The maximum length is 320 characters.
  email?: string;
  // Whether the user's email address has been verified.
  emailVerified?: boolean;
  // The E164 phone number for the user (e.g. `+12125550123`).
  phoneNumber?: string;
  // Whether the user's phone number has been verified.
  phoneNumberVerified?: boolean;
  // The photo/avatar URL of the user.
  //
  // The maximum length is 2000 characters.
  imageUrl?: string;
  // The default ISO-4217 currency code for the user (e.g. `USD`).
  currencyCode?: string;
  // The IETF BCP-47 language code for the user (e.g. `en`).
  languageCode?: string;
  // The country/region code for the user (e.g. `US`).
  regionCode?: string;
  // The IANA time zone for the user (e.g. `America/New_York`).
  timeZone?: string;
  // The billing address for the user.
  address?: commonv1.Address | null;
  // The sign-up time for the user.
  signupTime?: Date | null;
  // Whether the user is disabled.
  disabled?: boolean;
}

/**
 * The input options for the `users.get` method.
 */
interface UserGetInput extends RequestOptions {
  // The identifier of the user.
  userId: string;
}

/**
 * The input options for the `users.update` method.
 */
interface UserUpdateInput extends RequestOptions {
  // The identifier of the user.
  userId: string;

  // The client defined unique identifier of the user account.
  //
  // It is restricted to letters, numbers, underscores, and hyphens,
  // with the first character a letter or a number, and a 255
  // character maximum.
  //
  // ID's starting with `usr_` are reserved.
  uniqueId?: string;
  // The human-readable display name of the user.
  //
  // The maximum length is 200 characters.
  displayName?: string;
  // The email address of the user.
  //
  // The maximum length is 320 characters.
  email?: string;
  // Whether the user's email address has been verified.
  emailVerified?: boolean;
  // The E164 phone number for the user (e.g. `+12125550123`).
  phoneNumber?: string;
  // Whether the user's phone number has been verified.
  phoneNumberVerified?: boolean;
  // The photo/avatar URL of the user.
  //
  // The maximum length is 2000 characters.
  imageUrl?: string;
  // The default ISO-4217 currency code for the user (e.g. `USD`).
  currencyCode?: string;
  // The IETF BCP-47 language code for the user (e.g. `en`).
  languageCode?: string;
  // The country/region code for the user (e.g. `US`).
  regionCode?: string;
  // The IANA time zone for the user (e.g. `America/New_York`).
  timeZone?: string;
  // The billing address for the user.
  address?: commonv1.Address | null;
  // The sign-up time for the user.
  signupTime?: Date | null;
  // Whether the user is disabled.
  disabled?: boolean;

  // If set to true, and the user is not found, a new user will be created.
  //
  // You must use the unique identifier for the identifier when this is true.
  allowMissing?: boolean;
}

/**
 * The input options for the `users.delete` method.
 */
interface UserDeleteInput extends RequestOptions {
  // The identifier of the user.
  userId: string;
}

/**
 * The input options for the `users.undelete` method.
 */
interface UserUndeleteInput extends RequestOptions {
  // The identifier of the user.
  userId: string;
}

/**
 * The input options for the `users.connect` method.
 */
interface UserConnectInput extends RequestOptions {
  // The user identifier.
  userId: string;

  // The identifier of the connection.
  connectionId?: string;
  // The external identifier of the user to connect.
  //
  // On create if this is empty a new external user will
  // be created if the connection supports it.
  externalId?: string;
}

/**
 * The input options for the `users.disconnect` method.
 */
interface UserDisconnectInput extends RequestOptions {
  // The user identifier.
  userId: string;

  // The identifier of the connection.
  connectionId?: string;
  // Whether to attempt to delete the external account and all
  // it's associated data (e.g. Stripe Customer object).
  deleteExternalAccount?: boolean;
}

/**
 * The input options for the `users.importAccount` method.
 */
interface UserImportAccountInput extends RequestOptions {
  // The identifier of the user.
  //
  // This must be in the format `<externalId>@<connectionId>` where
  // `externalId` is the identity provider user identifier and
  // and `connectionId` is the User Provider connection identifier.
  userId: string;
}

/**
 * The input options for the `users.createApiSession` method.
 */
interface UserCreateApiSessionInput extends RequestOptions {
  // The identifier of the user.
  userId: string;
}

/**
 * The input options for the `users.createPortalSession` method.
 */
interface UserCreatePortalSessionInput extends RequestOptions {
  // The user ID.
  //
  // In addition to supporting the UserHub user ID,
  // you can also pass in the User Provider external identifier in the
  // format `<externalId>@<connectionId>` and if the user doesn't
  // exist in UserHub they will automatically be imported.
  userId: string;

  // The portal URL, this is the target URL on the portal site.
  //
  // If not defined the root URL for the portal will be used.
  portalUrl?: string;
  // The URL the user should be sent to when they want to return to
  // the app (e.g. cancel checkout).
  //
  // If not defined the app URL will be used.
  returnUrl?: string;
  // The URl the user should be sent after they successfully complete
  // an action (e.g. checkout).
  //
  // If not defined the return URL will be used.
  successUrl?: string;
}
