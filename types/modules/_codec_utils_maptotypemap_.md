[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["codec/utils/mapToTypeMap"](_codec_utils_maptotypemap_.md)

# External module: "codec/utils/mapToTypeMap"

## Index

### Functions

* [mapToTypeMap](_codec_utils_maptotypemap_.md#maptotypemap)
* [typeToConstructor](_codec_utils_maptotypemap_.md#typetoconstructor)

## Functions

###  mapToTypeMap

▸ **mapToTypeMap**(`registry`: Registry, `input`: Record‹string, InterfaceTypes | Constructor›): *Record‹string, Constructor›*

*Defined in [packages/types/src/codec/utils/mapToTypeMap.ts:22](https://github.com/polkadot-js/api/blob/519823bc0e/packages/types/src/codec/utils/mapToTypeMap.ts#L22)*

**`description`** takes an input map of the form `{ [string]: string | Constructor }` and returns a map of `{ [string]: Constructor }`

**Parameters:**

Name | Type |
------ | ------ |
`registry` | Registry |
`input` | Record‹string, InterfaceTypes &#124; Constructor› |

**Returns:** *Record‹string, Constructor›*

___

###  typeToConstructor

▸ **typeToConstructor**<**T**>(`registry`: Registry, `type`: InterfaceTypes | Constructor‹T›): *Constructor‹T›*

*Defined in [packages/types/src/codec/utils/mapToTypeMap.ts:11](https://github.com/polkadot-js/api/blob/519823bc0e/packages/types/src/codec/utils/mapToTypeMap.ts#L11)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`registry` | Registry |
`type` | InterfaceTypes &#124; Constructor‹T› |

**Returns:** *Constructor‹T›*
