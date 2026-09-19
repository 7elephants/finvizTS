/*
 * ---
 * Workflow Summary
 * Invocation: Imported by manager.ts and re-exported from types/index.ts.
 *
 * | Step | Description                                | Input | Output                    |
 * |------|----------------------------------------------|-------|----------------------------|
 * | 1    | Alias ManagerOptions to FundManagerOptions   | —     | Typed request options      |
 * | 2    | Alias ManagerItem to FundManagerItem         | —     | Typed fund manager row     |
 * ---
 */

import type { ManagerFundItem, ManagerFundOptions } from './fund-manager';

/** Options for a fund managers request. Identical in shape to `FundOptions` — fund managers
 * and funds are the same underlying Finviz resource, queried by manager name vs. fund name. */
export type ManagerOptions = ManagerFundOptions;

/** A single fund manager portfolio returned by the managers endpoint. Identical in shape to `FundItem`. */
export type ManagerItem = ManagerFundItem;
