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
  MINUTE: 'i1',
  THREE_MINUTES: 'i3',
  FIVE_MINUTES: 'i5',
  FIFTEEN_MINUTES: 'i15',
  THIRTY_MINUTES: 'i30',
  HOURLY: 'h',
  DAILY: 'd',
  WEEKLY: 'w',
  MONTHLY: 'm',
} as const;
export type QuotePeriod = (typeof QuotePeriod)[keyof typeof QuotePeriod];

/** Valid range values for the quote endpoint. */
export const QuoteRange = {
  DAY: 'd1',
  FIVE_DAYS: 'd5',
  MONTH: 'm1',
  THREE_MONTHS: 'm3',
  SIX_MONTHS: 'm6',
  YEAR: 'y1',
  TWO_YEARS: 'y2',
  FIVE_YEARS: 'y5',
  YTD: 'ytd',
  MAX: 'max',
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
