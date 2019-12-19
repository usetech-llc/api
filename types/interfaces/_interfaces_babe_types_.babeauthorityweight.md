[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/babe/types"](../modules/_interfaces_babe_types_.md) › [BabeAuthorityWeight](_interfaces_babe_types_.babeauthorityweight.md)

# Interface: BabeAuthorityWeight

u64

## Hierarchy

  ↳ [U64](../classes/_primitive_u64_.u64.md)

  ↳ **BabeAuthorityWeight**

## Implements

* [Codec](_types_.codec.md)

## Index

### Constructors

* [constructor](_interfaces_babe_types_.babeauthorityweight.md#constructor)

### Methods

* [toHex](_interfaces_babe_types_.babeauthorityweight.md#tohex)
* [toRawType](_interfaces_babe_types_.babeauthorityweight.md#torawtype)
* [toU8a](_interfaces_babe_types_.babeauthorityweight.md#tou8a)
* [with](_interfaces_babe_types_.babeauthorityweight.md#static-with)

## Constructors

###  constructor

\+ **new BabeAuthorityWeight**(`registry`: [Registry](_types_.registry.md), `value?`: [AnyNumber](../modules/_types_.md#anynumber)): *[BabeAuthorityWeight](_interfaces_babe_types_.babeauthorityweight.md)*

*Inherited from [U64](../classes/_primitive_u64_.u64.md).[constructor](../classes/_primitive_u64_.u64.md#constructor)*

*Overrides [UInt](../classes/_codec_uint_.uint.md).[constructor](../classes/_codec_uint_.uint.md#constructor)*

*Defined in [packages/types/src/primitive/U64.ts:14](https://github.com/polkadot-js/api/blob/c04fb9073/packages/types/src/primitive/U64.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](_types_.registry.md) |
`value?` | [AnyNumber](../modules/_types_.md#anynumber) |

**Returns:** *[BabeAuthorityWeight](_interfaces_babe_types_.babeauthorityweight.md)*

## Methods

###  toHex

▸ **toHex**(`isLe`: boolean): *string*

*Inherited from [UInt](../classes/_codec_uint_.uint.md).[toHex](../classes/_codec_uint_.uint.md#tohex)*

*Overrides void*

*Defined in [packages/types/src/codec/UInt.ts:38](https://github.com/polkadot-js/api/blob/c04fb9073/packages/types/src/codec/UInt.ts#L38)*

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

*Defined in [packages/types/src/codec/UInt.ts:50](https://github.com/polkadot-js/api/blob/c04fb9073/packages/types/src/codec/UInt.ts#L50)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from [UInt](../classes/_codec_uint_.uint.md).[toU8a](../classes/_codec_uint_.uint.md#tou8a)*

*Overrides void*

*Defined in [packages/types/src/codec/UInt.ts:64](https://github.com/polkadot-js/api/blob/c04fb9073/packages/types/src/codec/UInt.ts#L64)*

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

*Defined in [packages/types/src/codec/UInt.ts:27](https://github.com/polkadot-js/api/blob/c04fb9073/packages/types/src/codec/UInt.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`bitLength?` | [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength) |

**Returns:** *[Constructor](_types_.constructor.md)‹[UInt](../classes/_codec_uint_.uint.md)›*
