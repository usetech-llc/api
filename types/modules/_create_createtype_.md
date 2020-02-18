[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["create/createType"](_create_createtype_.md)

# External module: "create/createType"

## Index

### Functions

* [createType](_create_createtype_.md#createtype)
* [createTypeUnsafe](_create_createtype_.md#createtypeunsafe)

## Functions

###  createType

▸ **createType**<**K**>(`registry`: [Registry](../interfaces/_types_registry_.registry.md), `type`: K, ...`params`: any[]): *InterfaceRegistry[K]*

*Defined in [packages/types/src/create/createType.ts:77](https://github.com/polkadot-js/api/blob/4a1e504ca2/packages/types/src/create/createType.ts#L77)*

Create an instance of a `type` with a given `params`.

**Type parameters:**

▪ **K**: *[InterfaceTypes](_types_helpers_.md#interfacetypes)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`registry` | [Registry](../interfaces/_types_registry_.registry.md) | - |
`type` | K | A recognizable string representing the type to create an instance from |
`...params` | any[] | The value to instantiate the type with  |

**Returns:** *InterfaceRegistry[K]*

___

###  createTypeUnsafe

▸ **createTypeUnsafe**<**T**, **K**>(`registry`: [Registry](../interfaces/_types_registry_.registry.md), `type`: K, `params`: any[], `isPedantic?`: undefined | false | true): *T*

*Defined in [packages/types/src/create/createType.ts:61](https://github.com/polkadot-js/api/blob/4a1e504ca2/packages/types/src/create/createType.ts#L61)*

**Type parameters:**

▪ **T**: *[Codec](../interfaces/_types_codec_.codec.md)*

▪ **K**: *string*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`registry` | [Registry](../interfaces/_types_registry_.registry.md) | - |
`type` | K | - |
`params` | any[] | [] |
`isPedantic?` | undefined &#124; false &#124; true | - |

**Returns:** *T*
