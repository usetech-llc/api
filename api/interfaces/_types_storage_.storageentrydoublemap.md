[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types/storage"](../modules/_types_storage_.md) › [StorageEntryDoubleMap](_types_storage_.storageentrydoublemap.md)

# Interface: StorageEntryDoubleMap <**ApiType, F, FirstKeyType**>

## Type parameters

▪ **ApiType**: *[ApiTypes](../modules/_types_base_.md#apitypes)*

▪ **F**: *AnyFunction*

▪ **FirstKeyType**

## Hierarchy

* [StorageEntryBase](_types_storage_.storageentrybase.md)‹ApiType, F›

  ↳ **StorageEntryDoubleMap**

## Index

### Properties

* [at](_types_storage_.storageentrydoublemap.md#at)
* [creator](_types_storage_.storageentrydoublemap.md#creator)
* [entries](_types_storage_.storageentrydoublemap.md#entries)
* [hash](_types_storage_.storageentrydoublemap.md#hash)
* [key](_types_storage_.storageentrydoublemap.md#key)
* [keyPrefix](_types_storage_.storageentrydoublemap.md#keyprefix)
* [multi](_types_storage_.storageentrydoublemap.md#multi)
* [size](_types_storage_.storageentrydoublemap.md#size)

## Properties

###  at

• **at**: *function*

*Inherited from [StorageEntryBase](_types_storage_.storageentrybase.md).[at](_types_storage_.storageentrybase.md#at)*

*Defined in [api/src/types/storage.ts:29](https://github.com/polkadot-js/api/blob/b46093e5d3/packages/api/src/types/storage.ts#L29)*

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

*Inherited from [StorageEntryBase](_types_storage_.storageentrybase.md).[creator](_types_storage_.storageentrybase.md#creator)*

*Defined in [api/src/types/storage.ts:30](https://github.com/polkadot-js/api/blob/b46093e5d3/packages/api/src/types/storage.ts#L30)*

___

###  entries

• **entries**: *function*

*Overrides [StorageEntryBase](_types_storage_.storageentrybase.md).[entries](_types_storage_.storageentrybase.md#entries)*

*Defined in [api/src/types/storage.ts:40](https://github.com/polkadot-js/api/blob/b46093e5d3/packages/api/src/types/storage.ts#L40)*

#### Type declaration:

▸ (`arg?`: FirstKeyType): *[PromiseOrObs](../modules/_types_base_.md#promiseorobs)‹ApiType, [StorageKey, [ObsInnerType](../modules/_types_base_.md#obsinnertype)‹ReturnType‹F››][]›*

**Parameters:**

Name | Type |
------ | ------ |
`arg?` | FirstKeyType |

___

###  hash

• **hash**: *function*

*Inherited from [StorageEntryBase](_types_storage_.storageentrybase.md).[hash](_types_storage_.storageentrybase.md#hash)*

*Defined in [api/src/types/storage.ts:32](https://github.com/polkadot-js/api/blob/b46093e5d3/packages/api/src/types/storage.ts#L32)*

#### Type declaration:

▸ (...`args`: Parameters‹F›): *[PromiseOrObs](../modules/_types_base_.md#promiseorobs)‹ApiType, Hash›*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | Parameters‹F› |

___

###  key

• **key**: *function*

*Inherited from [StorageEntryBase](_types_storage_.storageentrybase.md).[key](_types_storage_.storageentrybase.md#key)*

*Defined in [api/src/types/storage.ts:33](https://github.com/polkadot-js/api/blob/b46093e5d3/packages/api/src/types/storage.ts#L33)*

#### Type declaration:

▸ (...`args`: Parameters‹F›): *string*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | Parameters‹F› |

___

###  keyPrefix

• **keyPrefix**: *function*

*Inherited from [StorageEntryBase](_types_storage_.storageentrybase.md).[keyPrefix](_types_storage_.storageentrybase.md#keyprefix)*

*Defined in [api/src/types/storage.ts:34](https://github.com/polkadot-js/api/blob/b46093e5d3/packages/api/src/types/storage.ts#L34)*

#### Type declaration:

▸ (): *string*

___

###  multi

• **multi**: *ApiType extends "rxjs" ? StorageEntryObservableMulti : StorageEntryPromiseMulti*

*Inherited from [StorageEntryBase](_types_storage_.storageentrybase.md).[multi](_types_storage_.storageentrybase.md#multi)*

*Defined in [api/src/types/storage.ts:36](https://github.com/polkadot-js/api/blob/b46093e5d3/packages/api/src/types/storage.ts#L36)*

___

###  size

• **size**: *function*

*Inherited from [StorageEntryBase](_types_storage_.storageentrybase.md).[size](_types_storage_.storageentrybase.md#size)*

*Defined in [api/src/types/storage.ts:35](https://github.com/polkadot-js/api/blob/b46093e5d3/packages/api/src/types/storage.ts#L35)*

#### Type declaration:

▸ (...`args`: Parameters‹F›): *[PromiseOrObs](../modules/_types_base_.md#promiseorobs)‹ApiType, u64›*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | Parameters‹F› |
