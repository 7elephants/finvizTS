/*
 * ---
 * Workflow Summary
 * Invocation: Imported by fund.ts and re-exported from types/index.ts.
 *
 * | Step | Description                          | Input | Output                          |
 * |------|----------------------------------------|-------|----------------------------------|
 * | 1    | Alias FundOptions to FundManagerOptions | —     | Typed request options            |
 * | 2    | Alias FundItem to FundManagerItem       | —     | Typed fund portfolio row         |
 * ---
 */

import type { ManagerFundItem, ManagerFundOptions } from './fund-manager';

/** Options for a funds request. Identical in shape to `ManagerOptions` — funds and fund
 * managers are the same underlying Finviz resource, queried by fund name vs. manager name. */
export type FundOptions = ManagerFundOptions;

/** A single fund portfolio returned by the funds endpoint. Identical in shape to `ManagerItem`. */
export type FundItem = ManagerFundItem;
