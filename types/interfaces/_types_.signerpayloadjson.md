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

*Defined in [packages/types/src/types.ts:246](https://github.com/polkadot-js/api/blob/82828d8e09/packages/types/src/types.ts#L246)*

**`description`** The ss-58 encoded address

___

###  blockHash

• **blockHash**: *string*

*Defined in [packages/types/src/types.ts:251](https://github.com/polkadot-js/api/blob/82828d8e09/packages/types/src/types.ts#L251)*

**`description`** The checkpoint hash of the block, in hex

___

###  blockNumber

• **blockNumber**: *string*

*Defined in [packages/types/src/types.ts:256](https://github.com/polkadot-js/api/blob/82828d8e09/packages/types/src/types.ts#L256)*

**`description`** The checkpoint block number, in hex

___

###  era

• **era**: *string*

*Defined in [packages/types/src/types.ts:261](https://github.com/polkadot-js/api/blob/82828d8e09/packages/types/src/types.ts#L261)*

**`description`** The era for this transaction, in hex

___

###  genesisHash

• **genesisHash**: *string*

*Defined in [packages/types/src/types.ts:266](https://github.com/polkadot-js/api/blob/82828d8e09/packages/types/src/types.ts#L266)*

**`description`** The genesis hash of the chain, in hex

___

###  method

• **method**: *string*

*Defined in [packages/types/src/types.ts:271](https://github.com/polkadot-js/api/blob/82828d8e09/packages/types/src/types.ts#L271)*

**`description`** The encoded method (with arguments) in hex

___

###  nonce

• **nonce**: *string*

*Defined in [packages/types/src/types.ts:276](https://github.com/polkadot-js/api/blob/82828d8e09/packages/types/src/types.ts#L276)*

**`description`** The nonce for this transaction, in hex

___

###  specVersion

• **specVersion**: *string*

*Defined in [packages/types/src/types.ts:281](https://github.com/polkadot-js/api/blob/82828d8e09/packages/types/src/types.ts#L281)*

**`description`** The current spec version for  the runtime

___

###  tip

• **tip**: *string*

*Defined in [packages/types/src/types.ts:286](https://github.com/polkadot-js/api/blob/82828d8e09/packages/types/src/types.ts#L286)*

**`description`** The tip for this transaction, in hex

___

###  version

• **version**: *number*

*Defined in [packages/types/src/types.ts:291](https://github.com/polkadot-js/api/blob/82828d8e09/packages/types/src/types.ts#L291)*

**`description`** The version of the extrinsic we are dealing with
