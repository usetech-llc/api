[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["chain/bestNumberLag"](_chain_bestnumberlag_.md)

# External module: "chain/bestNumberLag"

## Index

### Functions

* [bestNumberLag](_chain_bestnumberlag_.md#bestnumberlag)

## Functions

###  bestNumberLag

▸ **bestNumberLag**(`api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/chain/bestNumberLag.ts:27](https://github.com/polkadot-js/api/blob/006c686c1/packages/api-derive/src/chain/bestNumberLag.ts#L27)*

**`name`** bestNumberLag

**`description`** Calculates the lag between finalized head and best head

**`example`** 
<BR>

```javascript
api.derive.chain.bestNumberLag((lag) => {
  console.log(`finalized is ${lag} blocks behind head`);
});
```

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |

**Returns:** *function*

A number of blocks

▸ (): *Observable‹BlockNumber›*
