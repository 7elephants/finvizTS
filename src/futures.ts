/*
 * ---
 * Workflow Summary
 * Invocation: Called via `getFutures(client, options)`. Fetches a multi-row CSV of futures performance
 * (price and 5-minute to 1-year performance), optionally sorted by order/direction.
 *
 * | Step | Method     | Input                        | Output                 |
 * |------|------------|-------------------------------|------------------------|
 * | 1    | getFutures() | FinvizClient, FuturesOptions    | Promise<FinvizResponse<FuturesItem, F>>    |
 * ---
 */

import type { FinvizClient } from './client';
import type { FinvizResponse, FuturesItem, FuturesOptions, FormatOption, ResponseFormat } from './types';

import { getPerformanceItems } from './performance';

/**
 * Fetch futures performance, optionally sorted by order/direction.
 * The API returns a multi-row CSV; each row is mapped to a FuturesItem.
 *
 * @param client  - Authenticated FinvizClient instance
 * @param options - Sort options, plus optional `format`
 *                  (`parsed` | `raw` | `both`) overriding the client default
 */
export async function getFutures<C extends ResponseFormat = 'parsed', F extends ResponseFormat = C>(
  client: FinvizClient<C>,
  options: FuturesOptions & FormatOption<F> = {},
): Promise<FinvizResponse<FuturesItem, F>> {
  return getPerformanceItems(client, '/export/futures/performance', options);
}
