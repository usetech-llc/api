[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["primitive/Generic/Vote"](../modules/_primitive_generic_vote_.md) › [Vote](_primitive_generic_vote_.vote.md)

# Class: Vote

**`name`** Vote

**`description`** 
A number of lock periods, plus a vote, one way or the other.

## Hierarchy

  ↳ [U8aFixed](_codec_u8afixed_.u8afixed.md)

  ↳ **Vote**

## Implements

* IU8a

## Indexable

* \[ **index**: *number*\]: number

## Index

### Constructors

* [constructor](_primitive_generic_vote_.vote.md#constructor)

### Properties

* [registry](_primitive_generic_vote_.vote.md#registry)

### Accessors

* [conviction](_primitive_generic_vote_.vote.md#conviction)
* [encodedLength](_primitive_generic_vote_.vote.md#encodedlength)
* [hash](_primitive_generic_vote_.vote.md#hash)
* [isAye](_primitive_generic_vote_.vote.md#isaye)
* [isEmpty](_primitive_generic_vote_.vote.md#isempty)
* [isNay](_primitive_generic_vote_.vote.md#isnay)
* [length](_primitive_generic_vote_.vote.md#length)

### Methods

* [bitLength](_primitive_generic_vote_.vote.md#bitlength)
* [eq](_primitive_generic_vote_.vote.md#eq)
* [subarray](_primitive_generic_vote_.vote.md#subarray)
* [toHex](_primitive_generic_vote_.vote.md#tohex)
* [toJSON](_primitive_generic_vote_.vote.md#tojson)
* [toRawType](_primitive_generic_vote_.vote.md#torawtype)
* [toString](_primitive_generic_vote_.vote.md#tostring)
* [toU8a](_primitive_generic_vote_.vote.md#tou8a)
* [with](_primitive_generic_vote_.vote.md#static-with)

## Constructors

###  constructor

\+ **new Vote**(`registry`: Registry, `value?`: InputTypes): *[Vote](_primitive_generic_vote_.vote.md)*

*Overrides [U8aFixed](_codec_u8afixed_.u8afixed.md).[constructor](_codec_u8afixed_.u8afixed.md#constructor)*

*Defined in [packages/types/src/primitive/Generic/Vote.ts:69](https://github.com/polkadot-js/api/blob/0ed156e5d9/packages/types/src/primitive/Generic/Vote.ts#L69)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | Registry |
`value?` | InputTypes |

**Returns:** *[Vote](_primitive_generic_vote_.vote.md)*

## Properties

###  registry

• **registry**: *Registry*

*Inherited from [Raw](_codec_raw_.raw.md).[registry](_codec_raw_.raw.md#registry)*

*Defined in [packages/types/src/codec/Raw.ts:29](https://github.com/polkadot-js/api/blob/0ed156e5d9/packages/types/src/codec/Raw.ts#L29)*

## Accessors

###  conviction

• **get conviction**(): *Conviction*

*Defined in [packages/types/src/primitive/Generic/Vote.ts:86](https://github.com/polkadot-js/api/blob/0ed156e5d9/packages/types/src/primitive/Generic/Vote.ts#L86)*

**`description`** returns a V2 conviction

**Returns:** *Conviction*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Raw](_codec_raw_.raw.md).[encodedLength](_codec_raw_.raw.md#encodedlength)*

*Defined in [packages/types/src/codec/Raw.ts:40](https://github.com/polkadot-js/api/blob/0ed156e5d9/packages/types/src/codec/Raw.ts#L40)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *IHash*

*Inherited from [Raw](_codec_raw_.raw.md).[hash](_codec_raw_.raw.md#hash)*

*Defined in [packages/types/src/codec/Raw.ts:47](https://github.com/polkadot-js/api/blob/0ed156e5d9/packages/types/src/codec/Raw.ts#L47)*

**`description`** returns a hash of the contents

**Returns:** *IHash*

___

###  isAye

• **get isAye**(): *boolean*

*Defined in [packages/types/src/primitive/Generic/Vote.ts:93](https://github.com/polkadot-js/api/blob/0ed156e5d9/packages/types/src/primitive/Generic/Vote.ts#L93)*

**`description`** true if the wrapped value is a positive vote

**Returns:** *boolean*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Raw](_codec_raw_.raw.md).[isEmpty](_codec_raw_.raw.md#isempty)*

*Defined in [packages/types/src/codec/Raw.ts:54](https://github.com/polkadot-js/api/blob/0ed156e5d9/packages/types/src/codec/Raw.ts#L54)*

**`description`** Returns true if the type wraps an empty/default all-0 value

**Returns:** *boolean*

___

###  isNay

• **get isNay**(): *boolean*

*Defined in [packages/types/src/primitive/Generic/Vote.ts:100](https://github.com/polkadot-js/api/blob/0ed156e5d9/packages/types/src/primitive/Generic/Vote.ts#L100)*

**`description`** true if the wrapped value is a negative vote

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Inherited from [Raw](_codec_raw_.raw.md).[length](_codec_raw_.raw.md#length)*

*Overrides void*

*Defined in [packages/types/src/codec/Raw.ts:61](https://github.com/polkadot-js/api/blob/0ed156e5d9/packages/types/src/codec/Raw.ts#L61)*

**`description`** The length of the value

**Returns:** *number*

## Methods

###  bitLength

▸ **bitLength**(): *number*

*Inherited from [Raw](_codec_raw_.raw.md).[bitLength](_codec_raw_.raw.md#bitlength)*

*Defined in [packages/types/src/codec/Raw.ts:69](https://github.com/polkadot-js/api/blob/0ed156e5d9/packages/types/src/codec/Raw.ts#L69)*

**`description`** Returns the number of bits in the value

**Returns:** *number*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Raw](_codec_raw_.raw.md).[eq](_codec_raw_.raw.md#eq)*

*Defined in [packages/types/src/codec/Raw.ts:76](https://github.com/polkadot-js/api/blob/0ed156e5d9/packages/types/src/codec/Raw.ts#L76)*

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

*Overrides void*

*Defined in [packages/types/src/codec/Raw.ts:90](https://github.com/polkadot-js/api/blob/0ed156e5d9/packages/types/src/codec/Raw.ts#L90)*

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

*Defined in [packages/types/src/codec/Raw.ts:97](https://github.com/polkadot-js/api/blob/0ed156e5d9/packages/types/src/codec/Raw.ts#L97)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *string*

*Inherited from [Raw](_codec_raw_.raw.md).[toJSON](_codec_raw_.raw.md#tojson)*

*Defined in [packages/types/src/codec/Raw.ts:104](https://github.com/polkadot-js/api/blob/0ed156e5d9/packages/types/src/codec/Raw.ts#L104)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Overrides [U8aFixed](_codec_u8afixed_.u8afixed.md).[toRawType](_codec_u8afixed_.u8afixed.md#torawtype)*

*Defined in [packages/types/src/primitive/Generic/Vote.ts:107](https://github.com/polkadot-js/api/blob/0ed156e5d9/packages/types/src/primitive/Generic/Vote.ts#L107)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Raw](_codec_raw_.raw.md).[toString](_codec_raw_.raw.md#tostring)*

*Overrides void*

*Defined in [packages/types/src/codec/Raw.ts:118](https://github.com/polkadot-js/api/blob/0ed156e5d9/packages/types/src/codec/Raw.ts#L118)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Inherited from [Raw](_codec_raw_.raw.md).[toU8a](_codec_raw_.raw.md#tou8a)*

*Defined in [packages/types/src/codec/Raw.ts:127](https://github.com/polkadot-js/api/blob/0ed156e5d9/packages/types/src/codec/Raw.ts#L127)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

___

### `Static` with

▸ **with**(`bitLength`: [BitLength](../modules/_codec_u8afixed_.md#bitlength)): *Constructor‹[U8aFixed](_codec_u8afixed_.u8afixed.md)›*

*Inherited from [U8aFixed](_codec_u8afixed_.u8afixed.md).[with](_codec_u8afixed_.u8afixed.md#static-with)*

*Defined in [packages/types/src/codec/U8aFixed.ts:49](https://github.com/polkadot-js/api/blob/0ed156e5d9/packages/types/src/codec/U8aFixed.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`bitLength` | [BitLength](../modules/_codec_u8afixed_.md#bitlength) |

**Returns:** *Constructor‹[U8aFixed](_codec_u8afixed_.u8afixed.md)›*
