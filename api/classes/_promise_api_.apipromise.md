[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["promise/Api"](../modules/_promise_api_.md) › [ApiPromise](_promise_api_.apipromise.md)

# Class: ApiPromise

# @polkadot/api/promise

## Overview

**`name`** ApiPromise

**`description`** 
ApiPromise is a standard JavaScript wrapper around the RPC and interfaces on the Polkadot network. As a full Promise-based, all interface calls return Promises, including the static `.create(...)`. Subscription calls utilise `(value) => {}` callbacks to pass through the latest values.

The API is well suited to real-time applications where either the single-shot state is needed or use is to be made of the subscription-based features of Polkadot (and Substrate) clients.

**`see`** [ApiRx](_rx_api_.apirx.md)

## Usage

Making rpc calls -
<BR>

```javascript
import ApiPromise from '@polkadot/api/promise';

// initialise via static create
const api = await ApiPromise.create();

// make a subscription to the network head
api.rpc.chain.subscribeNewHeads((header) => {
  console.log(`Chain is at #${header.number}`);
});
```
<BR>

Subscribing to chain state -
<BR>

```javascript
import { ApiPromise, WsProvider } from '@polkadot/api';

// initialise a provider with a specific endpoint
const provider = new WsProvider('wss://example.com:9944')

// initialise via isReady & new with specific provider
const api = await new ApiPromise({ provider }).isReady;

// retrieve the block target time
const blockPeriod = await api.query.timestamp.blockPeriod().toNumber();
let last = 0;

// subscribe to the current block timestamp, updates automatically (callback provided)
api.query.timestamp.now((timestamp) => {
  const elapsed = last
    ? `, ${timestamp.toNumber() - last}s since last`
    : '';

  last = timestamp.toNumber();
  console.log(`timestamp ${timestamp}${elapsed} (${blockPeriod}s target)`);
});
```
<BR>

Submitting a transaction -
<BR>

```javascript
import ApiPromise from '@polkadot/api/promise';

ApiPromise.create().then((api) => {
  const nonce = await api.query.system.accountNonce(keyring.alice.address);

  api.tx.balances
    // create transfer
    transfer(keyring.bob.address, 12345)
    // sign the transcation
    .sign(keyring.alice, { nonce })
    // send the transaction (optional status callback)
    .send((status) => {
      console.log(`current status ${status.type}`);
    })
    // retrieve the submitted extrinsic hash
    .then((hash) => {
      console.log(`submitted with hash ${hash}`);
    });
});
```

## Hierarchy

* ApiBase‹"promise"›

  ↳ **ApiPromise**

## Index

### Constructors

* [constructor](_promise_api_.apipromise.md#constructor)

### Properties

* [registry](_promise_api_.apipromise.md#registry)

### Accessors

* [consts](_promise_api_.apipromise.md#consts)
* [derive](_promise_api_.apipromise.md#derive)
* [extrinsicVersion](_promise_api_.apipromise.md#extrinsicversion)
* [genesisHash](_promise_api_.apipromise.md#genesishash)
* [hasSubscriptions](_promise_api_.apipromise.md#hassubscriptions)
* [isReady](_promise_api_.apipromise.md#isready)
* [libraryInfo](_promise_api_.apipromise.md#libraryinfo)
* [query](_promise_api_.apipromise.md#query)
* [queryMulti](_promise_api_.apipromise.md#querymulti)
* [rpc](_promise_api_.apipromise.md#rpc)
* [runtimeMetadata](_promise_api_.apipromise.md#runtimemetadata)
* [runtimeVersion](_promise_api_.apipromise.md#runtimeversion)
* [rx](_promise_api_.apipromise.md#rx)
* [tx](_promise_api_.apipromise.md#tx)
* [type](_promise_api_.apipromise.md#type)

### Methods

* [clone](_promise_api_.apipromise.md#clone)
* [combineLatest](_promise_api_.apipromise.md#combinelatest)
* [createType](_promise_api_.apipromise.md#createtype)
* [disconnect](_promise_api_.apipromise.md#disconnect)
* [findCall](_promise_api_.apipromise.md#findcall)
* [off](_promise_api_.apipromise.md#off)
* [on](_promise_api_.apipromise.md#on)
* [once](_promise_api_.apipromise.md#once)
* [registerTypes](_promise_api_.apipromise.md#registertypes)
* [setSigner](_promise_api_.apipromise.md#setsigner)
* [sign](_promise_api_.apipromise.md#sign)
* [create](_promise_api_.apipromise.md#static-create)

## Constructors

###  constructor

\+ **new ApiPromise**(`options?`: [ApiOptions](../interfaces/_types_.apioptions.md)): *[ApiPromise](_promise_api_.apipromise.md)*

*Overrides void*

*Defined in [api/src/promise/Api.ts:197](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/api/src/promise/Api.ts#L197)*

**`description`** Creates an instance of the ApiPromise class

**`example`** 
<BR>

```javascript
import Api from '@polkadot/api/promise';

