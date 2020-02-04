[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["primitive/Bytes"](../modules/_primitive_bytes_.md) › [Bytes](_primitive_bytes_.bytes.md)

# Class: Bytes

**`name`** Bytes

**`description`** 
A Bytes wrapper for Vec<u8>. The significant difference between this and a normal Uint8Array
is that this version allows for length-encoding. (i.e. it is a variable-item codec, the same
as what is found in [Text](_primitive_text_.text.md) and [Vec](_codec_vec_.vec.md))

## Hierarchy

  ↳ [Raw](_codec_raw_.raw.md)

  ↳ **Bytes**

  ↳ [StorageData](_primitive_storagedata_.storagedata.md)

  ↳ [StorageKey](_primitive_storagekey_.storagekey.md)

## Implements

* IU8a

## Indexable

* \[ **index**: *number*\]: number

## Index

### Constructors

* [constructor](_primitive_bytes_.bytes.md#constructor)

### Properties

* [registry](_primitive_bytes_.bytes.md#registry)

### Accessors

* [encodedLength](_primitive_bytes_.bytes.md#encodedlength)
* [hash](_primitive_bytes_.bytes.md#hash)
* [isEmpty](_primitive_bytes_.bytes.md#isempty)
* [length](_primitive_bytes_.bytes.md#length)

### Methods

* [bitLength](_primitive_bytes_.bytes.md#bitlength)
* [eq](_primitive_bytes_.bytes.md#eq)
* [subarray](_primitive_bytes_.bytes.md#subarray)
* [toHex](_primitive_bytes_.bytes.md#tohex)
* [toJSON](_primitive_bytes_.bytes.md#tojson)
* [toRawType](_primitive_bytes_.bytes.md#torawtype)
* [toString](_primitive_bytes_.bytes.md#tostring)
* [toU8a](_primitive_bytes_.bytes.md#tou8a)

## Constructors

###  constructor

\+ **new Bytes**(`registry`: Registry, `value?`: AnyU8a): *[Bytes](_primitive_bytes_.bytes.md)*

*Overrides [Raw](_codec_raw_.raw.md).[constructor](_codec_raw_.raw.md#constructor)*

*Defined in [packages/types/src/primitive/Bytes.ts:19](https://github.com/polkadot-js/api/blob/9c50e81ab9/packages/types/src/primitive/Bytes.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | Registry |
`value?` | AnyU8a |

**Returns:** *[Bytes](_primitive_bytes_.bytes.md)*

## Properties

###  registry

• **registry**: *Registry*

*Inherited from [Raw](_codec_raw_.raw.md).[registry](_codec_raw_.raw.md#registry)*

*Defined in [packages/types/src/codec/Raw.ts:20](https://github.com/polkadot-js/api/blob/9c50e81ab9/packages/types/src/codec/Raw.ts#L20)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Overrides [Raw](_codec_raw_.raw.md).[encodedLength](_codec_raw_.raw.md#encodedlength)*

*Defined in [packages/types/src/primitive/Bytes.ts:55](https://github.com/polkadot-js/api/blob/9c50e81ab9/packages/types/src/primitive/Bytes.ts#L55)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *IHash*

*Inherited from [Raw](_codec_raw_.raw.md).[hash](_codec_raw_.raw.md#hash)*

*Defined in [packages/types/src/codec/Raw.ts:47](https://github.com/polkadot-js/api/blob/9c50e81ab9/packages/types/src/codec/Raw.ts#L47)*

**`description`** returns a hash of the contents

**Returns:** *IHash*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Raw](_codec_raw_.raw.md).[isEmpty](_codec_raw_.raw.md#isempty)*

*Defined in [packages/types/src/codec/Raw.ts:54](https://github.com/polkadot-js/api/blob/9c50e81ab9/packages/types/src/codec/Raw.ts#L54)*

**`description`** Returns true if the type wraps an empty/default all-0 value

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Inherited from [Raw](_codec_raw_.raw.md).[length](_codec_raw_.raw.md#length)*

*Overrides void*

*Defined in [packages/types/src/codec/Raw.ts:61](https://github.com/polkadot-js/api/blob/9c50e81ab9/packages/types/src/codec/Raw.ts#L61)*

**`description`** The length of the value

**Returns:** *number*

## Methods

###  bitLength

▸ **bitLength**(): *number*

*Inherited from [Raw](_codec_raw_.raw.md).[bitLength](_codec_raw_.raw.md#bitlength)*

*Defined in [packages/types/src/codec/Raw.ts:69](https://github.com/polkadot-js/api/blob/9c50e81ab9/packages/types/src/codec/Raw.ts#L69)*

**`description`** Returns the number of bits in the value

**Returns:** *number*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Raw](_codec_raw_.raw.md).[eq](_codec_raw_.raw.md#eq)*

*Defined in [packages/types/src/codec/Raw.ts:76](https://github.com/polkadot-js/api/blob/9c50e81ab9/packages/types/src/codec/Raw.ts#L76)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  subarray

▸ **subarray**(`begin`: number, `end?`: undefined | number): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Inherited from [Raw](_codec_raw_.raw.md).[subarray](_codec_raw_.raw.md#subarray)*

*Overrides void*

*Defined in [packages/types/src/codec/Raw.ts:90](https://github.com/polkadot-js/api/blob/9c50e81ab9/packages/types/src/codec/Raw.ts#L90)*

**`description`** Create a new subarray from the actual buffer. This is needed for compat reasons since a new Uint8Array gets returned here

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`begin` | number | The position to start at |
`end?` | undefined &#124; number | The position to end at  |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Raw](_codec_raw_.raw.md).[toHex](_codec_raw_.raw.md#tohex)*

*Defined in [packages/types/src/codec/Raw.ts:97](https://github.com/polkadot-js/api/blob/9c50e81ab9/packages/types/src/codec/Raw.ts#L97)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *string*

*Inherited from [Raw](_codec_raw_.raw.md).[toJSON](_codec_raw_.raw.md#tojson)*

*Defined in [packages/types/src/codec/Raw.ts:104](https://github.com/polkadot-js/api/blob/9c50e81ab9/packages/types/src/codec/Raw.ts#L104)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Overrides [Raw](_codec_raw_.raw.md).[toRawType](_codec_raw_.raw.md#torawtype)*

*Defined in [packages/types/src/primitive/Bytes.ts:62](https://github.com/polkadot-js/api/blob/9c50e81ab9/packages/types/src/primitive/Bytes.ts#L62)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Raw](_codec_raw_.raw.md).[toString](_codec_raw_.raw.md#tostring)*

*Overrides void*

*Defined in [packages/types/src/codec/Raw.ts:118](https://github.com/polkadot-js/api/blob/9c50e81ab9/packages/types/src/codec/Raw.ts#L118)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Overrides [Raw](_codec_raw_.raw.md).[toU8a](_codec_raw_.raw.md#tou8a)*

*Defined in [packages/types/src/primitive/Bytes.ts:70](https://github.com/polkadot-js/api/blob/9c50e81ab9/packages/types/src/primitive/Bytes.ts#L70)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*
