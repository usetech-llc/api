[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/runtime/types"](../modules/_interfaces_runtime_types_.md) › [AccountIndex](_interfaces_runtime_types_.accountindex.md)

# Interface: AccountIndex

GenericAccountIndex

## Hierarchy

  ↳ [AccountIndex](../classes/_primitive_generic_accountindex_.accountindex.md)

  ↳ **AccountIndex**

## Implements

* [Codec](_types_.codec.md)

## Index

### Interfaces

* [MPrime](_interfaces_runtime_types_.accountindex.mprime.md)
* [ReductionContext](_interfaces_runtime_types_.accountindex.reductioncontext.md)

### Type aliases

* [Endianness](_interfaces_runtime_types_.accountindex.md#endianness)
* [IPrimeName](_interfaces_runtime_types_.accountindex.md#iprimename)

### Constructors

* [constructor](_interfaces_runtime_types_.accountindex.md#constructor)

### Methods

* [toHex](_interfaces_runtime_types_.accountindex.md#tohex)
* [toRawType](_interfaces_runtime_types_.accountindex.md#torawtype)
* [toU8a](_interfaces_runtime_types_.accountindex.md#tou8a)
* [calcLength](_interfaces_runtime_types_.accountindex.md#static-calclength)
* [decodeAccountIndex](_interfaces_runtime_types_.accountindex.md#static-decodeaccountindex)
* [readLength](_interfaces_runtime_types_.accountindex.md#static-readlength)
* [with](_interfaces_runtime_types_.accountindex.md#static-with)
* [writeLength](_interfaces_runtime_types_.accountindex.md#static-writelength)

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

\+ **new AccountIndex**(`registry`: [Registry](_types_.registry.md), `value`: [AnyNumber](../modules/_types_.md#anynumber)): *[AccountIndex](_interfaces_runtime_types_.accountindex.md)*

*Inherited from [AccountIndex](../classes/_primitive_generic_accountindex_.accountindex.md).[constructor](../classes/_primitive_generic_accountindex_.accountindex.md#constructor)*

*Overrides [U32](../classes/_primitive_u32_.u32.md).[constructor](../classes/_primitive_u32_.u32.md#constructor)*

*Defined in [packages/types/src/primitive/Generic/AccountIndex.ts:30](https://github.com/polkadot-js/api/blob/64ff226535/packages/types/src/primitive/Generic/AccountIndex.ts#L30)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`registry` | [Registry](_types_.registry.md) | - |
`value` | [AnyNumber](../modules/_types_.md#anynumber) |  new BN(0) |

**Returns:** *[AccountIndex](_interfaces_runtime_types_.accountindex.md)*

## Methods

###  toHex

▸ **toHex**(`isLe`: boolean): *string*

*Inherited from [UInt](../classes/_codec_uint_.uint.md).[toHex](../classes/_codec_uint_.uint.md#tohex)*

*Overrides void*

*Defined in [packages/types/src/codec/UInt.ts:38](https://github.com/polkadot-js/api/blob/64ff226535/packages/types/src/codec/UInt.ts#L38)*

**`description`** Returns a hex string representation of the value

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`isLe` | boolean | false |

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [AccountIndex](../classes/_primitive_generic_accountindex_.accountindex.md).[toRawType](../classes/_primitive_generic_accountindex_.accountindex.md#torawtype)*

*Overrides [UInt](../classes/_codec_uint_.uint.md).[toRawType](../classes/_codec_uint_.uint.md#torawtype)*

*Defined in [packages/types/src/primitive/Generic/AccountIndex.ts:116](https://github.com/polkadot-js/api/blob/64ff226535/packages/types/src/primitive/Generic/AccountIndex.ts#L116)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from [UInt](../classes/_codec_uint_.uint.md).[toU8a](../classes/_codec_uint_.uint.md#tou8a)*

*Overrides void*

*Defined in [packages/types/src/codec/UInt.ts:64](https://github.com/polkadot-js/api/blob/64ff226535/packages/types/src/codec/UInt.ts#L64)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*

___

### `Static` calcLength

▸ **calcLength**(`_value`: BN | number): *number*

*Inherited from [AccountIndex](../classes/_primitive_generic_accountindex_.accountindex.md).[calcLength](../classes/_primitive_generic_accountindex_.accountindex.md#static-calclength)*

*Defined in [packages/types/src/primitive/Generic/AccountIndex.ts:47](https://github.com/polkadot-js/api/blob/64ff226535/packages/types/src/primitive/Generic/AccountIndex.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`_value` | BN &#124; number |

**Returns:** *number*

___

### `Static` decodeAccountIndex

▸ **decodeAccountIndex**(`value`: [AnyNumber](../modules/_types_.md#anynumber)): *BN | Uint8Array | number | string*

*Inherited from [AccountIndex](../classes/_primitive_generic_accountindex_.accountindex.md).[decodeAccountIndex](../classes/_primitive_generic_accountindex_.accountindex.md#static-decodeaccountindex)*

*Defined in [packages/types/src/primitive/Generic/AccountIndex.ts:35](https://github.com/polkadot-js/api/blob/64ff226535/packages/types/src/primitive/Generic/AccountIndex.ts#L35)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [AnyNumber](../modules/_types_.md#anynumber) |

**Returns:** *BN | Uint8Array | number | string*

___

### `Static` readLength

▸ **readLength**(`input`: Uint8Array): *[number, number]*

*Inherited from [AccountIndex](../classes/_primitive_generic_accountindex_.accountindex.md).[readLength](../classes/_primitive_generic_accountindex_.accountindex.md#static-readlength)*

*Defined in [packages/types/src/primitive/Generic/AccountIndex.ts:61](https://github.com/polkadot-js/api/blob/64ff226535/packages/types/src/primitive/Generic/AccountIndex.ts#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`input` | Uint8Array |

**Returns:** *[number, number]*

___

### `Static` with

▸ **with**(`bitLength?`: [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength)): *[Constructor](_types_.constructor.md)‹[UInt](../classes/_codec_uint_.uint.md)›*

*Inherited from [UInt](../classes/_codec_uint_.uint.md).[with](../classes/_codec_uint_.uint.md#static-with)*

*Defined in [packages/types/src/codec/UInt.ts:27](https://github.com/polkadot-js/api/blob/64ff226535/packages/types/src/codec/UInt.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`bitLength?` | [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength) |

**Returns:** *[Constructor](_types_.constructor.md)‹[UInt](../classes/_codec_uint_.uint.md)›*

___

### `Static` writeLength

▸ **writeLength**(`input`: Uint8Array): *Uint8Array*

*Inherited from [AccountIndex](../classes/_primitive_generic_accountindex_.accountindex.md).[writeLength](../classes/_primitive_generic_accountindex_.accountindex.md#static-writelength)*

*Defined in [packages/types/src/primitive/Generic/AccountIndex.ts:75](https://github.com/polkadot-js/api/blob/64ff226535/packages/types/src/primitive/Generic/AccountIndex.ts#L75)*

**Parameters:**

Name | Type |
------ | ------ |
`input` | Uint8Array |

**Returns:** *Uint8Array*
