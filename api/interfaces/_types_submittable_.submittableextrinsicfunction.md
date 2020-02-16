[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types/submittable"](../modules/_types_submittable_.md) › [SubmittableExtrinsicFunction](_types_submittable_.submittableextrinsicfunction.md)

# Interface: SubmittableExtrinsicFunction <**ApiType**>

## Type parameters

▪ **ApiType**: *[ApiTypes](../modules/_types_base_.md#apitypes)*

## Hierarchy

* CallBase

  ↳ **SubmittableExtrinsicFunction**

## Callable

▸ (...`params`: any[]): *SubmittableExtrinsic‹ApiType›*

*Defined in [api/src/types/submittable.ts:15](https://github.com/polkadot-js/api/blob/921e55a82e/packages/api/src/types/submittable.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`...params` | any[] |

**Returns:** *SubmittableExtrinsic‹ApiType›*

## Index

### Properties

* [callIndex](_types_submittable_.submittableextrinsicfunction.md#callindex)
* [meta](_types_submittable_.submittableextrinsicfunction.md#meta)
* [method](_types_submittable_.submittableextrinsicfunction.md#method)
* [section](_types_submittable_.submittableextrinsicfunction.md#section)
* [toJSON](_types_submittable_.submittableextrinsicfunction.md#tojson)

## Properties

###  callIndex

• **callIndex**: *Uint8Array*

*Inherited from [SubmittableExtrinsicFunction](_types_submittable_.submittableextrinsicfunction.md).[callIndex](_types_submittable_.submittableextrinsicfunction.md#callindex)*

*Defined in [types/src/types/calls.ts:9](https://github.com/polkadot-js/api/blob/921e55a82e/packages/types/src/types/calls.ts#L9)*

___

###  meta

• **meta**: *FunctionMetadataLatest*

*Inherited from [SubmittableExtrinsicFunction](_types_submittable_.submittableextrinsicfunction.md).[meta](_types_submittable_.submittableextrinsicfunction.md#meta)*

*Defined in [types/src/types/calls.ts:10](https://github.com/polkadot-js/api/blob/921e55a82e/packages/types/src/types/calls.ts#L10)*

___

###  method

• **method**: *string*

*Inherited from [SubmittableExtrinsicFunction](_types_submittable_.submittableextrinsicfunction.md).[method](_types_submittable_.submittableextrinsicfunction.md#method)*

*Defined in [types/src/types/calls.ts:11](https://github.com/polkadot-js/api/blob/921e55a82e/packages/types/src/types/calls.ts#L11)*

___

###  section

• **section**: *string*

*Inherited from [SubmittableExtrinsicFunction](_types_submittable_.submittableextrinsicfunction.md).[section](_types_submittable_.submittableextrinsicfunction.md#section)*

*Defined in [types/src/types/calls.ts:12](https://github.com/polkadot-js/api/blob/921e55a82e/packages/types/src/types/calls.ts#L12)*

___

###  toJSON

• **toJSON**: *function*

*Inherited from [SubmittableExtrinsicFunction](_types_submittable_.submittableextrinsicfunction.md).[toJSON](_types_submittable_.submittableextrinsicfunction.md#tojson)*

*Defined in [types/src/types/calls.ts:13](https://github.com/polkadot-js/api/blob/921e55a82e/packages/types/src/types/calls.ts#L13)*

#### Type declaration:

▸ (): *any*
