[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["primitive/U8"](../modules/_primitive_u8_.md) › [U8](_primitive_u8_.u8.md)

# Class: U8

**`name`** U8

**`description`** 
An 8-bit unsigned integer

## Hierarchy

  ↳ [UInt](_codec_uint_.uint.md)

  ↳ **U8**

## Implements

* Codec

## Index

### Interfaces

* [MPrime](../interfaces/_primitive_u8_.u8.mprime.md)
* [ReductionContext](../interfaces/_primitive_u8_.u8.reductioncontext.md)

### Type aliases

* [Endianness](_primitive_u8_.u8.md#static-endianness)
* [IPrimeName](_primitive_u8_.u8.md#static-iprimename)

### Constructors

* [constructor](_primitive_u8_.u8.md#constructor)

### Methods

* [toHex](_primitive_u8_.u8.md#tohex)
* [toRawType](_primitive_u8_.u8.md#torawtype)
* [toU8a](_primitive_u8_.u8.md#tou8a)
* [with](_primitive_u8_.u8.md#static-with)

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

\+ **new U8**(`registry`: Registry, `value?`: AnyNumber): *[U8](_primitive_u8_.u8.md)*

*Overrides [UInt](_codec_uint_.uint.md).[constructor](_codec_uint_.uint.md#constructor)*

*Defined in [packages/types/src/primitive/U8.ts:14](https://github.com/polkadot-js/api/blob/cf2fbfce26/packages/types/src/primitive/U8.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | Registry |
`value?` | AnyNumber |

**Returns:** *[U8](_primitive_u8_.u8.md)*

## Methods

###  toHex

▸ **toHex**(`isLe`: boolean): *string*

*Inherited from [UInt](_codec_uint_.uint.md).[toHex](_codec_uint_.uint.md#tohex)*

*Overrides void*

*Defined in [packages/types/src/codec/UInt.ts:38](https://github.com/polkadot-js/api/blob/cf2fbfce26/packages/types/src/codec/UInt.ts#L38)*

**`description`** Returns a hex string representation of the value

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`isLe` | boolean | false |

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [UInt](_codec_uint_.uint.md).[toRawType](_codec_uint_.uint.md#torawtype)*

*Overrides void*

*Defined in [packages/types/src/codec/UInt.ts:50](https://github.com/polkadot-js/api/blob/cf2fbfce26/packages/types/src/codec/UInt.ts#L50)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Inherited from [UInt](_codec_uint_.uint.md).[toU8a](_codec_uint_.uint.md#tou8a)*

*Overrides void*

*Defined in [packages/types/src/codec/UInt.ts:64](https://github.com/polkadot-js/api/blob/cf2fbfce26/packages/types/src/codec/UInt.ts#L64)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

___

### `Static` with

▸ **with**(`bitLength?`: [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength)): *Constructor‹[UInt](_codec_uint_.uint.md)›*

*Inherited from [UInt](_codec_uint_.uint.md).[with](_codec_uint_.uint.md#static-with)*

*Defined in [packages/types/src/codec/UInt.ts:27](https://github.com/polkadot-js/api/blob/cf2fbfce26/packages/types/src/codec/UInt.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`bitLength?` | [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength) |

**Returns:** *Constructor‹[UInt](_codec_uint_.uint.md)›*
