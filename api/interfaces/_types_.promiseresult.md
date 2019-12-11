[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types"](../modules/_types_.md) › [PromiseResult](_types_.promiseresult.md)

# Interface: PromiseResult <**F**>

## Type parameters

▪ **F**: *AnyFunction*

## Hierarchy

* **PromiseResult**

## Callable

▸ (...`args`: Parameters‹F›): *Promise‹[ObsInnerType](../modules/_types_.md#obsinnertype)‹ReturnType‹F›››*

*Defined in [api/src/types.ts:74](https://github.com/polkadot-js/api/blob/f02613754/packages/api/src/types.ts#L74)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | Parameters‹F› |

**Returns:** *Promise‹[ObsInnerType](../modules/_types_.md#obsinnertype)‹ReturnType‹F›››*

▸ (...`args`: Push‹Parameters‹F›, Callback‹[ObsInnerType](../modules/_types_.md#obsinnertype)‹ReturnType‹F››››): *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*

*Defined in [api/src/types.ts:75](https://github.com/polkadot-js/api/blob/f02613754/packages/api/src/types.ts#L75)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | Push‹Parameters‹F›, Callback‹[ObsInnerType](../modules/_types_.md#obsinnertype)‹ReturnType‹F›››› |

**Returns:** *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*

▸ <**T**>(...`args`: Parameters‹F›): *Promise‹T›*

*Defined in [api/src/types.ts:76](https://github.com/polkadot-js/api/blob/f02613754/packages/api/src/types.ts#L76)*

**Type parameters:**

▪ **T**: *Codec | Codec[]*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | Parameters‹F› |

**Returns:** *Promise‹T›*

▸ <**T**>(...`args`: Push‹Parameters‹F›, Callback‹T››): *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*

*Defined in [api/src/types.ts:77](https://github.com/polkadot-js/api/blob/f02613754/packages/api/src/types.ts#L77)*

**Type parameters:**

▪ **T**: *Codec | Codec[]*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | Push‹Parameters‹F›, Callback‹T›› |

**Returns:** *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*
