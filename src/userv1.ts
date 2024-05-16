// Code generated. DO NOT EDIT.
import type * as apiv1 from "./apiv1.ts";
import type * as commonv1 from "./commonv1.ts";

/**
 * The account view of the subscription.
 */
export interface AccountSubscription {
  /**
   * The system-assigned identifier of the subscription.
   */
  id: string;
  /**
   * The state of the subscription.
   */
  state: string;
  /**
   * The anchor time of the billing cycle.
   */
  anchorTime?: Date | null;
  /**
   * The subscription plan.
   */
  plan?: AccountSubscriptionPlan | null;
  /**
   * The user's seat.
   *
   * This will only be set for organization subscriptions where
   * the user has been assigned a seat.
   */
  seat?: AccountSubscriptionSeat | null;
}

/**
 * The plan information.
 */
export interface AccountSubscriptionPlan {
  /**
   * The identifier of the plan.
   */
  id: string;
  /**
   * The human-readable display name of the plan.
   */
  displayName: string;
  /**
   * The plan product.
   */
  product?: Product | null;
}

/**
 * The user's seat information.
 */
export interface AccountSubscriptionSeat {
  /**
   * The seat product.
   */
  product?: Product | null;
}

/**
 * The billing account for an organization or user.
 */
export interface BillingAccount {
  /**
   * The status of the billing account.
   */
  state?: string;
  /**
   * The balance amount for the account.
   *
   * A negative value indicates an amount which will be subtracted from the next
   * invoice (credit).
   *
   * A positive value indicates an amount which will be added to the next
   * invoice (debt).
   */
  balanceAmount?: string;
  /**
   * The ISO-4217 currency code for the account (e.g. `USD`).
   */
  currencyCode?: string;
  /**
   * The default and latest 10 payment methods for the account.
   */
  paymentMethods?: PaymentMethod[];
  /**
   * The subscription for the account.
   */
  subscription?: Subscription | null;
}

/**
 * A card payment method (e.g. credit, debit, etc...).
 */
export interface CardPaymentMethod {
  /**
   * The brand of the card (e.g. `VISA`).
   */
  brand?: string;
  /**
   * The expiration year.
   */
  expYear?: number;
  /**
   * The expiration month.
   */
  expMonth?: number;
  /**
   * The last for digits of the card.
   */
  last4?: string;
  /**
   * The funding method for the card (e.g. `DEBIT`)
   */
  fundingType?: string;
}

/**
 * The expiration date for the card.
 */
export interface CardPaymentMethodExpiration {
  /**
   * The expiration year.
   */
  year?: number;
  /**
   * The expiration month.
   */
  month?: number;
}

/**
 * An invitation, task, or user request (e.g. join organization).
 */
export interface Flow {
  /**
   * The system-assigned identifier of the flow.
   */
  id: string;
  /**
   * The current state of the flow.
   */
  state: string;
  /**
   * The code that best describes the reason for the state.
   */
  stateReason?: string;
  /**
   * The flow type.
   */
  type: string;
  /**
   * The target organization for the flow.
   */
  organization?: Organization | null;
  /**
   * The target user for the flow.
   */
  user?: User | null;
  /**
   * The user who created the flow.
   */
  creator?: User | null;
  /**
   * The time the flow will expire.
   */
  expireTime: Date;
  /**
   * The creation time of the flow.
   */
  createTime: Date;
  /**
   * The join organization flow type specific data.
   */
  joinOrganization?: JoinOrganizationFlow | null;
  /**
   * The signup flow type specific data.
   */
  signup?: SignupFlow | null;
}

/**
 * A bill or statement.
 */
