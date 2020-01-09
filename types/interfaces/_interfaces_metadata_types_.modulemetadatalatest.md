[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/metadata/types"](../modules/_interfaces_metadata_types_.md) › [ModuleMetadataLatest](_interfaces_metadata_types_.modulemetadatalatest.md)

# Interface: ModuleMetadataLatest <**S, T, V, E**>

ModuleMetadataV11

## Type parameters

▪ **S**: *TypesDef*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  ↳ [ModuleMetadataV11](_interfaces_metadata_types_.modulemetadatav11.md)

  ↳ **ModuleMetadataLatest**

## Implements

* [Codec](_types_.codec.md)

## Index

### Constructors

* [constructor](_interfaces_metadata_types_.modulemetadatalatest.md#constructor)

### Properties

* [[Symbol.toStringTag]](_interfaces_metadata_types_.modulemetadatalatest.md#[symbol.tostringtag])
* [calls](_interfaces_metadata_types_.modulemetadatalatest.md#calls)
* [constants](_interfaces_metadata_types_.modulemetadatalatest.md#constants)
* [errors](_interfaces_metadata_types_.modulemetadatalatest.md#errors)
* [events](_interfaces_metadata_types_.modulemetadatalatest.md#events)
* [name](_interfaces_metadata_types_.modulemetadatalatest.md#name)
* [registry](_interfaces_metadata_types_.modulemetadatalatest.md#registry)
* [storage](_interfaces_metadata_types_.modulemetadatalatest.md#storage)

### Accessors

* [Type](_interfaces_metadata_types_.modulemetadatalatest.md#type)
* [encodedLength](_interfaces_metadata_types_.modulemetadatalatest.md#encodedlength)
* [hash](_interfaces_metadata_types_.modulemetadatalatest.md#hash)
* [isEmpty](_interfaces_metadata_types_.modulemetadatalatest.md#isempty)

### Methods

* [[Symbol.iterator]](_interfaces_metadata_types_.modulemetadatalatest.md#[symbol.iterator])
* [eq](_interfaces_metadata_types_.modulemetadatalatest.md#eq)
* [get](_interfaces_metadata_types_.modulemetadatalatest.md#get)
* [getAtIndex](_interfaces_metadata_types_.modulemetadatalatest.md#getatindex)
* [toArray](_interfaces_metadata_types_.modulemetadatalatest.md#toarray)
* [toHex](_interfaces_metadata_types_.modulemetadatalatest.md#tohex)
* [toJSON](_interfaces_metadata_types_.modulemetadatalatest.md#tojson)
* [toRawType](_interfaces_metadata_types_.modulemetadatalatest.md#torawtype)
* [toString](_interfaces_metadata_types_.modulemetadatalatest.md#tostring)
* [toU8a](_interfaces_metadata_types_.modulemetadatalatest.md#tou8a)
* [typesToMap](_interfaces_metadata_types_.modulemetadatalatest.md#static-typestomap)
* [with](_interfaces_metadata_types_.modulemetadatalatest.md#static-with)

## Constructors

###  constructor

\+ **new ModuleMetadataLatest**(`registry`: [Registry](_types_.registry.md), `Types`: S, `value`: V | Map‹any, any› | any[] | string, `jsonMap`: Map‹keyof S, string›): *[ModuleMetadataLatest](_interfaces_metadata_types_.modulemetadatalatest.md)*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[constructor](../classes/_codec_struct_.struct.md#constructor)*

*Defined in [packages/types/src/codec/Struct.ts:38](https://github.com/polkadot-js/api/blob/7057cf365b/packages/types/src/codec/Struct.ts#L38)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`registry` | [Registry](_types_.registry.md) | - |
`Types` | S | - |
`value` | V &#124; Map‹any, any› &#124; any[] &#124; string |  {} as V |
`jsonMap` | Map‹keyof S, string› |  new Map() |

**Returns:** *[ModuleMetadataLatest](_interfaces_metadata_types_.modulemetadatalatest.md)*

## Properties

###  [Symbol.toStringTag]

• **[Symbol.toStringTag]**: *string*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:130

___

###  calls

• **calls**: *[Option](../classes/_codec_option_.option.md)‹[Vec](../classes/_codec_vec_.vec.md)‹[FunctionMetadataV11](_interfaces_metadata_types_.functionmetadatav11.md)››*

*Inherited from [ModuleMetadataV11](_interfaces_metadata_types_.modulemetadatav11.md).[calls](_interfaces_metadata_types_.modulemetadatav11.md#calls)*

*Defined in [packages/types/src/interfaces/metadata/types.ts:535](https://github.com/polkadot-js/api/blob/7057cf365b/packages/types/src/interfaces/metadata/types.ts#L535)*

Option<Vec<FunctionMetadataV11>>

___

###  constants

• **constants**: *[Vec](../classes/_codec_vec_.vec.md)‹[ModuleConstantMetadataV11](_interfaces_metadata_types_.moduleconstantmetadatav11.md)›*

*Inherited from [ModuleMetadataV11](_interfaces_metadata_types_.modulemetadatav11.md).[constants](_interfaces_metadata_types_.modulemetadatav11.md#constants)*

*Defined in [packages/types/src/interfaces/metadata/types.ts:539](https://github.com/polkadot-js/api/blob/7057cf365b/packages/types/src/interfaces/metadata/types.ts#L539)*

Vec<ModuleConstantMetadataV11>

___

###  errors

• **errors**: *[Vec](../classes/_codec_vec_.vec.md)‹[ErrorMetadataV11](_interfaces_metadata_types_.errormetadatav11.md)›*

*Inherited from [ModuleMetadataV11](_interfaces_metadata_types_.modulemetadatav11.md).[errors](_interfaces_metadata_types_.modulemetadatav11.md#errors)*

*Defined in [packages/types/src/interfaces/metadata/types.ts:541](https://github.com/polkadot-js/api/blob/7057cf365b/packages/types/src/interfaces/metadata/types.ts#L541)*

Vec<ErrorMetadataV11>

___

###  events

• **events**: *[Option](../classes/_codec_option_.option.md)‹[Vec](../classes/_codec_vec_.vec.md)‹[EventMetadataV11](_interfaces_metadata_types_.eventmetadatav11.md)››*

*Inherited from [ModuleMetadataV11](_interfaces_metadata_types_.modulemetadatav11.md).[events](_interfaces_metadata_types_.modulemetadatav11.md#events)*

*Defined in [packages/types/src/interfaces/metadata/types.ts:537](https://github.com/polkadot-js/api/blob/7057cf365b/packages/types/src/interfaces/metadata/types.ts#L537)*

Option<Vec<EventMetadataV11>>

___

###  name

• **name**: *[Text](../classes/_primitive_text_.text.md)*

*Inherited from [ModuleMetadataV11](_interfaces_metadata_types_.modulemetadatav11.md).[name](_interfaces_metadata_types_.modulemetadatav11.md#name)*

*Defined in [packages/types/src/interfaces/metadata/types.ts:531](https://github.com/polkadot-js/api/blob/7057cf365b/packages/types/src/interfaces/metadata/types.ts#L531)*

Text

___

###  registry

• **registry**: *[Registry](_types_.registry.md)*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[registry](../classes/_codec_struct_.struct.md#registry)*

*Defined in [packages/types/src/codec/Struct.ts:34](https://github.com/polkadot-js/api/blob/7057cf365b/packages/types/src/codec/Struct.ts#L34)*

___

###  storage

• **storage**: *[Option](../classes/_codec_option_.option.md)‹[StorageMetadataV11](_interfaces_metadata_types_.storagemetadatav11.md)›*

*Inherited from [ModuleMetadataV11](_interfaces_metadata_types_.modulemetadatav11.md).[storage](_interfaces_metadata_types_.modulemetadatav11.md#storage)*

*Defined in [packages/types/src/interfaces/metadata/types.ts:533](https://github.com/polkadot-js/api/blob/7057cf365b/packages/types/src/interfaces/metadata/types.ts#L533)*

Option<StorageMetadataV11>

## Accessors

###  Type

• **get Type**(): *E*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[Type](../classes/_codec_struct_.struct.md#type)*

*Defined in [packages/types/src/codec/Struct.ts:158](https://github.com/polkadot-js/api/blob/7057cf365b/packages/types/src/codec/Struct.ts#L158)*

**`description`** Returns the Type description to sthe structure

**Returns:** *E*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[encodedLength](../classes/_codec_struct_.struct.md#encodedlength)*

*Defined in [packages/types/src/codec/Struct.ts:171](https://github.com/polkadot-js/api/blob/7057cf365b/packages/types/src/codec/Struct.ts#L171)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](_types_.ihash.md)*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[hash](../classes/_codec_struct_.struct.md#hash)*

*Defined in [packages/types/src/codec/Struct.ts:182](https://github.com/polkadot-js/api/blob/7057cf365b/packages/types/src/codec/Struct.ts#L182)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[isEmpty](../classes/_codec_struct_.struct.md#isempty)*

*Defined in [packages/types/src/codec/Struct.ts:143](https://github.com/polkadot-js/api/blob/7057cf365b/packages/types/src/codec/Struct.ts#L143)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *IterableIterator‹[keyof S, [Codec](_types_.codec.md)]›*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:121

Returns an iterable of entries in the map.

**Returns:** *IterableIterator‹[keyof S, [Codec](_types_.codec.md)]›*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[eq](../classes/_codec_struct_.struct.md#eq)*

*Defined in [packages/types/src/codec/Struct.ts:189](https://github.com/polkadot-js/api/blob/7057cf365b/packages/types/src/codec/Struct.ts#L189)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  get

▸ **get**(`name`: keyof S): *[Codec](_types_.codec.md) | undefined*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[get](../classes/_codec_struct_.struct.md#get)*

*Overrides void*

*Defined in [packages/types/src/codec/Struct.ts:197](https://github.com/polkadot-js/api/blob/7057cf365b/packages/types/src/codec/Struct.ts#L197)*

**`description`** Returns a specific names entry in the structure

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | keyof S | The name of the entry to retrieve  |

**Returns:** *[Codec](_types_.codec.md) | undefined*

___

###  getAtIndex

▸ **getAtIndex**(`index`: number): *[Codec](_types_.codec.md)*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[getAtIndex](../classes/_codec_struct_.struct.md#getatindex)*

*Defined in [packages/types/src/codec/Struct.ts:204](https://github.com/polkadot-js/api/blob/7057cf365b/packages/types/src/codec/Struct.ts#L204)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *[Codec](_types_.codec.md)*

___

###  toArray

▸ **toArray**(): *[Codec](_types_.codec.md)[]*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toArray](../classes/_codec_struct_.struct.md#toarray)*

*Defined in [packages/types/src/codec/Struct.ts:211](https://github.com/polkadot-js/api/blob/7057cf365b/packages/types/src/codec/Struct.ts#L211)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](_types_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toHex](../classes/_codec_struct_.struct.md#tohex)*

*Defined in [packages/types/src/codec/Struct.ts:218](https://github.com/polkadot-js/api/blob/7057cf365b/packages/types/src/codec/Struct.ts#L218)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](_types_.anyjsonobject.md) | string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toJSON](../classes/_codec_struct_.struct.md#tojson)*

*Defined in [packages/types/src/codec/Struct.ts:225](https://github.com/polkadot-js/api/blob/7057cf365b/packages/types/src/codec/Struct.ts#L225)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](_types_.anyjsonobject.md) | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toRawType](../classes/_codec_struct_.struct.md#torawtype)*

*Defined in [packages/types/src/codec/Struct.ts:249](https://github.com/polkadot-js/api/blob/7057cf365b/packages/types/src/codec/Struct.ts#L249)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toString](../classes/_codec_struct_.struct.md#tostring)*

*Defined in [packages/types/src/codec/Struct.ts:258](https://github.com/polkadot-js/api/blob/7057cf365b/packages/types/src/codec/Struct.ts#L258)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: [BareOpts](../modules/_types_.md#bareopts)): *Uint8Array*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toU8a](../classes/_codec_struct_.struct.md#tou8a)*

*Defined in [packages/types/src/codec/Struct.ts:266](https://github.com/polkadot-js/api/blob/7057cf365b/packages/types/src/codec/Struct.ts#L266)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | [BareOpts](../modules/_types_.md#bareopts) | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*

___

### `Static` typesToMap

▸ **typesToMap**(`registry`: [Registry](_types_.registry.md), `Types`: Record‹string, [Constructor](_types_.constructor.md)›): *Record‹string, string›*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[typesToMap](../classes/_codec_struct_.struct.md#static-typestomap)*

*Defined in [packages/types/src/codec/Struct.ts:238](https://github.com/polkadot-js/api/blob/7057cf365b/packages/types/src/codec/Struct.ts#L238)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](_types_.registry.md) |
`Types` | Record‹string, [Constructor](_types_.constructor.md)› |

**Returns:** *Record‹string, string›*

___

### `Static` with

▸ **with**<**S**>(`Types`: S): *[Constructor](_types_.constructor.md)‹[Struct](../classes/_codec_struct_.struct.md)‹S››*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[with](../classes/_codec_struct_.struct.md#static-with)*

*Defined in [packages/types/src/codec/Struct.ts:120](https://github.com/polkadot-js/api/blob/7057cf365b/packages/types/src/codec/Struct.ts#L120)*

**Type parameters:**

▪ **S**: *TypesDef*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | S |

**Returns:** *[Constructor](_types_.constructor.md)‹[Struct](../classes/_codec_struct_.struct.md)‹S››*
