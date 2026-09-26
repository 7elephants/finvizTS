/*
 * ---
 * Workflow Summary
 * Invocation: Imported by parse.ts and every endpoint module, and re-exported from types/index.ts.
 *
 * | Step | Description                           | Input | Output                              |
 * |------|----------------------------------------|-------|--------------------------------------|
 * | 1    | Export ParseErrorExpected const + type | —     | Typed expected-value kinds          |
 * | 2    | Export ParseError interface            | —     | Typed per-cell parse failure        |
 * | 3    | Export FinvizResponse interface        | —     | Typed `{ items, errors }` wrapper   |
 * ---
 */

/** Kinds of value a CSV cell was expected to parse to. */
export const ParseErrorExpected = {
  NUMBER: 'number',
  INTEGER: 'integer',
  DATE: 'date',
} as const;
export type ParseErrorExpected = (typeof ParseErrorExpected)[keyof typeof ParseErrorExpected];

/**
 * A non-blank CSV cell that could not be parsed to its expected type. The corresponding item
 * field is `undefined`. Blank or missing cells are not errors — they are simply `undefined`.
 */
export interface ParseError {
  /** Zero-based index of the data row (and of the item in `items`). */
  row: number;
  /** CSV header of the cell, e.g. `Price`. */
  column: string;
  /** Item property the cell maps to, e.g. `price`. */
  field: string;
  /** Raw cell value that failed to parse. */
  value: string;
  /** Type the cell was expected to parse to. */
  expected: ParseErrorExpected;
}

/** Wrapper returned by every `get*` function: the parsed items plus any cell parse errors. */
export interface FinvizResponse<T> {
  /** One item per CSV data row, in response order. */
  items: T[];
  /** Cells that were present but could not be parsed. Empty when every cell parsed cleanly. */
  errors: ParseError[];
}
