[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/elections/types"](../modules/_interfaces_elections_types_.md) › [Vote](_interfaces_elections_types_.vote.md)

# Interface: Vote

GenericVote

## Hierarchy

  ↳ [Vote](../classes/_primitive_generic_vote_.vote.md)

  ↳ **Vote**

## Implements

* [IU8a](_types_.iu8a.md)

## Indexable

* \[ **index**: *number*\]: number

GenericVote

## Index

### Constructors

* [constructor](_interfaces_elections_types_.vote.md#constructor)

### Properties

* [registry](_interfaces_elections_types_.vote.md#registry)

### Accessors

* [conviction](_interfaces_elections_types_.vote.md#conviction)
* [encodedLength](_interfaces_elections_types_.vote.md#encodedlength)
* [hash](_interfaces_elections_types_.vote.md#hash)
* [isAye](_interfaces_elections_types_.vote.md#isaye)
* [isEmpty](_interfaces_elections_types_.vote.md#isempty)
* [isNay](_interfaces_elections_types_.vote.md#isnay)
* [length](_interfaces_elections_types_.vote.md#length)

### Methods

* [bitLength](_interfaces_elections_types_.vote.md#bitlength)
* [eq](_interfaces_elections_types_.vote.md#eq)
* [subarray](_interfaces_elections_types_.vote.md#subarray)
* [toHex](_interfaces_elections_types_.vote.md#tohex)
* [toJSON](_interfaces_elections_types_.vote.md#tojson)
* [toRawType](_interfaces_elections_types_.vote.md#torawtype)
* [toString](_interfaces_elections_types_.vote.md#tostring)
* [toU8a](_interfaces_elections_types_.vote.md#tou8a)
* [with](_interfaces_elections_types_.vote.md#static-with)

## Constructors

###  constructor

\+ **new Vote**(`registry`: [Registry](_types_.registry.md), `value?`: InputTypes): *[Vote](_interfaces_elections_types_.vote.md)*

*Inherited from [Vote](../classes/_primitive_generic_vote_.vote.md).[constructor](../classes/_primitive_generic_vote_.vote.md#constructor)*

*Overrides [U8aFixed](../classes/_codec_u8afixed_.u8afixed.md).[constructor](../classes/_codec_u8afixed_.u8afixed.md#constructor)*

*Defined in [packages/types/src/primitive/Generic/Vote.ts:34](https://github.com/polkadot-js/api/blob/191abe4e0/packages/types/src/primitive/Generic/Vote.ts#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](_types_.registry.md) |
`value?` | InputTypes |

**Returns:** *[Vote](_interfaces_elections_types_.vote.md)*

## Properties

###  registry

• **registry**: *[Registry](_types_.registry.md)*

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[registry](../classes/_codec_u8a_.u8a.md#registry)*

*Defined in [packages/types/src/codec/U8a.ts:20](https://github.com/polkadot-js/api/blob/191abe4e0/packages/types/src/codec/U8a.ts#L20)*

## Accessors

###  conviction

• **get conviction**(): *[Conviction](_interfaces_democracy_types_.conviction.md)*

*Inherited from [Vote](../classes/_primitive_generic_vote_.vote.md).[conviction](../classes/_primitive_generic_vote_.vote.md#conviction)*

*Defined in [packages/types/src/primitive/Generic/Vote.ts:80](https://github.com/polkadot-js/api/blob/191abe4e0/packages/types/src/primitive/Generic/Vote.ts#L80)*

**`description`** returns a V2 conviction

**Returns:** *[Conviction](_interfaces_democracy_types_.conviction.md)*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[encodedLength](../classes/_codec_u8a_.u8a.md#encodedlength)*

*Defined in [packages/types/src/codec/U8a.ts:39](https://github.com/polkadot-js/api/blob/191abe4e0/packages/types/src/codec/U8a.ts#L39)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](_types_.ihash.md)*

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[hash](../classes/_codec_u8a_.u8a.md#hash)*

*Defined in [packages/types/src/codec/U8a.ts:46](https://github.com/polkadot-js/api/blob/191abe4e0/packages/types/src/codec/U8a.ts#L46)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](_types_.ihash.md)*

___

###  isAye

• **get isAye**(): *boolean*

*Inherited from [Vote](../classes/_primitive_generic_vote_.vote.md).[isAye](../classes/_primitive_generic_vote_.vote.md#isaye)*

*Defined in [packages/types/src/primitive/Generic/Vote.ts:87](https://github.com/polkadot-js/api/blob/191abe4e0/packages/types/src/primitive/Generic/Vote.ts#L87)*

**`description`** true if the wrapped value is a positive vote

**Returns:** *boolean*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[isEmpty](../classes/_codec_u8a_.u8a.md#isempty)*

*Defined in [packages/types/src/codec/U8a.ts:53](https://github.com/polkadot-js/api/blob/191abe4e0/packages/types/src/codec/U8a.ts#L53)*

**`description`** Returns true if the type wraps an empty/default all-0 value

**Returns:** *boolean*

___

###  isNay

• **get isNay**(): *boolean*

*Inherited from [Vote](../classes/_primitive_generic_vote_.vote.md).[isNay](../classes/_primitive_generic_vote_.vote.md#isnay)*

*Defined in [packages/types/src/primitive/Generic/Vote.ts:94](https://github.com/polkadot-js/api/blob/191abe4e0/packages/types/src/primitive/Generic/Vote.ts#L94)*

**`description`** true if the wrapped value is a negative vote

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[length](../classes/_codec_u8a_.u8a.md#length)*

*Overrides void*

*Defined in [packages/types/src/codec/U8a.ts:60](https://github.com/polkadot-js/api/blob/191abe4e0/packages/types/src/codec/U8a.ts#L60)*

**`description`** The length of the value

**Returns:** *number*

## Methods

###  bitLength

▸ **bitLength**(): *number*

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[bitLength](../classes/_codec_u8a_.u8a.md#bitlength)*

*Defined in [packages/types/src/codec/U8a.ts:68](https://github.com/polkadot-js/api/blob/191abe4e0/packages/types/src/codec/U8a.ts#L68)*

**`description`** Returns the number of bits in the value

**Returns:** *number*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[eq](../classes/_codec_u8a_.u8a.md#eq)*

*Defined in [packages/types/src/codec/U8a.ts:75](https://github.com/polkadot-js/api/blob/191abe4e0/packages/types/src/codec/U8a.ts#L75)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  subarray

▸ **subarray**(`begin`: number, `end?`: undefined | number): *Uint8Array*

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[subarray](../classes/_codec_u8a_.u8a.md#subarray)*

*Overrides void*

*Defined in [packages/types/src/codec/U8a.ts:89](https://github.com/polkadot-js/api/blob/191abe4e0/packages/types/src/codec/U8a.ts#L89)*

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

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[toHex](../classes/_codec_u8a_.u8a.md#tohex)*

*Defined in [packages/types/src/codec/U8a.ts:96](https://github.com/polkadot-js/api/blob/191abe4e0/packages/types/src/codec/U8a.ts#L96)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *string*

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[toJSON](../classes/_codec_u8a_.u8a.md#tojson)*

*Defined in [packages/types/src/codec/U8a.ts:103](https://github.com/polkadot-js/api/blob/191abe4e0/packages/types/src/codec/U8a.ts#L103)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Vote](../classes/_primitive_generic_vote_.vote.md).[toRawType](../classes/_primitive_generic_vote_.vote.md#torawtype)*

*Overrides [U8aFixed](../classes/_codec_u8afixed_.u8afixed.md).[toRawType](../classes/_codec_u8afixed_.u8afixed.md#torawtype)*

*Defined in [packages/types/src/primitive/Generic/Vote.ts:101](https://github.com/polkadot-js/api/blob/191abe4e0/packages/types/src/primitive/Generic/Vote.ts#L101)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[toString](../classes/_codec_u8a_.u8a.md#tostring)*

*Overrides void*

*Defined in [packages/types/src/codec/U8a.ts:117](https://github.com/polkadot-js/api/blob/191abe4e0/packages/types/src/codec/U8a.ts#L117)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[toU8a](../classes/_codec_u8a_.u8a.md#tou8a)*

*Defined in [packages/types/src/codec/U8a.ts:126](https://github.com/polkadot-js/api/blob/191abe4e0/packages/types/src/codec/U8a.ts#L126)*

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

*Defined in [packages/types/src/codec/U8aFixed.ts:48](https://github.com/polkadot-js/api/blob/191abe4e0/packages/types/src/codec/U8aFixed.ts#L48)*

**Parameters:**

Name | Type |
------ | ------ |
`bitLength` | [BitLength](../modules/_codec_u8afixed_.md#bitlength) |

**Returns:** *[Constructor](_types_.constructor.md)‹[U8aFixed](../classes/_codec_u8afixed_.u8afixed.md)›*
