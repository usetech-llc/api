[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types"](_types_.md)

# External module: "types"

## Index

### Interfaces

* [JsonRpcObject](../interfaces/_types_.jsonrpcobject.md)
* [JsonRpcRequest](../interfaces/_types_.jsonrpcrequest.md)
* [JsonRpcResponseBaseError](../interfaces/_types_.jsonrpcresponsebaseerror.md)
* [ProviderInterface](../interfaces/_types_.providerinterface.md)

### Type aliases

* [JsonRpcResponse](_types_.md#jsonrpcresponse)
* [JsonRpcResponseBase](_types_.md#jsonrpcresponsebase)
* [ProviderInterfaceCallback](_types_.md#providerinterfacecallback)
* [ProviderInterfaceEmitCb](_types_.md#providerinterfaceemitcb)
* [ProviderInterfaceEmitted](_types_.md#providerinterfaceemitted)

## Type aliases

###  JsonRpcResponse

Ƭ **JsonRpcResponse**: *[JsonRpcObject](../interfaces/_types_.jsonrpcobject.md) & [JsonRpcResponseBase](_types_.md#jsonrpcresponsebase)*

*Defined in [packages/rpc-provider/src/types.ts:37](https://github.com/polkadot-js/api/blob/382f7d75c/packages/rpc-provider/src/types.ts#L37)*

___

###  JsonRpcResponseBase

Ƭ **JsonRpcResponseBase**: *JsonRpcResponseSingle & JsonRpcResponseSubscription*

*Defined in [packages/rpc-provider/src/types.ts:35](https://github.com/polkadot-js/api/blob/382f7d75c/packages/rpc-provider/src/types.ts#L35)*

___

###  ProviderInterfaceCallback

Ƭ **ProviderInterfaceCallback**: *function*

*Defined in [packages/rpc-provider/src/types.ts:39](https://github.com/polkadot-js/api/blob/382f7d75c/packages/rpc-provider/src/types.ts#L39)*

#### Type declaration:

▸ (`result`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`result` | any |

___

###  ProviderInterfaceEmitCb

Ƭ **ProviderInterfaceEmitCb**: *function*

*Defined in [packages/rpc-provider/src/types.ts:43](https://github.com/polkadot-js/api/blob/382f7d75c/packages/rpc-provider/src/types.ts#L43)*

#### Type declaration:

▸ (`value?`: any): *any*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | any |

___

###  ProviderInterfaceEmitted

Ƭ **ProviderInterfaceEmitted**: *"connected" | "disconnected" | "error"*

*Defined in [packages/rpc-provider/src/types.ts:41](https://github.com/polkadot-js/api/blob/382f7d75c/packages/rpc-provider/src/types.ts#L41)*
