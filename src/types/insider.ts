/*
 * ---
 * Workflow Summary
 * Invocation: Imported by insider.ts and re-exported from types/index.ts.
 *
 * | Step | Description                          | Input | Output                      |
 * |------|---------------------------------------|-------|------------------------------|
 * | 1    | Export InsiderTransactionType         | —     | Typed transaction type enum |
 * | 2    | Export InsiderOwnerRelationshipType   | —     | Typed owner relation enum   |
 * | 3    | Export InsiderOrderType               | —     | Typed sort order enum       |
 * | 4    | Export InsiderOptions interface       | —     | Typed request options       |
 * | 5    | Export InsiderItem interface          | —     | Typed insider trade row     |
 * ---
 */

import { SortDirection } from ".";

/** Valid transaction type values for the insider endpoint. */
export const InsiderTransactionType = {
  BUY: 1,
  SALE: 2,
  OPTION_EXERCISE: 4,
  ALL: 7,
} as const;
export type InsiderTransactionType = (typeof InsiderTransactionType)[keyof typeof InsiderTransactionType];

export const InsiderOwnerRelationshipType = {
  INCLUDE_TEN_PERCENT: 10,
  EXCLUDE_TEN_PERCENT: -10,
} as const;
export type InsiderOwnerRelationshipType = (typeof InsiderOwnerRelationshipType)[keyof typeof InsiderOwnerRelationshipType];

export const InsiderOrderType = {
  ACCEPTED: 'accepted',
  TICKER: 'ticker',
  TRANSACTION_VALUE: 'transactionValue',
  TRANSACTION_DATE: 'transactionDate',
  TRANSACTION_PRICE_PER_SHARE: 'transactionPricePerShare',
  TRANSACTION_SHARES: 'transactionShares',
  TOTAL_SHARES: 'sharedOwnedFollowingTransaction',
} as const;
export type InsiderOrderType = (typeof InsiderOrderType)[keyof typeof InsiderOrderType];


/** Options for an insider trading request. */
export interface InsiderOptions {
  type?: InsiderTransactionType;
  ownerRel?: InsiderOwnerRelationshipType; 
  minimumTransactionValue?: number;
  ownerCIK?: number;
  ticker?: string;
  order?: InsiderOrderType;
  orderDirection?: SortDirection;
}

/** A single insider trading transaction returned by the insider endpoint. */
export interface InsiderItem {
  ticker: string;
  owner: string;
  ownerCIK: number;
  relationship: string;
  date: Date;
  transactionType: string;
  cost: number;
  shares: number;
  value: number;
  totalShares: number;
  SECForm: Date;
  SECFormUrl: string;
}
