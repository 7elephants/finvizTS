[**finvizts**](../README.md)

***

[finvizts](../README.md) / types/client

# types/client

## Interfaces

### FinvizClientOptions

Defined in: [types/client.ts:15](https://github.com/7elephants/finvizTS/blob/706aab1e24071062daf1484d72ac61b15cccad77/src/types/client.ts#L15)

Options passed when constructing a FinvizClient instance.

#### Type Parameters

##### F

`F` *extends* [`ResponseFormat`](response.md#responseformat) = `"parsed"`

#### Properties

##### apiToken

> **apiToken**: `string`

Defined in: [types/client.ts:22](https://github.com/7elephants/finvizTS/blob/706aab1e24071062daf1484d72ac61b15cccad77/src/types/client.ts#L22)

Finviz Elite API token

##### baseUrl?

> `optional` **baseUrl?**: `string`

Defined in: [types/client.ts:24](https://github.com/7elephants/finvizTS/blob/706aab1e24071062daf1484d72ac61b15cccad77/src/types/client.ts#L24)

Base URL override (defaults to https://elite.finviz.com)

##### format?

> `optional` **format?**: `F`

Defined in: [types/client.ts:20](https://github.com/7elephants/finvizTS/blob/706aab1e24071062daf1484d72ac61b15cccad77/src/types/client.ts#L20)

Default response format for every `get*` call made with this client: `parsed` (typed
items, the default), `raw` (CSV records) or `both`. Override per call with `format`.

##### maxRetries?

> `optional` **maxRetries?**: `number`

Defined in: [types/client.ts:37](https://github.com/7elephants/finvizTS/blob/706aab1e24071062daf1484d72ac61b15cccad77/src/types/client.ts#L37)

Maximum number of times to retry a request after a 429 response.
Default: 3.

##### rateLimitMs?

> `optional` **rateLimitMs?**: `number`

Defined in: [types/client.ts:32](https://github.com/7elephants/finvizTS/blob/706aab1e24071062daf1484d72ac61b15cccad77/src/types/client.ts#L32)

Minimum interval between outgoing requests in milliseconds.
Proactively delays requests that arrive before this interval has elapsed.
Default: 5000 (matches Finviz's 1 request per 5 second limit).

##### retryDelayMs?

> `optional` **retryDelayMs?**: `number`

Defined in: [types/client.ts:42](https://github.com/7elephants/finvizTS/blob/706aab1e24071062daf1484d72ac61b15cccad77/src/types/client.ts#L42)

Milliseconds to wait before each retry when no Retry-After header is present.
Default: 5000.

##### timeout?

> `optional` **timeout?**: `number`

Defined in: [types/client.ts:26](https://github.com/7elephants/finvizTS/blob/706aab1e24071062daf1484d72ac61b15cccad77/src/types/client.ts#L26)

Request timeout in milliseconds (default: 10000)
