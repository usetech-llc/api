[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["codec/create/createType"](_codec_create_createtype_.md)

# External module: "codec/create/createType"

## Index

### Functions

* [createType](_codec_create_createtype_.md#createtype)
* [createTypeUnsafe](_codec_create_createtype_.md#createtypeunsafe)

## Functions

###  createType

▸ **createType**<**K**>(`registry`: [Registry](../interfaces/_types_.registry.md), `type`: K, ...`params`: any[]): *InterfaceRegistry[K]*

*Defined in [packages/types/src/codec/create/createType.ts:77](https://github.com/polkadot-js/api/blob/3619fabe5/packages/types/src/codec/create/createType.ts#L77)*

Create an instance of a `type` with a given `params`.

**Type parameters:**

▪ **K**: *[InterfaceTypes](_types_.md#interfacetypes)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`registry` | [Registry](../interfaces/_types_.registry.md) | - |
`type` | K | A recognizable string representing the type to create an instance from |
`...params` | any[] | The value to instantiate the type with  |

**Returns:** *InterfaceRegistry[K]*

___

###  createTypeUnsafe

▸ **createTypeUnsafe**<**T**, **K**>(`registry`: [Registry](../interfaces/_types_.registry.md), `type`: K, `params`: any[], `isPedantic?`: undefined | false | true): *T*

*Defined in [packages/types/src/codec/create/createType.ts:61](https://github.com/polkadot-js/api/blob/3619fabe5/packages/types/src/codec/create/createType.ts#L61)*

**Type parameters:**

▪ **T**: *[Codec](../interfaces/_types_.codec.md)*

▪ **K**: *string*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`registry` | [Registry](../interfaces/_types_.registry.md) | - |
`type` | K | - |
`params` | any[] |  [] |
`isPedantic?` | undefined &#124; false &#124; true | - |

**Returns:** *T*
