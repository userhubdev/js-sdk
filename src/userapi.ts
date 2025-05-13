// Code generated. DO NOT EDIT.
import type * as apiv1 from "./apiv1.ts";
import type * as commonv1 from "./commonv1.ts";
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
   * The billing account methods.
   */
  public get billingAccount(): BillingAccount {
    return new BillingAccount(this.transport);
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
   * The Portal session.
   */
  public get session(): Session {
    return new Session(this.transport);
  }
}

/**
 * The billing account methods.
 */
class BillingAccount {
  private readonly transport: Transport;

  constructor(transport: Transport) {
    this.transport = transport;
  }

  /**
   * Get the default billing account.
   */
  async get(input?: BillingAccountGetInput): Promise<userv1.BillingAccount>;
  async get(...args: any[]): Promise<userv1.BillingAccount> {
    const req = build({
      call: "user.billingAccount.get",
      method: "GET",
      path: "/user/v1/billingAccount",
      query: ["organizationId"],
      idempotent: true,
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as userv1.BillingAccount;
  }

  /**
   * Update the default billing account.
   */
  async update(
    input?: BillingAccountUpdateInput,
  ): Promise<userv1.BillingAccount>;
  async update(...args: any[]): Promise<userv1.BillingAccount> {
    const req = build({
      call: "user.billingAccount.update",
      method: "PATCH",
      path: "/user/v1/billingAccount",
      query: ["organizationId"],
      idempotent: true,
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as userv1.BillingAccount;
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
   * Create a new checkout.
   */
  async create(input?: CheckoutCreateInput): Promise<userv1.Checkout>;
  async create(...args: any[]): Promise<userv1.Checkout> {
    const req = build({
      call: "user.checkouts.create",
      method: "POST",
      path: "/user/v1/checkouts",
      query: ["submit"],
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as userv1.Checkout;
  }

  /**
   * Get a checkout.
   */
  async get(
    checkoutId: string,
    input?: Omit<CheckoutGetInput, "checkoutId">,
  ): Promise<userv1.Checkout>;
  async get(input: CheckoutGetInput): Promise<userv1.Checkout>;
  async get(...args: any[]): Promise<userv1.Checkout> {
    const req = build({
      call: "user.checkouts.get",
      method: "GET",
      path: "/user/v1/checkouts/{checkoutId}",
      idempotent: true,
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as userv1.Checkout;
  }

  /**
   * Set plan for a checkout.
   */
  async setPlan(
    checkoutId: string,
    input?: Omit<CheckoutSetPlanInput, "checkoutId">,
  ): Promise<userv1.Checkout>;
  async setPlan(input: CheckoutSetPlanInput): Promise<userv1.Checkout>;
  async setPlan(...args: any[]): Promise<userv1.Checkout> {
    const req = build({
      call: "user.checkouts.setPlan",
      method: "POST",
      path: "/user/v1/checkouts/{checkoutId}:setPlan",
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as userv1.Checkout;
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
  ): Promise<userv1.Checkout>;
  async setTerms(input: CheckoutSetTermsInput): Promise<userv1.Checkout>;
  async setTerms(...args: any[]): Promise<userv1.Checkout> {
    const req = build({
      call: "user.checkouts.setTerms",
      method: "POST",
      path: "/user/v1/checkouts/{checkoutId}:setTerms",
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as userv1.Checkout;
  }

  /**
   * Set item quantities for a checkout.
   */
  async setItems(
    checkoutId: string,
    input?: Omit<CheckoutSetItemsInput, "checkoutId">,
  ): Promise<userv1.Checkout>;
  async setItems(input: CheckoutSetItemsInput): Promise<userv1.Checkout>;
  async setItems(...args: any[]): Promise<userv1.Checkout> {
    const req = build({
      call: "user.checkouts.setItems",
      method: "POST",
      path: "/user/v1/checkouts/{checkoutId}:setItems",
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as userv1.Checkout;
  }

  /**
   * Set payment method for a checkout.
   */
  async setPaymentMethod(
    checkoutId: string,
    input?: Omit<CheckoutSetPaymentMethodInput, "checkoutId">,
  ): Promise<userv1.Checkout>;
  async setPaymentMethod(
    input: CheckoutSetPaymentMethodInput,
  ): Promise<userv1.Checkout>;
  async setPaymentMethod(...args: any[]): Promise<userv1.Checkout> {
    const req = build({
      call: "user.checkouts.setPaymentMethod",
      method: "POST",
      path: "/user/v1/checkouts/{checkoutId}:setPaymentMethod",
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as userv1.Checkout;
  }

  /**
   * Set billing details for a checkout.
   */
  async setBillingDetails(
    checkoutId: string,
    input?: Omit<CheckoutSetBillingDetailsInput, "checkoutId">,
  ): Promise<userv1.Checkout>;
  async setBillingDetails(
    input: CheckoutSetBillingDetailsInput,
  ): Promise<userv1.Checkout>;
  async setBillingDetails(...args: any[]): Promise<userv1.Checkout> {
    const req = build({
      call: "user.checkouts.setBillingDetails",
      method: "POST",
      path: "/user/v1/checkouts/{checkoutId}:setBillingDetails",
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as userv1.Checkout;
  }

  /**
   * Add discount to a checkout.
   */
  async addDiscount(
    checkoutId: string,
    input?: Omit<CheckoutAddDiscountInput, "checkoutId">,
  ): Promise<userv1.Checkout>;
  async addDiscount(input: CheckoutAddDiscountInput): Promise<userv1.Checkout>;
  async addDiscount(...args: any[]): Promise<userv1.Checkout> {
    const req = build({
      call: "user.checkouts.addDiscount",
      method: "POST",
      path: "/user/v1/checkouts/{checkoutId}:addDiscount",
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as userv1.Checkout;
  }

  /**
   * Remove discount from a checkout.
   */
  async removeDiscount(
    checkoutId: string,
    input: Omit<CheckoutRemoveDiscountInput, "checkoutId">,
  ): Promise<userv1.Checkout>;
  async removeDiscount(
    input: CheckoutRemoveDiscountInput,
  ): Promise<userv1.Checkout>;
  async removeDiscount(...args: any[]): Promise<userv1.Checkout> {
    const req = build({
      call: "user.checkouts.removeDiscount",
      method: "POST",
      path: "/user/v1/checkouts/{checkoutId}:removeDiscount",
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as userv1.Checkout;
  }

  /**
   * Complete payment for a checkout.
   */
  async completePayment(
    checkoutId: string,
    input?: Omit<CheckoutCompletePaymentInput, "checkoutId">,
  ): Promise<userv1.Checkout>;
  async completePayment(
    input: CheckoutCompletePaymentInput,
  ): Promise<userv1.Checkout>;
  async completePayment(...args: any[]): Promise<userv1.Checkout> {
    const req = build({
      call: "user.checkouts.completePayment",
      method: "POST",
      path: "/user/v1/checkouts/{checkoutId}:completePayment",
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as userv1.Checkout;
  }

  /**
   * Submit a checkout for processing.
   */
  async submit(
    checkoutId: string,
    input?: Omit<CheckoutSubmitInput, "checkoutId">,
  ): Promise<userv1.Checkout>;
  async submit(input: CheckoutSubmitInput): Promise<userv1.Checkout>;
  async submit(...args: any[]): Promise<userv1.Checkout> {
    const req = build({
      call: "user.checkouts.submit",
      method: "POST",
      path: "/user/v1/checkouts/{checkoutId}:submit",
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as userv1.Checkout;
  }

  /**
   * Cancel a checkout.
   */
  async cancel(
    checkoutId: string,
    input?: Omit<CheckoutCancelInput, "checkoutId">,
  ): Promise<userv1.Checkout>;
  async cancel(input: CheckoutCancelInput): Promise<userv1.Checkout>;
  async cancel(...args: any[]): Promise<userv1.Checkout> {
    const req = build({
      call: "user.checkouts.cancel",
      method: "POST",
      path: "/user/v1/checkouts/{checkoutId}:cancel",
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as userv1.Checkout;
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
   * Create a new join organization flow.
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
   * Update a join organization flow.
   */
  async updateJoinOrganization(
    flowId: string,
    input?: Omit<FlowUpdateJoinOrganizationInput, "flowId">,
  ): Promise<userv1.Flow>;
  async updateJoinOrganization(
    input: FlowUpdateJoinOrganizationInput,
  ): Promise<userv1.Flow>;
  async updateJoinOrganization(...args: any[]): Promise<userv1.Flow> {
    const req = build({
      call: "user.flows.updateJoinOrganization",
      method: "PATCH",
      path: "/user/v1/flows/{flowId}:updateJoinOrganization",
      idempotent: true,
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as userv1.Flow;
  }

  /**
   * Create a new signup flow.
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
   * Get a flow.
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
   * Consume a flow.
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
   * Cancel a flow.
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
   * List invoices.
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
   * Get an invoice.
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

  /**
   * Pay an invoice.
   */
  async pay(
    invoiceId: string,
    input?: Omit<InvoicePayInput, "invoiceId">,
  ): Promise<userv1.Invoice>;
  async pay(input: InvoicePayInput): Promise<userv1.Invoice>;
  async pay(...args: any[]): Promise<userv1.Invoice> {
    const req = build({
      call: "user.invoices.pay",
      method: "POST",
      path: "/user/v1/invoices/{invoiceId}:pay",
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
   * List organizations.
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
   * Create a new organization.
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
   * Get an organization.
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
   * Update an organization.
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
   * List organization members.
   */
  async listMembers(
    organizationId: string,
    input?: Omit<OrganizationListMembersInput, "organizationId">,
  ): Promise<userv1.ListMembersResponse>;
  async listMembers(
    input: OrganizationListMembersInput,
  ): Promise<userv1.ListMembersResponse>;
  async listMembers(...args: any[]): Promise<userv1.ListMembersResponse> {
    const req = build({
      call: "user.organizations.listMembers",
      method: "GET",
      path: "/user/v1/organizations/{organizationId}/members",
      query: ["pageSize", "pageToken", "orderBy"],
      idempotent: true,
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as userv1.ListMembersResponse;
  }

  /**
   * Get an organization member.
   */
  async getMember(
    organizationId: string,
    userId: string,
    input?: Omit<OrganizationGetMemberInput, "organizationId" | "userId">,
  ): Promise<userv1.Member>;
  async getMember(input: OrganizationGetMemberInput): Promise<userv1.Member>;
  async getMember(...args: any[]): Promise<userv1.Member> {
    const req = build({
      call: "user.organizations.getMember",
      method: "GET",
      path: "/user/v1/organizations/{organizationId}/members/{userId}",
      idempotent: true,
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as userv1.Member;
  }

  /**
   * Update an organization member.
   */
  async updateMember(
    organizationId: string,
    userId: string,
    input?: Omit<OrganizationUpdateMemberInput, "organizationId" | "userId">,
  ): Promise<userv1.Member>;
  async updateMember(
    input: OrganizationUpdateMemberInput,
  ): Promise<userv1.Member>;
  async updateMember(...args: any[]): Promise<userv1.Member> {
    const req = build({
      call: "user.organizations.updateMember",
      method: "PATCH",
      path: "/user/v1/organizations/{organizationId}/members/{userId}",
      idempotent: true,
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as userv1.Member;
  }

  /**
   * Assign a seat to an organization member.
   *
   * This will automatically purchase additional seats if none
   * are available and the plan has just-in-time seat provisioning
   * enabled.
   */
  async assignMemberSeat(
    organizationId: string,
    userId: string,
    input?: Omit<
      OrganizationAssignMemberSeatInput,
      "organizationId" | "userId"
    >,
  ): Promise<userv1.Member>;
  async assignMemberSeat(
    input: OrganizationAssignMemberSeatInput,
  ): Promise<userv1.Member>;
  async assignMemberSeat(...args: any[]): Promise<userv1.Member> {
    const req = build({
      call: "user.organizations.assignMemberSeat",
      method: "POST",
      path: "/user/v1/organizations/{organizationId}/members/{userId}:assignSeat",
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as userv1.Member;
  }

  /**
   * Unassign a seat from an organization member.
   */
  async unassignMemberSeat(
    organizationId: string,
    userId: string,
    input?: Omit<
      OrganizationUnassignMemberSeatInput,
      "organizationId" | "userId"
    >,
  ): Promise<userv1.Member>;
  async unassignMemberSeat(
    input: OrganizationUnassignMemberSeatInput,
  ): Promise<userv1.Member>;
  async unassignMemberSeat(...args: any[]): Promise<userv1.Member> {
    const req = build({
      call: "user.organizations.unassignMemberSeat",
      method: "POST",
      path: "/user/v1/organizations/{organizationId}/members/{userId}:unassignSeat",
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as userv1.Member;
  }

  /**
   * Remove a member from an organization.
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
      call: "user.organizations.removeMember",
      method: "DELETE",
      path: "/user/v1/organizations/{organizationId}/members/{userId}",
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as apiv1.EmptyResponse;
  }

  /**
   * Delete an organization.
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
   * Leave an organization.
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
 * The payment method methods.
 */
class PaymentMethods {
  private readonly transport: Transport;

  constructor(transport: Transport) {
    this.transport = transport;
  }

  /**
   * List payment methods for an account.
   */
  async list(
    input?: PaymentMethodListInput,
  ): Promise<userv1.ListPaymentMethodsResponse>;
  async list(...args: any[]): Promise<userv1.ListPaymentMethodsResponse> {
    const req = build({
      call: "user.paymentMethods.list",
      method: "GET",
      path: "/user/v1/paymentMethods",
      query: ["organizationId", "pageSize", "pageToken"],
      idempotent: true,
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as userv1.ListPaymentMethodsResponse;
  }

  /**
   * Create a new payment method.
   */
  async create(input: PaymentMethodCreateInput): Promise<userv1.PaymentMethod>;
  async create(...args: any[]): Promise<userv1.PaymentMethod> {
    const req = build({
      call: "user.paymentMethods.create",
      method: "POST",
      path: "/user/v1/paymentMethods",
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as userv1.PaymentMethod;
  }

  /**
   * Create a new payment method intent.
   *
   * This can be used with a third-party billing provider to
   * store a payment method.
   */
  async createIntent(
    input?: PaymentMethodCreateIntentInput,
  ): Promise<userv1.PaymentMethodIntent>;
  async createIntent(...args: any[]): Promise<userv1.PaymentMethodIntent> {
    const req = build({
      call: "user.paymentMethods.createIntent",
      method: "POST",
      path: "/user/v1/paymentMethods:createIntent",
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as userv1.PaymentMethodIntent;
  }

  /**
   * Get a payment method.
   */
  async get(
    paymentMethodId: string,
    input?: Omit<PaymentMethodGetInput, "paymentMethodId">,
  ): Promise<userv1.PaymentMethod>;
  async get(input: PaymentMethodGetInput): Promise<userv1.PaymentMethod>;
  async get(...args: any[]): Promise<userv1.PaymentMethod> {
    const req = build({
      call: "user.paymentMethods.get",
      method: "GET",
      path: "/user/v1/paymentMethods/{paymentMethodId}",
      idempotent: true,
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as userv1.PaymentMethod;
  }

  /**
   * Update a payment method.
   */
  async update(
    paymentMethodId: string,
    input?: Omit<PaymentMethodUpdateInput, "paymentMethodId">,
  ): Promise<userv1.PaymentMethod>;
  async update(input: PaymentMethodUpdateInput): Promise<userv1.PaymentMethod>;
  async update(...args: any[]): Promise<userv1.PaymentMethod> {
    const req = build({
      call: "user.paymentMethods.update",
      method: "PATCH",
      path: "/user/v1/paymentMethods/{paymentMethodId}",
      idempotent: true,
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as userv1.PaymentMethod;
  }

  /**
   * Set a default payment method for an account.
   */
  async setDefault(
    paymentMethodId: string,
    input?: Omit<PaymentMethodSetDefaultInput, "paymentMethodId">,
  ): Promise<userv1.PaymentMethod>;
  async setDefault(
    input: PaymentMethodSetDefaultInput,
  ): Promise<userv1.PaymentMethod>;
  async setDefault(...args: any[]): Promise<userv1.PaymentMethod> {
    const req = build({
      call: "user.paymentMethods.setDefault",
      method: "POST",
      path: "/user/v1/paymentMethods/{paymentMethodId}:setDefault",
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as userv1.PaymentMethod;
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
      call: "user.paymentMethods.delete",
      method: "DELETE",
      path: "/user/v1/paymentMethods/{paymentMethodId}",
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
  async get(input?: PricingGetInput): Promise<userv1.Pricing>;
  async get(...args: any[]): Promise<userv1.Pricing> {
    const req = build({
      call: "user.pricing.get",
      method: "GET",
      path: "/user/v1/pricing",
      query: ["accountType", "organizationId", "public"],
      idempotent: true,
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as userv1.Pricing;
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
  async list(input?: RoleListInput): Promise<userv1.ListRolesResponse>;
  async list(...args: any[]): Promise<userv1.ListRolesResponse> {
    const req = build({
      call: "user.roles.list",
      method: "GET",
      path: "/user/v1/roles",
      query: ["pageSize", "pageToken", "orderBy"],
      idempotent: true,
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as userv1.ListRolesResponse;
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
   * Get details about the current session.
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

  /**
   * Exchange an ID token from an IdP for an access token.
   */
  async exchangeToken(
    input: SessionExchangeTokenInput,
  ): Promise<userv1.ExchangeSessionTokenResponse>;
  async exchangeToken(
    ...args: any[]
  ): Promise<userv1.ExchangeSessionTokenResponse> {
    const req = build({
      call: "user.session.exchangeToken",
      method: "POST",
      path: "/user/v1/session:exchangeToken",
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as userv1.ExchangeSessionTokenResponse;
  }

  /**
   * Create a new Portal session.
   */
  async createPortal(
    input?: SessionCreatePortalInput,
  ): Promise<userv1.CreatePortalSessionResponse>;
  async createPortal(
    ...args: any[]
  ): Promise<userv1.CreatePortalSessionResponse> {
    const req = build({
      call: "user.session.createPortal",
      method: "POST",
      path: "/user/v1/session:createPortal",
      args,
    });

    const res = await this.transport.execute(req);
    return res.body as userv1.CreatePortalSessionResponse;
  }
}

/**
 * The input options for the `billingAccount.get` method.
 */
interface BillingAccountGetInput extends RequestOptions {
  // The identifier of the organization.
  //
  // If not specified the billing account for the user is returned.
  organizationId?: string;
}

/**
 * The input options for the `billingAccount.update` method.
 */
interface BillingAccountUpdateInput extends RequestOptions {
  // The human-readable display name of the billing account.
  //
  // The maximum length is 200 characters.
  //
  // This might be further restricted by the billing provider.
  displayName?: string;
  // The email address of the billing account.
  //
  // The maximum length is 320 characters.
  //
  // This might be further restricted by the billing provider.
  email?: string;
  // The E164 phone number of the billing account (e.g. `+12125550123`).
  phoneNumber?: string;
  // The address for the billing account.
  address?: commonv1.Address | null;

  // The identifier of the organization.
  //
  // If not specified the billing account for the user is used.
  organizationId?: string;
}

/**
 * The input options for the `checkouts.create` method.
 */
interface CheckoutCreateInput extends RequestOptions {
  // The identifier of the organization.
  //
  // This must be provided for organization checkouts.
  organizationId?: string;
  // The type of the checkout.
  type?: string;
  // The identifier of the plan.
  //
  // This allows you to specify the currently selected plan.
  planId?: string;

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
 * The input options for the `checkouts.setItems` method.
 */
interface CheckoutSetItemsInput extends RequestOptions {
  // The identifier of the checkout.
  checkoutId: string;

  // The items to update.
  items?: userv1.CheckoutItemInput[];
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
  // The identifier of the role.
  roleId?: string;
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
}

/**
 * The input options for the `flows.get` method.
 */
interface FlowGetInput extends RequestOptions {
  // The identifier of the flow or the flow secret.
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
 * The input options for the `invoices.pay` method.
 */
interface InvoicePayInput extends RequestOptions {
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
  // A comma-separated list of fields to order by.
  orderBy?: string;
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
}

/**
 * The input options for the `organizations.assignMemberSeat` method.
 */
interface OrganizationAssignMemberSeatInput extends RequestOptions {
  // The identifier of the organization.
  organizationId: string;
  // The identifier of the user.
  userId: string;
}

/**
 * The input options for the `organizations.unassignMemberSeat` method.
 */
interface OrganizationUnassignMemberSeatInput extends RequestOptions {
  // The identifier of the organization.
  organizationId: string;
  // The identifier of the user.
  userId: string;
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
 * The input options for the `paymentMethods.list` method.
 */
interface PaymentMethodListInput extends RequestOptions {
  // Show results for specified organization.
  //
  // If this is not provided the user's individual subscription(s)
  // will be returned.
  organizationId?: string;
  // The maximum number of payment methods to return. The API may return fewer than
  // this value.
  //
  // If unspecified, at most 20 payment methods will be returned.
  // The maximum value is 100; values above 100 will be coerced to 100.
  pageSize?: number;
  // A page token, received from a previous list payment methods call.
  // Provide this to retrieve the subsequent page.
  //
  // When paginating, all other parameters provided to list payment methods must match
  // the call that provided the page token.
  pageToken?: string;
}

/**
 * The input options for the `paymentMethods.create` method.
 */
interface PaymentMethodCreateInput extends RequestOptions {
  // The identifier of the organization.
  organizationId?: string;
  // The external identifier of the payment method to connect.
  externalId?: string;
}

/**
 * The input options for the `paymentMethods.createIntent` method.
 */
interface PaymentMethodCreateIntentInput extends RequestOptions {
  // The identifier of the organization.
  organizationId?: string;
}

/**
 * The input options for the `paymentMethods.get` method.
 */
interface PaymentMethodGetInput extends RequestOptions {
  // The identifier of the payment method.
  paymentMethodId: string;
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
}

/**
 * The input options for the `paymentMethods.setDefault` method.
 */
interface PaymentMethodSetDefaultInput extends RequestOptions {
  // The identifier of the payment method.
  paymentMethodId: string;
}

/**
 * The input options for the `paymentMethods.delete` method.
 */
interface PaymentMethodDeleteInput extends RequestOptions {
  // The identifier of the payment method.
  paymentMethodId: string;
}

/**
 * The input options for the `pricing.get` method.
 */
interface PricingGetInput extends RequestOptions {
  // Whether to get pricing for users or organizations.
  //
  // This is not required if organization ID is specified
  // and will default to user if no options are specified.
  accountType?: string;
  // Show pricing for specified organization.
  //
  // If this and account type are not specified, it will default to
  // the requesting user for authenticated requests.
  organizationId?: string;
  // Always get the current public pricing.
  //
  // For unauthenticated requests, this is always true.
  public?: boolean;
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
 * The input options for the `session.get` method.
 */
interface SessionGetInput extends RequestOptions {}

/**
 * The input options for the `session.exchangeToken` method.
 */
interface SessionExchangeTokenInput extends RequestOptions {
  // The IdP ID token which is used to authenticated the user.
  token?: string;
}

/**
 * The input options for the `session.createPortal` method.
 */
interface SessionCreatePortalInput extends RequestOptions {
  // The identifier of the organization.
  //
  // When specified the `{accountId}` in the `portalUrl` will be
  // replaced with the organization ID, otherwise the user ID
  // will be used.
  organizationId?: string;
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
  // * `/{accountId}/checkout` - start a checkout
  // * `/{accountId}/checkout/<some-plan-id>` - start a checkout with a specified plan
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
}
