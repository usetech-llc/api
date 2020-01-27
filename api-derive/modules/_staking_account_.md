[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["staking/account"](_staking_account_.md)

# External module: "staking/account"

## Index

### Functions

* [account](_staking_account_.md#account)

## Functions

###  account

▸ **account**(`api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/account.ts:91](https://github.com/polkadot-js/api/blob/854a520517/packages/api-derive/src/staking/account.ts#L91)*

**`description`** From a stash, retrieve the controllerId and fill in all the relevant staking details

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`accountId`: Uint8Array | string): *Observable‹[DerivedStakingAccount](../interfaces/_types_.derivedstakingaccount.md)›*

**Parameters:**

Name | Type |
------ | ------ |
`accountId` | Uint8Array &#124; string |
