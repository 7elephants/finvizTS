[**finvizts**](README.md)

***

[finvizts](README.md) / fund

# fund

## Functions

### getFunds()

> **getFunds**(`client`, `options?`): `Promise`\<[`FinvizResponse`](types/response.md#finvizresponse)\<[`ManagerFundItem`](types/fund-manager.md#managerfunditem)\>\>

Defined in: [fund.ts:25](https://github.com/7elephants/finvizTS/blob/35b052f8358756be41e8745d2c1b57d3010c1398/src/fund.ts#L25)

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

`Promise`\<[`FinvizResponse`](types/response.md#finvizresponse)\<[`ManagerFundItem`](types/fund-manager.md#managerfunditem)\>\>
