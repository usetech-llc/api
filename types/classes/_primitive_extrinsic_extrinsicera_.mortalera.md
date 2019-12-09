[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["primitive/Extrinsic/ExtrinsicEra"](../modules/_primitive_extrinsic_extrinsicera_.md) › [MortalEra](_primitive_extrinsic_extrinsicera_.mortalera.md)

# Class: MortalEra

**`name`** MortalEra

**`description`** 
The MortalEra for an extrinsic, indicating period and phase

## Hierarchy

  ↳ [Tuple](_codec_tuple_.tuple.md)

  ↳ **MortalEra**

  ↳ [MortalEra](../interfaces/_interfaces_runtime_types_.mortalera.md)

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Indexable

* \[ **n**: *number*\]: [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_primitive_extrinsic_extrinsicera_.mortalera.md#constructor)

### Properties

* [registry](_primitive_extrinsic_extrinsicera_.mortalera.md#registry)

### Accessors

* [Types](_primitive_extrinsic_extrinsicera_.mortalera.md#types)
* [encodedLength](_primitive_extrinsic_extrinsicera_.mortalera.md#encodedlength)
* [hash](_primitive_extrinsic_extrinsicera_.mortalera.md#hash)
* [isEmpty](_primitive_extrinsic_extrinsicera_.mortalera.md#isempty)
* [length](_primitive_extrinsic_extrinsicera_.mortalera.md#length)
* [period](_primitive_extrinsic_extrinsicera_.mortalera.md#period)
* [phase](_primitive_extrinsic_extrinsicera_.mortalera.md#phase)

### Methods

* [birth](_primitive_extrinsic_extrinsicera_.mortalera.md#birth)
* [death](_primitive_extrinsic_extrinsicera_.mortalera.md#death)
* [eq](_primitive_extrinsic_extrinsicera_.mortalera.md#eq)
* [filter](_primitive_extrinsic_extrinsicera_.mortalera.md#filter)
* [includes](_primitive_extrinsic_extrinsicera_.mortalera.md#includes)
* [map](_primitive_extrinsic_extrinsicera_.mortalera.md#map)
* [toArray](_primitive_extrinsic_extrinsicera_.mortalera.md#toarray)
* [toHex](_primitive_extrinsic_extrinsicera_.mortalera.md#tohex)
* [toJSON](_primitive_extrinsic_extrinsicera_.mortalera.md#tojson)
* [toRawType](_primitive_extrinsic_extrinsicera_.mortalera.md#torawtype)
* [toString](_primitive_extrinsic_extrinsicera_.mortalera.md#tostring)
* [toU8a](_primitive_extrinsic_extrinsicera_.mortalera.md#tou8a)
* [with](_primitive_extrinsic_extrinsicera_.mortalera.md#static-with)

## Constructors

###  constructor

\+ **new MortalEra**(`registry`: [Registry](../interfaces/_types_.registry.md), `value?`: MortalMethod | Uint8Array | number[] | string): *[MortalEra](_primitive_extrinsic_extrinsicera_.mortalera.md)*

*Overrides [Tuple](_codec_tuple_.tuple.md).[constructor](_codec_tuple_.tuple.md#constructor)*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts:50](https://github.com/polkadot-js/api/blob/8ba402963/packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts#L50)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_types_.registry.md) |
`value?` | MortalMethod &#124; Uint8Array &#124; number[] &#124; string |

**Returns:** *[MortalEra](_primitive_extrinsic_extrinsicera_.mortalera.md)*

## Properties

###  registry

• **registry**: *[Registry](../interfaces/_types_.registry.md)*

*Implementation of [Codec](../interfaces/_types_.codec.md).[registry](../interfaces/_types_.codec.md#registry)*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[registry](_codec_abstractarray_.abstractarray.md#registry)*

*Defined in [packages/types/src/codec/AbstractArray.ts:22](https://github.com/polkadot-js/api/blob/8ba402963/packages/types/src/codec/AbstractArray.ts#L22)*

## Accessors

###  Types

• **get Types**(): *string[]*

*Inherited from [Tuple](_codec_tuple_.tuple.md).[Types](_codec_tuple_.tuple.md#types)*

*Defined in [packages/types/src/codec/Tuple.ts:81](https://github.com/polkadot-js/api/blob/8ba402963/packages/types/src/codec/Tuple.ts#L81)*

**`description`** The types definition of the tuple

**Returns:** *string[]*

___

###  encodedLength

• **get encodedLength**(): *number*

*Overrides [Tuple](_codec_tuple_.tuple.md).[encodedLength](_codec_tuple_.tuple.md#encodedlength)*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts:105](https://github.com/polkadot-js/api/blob/8ba402963/packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts#L105)*

**`description`** Encoded length for mortals occupy 2 bytes, different from the actual Tuple since it is encoded. This is a shortcut fro `toU8a().length`

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](../interfaces/_types_.ihash.md)*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[hash](_codec_abstractarray_.abstractarray.md#hash)*

*Defined in [packages/types/src/codec/AbstractArray.ts:42](https://github.com/polkadot-js/api/blob/8ba402963/packages/types/src/codec/AbstractArray.ts#L42)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](../interfaces/_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[isEmpty](_codec_abstractarray_.abstractarray.md#isempty)*

*Defined in [packages/types/src/codec/AbstractArray.ts:49](https://github.com/polkadot-js/api/blob/8ba402963/packages/types/src/codec/AbstractArray.ts#L49)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[length](_codec_abstractarray_.abstractarray.md#length)*

*Overrides void*

*Defined in [packages/types/src/codec/AbstractArray.ts:56](https://github.com/polkadot-js/api/blob/8ba402963/packages/types/src/codec/AbstractArray.ts#L56)*

**`description`** The length of the value

**Returns:** *number*

___

###  period

• **get period**(): *[U64](_primitive_u64_.u64.md)*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts:112](https://github.com/polkadot-js/api/blob/8ba402963/packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts#L112)*

**`description`** The period of this Mortal wraps as a [U64](_primitive_u64_.u64.md)

**Returns:** *[U64](_primitive_u64_.u64.md)*

___

###  phase

• **get phase**(): *[U64](_primitive_u64_.u64.md)*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts:119](https://github.com/polkadot-js/api/blob/8ba402963/packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts#L119)*

**`description`** The phase of this Mortal wraps as a [U64](_primitive_u64_.u64.md)

**Returns:** *[U64](_primitive_u64_.u64.md)*

## Methods

###  birth

▸ **birth**(`current`: BN | number): *number*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts:156](https://github.com/polkadot-js/api/blob/8ba402963/packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts#L156)*

**`description`** Get the block number of the start of the era whose properties this object describes that `current` belongs to.

**Parameters:**

Name | Type |
------ | ------ |
`current` | BN &#124; number |

**Returns:** *number*

___

###  death

▸ **death**(`current`: BN | number): *number*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts:168](https://github.com/polkadot-js/api/blob/8ba402963/packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts#L168)*

**`description`** Get the block number of the first block at which the era has ended.

**Parameters:**

Name | Type |
------ | ------ |
`current` | BN &#124; number |

**Returns:** *number*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[eq](_codec_abstractarray_.abstractarray.md#eq)*

*Defined in [packages/types/src/codec/AbstractArray.ts:64](https://github.com/polkadot-js/api/blob/8ba402963/packages/types/src/codec/AbstractArray.ts#L64)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  filter

▸ **filter**(`callbackfn`: function, `thisArg?`: any): *[Codec](../interfaces/_types_.codec.md)[]*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[filter](_codec_abstractarray_.abstractarray.md#filter)*

*Overrides void*

*Defined in [packages/types/src/codec/AbstractArray.ts:134](https://github.com/polkadot-js/api/blob/8ba402963/packages/types/src/codec/AbstractArray.ts#L134)*

**`description`** Filters the array with the callback

**Parameters:**

▪ **callbackfn**: *function*

The filter function

▸ (`value`: [Codec](../interfaces/_types_.codec.md), `index`: number, `array`: [Codec](../interfaces/_types_.codec.md)[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Codec](../interfaces/_types_.codec.md) |
`index` | number |
`array` | [Codec](../interfaces/_types_.codec.md)[] |

▪`Optional`  **thisArg**: *any*

The `this` object to apply the result to

**Returns:** *[Codec](../interfaces/_types_.codec.md)[]*

___

###  includes

▸ **includes**(`check`: any): *boolean*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[includes](_codec_abstractarray_.abstractarray.md#includes)*

*Overrides void*

*Defined in [packages/types/src/codec/AbstractArray.ts:150](https://github.com/polkadot-js/api/blob/8ba402963/packages/types/src/codec/AbstractArray.ts#L150)*

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

*Defined in [packages/types/src/codec/AbstractArray.ts:143](https://github.com/polkadot-js/api/blob/8ba402963/packages/types/src/codec/AbstractArray.ts#L143)*

**`description`** Maps the array with the callback

**Type parameters:**

▪ **U**

**Parameters:**

▪ **callbackfn**: *function*

The mapping function

▸ (`value`: [Codec](../interfaces/_types_.codec.md), `index`: number, `array`: [Codec](../interfaces/_types_.codec.md)[]): *U*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Codec](../interfaces/_types_.codec.md) |
`index` | number |
`array` | [Codec](../interfaces/_types_.codec.md)[] |

▪`Optional`  **thisArg**: *any*

The `this` onject to apply the result to

**Returns:** *U[]*

___

###  toArray

▸ **toArray**(): *[Codec](../interfaces/_types_.codec.md)[]*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toArray](_codec_abstractarray_.abstractarray.md#toarray)*

*Defined in [packages/types/src/codec/AbstractArray.ts:71](https://github.com/polkadot-js/api/blob/8ba402963/packages/types/src/codec/AbstractArray.ts#L71)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](../interfaces/_types_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toHex](_codec_abstractarray_.abstractarray.md#tohex)*

*Defined in [packages/types/src/codec/AbstractArray.ts:78](https://github.com/polkadot-js/api/blob/8ba402963/packages/types/src/codec/AbstractArray.ts#L78)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *any*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Overrides [AbstractArray](_codec_abstractarray_.abstractarray.md).[toJSON](_codec_abstractarray_.abstractarray.md#tojson)*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts:126](https://github.com/polkadot-js/api/blob/8ba402963/packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts#L126)*

**`description`** Returns a JSON representation of the actual value

**Returns:** *any*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Tuple](_codec_tuple_.tuple.md).[toRawType](_codec_tuple_.tuple.md#torawtype)*

*Overrides [AbstractArray](_codec_abstractarray_.abstractarray.md).[toRawType](_codec_abstractarray_.abstractarray.md#abstract-torawtype)*

*Defined in [packages/types/src/codec/Tuple.ts:90](https://github.com/polkadot-js/api/blob/8ba402963/packages/types/src/codec/Tuple.ts#L90)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Tuple](_codec_tuple_.tuple.md).[toString](_codec_tuple_.tuple.md#tostring)*

*Overrides [AbstractArray](_codec_abstractarray_.abstractarray.md).[toString](_codec_abstractarray_.abstractarray.md#tostring)*

*Defined in [packages/types/src/codec/Tuple.ts:103](https://github.com/polkadot-js/api/blob/8ba402963/packages/types/src/codec/Tuple.ts#L103)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Overrides [Tuple](_codec_tuple_.tuple.md).[toU8a](_codec_tuple_.tuple.md#tou8a)*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts:141](https://github.com/polkadot-js/api/blob/8ba402963/packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts#L141)*

**`description`** Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal) Period and phase are encoded:   - The period of validity from the block hash found in the signing material.   - The phase in the period that this transaction's lifetime begins (and, importantly,     implies which block hash is included in the signature material). If the `period` is     greater than 1 << 12, then it will be a factor of the times greater than 1<<12 that     `period` is.  |

**Returns:** *Uint8Array*

___

### `Static` with

▸ **with**(`Types`: TupleTypes): *[Constructor](../interfaces/_types_.constructor.md)‹[Tuple](_codec_tuple_.tuple.md)›*

*Inherited from [Tuple](_codec_tuple_.tuple.md).[with](_codec_tuple_.tuple.md#static-with)*

*Defined in [packages/types/src/codec/Tuple.ts:59](https://github.com/polkadot-js/api/blob/8ba402963/packages/types/src/codec/Tuple.ts#L59)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | TupleTypes |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹[Tuple](_codec_tuple_.tuple.md)›*
