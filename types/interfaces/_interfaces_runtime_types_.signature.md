[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/runtime/types"](../modules/_interfaces_runtime_types_.md) › [Signature](_interfaces_runtime_types_.signature.md)

# Interface: Signature

H512

## Hierarchy

  ↳ [H512](../classes/_primitive_h512_.h512.md)

  ↳ **Signature**

  ↳ [Ed25519Signature](_interfaces_runtime_types_.ed25519signature.md)

  ↳ [Sr25519Signature](_interfaces_runtime_types_.sr25519signature.md)

  ↳ [AuthoritySignature](_interfaces_imonline_types_.authoritysignature.md)

  ↳ [CollatorSignature](_interfaces_parachains_types_.collatorsignature.md)

## Implements

* [IU8a](_types_.iu8a.md)

## Indexable

* \[ **index**: *number*\]: number

H512

## Index

### Constructors

* [constructor](_interfaces_runtime_types_.signature.md#constructor)

### Properties

* [[Symbol.toStringTag]](_interfaces_runtime_types_.signature.md#[symbol.tostringtag])
* [registry](_interfaces_runtime_types_.signature.md#registry)

### Accessors

* [encodedLength](_interfaces_runtime_types_.signature.md#encodedlength)
* [hash](_interfaces_runtime_types_.signature.md#hash)
* [isEmpty](_interfaces_runtime_types_.signature.md#isempty)
* [length](_interfaces_runtime_types_.signature.md#length)

### Methods

* [[Symbol.iterator]](_interfaces_runtime_types_.signature.md#[symbol.iterator])
* [bitLength](_interfaces_runtime_types_.signature.md#bitlength)
* [eq](_interfaces_runtime_types_.signature.md#eq)
* [subarray](_interfaces_runtime_types_.signature.md#subarray)
* [toHex](_interfaces_runtime_types_.signature.md#tohex)
* [toJSON](_interfaces_runtime_types_.signature.md#tojson)
* [toRawType](_interfaces_runtime_types_.signature.md#torawtype)
* [toString](_interfaces_runtime_types_.signature.md#tostring)
* [toU8a](_interfaces_runtime_types_.signature.md#tou8a)
* [with](_interfaces_runtime_types_.signature.md#static-with)

## Constructors

###  constructor

\+ **new Signature**(`registry`: [Registry](_types_.registry.md), `value?`: [AnyU8a](../modules/_types_.md#anyu8a)): *[Signature](_interfaces_runtime_types_.signature.md)*

*Inherited from [H512](../classes/_primitive_h512_.h512.md).[constructor](../classes/_primitive_h512_.h512.md#constructor)*

*Overrides [U8aFixed](../classes/_codec_u8afixed_.u8afixed.md).[constructor](../classes/_codec_u8afixed_.u8afixed.md#constructor)*

*Defined in [packages/types/src/primitive/H512.ts:14](https://github.com/polkadot-js/api/blob/b7eeb992cd/packages/types/src/primitive/H512.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](_types_.registry.md) |
`value?` | [AnyU8a](../modules/_types_.md#anyu8a) |

**Returns:** *[Signature](_interfaces_runtime_types_.signature.md)*

## Properties

###  [Symbol.toStringTag]

• **[Symbol.toStringTag]**: *"UInt8Array"*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:276

___

###  registry

• **registry**: *[Registry](_types_.registry.md)*

*Inherited from [Raw](../classes/_codec_raw_.raw.md).[registry](../classes/_codec_raw_.raw.md#registry)*

*Defined in [packages/types/src/codec/Raw.ts:20](https://github.com/polkadot-js/api/blob/b7eeb992cd/packages/types/src/codec/Raw.ts#L20)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Raw](../classes/_codec_raw_.raw.md).[encodedLength](../classes/_codec_raw_.raw.md#encodedlength)*

*Defined in [packages/types/src/codec/Raw.ts:39](https://github.com/polkadot-js/api/blob/b7eeb992cd/packages/types/src/codec/Raw.ts#L39)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](_types_.ihash.md)*

*Inherited from [Raw](../classes/_codec_raw_.raw.md).[hash](../classes/_codec_raw_.raw.md#hash)*

*Defined in [packages/types/src/codec/Raw.ts:46](https://github.com/polkadot-js/api/blob/b7eeb992cd/packages/types/src/codec/Raw.ts#L46)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Raw](../classes/_codec_raw_.raw.md).[isEmpty](../classes/_codec_raw_.raw.md#isempty)*

*Defined in [packages/types/src/codec/Raw.ts:53](https://github.com/polkadot-js/api/blob/b7eeb992cd/packages/types/src/codec/Raw.ts#L53)*

**`description`** Returns true if the type wraps an empty/default all-0 value

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Inherited from [Raw](../classes/_codec_raw_.raw.md).[length](../classes/_codec_raw_.raw.md#length)*

*Overrides void*

*Defined in [packages/types/src/codec/Raw.ts:60](https://github.com/polkadot-js/api/blob/b7eeb992cd/packages/types/src/codec/Raw.ts#L60)*

**`description`** The length of the value

**Returns:** *number*

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *IterableIterator‹number›*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:275

**Returns:** *IterableIterator‹number›*

___

###  bitLength

▸ **bitLength**(): *number*

*Inherited from [Raw](../classes/_codec_raw_.raw.md).[bitLength](../classes/_codec_raw_.raw.md#bitlength)*

*Defined in [packages/types/src/codec/Raw.ts:68](https://github.com/polkadot-js/api/blob/b7eeb992cd/packages/types/src/codec/Raw.ts#L68)*

**`description`** Returns the number of bits in the value

**Returns:** *number*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Raw](../classes/_codec_raw_.raw.md).[eq](../classes/_codec_raw_.raw.md#eq)*

*Defined in [packages/types/src/codec/Raw.ts:75](https://github.com/polkadot-js/api/blob/b7eeb992cd/packages/types/src/codec/Raw.ts#L75)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  subarray

▸ **subarray**(`begin`: number, `end?`: undefined | number): *Uint8Array*

*Inherited from [Raw](../classes/_codec_raw_.raw.md).[subarray](../classes/_codec_raw_.raw.md#subarray)*

*Overrides void*

*Defined in [packages/types/src/codec/Raw.ts:89](https://github.com/polkadot-js/api/blob/b7eeb992cd/packages/types/src/codec/Raw.ts#L89)*

**`description`** Create a new subarray from the actual buffer. This is needed for compat reasons since a new Uint8Array gets returned here

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`begin` | number | The position to start at |
`end?` | undefined &#124; number | The position to end at  |

**Returns:** *Uint8Array*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Raw](../classes/_codec_raw_.raw.md).[toHex](../classes/_codec_raw_.raw.md#tohex)*

*Defined in [packages/types/src/codec/Raw.ts:96](https://github.com/polkadot-js/api/blob/b7eeb992cd/packages/types/src/codec/Raw.ts#L96)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *string*

*Inherited from [Raw](../classes/_codec_raw_.raw.md).[toJSON](../classes/_codec_raw_.raw.md#tojson)*

*Defined in [packages/types/src/codec/Raw.ts:103](https://github.com/polkadot-js/api/blob/b7eeb992cd/packages/types/src/codec/Raw.ts#L103)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [H512](../classes/_primitive_h512_.h512.md).[toRawType](../classes/_primitive_h512_.h512.md#torawtype)*

*Overrides [U8aFixed](../classes/_codec_u8afixed_.u8afixed.md).[toRawType](../classes/_codec_u8afixed_.u8afixed.md#torawtype)*

*Defined in [packages/types/src/primitive/H512.ts:22](https://github.com/polkadot-js/api/blob/b7eeb992cd/packages/types/src/primitive/H512.ts#L22)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Raw](../classes/_codec_raw_.raw.md).[toString](../classes/_codec_raw_.raw.md#tostring)*

*Overrides void*

*Defined in [packages/types/src/codec/Raw.ts:117](https://github.com/polkadot-js/api/blob/b7eeb992cd/packages/types/src/codec/Raw.ts#L117)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from [Raw](../classes/_codec_raw_.raw.md).[toU8a](../classes/_codec_raw_.raw.md#tou8a)*

*Defined in [packages/types/src/codec/Raw.ts:126](https://github.com/polkadot-js/api/blob/b7eeb992cd/packages/types/src/codec/Raw.ts#L126)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*

___

### `Static` with

▸ **with**(`bitLength`: [BitLength](../modules/_codec_u8afixed_.md#bitlength)): *[Constructor](_types_.constructor.md)‹[U8aFixed](../classes/_codec_u8afixed_.u8afixed.md)›*

*Inherited from [U8aFixed](../classes/_codec_u8afixed_.u8afixed.md).[with](../classes/_codec_u8afixed_.u8afixed.md#static-with)*

*Defined in [packages/types/src/codec/U8aFixed.ts:48](https://github.com/polkadot-js/api/blob/b7eeb992cd/packages/types/src/codec/U8aFixed.ts#L48)*

**Parameters:**

Name | Type |
------ | ------ |
`bitLength` | [BitLength](../modules/_codec_u8afixed_.md#bitlength) |

**Returns:** *[Constructor](_types_.constructor.md)‹[U8aFixed](../classes/_codec_u8afixed_.u8afixed.md)›*
