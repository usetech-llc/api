[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["codec/Tuple"](../modules/_codec_tuple_.md) › [Tuple](_codec_tuple_.tuple.md)

# Class: Tuple

**`name`** Tuple

**`description`** 
A Tuple defines an anonymous fixed-length array, where each element has its
own type. It extends the base JS `Array` object.

## Hierarchy

  ↳ [AbstractArray](_codec_abstractarray_.abstractarray.md)‹[Codec](../interfaces/_types_codec_.codec.md)›

  ↳ **Tuple**

  ↳ [EventData](_primitive_generic_event_.eventdata.md)

  ↳ [MortalEra](_primitive_extrinsic_extrinsicera_.mortalera.md)

  ↳ [LinkageResult](_codec_linkage_.linkageresult.md)

## Implements

* [Codec](../interfaces/_types_codec_.codec.md)

## Indexable

* \[ **n**: *number*\]: [Codec](../interfaces/_types_codec_.codec.md)

## Index

### Constructors

* [constructor](_codec_tuple_.tuple.md#constructor)

### Properties

* [registry](_codec_tuple_.tuple.md#registry)

### Accessors

* [Types](_codec_tuple_.tuple.md#types)
* [encodedLength](_codec_tuple_.tuple.md#encodedlength)
* [hash](_codec_tuple_.tuple.md#hash)
* [isEmpty](_codec_tuple_.tuple.md#isempty)
* [length](_codec_tuple_.tuple.md#length)

### Methods

* [eq](_codec_tuple_.tuple.md#eq)
* [filter](_codec_tuple_.tuple.md#filter)
* [includes](_codec_tuple_.tuple.md#includes)
* [map](_codec_tuple_.tuple.md#map)
* [toArray](_codec_tuple_.tuple.md#toarray)
* [toHex](_codec_tuple_.tuple.md#tohex)
* [toHuman](_codec_tuple_.tuple.md#tohuman)
* [toJSON](_codec_tuple_.tuple.md#tojson)
* [toRawType](_codec_tuple_.tuple.md#torawtype)
* [toString](_codec_tuple_.tuple.md#tostring)
* [toU8a](_codec_tuple_.tuple.md#tou8a)
* [with](_codec_tuple_.tuple.md#static-with)

## Constructors

###  constructor

\+ **new Tuple**(`registry`: [Registry](../interfaces/_types_registry_.registry.md), `Types`: TupleTypes, `value?`: any): *[Tuple](_codec_tuple_.tuple.md)*

*Defined in [packages/types/src/codec/Tuple.ts:27](https://github.com/polkadot-js/api/blob/502e54ce5c/packages/types/src/codec/Tuple.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_types_registry_.registry.md) |
`Types` | TupleTypes |
`value?` | any |

**Returns:** *[Tuple](_codec_tuple_.tuple.md)*

## Properties

###  registry

• **registry**: *[Registry](../interfaces/_types_registry_.registry.md)*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md).[registry](../interfaces/_types_codec_.codec.md#registry)*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[registry](_codec_abstractarray_.abstractarray.md#registry)*

*Defined in [packages/types/src/codec/AbstractArray.ts:22](https://github.com/polkadot-js/api/blob/502e54ce5c/packages/types/src/codec/AbstractArray.ts#L22)*

## Accessors

###  Types

• **get Types**(): *string[]*

*Defined in [packages/types/src/codec/Tuple.ts:82](https://github.com/polkadot-js/api/blob/502e54ce5c/packages/types/src/codec/Tuple.ts#L82)*

**`description`** The types definition of the tuple

**Returns:** *string[]*

___

###  encodedLength

• **get encodedLength**(): *number*

*Overrides [AbstractArray](_codec_abstractarray_.abstractarray.md).[encodedLength](_codec_abstractarray_.abstractarray.md#encodedlength)*

*Defined in [packages/types/src/codec/Tuple.ts:71](https://github.com/polkadot-js/api/blob/502e54ce5c/packages/types/src/codec/Tuple.ts#L71)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](../interfaces/_types_interfaces_.ihash.md)*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[hash](_codec_abstractarray_.abstractarray.md#hash)*

*Defined in [packages/types/src/codec/AbstractArray.ts:42](https://github.com/polkadot-js/api/blob/502e54ce5c/packages/types/src/codec/AbstractArray.ts#L42)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](../interfaces/_types_interfaces_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[isEmpty](_codec_abstractarray_.abstractarray.md#isempty)*

*Defined in [packages/types/src/codec/AbstractArray.ts:49](https://github.com/polkadot-js/api/blob/502e54ce5c/packages/types/src/codec/AbstractArray.ts#L49)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[length](_codec_abstractarray_.abstractarray.md#length)*

*Overrides [AnyJsonArray](../interfaces/_types_helpers_.anyjsonarray.md).[length](../interfaces/_types_helpers_.anyjsonarray.md#length)*

*Defined in [packages/types/src/codec/AbstractArray.ts:56](https://github.com/polkadot-js/api/blob/502e54ce5c/packages/types/src/codec/AbstractArray.ts#L56)*

**`description`** The length of the value

**Returns:** *number*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[eq](_codec_abstractarray_.abstractarray.md#eq)*

*Defined in [packages/types/src/codec/AbstractArray.ts:64](https://github.com/polkadot-js/api/blob/502e54ce5c/packages/types/src/codec/AbstractArray.ts#L64)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  filter

▸ **filter**(`callbackfn`: function, `thisArg?`: any): *[Codec](../interfaces/_types_codec_.codec.md)[]*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[filter](_codec_abstractarray_.abstractarray.md#filter)*

*Overrides [AnyJsonArray](../interfaces/_types_helpers_.anyjsonarray.md).[filter](../interfaces/_types_helpers_.anyjsonarray.md#filter)*

*Defined in [packages/types/src/codec/AbstractArray.ts:143](https://github.com/polkadot-js/api/blob/502e54ce5c/packages/types/src/codec/AbstractArray.ts#L143)*

**`description`** Filters the array with the callback

**Parameters:**

▪ **callbackfn**: *function*

The filter function

▸ (`value`: [Codec](../interfaces/_types_codec_.codec.md), `index`: number, `array`: [Codec](../interfaces/_types_codec_.codec.md)[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Codec](../interfaces/_types_codec_.codec.md) |
`index` | number |
`array` | [Codec](../interfaces/_types_codec_.codec.md)[] |

▪`Optional`  **thisArg**: *any*

The `this` object to apply the result to

**Returns:** *[Codec](../interfaces/_types_codec_.codec.md)[]*

___

###  includes

▸ **includes**(`check`: any): *boolean*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[includes](_codec_abstractarray_.abstractarray.md#includes)*

*Defined in [packages/types/src/codec/AbstractArray.ts:159](https://github.com/polkadot-js/api/blob/502e54ce5c/packages/types/src/codec/AbstractArray.ts#L159)*

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

*Overrides [AnyJsonArray](../interfaces/_types_helpers_.anyjsonarray.md).[map](../interfaces/_types_helpers_.anyjsonarray.md#map)*

*Defined in [packages/types/src/codec/AbstractArray.ts:152](https://github.com/polkadot-js/api/blob/502e54ce5c/packages/types/src/codec/AbstractArray.ts#L152)*

**`description`** Maps the array with the callback

**Type parameters:**

▪ **U**

**Parameters:**

▪ **callbackfn**: *function*

The mapping function

▸ (`value`: [Codec](../interfaces/_types_codec_.codec.md), `index`: number, `array`: [Codec](../interfaces/_types_codec_.codec.md)[]): *U*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Codec](../interfaces/_types_codec_.codec.md) |
`index` | number |
`array` | [Codec](../interfaces/_types_codec_.codec.md)[] |

▪`Optional`  **thisArg**: *any*

The `this` onject to apply the result to

**Returns:** *U[]*

___

###  toArray

▸ **toArray**(): *[Codec](../interfaces/_types_codec_.codec.md)[]*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toArray](_codec_abstractarray_.abstractarray.md#toarray)*

*Defined in [packages/types/src/codec/AbstractArray.ts:71](https://github.com/polkadot-js/api/blob/502e54ce5c/packages/types/src/codec/AbstractArray.ts#L71)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](../interfaces/_types_codec_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toHex](_codec_abstractarray_.abstractarray.md#tohex)*

*Defined in [packages/types/src/codec/AbstractArray.ts:78](https://github.com/polkadot-js/api/blob/502e54ce5c/packages/types/src/codec/AbstractArray.ts#L78)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(`isExtended?`: undefined | false | true): *[AnyJsonArray](../interfaces/_types_helpers_.anyjsonarray.md)*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toHuman](_codec_abstractarray_.abstractarray.md#tohuman)*

*Defined in [packages/types/src/codec/AbstractArray.ts:85](https://github.com/polkadot-js/api/blob/502e54ce5c/packages/types/src/codec/AbstractArray.ts#L85)*

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

**Parameters:**

Name | Type |
------ | ------ |
`isExtended?` | undefined &#124; false &#124; true |

**Returns:** *[AnyJsonArray](../interfaces/_types_helpers_.anyjsonarray.md)*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonArray](../interfaces/_types_helpers_.anyjsonarray.md)*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toJSON](_codec_abstractarray_.abstractarray.md#tojson)*

*Defined in [packages/types/src/codec/AbstractArray.ts:94](https://github.com/polkadot-js/api/blob/502e54ce5c/packages/types/src/codec/AbstractArray.ts#L94)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonArray](../interfaces/_types_helpers_.anyjsonarray.md)*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Overrides [AbstractArray](_codec_abstractarray_.abstractarray.md).[toRawType](_codec_abstractarray_.abstractarray.md#abstract-torawtype)*

*Defined in [packages/types/src/codec/Tuple.ts:91](https://github.com/polkadot-js/api/blob/502e54ce5c/packages/types/src/codec/Tuple.ts#L91)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Overrides [AbstractArray](_codec_abstractarray_.abstractarray.md).[toString](_codec_abstractarray_.abstractarray.md#tostring)*

*Defined in [packages/types/src/codec/Tuple.ts:104](https://github.com/polkadot-js/api/blob/502e54ce5c/packages/types/src/codec/Tuple.ts#L104)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Overrides [AbstractArray](_codec_abstractarray_.abstractarray.md).[toU8a](_codec_abstractarray_.abstractarray.md#tou8a)*

*Defined in [packages/types/src/codec/Tuple.ts:113](https://github.com/polkadot-js/api/blob/502e54ce5c/packages/types/src/codec/Tuple.ts#L113)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

___

### `Static` with

▸ **with**(`Types`: TupleTypes): *[Constructor](../interfaces/_types_codec_.constructor.md)‹[Tuple](_codec_tuple_.tuple.md)›*

*Defined in [packages/types/src/codec/Tuple.ts:60](https://github.com/polkadot-js/api/blob/502e54ce5c/packages/types/src/codec/Tuple.ts#L60)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | TupleTypes |

**Returns:** *[Constructor](../interfaces/_types_codec_.constructor.md)‹[Tuple](_codec_tuple_.tuple.md)›*
