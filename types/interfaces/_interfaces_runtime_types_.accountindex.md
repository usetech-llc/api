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

### Properties

* [registry](_interfaces_runtime_types_.accountindex.md#registry)

### Accessors

* [encodedLength](_interfaces_runtime_types_.accountindex.md#encodedlength)
* [hash](_interfaces_runtime_types_.accountindex.md#hash)
* [isEmpty](_interfaces_runtime_types_.accountindex.md#isempty)

### Methods

* [bitLength](_interfaces_runtime_types_.accountindex.md#bitlength)
* [eq](_interfaces_runtime_types_.accountindex.md#eq)
* [toBn](_interfaces_runtime_types_.accountindex.md#tobn)
* [toHex](_interfaces_runtime_types_.accountindex.md#tohex)
* [toJSON](_interfaces_runtime_types_.accountindex.md#tojson)
* [toRawType](_interfaces_runtime_types_.accountindex.md#torawtype)
* [toString](_interfaces_runtime_types_.accountindex.md#tostring)
* [toU8a](_interfaces_runtime_types_.accountindex.md#tou8a)
* [calcLength](_interfaces_runtime_types_.accountindex.md#static-calclength)
* [decodeAbstracInt](_interfaces_runtime_types_.accountindex.md#static-decodeabstracint)
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

*Inherited from [AccountIndex](_interfaces_runtime_types_.accountindex.md).[constructor](_interfaces_runtime_types_.accountindex.md#constructor)*

*Overrides [AssetId](_interfaces_runtime_types_.assetid.md).[constructor](_interfaces_runtime_types_.assetid.md#constructor)*

*Defined in [packages/types/src/primitive/Generic/AccountIndex.ts:30](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/primitive/Generic/AccountIndex.ts#L30)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`registry` | [Registry](_types_.registry.md) | - |
`value` | [AnyNumber](../modules/_types_.md#anynumber) | new BN(0) |

**Returns:** *[AccountIndex](_interfaces_runtime_types_.accountindex.md)*

## Properties

###  registry

• **registry**: *[Registry](_types_.registry.md)*

*Inherited from [AccountIndex](_interfaces_runtime_types_.accountindex.md).[registry](_interfaces_runtime_types_.accountindex.md#registry)*

*Defined in [packages/types/src/codec/AbstractInt.ts:25](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/AbstractInt.ts#L25)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [AccountIndex](_interfaces_runtime_types_.accountindex.md).[encodedLength](_interfaces_runtime_types_.accountindex.md#encodedlength)*

*Defined in [packages/types/src/codec/AbstractInt.ts:73](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/AbstractInt.ts#L73)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](_types_.ihash.md)*

*Inherited from [AccountIndex](_interfaces_runtime_types_.accountindex.md).[hash](_interfaces_runtime_types_.accountindex.md#hash)*

*Defined in [packages/types/src/codec/AbstractInt.ts:80](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/AbstractInt.ts#L80)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [AccountIndex](_interfaces_runtime_types_.accountindex.md).[isEmpty](_interfaces_runtime_types_.accountindex.md#isempty)*

*Defined in [packages/types/src/codec/AbstractInt.ts:87](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/AbstractInt.ts#L87)*

**`description`** Checks if the value is a zero value (align elsewhere)

**Returns:** *boolean*

## Methods

###  bitLength

▸ **bitLength**(): *[UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength)*

*Inherited from [AccountIndex](_interfaces_runtime_types_.accountindex.md).[bitLength](_interfaces_runtime_types_.accountindex.md#bitlength)*

*Defined in [packages/types/src/codec/AbstractInt.ts:94](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/AbstractInt.ts#L94)*

**`description`** Returns the number of bits in the value

**Returns:** *[UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength)*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [AccountIndex](_interfaces_runtime_types_.accountindex.md).[eq](_interfaces_runtime_types_.accountindex.md#eq)*

*Overrides void*

*Defined in [packages/types/src/primitive/Generic/AccountIndex.ts:87](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/primitive/Generic/AccountIndex.ts#L87)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toBn

▸ **toBn**(): *BN*

*Inherited from [AccountIndex](_interfaces_runtime_types_.accountindex.md).[toBn](_interfaces_runtime_types_.accountindex.md#tobn)*

*Defined in [packages/types/src/codec/AbstractInt.ts:115](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/AbstractInt.ts#L115)*

**`description`** Returns the BN representation of the number. (Compatibility)

**Returns:** *BN*

___

###  toHex

▸ **toHex**(`isLe`: boolean): *string*

*Inherited from [AccountIndex](_interfaces_runtime_types_.accountindex.md).[toHex](_interfaces_runtime_types_.accountindex.md#tohex)*

*Overrides void*

*Defined in [packages/types/src/codec/UInt.ts:38](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/UInt.ts#L38)*

**`description`** Returns a hex string representation of the value

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`isLe` | boolean | false |

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *string*

*Inherited from [AccountIndex](_interfaces_runtime_types_.accountindex.md).[toJSON](_interfaces_runtime_types_.accountindex.md#tojson)*

*Overrides void*

*Defined in [packages/types/src/primitive/Generic/AccountIndex.ts:100](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/primitive/Generic/AccountIndex.ts#L100)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [AccountIndex](_interfaces_runtime_types_.accountindex.md).[toRawType](_interfaces_runtime_types_.accountindex.md#torawtype)*

*Overrides [AssetId](_interfaces_runtime_types_.assetid.md).[toRawType](_interfaces_runtime_types_.assetid.md#torawtype)*

*Defined in [packages/types/src/primitive/Generic/AccountIndex.ts:116](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/primitive/Generic/AccountIndex.ts#L116)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [AccountIndex](_interfaces_runtime_types_.accountindex.md).[toString](_interfaces_runtime_types_.accountindex.md#tostring)*

*Overrides void*

*Defined in [packages/types/src/primitive/Generic/AccountIndex.ts:107](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/primitive/Generic/AccountIndex.ts#L107)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

*Inherited from [AccountIndex](_interfaces_runtime_types_.accountindex.md).[toU8a](_interfaces_runtime_types_.accountindex.md#tou8a)*

*Overrides void*

*Defined in [packages/types/src/codec/UInt.ts:64](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/UInt.ts#L64)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

___

### `Static` calcLength

▸ **calcLength**(`_value`: BN | number): *number*

*Inherited from [AccountIndex](_interfaces_runtime_types_.accountindex.md).[calcLength](_interfaces_runtime_types_.accountindex.md#static-calclength)*

*Defined in [packages/types/src/primitive/Generic/AccountIndex.ts:47](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/primitive/Generic/AccountIndex.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`_value` | BN &#124; number |

**Returns:** *number*

___

### `Static` decodeAbstracInt

▸ **decodeAbstracInt**(`value`: [AnyNumber](../modules/_types_.md#anynumber), `bitLength`: [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength), `isNegative`: boolean): *string*

*Inherited from [AccountIndex](_interfaces_runtime_types_.accountindex.md).[decodeAbstracInt](_interfaces_runtime_types_.accountindex.md#static-decodeabstracint)*

*Defined in [packages/types/src/codec/AbstractInt.ts:42](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/AbstractInt.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [AnyNumber](../modules/_types_.md#anynumber) |
`bitLength` | [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength) |
`isNegative` | boolean |

**Returns:** *string*

___

### `Static` decodeAccountIndex

▸ **decodeAccountIndex**(`value`: [AnyNumber](../modules/_types_.md#anynumber)): *BN | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) | number | string*

*Inherited from [AccountIndex](_interfaces_runtime_types_.accountindex.md).[decodeAccountIndex](_interfaces_runtime_types_.accountindex.md#static-decodeaccountindex)*

*Defined in [packages/types/src/primitive/Generic/AccountIndex.ts:35](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/primitive/Generic/AccountIndex.ts#L35)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [AnyNumber](../modules/_types_.md#anynumber) |

**Returns:** *BN | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) | number | string*

___

### `Static` readLength

▸ **readLength**(`input`: [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)): *[number, number]*

*Inherited from [AccountIndex](_interfaces_runtime_types_.accountindex.md).[readLength](_interfaces_runtime_types_.accountindex.md#static-readlength)*

*Defined in [packages/types/src/primitive/Generic/AccountIndex.ts:61](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/primitive/Generic/AccountIndex.ts#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`input` | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) |

**Returns:** *[number, number]*

___

### `Static` with

▸ **with**(`bitLength?`: [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength)): *[Constructor](_types_.constructor.md)‹[UInt](../classes/_codec_uint_.uint.md)›*

*Inherited from [AccountIndex](_interfaces_runtime_types_.accountindex.md).[with](_interfaces_runtime_types_.accountindex.md#static-with)*

*Defined in [packages/types/src/codec/UInt.ts:27](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/UInt.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`bitLength?` | [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength) |

**Returns:** *[Constructor](_types_.constructor.md)‹[UInt](../classes/_codec_uint_.uint.md)›*

___

### `Static` writeLength

▸ **writeLength**(`input`: [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)): *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

*Inherited from [AccountIndex](_interfaces_runtime_types_.accountindex.md).[writeLength](_interfaces_runtime_types_.accountindex.md#static-writelength)*

*Defined in [packages/types/src/primitive/Generic/AccountIndex.ts:75](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/primitive/Generic/AccountIndex.ts#L75)*

**Parameters:**

Name | Type |
------ | ------ |
`input` | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) |

**Returns:** *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*
