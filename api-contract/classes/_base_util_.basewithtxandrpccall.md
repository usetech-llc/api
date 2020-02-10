[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["base/util"](../modules/_base_util_.md) › [BaseWithTxAndRpcCall](_base_util_.basewithtxandrpccall.md)

# Class: BaseWithTxAndRpcCall <**ApiType**>

## Type parameters

▪ **ApiType**: *ApiTypes*

## Hierarchy

  ↳ [BaseWithTx](_base_util_.basewithtx.md)‹ApiType›

  ↳ **BaseWithTxAndRpcCall**

  ↳ [Contract](_base_contract_.contract.md)

## Implements

* ContractBase‹ApiType›

## Index

### Constructors

* [constructor](_base_util_.basewithtxandrpccall.md#constructor)

### Properties

* [abi](_base_util_.basewithtxandrpccall.md#abi)
* [api](_base_util_.basewithtxandrpccall.md#api)
* [decorateMethod](_base_util_.basewithtxandrpccall.md#decoratemethod)
* [registry](_base_util_.basewithtxandrpccall.md#registry)

### Accessors

* [hasRpcContractsCall](_base_util_.basewithtxandrpccall.md#hasrpccontractscall)
* [messages](_base_util_.basewithtxandrpccall.md#messages)

### Methods

* [getMessage](_base_util_.basewithtxandrpccall.md#getmessage)

## Constructors

###  constructor

\+ **new BaseWithTxAndRpcCall**(`api`: ApiObject‹ApiType›, `abi`: ContractABIPre | Abi, `decorateMethod`: DecorateMethod‹ApiType›): *[BaseWithTxAndRpcCall](_base_util_.basewithtxandrpccall.md)*

*Inherited from [BaseWithTx](_base_util_.basewithtx.md).[constructor](_base_util_.basewithtx.md#constructor)*

*Overrides [Base](_base_util_.base.md).[constructor](_base_util_.base.md#constructor)*

*Defined in [base/util.ts:59](https://github.com/polkadot-js/api/blob/6581d779c7/packages/api-contract/src/base/util.ts#L59)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiObject‹ApiType› |
`abi` | ContractABIPre &#124; Abi |
`decorateMethod` | DecorateMethod‹ApiType› |

**Returns:** *[BaseWithTxAndRpcCall](_base_util_.basewithtxandrpccall.md)*

## Properties

###  abi

• **abi**: *Abi*

*Inherited from [Base](_base_util_.base.md).[abi](_base_util_.base.md#abi)*

*Defined in [base/util.ts:14](https://github.com/polkadot-js/api/blob/6581d779c7/packages/api-contract/src/base/util.ts#L14)*

___

###  api

• **api**: *ApiObject‹ApiType›*

*Inherited from [Base](_base_util_.base.md).[api](_base_util_.base.md#api)*

*Defined in [base/util.ts:16](https://github.com/polkadot-js/api/blob/6581d779c7/packages/api-contract/src/base/util.ts#L16)*

___

###  decorateMethod

• **decorateMethod**: *DecorateMethod‹ApiType›*

*Inherited from [Base](_base_util_.base.md).[decorateMethod](_base_util_.base.md#decoratemethod)*

*Defined in [base/util.ts:18](https://github.com/polkadot-js/api/blob/6581d779c7/packages/api-contract/src/base/util.ts#L18)*

___

###  registry

• **registry**: *Registry*

*Inherited from [Base](_base_util_.base.md).[registry](_base_util_.base.md#registry)*

*Defined in [base/util.ts:20](https://github.com/polkadot-js/api/blob/6581d779c7/packages/api-contract/src/base/util.ts#L20)*

## Accessors

###  hasRpcContractsCall

• **get hasRpcContractsCall**(): *boolean*

*Defined in [base/util.ts:69](https://github.com/polkadot-js/api/blob/6581d779c7/packages/api-contract/src/base/util.ts#L69)*

**Returns:** *boolean*

___

###  messages

• **get messages**(): *ContractMessage[]*

*Inherited from [Base](_base_util_.base.md).[messages](_base_util_.base.md#messages)*

*Defined in [base/util.ts:31](https://github.com/polkadot-js/api/blob/6581d779c7/packages/api-contract/src/base/util.ts#L31)*

**Returns:** *ContractMessage[]*

## Methods

###  getMessage

▸ **getMessage**(`nameOrIndex?`: string | number): *ContractMessage*

*Inherited from [Base](_base_util_.base.md).[getMessage](_base_util_.base.md#getmessage)*

*Defined in [base/util.ts:42](https://github.com/polkadot-js/api/blob/6581d779c7/packages/api-contract/src/base/util.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`nameOrIndex?` | string &#124; number |

**Returns:** *ContractMessage*
