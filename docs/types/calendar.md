[**finvizts**](../README.md)

***

[finvizts](../README.md) / types/calendar

# types/calendar

## Interfaces

### CalendarOptions

Defined in: [types/calendar.ts:21](https://github.com/7elephants/finvizTS/blob/6242356247f7ebbf9c10bd8055a6c731e06416ac/src/types/calendar.ts#L21)

Options for an economic calendar request.

#### Properties

##### from

> **from**: `Date`

Defined in: [types/calendar.ts:23](https://github.com/7elephants/finvizTS/blob/6242356247f7ebbf9c10bd8055a6c731e06416ac/src/types/calendar.ts#L23)

Start date of the range to fetch events for.

##### to?

> `optional` **to?**: `Date`

Defined in: [types/calendar.ts:25](https://github.com/7elephants/finvizTS/blob/6242356247f7ebbf9c10bd8055a6c731e06416ac/src/types/calendar.ts#L25)

Optional end date of the range to fetch events for.

***

### DividendsCalendarItem

Defined in: [types/calendar.ts:89](https://github.com/7elephants/finvizTS/blob/6242356247f7ebbf9c10bd8055a6c731e06416ac/src/types/calendar.ts#L89)

A single row returned by the dividends calendar endpoint. Fields are `undefined` when the API returns no value.

#### Properties

##### amount

> **amount**: `number` \| `undefined`

Defined in: [types/calendar.ts:93](https://github.com/7elephants/finvizTS/blob/6242356247f7ebbf9c10bd8055a6c731e06416ac/src/types/calendar.ts#L93)

##### company

> **company**: `string` \| `undefined`

Defined in: [types/calendar.ts:91](https://github.com/7elephants/finvizTS/blob/6242356247f7ebbf9c10bd8055a6c731e06416ac/src/types/calendar.ts#L91)

##### dividendEstYield

> **dividendEstYield**: `number` \| `undefined`

Defined in: [types/calendar.ts:95](https://github.com/7elephants/finvizTS/blob/6242356247f7ebbf9c10bd8055a6c731e06416ac/src/types/calendar.ts#L95)

##### exDate

> **exDate**: `Date` \| `undefined`

Defined in: [types/calendar.ts:92](https://github.com/7elephants/finvizTS/blob/6242356247f7ebbf9c10bd8055a6c731e06416ac/src/types/calendar.ts#L92)

##### special

> **special**: `number` \| `undefined`

Defined in: [types/calendar.ts:94](https://github.com/7elephants/finvizTS/blob/6242356247f7ebbf9c10bd8055a6c731e06416ac/src/types/calendar.ts#L94)

##### ticker

> **ticker**: `string` \| `undefined`

Defined in: [types/calendar.ts:90](https://github.com/7elephants/finvizTS/blob/6242356247f7ebbf9c10bd8055a6c731e06416ac/src/types/calendar.ts#L90)

***

### DividendsCalendarOptions

Defined in: [types/calendar.ts:81](https://github.com/7elephants/finvizTS/blob/6242356247f7ebbf9c10bd8055a6c731e06416ac/src/types/calendar.ts#L81)

Options for a dividends calendar request.

#### Properties

##### from

> **from**: `Date`

Defined in: [types/calendar.ts:83](https://github.com/7elephants/finvizTS/blob/6242356247f7ebbf9c10bd8055a6c731e06416ac/src/types/calendar.ts#L83)

Start date of the range to fetch dividends for (required).

##### to?

> `optional` **to?**: `Date`

Defined in: [types/calendar.ts:85](https://github.com/7elephants/finvizTS/blob/6242356247f7ebbf9c10bd8055a6c731e06416ac/src/types/calendar.ts#L85)

Optional end date of the range to fetch dividends for (max 90 days from `from`).

***

### EarningsCalendarItem

Defined in: [types/calendar.ts:63](https://github.com/7elephants/finvizTS/blob/6242356247f7ebbf9c10bd8055a6c731e06416ac/src/types/calendar.ts#L63)

A single row returned by the earnings calendar endpoint. Fields are `undefined` when the API returns no value.

#### Properties

##### company

> **company**: `string` \| `undefined`

Defined in: [types/calendar.ts:66](https://github.com/7elephants/finvizTS/blob/6242356247f7ebbf9c10bd8055a6c731e06416ac/src/types/calendar.ts#L66)

##### date

> **date**: `Date` \| `undefined`

Defined in: [types/calendar.ts:64](https://github.com/7elephants/finvizTS/blob/6242356247f7ebbf9c10bd8055a6c731e06416ac/src/types/calendar.ts#L64)

##### epsActual

> **epsActual**: `number` \| `undefined`

Defined in: [types/calendar.ts:69](https://github.com/7elephants/finvizTS/blob/6242356247f7ebbf9c10bd8055a6c731e06416ac/src/types/calendar.ts#L69)

##### epsEstimate

> **epsEstimate**: `number` \| `undefined`

Defined in: [types/calendar.ts:68](https://github.com/7elephants/finvizTS/blob/6242356247f7ebbf9c10bd8055a6c731e06416ac/src/types/calendar.ts#L68)

##### epsGaapActual

> **epsGaapActual**: `number` \| `undefined`

Defined in: [types/calendar.ts:72](https://github.com/7elephants/finvizTS/blob/6242356247f7ebbf9c10bd8055a6c731e06416ac/src/types/calendar.ts#L72)

##### epsGaapEstimate

> **epsGaapEstimate**: `number` \| `undefined`

Defined in: [types/calendar.ts:71](https://github.com/7elephants/finvizTS/blob/6242356247f7ebbf9c10bd8055a6c731e06416ac/src/types/calendar.ts#L71)

##### epsGaapSurprise

> **epsGaapSurprise**: `number` \| `undefined`

Defined in: [types/calendar.ts:73](https://github.com/7elephants/finvizTS/blob/6242356247f7ebbf9c10bd8055a6c731e06416ac/src/types/calendar.ts#L73)

##### epsSurprise

> **epsSurprise**: `number` \| `undefined`

Defined in: [types/calendar.ts:70](https://github.com/7elephants/finvizTS/blob/6242356247f7ebbf9c10bd8055a6c731e06416ac/src/types/calendar.ts#L70)

##### marketCap

> **marketCap**: `number` \| `undefined`

Defined in: [types/calendar.ts:67](https://github.com/7elephants/finvizTS/blob/6242356247f7ebbf9c10bd8055a6c731e06416ac/src/types/calendar.ts#L67)

##### oneDayPriceReaction

> **oneDayPriceReaction**: `number` \| `undefined`

Defined in: [types/calendar.ts:77](https://github.com/7elephants/finvizTS/blob/6242356247f7ebbf9c10bd8055a6c731e06416ac/src/types/calendar.ts#L77)

##### revenueActual

> **revenueActual**: `number` \| `undefined`

Defined in: [types/calendar.ts:75](https://github.com/7elephants/finvizTS/blob/6242356247f7ebbf9c10bd8055a6c731e06416ac/src/types/calendar.ts#L75)

##### revenueEstimate

> **revenueEstimate**: `number` \| `undefined`

Defined in: [types/calendar.ts:74](https://github.com/7elephants/finvizTS/blob/6242356247f7ebbf9c10bd8055a6c731e06416ac/src/types/calendar.ts#L74)

##### revenueSurprise

> **revenueSurprise**: `number` \| `undefined`

Defined in: [types/calendar.ts:76](https://github.com/7elephants/finvizTS/blob/6242356247f7ebbf9c10bd8055a6c731e06416ac/src/types/calendar.ts#L76)

##### ticker

> **ticker**: `string` \| `undefined`

Defined in: [types/calendar.ts:65](https://github.com/7elephants/finvizTS/blob/6242356247f7ebbf9c10bd8055a6c731e06416ac/src/types/calendar.ts#L65)

***

### EarningsCalendarOptions

Defined in: [types/calendar.ts:51](https://github.com/7elephants/finvizTS/blob/6242356247f7ebbf9c10bd8055a6c731e06416ac/src/types/calendar.ts#L51)

Options for an earnings calendar request.

#### Properties

##### from

> **from**: `Date`

Defined in: [types/calendar.ts:53](https://github.com/7elephants/finvizTS/blob/6242356247f7ebbf9c10bd8055a6c731e06416ac/src/types/calendar.ts#L53)

Start date of the range to fetch earnings for (required).

##### order?

> `optional` **order?**: [`EarningsOrderType`](#earningsordertype)

Defined in: [types/calendar.ts:57](https://github.com/7elephants/finvizTS/blob/6242356247f7ebbf9c10bd8055a6c731e06416ac/src/types/calendar.ts#L57)

Column to sort by.

##### orderDirection?

> `optional` **orderDirection?**: [`SortDirection`](../types.md#sortdirection)

Defined in: [types/calendar.ts:59](https://github.com/7elephants/finvizTS/blob/6242356247f7ebbf9c10bd8055a6c731e06416ac/src/types/calendar.ts#L59)

Sort direction (either '' or '-').

##### to?

> `optional` **to?**: `Date`

Defined in: [types/calendar.ts:55](https://github.com/7elephants/finvizTS/blob/6242356247f7ebbf9c10bd8055a6c731e06416ac/src/types/calendar.ts#L55)

Optional end date of the range to fetch earnings for (max 90 days from `from`).

## Type Aliases

### Calendar

> **Calendar** = `Record`\<`string`, `string`\>

Defined in: [types/calendar.ts:29](https://github.com/7elephants/finvizTS/blob/6242356247f7ebbf9c10bd8055a6c731e06416ac/src/types/calendar.ts#L29)

A single row returned by the economic calendar endpoint.

***

### EarningsOrderType

> **EarningsOrderType** = *typeof* [`EarningsOrderType`](#earningsordertype-1)\[keyof *typeof* [`EarningsOrderType`](#earningsordertype-1)\]

Defined in: [types/calendar.ts:32](https://github.com/7elephants/finvizTS/blob/6242356247f7ebbf9c10bd8055a6c731e06416ac/src/types/calendar.ts#L32)

Valid sort columns for the earnings calendar endpoint.

## Variables

### EarningsOrderType

> `const` **EarningsOrderType**: `object`

Defined in: [types/calendar.ts:32](https://github.com/7elephants/finvizTS/blob/6242356247f7ebbf9c10bd8055a6c731e06416ac/src/types/calendar.ts#L32)

Valid sort columns for the earnings calendar endpoint.

#### Type Declaration

##### COMPANY

> `readonly` **COMPANY**: `"company"` = `'company'`

##### EARNINGS\_DATE

> `readonly` **EARNINGS\_DATE**: `"earningsDate"` = `'earningsDate'`

##### EPS\_ACTUAL

> `readonly` **EPS\_ACTUAL**: `"epsActual"` = `'epsActual'`

##### EPS\_ESTIMATE

> `readonly` **EPS\_ESTIMATE**: `"epsEstimate"` = `'epsEstimate'`

##### EPS\_GAAP\_ACTUAL

> `readonly` **EPS\_GAAP\_ACTUAL**: `"epsReportedActual"` = `'epsReportedActual'`

##### EPS\_GAAP\_ESTIMATE

> `readonly` **EPS\_GAAP\_ESTIMATE**: `"epsReportedEstimate"` = `'epsReportedEstimate'`

##### EPS\_GAAP\_SURPRISE

> `readonly` **EPS\_GAAP\_SURPRISE**: `"epsReportedSurprise"` = `'epsReportedSurprise'`

##### EPS\_SURPRISE

> `readonly` **EPS\_SURPRISE**: `"epsSurprise"` = `'epsSurprise'`

##### MARKET\_CAP

> `readonly` **MARKET\_CAP**: `"marketCap"` = `'marketCap'`

##### ONE\_DAY\_PRICE\_REACTION

> `readonly` **ONE\_DAY\_PRICE\_REACTION**: `"oneDayPriceReaction"` = `'oneDayPriceReaction'`

##### REVENUE\_ACTUAL

> `readonly` **REVENUE\_ACTUAL**: `"salesActual"` = `'salesActual'`

##### REVENUE\_ESTIMATE

> `readonly` **REVENUE\_ESTIMATE**: `"salesEstimate"` = `'salesEstimate'`

##### REVENUE\_SURPRISE

> `readonly` **REVENUE\_SURPRISE**: `"salesSurprise"` = `'salesSurprise'`

##### TICKER

> `readonly` **TICKER**: `"ticker"` = `'ticker'`
