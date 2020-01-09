[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["staking/query"](_staking_query_.md)

# External module: "staking/query"

## Index

### Functions

* [query](_staking_query_.md#query)

## Functions

###  query

▸ **query**(`api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/query.ts:147](https://github.com/polkadot-js/api/blob/2dee50f019/packages/api-derive/src/staking/query.ts#L147)*

**`description`** From a stash, retrieve the controllerId and fill in all the relevant staking details

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`_accountId`: Uint8Array | string): *Observable‹[DerivedStakingQuery](../interfaces/_types_.derivedstakingquery.md)›*

**Parameters:**

Name | Type |
------ | ------ |
`_accountId` | Uint8Array &#124; string |