export interface Invoice {
  /**
   * The system-assigned identifier of the invoice.
   */
  id: string;
  /**
   * The status of the invoice.
   */
  state: string;
  /**
   * The time associated with the current state (e.g. paid time).
   */
  stateTime?: Date | null;
  /**
   * The invoice number.
   */
  number?: string;
  /**
   * The currency code for the invoice (e.g. `USD`).
   */
  currencyCode?: string;
  /**
   * The user facing description for the invoice.
   */
  description?: string;
  /**
   * The contact information associated with the invoice.
   */
  account?: InvoiceAccount | null;
  /**
   * The time the invoice was finalized.
   */
  effectiveTime?: Date | null;
  /**
   * The billing period for the invoice.
   */
  period?: commonv1.Period | null;
  /**
   * The subtotal amount for the invoice.
   *
   * This includes item-level discounts.
   */
  subtotalAmount?: string;
  /**
   * The invoice-level discount amount.
   *
   * This does not include item level discounts.
   */
  discountAmount?: string;
  /**
   * The starting and ending account balance as
   * of the time the invoice was finalized.
   */
  balance?: InvoiceBalance | null;
  /**
   * The tax amount for the invoice.
   *
   * This is for rendering purposes only and is
   * not the reported tax amount.
   */
  taxAmount?: string;
  /**
   * The total amount for the invoice.
   */
  totalAmount?: string;
  /**
   * The total amount minus any credits automatically
   * associated with the invoice.
   */
  dueAmount?: string;
  /**
   * The due amount minus the amount already paid.
   */
  remainingDueAmount?: string;
  /**
   * The time the invoice must be paid by.
   */
  dueTime?: Date | null;
  /**
   * The amount already paid towards the invoice.
   */
  paidAmount?: string;
  /**
   * The status of the invoice payment.
   */
  paymentState?: string;
  /**
   * The payment intent for the invoice.
   */
  paymentIntent?: PaymentIntent | null;
  /**
   * The line items for the invoice.
   */
  items?: InvoiceItem[];
  /**
   * The prorated changes that occurred mid-billing cycle.
   */
  changes?: InvoiceChange[];
  /**
   * The creation time of the invoice.
   */
  createTime: Date;
  /**
   * The last update time of the invoice.
   */
  updateTime: Date;
}

/**
 * THe contact information for the invoice.
 */
export interface InvoiceAccount {
  /**
   * The company or individual's full name.
   */
  fullName?: string;
  /**
   * The billing email address.
   */
  email?: string;
  /**
   * The billing phone number.
   */
  phoneNumber?: string;
  /**
   * The billing address.
   */
  address?: commonv1.Address | null;
}

/**
 * The account balance as of the time the invoice
 * was finalized.
 */
export interface InvoiceBalance {
  /**
   * The starting balance of the account.
   */
  startAmount?: string;
  /**
   * The ending balance of the account.
   */
  endAmount?: string;
  /**
   * The amount applied to the invoice from the balance.
   *
   * A negative amount means a debit from the account balance.
   * A positive amount means a credit to the account balance.
   */
  appliedAmount?: string;
}

/**
 * A prorated change that occurred mid-billing cycle.
 */
export interface InvoiceChange {
  /**
   * The time the change occurred.
   */
  time?: Date | null;
  /**
   * The user-facing description for the change.
   */
  description?: string;
  /**
   * The total amount for the change excluding
   * taxes and discounts.
   */
  subtotalAmount?: string;
  /**
   * The change discount amount.
   */
  discountAmount?: string;
  /**
   * The starting quantity of the change.
   */
  startQuantity?: number;
  /**
   * The ending quantity of the change.
   */
  endQuantity?: number;
  /**
   * The starting (credited) item identifiers.
   */
  startItemIds?: string[];
  /**
   * The ending (charged) item identifiers.
   */
  endItemIds?: string[];
}

/**
 * The line items for the invoice.
 */
export interface InvoiceItem {
  /**
   * The identifier of the item.
   */
  id: string;
  /**
   * The details of the associated product.
   */
  product?: Product | null;
  /**
   * The details of the associated price.
   */
  price?: Price | null;
  /**
   * The quantity of the item product/price.
   */
  quantity?: number;
  /**
   * The total amount for the line item excluding
   * taxes and discounts.
   */
  subtotalAmount?: string;
  /**
   * The item-level discount amount.
   */
  discountAmount?: string;
  /**
   * The user facing description for the line item.
   */
  description?: string;
  /**
   * Whether the item was a proration.
   */
  proration?: boolean;
  /**
   * The billing period for the item.
   */
  period?: commonv1.Period | null;
}

/**
 * A preview of an invoice.
 */
