/*
 * ---
 * Workflow Summary
 * Invocation: Imported by types/fund.ts and types/manager.ts (which alias these as
 * FundOptions/FundItem and ManagerOptions/ManagerItem) and re-exported from types/index.ts.
 * Also imported by src/fund-manager.ts, the internal implementation shared by getFunds()/getManagers().
 *
 * | Step | Description                               | Input | Output                        |
 * |------|--------------------------------------------|-------|--------------------------------|
 * | 1    | Export ManagerFundOrderType const + type   | —     | Typed sort column enum         |
 * | 2    | Export ManagerFundOptions interface        | —     | Typed request options          |
 * | 3    | Export ManagerFundItem interface           | —     | Typed fund/manager portfolio row |
 * ---
 */

import type { SortDirection } from '.';

/** Valid sort columns for the funds and fund-managers endpoints. */
export const ManagerFundOrderType = {
  MOST_POPULAR: 'most_popular',
  PORTFOLIO_VALUE: 'portfolio_value',
  INVESTMENTS: 'num_investments',
  PURCHASED: 'new_purchased',
  SOLD: 'sold_out',
  ADDED: 'added',
  REDUCED: 'reduced',
  TOP_TEN_CONCENTRATION: 'top_ten_concentration',
  TURNOVER: 'turnover',
  TIME_HELD_TOP_TEN: 'time_held_top10',
  TIME_HELD_ALL: 'time_held_all',
} as const;
export type ManagerFundOrderType = (typeof ManagerFundOrderType)[keyof typeof ManagerFundOrderType];

/**
 * Options shared by the funds and fund-managers endpoints (the same underlying Finviz
 * resource, queried by fund name vs. manager name). `FundOptions`/`ManagerOptions` alias this.
 */
export interface ManagerFundOptions {
  /** Search term to filter by fund or manager name. */
  search?: string;
  /** Column to sort by. */
  order?: ManagerFundOrderType;
  /** Sort direction (either '' or '-'). */
  orderDirection?: SortDirection;
}

/**
 * A single fund or fund-manager portfolio row (the same underlying Finviz resource, queried by
 * fund name vs. manager name). `FundItem`/`ManagerItem` alias this. Fields are `undefined` when
 * the API returns no value.
 */
export interface ManagerFundItem {
  name: string | undefined;
  manager: string | undefined;
  id: string | undefined;
  reportDate: Date | undefined;
  portfolioValue: number | undefined;
  numInvestments: number | undefined;
  newPurchases: number | undefined;
  soldOut: number | undefined;
  added: number | undefined;
  reduced: number | undefined;
  top10ConcentrationPct: number | undefined;
  turnOverPct: number | undefined;
  timeHeldTopTen: number | undefined;
  timeHeldAll: number | undefined;
}
