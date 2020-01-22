[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["primitive/I32"](../modules/_primitive_i32_.md) › [I32](_primitive_i32_.i32.md)

# Class: I32

**`name`** I32

**`description`** 
A 32-bit signed integer

## Hierarchy

  ↳ [Int](_codec_int_.int.md)

  ↳ **I32**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Interfaces

* [MPrime](../interfaces/_primitive_i32_.i32.mprime.md)
* [ReductionContext](../interfaces/_primitive_i32_.i32.reductioncontext.md)

### Type aliases

* [Endianness](_primitive_i32_.i32.md#static-endianness)
* [IPrimeName](_primitive_i32_.i32.md#static-iprimename)

### Constructors

* [constructor](_primitive_i32_.i32.md#constructor)

### Methods

* [toHex](_primitive_i32_.i32.md#tohex)
* [toRawType](_primitive_i32_.i32.md#torawtype)
* [toU8a](_primitive_i32_.i32.md#tou8a)

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

\+ **new I32**(`registry`: [Registry](../interfaces/_types_.registry.md), `value?`: [AnyNumber](../modules/_types_.md#anynumber)): *[I32](_primitive_i32_.i32.md)*

*Overrides [Int](_codec_int_.int.md).[constructor](_codec_int_.int.md#constructor)*

*Defined in [packages/types/src/primitive/I32.ts:14](https://github.com/polkadot-js/api/blob/7ed1857589/packages/types/src/primitive/I32.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_types_.registry.md) |
`value?` | [AnyNumber](../modules/_types_.md#anynumber) |

**Returns:** *[I32](_primitive_i32_.i32.md)*

## Methods

###  toHex

▸ **toHex**(`isLe`: boolean): *string*

*Inherited from [Int](_codec_int_.int.md).[toHex](_codec_int_.int.md#tohex)*

*Overrides void*

*Defined in [packages/types/src/codec/Int.ts:29](https://github.com/polkadot-js/api/blob/7ed1857589/packages/types/src/codec/Int.ts#L29)*

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

*Inherited from [Int](_codec_int_.int.md).[toRawType](_codec_int_.int.md#torawtype)*

*Overrides void*

*Defined in [packages/types/src/codec/Int.ts:40](https://github.com/polkadot-js/api/blob/7ed1857589/packages/types/src/codec/Int.ts#L40)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from [Int](_codec_int_.int.md).[toU8a](_codec_int_.int.md#tou8a)*

*Overrides void*

*Defined in [packages/types/src/codec/Int.ts:49](https://github.com/polkadot-js/api/blob/7ed1857589/packages/types/src/codec/Int.ts#L49)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*
