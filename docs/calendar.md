[**finvizts**](README.md)

***

[finvizts](README.md) / calendar

# calendar

## Functions

### getDividendsCalendar()

> **getDividendsCalendar**\<`C`, `F`\>(`client`, `options`): `Promise`\<[`FinvizResponse`](types/response.md#finvizresponse)\<[`DividendsCalendarItem`](types/calendar.md#dividendscalendaritem), `F`\>\>

Defined in: [calendar.ts:109](https://github.com/7elephants/finvizTS/blob/80a71835161ee929f23b53123ed4d2d457750e80/src/calendar.ts#L109)

Fetch dividends calendar events for a given date range (max 90 days).
The API returns a multi-row CSV; each row represents one company's upcoming ex-dividend date.

#### Type Parameters

##### C

`C` *extends* [`ResponseFormat`](types/response.md#responseformat) = `"parsed"`

##### F

`F` *extends* [`ResponseFormat`](types/response.md#responseformat) = `C`

#### Parameters

##### client

[`FinvizClient`](client.md#finvizclient)\<`C`\>

Authenticated FinvizClient instance

##### options

[`DividendsCalendarOptions`](types/calendar.md#dividendscalendaroptions) & [`FormatOption`](types/response.md#formatoption)\<`F`\>

Start date (required) and optional end date, plus optional `format`
                 (`parsed` | `raw` | `both`) overriding the client default

#### Returns

`Promise`\<[`FinvizResponse`](types/response.md#finvizresponse)\<[`DividendsCalendarItem`](types/calendar.md#dividendscalendaritem), `F`\>\>

***

### getEarningsCalendar()

> **getEarningsCalendar**\<`C`, `F`\>(`client`, `options`): `Promise`\<[`FinvizResponse`](types/response.md#finvizresponse)\<[`EarningsCalendarItem`](types/calendar.md#earningscalendaritem), `F`\>\>

Defined in: [calendar.ts:89](https://github.com/7elephants/finvizTS/blob/80a71835161ee929f23b53123ed4d2d457750e80/src/calendar.ts#L89)

Fetch earnings calendar events for a given date range (max 90 days).
The API returns a multi-row CSV; each row represents one company's earnings report.

#### Type Parameters

##### C

`C` *extends* [`ResponseFormat`](types/response.md#responseformat) = `"parsed"`

##### F

`F` *extends* [`ResponseFormat`](types/response.md#responseformat) = `C`

#### Parameters

##### client

[`FinvizClient`](client.md#finvizclient)\<`C`\>

Authenticated FinvizClient instance

##### options

[`EarningsCalendarOptions`](types/calendar.md#earningscalendaroptions) & [`FormatOption`](types/response.md#formatoption)\<`F`\>

Start date (required), optional end date, and optional sort order, plus optional `format`
                 (`parsed` | `raw` | `both`) overriding the client default

#### Returns

`Promise`\<[`FinvizResponse`](types/response.md#finvizresponse)\<[`EarningsCalendarItem`](types/calendar.md#earningscalendaritem), `F`\>\>

***

### getEconomicCalendar()

> **getEconomicCalendar**\<`C`, `F`\>(`client`, `options`): `Promise`\<[`FinvizResponse`](types/response.md#finvizresponse)\<[`Calendar`](types/calendar.md#calendar), `F`\>\>

Defined in: [calendar.ts:70](https://github.com/7elephants/finvizTS/blob/80a71835161ee929f23b53123ed4d2d457750e80/src/calendar.ts#L70)

Fetch economic calendar events for a given date range.
The API returns a multi-row CSV; each row represents one economic event.

#### Type Parameters

##### C

`C` *extends* [`ResponseFormat`](types/response.md#responseformat) = `"parsed"`

##### F

`F` *extends* [`ResponseFormat`](types/response.md#responseformat) = `C`

#### Parameters

##### client

[`FinvizClient`](client.md#finvizclient)\<`C`\>

Authenticated FinvizClient instance

##### options

[`CalendarOptions`](types/calendar.md#calendaroptions) & [`FormatOption`](types/response.md#formatoption)\<`F`\>

Start date (required) and optional end date, plus optional `format`
                 (`parsed` | `raw` | `both`) overriding the client default

#### Returns

`Promise`\<[`FinvizResponse`](types/response.md#finvizresponse)\<[`Calendar`](types/calendar.md#calendar), `F`\>\>
