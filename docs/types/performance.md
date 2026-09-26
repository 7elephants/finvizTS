[**finvizts**](../README.md)

***

[finvizts](../README.md) / types/performance

# types/performance

## Interfaces

### PerformanceItem

Defined in: [types/performance.ts:53](https://github.com/7elephants/finvizTS/blob/80a71835161ee929f23b53123ed4d2d457750e80/src/types/performance.ts#L53)

A single futures, forex or crypto performance row. Performance values are percentages
(pips for forex requested with `unit: 'pips'`). Blank CSV cells (e.g. newly listed crypto with
no long-range history) are `undefined`. `FuturesItem`/`ForexItem`/`CryptoItem` alias this.

#### Properties

##### name

> **name**: `string` \| `undefined`

Defined in: [types/performance.ts:57](https://github.com/7elephants/finvizTS/blob/80a71835161ee929f23b53123ed4d2d457750e80/src/types/performance.ts#L57)

Instrument name.

##### perf1Hour

> **perf1Hour**: `number` \| `undefined`

Defined in: [types/performance.ts:63](https://github.com/7elephants/finvizTS/blob/80a71835161ee929f23b53123ed4d2d457750e80/src/types/performance.ts#L63)

Performance over the last hour.

##### perf5Min

> **perf5Min**: `number` \| `undefined`

Defined in: [types/performance.ts:61](https://github.com/7elephants/finvizTS/blob/80a71835161ee929f23b53123ed4d2d457750e80/src/types/performance.ts#L61)

Performance over the last 5 minutes.

##### perfDay

> **perfDay**: `number` \| `undefined`

Defined in: [types/performance.ts:65](https://github.com/7elephants/finvizTS/blob/80a71835161ee929f23b53123ed4d2d457750e80/src/types/performance.ts#L65)

Performance over the day.

##### perfHalfYear

> **perfHalfYear**: `number` \| `undefined`

Defined in: [types/performance.ts:75](https://github.com/7elephants/finvizTS/blob/80a71835161ee929f23b53123ed4d2d457750e80/src/types/performance.ts#L75)

Performance over the half year.

##### perfMonth

> **perfMonth**: `number` \| `undefined`

Defined in: [types/performance.ts:69](https://github.com/7elephants/finvizTS/blob/80a71835161ee929f23b53123ed4d2d457750e80/src/types/performance.ts#L69)

Performance over the month.

##### perfMonthToDate

> **perfMonthToDate**: `number` \| `undefined`

Defined in: [types/performance.ts:71](https://github.com/7elephants/finvizTS/blob/80a71835161ee929f23b53123ed4d2d457750e80/src/types/performance.ts#L71)

Performance month to date.

##### perfQuarter

> **perfQuarter**: `number` \| `undefined`

Defined in: [types/performance.ts:73](https://github.com/7elephants/finvizTS/blob/80a71835161ee929f23b53123ed4d2d457750e80/src/types/performance.ts#L73)

Performance over the quarter.

##### perfWeek

> **perfWeek**: `number` \| `undefined`

Defined in: [types/performance.ts:67](https://github.com/7elephants/finvizTS/blob/80a71835161ee929f23b53123ed4d2d457750e80/src/types/performance.ts#L67)

Performance over the week.

##### perfYear

> **perfYear**: `number` \| `undefined`

Defined in: [types/performance.ts:79](https://github.com/7elephants/finvizTS/blob/80a71835161ee929f23b53123ed4d2d457750e80/src/types/performance.ts#L79)

Performance over the year.

##### perfYearToDate

> **perfYearToDate**: `number` \| `undefined`

Defined in: [types/performance.ts:77](https://github.com/7elephants/finvizTS/blob/80a71835161ee929f23b53123ed4d2d457750e80/src/types/performance.ts#L77)

Performance year to date.

##### price

> **price**: `number` \| `undefined`

Defined in: [types/performance.ts:59](https://github.com/7elephants/finvizTS/blob/80a71835161ee929f23b53123ed4d2d457750e80/src/types/performance.ts#L59)

Last price.

##### ticker

> **ticker**: `string` \| `undefined`

Defined in: [types/performance.ts:55](https://github.com/7elephants/finvizTS/blob/80a71835161ee929f23b53123ed4d2d457750e80/src/types/performance.ts#L55)

Instrument ticker, e.g. `@GC` (futures/crypto) or `EUR/USD` (forex).

***

### PerformanceOptions

Defined in: [types/performance.ts:41](https://github.com/7elephants/finvizTS/blob/80a71835161ee929f23b53123ed4d2d457750e80/src/types/performance.ts#L41)

Options shared by the futures, forex and crypto performance endpoints (same request and
response shape). `FuturesOptions`/`ForexOptions`/`CryptoOptions` alias this.

#### Extended by

- [`CryptoOptions`](crypto.md#cryptooptions)

#### Properties

##### order?

> `optional` **order?**: [`PerformanceOrderType`](#performanceordertype)

Defined in: [types/performance.ts:43](https://github.com/7elephants/finvizTS/blob/80a71835161ee929f23b53123ed4d2d457750e80/src/types/performance.ts#L43)

Column to sort by. Finviz defaults to day performance, best first.

##### orderDirection?

> `optional` **orderDirection?**: [`SortDirection`](../types.md#sortdirection)

Defined in: [types/performance.ts:45](https://github.com/7elephants/finvizTS/blob/80a71835161ee929f23b53123ed4d2d457750e80/src/types/performance.ts#L45)

Sort direction (either '' or '-').

## Type Aliases

### PerformanceOrderType

> **PerformanceOrderType** = *typeof* [`PerformanceOrderType`](#performanceordertype-1)\[keyof *typeof* [`PerformanceOrderType`](#performanceordertype-1)\]

Defined in: [types/performance.ts:20](https://github.com/7elephants/finvizTS/blob/80a71835161ee929f23b53123ed4d2d457750e80/src/types/performance.ts#L20)

Valid sort columns for the futures, forex and crypto performance endpoints.

## Variables

### PerformanceOrderType

> `const` **PerformanceOrderType**: `object`

Defined in: [types/performance.ts:20](https://github.com/7elephants/finvizTS/blob/80a71835161ee929f23b53123ed4d2d457750e80/src/types/performance.ts#L20)

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
