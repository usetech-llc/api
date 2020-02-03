[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["chain/bestNumber"](_chain_bestnumber_.md)

# External module: "chain/bestNumber"

## Index

### Functions

* [bestNumber](_chain_bestnumber_.md#bestnumber)

## Functions

###  bestNumber

▸ **bestNumber**(`api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/chain/bestNumber.ts:25](https://github.com/polkadot-js/api/blob/2ee3afcd61/packages/api-derive/src/chain/bestNumber.ts#L25)*

**`name`** bestNumber

**`example`** 
<BR>

```javascript
api.derive.chain.bestNumber((blockNumber) => {
  console.log(`the current best block is #${blockNumber}`);
});
```

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |

**Returns:** *function*

The latest block number.

▸ (): *Observable‹BlockNumber›*
