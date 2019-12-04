[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["elections/approvalsOf"](_elections_approvalsof_.md)

# External module: "elections/approvalsOf"

## Index

### Functions

* [approvalsOf](_elections_approvalsof_.md#approvalsof)

## Functions

###  approvalsOf

▸ **approvalsOf**(`api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/elections/approvalsOf.ts:43](https://github.com/polkadot-js/api/blob/c8dd26b0d/packages/api-derive/src/elections/approvalsOf.ts#L43)*

**`name`** approvalsOf

**`example`** 
<BR>

```javascript
api.derive.elections.approvalsOf(ALICE, (approvals) => {
  // approvals === [[false], [true, false], ...]
});
```

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |

**Returns:** *function*

A nested array of boolean approvals for the given account in each voter set index, converted from its ApprovalFlag(s).

▸ (`who`: AccountId | string): *Observable‹boolean[][]›*

**Parameters:**

Name | Type |
------ | ------ |
`who` | AccountId &#124; string |
