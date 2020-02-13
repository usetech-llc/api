[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["Metadata/Metadata"](../modules/_metadata_metadata_.md) › [Metadata](_metadata_metadata_.metadata.md)

# Class: Metadata <**S, T, V, E**>

**`name`** Metadata

**`description`** 
The versioned runtime metadata as a decoded structure

## Type parameters

▪ **S**: *TypesDef*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  ↳ [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md)

  ↳ **Metadata**

## Implements

* Codec

## Index

### Constructors

* [constructor](_metadata_metadata_.metadata.md#constructor)

### Properties

* [registry](_metadata_metadata_.metadata.md#registry)
* [size](_metadata_metadata_.metadata.md#size)

### Accessors

* [Type](_metadata_metadata_.metadata.md#type)
* [asCallsOnly](_metadata_metadata_.metadata.md#ascallsonly)
* [asLatest](_metadata_metadata_.metadata.md#aslatest)
* [asV0](_metadata_metadata_.metadata.md#asv0)
* [asV1](_metadata_metadata_.metadata.md#asv1)
* [asV10](_metadata_metadata_.metadata.md#asv10)
* [asV11](_metadata_metadata_.metadata.md#asv11)
* [asV2](_metadata_metadata_.metadata.md#asv2)
* [asV3](_metadata_metadata_.metadata.md#asv3)
* [asV4](_metadata_metadata_.metadata.md#asv4)
* [asV5](_metadata_metadata_.metadata.md#asv5)
* [asV6](_metadata_metadata_.metadata.md#asv6)
* [asV7](_metadata_metadata_.metadata.md#asv7)
* [asV8](_metadata_metadata_.metadata.md#asv8)
* [asV9](_metadata_metadata_.metadata.md#asv9)
* [defKeys](_metadata_metadata_.metadata.md#defkeys)
* [encodedLength](_metadata_metadata_.metadata.md#encodedlength)
* [hash](_metadata_metadata_.metadata.md#hash)
* [isEmpty](_metadata_metadata_.metadata.md#isempty)
* [magicNumber](_metadata_metadata_.metadata.md#magicnumber)
* [version](_metadata_metadata_.metadata.md#version)

### Methods

* [clear](_metadata_metadata_.metadata.md#clear)
* [delete](_metadata_metadata_.metadata.md#delete)
* [eq](_metadata_metadata_.metadata.md#eq)
* [forEach](_metadata_metadata_.metadata.md#foreach)
* [get](_metadata_metadata_.metadata.md#get)
* [getAtIndex](_metadata_metadata_.metadata.md#getatindex)
* [getUniqTypes](_metadata_metadata_.metadata.md#getuniqtypes)
* [has](_metadata_metadata_.metadata.md#has)
* [set](_metadata_metadata_.metadata.md#set)
* [toArray](_metadata_metadata_.metadata.md#toarray)
* [toHex](_metadata_metadata_.metadata.md#tohex)
* [toJSON](_metadata_metadata_.metadata.md#tojson)
* [toRawType](_metadata_metadata_.metadata.md#torawtype)
* [toString](_metadata_metadata_.metadata.md#tostring)
* [toU8a](_metadata_metadata_.metadata.md#tou8a)
* [typesToMap](_metadata_metadata_.metadata.md#static-typestomap)
* [with](_metadata_metadata_.metadata.md#static-with)

## Constructors

###  constructor

\+ **new Metadata**(`registry`: Registry, `value?`: Uint8Array | string): *[Metadata](_metadata_metadata_.metadata.md)*

*Overrides [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[constructor](_metadata_metadataversioned_.metadataversioned.md#constructor)*

*Defined in [packages/metadata/src/Metadata/Metadata.ts:17](https://github.com/polkadot-js/api/blob/66c8e5b4e8/packages/metadata/src/Metadata/Metadata.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | Registry |
`value?` | Uint8Array &#124; string |

**Returns:** *[Metadata](_metadata_metadata_.metadata.md)*

## Properties

###  registry

• **registry**: *Registry*

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[registry](_metadata_metadataversioned_.metadataversioned.md#registry)*

*Defined in [packages/types/src/codec/Struct.ts:34](https://github.com/polkadot-js/api/blob/66c8e5b4e8/packages/types/src/codec/Struct.ts#L34)*

___

###  size

• **size**: *number*

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[size](_metadata_metadataversioned_.metadataversioned.md#size)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:28

## Accessors

###  Type

• **get Type**(): *E*

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[Type](_metadata_metadataversioned_.metadataversioned.md#type)*

*Defined in [packages/types/src/codec/Struct.ts:167](https://github.com/polkadot-js/api/blob/66c8e5b4e8/packages/types/src/codec/Struct.ts#L167)*

**`description`** Returns the Type description to sthe structure

**Returns:** *E*

___

###  asCallsOnly

• **get asCallsOnly**(): *[MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md)*

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[asCallsOnly](_metadata_metadataversioned_.metadataversioned.md#ascallsonly)*

*Defined in [packages/metadata/src/Metadata/MetadataVersioned.ts:72](https://github.com/polkadot-js/api/blob/66c8e5b4e8/packages/metadata/src/Metadata/MetadataVersioned.ts#L72)*

**`description`** Returns the wrapped metadata as a limited calls-only (latest) version

**Returns:** *[MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md)*

___

###  asLatest

• **get asLatest**(): *MetadataLatest*

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[asLatest](_metadata_metadataversioned_.metadataversioned.md#aslatest)*

*Defined in [packages/metadata/src/Metadata/MetadataVersioned.ts:168](https://github.com/polkadot-js/api/blob/66c8e5b4e8/packages/metadata/src/Metadata/MetadataVersioned.ts#L168)*

**`description`** Returns the wrapped values as a latest version object

**Returns:** *MetadataLatest*

___

###  asV0

• **get asV0**(): *MetadataV0*

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[asV0](_metadata_metadataversioned_.metadataversioned.md#asv0)*

*Defined in [packages/metadata/src/Metadata/MetadataVersioned.ts:82](https://github.com/polkadot-js/api/blob/66c8e5b4e8/packages/metadata/src/Metadata/MetadataVersioned.ts#L82)*

**`description`** Returns the wrapped metadata as a V0 object

**Returns:** *MetadataV0*

___

###  asV1

• **get asV1**(): *MetadataV1*

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[asV1](_metadata_metadataversioned_.metadataversioned.md#asv1)*

*Defined in [packages/metadata/src/Metadata/MetadataVersioned.ts:91](https://github.com/polkadot-js/api/blob/66c8e5b4e8/packages/metadata/src/Metadata/MetadataVersioned.ts#L91)*

**`description`** Returns the wrapped values as a V1 object

**Returns:** *MetadataV1*

___

###  asV10

• **get asV10**(): *MetadataV10*

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[asV10](_metadata_metadataversioned_.metadataversioned.md#asv10)*

*Defined in [packages/metadata/src/Metadata/MetadataVersioned.ts:154](https://github.com/polkadot-js/api/blob/66c8e5b4e8/packages/metadata/src/Metadata/MetadataVersioned.ts#L154)*

**`description`** Returns the wrapped values as a V10 object

**Returns:** *MetadataV10*

___

###  asV11

• **get asV11**(): *MetadataV11*

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[asV11](_metadata_metadataversioned_.metadataversioned.md#asv11)*

*Defined in [packages/metadata/src/Metadata/MetadataVersioned.ts:161](https://github.com/polkadot-js/api/blob/66c8e5b4e8/packages/metadata/src/Metadata/MetadataVersioned.ts#L161)*

**`description`** Returns the wrapped values as a V10 object

**Returns:** *MetadataV11*

___

###  asV2

• **get asV2**(): *MetadataV2*

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[asV2](_metadata_metadataversioned_.metadataversioned.md#asv2)*

*Defined in [packages/metadata/src/Metadata/MetadataVersioned.ts:98](https://github.com/polkadot-js/api/blob/66c8e5b4e8/packages/metadata/src/Metadata/MetadataVersioned.ts#L98)*

**`description`** Returns the wrapped values as a V2 object

**Returns:** *MetadataV2*

___

###  asV3

• **get asV3**(): *MetadataV3*

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[asV3](_metadata_metadataversioned_.metadataversioned.md#asv3)*

*Defined in [packages/metadata/src/Metadata/MetadataVersioned.ts:105](https://github.com/polkadot-js/api/blob/66c8e5b4e8/packages/metadata/src/Metadata/MetadataVersioned.ts#L105)*

**`description`** Returns the wrapped values as a V3 object

**Returns:** *MetadataV3*

___

###  asV4

• **get asV4**(): *MetadataV4*

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[asV4](_metadata_metadataversioned_.metadataversioned.md#asv4)*

*Defined in [packages/metadata/src/Metadata/MetadataVersioned.ts:112](https://github.com/polkadot-js/api/blob/66c8e5b4e8/packages/metadata/src/Metadata/MetadataVersioned.ts#L112)*

**`description`** Returns the wrapped values as a V4 object

**Returns:** *MetadataV4*

___

###  asV5

• **get asV5**(): *MetadataV5*

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[asV5](_metadata_metadataversioned_.metadataversioned.md#asv5)*

*Defined in [packages/metadata/src/Metadata/MetadataVersioned.ts:119](https://github.com/polkadot-js/api/blob/66c8e5b4e8/packages/metadata/src/Metadata/MetadataVersioned.ts#L119)*

**`description`** Returns the wrapped values as a V5 object

**Returns:** *MetadataV5*

___

###  asV6

• **get asV6**(): *MetadataV6*

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[asV6](_metadata_metadataversioned_.metadataversioned.md#asv6)*

*Defined in [packages/metadata/src/Metadata/MetadataVersioned.ts:126](https://github.com/polkadot-js/api/blob/66c8e5b4e8/packages/metadata/src/Metadata/MetadataVersioned.ts#L126)*

**`description`** Returns the wrapped values as a V6 object

**Returns:** *MetadataV6*

___

###  asV7

• **get asV7**(): *MetadataV7*

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[asV7](_metadata_metadataversioned_.metadataversioned.md#asv7)*

*Defined in [packages/metadata/src/Metadata/MetadataVersioned.ts:133](https://github.com/polkadot-js/api/blob/66c8e5b4e8/packages/metadata/src/Metadata/MetadataVersioned.ts#L133)*

**`description`** Returns the wrapped values as a V7 object

**Returns:** *MetadataV7*

___

###  asV8

• **get asV8**(): *MetadataV8*

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[asV8](_metadata_metadataversioned_.metadataversioned.md#asv8)*

*Defined in [packages/metadata/src/Metadata/MetadataVersioned.ts:140](https://github.com/polkadot-js/api/blob/66c8e5b4e8/packages/metadata/src/Metadata/MetadataVersioned.ts#L140)*

**`description`** Returns the wrapped values as a V8 object

**Returns:** *MetadataV8*

___

###  asV9

• **get asV9**(): *MetadataV9*

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[asV9](_metadata_metadataversioned_.metadataversioned.md#asv9)*

*Defined in [packages/metadata/src/Metadata/MetadataVersioned.ts:147](https://github.com/polkadot-js/api/blob/66c8e5b4e8/packages/metadata/src/Metadata/MetadataVersioned.ts#L147)*

**`description`** Returns the wrapped values as a V9 object

**Returns:** *MetadataV9*

___

###  defKeys

• **get defKeys**(): *string[]*

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[defKeys](_metadata_metadataversioned_.metadataversioned.md#defkeys)*

*Defined in [packages/types/src/codec/Struct.ts:145](https://github.com/polkadot-js/api/blob/66c8e5b4e8/packages/types/src/codec/Struct.ts#L145)*

**`description`** The available keys for this enum

**Returns:** *string[]*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[encodedLength](_metadata_metadataversioned_.metadataversioned.md#encodedlength)*

*Defined in [packages/types/src/codec/Struct.ts:180](https://github.com/polkadot-js/api/blob/66c8e5b4e8/packages/types/src/codec/Struct.ts#L180)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *IHash*

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[hash](_metadata_metadataversioned_.metadataversioned.md#hash)*

*Defined in [packages/types/src/codec/Struct.ts:191](https://github.com/polkadot-js/api/blob/66c8e5b4e8/packages/types/src/codec/Struct.ts#L191)*

**`description`** returns a hash of the contents

**Returns:** *IHash*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[isEmpty](_metadata_metadataversioned_.metadataversioned.md#isempty)*

*Defined in [packages/types/src/codec/Struct.ts:152](https://github.com/polkadot-js/api/blob/66c8e5b4e8/packages/types/src/codec/Struct.ts#L152)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  magicNumber

• **get magicNumber**(): *[MagicNumber](_metadata_magicnumber_.magicnumber.md)*

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[magicNumber](_metadata_metadataversioned_.metadataversioned.md#magicnumber)*

*Defined in [packages/metadata/src/Metadata/MetadataVersioned.ts:176](https://github.com/polkadot-js/api/blob/66c8e5b4e8/packages/metadata/src/Metadata/MetadataVersioned.ts#L176)*

**`description`** 

**Returns:** *[MagicNumber](_metadata_magicnumber_.magicnumber.md)*

___

###  version

• **get version**(): *number*

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[version](_metadata_metadataversioned_.metadataversioned.md#version)*

*Defined in [packages/metadata/src/Metadata/MetadataVersioned.ts:190](https://github.com/polkadot-js/api/blob/66c8e5b4e8/packages/metadata/src/Metadata/MetadataVersioned.ts#L190)*

**`description`** the metadata version this structure represents

**Returns:** *number*

## Methods

###  clear

▸ **clear**(): *void*

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[clear](_metadata_metadataversioned_.metadataversioned.md#clear)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:22

**Returns:** *void*

___

###  delete

▸ **delete**(`key`: keyof S): *boolean*

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[delete](_metadata_metadataversioned_.metadataversioned.md#delete)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:23

**Parameters:**

Name | Type |
------ | ------ |
`key` | keyof S |

**Returns:** *boolean*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[eq](_metadata_metadataversioned_.metadataversioned.md#eq)*

*Defined in [packages/types/src/codec/Struct.ts:198](https://github.com/polkadot-js/api/blob/66c8e5b4e8/packages/types/src/codec/Struct.ts#L198)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  forEach

▸ **forEach**(`callbackfn`: function, `thisArg?`: any): *void*

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[forEach](_metadata_metadataversioned_.metadataversioned.md#foreach)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:24

**Parameters:**

▪ **callbackfn**: *function*

▸ (`value`: Codec, `key`: keyof S, `map`: Map‹keyof S, Codec›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | Codec |
`key` | keyof S |
`map` | Map‹keyof S, Codec› |

▪`Optional`  **thisArg**: *any*

**Returns:** *void*

___

###  get

▸ **get**(`name`: keyof S): *Codec | undefined*

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[get](_metadata_metadataversioned_.metadataversioned.md#get)*

*Overrides void*

*Defined in [packages/types/src/codec/Struct.ts:206](https://github.com/polkadot-js/api/blob/66c8e5b4e8/packages/types/src/codec/Struct.ts#L206)*

**`description`** Returns a specific names entry in the structure

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | keyof S | The name of the entry to retrieve  |

**Returns:** *Codec | undefined*

___

###  getAtIndex

▸ **getAtIndex**(`index`: number): *Codec*

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[getAtIndex](_metadata_metadataversioned_.metadataversioned.md#getatindex)*

*Defined in [packages/types/src/codec/Struct.ts:213](https://github.com/polkadot-js/api/blob/66c8e5b4e8/packages/types/src/codec/Struct.ts#L213)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *Codec*

___

###  getUniqTypes

▸ **getUniqTypes**(`throwError`: boolean): *string[]*

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[getUniqTypes](_metadata_metadataversioned_.metadataversioned.md#getuniqtypes)*

*Defined in [packages/metadata/src/Metadata/MetadataVersioned.ts:194](https://github.com/polkadot-js/api/blob/66c8e5b4e8/packages/metadata/src/Metadata/MetadataVersioned.ts#L194)*

**Parameters:**

Name | Type |
------ | ------ |
`throwError` | boolean |

**Returns:** *string[]*

___

###  has

▸ **has**(`key`: keyof S): *boolean*

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[has](_metadata_metadataversioned_.metadataversioned.md#has)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:26

**Parameters:**

Name | Type |
------ | ------ |
`key` | keyof S |

**Returns:** *boolean*

___

###  set

▸ **set**(`key`: keyof S, `value`: Codec): *this*

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[set](_metadata_metadataversioned_.metadataversioned.md#set)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:27

**Parameters:**

Name | Type |
------ | ------ |
`key` | keyof S |
`value` | Codec |

**Returns:** *this*

___

###  toArray

▸ **toArray**(): *Codec[]*

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[toArray](_metadata_metadataversioned_.metadataversioned.md#toarray)*

*Defined in [packages/types/src/codec/Struct.ts:220](https://github.com/polkadot-js/api/blob/66c8e5b4e8/packages/types/src/codec/Struct.ts#L220)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *Codec[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[toHex](_metadata_metadataversioned_.metadataversioned.md#tohex)*

*Defined in [packages/types/src/codec/Struct.ts:227](https://github.com/polkadot-js/api/blob/66c8e5b4e8/packages/types/src/codec/Struct.ts#L227)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *AnyJsonObject | string*

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[toJSON](_metadata_metadataversioned_.metadataversioned.md#tojson)*

*Defined in [packages/types/src/codec/Struct.ts:234](https://github.com/polkadot-js/api/blob/66c8e5b4e8/packages/types/src/codec/Struct.ts#L234)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *AnyJsonObject | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[toRawType](_metadata_metadataversioned_.metadataversioned.md#torawtype)*

*Defined in [packages/types/src/codec/Struct.ts:258](https://github.com/polkadot-js/api/blob/66c8e5b4e8/packages/types/src/codec/Struct.ts#L258)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[toString](_metadata_metadataversioned_.metadataversioned.md#tostring)*

*Defined in [packages/types/src/codec/Struct.ts:267](https://github.com/polkadot-js/api/blob/66c8e5b4e8/packages/types/src/codec/Struct.ts#L267)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: BareOpts): *Uint8Array*

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[toU8a](_metadata_metadataversioned_.metadataversioned.md#tou8a)*

*Defined in [packages/types/src/codec/Struct.ts:275](https://github.com/polkadot-js/api/blob/66c8e5b4e8/packages/types/src/codec/Struct.ts#L275)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | BareOpts | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*

___

### `Static` typesToMap

▸ **typesToMap**(`registry`: Registry, `Types`: Record‹string, Constructor›): *Record‹string, string›*

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[typesToMap](_metadata_metadataversioned_.metadataversioned.md#static-typestomap)*

*Defined in [packages/types/src/codec/Struct.ts:247](https://github.com/polkadot-js/api/blob/66c8e5b4e8/packages/types/src/codec/Struct.ts#L247)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | Registry |
`Types` | Record‹string, Constructor› |

**Returns:** *Record‹string, string›*

___

### `Static` with

▸ **with**<**S**>(`Types`: S): *Constructor‹Struct‹S››*

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[with](_metadata_metadataversioned_.metadataversioned.md#static-with)*

*Defined in [packages/types/src/codec/Struct.ts:122](https://github.com/polkadot-js/api/blob/66c8e5b4e8/packages/types/src/codec/Struct.ts#L122)*

**Type parameters:**

▪ **S**: *TypesDef*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | S |

**Returns:** *Constructor‹Struct‹S››*
