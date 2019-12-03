[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["codec/U8aFixed"](../modules/_codec_u8afixed_.md) › [U8aFixed](_codec_u8afixed_.u8afixed.md)

# Class: U8aFixed

**`name`** U8aFixed

**`description`** 
A U8a that manages a a sequence of bytes up to the specified bitLength. Not meant
to be used directly, rather is should be subclassed with the specific lengths.

## Hierarchy

  ↳ [U8a](_codec_u8a_.u8a.md)

  ↳ **U8aFixed**

  ↳ [H160](_primitive_h160_.h160.md)

  ↳ [H256](_primitive_h256_.h256.md)

  ↳ [H512](_primitive_h512_.h512.md)

  ↳ [AccountId](_primitive_generic_accountid_.accountid.md)

  ↳ [CallIndex](_primitive_generic_call_.callindex.md)

  ↳ [Vote](_primitive_generic_vote_.vote.md)

## Implements

* [IU8a](../interfaces/_types_.iu8a.md)

## Indexable

* \[ **index**: *number*\]: number

## Index

### Constructors

* [constructor](_codec_u8afixed_.u8afixed.md#constructor)

### Properties

* [registry](_codec_u8afixed_.u8afixed.md#registry)

### Accessors

* [encodedLength](_codec_u8afixed_.u8afixed.md#encodedlength)
* [hash](_codec_u8afixed_.u8afixed.md#hash)
* [isEmpty](_codec_u8afixed_.u8afixed.md#isempty)
* [length](_codec_u8afixed_.u8afixed.md#length)

### Methods

* [bitLength](_codec_u8afixed_.u8afixed.md#bitlength)
* [eq](_codec_u8afixed_.u8afixed.md#eq)
* [subarray](_codec_u8afixed_.u8afixed.md#subarray)
* [toHex](_codec_u8afixed_.u8afixed.md#tohex)
* [toJSON](_codec_u8afixed_.u8afixed.md#tojson)
* [toRawType](_codec_u8afixed_.u8afixed.md#torawtype)
* [toString](_codec_u8afixed_.u8afixed.md#tostring)
* [toU8a](_codec_u8afixed_.u8afixed.md#tou8a)
* [with](_codec_u8afixed_.u8afixed.md#static-with)

## Constructors

###  constructor

\+ **new U8aFixed**(`registry`: [Registry](../interfaces/_types_.registry.md), `value`: [AnyU8a](../modules/_types_.md#anyu8a), `bitLength`: [BitLength](../modules/_codec_u8afixed_.md#bitlength)): *[U8aFixed](_codec_u8afixed_.u8afixed.md)*

*Overrides [U8a](_codec_u8a_.u8a.md).[constructor](_codec_u8a_.u8a.md#constructor)*

*Defined in [packages/types/src/codec/U8aFixed.ts:22](https://github.com/polkadot-js/api/blob/762b16ea13/packages/types/src/codec/U8aFixed.ts#L22)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`registry` | [Registry](../interfaces/_types_.registry.md) | - |
`value` | [AnyU8a](../modules/_types_.md#anyu8a) |  new Uint8Array() |
`bitLength` | [BitLength](../modules/_codec_u8afixed_.md#bitlength) | 256 |

**Returns:** *[U8aFixed](_codec_u8afixed_.u8afixed.md)*

## Properties

###  registry

• **registry**: *[Registry](../interfaces/_types_.registry.md)*

*Implementation of [IU8a](../interfaces/_types_.iu8a.md).[registry](../interfaces/_types_.iu8a.md#registry)*

*Inherited from [U8a](_codec_u8a_.u8a.md).[registry](_codec_u8a_.u8a.md#registry)*

*Defined in [packages/types/src/codec/U8a.ts:20](https://github.com/polkadot-js/api/blob/762b16ea13/packages/types/src/codec/U8a.ts#L20)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [U8a](_codec_u8a_.u8a.md).[encodedLength](_codec_u8a_.u8a.md#encodedlength)*

*Defined in [packages/types/src/codec/U8a.ts:39](https://github.com/polkadot-js/api/blob/762b16ea13/packages/types/src/codec/U8a.ts#L39)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](../interfaces/_types_.ihash.md)*

*Inherited from [U8a](_codec_u8a_.u8a.md).[hash](_codec_u8a_.u8a.md#hash)*

*Defined in [packages/types/src/codec/U8a.ts:46](https://github.com/polkadot-js/api/blob/762b16ea13/packages/types/src/codec/U8a.ts#L46)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](../interfaces/_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [U8a](_codec_u8a_.u8a.md).[isEmpty](_codec_u8a_.u8a.md#isempty)*

*Defined in [packages/types/src/codec/U8a.ts:53](https://github.com/polkadot-js/api/blob/762b16ea13/packages/types/src/codec/U8a.ts#L53)*

**`description`** Returns true if the type wraps an empty/default all-0 value

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Inherited from [U8a](_codec_u8a_.u8a.md).[length](_codec_u8a_.u8a.md#length)*

*Overrides void*

*Defined in [packages/types/src/codec/U8a.ts:60](https://github.com/polkadot-js/api/blob/762b16ea13/packages/types/src/codec/U8a.ts#L60)*

**`description`** The length of the value

**Returns:** *number*

## Methods

###  bitLength

▸ **bitLength**(): *number*

*Implementation of [IU8a](../interfaces/_types_.iu8a.md)*

*Inherited from [U8a](_codec_u8a_.u8a.md).[bitLength](_codec_u8a_.u8a.md#bitlength)*

*Defined in [packages/types/src/codec/U8a.ts:68](https://github.com/polkadot-js/api/blob/762b16ea13/packages/types/src/codec/U8a.ts#L68)*

**`description`** Returns the number of bits in the value

**Returns:** *number*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [IU8a](../interfaces/_types_.iu8a.md)*

*Inherited from [U8a](_codec_u8a_.u8a.md).[eq](_codec_u8a_.u8a.md#eq)*

*Defined in [packages/types/src/codec/U8a.ts:75](https://github.com/polkadot-js/api/blob/762b16ea13/packages/types/src/codec/U8a.ts#L75)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  subarray

▸ **subarray**(`begin`: number, `end?`: undefined | number): *Uint8Array*

*Inherited from [U8a](_codec_u8a_.u8a.md).[subarray](_codec_u8a_.u8a.md#subarray)*

*Overrides void*

*Defined in [packages/types/src/codec/U8a.ts:89](https://github.com/polkadot-js/api/blob/762b16ea13/packages/types/src/codec/U8a.ts#L89)*

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

*Inherited from [U8a](_codec_u8a_.u8a.md).[toHex](_codec_u8a_.u8a.md#tohex)*

*Defined in [packages/types/src/codec/U8a.ts:96](https://github.com/polkadot-js/api/blob/762b16ea13/packages/types/src/codec/U8a.ts#L96)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *string*

*Implementation of [IU8a](../interfaces/_types_.iu8a.md)*

*Inherited from [U8a](_codec_u8a_.u8a.md).[toJSON](_codec_u8a_.u8a.md#tojson)*

*Defined in [packages/types/src/codec/U8a.ts:103](https://github.com/polkadot-js/api/blob/762b16ea13/packages/types/src/codec/U8a.ts#L103)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [IU8a](../interfaces/_types_.iu8a.md)*

*Overrides [U8a](_codec_u8a_.u8a.md).[toRawType](_codec_u8a_.u8a.md#torawtype)*

*Defined in [packages/types/src/codec/U8aFixed.ts:59](https://github.com/polkadot-js/api/blob/762b16ea13/packages/types/src/codec/U8aFixed.ts#L59)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [IU8a](../interfaces/_types_.iu8a.md)*

*Inherited from [U8a](_codec_u8a_.u8a.md).[toString](_codec_u8a_.u8a.md#tostring)*

*Overrides void*

*Defined in [packages/types/src/codec/U8a.ts:117](https://github.com/polkadot-js/api/blob/762b16ea13/packages/types/src/codec/U8a.ts#L117)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from [U8a](_codec_u8a_.u8a.md).[toU8a](_codec_u8a_.u8a.md#tou8a)*

*Defined in [packages/types/src/codec/U8a.ts:126](https://github.com/polkadot-js/api/blob/762b16ea13/packages/types/src/codec/U8a.ts#L126)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*

___

### `Static` with

▸ **with**(`bitLength`: [BitLength](../modules/_codec_u8afixed_.md#bitlength)): *[Constructor](../interfaces/_types_.constructor.md)‹[U8aFixed](_codec_u8afixed_.u8afixed.md)›*

*Defined in [packages/types/src/codec/U8aFixed.ts:48](https://github.com/polkadot-js/api/blob/762b16ea13/packages/types/src/codec/U8aFixed.ts#L48)*

**Parameters:**

Name | Type |
------ | ------ |
`bitLength` | [BitLength](../modules/_codec_u8afixed_.md#bitlength) |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹[U8aFixed](_codec_u8afixed_.u8afixed.md)›*
