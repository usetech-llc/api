[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["codec/UInt"](../modules/_codec_uint_.md) › [UInt](_codec_uint_.uint.md)

# Class: UInt

**`name`** UInt

**`description`** 
A generic unsigned integer codec. For Substrate all numbers are Little Endian encoded,
this handles the encoding and decoding of those numbers. Upon construction
the bitLength is provided and any additional use keeps the number to this
length. This extends `BN`, so all methods available on a normal `BN` object
is available here.

## Hierarchy

* AbstractInt

  ↳ **UInt**

  ↳ [U8](_primitive_u8_.u8.md)

  ↳ [U16](_primitive_u16_.u16.md)

  ↳ [U32](_primitive_u32_.u32.md)

  ↳ [U64](_primitive_u64_.u64.md)

  ↳ [U128](_primitive_u128_.u128.md)

  ↳ [U256](_primitive_u256_.u256.md)

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Interfaces

* [MPrime](../interfaces/_codec_uint_.uint.mprime.md)
* [ReductionContext](../interfaces/_codec_uint_.uint.reductioncontext.md)

### Type aliases

* [Endianness](_codec_uint_.uint.md#static-endianness)
* [IPrimeName](_codec_uint_.uint.md#static-iprimename)

### Constructors

* [constructor](_codec_uint_.uint.md#constructor)

### Methods

* [toHex](_codec_uint_.uint.md#tohex)
* [toRawType](_codec_uint_.uint.md#torawtype)
* [toU8a](_codec_uint_.uint.md#tou8a)
* [with](_codec_uint_.uint.md#static-with)

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

\+ **new UInt**(`registry`: [Registry](../interfaces/_types_.registry.md), `value`: [AnyNumber](../modules/_types_.md#anynumber), `bitLength`: [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength), `isHexJson`: boolean): *[UInt](_codec_uint_.uint.md)*

*Defined in [packages/types/src/codec/UInt.ts:22](https://github.com/polkadot-js/api/blob/5278138cc3/packages/types/src/codec/UInt.ts#L22)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`registry` | [Registry](../interfaces/_types_.registry.md) | - |
`value` | [AnyNumber](../modules/_types_.md#anynumber) | 0 |
`bitLength` | [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength) |  DEFAULT_UINT_BITS |
`isHexJson` | boolean | false |

**Returns:** *[UInt](_codec_uint_.uint.md)*

## Methods

###  toHex

▸ **toHex**(`isLe`: boolean): *string*

*Overrides void*

*Defined in [packages/types/src/codec/UInt.ts:38](https://github.com/polkadot-js/api/blob/5278138cc3/packages/types/src/codec/UInt.ts#L38)*

**`description`** Returns a hex string representation of the value

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`isLe` | boolean | false |

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Overrides void*

*Defined in [packages/types/src/codec/UInt.ts:50](https://github.com/polkadot-js/api/blob/5278138cc3/packages/types/src/codec/UInt.ts#L50)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Overrides void*

*Defined in [packages/types/src/codec/UInt.ts:64](https://github.com/polkadot-js/api/blob/5278138cc3/packages/types/src/codec/UInt.ts#L64)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*

___

### `Static` with

▸ **with**(`bitLength?`: [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength)): *[Constructor](../interfaces/_types_.constructor.md)‹[UInt](_codec_uint_.uint.md)›*

*Defined in [packages/types/src/codec/UInt.ts:27](https://github.com/polkadot-js/api/blob/5278138cc3/packages/types/src/codec/UInt.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`bitLength?` | [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength) |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹[UInt](_codec_uint_.uint.md)›*
