[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["codec/Raw"](../modules/_codec_raw_.md) › [Raw](_codec_raw_.raw.md)

# Class: Raw

**`name`** Raw

**`description`** 
A basic wrapper around Uint8Array, with no frills and no fuss. It does differ
from other implementations where it will consume the full Uint8Array as passed to it.
As such it is meant to be subclassed where the wrapper takes care of the
actual lengths instead of used directly.

## Hierarchy

* [Uint8Array](_codec_raw_.raw.md#static-uint8array)

  ↳ **Raw**

  ↳ [U8aFixed](_codec_u8afixed_.u8afixed.md)

  ↳ [BitVec](_primitive_bitvec_.bitvec.md)

  ↳ [Bytes](_primitive_bytes_.bytes.md)

  ↳ [ImmortalEra](_primitive_extrinsic_extrinsicera_.immortalera.md)

## Implements

* IU8a

## Indexable

* \[ **index**: *number*\]: number

## Index

### Constructors

* [constructor](_codec_raw_.raw.md#constructor)

### Properties

* [registry](_codec_raw_.raw.md#registry)
* [Uint8Array](_codec_raw_.raw.md#static-uint8array)

### Accessors

* [encodedLength](_codec_raw_.raw.md#encodedlength)
* [hash](_codec_raw_.raw.md#hash)
* [isEmpty](_codec_raw_.raw.md#isempty)
* [length](_codec_raw_.raw.md#length)

### Methods

* [bitLength](_codec_raw_.raw.md#bitlength)
* [eq](_codec_raw_.raw.md#eq)
* [subarray](_codec_raw_.raw.md#subarray)
* [toHex](_codec_raw_.raw.md#tohex)
* [toJSON](_codec_raw_.raw.md#tojson)
* [toRawType](_codec_raw_.raw.md#torawtype)
* [toString](_codec_raw_.raw.md#tostring)
* [toU8a](_codec_raw_.raw.md#tou8a)

## Constructors

###  constructor

\+ **new Raw**(`registry`: Registry, `value?`: AnyU8a): *[Raw](_codec_raw_.raw.md)*

*Defined in [packages/types/src/codec/Raw.ts:29](https://github.com/polkadot-js/api/blob/07ed405610/packages/types/src/codec/Raw.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | Registry |
`value?` | AnyU8a |

**Returns:** *[Raw](_codec_raw_.raw.md)*

## Properties

###  registry

• **registry**: *Registry*

*Defined in [packages/types/src/codec/Raw.ts:29](https://github.com/polkadot-js/api/blob/07ed405610/packages/types/src/codec/Raw.ts#L29)*

___

### `Static` Uint8Array

▪ **Uint8Array**: *Uint8ArrayConstructor*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2257

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Defined in [packages/types/src/codec/Raw.ts:40](https://github.com/polkadot-js/api/blob/07ed405610/packages/types/src/codec/Raw.ts#L40)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *IHash*

*Defined in [packages/types/src/codec/Raw.ts:47](https://github.com/polkadot-js/api/blob/07ed405610/packages/types/src/codec/Raw.ts#L47)*

**`description`** returns a hash of the contents

**Returns:** *IHash*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Defined in [packages/types/src/codec/Raw.ts:54](https://github.com/polkadot-js/api/blob/07ed405610/packages/types/src/codec/Raw.ts#L54)*

**`description`** Returns true if the type wraps an empty/default all-0 value

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Overrides void*

*Defined in [packages/types/src/codec/Raw.ts:61](https://github.com/polkadot-js/api/blob/07ed405610/packages/types/src/codec/Raw.ts#L61)*

**`description`** The length of the value

**Returns:** *number*

## Methods

###  bitLength

▸ **bitLength**(): *number*

*Defined in [packages/types/src/codec/Raw.ts:69](https://github.com/polkadot-js/api/blob/07ed405610/packages/types/src/codec/Raw.ts#L69)*

**`description`** Returns the number of bits in the value

**Returns:** *number*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Defined in [packages/types/src/codec/Raw.ts:76](https://github.com/polkadot-js/api/blob/07ed405610/packages/types/src/codec/Raw.ts#L76)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  subarray

▸ **subarray**(`begin`: number, `end?`: undefined | number): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Overrides void*

*Defined in [packages/types/src/codec/Raw.ts:90](https://github.com/polkadot-js/api/blob/07ed405610/packages/types/src/codec/Raw.ts#L90)*

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

*Defined in [packages/types/src/codec/Raw.ts:97](https://github.com/polkadot-js/api/blob/07ed405610/packages/types/src/codec/Raw.ts#L97)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *string*

*Defined in [packages/types/src/codec/Raw.ts:104](https://github.com/polkadot-js/api/blob/07ed405610/packages/types/src/codec/Raw.ts#L104)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Defined in [packages/types/src/codec/Raw.ts:111](https://github.com/polkadot-js/api/blob/07ed405610/packages/types/src/codec/Raw.ts#L111)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Overrides void*

*Defined in [packages/types/src/codec/Raw.ts:118](https://github.com/polkadot-js/api/blob/07ed405610/packages/types/src/codec/Raw.ts#L118)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Defined in [packages/types/src/codec/Raw.ts:127](https://github.com/polkadot-js/api/blob/07ed405610/packages/types/src/codec/Raw.ts#L127)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*
