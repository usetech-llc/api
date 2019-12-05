[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["promise/PromiseContract"](../modules/_promise_promisecontract_.md) › [PromiseContract](_promise_promisecontract_.promisecontract.md)

# Class: PromiseContract

## Hierarchy

  ↳ [Contract](_base_contract_.contract.md)‹"promise"›

  ↳ **PromiseContract**

## Implements

* [ContractBase](../interfaces/_types_.contractbase.md)‹"promise"›

## Index

### Constructors

* [constructor](_promise_promisecontract_.promisecontract.md#constructor)

### Properties

* [abi](_promise_promisecontract_.promisecontract.md#abi)
* [address](_promise_promisecontract_.promisecontract.md#address)
* [api](_promise_promisecontract_.promisecontract.md#api)
* [decorateMethod](_promise_promisecontract_.promisecontract.md#decoratemethod)
* [registry](_promise_promisecontract_.promisecontract.md#registry)

### Accessors

* [messages](_promise_promisecontract_.promisecontract.md#messages)

### Methods

* [call](_promise_promisecontract_.promisecontract.md#call)
* [getMessage](_promise_promisecontract_.promisecontract.md#getmessage)

## Constructors

###  constructor

\+ **new PromiseContract**(`api`: ApiPromise, `abi`: [ContractABIPre](../interfaces/_types_.contractabipre.md) | Abi, `address`: string | AccountId): *[PromiseContract](_promise_promisecontract_.promisecontract.md)*

*Overrides [Contract](_base_contract_.contract.md).[constructor](_base_contract_.contract.md#constructor)*

*Defined in [api-contract/src/promise/PromiseContract.ts:14](https://github.com/polkadot-js/api/blob/01f3666cc/packages/api-contract/src/promise/PromiseContract.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiPromise |
`abi` | [ContractABIPre](../interfaces/_types_.contractabipre.md) &#124; Abi |
`address` | string &#124; AccountId |

**Returns:** *[PromiseContract](_promise_promisecontract_.promisecontract.md)*

## Properties

###  abi

• **abi**: *Abi*

*Implementation of [ContractBase](../interfaces/_types_.contractbase.md).[abi](../interfaces/_types_.contractbase.md#abi)*

*Inherited from [Base](_base_util_.base.md).[abi](_base_util_.base.md#abi)*

*Defined in [api-contract/src/base/util.ts:14](https://github.com/polkadot-js/api/blob/01f3666cc/packages/api-contract/src/base/util.ts#L14)*

___

###  address

• **address**: *Address*

*Inherited from [Contract](_base_contract_.contract.md).[address](_base_contract_.contract.md#address)*

*Defined in [api-contract/src/base/Contract.ts:35](https://github.com/polkadot-js/api/blob/01f3666cc/packages/api-contract/src/base/Contract.ts#L35)*

___

###  api

• **api**: *[ApiObject](../modules/_types_.md#apiobject)‹"promise"›*

*Implementation of [ContractBase](../interfaces/_types_.contractbase.md).[api](../interfaces/_types_.contractbase.md#api)*

*Inherited from [Base](_base_util_.base.md).[api](_base_util_.base.md#api)*

*Defined in [api-contract/src/base/util.ts:16](https://github.com/polkadot-js/api/blob/01f3666cc/packages/api-contract/src/base/util.ts#L16)*

___

###  decorateMethod

• **decorateMethod**: *DecorateMethod‹"promise"›*

*Implementation of [ContractBase](../interfaces/_types_.contractbase.md).[decorateMethod](../interfaces/_types_.contractbase.md#decoratemethod)*

*Inherited from [Base](_base_util_.base.md).[decorateMethod](_base_util_.base.md#decoratemethod)*

*Defined in [api-contract/src/base/util.ts:18](https://github.com/polkadot-js/api/blob/01f3666cc/packages/api-contract/src/base/util.ts#L18)*

___

###  registry

• **registry**: *Registry*

*Inherited from [Base](_base_util_.base.md).[registry](_base_util_.base.md#registry)*

*Defined in [api-contract/src/base/util.ts:20](https://github.com/polkadot-js/api/blob/01f3666cc/packages/api-contract/src/base/util.ts#L20)*

## Accessors

###  messages

• **get messages**(): *[ContractMessage](../interfaces/_types_.contractmessage.md)[]*

*Inherited from [Base](_base_util_.base.md).[messages](_base_util_.base.md#messages)*

*Defined in [api-contract/src/base/util.ts:31](https://github.com/polkadot-js/api/blob/01f3666cc/packages/api-contract/src/base/util.ts#L31)*

**Returns:** *[ContractMessage](../interfaces/_types_.contractmessage.md)[]*

## Methods

###  call

▸ **call**(`as`: "rpc", `message`: string, `value`: BN | number, `gasLimit`: BN | number, ...`params`: any[]): *[ContractCall](../interfaces/_base_contract_.contractcall.md)‹"promise", "rpc"›*

*Inherited from [Contract](_base_contract_.contract.md).[call](_base_contract_.contract.md#call)*

*Defined in [api-contract/src/base/Contract.ts:37](https://github.com/polkadot-js/api/blob/01f3666cc/packages/api-contract/src/base/Contract.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`as` | "rpc" |
`message` | string |
`value` | BN &#124; number |
`gasLimit` | BN &#124; number |
`...params` | any[] |

**Returns:** *[ContractCall](../interfaces/_base_contract_.contractcall.md)‹"promise", "rpc"›*

▸ **call**(`as`: "tx", `message`: string, `value`: BN | number, `gasLimit`: BN | number, ...`params`: any[]): *[ContractCall](../interfaces/_base_contract_.contractcall.md)‹"promise", "tx"›*

*Inherited from [Contract](_base_contract_.contract.md).[call](_base_contract_.contract.md#call)*

*Defined in [api-contract/src/base/Contract.ts:38](https://github.com/polkadot-js/api/blob/01f3666cc/packages/api-contract/src/base/Contract.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`as` | "tx" |
`message` | string |
`value` | BN &#124; number |
`gasLimit` | BN &#124; number |
`...params` | any[] |

**Returns:** *[ContractCall](../interfaces/_base_contract_.contractcall.md)‹"promise", "tx"›*

___

###  getMessage

▸ **getMessage**(`nameOrIndex?`: string | number): *[ContractMessage](../interfaces/_types_.contractmessage.md)*

*Inherited from [Base](_base_util_.base.md).[getMessage](_base_util_.base.md#getmessage)*

*Defined in [api-contract/src/base/util.ts:42](https://github.com/polkadot-js/api/blob/01f3666cc/packages/api-contract/src/base/util.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`nameOrIndex?` | string &#124; number |

**Returns:** *[ContractMessage](../interfaces/_types_.contractmessage.md)*
