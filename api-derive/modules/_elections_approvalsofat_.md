[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["elections/approvalsOfAt"](_elections_approvalsofat_.md)

# External module: "elections/approvalsOfAt"

## Index

### Functions

* [approvalsOfAt](_elections_approvalsofat_.md#approvalsofat)

## Functions

###  approvalsOfAt

▸ **approvalsOfAt**(`api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/elections/approvalsOfAt.ts:34](https://github.com/polkadot-js/api/blob/8a5a86e8b/packages/api-derive/src/elections/approvalsOfAt.ts#L34)*

**`name`** approvalsOfAt

**`example`** 
<BR>

```javascript
api.derive.elections.approvalsOfAt(ALICE, new BN(0), (approvals) => {
  // approvals === [false, true, ...]
});
```

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |

**Returns:** *function*

An array of boolean approvals for the account and set index, converted from the returned ApprovalFlag.

▸ (`who`: AccountId, `at`: SetIndex): *Observable‹boolean[]›*

**Parameters:**

Name | Type |
------ | ------ |
`who` | AccountId |
`at` | SetIndex |
