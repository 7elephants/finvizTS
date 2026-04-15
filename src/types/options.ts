/*
 * ---
 * Workflow Summary
 * Invocation: Imported by options.ts and re-exported from types/index.ts.
 *
 * | Step | Description                            | Input | Output                      |
 * |------|----------------------------------------|-------|-----------------------------|
 * | 1    | Export OptionsViewType const + type    | —     | Typed view type enum        |
 * | 2    | Export OptionsChainOptions interface   | —     | Typed request options       |
 * | 3    | Export Option response type            | —     | Typed option row            |
 * ---
 */

/** Valid view types for the options endpoint. */
export const OptionsViewType = {
  PRICES: 'oc',
  VOLATILITY_GREEKS: 'ocv',
} as const;
export type OptionsViewType = (typeof OptionsViewType)[keyof typeof OptionsViewType];

/** Options for an options chain request. */
export interface OptionsChainOptions {
  /** Option expiration date in yyyy-mm-dd format. */
  expiration: string;
  /** View type (Prices or Volatility & Greeks). */
  viewType?: OptionsViewType;
}

/** A single row returned by the options endpoint. */
export type Option = Record<string, string>;
