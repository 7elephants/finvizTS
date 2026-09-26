/*
 * ---
 * Workflow Summary
 * Invocation: Run via `npx jest tests/parse.test.ts` or `npm test`.
 *
 * | Step | Description                                          | Input                    | Output                     |
 * |------|-------------------------------------------------------|--------------------------|-----------------------------|
 * | 1    | Assert each column parser accepts/rejects raw cells  | Raw cell strings         | Parsed value or undefined  |
 * | 2    | Assert parseRows maps blank/missing cells to undefined | Records + RowSchema    | Items with undefined fields |
 * | 3    | Assert parseRows reports unparseable cells as errors | Records + RowSchema      | ParseError[]               |
 * | 4    | Assert parseRows honors parsed/raw/both formats      | Records + format         | items / raw / both         |
 * | 5    | Assert rawResponse wraps records per format          | Records + format         | `{ items or raw, errors }`  |
 * | 6    | Assert formatOf prefers per-call over client default | Client + options         | Effective ResponseFormat   |
 * ---
 */

import type { FinvizClient } from '../src/client';
import { date, formatOf, integer, number, parseRows, rawResponse, text, type RowSchema } from '../src/parse';
import { ResponseFormat } from '../src/types';

describe('column parsers', () => {
  it('text returns the raw string', () => {
    expect(text('A').parse('hello')).toBe('hello');
  });

  it('number parses finite numbers, including scientific notation', () => {
    const parser = number('A');
    expect(parser.parse('1.5')).toBe(1.5);
    expect(parser.parse('-612.82')).toBe(-612.82);
    expect(parser.parse('6.04E-06')).toBe(6.04e-6);
  });

  it('number accepts thousands separators', () => {
    const parser = number('A');
    expect(parser.parse('1,234.5')).toBe(1234.5);
    expect(parser.parse('-1,500,000')).toBe(-1500000);
  });

  it('number rejects partial and non-finite values', () => {
    const parser = number('A');
    expect(parser.parse('12abc')).toBeUndefined();
    expect(parser.parse('1.5%')).toBeUndefined();
    expect(parser.parse('N/A')).toBeUndefined();
    expect(parser.parse('Infinity')).toBeUndefined();
  });

  it('integer accepts whole numbers only', () => {
    const parser = integer('A');
    expect(parser.parse('50000')).toBe(50000);
    expect(parser.parse('-10')).toBe(-10);
    expect(parser.parse('1.5')).toBeUndefined();
    expect(parser.parse('3,800')).toBe(3800);
    expect(parser.parse('1,23')).toBeUndefined();
  });

  it('date parses YYYY-MM-DD as local midnight, not UTC', () => {
    const value = date('A').parse('2026-07-20');
    expect(value).toEqual(new Date(2026, 6, 20));
    expect(value?.getDate()).toBe(20);
  });

  it('date parses YYYY-MM-DD with a time', () => {
    const parser = date('A');
    expect(parser.parse('2026-07-20 08:30')).toEqual(new Date(2026, 6, 20, 8, 30));
    expect(parser.parse('2026-03-27 08:30:15')).toEqual(new Date(2026, 2, 27, 8, 30, 15));
  });

  it('date parses M/D/YYYY with an optional time', () => {
    const parser = date('A');
    expect(parser.parse('4/11/2026')).toEqual(new Date(2026, 3, 11));
    expect(parser.parse('4/11/2026 8:20')).toEqual(new Date(2026, 3, 11, 8, 20));
  });

  it('date rejects out-of-range components and unknown formats', () => {
    const parser = date('A');
    expect(parser.parse('2/31/2026')).toBeUndefined();
    expect(parser.parse('2026-13-01')).toBeUndefined();
    expect(parser.parse('4/11/2026 25:00')).toBeUndefined();
    expect(parser.parse('not a date')).toBeUndefined();
    expect(parser.parse('April 11, 2026')).toBeUndefined();
  });
});

interface Row {
  label: string | undefined;
  amount: number | undefined;
  count: number | undefined;
  when: Date | undefined;
}

const schema: RowSchema<Row> = {
  label: text('Label'),
  amount: number('Amount'),
  count: integer('Count'),
  when: date('When'),
};

