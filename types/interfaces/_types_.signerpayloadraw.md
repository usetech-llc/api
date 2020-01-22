[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types"](../modules/_types_.md) › [SignerPayloadRaw](_types_.signerpayloadraw.md)

# Interface: SignerPayloadRaw

## Hierarchy

* [SignerPayloadRawBase](_types_.signerpayloadrawbase.md)

  ↳ **SignerPayloadRaw**

## Index

### Properties

* [address](_types_.signerpayloadraw.md#address)
* [data](_types_.signerpayloadraw.md#data)
* [type](_types_.signerpayloadraw.md#type)

## Properties

###  address

• **address**: *string*

*Defined in [packages/types/src/types.ts:314](https://github.com/polkadot-js/api/blob/c1c537a3b5/packages/types/src/types.ts#L314)*

**`description`** The ss-58 encoded address

___

###  data

• **data**: *string*

*Inherited from [SignerPayloadRawBase](_types_.signerpayloadrawbase.md).[data](_types_.signerpayloadrawbase.md#data)*

*Defined in [packages/types/src/types.ts:302](https://github.com/polkadot-js/api/blob/c1c537a3b5/packages/types/src/types.ts#L302)*

**`description`** The hex-encoded data for this request

___

###  type

• **type**: *"bytes" | "payload"*

*Overrides [SignerPayloadRawBase](_types_.signerpayloadrawbase.md).[type](_types_.signerpayloadrawbase.md#optional-type)*

*Defined in [packages/types/src/types.ts:319](https://github.com/polkadot-js/api/blob/c1c537a3b5/packages/types/src/types.ts#L319)*

**`description`** The type of the contained data
