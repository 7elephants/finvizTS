[**finvizts**](README.md)

***

[finvizts](README.md) / parse

# parse

## Interfaces

### ColumnParser

Defined in: [parse.ts:33](https://github.com/7elephants/finvizTS/blob/706aab1e24071062daf1484d72ac61b15cccad77/src/parse.ts#L33)

Describes how to read one item property from a CSV record.

#### Type Parameters

##### V

`V`

#### Properties

##### column

> **column**: `string`

Defined in: [parse.ts:35](https://github.com/7elephants/finvizTS/blob/706aab1e24071062daf1484d72ac61b15cccad77/src/parse.ts#L35)

CSV header of the source column.

##### expected?

> `optional` **expected?**: [`ParseErrorExpected`](types/response.md#parseerrorexpected-1)

Defined in: [parse.ts:37](https://github.com/7elephants/finvizTS/blob/706aab1e24071062daf1484d72ac61b15cccad77/src/parse.ts#L37)

Kind reported in a ParseError; absent for text, which can never fail.

##### parse

> **parse**: (`raw`) => `V` \| `undefined`

Defined in: [parse.ts:39](https://github.com/7elephants/finvizTS/blob/706aab1e24071062daf1484d72ac61b15cccad77/src/parse.ts#L39)

Parse a non-blank cell; return `undefined` when the value is invalid.

###### Parameters

###### raw

`string`

###### Returns

`V` \| `undefined`

## Type Aliases

### RowSchema

> **RowSchema**\<`T`\> = `{ [K in keyof T]-?: ColumnParser<NonNullable<T[K]>> }`

Defined in: [parse.ts:43](https://github.com/7elephants/finvizTS/blob/706aab1e24071062daf1484d72ac61b15cccad77/src/parse.ts#L43)

Maps every property of item type `T` to the column parser that produces it.

#### Type Parameters

##### T

`T`

## Functions

### date()

> **date**(`column`): [`ColumnParser`](#columnparser)\<`Date`\>

Defined in: [parse.ts:116](https://github.com/7elephants/finvizTS/blob/706aab1e24071062daf1484d72ac61b15cccad77/src/parse.ts#L116)

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

### formatOf()

> **formatOf**\<`C`, `F`\>(`client`, `options`): `F`

Defined in: [parse.ts:137](https://github.com/7elephants/finvizTS/blob/706aab1e24071062daf1484d72ac61b15cccad77/src/parse.ts#L137)

Effective response format for a call: the per-call `format` option, else the client default.
Typed as `F` because an endpoint's `F` type parameter defaults to the client's `C` when the
call omits `format`, so both branches agree with the declared return type.

#### Type Parameters

##### C

`C` *extends* [`ResponseFormat`](types/response.md#responseformat)

##### F

`F` *extends* [`ResponseFormat`](types/response.md#responseformat)

#### Parameters

##### client

[`FinvizClient`](client.md#finvizclient)\<`C`\>

##### options

[`FormatOption`](types/response.md#formatoption)\<`F`\>

#### Returns

`F`

***

### integer()

> **integer**(`column`): [`ColumnParser`](#columnparser)\<`number`\>

Defined in: [parse.ts:69](https://github.com/7elephants/finvizTS/blob/706aab1e24071062daf1484d72ac61b15cccad77/src/parse.ts#L69)

Read a column as an integer. Thousands separators are accepted (`'3,800'` → `3800`).

#### Parameters

##### column

`string`

#### Returns

[`ColumnParser`](#columnparser)\<`number`\>

***

### number()

> **number**(`column`): [`ColumnParser`](#columnparser)\<`number`\>

Defined in: [parse.ts:57](https://github.com/7elephants/finvizTS/blob/706aab1e24071062daf1484d72ac61b15cccad77/src/parse.ts#L57)

Read a column as a finite number. Strict — `'12abc'` is an error, unlike `parseFloat` — but
thousands separators are accepted (`'1,234.5'` → `1234.5`).

#### Parameters

##### column

`string`

#### Returns

[`ColumnParser`](#columnparser)\<`number`\>

***

### parseRows()

> **parseRows**\<`T`, `F`\>(`rows`, `schema`, `format?`): [`FinvizResponse`](types/response.md#finvizresponse)\<`T`, `F`\>

Defined in: [parse.ts:173](https://github.com/7elephants/finvizTS/blob/706aab1e24071062daf1484d72ac61b15cccad77/src/parse.ts#L173)

Map CSV records to typed items. Blank or missing cells become `undefined`; non-blank cells
that fail to parse also become `undefined` and are reported in `errors`.

#### Type Parameters

##### T

`T`

##### F

`F` *extends* [`ResponseFormat`](types/response.md#responseformat) = `"parsed"`

#### Parameters

##### rows

[`RawRecord`](types/response.md#rawrecord)[]

Records from `client.getRecords()`

##### schema

[`RowSchema`](#rowschema)\<`T`\>

Item property → column parser

##### format?

`F` = `...`

`parsed` (default) returns items, `raw` returns `rows` unparsed, `both` returns
                items and `rows`

#### Returns

[`FinvizResponse`](types/response.md#finvizresponse)\<`T`, `F`\>

***

### rawResponse()

> **rawResponse**\<`F`\>(`rows`, `format?`): [`FinvizResponse`](types/response.md#finvizresponse)\<[`RawRecord`](types/response.md#rawrecord), `F`\>

Defined in: [parse.ts:210](https://github.com/7elephants/finvizTS/blob/706aab1e24071062daf1484d72ac61b15cccad77/src/parse.ts#L210)

Wrap untyped records (screener, portfolio, groups, options, economic calendar) unparsed. In
`both` mode `items` and `raw` are the same array.

#### Type Parameters

##### F

`F` *extends* [`ResponseFormat`](types/response.md#responseformat) = `"parsed"`

#### Parameters

##### rows

[`RawRecord`](types/response.md#rawrecord)[]

##### format?

`F` = `...`

#### Returns

[`FinvizResponse`](types/response.md#finvizresponse)\<[`RawRecord`](types/response.md#rawrecord), `F`\>

***

### text()

> **text**(`column`): [`ColumnParser`](#columnparser)\<`string`\>

Defined in: [parse.ts:46](https://github.com/7elephants/finvizTS/blob/706aab1e24071062daf1484d72ac61b15cccad77/src/parse.ts#L46)

Read a column as a string.

#### Parameters

##### column

`string`

#### Returns

[`ColumnParser`](#columnparser)\<`string`\>
