/*
 * ---
 * Workflow Summary
 * Invocation: Called via `getOptionsChain(client, ticker, options)`. Fetches a multi-row CSV
 * of option contracts for a single ticker/expiration and returns each row as a key/value record.
 *
 * | Step | Method              | Input                                          | Output               |
 * |------|---------------------|------------------------------------------------|----------------------|
 * | 1    | getOptionsChain()   | FinvizClient, ticker: string, OptionsChainOptions | Promise<FinvizResponse<Option, F>> |
 * ---
 */

import type { FinvizClient } from './client';
import type { FinvizResponse, Option, OptionsChainOptions, FormatOption, ResponseFormat } from './types';
import { formatOf, rawResponse } from './parse';
import { OptionsViewType } from './types';

/**
 * Fetch the options chain for a single ticker symbol at a given expiration date.
 * The API returns a multi-row CSV; each row represents one option contract.
 *
 * @param client  - Authenticated FinvizClient instance
 * @param ticker  - Stock ticker symbol (e.g. "MSFT")
 * @param options - Expiration date (required) and optional view type, plus optional `format`
 *                  (`parsed` | `raw` | `both`) overriding the client default
 */
export async function getOptionsChain<C extends ResponseFormat = 'parsed', F extends ResponseFormat = C>(
  client: FinvizClient<C>,
  ticker: string,
  options: OptionsChainOptions & FormatOption<F>,
): Promise<FinvizResponse<Option, F>> {
  const rows = await client.getRecords('/export/options', {
    t: ticker,
    e: options.expiration,
    ty: options.viewType ?? OptionsViewType.PRICES,
  });
  return rawResponse(rows, formatOf(client, options));
}
