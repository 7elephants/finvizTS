[**finvizts**](README.md)

***

[finvizts](README.md) / client

# client

## Classes

### FinvizClient

Defined in: [client.ts:36](https://github.com/7elephants/finvizTS/blob/706aab1e24071062daf1484d72ac61b15cccad77/src/client.ts#L36)

Authenticated HTTP transport for the Finviz Elite API.
Injects the API token and rate-limits/retries requests; endpoint modules call
`getRecord()` or `getRecords()` on an instance to fetch and parse CSV responses.

`F` is the default ResponseFormat of `get*` calls made with this client, inferred from the
`format` option (`parsed` when omitted).

#### Type Parameters

##### F

`F` *extends* [`ResponseFormat`](types/response.md#responseformat) = `"parsed"`

#### Constructors

##### Constructor

> **new FinvizClient**\<`F`\>(`options`): [`FinvizClient`](#finvizclient)\<`F`\>

Defined in: [client.ts:53](https://github.com/7elephants/finvizTS/blob/706aab1e24071062daf1484d72ac61b15cccad77/src/client.ts#L53)

Construct a client from the given options. Throws FinvizError if `apiToken` is missing.

###### Parameters

###### options

[`FinvizClientOptions`](types/client.md#finvizclientoptions)\<`F`\>

###### Returns

[`FinvizClient`](#finvizclient)\<`F`\>

#### Properties

##### apiToken

> `private` `readonly` **apiToken**: `string`

Defined in: [client.ts:42](https://github.com/7elephants/finvizTS/blob/706aab1e24071062daf1484d72ac61b15cccad77/src/client.ts#L42)

Finviz Elite API token appended to every request.

##### format

> `readonly` **format**: `F`

Defined in: [client.ts:38](https://github.com/7elephants/finvizTS/blob/706aab1e24071062daf1484d72ac61b15cccad77/src/client.ts#L38)

Default response format for `get*` calls; each call may override it via `format`.

##### http

> `private` `readonly` **http**: `AxiosInstance`

Defined in: [client.ts:40](https://github.com/7elephants/finvizTS/blob/706aab1e24071062daf1484d72ac61b15cccad77/src/client.ts#L40)

Configured axios instance used for all requests.

##### lastRequestTime

> `private` **lastRequestTime**: `number` = `0`

Defined in: [client.ts:50](https://github.com/7elephants/finvizTS/blob/706aab1e24071062daf1484d72ac61b15cccad77/src/client.ts#L50)

Timestamp of the last outgoing request, used for proactive rate limiting.

##### maxRetries

> `private` `readonly` **maxRetries**: `number`

Defined in: [client.ts:46](https://github.com/7elephants/finvizTS/blob/706aab1e24071062daf1484d72ac61b15cccad77/src/client.ts#L46)

Maximum number of retries after a 429 response.

##### rateLimitMs

> `private` `readonly` **rateLimitMs**: `number`

Defined in: [client.ts:44](https://github.com/7elephants/finvizTS/blob/706aab1e24071062daf1484d72ac61b15cccad77/src/client.ts#L44)

Minimum interval between outgoing requests, in milliseconds.

##### retryDelayMs

> `private` `readonly` **retryDelayMs**: `number`

Defined in: [client.ts:48](https://github.com/7elephants/finvizTS/blob/706aab1e24071062daf1484d72ac61b15cccad77/src/client.ts#L48)

Fallback delay between retries when no `Retry-After` header is present.

#### Methods

##### delay()

> `private` **delay**(`ms`): `Promise`\<`void`\>

Defined in: [client.ts:72](https://github.com/7elephants/finvizTS/blob/706aab1e24071062daf1484d72ac61b15cccad77/src/client.ts#L72)

Resolve after the given number of milliseconds.

###### Parameters

###### ms

`number`

###### Returns

`Promise`\<`void`\>

##### fetchCsv()

> `private` **fetchCsv**(`path`, `params`): `Promise`\<`string`\>

Defined in: [client.ts:81](https://github.com/7elephants/finvizTS/blob/706aab1e24071062daf1484d72ac61b15cccad77/src/client.ts#L81)

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

Defined in: [client.ts:132](https://github.com/7elephants/finvizTS/blob/706aab1e24071062daf1484d72ac61b15cccad77/src/client.ts#L132)

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

Defined in: [client.ts:141](https://github.com/7elephants/finvizTS/blob/706aab1e24071062daf1484d72ac61b15cccad77/src/client.ts#L141)

Fetch a multi-row CSV response and return it as an array of key/value records.

###### Parameters

###### path

`string`

###### params?

`Record`\<`string`, `string` \| `number` \| `undefined`\> = `{}`

###### Returns

`Promise`\<`Record`\<`string`, `string`\>[]\>
