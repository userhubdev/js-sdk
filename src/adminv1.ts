// Code generated. DO NOT EDIT.
import type * as apiv1 from "./apiv1";
import type * as commonv1 from "./commonv1";

/**
 * A link between a account and an external account.
 */
export interface AccountConnection {
  /**
   * The tenant connection.
   */
  connection?: Connection | null;
  /**
   * The external identifier of the connected account.
   */
  externalId?: string | null;
  /**
   * The external admin URL for the connected account.
   */
  adminUrl?: string | null;
  /**
   * The status of the connected account.
   */
  state: string;
  /**
   * The code that best describes the reason for the state.
   */
  stateReason?: string | null;
  /**
   * The balance amount for the account.
   *
   * A negative value indicates an amount which will be subtracted from the next
   * invoice (credit).
   *
   * A positive value indicates an amount which will be added to the next
   * invoice (debt).
   */
  balanceAmount?: string | null;
  /**
   * The currency code for the account.
   */
  currencyCode?: string | null;
  /**
   * The payment methods for connections that support it.
   */
  paymentMethods?: PaymentMethod[];
  /**
   * The last time the account was pulled from the connection.
   */
  pullTime?: Date | null;
  /**
   * The last time the account was pushed to the connection.
   */
  pushTime?: Date | null;
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
 * The account view of the subscription.
 */
export interface AccountSubscription {
  /**
   * The system-assigned identifier of the subscription.
   */
  id?: string | null;
  /**
   * The state of the subscription.
   */
  state?: string | null;
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
  id?: string | null;
  /**
   * The human-readable display name of the plan.
   */
  displayName?: string | null;
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
  id?: string | null;
  /**
   * The client defined unique identifier of the product.
   */
  uniqueId?: string | null;
  /**
   * The human-readable display name of the product.
   */
  displayName?: string | null;
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
}

/**
 * Response message for BatchCreateTriggers.
 */
export interface BatchCreateTriggersResponse {
  /**
   * The triggers.
   */
  triggers?: TriggerResult[];
}

/**
 * Response message for BatchDeleteTriggers.
 */
export interface BatchDeleteTriggersResponse {
  /**
   * The triggers.
   */
  triggers?: TriggerResult[];
}

/**
 * Response message for BatchGetOrganizations.
 */
export interface BatchGetOrganizationsResponse {
  /**
   * The organizations.
   */
  organizations?: OrganizationResult[];
}

/**
 * Response message for BatchGetTriggers.
 */
export interface BatchGetTriggersResponse {
  /**
   * The triggers.
   */
  triggers?: TriggerResult[];
}

/**
 * Response message for BatchGetUsers.
 */
export interface BatchGetUsersResponse {
  /**
   * The user results.
   */
  users?: UserResult[];
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
  brand?: string | null;
  /**
   * The expiration date of the card.
   */
  expiration?: CardPaymentMethodExpiration | null;
  /**
   * The last for digits of the card.
   */
  last4?: string | null;
  /**
   * The funding method for the card (e.g. `DEBIT`)
   */
  fundingType?: string | null;
}

/**
 * The expiration date for the card.
 */
export interface CardPaymentMethodExpiration {
  /**
   * The expiration year.
   */
  year?: number | null;
  /**
   * The expiration month.
   */
  month?: number | null;
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
  uniqueId?: string | null;
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
  stateReason?: string | null;
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
  providers?: ConnectionProvider[];
  /**
   * The creation time of the connection.
   */
  createTime: Date;
  /**
   * The last update time of the connection.
   */
  updateTime: Date;
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
  uniqueId?: string | null;
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
  stateReason?: string | null;
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
  default?: boolean | null;
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
 * Response message for CreatePaymentMethodIntent.
 */
export interface CreatePaymentMethodIntentResponse {
  /**
   * The setup token for the billing system (e.g. Stripe SetupIntent
   * Client Secret). This is generally used by a frontend
   * client to securely setup a payment method, the result of which
   * can be passed to CreatePaymentMethod to complete the setup
   * process.
   */
  token?: string | null;
}

/**
 * Response message for CreatePortalSession.
 */
export interface CreatePortalSessionResponse {
  /**
   * The URL you should redirect the user to after calling create portal
   * session.
   */
  redirectUrl?: string | null;
}

/**
 * Event describes a service a tenant provides. Multiple
 * events can be multiple and sold using a plan.
 */
export interface Event {
  /**
   * The system-assigned identifier of the event.
   */
  id: string;
  /**
   * The type of the event.
   */
  type: string;
  /**
   * The time of the event.
   */
  time: Date;
  /**
   * The entity associated with the event.
   */
  entity?: EventEntity | null;
  /**
   * The connection associated with the event.
   */
  connection?: EventConnection | null;
  /**
   * The organization associated with the event.
   */
  organization?: EventOrganization | null;
  /**
   * The user associated with the event.
   */
  user?: EventUser | null;
  /**
   * The API key associated with the event.
   */
  apiKey?: EventApiKey | null;
  /**
   * The actor associated with the event.
   */
  actor?: EventActor | null;
  /**
   * The request associated with the event.
   */
  request?: EventRequest | null;
}

/**
 * The actor associated with event.
 */
export interface EventActor {
  /**
   * The system-assigned identifier of the actor.
   */
  id?: string | null;
  /**
   * The human-readable display name of the actor.
   *
   * NOTE: this is the current display name and not
   * the one as of the time of the event.
   */
  displayName?: string | null;
  /**
   * The email address of the actor.
   *
   * NOTE: this is the current email and not
   * the one as of the time of the event.
   */
  email?: string | null;
  /**
   * Whether the actor is a tenant admin.
   */
  admin?: boolean | null;
}

/**
 * The API key associated with event.
 */
export interface EventApiKey {
  /**
   * The system-assigned identifier of the API key.
   */
  id: string;
}

/**
 * The connection associated with the event.
 */
export interface EventConnection {
  /**
   * The system-assigned identifier of the connection.
   */
  id: string;
  /**
   * The human-readable display name of the connection.
   *
   * NOTE: this is the current display name and not
   * the one as of the time of the event.
   */
  displayName?: string | null;
  /**
   * The connection type.
   */
  type?: string | null;
}

/**
 * The entity associated with event.
 */
export interface EventEntity {
  /**
   * The system-assigned identifier of the entity.
   */
  id: string;
}

/**
 * The organization associated with event.
 */
export interface EventOrganization {
  /**
   * The system-assigned identifier of the organization.
   */
  id: string;
  /**
   * The human-readable display name of the organization.
   *
   * NOTE: this is the current display name and not
   * the one as of the time of the event.
   */
  displayName?: string | null;
  /**
   * The email address of the organization.
   *
   * NOTE: this is the current email and not
   * the one as of the time of the event.
   */
  email?: string | null;
}

/**
 * The request associated with event.
 */
export interface EventRequest {
  /**
   * The IP address of the client/user.
   *
   * It's very likely this is the IP address of the
   * API client and not the end-user.
   */
  ipAddress?: string | null;
  /**
   * The trace ID associated with the request.
   */
  traceId?: string | null;
}

/**
 * The user associated with event.
 */
export interface EventUser {
  /**
   * The system-assigned identifier of the user.
   */
  id: string;
  /**
   * The human-readable display name of the user.
   *
   * NOTE: this is the current display name and not
   * the one as of the time of the event.
   */
  displayName?: string | null;
  /**
   * The email address of the user.
   *
   * NOTE: this is the current email and not
   * the one as of the time of the event.
   */
  email?: string | null;
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
  stateReason?: string | null;
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
  ttl?: string | null;
  /**
   * The flow secret.
   *
   * This is only populated on create.
   */
  secret?: string | null;
  /**
   * The creation time of the flow.
   */
  createTime: Date;
  /**
   * The last update time of the flow.
   */
  updateTime: Date;
  /**
   * The join organization flow type specific data.
   */
  joinOrganization?: JoinOrganizationFlow | null;
  /**
   * The signup flow type specific data
   */
  signup?: SignupFlow | null;
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
  projectId?: string | null;
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
  stateReason?: string | null;
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
  externalId?: string | null;
  /**
   * The invoice number.
   */
  number?: string | null;
  /**
   * The currency code for the invoice (e.g. `USD`).
   */
  currencyCode?: string | null;
  /**
   * The user facing description for the invoice.
   */
  description?: string | null;
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
  subtotalAmount?: string | null;
  /**
   * The invoice-level discount amount.
   *
   * This does not include item level discounts.
   */
  discountAmount?: string | null;
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
  taxAmount?: string | null;
  /**
   * The total amount for the invoice.
   */
  totalAmount?: string | null;
  /**
   * The total amount minus any credits automatically
   * associated with the invoice.
   */
  dueAmount?: string | null;
  /**
   * The due amount minus the amount already paid.
   */
  remainingDueAmount?: string | null;
  /**
   * The time the invoice must be paid by.
   */
  dueTime?: Date | null;
  /**
   * The amount already paid towards the invoice.
   */
  paidAmount?: string | null;
  /**
   * The status of the invoice payment.
   */
  paymentState?: string | null;
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
   * The last time the invoice was pulled from the connection.
   */
  pullTime?: Date | null;
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
  fullName?: string | null;
  /**
   * The billing email address.
   */
  email?: string | null;
  /**
   * The billing phone number.
   */
  phoneNumber?: string | null;
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
  startAmount?: string | null;
  /**
   * The ending balance of the account.
   */
  endAmount?: string | null;
  /**
   * The amount applied to the invoice from the balance.
   *
   * A negative amount means a debit from the account balance.
   * A positive amount means a credit to the account balance.
   */
  appliedAmount?: string | null;
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
  description?: string | null;
  /**
   * The total amount for the change excluding
   * taxes and discounts.
   */
  subtotalAmount?: string | null;
  /**
   * The change discount amount.
   */
  discountAmount?: string | null;
  /**
   * The starting quantity of the change.
   */
  startQuantity?: number | null;
  /**
   * The ending quantity of the change.
   */
  endQuantity?: number | null;
  /**
   * The starting (credited) item identifiers.
   */
  startItemIds: string[];
  /**
   * The ending (charged) item identifiers.
   */
  endItemIds: string[];
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
  quantity?: number | null;
  /**
   * The total amount for the line item excluding
   * taxes and discounts.
   */
  subtotalAmount?: string | null;
  /**
   * The item-level discount amount.
   */
  discountAmount?: string | null;
  /**
   * The user facing description for the line item.
   */
  description?: string | null;
  /**
   * The external identifier of the invoice item.
   */
  externalId?: string | null;
  /**
   * Whether the item was a proration.
   */
  proration?: boolean | null;
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
   * The currency code for the preview (e.g. `USD`).
   */
  currencyCode?: string | null;
  /**
   * The bill to contact information.
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
   * The subtotal amount for the preview.
   *
   * This includes item-level discounts.
   */
  subtotalAmount?: string | null;
  /**
   * The preview-level discount amount.
   *
   * This does not include item level discounts.
   */
  discountAmount?: string | null;
  /**
   * The starting and ending account balance as
   * of the time the preview.
   */
  balance?: InvoiceBalance | null;
  /**
   * The tax amount for the preview.
   */
  taxAmount?: string | null;
  /**
   * The total amount for the preview.
   */
  totalAmount?: string | null;
  /**
   * The total amount minus any credits automatically
   * associated with the preview.
   */
  dueAmount?: string | null;
  /**
   * A token which can be passed to a create or update
   * operation to ensure the change matches the preview.
   *
   * This token generally expires within 10 minutes of
   * being generated.
   */
  changeToken?: string | null;
  /**
   * The line items for the invoice.
   */
  items?: InvoicePreviewItem[];
}

/**
 * The line items for the preview.
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
  quantity?: number | null;
  /**
   * The total amount for the line item excluding
   * taxes and discounts.
   */
  subtotalAmount?: string | null;
  /**
   * The item-level discount amount.
   */
  discountAmount?: string | null;
  /**
   * The user facing description for the line item.
   */
  description?: string | null;
  /**
   * Whether the item was a proration.
   */
  proration?: boolean | null;
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
  displayName?: string | null;
  /**
   * The email address of the invitee.
   */
  email?: string | null;
}

/**
 * Response message for ListConnections.
 */
export interface ListConnectionsResponse {
  /**
   * The list of connections.
   */
  connections?: Connection[];
  /**
   * A token, which can be sent as `pageToken` to retrieve the next page.
   * If this field is omitted, there are no subsequent pages.
   */
  nextPageToken?: string | null;
  /**
   * A token, which can be sent as `pageToken` to retrieve the previous page.
   * If this field is absent, there are no preceding pages. If this field is
   * an empty string then the previous page is the first result.
   */
  previousPageToken?: string | null;
}

/**
 * Response message for ListEvents.
 */
export interface ListEventsResponse {
  /**
   * The list of events.
   */
  events?: Event[];
  /**
   * A token, which can be sent as `pageToken` to retrieve the next page.
   * If this field is omitted, there are no subsequent pages.
   */
  nextPageToken?: string | null;
  /**
   * A token, which can be sent as `pageToken` to retrieve the previous page.
   * If this field is absent, there are no preceding pages. If this field is
   * an empty string then the previous page is the first result.
   */
  previousPageToken?: string | null;
}

/**
 * Response message for ListFlows.
 */
export interface ListFlowsResponse {
  /**
   * The list of flows.
   */
  flows?: Flow[];
  /**
   * A token, which can be sent as `pageToken` to retrieve the next page.
   * If this field is omitted, there are no subsequent pages.
   */
  nextPageToken?: string | null;
  /**
   * A token, which can be sent as `pageToken` to retrieve the previous page.
   * If this field is absent, there are no preceding pages. If this field is
   * an empty string then the previous page is the first result.
   */
  previousPageToken?: string | null;
}

/**
 * Response message for ListInvoices.
 */
export interface ListInvoicesResponse {
  /**
   * The list of invoices.
   */
  invoices?: Invoice[];
  /**
   * A token, which can be sent as `pageToken` to retrieve the next page.
   * If this field is omitted, there are no subsequent pages.
   */
  nextPageToken?: string | null;
  /**
   * A token, which can be sent as `pageToken` to retrieve the previous page.
   * If this field is absent, there are no preceding pages. If this field is
   * an empty string then the previous page is the first result.
   */
  previousPageToken?: string | null;
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
  nextPageToken?: string | null;
  /**
   * A token, which can be sent as `pageToken` to retrieve the previous page.
   * If this field is absent, there are no preceding pages. If this field is
   * an empty string then the previous page is the first result.
   */
  previousPageToken?: string | null;
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
  nextPageToken?: string | null;
  /**
   * A token, which can be sent as `pageToken` to retrieve the previous page.
   * If this field is absent, there are no preceding pages. If this field is
   * an empty string then the previous page is the first result.
   */
  previousPageToken?: string | null;
}

/**
 * Response message for ListPlanGroupChangePaths.
 */
export interface ListPlanGroupChangePathsResponse {
  /**
   * The list of change paths.
   */
  planGroupChangePaths?: PlanGroupChangePath[];
  /**
   * A token, which can be sent as `pageToken` to retrieve the next page.
   * If this field is omitted, there are no subsequent pages.
   */
  nextPageToken?: string | null;
  /**
   * A token, which can be sent as `pageToken` to retrieve the previous page.
   * If this field is absent, there are no preceding pages. If this field is
   * an empty string then the previous page is the first result.
   */
  previousPageToken?: string | null;
}

/**
 * Response message for ListPlanGroupRevisions.
 */
export interface ListPlanGroupRevisionsResponse {
  /**
   * The list of revisions.
   */
  planGroupRevisions?: PlanGroupRevision[];
  /**
   * A token, which can be sent as `pageToken` to retrieve the next page.
   * If this field is omitted, there are no subsequent pages.
   */
  nextPageToken?: string | null;
  /**
   * A token, which can be sent as `pageToken` to retrieve the previous page.
   * If this field is absent, there are no preceding pages. If this field is
   * an empty string then the previous page is the first result.
   */
  previousPageToken?: string | null;
}

/**
 * Response message for ListPlanGroupTags.
 */
export interface ListPlanGroupTagsResponse {
  /**
   * The list of plan group tags.
   */
  planGroupTags?: PlanGroupTag[];
  /**
   * A token, which can be sent as `pageToken` to retrieve the next page.
   * If this field is omitted, there are no subsequent pages.
   */
  nextPageToken?: string | null;
  /**
   * A token, which can be sent as `pageToken` to retrieve the previous page.
   * If this field is absent, there are no preceding pages. If this field is
   * an empty string then the previous page is the first result.
   */
  previousPageToken?: string | null;
}

/**
 * Response message for ListPlanGroups.
 */
export interface ListPlanGroupsResponse {
  /**
   * The list of plan groups.
   */
  planGroups?: PlanGroup[];
  /**
   * A token, which can be sent as `pageToken` to retrieve the next page.
   * If this field is omitted, there are no subsequent pages.
   */
  nextPageToken?: string | null;
  /**
   * A token, which can be sent as `pageToken` to retrieve the previous page.
   * If this field is absent, there are no preceding pages. If this field is
   * an empty string then the previous page is the first result.
   */
  previousPageToken?: string | null;
}

/**
 * Response message for ListPrices.
 */
export interface ListPricesResponse {
  /**
   * The list of prices.
   */
  prices?: Price[];
  /**
   * A token, which can be sent as `pageToken` to retrieve the next page.
   * If this field is omitted, there are no subsequent pages.
   */
  nextPageToken?: string | null;
  /**
   * A token, which can be sent as `pageToken` to retrieve the previous page.
   * If this field is absent, there are no preceding pages. If this field is
   * an empty string then the previous page is the first result.
   */
  previousPageToken?: string | null;
}

/**
 * Response message for ListProducts.
 */
export interface ListProductsResponse {
  /**
   * The list of products.
   */
  products?: Product[];
  /**
   * A token, which can be sent as `pageToken` to retrieve the next page.
   * If this field is omitted, there are no subsequent pages.
   */
  nextPageToken?: string | null;
  /**
   * A token, which can be sent as `pageToken` to retrieve the previous page.
   * If this field is absent, there are no preceding pages. If this field is
   * an empty string then the previous page is the first result.
   */
  previousPageToken?: string | null;
}

/**
 * Response message for ListRoles.
 */
export interface ListRolesResponse {
  /**
   * The list of roles.
   */
  roles?: Role[];
  /**
   * A token, which can be sent as `pageToken` to retrieve the next page.
   * If this field is omitted, there are no subsequent pages.
   */
  nextPageToken?: string | null;
  /**
   * A token, which can be sent as `pageToken` to retrieve the previous page.
   * If this field is absent, there are no preceding pages. If this field is
   * an empty string then the previous page is the first result.
   */
  previousPageToken?: string | null;
}

/**
 * Response message for ListSubscriptions.
 */
export interface ListSubscriptionsResponse {
  /**
   * The list of subscriptions.
   */
  subscriptions?: Subscription[];
  /**
   * A token, which can be sent as `pageToken` to retrieve the next page.
   * If this field is omitted, there are no subsequent pages.
   */
  nextPageToken?: string | null;
  /**
   * A token, which can be sent as `pageToken` to retrieve the previous page.
   * If this field is absent, there are no preceding pages. If this field is
   * an empty string then the previous page is the first result.
   */
  previousPageToken?: string | null;
}

/**
 * Response message for ListTriggers.
 */
export interface ListTriggersResponse {
  /**
   * The list of triggers.
   */
  triggers?: Trigger[];
  /**
   * A token, which can be sent as `pageToken` to retrieve the next page.
   * If this field is omitted, there are no subsequent pages.
   */
  nextPageToken?: string | null;
  /**
   * A token, which can be sent as `pageToken` to retrieve the previous page.
   * If this field is absent, there are no preceding pages. If this field is
   * an empty string then the previous page is the first result.
   */
  previousPageToken?: string | null;
}

/**
 * Response message for ListUsers.
 */
export interface ListUsersResponse {
  /**
   * The list of users.
   */
  users?: User[];
  /**
   * A token, which can be sent as `pageToken` to retrieve the next page.
   * If this field is omitted, there are no subsequent pages.
   */
  nextPageToken?: string | null;
  /**
   * A token, which can be sent as `pageToken` to retrieve the previous page.
   * If this field is absent, there are no preceding pages. If this field is
   * an empty string then the previous page is the first result.
   */
  previousPageToken?: string | null;
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
  user?: User | null;
  /**
   * The user's role within the organization.
   */
  role?: Role | null;
  /**
   * The seat associated with the member.
   *
   * This will be absent if there is no active
   * subscription for the organization or the user
   * has not been assigned a seat.
   */
  seat?: AccountSubscriptionSeat | null;
  /**
   * The creation time of the membership.
   */
  createTime?: Date | null;
  /**
   * The last update time of the membership.
   */
  updateTime?: Date | null;
}

/**
 * Member input parameters.
 */
export interface MemberInput {
  /**
   * The identifier of the user.
   */
  userId?: string | null;
  /**
   * The identifier of the role.
   *
   * This is currently limited to `member`, `admin`, and `owner`.
   */
  roleId?: string | null;
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
  organization?: Organization | null;
  /**
   * The user's role within the organization.
   */
  role?: Role | null;
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
  stateReason?: string | null;
  /**
   * The client defined unique identifier of the organization account.
   */
  uniqueId?: string | null;
  /**
   * The human-readable display name of the organization.
   */
  displayName?: string | null;
  /**
   * The email address of the organization.
   */
  email?: string | null;
  /**
   * Whether the organization's email address has been verified.
   */
  emailVerified?: boolean | null;
  /**
   * The E164 phone number for the organization (e.g. `+12125550123`).
   */
  phoneNumber?: string | null;
  /**
   * Whether the organization's phone number has been verified.
   */
  phoneNumberVerified?: boolean | null;
  /**
   * The photo/avatar URL of the organization.
   */
  imageUrl?: string | null;
  /**
   * The default ISO-4217 currency code for the organization (e.g. `USD`).
   */
  currencyCode?: string | null;
  /**
   * The IETF BCP-47 language code for the organization (e.g. `en`).
   */
  languageCode?: string | null;
  /**
   * The country/region code for the organization (e.g. `US`).
   */
  regionCode?: string | null;
  /**
   * The IANA time zone for the organization (e.g. `America/New_York`).
   */
  timeZone?: string | null;
  /**
   * The address for the organization.
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
   * Whether the organization is disabled.
   */
  disabled?: boolean | null;
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
  id?: string | null;
  /**
   * The client defined unique identifier of the organization account.
   *
   * It is restricted to letters, numbers, underscores, and hyphens,
   * with the first character a letter or a number, and a 255
   * character maximum.
   *
   * ID's starting with `org_` are reserved.
   */
  uniqueId?: string | null;
  /**
   * The human-readable display name of the organization.
   *
   * The maximum length is 200 characters.
   */
  displayName?: string | null;
  /**
   * The email address of the organization.
   *
   * The maximum length is 320 characters.
   */
  email?: string | null;
  /**
   * Whether the organization's email address has been verified.
   */
  emailVerified?: boolean | null;
  /**
   * The E164 phone number for the organization (e.g. `+12125550123`).
   */
  phoneNumber?: string | null;
  /**
   * Whether the organization's phone number has been verified.
   */
  phoneNumberVerified?: boolean | null;
  /**
   * The photo/avatar URL of the organization.
   *
   * The maximum length is 2000 characters.
   */
  imageUrl?: string | null;
  /**
   * The default ISO-4217 currency code for the organization (e.g. `USD`).
   */
  currencyCode?: string | null;
  /**
   * The IETF BCP-47 language code for the organization (e.g. `en`).
   */
  languageCode?: string | null;
  /**
   * The country/region code for the organization (e.g. `US`).
   */
  regionCode?: string | null;
  /**
   * The IANA time zone for the organization (e.g. `America/New_York`).
   */
  timeZone?: string | null;
  /**
   * The billing address for the organization.
   */
  address?: commonv1.Address | null;
  /**
   * The sign-up time for the organization.
   */
  signupTime?: Date | null;
  /**
   * Whether the organization is disabled.
   */
  disabled?: boolean | null;
}

/**
 * Result wrapper for an organization.
 */
export interface OrganizationResult {
  /**
   * The organization.
   */
  organization?: Organization | null;
  /**
   * The organization error.
   */
  error?: apiv1.Status | null;
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
  id?: string | null;
  /**
   * The external identifier of the connected payment method.
   */
  externalId?: string | null;
  /**
   * The status of the connected payment method.
   */
  state: string;
  /**
   * The code that best describes the reason for the state.
   */
  stateReason?: string | null;
  /**
   * The payment method type.
   */
  type: string;
  /**
   * A human readable description of the payment method.
   *
   * This can be used to show a description of the payment method
   * when the type is UNKNOWN or not explicitly handled.
   */
  displayName?: string | null;
  /**
   * The full name of the owner of the payment method.
   */
  fullName?: string | null;
  /**
   * The address for the payment method.
   */
  address?: commonv1.Address | null;
  /**
   * Whether the payment method is the default for the connected account.
   */
  default?: boolean | null;
  /**
   * The last time the payment method was pulled from the connection.
   */
  pullTime?: Date | null;
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
  description?: string | null;
  /**
   * The currency code for the plan (e.g. `USD`).
   */
  currencyCode?: string | null;
  /**
   * The billing interval for the plan.
   */
  billingInterval?: commonv1.Interval | null;
  /**
   * The tags associated with the revision.
   */
  tags: string[];
  /**
   * The items associated with plan.
   */
  items?: PlanItem[];
}

/**
 * Plan group is a container for plan revisions and billing
 * intervals.
 *
 * A plan group would generally describe a tier of plans offered
 * (e.g. Pro) which might contain two options, a monthly and
 * yearly plan.
 */
export interface PlanGroup {
  /**
   * The system-assigned identifier of the plan group.
   */
  id: string;
  /**
   * The client defined unique identifier of the plan group (e.g. `pro`).
   *
   * It is restricted to letters, numbers, underscores, and hyphens,
   * with the first character a letter or a number, and a 255
   * character maximum.
   *
   * ID's starting with `pg_r are reserved.
   */
  uniqueId?: string | null;
  /**
   * The customer facing human-readable display name of the plan group.
   *
   * The maximum length is 200 characters.
   */
  displayName: string;
  /**
   * The admin facing description of the plan group.
   *
   * The maximum length is 1000 characters.
   */
  description?: string | null;
  /**
   * The type of account the plan can be activated for.
   */
  accountType: string;
  /**
   * The trial settings.
   */
  trial?: PlanGroupTrial | null;
  /**
   * The visibility of the plan group.
   */
  visibility?: string | null;
  /**
   * The archived status of the plan group.
   */
  archived?: boolean | null;
  /**
   * The current revision for the plan group.
   */
  revision?: PlanGroupRevision | null;
  /**
   * The creation time of the plan group.
   */
  createTime: Date;
  /**
   * The last update time of the plan group.
   */
  updateTime: Date;
}

/**
 * This defines the upgrade/downgrade paths for a plan group.
 */
export interface PlanGroupChangePath {
  /**
   * The target plan group for this change path.
   */
  target?: PlanGroup | null;
  /**
   * Whether the change is considered an upgrade or
   * a downgrade.
   */
  direction?: string | null;
  /**
   * The visibility of the change path.
   */
  visibility?: string | null;
  /**
   * The creation time of the plan group change path.
   */
  createTime: Date;
  /**
   * The last update time of the plan group change path.
   */
  updateTime: Date;
}

/**
 * Plan group revisions track the configuration options for a plan group.
 */
export interface PlanGroupRevision {
  /**
   * The system-assigned identifier of the plan group revision.
   */
  id: string;
  /**
   * The default status of the revision.
   *
   * When this is true, the revision will be used as the default when not
   * explicitly specified.
   */
  default: boolean;
  /**
   * The supported currency codes (e.g. `USD`).
   */
  currencyCodes: string[];
  /**
   * The plans associated with plan group revision.
   */
  plans?: PlanGroupRevisionPlan[];
  /**
   * The items associated with plan group revision.
   */
  items?: PlanGroupRevisionItem[];
  /**
   * Whether the revision has been committed.
   *
   * After the revision has been committed, it is available for use, but
   * can no longer be edited.
   */
  committed?: boolean | null;
  /**
   * The tags associated with the revision.
   *
   * Tags are restricted to letters, numbers, underscores, and hyphens,
   * with the first character a letter or a number, and a 255
   * character maximum.
   *
   * A revision is limited to 10 tags.
   */
  tags: string[];
  /**
   * The revised plan group revision identifier.
   *
   * This allows you to track the revision lineage.
   */
  sourceRevisionId?: string | null;
  /**
   * The creation time of the plan group revision.
   */
  createTime: Date;
  /**
   * The last update time of the plan group revision.
   */
  updateTime: Date;
}

/**
 * The products which the plan group includes.
 */
export interface PlanGroupRevisionItem {
  /**
   * The product associated with the item.
   */
  product?: Product | null;
  /**
   * The plan item type.
   */
  type: string;
}

/**
 * The actual plan within the plan group. This defines the associated
 * connection and billing interval.
 */
export interface PlanGroupRevisionPlan {
  /**
   * The client defined unique identifier for the plan (e.g. `monthly`).
   */
  uniqueId?: string | null;
  /**
   * The details of the associated connection.
   */
  connection?: Connection | null;
  /**
   * The billing interval for the plan.
   */
  interval?: commonv1.Interval | null;
  /**
   * The customer facing human-readable display name for the plan.
   */
  displayName?: string | null;
  /**
   * The admin facing description of the plan.
   *
   * The maximum length is 1000 characters.
   */
  description?: string | null;
  /**
   * The prices associated with the plan.
   *
   * There should be a price for each product/currency
   * combination.
   */
  prices?: Price[];
  /**
   * The visibility of the plan.
   */
  visibility?: string | null;
}

/**
 * A tag which references a specific plan group revision.
 */
export interface PlanGroupTag {
  /**
   * The client defined tag (e.g. `2023`).
   */
  tag: string;
  /**
   * The system-assigned identifier of the plan group revision.
   */
  revisionId: string;
}

/**
 * The trial settings.
 */
export interface PlanGroupTrial {
  /**
   * The default number of days in the trial.
   */
  days?: number | null;
}

/**
 * The plan products.
 */
export interface PlanItem {
  /**
   * The product associated with the item.
   */
  product?: Product | null;
  /**
   * The price associated with them item.
   */
  price?: Price | null;
  /**
   * The plan item type.
   */
  type: string;
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
  serverId?: string | null;
  /**
   * The from email address.
   *
   * The Postmark account must be allowed to send from this email
   * address.
   */
  from_?: commonv1.Email | null;
  /**
   * The reply to email address.
   */
  replyTo?: commonv1.Email | null;
  /**
   * The allowed email list.
   */
  allowedEmails: string[];
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
  externalId?: string | null;
  /**
   * The status of the connected price.
   */
  state?: string | null;
  /**
   * The code that best describes the reason for the state.
   */
  stateReason?: string | null;
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
  displayName?: string | null;
  /**
   * The product associated with the price.
   */
  product?: Product | null;
  /**
   * The archived status of the price.
   *
   * It determines if the price can be used.
   */
  archived?: boolean | null;
  /**
   * The last time the price was pulled from the connection.
   */
  pullTime?: Date | null;
  /**
   * The last time the price was pushed to the connection.
   */
  pushTime?: Date | null;
  /**
   * The creation time of the price.
   */
  createTime: Date;
  /**
   * The last update time of the price.
   */
  updateTime: Date;
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
  tiers?: TieredPriceTier[];
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
  uniqueId?: string | null;
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
  description?: string | null;
  /**
   * Whether the price has been committed.
   *
   * This is automatically set the first time the product is used
   * in a plan.
   */
  committed?: boolean | null;
  /**
   * The archived status of the product.
   *
   * It determines if the product can be activated by self-serve plans.
   */
  archived?: boolean | null;
  /**
   * The connected products.
   */
  productConnections?: ProductConnection[];
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
  stateReason?: string | null;
  /**
   * The last time the product was pulled from the connection.
   */
  pullTime?: Date | null;
  /**
   * The last time the product was pushed to the connection.
   */
  pushTime?: Date | null;
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
  description?: string | null;
  /**
   * The additional permissions allowed by the role.
   */
  permissionSets: string[];
  /**
   * Whether the role is the default for the tenant.
   */
  default?: boolean | null;
  /**
   * The archived status of the role.
   */
  archived?: boolean | null;
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
 * Response message for SearchMembers.
 */
export interface SearchMembersResponse {
  /**
   * The search of members.
   */
  members?: Member[];
  /**
   * A token, which can be sent as `pageToken` to retrieve the next page.
   * If this field is omitted, there are no subsequent pages.
   */
  nextPageToken?: string | null;
  /**
   * A token, which can be sent as `pageToken` to retrieve the previous page.
   * If this field is absent, there are no preceding pages. If this field is
   * an empty string then the previous page is the first result.
   */
  previousPageToken?: string | null;
  /**
   * The estimated total count of matched members irrespective of pagination.
   *
   * This field is ignored if `show_total_size` is not true or `pageToken`
   * is not empty.
   */
  totalSize?: number | null;
}

/**
 * Response message for SearchOrganizations.
 */
export interface SearchOrganizationsResponse {
  /**
   * The search of organizations.
   */
  organizations?: Organization[];
  /**
   * A token, which can be sent as `pageToken` to retrieve the next page.
   * If this field is omitted, there are no subsequent pages.
   */
  nextPageToken?: string | null;
  /**
   * A token, which can be sent as `pageToken` to retrieve the previous page.
   * If this field is absent, there are no preceding pages. If this field is
   * an empty string then the previous page is the first result.
   */
  previousPageToken?: string | null;
  /**
   * The estimated total count of matched organizations irrespective of pagination.
   *
   * This field is ignored if `show_total_size` is not true or `pageToken`
   * is not empty.
   */
  totalSize?: number | null;
}

/**
 * Response message for SearchUsers.
 */
export interface SearchUsersResponse {
  /**
   * The search of users.
   */
  users?: User[];
  /**
   * A token, which can be sent as `pageToken` to retrieve the next page.
   * If this field is omitted, there are no subsequent pages.
   */
  nextPageToken?: string | null;
  /**
   * A token, which can be sent as `pageToken` to retrieve the previous page.
   * If this field is absent, there are no preceding pages. If this field is
   * an empty string then the previous page is the first result.
   */
  previousPageToken?: string | null;
  /**
   * The estimated total count of matched users irrespective of pagination.
   *
   * This field is ignored if `show_total_size` is not true or `pageToken`
   * is not empty.
   */
  totalSize?: number | null;
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
  email?: string | null;
  /**
   * The display name of the invitee.
   */
  displayName?: string | null;
  /**
   * Whether to create an organization as part of the signup flow.
   */
  createOrganization?: boolean | null;
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
  stateReason?: string | null;
  /**
   * The billing connection.
   */
  connection?: Connection | null;
  /**
   * The external identifier of the subscription.
   */
  externalId?: string | null;
  /**
   * The plan.
   */
  plan?: Plan | null;
  /**
   * The currency code for the subscription (e.g. `USD`).
   */
  currencyCode?: string | null;
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
  cancelPeriodEnd?: boolean | null;
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
   *
   * The ID field of this object must be populated if
   * if user isn't specified.
   */
  organization?: Organization | null;
  /**
   * The user owner of the subscription.
   *
   * The ID field of this object must be populated if
   * if organization isn't specified.
   */
  user?: User | null;
  /**
   * Whether the subscription is the default for the account.
   */
  default?: boolean | null;
  /**
   * The last time the subscription was pulled from the connection.
   */
  pullTime?: Date | null;
  /**
   * The last time the subscription was pushed to the connection.
   */
  pushTime?: Date | null;
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
  product?: Product | null;
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
   * The seat product.
   */
  product?: Product | null;
  /**
   * The quantity which has been invoiced for the current billing period.
   *
   * This might be less than the total quantity while a subscription change
   * is pending or if the subscription is over-provisioned.
   */
  currentPeriodQuantity?: number | null;
  /**
   * The quantity scheduled to appear on the next invoice.
   *
   * This will only be set when different from current period quantity.
   */
  nextPeriodQuantity?: number | null;
  /**
   * The quantity currently in use.
   */
  assignedQuantity?: number | null;
  /**
   * The quantity available for use.
   */
  unassignedQuantity?: number | null;
  /**
   * The sum of the assigned and unassigned quantities.
   */
  totalQuantity?: number | null;
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
  days?: number | null;
  /**
   * The number of days remaining in the trial.
   *
   * This number is rounded down, so will generally be
   * less than days. It will be zero on the last day
   * of the trial and null when the trial expires.
   */
  remainingDays?: number | null;
}

/**
 * A quantity range within the tiered price.
 */
export interface TieredPriceTier {
  /**
   * The upper quantity for tier (inclusive).
   */
  upper?: number | null;
  /**
   * The per quantity amount for the tier.
   */
  unitAmount?: string | null;
  /**
   * The flat amount for the tier.
   */
  flatAmount?: string | null;
}

/**
 * A trigger is a way to run connection functionality when specific events
 * occur.
 */
export interface Trigger {
  /**
   * The connection.
   */
  connection?: Connection | null;
  /**
   * The event type.
   */
  eventType: string;
  /**
   * The creation time of the trigger.
   */
  createTime: Date;
  /**
   * The last update time of the trigger.
   */
  updateTime: Date;
}

/**
 * Result wrapper for a trigger.
 */
export interface TriggerResult {
  /**
   * The trigger.
   */
  trigger?: Trigger | null;
  /**
   * The trigger error.
   */
  error?: apiv1.Status | null;
}

/**
 * The subscription items.
 */
export interface UpdateSubscriptionItemsRequestItem {
  /**
   * The product identifier.
   *
   * If this is empty and the user ID is set, the default
   * seat will be used.
   */
  productId?: string | null;
  /**
   * The member user ID of the organization member. This can
   * only be specified for seat items.
   */
  userId?: string | null;
  /**
   * The quantity for the item.
   *
   * If this is `0` the item will be removed.
   */
  quantity?: number | null;
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
  stateReason?: string | null;
  /**
   * The client defined unique identifier of the user account.
   */
  uniqueId?: string | null;
  /**
   * The human-readable display name of the user.
   */
  displayName?: string | null;
  /**
   * The email address of the user.
   */
  email?: string | null;
  /**
   * Whether the user's email address has been verified.
   */
  emailVerified?: boolean | null;
  /**
   * The E164 phone number for the user (e.g. `+12125550123`).
   */
  phoneNumber?: string | null;
  /**
   * Whether the user's phone number has been verified.
   */
  phoneNumberVerified?: boolean | null;
  /**
   * The photo/avatar URL of the user.
   */
  imageUrl?: string | null;
  /**
   * The default ISO-4217 currency code for the user (e.g. `USD`).
   */
  currencyCode?: string | null;
  /**
   * The IETF BCP-47 language code for the user (e.g. `en`).
   */
  languageCode?: string | null;
  /**
   * The country/region code for the user (e.g. `US`).
   */
  regionCode?: string | null;
  /**
   * The IANA time zone for the user (e.g. `America/New_York`).
   */
  timeZone?: string | null;
  /**
   * The billing address for the user.
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
  disabled?: boolean | null;
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
  id?: string | null;
  /**
   * The client defined unique identifier of the user account.
   *
   * It is restricted to letters, numbers, underscores, and hyphens,
   * with the first character a letter or a number, and a 255
   * character maximum.
   *
   * ID's starting with `usr_` are reserved.
   */
  uniqueId?: string | null;
  /**
   * The human-readable display name of the user.
   *
   * The maximum length is 200 characters.
   */
  displayName?: string | null;
  /**
   * The email address of the user.
   *
   * The maximum length is 320 characters.
   */
  email?: string | null;
  /**
   * Whether the user's email address has been verified.
   */
  emailVerified?: boolean | null;
  /**
   * The E164 phone number for the user (e.g. `+12125550123`).
   */
  phoneNumber?: string | null;
  /**
   * Whether the user's phone number has been verified.
   */
  phoneNumberVerified?: boolean | null;
  /**
   * The photo/avatar URL of the user.
   *
   * The maximum length is 2000 characters.
   */
  imageUrl?: string | null;
  /**
   * The default ISO-4217 currency code for the user (e.g. `USD`).
   */
  currencyCode?: string | null;
  /**
   * The IETF BCP-47 language code for the user (e.g. `en`).
   */
  languageCode?: string | null;
  /**
   * The country/region code for the user (e.g. `US`).
   */
  regionCode?: string | null;
  /**
   * The IANA time zone for the user (e.g. `America/New_York`).
   */
  timeZone?: string | null;
  /**
   * The billing address for the user.
   */
  address?: commonv1.Address | null;
  /**
   * The sign-up time for the user.
   */
  signupTime?: Date | null;
  /**
   * Whether the user is disabled.
   */
  disabled?: boolean | null;
}

/**
 * The user or error.
 */
export interface UserResult {
  /**
   * The user.
   */
  user?: User | null;
  /**
   * The result error.
   */
  error?: apiv1.Status | null;
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
  headers: Record<string, string>;
  /**
   * The webhook secrets
   */
  signingSecrets?: SigningSecret[];
}
