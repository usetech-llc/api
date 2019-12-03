[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["primitive/Data"](../modules/_primitive_data_.md) › [Data](_primitive_data_.data.md)

# Class: Data

**`name`** Data

**`description`** 
A raw data structure. It is just an encoding of a U8a, without any length encoding

## Hierarchy

  ↳ [U8a](_codec_u8a_.u8a.md)

  ↳ **Data**

## Implements

* [IU8a](../interfaces/_types_.iu8a.md)

## Indexable

* \[ **index**: *number*\]: number

## Index

### Constructors

* [constructor](_primitive_data_.data.md#constructor)

### Properties

* [registry](_primitive_data_.data.md#registry)

### Accessors

* [encodedLength](_primitive_data_.data.md#encodedlength)
* [hash](_primitive_data_.data.md#hash)
* [isEmpty](_primitive_data_.data.md#isempty)
* [length](_primitive_data_.data.md#length)

### Methods

* [bitLength](_primitive_data_.data.md#bitlength)
* [eq](_primitive_data_.data.md#eq)
* [subarray](_primitive_data_.data.md#subarray)
* [toHex](_primitive_data_.data.md#tohex)
* [toJSON](_primitive_data_.data.md#tojson)
* [toRawType](_primitive_data_.data.md#torawtype)
* [toString](_primitive_data_.data.md#tostring)
* [toU8a](_primitive_data_.data.md#tou8a)

## Constructors

###  constructor

\+ **new Data**(`registry`: [Registry](../interfaces/_types_.registry.md), `value?`: [AnyU8a](../modules/_types_.md#anyu8a)): *[Data](_primitive_data_.data.md)*

*Inherited from [U8a](_codec_u8a_.u8a.md).[constructor](_codec_u8a_.u8a.md#constructor)*

*Defined in [packages/types/src/codec/U8a.ts:20](https://github.com/polkadot-js/api/blob/762b16ea13/packages/types/src/codec/U8a.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_types_.registry.md) |
`value?` | [AnyU8a](../modules/_types_.md#anyu8a) |

**Returns:** *[Data](_primitive_data_.data.md)*

## Properties

###  registry

• **registry**: *[Registry](../interfaces/_types_.registry.md)*

*Implementation of [IU8a](../interfaces/_types_.iu8a.md).[registry](../interfaces/_types_.iu8a.md#registry)*

*Inherited from [U8a](_codec_u8a_.u8a.md).[registry](_codec_u8a_.u8a.md#registry)*

*Defined in [packages/types/src/codec/U8a.ts:20](https://github.com/polkadot-js/api/blob/762b16ea13/packages/types/src/codec/U8a.ts#L20)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [U8a](_codec_u8a_.u8a.md).[encodedLength](_codec_u8a_.u8a.md#encodedlength)*

*Defined in [packages/types/src/codec/U8a.ts:39](https://github.com/polkadot-js/api/blob/762b16ea13/packages/types/src/codec/U8a.ts#L39)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](../interfaces/_types_.ihash.md)*

*Inherited from [U8a](_codec_u8a_.u8a.md).[hash](_codec_u8a_.u8a.md#hash)*

*Defined in [packages/types/src/codec/U8a.ts:46](https://github.com/polkadot-js/api/blob/762b16ea13/packages/types/src/codec/U8a.ts#L46)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](../interfaces/_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [U8a](_codec_u8a_.u8a.md).[isEmpty](_codec_u8a_.u8a.md#isempty)*

*Defined in [packages/types/src/codec/U8a.ts:53](https://github.com/polkadot-js/api/blob/762b16ea13/packages/types/src/codec/U8a.ts#L53)*

**`description`** Returns true if the type wraps an empty/default all-0 value

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Inherited from [U8a](_codec_u8a_.u8a.md).[length](_codec_u8a_.u8a.md#length)*

*Overrides void*

*Defined in [packages/types/src/codec/U8a.ts:60](https://github.com/polkadot-js/api/blob/762b16ea13/packages/types/src/codec/U8a.ts#L60)*

**`description`** The length of the value

**Returns:** *number*

## Methods

###  bitLength

▸ **bitLength**(): *number*

*Implementation of [IU8a](../interfaces/_types_.iu8a.md)*

*Inherited from [U8a](_codec_u8a_.u8a.md).[bitLength](_codec_u8a_.u8a.md#bitlength)*

*Defined in [packages/types/src/codec/U8a.ts:68](https://github.com/polkadot-js/api/blob/762b16ea13/packages/types/src/codec/U8a.ts#L68)*

**`description`** Returns the number of bits in the value

**Returns:** *number*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [IU8a](../interfaces/_types_.iu8a.md)*

*Inherited from [U8a](_codec_u8a_.u8a.md).[eq](_codec_u8a_.u8a.md#eq)*

*Defined in [packages/types/src/codec/U8a.ts:75](https://github.com/polkadot-js/api/blob/762b16ea13/packages/types/src/codec/U8a.ts#L75)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  subarray

▸ **subarray**(`begin`: number, `end?`: undefined | number): *Uint8Array*

*Inherited from [U8a](_codec_u8a_.u8a.md).[subarray](_codec_u8a_.u8a.md#subarray)*

*Overrides void*

*Defined in [packages/types/src/codec/U8a.ts:89](https://github.com/polkadot-js/api/blob/762b16ea13/packages/types/src/codec/U8a.ts#L89)*

**`description`** Create a new subarray from the actual buffer. This is needed for compat reasons since a new Uint8Array gets returned here

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`begin` | number | The position to start at |
`end?` | undefined &#124; number | The position to end at  |

**Returns:** *Uint8Array*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [U8a](_codec_u8a_.u8a.md).[toHex](_codec_u8a_.u8a.md#tohex)*

*Defined in [packages/types/src/codec/U8a.ts:96](https://github.com/polkadot-js/api/blob/762b16ea13/packages/types/src/codec/U8a.ts#L96)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *string*

*Implementation of [IU8a](../interfaces/_types_.iu8a.md)*

*Inherited from [U8a](_codec_u8a_.u8a.md).[toJSON](_codec_u8a_.u8a.md#tojson)*

*Defined in [packages/types/src/codec/U8a.ts:103](https://github.com/polkadot-js/api/blob/762b16ea13/packages/types/src/codec/U8a.ts#L103)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [IU8a](../interfaces/_types_.iu8a.md)*

*Inherited from [U8a](_codec_u8a_.u8a.md).[toRawType](_codec_u8a_.u8a.md#torawtype)*

*Defined in [packages/types/src/codec/U8a.ts:110](https://github.com/polkadot-js/api/blob/762b16ea13/packages/types/src/codec/U8a.ts#L110)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [IU8a](../interfaces/_types_.iu8a.md)*

*Inherited from [U8a](_codec_u8a_.u8a.md).[toString](_codec_u8a_.u8a.md#tostring)*

*Overrides void*

*Defined in [packages/types/src/codec/U8a.ts:117](https://github.com/polkadot-js/api/blob/762b16ea13/packages/types/src/codec/U8a.ts#L117)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from [U8a](_codec_u8a_.u8a.md).[toU8a](_codec_u8a_.u8a.md#tou8a)*

*Defined in [packages/types/src/codec/U8a.ts:126](https://github.com/polkadot-js/api/blob/762b16ea13/packages/types/src/codec/U8a.ts#L126)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*
