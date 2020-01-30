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
* [findError](_promise_api_.apipromise.md#finderror)
* [off](_promise_api_.apipromise.md#off)
* [on](_promise_api_.apipromise.md#on)
* [once](_promise_api_.apipromise.md#once)
* [registerTypes](_promise_api_.apipromise.md#registertypes)
* [setSigner](_promise_api_.apipromise.md#setsigner)
* [sign](_promise_api_.apipromise.md#sign)
* [create](_promise_api_.apipromise.md#static-create)

## Constructors

###  constructor

\+ **new ApiPromise**(`options?`: ApiOptions): *[ApiPromise](_promise_api_.apipromise.md)*

*Overrides void*

*Defined in [promise/Api.ts:197](https://github.com/polkadot-js/api/blob/ca7edf1593/packages/api/src/promise/Api.ts#L197)*

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
`options?` | ApiOptions | Options to create an instance. This can be either [[ApiOptions]] or an [[WsProvider]]. |

**Returns:** *[ApiPromise](_promise_api_.apipromise.md)*

## Properties

###  registry

• **registry**: *Registry*

*Inherited from [Init](_base_init_.init.md).[registry](_base_init_.init.md#registry)*

*Defined in [base/Decorate.ts:41](https://github.com/polkadot-js/api/blob/ca7edf1593/packages/api/src/base/Decorate.ts#L41)*

## Accessors

###  consts

• **get consts**(): *Constants*

*Inherited from [ApiPromise](_promise_api_.apipromise.md).[consts](_promise_api_.apipromise.md#consts)*

*Defined in [base/index.ts:75](https://github.com/polkadot-js/api/blob/ca7edf1593/packages/api/src/base/index.ts#L75)*

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

• **get derive**(): *ReturnType‹ApiBase<"promise">["decorateDerive"]›*

*Inherited from [ApiPromise](_promise_api_.apipromise.md).[derive](_promise_api_.apipromise.md#derive)*

*Defined in [base/index.ts:91](https://github.com/polkadot-js/api/blob/ca7edf1593/packages/api/src/base/index.ts#L91)*

**`description`** Derived results that are injected into the API, allowing for combinations of various query results.

**`example`** 
<BR>

```javascript
api.derive.chain.bestNumber((number) => {
  console.log('best number', number);
});
```

**Returns:** *ReturnType‹ApiBase<"promise">["decorateDerive"]›*

___

###  extrinsicVersion

• **get extrinsicVersion**(): *number*

*Inherited from [ApiPromise](_promise_api_.apipromise.md).[extrinsicVersion](_promise_api_.apipromise.md#extrinsicversion)*

*Defined in [base/index.ts:98](https://github.com/polkadot-js/api/blob/ca7edf1593/packages/api/src/base/index.ts#L98)*

**`description`** Returns the version of extrinsics in-use on this chain

**Returns:** *number*

___

###  genesisHash

• **get genesisHash**(): *Hash*

*Inherited from [ApiPromise](_promise_api_.apipromise.md).[genesisHash](_promise_api_.apipromise.md#genesishash)*

*Defined in [base/index.ts:105](https://github.com/polkadot-js/api/blob/ca7edf1593/packages/api/src/base/index.ts#L105)*

**`description`** Contains the genesis Hash of the attached chain. Apart from being useful to determine the actual chain, it can also be used to sign immortal transactions.

**Returns:** *Hash*

___

###  hasSubscriptions

• **get hasSubscriptions**(): *boolean*

*Inherited from [ApiPromise](_promise_api_.apipromise.md).[hasSubscriptions](_promise_api_.apipromise.md#hassubscriptions)*

*Overrides [Init](_base_init_.init.md).[hasSubscriptions](_base_init_.init.md#hassubscriptions)*

*Defined in [base/index.ts:112](https://github.com/polkadot-js/api/blob/ca7edf1593/packages/api/src/base/index.ts#L112)*

**`description`** `true` when subscriptions are supported

**Returns:** *boolean*

___

###  isReady

• **get isReady**(): *Promise‹[ApiPromise](_promise_api_.apipromise.md)›*

*Defined in [promise/Api.ts:232](https://github.com/polkadot-js/api/blob/ca7edf1593/packages/api/src/promise/Api.ts#L232)*

**`description`** Promise that returns the first time we are connected and loaded

**Returns:** *Promise‹[ApiPromise](_promise_api_.apipromise.md)›*

___

###  libraryInfo

• **get libraryInfo**(): *string*

*Inherited from [ApiPromise](_promise_api_.apipromise.md).[libraryInfo](_promise_api_.apipromise.md#libraryinfo)*

*Defined in [base/index.ts:119](https://github.com/polkadot-js/api/blob/ca7edf1593/packages/api/src/base/index.ts#L119)*

**`description`** The library information name & version (from package.json)

**Returns:** *string*

___

###  query

• **get query**(): *QueryableStorage‹"promise"›*

*Inherited from [ApiPromise](_promise_api_.apipromise.md).[query](_promise_api_.apipromise.md#query)*

*Defined in [base/index.ts:137](https://github.com/polkadot-js/api/blob/ca7edf1593/packages/api/src/base/index.ts#L137)*

**`description`** Contains all the chain state modules and their subsequent methods in the API. These are attached dynamically from the runtime metadata.

All calls inside the namespace, is denoted by `section`.`method` and may take an optional query parameter. As an example, `api.query.timestamp.now()` (current block timestamp) does not take parameters, while `api.query.system.accountNonce(<accountId>)` (retrieving the associated nonce for an account), takes the `AccountId` as a parameter.

**`example`** 
<BR>

```javascript
api.query.balances.freeBalance(<accountId>, (balance) => {
  console.log('new balance', balance);
});
```

**Returns:** *QueryableStorage‹"promise"›*

___

###  queryMulti

• **get queryMulti**(): *QueryableStorageMulti‹"promise"›*

*Inherited from [ApiPromise](_promise_api_.apipromise.md).[queryMulti](_promise_api_.apipromise.md#querymulti)*

*Defined in [base/index.ts:163](https://github.com/polkadot-js/api/blob/ca7edf1593/packages/api/src/base/index.ts#L163)*

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

**Returns:** *QueryableStorageMulti‹"promise"›*

___

###  rpc

• **get rpc**(): *DecoratedRpc‹"promise", RpcInterface›*

*Inherited from [ApiPromise](_promise_api_.apipromise.md).[rpc](_promise_api_.apipromise.md#rpc)*

*Defined in [base/index.ts:181](https://github.com/polkadot-js/api/blob/ca7edf1593/packages/api/src/base/index.ts#L181)*

**`description`** Contains all the raw rpc sections and their subsequent methods in the API as defined by the jsonrpc interface definitions. Unlike the dynamic `api.query` and `api.tx` sections, these methods are fixed (although extensible with node upgrades) and not determined by the runtime.

RPC endpoints available here allow for the query of chain, node and system information, in addition to providing interfaces for the raw queries of state (using known keys) and the submission of transactions.

**`example`** 
<BR>

```javascript
api.rpc.chain.subscribeNewHeads((header) => {
  console.log('new header', header);
});
```

**Returns:** *DecoratedRpc‹"promise", RpcInterface›*

___

###  runtimeMetadata

• **get runtimeMetadata**(): *Metadata*

*Inherited from [ApiPromise](_promise_api_.apipromise.md).[runtimeMetadata](_promise_api_.apipromise.md#runtimemetadata)*

*Defined in [base/index.ts:188](https://github.com/polkadot-js/api/blob/ca7edf1593/packages/api/src/base/index.ts#L188)*

**`description`** Yields the current attached runtime metadata. Generally this is only used to construct extrinsics & storage, but is useful for current runtime inspection.

**Returns:** *Metadata*

___

###  runtimeVersion

• **get runtimeVersion**(): *RuntimeVersion*

*Inherited from [ApiPromise](_promise_api_.apipromise.md).[runtimeVersion](_promise_api_.apipromise.md#runtimeversion)*

*Defined in [base/index.ts:195](https://github.com/polkadot-js/api/blob/ca7edf1593/packages/api/src/base/index.ts#L195)*

**`description`** Contains the version information for the current runtime.

**Returns:** *RuntimeVersion*

___

###  rx

• **get rx**(): *Pick‹ApiInterfaceRx, "tx" | "rpc"›*

*Inherited from [ApiPromise](_promise_api_.apipromise.md).[rx](_promise_api_.apipromise.md#rx)*

*Defined in [base/index.ts:202](https://github.com/polkadot-js/api/blob/ca7edf1593/packages/api/src/base/index.ts#L202)*

**`description`** The underlying Rx API interface

**Returns:** *Pick‹ApiInterfaceRx, "tx" | "rpc"›*

___

###  tx

• **get tx**(): *SubmittableExtrinsics‹"promise"›*

*Inherited from [ApiPromise](_promise_api_.apipromise.md).[tx](_promise_api_.apipromise.md#tx)*

*Defined in [base/index.ts:227](https://github.com/polkadot-js/api/blob/ca7edf1593/packages/api/src/base/index.ts#L227)*

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

**Returns:** *SubmittableExtrinsics‹"promise"›*

___

###  type

• **get type**(): *ApiTypes*

*Inherited from [ApiPromise](_promise_api_.apipromise.md).[type](_promise_api_.apipromise.md#type)*

*Defined in [base/index.ts:209](https://github.com/polkadot-js/api/blob/ca7edf1593/packages/api/src/base/index.ts#L209)*

**`description`** The type of this API instance, either 'rxjs' or 'promise'

**Returns:** *ApiTypes*

## Methods

###  clone

▸ **clone**(): *[ApiPromise](_promise_api_.apipromise.md)*

*Defined in [promise/Api.ts:239](https://github.com/polkadot-js/api/blob/ca7edf1593/packages/api/src/promise/Api.ts#L239)*

**`description`** Returns a clone of this ApiPromise instance (new underlying provider connection)

**Returns:** *[ApiPromise](_promise_api_.apipromise.md)*

___

###  combineLatest

▸ **combineLatest**(`fns`: [CombinatorFunction](../interfaces/_promise_combinator_.combinatorfunction.md) | [[CombinatorFunction](../interfaces/_promise_combinator_.combinatorfunction.md), any][], `callback`: [CombinatorCallback](../modules/_promise_combinator_.md#combinatorcallback)): *UnsubscribePromise*

*Defined in [promise/Api.ts:267](https://github.com/polkadot-js/api/blob/ca7edf1593/packages/api/src/promise/Api.ts#L267)*

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

**Returns:** *UnsubscribePromise*

___

###  createType

▸ **createType**<**K**>(`type`: K, ...`params`: any[]): *InterfaceRegistry[K]*

*Inherited from [ApiPromise](_promise_api_.apipromise.md).[createType](_promise_api_.apipromise.md#createtype)*

*Overrides [Init](_base_init_.init.md).[createType](_base_init_.init.md#abstract-createtype)*

*Defined in [base/index.ts:234](https://github.com/polkadot-js/api/blob/ca7edf1593/packages/api/src/base/index.ts#L234)*

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

*Inherited from [ApiPromise](_promise_api_.apipromise.md).[disconnect](_promise_api_.apipromise.md#disconnect)*

*Defined in [base/index.ts:241](https://github.com/polkadot-js/api/blob/ca7edf1593/packages/api/src/base/index.ts#L241)*

**`description`** Disconnect from the underlying provider, halting all network traffic

**Returns:** *void*

___

###  findCall

▸ **findCall**(`callIndex`: Uint8Array | string): *CallFunction*

*Inherited from [ApiPromise](_promise_api_.apipromise.md).[findCall](_promise_api_.apipromise.md#findcall)*

*Defined in [base/index.ts:248](https://github.com/polkadot-js/api/blob/ca7edf1593/packages/api/src/base/index.ts#L248)*

**`description`** Finds the definition for a specific [[CallFunction]] based on the index supplied

**Parameters:**

Name | Type |
------ | ------ |
`callIndex` | Uint8Array &#124; string |

**Returns:** *CallFunction*

___

###  findError

▸ **findError**(`errorIndex`: Uint8Array | string): *RegistryError*

*Inherited from [ApiPromise](_promise_api_.apipromise.md).[findError](_promise_api_.apipromise.md#finderror)*

*Defined in [base/index.ts:255](https://github.com/polkadot-js/api/blob/ca7edf1593/packages/api/src/base/index.ts#L255)*

**`description`** Finds the definition for a specific [[RegistryError]] based on the index supplied

**Parameters:**

Name | Type |
------ | ------ |
`errorIndex` | Uint8Array &#124; string |

**Returns:** *RegistryError*

___

###  off

▸ **off**(`type`: ApiInterfaceEvents, `handler`: function): *this*

*Inherited from [Init](_base_init_.init.md).[off](_base_init_.init.md#off)*

*Defined in [base/Events.ts:62](https://github.com/polkadot-js/api/blob/ca7edf1593/packages/api/src/base/Events.ts#L62)*

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

*Defined in [base/Events.ts:35](https://github.com/polkadot-js/api/blob/ca7edf1593/packages/api/src/base/Events.ts#L35)*

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

*Defined in [base/Events.ts:87](https://github.com/polkadot-js/api/blob/ca7edf1593/packages/api/src/base/Events.ts#L87)*

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

###  registerTypes

▸ **registerTypes**(`types?`: RegistryTypes): *void*

*Inherited from [ApiPromise](_promise_api_.apipromise.md).[registerTypes](_promise_api_.apipromise.md#registertypes)*

*Overrides [Init](_base_init_.init.md).[registerTypes](_base_init_.init.md#abstract-registertypes)*

*Defined in [base/index.ts:262](https://github.com/polkadot-js/api/blob/ca7edf1593/packages/api/src/base/index.ts#L262)*

**`description`** Register additional user-defined of chain-specific types in the type registry

**Parameters:**

Name | Type |
------ | ------ |
`types?` | RegistryTypes |

**Returns:** *void*

___

###  setSigner

▸ **setSigner**(`signer`: Signer): *void*

*Inherited from [ApiPromise](_promise_api_.apipromise.md).[setSigner](_promise_api_.apipromise.md#setsigner)*

*Defined in [base/index.ts:269](https://github.com/polkadot-js/api/blob/ca7edf1593/packages/api/src/base/index.ts#L269)*

**`description`** Set an external signer which will be used to sign extrinsic when account passed in is not KeyringPair

**Parameters:**

Name | Type |
------ | ------ |
`signer` | Signer |

**Returns:** *void*

___

###  sign

▸ **sign**(`address`: KeyringSigner | string, `data`: SignerPayloadRawBase, `__namedParameters`: object): *Promise‹string›*

*Inherited from [ApiPromise](_promise_api_.apipromise.md).[sign](_promise_api_.apipromise.md#sign)*

*Defined in [base/index.ts:276](https://github.com/polkadot-js/api/blob/ca7edf1593/packages/api/src/base/index.ts#L276)*

**`description`** Signs a raw signer payload, string or Uint8Array

**Parameters:**

▪ **address**: *KeyringSigner | string*

▪ **data**: *SignerPayloadRawBase*

▪`Default value`  **__namedParameters**: *object*= {}

Name | Type |
------ | ------ |
`signer` | undefined &#124; Signer |

**Returns:** *Promise‹string›*

___

### `Static` create

▸ **create**(`options?`: ApiOptions): *Promise‹[ApiPromise](_promise_api_.apipromise.md)›*

*Defined in [promise/Api.ts:195](https://github.com/polkadot-js/api/blob/ca7edf1593/packages/api/src/promise/Api.ts#L195)*

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
`options?` | ApiOptions | options that is passed to the class contructor. Can be either [[ApiOptions]] or a provider (see the constructor arguments) |

**Returns:** *Promise‹[ApiPromise](_promise_api_.apipromise.md)›*
