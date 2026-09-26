[**finvizts**](../README.md)

***

[finvizts](../README.md) / types/forex

# types/forex

## Interfaces

### ForexOptions

Defined in: [types/forex.ts:45](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/forex.ts#L45)

Options for a forex performance request.

#### Properties

##### order?

> `optional` **order?**: [`PerformanceOrderType`](performance.md#performanceordertype) \| [`ForexPipsOrderType`](#forexpipsordertype)

Defined in: [types/forex.ts:49](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/forex.ts#L49)

Column to sort by (use `ForexPipsOrderType` performance columns with `unit: 'pips'`).

##### orderDirection?

> `optional` **orderDirection?**: [`SortDirection`](../types.md#sortdirection)

Defined in: [types/forex.ts:51](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/forex.ts#L51)

Sort direction (either '' or '-').

##### unit?

> `optional` **unit?**: [`ForexUnit`](#forexunit)

Defined in: [types/forex.ts:47](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/forex.ts#L47)

Performance unit; percent by default. Sort columns must match the unit.

## Type Aliases

### ForexItem

> **ForexItem** = [`PerformanceItem`](performance.md#performanceitem)

Defined in: [types/forex.ts:55](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/forex.ts#L55)

A single forex performance row returned by the forex endpoint.

***

### ForexPipsOrderType

> **ForexPipsOrderType** = *typeof* [`ForexPipsOrderType`](#forexpipsordertype-1)\[keyof *typeof* [`ForexPipsOrderType`](#forexpipsordertype-1)\]

Defined in: [types/forex.ts:30](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/forex.ts#L30)

Performance sort columns valid when `unit` is `pips`. Finviz requires the sort column to
match the unit, so these replace the `Pct` performance columns (ticker, name and price
sort keys are shared with `PerformanceOrderType`).

***

### ForexUnit

> **ForexUnit** = *typeof* [`ForexUnit`](#forexunit-1)\[keyof *typeof* [`ForexUnit`](#forexunit-1)\]

Defined in: [types/forex.ts:19](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/forex.ts#L19)

Valid `unit` values for the forex endpoint.

## Variables

### ForexPipsOrderType

> `const` **ForexPipsOrderType**: `object`

Defined in: [types/forex.ts:30](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/forex.ts#L30)

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

Defined in: [types/forex.ts:19](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/types/forex.ts#L19)

Valid `unit` values for the forex endpoint.

#### Type Declaration

##### PERCENT

> `readonly` **PERCENT**: `"pct"` = `'pct'`

##### PIPS

> `readonly` **PIPS**: `"pips"` = `'pips'`
