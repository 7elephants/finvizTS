[**finvizts**](README.md)

***

[finvizts](README.md) / manager

# manager

## Functions

### getManagers()

> **getManagers**(`client`, `options?`): `Promise`\<[`ManagerFundItem`](types/fund-manager.md#managerfunditem)[]\>

Defined in: [manager.ts:25](https://github.com/7elephants/finvizTS/blob/d00d34aa8d6b6f5017c56eafb1130a718f09ad93/src/manager.ts#L25)

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
