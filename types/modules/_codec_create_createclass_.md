[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["codec/create/createClass"](_codec_create_createclass_.md)

# External module: "codec/create/createClass"

## Index

### Functions

* [ClassOf](_codec_create_createclass_.md#classof)
* [ClassOfUnsafe](_codec_create_createclass_.md#classofunsafe)
* [createClass](_codec_create_createclass_.md#createclass)

## Functions

###  ClassOf

▸ **ClassOf**<**K**>(`registry`: [Registry](../interfaces/_types_registry_.registry.md), `name`: K): *[Constructor](../interfaces/_types_codec_.constructor.md)‹InterfaceRegistry[K]›*

*Defined in [packages/types/src/codec/create/createClass.ts:24](https://github.com/polkadot-js/api/blob/6e535b0502/packages/types/src/codec/create/createClass.ts#L24)*

**Type parameters:**

▪ **K**: *[InterfaceTypes](_types_helpers_.md#interfacetypes)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_types_registry_.registry.md) |
`name` | K |

**Returns:** *[Constructor](../interfaces/_types_codec_.constructor.md)‹InterfaceRegistry[K]›*

___

###  ClassOfUnsafe

▸ **ClassOfUnsafe**<**T**, **K**>(`registry`: [Registry](../interfaces/_types_registry_.registry.md), `name`: K): *[Constructor](../interfaces/_types_codec_.constructor.md)‹FromReg‹T, K››*

*Defined in [packages/types/src/codec/create/createClass.ts:19](https://github.com/polkadot-js/api/blob/6e535b0502/packages/types/src/codec/create/createClass.ts#L19)*

**Type parameters:**

▪ **T**: *[Codec](../interfaces/_types_codec_.codec.md)*

▪ **K**: *string*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_types_registry_.registry.md) |
`name` | K |

**Returns:** *[Constructor](../interfaces/_types_codec_.constructor.md)‹FromReg‹T, K››*

___

###  createClass

▸ **createClass**<**T**, **K**>(`registry`: [Registry](../interfaces/_types_registry_.registry.md), `type`: K): *[Constructor](../interfaces/_types_codec_.constructor.md)‹FromReg‹T, K››*

*Defined in [packages/types/src/codec/create/createClass.ts:12](https://github.com/polkadot-js/api/blob/6e535b0502/packages/types/src/codec/create/createClass.ts#L12)*

**Type parameters:**

▪ **T**: *[Codec](../interfaces/_types_codec_.codec.md)*

▪ **K**: *string*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_types_registry_.registry.md) |
`type` | K |

**Returns:** *[Constructor](../interfaces/_types_codec_.constructor.md)‹FromReg‹T, K››*
