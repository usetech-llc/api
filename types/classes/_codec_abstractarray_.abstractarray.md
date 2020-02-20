[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["codec/AbstractArray"](../modules/_codec_abstractarray_.md) › [AbstractArray](_codec_abstractarray_.abstractarray.md)

# Class: AbstractArray <**T**>

**`name`** AbstractArray

**`description`** 
This manages codec arrays. It is an extension to Array, providing
specific encoding/decoding on top of the base type.

## Type parameters

▪ **T**: *[Codec](../interfaces/_types_codec_.codec.md)*

## Hierarchy

* [Array](_codec_abstractarray_.abstractarray.md#static-array)‹T›

  ↳ **AbstractArray**

  ↳ [Tuple](_codec_tuple_.tuple.md)

  ↳ [Vec](_codec_vec_.vec.md)

  ↳ [VecFixed](_codec_vecfixed_.vecfixed.md)

  ↳ [VecAny](_codec_vecany_.vecany.md)

## Implements

* [Codec](../interfaces/_types_codec_.codec.md)

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
* [toHuman](_codec_abstractarray_.abstractarray.md#tohuman)
* [toJSON](_codec_abstractarray_.abstractarray.md#tojson)
* [toRawType](_codec_abstractarray_.abstractarray.md#abstract-torawtype)
* [toString](_codec_abstractarray_.abstractarray.md#tostring)
* [toU8a](_codec_abstractarray_.abstractarray.md#tou8a)

## Properties

###  registry

• **registry**: *[Registry](../interfaces/_types_registry_.registry.md)*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md).[registry](../interfaces/_types_codec_.codec.md#registry)*

*Defined in [packages/types/src/codec/AbstractArray.ts:23](https://github.com/polkadot-js/api/blob/92129746dc/packages/types/src/codec/AbstractArray.ts#L23)*

___

### `Static` Array

▪ **Array**: *ArrayConstructor*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1385

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Defined in [packages/types/src/codec/AbstractArray.ts:34](https://github.com/polkadot-js/api/blob/92129746dc/packages/types/src/codec/AbstractArray.ts#L34)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *H256*

*Defined in [packages/types/src/codec/AbstractArray.ts:43](https://github.com/polkadot-js/api/blob/92129746dc/packages/types/src/codec/AbstractArray.ts#L43)*

**`description`** returns a hash of the contents

**Returns:** *H256*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Defined in [packages/types/src/codec/AbstractArray.ts:50](https://github.com/polkadot-js/api/blob/92129746dc/packages/types/src/codec/AbstractArray.ts#L50)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Overrides [AnyJsonArray](../interfaces/_types_helpers_.anyjsonarray.md).[length](../interfaces/_types_helpers_.anyjsonarray.md#length)*

*Defined in [packages/types/src/codec/AbstractArray.ts:57](https://github.com/polkadot-js/api/blob/92129746dc/packages/types/src/codec/AbstractArray.ts#L57)*

**`description`** The length of the value

**Returns:** *number*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Defined in [packages/types/src/codec/AbstractArray.ts:65](https://github.com/polkadot-js/api/blob/92129746dc/packages/types/src/codec/AbstractArray.ts#L65)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  filter

▸ **filter**(`callbackfn`: function, `thisArg?`: any): *T[]*

*Overrides [AnyJsonArray](../interfaces/_types_helpers_.anyjsonarray.md).[filter](../interfaces/_types_helpers_.anyjsonarray.md#filter)*

*Defined in [packages/types/src/codec/AbstractArray.ts:144](https://github.com/polkadot-js/api/blob/92129746dc/packages/types/src/codec/AbstractArray.ts#L144)*

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

*Overrides [AnyJsonArray](../interfaces/_types_helpers_.anyjsonarray.md).[includes](../interfaces/_types_helpers_.anyjsonarray.md#includes)*

*Defined in [packages/types/src/codec/AbstractArray.ts:160](https://github.com/polkadot-js/api/blob/92129746dc/packages/types/src/codec/AbstractArray.ts#L160)*

**`description`** Checks if the array includes a specific value

**Parameters:**

Name | Type |
------ | ------ |
`check` | any |

**Returns:** *boolean*

___

###  map

▸ **map**<**U**>(`callbackfn`: function, `thisArg?`: any): *U[]*

*Overrides [AnyJsonArray](../interfaces/_types_helpers_.anyjsonarray.md).[map](../interfaces/_types_helpers_.anyjsonarray.md#map)*

*Defined in [packages/types/src/codec/AbstractArray.ts:153](https://github.com/polkadot-js/api/blob/92129746dc/packages/types/src/codec/AbstractArray.ts#L153)*

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

*Defined in [packages/types/src/codec/AbstractArray.ts:72](https://github.com/polkadot-js/api/blob/92129746dc/packages/types/src/codec/AbstractArray.ts#L72)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *T[]*

___

###  toHex

▸ **toHex**(): *string*

*Defined in [packages/types/src/codec/AbstractArray.ts:79](https://github.com/polkadot-js/api/blob/92129746dc/packages/types/src/codec/AbstractArray.ts#L79)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(`isExtended?`: undefined | false | true): *[AnyJsonArray](../interfaces/_types_helpers_.anyjsonarray.md)*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Defined in [packages/types/src/codec/AbstractArray.ts:86](https://github.com/polkadot-js/api/blob/92129746dc/packages/types/src/codec/AbstractArray.ts#L86)*

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

*Defined in [packages/types/src/codec/AbstractArray.ts:95](https://github.com/polkadot-js/api/blob/92129746dc/packages/types/src/codec/AbstractArray.ts#L95)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonArray](../interfaces/_types_helpers_.anyjsonarray.md)*

___

### `Abstract` toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Defined in [packages/types/src/codec/AbstractArray.ts:104](https://github.com/polkadot-js/api/blob/92129746dc/packages/types/src/codec/AbstractArray.ts#L104)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Overrides [AnyJsonArray](../interfaces/_types_helpers_.anyjsonarray.md).[toString](../interfaces/_types_helpers_.anyjsonarray.md#tostring)*

*Defined in [packages/types/src/codec/AbstractArray.ts:109](https://github.com/polkadot-js/api/blob/92129746dc/packages/types/src/codec/AbstractArray.ts#L109)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Defined in [packages/types/src/codec/AbstractArray.ts:122](https://github.com/polkadot-js/api/blob/92129746dc/packages/types/src/codec/AbstractArray.ts#L122)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*
