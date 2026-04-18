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
export type FilingFilter = (typeof FilingFilter)[keyof typeof FilingFilter];


/** Valid filing order values */
export const FilingOrder = {
  DATE: 'filingDate',
  REPORT_DATE: 'reportDate',
  FORM: 'form',
} as const;
export type FilingOrder = (typeof FilingOrder)[keyof typeof FilingOrder];

/** Options for a latest-filings request. */
export interface FilingOptions {
  /** Column to sort by (prefix with "-" for descending, e.g. "-filingDate"). */
  order?: string;
  /** Sort direction (either "" or "-"). */
  orderDirection?: string; 
  /** Filter by filing type. */
  filter?: FilingFilter;
}

/** A single row returned by the latest-filings endpoint. */
export interface Filing {
  filingDate: string;
  reportDate: string;
  form: string;
  description: string;
  filing: string;
  document: string;
}
