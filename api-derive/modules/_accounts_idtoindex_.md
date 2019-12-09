[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["accounts/idToIndex"](_accounts_idtoindex_.md)

# External module: "accounts/idToIndex"

## Index

### Functions

* [idToIndex](_accounts_idtoindex_.md#idtoindex)

## Functions

###  idToIndex

▸ **idToIndex**(`api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/accounts/idToIndex.ts:28](https://github.com/polkadot-js/api/blob/3a7059459/packages/api-derive/src/accounts/idToIndex.ts#L28)*

**`name`** idToIndex

**`example`** 
<BR>

```javascript
const ALICE = '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY';
api.derive.accounts.idToIndex(ALICE, (accountIndex) => {
  console.log(`The AccountIndex of ${ALICE} is ${accountIndex}`);
});
```

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |

**Returns:** *function*

Returns the corresponding AccountIndex.

▸ (`accountId`: AccountId | string): *Observable‹AccountIndex | undefined›*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`accountId` | AccountId &#124; string | An accounts Id in different formats. |
