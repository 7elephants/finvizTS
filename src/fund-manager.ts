/*
 * ---
 * Workflow Summary
 * Invocation: Internal helper called by getFunds() (fund.ts) and getManagers() (manager.ts).
 * Both wrap the same underlying Finviz fund-portfolio resource, filtered by fund name vs.
 * manager name — this is not part of the public API surface (not re-exported from index.ts).
 *
 * | Step | Method                  | Input                                               | Output                       |
 * |------|--------------------------|-------------------------------------------------------|-------------------------------|
 * | 1    | getFundManagerItems()   | FinvizClient, path, nameColumn, ManagerFundOptions   | Promise<FinvizResponse<ManagerFundItem>>   |
 * ---
 */

import type { FinvizClient } from './client';
import type { FinvizResponse, ManagerFundItem, ManagerFundOptions } from './types';

import { date, integer, number, parseRows, text, type RowSchema } from './parse';
import { buildSortParam } from './utils';

/** Build the ManagerFundItem property → CSV column mapping; `manager` reads `nameColumn`. */
function fundManagerSchema(nameColumn: 'Fund' | 'Manager'): RowSchema<ManagerFundItem> {
  return {
    name: text('Name'),
    manager: text(nameColumn),
    id: text('Investor ID'),
    reportDate: date('Report Date'),
    portfolioValue: number('Portfolio Value'),
    numInvestments: integer('# Investments'),
    newPurchases: integer('New Purchased'),
    soldOut: integer('Sold Out'),
    added: integer('Added'),
    reduced: integer('Reduced'),
    top10ConcentrationPct: number('Top 10 Concentration (%)'),
    turnOverPct: number('Turnover (%)'),
    timeHeldTopTen: number('Time Held Top 10'),
    timeHeldAll: number('Time Held All'),
  };
}

/**
 * Fetch fund or fund-manager portfolios, optionally filtered by a search term and sorted by
 * order/direction. The API returns a multi-row CSV; each row is mapped to a ManagerFundItem.
 *
 * @param client     - Authenticated FinvizClient instance
 * @param path       - `/export/funds` or `/export/managers`
 * @param nameColumn - CSV column holding the fund/manager name
 * @param options    - Search term and sort options
 */
export async function getFundManagerItems(
  client: FinvizClient,
  path: string,
  nameColumn: 'Fund' | 'Manager',
  options: ManagerFundOptions,
): Promise<FinvizResponse<ManagerFundItem>> {
  const rows = await client.getRecords(path, {
    search: options.search,
    sort: buildSortParam(options.order, options.orderDirection),
  });
  return parseRows(rows, fundManagerSchema(nameColumn));
}
