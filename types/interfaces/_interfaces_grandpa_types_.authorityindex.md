[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/grandpa/types"](../modules/_interfaces_grandpa_types_.md) › [AuthorityIndex](_interfaces_grandpa_types_.authorityindex.md)

# Interface: AuthorityIndex

u64

## Hierarchy

  ↳ [U64](../classes/_primitive_u64_.u64.md)

  ↳ **AuthorityIndex**

## Implements

* [Codec](_types_.codec.md)

## Index

### Interfaces

* [MPrime](_interfaces_grandpa_types_.authorityindex.mprime.md)
* [ReductionContext](_interfaces_grandpa_types_.authorityindex.reductioncontext.md)

### Type aliases

* [Endianness](_interfaces_grandpa_types_.authorityindex.md#endianness)
* [IPrimeName](_interfaces_grandpa_types_.authorityindex.md#iprimename)

### Constructors

* [constructor](_interfaces_grandpa_types_.authorityindex.md#constructor)

### Methods

* [toHex](_interfaces_grandpa_types_.authorityindex.md#tohex)
* [toRawType](_interfaces_grandpa_types_.authorityindex.md#torawtype)
* [toU8a](_interfaces_grandpa_types_.authorityindex.md#tou8a)
* [with](_interfaces_grandpa_types_.authorityindex.md#static-with)

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

\+ **new AuthorityIndex**(`registry`: [Registry](_types_.registry.md), `value?`: [AnyNumber](../modules/_types_.md#anynumber)): *[AuthorityIndex](_interfaces_grandpa_types_.authorityindex.md)*

*Inherited from [Moment](_interfaces_runtime_types_.moment.md).[constructor](_interfaces_runtime_types_.moment.md#constructor)*

*Overrides [UInt](../classes/_codec_uint_.uint.md).[constructor](../classes/_codec_uint_.uint.md#constructor)*

*Defined in [packages/types/src/primitive/U64.ts:14](https://github.com/polkadot-js/api/blob/3db15e73a5/packages/types/src/primitive/U64.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](_types_.registry.md) |
`value?` | [AnyNumber](../modules/_types_.md#anynumber) |

**Returns:** *[AuthorityIndex](_interfaces_grandpa_types_.authorityindex.md)*

## Methods

###  toHex

▸ **toHex**(`isLe`: boolean): *string*

*Inherited from [AccountIndex](_interfaces_runtime_types_.accountindex.md).[toHex](_interfaces_runtime_types_.accountindex.md#tohex)*

*Overrides void*

*Defined in [packages/types/src/codec/UInt.ts:38](https://github.com/polkadot-js/api/blob/3db15e73a5/packages/types/src/codec/UInt.ts#L38)*

**`description`** Returns a hex string representation of the value

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`isLe` | boolean | false |

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [AssetId](_interfaces_runtime_types_.assetid.md).[toRawType](_interfaces_runtime_types_.assetid.md#torawtype)*

*Overrides void*

*Defined in [packages/types/src/codec/UInt.ts:50](https://github.com/polkadot-js/api/blob/3db15e73a5/packages/types/src/codec/UInt.ts#L50)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

*Inherited from [AccountIndex](_interfaces_runtime_types_.accountindex.md).[toU8a](_interfaces_runtime_types_.accountindex.md#tou8a)*

*Overrides void*

*Defined in [packages/types/src/codec/UInt.ts:64](https://github.com/polkadot-js/api/blob/3db15e73a5/packages/types/src/codec/UInt.ts#L64)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

___

### `Static` with

▸ **with**(`bitLength?`: [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength)): *[Constructor](_types_.constructor.md)‹[UInt](../classes/_codec_uint_.uint.md)›*

*Inherited from [AccountIndex](_interfaces_runtime_types_.accountindex.md).[with](_interfaces_runtime_types_.accountindex.md#static-with)*

*Defined in [packages/types/src/codec/UInt.ts:27](https://github.com/polkadot-js/api/blob/3db15e73a5/packages/types/src/codec/UInt.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`bitLength?` | [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength) |

**Returns:** *[Constructor](_types_.constructor.md)‹[UInt](../classes/_codec_uint_.uint.md)›*
