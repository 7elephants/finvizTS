[**finvizts**](README.md)

***

[finvizts](README.md) / parse

# parse

## Interfaces

### ColumnParser

Defined in: parse.ts:21

Describes how to read one item property from a CSV record.

#### Type Parameters

##### V

`V`

#### Properties

##### column

> **column**: `string`

Defined in: parse.ts:23

CSV header of the source column.

##### expected?

> `optional` **expected?**: [`ParseErrorExpected`](types/response.md#parseerrorexpected-1)

Defined in: parse.ts:25

Kind reported in a ParseError; absent for text, which can never fail.

##### parse

> **parse**: (`raw`) => `V` \| `undefined`

Defined in: parse.ts:27

Parse a non-blank cell; return `undefined` when the value is invalid.

###### Parameters

###### raw

`string`

###### Returns

`V` \| `undefined`

## Type Aliases

### RowSchema

> **RowSchema**\<`T`\> = `{ [K in keyof T]-?: ColumnParser<NonNullable<T[K]>> }`

Defined in: parse.ts:31

Maps every property of item type `T` to the column parser that produces it.

#### Type Parameters

##### T

`T`

## Functions

### date()

> **date**(`column`): [`ColumnParser`](#columnparser)\<`Date`\>

Defined in: parse.ts:63

Read a column as a Date.

#### Parameters

##### column

`string`

#### Returns

[`ColumnParser`](#columnparser)\<`Date`\>

***

### integer()

> **integer**(`column`): [`ColumnParser`](#columnparser)\<`number`\>

Defined in: parse.ts:51

Read a column as an integer.

#### Parameters

##### column

`string`

#### Returns

[`ColumnParser`](#columnparser)\<`number`\>

***

### number()

> **number**(`column`): [`ColumnParser`](#columnparser)\<`number`\>

Defined in: parse.ts:39

Read a column as a finite number (strict — `'12abc'` is an error, unlike `parseFloat`).

#### Parameters

##### column

`string`

#### Returns

[`ColumnParser`](#columnparser)\<`number`\>

***

### parseRows()

> **parseRows**\<`T`\>(`rows`, `schema`): [`FinvizResponse`](types/response.md#finvizresponse)\<`T`\>

Defined in: parse.ts:81

Map CSV records to typed items. Blank or missing cells become `undefined`; non-blank cells
that fail to parse also become `undefined` and are reported in `errors`.

#### Type Parameters

##### T

`T`

#### Parameters

##### rows

`Record`\<`string`, `string`\>[]

Records from `client.getRecords()`

##### schema

[`RowSchema`](#rowschema)\<`T`\>

Item property → column parser

#### Returns

[`FinvizResponse`](types/response.md#finvizresponse)\<`T`\>

***

### rawResponse()

> **rawResponse**(`rows`): [`FinvizResponse`](types/response.md#finvizresponse)\<`Record`\<`string`, `string`\>\>

Defined in: parse.ts:109

Wrap untyped records (screener, portfolio, groups, options, economic calendar) unparsed.

#### Parameters

##### rows

`Record`\<`string`, `string`\>[]

#### Returns

[`FinvizResponse`](types/response.md#finvizresponse)\<`Record`\<`string`, `string`\>\>

***

### text()

> **text**(`column`): [`ColumnParser`](#columnparser)\<`string`\>

Defined in: parse.ts:34

Read a column as a string.

#### Parameters

##### column

`string`

#### Returns

[`ColumnParser`](#columnparser)\<`string`\>
