/*
 * ---
 * Workflow Summary
 * Invocation: Internal helper called by getFunds() (fund.ts) and getManagers() (manager.ts).
 * Both wrap the same underlying Finviz fund-portfolio resource, filtered by fund name vs.
 * manager name — this is not part of the public API surface (not re-exported from index.ts).
 *
 * | Step | Method                  | Input                                               | Output                       |
 * |------|--------------------------|-------------------------------------------------------|-------------------------------|
 * | 1    | getFundManagerItems()   | FinvizClient, path, nameColumn, ManagerFundOptions   | Promise<ManagerFundItem[]>   |
 * ---
 */

import type { FinvizClient } from './client';
import type { ManagerFundItem, ManagerFundOptions } from './types';

import { buildSortParam } from './utils';

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
): Promise<ManagerFundItem[]> {
  const rows = await client.getRecords(path, {
    search: options.search,
    sort: buildSortParam(options.order, options.orderDirection),
  });
  return rows.map((row) => ({
    name: row['Name'] ?? '',
    manager: row[nameColumn] ?? '',
    id: row['Investor ID'] ?? '',
    reportDate: new Date(row['Report Date'] || ''),
    portfolioValue: parseFloat(row['Portfolio Value'] || '0'),
    numInvestments: parseInt(row['# Investments'] || '0', 10),
    newPurchases: parseInt(row['New Purchased'] || '0', 10),
    soldOut: parseInt(row['Sold Out'] || '0', 10),
    added: parseInt(row['Added'] || '0', 10),
    reduced: parseInt(row['Reduced'] || '0', 10),
    top10ConcentrationPct: parseFloat(row['Top 10 Concentration (%)'] || '0'),
    turnOverPct: parseFloat(row['Turnover (%)'] || '0'),
    timeHeldTopTen: parseFloat(row['Time Held Top 10'] || '0'),
    timeHeldAll: parseFloat(row['Time Held All'] || '0'),
  }));
}
