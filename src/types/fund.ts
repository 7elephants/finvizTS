/*
 * ---
 * Workflow Summary
 * Invocation: Imported by fund.ts and re-exported from types/index.ts.
 *
 * | Step | Description                    | Input | Output                  |
 * |------|----------------------------------|-------|--------------------------|
 * | 1    | Export FundOptions interface    | —     | Typed request options    |
 * | 2    | Export FundItem interface       | —     | Typed fund portfolio row |
 * ---
 */

import { SortDirection, ManagerFundOrderType } from ".";

/** Options for a funds request. */
export interface FundOptions {
  /** Search term to filter funds by name. */
  search?: string;
  /** Column to sort by. */
  order?: ManagerFundOrderType;
  /** Sort direction (either '' or '-'). */
  orderDirection?: SortDirection;
}

/** A single fund portfolio returned by the funds endpoint. */
export interface FundItem {
  name: string;
  manager: string;
  id: string;
  reportDate: Date;
  portfolioValue: number;
  numInvestments: number;
  newPurchases: number;
  soldOut: number;
  added: number;
  reduced: number;
  top10ConcentrationPct: number;
  turnOverPct: number;
  timeHeldTopTen: number;
  timeHeldAll: number;
}
