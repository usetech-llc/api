[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["primitive/H256"](../modules/_primitive_h256_.md) › [H256](_primitive_h256_.h256.md)

# Class: H256

**`name`** H256

**`description`** 
Hash containing 256 bits (32 bytes), typically used in blocks, extrinsics and
as a sane default for fixed-length hash representations.

## Hierarchy

  ↳ [U8aFixed](_codec_u8afixed_.u8afixed.md)

  ↳ **H256**

## Implements

* [IU8a](../interfaces/_types_interfaces_.iu8a.md)
* [IHash](../interfaces/_types_interfaces_.ihash.md)

## Indexable

* \[ **index**: *number*\]: number

## Index

### Constructors

* [constructor](_primitive_h256_.h256.md#constructor)

### Properties

* [registry](_primitive_h256_.h256.md#registry)

### Accessors

* [encodedLength](_primitive_h256_.h256.md#encodedlength)
* [hash](_primitive_h256_.h256.md#hash)
* [isEmpty](_primitive_h256_.h256.md#isempty)
* [length](_primitive_h256_.h256.md#length)

### Methods

* [bitLength](_primitive_h256_.h256.md#bitlength)
* [eq](_primitive_h256_.h256.md#eq)
* [subarray](_primitive_h256_.h256.md#subarray)
* [toHex](_primitive_h256_.h256.md#tohex)
* [toJSON](_primitive_h256_.h256.md#tojson)
* [toRawType](_primitive_h256_.h256.md#torawtype)
* [toString](_primitive_h256_.h256.md#tostring)
* [toU8a](_primitive_h256_.h256.md#tou8a)
* [with](_primitive_h256_.h256.md#static-with)

## Constructors

###  constructor

\+ **new H256**(`registry`: [Registry](../interfaces/_types_registry_.registry.md), `value?`: [AnyU8a](../modules/_types_helpers_.md#anyu8a)): *[H256](_primitive_h256_.h256.md)*

*Overrides [U8aFixed](_codec_u8afixed_.u8afixed.md).[constructor](_codec_u8afixed_.u8afixed.md#constructor)*

*Defined in [packages/types/src/primitive/H256.ts:15](https://github.com/polkadot-js/api/blob/2b5be7eaab/packages/types/src/primitive/H256.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_types_registry_.registry.md) |
`value?` | [AnyU8a](../modules/_types_helpers_.md#anyu8a) |

**Returns:** *[H256](_primitive_h256_.h256.md)*

## Properties

###  registry

• **registry**: *[Registry](../interfaces/_types_registry_.registry.md)*

*Implementation of [IHash](../interfaces/_types_interfaces_.ihash.md).[registry](../interfaces/_types_interfaces_.ihash.md#registry)*

*Inherited from [Raw](_codec_raw_.raw.md).[registry](_codec_raw_.raw.md#registry)*

*Defined in [packages/types/src/codec/Raw.ts:29](https://github.com/polkadot-js/api/blob/2b5be7eaab/packages/types/src/codec/Raw.ts#L29)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Raw](_codec_raw_.raw.md).[encodedLength](_codec_raw_.raw.md#encodedlength)*

*Defined in [packages/types/src/codec/Raw.ts:40](https://github.com/polkadot-js/api/blob/2b5be7eaab/packages/types/src/codec/Raw.ts#L40)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](../interfaces/_types_interfaces_.ihash.md)*

*Inherited from [Raw](_codec_raw_.raw.md).[hash](_codec_raw_.raw.md#hash)*

*Defined in [packages/types/src/codec/Raw.ts:47](https://github.com/polkadot-js/api/blob/2b5be7eaab/packages/types/src/codec/Raw.ts#L47)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](../interfaces/_types_interfaces_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Raw](_codec_raw_.raw.md).[isEmpty](_codec_raw_.raw.md#isempty)*

*Defined in [packages/types/src/codec/Raw.ts:54](https://github.com/polkadot-js/api/blob/2b5be7eaab/packages/types/src/codec/Raw.ts#L54)*

**`description`** Returns true if the type wraps an empty/default all-0 value

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Inherited from [Raw](_codec_raw_.raw.md).[length](_codec_raw_.raw.md#length)*

*Overrides [IHash](../interfaces/_types_interfaces_.ihash.md).[length](../interfaces/_types_interfaces_.ihash.md#length)*

*Defined in [packages/types/src/codec/Raw.ts:61](https://github.com/polkadot-js/api/blob/2b5be7eaab/packages/types/src/codec/Raw.ts#L61)*

**`description`** The length of the value

**Returns:** *number*

## Methods

###  bitLength

▸ **bitLength**(): *number*

*Implementation of [IHash](../interfaces/_types_interfaces_.ihash.md)*

*Inherited from [Raw](_codec_raw_.raw.md).[bitLength](_codec_raw_.raw.md#bitlength)*

*Defined in [packages/types/src/codec/Raw.ts:69](https://github.com/polkadot-js/api/blob/2b5be7eaab/packages/types/src/codec/Raw.ts#L69)*

**`description`** Returns the number of bits in the value

**Returns:** *number*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [IHash](../interfaces/_types_interfaces_.ihash.md)*

*Inherited from [Raw](_codec_raw_.raw.md).[eq](_codec_raw_.raw.md#eq)*

*Defined in [packages/types/src/codec/Raw.ts:76](https://github.com/polkadot-js/api/blob/2b5be7eaab/packages/types/src/codec/Raw.ts#L76)*

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

*Overrides [IHash](../interfaces/_types_interfaces_.ihash.md).[subarray](../interfaces/_types_interfaces_.ihash.md#subarray)*

*Defined in [packages/types/src/codec/Raw.ts:90](https://github.com/polkadot-js/api/blob/2b5be7eaab/packages/types/src/codec/Raw.ts#L90)*

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

*Defined in [packages/types/src/codec/Raw.ts:97](https://github.com/polkadot-js/api/blob/2b5be7eaab/packages/types/src/codec/Raw.ts#L97)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *string*

*Implementation of [IHash](../interfaces/_types_interfaces_.ihash.md)*

*Inherited from [Raw](_codec_raw_.raw.md).[toJSON](_codec_raw_.raw.md#tojson)*

*Defined in [packages/types/src/codec/Raw.ts:104](https://github.com/polkadot-js/api/blob/2b5be7eaab/packages/types/src/codec/Raw.ts#L104)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [IHash](../interfaces/_types_interfaces_.ihash.md)*

*Overrides [U8aFixed](_codec_u8afixed_.u8afixed.md).[toRawType](_codec_u8afixed_.u8afixed.md#torawtype)*

*Defined in [packages/types/src/primitive/H256.ts:23](https://github.com/polkadot-js/api/blob/2b5be7eaab/packages/types/src/primitive/H256.ts#L23)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [IHash](../interfaces/_types_interfaces_.ihash.md)*

*Inherited from [Raw](_codec_raw_.raw.md).[toString](_codec_raw_.raw.md#tostring)*

*Overrides [IHash](../interfaces/_types_interfaces_.ihash.md).[toString](../interfaces/_types_interfaces_.ihash.md#tostring)*

*Defined in [packages/types/src/codec/Raw.ts:118](https://github.com/polkadot-js/api/blob/2b5be7eaab/packages/types/src/codec/Raw.ts#L118)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Inherited from [Raw](_codec_raw_.raw.md).[toU8a](_codec_raw_.raw.md#tou8a)*

*Defined in [packages/types/src/codec/Raw.ts:127](https://github.com/polkadot-js/api/blob/2b5be7eaab/packages/types/src/codec/Raw.ts#L127)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

___

### `Static` with

▸ **with**(`bitLength`: [BitLength](../modules/_codec_u8afixed_.md#bitlength)): *[Constructor](../interfaces/_types_codec_.constructor.md)‹[U8aFixed](_codec_u8afixed_.u8afixed.md)›*

*Inherited from [U8aFixed](_codec_u8afixed_.u8afixed.md).[with](_codec_u8afixed_.u8afixed.md#static-with)*

*Defined in [packages/types/src/codec/U8aFixed.ts:49](https://github.com/polkadot-js/api/blob/2b5be7eaab/packages/types/src/codec/U8aFixed.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`bitLength` | [BitLength](../modules/_codec_u8afixed_.md#bitlength) |

**Returns:** *[Constructor](../interfaces/_types_codec_.constructor.md)‹[U8aFixed](_codec_u8afixed_.u8afixed.md)›*
