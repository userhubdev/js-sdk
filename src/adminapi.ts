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
   * The checkout methods.
   */
  public get checkouts(): Checkouts {
    return new Checkouts(this.transport);
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
   * The payment method methods.
   */
  public get paymentMethods(): PaymentMethods {
    return new PaymentMethods(this.transport);
  }

  /**
   * The pricing methods.
   */
  public get pricing(): Pricing {
    return new Pricing(this.transport);
  }

  /**
   * The role methods.
   */
  public get roles(): Roles {
    return new Roles(this.transport);
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
 * The checkout methods.
 */
class Checkouts {
  private readonly transport: Transport;

  constructor(transport: Transport) {
    this.transport = transport;
  }

  /**
   * Create a checkout.
   */
  async create(input?: CheckoutCreateInput): Promise<adminv1.Checkout>;
  async create(...args: any[]): Promise<adminv1.Checkout> {
    const req = build({
      call: "admin.checkouts.create",
      method: "POST",
      path: "/admin/v1/checkouts",
      query: ["submit"],
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as adminv1.Checkout;
  }

  /**
   * Get a checkout.
   */
  async get(
    checkoutId: string,
    input?: Omit<CheckoutGetInput, "checkoutId">,
  ): Promise<adminv1.Checkout>;
  async get(input: CheckoutGetInput): Promise<adminv1.Checkout>;
  async get(...args: any[]): Promise<adminv1.Checkout> {
    const req = build({
      call: "admin.checkouts.get",
      method: "GET",
      path: "/admin/v1/checkouts/{checkoutId}",
      idempotent: true,
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as adminv1.Checkout;
  }

  /**
   * Set plan for a checkout.
   */
  async setPlan(
    checkoutId: string,
    input?: Omit<CheckoutSetPlanInput, "checkoutId">,
  ): Promise<adminv1.Checkout>;
  async setPlan(input: CheckoutSetPlanInput): Promise<adminv1.Checkout>;
  async setPlan(...args: any[]): Promise<adminv1.Checkout> {
    const req = build({
      call: "admin.checkouts.setPlan",
      method: "POST",
      path: "/admin/v1/checkouts/{checkoutId}:setPlan",
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as adminv1.Checkout;
  }

  /**
   * Set terms for a checkout.
   *
   * This is generally used to select a billing cycle for
   * the plan.
   */
  async setTerms(
    checkoutId: string,
    input?: Omit<CheckoutSetTermsInput, "checkoutId">,
  ): Promise<adminv1.Checkout>;
  async setTerms(input: CheckoutSetTermsInput): Promise<adminv1.Checkout>;
  async setTerms(...args: any[]): Promise<adminv1.Checkout> {
    const req = build({
      call: "admin.checkouts.setTerms",
      method: "POST",
      path: "/admin/v1/checkouts/{checkoutId}:setTerms",
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as adminv1.Checkout;
  }

  /**
   * Set trial settings for a checkout.
   */
  async setTrial(
    checkoutId: string,
    input?: Omit<CheckoutSetTrialInput, "checkoutId">,
  ): Promise<adminv1.Checkout>;
  async setTrial(input: CheckoutSetTrialInput): Promise<adminv1.Checkout>;
  async setTrial(...args: any[]): Promise<adminv1.Checkout> {
    const req = build({
      call: "admin.checkouts.setTrial",
      method: "POST",
      path: "/admin/v1/checkouts/{checkoutId}:setTrial",
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as adminv1.Checkout;
  }

  /**
   * Set item quantities for a checkout.
   */
  async setItems(
    checkoutId: string,
    input?: Omit<CheckoutSetItemsInput, "checkoutId">,
  ): Promise<adminv1.Checkout>;
  async setItems(input: CheckoutSetItemsInput): Promise<adminv1.Checkout>;
  async setItems(...args: any[]): Promise<adminv1.Checkout> {
    const req = build({
      call: "admin.checkouts.setItems",
      method: "POST",
      path: "/admin/v1/checkouts/{checkoutId}:setItems",
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as adminv1.Checkout;
  }

  /**
   * Set payment method for a checkout.
   */
  async setPaymentMethod(
    checkoutId: string,
    input?: Omit<CheckoutSetPaymentMethodInput, "checkoutId">,
  ): Promise<adminv1.Checkout>;
  async setPaymentMethod(
    input: CheckoutSetPaymentMethodInput,
  ): Promise<adminv1.Checkout>;
  async setPaymentMethod(...args: any[]): Promise<adminv1.Checkout> {
    const req = build({
      call: "admin.checkouts.setPaymentMethod",
      method: "POST",
      path: "/admin/v1/checkouts/{checkoutId}:setPaymentMethod",
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as adminv1.Checkout;
  }

  /**
   * Set billing details for a checkout.
   */
  async setBillingDetails(
    checkoutId: string,
    input?: Omit<CheckoutSetBillingDetailsInput, "checkoutId">,
  ): Promise<adminv1.Checkout>;
  async setBillingDetails(
    input: CheckoutSetBillingDetailsInput,
  ): Promise<adminv1.Checkout>;
  async setBillingDetails(...args: any[]): Promise<adminv1.Checkout> {
    const req = build({
      call: "admin.checkouts.setBillingDetails",
      method: "POST",
      path: "/admin/v1/checkouts/{checkoutId}:setBillingDetails",
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as adminv1.Checkout;
  }

  /**
   * Add discount to a checkout.
   */
  async addDiscount(
    checkoutId: string,
    input?: Omit<CheckoutAddDiscountInput, "checkoutId">,
  ): Promise<adminv1.Checkout>;
  async addDiscount(input: CheckoutAddDiscountInput): Promise<adminv1.Checkout>;
  async addDiscount(...args: any[]): Promise<adminv1.Checkout> {
    const req = build({
      call: "admin.checkouts.addDiscount",
      method: "POST",
      path: "/admin/v1/checkouts/{checkoutId}:addDiscount",
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as adminv1.Checkout;
  }

  /**
   * Remove discount from a checkout.
   */
  async removeDiscount(
    checkoutId: string,
    input: Omit<CheckoutRemoveDiscountInput, "checkoutId">,
  ): Promise<adminv1.Checkout>;
  async removeDiscount(
    input: CheckoutRemoveDiscountInput,
  ): Promise<adminv1.Checkout>;
  async removeDiscount(...args: any[]): Promise<adminv1.Checkout> {
    const req = build({
      call: "admin.checkouts.removeDiscount",
      method: "POST",
      path: "/admin/v1/checkouts/{checkoutId}:removeDiscount",
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as adminv1.Checkout;
  }

  /**
   * Complete payment for a checkout.
   */
  async completePayment(
    checkoutId: string,
    input?: Omit<CheckoutCompletePaymentInput, "checkoutId">,
  ): Promise<adminv1.Checkout>;
  async completePayment(
    input: CheckoutCompletePaymentInput,
  ): Promise<adminv1.Checkout>;
  async completePayment(...args: any[]): Promise<adminv1.Checkout> {
    const req = build({
      call: "admin.checkouts.completePayment",
      method: "POST",
      path: "/admin/v1/checkouts/{checkoutId}:completePayment",
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as adminv1.Checkout;
  }

  /**
   * Set cancel type for a checkout.
   */
  async setCancel(
    checkoutId: string,
    input?: Omit<CheckoutSetCancelInput, "checkoutId">,
  ): Promise<adminv1.Checkout>;
  async setCancel(input: CheckoutSetCancelInput): Promise<adminv1.Checkout>;
  async setCancel(...args: any[]): Promise<adminv1.Checkout> {
    const req = build({
      call: "admin.checkouts.setCancel",
      method: "POST",
      path: "/admin/v1/checkouts/{checkoutId}:setCancel",
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as adminv1.Checkout;
  }

  /**
   * Submit a checkout for processing.
   */
  async submit(
    checkoutId: string,
    input?: Omit<CheckoutSubmitInput, "checkoutId">,
  ): Promise<adminv1.Checkout>;
  async submit(input: CheckoutSubmitInput): Promise<adminv1.Checkout>;
  async submit(...args: any[]): Promise<adminv1.Checkout> {
    const req = build({
      call: "admin.checkouts.submit",
      method: "POST",
      path: "/admin/v1/checkouts/{checkoutId}:submit",
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as adminv1.Checkout;
  }

  /**
   * Cancel a checkout.
   */
  async cancel(
    checkoutId: string,
    input?: Omit<CheckoutCancelInput, "checkoutId">,
  ): Promise<adminv1.Checkout>;
  async cancel(input: CheckoutCancelInput): Promise<adminv1.Checkout>;
  async cancel(...args: any[]): Promise<adminv1.Checkout> {
    const req = build({
      call: "admin.checkouts.cancel",
      method: "POST",
      path: "/admin/v1/checkouts/{checkoutId}:cancel",
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as adminv1.Checkout;
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
   * List flows.
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
        "active",
        "creatorUserId",
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
   * Update a join organization flow.
   */
  async updateJoinOrganization(
    flowId: string,
    input?: Omit<FlowUpdateJoinOrganizationInput, "flowId">,
  ): Promise<adminv1.Flow>;
  async updateJoinOrganization(
    input: FlowUpdateJoinOrganizationInput,
  ): Promise<adminv1.Flow>;
  async updateJoinOrganization(...args: any[]): Promise<adminv1.Flow> {
    const req = build({
      call: "admin.flows.updateJoinOrganization",
      method: "PATCH",
      path: "/admin/v1/flows/{flowId}:updateJoinOrganization",
      idempotent: true,
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
   * Get a flow.
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
   * Cancel a flow.
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
   * List invoices.
   */
  async list(input?: InvoiceListInput): Promise<adminv1.ListInvoicesResponse>;
  async list(...args: any[]): Promise<adminv1.ListInvoicesResponse> {
    const req = build({
      call: "admin.invoices.list",
      method: "GET",
      path: "/admin/v1/invoices",
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
    return res.body as adminv1.ListInvoicesResponse;
  }

  /**
   * Get an invoice.
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

  /**
   * Pay an invoice.
   */
  async pay(
    invoiceId: string,
    input?: Omit<InvoicePayInput, "invoiceId">,
  ): Promise<adminv1.Invoice>;
  async pay(input: InvoicePayInput): Promise<adminv1.Invoice>;
  async pay(...args: any[]): Promise<adminv1.Invoice> {
    const req = build({
      call: "admin.invoices.pay",
      method: "POST",
      path: "/admin/v1/invoices/{invoiceId}:pay",
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
   * List organizations.
   */
  async list(
    input?: OrganizationListInput,
  ): Promise<adminv1.ListOrganizationsResponse>;
  async list(...args: any[]): Promise<adminv1.ListOrganizationsResponse> {
    const req = build({
      call: "admin.organizations.list",
      method: "GET",
      path: "/admin/v1/organizations",
      query: [
        "displayName",
        "email",
        "pageSize",
        "pageToken",
        "orderBy",
        "showDeleted",
        "view",
      ],
      idempotent: true,
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as adminv1.ListOrganizationsResponse;
  }

  /**
   * Create an organization.
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
   * Get an organization.
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
   * Update an organization.
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
   * Delete an organization.
   *
   * This marks the organization for deletion and can be restored during
   * a grace period.
   *
   * To immediately delete an organization, you must also call purge
   * organization.
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
   * Restore an organization.
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
   * Purge a deleted organization.
   *
   * The organization must be marked for deletion before it can be purged.
   */
  async purge(
    organizationId: string,
    input?: Omit<OrganizationPurgeInput, "organizationId">,
  ): Promise<adminv1.PurgeOrganizationResponse>;
  async purge(
    input: OrganizationPurgeInput,
  ): Promise<adminv1.PurgeOrganizationResponse>;
  async purge(...args: any[]): Promise<adminv1.PurgeOrganizationResponse> {
    const req = build({
      call: "admin.organizations.purge",
      method: "POST",
      path: "/admin/v1/organizations/{organizationId}:purge",
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as adminv1.PurgeOrganizationResponse;
  }

  /**
   * Connect an organization to an external account.
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
   * Update an organization's external account.
   */
  async updateConnection(
    organizationId: string,
    input: Omit<OrganizationUpdateConnectionInput, "organizationId">,
  ): Promise<adminv1.Organization>;
  async updateConnection(
    input: OrganizationUpdateConnectionInput,
  ): Promise<adminv1.Organization>;
  async updateConnection(...args: any[]): Promise<adminv1.Organization> {
    const req = build({
      call: "admin.organizations.updateConnection",
      method: "PATCH",
      path: "/admin/v1/organizations/{organizationId}:updateConnection",
      idempotent: true,
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as adminv1.Organization;
  }

  /**
   * Disconnect an organization from an external account.
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
   * List organization members.
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
      query: [
        "displayName",
        "email",
        "roleId",
        "pageSize",
        "pageToken",
        "orderBy",
      ],
      idempotent: true,
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as adminv1.ListMembersResponse;
  }

  /**
   * Create an organization member.
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
   * Get an organization member.
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
   * Update an organization member.
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
   * Delete an organization member.
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
 * The payment method methods.
 */
class PaymentMethods {
  private readonly transport: Transport;

  constructor(transport: Transport) {
    this.transport = transport;
  }

  /**
   * Create a payment method.
   */
  async create(input: PaymentMethodCreateInput): Promise<adminv1.PaymentMethod>;
  async create(...args: any[]): Promise<adminv1.PaymentMethod> {
    const req = build({
      call: "admin.paymentMethods.create",
      method: "POST",
      path: "/admin/v1/paymentMethods",
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as adminv1.PaymentMethod;
  }

  /**
   * Create a payment method intent.
   *
   * This can be used with a third-party billing provider API
   * to store a payment method.
   */
  async createIntent(
    input: PaymentMethodCreateIntentInput,
  ): Promise<adminv1.PaymentMethodIntent>;
  async createIntent(...args: any[]): Promise<adminv1.PaymentMethodIntent> {
    const req = build({
      call: "admin.paymentMethods.createIntent",
      method: "POST",
      path: "/admin/v1/paymentMethods:createIntent",
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as adminv1.PaymentMethodIntent;
  }

  /**
   * Get a payment method.
   */
  async get(
    paymentMethodId: string,
    input?: Omit<PaymentMethodGetInput, "paymentMethodId">,
  ): Promise<adminv1.PaymentMethod>;
  async get(input: PaymentMethodGetInput): Promise<adminv1.PaymentMethod>;
  async get(...args: any[]): Promise<adminv1.PaymentMethod> {
    const req = build({
      call: "admin.paymentMethods.get",
      method: "GET",
      path: "/admin/v1/paymentMethods/{paymentMethodId}",
      query: ["organizationId", "userId"],
      idempotent: true,
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as adminv1.PaymentMethod;
  }

  /**
   * Update a payment method.
   */
  async update(
    paymentMethodId: string,
    input?: Omit<PaymentMethodUpdateInput, "paymentMethodId">,
  ): Promise<adminv1.PaymentMethod>;
  async update(input: PaymentMethodUpdateInput): Promise<adminv1.PaymentMethod>;
  async update(...args: any[]): Promise<adminv1.PaymentMethod> {
    const req = build({
      call: "admin.paymentMethods.update",
      method: "PATCH",
      path: "/admin/v1/paymentMethods/{paymentMethodId}",
      query: ["organizationId", "userId"],
      idempotent: true,
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as adminv1.PaymentMethod;
  }

  /**
   * Set a default payment method for an account.
   */
  async setDefault(
    paymentMethodId: string,
    input?: Omit<PaymentMethodSetDefaultInput, "paymentMethodId">,
  ): Promise<adminv1.PaymentMethod>;
  async setDefault(
    input: PaymentMethodSetDefaultInput,
  ): Promise<adminv1.PaymentMethod>;
  async setDefault(...args: any[]): Promise<adminv1.PaymentMethod> {
    const req = build({
      call: "admin.paymentMethods.setDefault",
      method: "POST",
      path: "/admin/v1/paymentMethods/{paymentMethodId}:setDefault",
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as adminv1.PaymentMethod;
  }

  /**
   * Delete a payment method.
   */
  async delete(
    paymentMethodId: string,
    input?: Omit<PaymentMethodDeleteInput, "paymentMethodId">,
  ): Promise<apiv1.EmptyResponse>;
  async delete(input: PaymentMethodDeleteInput): Promise<apiv1.EmptyResponse>;
  async delete(...args: any[]): Promise<apiv1.EmptyResponse> {
    const req = build({
      call: "admin.paymentMethods.delete",
      method: "DELETE",
      path: "/admin/v1/paymentMethods/{paymentMethodId}",
      query: ["organizationId", "userId"],
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as apiv1.EmptyResponse;
  }
}

/**
 * The pricing methods.
 */
class Pricing {
  private readonly transport: Transport;

  constructor(transport: Transport) {
    this.transport = transport;
  }

  /**
   * Get pricing.
   */
  async get(input?: PricingGetInput): Promise<adminv1.Pricing>;
  async get(...args: any[]): Promise<adminv1.Pricing> {
    const req = build({
      call: "admin.pricing.get",
      method: "GET",
      path: "/admin/v1/pricing",
      query: ["accountType", "organizationId", "userId"],
      idempotent: true,
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as adminv1.Pricing;
  }
}

/**
 * The role methods.
 */
class Roles {
  private readonly transport: Transport;

  constructor(transport: Transport) {
    this.transport = transport;
  }

  /**
   * List roles.
   */
  async list(input?: RoleListInput): Promise<adminv1.ListRolesResponse>;
  async list(...args: any[]): Promise<adminv1.ListRolesResponse> {
    const req = build({
      call: "admin.roles.list",
      method: "GET",
      path: "/admin/v1/roles",
      query: ["pageSize", "pageToken", "orderBy"],
      idempotent: true,
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as adminv1.ListRolesResponse;
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
   * List subscriptions.
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
        "state",
        "planGroupId",
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
   * Get a subscription.
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
   * List users.
   */
  async list(input?: UserListInput): Promise<adminv1.ListUsersResponse>;
  async list(...args: any[]): Promise<adminv1.ListUsersResponse> {
    const req = build({
      call: "admin.users.list",
      method: "GET",
      path: "/admin/v1/users",
      query: [
        "displayName",
        "email",
        "pageSize",
        "pageToken",
        "orderBy",
        "showDeleted",
        "view",
      ],
      idempotent: true,
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as adminv1.ListUsersResponse;
  }

  /**
   * Create a user.
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
   * Get a user.
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
   * Update a user.
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
   * Delete a user.
   *
   * This marks the user for deletion and can be restored during
   * a grace period.
   *
   * To immediately delete a user, you must also call purge user.
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
   * Restore a user.
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
   * Purge a deleted user.
   *
   * The user must be marked for deletion before it can be purged.
   */
  async purge(
    userId: string,
    input?: Omit<UserPurgeInput, "userId">,
  ): Promise<adminv1.PurgeUserResponse>;
  async purge(input: UserPurgeInput): Promise<adminv1.PurgeUserResponse>;
  async purge(...args: any[]): Promise<adminv1.PurgeUserResponse> {
    const req = build({
      call: "admin.users.purge",
      method: "POST",
      path: "/admin/v1/users/{userId}:purge",
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as adminv1.PurgeUserResponse;
  }

  /**
   * Connect a user to an external account.
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
   * Update a user's external account.
   */
  async updateConnection(
    userId: string,
    input: Omit<UserUpdateConnectionInput, "userId">,
  ): Promise<adminv1.User>;
  async updateConnection(
    input: UserUpdateConnectionInput,
  ): Promise<adminv1.User>;
  async updateConnection(...args: any[]): Promise<adminv1.User> {
    const req = build({
      call: "admin.users.updateConnection",
      method: "PATCH",
      path: "/admin/v1/users/{userId}:updateConnection",
      idempotent: true,
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as adminv1.User;
  }

  /**
   * Disconnect a user from an external account.
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
   * Import a user from a user provider.
   *
   * If the user already exists, this is a no-op.
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
   * Report a user event.
   *
   * If the `<externalId>@<connectionId>` user identifier syntax is
   * used and the user doesn't exist, they will be imported.
   *
   * By default, the event is processed asynchronously.
   */
  async reportEvent(
    userId: string,
    input?: Omit<UserReportEventInput, "userId">,
  ): Promise<adminv1.ReportUserEventResponse>;
  async reportEvent(
    input: UserReportEventInput,
  ): Promise<adminv1.ReportUserEventResponse>;
  async reportEvent(...args: any[]): Promise<adminv1.ReportUserEventResponse> {
    const req = build({
      call: "admin.users.reportEvent",
      method: "POST",
      path: "/admin/v1/users/{userId}:event",
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as adminv1.ReportUserEventResponse;
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
   * Create a Portal session.
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
 * The input options for the `checkouts.create` method.
 */
interface CheckoutCreateInput extends RequestOptions {
  // The identifier of the organization.
  //
  // This is required if the user identifier is not specified.
  organizationId?: string;
  // The identifier of the user.
  //
  // This is required if the organization identifier is not specified.
  userId?: string;
  // The type of the checkout.
  type?: string;
  // The identifier of the plan.
  //
  // This allows you to specify the currently selected plan.
  planId?: string;
  // The identifier of the subscriptions.
  //
  // This allows you to specify a non-default subscription.
  subscriptionId?: string;
  // The identifier of the connection.
  //
  // This allows you to specify a non-default billing connection.
  connectionId?: string;

  // Attempt to submit checkout if ready and due amount is zero.
  submit?: boolean;
}

/**
 * The input options for the `checkouts.get` method.
 */
interface CheckoutGetInput extends RequestOptions {
  // The identifier of the checkout.
  checkoutId: string;
}

/**
 * The input options for the `checkouts.setPlan` method.
 */
interface CheckoutSetPlanInput extends RequestOptions {
  // The identifier of the checkout.
  checkoutId: string;

  // The identifier of the plan.
  //
  // This is required if completed isn't set to true.
  planId?: string;
  // Mark the step completed if it is optional.
  completed?: boolean;
}

/**
 * The input options for the `checkouts.setTerms` method.
 */
interface CheckoutSetTermsInput extends RequestOptions {
  // The identifier of the checkout.
  checkoutId: string;

  // The identifier of the plan.
  //
  // This is required if completed isn't set to true.
  planId?: string;
  // Mark the step completed if it is optional.
  completed?: boolean;
}

/**
 * The input options for the `checkouts.setTrial` method.
 */
interface CheckoutSetTrialInput extends RequestOptions {
  // The identifier of the checkout.
  checkoutId: string;

  // Whether to start, continue, or stop a trial.
  type?: string;
  // The number of days to trial.
  days?: number;
  // Mark the step completed if it is optional.
  completed?: boolean;
}

/**
 * The input options for the `checkouts.setItems` method.
 */
interface CheckoutSetItemsInput extends RequestOptions {
  // The identifier of the checkout.
  checkoutId: string;

  // The items to update.
  items?: adminv1.CheckoutItemInput[];
  // Mark the step completed if it is optional.
  completed?: boolean;
}

/**
 * The input options for the `checkouts.setPaymentMethod` method.
 */
interface CheckoutSetPaymentMethodInput extends RequestOptions {
  // The identifier of the checkout.
  checkoutId: string;

  // The identifier of the payment method.
  //
  // This is required if external ID isn't specified or completed
  // isn't set to true.
  paymentMethodId?: string;
  // The external identifier of the payment method to connect.
  //
  // This is required if payment method ID isn't specified or
  // completed isn't set to true.
  externalId?: string;
  // Mark the step completed if it is optional.
  completed?: boolean;
}

/**
 * The input options for the `checkouts.setBillingDetails` method.
 */
interface CheckoutSetBillingDetailsInput extends RequestOptions {
  // The identifier of the checkout.
  checkoutId: string;

  // The company or individual's full name.
  //
  // The maximum length is 200 characters.
  fullName?: string;
  // The billing details address.
  address?: commonv1.Address | null;
  // Mark the step completed if it is optional.
  completed?: boolean;
}

/**
 * The input options for the `checkouts.addDiscount` method.
 */
interface CheckoutAddDiscountInput extends RequestOptions {
  // The identifier of the checkout.
  checkoutId: string;

  // The discount code.
  code?: string;
  // Mark the step completed if it is optional.
  completed?: boolean;
}

/**
 * The input options for the `checkouts.removeDiscount` method.
 */
interface CheckoutRemoveDiscountInput extends RequestOptions {
  // The identifier of the checkout.
  checkoutId: string;

  // The identifier of the checkout discount.
  checkoutDiscountId?: string;
}

/**
 * The input options for the `checkouts.completePayment` method.
 */
interface CheckoutCompletePaymentInput extends RequestOptions {
  // The identifier of the checkout.
  checkoutId: string;
}

/**
 * The input options for the `checkouts.setCancel` method.
 */
interface CheckoutSetCancelInput extends RequestOptions {
  // The identifier of the checkout.
  checkoutId: string;

  // Whether to cancel at the end of the billing period or immediately.
  type?: string;
  // Mark the step completed if it is optional.
  completed?: boolean;
}

/**
 * The input options for the `checkouts.submit` method.
 */
interface CheckoutSubmitInput extends RequestOptions {
  // The identifier of the checkout.
  checkoutId: string;
}

/**
 * The input options for the `checkouts.cancel` method.
 */
interface CheckoutCancelInput extends RequestOptions {
  // The identifier of the checkout.
  checkoutId: string;
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
  // Whether to filter out flows not in the `START_PENDING` or `STARTED`
  // state.
  active?: boolean;
  // The identifier of the user that created the flow.
  //
  // When this is specified only the flows created by the user are
  // returned.
  creatorUserId?: string;
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
  // This is required if the user is not specified or
  // does not have an email address.
  email?: string;
  // The display name of the person to invite.
  displayName?: string;
  // The identifier of the role.
  roleId?: string;
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
 * The input options for the `flows.updateJoinOrganization` method.
 */
interface FlowUpdateJoinOrganizationInput extends RequestOptions {
  // The identifier of the flow.
  flowId: string;

  // The identifier of the role.
  roleId?: string;
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
  // This is required if the user identifier is not specified.
  organizationId?: string;
  // Filter results by user identifier.
  //
  // This is required if the organization identifier is not specified.
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
  // A comma-separated list of fields to order by.
  orderBy?: string;
  // The Invoice view to return in the results.
  //
  // This defaults to the `BASIC` view.
  view?: string;
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
 * The input options for the `invoices.pay` method.
 */
interface InvoicePayInput extends RequestOptions {
  // The identifier of the invoice.
  invoiceId: string;

  // Restrict by organization identifier.
  organizationId?: string;
  // Restrict by user identifier.
  userId?: string;
  // The identifier of the payment method.
  //
  // The default payment method will be used if not specified.
  paymentMethodId?: string;
}

/**
 * The input options for the `organizations.list` method.
 */
interface OrganizationListInput extends RequestOptions {
  // Filter the results by display name.
  //
  // To enable prefix filtering append `*` to the end of the value
  // and ensure you provide at least 3 characters excluding the
  // wildcard.
  //
  // This filter is case-insensitivity.
  displayName?: string;
  // Filter the results by email address.
  //
  // To enable prefix filtering append `*` to the end of the value
  // and ensure you provide at least 3 characters excluding the
  // wildcard.
  //
  // This filter is case-insensitivity.
  email?: string;
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
  // The default address for the organization.
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
  // The default address for the organization.
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
 * The input options for the `organizations.purge` method.
 */
interface OrganizationPurgeInput extends RequestOptions {
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
 * The input options for the `organizations.updateConnection` method.
 */
interface OrganizationUpdateConnectionInput extends RequestOptions {
  // The identifier of the organization.
  organizationId: string;

  // The system-assigned identifier for the connection of the external account.
  connectionId?: string;
  // The human-readable display name of the external account.
  //
  // The maximum length is 200 characters.
  //
  // This might be further restricted by the external provider.
  displayName?: string;
  // The email address of the external account.
  //
  // The maximum length is 320 characters.
  //
  // This might be further restricted by the external provider.
  email?: string;
  // Whether the external account's email address has been verified.
  emailVerified?: boolean;
  // The E164 phone number for the external account (e.g. `+12125550123`).
  phoneNumber?: string;
  // Whether the external account's phone number has been verified.
  phoneNumberVerified?: boolean;
  // The default ISO-4217 currency code for the external account (e.g. `USD`).
  currencyCode?: string;
  // The billing address for the external account.
  address?: commonv1.Address | null;
  // Whether the external account is disabled.
  disabled?: boolean;
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

  // Filter the results by display name.
  //
  // To enable prefix filtering append `*` to the end of the value
  // and ensure you provide at least 3 characters excluding the
  // wildcard.
  //
  // This filter is case-insensitivity.
  displayName?: string;
  // Filter the results by email address.
  //
  // To enable prefix filtering append `*` to the end of the value
  // and ensure you provide at least 3 characters excluding the
  // wildcard.
  //
  // This filter is case-insensitivity.
  email?: string;
  // Filter the results by a role identifier.
  roleId?: string;
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
  // A comma-separated list of fields to order by.
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
 * The input options for the `paymentMethods.create` method.
 */
interface PaymentMethodCreateInput extends RequestOptions {
  // The identifier of the organization.
  //
  // This is required if the user identifier not specified.
  organizationId?: string;
  // The identifier of the user.
  //
  // This is required if the organization identifier not specified.
  userId?: string;
  // The identifier of the connection.
  connectionId?: string;
  // The external identifier of the payment method to connect.
  externalId?: string;
  // Whether to set the payment method as the default.
  //
  // This defaults to true.
  default?: boolean;
}

/**
 * The input options for the `paymentMethods.createIntent` method.
 */
interface PaymentMethodCreateIntentInput extends RequestOptions {
  // The identifier of the organization.
  //
  // This is required if the user identifier is not specified.
  organizationId?: string;
  // The identifier of the user.
  //
  // This is required if the organization identifier is not not
  // specified.
  userId?: string;
  // The identifier of the connection.
  connectionId?: string;
}

/**
 * The input options for the `paymentMethods.get` method.
 */
interface PaymentMethodGetInput extends RequestOptions {
  // The identifier of the payment method.
  paymentMethodId: string;

  // The identifier of the organization.
  //
  // Optionally restrict update to payment methods owned by
  // this organization.
  organizationId?: string;
  // The identifier of the user.
  //
  // Optionally restrict update to payment methods owned by
  // this user.
  userId?: string;
}

/**
 * The input options for the `paymentMethods.update` method.
 */
interface PaymentMethodUpdateInput extends RequestOptions {
  // The identifier of the payment method.
  paymentMethodId: string;

  // The full name of the owner of the payment method (e.g. `Jane Doe`).
  fullName?: string;
  // The address for the payment method.
  address?: commonv1.Address | null;
  // The card expiration year (e.g. `2030`).
  expYear?: number;
  // The card expiration month (e.g. `12`).
  expMonth?: number;

  // The identifier of the organization.
  //
  // Optionally restrict update to payment methods owned by
  // this organization.
  organizationId?: string;
  // The identifier of the user.
  //
  // Optionally restrict update to payment methods owned by
  // this user.
  userId?: string;
}

/**
 * The input options for the `paymentMethods.setDefault` method.
 */
interface PaymentMethodSetDefaultInput extends RequestOptions {
  // The identifier of the payment method.
  paymentMethodId: string;

  // The identifier of the organization.
  //
  // Optionally restrict set default to payment methods owned by
  // this organization.
  organizationId?: string;
  // The identifier of the user.
  //
  // Optionally restrict set default to payment methods owned by
  // this user.
  userId?: string;
}

/**
 * The input options for the `paymentMethods.delete` method.
 */
interface PaymentMethodDeleteInput extends RequestOptions {
  // The identifier of the payment method.
  paymentMethodId: string;

  // The identifier of the organization.
  //
  // Optionally restrict delete to payment methods owned by
  // this organization.
  organizationId?: string;
  // The identifier of the user.
  //
  // Optionally restrict delete to payment methods owned by
  // this user.
  userId?: string;
}

/**
 * The input options for the `pricing.get` method.
 */
interface PricingGetInput extends RequestOptions {
  // Whether to get pricing for users or organizations.
  //
  // This is not required if either user ID or organization ID is specified
  // and will default to user if no options are specified.
  accountType?: string;
  // Show pricing for specified organization.
  organizationId?: string;
  // Show pricing for the specified user.
  userId?: string;
}

/**
 * The input options for the `roles.list` method.
 */
interface RoleListInput extends RequestOptions {
  // The maximum number of roles to return. The API may return fewer than
  // this value.
  //
  // If unspecified, at most 20 roles will be returned.
  // The maximum value is 100; values above 100 will be coerced to 100.
  pageSize?: number;
  // A page token, received from a previous list roles call.
  // Provide this to retrieve the subsequent page.
  //
  // When paginating, all other parameters provided to list roles must match
  // the call that provided the page token.
  pageToken?: string;
  // A comma-separated list of fields to order by.
  orderBy?: string;
}

/**
 * The input options for the `subscriptions.list` method.
 */
interface SubscriptionListInput extends RequestOptions {
  // Filter results by organization identifier.
  organizationId?: string;
  // Filter results by user identifier.
  userId?: string;
  // Filter results by state.
  state?: string;
  // Filter results by plan group identifier.
  //
  // You can specify `unmanaged` to see all subscriptions without a plan.
  planGroupId?: string;
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
  // A comma-separated list of fields to order by.
  //
  // This is only supported when either `organizationId` or `userId` is specified.
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
  // Filter the results by display name.
  //
  // To enable prefix filtering append `*` to the end of the value
  // and ensure you provide at least 3 characters excluding the
  // wildcard.
  //
  // This filter is case-insensitivity.
  displayName?: string;
  // Filter the results by email address.
  //
  // To enable prefix filtering append `*` to the end of the value
  // and ensure you provide at least 3 characters excluding the
  // wildcard.
  //
  // This filter is case-insensitivity.
  email?: string;
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
  // A comma-separated list of fields to order by.
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
  // The default address for the user.
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
  // The default address for the user.
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
 * The input options for the `users.purge` method.
 */
interface UserPurgeInput extends RequestOptions {
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
 * The input options for the `users.updateConnection` method.
 */
interface UserUpdateConnectionInput extends RequestOptions {
  // The identifier of the user.
  userId: string;

  // The system-assigned identifier for the connection of the external account.
  connectionId?: string;
  // The human-readable display name of the external account.
  //
  // The maximum length is 200 characters.
  //
  // This might be further restricted by the external provider.
  displayName?: string;
  // The email address of the external account.
  //
  // The maximum length is 320 characters.
  //
  // This might be further restricted by the external provider.
  email?: string;
  // Whether the external account's email address has been verified.
  emailVerified?: boolean;
  // The E164 phone number for the external account (e.g. `+12125550123`).
  phoneNumber?: string;
  // Whether the external account's phone number has been verified.
  phoneNumberVerified?: boolean;
  // The default ISO-4217 currency code for the external account (e.g. `USD`).
  currencyCode?: string;
  // The billing address for the external account.
  address?: commonv1.Address | null;
  // Whether the external account is disabled.
  disabled?: boolean;
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
  // and `connectionId` is the User provider connection identifier.
  userId: string;
}

/**
 * The input options for the `users.reportEvent` method.
 */
interface UserReportEventInput extends RequestOptions {
  // The identifier of the user.
  //
  // This can be in the format `<externalId>@<connectionId>` where
  // `externalId` is the identity provider user identifier and
  // and `connectionId` is the User provider connection identifier.
  userId: string;

  // The event type.
  //
  // If not specified, this defaults to `CHANGED`.
  type?: string;
  // Process the user action synchronously.
  //
  // Otherwise the action is processed in the background and errors
  // won't be returned.
  wait?: boolean;
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
  // you can also pass in the User provider external identifier in the
  // format `<externalId>@<connectionId>` and if the user doesn't
  // exist in UserHub they will automatically be imported.
  userId: string;

  // The Portal URL, this is the target URL on the portal site.
  //
  // If not defined the root URL for the portal will be used.
  //
  // This does not need to be the full URL, you have the option
  // of passing in a path instead (e.g. `/`).
  //
  // You also have the option of including the `{accountId}`
  // string in the path/URL which will be replaced with either the
  // UserHub user ID (if `organizationId` is not specified)
  // or the UserHub organization ID (if specified).
  //
  // Examples:
  // * `/{accountId}` - the billing dashboard
  // * `/{accountId}/cancel` - cancel current plan
  // * `/{accountId}/members` - manage organization members
  // * `/{accountId}/invite` - invite a user to an organization
  portalUrl?: string;
  // The URL the user should be sent to when they want to return to
  // the app (e.g. cancel checkout).
  //
  // If not defined the app URL will be used.
  returnUrl?: string;
  // The URL the user should be sent after they successfully complete
  // an action (e.g. checkout).
  //
  // If not defined the return URL will be used.
  successUrl?: string;
  // The organization ID.
  //
  // When specified the `{accountId}` in the `portalUrl` will be
  // replaced with the organization ID, otherwise the user ID
  // will be used.
  organizationId?: string;
}
