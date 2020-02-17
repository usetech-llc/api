[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types/extrinsic"](../modules/_types_extrinsic_.md) › [SignerPayloadRaw](_types_extrinsic_.signerpayloadraw.md)

# Interface: SignerPayloadRaw

## Hierarchy

* [SignerPayloadRawBase](_types_extrinsic_.signerpayloadrawbase.md)

  ↳ **SignerPayloadRaw**

## Index

### Properties

* [address](_types_extrinsic_.signerpayloadraw.md#address)
* [data](_types_extrinsic_.signerpayloadraw.md#data)
* [type](_types_extrinsic_.signerpayloadraw.md#type)

## Properties

###  address

• **address**: *string*

*Defined in [packages/types/src/types/extrinsic.ts:186](https://github.com/polkadot-js/api/blob/01abc030f9/packages/types/src/types/extrinsic.ts#L186)*

**`description`** The ss-58 encoded address

___

###  data

• **data**: *string*

*Inherited from [SignerPayloadRawBase](_types_extrinsic_.signerpayloadrawbase.md).[data](_types_extrinsic_.signerpayloadrawbase.md#data)*

*Defined in [packages/types/src/types/extrinsic.ts:174](https://github.com/polkadot-js/api/blob/01abc030f9/packages/types/src/types/extrinsic.ts#L174)*

**`description`** The hex-encoded data for this request

___

###  type

• **type**: *"bytes" | "payload"*

*Overrides [SignerPayloadRawBase](_types_extrinsic_.signerpayloadrawbase.md).[type](_types_extrinsic_.signerpayloadrawbase.md#optional-type)*

*Defined in [packages/types/src/types/extrinsic.ts:191](https://github.com/polkadot-js/api/blob/01abc030f9/packages/types/src/types/extrinsic.ts#L191)*

**`description`** The type of the contained data