export interface InvoicePreview {
  /**
   * The currency code for the invoice (e.g. `USD`).
   */
  currencyCode?: string;
  /**
   * The contact information associated with the invoice.
   */
  account?: InvoiceAccount | null;
  /**
   * The time the upcoming invoice will be finalized.
   *
   * This is an estimate and might not exactly match the finalized
   * invoice.
   *
   * This will be null if the preview would be applied
   * immediately.
   */
  effectiveTime?: Date | null;
  /**
   * The subtotal amount for the invoice.
   *
   * This includes item-level discounts.
   */
  subtotalAmount?: string;
  /**
   * The invoice-level discount amount.
   *
   * This does not include item level discounts.
   */
  discountAmount?: string;
  /**
   * The starting and ending account balance as
   * of the time the invoice was finalized.
   */
  balance?: InvoiceBalance | null;
  /**
   * The tax amount for the invoice.
   *
   * This is for rendering purposes only and is
   * not the reported tax amount.
   */
  taxAmount?: string;
  /**
   * The total amount for the invoice.
   */
  totalAmount?: string;
  /**
   * The total amount minus any credits automatically
   * associated with the invoice.
   */
  dueAmount?: string;
  /**
   * A token which can be passed to a create or update
   * operation to ensure the change matches the preview.
   *
   * This token generally expires within 10 minutes of
   * being generated.
   */
  changeToken?: string;
  /**
   * The line items for the invoice.
   */
  items?: InvoicePreviewItem[];
}

/**
 * The line items for the invoice.
 */
export interface InvoicePreviewItem {
  /**
   * The details of the associated product.
   */
  product?: Product | null;
  /**
   * The details of the associated price.
   */
  price?: Price | null;
  /**
   * The quantity of the item product/price.
   */
  quantity?: number;
  /**
   * The total amount for the line item excluding
   * taxes and discounts.
   */
  subtotalAmount?: string;
  /**
   * The item-level discount amount.
   */
  discountAmount?: string;
  /**
   * The user facing description for the line item.
   */
  description?: string;
  /**
   * Whether the item was a proration.
   */
  proration?: boolean;
  /**
   * The billing period for the item.
   */
  period?: commonv1.Period | null;
}

/**
 * The join organization flow.
 */
export interface JoinOrganizationFlow {
  /**
   * The display name of the invitee.
   */
  displayName?: string;
  /**
   * The email address of the invitee.
   *
   * This is required if a user isn't provided
   * or the user's email address is empty.
   */
  email?: string;
  /**
   * The role to be assigned to the invitee.
   */
  role?: Role | null;
}

/**
 * Response message for ListFlows.
 */
export interface ListFlowsResponse {
  /**
   * The list of flows.
   */
  flows: Flow[];
  /**
   * A token, which can be sent as `pageToken` to retrieve the next page.
   * If this field is omitted, there are no subsequent pages.
   */
  nextPageToken?: string;
  /**
   * A token, which can be sent as `pageToken` to retrieve the previous page.
   * If this field is absent, there are no preceding pages. If this field is
   * an empty string then the previous page is the first result.
   */
  previousPageToken?: string;
}

/**
 * Response message for ListInvoices.
 */
export interface ListInvoicesResponse {
  /**
   * The list of invoices.
   */
  invoices: Invoice[];
  /**
   * A token, which can be sent as `pageToken` to retrieve the next page.
   * If this field is omitted, there are no subsequent pages.
   */
  nextPageToken?: string;
  /**
   * A token, which can be sent as `pageToken` to retrieve the previous page.
   * If this field is absent, there are no preceding pages. If this field is
   * an empty string then the previous page is the first result.
   */
  previousPageToken?: string;
}

/**
 * Response message for ListMembers.
 */
export interface ListMembersResponse {
  /**
   * The list of members.
   */
  members?: Member[];
  /**
   * A token, which can be sent as `pageToken` to retrieve the next page.
   * If this field is omitted, there are no subsequent pages.
   */
  nextPageToken?: string;
  /**
   * A token, which can be sent as `pageToken` to retrieve the previous page.
   * If this field is absent, there are no preceding pages. If this field is
   * an empty string then the previous page is the first result.
   */
  previousPageToken?: string;
}

/**
 * Response message for ListOrganizations.
 */
export interface ListOrganizationsResponse {
  /**
   * The list of organizations.
   */
  organizations?: Organization[];
  /**
   * A token, which can be sent as `pageToken` to retrieve the next page.
   * If this field is omitted, there are no subsequent pages.
   */
  nextPageToken?: string;
  /**
   * A token, which can be sent as `pageToken` to retrieve the previous page.
   * If this field is absent, there are no preceding pages. If this field is
   * an empty string then the previous page is the first result.
   */
  previousPageToken?: string;
}

