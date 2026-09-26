[**finvizts**](README.md)

***

[finvizts](README.md) / parse

# parse

## Interfaces

### ColumnParser

Defined in: [parse.ts:22](https://github.com/7elephants/finvizTS/blob/4598e28fe579e13cc299b61a0dd62e18c7c17595/src/parse.ts#L22)

Describes how to read one item property from a CSV record.

#### Type Parameters

##### V

`V`

#### Properties

##### column

> **column**: `string`

Defined in: [parse.ts:24](https://github.com/7elephants/finvizTS/blob/4598e28fe579e13cc299b61a0dd62e18c7c17595/src/parse.ts#L24)

CSV header of the source column.

##### expected?

> `optional` **expected?**: [`ParseErrorExpected`](types/response.md#parseerrorexpected-1)

Defined in: [parse.ts:26](https://github.com/7elephants/finvizTS/blob/4598e28fe579e13cc299b61a0dd62e18c7c17595/src/parse.ts#L26)

Kind reported in a ParseError; absent for text, which can never fail.

##### parse

> **parse**: (`raw`) => `V` \| `undefined`

Defined in: [parse.ts:28](https://github.com/7elephants/finvizTS/blob/4598e28fe579e13cc299b61a0dd62e18c7c17595/src/parse.ts#L28)

Parse a non-blank cell; return `undefined` when the value is invalid.

###### Parameters

###### raw

`string`

###### Returns

`V` \| `undefined`

## Type Aliases

### RowSchema

> **RowSchema**\<`T`\> = `{ [K in keyof T]-?: ColumnParser<NonNullable<T[K]>> }`

Defined in: [parse.ts:32](https://github.com/7elephants/finvizTS/blob/4598e28fe579e13cc299b61a0dd62e18c7c17595/src/parse.ts#L32)

Maps every property of item type `T` to the column parser that produces it.

#### Type Parameters

##### T

`T`

## Functions

### date()

> **date**(`column`): [`ColumnParser`](#columnparser)\<`Date`\>

Defined in: [parse.ts:105](https://github.com/7elephants/finvizTS/blob/4598e28fe579e13cc299b61a0dd62e18c7c17595/src/parse.ts#L105)

Read a column as a Date in the runtime's local timezone. Finviz's two formats — `YYYY-MM-DD`
and `M/D/YYYY`, each with an optional time — are parsed explicitly rather than via
`new Date(string)`, which treats date-only ISO strings as UTC (shifting them a day earlier
west of Greenwich) and whose handling of non-ISO strings is implementation-defined. Any other
format is an error.

#### Parameters

##### column

`string`

#### Returns

[`ColumnParser`](#columnparser)\<`Date`\>

***

### integer()

> **integer**(`column`): [`ColumnParser`](#columnparser)\<`number`\>

Defined in: [parse.ts:58](https://github.com/7elephants/finvizTS/blob/4598e28fe579e13cc299b61a0dd62e18c7c17595/src/parse.ts#L58)

Read a column as an integer. Thousands separators are accepted (`'3,800'` → `3800`).

#### Parameters

##### column

`string`

#### Returns

[`ColumnParser`](#columnparser)\<`number`\>

***

### number()

> **number**(`column`): [`ColumnParser`](#columnparser)\<`number`\>

Defined in: [parse.ts:46](https://github.com/7elephants/finvizTS/blob/4598e28fe579e13cc299b61a0dd62e18c7c17595/src/parse.ts#L46)

Read a column as a finite number. Strict — `'12abc'` is an error, unlike `parseFloat` — but
thousands separators are accepted (`'1,234.5'` → `1234.5`).

#### Parameters

##### column

`string`

#### Returns

[`ColumnParser`](#columnparser)\<`number`\>

***

### parseRows()

> **parseRows**\<`T`\>(`rows`, `schema`): [`FinvizResponse`](types/response.md#finvizresponse)\<`T`\>

Defined in: [parse.ts:128](https://github.com/7elephants/finvizTS/blob/4598e28fe579e13cc299b61a0dd62e18c7c17595/src/parse.ts#L128)

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

Defined in: [parse.ts:156](https://github.com/7elephants/finvizTS/blob/4598e28fe579e13cc299b61a0dd62e18c7c17595/src/parse.ts#L156)

Wrap untyped records (screener, portfolio, groups, options, economic calendar) unparsed.

#### Parameters

##### rows

`Record`\<`string`, `string`\>[]

#### Returns

[`FinvizResponse`](types/response.md#finvizresponse)\<`Record`\<`string`, `string`\>\>

***

### text()

> **text**(`column`): [`ColumnParser`](#columnparser)\<`string`\>

Defined in: [parse.ts:35](https://github.com/7elephants/finvizTS/blob/4598e28fe579e13cc299b61a0dd62e18c7c17595/src/parse.ts#L35)

Read a column as a string.

#### Parameters

##### column

`string`

#### Returns

[`ColumnParser`](#columnparser)\<`string`\>
