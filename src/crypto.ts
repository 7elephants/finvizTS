/*
 * ---
 * Workflow Summary
 * Invocation: Called via `getCrypto(client, options)`. Fetches a multi-row CSV of crypto performance
 * (price and 5-minute to 1-year performance), optionally sorted by order/direction.
 *
 * | Step | Method     | Input                        | Output                 |
 * |------|------------|-------------------------------|------------------------|
 * | 1    | getCrypto() | FinvizClient, CryptoOptions    | Promise<FinvizResponse<CryptoItem, F>>    |
 * ---
 */

import type { FinvizClient } from './client';
import type { FinvizResponse, CryptoItem, CryptoOptions, FormatOption, ResponseFormat } from './types';

import { getPerformanceItems } from './performance';

/**
 * Fetch crypto performance, optionally sorted by order/direction.
 * The API returns a multi-row CSV; each row is mapped to a CryptoItem.
 *
 * @param client  - Authenticated FinvizClient instance
 * @param options - Quote currency and sort options, plus optional `format`
 *                  (`parsed` | `raw` | `both`) overriding the client default
 */
export async function getCrypto<C extends ResponseFormat = 'parsed', F extends ResponseFormat = C>(
  client: FinvizClient<C>,
  options: CryptoOptions & FormatOption<F> = {},
): Promise<FinvizResponse<CryptoItem, F>> {
  return getPerformanceItems(client, '/export/crypto/performance', options, {
    c: options.currency,
  });
}
