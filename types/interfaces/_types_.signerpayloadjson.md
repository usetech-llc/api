[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types"](../modules/_types_.md) › [SignerPayloadJSON](_types_.signerpayloadjson.md)

# Interface: SignerPayloadJSON

## Hierarchy

* **SignerPayloadJSON**

## Index

### Properties

* [address](_types_.signerpayloadjson.md#address)
* [blockHash](_types_.signerpayloadjson.md#blockhash)
* [blockNumber](_types_.signerpayloadjson.md#blocknumber)
* [era](_types_.signerpayloadjson.md#era)
* [genesisHash](_types_.signerpayloadjson.md#genesishash)
* [method](_types_.signerpayloadjson.md#method)
* [nonce](_types_.signerpayloadjson.md#nonce)
* [specVersion](_types_.signerpayloadjson.md#specversion)
* [tip](_types_.signerpayloadjson.md#tip)
* [version](_types_.signerpayloadjson.md#version)

## Properties

###  address

• **address**: *string*

*Defined in [packages/types/src/types.ts:250](https://github.com/polkadot-js/api/blob/7ed1857589/packages/types/src/types.ts#L250)*

**`description`** The ss-58 encoded address

___

###  blockHash

• **blockHash**: *string*

*Defined in [packages/types/src/types.ts:255](https://github.com/polkadot-js/api/blob/7ed1857589/packages/types/src/types.ts#L255)*

**`description`** The checkpoint hash of the block, in hex

___

###  blockNumber

• **blockNumber**: *string*

*Defined in [packages/types/src/types.ts:260](https://github.com/polkadot-js/api/blob/7ed1857589/packages/types/src/types.ts#L260)*

**`description`** The checkpoint block number, in hex

___

###  era

• **era**: *string*

*Defined in [packages/types/src/types.ts:265](https://github.com/polkadot-js/api/blob/7ed1857589/packages/types/src/types.ts#L265)*

**`description`** The era for this transaction, in hex

___

###  genesisHash

• **genesisHash**: *string*

*Defined in [packages/types/src/types.ts:270](https://github.com/polkadot-js/api/blob/7ed1857589/packages/types/src/types.ts#L270)*

**`description`** The genesis hash of the chain, in hex

___

###  method

• **method**: *string*

*Defined in [packages/types/src/types.ts:275](https://github.com/polkadot-js/api/blob/7ed1857589/packages/types/src/types.ts#L275)*

**`description`** The encoded method (with arguments) in hex

___

###  nonce

• **nonce**: *string*

*Defined in [packages/types/src/types.ts:280](https://github.com/polkadot-js/api/blob/7ed1857589/packages/types/src/types.ts#L280)*

**`description`** The nonce for this transaction, in hex

___

###  specVersion

• **specVersion**: *string*

*Defined in [packages/types/src/types.ts:285](https://github.com/polkadot-js/api/blob/7ed1857589/packages/types/src/types.ts#L285)*

**`description`** The current spec version for  the runtime

___

###  tip

• **tip**: *string*

*Defined in [packages/types/src/types.ts:290](https://github.com/polkadot-js/api/blob/7ed1857589/packages/types/src/types.ts#L290)*

**`description`** The tip for this transaction, in hex

___

###  version

• **version**: *number*

*Defined in [packages/types/src/types.ts:295](https://github.com/polkadot-js/api/blob/7ed1857589/packages/types/src/types.ts#L295)*

**`description`** The version of the extrinsic we are dealing with
