[**finvizts**](../README.md)

***

[finvizts](../README.md) / types/quote

# types/quote

## Interfaces

### Quote

Defined in: [types/quote.ts:57](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/quote.ts#L57)

A single OHLCV row returned by the quote endpoint.

#### Properties

##### ChangeFromOpen

> **ChangeFromOpen**: `string`

Defined in: [types/quote.ts:64](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/quote.ts#L64)

##### Close

> **Close**: `string`

Defined in: [types/quote.ts:62](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/quote.ts#L62)

##### Date

> **Date**: `string`

Defined in: [types/quote.ts:58](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/quote.ts#L58)

##### High

> **High**: `string`

Defined in: [types/quote.ts:60](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/quote.ts#L60)

##### Low

> **Low**: `string`

Defined in: [types/quote.ts:61](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/quote.ts#L61)

##### Open

> **Open**: `string`

Defined in: [types/quote.ts:59](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/quote.ts#L59)

##### Volume

> **Volume**: `string`

Defined in: [types/quote.ts:63](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/quote.ts#L63)

***

### QuoteOptions

Defined in: [types/quote.ts:49](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/quote.ts#L49)

Options for a quote request.

#### Properties

##### period

> **period**: [`QuotePeriod`](#quoteperiod)

Defined in: [types/quote.ts:51](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/quote.ts#L51)

Period/interval of quote data (required).

##### range?

> `optional` **range?**: `string`

Defined in: [types/quote.ts:53](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/quote.ts#L53)

Range of time to return data for (optional).

## Type Aliases

### QuotePeriod

> **QuotePeriod** = *typeof* [`QuotePeriod`](#quoteperiod-1)\[keyof *typeof* [`QuotePeriod`](#quoteperiod-1)\]

Defined in: [types/quote.ts:16](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/quote.ts#L16)

Union of all known quote period/interval values.

***

### QuoteRange

> **QuoteRange** = *typeof* [`QuoteRange`](#quoterange-1)\[keyof *typeof* [`QuoteRange`](#quoterange-1)\] \| `` `range_${string}` `` \| `` `prev_${string}` ``

Defined in: [types/quote.ts:32](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/quote.ts#L32)

Union of all known quote range values, plus custom `range_*` and `prev_*` patterns.

## Variables

### QuotePeriod

> `const` **QuotePeriod**: `object`

Defined in: [types/quote.ts:16](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/quote.ts#L16)

Valid period/interval values for the quote endpoint.

#### Type Declaration

##### DAILY

> `readonly` **DAILY**: `"d"` = `'d'`

##### FIFTEEN\_MINUTES

> `readonly` **FIFTEEN\_MINUTES**: `"i15"` = `'i15'`

##### FIVE\_MINUTES

> `readonly` **FIVE\_MINUTES**: `"i5"` = `'i5'`

##### HOURLY

> `readonly` **HOURLY**: `"h"` = `'h'`

##### MINUTE

> `readonly` **MINUTE**: `"i1"` = `'i1'`

##### MONTHLY

> `readonly` **MONTHLY**: `"m"` = `'m'`

##### THIRTY\_MINUTES

> `readonly` **THIRTY\_MINUTES**: `"i30"` = `'i30'`

##### THREE\_MINUTES

> `readonly` **THREE\_MINUTES**: `"i3"` = `'i3'`

##### WEEKLY

> `readonly` **WEEKLY**: `"w"` = `'w'`

***

### QuoteRange

> `const` **QuoteRange**: `object`

Defined in: [types/quote.ts:32](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/quote.ts#L32)

Valid range values for the quote endpoint.

#### Type Declaration

##### DAY

> `readonly` **DAY**: `"d1"` = `'d1'`

##### FIVE\_DAYS

> `readonly` **FIVE\_DAYS**: `"d5"` = `'d5'`

##### FIVE\_YEARS

> `readonly` **FIVE\_YEARS**: `"y5"` = `'y5'`

##### MAX

> `readonly` **MAX**: `"max"` = `'max'`

##### MONTH

> `readonly` **MONTH**: `"m1"` = `'m1'`

##### SIX\_MONTHS

> `readonly` **SIX\_MONTHS**: `"m6"` = `'m6'`

##### THREE\_MONTHS

> `readonly` **THREE\_MONTHS**: `"m3"` = `'m3'`

##### TWO\_YEARS

> `readonly` **TWO\_YEARS**: `"y2"` = `'y2'`

##### YEAR

> `readonly` **YEAR**: `"y1"` = `'y1'`

##### YTD

> `readonly` **YTD**: `"ytd"` = `'ytd'`
