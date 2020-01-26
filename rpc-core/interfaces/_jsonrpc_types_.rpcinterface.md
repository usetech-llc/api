[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["jsonrpc.types"](../modules/_jsonrpc_types_.md) › [RpcInterface](_jsonrpc_types_.rpcinterface.md)

# Interface: RpcInterface

## Hierarchy

* **RpcInterface**

## Index

### Properties

* [account](_jsonrpc_types_.rpcinterface.md#account)
* [author](_jsonrpc_types_.rpcinterface.md#author)
* [chain](_jsonrpc_types_.rpcinterface.md#chain)
* [contracts](_jsonrpc_types_.rpcinterface.md#contracts)
* [payment](_jsonrpc_types_.rpcinterface.md#payment)
* [rpc](_jsonrpc_types_.rpcinterface.md#rpc)
* [state](_jsonrpc_types_.rpcinterface.md#state)
* [system](_jsonrpc_types_.rpcinterface.md#system)

## Properties

###  account

• **account**: *object*

*Defined in [jsonrpc.types.ts:13](https://github.com/polkadot-js/api/blob/3db15e73a5/packages/rpc-core/src/jsonrpc.types.ts#L13)*

#### Type declaration:

* **nextIndex**(`accountId`: AccountId | Uint8Array | string): *Observable‹Index›*

___

###  author

• **author**: *object*

*Defined in [jsonrpc.types.ts:16](https://github.com/polkadot-js/api/blob/3db15e73a5/packages/rpc-core/src/jsonrpc.types.ts#L16)*

#### Type declaration:

* **insertKey**(`keyType`: Text | string, `suri`: Text | string, `publicKey`: Bytes | Uint8Array | string): *Observable‹Bytes›*

* **pendingExtrinsics**(): *Observable‹Vec‹Extrinsic››*

* **removeExtrinsic**(`bytesOrHash`: ExtrinsicOrHash[]): *Observable‹Vec‹Hash››*

* **rotateKeys**(): *Observable‹Bytes›*

* **submitAndWatchExtrinsic**(`extrinsic`: IExtrinsic): *Observable‹ExtrinsicStatus›*

* **submitExtrinsic**(`extrinsic`: IExtrinsic): *Observable‹Hash›*

___

###  chain

• **chain**: *object*

*Defined in [jsonrpc.types.ts:24](https://github.com/polkadot-js/api/blob/3db15e73a5/packages/rpc-core/src/jsonrpc.types.ts#L24)*

#### Type declaration:

* **getBlock**(`hash?`: BlockHash | Uint8Array | string): *Observable‹SignedBlock›*

* **getBlockHash**(`blockNumber?`: BlockNumber | Uint8Array | number | string): *Observable‹BlockHash›*

* **getFinalizedHead**(): *Observable‹BlockHash›*

* **getHeader**(`hash?`: BlockHash | Uint8Array | string): *Observable‹Header›*

* **subscribeFinalizedHeads**(): *Observable‹Header›*

* **subscribeNewHeads**(): *Observable‹Header›*

___

###  contracts

• **contracts**: *object*

*Defined in [jsonrpc.types.ts:32](https://github.com/polkadot-js/api/blob/3db15e73a5/packages/rpc-core/src/jsonrpc.types.ts#L32)*

#### Type declaration:

* **call**(`callRequest`: ContractCallRequest, `at?`: BlockHash | Uint8Array | string): *Observable‹ContractExecResult›*

* **getStorage**(`address`: AccountId | Uint8Array | string, `key`: H256 | Uint8Array | string, `at?`: BlockHash | Uint8Array | string): *Observable‹Option‹Bytes››*

___

###  payment

• **payment**: *object*

*Defined in [jsonrpc.types.ts:36](https://github.com/polkadot-js/api/blob/3db15e73a5/packages/rpc-core/src/jsonrpc.types.ts#L36)*

#### Type declaration:

* **queryInfo**(`extrinsic`: Bytes | Uint8Array | string, `at?`: BlockHash | Uint8Array | string): *Observable‹RuntimeDispatchInfo›*

___

###  rpc

• **rpc**: *object*

*Defined in [jsonrpc.types.ts:39](https://github.com/polkadot-js/api/blob/3db15e73a5/packages/rpc-core/src/jsonrpc.types.ts#L39)*

#### Type declaration:

* **methods**(): *Observable‹RpcMethods›*

___

###  state

• **state**: *object*

*Defined in [jsonrpc.types.ts:42](https://github.com/polkadot-js/api/blob/3db15e73a5/packages/rpc-core/src/jsonrpc.types.ts#L42)*

#### Type declaration:

* **call**(`method`: Text | string, `data`: Bytes | Uint8Array | string, `at?`: BlockHash | Uint8Array | string): *Observable‹Bytes›*

* **getChildKeys**(`childStorageKey`: any, `childDefinition`: any, `childType`: u32 | Uint8Array | number | string, `key`: any, `at?`: BlockHash | Uint8Array | string): *Observable‹Vec‹StorageKey››*

* **getChildStorage**(`childStorageKey`: any, `childDefinition`: any, `childType`: u32 | Uint8Array | number | string, `key`: any, `at?`: BlockHash | Uint8Array | string): *Observable‹StorageData›*

* **getChildStorageHash**(`childStorageKey`: any, `childDefinition`: any, `childType`: u32 | Uint8Array | number | string, `key`: any, `at?`: BlockHash | Uint8Array | string): *Observable‹Hash›*

* **getChildStorageSize**(`childStorageKey`: any, `childDefinition`: any, `childType`: u32 | Uint8Array | number | string, `key`: any, `at?`: BlockHash | Uint8Array | string): *Observable‹u64›*

* **getKeys**(`key`: any, `at?`: BlockHash | Uint8Array | string): *Observable‹Vec‹StorageKey››*

* **getMetadata**(`at?`: BlockHash | Uint8Array | string): *Observable‹Metadata›*

* **getRuntimeVersion**(`at?`: BlockHash | Uint8Array | string): *Observable‹RuntimeVersion›*

* **getStorage**<**T**>(`key`: any, `block?`: Hash | Uint8Array | string): *Observable‹T›*

* **getStorageHash**(`key`: any, `at?`: BlockHash | Uint8Array | string): *Observable‹Hash›*

* **getStorageSize**(`key`: any, `at?`: BlockHash | Uint8Array | string): *Observable‹u64›*

* **queryStorage**(`keys`: any[], `startBlock`: Hash | Uint8Array | string, `at?`: BlockHash | Uint8Array | string): *Observable‹Vec‹StorageChangeSet››*

* **subscribeRuntimeVersion**(): *Observable‹RuntimeVersion›*

* **subscribeStorage**<**T**>(`keys`: any[]): *Observable‹T›*

___

###  system

• **system**: *object*

*Defined in [jsonrpc.types.ts:58](https://github.com/polkadot-js/api/blob/3db15e73a5/packages/rpc-core/src/jsonrpc.types.ts#L58)*

#### Type declaration:

* **chain**(): *Observable‹Text›*

* **health**(): *Observable‹Health›*

* **name**(): *Observable‹Text›*

* **networkState**(): *Observable‹NetworkState›*

* **peers**(): *Observable‹Vec‹PeerInfo››*

* **properties**(): *Observable‹ChainProperties›*

* **version**(): *Observable‹Text›*
