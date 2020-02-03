[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["promise/PromiseCode"](../modules/_promise_promisecode_.md) › [PromiseCode](_promise_promisecode_.promisecode.md)

# Class: PromiseCode

## Hierarchy

  ↳ [Code](_base_code_.code.md)‹"promise"›

  ↳ **PromiseCode**

## Implements

* ContractBase‹"promise"›

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

\+ **new PromiseCode**(`api`: ApiPromise, `abi`: ContractABIPre | Abi, `wasm`: string | Uint8Array): *[PromiseCode](_promise_promisecode_.promisecode.md)*

*Overrides [Code](_base_code_.code.md).[constructor](_base_code_.code.md#constructor)*

*Defined in [promise/PromiseCode.ts:13](https://github.com/polkadot-js/api/blob/eeb8d20e58/packages/api-contract/src/promise/PromiseCode.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiPromise |
`abi` | ContractABIPre &#124; Abi |
`wasm` | string &#124; Uint8Array |

**Returns:** *[PromiseCode](_promise_promisecode_.promisecode.md)*

## Properties

###  abi

• **abi**: *Abi*

*Inherited from [Base](_base_util_.base.md).[abi](_base_util_.base.md#abi)*

*Defined in [base/util.ts:14](https://github.com/polkadot-js/api/blob/eeb8d20e58/packages/api-contract/src/base/util.ts#L14)*

___

###  api

• **api**: *ApiObject‹"promise"›*

*Inherited from [Base](_base_util_.base.md).[api](_base_util_.base.md#api)*

*Defined in [base/util.ts:16](https://github.com/polkadot-js/api/blob/eeb8d20e58/packages/api-contract/src/base/util.ts#L16)*

___

###  code

• **code**: *Uint8Array*

*Inherited from [Code](_base_code_.code.md).[code](_base_code_.code.md#code)*

*Defined in [base/Code.ts:39](https://github.com/polkadot-js/api/blob/eeb8d20e58/packages/api-contract/src/base/Code.ts#L39)*

___

###  decorateMethod

• **decorateMethod**: *DecorateMethod‹"promise"›*

*Inherited from [Base](_base_util_.base.md).[decorateMethod](_base_util_.base.md#decoratemethod)*

*Defined in [base/util.ts:18](https://github.com/polkadot-js/api/blob/eeb8d20e58/packages/api-contract/src/base/util.ts#L18)*

___

###  registry

• **registry**: *Registry*

*Inherited from [Base](_base_util_.base.md).[registry](_base_util_.base.md#registry)*

*Defined in [base/util.ts:20](https://github.com/polkadot-js/api/blob/eeb8d20e58/packages/api-contract/src/base/util.ts#L20)*

## Accessors

###  messages

• **get messages**(): *ContractMessage[]*

*Inherited from [Base](_base_util_.base.md).[messages](_base_util_.base.md#messages)*

*Defined in [base/util.ts:31](https://github.com/polkadot-js/api/blob/eeb8d20e58/packages/api-contract/src/base/util.ts#L31)*

**Returns:** *ContractMessage[]*

## Methods

###  createBlueprint

▸ **createBlueprint**(`maxGas`: number | BN): *[CodePutCode](../interfaces/_base_code_.codeputcode.md)‹"promise"›*

*Inherited from [Code](_base_code_.code.md).[createBlueprint](_base_code_.code.md#createblueprint)*

*Defined in [base/Code.ts:47](https://github.com/polkadot-js/api/blob/eeb8d20e58/packages/api-contract/src/base/Code.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`maxGas` | number &#124; BN |

**Returns:** *[CodePutCode](../interfaces/_base_code_.codeputcode.md)‹"promise"›*

___

###  getMessage

▸ **getMessage**(`nameOrIndex?`: string | number): *ContractMessage*

*Inherited from [Base](_base_util_.base.md).[getMessage](_base_util_.base.md#getmessage)*

*Defined in [base/util.ts:42](https://github.com/polkadot-js/api/blob/eeb8d20e58/packages/api-contract/src/base/util.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`nameOrIndex?` | string &#124; number |

**Returns:** *ContractMessage*
