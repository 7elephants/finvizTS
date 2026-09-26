/*
 * ---
 * Workflow Summary
 * Invocation: Imported by futures.ts and re-exported from types/index.ts.
 *
 * | Step | Description                                   | Input | Output                    |
 * |------|------------------------------------------------|-------|----------------------------|
 * | 1    | Alias FuturesOptions to PerformanceOptions        | —     | Typed request options      |
 * | 2    | Alias FuturesItem to PerformanceItem              | —     | Typed futures performance row   |
 * ---
 */

import type { PerformanceItem, PerformanceOptions } from './performance';

/** Options for a futures performance request. Identical in shape to the forex/crypto/futures options. */
export type FuturesOptions = PerformanceOptions;

/** A single futures performance row returned by the futures endpoint. */
export type FuturesItem = PerformanceItem;
