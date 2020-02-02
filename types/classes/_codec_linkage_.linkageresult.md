[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["codec/Linkage"](../modules/_codec_linkage_.md) › [LinkageResult](_codec_linkage_.linkageresult.md)

# Class: LinkageResult

**`name`** LinkageResult

**`description`** A Linkage keys/Values tuple

## Hierarchy

  ↳ [Tuple](_codec_tuple_.tuple.md)

  ↳ **LinkageResult**

## Implements

* Codec

## Indexable

* \[ **n**: *number*\]: Codec

## Index

### Constructors

* [constructor](_codec_linkage_.linkageresult.md#constructor)

### Properties

* [registry](_codec_linkage_.linkageresult.md#registry)

### Accessors

* [Types](_codec_linkage_.linkageresult.md#types)
* [encodedLength](_codec_linkage_.linkageresult.md#encodedlength)
* [hash](_codec_linkage_.linkageresult.md#hash)
* [isEmpty](_codec_linkage_.linkageresult.md#isempty)
* [length](_codec_linkage_.linkageresult.md#length)

### Methods

* [eq](_codec_linkage_.linkageresult.md#eq)
* [filter](_codec_linkage_.linkageresult.md#filter)
* [includes](_codec_linkage_.linkageresult.md#includes)
* [map](_codec_linkage_.linkageresult.md#map)
* [toArray](_codec_linkage_.linkageresult.md#toarray)
* [toHex](_codec_linkage_.linkageresult.md#tohex)
* [toJSON](_codec_linkage_.linkageresult.md#tojson)
* [toRawType](_codec_linkage_.linkageresult.md#torawtype)
* [toString](_codec_linkage_.linkageresult.md#tostring)
* [toU8a](_codec_linkage_.linkageresult.md#tou8a)
* [with](_codec_linkage_.linkageresult.md#static-with)

## Constructors

###  constructor

\+ **new LinkageResult**(`registry`: Registry, `__namedParameters`: [Constructor, [Array](_codec_abstractarray_.abstractarray.md#static-array)], `__namedParameters`: [Constructor, [Array](_codec_abstractarray_.abstractarray.md#static-array)]): *[LinkageResult](_codec_linkage_.linkageresult.md)*

*Overrides [Tuple](_codec_tuple_.tuple.md).[constructor](_codec_tuple_.tuple.md#constructor)*

*Defined in [packages/types/src/codec/Linkage.ts:67](https://github.com/polkadot-js/api/blob/b3d592357f/packages/types/src/codec/Linkage.ts#L67)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | Registry |
`__namedParameters` | [Constructor, [Array](_codec_abstractarray_.abstractarray.md#static-array)] |
`__namedParameters` | [Constructor, [Array](_codec_abstractarray_.abstractarray.md#static-array)] |

**Returns:** *[LinkageResult](_codec_linkage_.linkageresult.md)*

## Properties

###  registry

• **registry**: *Registry*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[registry](_codec_abstractarray_.abstractarray.md#registry)*

*Defined in [packages/types/src/codec/AbstractArray.ts:22](https://github.com/polkadot-js/api/blob/b3d592357f/packages/types/src/codec/AbstractArray.ts#L22)*

## Accessors

###  Types

• **get Types**(): *string[]*

*Inherited from [Tuple](_codec_tuple_.tuple.md).[Types](_codec_tuple_.tuple.md#types)*

*Defined in [packages/types/src/codec/Tuple.ts:82](https://github.com/polkadot-js/api/blob/b3d592357f/packages/types/src/codec/Tuple.ts#L82)*

**`description`** The types definition of the tuple

**Returns:** *string[]*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Tuple](_codec_tuple_.tuple.md).[encodedLength](_codec_tuple_.tuple.md#encodedlength)*

*Overrides [AbstractArray](_codec_abstractarray_.abstractarray.md).[encodedLength](_codec_abstractarray_.abstractarray.md#encodedlength)*

*Defined in [packages/types/src/codec/Tuple.ts:71](https://github.com/polkadot-js/api/blob/b3d592357f/packages/types/src/codec/Tuple.ts#L71)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *IHash*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[hash](_codec_abstractarray_.abstractarray.md#hash)*

*Defined in [packages/types/src/codec/AbstractArray.ts:42](https://github.com/polkadot-js/api/blob/b3d592357f/packages/types/src/codec/AbstractArray.ts#L42)*

**`description`** returns a hash of the contents

**Returns:** *IHash*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[isEmpty](_codec_abstractarray_.abstractarray.md#isempty)*

*Defined in [packages/types/src/codec/AbstractArray.ts:49](https://github.com/polkadot-js/api/blob/b3d592357f/packages/types/src/codec/AbstractArray.ts#L49)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[length](_codec_abstractarray_.abstractarray.md#length)*

*Overrides void*

*Defined in [packages/types/src/codec/AbstractArray.ts:56](https://github.com/polkadot-js/api/blob/b3d592357f/packages/types/src/codec/AbstractArray.ts#L56)*

**`description`** The length of the value

**Returns:** *number*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[eq](_codec_abstractarray_.abstractarray.md#eq)*

*Defined in [packages/types/src/codec/AbstractArray.ts:64](https://github.com/polkadot-js/api/blob/b3d592357f/packages/types/src/codec/AbstractArray.ts#L64)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  filter

▸ **filter**(`callbackfn`: function, `thisArg?`: any): *Codec[]*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[filter](_codec_abstractarray_.abstractarray.md#filter)*

*Overrides void*

*Defined in [packages/types/src/codec/AbstractArray.ts:134](https://github.com/polkadot-js/api/blob/b3d592357f/packages/types/src/codec/AbstractArray.ts#L134)*

**`description`** Filters the array with the callback

**Parameters:**

▪ **callbackfn**: *function*

The filter function

▸ (`value`: Codec, `index`: number, `array`: Codec[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`value` | Codec |
`index` | number |
`array` | Codec[] |

▪`Optional`  **thisArg**: *any*

The `this` object to apply the result to

**Returns:** *Codec[]*

___

###  includes

▸ **includes**(`check`: any): *boolean*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[includes](_codec_abstractarray_.abstractarray.md#includes)*

*Defined in [packages/types/src/codec/AbstractArray.ts:150](https://github.com/polkadot-js/api/blob/b3d592357f/packages/types/src/codec/AbstractArray.ts#L150)*

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

*Defined in [packages/types/src/codec/AbstractArray.ts:143](https://github.com/polkadot-js/api/blob/b3d592357f/packages/types/src/codec/AbstractArray.ts#L143)*

**`description`** Maps the array with the callback

**Type parameters:**

▪ **U**

**Parameters:**

▪ **callbackfn**: *function*

The mapping function

▸ (`value`: Codec, `index`: number, `array`: Codec[]): *U*

**Parameters:**

Name | Type |
------ | ------ |
`value` | Codec |
`index` | number |
`array` | Codec[] |

▪`Optional`  **thisArg**: *any*

The `this` onject to apply the result to

**Returns:** *U[]*

___

###  toArray

▸ **toArray**(): *Codec[]*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toArray](_codec_abstractarray_.abstractarray.md#toarray)*

*Defined in [packages/types/src/codec/AbstractArray.ts:71](https://github.com/polkadot-js/api/blob/b3d592357f/packages/types/src/codec/AbstractArray.ts#L71)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *Codec[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toHex](_codec_abstractarray_.abstractarray.md#tohex)*

*Defined in [packages/types/src/codec/AbstractArray.ts:78](https://github.com/polkadot-js/api/blob/b3d592357f/packages/types/src/codec/AbstractArray.ts#L78)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *AnyJsonArray*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toJSON](_codec_abstractarray_.abstractarray.md#tojson)*

*Defined in [packages/types/src/codec/AbstractArray.ts:85](https://github.com/polkadot-js/api/blob/b3d592357f/packages/types/src/codec/AbstractArray.ts#L85)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *AnyJsonArray*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Tuple](_codec_tuple_.tuple.md).[toRawType](_codec_tuple_.tuple.md#torawtype)*

*Overrides [AbstractArray](_codec_abstractarray_.abstractarray.md).[toRawType](_codec_abstractarray_.abstractarray.md#abstract-torawtype)*

*Defined in [packages/types/src/codec/Tuple.ts:91](https://github.com/polkadot-js/api/blob/b3d592357f/packages/types/src/codec/Tuple.ts#L91)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Tuple](_codec_tuple_.tuple.md).[toString](_codec_tuple_.tuple.md#tostring)*

*Overrides [AbstractArray](_codec_abstractarray_.abstractarray.md).[toString](_codec_abstractarray_.abstractarray.md#tostring)*

*Defined in [packages/types/src/codec/Tuple.ts:104](https://github.com/polkadot-js/api/blob/b3d592357f/packages/types/src/codec/Tuple.ts#L104)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Inherited from [Tuple](_codec_tuple_.tuple.md).[toU8a](_codec_tuple_.tuple.md#tou8a)*

*Overrides [AbstractArray](_codec_abstractarray_.abstractarray.md).[toU8a](_codec_abstractarray_.abstractarray.md#tou8a)*

*Defined in [packages/types/src/codec/Tuple.ts:113](https://github.com/polkadot-js/api/blob/b3d592357f/packages/types/src/codec/Tuple.ts#L113)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

___

### `Static` with

▸ **with**(`Types`: TupleTypes): *Constructor‹[Tuple](_codec_tuple_.tuple.md)›*

*Inherited from [Tuple](_codec_tuple_.tuple.md).[with](_codec_tuple_.tuple.md#static-with)*

*Defined in [packages/types/src/codec/Tuple.ts:60](https://github.com/polkadot-js/api/blob/b3d592357f/packages/types/src/codec/Tuple.ts#L60)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | TupleTypes |

**Returns:** *Constructor‹[Tuple](_codec_tuple_.tuple.md)›*
