/*
 * ---
 * Workflow Summary
 * Invocation: Imported by crypto.ts and re-exported from types/index.ts.
 *
 * | Step | Description                                   | Input | Output                    |
 * |------|------------------------------------------------|-------|----------------------------|
 * | 1    | Alias CryptoOptions to PerformanceOptions        | —     | Typed request options      |
 * | 2    | Alias CryptoItem to PerformanceItem              | —     | Typed crypto performance row   |
 * ---
 */

import type { PerformanceItem, PerformanceOptions } from './performance';

/** Options for a crypto performance request. Identical in shape to the forex/crypto/futures options. */
export type CryptoOptions = PerformanceOptions;

/** A single crypto performance row returned by the crypto endpoint. */
export type CryptoItem = PerformanceItem;
