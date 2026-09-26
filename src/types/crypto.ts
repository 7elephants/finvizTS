/*
 * ---
 * Workflow Summary
 * Invocation: Imported by crypto.ts and re-exported from types/index.ts.
 *
 * | Step | Description                                  | Input | Output                        |
 * |------|-----------------------------------------------|-------|--------------------------------|
 * | 1    | Export CryptoCurrency const + type            | —     | Typed quote currency values    |
 * | 2    | Export CryptoOptions interface                | —     | Typed request options          |
 * | 3    | Alias CryptoItem to PerformanceItem           | —     | Typed crypto performance row   |
 * ---
 */

import type { PerformanceItem, PerformanceOptions } from './performance';

/** Valid quote currencies (`c` query parameter) for the crypto endpoint. */
export const CryptoCurrency = {
  USD: 'USD',
  USDT: 'USDT',
  EUR: 'EUR',
  BTC: 'BTC',
} as const;
export type CryptoCurrency = (typeof CryptoCurrency)[keyof typeof CryptoCurrency];

/** Options for a crypto performance request. */
export interface CryptoOptions extends PerformanceOptions {
  /** Quote currency; US dollar by default. */
  currency?: CryptoCurrency;
}

/** A single crypto performance row returned by the crypto endpoint. */
export type CryptoItem = PerformanceItem;
