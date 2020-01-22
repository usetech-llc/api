[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/deprecated/types"](../modules/_interfaces_deprecated_types_.md) › [LockPeriods](_interfaces_deprecated_types_.lockperiods.md)

# Interface: LockPeriods

i8

## Hierarchy

  ↳ [I8](../classes/_primitive_i8_.i8.md)

  ↳ **LockPeriods**

## Implements

* [Codec](_types_.codec.md)

## Index

### Interfaces

* [MPrime](_interfaces_deprecated_types_.lockperiods.mprime.md)
* [ReductionContext](_interfaces_deprecated_types_.lockperiods.reductioncontext.md)

### Type aliases

* [Endianness](_interfaces_deprecated_types_.lockperiods.md#endianness)
* [IPrimeName](_interfaces_deprecated_types_.lockperiods.md#iprimename)

### Constructors

* [constructor](_interfaces_deprecated_types_.lockperiods.md#constructor)

### Methods

* [toHex](_interfaces_deprecated_types_.lockperiods.md#tohex)
* [toRawType](_interfaces_deprecated_types_.lockperiods.md#torawtype)
* [toU8a](_interfaces_deprecated_types_.lockperiods.md#tou8a)

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

\+ **new LockPeriods**(`registry`: [Registry](_types_.registry.md), `value?`: [AnyNumber](../modules/_types_.md#anynumber)): *[LockPeriods](_interfaces_deprecated_types_.lockperiods.md)*

*Inherited from [I8](../classes/_primitive_i8_.i8.md).[constructor](../classes/_primitive_i8_.i8.md#constructor)*

*Overrides [Int](../classes/_codec_int_.int.md).[constructor](../classes/_codec_int_.int.md#constructor)*

*Defined in [packages/types/src/primitive/I8.ts:14](https://github.com/polkadot-js/api/blob/c1c537a3b5/packages/types/src/primitive/I8.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](_types_.registry.md) |
`value?` | [AnyNumber](../modules/_types_.md#anynumber) |

**Returns:** *[LockPeriods](_interfaces_deprecated_types_.lockperiods.md)*

## Methods

###  toHex

▸ **toHex**(`isLe`: boolean): *string*

*Inherited from [Int](../classes/_codec_int_.int.md).[toHex](../classes/_codec_int_.int.md#tohex)*

*Overrides void*

*Defined in [packages/types/src/codec/Int.ts:29](https://github.com/polkadot-js/api/blob/c1c537a3b5/packages/types/src/codec/Int.ts#L29)*

**`description`** Returns a hex string representation of the value

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`isLe` | boolean | false |

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Int](../classes/_codec_int_.int.md).[toRawType](../classes/_codec_int_.int.md#torawtype)*

*Overrides void*

*Defined in [packages/types/src/codec/Int.ts:40](https://github.com/polkadot-js/api/blob/c1c537a3b5/packages/types/src/codec/Int.ts#L40)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from [Int](../classes/_codec_int_.int.md).[toU8a](../classes/_codec_int_.int.md#tou8a)*

*Overrides void*

*Defined in [packages/types/src/codec/Int.ts:49](https://github.com/polkadot-js/api/blob/c1c537a3b5/packages/types/src/codec/Int.ts#L49)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*
