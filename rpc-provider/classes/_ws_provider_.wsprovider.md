[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["ws/Provider"](../modules/_ws_provider_.md) › [WsProvider](_ws_provider_.wsprovider.md)

# Class: WsProvider

# @polkadot/rpc-provider/ws

**`name`** WsProvider

**`description`** The WebSocket Provider allows sending requests using WebSocket to a WebSocket RPC server TCP port. Unlike the [[HttpProvider]], it does support subscriptions and allows listening to events such as new blocks or balance changes.

**`example`** 
<BR>

```javascript
import Api from '@polkadot/api/promise';
import WsProvider from '@polkadot/rpc-provider/ws';

const provider = new WsProvider('ws://127.0.0.1:9944');
const api = new Api(provider);
```

**`see`** [[HttpProvider]]

## Hierarchy

* **WsProvider**

## Implements

* WSProviderInterface

## Index

### Constructors

* [constructor](_ws_provider_.wsprovider.md#constructor)

### Accessors

* [hasSubscriptions](_ws_provider_.wsprovider.md#hassubscriptions)

### Methods

* [clone](_ws_provider_.wsprovider.md#clone)
* [connect](_ws_provider_.wsprovider.md#connect)
* [disconnect](_ws_provider_.wsprovider.md#disconnect)
* [isConnected](_ws_provider_.wsprovider.md#isconnected)
* [on](_ws_provider_.wsprovider.md#on)
* [send](_ws_provider_.wsprovider.md#send)
* [subscribe](_ws_provider_.wsprovider.md#subscribe)
* [unsubscribe](_ws_provider_.wsprovider.md#unsubscribe)

## Constructors

###  constructor

\+ **new WsProvider**(`endpoint`: string, `autoConnect`: boolean): *[WsProvider](_ws_provider_.wsprovider.md)*

*Defined in [packages/rpc-provider/src/ws/Provider.ts:86](https://github.com/polkadot-js/api/blob/b1a657d68/packages/rpc-provider/src/ws/Provider.ts#L86)*

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`endpoint` | string |  defaults.WS_URL | The endpoint url. Usually `ws://ip:9944` or `wss://ip:9944` |
`autoConnect` | boolean | true | Whether to connect automatically or not.  |

**Returns:** *[WsProvider](_ws_provider_.wsprovider.md)*

## Accessors

###  hasSubscriptions

• **get hasSubscriptions**(): *boolean*

*Defined in [packages/rpc-provider/src/ws/Provider.ts:113](https://github.com/polkadot-js/api/blob/b1a657d68/packages/rpc-provider/src/ws/Provider.ts#L113)*

**`summary`** `true` when this provider supports subscriptions

**Returns:** *boolean*

## Methods

###  clone

▸ **clone**(): *[WsProvider](_ws_provider_.wsprovider.md)*

*Defined in [packages/rpc-provider/src/ws/Provider.ts:120](https://github.com/polkadot-js/api/blob/b1a657d68/packages/rpc-provider/src/ws/Provider.ts#L120)*

**`description`** Returns a clone of the object

**Returns:** *[WsProvider](_ws_provider_.wsprovider.md)*

___

###  connect

▸ **connect**(): *void*

*Defined in [packages/rpc-provider/src/ws/Provider.ts:129](https://github.com/polkadot-js/api/blob/b1a657d68/packages/rpc-provider/src/ws/Provider.ts#L129)*

**`summary`** Manually connect

**`description`** The [WsProvider](_ws_provider_.wsprovider.md) connects automatically by default, however if you decided otherwise, you may
connect manually using this method.

**Returns:** *void*

___

###  disconnect

▸ **disconnect**(): *void*

*Defined in [packages/rpc-provider/src/ws/Provider.ts:145](https://github.com/polkadot-js/api/blob/b1a657d68/packages/rpc-provider/src/ws/Provider.ts#L145)*

**`description`** Manually disconnect from the connection, clearing autoconnect logic

**Returns:** *void*

___

###  isConnected

▸ **isConnected**(): *boolean*

*Defined in [packages/rpc-provider/src/ws/Provider.ts:162](https://github.com/polkadot-js/api/blob/b1a657d68/packages/rpc-provider/src/ws/Provider.ts#L162)*

**`summary`** Whether the node is connected or not.

**Returns:** *boolean*

true if connected

___

###  on

▸ **on**(`type`: [ProviderInterfaceEmitted](../modules/_types_.md#providerinterfaceemitted), `sub`: [ProviderInterfaceEmitCb](../modules/_types_.md#providerinterfaceemitcb)): *void*

*Defined in [packages/rpc-provider/src/ws/Provider.ts:171](https://github.com/polkadot-js/api/blob/b1a657d68/packages/rpc-provider/src/ws/Provider.ts#L171)*

**`summary`** Listens on events after having subscribed using the [subscribe](_ws_provider_.wsprovider.md#subscribe) function.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`type` | [ProviderInterfaceEmitted](../modules/_types_.md#providerinterfaceemitted) | Event |
`sub` | [ProviderInterfaceEmitCb](../modules/_types_.md#providerinterfaceemitcb) | Callback  |

**Returns:** *void*

___

###  send

▸ **send**(`method`: string, `params`: any[], `subscription?`: SubscriptionHandler): *Promise‹any›*

*Defined in [packages/rpc-provider/src/ws/Provider.ts:181](https://github.com/polkadot-js/api/blob/b1a657d68/packages/rpc-provider/src/ws/Provider.ts#L181)*

**`summary`** Send JSON data using WebSockets to configured HTTP Endpoint or queue.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`method` | string | The RPC methods to execute |
`params` | any[] | Encoded paramaters as appliucable for the method |
`subscription?` | SubscriptionHandler | Subscription details (internally used)  |

**Returns:** *Promise‹any›*

___

###  subscribe

▸ **subscribe**(`type`: string, `method`: string, `params`: any[], `callback`: [ProviderInterfaceCallback](../modules/_types_.md#providerinterfacecallback)): *Promise‹number›*

*Defined in [packages/rpc-provider/src/ws/Provider.ts:235](https://github.com/polkadot-js/api/blob/b1a657d68/packages/rpc-provider/src/ws/Provider.ts#L235)*

**`name`** subscribe

**`summary`** Allows subscribing to a specific event.

**`example`** 
<BR>

```javascript
const provider = new WsProvider('ws://127.0.0.1:9944');
const rpc = new Rpc(provider);

rpc.state.subscribeStorage([[storage.balances.freeBalance, <Address>]], (_, values) => {
  console.log(values)
}).then((subscriptionId) => {
  console.log('balance changes subscription id: ', subscriptionId)
})
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`type` | string | Subscription type |
`method` | string | Subscription method |
`params` | any[] | Parameters |
`callback` | [ProviderInterfaceCallback](../modules/_types_.md#providerinterfacecallback) | Callback |

**Returns:** *Promise‹number›*

Promise resolving to the dd of the subscription you can use with [unsubscribe](_ws_provider_.wsprovider.md#unsubscribe).

___

###  unsubscribe

▸ **unsubscribe**(`type`: string, `method`: string, `id`: number): *Promise‹boolean›*

*Defined in [packages/rpc-provider/src/ws/Provider.ts:244](https://github.com/polkadot-js/api/blob/b1a657d68/packages/rpc-provider/src/ws/Provider.ts#L244)*

**`summary`** Allows unsubscribing to subscriptions made with [subscribe](_ws_provider_.wsprovider.md#subscribe).

**Parameters:**

Name | Type |
------ | ------ |
`type` | string |
`method` | string |
`id` | number |

**Returns:** *Promise‹boolean›*
