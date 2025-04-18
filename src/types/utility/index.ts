/**
 * This file exports utility types that provide more specific primitive types
 * for use across the codebase.
 */

/**
 * A UUID string type.
 * UUIDs follow the pattern: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
 * where x is a hexadecimal digit.
 */
export type UUID = string;

/**
 * A Unix timestamp type.
 * Unix timestamps are integers representing the number of seconds since January 1, 1970.
 */
export type UnixTimestamp = number;

/**
 * A type for date strings in ISO 8601 format.
 * Example: "2023-04-18T12:34:56Z"
 */
export type ISODateString = string;

/**
 * A type for positive integers (greater than 0).
 */
export type PositiveInteger = number;

/**
 * A type for non-negative integers (greater than or equal to 0).
 */
export type NonNegativeInteger = number;

/**
 * A type for percentage values (0-100).
 */
export type Percentage = number;

/**
 * A type for rating values (0-100).
 */
export type Rating = number;

/**
 * A type for month numbers (1-12).
 */
export type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

/**
 * A type for year numbers (1900-2100).
 * This range should cover most game release years.
 */
export type Year = number;

/**
 * A type for URL strings.
 */
export type URL = string;

/**
 * A type for ID references.
 * This is a branded type to prevent mixing different entity IDs.
 */
export type ID<T extends string> = number & { __brand: T };