new Api().isReady.then((api) => {
  api.rpc.subscribeNewHeads((header) => {
    console.log(`new block #${header.number.toNumber()}`);
  });
});
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options?` | [ApiOptions](../interfaces/_types_.apioptions.md) | Options to create an instance. This can be either [ApiOptions](../interfaces/_types_.apioptions.md) or an [[WsProvider]]. |

**Returns:** *[ApiPromise](_promise_api_.apipromise.md)*

## Properties

###  registry

• **registry**: *Registry*

*Inherited from [Decorate](_base_decorate_.decorate.md).[registry](_base_decorate_.decorate.md#registry)*

*Defined in [api/src/base/Decorate.ts:42](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/api/src/base/Decorate.ts#L42)*

## Accessors

###  consts

• **get consts**(): *Constants*

*Inherited from void*

*Defined in [api/src/base/index.ts:71](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/api/src/base/index.ts#L71)*

**`description`** Contains the parameter types (constants) of all modules.

The values are instances of the appropriate type and are accessible using `section`.`constantName`,

**`example`** 
<BR>

```javascript
console.log(api.consts.democracy.enactmentPeriod.toString())
```

**Returns:** *Constants*

___

###  derive

• **get derive**(): *ReturnType‹decorateDerive›*

*Inherited from void*

*Defined in [api/src/base/index.ts:87](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/api/src/base/index.ts#L87)*

**`description`** Derived results that are injected into the API, allowing for combinations of various query results.

**`example`** 
<BR>

```javascript
api.derive.chain.bestNumber((number) => {
  console.log('best number', number);
});
```

**Returns:** *ReturnType‹decorateDerive›*

___

###  extrinsicVersion

• **get extrinsicVersion**(): *number*

*Inherited from void*

*Defined in [api/src/base/index.ts:94](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/api/src/base/index.ts#L94)*

**`description`** Returns the version of extrinsics in-use on this chain

**Returns:** *number*

___

###  genesisHash

• **get genesisHash**(): *Hash*

*Inherited from void*

*Defined in [api/src/base/index.ts:101](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/api/src/base/index.ts#L101)*

**`description`** Contains the genesis Hash of the attached chain. Apart from being useful to determine the actual chain, it can also be used to sign immortal transactions.

**Returns:** *Hash*

___

###  hasSubscriptions

• **get hasSubscriptions**(): *boolean*

*Inherited from void*

*Overrides [Decorate](_base_decorate_.decorate.md).[hasSubscriptions](_base_decorate_.decorate.md#hassubscriptions)*

*Defined in [api/src/base/index.ts:108](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/api/src/base/index.ts#L108)*

**`description`** `true` when subscriptions are supported

**Returns:** *boolean*

___

###  isReady

• **get isReady**(): *Promise‹[ApiPromise](_promise_api_.apipromise.md)›*

*Defined in [api/src/promise/Api.ts:229](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/api/src/promise/Api.ts#L229)*

**`description`** Promise that returns the first time we are connected and loaded

**Returns:** *Promise‹[ApiPromise](_promise_api_.apipromise.md)›*

___

###  libraryInfo

• **get libraryInfo**(): *string*

*Inherited from void*

*Defined in [api/src/base/index.ts:115](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/api/src/base/index.ts#L115)*

**`description`** The library information name & version (from package.json)

**Returns:** *string*

___

###  query

• **get query**(): *[QueryableStorage](../interfaces/_types_.queryablestorage.md)‹"promise"›*

*Inherited from void*

*Defined in [api/src/base/index.ts:133](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/api/src/base/index.ts#L133)*

**`description`** Contains all the chain state modules and their subsequent methods in the API. These are attached dynamically from the runtime metadata.

All calls inside the namespace, is denoted by `section`.`method` and may take an optional query parameter. As an example, `api.query.timestamp.now()` (current block timestamp) does not take parameters, while `api.query.system.accountNonce(<accountId>)` (retrieving the associated nonce for an account), takes the `AccountId` as a parameter.

**`example`** 
<BR>

```javascript
api.query.balances.freeBalance(<accountId>, (balance) => {
  console.log('new balance', balance);
});
```

**Returns:** *[QueryableStorage](../interfaces/_types_.queryablestorage.md)‹"promise"›*

___

###  queryMulti

• **get queryMulti**(): *[QueryableStorageMulti](../modules/_types_.md#queryablestoragemulti)‹"promise"›*

*Inherited from void*

*Defined in [api/src/base/index.ts:159](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/api/src/base/index.ts#L159)*

**`description`** Allows for the querying of multiple storage entries and the combination thereof into a single result. This is a very optimal way to make multiple queries since it only makes a single connection to the node and retrieves the data over one subscription.

**`example`** 
<BR>

```javascript
const unsub = await api.queryMulti(
  [
    // you can include the storage without any parameters
    api.query.balances.totalIssuance,
    // or you can pass parameters to the storage query
    [api.query.balances.freeBalance, '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY']
  ],
  ([existential, balance]) => {
    console.log(`You have ${balance.sub(existential)} more than the existential deposit`);

    unsub();
  }
);
```

**Returns:** *[QueryableStorageMulti](../modules/_types_.md#queryablestoragemulti)‹"promise"›*

___

###  rpc

• **get rpc**(): *[DecoratedRpc](../modules/_types_.md#decoratedrpc)‹"promise", RpcInterface›*

*Inherited from void*

*Defined in [api/src/base/index.ts:177](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/api/src/base/index.ts#L177)*

**`description`** Contains all the raw rpc sections and their subsequent methods in the API as defined by the jsonrpc interface definitions. Unlike the dynamic `api.query` and `api.tx` sections, these methods are fixed (although extensible with node upgrades) and not determined by the runtime.

RPC endpoints available here allow for the query of chain, node and system information, in addition to providing interfaces for the raw queries of state (using known keys) and the submission of transactions.

**`example`** 
<BR>

```javascript
api.rpc.chain.subscribeNewHeads((header) => {
  console.log('new header', header);
});
```

**Returns:** *[DecoratedRpc](../modules/_types_.md#decoratedrpc)‹"promise", RpcInterface›*

___

###  runtimeMetadata

• **get runtimeMetadata**(): *Metadata*

*Inherited from void*

*Defined in [api/src/base/index.ts:184](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/api/src/base/index.ts#L184)*

**`description`** Yields the current attached runtime metadata. Generally this is only used to construct extrinsics & storage, but is useful for current runtime inspection.

**Returns:** *Metadata*

___

###  runtimeVersion

• **get runtimeVersion**(): *RuntimeVersion*

*Inherited from void*

*Defined in [api/src/base/index.ts:191](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/api/src/base/index.ts#L191)*

**`description`** Contains the version information for the current runtime.

**Returns:** *RuntimeVersion*

___

###  rx

• **get rx**(): *Pick‹[ApiInterfaceRx](../interfaces/_types_.apiinterfacerx.md), "tx" | "rpc"›*

*Inherited from void*

*Defined in [api/src/base/index.ts:198](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/api/src/base/index.ts#L198)*

**`description`** The underlying Rx API interface

**Returns:** *Pick‹[ApiInterfaceRx](../interfaces/_types_.apiinterfacerx.md), "tx" | "rpc"›*

___

###  tx

• **get tx**(): *[SubmittableExtrinsics](../interfaces/_types_.submittableextrinsics.md)‹"promise"›*

*Inherited from void*

*Defined in [api/src/base/index.ts:223](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/api/src/base/index.ts#L223)*

**`description`** Contains all the extrinsic modules and their subsequent methods in the API. It allows for the construction of transactions and the submission thereof. These are attached dynamically from the runtime metadata.

**`example`** 
<BR>

```javascript
api.tx.balances
  .transfer(<recipientId>, <balance>)
  .signAndSend(<keyPair>, ({status}) => {
    console.log('tx status', status.asFinalized.toHex());
  });
