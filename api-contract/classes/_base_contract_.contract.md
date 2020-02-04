[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["base/Contract"](../modules/_base_contract_.md) › [Contract](_base_contract_.contract.md)

# Class: Contract <**ApiType**>

## Type parameters

▪ **ApiType**: *ApiTypes*

## Hierarchy

  ↳ [BaseWithTxAndRpcCall](_base_util_.basewithtxandrpccall.md)‹ApiType›

  ↳ **Contract**

  ↳ [PromiseContract](_promise_promisecontract_.promisecontract.md)

  ↳ [RxContract](_rx_rxcontract_.rxcontract.md)

## Implements

* ContractBase‹ApiType›

## Index

### Constructors

* [constructor](_base_contract_.contract.md#constructor)

### Properties

* [abi](_base_contract_.contract.md#abi)
* [address](_base_contract_.contract.md#address)
* [api](_base_contract_.contract.md#api)
* [decorateMethod](_base_contract_.contract.md#decoratemethod)
* [registry](_base_contract_.contract.md#registry)

### Accessors

* [hasRpcContractsCall](_base_contract_.contract.md#hasrpccontractscall)
* [messages](_base_contract_.contract.md#messages)

### Methods

* [call](_base_contract_.contract.md#call)
* [getMessage](_base_contract_.contract.md#getmessage)

## Constructors

###  constructor

\+ **new Contract**(`api`: ApiObject‹ApiType›, `abi`: ContractABIPre | Abi, `decorateMethod`: DecorateMethod‹ApiType›, `address`: string | AccountId | Address): *[Contract](_base_contract_.contract.md)*

*Overrides [BaseWithTx](_base_util_.basewithtx.md).[constructor](_base_util_.basewithtx.md#constructor)*

*Defined in [base/Contract.ts:90](https://github.com/polkadot-js/api/blob/9c50e81ab9/packages/api-contract/src/base/Contract.ts#L90)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiObject‹ApiType› |
`abi` | ContractABIPre &#124; Abi |
`decorateMethod` | DecorateMethod‹ApiType› |
`address` | string &#124; AccountId &#124; Address |

**Returns:** *[Contract](_base_contract_.contract.md)*

## Properties

###  abi

• **abi**: *Abi*

*Inherited from [Base](_base_util_.base.md).[abi](_base_util_.base.md#abi)*

*Defined in [base/util.ts:14](https://github.com/polkadot-js/api/blob/9c50e81ab9/packages/api-contract/src/base/util.ts#L14)*

___

###  address

• **address**: *Address*

*Defined in [base/Contract.ts:35](https://github.com/polkadot-js/api/blob/9c50e81ab9/packages/api-contract/src/base/Contract.ts#L35)*

___

###  api

• **api**: *ApiObject‹ApiType›*

*Inherited from [Base](_base_util_.base.md).[api](_base_util_.base.md#api)*

*Defined in [base/util.ts:16](https://github.com/polkadot-js/api/blob/9c50e81ab9/packages/api-contract/src/base/util.ts#L16)*

___

###  decorateMethod

• **decorateMethod**: *DecorateMethod‹ApiType›*

*Inherited from [Base](_base_util_.base.md).[decorateMethod](_base_util_.base.md#decoratemethod)*

*Defined in [base/util.ts:18](https://github.com/polkadot-js/api/blob/9c50e81ab9/packages/api-contract/src/base/util.ts#L18)*

___

###  registry

• **registry**: *Registry*

*Inherited from [Base](_base_util_.base.md).[registry](_base_util_.base.md#registry)*

*Defined in [base/util.ts:20](https://github.com/polkadot-js/api/blob/9c50e81ab9/packages/api-contract/src/base/util.ts#L20)*

## Accessors

###  hasRpcContractsCall

• **get hasRpcContractsCall**(): *boolean*

*Inherited from [BaseWithTxAndRpcCall](_base_util_.basewithtxandrpccall.md).[hasRpcContractsCall](_base_util_.basewithtxandrpccall.md#hasrpccontractscall)*

*Defined in [base/util.ts:69](https://github.com/polkadot-js/api/blob/9c50e81ab9/packages/api-contract/src/base/util.ts#L69)*

**Returns:** *boolean*

___

###  messages

• **get messages**(): *ContractMessage[]*

*Inherited from [Base](_base_util_.base.md).[messages](_base_util_.base.md#messages)*

*Defined in [base/util.ts:31](https://github.com/polkadot-js/api/blob/9c50e81ab9/packages/api-contract/src/base/util.ts#L31)*

**Returns:** *ContractMessage[]*

## Methods

###  call

▸ **call**(`as`: "rpc", `message`: string, `value`: BN | number, `gasLimit`: BN | number, ...`params`: any[]): *[ContractCall](../interfaces/_base_contract_.contractcall.md)‹ApiType, "rpc"›*

*Defined in [base/Contract.ts:37](https://github.com/polkadot-js/api/blob/9c50e81ab9/packages/api-contract/src/base/Contract.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`as` | "rpc" |
`message` | string |
`value` | BN &#124; number |
`gasLimit` | BN &#124; number |
`...params` | any[] |

**Returns:** *[ContractCall](../interfaces/_base_contract_.contractcall.md)‹ApiType, "rpc"›*

▸ **call**(`as`: "tx", `message`: string, `value`: BN | number, `gasLimit`: BN | number, ...`params`: any[]): *[ContractCall](../interfaces/_base_contract_.contractcall.md)‹ApiType, "tx"›*

*Defined in [base/Contract.ts:38](https://github.com/polkadot-js/api/blob/9c50e81ab9/packages/api-contract/src/base/Contract.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`as` | "tx" |
`message` | string |
`value` | BN &#124; number |
`gasLimit` | BN &#124; number |
`...params` | any[] |

**Returns:** *[ContractCall](../interfaces/_base_contract_.contractcall.md)‹ApiType, "tx"›*

___

###  getMessage

▸ **getMessage**(`nameOrIndex?`: string | number): *ContractMessage*

*Inherited from [Base](_base_util_.base.md).[getMessage](_base_util_.base.md#getmessage)*

*Defined in [base/util.ts:42](https://github.com/polkadot-js/api/blob/9c50e81ab9/packages/api-contract/src/base/util.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`nameOrIndex?` | string &#124; number |

**Returns:** *ContractMessage*
