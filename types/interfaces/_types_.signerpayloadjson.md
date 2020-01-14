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

*Defined in [packages/types/src/types.ts:248](https://github.com/polkadot-js/api/blob/cc4a4607f1/packages/types/src/types.ts#L248)*

**`description`** The ss-58 encoded address

___

###  blockHash

• **blockHash**: *string*

*Defined in [packages/types/src/types.ts:253](https://github.com/polkadot-js/api/blob/cc4a4607f1/packages/types/src/types.ts#L253)*

**`description`** The checkpoint hash of the block, in hex

___

###  blockNumber

• **blockNumber**: *string*

*Defined in [packages/types/src/types.ts:258](https://github.com/polkadot-js/api/blob/cc4a4607f1/packages/types/src/types.ts#L258)*

**`description`** The checkpoint block number, in hex

___

###  era

• **era**: *string*

*Defined in [packages/types/src/types.ts:263](https://github.com/polkadot-js/api/blob/cc4a4607f1/packages/types/src/types.ts#L263)*

**`description`** The era for this transaction, in hex

___

###  genesisHash

• **genesisHash**: *string*

*Defined in [packages/types/src/types.ts:268](https://github.com/polkadot-js/api/blob/cc4a4607f1/packages/types/src/types.ts#L268)*

**`description`** The genesis hash of the chain, in hex

___

###  method

• **method**: *string*

*Defined in [packages/types/src/types.ts:273](https://github.com/polkadot-js/api/blob/cc4a4607f1/packages/types/src/types.ts#L273)*

**`description`** The encoded method (with arguments) in hex

___

###  nonce

• **nonce**: *string*

*Defined in [packages/types/src/types.ts:278](https://github.com/polkadot-js/api/blob/cc4a4607f1/packages/types/src/types.ts#L278)*

**`description`** The nonce for this transaction, in hex

___

###  specVersion

• **specVersion**: *string*

*Defined in [packages/types/src/types.ts:283](https://github.com/polkadot-js/api/blob/cc4a4607f1/packages/types/src/types.ts#L283)*

**`description`** The current spec version for  the runtime

___

###  tip

• **tip**: *string*

*Defined in [packages/types/src/types.ts:288](https://github.com/polkadot-js/api/blob/cc4a4607f1/packages/types/src/types.ts#L288)*

**`description`** The tip for this transaction, in hex

___

###  version

• **version**: *number*

*Defined in [packages/types/src/types.ts:293](https://github.com/polkadot-js/api/blob/cc4a4607f1/packages/types/src/types.ts#L293)*

**`description`** The version of the extrinsic we are dealing with
