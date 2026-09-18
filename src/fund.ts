/*
 * ---
 * Workflow Summary
 * Invocation: Called via `getFunds(client, options)`. Fetches a multi-row CSV of fund
 * portfolios, optionally filtered by a search term and sorted by order/direction.
 *
 * | Step | Method     | Input                        | Output                |
 * |------|------------|-------------------------------|-----------------------|
 * | 1    | getFunds() | FinvizClient, FundOptions    | Promise<FundItem[]>   |
 * ---
 */

import type { FinvizClient } from './client';
import type { FundItem, FundOptions } from './types';

/**
 * Fetch fund portfolios, optionally filtered by a search term and sorted by order/direction.
 * The API returns a multi-row CSV; each row is mapped to a FundItem.
 *
 * @param client  - Authenticated FinvizClient instance
 * @param options - Search term and sort options
 */
export async function getFunds(
  client: FinvizClient,
  options: FundOptions = {},
): Promise<FundItem[]> {
  const rows = await client.getRecords('/export/funds', {
    search: options.search,
    sort: (options.orderDirection || '') + (options.order || ''),
  });
  return rows.map((row) => ({
    name: row['Name'] ?? '',
    manager: row['Fund'] ?? '',
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
