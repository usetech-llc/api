[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["primitive/I64Fixed"](../modules/_primitive_i64fixed_.md) › [I64Fixed](_primitive_i64fixed_.i64fixed.md)

# Class: I64Fixed

**`name`** I64Fixed

**`description`** 
A 64-bit signed integer (Fixed64 in Rust)

## Hierarchy

  ↳ [I64](_primitive_i64_.i64.md)

  ↳ **I64Fixed**

## Implements

* Codec

## Index

### Interfaces

* [MPrime](../interfaces/_primitive_i64fixed_.i64fixed.mprime.md)
* [ReductionContext](../interfaces/_primitive_i64fixed_.i64fixed.reductioncontext.md)

### Type aliases

* [Endianness](_primitive_i64fixed_.i64fixed.md#static-endianness)
* [IPrimeName](_primitive_i64fixed_.i64fixed.md#static-iprimename)

### Constructors

* [constructor](_primitive_i64fixed_.i64fixed.md#constructor)

### Methods

* [toHex](_primitive_i64fixed_.i64fixed.md#tohex)
* [toRawType](_primitive_i64fixed_.i64fixed.md#torawtype)
* [toU8a](_primitive_i64fixed_.i64fixed.md#tou8a)

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

\+ **new I64Fixed**(`registry`: Registry, `value?`: AnyNumber): *[I64Fixed](_primitive_i64fixed_.i64fixed.md)*

*Inherited from [I64](_primitive_i64_.i64.md).[constructor](_primitive_i64_.i64.md#constructor)*

*Overrides [Int](_codec_int_.int.md).[constructor](_codec_int_.int.md#constructor)*

*Defined in [packages/types/src/primitive/I64.ts:14](https://github.com/polkadot-js/api/blob/2c3eee4c67/packages/types/src/primitive/I64.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | Registry |
`value?` | AnyNumber |

**Returns:** *[I64Fixed](_primitive_i64fixed_.i64fixed.md)*

## Methods

###  toHex

▸ **toHex**(`isLe`: boolean): *string*

*Inherited from [Int](_codec_int_.int.md).[toHex](_codec_int_.int.md#tohex)*

*Overrides void*

*Defined in [packages/types/src/codec/Int.ts:29](https://github.com/polkadot-js/api/blob/2c3eee4c67/packages/types/src/codec/Int.ts#L29)*

**`description`** Returns a hex string representation of the value

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`isLe` | boolean | false |

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Int](_codec_int_.int.md).[toRawType](_codec_int_.int.md#torawtype)*

*Overrides void*

*Defined in [packages/types/src/codec/Int.ts:40](https://github.com/polkadot-js/api/blob/2c3eee4c67/packages/types/src/codec/Int.ts#L40)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Inherited from [Int](_codec_int_.int.md).[toU8a](_codec_int_.int.md#tou8a)*

*Overrides void*

*Defined in [packages/types/src/codec/Int.ts:49](https://github.com/polkadot-js/api/blob/2c3eee4c67/packages/types/src/codec/Int.ts#L49)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*
