/*
 * ---
 * Workflow Summary
 * Invocation: Called via `getOptionsChain(client, ticker, options)`. Fetches a multi-row CSV
 * of option contracts for a single ticker/expiration and returns each row as a key/value record.
 *
 * | Step | Method              | Input                                          | Output               |
 * |------|---------------------|------------------------------------------------|----------------------|
 * | 1    | getOptionsChain()   | FinvizClient, ticker: string, OptionsChainOptions | Promise<Option[]> |
 * ---
 */

import type { FinvizClient } from './client';
import type { Option, OptionsChainOptions } from './types';
import { OptionsViewType } from './types';

/**
 * Fetch the options chain for a single ticker symbol at a given expiration date.
 * The API returns a multi-row CSV; each row represents one option contract.
 *
 * @param client  - Authenticated FinvizClient instance
 * @param ticker  - Stock ticker symbol (e.g. "MSFT")
 * @param options - Expiration date (required) and optional view type
 */
export async function getOptionsChain(
  client: FinvizClient,
  ticker: string,
  options: OptionsChainOptions,
): Promise<Option[]> {
  return client.getRecords('/export/options', {
    t: ticker,
    e: options.expiration,
    ty: options.viewType ?? OptionsViewType.Prices,
  });
}
