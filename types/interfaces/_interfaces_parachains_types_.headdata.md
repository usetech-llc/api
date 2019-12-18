[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/parachains/types"](../modules/_interfaces_parachains_types_.md) › [HeadData](_interfaces_parachains_types_.headdata.md)

# Interface: HeadData

Bytes

## Hierarchy

  ↳ [Bytes](../classes/_primitive_bytes_.bytes.md)

  ↳ **HeadData**

## Implements

* [IU8a](_types_.iu8a.md)

## Indexable

* \[ **index**: *number*\]: number

Bytes

## Index

### Constructors

* [constructor](_interfaces_parachains_types_.headdata.md#constructor)

### Properties

* [[Symbol.toStringTag]](_interfaces_parachains_types_.headdata.md#[symbol.tostringtag])
* [registry](_interfaces_parachains_types_.headdata.md#registry)

### Accessors

* [encodedLength](_interfaces_parachains_types_.headdata.md#encodedlength)
* [hash](_interfaces_parachains_types_.headdata.md#hash)
* [isEmpty](_interfaces_parachains_types_.headdata.md#isempty)
* [length](_interfaces_parachains_types_.headdata.md#length)

### Methods

* [[Symbol.iterator]](_interfaces_parachains_types_.headdata.md#[symbol.iterator])
* [bitLength](_interfaces_parachains_types_.headdata.md#bitlength)
* [eq](_interfaces_parachains_types_.headdata.md#eq)
* [subarray](_interfaces_parachains_types_.headdata.md#subarray)
* [toHex](_interfaces_parachains_types_.headdata.md#tohex)
* [toJSON](_interfaces_parachains_types_.headdata.md#tojson)
* [toRawType](_interfaces_parachains_types_.headdata.md#torawtype)
* [toString](_interfaces_parachains_types_.headdata.md#tostring)
* [toU8a](_interfaces_parachains_types_.headdata.md#tou8a)

## Constructors

###  constructor

\+ **new HeadData**(`registry`: [Registry](_types_.registry.md), `value?`: [AnyU8a](../modules/_types_.md#anyu8a)): *[HeadData](_interfaces_parachains_types_.headdata.md)*

*Inherited from [Bytes](../classes/_primitive_bytes_.bytes.md).[constructor](../classes/_primitive_bytes_.bytes.md#constructor)*

*Overrides [Raw](../classes/_codec_raw_.raw.md).[constructor](../classes/_codec_raw_.raw.md#constructor)*

*Defined in [packages/types/src/primitive/Bytes.ts:19](https://github.com/polkadot-js/api/blob/53959d482/packages/types/src/primitive/Bytes.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](_types_.registry.md) |
`value?` | [AnyU8a](../modules/_types_.md#anyu8a) |

**Returns:** *[HeadData](_interfaces_parachains_types_.headdata.md)*

## Properties

###  [Symbol.toStringTag]

• **[Symbol.toStringTag]**: *"UInt8Array"*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:276

___

###  registry

• **registry**: *[Registry](_types_.registry.md)*

*Inherited from [Raw](../classes/_codec_raw_.raw.md).[registry](../classes/_codec_raw_.raw.md#registry)*

*Defined in [packages/types/src/codec/Raw.ts:20](https://github.com/polkadot-js/api/blob/53959d482/packages/types/src/codec/Raw.ts#L20)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Bytes](../classes/_primitive_bytes_.bytes.md).[encodedLength](../classes/_primitive_bytes_.bytes.md#encodedlength)*

*Overrides [Raw](../classes/_codec_raw_.raw.md).[encodedLength](../classes/_codec_raw_.raw.md#encodedlength)*

*Defined in [packages/types/src/primitive/Bytes.ts:53](https://github.com/polkadot-js/api/blob/53959d482/packages/types/src/primitive/Bytes.ts#L53)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](_types_.ihash.md)*

*Inherited from [Raw](../classes/_codec_raw_.raw.md).[hash](../classes/_codec_raw_.raw.md#hash)*

*Defined in [packages/types/src/codec/Raw.ts:46](https://github.com/polkadot-js/api/blob/53959d482/packages/types/src/codec/Raw.ts#L46)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Raw](../classes/_codec_raw_.raw.md).[isEmpty](../classes/_codec_raw_.raw.md#isempty)*

*Defined in [packages/types/src/codec/Raw.ts:53](https://github.com/polkadot-js/api/blob/53959d482/packages/types/src/codec/Raw.ts#L53)*

**`description`** Returns true if the type wraps an empty/default all-0 value

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Inherited from [Raw](../classes/_codec_raw_.raw.md).[length](../classes/_codec_raw_.raw.md#length)*

*Overrides void*

*Defined in [packages/types/src/codec/Raw.ts:60](https://github.com/polkadot-js/api/blob/53959d482/packages/types/src/codec/Raw.ts#L60)*

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

*Defined in [packages/types/src/codec/Raw.ts:68](https://github.com/polkadot-js/api/blob/53959d482/packages/types/src/codec/Raw.ts#L68)*

**`description`** Returns the number of bits in the value

**Returns:** *number*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Raw](../classes/_codec_raw_.raw.md).[eq](../classes/_codec_raw_.raw.md#eq)*

*Defined in [packages/types/src/codec/Raw.ts:75](https://github.com/polkadot-js/api/blob/53959d482/packages/types/src/codec/Raw.ts#L75)*

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

*Defined in [packages/types/src/codec/Raw.ts:89](https://github.com/polkadot-js/api/blob/53959d482/packages/types/src/codec/Raw.ts#L89)*

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

*Defined in [packages/types/src/codec/Raw.ts:96](https://github.com/polkadot-js/api/blob/53959d482/packages/types/src/codec/Raw.ts#L96)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *string*

*Inherited from [Raw](../classes/_codec_raw_.raw.md).[toJSON](../classes/_codec_raw_.raw.md#tojson)*

*Defined in [packages/types/src/codec/Raw.ts:103](https://github.com/polkadot-js/api/blob/53959d482/packages/types/src/codec/Raw.ts#L103)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Bytes](../classes/_primitive_bytes_.bytes.md).[toRawType](../classes/_primitive_bytes_.bytes.md#torawtype)*

*Overrides [Raw](../classes/_codec_raw_.raw.md).[toRawType](../classes/_codec_raw_.raw.md#torawtype)*

*Defined in [packages/types/src/primitive/Bytes.ts:60](https://github.com/polkadot-js/api/blob/53959d482/packages/types/src/primitive/Bytes.ts#L60)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Raw](../classes/_codec_raw_.raw.md).[toString](../classes/_codec_raw_.raw.md#tostring)*

*Overrides void*

*Defined in [packages/types/src/codec/Raw.ts:117](https://github.com/polkadot-js/api/blob/53959d482/packages/types/src/codec/Raw.ts#L117)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from [Bytes](../classes/_primitive_bytes_.bytes.md).[toU8a](../classes/_primitive_bytes_.bytes.md#tou8a)*

*Overrides [Raw](../classes/_codec_raw_.raw.md).[toU8a](../classes/_codec_raw_.raw.md#tou8a)*

*Defined in [packages/types/src/primitive/Bytes.ts:68](https://github.com/polkadot-js/api/blob/53959d482/packages/types/src/primitive/Bytes.ts#L68)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*
