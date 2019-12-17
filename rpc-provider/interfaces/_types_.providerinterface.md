[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types"](../modules/_types_.md) › [ProviderInterface](_types_.providerinterface.md)

# Interface: ProviderInterface

## Hierarchy

* **ProviderInterface**

## Index

### Properties

* [hasSubscriptions](_types_.providerinterface.md#hassubscriptions)

### Methods

* [clone](_types_.providerinterface.md#clone)
* [disconnect](_types_.providerinterface.md#disconnect)
* [isConnected](_types_.providerinterface.md#isconnected)
* [on](_types_.providerinterface.md#on)
* [send](_types_.providerinterface.md#send)
* [subscribe](_types_.providerinterface.md#subscribe)
* [unsubscribe](_types_.providerinterface.md#unsubscribe)

## Properties

###  hasSubscriptions

• **hasSubscriptions**: *boolean*

*Defined in [packages/rpc-provider/src/types.ts:46](https://github.com/polkadot-js/api/blob/47f135065/packages/rpc-provider/src/types.ts#L46)*

## Methods

###  clone

▸ **clone**(): *[ProviderInterface](_types_.providerinterface.md)*

*Defined in [packages/rpc-provider/src/types.ts:47](https://github.com/polkadot-js/api/blob/47f135065/packages/rpc-provider/src/types.ts#L47)*

**Returns:** *[ProviderInterface](_types_.providerinterface.md)*

___

###  disconnect

▸ **disconnect**(): *void*

*Defined in [packages/rpc-provider/src/types.ts:48](https://github.com/polkadot-js/api/blob/47f135065/packages/rpc-provider/src/types.ts#L48)*

**Returns:** *void*

___

###  isConnected

▸ **isConnected**(): *boolean*

*Defined in [packages/rpc-provider/src/types.ts:49](https://github.com/polkadot-js/api/blob/47f135065/packages/rpc-provider/src/types.ts#L49)*

**Returns:** *boolean*

___

###  on

▸ **on**(`type`: [ProviderInterfaceEmitted](../modules/_types_.md#providerinterfaceemitted), `sub`: [ProviderInterfaceEmitCb](../modules/_types_.md#providerinterfaceemitcb)): *void*

*Defined in [packages/rpc-provider/src/types.ts:50](https://github.com/polkadot-js/api/blob/47f135065/packages/rpc-provider/src/types.ts#L50)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | [ProviderInterfaceEmitted](../modules/_types_.md#providerinterfaceemitted) |
`sub` | [ProviderInterfaceEmitCb](../modules/_types_.md#providerinterfaceemitcb) |

**Returns:** *void*

___

###  send

▸ **send**(`method`: string, `params`: any[]): *Promise‹any›*

*Defined in [packages/rpc-provider/src/types.ts:51](https://github.com/polkadot-js/api/blob/47f135065/packages/rpc-provider/src/types.ts#L51)*

**Parameters:**

Name | Type |
------ | ------ |
`method` | string |
`params` | any[] |

**Returns:** *Promise‹any›*

___

###  subscribe

▸ **subscribe**(`type`: string, `method`: string, `params`: any[], `cb`: [ProviderInterfaceCallback](../modules/_types_.md#providerinterfacecallback)): *Promise‹number›*

*Defined in [packages/rpc-provider/src/types.ts:52](https://github.com/polkadot-js/api/blob/47f135065/packages/rpc-provider/src/types.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | string |
`method` | string |
`params` | any[] |
`cb` | [ProviderInterfaceCallback](../modules/_types_.md#providerinterfacecallback) |

**Returns:** *Promise‹number›*

___

###  unsubscribe

▸ **unsubscribe**(`type`: string, `method`: string, `id`: number): *Promise‹boolean›*

*Defined in [packages/rpc-provider/src/types.ts:53](https://github.com/polkadot-js/api/blob/47f135065/packages/rpc-provider/src/types.ts#L53)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | string |
`method` | string |
`id` | number |

**Returns:** *Promise‹boolean›*
