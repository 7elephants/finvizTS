/*
 * ---
 * Workflow Summary
 * Invocation: Imported by calendar.ts, filings.ts, fund-manager.ts, insider.ts, performance.ts,
 * portfolio.ts, and screener.ts to build request params, and re-exported from index.ts.
 *
 * | Step | Method                  | Input                | Output                    |
 * |------|-------------------------|-----------------------|----------------------------|
 * | 1    | formatDateToYYYYMMDD() | Date                  | `YYYY-MM-DD` string       |
 * | 2    | buildSortParam()       | order?, orderDirection? | Combined sort param string |
 * ---
 */

/**
 * Formats a Date object as a `YYYY-MM-DD` string.
 *
 * @param date - The date to format.
 * @returns The date formatted as `YYYY-MM-DD`.
 */
export function formatDateToYYYYMMDD(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed (0 = January)
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

/**
 * Combines a sort column and direction into the single string most Finviz endpoints expect
 * (direction prefix, e.g. `-` for descending, followed by the column name).
 *
 * @param order          - Column to sort by.
 * @param orderDirection - Sort direction (either `''` or `'-'`).
 */
export function buildSortParam(order?: string, orderDirection?: string): string {
  return (orderDirection || '') + (order || '');
}