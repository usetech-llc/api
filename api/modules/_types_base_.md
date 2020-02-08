[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types/base"](_types_base_.md)

# External module: "types/base"

## Index

### Interfaces

* [DecorateMethodOptions](../interfaces/_types_base_.decoratemethodoptions.md)
* [PromiseResult](../interfaces/_types_base_.promiseresult.md)
* [RxResult](../interfaces/_types_base_.rxresult.md)

### Type aliases

* [ApiTypes](_types_base_.md#apitypes)
* [DecorateMethod](_types_base_.md#decoratemethod)
* [MethodResult](_types_base_.md#methodresult)
* [ObsInnerType](_types_base_.md#obsinnertype)
* [PromiseOrObs](_types_base_.md#promiseorobs)
* [UnsubscribePromise](_types_base_.md#unsubscribepromise)

## Type aliases

###  ApiTypes

Ƭ **ApiTypes**: *"promise" | "rxjs"*

*Defined in [api/src/types/base.ts:28](https://github.com/polkadot-js/api/blob/b6534d2958/packages/api/src/types/base.ts#L28)*

___

###  DecorateMethod

Ƭ **DecorateMethod**: *function*

*Defined in [api/src/types/base.ts:70](https://github.com/polkadot-js/api/blob/b6534d2958/packages/api/src/types/base.ts#L70)*

#### Type declaration:

▸ <**Method**>(`method`: Method, `options?`: [DecorateMethodOptions](../interfaces/_types_base_.decoratemethodoptions.md)): *any*

**Type parameters:**

▪ **Method**: *function*

**Parameters:**

Name | Type |
------ | ------ |
`method` | Method |
`options?` | [DecorateMethodOptions](../interfaces/_types_base_.decoratemethodoptions.md) |

___

###  MethodResult

Ƭ **MethodResult**: *ApiType extends "rxjs" ? RxResult<F> : PromiseResult<F>*

*Defined in [api/src/types/base.ts:60](https://github.com/polkadot-js/api/blob/b6534d2958/packages/api/src/types/base.ts#L60)*

___

###  ObsInnerType

Ƭ **ObsInnerType**: *O extends Observable<infer U> ? U : never*

*Defined in [api/src/types/base.ts:31](https://github.com/polkadot-js/api/blob/b6534d2958/packages/api/src/types/base.ts#L31)*

___

###  PromiseOrObs

Ƭ **PromiseOrObs**: *ApiType extends "rxjs" ? Observable<T> : Promise<T>*

*Defined in [api/src/types/base.ts:36](https://github.com/polkadot-js/api/blob/b6534d2958/packages/api/src/types/base.ts#L36)*

___

###  UnsubscribePromise

Ƭ **UnsubscribePromise**: *Promise‹function›*

*Defined in [api/src/types/base.ts:33](https://github.com/polkadot-js/api/blob/b6534d2958/packages/api/src/types/base.ts#L33)*
