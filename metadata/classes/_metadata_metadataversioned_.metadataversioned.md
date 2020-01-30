[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["Metadata/MetadataVersioned"](../modules/_metadata_metadataversioned_.md) › [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md)

# Class: MetadataVersioned <**S, T, V, E**>

**`name`** MetadataVersioned

**`description`** 
The versioned runtime metadata as a decoded structure

## Type parameters

▪ **S**: *TypesDef*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

* Struct

  ↳ **MetadataVersioned**

  ↳ [Metadata](_metadata_metadata_.metadata.md)

## Implements

* Codec

## Index

### Constructors

* [constructor](_metadata_metadataversioned_.metadataversioned.md#constructor)

### Properties

* [registry](_metadata_metadataversioned_.metadataversioned.md#registry)
* [size](_metadata_metadataversioned_.metadataversioned.md#size)

### Accessors

* [Type](_metadata_metadataversioned_.metadataversioned.md#type)
* [asCallsOnly](_metadata_metadataversioned_.metadataversioned.md#ascallsonly)
* [asLatest](_metadata_metadataversioned_.metadataversioned.md#aslatest)
* [asV0](_metadata_metadataversioned_.metadataversioned.md#asv0)
* [asV1](_metadata_metadataversioned_.metadataversioned.md#asv1)
* [asV10](_metadata_metadataversioned_.metadataversioned.md#asv10)
* [asV2](_metadata_metadataversioned_.metadataversioned.md#asv2)
* [asV3](_metadata_metadataversioned_.metadataversioned.md#asv3)
* [asV4](_metadata_metadataversioned_.metadataversioned.md#asv4)
* [asV5](_metadata_metadataversioned_.metadataversioned.md#asv5)
* [asV6](_metadata_metadataversioned_.metadataversioned.md#asv6)
* [asV7](_metadata_metadataversioned_.metadataversioned.md#asv7)
* [asV8](_metadata_metadataversioned_.metadataversioned.md#asv8)
* [asV9](_metadata_metadataversioned_.metadataversioned.md#asv9)
* [encodedLength](_metadata_metadataversioned_.metadataversioned.md#encodedlength)
* [hash](_metadata_metadataversioned_.metadataversioned.md#hash)
* [isEmpty](_metadata_metadataversioned_.metadataversioned.md#isempty)
* [magicNumber](_metadata_metadataversioned_.metadataversioned.md#magicnumber)
* [version](_metadata_metadataversioned_.metadataversioned.md#version)

### Methods

* [clear](_metadata_metadataversioned_.metadataversioned.md#clear)
* [delete](_metadata_metadataversioned_.metadataversioned.md#delete)
* [eq](_metadata_metadataversioned_.metadataversioned.md#eq)
* [forEach](_metadata_metadataversioned_.metadataversioned.md#foreach)
* [get](_metadata_metadataversioned_.metadataversioned.md#get)
* [getAtIndex](_metadata_metadataversioned_.metadataversioned.md#getatindex)
* [getUniqTypes](_metadata_metadataversioned_.metadataversioned.md#getuniqtypes)
* [has](_metadata_metadataversioned_.metadataversioned.md#has)
* [set](_metadata_metadataversioned_.metadataversioned.md#set)
* [toArray](_metadata_metadataversioned_.metadataversioned.md#toarray)
* [toHex](_metadata_metadataversioned_.metadataversioned.md#tohex)
* [toJSON](_metadata_metadataversioned_.metadataversioned.md#tojson)
* [toRawType](_metadata_metadataversioned_.metadataversioned.md#torawtype)
* [toString](_metadata_metadataversioned_.metadataversioned.md#tostring)
* [toU8a](_metadata_metadataversioned_.metadataversioned.md#tou8a)
* [typesToMap](_metadata_metadataversioned_.metadataversioned.md#static-typestomap)
* [with](_metadata_metadataversioned_.metadataversioned.md#static-with)

## Constructors

###  constructor

\+ **new MetadataVersioned**(`registry`: Registry, `value?`: any): *[MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md)*

*Overrides void*

*Defined in [packages/metadata/src/Metadata/MetadataVersioned.ts:36](https://github.com/polkadot-js/api/blob/9c913fb482/packages/metadata/src/Metadata/MetadataVersioned.ts#L36)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | Registry |
`value?` | any |

**Returns:** *[MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md)*

## Properties

###  registry

• **registry**: *Registry*

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[registry](_metadata_metadataversioned_.metadataversioned.md#registry)*

*Defined in [packages/types/src/codec/Struct.ts:34](https://github.com/polkadot-js/api/blob/9c913fb482/packages/types/src/codec/Struct.ts#L34)*

___

###  size

• **size**: *number*

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[size](_metadata_metadataversioned_.metadataversioned.md#size)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:28

## Accessors

###  Type

• **get Type**(): *E*

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[Type](_metadata_metadataversioned_.metadataversioned.md#type)*

*Defined in [packages/types/src/codec/Struct.ts:158](https://github.com/polkadot-js/api/blob/9c913fb482/packages/types/src/codec/Struct.ts#L158)*

**`description`** Returns the Type description to sthe structure

**Returns:** *E*

___

###  asCallsOnly

• **get asCallsOnly**(): *[MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md)*

*Defined in [packages/metadata/src/Metadata/MetadataVersioned.ts:71](https://github.com/polkadot-js/api/blob/9c913fb482/packages/metadata/src/Metadata/MetadataVersioned.ts#L71)*

**`description`** Returns the wrapped metadata as a limited calls-only (latest) version

**Returns:** *[MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md)*

___

###  asLatest

• **get asLatest**(): *MetadataLatest*

*Defined in [packages/metadata/src/Metadata/MetadataVersioned.ts:160](https://github.com/polkadot-js/api/blob/9c913fb482/packages/metadata/src/Metadata/MetadataVersioned.ts#L160)*

**`description`** Returns the wrapped values as a latest version object

**Returns:** *MetadataLatest*

___

###  asV0

• **get asV0**(): *MetadataV0*

*Defined in [packages/metadata/src/Metadata/MetadataVersioned.ts:81](https://github.com/polkadot-js/api/blob/9c913fb482/packages/metadata/src/Metadata/MetadataVersioned.ts#L81)*

**`description`** Returns the wrapped metadata as a V0 object

**Returns:** *MetadataV0*

___

###  asV1

• **get asV1**(): *MetadataV1*

*Defined in [packages/metadata/src/Metadata/MetadataVersioned.ts:90](https://github.com/polkadot-js/api/blob/9c913fb482/packages/metadata/src/Metadata/MetadataVersioned.ts#L90)*

**`description`** Returns the wrapped values as a V1 object

**Returns:** *MetadataV1*

___

###  asV10

• **get asV10**(): *MetadataV10*

*Defined in [packages/metadata/src/Metadata/MetadataVersioned.ts:153](https://github.com/polkadot-js/api/blob/9c913fb482/packages/metadata/src/Metadata/MetadataVersioned.ts#L153)*

**`description`** Returns the wrapped values as a V10 object

**Returns:** *MetadataV10*

___

###  asV2

• **get asV2**(): *MetadataV2*

*Defined in [packages/metadata/src/Metadata/MetadataVersioned.ts:97](https://github.com/polkadot-js/api/blob/9c913fb482/packages/metadata/src/Metadata/MetadataVersioned.ts#L97)*

**`description`** Returns the wrapped values as a V2 object

**Returns:** *MetadataV2*

___

###  asV3

• **get asV3**(): *MetadataV3*

*Defined in [packages/metadata/src/Metadata/MetadataVersioned.ts:104](https://github.com/polkadot-js/api/blob/9c913fb482/packages/metadata/src/Metadata/MetadataVersioned.ts#L104)*

**`description`** Returns the wrapped values as a V3 object

**Returns:** *MetadataV3*

___

###  asV4

• **get asV4**(): *MetadataV4*

*Defined in [packages/metadata/src/Metadata/MetadataVersioned.ts:111](https://github.com/polkadot-js/api/blob/9c913fb482/packages/metadata/src/Metadata/MetadataVersioned.ts#L111)*

**`description`** Returns the wrapped values as a V4 object

**Returns:** *MetadataV4*

___

###  asV5

• **get asV5**(): *MetadataV5*

*Defined in [packages/metadata/src/Metadata/MetadataVersioned.ts:118](https://github.com/polkadot-js/api/blob/9c913fb482/packages/metadata/src/Metadata/MetadataVersioned.ts#L118)*

**`description`** Returns the wrapped values as a V5 object

**Returns:** *MetadataV5*

___

###  asV6

• **get asV6**(): *MetadataV6*

*Defined in [packages/metadata/src/Metadata/MetadataVersioned.ts:125](https://github.com/polkadot-js/api/blob/9c913fb482/packages/metadata/src/Metadata/MetadataVersioned.ts#L125)*

**`description`** Returns the wrapped values as a V6 object

**Returns:** *MetadataV6*

___

###  asV7

• **get asV7**(): *MetadataV7*

*Defined in [packages/metadata/src/Metadata/MetadataVersioned.ts:132](https://github.com/polkadot-js/api/blob/9c913fb482/packages/metadata/src/Metadata/MetadataVersioned.ts#L132)*

**`description`** Returns the wrapped values as a V7 object

**Returns:** *MetadataV7*

___

###  asV8

• **get asV8**(): *MetadataV8*

*Defined in [packages/metadata/src/Metadata/MetadataVersioned.ts:139](https://github.com/polkadot-js/api/blob/9c913fb482/packages/metadata/src/Metadata/MetadataVersioned.ts#L139)*

**`description`** Returns the wrapped values as a V8 object

**Returns:** *MetadataV8*

___

###  asV9

• **get asV9**(): *MetadataV9*

*Defined in [packages/metadata/src/Metadata/MetadataVersioned.ts:146](https://github.com/polkadot-js/api/blob/9c913fb482/packages/metadata/src/Metadata/MetadataVersioned.ts#L146)*

**`description`** Returns the wrapped values as a V9 object

**Returns:** *MetadataV9*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[encodedLength](_metadata_metadataversioned_.metadataversioned.md#encodedlength)*

*Defined in [packages/types/src/codec/Struct.ts:171](https://github.com/polkadot-js/api/blob/9c913fb482/packages/types/src/codec/Struct.ts#L171)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *IHash*

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[hash](_metadata_metadataversioned_.metadataversioned.md#hash)*

*Defined in [packages/types/src/codec/Struct.ts:182](https://github.com/polkadot-js/api/blob/9c913fb482/packages/types/src/codec/Struct.ts#L182)*

**`description`** returns a hash of the contents

**Returns:** *IHash*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[isEmpty](_metadata_metadataversioned_.metadataversioned.md#isempty)*

*Defined in [packages/types/src/codec/Struct.ts:143](https://github.com/polkadot-js/api/blob/9c913fb482/packages/types/src/codec/Struct.ts#L143)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  magicNumber

• **get magicNumber**(): *[MagicNumber](_metadata_magicnumber_.magicnumber.md)*

*Defined in [packages/metadata/src/Metadata/MetadataVersioned.ts:168](https://github.com/polkadot-js/api/blob/9c913fb482/packages/metadata/src/Metadata/MetadataVersioned.ts#L168)*

**`description`** 

**Returns:** *[MagicNumber](_metadata_magicnumber_.magicnumber.md)*

___

###  version

• **get version**(): *number*

*Defined in [packages/metadata/src/Metadata/MetadataVersioned.ts:182](https://github.com/polkadot-js/api/blob/9c913fb482/packages/metadata/src/Metadata/MetadataVersioned.ts#L182)*

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

*Defined in [packages/types/src/codec/Struct.ts:189](https://github.com/polkadot-js/api/blob/9c913fb482/packages/types/src/codec/Struct.ts#L189)*

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

*Defined in [packages/types/src/codec/Struct.ts:197](https://github.com/polkadot-js/api/blob/9c913fb482/packages/types/src/codec/Struct.ts#L197)*

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

*Defined in [packages/types/src/codec/Struct.ts:204](https://github.com/polkadot-js/api/blob/9c913fb482/packages/types/src/codec/Struct.ts#L204)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *Codec*

___

###  getUniqTypes

▸ **getUniqTypes**(`throwError`: boolean): *string[]*

*Defined in [packages/metadata/src/Metadata/MetadataVersioned.ts:186](https://github.com/polkadot-js/api/blob/9c913fb482/packages/metadata/src/Metadata/MetadataVersioned.ts#L186)*

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

*Defined in [packages/types/src/codec/Struct.ts:211](https://github.com/polkadot-js/api/blob/9c913fb482/packages/types/src/codec/Struct.ts#L211)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *Codec[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[toHex](_metadata_metadataversioned_.metadataversioned.md#tohex)*

*Defined in [packages/types/src/codec/Struct.ts:218](https://github.com/polkadot-js/api/blob/9c913fb482/packages/types/src/codec/Struct.ts#L218)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *AnyJsonObject | string*

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[toJSON](_metadata_metadataversioned_.metadataversioned.md#tojson)*

*Defined in [packages/types/src/codec/Struct.ts:225](https://github.com/polkadot-js/api/blob/9c913fb482/packages/types/src/codec/Struct.ts#L225)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *AnyJsonObject | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[toRawType](_metadata_metadataversioned_.metadataversioned.md#torawtype)*

*Defined in [packages/types/src/codec/Struct.ts:249](https://github.com/polkadot-js/api/blob/9c913fb482/packages/types/src/codec/Struct.ts#L249)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[toString](_metadata_metadataversioned_.metadataversioned.md#tostring)*

*Defined in [packages/types/src/codec/Struct.ts:258](https://github.com/polkadot-js/api/blob/9c913fb482/packages/types/src/codec/Struct.ts#L258)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: BareOpts): *Uint8Array*

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[toU8a](_metadata_metadataversioned_.metadataversioned.md#tou8a)*

*Defined in [packages/types/src/codec/Struct.ts:266](https://github.com/polkadot-js/api/blob/9c913fb482/packages/types/src/codec/Struct.ts#L266)*

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

*Defined in [packages/types/src/codec/Struct.ts:238](https://github.com/polkadot-js/api/blob/9c913fb482/packages/types/src/codec/Struct.ts#L238)*

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

*Defined in [packages/types/src/codec/Struct.ts:120](https://github.com/polkadot-js/api/blob/9c913fb482/packages/types/src/codec/Struct.ts#L120)*

**Type parameters:**

▪ **S**: *TypesDef*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | S |

**Returns:** *Constructor‹Struct‹S››*
