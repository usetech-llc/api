[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["rx/RxContract"](../modules/_rx_rxcontract_.md) › [RxContract](_rx_rxcontract_.rxcontract.md)

# Class: RxContract

## Hierarchy

  ↳ [Contract](_base_contract_.contract.md)‹"rxjs"›

  ↳ **RxContract**

## Implements

* ContractBase‹"rxjs"›

## Index

### Constructors

* [constructor](_rx_rxcontract_.rxcontract.md#constructor)

### Properties

* [abi](_rx_rxcontract_.rxcontract.md#abi)
* [address](_rx_rxcontract_.rxcontract.md#address)
* [api](_rx_rxcontract_.rxcontract.md#api)
* [decorateMethod](_rx_rxcontract_.rxcontract.md#decoratemethod)
* [registry](_rx_rxcontract_.rxcontract.md#registry)

### Accessors

* [hasRpcContractsCall](_rx_rxcontract_.rxcontract.md#hasrpccontractscall)
* [messages](_rx_rxcontract_.rxcontract.md#messages)

### Methods

* [call](_rx_rxcontract_.rxcontract.md#call)
* [getMessage](_rx_rxcontract_.rxcontract.md#getmessage)

## Constructors

###  constructor

\+ **new RxContract**(`api`: ApiRx, `abi`: ContractABIPre | Abi, `address`: string | AccountId): *[RxContract](_rx_rxcontract_.rxcontract.md)*

*Overrides [Contract](_base_contract_.contract.md).[constructor](_base_contract_.contract.md#constructor)*

*Defined in [rx/RxContract.ts:14](https://github.com/polkadot-js/api/blob/4a1e504ca2/packages/api-contract/src/rx/RxContract.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiRx |
`abi` | ContractABIPre &#124; Abi |
`address` | string &#124; AccountId |

**Returns:** *[RxContract](_rx_rxcontract_.rxcontract.md)*

## Properties

###  abi

• **abi**: *Abi*

*Inherited from [Base](_base_util_.base.md).[abi](_base_util_.base.md#abi)*

*Defined in [base/util.ts:14](https://github.com/polkadot-js/api/blob/4a1e504ca2/packages/api-contract/src/base/util.ts#L14)*

___

###  address

• **address**: *Address*

*Inherited from [Contract](_base_contract_.contract.md).[address](_base_contract_.contract.md#address)*

*Defined in [base/Contract.ts:35](https://github.com/polkadot-js/api/blob/4a1e504ca2/packages/api-contract/src/base/Contract.ts#L35)*

___

###  api

• **api**: *ApiObject‹"rxjs"›*

*Inherited from [Base](_base_util_.base.md).[api](_base_util_.base.md#api)*

*Defined in [base/util.ts:16](https://github.com/polkadot-js/api/blob/4a1e504ca2/packages/api-contract/src/base/util.ts#L16)*

___

###  decorateMethod

• **decorateMethod**: *DecorateMethod‹"rxjs"›*

*Inherited from [Base](_base_util_.base.md).[decorateMethod](_base_util_.base.md#decoratemethod)*

*Defined in [base/util.ts:18](https://github.com/polkadot-js/api/blob/4a1e504ca2/packages/api-contract/src/base/util.ts#L18)*

___

###  registry

• **registry**: *Registry*

*Inherited from [Base](_base_util_.base.md).[registry](_base_util_.base.md#registry)*

*Defined in [base/util.ts:20](https://github.com/polkadot-js/api/blob/4a1e504ca2/packages/api-contract/src/base/util.ts#L20)*

## Accessors

###  hasRpcContractsCall

• **get hasRpcContractsCall**(): *boolean*

*Inherited from [BaseWithTxAndRpcCall](_base_util_.basewithtxandrpccall.md).[hasRpcContractsCall](_base_util_.basewithtxandrpccall.md#hasrpccontractscall)*

*Defined in [base/util.ts:69](https://github.com/polkadot-js/api/blob/4a1e504ca2/packages/api-contract/src/base/util.ts#L69)*

**Returns:** *boolean*

___

###  messages

• **get messages**(): *ContractMessage[]*

*Inherited from [Base](_base_util_.base.md).[messages](_base_util_.base.md#messages)*

*Defined in [base/util.ts:31](https://github.com/polkadot-js/api/blob/4a1e504ca2/packages/api-contract/src/base/util.ts#L31)*

**Returns:** *ContractMessage[]*

## Methods

###  call

▸ **call**(`as`: "rpc", `message`: string, `value`: BN | number, `gasLimit`: BN | number, ...`params`: any[]): *[ContractCall](../interfaces/_base_contract_.contractcall.md)‹"rxjs", "rpc"›*

*Inherited from [Contract](_base_contract_.contract.md).[call](_base_contract_.contract.md#call)*

*Defined in [base/Contract.ts:37](https://github.com/polkadot-js/api/blob/4a1e504ca2/packages/api-contract/src/base/Contract.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`as` | "rpc" |
`message` | string |
`value` | BN &#124; number |
`gasLimit` | BN &#124; number |
`...params` | any[] |

**Returns:** *[ContractCall](../interfaces/_base_contract_.contractcall.md)‹"rxjs", "rpc"›*

▸ **call**(`as`: "tx", `message`: string, `value`: BN | number, `gasLimit`: BN | number, ...`params`: any[]): *[ContractCall](../interfaces/_base_contract_.contractcall.md)‹"rxjs", "tx"›*

*Inherited from [Contract](_base_contract_.contract.md).[call](_base_contract_.contract.md#call)*

*Defined in [base/Contract.ts:38](https://github.com/polkadot-js/api/blob/4a1e504ca2/packages/api-contract/src/base/Contract.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`as` | "tx" |
`message` | string |
`value` | BN &#124; number |
`gasLimit` | BN &#124; number |
`...params` | any[] |

**Returns:** *[ContractCall](../interfaces/_base_contract_.contractcall.md)‹"rxjs", "tx"›*

___

###  getMessage

▸ **getMessage**(`nameOrIndex?`: string | number): *ContractMessage*

*Inherited from [Base](_base_util_.base.md).[getMessage](_base_util_.base.md#getmessage)*

*Defined in [base/util.ts:42](https://github.com/polkadot-js/api/blob/4a1e504ca2/packages/api-contract/src/base/util.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`nameOrIndex?` | string &#124; number |

**Returns:** *ContractMessage*