/**
 * Response message for ListPaymentMethods.
 */
export interface ListPaymentMethodsResponse {
  /**
   * The list of payment methods.
   */
  paymentMethods: PaymentMethod[];
  /**
   * A token, which can be sent as `pageToken` to retrieve the next page.
   * If this field is omitted, there are no subsequent pages.
   */
  nextPageToken?: string;
  /**
   * A token, which can be sent as `pageToken` to retrieve the previous page.
   * If this field is absent, there are no preceding pages. If this field is
   * an empty string then the previous page is the first result.
   */
  previousPageToken?: string;
}

/**
 * Response message for ListPlanGroups.
 */
export interface ListPlanGroupsResponse {
  /**
   * The list of plan groups.
   */
  planGroups: PlanGroup[];
  /**
   * A token, which can be sent as `pageToken` to retrieve the next page.
   * If this field is omitted, there are no subsequent pages.
   */
  nextPageToken?: string;
  /**
   * A token, which can be sent as `pageToken` to retrieve the previous page.
   * If this field is absent, there are no preceding pages. If this field is
   * an empty string then the previous page is the first result.
   */
  previousPageToken?: string;
}

/**
 * Response message for ListRoles.
 */
export interface ListRolesResponse {
  /**
   * The list of roles.
   */
  roles: Role[];
  /**
   * A token, which can be sent as `pageToken` to retrieve the next page.
   * If this field is omitted, there are no subsequent pages.
   */
  nextPageToken?: string;
  /**
   * A token, which can be sent as `pageToken` to retrieve the previous page.
   * If this field is absent, there are no preceding pages. If this field is
   * an empty string then the previous page is the first result.
   */
  previousPageToken?: string;
}

/**
 * Response message for ListSubscriptions.
 */
export interface ListSubscriptionsResponse {
  /**
   * The list of subscriptions.
   */
  subscriptions: Subscription[];
  /**
   * A token, which can be sent as `pageToken` to retrieve the next page.
   * If this field is omitted, there are no subsequent pages.
   */
  nextPageToken?: string;
  /**
   * A token, which can be sent as `pageToken` to retrieve the previous page.
   * If this field is absent, there are no preceding pages. If this field is
   * an empty string then the previous page is the first result.
   */
  previousPageToken?: string;
}

/**
 * A member of an organization.
 */
export interface Member {
  /**
   * The user.
   */
  user: User;
  /**
   * The user's role within the organization.
   */
  role: Role;
  /**
   * The seat assigned to the member.
   *
   * This will be absent if there is no active
   * subscription for the organization or the user
   * has not been assigned a seat.
   */
  seat?: AccountSubscriptionSeat | null;
}

/**
 * A user's membership in an organization.
 *
 * This is the user view, see Member for the organizational
 * view.
 */
export interface Membership {
  /**
   * The organization.
   */
  organization: Organization;
  /**
   * The user's role within the organization.
   */
  role: Role;
  /**
   * The subscription associated with the organization.
   */
  subscription?: AccountSubscription | null;
}

/**
 * A group account.
 */
export interface Organization {
  /**
   * The system-assigned identifier of the organization.
   */
  id: string;
  /**
   * The client defined unique identifier of the organization account.
   */
  uniqueId?: string;
  /**
   * The human-readable display name of the organization.
   */
  displayName?: string;
  /**
   * The email address of the organization.
   */
  email?: string;
  /**
   * Whether the organization's email address has been verified.
   */
  emailVerified?: boolean;
  /**
   * The photo/avatar URL of the organization.
   */
  imageUrl?: string;
  /**
   * The number of members in the organization.
   *
   * This includes disabled users, but does not include user's marked for deletion.
   */
  memberCount?: number;
  /**
   * Whether the organization is disabled.
   */
  disabled?: boolean;
}

/**
 * Organization input parameters.
 */
export interface OrganizationInput {
  /**
   * The client defined unique identifier of the organization account.
   *
   * It is restricted to letters, numbers, underscores, and hyphens,
   * with the first character a letter or a number, and a 255
   * character maximum.
   *
   * ID's starting with `org_` are reserved.
   */
  uniqueId?: string;
  /**
   * The human-readable display name of the organization.
   *
   * The maximum length is 200 characters.
   */
  displayName?: string;
  /**
   * The email address of the organization.
   *
   * The maximum length is 320 characters.
   */
  email?: string;
  /**
   * The flow identifier associated with the creation of the organization.
   *
   * The flow type must be `SIGNUP` and associated with the user creating the organization.
   */
  flowId?: string;
}

