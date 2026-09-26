[**finvizts**](README.md)

***

[finvizts](README.md) / calendar

# calendar

## Functions

### getDividendsCalendar()

> **getDividendsCalendar**(`client`, `options`): `Promise`\<[`DividendsCalendarItem`](types/calendar.md#dividendscalendaritem)[]\>

Defined in: [calendar.ts:87](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/calendar.ts#L87)

Fetch dividends calendar events for a given date range (max 90 days).
The API returns a multi-row CSV; each row represents one company's upcoming ex-dividend date.

#### Parameters

##### client

[`FinvizClient`](client.md#finvizclient)

Authenticated FinvizClient instance

##### options

[`DividendsCalendarOptions`](types/calendar.md#dividendscalendaroptions)

Start date (required) and optional end date

#### Returns

`Promise`\<[`DividendsCalendarItem`](types/calendar.md#dividendscalendaritem)[]\>

***

### getEarningsCalendar()

> **getEarningsCalendar**(`client`, `options`): `Promise`\<[`EarningsCalendarItem`](types/calendar.md#earningscalendaritem)[]\>

Defined in: [calendar.ts:53](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/calendar.ts#L53)

Fetch earnings calendar events for a given date range (max 90 days).
The API returns a multi-row CSV; each row represents one company's earnings report.

#### Parameters

##### client

[`FinvizClient`](client.md#finvizclient)

Authenticated FinvizClient instance

##### options

[`EarningsCalendarOptions`](types/calendar.md#earningscalendaroptions)

Start date (required), optional end date, and optional sort order

#### Returns

`Promise`\<[`EarningsCalendarItem`](types/calendar.md#earningscalendaritem)[]\>

***

### getEconomicCalendar()

> **getEconomicCalendar**(`client`, `options`): `Promise`\<[`Calendar`](types/calendar.md#calendar)[]\>

Defined in: [calendar.ts:36](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/calendar.ts#L36)

Fetch economic calendar events for a given date range.
The API returns a multi-row CSV; each row represents one economic event.

#### Parameters

##### client

[`FinvizClient`](client.md#finvizclient)

Authenticated FinvizClient instance

##### options

[`CalendarOptions`](types/calendar.md#calendaroptions)

Start date (required) and optional end date

#### Returns

`Promise`\<[`Calendar`](types/calendar.md#calendar)[]\>
