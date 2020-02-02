[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types/storage"](../modules/_types_storage_.md) › [StorageEntryPromiseOverloads](_types_storage_.storageentrypromiseoverloads.md)

# Interface: StorageEntryPromiseOverloads

## Hierarchy

* **StorageEntryPromiseOverloads**

## Callable

▸ (`arg1?`: CodecArg, `arg2?`: CodecArg): *Promise‹Codec›*

*Defined in [api/src/types/storage.ts:45](https://github.com/polkadot-js/api/blob/6ba28c8ad2/packages/api/src/types/storage.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`arg1?` | CodecArg |
`arg2?` | CodecArg |

**Returns:** *Promise‹Codec›*

▸ <**T**>(`arg1?`: CodecArg, `arg2?`: CodecArg): *Promise‹T›*

*Defined in [api/src/types/storage.ts:46](https://github.com/polkadot-js/api/blob/6ba28c8ad2/packages/api/src/types/storage.ts#L46)*

**Type parameters:**

▪ **T**: *Codec*

**Parameters:**

Name | Type |
------ | ------ |
`arg1?` | CodecArg |
`arg2?` | CodecArg |

**Returns:** *Promise‹T›*

▸ <**T**>(`callback`: Callback‹T›): *[UnsubscribePromise](../modules/_types_base_.md#unsubscribepromise)*

*Defined in [api/src/types/storage.ts:47](https://github.com/polkadot-js/api/blob/6ba28c8ad2/packages/api/src/types/storage.ts#L47)*

**Type parameters:**

▪ **T**: *Codec*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | Callback‹T› |

**Returns:** *[UnsubscribePromise](../modules/_types_base_.md#unsubscribepromise)*

▸ <**T**>(`arg`: CodecArg, `callback`: Callback‹T›): *[UnsubscribePromise](../modules/_types_base_.md#unsubscribepromise)*

*Defined in [api/src/types/storage.ts:48](https://github.com/polkadot-js/api/blob/6ba28c8ad2/packages/api/src/types/storage.ts#L48)*

**Type parameters:**

▪ **T**: *Codec*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | CodecArg |
`callback` | Callback‹T› |

**Returns:** *[UnsubscribePromise](../modules/_types_base_.md#unsubscribepromise)*

▸ <**T**>(`arg1`: CodecArg, `arg2`: CodecArg, `callback`: Callback‹T›): *[UnsubscribePromise](../modules/_types_base_.md#unsubscribepromise)*

*Defined in [api/src/types/storage.ts:49](https://github.com/polkadot-js/api/blob/6ba28c8ad2/packages/api/src/types/storage.ts#L49)*

**Type parameters:**

▪ **T**: *Codec*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | CodecArg |
`arg2` | CodecArg |
`callback` | Callback‹T› |

**Returns:** *[UnsubscribePromise](../modules/_types_base_.md#unsubscribepromise)*
