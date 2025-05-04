// Code generated. DO NOT EDIT.
import type * as apiv1 from "./apiv1.ts";
import type * as commonv1 from "./commonv1.ts";

/**
 * A link between an organization/user and an external account.
 */
export interface AccountConnection {
  /**
   * The tenant connection.
   */
  connection?: Connection | null;
  /**
   * The external identifier of the connected account.
   */
  externalId: string;
  /**
   * The external admin URL for the connected account.
   */
  adminUrl?: string;
  /**
   * The status of the connected account.
   */
  state: string;
  /**
   * The code that best describes the reason for the state.
   */
  stateReason?: string;
  /**
   * The human-readable display name of the external account.
   */
  displayName?: string;
  /**
   * The email address of the external account.
   */
  email?: string;
  /**
   * Whether the external account's email address has been verified.
   */
  emailVerified?: boolean;
  /**
   * The E164 phone number for the external account (e.g. `+12125550123`).
   */
  phoneNumber?: string;
  /**
   * Whether the external account's phone number has been verified.
   */
  phoneNumberVerified?: boolean;
  /**
   * The billing address for the external account.
   */
  address?: commonv1.Address | null;
  /**
   * The currency code for the account.
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
   * The payment methods for connections that support it.
   */
  paymentMethods?: PaymentMethod[];
  /**
   * The creation time of the account connection.
   */
  createTime: Date;
  /**
   * The last update time of the account connection.
   */
  updateTime: Date;
}

/**
 * AccountConnection input parameters.
 */
export interface AccountConnectionInput {
  /**
   * The system-assigned identifier for the connection of the external account.
   */
  connectionId: string;
  /**
   * The human-readable display name of the external account.
   *
   * The maximum length is 200 characters.
   *
   * This might be further restricted by the external provider.
   */
  displayName?: string;
  /**
   * The email address of the external account.
   *
   * The maximum length is 320 characters.
   *
   * This might be further restricted by the external provider.
   */
  email?: string;
  /**
   * Whether the external account's email address has been verified.
   */
  emailVerified?: boolean;
  /**
   * The E164 phone number for the external account (e.g. `+12125550123`).
   */
  phoneNumber?: string;
  /**
   * Whether the external account's phone number has been verified.
   */
  phoneNumberVerified?: boolean;
  /**
   * The default ISO-4217 currency code for the external account (e.g. `USD`).
   */
  currencyCode?: string;
  /**
   * The billing address for the external account.
   */
  address?: commonv1.Address | null;
  /**
   * Whether the external account is disabled.
   */
  disabled?: boolean;
}

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
   * The plan.
   */
  plan?: AccountSubscriptionPlan | null;
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
  product?: AccountSubscriptionProduct | null;
}

/**
 * The subscription product.
 */
