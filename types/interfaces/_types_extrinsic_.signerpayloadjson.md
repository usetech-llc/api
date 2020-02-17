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

*Defined in [packages/types/src/types/extrinsic.ts:122](https://github.com/polkadot-js/api/blob/502e54ce5c/packages/types/src/types/extrinsic.ts#L122)*

**`description`** The ss-58 encoded address

___

###  blockHash

• **blockHash**: *string*

*Defined in [packages/types/src/types/extrinsic.ts:127](https://github.com/polkadot-js/api/blob/502e54ce5c/packages/types/src/types/extrinsic.ts#L127)*

**`description`** The checkpoint hash of the block, in hex

___

###  blockNumber

• **blockNumber**: *string*

*Defined in [packages/types/src/types/extrinsic.ts:132](https://github.com/polkadot-js/api/blob/502e54ce5c/packages/types/src/types/extrinsic.ts#L132)*

**`description`** The checkpoint block number, in hex

___

###  era

• **era**: *string*

*Defined in [packages/types/src/types/extrinsic.ts:137](https://github.com/polkadot-js/api/blob/502e54ce5c/packages/types/src/types/extrinsic.ts#L137)*

**`description`** The era for this transaction, in hex

___

###  genesisHash

• **genesisHash**: *string*

*Defined in [packages/types/src/types/extrinsic.ts:142](https://github.com/polkadot-js/api/blob/502e54ce5c/packages/types/src/types/extrinsic.ts#L142)*

**`description`** The genesis hash of the chain, in hex

___

###  method

• **method**: *string*

*Defined in [packages/types/src/types/extrinsic.ts:147](https://github.com/polkadot-js/api/blob/502e54ce5c/packages/types/src/types/extrinsic.ts#L147)*

**`description`** The encoded method (with arguments) in hex

___

###  nonce

• **nonce**: *string*

*Defined in [packages/types/src/types/extrinsic.ts:152](https://github.com/polkadot-js/api/blob/502e54ce5c/packages/types/src/types/extrinsic.ts#L152)*

**`description`** The nonce for this transaction, in hex

___

###  specVersion

• **specVersion**: *string*

*Defined in [packages/types/src/types/extrinsic.ts:157](https://github.com/polkadot-js/api/blob/502e54ce5c/packages/types/src/types/extrinsic.ts#L157)*

**`description`** The current spec version for  the runtime

___

###  tip

• **tip**: *string*

*Defined in [packages/types/src/types/extrinsic.ts:162](https://github.com/polkadot-js/api/blob/502e54ce5c/packages/types/src/types/extrinsic.ts#L162)*

**`description`** The tip for this transaction, in hex

___

###  version

• **version**: *number*

*Defined in [packages/types/src/types/extrinsic.ts:167](https://github.com/polkadot-js/api/blob/502e54ce5c/packages/types/src/types/extrinsic.ts#L167)*

**`description`** The version of the extrinsic we are dealing with
