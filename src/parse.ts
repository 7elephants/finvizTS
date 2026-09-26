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
 * |      | (date() → toNumbers() → localDate()) | `YYYY-MM-DD` / `M/D/YYYY` cell | Local-time Date or undefined |
 * | 2    | formatOf()                   | FinvizClient, options.format   | Effective ResponseFormat (per-call override, else client default) |
 * | 3    | parseRows()                  | RawRecord[], RowSchema<T>, format | FinvizResponse<T, F> — items, raw, or both |
 * | 4    | rawResponse()                | RawRecord[], format            | FinvizResponse<RawRecord, F> (no parsing, no errors) |
 *      (both delegate to formatResponse(), which skips parsing entirely in `raw` mode)
 * ---
 */

import type { FinvizClient } from './client';
import type {
  FinvizResponse,
  FormatOption,
  ParsedAndRawResponse,
  ParsedResponse,
  ParseError,
  RawRecord,
  RawResponse,
} from './types';
import { ParseErrorExpected, ResponseFormat } from './types';

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

/** Thousands separators (`1,234,567`) — stripped before numeric parsing. */
const THOUSANDS_SEPARATOR = /,(?=\d{3}(?:\D|$))/g;

/**
 * Read a column as a finite number. Strict — `'12abc'` is an error, unlike `parseFloat` — but
 * thousands separators are accepted (`'1,234.5'` → `1234.5`).
 */
export function number(column: string): ColumnParser<number> {
  return {
    column,
    expected: ParseErrorExpected.NUMBER,
    parse: (raw): number | undefined => {
      const value = Number(raw.replace(THOUSANDS_SEPARATOR, ''));
      return Number.isFinite(value) ? value : undefined;
    },
  };
}

/** Read a column as an integer. Thousands separators are accepted (`'3,800'` → `3800`). */
export function integer(column: string): ColumnParser<number> {
  return {
    column,
    expected: ParseErrorExpected.INTEGER,
    parse: (raw): number | undefined => {
      const value = Number(raw.replace(THOUSANDS_SEPARATOR, ''));
      return Number.isInteger(value) ? value : undefined;
    },
  };
}

/** `YYYY-MM-DD`, optionally followed by ` HH:mm[:ss]` (calendar endpoints). */
const ISO_DATE = /^(\d{4})-(\d{1,2})-(\d{1,2})(?:[ T](\d{1,2}):(\d{2})(?::(\d{2}))?)?$/;
/** `M/D/YYYY`, optionally followed by ` H:mm[:ss]` (insider, fund/manager endpoints). */
const US_DATE = /^(\d{1,2})\/(\d{1,2})\/(\d{4})(?: (\d{1,2}):(\d{2})(?::(\d{2}))?)?$/;

/**
 * Build a local-time Date from `[year, month, day, hours, minutes, seconds]`, or `undefined` if
 * any component is out of range (e.g. `2/31/2026`, which `new Date()` would silently roll over
 * to March).
 */
function localDate(parts: number[]): Date | undefined {
  const [y, m, d, h, min, s] = parts as [number, number, number, number, number, number];
  const value = new Date(y, m - 1, d, h, min, s);
  const actual = [
    value.getFullYear(),
    value.getMonth() + 1,
    value.getDate(),
    value.getHours(),
    value.getMinutes(),
    value.getSeconds(),
  ];
  return actual.every((part, i) => part === parts[i]) ? value : undefined;
}

/** Convert regex capture groups to numbers, treating absent optional groups (time) as `0`. */
function toNumbers(match: RegExpExecArray): number[] {
  return match.slice(1).map((part) => Number(part ?? 0));
}

/**
 * Read a column as a Date in the runtime's local timezone. Finviz's two formats — `YYYY-MM-DD`
 * and `M/D/YYYY`, each with an optional time — are parsed explicitly rather than via
 * `new Date(string)`, which treats date-only ISO strings as UTC (shifting them a day earlier
 * west of Greenwich) and whose handling of non-ISO strings is implementation-defined. Any other
 * format is an error.
 */
export function date(column: string): ColumnParser<Date> {
  return {
    column,
    expected: ParseErrorExpected.DATE,
    parse: (raw): Date | undefined => {
      const iso = ISO_DATE.exec(raw);
      if (iso) return localDate(toNumbers(iso));

      const us = US_DATE.exec(raw);
      if (!us) return undefined;
      const [m, d, y, ...time] = toNumbers(us);
      return localDate([y!, m!, d!, ...time]);
    },
  };
}

/**
 * Effective response format for a call: the per-call `format` option, else the client default.
 * Typed as `F` because an endpoint's `F` type parameter defaults to the client's `C` when the
 * call omits `format`, so both branches agree with the declared return type.
 */
export function formatOf<C extends ResponseFormat, F extends ResponseFormat>(
  client: FinvizClient<C>,
  options: FormatOption<F>,
): F {
  return (options.format ?? client.format) as F;
}

/**
 * Shape a response for `format`: `{ raw, errors: [] }` without calling `parse`, `parse()`'s
 * `{ items, errors }`, or both merged. Any other value (e.g. `undefined` from a mocked client)
 * falls back to `parsed`.
 */
function formatResponse<T, F extends ResponseFormat>(
  rows: RawRecord[],
  format: F,
  parse: () => ParsedResponse<T>,
): FinvizResponse<T, F> {
  let response: ParsedResponse<T> | RawResponse | ParsedAndRawResponse<T>;
  if (format === ResponseFormat.RAW) {
    response = { raw: rows, errors: [] };
  } else {
    const parsed = parse();
    response = format === ResponseFormat.BOTH ? { ...parsed, raw: rows } : parsed;
  }
  return response as FinvizResponse<T, F>;
}

/**
 * Map CSV records to typed items. Blank or missing cells become `undefined`; non-blank cells
 * that fail to parse also become `undefined` and are reported in `errors`.
 *
 * @param rows   - Records from `client.getRecords()`
 * @param schema - Item property → column parser
 * @param format - `parsed` (default) returns items, `raw` returns `rows` unparsed, `both` returns
 *                 items and `rows`
 */
export function parseRows<T, F extends ResponseFormat = 'parsed'>(
  rows: RawRecord[],
  schema: RowSchema<T>,
  format: F = ResponseFormat.PARSED as F,
): FinvizResponse<T, F> {
  return formatResponse(rows, format, () => mapRows(rows, schema));
}

/** Map every record through `schema`, collecting a ParseError per unparseable non-blank cell. */
function mapRows<T>(rows: RawRecord[], schema: RowSchema<T>): ParsedResponse<T> {
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

/**
 * Wrap untyped records (screener, portfolio, groups, options, economic calendar) unparsed. In
 * `both` mode `items` and `raw` are the same array.
 */
export function rawResponse<F extends ResponseFormat = 'parsed'>(
  rows: RawRecord[],
  format: F = ResponseFormat.PARSED as F,
): FinvizResponse<RawRecord, F> {
  return formatResponse(rows, format, () => ({ items: rows, errors: [] }));
}
