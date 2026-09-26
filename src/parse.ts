/*
 * ---
 * Workflow Summary
 * Invocation: Internal helper used by endpoint modules that map CSV records to typed items
 * (calendar.ts, performance.ts, fund-manager.ts, insider.ts, news.ts, filings.ts, quote.ts).
 * Each module declares a RowSchema — item property → CSV column + parser — and passes it to
 * parseRows(). Not part of the public API surface (not re-exported from index.ts).
 *
 * | Step | Method                       | Input                          | Output                          |
 * |------|-------------------------------|--------------------------------|----------------------------------|
 * | 1    | text()/number()/integer()/date() | CSV column header           | ColumnParser for one property   |
 * | 2    | parseRows()                  | Record<string,string>[], RowSchema<T> | FinvizResponse<T>        |
 * | 3    | rawResponse()                | Record<string,string>[]        | FinvizResponse (no parsing, no errors) |
 * ---
 */

import type { FinvizResponse, ParseError } from './types';
import { ParseErrorExpected } from './types';

/** Describes how to read one item property from a CSV record. */
export interface ColumnParser<V> {
  /** CSV header of the source column. */
  column: string;
  /** Kind reported in a ParseError; absent for text, which can never fail. */
  expected?: ParseErrorExpected;
  /** Parse a non-blank cell; return `undefined` when the value is invalid. */
  parse: (raw: string) => V | undefined;
}

/** Maps every property of item type `T` to the column parser that produces it. */
export type RowSchema<T> = { [K in keyof T]-?: ColumnParser<NonNullable<T[K]>> };

/** Read a column as a string. */
export function text(column: string): ColumnParser<string> {
  return { column, parse: (raw) => raw };
}

/** Read a column as a finite number (strict — `'12abc'` is an error, unlike `parseFloat`). */
export function number(column: string): ColumnParser<number> {
  return {
    column,
    expected: ParseErrorExpected.NUMBER,
    parse: (raw): number | undefined => {
      const value = Number(raw);
      return Number.isFinite(value) ? value : undefined;
    },
  };
}

/** Read a column as an integer. */
export function integer(column: string): ColumnParser<number> {
  return {
    column,
    expected: ParseErrorExpected.INTEGER,
    parse: (raw): number | undefined => {
      const value = Number(raw);
      return Number.isInteger(value) ? value : undefined;
    },
  };
}

/** Read a column as a Date. */
export function date(column: string): ColumnParser<Date> {
  return {
    column,
    expected: ParseErrorExpected.DATE,
    parse: (raw): Date | undefined => {
      const value = new Date(raw);
      return Number.isNaN(value.getTime()) ? undefined : value;
    },
  };
}

/**
 * Map CSV records to typed items. Blank or missing cells become `undefined`; non-blank cells
 * that fail to parse also become `undefined` and are reported in `errors`.
 *
 * @param rows   - Records from `client.getRecords()`
 * @param schema - Item property → column parser
 */
export function parseRows<T>(
  rows: Record<string, string>[],
  schema: RowSchema<T>,
): FinvizResponse<T> {
  const errors: ParseError[] = [];
  const entries = Object.entries<ColumnParser<unknown>>(schema);

  const items = rows.map((row, index) => {
    const item: Record<string, unknown> = {};
    for (const [field, parser] of entries) {
      const raw = row[parser.column]?.trim();
      if (!raw) {
        item[field] = undefined;
        continue;
      }
      const value = parser.parse(raw);
      if (value === undefined && parser.expected) {
        errors.push({ row: index, column: parser.column, field, value: raw, expected: parser.expected });
      }
      item[field] = value;
    }
    return item as T;
  });

  return { items, errors };
}

/** Wrap untyped records (screener, portfolio, groups, options, economic calendar) unparsed. */
export function rawResponse(rows: Record<string, string>[]): FinvizResponse<Record<string, string>> {
  return { items: rows, errors: [] };
}
