[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["base/Decorate"](../modules/_base_decorate_.md) › [Decorate](_base_decorate_.decorate.md)

# Class: Decorate <**ApiType**>

## Type parameters

▪ **ApiType**: *[ApiTypes](../modules/_types_base_.md#apitypes)*

## Hierarchy

* [Events](_base_events_.events.md)

  ↳ **Decorate**

  ↳ [Init](_base_init_.init.md)

## Index

### Constructors

* [constructor](_base_decorate_.decorate.md#constructor)

### Properties

* [registry](_base_decorate_.decorate.md#registry)

### Accessors

* [hasSubscriptions](_base_decorate_.decorate.md#hassubscriptions)

### Methods

* [createType](_base_decorate_.decorate.md#abstract-createtype)
* [off](_base_decorate_.decorate.md#off)
* [on](_base_decorate_.decorate.md#on)
* [once](_base_decorate_.decorate.md#once)
* [registerTypes](_base_decorate_.decorate.md#abstract-registertypes)

## Constructors

###  constructor

\+ **new Decorate**(`options`: ApiOptions, `type`: [ApiTypes](../modules/_types_base_.md#apitypes), `decorateMethod`: [DecorateMethod](../modules/_types_base_.md#decoratemethod)‹ApiType›): *[Decorate](_base_decorate_.decorate.md)*

*Defined in [api/src/base/Decorate.ts:94](https://github.com/polkadot-js/api/blob/30f5baa906/packages/api/src/base/Decorate.ts#L94)*

**`description`** Create an instance of the class

**`example`** 
<BR>

```javascript
import Api from '@polkadot/api/promise';

const api = new Api().isReady();

api.rpc.subscribeNewHeads((header) => {
  console.log(`new block #${header.number.toNumber()}`);
});
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | ApiOptions | Options object to create API instance or a Provider instance  |
`type` | [ApiTypes](../modules/_types_base_.md#apitypes) | - |
`decorateMethod` | [DecorateMethod](../modules/_types_base_.md#decoratemethod)‹ApiType› | - |

**Returns:** *[Decorate](_base_decorate_.decorate.md)*

## Properties

###  registry

• **registry**: *Registry*

*Defined in [api/src/base/Decorate.ts:41](https://github.com/polkadot-js/api/blob/30f5baa906/packages/api/src/base/Decorate.ts#L41)*

## Accessors

###  hasSubscriptions

• **get hasSubscriptions**(): *boolean*

*Defined in [api/src/base/Decorate.ts:139](https://github.com/polkadot-js/api/blob/30f5baa906/packages/api/src/base/Decorate.ts#L139)*

**Returns:** *boolean*

`true` if the API operates with subscriptions

## Methods

### `Abstract` createType

▸ **createType**<**K**>(`type`: K, ...`params`: any[]): *InterfaceRegistry[K]*

*Defined in [api/src/base/Decorate.ts:132](https://github.com/polkadot-js/api/blob/30f5baa906/packages/api/src/base/Decorate.ts#L132)*

**Type parameters:**

▪ **K**: *InterfaceTypes*

**Parameters:**

Name | Type |
------ | ------ |
`type` | K |
`...params` | any[] |

**Returns:** *InterfaceRegistry[K]*

___

###  off

▸ **off**(`type`: ApiInterfaceEvents, `handler`: function): *this*

*Inherited from [Init](_base_init_.init.md).[off](_base_init_.init.md#off)*

*Defined in [api/src/base/Events.ts:62](https://github.com/polkadot-js/api/blob/30f5baa906/packages/api/src/base/Events.ts#L62)*

**`description`** Remove the given eventemitter handler

**`example`** 
<BR>

```javascript
const handler = (): void => {
 console.log('Connected !);
};

// Start listening
api.on('connected', handler);

// Stop listening
api.off('connected', handler);
```

**Parameters:**

▪ **type**: *ApiInterfaceEvents*

The type of event the callback was attached to. Available events are `connected`, `disconnected`, `ready` and `error`

▪ **handler**: *function*

The callback to unregister.

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  on

▸ **on**(`type`: ApiInterfaceEvents, `handler`: function): *this*

*Inherited from [Init](_base_init_.init.md).[on](_base_init_.init.md#on)*

*Defined in [api/src/base/Events.ts:35](https://github.com/polkadot-js/api/blob/30f5baa906/packages/api/src/base/Events.ts#L35)*

**`description`** Attach an eventemitter handler to listen to a specific event

**`example`** 
<BR>

```javascript
api.on('connected', (): void => {
  console.log('API has been connected to the endpoint');
});

api.on('disconnected', (): void => {
  console.log('API has been disconnected from the endpoint');
});
```

**Parameters:**

▪ **type**: *ApiInterfaceEvents*

The type of event to listen to. Available events are `connected`, `disconnected`, `ready` and `error`

▪ **handler**: *function*

The callback to be called when the event fires. Depending on the event type, it could fire with additional arguments.

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  once

▸ **once**(`type`: ApiInterfaceEvents, `handler`: function): *this*

*Inherited from [Init](_base_init_.init.md).[once](_base_init_.init.md#once)*

*Defined in [api/src/base/Events.ts:87](https://github.com/polkadot-js/api/blob/30f5baa906/packages/api/src/base/Events.ts#L87)*

**`description`** Attach an one-time eventemitter handler to listen to a specific event

**`example`** 
<BR>

```javascript
api.once('connected', (): void => {
  console.log('API has been connected to the endpoint');
});

api.once('disconnected', (): void => {
  console.log('API has been disconnected from the endpoint');
});
```

**Parameters:**

▪ **type**: *ApiInterfaceEvents*

The type of event to listen to. Available events are `connected`, `disconnected`, `ready` and `error`

▪ **handler**: *function*

The callback to be called when the event fires. Depending on the event type, it could fire with additional arguments.

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

### `Abstract` registerTypes

▸ **registerTypes**(`types?`: RegistryTypes): *void*

*Defined in [api/src/base/Decorate.ts:134](https://github.com/polkadot-js/api/blob/30f5baa906/packages/api/src/base/Decorate.ts#L134)*

**Parameters:**

Name | Type |
------ | ------ |
`types?` | RegistryTypes |

**Returns:** *void*