```

**Returns:** *[SubmittableExtrinsics](../interfaces/_types_.submittableextrinsics.md)‹"promise"›*

___

###  type

• **get type**(): *[ApiTypes](../modules/_types_.md#apitypes)*

*Inherited from void*

*Defined in [api/src/base/index.ts:205](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/api/src/base/index.ts#L205)*

**`description`** The type of this API instance, either 'rxjs' or 'promise'

**Returns:** *[ApiTypes](../modules/_types_.md#apitypes)*

## Methods

###  clone

▸ **clone**(): *[ApiPromise](_promise_api_.apipromise.md)*

*Defined in [api/src/promise/Api.ts:236](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/api/src/promise/Api.ts#L236)*

**`description`** Returns a clone of this ApiPromise instance (new underlying provider connection)

**Returns:** *[ApiPromise](_promise_api_.apipromise.md)*

___

###  combineLatest

▸ **combineLatest**(`fns`: [CombinatorFunction](../interfaces/_promise_combinator_.combinatorfunction.md) | [[CombinatorFunction](../interfaces/_promise_combinator_.combinatorfunction.md), any][], `callback`: [CombinatorCallback](../modules/_promise_combinator_.md#combinatorcallback)): *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*

*Defined in [api/src/promise/Api.ts:264](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/api/src/promise/Api.ts#L264)*

**`description`** Creates a combinator that can be used to combine the latest results from multiple subscriptions

**`example`** 
<BR>

```javascript
const address = '5DTestUPts3kjeXSTMyerHihn1uwMfLj8vU8sqF7qYrFacT7';

