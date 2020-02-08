[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["base/util"](../modules/_base_util_.md) › [BaseWithTx](_base_util_.basewithtx.md)

# Class: BaseWithTx <**ApiType**>

## Type parameters

▪ **ApiType**: *ApiTypes*

## Hierarchy

* [Base](_base_util_.base.md)‹ApiType›

  ↳ **BaseWithTx**

  ↳ [BaseWithTxAndRpcCall](_base_util_.basewithtxandrpccall.md)

  ↳ [Blueprint](_base_blueprint_.blueprint.md)

  ↳ [Code](_base_code_.code.md)

## Implements

* ContractBase‹ApiType›

## Index

### Constructors

* [constructor](_base_util_.basewithtx.md#constructor)

### Properties

* [abi](_base_util_.basewithtx.md#abi)
* [api](_base_util_.basewithtx.md#api)
* [decorateMethod](_base_util_.basewithtx.md#decoratemethod)
* [registry](_base_util_.basewithtx.md#registry)

### Accessors

* [messages](_base_util_.basewithtx.md#messages)

### Methods

* [getMessage](_base_util_.basewithtx.md#getmessage)

## Constructors

###  constructor

\+ **new BaseWithTx**(`api`: ApiObject‹ApiType›, `abi`: ContractABIPre | Abi, `decorateMethod`: DecorateMethod‹ApiType›): *[BaseWithTx](_base_util_.basewithtx.md)*

*Overrides [Base](_base_util_.base.md).[constructor](_base_util_.base.md#constructor)*

*Defined in [base/util.ts:59](https://github.com/polkadot-js/api/blob/d8141198e1/packages/api-contract/src/base/util.ts#L59)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiObject‹ApiType› |
`abi` | ContractABIPre &#124; Abi |
`decorateMethod` | DecorateMethod‹ApiType› |

**Returns:** *[BaseWithTx](_base_util_.basewithtx.md)*

## Properties

###  abi

• **abi**: *Abi*

*Inherited from [Base](_base_util_.base.md).[abi](_base_util_.base.md#abi)*

*Defined in [base/util.ts:14](https://github.com/polkadot-js/api/blob/d8141198e1/packages/api-contract/src/base/util.ts#L14)*

___

###  api

• **api**: *ApiObject‹ApiType›*

*Inherited from [Base](_base_util_.base.md).[api](_base_util_.base.md#api)*

*Defined in [base/util.ts:16](https://github.com/polkadot-js/api/blob/d8141198e1/packages/api-contract/src/base/util.ts#L16)*

___

###  decorateMethod

• **decorateMethod**: *DecorateMethod‹ApiType›*

*Inherited from [Base](_base_util_.base.md).[decorateMethod](_base_util_.base.md#decoratemethod)*

*Defined in [base/util.ts:18](https://github.com/polkadot-js/api/blob/d8141198e1/packages/api-contract/src/base/util.ts#L18)*

___

###  registry

• **registry**: *Registry*

*Inherited from [Base](_base_util_.base.md).[registry](_base_util_.base.md#registry)*

*Defined in [base/util.ts:20](https://github.com/polkadot-js/api/blob/d8141198e1/packages/api-contract/src/base/util.ts#L20)*

## Accessors

###  messages

• **get messages**(): *ContractMessage[]*

*Inherited from [Base](_base_util_.base.md).[messages](_base_util_.base.md#messages)*

*Defined in [base/util.ts:31](https://github.com/polkadot-js/api/blob/d8141198e1/packages/api-contract/src/base/util.ts#L31)*

**Returns:** *ContractMessage[]*

## Methods

###  getMessage

▸ **getMessage**(`nameOrIndex?`: string | number): *ContractMessage*

*Inherited from [Base](_base_util_.base.md).[getMessage](_base_util_.base.md#getmessage)*

*Defined in [base/util.ts:42](https://github.com/polkadot-js/api/blob/d8141198e1/packages/api-contract/src/base/util.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`nameOrIndex?` | string &#124; number |

**Returns:** *ContractMessage*
