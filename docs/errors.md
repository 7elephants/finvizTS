[**finvizts**](README.md)

***

[finvizts](README.md) / errors

# errors

## Classes

### FinvizError

Defined in: [errors.ts:18](https://github.com/7elephants/finvizTS/blob/d73323451cc466a717d752578726ed80f8ea4df6/src/errors.ts#L18)

Thrown when the Finviz Elite API returns an error response or a network error occurs.

#### Extends

- `Error`

#### Constructors

##### Constructor

> **new FinvizError**(`message`, `level?`, `statusCode?`, `retryAfter?`, `options?`): [`FinvizError`](#finvizerror)

Defined in: [errors.ts:27](https://github.com/7elephants/finvizTS/blob/d73323451cc466a717d752578726ed80f8ea4df6/src/errors.ts#L27)

###### Parameters

###### message

`string`

###### level?

`number` = `ErrorLevel.ERROR`

###### statusCode?

`number`

###### retryAfter?

`number`

###### options?

`ErrorOptions`

###### Returns

[`FinvizError`](#finvizerror)

###### Overrides

`Error.constructor`

#### Properties

##### level

> `readonly` **level**: `number` \| `undefined`

Defined in: [errors.ts:24](https://github.com/7elephants/finvizTS/blob/d73323451cc466a717d752578726ed80f8ea4df6/src/errors.ts#L24)

Level of error

##### retryAfter

> `readonly` **retryAfter**: `number` \| `undefined`

Defined in: [errors.ts:22](https://github.com/7elephants/finvizTS/blob/d73323451cc466a717d752578726ed80f8ea4df6/src/errors.ts#L22)

Parsed value of the Retry-After response header in seconds, if present.

##### statusCode

> `readonly` **statusCode**: `number` \| `undefined`

Defined in: [errors.ts:20](https://github.com/7elephants/finvizTS/blob/d73323451cc466a717d752578726ed80f8ea4df6/src/errors.ts#L20)

HTTP status code from the response, or undefined for network-level errors.
