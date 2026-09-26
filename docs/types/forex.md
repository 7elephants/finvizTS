[**finvizts**](../README.md)

***

[finvizts](../README.md) / types/forex

# types/forex

## Interfaces

### ForexPercentOptions

Defined in: [types/forex.ts:49](https://github.com/7elephants/finvizTS/blob/80a71835161ee929f23b53123ed4d2d457750e80/src/types/forex.ts#L49)

Forex request options in percent (the default unit).

#### Properties

##### order?

> `optional` **order?**: [`PerformanceOrderType`](performance.md#performanceordertype)

Defined in: [types/forex.ts:53](https://github.com/7elephants/finvizTS/blob/80a71835161ee929f23b53123ed4d2d457750e80/src/types/forex.ts#L53)

Column to sort by.

##### orderDirection?

> `optional` **orderDirection?**: [`SortDirection`](../types.md#sortdirection)

Defined in: [types/forex.ts:55](https://github.com/7elephants/finvizTS/blob/80a71835161ee929f23b53123ed4d2d457750e80/src/types/forex.ts#L55)

Sort direction (either '' or '-').

##### unit?

> `optional` **unit?**: `"pct"`

Defined in: [types/forex.ts:51](https://github.com/7elephants/finvizTS/blob/80a71835161ee929f23b53123ed4d2d457750e80/src/types/forex.ts#L51)

Performance unit; percent by default.

***

### ForexPipsOptions

Defined in: [types/forex.ts:59](https://github.com/7elephants/finvizTS/blob/80a71835161ee929f23b53123ed4d2d457750e80/src/types/forex.ts#L59)

Forex request options in pips. Finviz requires the sort column to match the unit.

#### Properties

##### order?

> `optional` **order?**: [`ForexPipsOrderType`](#forexpipsordertype) \| [`ForexSharedOrderType`](#forexsharedordertype)

Defined in: [types/forex.ts:63](https://github.com/7elephants/finvizTS/blob/80a71835161ee929f23b53123ed4d2d457750e80/src/types/forex.ts#L63)

Column to sort by; performance columns must be the `Pips` variants.

##### orderDirection?

> `optional` **orderDirection?**: [`SortDirection`](../types.md#sortdirection)

Defined in: [types/forex.ts:65](https://github.com/7elephants/finvizTS/blob/80a71835161ee929f23b53123ed4d2d457750e80/src/types/forex.ts#L65)

Sort direction (either '' or '-').

##### unit

> **unit**: `"pips"`

Defined in: [types/forex.ts:61](https://github.com/7elephants/finvizTS/blob/80a71835161ee929f23b53123ed4d2d457750e80/src/types/forex.ts#L61)

Performance unit.

## Type Aliases

### ForexItem

> **ForexItem** = [`PerformanceItem`](performance.md#performanceitem)

Defined in: [types/forex.ts:78](https://github.com/7elephants/finvizTS/blob/80a71835161ee929f23b53123ed4d2d457750e80/src/types/forex.ts#L78)

A single forex performance row returned by the forex endpoint. Performance values are in
pips when the request used `unit: 'pips'`, otherwise percent.

***

### ForexOptions

> **ForexOptions** = [`ForexPercentOptions`](#forexpercentoptions) \| [`ForexPipsOptions`](#forexpipsoptions)

Defined in: [types/forex.ts:72](https://github.com/7elephants/finvizTS/blob/80a71835161ee929f23b53123ed4d2d457750e80/src/types/forex.ts#L72)

Options for a forex performance request. A discriminated union on `unit`, so a sort column
that doesn't match the unit (e.g. `perfWeekPips` with percent) is a compile-time error.

***

### ForexPipsOrderType

> **ForexPipsOrderType** = *typeof* [`ForexPipsOrderType`](#forexpipsordertype-1)\[keyof *typeof* [`ForexPipsOrderType`](#forexpipsordertype-1)\]

Defined in: [types/forex.ts:31](https://github.com/7elephants/finvizTS/blob/80a71835161ee929f23b53123ed4d2d457750e80/src/types/forex.ts#L31)

Performance sort columns valid when `unit` is `pips`. Finviz requires the sort column to
match the unit, so these replace the `Pct` performance columns (ticker, name and price
sort keys are shared with `PerformanceOrderType`).

***

### ForexSharedOrderType

> **ForexSharedOrderType** = `Extract`\<[`PerformanceOrderType`](performance.md#performanceordertype), `"ticker"` \| `"name"` \| `"last"`\>

Defined in: [types/forex.ts:46](https://github.com/7elephants/finvizTS/blob/80a71835161ee929f23b53123ed4d2d457750e80/src/types/forex.ts#L46)

Non-performance sort columns, valid with either unit.

***

### ForexUnit

> **ForexUnit** = *typeof* [`ForexUnit`](#forexunit-1)\[keyof *typeof* [`ForexUnit`](#forexunit-1)\]

Defined in: [types/forex.ts:20](https://github.com/7elephants/finvizTS/blob/80a71835161ee929f23b53123ed4d2d457750e80/src/types/forex.ts#L20)

Valid `unit` values for the forex endpoint.

## Variables

### ForexPipsOrderType

> `const` **ForexPipsOrderType**: `object`

Defined in: [types/forex.ts:31](https://github.com/7elephants/finvizTS/blob/80a71835161ee929f23b53123ed4d2d457750e80/src/types/forex.ts#L31)

Performance sort columns valid when `unit` is `pips`. Finviz requires the sort column to
match the unit, so these replace the `Pct` performance columns (ticker, name and price
sort keys are shared with `PerformanceOrderType`).

#### Type Declaration

##### PERF\_5\_MIN

> `readonly` **PERF\_5\_MIN**: `"perf5minPips"` = `'perf5minPips'`

##### PERF\_DAY

> `readonly` **PERF\_DAY**: `"perfDayPips"` = `'perfDayPips'`

##### PERF\_HALF\_YEAR

> `readonly` **PERF\_HALF\_YEAR**: `"perfHalfYearPips"` = `'perfHalfYearPips'`

##### PERF\_HOUR

> `readonly` **PERF\_HOUR**: `"perfHourPips"` = `'perfHourPips'`

##### PERF\_MONTH

> `readonly` **PERF\_MONTH**: `"perfMonthPips"` = `'perfMonthPips'`

##### PERF\_MONTH\_TO\_DATE

> `readonly` **PERF\_MONTH\_TO\_DATE**: `"perfMtdPips"` = `'perfMtdPips'`

##### PERF\_QUARTER

> `readonly` **PERF\_QUARTER**: `"perfQuarterPips"` = `'perfQuarterPips'`

##### PERF\_WEEK

> `readonly` **PERF\_WEEK**: `"perfWeekPips"` = `'perfWeekPips'`

##### PERF\_YEAR

> `readonly` **PERF\_YEAR**: `"perfYearPips"` = `'perfYearPips'`

##### PERF\_YEAR\_TO\_DATE

> `readonly` **PERF\_YEAR\_TO\_DATE**: `"perfYtdPips"` = `'perfYtdPips'`

***

### ForexUnit

> `const` **ForexUnit**: `object`

Defined in: [types/forex.ts:20](https://github.com/7elephants/finvizTS/blob/80a71835161ee929f23b53123ed4d2d457750e80/src/types/forex.ts#L20)

Valid `unit` values for the forex endpoint.

#### Type Declaration

##### PERCENT

> `readonly` **PERCENT**: `"pct"` = `'pct'`

##### PIPS

> `readonly` **PIPS**: `"pips"` = `'pips'`
