[**finvizts**](../README.md)

***

[finvizts](../README.md) / types/fund-manager

# types/fund-manager

## Interfaces

### ManagerFundItem

Defined in: [types/fund-manager.ts:51](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/fund-manager.ts#L51)

A single fund or fund-manager portfolio row (the same underlying Finviz resource, queried by
fund name vs. manager name). `FundItem`/`ManagerItem` alias this.

#### Properties

##### added

> **added**: `number`

Defined in: [types/fund-manager.ts:60](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/fund-manager.ts#L60)

##### id

> **id**: `string`

Defined in: [types/fund-manager.ts:54](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/fund-manager.ts#L54)

##### manager

> **manager**: `string`

Defined in: [types/fund-manager.ts:53](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/fund-manager.ts#L53)

##### name

> **name**: `string`

Defined in: [types/fund-manager.ts:52](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/fund-manager.ts#L52)

##### newPurchases

> **newPurchases**: `number`

Defined in: [types/fund-manager.ts:58](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/fund-manager.ts#L58)

##### numInvestments

> **numInvestments**: `number`

Defined in: [types/fund-manager.ts:57](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/fund-manager.ts#L57)

##### portfolioValue

> **portfolioValue**: `number`

Defined in: [types/fund-manager.ts:56](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/fund-manager.ts#L56)

##### reduced

> **reduced**: `number`

Defined in: [types/fund-manager.ts:61](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/fund-manager.ts#L61)

##### reportDate

> **reportDate**: `Date`

Defined in: [types/fund-manager.ts:55](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/fund-manager.ts#L55)

##### soldOut

> **soldOut**: `number`

Defined in: [types/fund-manager.ts:59](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/fund-manager.ts#L59)

##### timeHeldAll

> **timeHeldAll**: `number`

Defined in: [types/fund-manager.ts:65](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/fund-manager.ts#L65)

##### timeHeldTopTen

> **timeHeldTopTen**: `number`

Defined in: [types/fund-manager.ts:64](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/fund-manager.ts#L64)

##### top10ConcentrationPct

> **top10ConcentrationPct**: `number`

Defined in: [types/fund-manager.ts:62](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/fund-manager.ts#L62)

##### turnOverPct

> **turnOverPct**: `number`

Defined in: [types/fund-manager.ts:63](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/fund-manager.ts#L63)

***

### ManagerFundOptions

Defined in: [types/fund-manager.ts:38](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/fund-manager.ts#L38)

Options shared by the funds and fund-managers endpoints (the same underlying Finviz
resource, queried by fund name vs. manager name). `FundOptions`/`ManagerOptions` alias this.

#### Properties

##### order?

> `optional` **order?**: [`ManagerFundOrderType`](#managerfundordertype)

Defined in: [types/fund-manager.ts:42](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/fund-manager.ts#L42)

Column to sort by.

##### orderDirection?

> `optional` **orderDirection?**: [`SortDirection`](../types.md#sortdirection)

Defined in: [types/fund-manager.ts:44](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/fund-manager.ts#L44)

Sort direction (either '' or '-').

##### search?

> `optional` **search?**: `string`

Defined in: [types/fund-manager.ts:40](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/fund-manager.ts#L40)

Search term to filter by fund or manager name.

## Type Aliases

### ManagerFundOrderType

> **ManagerFundOrderType** = *typeof* [`ManagerFundOrderType`](#managerfundordertype-1)\[keyof *typeof* [`ManagerFundOrderType`](#managerfundordertype-1)\]

Defined in: [types/fund-manager.ts:19](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/fund-manager.ts#L19)

Valid sort columns for the funds and fund-managers endpoints.

## Variables

### ManagerFundOrderType

> `const` **ManagerFundOrderType**: `object`

Defined in: [types/fund-manager.ts:19](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/fund-manager.ts#L19)

Valid sort columns for the funds and fund-managers endpoints.

#### Type Declaration

##### ADDED

> `readonly` **ADDED**: `"added"` = `'added'`

##### INVESTMENTS

> `readonly` **INVESTMENTS**: `"num_investments"` = `'num_investments'`

##### MOST\_POPULAR

> `readonly` **MOST\_POPULAR**: `"most_popular"` = `'most_popular'`

##### PORTFOLIO\_VALUE

> `readonly` **PORTFOLIO\_VALUE**: `"portfolio_value"` = `'portfolio_value'`

##### PURCHASED

> `readonly` **PURCHASED**: `"new_purchased"` = `'new_purchased'`

##### REDUCED

> `readonly` **REDUCED**: `"reduced"` = `'reduced'`

##### SOLD

> `readonly` **SOLD**: `"sold_out"` = `'sold_out'`

##### TIME\_HELD\_ALL

> `readonly` **TIME\_HELD\_ALL**: `"time_held_all"` = `'time_held_all'`

##### TIME\_HELD\_TOP\_TEN

> `readonly` **TIME\_HELD\_TOP\_TEN**: `"time_held_top10"` = `'time_held_top10'`

##### TOP\_TEN\_CONCENTRATION

> `readonly` **TOP\_TEN\_CONCENTRATION**: `"top_ten_concentration"` = `'top_ten_concentration'`

##### TURNOVER

> `readonly` **TURNOVER**: `"turnover"` = `'turnover'`
