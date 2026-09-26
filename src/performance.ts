/*
 * ---
 * Workflow Summary
 * Invocation: Internal helper called by getFutures() (futures.ts), getForex() (forex.ts) and
 * getCrypto() (crypto.ts). The three endpoints share one request/response shape — this is not
 * part of the public API surface (not re-exported from index.ts).
 *
 * | Step | Method                  | Input                                      | Output                      |
 * |------|--------------------------|----------------------------------------------|------------------------------|
 * | 1    | buildSortParam()        | order?, orderDirection?                     | `sort` query param          |
 * | 2    | client.getRecords()     | path, sort + extraParams                    | CSV row records             |
 * | 3    | getPerformanceItems()   | rows, perfColumn header prefix              | Promise<PerformanceItem[]>  |
 * ---
 */

import type { FinvizClient } from './client';
import type { PerformanceItem, PerformanceOptions, ForexOptions } from './types';

import { buildSortParam } from './utils';

/** Endpoint paths served by getPerformanceItems(). */
type PerformancePath =
  | '/export/futures/performance'
  | '/export/forex/performance'
  | '/export/crypto/performance';

/**
 * Fetch futures, forex or crypto performance rows, optionally sorted by order/direction.
 * The API returns a multi-row CSV; each row is mapped to a PerformanceItem.
 *
 * @param client  - Authenticated FinvizClient instance
 * @param path    - `/export/futures/performance`, `/export/forex/performance` or
 *                  `/export/crypto/performance`
 * @param options - Sort options
 * @param extraParams - Endpoint-specific query params (e.g. forex `unit`, crypto `c`)
 * @param perfColumn  - CSV header prefix of the performance columns (forex pips uses
 *                      `Performance in Pips`)
 *
 * Blank cells intentionally parse to `NaN` (`parseFloat('')`), unlike fund-manager.ts, which
 * defaults them to `0` via `||`.
 */
export async function getPerformanceItems(
  client: FinvizClient,
  path: PerformancePath,
  options: PerformanceOptions | ForexOptions,
  extraParams: Record<string, string | undefined> = {},
  perfColumn = 'Performance',
): Promise<PerformanceItem[]> {
  const rows = await client.getRecords(path, {
    ...extraParams,
    sort: buildSortParam(options.order, options.orderDirection),
  });
  return rows.map((row) => ({
    ticker: row['Ticker'] ?? '',
    name: row['Name'] ?? '',
    price: parseFloat(row['Price'] ?? '0'),
    perf5Min: parseFloat(row[`${perfColumn} (5 Minutes)`] ?? '0'),
    perf1Hour: parseFloat(row[`${perfColumn} (1 Hour)`] ?? '0'),
    perfDay: parseFloat(row[`${perfColumn} (Day)`] ?? '0'),
    perfWeek: parseFloat(row[`${perfColumn} (Week)`] ?? '0'),
    perfMonth: parseFloat(row[`${perfColumn} (Month)`] ?? '0'),
    perfMonthToDate: parseFloat(row[`${perfColumn} (Month To Date)`] ?? '0'),
    perfQuarter: parseFloat(row[`${perfColumn} (Quarter)`] ?? '0'),
    perfHalfYear: parseFloat(row[`${perfColumn} (Half Year)`] ?? '0'),
    perfYearToDate: parseFloat(row[`${perfColumn} (Year To Date)`] ?? '0'),
    perfYear: parseFloat(row[`${perfColumn} (Year)`] ?? '0'),
  }));
}
