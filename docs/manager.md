[**finvizts**](README.md)

***

[finvizts](README.md) / manager

# manager

## Functions

### getManagers()

> **getManagers**(`client`, `options?`): `Promise`\<[`ManagerFundItem`](types/fund-manager.md#managerfunditem)[]\>

Defined in: [manager.ts:25](https://github.com/7elephants/finvizTS/blob/32fcd93ddd781eae14ef7eb4cd2365c4fc65b963/src/manager.ts#L25)

Fetch fund manager portfolios, optionally filtered by a search term and sorted by
order/direction. The API returns a multi-row CSV; each row is mapped to a ManagerItem.

#### Parameters

##### client

[`FinvizClient`](client.md#finvizclient)

Authenticated FinvizClient instance

##### options?

[`ManagerFundOptions`](types/fund-manager.md#managerfundoptions) = `{}`

Search term and sort options

#### Returns

`Promise`\<[`ManagerFundItem`](types/fund-manager.md#managerfunditem)[]\>
