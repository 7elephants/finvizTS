/*
 * ---
 * Workflow Summary
 * Invocation: Internal helper called by getFutures() (futures.ts), getForex() (forex.ts) and
 * getCrypto() (crypto.ts). The three endpoints share one request/response shape — this is not
 * part of the public API surface (not re-exported from index.ts).
 *
 * | Step | Method                  | Input                                      | Output                      |
 * |------|--------------------------|----------------------------------------------|------------------------------|
 * | 1    | getPerformanceItems()   | FinvizClient, path, sort options, extraParams? | Promise<PerformanceItem[]>  |
 * ---
 */

import type { FinvizClient } from './client';
import type { PerformanceItem, SortDirection } from './types';

import { buildSortParam } from './utils';

/**
 * Fetch futures, forex or crypto performance rows, optionally sorted by order/direction.
 * The API returns a multi-row CSV; each row is mapped to a PerformanceItem.
 *
 * @param client  - Authenticated FinvizClient instance
 * @param path    - `/export/futures/performance`, `/export/forex/performance` or
 *                  `/export/crypto/performance`
 * @param options - Sort options
 * @param extraParams - Endpoint-specific query params (e.g. forex `unit`, crypto `c`)
 */
export async function getPerformanceItems(
  client: FinvizClient,
  path: string,
  options: { order?: string; orderDirection?: SortDirection },
  extraParams: Record<string, string | undefined> = {},
): Promise<PerformanceItem[]> {
  const rows = await client.getRecords(path, {
    ...extraParams,
    sort: buildSortParam(options.order, options.orderDirection),
  });
  return rows.map((row) => ({
    ticker: row['Ticker'] ?? '',
    name: row['Name'] ?? '',
    price: parseFloat(row['Price'] ?? '0'),
    perf5Min: parseFloat(row['Performance (5 Minutes)'] ?? '0'),
    perf1Hour: parseFloat(row['Performance (1 Hour)'] ?? '0'),
    perfDay: parseFloat(row['Performance (Day)'] ?? '0'),
    perfWeek: parseFloat(row['Performance (Week)'] ?? '0'),
    perfMonth: parseFloat(row['Performance (Month)'] ?? '0'),
    perfMonthToDate: parseFloat(row['Performance (Month To Date)'] ?? '0'),
    perfQuarter: parseFloat(row['Performance (Quarter)'] ?? '0'),
    perfHalfYear: parseFloat(row['Performance (Half Year)'] ?? '0'),
    perfYearToDate: parseFloat(row['Performance (Year To Date)'] ?? '0'),
    perfYear: parseFloat(row['Performance (Year)'] ?? '0'),
  }));
}
