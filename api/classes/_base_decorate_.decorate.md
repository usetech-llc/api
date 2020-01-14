[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["base/Decorate"](../modules/_base_decorate_.md) › [Decorate](_base_decorate_.decorate.md)

# Class: Decorate <**ApiType**>

## Type parameters

▪ **ApiType**: *[ApiTypes](../modules/_types_.md#apitypes)*

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

* [off](_base_decorate_.decorate.md#off)
* [on](_base_decorate_.decorate.md#on)
* [once](_base_decorate_.decorate.md#once)

## Constructors

###  constructor

\+ **new Decorate**(`options`: [ApiOptions](../interfaces/_types_.apioptions.md), `type`: [ApiTypes](../modules/_types_.md#apitypes), `decorateMethod`: [DecorateMethod](../modules/_types_.md#decoratemethod)‹ApiType›): *[Decorate](_base_decorate_.decorate.md)*

*Defined in [api/src/base/Decorate.ts:97](https://github.com/polkadot-js/api/blob/07ca18502b/packages/api/src/base/Decorate.ts#L97)*

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
`options` | [ApiOptions](../interfaces/_types_.apioptions.md) | Options object to create API instance or a Provider instance  |
`type` | [ApiTypes](../modules/_types_.md#apitypes) | - |
`decorateMethod` | [DecorateMethod](../modules/_types_.md#decoratemethod)‹ApiType› | - |

**Returns:** *[Decorate](_base_decorate_.decorate.md)*

## Properties

###  registry

• **registry**: *Registry*

*Defined in [api/src/base/Decorate.ts:44](https://github.com/polkadot-js/api/blob/07ca18502b/packages/api/src/base/Decorate.ts#L44)*

## Accessors

###  hasSubscriptions

• **get hasSubscriptions**(): *boolean*

*Defined in [api/src/base/Decorate.ts:138](https://github.com/polkadot-js/api/blob/07ca18502b/packages/api/src/base/Decorate.ts#L138)*

**Returns:** *boolean*

`true` if the API operates with subscriptions

## Methods

###  off

▸ **off**(`type`: [ApiInterfaceEvents](../modules/_types_.md#apiinterfaceevents), `handler`: function): *this*

*Inherited from [Events](_base_events_.events.md).[off](_base_events_.events.md#off)*

*Defined in [api/src/base/Events.ts:62](https://github.com/polkadot-js/api/blob/07ca18502b/packages/api/src/base/Events.ts#L62)*

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

▪ **type**: *[ApiInterfaceEvents](../modules/_types_.md#apiinterfaceevents)*

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

▸ **on**(`type`: [ApiInterfaceEvents](../modules/_types_.md#apiinterfaceevents), `handler`: function): *this*

*Inherited from [Events](_base_events_.events.md).[on](_base_events_.events.md#on)*

*Defined in [api/src/base/Events.ts:35](https://github.com/polkadot-js/api/blob/07ca18502b/packages/api/src/base/Events.ts#L35)*

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

▪ **type**: *[ApiInterfaceEvents](../modules/_types_.md#apiinterfaceevents)*

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

▸ **once**(`type`: [ApiInterfaceEvents](../modules/_types_.md#apiinterfaceevents), `handler`: function): *this*

*Inherited from [Events](_base_events_.events.md).[once](_base_events_.events.md#once)*

*Defined in [api/src/base/Events.ts:87](https://github.com/polkadot-js/api/blob/07ca18502b/packages/api/src/base/Events.ts#L87)*

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

▪ **type**: *[ApiInterfaceEvents](../modules/_types_.md#apiinterfaceevents)*

The type of event to listen to. Available events are `connected`, `disconnected`, `ready` and `error`

▪ **handler**: *function*

The callback to be called when the event fires. Depending on the event type, it could fire with additional arguments.

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*
