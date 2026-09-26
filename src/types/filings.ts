/*
 * ---
 * Workflow Summary
 * Invocation: Imported by filings.ts and re-exported from types/index.ts.
 *
 * | Step | Description                         | Input | Output                      |
 * |------|-------------------------------------|-------|-----------------------------|
 * | 1    | Export FilingFilter const + type    | —     | Typed filing filter enum    |
 * | 2    | Export FilingOptions interface      | —     | Typed request options       |
 * | 3    | Export Filing interface             | —     | Typed filing row            |
 * ---
 */

import type { SortDirection } from '.';

/** Valid filing filter values for the latest-filings endpoint. */
export const FilingFilter = {
  ANNUAL_QUARTERLY_CURRENT: 'annual-quarterly-current',
  INSIDER_EQUITY: 'insider-equity',
  BENEFICIAL_OWNERSHIP: 'beneficial-ownership',
  EXEMPT_OFFERINGS: 'exempt-offerings',
  REGISTRATION_STATEMENTS: 'registration-statements',
  FILING_REVIEW_CORRESPONDENCE: 'filing-review-correspondence',
  SEC_ORDERS_NOTICES: 'sec-orders-notices',
  PROXY_MATERIALS: 'proxy-materials',
  TRUST_INDENTURES: 'trust-indentures',
} as const;

/** Union of all known filing filter values. */
export type FilingFilter = (typeof FilingFilter)[keyof typeof FilingFilter];

/** Valid sort column values for the latest-filings `o` query parameter. */
export const FilingOrder = {
  DATE: 'filingDate',
  REPORT_DATE: 'reportDate',
  FORM: 'form',
} as const;

/** Union of all known filing order values. */
export type FilingOrder = (typeof FilingOrder)[keyof typeof FilingOrder];

/** Options for a latest-filings request. */
export interface FilingOptions {
  /** Column to sort by. */
  order?: FilingOrder;
  /** Sort direction (either "" or "-"). */
  orderDirection?: SortDirection;
  /** Filter by filing type. */
  filter?: FilingFilter;
}

/** A single row returned by the latest-filings endpoint. Fields are `undefined` when the API returns no value. */
export interface Filing {
  filingDate: string | undefined;
  reportDate: string | undefined;
  form: string | undefined;
  description: string | undefined;
  filing: string | undefined;
  document: string | undefined;
}
