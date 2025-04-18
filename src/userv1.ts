// Code generated. DO NOT EDIT.
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
 * Response message for CreatePortalSession.
 */
export interface CreatePortalSessionResponse {
  /**
   * The URL you should redirect the user to after calling create portal
   * session.
   */
  redirectUrl: string;
}

/**
 * Response message for ExchangeToken.
 */
export interface ExchangeSessionTokenResponse {
  /**
   * An authorization token which can be used to make authenticated
   * requests.
   *
   * This should be included in the `Authorization` header with a
   * `Bearer` prefix.
   */
  accessToken: string;
  /**
   * The expiration time for the session.
   */
  expireTime: Date;
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
   * The join organization flow type specific data.
   */
  joinOrganization?: JoinOrganizationFlow | null;
  /**
   * The signup flow type specific data.
   */
  signup?: SignupFlow | null;
  /**
   * The time the flow will expire.
   */
  expireTime: Date;
  /**
   * The creation time of the flow.
   */
  createTime: Date;
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
  tiers: PriceTieredPriceTier[];
}

/**
 * A quantity range within the tiered price.
 */
export interface PriceTieredPriceTier {
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
   * The policy that defines how a member is assigned a seat.
   */
  seatPolicy?: string;
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
