/*
 * ---
 * Workflow Summary
 * Invocation: Called via `getCrypto(client, options)`. Fetches a multi-row CSV of crypto performance
 * (price and 5-minute to 1-year performance), optionally sorted by order/direction.
 *
 * | Step | Method     | Input                        | Output                 |
 * |------|------------|-------------------------------|------------------------|
 * | 1    | getCrypto() | FinvizClient, CryptoOptions    | Promise<CryptoItem[]>    |
 * ---
 */

import type { FinvizClient } from './client';
import type { CryptoItem, CryptoOptions } from './types';

import { getPerformanceItems } from './performance';

/**
 * Fetch crypto performance, optionally sorted by order/direction.
 * The API returns a multi-row CSV; each row is mapped to a CryptoItem.
 *
 * @param client  - Authenticated FinvizClient instance
 * @param options - Sort options
 */
export async function getCrypto(
  client: FinvizClient,
  options: CryptoOptions = {},
): Promise<CryptoItem[]> {
  return getPerformanceItems(client, '/export/crypto/performance', options);
}
