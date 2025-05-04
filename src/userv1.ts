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
   * The client defined unique identifier of the plan.
   */
  uniqueId?: string;
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
   * The human-readable display name of the billing account.
   */
  displayName?: string;
  /**
   * The email address of the billing account.
   */
  email?: string;
  /**
   * The E164 phone number for the billing account (e.g. `+12125550123`).
   */
  phoneNumber?: string;
  /**
   * The billing address for the billing account.
   */
  address?: commonv1.Address | null;
  /**
   * The ISO-4217 currency code for the billing account (e.g. `USD`).
   */
  currencyCode?: string;
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
   * The available checkouts.
   */
  checkouts?: BillingAccountCheckout[];
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
 * The discount.
 */
export interface BillingAccountCheckout {
  /**
   * The type of checkout.
   */
  type: string;
}

/**
 * BillingAccountInput input parameters.
 */
export interface BillingAccountInput {
  /**
   * The human-readable display name of the billing account.
   *
   * The maximum length is 200 characters.
   *
   * This might be further restricted by the billing provider.
   */
  displayName?: string;
  /**
   * The email address of the billing account.
   *
   * The maximum length is 320 characters.
   *
   * This might be further restricted by the billing provider.
   */
  email?: string;
  /**
   * The E164 phone number of the billing account (e.g. `+12125550123`).
   */
  phoneNumber?: string;
  /**
   * The address for the billing account.
   */
  address?: commonv1.Address | null;
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
 * The checkout.
 */
export interface Checkout {
  /**
   * The system-assigned identifier of the checkout.
   */
  id: string;
  /**
   * The type of checkout.
   */
  type: string;
  /**
   * The state of the checkout.
   */
  state: string;
  /**
   * The checkout error.
   */
  error?: apiv1.Status | null;
  /**
   * The currently selected currency code.
   */
  currencyCode: string;
  /**
   * The plans available for checkout.
   */
  plans?: Plan[];
  /**
   * The payment method for the checkout.
   */
  paymentMethod?: PaymentMethod | null;
  /**
   * The company or individual's full name.
   */
  fullName?: string;
  /**
   * The billing address.
   */
  address?: commonv1.Address | null;
  /**
   * The steps required to complete the checkout.
   */
  steps?: CheckoutStep[];
  /**
   * The products included in the checkout.
   */
  items?: CheckoutItem[];
  /**
   * The discounts applied to the checkout.
   */
  discounts?: CheckoutDiscount[];
  /**
   * The subtotal amount for the checkout.
   *
   * This includes item-level discounts.
   */
  subtotalAmount?: string;
  /**
   * The top-level discount amount.
   *
   * This does not include item level discounts.
   */
  discountAmount?: string;
  /**
   * The tax amount for the checkout.
   *
   * This is for rendering purposes only and is
   * not the reported tax amount.
   */
  taxAmount?: string;
  /**
   * The total amount for the checkout.
   */
  totalAmount?: string;
  /**
   * The amount applied to the checkout from the balance.
   *
   * A negative amount means a debit from the account balance.
   * A positive amount means a credit to the account balance.
   */
  balanceAppliedAmount?: string;
  /**
   * The total amount minus any credits automatically
   * associated with the invoice.
   */
  dueAmount?: string;
  /**
   * The normal total recurring amount.
   *
   * This does not include any time-limited discounts.
   */
  renewAmount?: string;
}

/**
 * The complete payment step details.
 */
export interface CheckoutCompletePaymentStep {
  /**
   * The payment intent for the checkout.
   */
  paymentIntent?: PaymentIntent | null;
}

/**
 * The discount.
 */
export interface CheckoutDiscount {
  /**
   * The checkout discount identifier.
   */
  id: string;
  /**
   * The discount code.
   */
  code?: string;
}

/**
 * Checkout input parameters.
 */
export interface CheckoutInput {
  /**
   * The identifier of the organization.
   *
   * This must be provided for organization checkouts.
   */
  organizationId?: string;
  /**
   * The type of the checkout.
   */
  type?: string;
  /**
   * The identifier of the plan.
   *
   * This allows you to specify the currently selected plan.
   */
  planId?: string;
}

/**
 * The checkout item.
 */
export interface CheckoutItem {
  /**
   * The item identifier.
   */
  id: string;
  /**
   * The display name for the item.
   */
  displayName: string;
  /**
   * The input type of the item.
   */
  inputType: string;
  /**
   * The type of the item.
   */
  type?: string;
  /**
   * The unit for the item.
   */
  unit?: string;
  /**
   * The price for the item.
   */
  price?: Price | null;
  /**
   * The quantity for the item.
   */
  quantity?: number;
  /**
   * The minimum quantity allowed.
   *
   * This will only be set when quantity is settable.
   */
  minQuantity?: number;
  /**
   * The maximum quantity allowed.
   *
   * This will only be set when the quantity is settable and there is a
   * discrete (non-infinity) maximum.
   */
  maxQuantity?: number;
  /**
   * The quantity at which the plan will renew.
   *
   * This will only be set when different from quantity and the
   * subscription is set to renew.
   */
  renewQuantity?: number;
  /**
   * The minimum renew quantity allowed.
   *
   * This will only be set when renew quantity is settable.
   */
  minRenewQuantity?: number;
  /**
   * The maximum renew quantity allowed.
   *
   * This will only be set when the new quantity is settable and there is a
   * discrete (non-infinity) maximum.
   */
  maxRenewQuantity?: number;
  /**
   * The billing period for the item.
   */
  period?: commonv1.Period | null;
  /**
   * The subtotal amount at checkout.
   */
  subtotalAmount?: string;
  /**
   * The item-level discount amount at checkout.
   */
  discountAmount?: string;
  /**
   * The item-level normal recurring amount.
   */
  renewAmount?: string;
  /**
   * Whether this is a preview-only item.
   *
   * Preview-only items are generally prorations or other pending
   * charges or credits.
   */
  preview?: boolean;
  /**
   * The item identifier for which you can group this item.
   *
   * This allows you to group credits and other preview items
   * with the related plan, seat, or add-on item.
   */
  groupItemId?: string;
}

/**
 * Checkout item input.
 */
export interface CheckoutItemInput {
  /**
   * The identifier of the item.
   */
  id: string;
  /**
   * The quantity for the item.
   */
  quantity?: number;
}

/**
 * The checkout step.
 */
export interface CheckoutStep {
  /**
   * The type of step.
   */
  type: string;
  /**
   * The state of the step.
   */
  state: string;
  /**
   * The complete payment step details.
   */
  completePayment?: CheckoutCompletePaymentStep | null;
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
 * Member input parameters.
 */
export interface MemberInput {
  /**
   * The identifier of the user.
   */
  userId?: string;
  /**
   * The identifier of the role.
   */
  roleId?: string;
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
   * Card payment method (e.g. Visa credit card).
   */
  card?: CardPaymentMethod | null;
  /**
   * The creation time of the payment method connection.
   */
  createTime: Date;
  /**
   * The last update time of the payment method connection.
   */
  updateTime: Date;
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
   * The status of the plan.
   */
  state: string;
  /**
   * The client defined unique identifier of the plan.
   */
  uniqueId?: string;
  /**
   * The name of the plan.
   */
  displayName: string;
  /**
   * The description of the plan.
   */
  description?: string;
  /**
   * The tier for the plan.
   *
   * This is only available in checkout and pricing.
   */
  tier?: string;
  /**
   * The currency code for the plan (e.g. `USD`).
   */
  currencyCode?: string;
  /**
   * The billing interval for the plan.
   */
  interval?: commonv1.Interval | null;
  /**
   * The revision for the plan.
   */
  revision?: PlanRevision | null;
  /**
   * Whether this is the current plan for the subscription.
   *
   * This is only set in checkout.
   */
  current?: boolean;
  /**
   * Whether this is the selected plan.
   *
   * This is only set in checkout.
   */
  selected?: boolean;
  /**
   * Whether this is the default term for the plan.
   */
  default?: boolean;
  /**
   * The trial settings.
   *
   * For authenticated requests, this will only be set for accounts that
   * are eligible for a new trial.
   */
  trial?: PlanTrial | null;
  /**
   * Whether the change is considered an upgrade or
   * a downgrade.
   *
   * This is only set in checkout.
   */
  changePath?: string;
  /**
   * The savings for the plan.
   *
   * The savings are in comparison to the plan in the revision with the
   * shortest billing interval (normally monthly).
   */
  savings?: PlanSavings | null;
  /**
   * The items associated with plan.
   */
  items?: PlanItem[];
}

/**
 * The products included in the plan.
 */
export interface PlanItem {
  /**
   * The plan item type.
   */
  type: string;
  /**
   * The product associated with the item.
   */
  product: Product;
  /**
   * The price associated with the item.
   */
  price: Price;
}

/**
 * The revision information for the plan.
 */
export interface PlanRevision {
  /**
   * The system-assigned identifier of the plan revision.
   */
  id: string;
  /**
   * Whether this is the current revision for the subscription.
   *
   * This is only set in checkout.
   */
  current?: boolean;
  /**
   * Whether this is the selected revision.
   *
   * This is only set in checkout.
   */
  selected?: boolean;
  /**
   * Whether this is the latest revision for the plan.
   *
   * This is only set for a current or selected plan in checkout.
   */
  latest?: boolean;
}

/**
 * The savings for the plan.
 */
export interface PlanSavings {
  /**
   * The percentage savings (1-100).
   *
   * This percentage is rounded down.
   */
  percentage?: number;
}

/**
 * The trial details.
 */
export interface PlanTrial {
  /**
   * The number of days in the trial.
   */
  days: number;
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
 * The plans available in checkout.
 */
export interface Pricing {
  /**
   * The list of plans.
   */
  plans: Plan[];
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
  /**
   * The Stripe.js Payment Element options.
   */
  paymentElementOptions?: Record<string, any>;
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
  renewCanceled?: boolean;
  /**
   * The subscription is scheduled to be canceled at the end of the
   * current billing period.
   *
   * @deprecated Use `renewCanceled` instead.
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
   * Whether a seat can be assigned or reserved.
   */
  state?: string;
  /**
   * The code that best describes the reason for the state.
   */
  stateReason?: string;
  /**
   * The subscription item product.
   */
  product?: Product | null;
  /**
   * The number of seats expected to be invoiced for the current billing period.
   *
   * This might be less than the total quantity while a subscription change
   * is pending or if the subscription is over-provisioned.
   */
  currentQuantity?: number;
  /**
   * The number of seats expected at renewal.
   *
   * This will only be set when different from current quantity.
   */
  renewQuantity?: number;
  /**
   * The number of seats currently assigned.
   */
  assignedQuantity?: number;
  /**
   * The number of seats not assigned.
   */
  unassignedQuantity?: number;
  /**
   * The number of seats currently reserved because of pending invitations.
   *
   * These can be made available by cancelling outstanding invitations.
   */
  reservedQuantity?: number;
  /**
   * The number of seats which can be assigned or reserved.
   */
  availableQuantity?: number;
  /**
   * The total number of seats associated with the subscription.
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
 * Input message for UpdateJoinOrganizationFlow.
 */
export interface UpdateJoinOrganizationFlowInput {
  /**
   * The identifier of the role.
   */
  roleId?: string;
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