/**
 * An object to track payments.
 */
export interface PaymentIntent {
  /**
   * A Stripe payment intent.
   */
  stripe?: StripePaymentIntent | null;
}

/**
 * A link to an external payment method (e.g. credit card, bank account).
 */
export interface PaymentMethod {
  /**
   * The system-assigned identifier of the payment method.
   */
  id?: string;
  /**
   * The payment method type.
   */
  type: string;
  /**
   * A human-readable description of the payment method.
   *
   * This can be used to show a description of the payment method
   * when the type is UNKNOWN or not explicitly handled.
   */
  displayName?: string;
  /**
   * The full name of the owner of the payment method.
   */
  fullName?: string;
  /**
   * The address for the payment method.
   */
  address?: commonv1.Address | null;
  /**
   * Whether the payment method is the default for the account.
   */
  default?: boolean;
  /**
   * The last payment error.
   *
   * This will be unset if the payment method is updated
   * or if a payment succeeds.
   */
  lastPaymentError?: apiv1.Status | null;
  /**
   * The creation time of the payment method connection.
   */
  createTime: Date;
  /**
   * The last update time of the payment method connection.
   */
  updateTime: Date;
  /**
   * Card payment method (e.g. Visa credit card).
   */
  card?: CardPaymentMethod | null;
}

/**
 * Payment method input parameters.
 */
export interface PaymentMethodInput {
  /**
   * The full name of the owner of the payment method (e.g. `Jane Doe`).
   */
  fullName?: string;
  /**
   * The address for the payment method.
   */
  address?: commonv1.Address | null;
  /**
   * The card expiration year (e.g. `2030`).
   */
  expYear?: number;
  /**
   * The card expiration month (e.g. `12`).
   */
  expMonth?: number;
}

/**
 * Configuration for setting up a payment method.
 */
export interface PaymentMethodIntent {
  /**
   * A Stripe Setup Intent.
   */
  stripe?: StripePaymentMethodIntent | null;
}

/**
 * The plan.
 */
export interface Plan {
  /**
   * The system-assigned identifier of the plan.
   */
  id: string;
  /**
   * The name of the plan.
   */
  displayName: string;
  /**
   * The description of the plan.
   */
  description?: string;
  /**
   * The currency code for the plan (e.g. `USD`).
   */
  currencyCode?: string;
  /**
   * The billing interval for the plan.
   */
  billingInterval: commonv1.Interval;
  /**
   * The items associated with plan.
   */
  items?: PlanItem[];
}

/**
 * Plan group is a collection of related plans.
 *
 * A plan group will generally describe a tier of plans offered
 * (e.g. Basic vs Pro) which might contain multiple billing options
 * (e.g. monthly vs yearly, USD vs EUR).
 */
export interface PlanGroup {
  /**
   * The system-assigned identifier of the plan group.
   */
  id: string;
  /**
   * The client defined unique identifier of the plan group (e.g. `pro`).
   */
  uniqueId?: string;
  /**
   * The name of the plan group.
   */
  displayName: string;
  /**
   * The user facing description of the plan group.
   */
  description?: string;
  /**
   * Whether the plans are for organizations or users.
   */
  accountType?: string;
  /**
   * The trial settings.
   *
   * For authenticated requests, this will not be set when the account
   * isn't eligible for a trial.
   */
  trial?: PlanGroupTrial | null;
  /**
   * Whether the plan is considered an downgrade or upgrade.
   */
  changePath?: PlanGroupChangePath | null;
  /**
   * The plans associated with plan group.
   */
  plans?: Plan[];
}

/**
 * The change path.
 */
export interface PlanGroupChangePath {
  /**
   * Whether the change is considered an upgrade or
   * a downgrade.
   */
  direction?: string;
}

/**
 * The trial settings.
 */
export interface PlanGroupTrial {
  /**
   * The number of days in the trial.
   */
  days?: number;
}

/**
 * The products which the plan includes.
 */
