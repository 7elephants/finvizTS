/*
 * ---
 * Workflow Summary
 * Invocation: Called internally by FinvizClient to parse raw CSV strings from the Finviz API.
 * Two shapes are supported: a single data row (quote) and multiple data rows (screener, news).
 *
 * | Step | Method           | Input              | Output                              |
 * |------|------------------|--------------------|-------------------------------------|
 * | 1    | parseRecord()    | CSV string (2 rows)| Record<string, string>              |
 * | 2    | parseRecords()   | CSV string (N rows)| Record<string, string>[]            |
 * ---
 */

import { parse } from 'csv-parse/sync';

/**
 * Parse a two-row CSV (header + single value row) into a flat key/value record.
 * Used for single-ticker quote responses.
 *
 * @example
 * Input:  "Ticker,Price,Volume\nAAPL,180.00,1234567"
 * Output: { Ticker: "AAPL", Price: "180.00", Volume: "1234567" }
 */
export function parseRecord(csv: string): Record<string, string> {
  const [first] = parse<Record<string, string>>(csv, { columns: true, skip_empty_lines: true });
  if (!first) {
    throw new Error('CSV response contained no data rows');
  }
  return first;
}

/**
 * Parse a multi-row CSV (header + N data rows) into an array of key/value records.
 * Used for screener and news responses.
 *
 * @example
 * Input:  "Ticker,Price\nAAPL,180.00\nMSFT,420.00"
 * Output: [{ Ticker: "AAPL", Price: "180.00" }, { Ticker: "MSFT", Price: "420.00" }]
 */
export function parseRecords(csv: string): Record<string, string>[] {
  return parse<Record<string, string>>(csv, { columns: true, skip_empty_lines: true });
}
