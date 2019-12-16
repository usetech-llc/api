[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["primitive/I128"](../modules/_primitive_i128_.md) › [I128](_primitive_i128_.i128.md)

# Class: I128

**`name`** I128

**`description`** 
A 128-bit signed integer

## Hierarchy

  ↳ [Int](_codec_int_.int.md)

  ↳ **I128**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_primitive_i128_.i128.md#constructor)

### Methods

* [toHex](_primitive_i128_.i128.md#tohex)
* [toRawType](_primitive_i128_.i128.md#torawtype)
* [toU8a](_primitive_i128_.i128.md#tou8a)

## Constructors

###  constructor

\+ **new I128**(`registry`: [Registry](../interfaces/_types_.registry.md), `value?`: [AnyNumber](../modules/_types_.md#anynumber)): *[I128](_primitive_i128_.i128.md)*

*Overrides [Int](_codec_int_.int.md).[constructor](_codec_int_.int.md#constructor)*

*Defined in [packages/types/src/primitive/I128.ts:14](https://github.com/polkadot-js/api/blob/9e681c066/packages/types/src/primitive/I128.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_types_.registry.md) |
`value?` | [AnyNumber](../modules/_types_.md#anynumber) |

**Returns:** *[I128](_primitive_i128_.i128.md)*

## Methods

###  toHex

▸ **toHex**(`isLe`: boolean): *string*

*Inherited from [Int](_codec_int_.int.md).[toHex](_codec_int_.int.md#tohex)*

*Overrides void*

*Defined in [packages/types/src/codec/Int.ts:29](https://github.com/polkadot-js/api/blob/9e681c066/packages/types/src/codec/Int.ts#L29)*

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

*Defined in [packages/types/src/codec/Int.ts:40](https://github.com/polkadot-js/api/blob/9e681c066/packages/types/src/codec/Int.ts#L40)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from [Int](_codec_int_.int.md).[toU8a](_codec_int_.int.md#tou8a)*

*Overrides void*

*Defined in [packages/types/src/codec/Int.ts:49](https://github.com/polkadot-js/api/blob/9e681c066/packages/types/src/codec/Int.ts#L49)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*
