[**finvizts**](../README.md)

***

[finvizts](../README.md) / types/news

# types/news

## Interfaces

### NewsItem

Defined in: [types/news.ts:37](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/news.ts#L37)

A single news item returned by the news endpoint.

#### Properties

##### category

> **category**: `string`

Defined in: [types/news.ts:42](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/news.ts#L42)

##### date

> **date**: `string`

Defined in: [types/news.ts:40](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/news.ts#L40)

##### source

> **source**: `string`

Defined in: [types/news.ts:39](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/news.ts#L39)

##### ticker

> **ticker**: `string`

Defined in: [types/news.ts:43](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/news.ts#L43)

##### title

> **title**: `string`

Defined in: [types/news.ts:38](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/news.ts#L38)

##### url

> **url**: `string`

Defined in: [types/news.ts:41](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/news.ts#L41)

***

### NewsOptions

Defined in: [types/news.ts:27](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/news.ts#L27)

Options for a news request.

#### Properties

##### portfolioId?

> `optional` **portfolioId?**: `string`

Defined in: [types/news.ts:31](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/news.ts#L31)

Portfolio ID to filter news by (only for STOCK or ETF type).

##### tickers?

> `optional` **tickers?**: `string`

Defined in: [types/news.ts:33](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/news.ts#L33)

Comma-separated ticker symbols to filter news by (only for STOCK, ETF, or CRYPTO type).

##### type?

> `optional` **type?**: [`NewsType`](#newstype)

Defined in: [types/news.ts:29](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/news.ts#L29)

Type of news to retrieve (defaults to MARKET_BY_TIME).

## Type Aliases

### NewsType

> **NewsType** = *typeof* [`NewsType`](#newstype-1)\[keyof *typeof* [`NewsType`](#newstype-1)\]

Defined in: [types/news.ts:15](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/news.ts#L15)

Union of all known news type values.

## Variables

### NewsType

> `const` **NewsType**: `object`

Defined in: [types/news.ts:15](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/news.ts#L15)

Valid news type values for the news endpoint.

#### Type Declaration

##### CRYPTO

> `readonly` **CRYPTO**: `5` = `5`

##### ETF

> `readonly` **ETF**: `4` = `4`

##### MARKET\_BY\_SOURCE

> `readonly` **MARKET\_BY\_SOURCE**: `2` = `2`

##### MARKET\_BY\_TIME

> `readonly` **MARKET\_BY\_TIME**: `1` = `1`

##### STOCK

> `readonly` **STOCK**: `3` = `3`
