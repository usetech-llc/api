[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["codec/VecFixed"](../modules/_codec_vecfixed_.md) › [VecFixed](_codec_vecfixed_.vecfixed.md)

# Class: VecFixed <**T**>

**`name`** VecFixed

**`description`** 
This manages codec arrays of a fixed length

## Type parameters

▪ **T**: *[Codec](../interfaces/_types_codec_.codec.md)*

## Hierarchy

  ↳ [AbstractArray](_codec_abstractarray_.abstractarray.md)‹T›

  ↳ **VecFixed**

## Implements

* [Codec](../interfaces/_types_codec_.codec.md)

## Indexable

* \[ **n**: *number*\]: T

## Index

### Constructors

* [constructor](_codec_vecfixed_.vecfixed.md#constructor)

### Properties

* [registry](_codec_vecfixed_.vecfixed.md#registry)

### Accessors

* [Type](_codec_vecfixed_.vecfixed.md#type)
* [encodedLength](_codec_vecfixed_.vecfixed.md#encodedlength)
* [hash](_codec_vecfixed_.vecfixed.md#hash)
* [isEmpty](_codec_vecfixed_.vecfixed.md#isempty)
* [length](_codec_vecfixed_.vecfixed.md#length)

### Methods

* [eq](_codec_vecfixed_.vecfixed.md#eq)
* [filter](_codec_vecfixed_.vecfixed.md#filter)
* [includes](_codec_vecfixed_.vecfixed.md#includes)
* [map](_codec_vecfixed_.vecfixed.md#map)
* [toArray](_codec_vecfixed_.vecfixed.md#toarray)
* [toHex](_codec_vecfixed_.vecfixed.md#tohex)
* [toHuman](_codec_vecfixed_.vecfixed.md#tohuman)
* [toJSON](_codec_vecfixed_.vecfixed.md#tojson)
* [toRawType](_codec_vecfixed_.vecfixed.md#torawtype)
* [toString](_codec_vecfixed_.vecfixed.md#tostring)
* [toU8a](_codec_vecfixed_.vecfixed.md#tou8a)
* [with](_codec_vecfixed_.vecfixed.md#static-with)

## Constructors

###  constructor

\+ **new VecFixed**(`registry`: [Registry](../interfaces/_types_registry_.registry.md), `Type`: [Constructor](../interfaces/_types_codec_.constructor.md)‹T› | [InterfaceTypes](../modules/_types_helpers_.md#interfacetypes), `length`: number, `value`: [VecFixed](_codec_vecfixed_.vecfixed.md)‹any› | [Uint8Array](_codec_raw_.raw.md#static-uint8array) | string | any[]): *[VecFixed](_codec_vecfixed_.vecfixed.md)*

*Defined in [packages/types/src/codec/VecFixed.ts:18](https://github.com/polkadot-js/api/blob/30f5baa906/packages/types/src/codec/VecFixed.ts#L18)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`registry` | [Registry](../interfaces/_types_registry_.registry.md) | - |
`Type` | [Constructor](../interfaces/_types_codec_.constructor.md)‹T› &#124; [InterfaceTypes](../modules/_types_helpers_.md#interfacetypes) | - |
`length` | number | - |
`value` | [VecFixed](_codec_vecfixed_.vecfixed.md)‹any› &#124; [Uint8Array](_codec_raw_.raw.md#static-uint8array) &#124; string &#124; any[] | [] as any[] |

**Returns:** *[VecFixed](_codec_vecfixed_.vecfixed.md)*

## Properties

###  registry

• **registry**: *[Registry](../interfaces/_types_registry_.registry.md)*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md).[registry](../interfaces/_types_codec_.codec.md#registry)*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[registry](_codec_abstractarray_.abstractarray.md#registry)*

*Defined in [packages/types/src/codec/AbstractArray.ts:23](https://github.com/polkadot-js/api/blob/30f5baa906/packages/types/src/codec/AbstractArray.ts#L23)*

## Accessors

###  Type

• **get Type**(): *string*

*Defined in [packages/types/src/codec/VecFixed.ts:58](https://github.com/polkadot-js/api/blob/30f5baa906/packages/types/src/codec/VecFixed.ts#L58)*

**`description`** The type for the items

**Returns:** *string*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[encodedLength](_codec_abstractarray_.abstractarray.md#encodedlength)*

*Defined in [packages/types/src/codec/AbstractArray.ts:34](https://github.com/polkadot-js/api/blob/30f5baa906/packages/types/src/codec/AbstractArray.ts#L34)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *H256*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[hash](_codec_abstractarray_.abstractarray.md#hash)*

*Defined in [packages/types/src/codec/AbstractArray.ts:43](https://github.com/polkadot-js/api/blob/30f5baa906/packages/types/src/codec/AbstractArray.ts#L43)*

**`description`** returns a hash of the contents

**Returns:** *H256*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[isEmpty](_codec_abstractarray_.abstractarray.md#isempty)*

*Defined in [packages/types/src/codec/AbstractArray.ts:50](https://github.com/polkadot-js/api/blob/30f5baa906/packages/types/src/codec/AbstractArray.ts#L50)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[length](_codec_abstractarray_.abstractarray.md#length)*

*Overrides [AnyJsonArray](../interfaces/_types_helpers_.anyjsonarray.md).[length](../interfaces/_types_helpers_.anyjsonarray.md#length)*

*Defined in [packages/types/src/codec/AbstractArray.ts:57](https://github.com/polkadot-js/api/blob/30f5baa906/packages/types/src/codec/AbstractArray.ts#L57)*

**`description`** The length of the value

**Returns:** *number*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[eq](_codec_abstractarray_.abstractarray.md#eq)*

*Defined in [packages/types/src/codec/AbstractArray.ts:65](https://github.com/polkadot-js/api/blob/30f5baa906/packages/types/src/codec/AbstractArray.ts#L65)*

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

*Overrides [AnyJsonArray](../interfaces/_types_helpers_.anyjsonarray.md).[filter](../interfaces/_types_helpers_.anyjsonarray.md#filter)*

*Defined in [packages/types/src/codec/AbstractArray.ts:144](https://github.com/polkadot-js/api/blob/30f5baa906/packages/types/src/codec/AbstractArray.ts#L144)*

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

*Defined in [packages/types/src/codec/AbstractArray.ts:160](https://github.com/polkadot-js/api/blob/30f5baa906/packages/types/src/codec/AbstractArray.ts#L160)*

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

*Defined in [packages/types/src/codec/AbstractArray.ts:153](https://github.com/polkadot-js/api/blob/30f5baa906/packages/types/src/codec/AbstractArray.ts#L153)*

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

*Defined in [packages/types/src/codec/AbstractArray.ts:72](https://github.com/polkadot-js/api/blob/30f5baa906/packages/types/src/codec/AbstractArray.ts#L72)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *T[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toHex](_codec_abstractarray_.abstractarray.md#tohex)*

*Defined in [packages/types/src/codec/AbstractArray.ts:79](https://github.com/polkadot-js/api/blob/30f5baa906/packages/types/src/codec/AbstractArray.ts#L79)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(`isExtended?`: undefined | false | true): *[AnyJsonArray](../interfaces/_types_helpers_.anyjsonarray.md)*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toHuman](_codec_abstractarray_.abstractarray.md#tohuman)*

*Defined in [packages/types/src/codec/AbstractArray.ts:86](https://github.com/polkadot-js/api/blob/30f5baa906/packages/types/src/codec/AbstractArray.ts#L86)*

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

*Defined in [packages/types/src/codec/AbstractArray.ts:95](https://github.com/polkadot-js/api/blob/30f5baa906/packages/types/src/codec/AbstractArray.ts#L95)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonArray](../interfaces/_types_helpers_.anyjsonarray.md)*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Overrides [AbstractArray](_codec_abstractarray_.abstractarray.md).[toRawType](_codec_abstractarray_.abstractarray.md#abstract-torawtype)*

*Defined in [packages/types/src/codec/VecFixed.ts:73](https://github.com/polkadot-js/api/blob/30f5baa906/packages/types/src/codec/VecFixed.ts#L73)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toString](_codec_abstractarray_.abstractarray.md#tostring)*

*Overrides [AnyJsonArray](../interfaces/_types_helpers_.anyjsonarray.md).[toString](../interfaces/_types_helpers_.anyjsonarray.md#tostring)*

*Defined in [packages/types/src/codec/AbstractArray.ts:109](https://github.com/polkadot-js/api/blob/30f5baa906/packages/types/src/codec/AbstractArray.ts#L109)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Overrides [AbstractArray](_codec_abstractarray_.abstractarray.md).[toU8a](_codec_abstractarray_.abstractarray.md#tou8a)*

*Defined in [packages/types/src/codec/VecFixed.ts:62](https://github.com/polkadot-js/api/blob/30f5baa906/packages/types/src/codec/VecFixed.ts#L62)*

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

___

### `Static` with

▸ **with**<**O**>(`Type`: [Constructor](../interfaces/_types_codec_.constructor.md)‹O› | [InterfaceTypes](../modules/_types_helpers_.md#interfacetypes), `length`: number): *[Constructor](../interfaces/_types_codec_.constructor.md)‹[VecFixed](_codec_vecfixed_.vecfixed.md)‹O››*

*Defined in [packages/types/src/codec/VecFixed.ts:47](https://github.com/polkadot-js/api/blob/30f5baa906/packages/types/src/codec/VecFixed.ts#L47)*

**Type parameters:**

▪ **O**: *[Codec](../interfaces/_types_codec_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`Type` | [Constructor](../interfaces/_types_codec_.constructor.md)‹O› &#124; [InterfaceTypes](../modules/_types_helpers_.md#interfacetypes) |
`length` | number |

**Returns:** *[Constructor](../interfaces/_types_codec_.constructor.md)‹[VecFixed](_codec_vecfixed_.vecfixed.md)‹O››*
