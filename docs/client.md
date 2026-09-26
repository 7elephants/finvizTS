[**finvizts**](README.md)

***

[finvizts](README.md) / client

# client

## Classes

### FinvizClient

Defined in: [client.ts:33](https://github.com/7elephants/finvizTS/blob/35b052f8358756be41e8745d2c1b57d3010c1398/src/client.ts#L33)

Authenticated HTTP transport for the Finviz Elite API.
Injects the API token and rate-limits/retries requests; endpoint modules call
`getRecord()` or `getRecords()` on an instance to fetch and parse CSV responses.

#### Constructors

##### Constructor

> **new FinvizClient**(`options`): [`FinvizClient`](#finvizclient)

Defined in: [client.ts:48](https://github.com/7elephants/finvizTS/blob/35b052f8358756be41e8745d2c1b57d3010c1398/src/client.ts#L48)

Construct a client from the given options. Throws FinvizError if `apiToken` is missing.

###### Parameters

###### options

[`FinvizClientOptions`](types/client.md#finvizclientoptions)

###### Returns

[`FinvizClient`](#finvizclient)

#### Properties

##### apiToken

> `private` `readonly` **apiToken**: `string`

Defined in: [client.ts:37](https://github.com/7elephants/finvizTS/blob/35b052f8358756be41e8745d2c1b57d3010c1398/src/client.ts#L37)

Finviz Elite API token appended to every request.

##### http

> `private` `readonly` **http**: `AxiosInstance`

Defined in: [client.ts:35](https://github.com/7elephants/finvizTS/blob/35b052f8358756be41e8745d2c1b57d3010c1398/src/client.ts#L35)

Configured axios instance used for all requests.

##### lastRequestTime

> `private` **lastRequestTime**: `number` = `0`

Defined in: [client.ts:45](https://github.com/7elephants/finvizTS/blob/35b052f8358756be41e8745d2c1b57d3010c1398/src/client.ts#L45)

Timestamp of the last outgoing request, used for proactive rate limiting.

##### maxRetries

> `private` `readonly` **maxRetries**: `number`

Defined in: [client.ts:41](https://github.com/7elephants/finvizTS/blob/35b052f8358756be41e8745d2c1b57d3010c1398/src/client.ts#L41)

Maximum number of retries after a 429 response.

##### rateLimitMs

> `private` `readonly` **rateLimitMs**: `number`

Defined in: [client.ts:39](https://github.com/7elephants/finvizTS/blob/35b052f8358756be41e8745d2c1b57d3010c1398/src/client.ts#L39)

Minimum interval between outgoing requests, in milliseconds.

##### retryDelayMs

> `private` `readonly` **retryDelayMs**: `number`

Defined in: [client.ts:43](https://github.com/7elephants/finvizTS/blob/35b052f8358756be41e8745d2c1b57d3010c1398/src/client.ts#L43)

Fallback delay between retries when no `Retry-After` header is present.

#### Methods

##### delay()

> `private` **delay**(`ms`): `Promise`\<`void`\>

Defined in: [client.ts:65](https://github.com/7elephants/finvizTS/blob/35b052f8358756be41e8745d2c1b57d3010c1398/src/client.ts#L65)

Resolve after the given number of milliseconds.

###### Parameters

###### ms

`number`

###### Returns

`Promise`\<`void`\>

##### fetchCsv()

> `private` **fetchCsv**(`path`, `params`): `Promise`\<`string`\>

Defined in: [client.ts:74](https://github.com/7elephants/finvizTS/blob/35b052f8358756be41e8745d2c1b57d3010c1398/src/client.ts#L74)

Fetch a raw CSV response for the given path/params, injecting the API token.
Proactively delays to respect `rateLimitMs` between requests, and retries on
HTTP 429 (honoring the `Retry-After` header when present) up to `maxRetries` times.

###### Parameters

###### path

`string`

###### params

`Record`\<`string`, `string` \| `number` \| `undefined`\>

###### Returns

`Promise`\<`string`\>

##### getRecord()

> **getRecord**(`path`, `params?`): `Promise`\<`Record`\<`string`, `string`\>\>

Defined in: [client.ts:125](https://github.com/7elephants/finvizTS/blob/35b052f8358756be41e8745d2c1b57d3010c1398/src/client.ts#L125)

Fetch a single-row CSV response and return it as a flat key/value record.

###### Parameters

###### path

`string`

###### params?

`Record`\<`string`, `string` \| `number` \| `undefined`\> = `{}`

###### Returns

`Promise`\<`Record`\<`string`, `string`\>\>

##### getRecords()

> **getRecords**(`path`, `params?`): `Promise`\<`Record`\<`string`, `string`\>[]\>

Defined in: [client.ts:134](https://github.com/7elephants/finvizTS/blob/35b052f8358756be41e8745d2c1b57d3010c1398/src/client.ts#L134)

Fetch a multi-row CSV response and return it as an array of key/value records.

###### Parameters

###### path

`string`

###### params?

`Record`\<`string`, `string` \| `number` \| `undefined`\> = `{}`

###### Returns

`Promise`\<`Record`\<`string`, `string`\>[]\>
