[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types/submittable"](../modules/_types_submittable_.md) › [SubmittableExtrinsicFunction](_types_submittable_.submittableextrinsicfunction.md)

# Interface: SubmittableExtrinsicFunction <**ApiType**>

## Type parameters

▪ **ApiType**: *[ApiTypes](../modules/_types_base_.md#apitypes)*

## Hierarchy

* CallFunction

  ↳ **SubmittableExtrinsicFunction**

## Callable

▸ (...`params`: any[]): *SubmittableExtrinsic‹ApiType›*

*Defined in [api/src/types/submittable.ts:15](https://github.com/polkadot-js/api/blob/b24a1ff350/packages/api/src/types/submittable.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`...params` | any[] |

**Returns:** *SubmittableExtrinsic‹ApiType›*

▸ (...`args`: any[]): *Call*

*Defined in [types/src/types.ts:20](https://github.com/polkadot-js/api/blob/b24a1ff350/packages/types/src/types.ts#L20)*

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

*Defined in [types/src/types.ts:22](https://github.com/polkadot-js/api/blob/b24a1ff350/packages/types/src/types.ts#L22)*

___

###  meta

• **meta**: *FunctionMetadataLatest*

*Inherited from [SubmittableExtrinsicFunction](_types_submittable_.submittableextrinsicfunction.md).[meta](_types_submittable_.submittableextrinsicfunction.md#meta)*

*Defined in [types/src/types.ts:23](https://github.com/polkadot-js/api/blob/b24a1ff350/packages/types/src/types.ts#L23)*

___

###  method

• **method**: *string*

*Inherited from [SubmittableExtrinsicFunction](_types_submittable_.submittableextrinsicfunction.md).[method](_types_submittable_.submittableextrinsicfunction.md#method)*

*Defined in [types/src/types.ts:24](https://github.com/polkadot-js/api/blob/b24a1ff350/packages/types/src/types.ts#L24)*

___

###  section

• **section**: *string*

*Inherited from [SubmittableExtrinsicFunction](_types_submittable_.submittableextrinsicfunction.md).[section](_types_submittable_.submittableextrinsicfunction.md#section)*

*Defined in [types/src/types.ts:25](https://github.com/polkadot-js/api/blob/b24a1ff350/packages/types/src/types.ts#L25)*

___

###  toJSON

• **toJSON**: *function*

*Inherited from [SubmittableExtrinsicFunction](_types_submittable_.submittableextrinsicfunction.md).[toJSON](_types_submittable_.submittableextrinsicfunction.md#tojson)*

*Defined in [types/src/types.ts:26](https://github.com/polkadot-js/api/blob/b24a1ff350/packages/types/src/types.ts#L26)*

#### Type declaration:

▸ (): *any*
