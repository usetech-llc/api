[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types/storage"](_types_storage_.md)

# External module: "types/storage"

## Index

### Interfaces

* [AugmentedQueries](../interfaces/_types_storage_.augmentedqueries.md)
* [QueryableModuleStorage](../interfaces/_types_storage_.queryablemodulestorage.md)
* [QueryableStorage](../interfaces/_types_storage_.queryablestorage.md)
* [QueryableStorageMultiBase](../interfaces/_types_storage_.queryablestoragemultibase.md)
* [QueryableStorageMultiPromise](../interfaces/_types_storage_.queryablestoragemultipromise.md)
* [StorageEntryBase](../interfaces/_types_storage_.storageentrybase.md)
* [StorageEntryPromiseOverloads](../interfaces/_types_storage_.storageentrypromiseoverloads.md)

### Type aliases

* [AugmentedQuery](_types_storage_.md#augmentedquery)
* [QueryableStorageEntry](_types_storage_.md#queryablestorageentry)
* [QueryableStorageMulti](_types_storage_.md#queryablestoragemulti)
* [QueryableStorageMultiArg](_types_storage_.md#queryablestoragemultiarg)

## Type aliases

###  AugmentedQuery

Ƭ **AugmentedQuery**: *[MethodResult](_types_base_.md#methodresult)‹ApiType, F› & [StorageEntryBase](../interfaces/_types_storage_.storageentrybase.md)‹ApiType, F›*

*Defined in [api/src/types/storage.ts:16](https://github.com/polkadot-js/api/blob/9c50e81ab9/packages/api/src/types/storage.ts#L16)*

___

###  QueryableStorageEntry

Ƭ **QueryableStorageEntry**: *ApiType extends "rxjs" ? AugmentedQuery<"rxjs", GenericStorageEntryFunction> : AugmentedQuery<"promise", GenericStorageEntryFunction> & StorageEntryPromiseOverloads*

*Defined in [api/src/types/storage.ts:21](https://github.com/polkadot-js/api/blob/9c50e81ab9/packages/api/src/types/storage.ts#L21)*

___

###  QueryableStorageMulti

Ƭ **QueryableStorageMulti**: *ApiType extends "rxjs" ? QueryableStorageMultiBase<ApiType> : QueryableStorageMultiPromise<ApiType>*

*Defined in [api/src/types/storage.ts:69](https://github.com/polkadot-js/api/blob/9c50e81ab9/packages/api/src/types/storage.ts#L69)*

___

###  QueryableStorageMultiArg

Ƭ **QueryableStorageMultiArg**: *[QueryableStorageEntry](_types_storage_.md#queryablestorageentry)‹ApiType› | [[QueryableStorageEntry](_types_storage_.md#queryablestorageentry)‹ApiType›, undefined | string | number | false | true | Codec | Uint8Array‹› | BN‹› | CodecArgArray‹› | CodecArgObject]*

*Defined in [api/src/types/storage.ts:57](https://github.com/polkadot-js/api/blob/9c50e81ab9/packages/api/src/types/storage.ts#L57)*
