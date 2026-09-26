[**finvizts**](../README.md)

***

[finvizts](../README.md) / types/response

# types/response

## Interfaces

### FinvizResponse

Defined in: [types/response.ts:40](https://github.com/7elephants/finvizTS/blob/f744eabcb42982a597319cae2efa34ee2e597d43/src/types/response.ts#L40)

Wrapper returned by every `get*` function: the parsed items plus any cell parse errors.

#### Type Parameters

##### T

`T`

#### Properties

##### errors

> **errors**: [`ParseError`](#parseerror)[]

Defined in: [types/response.ts:44](https://github.com/7elephants/finvizTS/blob/f744eabcb42982a597319cae2efa34ee2e597d43/src/types/response.ts#L44)

Cells that were present but could not be parsed. Empty when every cell parsed cleanly.

##### items

> **items**: `T`[]

Defined in: [types/response.ts:42](https://github.com/7elephants/finvizTS/blob/f744eabcb42982a597319cae2efa34ee2e597d43/src/types/response.ts#L42)

One item per CSV data row, in response order.

***

### ParseError

Defined in: [types/response.ts:26](https://github.com/7elephants/finvizTS/blob/f744eabcb42982a597319cae2efa34ee2e597d43/src/types/response.ts#L26)

A non-blank CSV cell that could not be parsed to its expected type. The corresponding item
field is `undefined`. Blank or missing cells are not errors — they are simply `undefined`.

#### Properties

##### column

> **column**: `string`

Defined in: [types/response.ts:30](https://github.com/7elephants/finvizTS/blob/f744eabcb42982a597319cae2efa34ee2e597d43/src/types/response.ts#L30)

CSV header of the cell, e.g. `Price`.

##### expected

> **expected**: [`ParseErrorExpected`](#parseerrorexpected-1)

Defined in: [types/response.ts:36](https://github.com/7elephants/finvizTS/blob/f744eabcb42982a597319cae2efa34ee2e597d43/src/types/response.ts#L36)

Type the cell was expected to parse to.

##### field

> **field**: `string`

Defined in: [types/response.ts:32](https://github.com/7elephants/finvizTS/blob/f744eabcb42982a597319cae2efa34ee2e597d43/src/types/response.ts#L32)

Item property the cell maps to, e.g. `price`.

##### row

> **row**: `number`

Defined in: [types/response.ts:28](https://github.com/7elephants/finvizTS/blob/f744eabcb42982a597319cae2efa34ee2e597d43/src/types/response.ts#L28)

Zero-based index of the data row (and of the item in `items`).

##### value

> **value**: `string`

Defined in: [types/response.ts:34](https://github.com/7elephants/finvizTS/blob/f744eabcb42982a597319cae2efa34ee2e597d43/src/types/response.ts#L34)

Raw cell value that failed to parse.

## Type Aliases

### ParseErrorExpected

> **ParseErrorExpected** = *typeof* [`ParseErrorExpected`](#parseerrorexpected-2)\[keyof *typeof* [`ParseErrorExpected`](#parseerrorexpected-2)\]

Defined in: [types/response.ts:15](https://github.com/7elephants/finvizTS/blob/f744eabcb42982a597319cae2efa34ee2e597d43/src/types/response.ts#L15)

Kinds of value a CSV cell was expected to parse to.

## Variables

### ParseErrorExpected

> `const` **ParseErrorExpected**: `object`

Defined in: [types/response.ts:15](https://github.com/7elephants/finvizTS/blob/f744eabcb42982a597319cae2efa34ee2e597d43/src/types/response.ts#L15)

Kinds of value a CSV cell was expected to parse to.

#### Type Declaration

##### DATE

> `readonly` **DATE**: `"date"` = `'date'`

##### INTEGER

> `readonly` **INTEGER**: `"integer"` = `'integer'`

##### NUMBER

> `readonly` **NUMBER**: `"number"` = `'number'`
