[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types/storage"](../modules/_types_storage_.md) › [StorageEntryBase](_types_storage_.storageentrybase.md)

# Interface: StorageEntryBase <**ApiType, F**>

## Type parameters

▪ **ApiType**: *[ApiTypes](../modules/_types_base_.md#apitypes)*

▪ **F**: *AnyFunction*

## Hierarchy

* **StorageEntryBase**

  ↳ [StorageEntryDoubleMap](_types_storage_.storageentrydoublemap.md)

## Index

### Properties

* [at](_types_storage_.storageentrybase.md#at)
* [creator](_types_storage_.storageentrybase.md#creator)
* [entries](_types_storage_.storageentrybase.md#entries)
* [hash](_types_storage_.storageentrybase.md#hash)
* [key](_types_storage_.storageentrybase.md#key)
* [keyPrefix](_types_storage_.storageentrybase.md#keyprefix)
* [multi](_types_storage_.storageentrybase.md#multi)
* [size](_types_storage_.storageentrybase.md#size)

## Properties

###  at

• **at**: *function*

*Defined in [api/src/types/storage.ts:29](https://github.com/polkadot-js/api/blob/d041c0abb2/packages/api/src/types/storage.ts#L29)*

#### Type declaration:

▸ (`hash`: Hash | Uint8Array | string, ...`args`: Parameters‹F›): *[PromiseOrObs](../modules/_types_base_.md#promiseorobs)‹ApiType, [ObsInnerType](../modules/_types_base_.md#obsinnertype)‹ReturnType‹F›››*

**Parameters:**

Name | Type |
------ | ------ |
`hash` | Hash &#124; Uint8Array &#124; string |
`...args` | Parameters‹F› |

___

###  creator

• **creator**: *StorageEntry*

*Defined in [api/src/types/storage.ts:30](https://github.com/polkadot-js/api/blob/d041c0abb2/packages/api/src/types/storage.ts#L30)*

___

###  entries

• **entries**: *function*

*Defined in [api/src/types/storage.ts:31](https://github.com/polkadot-js/api/blob/d041c0abb2/packages/api/src/types/storage.ts#L31)*

#### Type declaration:

▸ (`arg?`: any): *[PromiseOrObs](../modules/_types_base_.md#promiseorobs)‹ApiType, [StorageKey, [ObsInnerType](../modules/_types_base_.md#obsinnertype)‹ReturnType‹F››][]›*

**Parameters:**

Name | Type |
------ | ------ |
`arg?` | any |

___

###  hash

• **hash**: *function*

*Defined in [api/src/types/storage.ts:32](https://github.com/polkadot-js/api/blob/d041c0abb2/packages/api/src/types/storage.ts#L32)*

#### Type declaration:

▸ (...`args`: Parameters‹F›): *[PromiseOrObs](../modules/_types_base_.md#promiseorobs)‹ApiType, Hash›*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | Parameters‹F› |

___

###  key

• **key**: *function*

*Defined in [api/src/types/storage.ts:33](https://github.com/polkadot-js/api/blob/d041c0abb2/packages/api/src/types/storage.ts#L33)*

#### Type declaration:

▸ (...`args`: Parameters‹F›): *string*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | Parameters‹F› |

___

###  keyPrefix

• **keyPrefix**: *function*

*Defined in [api/src/types/storage.ts:34](https://github.com/polkadot-js/api/blob/d041c0abb2/packages/api/src/types/storage.ts#L34)*

#### Type declaration:

▸ (): *string*

___

###  multi

• **multi**: *ApiType extends "rxjs" ? StorageEntryObservableMulti : StorageEntryPromiseMulti*

*Defined in [api/src/types/storage.ts:36](https://github.com/polkadot-js/api/blob/d041c0abb2/packages/api/src/types/storage.ts#L36)*

___

###  size

• **size**: *function*

*Defined in [api/src/types/storage.ts:35](https://github.com/polkadot-js/api/blob/d041c0abb2/packages/api/src/types/storage.ts#L35)*

#### Type declaration:

▸ (...`args`: Parameters‹F›): *[PromiseOrObs](../modules/_types_base_.md#promiseorobs)‹ApiType, u64›*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | Parameters‹F› |
