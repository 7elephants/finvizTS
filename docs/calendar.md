[**finvizts**](README.md)

***

[finvizts](README.md) / calendar

# calendar

## Functions

### getDividendsCalendar()

> **getDividendsCalendar**(`client`, `options`): `Promise`\<[`FinvizResponse`](types/response.md#finvizresponse)\<[`DividendsCalendarItem`](types/calendar.md#dividendscalendaritem)\>\>

Defined in: [calendar.ts:104](https://github.com/7elephants/finvizTS/blob/f744eabcb42982a597319cae2efa34ee2e597d43/src/calendar.ts#L104)

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

`Promise`\<[`FinvizResponse`](types/response.md#finvizresponse)\<[`DividendsCalendarItem`](types/calendar.md#dividendscalendaritem)\>\>

***

### getEarningsCalendar()

> **getEarningsCalendar**(`client`, `options`): `Promise`\<[`FinvizResponse`](types/response.md#finvizresponse)\<[`EarningsCalendarItem`](types/calendar.md#earningscalendaritem)\>\>

Defined in: [calendar.ts:85](https://github.com/7elephants/finvizTS/blob/f744eabcb42982a597319cae2efa34ee2e597d43/src/calendar.ts#L85)

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

`Promise`\<[`FinvizResponse`](types/response.md#finvizresponse)\<[`EarningsCalendarItem`](types/calendar.md#earningscalendaritem)\>\>

***

### getEconomicCalendar()

> **getEconomicCalendar**(`client`, `options`): `Promise`\<[`FinvizResponse`](types/response.md#finvizresponse)\<[`Calendar`](types/calendar.md#calendar)\>\>

Defined in: [calendar.ts:67](https://github.com/7elephants/finvizTS/blob/f744eabcb42982a597319cae2efa34ee2e597d43/src/calendar.ts#L67)

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

`Promise`\<[`FinvizResponse`](types/response.md#finvizresponse)\<[`Calendar`](types/calendar.md#calendar)\>\>
