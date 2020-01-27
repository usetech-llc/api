[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["staking/query"](_staking_query_.md)

# External module: "staking/query"

## Index

### Functions

* [query](_staking_query_.md#query)

## Functions

###  query

▸ **query**(`api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/query.ts:47](https://github.com/polkadot-js/api/blob/854a520517/packages/api-derive/src/staking/query.ts#L47)*

**`description`** From a stash, retrieve the controllerId and all relevant details

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`accountId`: Uint8Array | string): *Observable‹[DerivedStakingQuery](../interfaces/_types_.derivedstakingquery.md)›*

**Parameters:**

Name | Type |
------ | ------ |
`accountId` | Uint8Array &#124; string |