// combines values from balance & nonce as it updates
api.combineLatest([
  api.rpc.chain.subscribeNewHeads,
  [api.query.balances.freeBalance, address],
  (cb) => api.query.system.accountNonce(address, cb)
], ([head, balance, nonce]) => {
  console.log(`#${head.number}: You have ${balance} units, with ${nonce} transactions sent`);
});
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fns` | [CombinatorFunction](../interfaces/_promise_combinator_.combinatorfunction.md) &#124; [[CombinatorFunction](../interfaces/_promise_combinator_.combinatorfunction.md), any][] | An array of function to combine, each in the form of `(cb: (value: void)) => void` |
`callback` | [CombinatorCallback](../modules/_promise_combinator_.md#combinatorcallback) | A callback that will return an Array of all the values this combinator has been applied to |

**Returns:** *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*

___

###  createType

▸ **createType**<**K**>(`type`: K, ...`params`: any[]): *InterfaceRegistry[K]*

*Inherited from void*

*Defined in [api/src/base/index.ts:230](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/api/src/base/index.ts#L230)*

**Type parameters:**

▪ **K**: *InterfaceTypes*

**Parameters:**

Name | Type |
------ | ------ |
`type` | K |
`...params` | any[] |

**Returns:** *InterfaceRegistry[K]*

___

###  disconnect

▸ **disconnect**(): *void*

*Inherited from void*

*Defined in [api/src/base/index.ts:237](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/api/src/base/index.ts#L237)*

**`description`** Disconnect from the underlying provider, halting all network traffic

**Returns:** *void*

___

###  findCall

▸ **findCall**(`callIndex`: Uint8Array | string): *CallFunction*

*Inherited from void*

*Defined in [api/src/base/index.ts:244](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/api/src/base/index.ts#L244)*

**`description`** Finds the definition for a specific [[Call]] based on the index supplied

**Parameters:**

Name | Type |
------ | ------ |
`callIndex` | Uint8Array &#124; string |

**Returns:** *CallFunction*

___

###  off

▸ **off**(`type`: [ApiInterfaceEvents](../modules/_types_.md#apiinterfaceevents), `handler`: function): *this*

*Inherited from [Events](_base_events_.events.md).[off](_base_events_.events.md#off)*

*Defined in [api/src/base/Events.ts:62](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/api/src/base/Events.ts#L62)*

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

*Defined in [api/src/base/Events.ts:35](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/api/src/base/Events.ts#L35)*

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

*Defined in [api/src/base/Events.ts:87](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/api/src/base/Events.ts#L87)*

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

###  registerTypes

▸ **registerTypes**(`types?`: RegistryTypes): *void*

*Inherited from void*

*Overrides [Init](_base_init_.init.md).[registerTypes](_base_init_.init.md#abstract-registertypes)*

*Defined in [api/src/base/index.ts:251](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/api/src/base/index.ts#L251)*

**`description`** Register additional user-defined of chain-specific types in the type registry

**Parameters:**

Name | Type |
------ | ------ |
`types?` | RegistryTypes |

**Returns:** *void*

___

###  setSigner

▸ **setSigner**(`signer`: [Signer](../interfaces/_types_.signer.md)): *void*

*Inherited from void*

*Defined in [api/src/base/index.ts:258](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/api/src/base/index.ts#L258)*

**`description`** Set an external signer which will be used to sign extrinsic when account passed in is not KeyringPair

**Parameters:**

Name | Type |
------ | ------ |
`signer` | [Signer](../interfaces/_types_.signer.md) |

**Returns:** *void*

___

###  sign

▸ **sign**(`signer`: KeyringSigner | string, `data`: SignerPayloadRawBase): *Promise‹string›*

*Inherited from void*

*Defined in [api/src/base/index.ts:265](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/api/src/base/index.ts#L265)*

**`description`** Signs a raw signer payload, string or Uint8Array

**Parameters:**

Name | Type |
------ | ------ |
`signer` | KeyringSigner &#124; string |
`data` | SignerPayloadRawBase |

**Returns:** *Promise‹string›*

___

### `Static` create

▸ **create**(`options?`: [ApiOptions](../interfaces/_types_.apioptions.md)): *Promise‹[ApiPromise](_promise_api_.apipromise.md)›*

*Defined in [api/src/promise/Api.ts:195](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/api/src/promise/Api.ts#L195)*

**`description`** Creates an ApiPromise instance using the supplied provider. Returns an Promise containing the actual Api instance.

**`example`** 
<BR>

```javascript
import Api from '@polkadot/api/promise';

Api.create().then(async (api) => {
  const timestamp = await api.query.timestamp.now();

  console.log(`lastest block timestamp ${timestamp}`);
});
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options?` | [ApiOptions](../interfaces/_types_.apioptions.md) | options that is passed to the class contructor. Can be either [ApiOptions](../interfaces/_types_.apioptions.md) or a provider (see the constructor arguments) |

**Returns:** *Promise‹[ApiPromise](_promise_api_.apipromise.md)›*
