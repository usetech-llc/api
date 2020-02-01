[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["codec/AbstractArray"](../modules/_codec_abstractarray_.md) › [AbstractArray](_codec_abstractarray_.abstractarray.md)

# Class: AbstractArray <**T**>

**`name`** AbstractArray

**`description`** 
This manages codec arrays. It is an extension to Array, providing
specific encoding/decoding on top of the base type.

## Type parameters

▪ **T**: *Codec*

## Hierarchy

* [Array](_codec_abstractarray_.abstractarray.md#static-array)‹T›

  ↳ **AbstractArray**

  ↳ [Tuple](_codec_tuple_.tuple.md)

  ↳ [Vec](_codec_vec_.vec.md)

  ↳ [VecFixed](_codec_vecfixed_.vecfixed.md)

  ↳ [VecAny](_codec_vecany_.vecany.md)

## Implements

* Codec

## Indexable

* \[ **n**: *number*\]: T

## Index

### Properties

* [registry](_codec_abstractarray_.abstractarray.md#registry)
* [Array](_codec_abstractarray_.abstractarray.md#static-array)

### Accessors

* [encodedLength](_codec_abstractarray_.abstractarray.md#encodedlength)
* [hash](_codec_abstractarray_.abstractarray.md#hash)
* [isEmpty](_codec_abstractarray_.abstractarray.md#isempty)
* [length](_codec_abstractarray_.abstractarray.md#length)

### Methods

* [eq](_codec_abstractarray_.abstractarray.md#eq)
* [filter](_codec_abstractarray_.abstractarray.md#filter)
* [includes](_codec_abstractarray_.abstractarray.md#includes)
* [map](_codec_abstractarray_.abstractarray.md#map)
* [toArray](_codec_abstractarray_.abstractarray.md#toarray)
* [toHex](_codec_abstractarray_.abstractarray.md#tohex)
* [toJSON](_codec_abstractarray_.abstractarray.md#tojson)
* [toRawType](_codec_abstractarray_.abstractarray.md#abstract-torawtype)
* [toString](_codec_abstractarray_.abstractarray.md#tostring)
* [toU8a](_codec_abstractarray_.abstractarray.md#tou8a)

## Properties

###  registry

• **registry**: *Registry*

*Defined in [packages/types/src/codec/AbstractArray.ts:22](https://github.com/polkadot-js/api/blob/00026a173f/packages/types/src/codec/AbstractArray.ts#L22)*

___

### `Static` Array

▪ **Array**: *ArrayConstructor*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1385

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Defined in [packages/types/src/codec/AbstractArray.ts:33](https://github.com/polkadot-js/api/blob/00026a173f/packages/types/src/codec/AbstractArray.ts#L33)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *IHash*

*Defined in [packages/types/src/codec/AbstractArray.ts:42](https://github.com/polkadot-js/api/blob/00026a173f/packages/types/src/codec/AbstractArray.ts#L42)*

**`description`** returns a hash of the contents

**Returns:** *IHash*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Defined in [packages/types/src/codec/AbstractArray.ts:49](https://github.com/polkadot-js/api/blob/00026a173f/packages/types/src/codec/AbstractArray.ts#L49)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Overrides void*

*Defined in [packages/types/src/codec/AbstractArray.ts:56](https://github.com/polkadot-js/api/blob/00026a173f/packages/types/src/codec/AbstractArray.ts#L56)*

**`description`** The length of the value

**Returns:** *number*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Defined in [packages/types/src/codec/AbstractArray.ts:64](https://github.com/polkadot-js/api/blob/00026a173f/packages/types/src/codec/AbstractArray.ts#L64)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  filter

▸ **filter**(`callbackfn`: function, `thisArg?`: any): *T[]*

*Overrides void*

*Defined in [packages/types/src/codec/AbstractArray.ts:134](https://github.com/polkadot-js/api/blob/00026a173f/packages/types/src/codec/AbstractArray.ts#L134)*

**`description`** Filters the array with the callback

**Parameters:**

▪ **callbackfn**: *function*

The filter function

▸ (`value`: T, `index`: number, `array`: T[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |
`index` | number |
`array` | T[] |

▪`Optional`  **thisArg**: *any*

The `this` object to apply the result to

**Returns:** *T[]*

___

###  includes

▸ **includes**(`check`: any): *boolean*

*Overrides void*

*Defined in [packages/types/src/codec/AbstractArray.ts:150](https://github.com/polkadot-js/api/blob/00026a173f/packages/types/src/codec/AbstractArray.ts#L150)*

**`description`** Checks if the array includes a specific value

**Parameters:**

Name | Type |
------ | ------ |
`check` | any |

**Returns:** *boolean*

___

###  map

▸ **map**<**U**>(`callbackfn`: function, `thisArg?`: any): *U[]*

*Overrides void*

*Defined in [packages/types/src/codec/AbstractArray.ts:143](https://github.com/polkadot-js/api/blob/00026a173f/packages/types/src/codec/AbstractArray.ts#L143)*

**`description`** Maps the array with the callback

**Type parameters:**

▪ **U**

**Parameters:**

▪ **callbackfn**: *function*

The mapping function

▸ (`value`: T, `index`: number, `array`: T[]): *U*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |
`index` | number |
`array` | T[] |

▪`Optional`  **thisArg**: *any*

The `this` onject to apply the result to

**Returns:** *U[]*

___

###  toArray

▸ **toArray**(): *T[]*

*Defined in [packages/types/src/codec/AbstractArray.ts:71](https://github.com/polkadot-js/api/blob/00026a173f/packages/types/src/codec/AbstractArray.ts#L71)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *T[]*

___

###  toHex

▸ **toHex**(): *string*

*Defined in [packages/types/src/codec/AbstractArray.ts:78](https://github.com/polkadot-js/api/blob/00026a173f/packages/types/src/codec/AbstractArray.ts#L78)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *AnyJsonArray*

*Defined in [packages/types/src/codec/AbstractArray.ts:85](https://github.com/polkadot-js/api/blob/00026a173f/packages/types/src/codec/AbstractArray.ts#L85)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *AnyJsonArray*

___

### `Abstract` toRawType

▸ **toRawType**(): *string*

*Defined in [packages/types/src/codec/AbstractArray.ts:94](https://github.com/polkadot-js/api/blob/00026a173f/packages/types/src/codec/AbstractArray.ts#L94)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Overrides void*

*Defined in [packages/types/src/codec/AbstractArray.ts:99](https://github.com/polkadot-js/api/blob/00026a173f/packages/types/src/codec/AbstractArray.ts#L99)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Defined in [packages/types/src/codec/AbstractArray.ts:112](https://github.com/polkadot-js/api/blob/00026a173f/packages/types/src/codec/AbstractArray.ts#L112)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*