export interface PlanItem {
  /**
   * The product associated with the item.
   */
  product: Product;
  /**
   * The price associated with them item.
   */
  price: Price;
  /**
   * The plan item type.
   */
  type: string;
}

/**
 * Price for a product.
 */
export interface Price {
  /**
   * The system-assigned identifier of the price.
   */
  id: string;
  /**
   * The currency for the price.
   */
  currencyCode?: string;
  /**
   * The billing mode for the price.
   */
  billingMode?: string;
  /**
   * The billing interval for the price.
   */
  interval?: commonv1.Interval | null;
  /**
   * The price is fixed per quantity.
   */
  fixed?: PriceFixedPrice | null;
  /**
   * The price is dependent on the quantity.
   */
  tiered?: PriceTieredPrice | null;
}

/**
 * A pricing strategy that defines a constant price per
 * quantity.
 */
export interface PriceFixedPrice {
  /**
   * The decimal amount for the defined currency (e.g. `9.95`).
   */
  amount: string;
  /**
   * Whether to transform the quantity before multiplying amount.
   */
  transformQuantity?: PriceTransformQuantity | null;
}

/**
 * A pricing strategy that dynamically sets the price for a given
 * quantity range.
 */
export interface PriceTieredPrice {
  /**
   * The strategy for evaluating the tiers.
   */
  mode: string;
  /**
   * The tiers for the price.
   */
  tiers: TieredPriceTier[];
}

/**
 * A quantity transform for fixed prices.
 */
export interface PriceTransformQuantity {
  /**
   * The amount to divide the quantity by.
   */
  divisor: number;
  /**
   * Whether to round the result up or down.
   */
  round: string;
}

/**
 * The product.
 */
export interface Product {
  /**
   * The system-assigned identifier of the product.
   */
  id: string;
  /**
   * The client defined unique identifier of the product.
   */
  uniqueId?: string;
  /**
   * The human-readable display name of the product.
   */
  displayName: string;
}

/**
 * A member's role within an organization.
 */
export interface Role {
  /**
   * The system-assigned identifier of the role.
   */
  id: string;
  /**
   * The client defined unique identifier of the role.
   *
   * It is restricted to letters, numbers, underscores, and hyphens,
   * with the first character a letter or a number, and a 255
   * character maximum.
   *
   * ID's starting with `role_` are reserved.
   */
  uniqueId: string;
  /**
   * The human-readable display name of the role.
   */
  displayName: string;
  /**
   * The role type.
   */
  type: string;
  /**
   * The description of the role.
   *
   * The maximum length is 1000 characters.
   */
  description?: string;
  /**
   * The additional permissions allowed by the role.
   */
  permissionSets: string[];
  /**
   * Whether the role is the default for the tenant.
   */
  default?: boolean;
}

/**
 * The session details.
 */
export interface Session {
  /**
   * The authenticated user.
   *
   * This will be null if the user is not authenticated.
   */
  user?: User | null;
  /**
   * The authenticated user's organization memberships.
   */
  memberships?: Membership[];
  /**
   * The user's default active individual subscription.
   *
   * See memberships for organization subscription and
   * seat information.
   */
  subscription?: AccountSubscription | null;
  /**
   * The expiration time for the current session.
   */
  expireTime?: Date | null;
  /**
   * The scopes available in the current session.
   */
  scopes: string[];
}

/**
 * The signup flow.
 */
export interface SignupFlow {
  /**
   * The email address of the invitee.
   */
  email?: string;
  /**
   * The display name of the invitee.
   */
  displayName?: string;
  /**
   * Whether to create an organization as part of the signup flow.
   */
  createOrganization?: boolean;
}

/**
 * A Stripe payment intent.
 */
export interface StripePaymentIntent {
  /**
   * The Stripe account ID (e.g. `acct_1LcUvxQYGbxD2SPK`)
   */
  accountId: string;
  /**
   * Whether the Stripe payment intent was created in live mode.
   */
  live: boolean;
  /**
   * The Stripe payment intent client secret.
   */
  clientSecret: string;
}

/**
 * A Stripe Setup Intent.
 */
export interface StripePaymentMethodIntent {
  /**
   * The Stripe account ID (e.g. `acct_1LcUvxQYGbxD2SPK`)
   */
  accountId: string;
  /**
   * Whether the Stripe Setup Intent was created in live mode.
   */
  live: boolean;
  /**
   * The Stripe Setup Intent client secret.
   */
  clientSecret: string;
}

