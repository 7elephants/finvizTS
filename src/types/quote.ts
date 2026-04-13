/*
 * ---
 * Workflow Summary
 * Invocation: Imported by quote.ts and re-exported from types/index.ts.
 *
 * | Step | Description                        | Input | Output                    |
 * |------|------------------------------------|-------|---------------------------|
 * | 1    | Export QuotePeriod const + type    | —     | Typed period constants    |
 * | 2    | Export QuoteRange const + type     | —     | Typed range constants     |
 * | 3    | Export QuoteOptions interface      | —     | Typed request options     |
 * | 4    | Export Quote interface             | —     | Typed OHLCV row           |
 * ---
 */

/** Valid period/interval values for the quote endpoint. */
export const QuotePeriod = {
  Minute1: 'i1',
  Minute3: 'i3',
  Minute5: 'i5',
  Minute15: 'i15',
  Minute30: 'i30',
  Hour1: 'h',
  Daily: 'd',
  Weekly: 'w',
  Monthly: 'm',
} as const;
export type QuotePeriod = (typeof QuotePeriod)[keyof typeof QuotePeriod];

/** Valid range values for the quote endpoint. */
export const QuoteRange = {
  Day1: 'd1',
  Day5: 'd5',
  Month1: 'm1',
  Month3: 'm3',
  Month6: 'm6',
  Year1: 'y1',
  Year2: 'y2',
  Year5: 'y5',
  YTD: 'ytd',
  Max: 'max',
} as const;
export type QuoteRange = (typeof QuoteRange)[keyof typeof QuoteRange] | `range_${string}` | `prev_${string}`;

/** Options for a quote request. */
export interface QuoteOptions {
  /** Period/interval of quote data (required). */
  period: QuotePeriod;
  /** Range of time to return data for (optional). */
  range?: string;
}

/** A single OHLCV row returned by the quote endpoint. */
export interface Quote {
  Date: string;
  Open: string;
  High: string;
  Low: string;
  Close: string;
  Volume: string;
}
