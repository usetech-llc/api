[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["primitive/Generic/AccountIndex"](../modules/_primitive_generic_accountindex_.md) › [AccountIndex](_primitive_generic_accountindex_.accountindex.md)

# Class: AccountIndex

**`name`** AccountIndex

**`description`** 
A wrapper around an AccountIndex, which is a shortened, variable-length encoding
for an Account. We extends from [U32](_primitive_u32_.u32.md) to provide the number-like properties.

## Hierarchy

  ↳ [U32](_primitive_u32_.u32.md)

  ↳ **AccountIndex**

## Implements

* [Codec](../interfaces/_types_codec_.codec.md)

## Index

### Interfaces

* [MPrime](../interfaces/_primitive_generic_accountindex_.accountindex.mprime.md)
* [ReductionContext](../interfaces/_primitive_generic_accountindex_.accountindex.reductioncontext.md)

### Type aliases

* [Endianness](_primitive_generic_accountindex_.accountindex.md#static-endianness)
* [IPrimeName](_primitive_generic_accountindex_.accountindex.md#static-iprimename)

### Constructors

* [constructor](_primitive_generic_accountindex_.accountindex.md#constructor)

### Methods

* [eq](_primitive_generic_accountindex_.accountindex.md#eq)
* [toHex](_primitive_generic_accountindex_.accountindex.md#tohex)
* [toHuman](_primitive_generic_accountindex_.accountindex.md#tohuman)
* [toJSON](_primitive_generic_accountindex_.accountindex.md#tojson)
* [toRawType](_primitive_generic_accountindex_.accountindex.md#torawtype)
* [toString](_primitive_generic_accountindex_.accountindex.md#tostring)
* [toU8a](_primitive_generic_accountindex_.accountindex.md#tou8a)
* [calcLength](_primitive_generic_accountindex_.accountindex.md#static-calclength)
* [readLength](_primitive_generic_accountindex_.accountindex.md#static-readlength)
* [with](_primitive_generic_accountindex_.accountindex.md#static-with)
* [writeLength](_primitive_generic_accountindex_.accountindex.md#static-writelength)

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

\+ **new AccountIndex**(`registry`: [Registry](../interfaces/_types_registry_.registry.md), `value`: [AnyNumber](../modules/_types_helpers_.md#anynumber)): *[AccountIndex](_primitive_generic_accountindex_.accountindex.md)*

*Overrides [U32](_primitive_u32_.u32.md).[constructor](_primitive_u32_.u32.md#constructor)*

*Defined in [packages/types/src/primitive/Generic/AccountIndex.ts:30](https://github.com/polkadot-js/api/blob/4a1e504ca2/packages/types/src/primitive/Generic/AccountIndex.ts#L30)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`registry` | [Registry](../interfaces/_types_registry_.registry.md) | - |
`value` | [AnyNumber](../modules/_types_helpers_.md#anynumber) | new BN(0) |

**Returns:** *[AccountIndex](_primitive_generic_accountindex_.accountindex.md)*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Overrides void*

*Defined in [packages/types/src/primitive/Generic/AccountIndex.ts:88](https://github.com/polkadot-js/api/blob/4a1e504ca2/packages/types/src/primitive/Generic/AccountIndex.ts#L88)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(`isLe`: boolean): *string*

*Inherited from [UInt](_codec_uint_.uint.md).[toHex](_codec_uint_.uint.md#tohex)*

*Overrides void*

*Defined in [packages/types/src/codec/UInt.ts:38](https://github.com/polkadot-js/api/blob/4a1e504ca2/packages/types/src/codec/UInt.ts#L38)*

**`description`** Returns a hex string representation of the value

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`isLe` | boolean | false |

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(): *string*

*Overrides [UInt](_codec_uint_.uint.md).[toHuman](_codec_uint_.uint.md#tohuman)*

*Defined in [packages/types/src/primitive/Generic/AccountIndex.ts:101](https://github.com/polkadot-js/api/blob/4a1e504ca2/packages/types/src/primitive/Generic/AccountIndex.ts#L101)*

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *string*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Overrides void*

*Defined in [packages/types/src/primitive/Generic/AccountIndex.ts:108](https://github.com/polkadot-js/api/blob/4a1e504ca2/packages/types/src/primitive/Generic/AccountIndex.ts#L108)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Overrides [UInt](_codec_uint_.uint.md).[toRawType](_codec_uint_.uint.md#torawtype)*

*Defined in [packages/types/src/primitive/Generic/AccountIndex.ts:124](https://github.com/polkadot-js/api/blob/4a1e504ca2/packages/types/src/primitive/Generic/AccountIndex.ts#L124)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Overrides void*

*Defined in [packages/types/src/primitive/Generic/AccountIndex.ts:115](https://github.com/polkadot-js/api/blob/4a1e504ca2/packages/types/src/primitive/Generic/AccountIndex.ts#L115)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Inherited from [UInt](_codec_uint_.uint.md).[toU8a](_codec_uint_.uint.md#tou8a)*

*Overrides void*

*Defined in [packages/types/src/codec/UInt.ts:74](https://github.com/polkadot-js/api/blob/4a1e504ca2/packages/types/src/codec/UInt.ts#L74)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

___

### `Static` calcLength

▸ **calcLength**(`_value`: BN | number): *number*

*Defined in [packages/types/src/primitive/Generic/AccountIndex.ts:48](https://github.com/polkadot-js/api/blob/4a1e504ca2/packages/types/src/primitive/Generic/AccountIndex.ts#L48)*

**Parameters:**

Name | Type |
------ | ------ |
`_value` | BN &#124; number |

**Returns:** *number*

___

### `Static` readLength

▸ **readLength**(`input`: [Uint8Array](_codec_raw_.raw.md#static-uint8array)): *[number, number]*

*Defined in [packages/types/src/primitive/Generic/AccountIndex.ts:62](https://github.com/polkadot-js/api/blob/4a1e504ca2/packages/types/src/primitive/Generic/AccountIndex.ts#L62)*

**Parameters:**

Name | Type |
------ | ------ |
`input` | [Uint8Array](_codec_raw_.raw.md#static-uint8array) |

**Returns:** *[number, number]*

___

### `Static` with

▸ **with**(`bitLength?`: [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength)): *[Constructor](../interfaces/_types_codec_.constructor.md)‹[UInt](_codec_uint_.uint.md)›*

*Inherited from [UInt](_codec_uint_.uint.md).[with](_codec_uint_.uint.md#static-with)*

*Defined in [packages/types/src/codec/UInt.ts:27](https://github.com/polkadot-js/api/blob/4a1e504ca2/packages/types/src/codec/UInt.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`bitLength?` | [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength) |

**Returns:** *[Constructor](../interfaces/_types_codec_.constructor.md)‹[UInt](_codec_uint_.uint.md)›*

___

### `Static` writeLength

▸ **writeLength**(`input`: [Uint8Array](_codec_raw_.raw.md#static-uint8array)): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Defined in [packages/types/src/primitive/Generic/AccountIndex.ts:76](https://github.com/polkadot-js/api/blob/4a1e504ca2/packages/types/src/primitive/Generic/AccountIndex.ts#L76)*

**Parameters:**

Name | Type |
------ | ------ |
`input` | [Uint8Array](_codec_raw_.raw.md#static-uint8array) |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*
