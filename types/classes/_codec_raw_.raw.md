[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["codec/Raw"](../modules/_codec_raw_.md) › [Raw](_codec_raw_.raw.md)

# Class: Raw

**`name`** Raw

**`description`** 
A basic wrapper around Uint8Array, with no frills and no fuss. It does differ
from other implementations where it will consume the full Uint8Array as passed to it.
As such it is meant to be subclassed where the wrapper takes care of the
actual lengths instead of used directly.

## Hierarchy

* Uint8Array

  ↳ **Raw**

  ↳ [U8aFixed](_codec_u8afixed_.u8afixed.md)

  ↳ [Bytes](_primitive_bytes_.bytes.md)

  ↳ [ImmortalEra](_primitive_extrinsic_extrinsicera_.immortalera.md)

## Implements

* [IU8a](../interfaces/_types_.iu8a.md)

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

\+ **new Raw**(`registry`: [Registry](../interfaces/_types_.registry.md), `value?`: [AnyU8a](../modules/_types_.md#anyu8a)): *[Raw](_codec_raw_.raw.md)*

*Defined in [packages/types/src/codec/Raw.ts:20](https://github.com/polkadot-js/api/blob/a9211690be/packages/types/src/codec/Raw.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_types_.registry.md) |
`value?` | [AnyU8a](../modules/_types_.md#anyu8a) |

**Returns:** *[Raw](_codec_raw_.raw.md)*

## Properties

###  registry

• **registry**: *[Registry](../interfaces/_types_.registry.md)*

*Implementation of [IU8a](../interfaces/_types_.iu8a.md).[registry](../interfaces/_types_.iu8a.md#registry)*

*Defined in [packages/types/src/codec/Raw.ts:20](https://github.com/polkadot-js/api/blob/a9211690be/packages/types/src/codec/Raw.ts#L20)*

___

### `Static` Uint8Array

▪ **Uint8Array**: *Uint8ArrayConstructor*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2257

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Defined in [packages/types/src/codec/Raw.ts:39](https://github.com/polkadot-js/api/blob/a9211690be/packages/types/src/codec/Raw.ts#L39)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](../interfaces/_types_.ihash.md)*

*Defined in [packages/types/src/codec/Raw.ts:46](https://github.com/polkadot-js/api/blob/a9211690be/packages/types/src/codec/Raw.ts#L46)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](../interfaces/_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Defined in [packages/types/src/codec/Raw.ts:53](https://github.com/polkadot-js/api/blob/a9211690be/packages/types/src/codec/Raw.ts#L53)*

**`description`** Returns true if the type wraps an empty/default all-0 value

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Overrides void*

*Defined in [packages/types/src/codec/Raw.ts:60](https://github.com/polkadot-js/api/blob/a9211690be/packages/types/src/codec/Raw.ts#L60)*

**`description`** The length of the value

**Returns:** *number*

## Methods

###  bitLength

▸ **bitLength**(): *number*

*Implementation of [IU8a](../interfaces/_types_.iu8a.md)*

*Defined in [packages/types/src/codec/Raw.ts:68](https://github.com/polkadot-js/api/blob/a9211690be/packages/types/src/codec/Raw.ts#L68)*

**`description`** Returns the number of bits in the value

**Returns:** *number*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [IU8a](../interfaces/_types_.iu8a.md)*

*Defined in [packages/types/src/codec/Raw.ts:75](https://github.com/polkadot-js/api/blob/a9211690be/packages/types/src/codec/Raw.ts#L75)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  subarray

▸ **subarray**(`begin`: number, `end?`: undefined | number): *Uint8Array*

*Overrides void*

*Defined in [packages/types/src/codec/Raw.ts:89](https://github.com/polkadot-js/api/blob/a9211690be/packages/types/src/codec/Raw.ts#L89)*

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

*Defined in [packages/types/src/codec/Raw.ts:96](https://github.com/polkadot-js/api/blob/a9211690be/packages/types/src/codec/Raw.ts#L96)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *string*

*Implementation of [IU8a](../interfaces/_types_.iu8a.md)*

*Defined in [packages/types/src/codec/Raw.ts:103](https://github.com/polkadot-js/api/blob/a9211690be/packages/types/src/codec/Raw.ts#L103)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [IU8a](../interfaces/_types_.iu8a.md)*

*Defined in [packages/types/src/codec/Raw.ts:110](https://github.com/polkadot-js/api/blob/a9211690be/packages/types/src/codec/Raw.ts#L110)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [IU8a](../interfaces/_types_.iu8a.md)*

*Overrides void*

*Defined in [packages/types/src/codec/Raw.ts:117](https://github.com/polkadot-js/api/blob/a9211690be/packages/types/src/codec/Raw.ts#L117)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Defined in [packages/types/src/codec/Raw.ts:126](https://github.com/polkadot-js/api/blob/a9211690be/packages/types/src/codec/Raw.ts#L126)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*
