// Code generated. DO NOT EDIT.

/**
 * A postal address (billing, mailing, etc...).
 */
export interface Address {
  /**
   * The address lines.
   */
  lines?: string[];
  /**
   * The city, district, suburb, town, or village.
   */
  city?: string;
  /**
   * The state, country, province, or region.
   */
  state?: string;
  /**
   * The ZIP or postal code.
   */
  postalCode?: string;
  /**
   * The 2-letter country code.
   */
  country?: string;
}

/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export interface Any {
  /**
   * The type of the serialized message.
   */
  "@type"?: string;
}

/**
 * An email address.
 */
export interface Email {
  /**
   * The email address (e.g. `jane@example.com`).
   */
  address?: string;
  /**
   * The email name (e.g. `Jane Doe`).
   */
  displayName?: string;
}

/**
 * A time interval.
 */
export interface Interval {
  /**
   * The interval quantity.
   */
  quantity: number;
  /**
   * The interval unit.
   */
  unit: string;
}

/**
 * A period of time.
 */
export interface Period {
  /**
   * The start time.
   */
  startTime?: Date | null;
  /**
   * The end time.
   */
  endTime?: Date | null;
}
