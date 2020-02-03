[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types/submittable"](../modules/_types_submittable_.md) › [SubmittableExtrinsicFunction](_types_submittable_.submittableextrinsicfunction.md)

# Interface: SubmittableExtrinsicFunction <**ApiType**>

## Type parameters

▪ **ApiType**: *[ApiTypes](../modules/_types_base_.md#apitypes)*

## Hierarchy

* CallFunction

  ↳ **SubmittableExtrinsicFunction**

## Callable

▸ (...`params`: any[]): *SubmittableExtrinsic‹ApiType›*

*Defined in [api/src/types/submittable.ts:15](https://github.com/polkadot-js/api/blob/2ee3afcd61/packages/api/src/types/submittable.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`...params` | any[] |

**Returns:** *SubmittableExtrinsic‹ApiType›*

▸ (...`args`: any[]): *Call*

*Defined in [types/src/types.ts:25](https://github.com/polkadot-js/api/blob/2ee3afcd61/packages/types/src/types.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *Call*

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

*Defined in [types/src/types.ts:27](https://github.com/polkadot-js/api/blob/2ee3afcd61/packages/types/src/types.ts#L27)*

___

###  meta

• **meta**: *FunctionMetadataLatest*

*Inherited from [SubmittableExtrinsicFunction](_types_submittable_.submittableextrinsicfunction.md).[meta](_types_submittable_.submittableextrinsicfunction.md#meta)*

*Defined in [types/src/types.ts:28](https://github.com/polkadot-js/api/blob/2ee3afcd61/packages/types/src/types.ts#L28)*

___

###  method

• **method**: *string*

*Inherited from [SubmittableExtrinsicFunction](_types_submittable_.submittableextrinsicfunction.md).[method](_types_submittable_.submittableextrinsicfunction.md#method)*

*Defined in [types/src/types.ts:29](https://github.com/polkadot-js/api/blob/2ee3afcd61/packages/types/src/types.ts#L29)*

___

###  section

• **section**: *string*

*Inherited from [SubmittableExtrinsicFunction](_types_submittable_.submittableextrinsicfunction.md).[section](_types_submittable_.submittableextrinsicfunction.md#section)*

*Defined in [types/src/types.ts:30](https://github.com/polkadot-js/api/blob/2ee3afcd61/packages/types/src/types.ts#L30)*

___

###  toJSON

• **toJSON**: *function*

*Inherited from [SubmittableExtrinsicFunction](_types_submittable_.submittableextrinsicfunction.md).[toJSON](_types_submittable_.submittableextrinsicfunction.md#tojson)*

*Defined in [types/src/types.ts:31](https://github.com/polkadot-js/api/blob/2ee3afcd61/packages/types/src/types.ts#L31)*

#### Type declaration:

▸ (): *any*
