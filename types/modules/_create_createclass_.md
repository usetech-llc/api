[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["create/createClass"](_create_createclass_.md)

# External module: "create/createClass"

## Index

### Functions

* [ClassOf](_create_createclass_.md#classof)
* [ClassOfUnsafe](_create_createclass_.md#classofunsafe)
* [createClass](_create_createclass_.md#createclass)
* [getTypeClass](_create_createclass_.md#gettypeclass)

## Functions

###  ClassOf

▸ **ClassOf**<**K**>(`registry`: [Registry](../interfaces/_types_registry_.registry.md), `name`: K): *[Constructor](../interfaces/_types_codec_.constructor.md)‹InterfaceRegistry[K]›*

*Defined in [packages/types/src/create/createClass.ts:39](https://github.com/polkadot-js/api/blob/c8af75088a/packages/types/src/create/createClass.ts#L39)*

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

*Defined in [packages/types/src/create/createClass.ts:34](https://github.com/polkadot-js/api/blob/c8af75088a/packages/types/src/create/createClass.ts#L34)*

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

*Defined in [packages/types/src/create/createClass.ts:26](https://github.com/polkadot-js/api/blob/c8af75088a/packages/types/src/create/createClass.ts#L26)*

**Type parameters:**

▪ **T**: *[Codec](../interfaces/_types_codec_.codec.md)*

▪ **K**: *string*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_types_registry_.registry.md) |
`type` | K |

**Returns:** *[Constructor](../interfaces/_types_codec_.constructor.md)‹FromReg‹T, K››*

___

###  getTypeClass

▸ **getTypeClass**<**T**>(`registry`: [Registry](../interfaces/_types_registry_.registry.md), `value`: TypeDef): *[Constructor](../interfaces/_types_codec_.constructor.md)‹T›*

*Defined in [packages/types/src/create/createClass.ts:168](https://github.com/polkadot-js/api/blob/c8af75088a/packages/types/src/create/createClass.ts#L168)*

**Type parameters:**

▪ **T**: *[Codec](../interfaces/_types_codec_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_types_registry_.registry.md) |
`value` | TypeDef |

**Returns:** *[Constructor](../interfaces/_types_codec_.constructor.md)‹T›*