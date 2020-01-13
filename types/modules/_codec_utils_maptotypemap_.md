[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["codec/utils/mapToTypeMap"](_codec_utils_maptotypemap_.md)

# External module: "codec/utils/mapToTypeMap"

## Index

### Functions

* [mapToTypeMap](_codec_utils_maptotypemap_.md#maptotypemap)
* [typeToConstructor](_codec_utils_maptotypemap_.md#typetoconstructor)

## Functions

###  mapToTypeMap

▸ **mapToTypeMap**(`registry`: [Registry](../interfaces/_types_.registry.md), `input`: Record‹string, [InterfaceTypes](_types_.md#interfacetypes) | [Constructor](../interfaces/_types_.constructor.md)›): *Record‹string, [Constructor](../interfaces/_types_.constructor.md)›*

*Defined in [packages/types/src/codec/utils/mapToTypeMap.ts:22](https://github.com/polkadot-js/api/blob/ce5c8f7443/packages/types/src/codec/utils/mapToTypeMap.ts#L22)*

**`description`** takes an input map of the form `{ [string]: string | Constructor }` and returns a map of `{ [string]: Constructor }`

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_types_.registry.md) |
`input` | Record‹string, [InterfaceTypes](_types_.md#interfacetypes) &#124; [Constructor](../interfaces/_types_.constructor.md)› |

**Returns:** *Record‹string, [Constructor](../interfaces/_types_.constructor.md)›*

___

###  typeToConstructor

▸ **typeToConstructor**<**T**>(`registry`: [Registry](../interfaces/_types_.registry.md), `type`: [InterfaceTypes](_types_.md#interfacetypes) | [Constructor](../interfaces/_types_.constructor.md)‹T›): *[Constructor](../interfaces/_types_.constructor.md)‹T›*

*Defined in [packages/types/src/codec/utils/mapToTypeMap.ts:11](https://github.com/polkadot-js/api/blob/ce5c8f7443/packages/types/src/codec/utils/mapToTypeMap.ts#L11)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_types_.registry.md) |
`type` | [InterfaceTypes](_types_.md#interfacetypes) &#124; [Constructor](../interfaces/_types_.constructor.md)‹T› |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹T›*
