/*
 * ---
 * Workflow Summary
 * Invocation: Called via `getFutures(client, options)`. Fetches a multi-row CSV of futures performance
 * (price and 5-minute to 1-year performance), optionally sorted by order/direction.
 *
 * | Step | Method     | Input                        | Output                 |
 * |------|------------|-------------------------------|------------------------|
 * | 1    | getFutures() | FinvizClient, FuturesOptions    | Promise<FuturesItem[]>    |
 * ---
 */

import type { FinvizClient } from './client';
import type { FuturesItem, FuturesOptions } from './types';

import { getPerformanceItems } from './performance';

/**
 * Fetch futures performance, optionally sorted by order/direction.
 * The API returns a multi-row CSV; each row is mapped to a FuturesItem.
 *
 * @param client  - Authenticated FinvizClient instance
 * @param options - Sort options
 */
export async function getFutures(
  client: FinvizClient,
  options: FuturesOptions = {},
): Promise<FuturesItem[]> {
  return getPerformanceItems(client, '/export/futures/performance', options);
}
