[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["primitive/I128"](../modules/_primitive_i128_.md) › [I128](_primitive_i128_.i128.md)

# Class: I128

**`name`** I128

**`description`** 
A 128-bit signed integer

## Hierarchy

  ↳ [Int](_codec_int_.int.md)

  ↳ **I128**

## Implements

* Codec

## Index

### Interfaces

* [MPrime](../interfaces/_primitive_i128_.i128.mprime.md)
* [ReductionContext](../interfaces/_primitive_i128_.i128.reductioncontext.md)

### Type aliases

* [Endianness](_primitive_i128_.i128.md#static-endianness)
* [IPrimeName](_primitive_i128_.i128.md#static-iprimename)

### Constructors

* [constructor](_primitive_i128_.i128.md#constructor)

### Methods

* [toHex](_primitive_i128_.i128.md#tohex)
* [toRawType](_primitive_i128_.i128.md#torawtype)
* [toU8a](_primitive_i128_.i128.md#tou8a)

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

\+ **new I128**(`registry`: Registry, `value?`: AnyNumber): *[I128](_primitive_i128_.i128.md)*

*Overrides [Int](_codec_int_.int.md).[constructor](_codec_int_.int.md#constructor)*

*Defined in [packages/types/src/primitive/I128.ts:14](https://github.com/polkadot-js/api/blob/1e975c68ee/packages/types/src/primitive/I128.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | Registry |
`value?` | AnyNumber |

**Returns:** *[I128](_primitive_i128_.i128.md)*

## Methods

###  toHex

▸ **toHex**(`isLe`: boolean): *string*

*Inherited from [Int](_codec_int_.int.md).[toHex](_codec_int_.int.md#tohex)*

*Overrides void*

*Defined in [packages/types/src/codec/Int.ts:29](https://github.com/polkadot-js/api/blob/1e975c68ee/packages/types/src/codec/Int.ts#L29)*

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

*Defined in [packages/types/src/codec/Int.ts:40](https://github.com/polkadot-js/api/blob/1e975c68ee/packages/types/src/codec/Int.ts#L40)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Inherited from [Int](_codec_int_.int.md).[toU8a](_codec_int_.int.md#tou8a)*

*Overrides void*

*Defined in [packages/types/src/codec/Int.ts:49](https://github.com/polkadot-js/api/blob/1e975c68ee/packages/types/src/codec/Int.ts#L49)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*
