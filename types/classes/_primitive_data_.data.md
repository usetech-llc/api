[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["primitive/Data"](../modules/_primitive_data_.md) › [Data](_primitive_data_.data.md)

# Class: Data

**`name`** Data

**`description`** 
A [Data](_primitive_data_.data.md) container with node, raw or hashed data

## Hierarchy

  ↳ [Enum](_codec_enum_.enum.md)

  ↳ **Data**

## Implements

* Codec

## Index

### Constructors

* [constructor](_primitive_data_.data.md#constructor)

### Properties

* [registry](_primitive_data_.data.md#registry)

### Accessors

* [asRaw](_primitive_data_.data.md#asraw)
* [asSha256](_primitive_data_.data.md#assha256)
* [defEntries](_primitive_data_.data.md#defentries)
* [defKeys](_primitive_data_.data.md#defkeys)
* [encodedLength](_primitive_data_.data.md#encodedlength)
* [hash](_primitive_data_.data.md#hash)
* [index](_primitive_data_.data.md#index)
* [isBasic](_primitive_data_.data.md#isbasic)
* [isEmpty](_primitive_data_.data.md#isempty)
* [isNone](_primitive_data_.data.md#isnone)
* [isNull](_primitive_data_.data.md#isnull)
* [isRaw](_primitive_data_.data.md#israw)
* [isSha256](_primitive_data_.data.md#issha256)
* [type](_primitive_data_.data.md#type)
* [value](_primitive_data_.data.md#value)

### Methods

* [eq](_primitive_data_.data.md#eq)
* [toHex](_primitive_data_.data.md#tohex)
* [toJSON](_primitive_data_.data.md#tojson)
* [toNumber](_primitive_data_.data.md#tonumber)
* [toRawType](_primitive_data_.data.md#torawtype)
* [toString](_primitive_data_.data.md#tostring)
* [toU8a](_primitive_data_.data.md#tou8a)
* [with](_primitive_data_.data.md#static-with)

## Constructors

###  constructor

\+ **new Data**(`registry`: Registry, `value?`: Record‹string, any› | [Uint8Array](_codec_raw_.raw.md#static-uint8array) | [Enum](_codec_enum_.enum.md) | string): *[Data](_primitive_data_.data.md)*

*Overrides [Enum](_codec_enum_.enum.md).[constructor](_codec_enum_.enum.md#constructor)*

*Defined in [packages/types/src/primitive/Data.ts:56](https://github.com/polkadot-js/api/blob/0e7c508d7f/packages/types/src/primitive/Data.ts#L56)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | Registry |
`value?` | Record‹string, any› &#124; [Uint8Array](_codec_raw_.raw.md#static-uint8array) &#124; [Enum](_codec_enum_.enum.md) &#124; string |

**Returns:** *[Data](_primitive_data_.data.md)*

## Properties

###  registry

• **registry**: *Registry*

*Inherited from [Base](_codec_base_.base.md).[registry](_codec_base_.base.md#registry)*

*Defined in [packages/types/src/codec/Base.ts:16](https://github.com/polkadot-js/api/blob/0e7c508d7f/packages/types/src/codec/Base.ts#L16)*

## Accessors

###  asRaw

• **get asRaw**(): *[Bytes](_primitive_bytes_.bytes.md)*

*Defined in [packages/types/src/primitive/Data.ts:68](https://github.com/polkadot-js/api/blob/0e7c508d7f/packages/types/src/primitive/Data.ts#L68)*

**Returns:** *[Bytes](_primitive_bytes_.bytes.md)*

___

###  asSha256

• **get asSha256**(): *[H256](_primitive_h256_.h256.md)*

*Defined in [packages/types/src/primitive/Data.ts:72](https://github.com/polkadot-js/api/blob/0e7c508d7f/packages/types/src/primitive/Data.ts#L72)*

**Returns:** *[H256](_primitive_h256_.h256.md)*

___

###  defEntries

• **get defEntries**(): *string[]*

*Inherited from [Enum](_codec_enum_.enum.md).[defEntries](_codec_enum_.enum.md#defentries)*

*Defined in [packages/types/src/codec/Enum.ts:209](https://github.com/polkadot-js/api/blob/0e7c508d7f/packages/types/src/codec/Enum.ts#L209)*

**`description`** The available keys for this enum

**Returns:** *string[]*

___

###  defKeys

• **get defKeys**(): *string[]*

*Inherited from [Enum](_codec_enum_.enum.md).[defKeys](_codec_enum_.enum.md#defkeys)*

*Defined in [packages/types/src/codec/Enum.ts:216](https://github.com/polkadot-js/api/blob/0e7c508d7f/packages/types/src/codec/Enum.ts#L216)*

**`description`** The available keys for this enum

**Returns:** *string[]*

___

###  encodedLength

• **get encodedLength**(): *number*

*Overrides [Enum](_codec_enum_.enum.md).[encodedLength](_codec_enum_.enum.md#encodedlength)*

*Defined in [packages/types/src/primitive/Data.ts:87](https://github.com/polkadot-js/api/blob/0e7c508d7f/packages/types/src/primitive/Data.ts#L87)*

**`description`** The encoded length

**Returns:** *number*

___

###  hash

• **get hash**(): *IHash*

*Inherited from [Base](_codec_base_.base.md).[hash](_codec_base_.base.md#hash)*

*Defined in [packages/types/src/codec/Base.ts:35](https://github.com/polkadot-js/api/blob/0e7c508d7f/packages/types/src/codec/Base.ts#L35)*

**`description`** returns a hash of the contents

**Returns:** *IHash*

___

###  index

• **get index**(): *number*

*Inherited from [Enum](_codec_enum_.enum.md).[index](_codec_enum_.enum.md#index)*

*Defined in [packages/types/src/codec/Enum.ts:181](https://github.com/polkadot-js/api/blob/0e7c508d7f/packages/types/src/codec/Enum.ts#L181)*

**`description`** The index of the metadata value

**Returns:** *number*

___

###  isBasic

• **get isBasic**(): *boolean*

*Inherited from [Enum](_codec_enum_.enum.md).[isBasic](_codec_enum_.enum.md#isbasic)*

*Defined in [packages/types/src/codec/Enum.ts:188](https://github.com/polkadot-js/api/blob/0e7c508d7f/packages/types/src/codec/Enum.ts#L188)*

**`description`** true if this is a basic enum (no values)

**Returns:** *boolean*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Base](_codec_base_.base.md).[isEmpty](_codec_base_.base.md#isempty)*

*Defined in [packages/types/src/codec/Base.ts:42](https://github.com/polkadot-js/api/blob/0e7c508d7f/packages/types/src/codec/Base.ts#L42)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  isNone

• **get isNone**(): *boolean*

*Inherited from [Enum](_codec_enum_.enum.md).[isNone](_codec_enum_.enum.md#isnone)*

*Defined in [packages/types/src/codec/Enum.ts:195](https://github.com/polkadot-js/api/blob/0e7c508d7f/packages/types/src/codec/Enum.ts#L195)*

**`description`** Checks if the Enum points to a [Null](_primitive_null_.null.md) type

**Returns:** *boolean*

___

###  isNull

• **get isNull**(): *boolean*

*Inherited from [Enum](_codec_enum_.enum.md).[isNull](_codec_enum_.enum.md#isnull)*

*Defined in [packages/types/src/codec/Enum.ts:202](https://github.com/polkadot-js/api/blob/0e7c508d7f/packages/types/src/codec/Enum.ts#L202)*

**`description`** Checks if the Enum points to a [Null](_primitive_null_.null.md) type (deprecated, use isNone)

**Returns:** *boolean*

___

###  isRaw

• **get isRaw**(): *boolean*

*Defined in [packages/types/src/primitive/Data.ts:76](https://github.com/polkadot-js/api/blob/0e7c508d7f/packages/types/src/primitive/Data.ts#L76)*

**Returns:** *boolean*

___

###  isSha256

• **get isSha256**(): *boolean*

*Defined in [packages/types/src/primitive/Data.ts:80](https://github.com/polkadot-js/api/blob/0e7c508d7f/packages/types/src/primitive/Data.ts#L80)*

**Returns:** *boolean*

___

###  type

• **get type**(): *string*

*Inherited from [Enum](_codec_enum_.enum.md).[type](_codec_enum_.enum.md#type)*

*Defined in [packages/types/src/codec/Enum.ts:223](https://github.com/polkadot-js/api/blob/0e7c508d7f/packages/types/src/codec/Enum.ts#L223)*

**`description`** The name of the type this enum value represents

**Returns:** *string*

___

###  value

• **get value**(): *Codec*

*Inherited from [Enum](_codec_enum_.enum.md).[value](_codec_enum_.enum.md#value)*

*Defined in [packages/types/src/codec/Enum.ts:230](https://github.com/polkadot-js/api/blob/0e7c508d7f/packages/types/src/codec/Enum.ts#L230)*

**`description`** The value of the enum

**Returns:** *Codec*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Enum](_codec_enum_.enum.md).[eq](_codec_enum_.enum.md#eq)*

*Overrides [Base](_codec_base_.base.md).[eq](_codec_base_.base.md#eq)*

*Defined in [packages/types/src/codec/Enum.ts:237](https://github.com/polkadot-js/api/blob/0e7c508d7f/packages/types/src/codec/Enum.ts#L237)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Enum](_codec_enum_.enum.md).[toHex](_codec_enum_.enum.md#tohex)*

*Overrides [Base](_codec_base_.base.md).[toHex](_codec_base_.base.md#tohex)*

*Defined in [packages/types/src/codec/Enum.ts:260](https://github.com/polkadot-js/api/blob/0e7c508d7f/packages/types/src/codec/Enum.ts#L260)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *AnyJson*

*Inherited from [Enum](_codec_enum_.enum.md).[toJSON](_codec_enum_.enum.md#tojson)*

*Overrides [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [packages/types/src/codec/Enum.ts:267](https://github.com/polkadot-js/api/blob/0e7c508d7f/packages/types/src/codec/Enum.ts#L267)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *AnyJson*

___

###  toNumber

▸ **toNumber**(): *number*

*Inherited from [Enum](_codec_enum_.enum.md).[toNumber](_codec_enum_.enum.md#tonumber)*

*Defined in [packages/types/src/codec/Enum.ts:276](https://github.com/polkadot-js/api/blob/0e7c508d7f/packages/types/src/codec/Enum.ts#L276)*

**`description`** Returns the number representation for the value

**Returns:** *number*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Enum](_codec_enum_.enum.md).[toRawType](_codec_enum_.enum.md#torawtype)*

*Overrides [Base](_codec_base_.base.md).[toRawType](_codec_base_.base.md#torawtype)*

*Defined in [packages/types/src/codec/Enum.ts:292](https://github.com/polkadot-js/api/blob/0e7c508d7f/packages/types/src/codec/Enum.ts#L292)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Enum](_codec_enum_.enum.md).[toString](_codec_enum_.enum.md#tostring)*

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [packages/types/src/codec/Enum.ts:299](https://github.com/polkadot-js/api/blob/0e7c508d7f/packages/types/src/codec/Enum.ts#L299)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Overrides [Enum](_codec_enum_.enum.md).[toU8a](_codec_enum_.enum.md#tou8a)*

*Defined in [packages/types/src/primitive/Data.ts:94](https://github.com/polkadot-js/api/blob/0e7c508d7f/packages/types/src/primitive/Data.ts#L94)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

___

### `Static` with

▸ **with**(`Types`: Record‹string, InterfaceTypes | Constructor› | string[]): *[EnumConstructor](../interfaces/_codec_enum_.enumconstructor.md)‹[Enum](_codec_enum_.enum.md)›*

*Inherited from [Enum](_codec_enum_.enum.md).[with](_codec_enum_.enum.md#static-with)*

*Defined in [packages/types/src/codec/Enum.ts:138](https://github.com/polkadot-js/api/blob/0e7c508d7f/packages/types/src/codec/Enum.ts#L138)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | Record‹string, InterfaceTypes &#124; Constructor› &#124; string[] |

**Returns:** *[EnumConstructor](../interfaces/_codec_enum_.enumconstructor.md)‹[Enum](_codec_enum_.enum.md)›*
