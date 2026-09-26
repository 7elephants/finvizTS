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
 * | 4    | Assert rawResponse wraps records unchanged           | Records                  | `{ items, errors: [] }`    |
 * ---
 */

import { date, integer, number, parseRows, rawResponse, text, type RowSchema } from '../src/parse';

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
    expect(parser.parse('3,800')).toBeUndefined();
  });

  it('date parses valid dates and rejects invalid ones', () => {
    const parser = date('A');
    expect(parser.parse('4/11/2026')).toEqual(new Date('4/11/2026'));
    expect(parser.parse('not a date')).toBeUndefined();
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
      items: [{ label: 'x', amount: 1.25, count: 3, when: new Date('2026-07-20') }],
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

describe('rawResponse', () => {
  it('wraps records unchanged with no errors', () => {
    const rows = [{ Ticker: 'AAPL', Price: '' }];

    expect(rawResponse(rows)).toEqual({ items: rows, errors: [] });
  });
});
