[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["codec/Int"](../modules/_codec_int_.md) › [Int](_codec_int_.int.md)

# Class: Int

**`name`** Int

**`description`** 
A generic signed integer codec. For Substrate all numbers are Little Endian encoded,
this handles the encoding and decoding of those numbers. Upon construction
the bitLength is provided and any additional use keeps the number to this
length. This extends `BN`, so all methods available on a normal `BN` object
is available here.

## Hierarchy

* AbstractInt

  ↳ **Int**

  ↳ [I8](_primitive_i8_.i8.md)

  ↳ [I16](_primitive_i16_.i16.md)

  ↳ [I32](_primitive_i32_.i32.md)

  ↳ [I64](_primitive_i64_.i64.md)

  ↳ [I128](_primitive_i128_.i128.md)

  ↳ [I256](_primitive_i256_.i256.md)

## Implements

* [Codec](../interfaces/_types_codec_.codec.md)

## Index

### Interfaces

* [MPrime](../interfaces/_codec_int_.int.mprime.md)
* [ReductionContext](../interfaces/_codec_int_.int.reductioncontext.md)

### Type aliases

* [Endianness](_codec_int_.int.md#static-endianness)
* [IPrimeName](_codec_int_.int.md#static-iprimename)

### Constructors

* [constructor](_codec_int_.int.md#constructor)

### Methods

* [toHex](_codec_int_.int.md#tohex)
* [toRawType](_codec_int_.int.md#torawtype)
* [toU8a](_codec_int_.int.md#tou8a)
* [with](_codec_int_.int.md#static-with)

## Type aliases

### `Static` Endianness

Ƭ **Endianness**: *"le" | "be"*

Defined in node_modules/@types/bn.js/index.d.ts:11

___

### `Static` IPrimeName

Ƭ **IPrimeName**: *"k256" | "p224" | "p192" | "p25519"*

Defined in node_modules/@types/bn.js/index.d.ts:12

## Constructors

###  constructor

\+ **new Int**(`registry`: [Registry](../interfaces/_types_registry_.registry.md), `value`: [AnyNumber](../modules/_types_helpers_.md#anynumber), `bitLength`: [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength), `isHexJson`: boolean): *[Int](_codec_int_.int.md)*

*Defined in [packages/types/src/codec/Int.ts:21](https://github.com/polkadot-js/api/blob/427f821430/packages/types/src/codec/Int.ts#L21)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`registry` | [Registry](../interfaces/_types_registry_.registry.md) | - |
`value` | [AnyNumber](../modules/_types_helpers_.md#anynumber) | 0 |
`bitLength` | [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength) | DEFAULT_UINT_BITS |
`isHexJson` | boolean | true |

**Returns:** *[Int](_codec_int_.int.md)*

## Methods

###  toHex

▸ **toHex**(`isLe`: boolean): *string*

*Overrides void*

*Defined in [packages/types/src/codec/Int.ts:41](https://github.com/polkadot-js/api/blob/427f821430/packages/types/src/codec/Int.ts#L41)*

**`description`** Returns a hex string representation of the value

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`isLe` | boolean | false |

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Overrides void*

*Defined in [packages/types/src/codec/Int.ts:52](https://github.com/polkadot-js/api/blob/427f821430/packages/types/src/codec/Int.ts#L52)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Overrides void*

*Defined in [packages/types/src/codec/Int.ts:61](https://github.com/polkadot-js/api/blob/427f821430/packages/types/src/codec/Int.ts#L61)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

___

### `Static` with

▸ **with**(`bitLength`: [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength), `typeName?`: undefined | string): *[Constructor](../interfaces/_types_codec_.constructor.md)‹[Int](_codec_int_.int.md)›*

*Defined in [packages/types/src/codec/Int.ts:26](https://github.com/polkadot-js/api/blob/427f821430/packages/types/src/codec/Int.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`bitLength` | [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength) |
`typeName?` | undefined &#124; string |

**Returns:** *[Constructor](../interfaces/_types_codec_.constructor.md)‹[Int](_codec_int_.int.md)›*
