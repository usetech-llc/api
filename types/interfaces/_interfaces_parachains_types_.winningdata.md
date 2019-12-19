[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/parachains/types"](../modules/_interfaces_parachains_types_.md) › [WinningData](_interfaces_parachains_types_.winningdata.md)

# Interface: WinningData

Vec<WinningDataEntry>

## Hierarchy

  ↳ [Vec](../classes/_codec_vec_.vec.md)‹[WinningDataEntry](_interfaces_parachains_types_.winningdataentry.md)›

  ↳ **WinningData**

## Implements

* [Codec](_types_.codec.md)

## Indexable

* \[ **n**: *number*\]: [WinningDataEntry](_interfaces_parachains_types_.winningdataentry.md)

Vec<WinningDataEntry>

## Index

### Constructors

* [constructor](_interfaces_parachains_types_.winningdata.md#constructor)

### Properties

* [registry](_interfaces_parachains_types_.winningdata.md#registry)

### Accessors

* [Type](_interfaces_parachains_types_.winningdata.md#type)
* [encodedLength](_interfaces_parachains_types_.winningdata.md#encodedlength)
* [hash](_interfaces_parachains_types_.winningdata.md#hash)
* [isEmpty](_interfaces_parachains_types_.winningdata.md#isempty)
* [length](_interfaces_parachains_types_.winningdata.md#length)

### Methods

* [[Symbol.iterator]](_interfaces_parachains_types_.winningdata.md#[symbol.iterator])
* [[Symbol.unscopables]](_interfaces_parachains_types_.winningdata.md#[symbol.unscopables])
* [eq](_interfaces_parachains_types_.winningdata.md#eq)
* [filter](_interfaces_parachains_types_.winningdata.md#filter)
* [includes](_interfaces_parachains_types_.winningdata.md#includes)
* [map](_interfaces_parachains_types_.winningdata.md#map)
* [toArray](_interfaces_parachains_types_.winningdata.md#toarray)
* [toHex](_interfaces_parachains_types_.winningdata.md#tohex)
* [toJSON](_interfaces_parachains_types_.winningdata.md#tojson)
* [toRawType](_interfaces_parachains_types_.winningdata.md#torawtype)
* [toString](_interfaces_parachains_types_.winningdata.md#tostring)
* [toU8a](_interfaces_parachains_types_.winningdata.md#tou8a)
* [decodeVec](_interfaces_parachains_types_.winningdata.md#static-decodevec)
* [with](_interfaces_parachains_types_.winningdata.md#static-with)

## Constructors

###  constructor

\+ **new WinningData**(`registry`: [Registry](_types_.registry.md), `Type`: [Constructor](_types_.constructor.md)‹[WinningDataEntry](_interfaces_parachains_types_.winningdataentry.md)› | [InterfaceTypes](../modules/_types_.md#interfacetypes), `value`: [Vec](../classes/_codec_vec_.vec.md)‹any› | Uint8Array | string | any[]): *[WinningData](_interfaces_parachains_types_.winningdata.md)*

*Inherited from [Vec](../classes/_codec_vec_.vec.md).[constructor](../classes/_codec_vec_.vec.md#constructor)*

*Defined in [packages/types/src/codec/Vec.ts:23](https://github.com/polkadot-js/api/blob/0c98593ae/packages/types/src/codec/Vec.ts#L23)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`registry` | [Registry](_types_.registry.md) | - |
`Type` | [Constructor](_types_.constructor.md)‹[WinningDataEntry](_interfaces_parachains_types_.winningdataentry.md)› &#124; [InterfaceTypes](../modules/_types_.md#interfacetypes) | - |
`value` | [Vec](../classes/_codec_vec_.vec.md)‹any› &#124; Uint8Array &#124; string &#124; any[] |  [] as any[] |

**Returns:** *[WinningData](_interfaces_parachains_types_.winningdata.md)*

## Properties

###  registry

• **registry**: *[Registry](_types_.registry.md)*

*Inherited from [AbstractArray](../classes/_codec_abstractarray_.abstractarray.md).[registry](../classes/_codec_abstractarray_.abstractarray.md#registry)*

*Defined in [packages/types/src/codec/AbstractArray.ts:22](https://github.com/polkadot-js/api/blob/0c98593ae/packages/types/src/codec/AbstractArray.ts#L22)*

## Accessors

###  Type

• **get Type**(): *string*

*Inherited from [Vec](../classes/_codec_vec_.vec.md).[Type](../classes/_codec_vec_.vec.md#type)*

*Defined in [packages/types/src/codec/Vec.ts:67](https://github.com/polkadot-js/api/blob/0c98593ae/packages/types/src/codec/Vec.ts#L67)*

**`description`** The type for the items

**Returns:** *string*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [AbstractArray](../classes/_codec_abstractarray_.abstractarray.md).[encodedLength](../classes/_codec_abstractarray_.abstractarray.md#encodedlength)*

*Defined in [packages/types/src/codec/AbstractArray.ts:33](https://github.com/polkadot-js/api/blob/0c98593ae/packages/types/src/codec/AbstractArray.ts#L33)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](_types_.ihash.md)*

*Inherited from [AbstractArray](../classes/_codec_abstractarray_.abstractarray.md).[hash](../classes/_codec_abstractarray_.abstractarray.md#hash)*

*Defined in [packages/types/src/codec/AbstractArray.ts:42](https://github.com/polkadot-js/api/blob/0c98593ae/packages/types/src/codec/AbstractArray.ts#L42)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [AbstractArray](../classes/_codec_abstractarray_.abstractarray.md).[isEmpty](../classes/_codec_abstractarray_.abstractarray.md#isempty)*

*Defined in [packages/types/src/codec/AbstractArray.ts:49](https://github.com/polkadot-js/api/blob/0c98593ae/packages/types/src/codec/AbstractArray.ts#L49)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Inherited from [AbstractArray](../classes/_codec_abstractarray_.abstractarray.md).[length](../classes/_codec_abstractarray_.abstractarray.md#length)*

*Overrides void*

*Defined in [packages/types/src/codec/AbstractArray.ts:56](https://github.com/polkadot-js/api/blob/0c98593ae/packages/types/src/codec/AbstractArray.ts#L56)*

**`description`** The length of the value

**Returns:** *number*

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *IterableIterator‹[WinningDataEntry](_interfaces_parachains_types_.winningdataentry.md)›*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:60

Iterator

**Returns:** *IterableIterator‹[WinningDataEntry](_interfaces_parachains_types_.winningdataentry.md)›*

___

###  [Symbol.unscopables]

▸ **[Symbol.unscopables]**(): *object*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:94

Returns an object whose properties have the value 'true'
when they will be absent when used in a 'with' statement.

**Returns:** *object*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [AbstractArray](../classes/_codec_abstractarray_.abstractarray.md).[eq](../classes/_codec_abstractarray_.abstractarray.md#eq)*

*Defined in [packages/types/src/codec/AbstractArray.ts:64](https://github.com/polkadot-js/api/blob/0c98593ae/packages/types/src/codec/AbstractArray.ts#L64)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  filter

▸ **filter**(`callbackfn`: function, `thisArg?`: any): *[WinningDataEntry](_interfaces_parachains_types_.winningdataentry.md)[]*

*Inherited from [AbstractArray](../classes/_codec_abstractarray_.abstractarray.md).[filter](../classes/_codec_abstractarray_.abstractarray.md#filter)*

*Overrides void*

*Defined in [packages/types/src/codec/AbstractArray.ts:134](https://github.com/polkadot-js/api/blob/0c98593ae/packages/types/src/codec/AbstractArray.ts#L134)*

**`description`** Filters the array with the callback

**Parameters:**

▪ **callbackfn**: *function*

The filter function

▸ (`value`: [WinningDataEntry](_interfaces_parachains_types_.winningdataentry.md), `index`: number, `array`: [WinningDataEntry](_interfaces_parachains_types_.winningdataentry.md)[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [WinningDataEntry](_interfaces_parachains_types_.winningdataentry.md) |
`index` | number |
`array` | [WinningDataEntry](_interfaces_parachains_types_.winningdataentry.md)[] |

▪`Optional`  **thisArg**: *any*

The `this` object to apply the result to

**Returns:** *[WinningDataEntry](_interfaces_parachains_types_.winningdataentry.md)[]*

___

###  includes

▸ **includes**(`check`: any): *boolean*

*Inherited from [AbstractArray](../classes/_codec_abstractarray_.abstractarray.md).[includes](../classes/_codec_abstractarray_.abstractarray.md#includes)*

*Overrides void*

*Defined in [packages/types/src/codec/AbstractArray.ts:150](https://github.com/polkadot-js/api/blob/0c98593ae/packages/types/src/codec/AbstractArray.ts#L150)*

**`description`** Checks if the array includes a specific value

**Parameters:**

Name | Type |
------ | ------ |
`check` | any |

**Returns:** *boolean*

___

###  map

▸ **map**<**U**>(`callbackfn`: function, `thisArg?`: any): *U[]*

*Inherited from [AbstractArray](../classes/_codec_abstractarray_.abstractarray.md).[map](../classes/_codec_abstractarray_.abstractarray.md#map)*

*Overrides void*

*Defined in [packages/types/src/codec/AbstractArray.ts:143](https://github.com/polkadot-js/api/blob/0c98593ae/packages/types/src/codec/AbstractArray.ts#L143)*

**`description`** Maps the array with the callback

**Type parameters:**

▪ **U**

**Parameters:**

▪ **callbackfn**: *function*

The mapping function

▸ (`value`: [WinningDataEntry](_interfaces_parachains_types_.winningdataentry.md), `index`: number, `array`: [WinningDataEntry](_interfaces_parachains_types_.winningdataentry.md)[]): *U*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [WinningDataEntry](_interfaces_parachains_types_.winningdataentry.md) |
`index` | number |
`array` | [WinningDataEntry](_interfaces_parachains_types_.winningdataentry.md)[] |

▪`Optional`  **thisArg**: *any*

The `this` onject to apply the result to

**Returns:** *U[]*

___

###  toArray

▸ **toArray**(): *[WinningDataEntry](_interfaces_parachains_types_.winningdataentry.md)[]*

*Inherited from [AbstractArray](../classes/_codec_abstractarray_.abstractarray.md).[toArray](../classes/_codec_abstractarray_.abstractarray.md#toarray)*

*Defined in [packages/types/src/codec/AbstractArray.ts:71](https://github.com/polkadot-js/api/blob/0c98593ae/packages/types/src/codec/AbstractArray.ts#L71)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[WinningDataEntry](_interfaces_parachains_types_.winningdataentry.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [AbstractArray](../classes/_codec_abstractarray_.abstractarray.md).[toHex](../classes/_codec_abstractarray_.abstractarray.md#tohex)*

*Defined in [packages/types/src/codec/AbstractArray.ts:78](https://github.com/polkadot-js/api/blob/0c98593ae/packages/types/src/codec/AbstractArray.ts#L78)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonArray](_types_.anyjsonarray.md)*

*Inherited from [AbstractArray](../classes/_codec_abstractarray_.abstractarray.md).[toJSON](../classes/_codec_abstractarray_.abstractarray.md#tojson)*

*Defined in [packages/types/src/codec/AbstractArray.ts:85](https://github.com/polkadot-js/api/blob/0c98593ae/packages/types/src/codec/AbstractArray.ts#L85)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonArray](_types_.anyjsonarray.md)*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Vec](../classes/_codec_vec_.vec.md).[toRawType](../classes/_codec_vec_.vec.md#torawtype)*

*Overrides [AbstractArray](../classes/_codec_abstractarray_.abstractarray.md).[toRawType](../classes/_codec_abstractarray_.abstractarray.md#abstract-torawtype)*

*Defined in [packages/types/src/codec/Vec.ts:92](https://github.com/polkadot-js/api/blob/0c98593ae/packages/types/src/codec/Vec.ts#L92)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [AbstractArray](../classes/_codec_abstractarray_.abstractarray.md).[toString](../classes/_codec_abstractarray_.abstractarray.md#tostring)*

*Overrides void*

*Defined in [packages/types/src/codec/AbstractArray.ts:99](https://github.com/polkadot-js/api/blob/0c98593ae/packages/types/src/codec/AbstractArray.ts#L99)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from [AbstractArray](../classes/_codec_abstractarray_.abstractarray.md).[toU8a](../classes/_codec_abstractarray_.abstractarray.md#tou8a)*

*Defined in [packages/types/src/codec/AbstractArray.ts:112](https://github.com/polkadot-js/api/blob/0c98593ae/packages/types/src/codec/AbstractArray.ts#L112)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*

___

### `Static` decodeVec

▸ **decodeVec**<**T**>(`registry`: [Registry](_types_.registry.md), `Type`: [Constructor](_types_.constructor.md)‹T›, `value`: [Vec](../classes/_codec_vec_.vec.md)‹any› | Uint8Array | string | any[]): *T[]*

*Inherited from [Vec](../classes/_codec_vec_.vec.md).[decodeVec](../classes/_codec_vec_.vec.md#static-decodevec)*

*Defined in [packages/types/src/codec/Vec.ts:33](https://github.com/polkadot-js/api/blob/0c98593ae/packages/types/src/codec/Vec.ts#L33)*

**Type parameters:**

▪ **T**: *[Codec](_types_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](_types_.registry.md) |
`Type` | [Constructor](_types_.constructor.md)‹T› |
`value` | [Vec](../classes/_codec_vec_.vec.md)‹any› &#124; Uint8Array &#124; string &#124; any[] |

**Returns:** *T[]*

___

### `Static` with

▸ **with**<**O**>(`Type`: [Constructor](_types_.constructor.md)‹O› | [InterfaceTypes](../modules/_types_.md#interfacetypes)): *[Constructor](_types_.constructor.md)‹[Vec](../classes/_codec_vec_.vec.md)‹O››*

*Inherited from [Vec](../classes/_codec_vec_.vec.md).[with](../classes/_codec_vec_.vec.md#static-with)*

*Defined in [packages/types/src/codec/Vec.ts:56](https://github.com/polkadot-js/api/blob/0c98593ae/packages/types/src/codec/Vec.ts#L56)*

**Type parameters:**

▪ **O**: *[Codec](_types_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`Type` | [Constructor](_types_.constructor.md)‹O› &#124; [InterfaceTypes](../modules/_types_.md#interfacetypes) |

**Returns:** *[Constructor](_types_.constructor.md)‹[Vec](../classes/_codec_vec_.vec.md)‹O››*
