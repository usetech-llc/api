[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["base/util"](../modules/_base_util_.md) › [Base](_base_util_.base.md)

# Class: Base <**ApiType**>

## Type parameters

▪ **ApiType**: *ApiTypes*

## Hierarchy

* **Base**

  ↳ [BaseWithTx](_base_util_.basewithtx.md)

## Implements

* ContractBase‹ApiType›

## Index

### Constructors

* [constructor](_base_util_.base.md#constructor)

### Properties

* [abi](_base_util_.base.md#abi)
* [api](_base_util_.base.md#api)
* [decorateMethod](_base_util_.base.md#decoratemethod)
* [registry](_base_util_.base.md#registry)

### Accessors

* [messages](_base_util_.base.md#messages)

### Methods

* [getMessage](_base_util_.base.md#getmessage)

## Constructors

###  constructor

\+ **new Base**(`api`: ApiObject‹ApiType›, `abi`: ContractABIPre | Abi, `decorateMethod`: DecorateMethod‹ApiType›): *[Base](_base_util_.base.md)*

*Defined in [base/util.ts:20](https://github.com/polkadot-js/api/blob/502e54ce5c/packages/api-contract/src/base/util.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiObject‹ApiType› |
`abi` | ContractABIPre &#124; Abi |
`decorateMethod` | DecorateMethod‹ApiType› |

**Returns:** *[Base](_base_util_.base.md)*

## Properties

###  abi

• **abi**: *Abi*

*Defined in [base/util.ts:14](https://github.com/polkadot-js/api/blob/502e54ce5c/packages/api-contract/src/base/util.ts#L14)*

___

###  api

• **api**: *ApiObject‹ApiType›*

*Defined in [base/util.ts:16](https://github.com/polkadot-js/api/blob/502e54ce5c/packages/api-contract/src/base/util.ts#L16)*

___

###  decorateMethod

• **decorateMethod**: *DecorateMethod‹ApiType›*

*Defined in [base/util.ts:18](https://github.com/polkadot-js/api/blob/502e54ce5c/packages/api-contract/src/base/util.ts#L18)*

___

###  registry

• **registry**: *Registry*

*Defined in [base/util.ts:20](https://github.com/polkadot-js/api/blob/502e54ce5c/packages/api-contract/src/base/util.ts#L20)*

## Accessors

###  messages

• **get messages**(): *ContractMessage[]*

*Defined in [base/util.ts:31](https://github.com/polkadot-js/api/blob/502e54ce5c/packages/api-contract/src/base/util.ts#L31)*

**Returns:** *ContractMessage[]*

## Methods

###  getMessage

▸ **getMessage**(`nameOrIndex?`: string | number): *ContractMessage*

*Defined in [base/util.ts:42](https://github.com/polkadot-js/api/blob/502e54ce5c/packages/api-contract/src/base/util.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`nameOrIndex?` | string &#124; number |

**Returns:** *ContractMessage*
