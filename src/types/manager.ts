/*
 * ---
 * Workflow Summary
 * Invocation: Imported by manager.ts and re-exported from types/index.ts.
 *
 * | Step | Description                      | Input | Output                    |
 * |------|-----------------------------------|-------|----------------------------|
 * | 1    | Export ManagerOptions interface  | —     | Typed request options      |
 * | 2    | Export ManagerItem interface     | —     | Typed fund manager row     |
 * ---
 */

import { SortDirection, ManagerFundOrderType } from ".";

/** Options for a fund managers request. */
export interface ManagerOptions {
  /** Search term to filter managers by name. */
  search?: string;
  /** Column to sort by. */
  order?: ManagerFundOrderType;
  /** Sort direction (either '' or '-'). */
  orderDirection?: SortDirection;
}

/** A single fund manager portfolio returned by the managers endpoint. */
export interface ManagerItem {
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
