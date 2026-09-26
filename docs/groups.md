[**finvizts**](README.md)

***

[finvizts](README.md) / groups

# groups

## Functions

### getGroups()

> **getGroups**(`client`, `group`, `viewId`, `options?`): `Promise`\<[`Group`](types/groups.md#group)[]\>

Defined in: [groups.ts:25](https://github.com/7elephants/finvizTS/blob/cf3affc8092870b336ac093aca4485addf4f6c2a/src/groups.ts#L25)

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

`Promise`\<[`Group`](types/groups.md#group)[]\>
