[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["primitive/Extrinsic/ExtrinsicEra"](../modules/_primitive_extrinsic_extrinsicera_.md) › [MortalEra](_primitive_extrinsic_extrinsicera_.mortalera.md)

# Class: MortalEra

**`name`** MortalEra

**`description`** 
The MortalEra for an extrinsic, indicating period and phase

## Hierarchy

  ↳ [Tuple](_codec_tuple_.tuple.md)

  ↳ **MortalEra**

## Implements

* Codec

## Indexable

* \[ **n**: *number*\]: Codec

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

\+ **new MortalEra**(`registry`: Registry, `value?`: MortalMethod | [Uint8Array](_codec_raw_.raw.md#static-uint8array) | number[] | string): *[MortalEra](_primitive_extrinsic_extrinsicera_.mortalera.md)*

*Overrides [Tuple](_codec_tuple_.tuple.md).[constructor](_codec_tuple_.tuple.md#constructor)*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts:50](https://github.com/polkadot-js/api/blob/79ee2ede3d/packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts#L50)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | Registry |
`value?` | MortalMethod &#124; [Uint8Array](_codec_raw_.raw.md#static-uint8array) &#124; number[] &#124; string |

**Returns:** *[MortalEra](_primitive_extrinsic_extrinsicera_.mortalera.md)*

## Properties

###  registry

• **registry**: *Registry*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[registry](_codec_abstractarray_.abstractarray.md#registry)*

*Defined in [packages/types/src/codec/AbstractArray.ts:22](https://github.com/polkadot-js/api/blob/79ee2ede3d/packages/types/src/codec/AbstractArray.ts#L22)*

## Accessors

###  Types

• **get Types**(): *string[]*

*Inherited from [Tuple](_codec_tuple_.tuple.md).[Types](_codec_tuple_.tuple.md#types)*

*Defined in [packages/types/src/codec/Tuple.ts:82](https://github.com/polkadot-js/api/blob/79ee2ede3d/packages/types/src/codec/Tuple.ts#L82)*

**`description`** The types definition of the tuple

**Returns:** *string[]*

___

###  encodedLength

• **get encodedLength**(): *number*

*Overrides [Tuple](_codec_tuple_.tuple.md).[encodedLength](_codec_tuple_.tuple.md#encodedlength)*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts:108](https://github.com/polkadot-js/api/blob/79ee2ede3d/packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts#L108)*

**`description`** Encoded length for mortals occupy 2 bytes, different from the actual Tuple since it is encoded. This is a shortcut fro `toU8a().length`

**Returns:** *number*

___

###  hash

• **get hash**(): *IHash*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[hash](_codec_abstractarray_.abstractarray.md#hash)*

*Defined in [packages/types/src/codec/AbstractArray.ts:42](https://github.com/polkadot-js/api/blob/79ee2ede3d/packages/types/src/codec/AbstractArray.ts#L42)*

**`description`** returns a hash of the contents

**Returns:** *IHash*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[isEmpty](_codec_abstractarray_.abstractarray.md#isempty)*

*Defined in [packages/types/src/codec/AbstractArray.ts:49](https://github.com/polkadot-js/api/blob/79ee2ede3d/packages/types/src/codec/AbstractArray.ts#L49)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[length](_codec_abstractarray_.abstractarray.md#length)*

*Overrides void*

*Defined in [packages/types/src/codec/AbstractArray.ts:56](https://github.com/polkadot-js/api/blob/79ee2ede3d/packages/types/src/codec/AbstractArray.ts#L56)*

**`description`** The length of the value

**Returns:** *number*

___

###  period

• **get period**(): *[U64](_primitive_u64_.u64.md)*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts:115](https://github.com/polkadot-js/api/blob/79ee2ede3d/packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts#L115)*

**`description`** The period of this Mortal wraps as a [U64](_primitive_u64_.u64.md)

**Returns:** *[U64](_primitive_u64_.u64.md)*

___

###  phase

• **get phase**(): *[U64](_primitive_u64_.u64.md)*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts:122](https://github.com/polkadot-js/api/blob/79ee2ede3d/packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts#L122)*

**`description`** The phase of this Mortal wraps as a [U64](_primitive_u64_.u64.md)

**Returns:** *[U64](_primitive_u64_.u64.md)*

## Methods

###  birth

▸ **birth**(`current`: BN | number): *number*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts:159](https://github.com/polkadot-js/api/blob/79ee2ede3d/packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts#L159)*

**`description`** Get the block number of the start of the era whose properties this object describes that `current` belongs to.

**Parameters:**

Name | Type |
------ | ------ |
`current` | BN &#124; number |

**Returns:** *number*

___

###  death

▸ **death**(`current`: BN | number): *number*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts:171](https://github.com/polkadot-js/api/blob/79ee2ede3d/packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts#L171)*

**`description`** Get the block number of the first block at which the era has ended.

**Parameters:**

Name | Type |
------ | ------ |
`current` | BN &#124; number |

**Returns:** *number*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[eq](_codec_abstractarray_.abstractarray.md#eq)*

*Defined in [packages/types/src/codec/AbstractArray.ts:64](https://github.com/polkadot-js/api/blob/79ee2ede3d/packages/types/src/codec/AbstractArray.ts#L64)*

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

*Defined in [packages/types/src/codec/AbstractArray.ts:134](https://github.com/polkadot-js/api/blob/79ee2ede3d/packages/types/src/codec/AbstractArray.ts#L134)*

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

*Defined in [packages/types/src/codec/AbstractArray.ts:150](https://github.com/polkadot-js/api/blob/79ee2ede3d/packages/types/src/codec/AbstractArray.ts#L150)*

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

*Defined in [packages/types/src/codec/AbstractArray.ts:143](https://github.com/polkadot-js/api/blob/79ee2ede3d/packages/types/src/codec/AbstractArray.ts#L143)*

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

*Defined in [packages/types/src/codec/AbstractArray.ts:71](https://github.com/polkadot-js/api/blob/79ee2ede3d/packages/types/src/codec/AbstractArray.ts#L71)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *Codec[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toHex](_codec_abstractarray_.abstractarray.md#tohex)*

*Defined in [packages/types/src/codec/AbstractArray.ts:78](https://github.com/polkadot-js/api/blob/79ee2ede3d/packages/types/src/codec/AbstractArray.ts#L78)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *any*

*Overrides [AbstractArray](_codec_abstractarray_.abstractarray.md).[toJSON](_codec_abstractarray_.abstractarray.md#tojson)*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts:129](https://github.com/polkadot-js/api/blob/79ee2ede3d/packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts#L129)*

**`description`** Returns a JSON representation of the actual value

**Returns:** *any*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Tuple](_codec_tuple_.tuple.md).[toRawType](_codec_tuple_.tuple.md#torawtype)*

*Overrides [AbstractArray](_codec_abstractarray_.abstractarray.md).[toRawType](_codec_abstractarray_.abstractarray.md#abstract-torawtype)*

*Defined in [packages/types/src/codec/Tuple.ts:91](https://github.com/polkadot-js/api/blob/79ee2ede3d/packages/types/src/codec/Tuple.ts#L91)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Tuple](_codec_tuple_.tuple.md).[toString](_codec_tuple_.tuple.md#tostring)*

*Overrides [AbstractArray](_codec_abstractarray_.abstractarray.md).[toString](_codec_abstractarray_.abstractarray.md#tostring)*

*Defined in [packages/types/src/codec/Tuple.ts:104](https://github.com/polkadot-js/api/blob/79ee2ede3d/packages/types/src/codec/Tuple.ts#L104)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Overrides [Tuple](_codec_tuple_.tuple.md).[toU8a](_codec_tuple_.tuple.md#tou8a)*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts:144](https://github.com/polkadot-js/api/blob/79ee2ede3d/packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts#L144)*

**`description`** Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal) Period and phase are encoded:   - The period of validity from the block hash found in the signing material.   - The phase in the period that this transaction's lifetime begins (and, importantly,     implies which block hash is included in the signature material). If the `period` is     greater than 1 << 12, then it will be a factor of the times greater than 1<<12 that     `period` is.  |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

___

### `Static` with

▸ **with**(`Types`: TupleTypes): *Constructor‹[Tuple](_codec_tuple_.tuple.md)›*

*Inherited from [Tuple](_codec_tuple_.tuple.md).[with](_codec_tuple_.tuple.md#static-with)*

*Defined in [packages/types/src/codec/Tuple.ts:60](https://github.com/polkadot-js/api/blob/79ee2ede3d/packages/types/src/codec/Tuple.ts#L60)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | TupleTypes |

**Returns:** *Constructor‹[Tuple](_codec_tuple_.tuple.md)›*
