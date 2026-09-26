[**finvizts**](README.md)

***

[finvizts](README.md) / groups

# groups

## Functions

### getGroups()

> **getGroups**(`client`, `group`, `viewId`, `options?`): `Promise`\<[`FinvizResponse`](types/response.md#finvizresponse)\<[`Group`](types/groups.md#group)\>\>

Defined in: [groups.ts:26](https://github.com/7elephants/finvizTS/blob/f744eabcb42982a597319cae2efa34ee2e597d43/src/groups.ts#L26)

Fetch aggregated market data for a group (sector, industry, country, or capitalization).
The API returns a multi-row CSV; each row represents one group entry.

#### Parameters

##### client

[`FinvizClient`](client.md#finvizclient)

Authenticated FinvizClient instance

##### group

[`GroupName`](types/groups.md#groupname)

Group name (e.g. GroupName.Sector)

##### viewId

`number`

View ID controlling which fields are returned (e.g. GroupView.Overview)

##### options?

[`GroupOptions`](types/groups.md#groupoptions) = `{}`

Optional subgroup filter and column selection

#### Returns

`Promise`\<[`FinvizResponse`](types/response.md#finvizresponse)\<[`Group`](types/groups.md#group)\>\>