export interface AccountSubscriptionProduct {
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
 * The user's seat information.
 */
export interface AccountSubscriptionSeat {
  /**
   * The seat product.
   */
  product?: AccountSubscriptionProduct | null;
}

/**
 * The Amazon Cognito connection data.
 */
export interface AmazonCognitoConnection {
  /**
   * The Amazon Cognito user pool ID.
   */
  userPoolId: string;
  /**
   * The Amazon region.
   */
  region: string;
  /**
   * The Amazon access key ID.
   */
  accessKeyId: string;
  /**
   * The Amazon access key secret.
   */
  accessKeySecret: string;
  /**
   * OpenID Connect (OIDC) configuration.
   *
   * If configured, this can be used instead of implementing a
   * Portal callback.
   */
  oidc?: OidcConfig | null;
}

/**
 * The Auth0 connection data.
 */
export interface Auth0Connection {
  /**
   * The Auth0 domain.
   */
  domain: string;
  /**
   * The Auth0 client ID.
   */
  clientId: string;
  /**
   * The Auth0 client secret.
   */
  clientSecret: string;
  /**
   * OpenID Connect (OIDC) configuration.
   *
   * If configured, this can be used instead of implementing a
   * Portal callback.
   */
  oidc?: OidcConfig | null;
}

/**
 * The builtin email specific connection data.
 */
export interface BuiltinEmailConnection {
  /**
   * The allowed email list.
   */
  allowedEmails: string[];
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
   * The last for digits of the card.
   */
  last4?: string;
  /**
   * The funding method for the card (e.g. `DEBIT`).
   */
  fundingType?: string;
  /**
   * The expiration year.
   */
  expYear?: number;
  /**
   * The expiration month.
   */
  expMonth?: number;
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
 * The cancel step details.
 */
export interface CheckoutCancelStep {
  /**
   * The type of cancellation.
   */
  type?: string;
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
   * This is required if the user identifier is not specified.
   */
  organizationId?: string;
  /**
   * The identifier of the user.
   *
   * This is required if the organization identifier is not specified.
   */
  userId?: string;
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
  /**
   * The identifier of the subscriptions.
   *
   * This allows you to specify a non-default subscription.
   */
  subscriptionId?: string;
  /**
   * The identifier of the connection.
   *
   * This allows you to specify a non-default billing connection.
   */
  connectionId?: string;
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
   * The normal recurring amount.
   *
   * This does not include any time-limited discounts.
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
   * The trial step details.
   */
  trial?: CheckoutTrialStep | null;
  /**
   * The cancel step details.
   */
  cancel?: CheckoutCancelStep | null;
  /**
   * The complete payment step details.
   */
  completePayment?: CheckoutCompletePaymentStep | null;
}

/**
 * The trial step details.
 */
export interface CheckoutTrialStep {
  /**
   * Whether to start or continue a trial.
   */
  type?: string;
  /**
   * The number of days in the trial.
   */
  days?: number;
}

/**
 * An integration that connects your tenant to an external system.
 */
export interface Connection {
  /**
   * The system-assigned identifier of the connection.
   */
  id: string;
  /**
   * The client defined unique identifier of the connection.
   *
   * It is restricted to letters, numbers, underscores, and hyphens,
   * with the first character a letter or a number, and a 255
   * character maximum.
   *
   * ID's starting with `conn_` are reserved.
   */
  uniqueId?: string;
  /**
   * The human-readable display name of the connection.
   *
   * The maximum length is 200 characters.
   */
  displayName: string;
  /**
   * The current status of the connection.
   */
  state: string;
  /**
   * The code that best describes the reason for the state.
   */
  stateReason?: string;
  /**
   * The connection type.
   */
  type: string;
  /**
   * The delegated connection.
   */
  delegate?: ConnectionDelegate | null;
  /**
   * The connection providers.
   */
  providers: ConnectionProvider[];
  /**
   * The Amazon Cognito connection data.
   */
  amazonCognito?: AmazonCognitoConnection | null;
  /**
   * The Auth0 connection data.
   */
  auth0?: Auth0Connection | null;
  /**
   * The builtin email configuration data.
   */
  builtinEmail?: BuiltinEmailConnection | null;
  /**
   * The Google Cloud Identity Platform (Firebase Auth) connection.
   */
  googleCloudIdentityPlatform?: GoogleCloudIdentityPlatformConnection | null;
  /**
   * The Postmark configuration data.
   */
  postmark?: PostmarkConnection | null;
  /**
   * The Stripe billing configuration data.
   */
  stripe?: StripeConnection | null;
  /**
   * The webhooks configuration data.
   */
  webhook?: WebhookConnection | null;
  /**
   * The connection view.
   */
  view: string;
  /**
   * The creation time of the connection.
   */
  createTime: Date;
  /**
   * The last update time of the connection.
   */
  updateTime: Date;
}

/**
 * The delegated connection.
 */
export interface ConnectionDelegate {
  /**
   * The delegated connection identifier.
   */
  id: string;
  /**
   * The client defined unique identifier of the delegated connection.
   */
  uniqueId?: string;
  /**
   * The human-readable display name of the delegated connection.
   */
  displayName: string;
  /**
   * The current status of the delegated connection.
   */
  state: string;
  /**
   * The code that best describes the reason for the state.
   */
  stateReason?: string;
  /**
   * The delegated connection type.
   */
  type: string;
}

/**
 * The functionality the connection provides (e.g. `BILLING`).
 */
export interface ConnectionProvider {
  /**
   * The provider type.
   */
  type: string;
  /**
   * Whether the connection is the default for the provider type.
   */
  default?: boolean;
}

/**
 * Response message for CreateApiSession.
 */
export interface CreateApiSessionResponse {
  /**
   * An authorization token which can be used to access the User API.
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
   *
   * This will not be set if the invitation was created by an admin.
   */
  creator?: User | null;
  /**
   * The start time of the flow.
   */
  startTime: Date;
  /**
   * The time the flow will expire.
   */
  expireTime?: Date | null;
  /**
   * The expire duration of the flow.
   */
  ttl?: string;
  /**
   * The flow secret.
   *
   * This is only populated on create.
   */
  secret?: string;
  /**
   * The join organization flow type specific data.
   */
  joinOrganization?: JoinOrganizationFlow | null;
  /**
   * The signup flow type specific data
   */
  signup?: SignupFlow | null;
  /**
   * The flow view.
   */
  view: string;
  /**
   * The creation time of the flow.
   */
  createTime: Date;
  /**
   * The last update time of the flow.
   */
  updateTime: Date;
}

/**
 * The Google Cloud Identity Platform/Firebase specific connection data.
 */
export interface GoogleCloudIdentityPlatformConnection {
  /**
   * The service account key in JSON format.
   */
  credentials: string;
  /**
   * The Google Cloud Identity Platform/Firebase project ID.
   *
   * This will default to the project ID in the service account key if
   * not specified.
   */
  projectId?: string;
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
   * The code that best describes the reason for the state.
   */
  stateReason?: string;
  /**
   * The time associated with the current state (e.g. paid time).
   */
  stateTime?: Date | null;
  /**
   * The billing connection.
   */
  connection?: Connection | null;
  /**
   * The external identifier of the invoice.
   */
  externalId?: string;
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
   * The bill to contact information.
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
   * The invoice view.
   */
  view: string;
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
 * THe contact information of the bill to account.
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
  time: Date;
  /**
   * The user-facing description for the change.
   */
  description: string;
  /**
   * The total amount for the change excluding
   * taxes and discounts.
   */
  subtotalAmount: string;
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
   * The external identifier of the invoice item.
   */
  externalId?: string;
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
  members: Member[];
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
  organizations: Organization[];
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
 * Response message for ListUsers.
 */
export interface ListUsersResponse {
  /**
   * The list of users.
   */
  users: User[];
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
   * Whether the membership is active.
   */
  state: string;
  /**
   * The user.
   */
  user: User;
  /**
   * The user's role within the organization.
   */
  role: Role;
  /**
   * The seat associated with the member.
   *
   * This will be absent if there is no active
   * subscription for the organization or the user
   * has not been assigned a seat.
   */
  seat?: AccountSubscriptionSeat | null;
  /**
   * The member view.
   */
  view: string;
  /**
   * The creation time of the membership.
   */
  createTime: Date;
  /**
   * The last update time of the membership.
   */
  updateTime: Date;
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
   * The seat associated with the membership.
   *
   * This will be absent if there is no active default
   * subscription for the organization or the user
   * has not been assigned a seat.
   */
  seat?: AccountSubscriptionSeat | null;
  /**
   * The creation time of the membership.
   */
  createTime: Date;
  /**
   * The last update time of the membership.
   */
  updateTime: Date;
}

/**
 * OpenID Connect (OIDC) configuration.
 */
export interface OidcConfig {
  /**
   * The issuer URL.
   */
  issuerUrl?: string;
  /**
   * The client ID.
   */
  clientId?: string;
  /**
   * The client secret.
   */
  clientSecret?: string;
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
   * The current state of the organization.
   */
  state: string;
  /**
   * The code that best describes the reason for the state.
   */
  stateReason?: string;
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
   * The E164 phone number for the organization (e.g. `+12125550123`).
   */
  phoneNumber?: string;
  /**
   * Whether the organization's phone number has been verified.
   */
  phoneNumberVerified?: boolean;
  /**
   * The photo/avatar URL of the organization.
   */
  imageUrl?: string;
  /**
   * The default ISO-4217 currency code for the organization (e.g. `USD`).
   */
  currencyCode?: string;
  /**
   * The IETF BCP-47 language code for the organization (e.g. `en`).
   */
  languageCode?: string;
  /**
   * The country/region code for the organization (e.g. `US`).
   */
  regionCode?: string;
  /**
   * The IANA time zone for the organization (e.g. `America/New_York`).
   */
  timeZone?: string;
  /**
   * The default address for the organization.
   */
  address?: commonv1.Address | null;
  /**
   * The connected accounts.
   */
  accountConnections?: AccountConnection[];
  /**
   * The organization's default active subscription.
   */
  subscription?: AccountSubscription | null;
  /**
   * The sign-up time for the organization.
   */
  signupTime?: Date | null;
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
  /**
   * The organization view.
   */
  view: string;
  /**
   * The creation time of the organization.
   */
  createTime: Date;
  /**
   * The last update time of the organization.
   */
  updateTime: Date;
}

/**
 * Organization input parameters.
 */
export interface OrganizationInput {
  /**
   * The system-assigned identifier of the organization.
   */
  id?: string;
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
   * Whether the organization's email address has been verified.
   */
  emailVerified?: boolean;
  /**
   * The E164 phone number for the organization (e.g. `+12125550123`).
   */
  phoneNumber?: string;
  /**
   * Whether the organization's phone number has been verified.
   */
  phoneNumberVerified?: boolean;
  /**
   * The photo/avatar URL of the organization.
   *
   * The maximum length is 2000 characters.
   */
  imageUrl?: string;
  /**
   * The default ISO-4217 currency code for the organization (e.g. `USD`).
   */
  currencyCode?: string;
  /**
   * The IETF BCP-47 language code for the organization (e.g. `en`).
   */
  languageCode?: string;
  /**
   * The country/region code for the organization (e.g. `US`).
   */
  regionCode?: string;
  /**
   * The IANA time zone for the organization (e.g. `America/New_York`).
   */
  timeZone?: string;
  /**
   * The default address for the organization.
   */
  address?: commonv1.Address | null;
  /**
   * The sign-up time for the organization.
   */
  signupTime?: Date | null;
  /**
   * Whether the organization is disabled.
   */
  disabled?: boolean;
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
  id: string;
  /**
   * The external identifier of the connected payment method.
   */
  externalId?: string;
  /**
   * The status of the connected payment method.
   */
  state: string;
  /**
   * The code that best describes the reason for the state.
   */
  stateReason?: string;
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
   * Whether the payment method is the default for the connected account.
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
   * The payment method view.
   */
  view: string;
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
   * The tags associated with the revision.
   */
  tags?: string[];
  /**
   * The items associated with plan.
   */
  items?: PlanItem[];
  /**
   * The subscription view.
   */
  view: string;
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
  /**
   * The tag for the revision.
   *
   * This is only set in checkout for plans selected using a tag.
   */
  tag?: string;
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
 * The Postmark specific connection data.
 */
export interface PostmarkConnection {
  /**
   * The Postmark server token (e.g. `942faf79-bf10-4dc1-830a-dc7943f43f35`).
   */
  serverToken: string;
  /**
   * The Postmark server ID.
   *
   * This is automatically populated when the server token is updated.
   */
  serverId?: string;
  /**
   * The from email address.
   *
   * The Postmark account must be allowed to send from this email
   * address.
   */
  from?: commonv1.Email | null;
  /**
   * The reply to email address.
   */
  replyTo?: commonv1.Email | null;
  /**
   * The allowed email list.
   */
  allowedEmails?: string[];
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
   * The connection.
   */
  connection?: Connection | null;
  /**
   * The external identifier of the connected price.
   */
  externalId?: string;
  /**
   * The status of the connected price.
   */
  state?: string;
  /**
   * The code that best describes the reason for the state.
   */
  stateReason?: string;
  /**
   * The currency for the price.
   */
  currencyCode: string;
  /**
   * The billing mode for the price.
   */
  billingMode: string;
  /**
   * The billing interval for the price.
   */
  interval?: commonv1.Interval | null;
  /**
   * The admin-facing display name of the price.
   */
  displayName?: string;
  /**
   * The product associated with the price.
   */
  product?: Product | null;
  /**
   * The price is dependent on the quantity.
   */
  empty?: PriceEmptyPrice | null;
  /**
   * The price is fixed per quantity.
   */
  fixed?: PriceFixedPrice | null;
  /**
   * The price is dependent on the quantity.
   */
  tiered?: PriceTieredPrice | null;
  /**
   * The archived status of the price.
   *
   * It determines if the price can be used.
   */
  archived?: boolean;
  /**
   * The price view.
   */
  view: string;
  /**
   * The creation time of the price.
   */
  createTime: Date;
  /**
   * The last update time of the price.
   */
  updateTime: Date;
}

/**
 * An empty price.
 */
export interface PriceEmptyPrice {}

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
 * Product describes a service a tenant provides.
 */
export interface Product {
  /**
   * The system-assigned identifier of the product.
   */
  id: string;
  /**
   * The client defined unique identifier of the product.
   *
   * It is restricted to letters, numbers, underscores, and hyphens,
   * with the first character a letter or a number, and a 255
   * character maximum.
   *
   * ID's starting with `pd_` are reserved.
   */
  uniqueId?: string;
  /**
   * The customer facing human-readable display name of the product.
   *
   * The maximum length is 200 characters.
   */
  displayName: string;
  /**
   * The public description of the product.
   *
   * The maximum length is 1000 characters.
   */
  description?: string;
  /**
   * Whether the price has been committed.
   *
   * This is automatically set the first time the product is used
   * in a plan.
   */
  committed?: boolean;
  /**
   * The archived status of the product.
   *
   * It determines if the product can be activated by self-serve plans.
   */
  archived?: boolean;
  /**
   * The connected products.
   */
  productConnections?: ProductConnection[];
  /**
   * The product view.
   */
  view: string;
  /**
   * The creation time of the product.
   */
  createTime: Date;
  /**
   * The last update time of the product.
   */
  updateTime: Date;
}

/**
 * A link between a UserHub product and an external product.
 */
export interface ProductConnection {
  /**
   * The basic view of the connection.
   */
  connection?: Connection | null;
  /**
   * The external identifier of the connected product.
   */
  externalId: string;
  /**
   * The status of the connected product.
   */
  state: string;
  /**
   * The code that best describes the reason for the state.
   */
  stateReason?: string;
  /**
   * The creation time of the product connection.
   */
  createTime: Date;
  /**
   * The last update time of the product connection.
   */
  updateTime: Date;
}

/**
 * Response message for PurgeOrganization.
 */
export interface PurgeOrganizationResponse {}

/**
 * Response message for PurgeUser.
 */
export interface PurgeUserResponse {}

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
  /**
   * The archived status of the role.
   */
  archived?: boolean;
  /**
   * The role view.
   */
  view: string;
  /**
   * The creation time of the role.
   */
  createTime: Date;
  /**
   * The last update time of the role.
   */
  updateTime: Date;
}

/**
 * The signing secret for the webhook.
 */
export interface SigningSecret {
  /**
   * The signing secret value.
   */
  secret: string;
  /**
   * The time the signing secret is set to expire.
   */
  expireTime?: Date | null;
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
 * The stripe billing specific connection data.
 */
export interface StripeConnection {
  /**
   * The Stripe account ID (e.g. `acct_1LcUvxQYGbxD2SPK`)
   */
  accountId: string;
  /**
   * The live vs test status for the Stripe account.
   */
  live: boolean;
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
 * The representation of an activated plan.
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
   * The code that best describes the reason for the state.
   */
  stateReason?: string;
  /**
   * The billing connection.
   */
  connection?: Connection | null;
  /**
   * The external identifier of the subscription.
   */
  externalId?: string;
  /**
   * The plan.
   */
  plan?: Plan | null;
  /**
   * The currency code for the subscription (e.g. `USD`).
   */
  currencyCode?: string;
  /**
   * The subscription items.
   */
  items?: SubscriptionItem[];
  /**
   * The seat information.
   */
  seats?: SubscriptionSeatInfo[];
  /**
   * The payment method.
   */
  paymentMethod?: PaymentMethod | null;
  /**
   * Whether the subscription is scheduled to be canceled
   * at the end of the current billing period.
   */
  renewCanceled?: boolean;
  /**
   * Whether the subscription is scheduled to be canceled
   * at the end of the current billing period.
   *
   * @deprecated Use `renewCanceled` instead.
   */
  cancelPeriodEnd?: boolean;
  /**
   * The anchor time for the billing cycle.
   */
  anchorTime?: Date | null;
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
   * The organization owner of the subscription.
   */
  organization?: Organization | null;
  /**
   * The user owner of the subscription.
   */
  user?: User | null;
  /**
   * Whether the subscription is the default for the account.
   */
  default?: boolean;
  /**
   * The subscription view.
   */
  view: string;
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
   * The item product.
   */
  product: Product;
  /**
   * The item price.
   */
  price?: Price | null;
  /**
   * The quantity of products.
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
   * The seat product.
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
   * The current state of the user.
   */
  state: string;
  /**
   * The code that best describes the reason for the state.
   */
  stateReason?: string;
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
   * The E164 phone number for the user (e.g. `+12125550123`).
   */
  phoneNumber?: string;
  /**
   * Whether the user's phone number has been verified.
   */
  phoneNumberVerified?: boolean;
  /**
   * The photo/avatar URL of the user.
   */
  imageUrl?: string;
  /**
   * The default ISO-4217 currency code for the user (e.g. `USD`).
   */
  currencyCode?: string;
  /**
   * The IETF BCP-47 language code for the user (e.g. `en`).
   */
  languageCode?: string;
  /**
   * The country/region code for the user (e.g. `US`).
   */
  regionCode?: string;
  /**
   * The IANA time zone for the user (e.g. `America/New_York`).
   */
  timeZone?: string;
  /**
   * The default address for the user.
   */
  address?: commonv1.Address | null;
  /**
   * The connected accounts.
   */
  accountConnections?: AccountConnection[];
  /**
   * The user's default active individual subscription.
   *
   * See memberships for organization subscription and
   * seat information.
   */
  subscription?: AccountSubscription | null;
  /**
   * The user's organization memberships.
   */
  memberships?: Membership[];
  /**
   * The sign-up time for the user.
   */
  signupTime?: Date | null;
  /**
   * Whether the user is disabled.
   */
  disabled?: boolean;
  /**
   * The user view.
   */
  view: string;
  /**
   * The creation time of the user.
   */
  createTime: Date;
  /**
   * The last update time of the user.
   */
  updateTime: Date;
}

/**
 * User input parameters.
 */
export interface UserInput {
  /**
   * The system-assigned identifier of the user.
   */
  id?: string;
  /**
   * The client defined unique identifier of the user account.
   *
   * It is restricted to letters, numbers, underscores, and hyphens,
   * with the first character a letter or a number, and a 255
   * character maximum.
   *
   * ID's starting with `usr_` are reserved.
   */
  uniqueId?: string;
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
   * The default ISO-4217 currency code for the user (e.g. `USD`).
   */
  currencyCode?: string;
  /**
   * The IETF BCP-47 language code for the user (e.g. `en`).
   */
  languageCode?: string;
  /**
   * The country/region code for the user (e.g. `US`).
   */
  regionCode?: string;
  /**
   * The IANA time zone for the user (e.g. `America/New_York`).
   */
  timeZone?: string;
  /**
   * The default address for the user.
   */
  address?: commonv1.Address | null;
  /**
   * The sign-up time for the user.
   */
  signupTime?: Date | null;
  /**
   * Whether the user is disabled.
   */
  disabled?: boolean;
}

/**
 * The webhook specific connection data.
 */
export interface WebhookConnection {
  /**
   * The URL of the events webhook.
   */
  url: string;
  /**
   * The headers sent with requests to the connection URL.
   */
  headers?: Record<string, string>;
  /**
   * The webhook secrets
   */
  signingSecrets: SigningSecret[];
}
