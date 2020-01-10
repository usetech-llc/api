[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["promise/PromiseCode"](../modules/_promise_promisecode_.md) › [PromiseCode](_promise_promisecode_.promisecode.md)

# Class: PromiseCode

## Hierarchy

  ↳ [Code](_base_code_.code.md)‹"promise"›

  ↳ **PromiseCode**

## Implements

* [ContractBase](../interfaces/_types_.contractbase.md)‹"promise"›

## Index

### Constructors

* [constructor](_promise_promisecode_.promisecode.md#constructor)

### Properties

* [abi](_promise_promisecode_.promisecode.md#abi)
* [api](_promise_promisecode_.promisecode.md#api)
* [code](_promise_promisecode_.promisecode.md#code)
* [decorateMethod](_promise_promisecode_.promisecode.md#decoratemethod)
* [registry](_promise_promisecode_.promisecode.md#registry)

### Accessors

* [messages](_promise_promisecode_.promisecode.md#messages)

### Methods

* [createBlueprint](_promise_promisecode_.promisecode.md#createblueprint)
* [getMessage](_promise_promisecode_.promisecode.md#getmessage)

## Constructors

###  constructor

\+ **new PromiseCode**(`api`: ApiPromise, `abi`: [ContractABIPre](../interfaces/_types_.contractabipre.md) | Abi, `wasm`: string | Uint8Array): *[PromiseCode](_promise_promisecode_.promisecode.md)*

*Overrides [Code](_base_code_.code.md).[constructor](_base_code_.code.md#constructor)*

*Defined in [api-contract/src/promise/PromiseCode.ts:13](https://github.com/polkadot-js/api/blob/3a1f284fa8/packages/api-contract/src/promise/PromiseCode.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiPromise |
`abi` | [ContractABIPre](../interfaces/_types_.contractabipre.md) &#124; Abi |
`wasm` | string &#124; Uint8Array |

**Returns:** *[PromiseCode](_promise_promisecode_.promisecode.md)*

## Properties

###  abi

• **abi**: *Abi*

*Implementation of [ContractBase](../interfaces/_types_.contractbase.md).[abi](../interfaces/_types_.contractbase.md#abi)*

*Inherited from [Base](_base_util_.base.md).[abi](_base_util_.base.md#abi)*

*Defined in [api-contract/src/base/util.ts:14](https://github.com/polkadot-js/api/blob/3a1f284fa8/packages/api-contract/src/base/util.ts#L14)*

___

###  api

• **api**: *[ApiObject](../modules/_types_.md#apiobject)‹"promise"›*

*Implementation of [ContractBase](../interfaces/_types_.contractbase.md).[api](../interfaces/_types_.contractbase.md#api)*

*Inherited from [Base](_base_util_.base.md).[api](_base_util_.base.md#api)*

*Defined in [api-contract/src/base/util.ts:16](https://github.com/polkadot-js/api/blob/3a1f284fa8/packages/api-contract/src/base/util.ts#L16)*

___

###  code

• **code**: *Uint8Array*

*Inherited from [Code](_base_code_.code.md).[code](_base_code_.code.md#code)*

*Defined in [api-contract/src/base/Code.ts:39](https://github.com/polkadot-js/api/blob/3a1f284fa8/packages/api-contract/src/base/Code.ts#L39)*

___

###  decorateMethod

• **decorateMethod**: *DecorateMethod‹"promise"›*

*Implementation of [ContractBase](../interfaces/_types_.contractbase.md).[decorateMethod](../interfaces/_types_.contractbase.md#decoratemethod)*

*Inherited from [Base](_base_util_.base.md).[decorateMethod](_base_util_.base.md#decoratemethod)*

*Defined in [api-contract/src/base/util.ts:18](https://github.com/polkadot-js/api/blob/3a1f284fa8/packages/api-contract/src/base/util.ts#L18)*

___

###  registry

• **registry**: *Registry*

*Inherited from [Base](_base_util_.base.md).[registry](_base_util_.base.md#registry)*

*Defined in [api-contract/src/base/util.ts:20](https://github.com/polkadot-js/api/blob/3a1f284fa8/packages/api-contract/src/base/util.ts#L20)*

## Accessors

###  messages

• **get messages**(): *[ContractMessage](../interfaces/_types_.contractmessage.md)[]*

*Inherited from [Base](_base_util_.base.md).[messages](_base_util_.base.md#messages)*

*Defined in [api-contract/src/base/util.ts:31](https://github.com/polkadot-js/api/blob/3a1f284fa8/packages/api-contract/src/base/util.ts#L31)*

**Returns:** *[ContractMessage](../interfaces/_types_.contractmessage.md)[]*

## Methods

###  createBlueprint

▸ **createBlueprint**(`maxGas`: number | BN): *[CodePutCode](../interfaces/_base_code_.codeputcode.md)‹"promise"›*

*Inherited from [Code](_base_code_.code.md)*

*Defined in [api-contract/src/base/Code.ts:47](https://github.com/polkadot-js/api/blob/3a1f284fa8/packages/api-contract/src/base/Code.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`maxGas` | number &#124; BN |

**Returns:** *[CodePutCode](../interfaces/_base_code_.codeputcode.md)‹"promise"›*

___

###  getMessage

▸ **getMessage**(`nameOrIndex?`: string | number): *[ContractMessage](../interfaces/_types_.contractmessage.md)*

*Inherited from [Base](_base_util_.base.md).[getMessage](_base_util_.base.md#getmessage)*

*Defined in [api-contract/src/base/util.ts:42](https://github.com/polkadot-js/api/blob/3a1f284fa8/packages/api-contract/src/base/util.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`nameOrIndex?` | string &#124; number |

**Returns:** *[ContractMessage](../interfaces/_types_.contractmessage.md)*
