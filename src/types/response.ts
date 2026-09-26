/*
 * ---
 * Workflow Summary
 * Invocation: Imported by parse.ts and every endpoint module, and re-exported from types/index.ts.
 *
 * | Step | Description                           | Input | Output                              |
 * |------|----------------------------------------|-------|--------------------------------------|
 * | 1    | Export ParseErrorExpected const + type | —     | Typed expected-value kinds          |
 * | 2    | Export ParseError interface            | —     | Typed per-cell parse failure        |
 * | 3    | Export ResponseFormat const + type     | —     | `parsed` / `raw` / `both`           |
 * | 4    | Export RawRecord, FormatOption         | —     | CSV row type, per-call `format`     |
 * | 5    | Export Parsed/Raw/ParsedAndRawResponse | —     | One interface per format            |
 * | 6    | Export FinvizResponse<T, F>            | —     | Format-conditional response wrapper |
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
  /** Zero-based index of the data row (and of the item in `items` and record in `raw`). */
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

/**
 * What a `get*` function returns: typed items (`parsed`, the default), the unmapped CSV records
 * (`raw`), or both. Set a default on the FinvizClient and override it per call via `format`.
 */
export const ResponseFormat = {
  PARSED: 'parsed',
  RAW: 'raw',
  BOTH: 'both',
} as const;
export type ResponseFormat = (typeof ResponseFormat)[keyof typeof ResponseFormat];

/** One CSV data row as returned by Finviz: column header → cell text. */
export type RawRecord = Record<string, string>;

/** Per-call override of the client's default ResponseFormat; accepted by every `get*` function. */
export interface FormatOption<F extends ResponseFormat> {
  /** Response format for this call. Defaults to the FinvizClient's `format`. */
  format?: F;
}

/** `parsed` response: typed items plus any cell parse errors. */
export interface ParsedResponse<T> {
  /** One item per CSV data row, in response order. */
  items: T[];
  /** Cells that were present but could not be parsed. Empty when every cell parsed cleanly. */
  errors: ParseError[];
}

/** `raw` response: the CSV records exactly as parsed from the response body. */
export interface RawResponse {
  /** One record per CSV data row, in response order. */
  raw: RawRecord[];
  /** Always empty — no cells are parsed in raw mode. */
  errors: ParseError[];
}

/** `both` response: typed items and the CSV records they were parsed from. */
export interface ParsedAndRawResponse<T> extends ParsedResponse<T>, RawResponse {}

/**
 * Wrapper returned by every `get*` function, shaped by the ResponseFormat `F` (default
 * `parsed`). When `F` is the whole union (e.g. a client typed as `FinvizClient<ResponseFormat>`)
 * this is a union of the three shapes; narrow it with `'items' in response` / `'raw' in response`.
 */
export type FinvizResponse<T, F extends ResponseFormat = 'parsed'> = F extends 'parsed'
  ? ParsedResponse<T>
  : F extends 'raw'
    ? RawResponse
    : ParsedAndRawResponse<T>;
