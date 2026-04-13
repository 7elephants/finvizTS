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
  AnnualQuarterlyCurrent: 'annual-quarterly-current',
  InsiderEquity: 'insider-equity',
  BeneficialOwnership: 'beneficial-ownership',
  ExemptOfferings: 'exempt-offerings',
  RegistrationStatements: 'registration-statements',
  FilingReviewCorrespondence: 'filing-review-correspondence',
  SECOrdersNotices: 'sec-orders-notices',
  ProxyMaterials: 'proxy-materials',
  TrustIndentures: 'trust-indentures',
} as const;
export type FilingFilter = (typeof FilingFilter)[keyof typeof FilingFilter];

/** Options for a latest-filings request. */
export interface FilingOptions {
  /** Column to sort by (prefix with "-" for descending, e.g. "-filingDate"). */
  order?: string;
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
