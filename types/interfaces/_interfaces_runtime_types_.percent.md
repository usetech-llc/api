[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/runtime/types"](../modules/_interfaces_runtime_types_.md) › [Percent](_interfaces_runtime_types_.percent.md)

# Interface: Percent

u8

## Hierarchy

  ↳ [U8](../classes/_primitive_u8_.u8.md)

  ↳ **Percent**

## Implements

* [Codec](_types_.codec.md)

## Index

### Interfaces

* [MPrime](_interfaces_runtime_types_.percent.mprime.md)
* [ReductionContext](_interfaces_runtime_types_.percent.reductioncontext.md)

### Type aliases

* [Endianness](_interfaces_runtime_types_.percent.md#endianness)
* [IPrimeName](_interfaces_runtime_types_.percent.md#iprimename)

### Constructors

* [constructor](_interfaces_runtime_types_.percent.md#constructor)

### Methods

* [toHex](_interfaces_runtime_types_.percent.md#tohex)
* [toRawType](_interfaces_runtime_types_.percent.md#torawtype)
* [toU8a](_interfaces_runtime_types_.percent.md#tou8a)
* [with](_interfaces_runtime_types_.percent.md#static-with)

## Type aliases

###  Endianness

Ƭ **Endianness**: *"le" | "be"*

Defined in node_modules/@types/bn.js/index.d.ts:11

___

###  IPrimeName

Ƭ **IPrimeName**: *"k256" | "p224" | "p192" | "p25519"*

Defined in node_modules/@types/bn.js/index.d.ts:12

## Constructors

###  constructor

\+ **new Percent**(`registry`: [Registry](_types_.registry.md), `value?`: [AnyNumber](../modules/_types_.md#anynumber)): *[Percent](_interfaces_runtime_types_.percent.md)*

*Inherited from [U8](../classes/_primitive_u8_.u8.md).[constructor](../classes/_primitive_u8_.u8.md#constructor)*

*Overrides [UInt](../classes/_codec_uint_.uint.md).[constructor](../classes/_codec_uint_.uint.md#constructor)*

*Defined in [packages/types/src/primitive/U8.ts:14](https://github.com/polkadot-js/api/blob/f77ae4d99f/packages/types/src/primitive/U8.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](_types_.registry.md) |
`value?` | [AnyNumber](../modules/_types_.md#anynumber) |

**Returns:** *[Percent](_interfaces_runtime_types_.percent.md)*

## Methods

###  toHex

▸ **toHex**(`isLe`: boolean): *string*

*Inherited from [UInt](../classes/_codec_uint_.uint.md).[toHex](../classes/_codec_uint_.uint.md#tohex)*

*Overrides void*

*Defined in [packages/types/src/codec/UInt.ts:38](https://github.com/polkadot-js/api/blob/f77ae4d99f/packages/types/src/codec/UInt.ts#L38)*

**`description`** Returns a hex string representation of the value

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`isLe` | boolean | false |

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [UInt](../classes/_codec_uint_.uint.md).[toRawType](../classes/_codec_uint_.uint.md#torawtype)*

*Overrides void*

*Defined in [packages/types/src/codec/UInt.ts:50](https://github.com/polkadot-js/api/blob/f77ae4d99f/packages/types/src/codec/UInt.ts#L50)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from [UInt](../classes/_codec_uint_.uint.md).[toU8a](../classes/_codec_uint_.uint.md#tou8a)*

*Overrides void*

*Defined in [packages/types/src/codec/UInt.ts:64](https://github.com/polkadot-js/api/blob/f77ae4d99f/packages/types/src/codec/UInt.ts#L64)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*

___

### `Static` with

▸ **with**(`bitLength?`: [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength)): *[Constructor](_types_.constructor.md)‹[UInt](../classes/_codec_uint_.uint.md)›*

*Inherited from [UInt](../classes/_codec_uint_.uint.md).[with](../classes/_codec_uint_.uint.md#static-with)*

*Defined in [packages/types/src/codec/UInt.ts:27](https://github.com/polkadot-js/api/blob/f77ae4d99f/packages/types/src/codec/UInt.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`bitLength?` | [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength) |

**Returns:** *[Constructor](_types_.constructor.md)‹[UInt](../classes/_codec_uint_.uint.md)›*
