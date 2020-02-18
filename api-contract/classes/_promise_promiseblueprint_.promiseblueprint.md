[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["promise/PromiseBlueprint"](../modules/_promise_promiseblueprint_.md) › [PromiseBlueprint](_promise_promiseblueprint_.promiseblueprint.md)

# Class: PromiseBlueprint

## Hierarchy

  ↳ [Blueprint](_base_blueprint_.blueprint.md)‹"promise"›

  ↳ **PromiseBlueprint**

## Implements

* ContractBase‹"promise"›

## Index

### Constructors

* [constructor](_promise_promiseblueprint_.promiseblueprint.md#constructor)

### Properties

* [abi](_promise_promiseblueprint_.promiseblueprint.md#abi)
* [api](_promise_promiseblueprint_.promiseblueprint.md#api)
* [codeHash](_promise_promiseblueprint_.promiseblueprint.md#codehash)
* [decorateMethod](_promise_promiseblueprint_.promiseblueprint.md#decoratemethod)
* [registry](_promise_promiseblueprint_.promiseblueprint.md#registry)

### Accessors

* [messages](_promise_promiseblueprint_.promiseblueprint.md#messages)

### Methods

* [deployContract](_promise_promiseblueprint_.promiseblueprint.md#deploycontract)
* [getMessage](_promise_promiseblueprint_.promiseblueprint.md#getmessage)

## Constructors

###  constructor

\+ **new PromiseBlueprint**(`api`: ApiPromise, `abi`: ContractABIPre | Abi, `codeHash`: string | Hash): *[PromiseBlueprint](_promise_promiseblueprint_.promiseblueprint.md)*

*Overrides [Blueprint](_base_blueprint_.blueprint.md).[constructor](_base_blueprint_.blueprint.md#constructor)*

*Defined in [promise/PromiseBlueprint.ts:14](https://github.com/polkadot-js/api/blob/aee09c48b9/packages/api-contract/src/promise/PromiseBlueprint.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiPromise |
`abi` | ContractABIPre &#124; Abi |
`codeHash` | string &#124; Hash |

**Returns:** *[PromiseBlueprint](_promise_promiseblueprint_.promiseblueprint.md)*

## Properties

###  abi

• **abi**: *Abi*

*Inherited from [Base](_base_util_.base.md).[abi](_base_util_.base.md#abi)*

*Defined in [base/util.ts:14](https://github.com/polkadot-js/api/blob/aee09c48b9/packages/api-contract/src/base/util.ts#L14)*

___

###  api

• **api**: *ApiObject‹"promise"›*

*Inherited from [Base](_base_util_.base.md).[api](_base_util_.base.md#api)*

*Defined in [base/util.ts:16](https://github.com/polkadot-js/api/blob/aee09c48b9/packages/api-contract/src/base/util.ts#L16)*

___

###  codeHash

• **codeHash**: *Hash*

*Inherited from [Blueprint](_base_blueprint_.blueprint.md).[codeHash](_base_blueprint_.blueprint.md#codehash)*

*Defined in [base/Blueprint.ts:39](https://github.com/polkadot-js/api/blob/aee09c48b9/packages/api-contract/src/base/Blueprint.ts#L39)*

___

###  decorateMethod

• **decorateMethod**: *DecorateMethod‹"promise"›*

*Inherited from [Base](_base_util_.base.md).[decorateMethod](_base_util_.base.md#decoratemethod)*

*Defined in [base/util.ts:18](https://github.com/polkadot-js/api/blob/aee09c48b9/packages/api-contract/src/base/util.ts#L18)*

___

###  registry

• **registry**: *Registry*

*Inherited from [Base](_base_util_.base.md).[registry](_base_util_.base.md#registry)*

*Defined in [base/util.ts:20](https://github.com/polkadot-js/api/blob/aee09c48b9/packages/api-contract/src/base/util.ts#L20)*

## Accessors

###  messages

• **get messages**(): *ContractMessage[]*

*Inherited from [Base](_base_util_.base.md).[messages](_base_util_.base.md#messages)*

*Defined in [base/util.ts:31](https://github.com/polkadot-js/api/blob/aee09c48b9/packages/api-contract/src/base/util.ts#L31)*

**Returns:** *ContractMessage[]*

## Methods

###  deployContract

▸ **deployContract**(`constructorIndex`: number, `endowment`: number | BN, `maxGas`: number | BN, ...`params`: any[]): *[BlueprintCreate](../interfaces/_base_blueprint_.blueprintcreate.md)‹"promise"›*

*Inherited from [Blueprint](_base_blueprint_.blueprint.md).[deployContract](_base_blueprint_.blueprint.md#deploycontract)*

*Defined in [base/Blueprint.ts:47](https://github.com/polkadot-js/api/blob/aee09c48b9/packages/api-contract/src/base/Blueprint.ts#L47)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`constructorIndex` | number | 0 |
`endowment` | number &#124; BN | - |
`maxGas` | number &#124; BN | - |
`...params` | any[] | - |

**Returns:** *[BlueprintCreate](../interfaces/_base_blueprint_.blueprintcreate.md)‹"promise"›*

___

###  getMessage

▸ **getMessage**(`nameOrIndex?`: string | number): *ContractMessage*

*Inherited from [Base](_base_util_.base.md).[getMessage](_base_util_.base.md#getmessage)*

*Defined in [base/util.ts:42](https://github.com/polkadot-js/api/blob/aee09c48b9/packages/api-contract/src/base/util.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`nameOrIndex?` | string &#124; number |

**Returns:** *ContractMessage*
