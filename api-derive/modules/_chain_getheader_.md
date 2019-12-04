[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["chain/getHeader"](_chain_getheader_.md)

# External module: "chain/getHeader"

## Index

### Functions

* [getHeader](_chain_getheader_.md#getheader)

## Functions

###  getHeader

▸ **getHeader**(`api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/chain/getHeader.ts:30](https://github.com/polkadot-js/api/blob/c8dd26b0d/packages/api-derive/src/chain/getHeader.ts#L30)*

**`name`** bestNumberFinalized

**`description`** Get a specific block header and extend it with the author

**`example`** 
<BR>

```javascript
const { author, number } = await api.derive.chain.getHeader('0x123...456');

console.log(`block #${number} was authored by ${author}`);
```

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |

**Returns:** *function*

An array containing the block header and the block author

▸ (`hash`: Uint8Array | string): *Observable‹[HeaderExtended](../classes/_type_headerextended_.headerextended.md) | undefined›*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`hash` | Uint8Array &#124; string | A block hash as U8 array or string. |
