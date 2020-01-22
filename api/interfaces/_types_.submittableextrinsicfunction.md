[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types"](../modules/_types_.md) › [SubmittableExtrinsicFunction](_types_.submittableextrinsicfunction.md)

# Interface: SubmittableExtrinsicFunction <**ApiType**>

## Type parameters

▪ **ApiType**: *[ApiTypes](../modules/_types_.md#apitypes)*

## Hierarchy

* CallFunction

  ↳ **SubmittableExtrinsicFunction**

## Callable

▸ (...`params`: CodecArg[]): *[SubmittableExtrinsic](_submittable_types_.submittableextrinsic.md)‹ApiType›*

*Defined in [api/src/types.ts:168](https://github.com/polkadot-js/api/blob/c1c537a3b5/packages/api/src/types.ts#L168)*

**Parameters:**

Name | Type |
------ | ------ |
`...params` | CodecArg[] |

**Returns:** *[SubmittableExtrinsic](_submittable_types_.submittableextrinsic.md)‹ApiType›*

▸ (...`args`: any[]): *Call*

*Defined in [types/src/types.ts:20](https://github.com/polkadot-js/api/blob/c1c537a3b5/packages/types/src/types.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *Call*

## Index

### Properties

* [callIndex](_types_.submittableextrinsicfunction.md#callindex)
* [meta](_types_.submittableextrinsicfunction.md#meta)
* [method](_types_.submittableextrinsicfunction.md#method)
* [section](_types_.submittableextrinsicfunction.md#section)
* [toJSON](_types_.submittableextrinsicfunction.md#tojson)

## Properties

###  callIndex

• **callIndex**: *Uint8Array*

*Inherited from void*

*Defined in [types/src/types.ts:22](https://github.com/polkadot-js/api/blob/c1c537a3b5/packages/types/src/types.ts#L22)*

___

###  meta

• **meta**: *FunctionMetadataLatest*

*Inherited from void*

*Defined in [types/src/types.ts:23](https://github.com/polkadot-js/api/blob/c1c537a3b5/packages/types/src/types.ts#L23)*

___

###  method

• **method**: *string*

*Inherited from void*

*Defined in [types/src/types.ts:24](https://github.com/polkadot-js/api/blob/c1c537a3b5/packages/types/src/types.ts#L24)*

___

###  section

• **section**: *string*

*Inherited from void*

*Defined in [types/src/types.ts:25](https://github.com/polkadot-js/api/blob/c1c537a3b5/packages/types/src/types.ts#L25)*

___

###  toJSON

• **toJSON**: *function*

*Inherited from void*

*Defined in [types/src/types.ts:26](https://github.com/polkadot-js/api/blob/c1c537a3b5/packages/types/src/types.ts#L26)*

#### Type declaration:

▸ (): *any*
