[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types/base"](../modules/_types_base_.md) › [PromiseResult](_types_base_.promiseresult.md)

# Interface: PromiseResult <**F**>

## Type parameters

▪ **F**: *AnyFunction*

## Hierarchy

* **PromiseResult**

## Callable

▸ (...`args`: Parameters‹F›): *Promise‹[ObsInnerType](../modules/_types_base_.md#obsinnertype)‹ReturnType‹F›››*

*Defined in [api/src/types/base.ts:52](https://github.com/polkadot-js/api/blob/b46093e5d3/packages/api/src/types/base.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | Parameters‹F› |

**Returns:** *Promise‹[ObsInnerType](../modules/_types_base_.md#obsinnertype)‹ReturnType‹F›››*

▸ (...`args`: Push‹Parameters‹F›, Callback‹[ObsInnerType](../modules/_types_base_.md#obsinnertype)‹ReturnType‹F››››): *[UnsubscribePromise](../modules/_types_base_.md#unsubscribepromise)*

*Defined in [api/src/types/base.ts:53](https://github.com/polkadot-js/api/blob/b46093e5d3/packages/api/src/types/base.ts#L53)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | Push‹Parameters‹F›, Callback‹[ObsInnerType](../modules/_types_base_.md#obsinnertype)‹ReturnType‹F›››› |

**Returns:** *[UnsubscribePromise](../modules/_types_base_.md#unsubscribepromise)*

▸ <**T**>(...`args`: Parameters‹F›): *Promise‹T›*

*Defined in [api/src/types/base.ts:54](https://github.com/polkadot-js/api/blob/b46093e5d3/packages/api/src/types/base.ts#L54)*

**Type parameters:**

▪ **T**: *Codec | Codec[]*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | Parameters‹F› |

**Returns:** *Promise‹T›*

▸ <**T**>(...`args`: Push‹Parameters‹F›, Callback‹T››): *[UnsubscribePromise](../modules/_types_base_.md#unsubscribepromise)*

*Defined in [api/src/types/base.ts:55](https://github.com/polkadot-js/api/blob/b46093e5d3/packages/api/src/types/base.ts#L55)*

**Type parameters:**

▪ **T**: *Codec | Codec[]*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | Push‹Parameters‹F›, Callback‹T›› |

**Returns:** *[UnsubscribePromise](../modules/_types_base_.md#unsubscribepromise)*
