[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/runtime/types"](../modules/_interfaces_runtime_types_.md) › [WeightMultiplier](_interfaces_runtime_types_.weightmultiplier.md)

# Interface: WeightMultiplier

Fixed64

## Hierarchy

  ↳ [I64Fixed](../classes/_primitive_i64fixed_.i64fixed.md)

  ↳ **WeightMultiplier**

## Implements

* [Codec](_types_.codec.md)

## Index

### Interfaces

* [MPrime](_interfaces_runtime_types_.weightmultiplier.mprime.md)
* [ReductionContext](_interfaces_runtime_types_.weightmultiplier.reductioncontext.md)

### Type aliases

* [Endianness](_interfaces_runtime_types_.weightmultiplier.md#endianness)
* [IPrimeName](_interfaces_runtime_types_.weightmultiplier.md#iprimename)

### Constructors

* [constructor](_interfaces_runtime_types_.weightmultiplier.md#constructor)

### Methods

* [toHex](_interfaces_runtime_types_.weightmultiplier.md#tohex)
* [toRawType](_interfaces_runtime_types_.weightmultiplier.md#torawtype)
* [toU8a](_interfaces_runtime_types_.weightmultiplier.md#tou8a)

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

\+ **new WeightMultiplier**(`registry`: [Registry](_types_.registry.md), `value?`: [AnyNumber](../modules/_types_.md#anynumber)): *[WeightMultiplier](_interfaces_runtime_types_.weightmultiplier.md)*

*Inherited from [WeightMultiplier](_interfaces_runtime_types_.weightmultiplier.md).[constructor](_interfaces_runtime_types_.weightmultiplier.md#constructor)*

*Overrides [Int](../classes/_codec_int_.int.md).[constructor](../classes/_codec_int_.int.md#constructor)*

*Defined in [packages/types/src/primitive/I64.ts:14](https://github.com/polkadot-js/api/blob/3db15e73a5/packages/types/src/primitive/I64.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](_types_.registry.md) |
`value?` | [AnyNumber](../modules/_types_.md#anynumber) |

**Returns:** *[WeightMultiplier](_interfaces_runtime_types_.weightmultiplier.md)*

## Methods

###  toHex

▸ **toHex**(`isLe`: boolean): *string*

*Inherited from [WeightMultiplier](_interfaces_runtime_types_.weightmultiplier.md).[toHex](_interfaces_runtime_types_.weightmultiplier.md#tohex)*

*Overrides void*

*Defined in [packages/types/src/codec/Int.ts:29](https://github.com/polkadot-js/api/blob/3db15e73a5/packages/types/src/codec/Int.ts#L29)*

**`description`** Returns a hex string representation of the value

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`isLe` | boolean | false |

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [WeightMultiplier](_interfaces_runtime_types_.weightmultiplier.md).[toRawType](_interfaces_runtime_types_.weightmultiplier.md#torawtype)*

*Overrides void*

*Defined in [packages/types/src/codec/Int.ts:40](https://github.com/polkadot-js/api/blob/3db15e73a5/packages/types/src/codec/Int.ts#L40)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

*Inherited from [WeightMultiplier](_interfaces_runtime_types_.weightmultiplier.md).[toU8a](_interfaces_runtime_types_.weightmultiplier.md#tou8a)*

*Overrides void*

*Defined in [packages/types/src/codec/Int.ts:49](https://github.com/polkadot-js/api/blob/3db15e73a5/packages/types/src/codec/Int.ts#L49)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*
