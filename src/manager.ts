/*
 * ---
 * Workflow Summary
 * Invocation: Called via `getManagers(client, options)`. Fetches a multi-row CSV of fund
 * manager portfolios, optionally filtered by a search term and sorted by order/direction.
 *
 * | Step | Method        | Input                          | Output                  |
 * |------|---------------|---------------------------------|-------------------------|
 * | 1    | getManagers() | FinvizClient, ManagerOptions   | Promise<ManagerItem[]>  |
 * ---
 */

import type { FinvizClient } from './client';
import type { ManagerItem, ManagerOptions } from './types';

/**
 * Fetch fund manager portfolios, optionally filtered by a search term and sorted by
 * order/direction. The API returns a multi-row CSV; each row is mapped to a ManagerItem.
 *
 * @param client  - Authenticated FinvizClient instance
 * @param options - Search term and sort options
 */
export async function getManagers(
  client: FinvizClient,
  options: ManagerOptions = {},
): Promise<ManagerItem[]> {
  const rows = await client.getRecords('/export/managers', {
    search: options.search,
    sort: (options.orderDirection || '') + (options.order || ''),
  });
  return rows.map((row) => ({
    name: row['Name'] ?? '',
    manager: row['Manager'] ?? '',
    id: row['Investor ID'] ?? '',
    reportDate: new Date(row['Report Date'] || '') ?? '',
    portfolioValue: parseFloat(row['Portfolio Value'] ?? '0'),
    numInvestments: parseInt(row['# Investments'] ?? '0',10),
    newPurchases: parseInt(row['New Purchased'] ?? '0',10),
    soldOut: parseInt(row['Sold Out'] ?? '0',10),
    added: parseInt(row['Added'] ?? '0',10),
    reduced: parseInt(row['Reduced'] ?? '0',10),
    top10ConcentrationPct: parseFloat(row['Top 10 Concentration (%)'] ?? '0') ?? 0,
    turnOverPct: parseFloat(row['Turnover (%)'] ?? '0') ?? 0,
    timeHeldTopTen: parseFloat(row['Time Held Top 10'] ?? '0') ?? 0,
    timeHeldAll: parseFloat(row['Time Held All'] ?? '0') ?? 0
  }));
}
