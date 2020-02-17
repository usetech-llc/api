[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["balances/account"](_balances_account_.md)

# External module: "balances/account"

## Index

### Functions

* [account](_balances_account_.md#account)

## Functions

###  account

▸ **account**(`api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/balances/account.ts:77](https://github.com/polkadot-js/api/blob/502e54ce5c/packages/api-derive/src/balances/account.ts#L77)*

**`name`** account

**`example`** 
<BR>

```javascript
const ALICE = 'F7Hs';

api.derive.balances.all(ALICE, ({ accountId, lockedBalance }) => {
  console.log(`The account ${accountId} has a locked balance ${lockedBalance} units.`);
});
```

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |

**Returns:** *function*

An object containing the results of various balance queries

▸ (`address`: AccountIndex | AccountId | Address | string): *Observable‹DerivedBalancesAccount›*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`address` | AccountIndex &#124; AccountId &#124; Address &#124; string | An accounts Id in different formats. |
