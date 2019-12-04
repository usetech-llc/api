[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["base/Init"](../modules/_base_init_.md) › [Init](_base_init_.init.md)

# Class: Init <**ApiType**>

## Type parameters

▪ **ApiType**: *[ApiTypes](../modules/_types_.md#apitypes)*

## Hierarchy

  ↳ [Decorate](_base_decorate_.decorate.md)‹ApiType›

  ↳ **Init**

## Index

### Constructors

* [constructor](_base_init_.init.md#constructor)

### Properties

* [registry](_base_init_.init.md#registry)

### Accessors

* [hasSubscriptions](_base_init_.init.md#hassubscriptions)

### Methods

* [off](_base_init_.init.md#off)
* [on](_base_init_.init.md#on)
* [once](_base_init_.init.md#once)
* [registerTypes](_base_init_.init.md#abstract-registertypes)

## Constructors

###  constructor

\+ **new Init**(`options`: [ApiOptions](../interfaces/_types_.apioptions.md), `type`: [ApiTypes](../modules/_types_.md#apitypes), `decorateMethod`: [DecorateMethod](../modules/_types_.md#decoratemethod)‹ApiType›): *[Init](_base_init_.init.md)*

*Overrides [Decorate](_base_decorate_.decorate.md).[constructor](_base_decorate_.decorate.md#constructor)*

*Defined in [api/src/base/Init.ts:24](https://github.com/polkadot-js/api/blob/c8dd26b0d/packages/api/src/base/Init.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [ApiOptions](../interfaces/_types_.apioptions.md) |
`type` | [ApiTypes](../modules/_types_.md#apitypes) |
`decorateMethod` | [DecorateMethod](../modules/_types_.md#decoratemethod)‹ApiType› |

**Returns:** *[Init](_base_init_.init.md)*

## Properties

###  registry

• **registry**: *Registry*

*Inherited from [Decorate](_base_decorate_.decorate.md).[registry](_base_decorate_.decorate.md#registry)*

*Defined in [api/src/base/Decorate.ts:42](https://github.com/polkadot-js/api/blob/c8dd26b0d/packages/api/src/base/Decorate.ts#L42)*

## Accessors

###  hasSubscriptions

• **get hasSubscriptions**(): *boolean*

*Inherited from [Decorate](_base_decorate_.decorate.md).[hasSubscriptions](_base_decorate_.decorate.md#hassubscriptions)*

*Defined in [api/src/base/Decorate.ts:136](https://github.com/polkadot-js/api/blob/c8dd26b0d/packages/api/src/base/Decorate.ts#L136)*

**Returns:** *boolean*

`true` if the API operates with subscriptions

## Methods

###  off

▸ **off**(`type`: [ApiInterfaceEvents](../modules/_types_.md#apiinterfaceevents), `handler`: function): *this*

*Inherited from [Events](_base_events_.events.md).[off](_base_events_.events.md#off)*

*Defined in [api/src/base/Events.ts:62](https://github.com/polkadot-js/api/blob/c8dd26b0d/packages/api/src/base/Events.ts#L62)*

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

*Defined in [api/src/base/Events.ts:35](https://github.com/polkadot-js/api/blob/c8dd26b0d/packages/api/src/base/Events.ts#L35)*

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

*Defined in [api/src/base/Events.ts:87](https://github.com/polkadot-js/api/blob/c8dd26b0d/packages/api/src/base/Events.ts#L87)*

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

___

### `Abstract` registerTypes

▸ **registerTypes**(`types?`: RegistryTypes): *void*

*Defined in [api/src/base/Init.ts:51](https://github.com/polkadot-js/api/blob/c8dd26b0d/packages/api/src/base/Init.ts#L51)*

**Parameters:**

Name | Type |
------ | ------ |
`types?` | RegistryTypes |

**Returns:** *void*
