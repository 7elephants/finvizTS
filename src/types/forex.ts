/*
 * ---
 * Workflow Summary
 * Invocation: Imported by forex.ts and re-exported from types/index.ts.
 *
 * | Step | Description                                   | Input | Output                    |
 * |------|------------------------------------------------|-------|----------------------------|
 * | 1    | Alias ForexOptions to PerformanceOptions        | —     | Typed request options      |
 * | 2    | Alias ForexItem to PerformanceItem              | —     | Typed forex performance row   |
 * ---
 */

import type { PerformanceItem, PerformanceOptions } from './performance';

/** Options for a forex performance request. Identical in shape to the forex/crypto/futures options. */
export type ForexOptions = PerformanceOptions;

/** A single forex performance row returned by the forex endpoint. */
export type ForexItem = PerformanceItem;