describe('parseRows', () => {
  it('maps every schema property from its column', () => {
    const result = parseRows<Row>(
      [{ Label: 'x', Amount: '1.25', Count: '3', When: '2026-07-20' }],
      schema,
    );

    expect(result).toEqual({
      items: [{ label: 'x', amount: 1.25, count: 3, when: new Date(2026, 6, 20) }],
      errors: [],
    });
  });

  it('sets missing, empty and whitespace-only cells to undefined without errors', () => {
    const result = parseRows<Row>([{ Label: '', Amount: '   ' }], schema);

    expect(result.items).toEqual([
      { label: undefined, amount: undefined, count: undefined, when: undefined },
    ]);
    expect(Object.keys(result.items[0]!)).toEqual(['label', 'amount', 'count', 'when']);
    expect(result.errors).toEqual([]);
  });

  it('trims surrounding whitespace before parsing', () => {
    const result = parseRows<Row>([{ Label: ' x ', Amount: ' 2 ' }], schema);

    expect(result.items[0]?.label).toBe('x');
    expect(result.items[0]?.amount).toBe(2);
  });

  it('reports unparseable cells with row, column, field, value and expected type', () => {
    const result = parseRows<Row>(
      [
        { Label: 'ok', Amount: '1', Count: '2', When: '2026-07-20' },
        { Label: 'bad', Amount: 'N/A', Count: '2.5', When: 'soon' },
      ],
      schema,
    );

    expect(result.items[1]).toEqual({ label: 'bad', amount: undefined, count: undefined, when: undefined });
    expect(result.errors).toEqual([
      { row: 1, column: 'Amount', field: 'amount', value: 'N/A', expected: 'number' },
      { row: 1, column: 'Count', field: 'count', value: '2.5', expected: 'integer' },
      { row: 1, column: 'When', field: 'when', value: 'soon', expected: 'date' },
    ]);
  });

  it('does not report an error for a parser without an expected type', () => {
    const lenient: RowSchema<{ v: string | undefined }> = {
      v: { column: 'V', parse: () => undefined },
    };

    const result = parseRows([{ V: 'anything' }], lenient);

    expect(result).toEqual({ items: [{ v: undefined }], errors: [] });
  });

  it('returns empty items and errors for no rows', () => {
    expect(parseRows<Row>([], schema)).toEqual({ items: [], errors: [] });
  });
});

describe('parseRows formats', () => {
  const rows = [{ Label: 'x', Amount: 'N/A' }];

  it('parsed (explicit) returns items and errors without raw', () => {
    const result = parseRows<Row, 'parsed'>(rows, schema, ResponseFormat.PARSED);

    expect(Object.keys(result)).toEqual(['items', 'errors']);
    expect(result.errors).toHaveLength(1);
  });

  it('raw returns the records unparsed, with no errors even for unparseable cells', () => {
    const result = parseRows<Row, 'raw'>(rows, schema, ResponseFormat.RAW);

    expect(result).toEqual({ raw: rows, errors: [] });
    expect(result.raw).toBe(rows);
  });

  it('both returns items, raw records and parse errors', () => {
    const result = parseRows<Row, 'both'>(rows, schema, ResponseFormat.BOTH);

    expect(result.items).toEqual([{ label: 'x', amount: undefined, count: undefined, when: undefined }]);
    expect(result.raw).toBe(rows);
    expect(result.errors).toEqual([
      { row: 0, column: 'Amount', field: 'amount', value: 'N/A', expected: 'number' },
    ]);
  });

  it('never calls a column parser in raw mode', () => {
    const parse = jest.fn();
    parseRows([{ V: '1' }], { v: { column: 'V', parse } }, ResponseFormat.RAW);

    expect(parse).not.toHaveBeenCalled();
  });
});

describe('rawResponse', () => {
  const rows = [{ Ticker: 'AAPL', Price: '' }];

  it('wraps records unchanged with no errors', () => {
    expect(rawResponse(rows)).toEqual({ items: rows, errors: [] });
  });

  it('raw returns the records under raw', () => {
    expect(rawResponse(rows, ResponseFormat.RAW)).toEqual({ raw: rows, errors: [] });
  });

  it('both returns the same records as items and raw', () => {
    const result = rawResponse(rows, ResponseFormat.BOTH);

    expect(result).toEqual({ items: rows, raw: rows, errors: [] });
  });
});

describe('formatOf', () => {
  it('prefers the per-call format over the client default', () => {
    const client = { format: ResponseFormat.RAW } as unknown as FinvizClient<'raw'>;

    expect(formatOf(client, { format: ResponseFormat.BOTH })).toBe('both');
  });

  it('falls back to the client default when the call omits format', () => {
    const client = { format: ResponseFormat.RAW } as unknown as FinvizClient<'raw'>;

    expect(formatOf(client, {})).toBe('raw');
  });
});
