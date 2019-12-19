[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types"](../modules/_types_.md) › [ContractBase](_types_.contractbase.md)

# Interface: ContractBase <**ApiType**>

## Type parameters

▪ **ApiType**: *ApiTypes*

## Hierarchy

* **ContractBase**

## Implemented by

* [Base](../classes/_base_util_.base.md)
* [BaseWithTx](../classes/_base_util_.basewithtx.md)
* [BaseWithTxAndRpcCall](../classes/_base_util_.basewithtxandrpccall.md)
* [Blueprint](../classes/_base_blueprint_.blueprint.md)
* [Code](../classes/_base_code_.code.md)
* [Contract](../classes/_base_contract_.contract.md)
* [PromiseBlueprint](../classes/_promise_promiseblueprint_.promiseblueprint.md)
* [PromiseCode](../classes/_promise_promisecode_.promisecode.md)
* [PromiseContract](../classes/_promise_promisecontract_.promisecontract.md)
* [RxBlueprint](../classes/_rx_rxblueprint_.rxblueprint.md)
* [RxCode](../classes/_rx_rxcode_.rxcode.md)
* [RxContract](../classes/_rx_rxcontract_.rxcontract.md)

## Index

### Properties

* [abi](_types_.contractbase.md#abi)
* [api](_types_.contractbase.md#api)
* [decorateMethod](_types_.contractbase.md#decoratemethod)
* [getMessage](_types_.contractbase.md#getmessage)
* [messages](_types_.contractbase.md#messages)

## Properties

###  abi

• **abi**: *[InterfaceAbi](_types_.interfaceabi.md)*

*Defined in [api-contract/src/types.ts:18](https://github.com/polkadot-js/api/blob/9196ce85a/packages/api-contract/src/types.ts#L18)*

___

###  api

• **api**: *[ApiObject](../modules/_types_.md#apiobject)‹ApiType›*

*Defined in [api-contract/src/types.ts:19](https://github.com/polkadot-js/api/blob/9196ce85a/packages/api-contract/src/types.ts#L19)*

___

###  decorateMethod

• **decorateMethod**: *DecorateMethod‹ApiType›*

*Defined in [api-contract/src/types.ts:20](https://github.com/polkadot-js/api/blob/9196ce85a/packages/api-contract/src/types.ts#L20)*

___

###  getMessage

• **getMessage**: *function*

*Defined in [api-contract/src/types.ts:21](https://github.com/polkadot-js/api/blob/9196ce85a/packages/api-contract/src/types.ts#L21)*

#### Type declaration:

▸ (`name`: string): *[ContractMessage](_types_.contractmessage.md)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

___

###  messages

• **messages**: *[ContractMessage](_types_.contractmessage.md)[]*

*Defined in [api-contract/src/types.ts:22](https://github.com/polkadot-js/api/blob/9196ce85a/packages/api-contract/src/types.ts#L22)*
