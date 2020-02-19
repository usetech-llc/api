[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["rx/RxCode"](../modules/_rx_rxcode_.md) › [RxCode](_rx_rxcode_.rxcode.md)

# Class: RxCode

## Hierarchy

  ↳ [Code](_base_code_.code.md)‹"rxjs"›

  ↳ **RxCode**

## Implements

* ContractBase‹"rxjs"›

## Index

### Constructors

* [constructor](_rx_rxcode_.rxcode.md#constructor)

### Properties

* [abi](_rx_rxcode_.rxcode.md#abi)
* [api](_rx_rxcode_.rxcode.md#api)
* [code](_rx_rxcode_.rxcode.md#code)
* [decorateMethod](_rx_rxcode_.rxcode.md#decoratemethod)
* [registry](_rx_rxcode_.rxcode.md#registry)

### Accessors

* [messages](_rx_rxcode_.rxcode.md#messages)

### Methods

* [createBlueprint](_rx_rxcode_.rxcode.md#createblueprint)
* [getMessage](_rx_rxcode_.rxcode.md#getmessage)

## Constructors

###  constructor

\+ **new RxCode**(`api`: ApiRx, `abi`: ContractABIPre | Abi, `wasm`: string | Uint8Array): *[RxCode](_rx_rxcode_.rxcode.md)*

*Overrides [Code](_base_code_.code.md).[constructor](_base_code_.code.md#constructor)*

*Defined in [rx/RxCode.ts:13](https://github.com/polkadot-js/api/blob/cc5b5c81c9/packages/api-contract/src/rx/RxCode.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiRx |
`abi` | ContractABIPre &#124; Abi |
`wasm` | string &#124; Uint8Array |

**Returns:** *[RxCode](_rx_rxcode_.rxcode.md)*

## Properties

###  abi

• **abi**: *Abi*

*Inherited from [Base](_base_util_.base.md).[abi](_base_util_.base.md#abi)*

*Defined in [base/util.ts:14](https://github.com/polkadot-js/api/blob/cc5b5c81c9/packages/api-contract/src/base/util.ts#L14)*

___

###  api

• **api**: *ApiObject‹"rxjs"›*

*Inherited from [Base](_base_util_.base.md).[api](_base_util_.base.md#api)*

*Defined in [base/util.ts:16](https://github.com/polkadot-js/api/blob/cc5b5c81c9/packages/api-contract/src/base/util.ts#L16)*

___

###  code

• **code**: *Uint8Array*

*Inherited from [Code](_base_code_.code.md).[code](_base_code_.code.md#code)*

*Defined in [base/Code.ts:39](https://github.com/polkadot-js/api/blob/cc5b5c81c9/packages/api-contract/src/base/Code.ts#L39)*

___

###  decorateMethod

• **decorateMethod**: *DecorateMethod‹"rxjs"›*

*Inherited from [Base](_base_util_.base.md).[decorateMethod](_base_util_.base.md#decoratemethod)*

*Defined in [base/util.ts:18](https://github.com/polkadot-js/api/blob/cc5b5c81c9/packages/api-contract/src/base/util.ts#L18)*

___

###  registry

• **registry**: *Registry*

*Inherited from [Base](_base_util_.base.md).[registry](_base_util_.base.md#registry)*

*Defined in [base/util.ts:20](https://github.com/polkadot-js/api/blob/cc5b5c81c9/packages/api-contract/src/base/util.ts#L20)*

## Accessors

###  messages

• **get messages**(): *ContractMessage[]*

*Inherited from [Base](_base_util_.base.md).[messages](_base_util_.base.md#messages)*

*Defined in [base/util.ts:31](https://github.com/polkadot-js/api/blob/cc5b5c81c9/packages/api-contract/src/base/util.ts#L31)*

**Returns:** *ContractMessage[]*

## Methods

###  createBlueprint

▸ **createBlueprint**(`maxGas`: number | BN): *[CodePutCode](../interfaces/_base_code_.codeputcode.md)‹"rxjs"›*

*Inherited from [Code](_base_code_.code.md).[createBlueprint](_base_code_.code.md#createblueprint)*

*Defined in [base/Code.ts:47](https://github.com/polkadot-js/api/blob/cc5b5c81c9/packages/api-contract/src/base/Code.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`maxGas` | number &#124; BN |

**Returns:** *[CodePutCode](../interfaces/_base_code_.codeputcode.md)‹"rxjs"›*

___

###  getMessage

▸ **getMessage**(`nameOrIndex?`: string | number): *ContractMessage*

*Inherited from [Base](_base_util_.base.md).[getMessage](_base_util_.base.md#getmessage)*

*Defined in [base/util.ts:42](https://github.com/polkadot-js/api/blob/cc5b5c81c9/packages/api-contract/src/base/util.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`nameOrIndex?` | string &#124; number |

**Returns:** *ContractMessage*
