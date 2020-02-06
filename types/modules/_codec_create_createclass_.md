[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["codec/create/createClass"](_codec_create_createclass_.md)

# External module: "codec/create/createClass"

## Index

### Functions

* [ClassOf](_codec_create_createclass_.md#classof)
* [ClassOfUnsafe](_codec_create_createclass_.md#classofunsafe)
* [createClass](_codec_create_createclass_.md#createclass)

## Functions

###  ClassOf

▸ **ClassOf**<**K**>(`registry`: Registry, `name`: K): *Constructor‹InterfaceRegistry[K]›*

*Defined in [packages/types/src/codec/create/createClass.ts:24](https://github.com/polkadot-js/api/blob/e6e96aa9c9/packages/types/src/codec/create/createClass.ts#L24)*

**Type parameters:**

▪ **K**: *InterfaceTypes*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | Registry |
`name` | K |

**Returns:** *Constructor‹InterfaceRegistry[K]›*

___

###  ClassOfUnsafe

▸ **ClassOfUnsafe**<**T**, **K**>(`registry`: Registry, `name`: K): *Constructor‹FromReg‹T, K››*

*Defined in [packages/types/src/codec/create/createClass.ts:19](https://github.com/polkadot-js/api/blob/e6e96aa9c9/packages/types/src/codec/create/createClass.ts#L19)*

**Type parameters:**

▪ **T**: *Codec*

▪ **K**: *string*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | Registry |
`name` | K |

**Returns:** *Constructor‹FromReg‹T, K››*

___

###  createClass

▸ **createClass**<**T**, **K**>(`registry`: Registry, `type`: K): *Constructor‹FromReg‹T, K››*

*Defined in [packages/types/src/codec/create/createClass.ts:12](https://github.com/polkadot-js/api/blob/e6e96aa9c9/packages/types/src/codec/create/createClass.ts#L12)*

**Type parameters:**

▪ **T**: *Codec*

▪ **K**: *string*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | Registry |
`type` | K |

**Returns:** *Constructor‹FromReg‹T, K››*
