[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types/extrinsic"](../modules/_types_extrinsic_.md) › [SignerPayloadJSON](_types_extrinsic_.signerpayloadjson.md)

# Interface: SignerPayloadJSON

## Hierarchy

* **SignerPayloadJSON**

## Index

### Properties

* [address](_types_extrinsic_.signerpayloadjson.md#address)
* [blockHash](_types_extrinsic_.signerpayloadjson.md#blockhash)
* [blockNumber](_types_extrinsic_.signerpayloadjson.md#blocknumber)
* [era](_types_extrinsic_.signerpayloadjson.md#era)
* [genesisHash](_types_extrinsic_.signerpayloadjson.md#genesishash)
* [method](_types_extrinsic_.signerpayloadjson.md#method)
* [nonce](_types_extrinsic_.signerpayloadjson.md#nonce)
* [specVersion](_types_extrinsic_.signerpayloadjson.md#specversion)
* [tip](_types_extrinsic_.signerpayloadjson.md#tip)
* [version](_types_extrinsic_.signerpayloadjson.md#version)

## Properties

###  address

• **address**: *string*

*Defined in [packages/types/src/types/extrinsic.ts:123](https://github.com/polkadot-js/api/blob/d041c0abb2/packages/types/src/types/extrinsic.ts#L123)*

**`description`** The ss-58 encoded address

___

###  blockHash

• **blockHash**: *string*

*Defined in [packages/types/src/types/extrinsic.ts:128](https://github.com/polkadot-js/api/blob/d041c0abb2/packages/types/src/types/extrinsic.ts#L128)*

**`description`** The checkpoint hash of the block, in hex

___

###  blockNumber

• **blockNumber**: *string*

*Defined in [packages/types/src/types/extrinsic.ts:133](https://github.com/polkadot-js/api/blob/d041c0abb2/packages/types/src/types/extrinsic.ts#L133)*

**`description`** The checkpoint block number, in hex

___

###  era

• **era**: *string*

*Defined in [packages/types/src/types/extrinsic.ts:138](https://github.com/polkadot-js/api/blob/d041c0abb2/packages/types/src/types/extrinsic.ts#L138)*

**`description`** The era for this transaction, in hex

___

###  genesisHash

• **genesisHash**: *string*

*Defined in [packages/types/src/types/extrinsic.ts:143](https://github.com/polkadot-js/api/blob/d041c0abb2/packages/types/src/types/extrinsic.ts#L143)*

**`description`** The genesis hash of the chain, in hex

___

###  method

• **method**: *string*

*Defined in [packages/types/src/types/extrinsic.ts:148](https://github.com/polkadot-js/api/blob/d041c0abb2/packages/types/src/types/extrinsic.ts#L148)*

**`description`** The encoded method (with arguments) in hex

___

###  nonce

• **nonce**: *string*

*Defined in [packages/types/src/types/extrinsic.ts:153](https://github.com/polkadot-js/api/blob/d041c0abb2/packages/types/src/types/extrinsic.ts#L153)*

**`description`** The nonce for this transaction, in hex

___

###  specVersion

• **specVersion**: *string*

*Defined in [packages/types/src/types/extrinsic.ts:158](https://github.com/polkadot-js/api/blob/d041c0abb2/packages/types/src/types/extrinsic.ts#L158)*

**`description`** The current spec version for  the runtime

___

###  tip

• **tip**: *string*

*Defined in [packages/types/src/types/extrinsic.ts:163](https://github.com/polkadot-js/api/blob/d041c0abb2/packages/types/src/types/extrinsic.ts#L163)*

**`description`** The tip for this transaction, in hex

___

###  version

• **version**: *number*

*Defined in [packages/types/src/types/extrinsic.ts:168](https://github.com/polkadot-js/api/blob/d041c0abb2/packages/types/src/types/extrinsic.ts#L168)*

**`description`** The version of the extrinsic we are dealing with
