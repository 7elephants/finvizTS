[**finvizts**](../README.md)

***

[finvizts](../README.md) / types/performance

# types/performance

## Interfaces

### PerformanceItem

Defined in: [types/performance.ts:52](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/performance.ts#L52)

A single futures, forex or crypto performance row. Performance values are percentages.
`FuturesItem`/`ForexItem`/`CryptoItem` alias this.

#### Properties

##### name

> **name**: `string`

Defined in: [types/performance.ts:54](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/performance.ts#L54)

##### perf1Hour

> **perf1Hour**: `number`

Defined in: [types/performance.ts:57](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/performance.ts#L57)

##### perf5Min

> **perf5Min**: `number`

Defined in: [types/performance.ts:56](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/performance.ts#L56)

##### perfDay

> **perfDay**: `number`

Defined in: [types/performance.ts:58](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/performance.ts#L58)

##### perfHalfYear

> **perfHalfYear**: `number`

Defined in: [types/performance.ts:63](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/performance.ts#L63)

##### perfMonth

> **perfMonth**: `number`

Defined in: [types/performance.ts:60](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/performance.ts#L60)

##### perfMonthToDate

> **perfMonthToDate**: `number`

Defined in: [types/performance.ts:61](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/performance.ts#L61)

##### perfQuarter

> **perfQuarter**: `number`

Defined in: [types/performance.ts:62](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/performance.ts#L62)

##### perfWeek

> **perfWeek**: `number`

Defined in: [types/performance.ts:59](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/performance.ts#L59)

##### perfYear

> **perfYear**: `number`

Defined in: [types/performance.ts:65](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/performance.ts#L65)

##### perfYearToDate

> **perfYearToDate**: `number`

Defined in: [types/performance.ts:64](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/performance.ts#L64)

##### price

> **price**: `number`

Defined in: [types/performance.ts:55](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/performance.ts#L55)

##### ticker

> **ticker**: `string`

Defined in: [types/performance.ts:53](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/performance.ts#L53)

***

### PerformanceOptions

Defined in: [types/performance.ts:41](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/performance.ts#L41)

Options shared by the futures, forex and crypto performance endpoints (same request and
response shape). `FuturesOptions`/`ForexOptions`/`CryptoOptions` alias this.

#### Extended by

- [`CryptoOptions`](crypto.md#cryptooptions)

#### Properties

##### order?

> `optional` **order?**: [`PerformanceOrderType`](#performanceordertype)

Defined in: [types/performance.ts:43](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/performance.ts#L43)

Column to sort by. Finviz defaults to day performance, best first.

##### orderDirection?

> `optional` **orderDirection?**: [`SortDirection`](../types.md#sortdirection)

Defined in: [types/performance.ts:45](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/performance.ts#L45)

Sort direction (either '' or '-').

## Type Aliases

### PerformanceOrderType

> **PerformanceOrderType** = *typeof* [`PerformanceOrderType`](#performanceordertype-1)\[keyof *typeof* [`PerformanceOrderType`](#performanceordertype-1)\]

Defined in: [types/performance.ts:20](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/performance.ts#L20)

Valid sort columns for the futures, forex and crypto performance endpoints.

## Variables

### PerformanceOrderType

> `const` **PerformanceOrderType**: `object`

Defined in: [types/performance.ts:20](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/performance.ts#L20)

Valid sort columns for the futures, forex and crypto performance endpoints.

#### Type Declaration

##### NAME

> `readonly` **NAME**: `"name"` = `'name'`

##### PERF\_5\_MIN

> `readonly` **PERF\_5\_MIN**: `"perf5minPct"` = `'perf5minPct'`

##### PERF\_DAY

> `readonly` **PERF\_DAY**: `"perfDayPct"` = `'perfDayPct'`

##### PERF\_HALF\_YEAR

> `readonly` **PERF\_HALF\_YEAR**: `"perfHalfYearPct"` = `'perfHalfYearPct'`

##### PERF\_HOUR

> `readonly` **PERF\_HOUR**: `"perfHourPct"` = `'perfHourPct'`

##### PERF\_MONTH

> `readonly` **PERF\_MONTH**: `"perfMonthPct"` = `'perfMonthPct'`

##### PERF\_MONTH\_TO\_DATE

> `readonly` **PERF\_MONTH\_TO\_DATE**: `"perfMtdPct"` = `'perfMtdPct'`

##### PERF\_QUARTER

> `readonly` **PERF\_QUARTER**: `"perfQuarterPct"` = `'perfQuarterPct'`

##### PERF\_WEEK

> `readonly` **PERF\_WEEK**: `"perfWeekPct"` = `'perfWeekPct'`

##### PERF\_YEAR

> `readonly` **PERF\_YEAR**: `"perfYearPct"` = `'perfYearPct'`

##### PERF\_YEAR\_TO\_DATE

> `readonly` **PERF\_YEAR\_TO\_DATE**: `"perfYtdPct"` = `'perfYtdPct'`

##### PRICE

> `readonly` **PRICE**: `"last"` = `'last'`

##### TICKER

> `readonly` **TICKER**: `"ticker"` = `'ticker'`
