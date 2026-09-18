/*
 * ---
 * Workflow Summary
 * Invocation: Called via `getInsiders(client, options)`. Fetches a multi-row CSV of insider
 * trading transactions filtered by ticker, transaction type, owner relationship, and minimum
 * transaction value.
 *
 * | Step | Method        | Input                          | Output                  |
 * |------|---------------|---------------------------------|-------------------------|
 * | 1    | getInsiders() | FinvizClient, InsiderOptions   | Promise<InsiderItem[]>  |
 * ---
 */

import type { FinvizClient } from './client';
import type { InsiderItem, InsiderOptions } from './types';

/**
 * Fetch insider trading transactions, optionally filtered by ticker, transaction type,
 * owner relationship, minimum transaction value, or owner CIK.
 * The API returns a multi-row CSV; each row is mapped to an InsiderItem.
 *
 * @param client  - Authenticated FinvizClient instance
 * @param options - Ticker, transaction type, owner relationship, and sort options
 */
export async function getInsiders(
  client: FinvizClient,
  options: InsiderOptions = {},
): Promise<InsiderItem[]> {
  const rows = await client.getRecords('/export/insiders', {
    t: options.ticker,
    tc: options.type,
    or: options.ownerRel,
    tv: options.minimumTransactionValue,
    oc: options.ownerCIK,
    o: (options.orderDirection || '') + (options.order || ''),
  });
  return rows.map((row) => ({
    ticker: row['Ticker'] ?? '',
    owner: row['Owner'] ?? '',
    ownerCIK: parseInt(row['Owner CIK'] ?? '0', 10),
    relationship: row['Relationship'] ?? '',
    date: new Date(row['Date'] ?? ''),
    transactionType: row['Transaction'] ?? '',
    cost: parseFloat(row['Cost'] ?? '0'),
    shares: parseInt(row['#Shares'] ?? '0', 10),
    value: parseFloat(row['Value ($)'] ?? '0'),
    totalShares: parseInt(row['#Shares Total'] ?? '0', 10),
    SECForm: new Date(row['SEC Form 4'] ?? ''),
    SECFormUrl: row['SEC Form 4 Link'] ?? '',
  }));
}