/**
 * The user's or organization's subscription.
 */
export interface Subscription {
  /**
   * The system-assigned identifier of the subscription.
   */
  id: string;
  /**
   * The status of the subscription.
   */
  state: string;
  /**
   * The currency code for the subscription (e.g. `USD`).
   */
  currencyCode?: string;
  /**
   * The subscription items.
   */
  plan?: Plan | null;
  /**
   * The payment method.
   */
  paymentMethod?: PaymentMethod | null;
  /**
   * The subscription is scheduled to be canceled at the end of the
   * current billing period.
   */
  cancelPeriodEnd?: boolean;
  /**
   * The time the subscription started.
   */
  startTime?: Date | null;
  /**
   * The time the subscription ends/ended.
   */
  endTime?: Date | null;
  /**
   * The trial information for the subscription.
   */
  trial?: SubscriptionTrial | null;
  /**
   * The current billing period for the subscription.
   */
  currentPeriod?: SubscriptionCurrentPeriod | null;
  /**
   * The subscription items.
   */
  items?: SubscriptionItem[];
  /**
   * The information about the various seats available in
   * the subscription.
   */
  seats?: SubscriptionSeatInfo[];
  /**
   * The creation time of the subscription.
   */
  createTime: Date;
  /**
   * The last update time of the subscription.
   */
  updateTime: Date;
}

/**
 * Information about the current billing period.
 */
export interface SubscriptionCurrentPeriod {
  /**
   * The time the current billing period started.
   */
  startTime?: Date | null;
  /**
   * The time the current billing period ends.
   */
  endTime?: Date | null;
}

/**
 * The subscription items.
 */
export interface SubscriptionItem {
  /**
   * The identifier of the item.
   */
  id: string;
  /**
   * The details of the associated product.
   */
  product: Product;
  /**
   * The details of the associated price.
   */
  price?: Price | null;
  /**
   * The quantity for the item.
   */
  quantity: number;
}

/**
 * The subscription seat.
 */
export interface SubscriptionSeatInfo {
  /**
   * The subscription item product.
   */
  product?: Product | null;
  /**
   * The quantity which has been invoiced for the current billing period.
   *
   * This might be less than the total quantity while a subscription change
   * is pending or if the subscription is over-provisioned.
   */
  currentPeriodQuantity?: number;
  /**
   * The quantity scheduled to appear on the next invoice.
   *
   * This will only be set when different from current period quantity.
   */
  nextPeriodQuantity?: number;
  /**
   * The quantity currently in use.
   */
  assignedQuantity?: number;
  /**
   * The quantity not in use.
   */
  unassignedQuantity?: number;
  /**
   * The sum of the assigned and unassigned quantities.
   */
  totalQuantity?: number;
}

/**
 * The trial information for the subscription.
 */
export interface SubscriptionTrial {
  /**
   * The time the trial started.
   */
  startTime?: Date | null;
  /**
   * The time the trial ended/ends.
   */
  endTime?: Date | null;
  /**
   * The number of days in the trial.
   *
   * This number is rounded to the nearest whole number
   * of days.
   */
  days?: number;
  /**
   * The number of days remaining in the trial.
   *
   * This number is rounded down, so will generally be
   * less than days. It will be zero on the last day
   * of the trial and null when the trial expires.
   */
  remainingDays?: number;
}

/**
 * A quantity range within the tiered price.
 */
export interface TieredPriceTier {
  /**
   * The upper quantity for tier (inclusive).
   */
  upper?: number;
  /**
   * The per quantity amount for the tier.
   */
  unitAmount?: string;
  /**
   * The flat amount for the tier.
   */
  flatAmount?: string;
}

/**
 * Individual account.
 */
export interface User {
  /**
   * The system-assigned identifier of the user.
   */
  id: string;
  /**
   * The client defined unique identifier of the user account.
   */
  uniqueId?: string;
  /**
   * The human-readable display name of the user.
   */
  displayName?: string;
  /**
   * The email address of the user.
   */
  email?: string;
  /**
   * Whether the user's email address has been verified.
   */
  emailVerified?: boolean;
  /**
   * The photo/avatar URL of the user.
   */
  imageUrl?: string;
  /**
   * Whether the user is disabled.
   */
  disabled?: boolean;
}
