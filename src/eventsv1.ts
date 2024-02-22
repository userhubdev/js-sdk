// Code generated. DO NOT EDIT.
import type * as adminv1 from "./adminv1";

/**
 * The event.
 */
export interface Event {
  /**
   * The event identifier
   */
  id: string;
  /**
   * The event time.
   */
  time: Date;
  /**
   * The event type.
   */
  type: string;
  /**
   * The `flows.changed` data.
   */
  flowsChanged?: FlowsChanged | null;
  /**
   * The `members.changed` data.
   */
  membersChanged?: MembersChanged | null;
  /**
   * The `organizations.changed` data.
   */
  organizationsChanged?: OrganizationsChanged | null;
  /**
   * The `subscriptions.changed` data.
   */
  subscriptionsChanged?: SubscriptionsChanged | null;
  /**
   * The `users.changed` data.
   */
  usersChanged?: UsersChanged | null;
}

/**
 * The flows changed event.
 */
export interface FlowsChanged {
  /**
   * The flow.
   */
  flow: adminv1.Flow;
}

/**
 * The members changed event.
 */
export interface MembersChanged {
  /**
   * The organization.
   */
  organization: adminv1.Organization;
  /**
   * The member.
   */
  member: adminv1.Member;
}

/**
 * The organizations changed event.
 */
export interface OrganizationsChanged {
  /**
   * The organization.
   */
  organization: adminv1.Organization;
}

/**
 * The subscriptions changed event.
 */
export interface SubscriptionsChanged {
  /**
   * The subscription.
   */
  subscription: adminv1.Subscription;
}

/**
 * The users changed event.
 */
export interface UsersChanged {
  /**
   * The user.
   */
  user: adminv1.User;
}
