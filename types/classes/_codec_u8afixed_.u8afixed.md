[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["codec/U8aFixed"](../modules/_codec_u8afixed_.md) › [U8aFixed](_codec_u8afixed_.u8afixed.md)

# Class: U8aFixed

**`name`** U8aFixed

**`description`** 
A U8a that manages a a sequence of bytes up to the specified bitLength. Not meant
to be used directly, rather is should be subclassed with the specific lengths.

## Hierarchy

  ↳ [Raw](_codec_raw_.raw.md)

  ↳ **U8aFixed**

  ↳ [H256](_primitive_h256_.h256.md)

  ↳ [H160](_primitive_h160_.h160.md)

  ↳ [H512](_primitive_h512_.h512.md)

  ↳ [AccountId](_primitive_generic_accountid_.accountid.md)

  ↳ [CallIndex](_primitive_generic_call_.callindex.md)

  ↳ [Vote](_primitive_generic_vote_.vote.md)

## Implements

* [IU8a](../interfaces/_types_interfaces_.iu8a.md)

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
* [toHuman](_codec_u8afixed_.u8afixed.md#tohuman)
* [toJSON](_codec_u8afixed_.u8afixed.md#tojson)
* [toRawType](_codec_u8afixed_.u8afixed.md#torawtype)
* [toString](_codec_u8afixed_.u8afixed.md#tostring)
* [toU8a](_codec_u8afixed_.u8afixed.md#tou8a)
* [with](_codec_u8afixed_.u8afixed.md#static-with)

## Constructors

###  constructor

\+ **new U8aFixed**(`registry`: [Registry](../interfaces/_types_registry_.registry.md), `value`: [AnyU8a](../modules/_types_helpers_.md#anyu8a), `bitLength`: [BitLength](../modules/_codec_u8afixed_.md#bitlength)): *[U8aFixed](_codec_u8afixed_.u8afixed.md)*

*Overrides [Raw](_codec_raw_.raw.md).[constructor](_codec_raw_.raw.md#constructor)*

*Defined in [packages/types/src/codec/U8aFixed.ts:22](https://github.com/polkadot-js/api/blob/a5c8e3c4e1/packages/types/src/codec/U8aFixed.ts#L22)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`registry` | [Registry](../interfaces/_types_registry_.registry.md) | - |
`value` | [AnyU8a](../modules/_types_helpers_.md#anyu8a) | new Uint8Array() |
`bitLength` | [BitLength](../modules/_codec_u8afixed_.md#bitlength) | 256 |

**Returns:** *[U8aFixed](_codec_u8afixed_.u8afixed.md)*

## Properties

###  registry

• **registry**: *[Registry](../interfaces/_types_registry_.registry.md)*

*Implementation of [IU8a](../interfaces/_types_interfaces_.iu8a.md).[registry](../interfaces/_types_interfaces_.iu8a.md#registry)*

*Inherited from [Raw](_codec_raw_.raw.md).[registry](_codec_raw_.raw.md#registry)*

*Defined in [packages/types/src/codec/Raw.ts:29](https://github.com/polkadot-js/api/blob/a5c8e3c4e1/packages/types/src/codec/Raw.ts#L29)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Raw](_codec_raw_.raw.md).[encodedLength](_codec_raw_.raw.md#encodedlength)*

*Defined in [packages/types/src/codec/Raw.ts:40](https://github.com/polkadot-js/api/blob/a5c8e3c4e1/packages/types/src/codec/Raw.ts#L40)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](../interfaces/_types_interfaces_.ihash.md)*

*Inherited from [Raw](_codec_raw_.raw.md).[hash](_codec_raw_.raw.md#hash)*

*Defined in [packages/types/src/codec/Raw.ts:47](https://github.com/polkadot-js/api/blob/a5c8e3c4e1/packages/types/src/codec/Raw.ts#L47)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](../interfaces/_types_interfaces_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Raw](_codec_raw_.raw.md).[isEmpty](_codec_raw_.raw.md#isempty)*

*Defined in [packages/types/src/codec/Raw.ts:54](https://github.com/polkadot-js/api/blob/a5c8e3c4e1/packages/types/src/codec/Raw.ts#L54)*

**`description`** Returns true if the type wraps an empty/default all-0 value

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Inherited from [Raw](_codec_raw_.raw.md).[length](_codec_raw_.raw.md#length)*

*Overrides [IHash](../interfaces/_types_interfaces_.ihash.md).[length](../interfaces/_types_interfaces_.ihash.md#length)*

*Defined in [packages/types/src/codec/Raw.ts:61](https://github.com/polkadot-js/api/blob/a5c8e3c4e1/packages/types/src/codec/Raw.ts#L61)*

**`description`** The length of the value

**Returns:** *number*

## Methods

###  bitLength

▸ **bitLength**(): *number*

*Implementation of [IU8a](../interfaces/_types_interfaces_.iu8a.md)*

*Inherited from [Raw](_codec_raw_.raw.md).[bitLength](_codec_raw_.raw.md#bitlength)*

*Defined in [packages/types/src/codec/Raw.ts:69](https://github.com/polkadot-js/api/blob/a5c8e3c4e1/packages/types/src/codec/Raw.ts#L69)*

**`description`** Returns the number of bits in the value

**Returns:** *number*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [IU8a](../interfaces/_types_interfaces_.iu8a.md)*

*Inherited from [Raw](_codec_raw_.raw.md).[eq](_codec_raw_.raw.md#eq)*

*Defined in [packages/types/src/codec/Raw.ts:76](https://github.com/polkadot-js/api/blob/a5c8e3c4e1/packages/types/src/codec/Raw.ts#L76)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  subarray

▸ **subarray**(`begin`: number, `end?`: undefined | number): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Inherited from [Raw](_codec_raw_.raw.md).[subarray](_codec_raw_.raw.md#subarray)*

*Overrides [IHash](../interfaces/_types_interfaces_.ihash.md).[subarray](../interfaces/_types_interfaces_.ihash.md#subarray)*

*Defined in [packages/types/src/codec/Raw.ts:90](https://github.com/polkadot-js/api/blob/a5c8e3c4e1/packages/types/src/codec/Raw.ts#L90)*

**`description`** Create a new subarray from the actual buffer. This is needed for compat reasons since a new Uint8Array gets returned here

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`begin` | number | The position to start at |
`end?` | undefined &#124; number | The position to end at  |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Raw](_codec_raw_.raw.md).[toHex](_codec_raw_.raw.md#tohex)*

*Defined in [packages/types/src/codec/Raw.ts:97](https://github.com/polkadot-js/api/blob/a5c8e3c4e1/packages/types/src/codec/Raw.ts#L97)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(): *string*

*Inherited from [Raw](_codec_raw_.raw.md).[toHuman](_codec_raw_.raw.md#tohuman)*

*Defined in [packages/types/src/codec/Raw.ts:104](https://github.com/polkadot-js/api/blob/a5c8e3c4e1/packages/types/src/codec/Raw.ts#L104)*

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *string*

*Implementation of [IU8a](../interfaces/_types_interfaces_.iu8a.md)*

*Inherited from [Raw](_codec_raw_.raw.md).[toJSON](_codec_raw_.raw.md#tojson)*

*Defined in [packages/types/src/codec/Raw.ts:111](https://github.com/polkadot-js/api/blob/a5c8e3c4e1/packages/types/src/codec/Raw.ts#L111)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [IU8a](../interfaces/_types_interfaces_.iu8a.md)*

*Overrides [Raw](_codec_raw_.raw.md).[toRawType](_codec_raw_.raw.md#torawtype)*

*Defined in [packages/types/src/codec/U8aFixed.ts:60](https://github.com/polkadot-js/api/blob/a5c8e3c4e1/packages/types/src/codec/U8aFixed.ts#L60)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [IU8a](../interfaces/_types_interfaces_.iu8a.md)*

*Inherited from [Raw](_codec_raw_.raw.md).[toString](_codec_raw_.raw.md#tostring)*

*Overrides [IHash](../interfaces/_types_interfaces_.ihash.md).[toString](../interfaces/_types_interfaces_.ihash.md#tostring)*

*Defined in [packages/types/src/codec/Raw.ts:125](https://github.com/polkadot-js/api/blob/a5c8e3c4e1/packages/types/src/codec/Raw.ts#L125)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Inherited from [Raw](_codec_raw_.raw.md).[toU8a](_codec_raw_.raw.md#tou8a)*

*Defined in [packages/types/src/codec/Raw.ts:134](https://github.com/polkadot-js/api/blob/a5c8e3c4e1/packages/types/src/codec/Raw.ts#L134)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

___

### `Static` with

▸ **with**(`bitLength`: [BitLength](../modules/_codec_u8afixed_.md#bitlength)): *[Constructor](../interfaces/_types_codec_.constructor.md)‹[U8aFixed](_codec_u8afixed_.u8afixed.md)›*

*Defined in [packages/types/src/codec/U8aFixed.ts:49](https://github.com/polkadot-js/api/blob/a5c8e3c4e1/packages/types/src/codec/U8aFixed.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`bitLength` | [BitLength](../modules/_codec_u8afixed_.md#bitlength) |

**Returns:** *[Constructor](../interfaces/_types_codec_.constructor.md)‹[U8aFixed](_codec_u8afixed_.u8afixed.md)›*
