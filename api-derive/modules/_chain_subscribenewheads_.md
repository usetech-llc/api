[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["chain/subscribeNewHeads"](_chain_subscribenewheads_.md)

# External module: "chain/subscribeNewHeads"

## Index

### Functions

* [subscribeNewHeads](_chain_subscribenewheads_.md#subscribenewheads)

## Functions

###  subscribeNewHeads

▸ **subscribeNewHeads**(`api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/chain/subscribeNewHeads.ts:26](https://github.com/polkadot-js/api/blob/51423e20b5/packages/api-derive/src/chain/subscribeNewHeads.ts#L26)*

**`name`** subscribeNewHeads

**`description`** An observable of the current block header and it's author

**`example`** 
<BR>

```javascript
api.derive.chain.subscribeNewHeads((header) => {
  console.log(`block #${header.number} was authored by ${header.author}`);
});
```

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |

**Returns:** *function*

An array containing the block header and the block author

▸ (): *Observable‹[HeaderExtended](../classes/_type_headerextended_.headerextended.md)›*
