/*
 * ---
 * Workflow Summary
 * Invocation: Called via `getFunds(client, options)`. Fetches a multi-row CSV of fund
 * portfolios, optionally filtered by a search term and sorted by order/direction.
 *
 * | Step | Method     | Input                        | Output                |
 * |------|------------|-------------------------------|-----------------------|
 * | 1    | getFunds() | FinvizClient, FundOptions    | Promise<FinvizResponse<FundItem, F>>   |
 * ---
 */

import type { FinvizClient } from './client';
import type { FinvizResponse, FundItem, FundOptions, FormatOption, ResponseFormat } from './types';

import { getFundManagerItems } from './fund-manager';

/**
 * Fetch fund portfolios, optionally filtered by a search term and sorted by order/direction.
 * The API returns a multi-row CSV; each row is mapped to a FundItem.
 *
 * @param client  - Authenticated FinvizClient instance
 * @param options - Search term and sort options, plus optional `format`
 *                  (`parsed` | `raw` | `both`) overriding the client default
 */
export async function getFunds<C extends ResponseFormat = 'parsed', F extends ResponseFormat = C>(
  client: FinvizClient<C>,
  options: FundOptions & FormatOption<F> = {},
): Promise<FinvizResponse<FundItem, F>> {
  return getFundManagerItems(client, '/export/funds', 'Series Name', options);
}
