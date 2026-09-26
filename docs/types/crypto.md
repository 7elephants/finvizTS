[**finvizts**](../README.md)

***

[finvizts](../README.md) / types/crypto

# types/crypto

## Interfaces

### CryptoOptions

Defined in: [types/crypto.ts:26](https://github.com/7elephants/finvizTS/blob/6242356247f7ebbf9c10bd8055a6c731e06416ac/src/types/crypto.ts#L26)

Options for a crypto performance request.

#### Extends

- [`PerformanceOptions`](performance.md#performanceoptions)

#### Properties

##### currency?

> `optional` **currency?**: [`CryptoCurrency`](#cryptocurrency)

Defined in: [types/crypto.ts:28](https://github.com/7elephants/finvizTS/blob/6242356247f7ebbf9c10bd8055a6c731e06416ac/src/types/crypto.ts#L28)

Quote currency; US dollar by default.

##### order?

> `optional` **order?**: [`PerformanceOrderType`](performance.md#performanceordertype)

Defined in: [types/performance.ts:43](https://github.com/7elephants/finvizTS/blob/6242356247f7ebbf9c10bd8055a6c731e06416ac/src/types/performance.ts#L43)

Column to sort by. Finviz defaults to day performance, best first.

###### Inherited from

[`PerformanceOptions`](performance.md#performanceoptions).[`order`](performance.md#order)

##### orderDirection?

> `optional` **orderDirection?**: [`SortDirection`](../types.md#sortdirection)

Defined in: [types/performance.ts:45](https://github.com/7elephants/finvizTS/blob/6242356247f7ebbf9c10bd8055a6c731e06416ac/src/types/performance.ts#L45)

Sort direction (either '' or '-').

###### Inherited from

[`PerformanceOptions`](performance.md#performanceoptions).[`orderDirection`](performance.md#orderdirection)

## Type Aliases

### CryptoCurrency

> **CryptoCurrency** = *typeof* [`CryptoCurrency`](#cryptocurrency-1)\[keyof *typeof* [`CryptoCurrency`](#cryptocurrency-1)\]

Defined in: [types/crypto.ts:17](https://github.com/7elephants/finvizTS/blob/6242356247f7ebbf9c10bd8055a6c731e06416ac/src/types/crypto.ts#L17)

Valid quote currencies (`c` query parameter) for the crypto endpoint.

***

### CryptoItem

> **CryptoItem** = [`PerformanceItem`](performance.md#performanceitem)

Defined in: [types/crypto.ts:32](https://github.com/7elephants/finvizTS/blob/6242356247f7ebbf9c10bd8055a6c731e06416ac/src/types/crypto.ts#L32)

A single crypto performance row returned by the crypto endpoint.

## Variables

### CryptoCurrency

> `const` **CryptoCurrency**: `object`

Defined in: [types/crypto.ts:17](https://github.com/7elephants/finvizTS/blob/6242356247f7ebbf9c10bd8055a6c731e06416ac/src/types/crypto.ts#L17)

Valid quote currencies (`c` query parameter) for the crypto endpoint.

#### Type Declaration

##### BTC

> `readonly` **BTC**: `"BTC"` = `'BTC'`

##### EUR

> `readonly` **EUR**: `"EUR"` = `'EUR'`

##### USD

> `readonly` **USD**: `"USD"` = `'USD'`

##### USDT

> `readonly` **USDT**: `"USDT"` = `'USDT'`
