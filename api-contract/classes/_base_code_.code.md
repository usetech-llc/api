[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["base/Code"](../modules/_base_code_.md) › [Code](_base_code_.code.md)

# Class: Code <**ApiType**>

## Type parameters

▪ **ApiType**: *ApiTypes*

## Hierarchy

  ↳ [BaseWithTx](_base_util_.basewithtx.md)‹ApiType›

  ↳ **Code**

  ↳ [PromiseCode](_promise_promisecode_.promisecode.md)

  ↳ [RxCode](_rx_rxcode_.rxcode.md)

## Implements

* [ContractBase](../interfaces/_types_.contractbase.md)‹ApiType›

## Index

### Constructors

* [constructor](_base_code_.code.md#constructor)

### Properties

* [abi](_base_code_.code.md#abi)
* [api](_base_code_.code.md#api)
* [code](_base_code_.code.md#code)
* [decorateMethod](_base_code_.code.md#decoratemethod)
* [registry](_base_code_.code.md#registry)

### Accessors

* [messages](_base_code_.code.md#messages)

### Methods

* [createBlueprint](_base_code_.code.md#createblueprint)
* [getMessage](_base_code_.code.md#getmessage)

## Constructors

###  constructor

\+ **new Code**(`api`: [ApiObject](../modules/_types_.md#apiobject)‹ApiType›, `abi`: [ContractABIPre](../interfaces/_types_.contractabipre.md) | Abi, `decorateMethod`: DecorateMethod‹ApiType›, `wasm`: string | Uint8Array): *[Code](_base_code_.code.md)*

*Overrides [BaseWithTx](_base_util_.basewithtx.md).[constructor](_base_util_.basewithtx.md#constructor)*

*Defined in [api-contract/src/base/Code.ts:39](https://github.com/polkadot-js/api/blob/01f3666cc/packages/api-contract/src/base/Code.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | [ApiObject](../modules/_types_.md#apiobject)‹ApiType› |
`abi` | [ContractABIPre](../interfaces/_types_.contractabipre.md) &#124; Abi |
`decorateMethod` | DecorateMethod‹ApiType› |
`wasm` | string &#124; Uint8Array |

**Returns:** *[Code](_base_code_.code.md)*

## Properties

###  abi

• **abi**: *Abi*

*Implementation of [ContractBase](../interfaces/_types_.contractbase.md).[abi](../interfaces/_types_.contractbase.md#abi)*

*Inherited from [Base](_base_util_.base.md).[abi](_base_util_.base.md#abi)*

*Defined in [api-contract/src/base/util.ts:14](https://github.com/polkadot-js/api/blob/01f3666cc/packages/api-contract/src/base/util.ts#L14)*

___

###  api

• **api**: *[ApiObject](../modules/_types_.md#apiobject)‹ApiType›*

*Implementation of [ContractBase](../interfaces/_types_.contractbase.md).[api](../interfaces/_types_.contractbase.md#api)*

*Inherited from [Base](_base_util_.base.md).[api](_base_util_.base.md#api)*

*Defined in [api-contract/src/base/util.ts:16](https://github.com/polkadot-js/api/blob/01f3666cc/packages/api-contract/src/base/util.ts#L16)*

___

###  code

• **code**: *Uint8Array*

*Defined in [api-contract/src/base/Code.ts:39](https://github.com/polkadot-js/api/blob/01f3666cc/packages/api-contract/src/base/Code.ts#L39)*

___

###  decorateMethod

• **decorateMethod**: *DecorateMethod‹ApiType›*

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

###  createBlueprint

▸ **createBlueprint**(`maxGas`: number | BN): *[CodePutCode](../interfaces/_base_code_.codeputcode.md)‹ApiType›*

*Defined in [api-contract/src/base/Code.ts:47](https://github.com/polkadot-js/api/blob/01f3666cc/packages/api-contract/src/base/Code.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`maxGas` | number &#124; BN |

**Returns:** *[CodePutCode](../interfaces/_base_code_.codeputcode.md)‹ApiType›*

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
