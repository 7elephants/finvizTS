[**finvizts**](../README.md)

***

[finvizts](../README.md) / types/client

# types/client

## Interfaces

### FinvizClientOptions

Defined in: [types/client.ts:13](https://github.com/7elephants/finvizTS/blob/5e4c7e375813a9349118ed5f6293931806e2095b/src/types/client.ts#L13)

Options passed when constructing a FinvizClient instance.

#### Properties

##### apiToken

> **apiToken**: `string`

Defined in: [types/client.ts:15](https://github.com/7elephants/finvizTS/blob/5e4c7e375813a9349118ed5f6293931806e2095b/src/types/client.ts#L15)

Finviz Elite API token

##### baseUrl?

> `optional` **baseUrl?**: `string`

Defined in: [types/client.ts:17](https://github.com/7elephants/finvizTS/blob/5e4c7e375813a9349118ed5f6293931806e2095b/src/types/client.ts#L17)

Base URL override (defaults to https://elite.finviz.com)

##### maxRetries?

> `optional` **maxRetries?**: `number`

Defined in: [types/client.ts:30](https://github.com/7elephants/finvizTS/blob/5e4c7e375813a9349118ed5f6293931806e2095b/src/types/client.ts#L30)

Maximum number of times to retry a request after a 429 response.
Default: 3.

##### rateLimitMs?

> `optional` **rateLimitMs?**: `number`

Defined in: [types/client.ts:25](https://github.com/7elephants/finvizTS/blob/5e4c7e375813a9349118ed5f6293931806e2095b/src/types/client.ts#L25)

Minimum interval between outgoing requests in milliseconds.
Proactively delays requests that arrive before this interval has elapsed.
Default: 5000 (matches Finviz's 1 request per 5 second limit).

##### retryDelayMs?

> `optional` **retryDelayMs?**: `number`

Defined in: [types/client.ts:35](https://github.com/7elephants/finvizTS/blob/5e4c7e375813a9349118ed5f6293931806e2095b/src/types/client.ts#L35)

Milliseconds to wait before each retry when no Retry-After header is present.
Default: 5000.

##### timeout?

> `optional` **timeout?**: `number`

Defined in: [types/client.ts:19](https://github.com/7elephants/finvizTS/blob/5e4c7e375813a9349118ed5f6293931806e2095b/src/types/client.ts#L19)

Request timeout in milliseconds (default: 10000)
