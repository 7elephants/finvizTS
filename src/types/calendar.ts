/*
 * ---
 * Workflow Summary
 * Invocation: Imported by calendar.ts and re-exported from types/index.ts.
 *
 * | Step | Description                          | Input | Output                    |
 * |------|---------------------------------------|-------|----------------------------|
 * | 1    | Export CalendarOptions interface     | —     | Typed request options      |
 * | 2    | Export Calendar response type        | —     | Typed calendar event row   |
 * ---
 */

/** Options for an economic calendar request. */
export interface CalendarOptions {
  /** Start date of the range to fetch events for. */
  from: Date;
  /** Optional end date of the range to fetch events for. */
  to?: Date;
}

/** A single row returned by the economic calendar endpoint. */
export type Calendar = Record<string, string>;
