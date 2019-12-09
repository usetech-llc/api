[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["elections/voters"](_elections_voters_.md)

# External module: "elections/voters"

## Index

### Functions

* [voters](_elections_voters_.md#voters)

## Functions

###  voters

▸ **voters**(`api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/elections/voters.ts:40](https://github.com/polkadot-js/api/blob/8a5a86e8b/packages/api-derive/src/elections/voters.ts#L40)*

**`name`** voters

**`example`** 
<BR>

```javascript
api.derive.elections.voters((voters) => {
  console.log(`There are ${voters.length} current voters.`);
});
```

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |

**Returns:** *function*

An array of all current voters from all sets.

▸ (): *Observable‹AccountId[]›*
