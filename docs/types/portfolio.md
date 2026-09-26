[**finvizts**](../README.md)

***

[finvizts](../README.md) / types/portfolio

# types/portfolio

## Interfaces

### PortfolioOptions

Defined in: [types/portfolio.ts:16](https://github.com/7elephants/finvizTS/blob/d23addfae925d6c740f235b944360447f6cbc93c/src/types/portfolio.ts#L16)

Options for a portfolio request.

#### Properties

##### fields?

> `optional` **fields?**: `number`[]

Defined in: [types/portfolio.ts:22](https://github.com/7elephants/finvizTS/blob/d23addfae925d6c740f235b944360447f6cbc93c/src/types/portfolio.ts#L22)

Column indices to include (comma-separated list maps to the `c` query param).

##### order?

> `optional` **order?**: [`PortfolioOrder`](#portfolioorder)

Defined in: [types/portfolio.ts:18](https://github.com/7elephants/finvizTS/blob/d23addfae925d6c740f235b944360447f6cbc93c/src/types/portfolio.ts#L18)

Column to sort by.

##### orderDirection?

> `optional` **orderDirection?**: [`SortDirection`](../types.md#sortdirection)

Defined in: [types/portfolio.ts:20](https://github.com/7elephants/finvizTS/blob/d23addfae925d6c740f235b944360447f6cbc93c/src/types/portfolio.ts#L20)

Sort direction (either '' or '-').

## Type Aliases

### Portfolio

> **Portfolio** = `Record`\<`string`, `string`\>

Defined in: [types/portfolio.ts:58](https://github.com/7elephants/finvizTS/blob/d23addfae925d6c740f235b944360447f6cbc93c/src/types/portfolio.ts#L58)

A single row returned by the portfolio endpoint.

***

### PortfolioField

> **PortfolioField** = *typeof* [`PortfolioField`](#portfoliofield-1)\[keyof *typeof* [`PortfolioField`](#portfoliofield-1)\]

Defined in: [types/portfolio.ts:26](https://github.com/7elephants/finvizTS/blob/d23addfae925d6c740f235b944360447f6cbc93c/src/types/portfolio.ts#L26)

Union of all known portfolio field ID values.

***

### PortfolioOrder

> **PortfolioOrder** = *typeof* [`PortfolioOrder`](#portfolioorder-1)\[keyof *typeof* [`PortfolioOrder`](#portfolioorder-1)\]

Defined in: [types/portfolio.ts:46](https://github.com/7elephants/finvizTS/blob/d23addfae925d6c740f235b944360447f6cbc93c/src/types/portfolio.ts#L46)

Union of all known portfolio order values.

## Variables

### PortfolioField

> `const` **PortfolioField**: `object`

Defined in: [types/portfolio.ts:26](https://github.com/7elephants/finvizTS/blob/d23addfae925d6c740f235b944360447f6cbc93c/src/types/portfolio.ts#L26)

All documented portfolio field IDs for the `c` query parameter.

#### Type Declaration

##### CHANGE

> `readonly` **CHANGE**: `12` = `12`

##### CHANGE\_PERCENT

> `readonly` **CHANGE\_PERCENT**: `3` = `3`

##### COMPANY

> `readonly` **COMPANY**: `1` = `1`

##### COST

> `readonly` **COST**: `8` = `8`

##### DATE

> `readonly` **DATE**: `6` = `6`

##### GAIN

> `readonly` **GAIN**: `10` = `10`

##### GAIN\_PERCENT

> `readonly` **GAIN\_PERCENT**: `11` = `11`

##### MARKET\_VALUE

> `readonly` **MARKET\_VALUE**: `9` = `9`

##### PRICE

> `readonly` **PRICE**: `2` = `2`

##### SHARES

> `readonly` **SHARES**: `7` = `7`

##### TICKER

> `readonly` **TICKER**: `0` = `0`

##### TRANSACTION

> `readonly` **TRANSACTION**: `5` = `5`

##### VOLUME

> `readonly` **VOLUME**: `4` = `4`

***

### PortfolioOrder

> `const` **PortfolioOrder**: `object`

Defined in: [types/portfolio.ts:46](https://github.com/7elephants/finvizTS/blob/d23addfae925d6c740f235b944360447f6cbc93c/src/types/portfolio.ts#L46)

All documented portfolio sort column values for the `o` query parameter.

#### Type Declaration

##### CHANGE\_PERCENT

> `readonly` **CHANGE\_PERCENT**: `"changepct"` = `'changepct'`

##### COMPANY

> `readonly` **COMPANY**: `"company"` = `'company'`

##### PRICE

> `readonly` **PRICE**: `"price"` = `'price'`

##### TICKER

> `readonly` **TICKER**: `"ticker"` = `'ticker'`

##### VOLUME

> `readonly` **VOLUME**: `"volume"` = `'volume'`
