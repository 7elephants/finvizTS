[**finvizts**](README.md)

***

[finvizts](README.md) / fund

# fund

## Functions

### getFunds()

> **getFunds**(`client`, `options?`): `Promise`\<[`ManagerFundItem`](types/fund-manager.md#managerfunditem)[]\>

Defined in: [fund.ts:25](https://github.com/7elephants/finvizTS/blob/5e4c7e375813a9349118ed5f6293931806e2095b/src/fund.ts#L25)

Fetch fund portfolios, optionally filtered by a search term and sorted by order/direction.
The API returns a multi-row CSV; each row is mapped to a FundItem.

#### Parameters

##### client

[`FinvizClient`](client.md#finvizclient)

Authenticated FinvizClient instance

##### options?

[`ManagerFundOptions`](types/fund-manager.md#managerfundoptions) = `{}`

Search term and sort options

#### Returns

`Promise`\<[`ManagerFundItem`](types/fund-manager.md#managerfunditem)[]\>
