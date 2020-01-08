[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["codec/VecAny"](../modules/_codec_vecany_.md) › [VecAny](_codec_vecany_.vecany.md)

# Class: VecAny <**T**>

**`name`** VecAny

**`description`** 
This manages codec arrays, assuming that the inputs are already of type Codec. Unlike
a vector, this can be used to manage array-like structures with variable arguments of
any types

## Type parameters

▪ **T**: *[Codec](../interfaces/_types_.codec.md)*

## Hierarchy

  ↳ [AbstractArray](_codec_abstractarray_.abstractarray.md)‹T›

  ↳ **VecAny**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Indexable

* \[ **n**: *number*\]: T

## Index

### Properties

* [registry](_codec_vecany_.vecany.md#registry)

### Accessors

* [encodedLength](_codec_vecany_.vecany.md#encodedlength)
* [hash](_codec_vecany_.vecany.md#hash)
* [isEmpty](_codec_vecany_.vecany.md#isempty)
* [length](_codec_vecany_.vecany.md#length)

### Methods

* [[Symbol.iterator]](_codec_vecany_.vecany.md#[symbol.iterator])
* [[Symbol.unscopables]](_codec_vecany_.vecany.md#[symbol.unscopables])
* [eq](_codec_vecany_.vecany.md#eq)
* [filter](_codec_vecany_.vecany.md#filter)
* [includes](_codec_vecany_.vecany.md#includes)
* [map](_codec_vecany_.vecany.md#map)
* [toArray](_codec_vecany_.vecany.md#toarray)
* [toHex](_codec_vecany_.vecany.md#tohex)
* [toJSON](_codec_vecany_.vecany.md#tojson)
* [toRawType](_codec_vecany_.vecany.md#torawtype)
* [toString](_codec_vecany_.vecany.md#tostring)
* [toU8a](_codec_vecany_.vecany.md#tou8a)

## Properties

###  registry

• **registry**: *[Registry](../interfaces/_types_.registry.md)*

*Implementation of [Codec](../interfaces/_types_.codec.md).[registry](../interfaces/_types_.codec.md#registry)*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[registry](_codec_abstractarray_.abstractarray.md#registry)*

*Defined in [packages/types/src/codec/AbstractArray.ts:22](https://github.com/polkadot-js/api/blob/e855da1f13/packages/types/src/codec/AbstractArray.ts#L22)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[encodedLength](_codec_abstractarray_.abstractarray.md#encodedlength)*

*Defined in [packages/types/src/codec/AbstractArray.ts:33](https://github.com/polkadot-js/api/blob/e855da1f13/packages/types/src/codec/AbstractArray.ts#L33)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](../interfaces/_types_.ihash.md)*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[hash](_codec_abstractarray_.abstractarray.md#hash)*

*Defined in [packages/types/src/codec/AbstractArray.ts:42](https://github.com/polkadot-js/api/blob/e855da1f13/packages/types/src/codec/AbstractArray.ts#L42)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](../interfaces/_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[isEmpty](_codec_abstractarray_.abstractarray.md#isempty)*

*Defined in [packages/types/src/codec/AbstractArray.ts:49](https://github.com/polkadot-js/api/blob/e855da1f13/packages/types/src/codec/AbstractArray.ts#L49)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[length](_codec_abstractarray_.abstractarray.md#length)*

*Overrides void*

*Defined in [packages/types/src/codec/AbstractArray.ts:56](https://github.com/polkadot-js/api/blob/e855da1f13/packages/types/src/codec/AbstractArray.ts#L56)*

**`description`** The length of the value

**Returns:** *number*

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *IterableIterator‹T›*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:60

Iterator

**Returns:** *IterableIterator‹T›*

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

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[eq](_codec_abstractarray_.abstractarray.md#eq)*

*Defined in [packages/types/src/codec/AbstractArray.ts:64](https://github.com/polkadot-js/api/blob/e855da1f13/packages/types/src/codec/AbstractArray.ts#L64)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  filter

▸ **filter**(`callbackfn`: function, `thisArg?`: any): *T[]*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[filter](_codec_abstractarray_.abstractarray.md#filter)*

*Overrides void*

*Defined in [packages/types/src/codec/AbstractArray.ts:134](https://github.com/polkadot-js/api/blob/e855da1f13/packages/types/src/codec/AbstractArray.ts#L134)*

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

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[includes](_codec_abstractarray_.abstractarray.md#includes)*

*Overrides void*

*Defined in [packages/types/src/codec/AbstractArray.ts:150](https://github.com/polkadot-js/api/blob/e855da1f13/packages/types/src/codec/AbstractArray.ts#L150)*

**`description`** Checks if the array includes a specific value

**Parameters:**

Name | Type |
------ | ------ |
`check` | any |

**Returns:** *boolean*

___

###  map

▸ **map**<**U**>(`callbackfn`: function, `thisArg?`: any): *U[]*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[map](_codec_abstractarray_.abstractarray.md#map)*

*Overrides void*

*Defined in [packages/types/src/codec/AbstractArray.ts:143](https://github.com/polkadot-js/api/blob/e855da1f13/packages/types/src/codec/AbstractArray.ts#L143)*

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

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toArray](_codec_abstractarray_.abstractarray.md#toarray)*

*Defined in [packages/types/src/codec/AbstractArray.ts:71](https://github.com/polkadot-js/api/blob/e855da1f13/packages/types/src/codec/AbstractArray.ts#L71)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *T[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toHex](_codec_abstractarray_.abstractarray.md#tohex)*

*Defined in [packages/types/src/codec/AbstractArray.ts:78](https://github.com/polkadot-js/api/blob/e855da1f13/packages/types/src/codec/AbstractArray.ts#L78)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonArray](../interfaces/_types_.anyjsonarray.md)*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toJSON](_codec_abstractarray_.abstractarray.md#tojson)*

*Defined in [packages/types/src/codec/AbstractArray.ts:85](https://github.com/polkadot-js/api/blob/e855da1f13/packages/types/src/codec/AbstractArray.ts#L85)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonArray](../interfaces/_types_.anyjsonarray.md)*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Overrides [AbstractArray](_codec_abstractarray_.abstractarray.md).[toRawType](_codec_abstractarray_.abstractarray.md#abstract-torawtype)*

*Defined in [packages/types/src/codec/VecAny.ts:19](https://github.com/polkadot-js/api/blob/e855da1f13/packages/types/src/codec/VecAny.ts#L19)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toString](_codec_abstractarray_.abstractarray.md#tostring)*

*Overrides void*

*Defined in [packages/types/src/codec/AbstractArray.ts:99](https://github.com/polkadot-js/api/blob/e855da1f13/packages/types/src/codec/AbstractArray.ts#L99)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toU8a](_codec_abstractarray_.abstractarray.md#tou8a)*

*Defined in [packages/types/src/codec/AbstractArray.ts:112](https://github.com/polkadot-js/api/blob/e855da1f13/packages/types/src/codec/AbstractArray.ts#L112)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*
