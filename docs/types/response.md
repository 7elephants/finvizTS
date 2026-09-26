[**finvizts**](../README.md)

***

[finvizts](../README.md) / types/response

# types/response

## Interfaces

### FormatOption

Defined in: [types/response.ts:57](https://github.com/7elephants/finvizTS/blob/80a71835161ee929f23b53123ed4d2d457750e80/src/types/response.ts#L57)

Per-call override of the client's default ResponseFormat; accepted by every `get*` function.

#### Type Parameters

##### F

`F` *extends* [`ResponseFormat`](#responseformat)

#### Properties

##### format?

> `optional` **format?**: `F`

Defined in: [types/response.ts:59](https://github.com/7elephants/finvizTS/blob/80a71835161ee929f23b53123ed4d2d457750e80/src/types/response.ts#L59)

Response format for this call. Defaults to the FinvizClient's `format`.

***

### ParsedAndRawResponse

Defined in: [types/response.ts:79](https://github.com/7elephants/finvizTS/blob/80a71835161ee929f23b53123ed4d2d457750e80/src/types/response.ts#L79)

`both` response: typed items and the CSV records they were parsed from.

#### Extends

- [`ParsedResponse`](#parsedresponse)\<`T`\>.[`RawResponse`](#rawresponse)

#### Type Parameters

##### T

`T`

#### Properties

##### errors

> **errors**: [`ParseError`](#parseerror)[]

Defined in: [types/response.ts:81](https://github.com/7elephants/finvizTS/blob/80a71835161ee929f23b53123ed4d2d457750e80/src/types/response.ts#L81)

Cells that were present but could not be parsed. `row` indexes both `items` and `raw`.

###### Overrides

[`ParsedResponse`](#parsedresponse).[`errors`](#errors-1)

##### items

> **items**: `T`[]

Defined in: [types/response.ts:65](https://github.com/7elephants/finvizTS/blob/80a71835161ee929f23b53123ed4d2d457750e80/src/types/response.ts#L65)

One item per CSV data row, in response order.

###### Inherited from

[`ParsedResponse`](#parsedresponse).[`items`](#items-1)

##### raw

> **raw**: [`RawRecord`](#rawrecord)[]

Defined in: [types/response.ts:73](https://github.com/7elephants/finvizTS/blob/80a71835161ee929f23b53123ed4d2d457750e80/src/types/response.ts#L73)

One record per CSV data row, in response order.

###### Inherited from

[`RawResponse`](#rawresponse).[`raw`](#raw-1)

***

### ParsedResponse

Defined in: [types/response.ts:63](https://github.com/7elephants/finvizTS/blob/80a71835161ee929f23b53123ed4d2d457750e80/src/types/response.ts#L63)

`parsed` response: typed items plus any cell parse errors.

#### Extended by

- [`ParsedAndRawResponse`](#parsedandrawresponse)

#### Type Parameters

##### T

`T`

#### Properties

##### errors

> **errors**: [`ParseError`](#parseerror)[]

Defined in: [types/response.ts:67](https://github.com/7elephants/finvizTS/blob/80a71835161ee929f23b53123ed4d2d457750e80/src/types/response.ts#L67)

Cells that were present but could not be parsed. Empty when every cell parsed cleanly.

##### items

> **items**: `T`[]

Defined in: [types/response.ts:65](https://github.com/7elephants/finvizTS/blob/80a71835161ee929f23b53123ed4d2d457750e80/src/types/response.ts#L65)

One item per CSV data row, in response order.

***

### ParseError

Defined in: [types/response.ts:29](https://github.com/7elephants/finvizTS/blob/80a71835161ee929f23b53123ed4d2d457750e80/src/types/response.ts#L29)

A non-blank CSV cell that could not be parsed to its expected type. The corresponding item
field is `undefined`. Blank or missing cells are not errors — they are simply `undefined`.

#### Properties

##### column

> **column**: `string`

Defined in: [types/response.ts:33](https://github.com/7elephants/finvizTS/blob/80a71835161ee929f23b53123ed4d2d457750e80/src/types/response.ts#L33)

CSV header of the cell, e.g. `Price`.

##### expected

> **expected**: [`ParseErrorExpected`](#parseerrorexpected-1)

Defined in: [types/response.ts:39](https://github.com/7elephants/finvizTS/blob/80a71835161ee929f23b53123ed4d2d457750e80/src/types/response.ts#L39)

Type the cell was expected to parse to.

##### field

> **field**: `string`

Defined in: [types/response.ts:35](https://github.com/7elephants/finvizTS/blob/80a71835161ee929f23b53123ed4d2d457750e80/src/types/response.ts#L35)

Item property the cell maps to, e.g. `price`.

##### row

> **row**: `number`

Defined in: [types/response.ts:31](https://github.com/7elephants/finvizTS/blob/80a71835161ee929f23b53123ed4d2d457750e80/src/types/response.ts#L31)

Zero-based index of the data row (and of the item in `items`).

##### value

> **value**: `string`

Defined in: [types/response.ts:37](https://github.com/7elephants/finvizTS/blob/80a71835161ee929f23b53123ed4d2d457750e80/src/types/response.ts#L37)

Raw cell value that failed to parse.

***

### RawResponse

Defined in: [types/response.ts:71](https://github.com/7elephants/finvizTS/blob/80a71835161ee929f23b53123ed4d2d457750e80/src/types/response.ts#L71)

`raw` response: the CSV records exactly as parsed from the response body.

#### Extended by

- [`ParsedAndRawResponse`](#parsedandrawresponse)

#### Properties

##### errors

> **errors**: [`ParseError`](#parseerror)[]

Defined in: [types/response.ts:75](https://github.com/7elephants/finvizTS/blob/80a71835161ee929f23b53123ed4d2d457750e80/src/types/response.ts#L75)

Always empty — no cells are parsed in raw mode.

##### raw

> **raw**: [`RawRecord`](#rawrecord)[]

Defined in: [types/response.ts:73](https://github.com/7elephants/finvizTS/blob/80a71835161ee929f23b53123ed4d2d457750e80/src/types/response.ts#L73)

One record per CSV data row, in response order.

## Type Aliases

### FinvizResponse

> **FinvizResponse**\<`T`, `F`\> = `F` *extends* `"parsed"` ? [`ParsedResponse`](#parsedresponse)\<`T`\> : `F` *extends* `"raw"` ? [`RawResponse`](#rawresponse) : [`ParsedAndRawResponse`](#parsedandrawresponse)\<`T`\>

Defined in: [types/response.ts:89](https://github.com/7elephants/finvizTS/blob/80a71835161ee929f23b53123ed4d2d457750e80/src/types/response.ts#L89)

Wrapper returned by every `get*` function, shaped by the ResponseFormat `F` (default
`parsed`). When `F` is the whole union (e.g. a client typed as `FinvizClient<ResponseFormat>`)
this is a union of the three shapes; narrow it with `'items' in response` / `'raw' in response`.

#### Type Parameters

##### T

`T`

##### F

`F` *extends* [`ResponseFormat`](#responseformat) = `"parsed"`

***

### ParseErrorExpected

> **ParseErrorExpected** = *typeof* [`ParseErrorExpected`](#parseerrorexpected-2)\[keyof *typeof* [`ParseErrorExpected`](#parseerrorexpected-2)\]

Defined in: [types/response.ts:18](https://github.com/7elephants/finvizTS/blob/80a71835161ee929f23b53123ed4d2d457750e80/src/types/response.ts#L18)

Kinds of value a CSV cell was expected to parse to.

***

### RawRecord

> **RawRecord** = `Record`\<`string`, `string`\>

Defined in: [types/response.ts:54](https://github.com/7elephants/finvizTS/blob/80a71835161ee929f23b53123ed4d2d457750e80/src/types/response.ts#L54)

One CSV data row as returned by Finviz: column header → cell text.

***

### ResponseFormat

> **ResponseFormat** = *typeof* [`ResponseFormat`](#responseformat-1)\[keyof *typeof* [`ResponseFormat`](#responseformat-1)\]

Defined in: [types/response.ts:46](https://github.com/7elephants/finvizTS/blob/80a71835161ee929f23b53123ed4d2d457750e80/src/types/response.ts#L46)

What a `get*` function returns: typed items (`parsed`, the default), the unmapped CSV records
(`raw`), or both. Set a default on the FinvizClient and override it per call via `format`.

## Variables

### ParseErrorExpected

> `const` **ParseErrorExpected**: `object`

Defined in: [types/response.ts:18](https://github.com/7elephants/finvizTS/blob/80a71835161ee929f23b53123ed4d2d457750e80/src/types/response.ts#L18)

Kinds of value a CSV cell was expected to parse to.

#### Type Declaration

##### DATE

> `readonly` **DATE**: `"date"` = `'date'`

##### INTEGER

> `readonly` **INTEGER**: `"integer"` = `'integer'`

##### NUMBER

> `readonly` **NUMBER**: `"number"` = `'number'`

***

### ResponseFormat

> `const` **ResponseFormat**: `object`

Defined in: [types/response.ts:46](https://github.com/7elephants/finvizTS/blob/80a71835161ee929f23b53123ed4d2d457750e80/src/types/response.ts#L46)

What a `get*` function returns: typed items (`parsed`, the default), the unmapped CSV records
(`raw`), or both. Set a default on the FinvizClient and override it per call via `format`.

#### Type Declaration

##### BOTH

> `readonly` **BOTH**: `"both"` = `'both'`

##### PARSED

> `readonly` **PARSED**: `"parsed"` = `'parsed'`

##### RAW

> `readonly` **RAW**: `"raw"` = `'raw'`
