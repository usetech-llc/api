[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types"](../modules/_types_.md) › [StorageEntryPromiseOverloads](_types_.storageentrypromiseoverloads.md)

# Interface: StorageEntryPromiseOverloads

## Hierarchy

* **StorageEntryPromiseOverloads**

## Callable

▸ (`arg1?`: CodecArg, `arg2?`: CodecArg): *Promise‹Codec›*

*Defined in [api/src/types.ts:120](https://github.com/polkadot-js/api/blob/f77ae4d99f/packages/api/src/types.ts#L120)*

**Parameters:**

Name | Type |
------ | ------ |
`arg1?` | CodecArg |
`arg2?` | CodecArg |

**Returns:** *Promise‹Codec›*

▸ <**T**>(`arg1?`: CodecArg, `arg2?`: CodecArg): *Promise‹T›*

*Defined in [api/src/types.ts:121](https://github.com/polkadot-js/api/blob/f77ae4d99f/packages/api/src/types.ts#L121)*

**Type parameters:**

▪ **T**: *Codec*

**Parameters:**

Name | Type |
------ | ------ |
`arg1?` | CodecArg |
`arg2?` | CodecArg |

**Returns:** *Promise‹T›*

▸ <**T**>(`callback`: Callback‹T›): *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*

*Defined in [api/src/types.ts:122](https://github.com/polkadot-js/api/blob/f77ae4d99f/packages/api/src/types.ts#L122)*

**Type parameters:**

▪ **T**: *Codec*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | Callback‹T› |

**Returns:** *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*

▸ <**T**>(`arg`: CodecArg, `callback`: Callback‹T›): *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*

*Defined in [api/src/types.ts:123](https://github.com/polkadot-js/api/blob/f77ae4d99f/packages/api/src/types.ts#L123)*

**Type parameters:**

▪ **T**: *Codec*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | CodecArg |
`callback` | Callback‹T› |

**Returns:** *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*

▸ <**T**>(`arg1`: CodecArg, `arg2`: CodecArg, `callback`: Callback‹T›): *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*

*Defined in [api/src/types.ts:124](https://github.com/polkadot-js/api/blob/f77ae4d99f/packages/api/src/types.ts#L124)*

**Type parameters:**

▪ **T**: *Codec*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | CodecArg |
`arg2` | CodecArg |
`callback` | Callback‹T› |

**Returns:** *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*
