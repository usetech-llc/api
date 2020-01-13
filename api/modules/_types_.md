[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types"](_types_.md)

# External module: "types"

## Index

### Interfaces

* [ApiInterfaceRx](../interfaces/_types_.apiinterfacerx.md)
* [ApiOptions](../interfaces/_types_.apioptions.md)
* [DecorateMethodOptions](../interfaces/_types_.decoratemethodoptions.md)
* [PromiseResult](../interfaces/_types_.promiseresult.md)
* [QueryableModuleStorage](../interfaces/_types_.queryablemodulestorage.md)
* [QueryableStorage](../interfaces/_types_.queryablestorage.md)
* [QueryableStorageExact](../interfaces/_types_.queryablestorageexact.md)
* [QueryableStorageMultiBase](../interfaces/_types_.queryablestoragemultibase.md)
* [QueryableStorageMultiPromise](../interfaces/_types_.queryablestoragemultipromise.md)
* [RxResult](../interfaces/_types_.rxresult.md)
* [Signer](../interfaces/_types_.signer.md)
* [SignerOptions](../interfaces/_types_.signeroptions.md)
* [SignerResult](../interfaces/_types_.signerresult.md)
* [StorageEntryBase](../interfaces/_types_.storageentrybase.md)
* [StorageEntryPromiseOverloads](../interfaces/_types_.storageentrypromiseoverloads.md)
* [SubmittableExtrinsicFunction](../interfaces/_types_.submittableextrinsicfunction.md)
* [SubmittableExtrinsics](../interfaces/_types_.submittableextrinsics.md)
* [SubmittableModuleExtrinsics](../interfaces/_types_.submittablemoduleextrinsics.md)

### Type aliases

* [ApiInterfaceEvents](_types_.md#apiinterfaceevents)
* [ApiTypes](_types_.md#apitypes)
* [DecorateMethod](_types_.md#decoratemethod)
* [DecoratedRpc](_types_.md#decoratedrpc)
* [DecoratedRpcSection](_types_.md#decoratedrpcsection)
* [MethodResult](_types_.md#methodresult)
* [ObsInnerType](_types_.md#obsinnertype)
* [PromiseOrObs](_types_.md#promiseorobs)
* [QueryableStorageEntry](_types_.md#queryablestorageentry)
* [QueryableStorageMulti](_types_.md#queryablestoragemulti)
* [QueryableStorageMultiArg](_types_.md#queryablestoragemultiarg)
* [StorageEntryExact](_types_.md#storageentryexact)
* [UnsubscribePromise](_types_.md#unsubscribepromise)

## Type aliases

###  ApiInterfaceEvents

Ƭ **ApiInterfaceEvents**: *ProviderInterfaceEmitted | "ready"*

*Defined in [api/src/types.ts:245](https://github.com/polkadot-js/api/blob/8fb64f77cd/packages/api/src/types.ts#L245)*

___

###  ApiTypes

Ƭ **ApiTypes**: *"promise" | "rxjs"*

*Defined in [api/src/types.ts:247](https://github.com/polkadot-js/api/blob/8fb64f77cd/packages/api/src/types.ts#L247)*

___

###  DecorateMethod

Ƭ **DecorateMethod**: *function*

*Defined in [api/src/types.ts:60](https://github.com/polkadot-js/api/blob/8fb64f77cd/packages/api/src/types.ts#L60)*

#### Type declaration:

▸ <**Method**>(`method`: Method, `options?`: [DecorateMethodOptions](../interfaces/_types_.decoratemethodoptions.md)): *any*

**Type parameters:**

▪ **Method**: *function*

**Parameters:**

Name | Type |
------ | ------ |
`method` | Method |
`options?` | [DecorateMethodOptions](../interfaces/_types_.decoratemethodoptions.md) |

___

###  DecoratedRpc

Ƭ **DecoratedRpc**: *object*

*Defined in [api/src/types.ts:97](https://github.com/polkadot-js/api/blob/8fb64f77cd/packages/api/src/types.ts#L97)*

#### Type declaration:

___

###  DecoratedRpcSection

Ƭ **DecoratedRpcSection**: *object*

*Defined in [api/src/types.ts:91](https://github.com/polkadot-js/api/blob/8fb64f77cd/packages/api/src/types.ts#L91)*

#### Type declaration:

___

###  MethodResult

Ƭ **MethodResult**: *ApiType extends "rxjs" ? RxResult<F> : PromiseResult<F>*

*Defined in [api/src/types.ts:87](https://github.com/polkadot-js/api/blob/8fb64f77cd/packages/api/src/types.ts#L87)*

___

###  ObsInnerType

Ƭ **ObsInnerType**: *O extends Observable<infer U> ? U : never*

*Defined in [api/src/types.ts:50](https://github.com/polkadot-js/api/blob/8fb64f77cd/packages/api/src/types.ts#L50)*

___

###  PromiseOrObs

Ƭ **PromiseOrObs**: *ApiType extends "rxjs" ? Observable<T> : Promise<T>*

*Defined in [api/src/types.ts:82](https://github.com/polkadot-js/api/blob/8fb64f77cd/packages/api/src/types.ts#L82)*

___

###  QueryableStorageEntry

Ƭ **QueryableStorageEntry**: *ApiType extends "rxjs" ? StorageEntryExact<"rxjs", GenericStorageEntryFunction> : StorageEntryExact<"promise", GenericStorageEntryFunction> & StorageEntryPromiseOverloads*

*Defined in [api/src/types.ts:133](https://github.com/polkadot-js/api/blob/8fb64f77cd/packages/api/src/types.ts#L133)*

___

###  QueryableStorageMulti

Ƭ **QueryableStorageMulti**: *ApiType extends "rxjs" ? QueryableStorageMultiBase<ApiType> : QueryableStorageMultiPromise<ApiType>*

*Defined in [api/src/types.ts:154](https://github.com/polkadot-js/api/blob/8fb64f77cd/packages/api/src/types.ts#L154)*

___

###  QueryableStorageMultiArg

Ƭ **QueryableStorageMultiArg**: *[QueryableStorageEntry](_types_.md#queryablestorageentry)‹ApiType› | [[QueryableStorageEntry](_types_.md#queryablestorageentry)‹ApiType›, undefined | string | number | false | true | Codec | Uint8Array‹› | BN‹› | CodecArgArray‹› | CodecArgObject]*

*Defined in [api/src/types.ts:142](https://github.com/polkadot-js/api/blob/8fb64f77cd/packages/api/src/types.ts#L142)*

___

###  StorageEntryExact

Ƭ **StorageEntryExact**: *[MethodResult](_types_.md#methodresult)‹ApiType, F› & [StorageEntryBase](../interfaces/_types_.storageentrybase.md)‹ApiType, F›*

*Defined in [api/src/types.ts:128](https://github.com/polkadot-js/api/blob/8fb64f77cd/packages/api/src/types.ts#L128)*

___

###  UnsubscribePromise

Ƭ **UnsubscribePromise**: *Promise‹function›*

*Defined in [api/src/types.ts:52](https://github.com/polkadot-js/api/blob/8fb64f77cd/packages/api/src/types.ts#L52)*
