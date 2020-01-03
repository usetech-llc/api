[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/runtime/types"](../modules/_interfaces_runtime_types_.md) › [MortalEra](_interfaces_runtime_types_.mortalera.md)

# Interface: MortalEra

GenericMortalEra

## Hierarchy

  ↳ [MortalEra](../classes/_primitive_extrinsic_extrinsicera_.mortalera.md)

  ↳ **MortalEra**

## Implements

* [Codec](_types_.codec.md)

## Indexable

* \[ **n**: *number*\]: [Codec](_types_.codec.md)

GenericMortalEra

## Index

### Constructors

* [constructor](_interfaces_runtime_types_.mortalera.md#constructor)

### Properties

* [registry](_interfaces_runtime_types_.mortalera.md#registry)

### Accessors

* [Types](_interfaces_runtime_types_.mortalera.md#types)
* [encodedLength](_interfaces_runtime_types_.mortalera.md#encodedlength)
* [hash](_interfaces_runtime_types_.mortalera.md#hash)
* [isEmpty](_interfaces_runtime_types_.mortalera.md#isempty)
* [length](_interfaces_runtime_types_.mortalera.md#length)
* [period](_interfaces_runtime_types_.mortalera.md#period)
* [phase](_interfaces_runtime_types_.mortalera.md#phase)

### Methods

* [[Symbol.iterator]](_interfaces_runtime_types_.mortalera.md#[symbol.iterator])
* [[Symbol.unscopables]](_interfaces_runtime_types_.mortalera.md#[symbol.unscopables])
* [birth](_interfaces_runtime_types_.mortalera.md#birth)
* [death](_interfaces_runtime_types_.mortalera.md#death)
* [eq](_interfaces_runtime_types_.mortalera.md#eq)
* [filter](_interfaces_runtime_types_.mortalera.md#filter)
* [includes](_interfaces_runtime_types_.mortalera.md#includes)
* [map](_interfaces_runtime_types_.mortalera.md#map)
* [toArray](_interfaces_runtime_types_.mortalera.md#toarray)
* [toHex](_interfaces_runtime_types_.mortalera.md#tohex)
* [toJSON](_interfaces_runtime_types_.mortalera.md#tojson)
* [toRawType](_interfaces_runtime_types_.mortalera.md#torawtype)
* [toString](_interfaces_runtime_types_.mortalera.md#tostring)
* [toU8a](_interfaces_runtime_types_.mortalera.md#tou8a)
* [with](_interfaces_runtime_types_.mortalera.md#static-with)

## Constructors

###  constructor

\+ **new MortalEra**(`registry`: [Registry](_types_.registry.md), `value?`: MortalMethod | Uint8Array | number[] | string): *[MortalEra](_interfaces_runtime_types_.mortalera.md)*

*Inherited from [MortalEra](../classes/_primitive_extrinsic_extrinsicera_.mortalera.md).[constructor](../classes/_primitive_extrinsic_extrinsicera_.mortalera.md#constructor)*

*Overrides [Tuple](../classes/_codec_tuple_.tuple.md).[constructor](../classes/_codec_tuple_.tuple.md#constructor)*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts:50](https://github.com/polkadot-js/api/blob/51a866fd35/packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts#L50)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](_types_.registry.md) |
`value?` | MortalMethod &#124; Uint8Array &#124; number[] &#124; string |

**Returns:** *[MortalEra](_interfaces_runtime_types_.mortalera.md)*

## Properties

###  registry

• **registry**: *[Registry](_types_.registry.md)*

*Inherited from [AbstractArray](../classes/_codec_abstractarray_.abstractarray.md).[registry](../classes/_codec_abstractarray_.abstractarray.md#registry)*

*Defined in [packages/types/src/codec/AbstractArray.ts:22](https://github.com/polkadot-js/api/blob/51a866fd35/packages/types/src/codec/AbstractArray.ts#L22)*

## Accessors

###  Types

• **get Types**(): *string[]*

*Inherited from [Tuple](../classes/_codec_tuple_.tuple.md).[Types](../classes/_codec_tuple_.tuple.md#types)*

*Defined in [packages/types/src/codec/Tuple.ts:81](https://github.com/polkadot-js/api/blob/51a866fd35/packages/types/src/codec/Tuple.ts#L81)*

**`description`** The types definition of the tuple

**Returns:** *string[]*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [MortalEra](../classes/_primitive_extrinsic_extrinsicera_.mortalera.md).[encodedLength](../classes/_primitive_extrinsic_extrinsicera_.mortalera.md#encodedlength)*

*Overrides [Tuple](../classes/_codec_tuple_.tuple.md).[encodedLength](../classes/_codec_tuple_.tuple.md#encodedlength)*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts:105](https://github.com/polkadot-js/api/blob/51a866fd35/packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts#L105)*

**`description`** Encoded length for mortals occupy 2 bytes, different from the actual Tuple since it is encoded. This is a shortcut fro `toU8a().length`

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](_types_.ihash.md)*

*Inherited from [AbstractArray](../classes/_codec_abstractarray_.abstractarray.md).[hash](../classes/_codec_abstractarray_.abstractarray.md#hash)*

*Defined in [packages/types/src/codec/AbstractArray.ts:42](https://github.com/polkadot-js/api/blob/51a866fd35/packages/types/src/codec/AbstractArray.ts#L42)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [AbstractArray](../classes/_codec_abstractarray_.abstractarray.md).[isEmpty](../classes/_codec_abstractarray_.abstractarray.md#isempty)*

*Defined in [packages/types/src/codec/AbstractArray.ts:49](https://github.com/polkadot-js/api/blob/51a866fd35/packages/types/src/codec/AbstractArray.ts#L49)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Inherited from [AbstractArray](../classes/_codec_abstractarray_.abstractarray.md).[length](../classes/_codec_abstractarray_.abstractarray.md#length)*

*Overrides void*

*Defined in [packages/types/src/codec/AbstractArray.ts:56](https://github.com/polkadot-js/api/blob/51a866fd35/packages/types/src/codec/AbstractArray.ts#L56)*

**`description`** The length of the value

**Returns:** *number*

___

###  period

• **get period**(): *[U64](../classes/_primitive_u64_.u64.md)*

*Inherited from [MortalEra](../classes/_primitive_extrinsic_extrinsicera_.mortalera.md).[period](../classes/_primitive_extrinsic_extrinsicera_.mortalera.md#period)*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts:112](https://github.com/polkadot-js/api/blob/51a866fd35/packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts#L112)*

**`description`** The period of this Mortal wraps as a [U64](../classes/_primitive_u64_.u64.md)

**Returns:** *[U64](../classes/_primitive_u64_.u64.md)*

___

###  phase

• **get phase**(): *[U64](../classes/_primitive_u64_.u64.md)*

*Inherited from [MortalEra](../classes/_primitive_extrinsic_extrinsicera_.mortalera.md).[phase](../classes/_primitive_extrinsic_extrinsicera_.mortalera.md#phase)*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts:119](https://github.com/polkadot-js/api/blob/51a866fd35/packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts#L119)*

**`description`** The phase of this Mortal wraps as a [U64](../classes/_primitive_u64_.u64.md)

**Returns:** *[U64](../classes/_primitive_u64_.u64.md)*

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *IterableIterator‹[Codec](_types_.codec.md)›*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:60

Iterator

**Returns:** *IterableIterator‹[Codec](_types_.codec.md)›*

___

###  [Symbol.unscopables]

▸ **[Symbol.unscopables]**(): *object*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:94

Returns an object whose properties have the value 'true'
when they will be absent when used in a 'with' statement.

**Returns:** *object*

___

###  birth

▸ **birth**(`current`: BN | number): *number*

*Inherited from [MortalEra](../classes/_primitive_extrinsic_extrinsicera_.mortalera.md).[birth](../classes/_primitive_extrinsic_extrinsicera_.mortalera.md#birth)*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts:156](https://github.com/polkadot-js/api/blob/51a866fd35/packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts#L156)*

**`description`** Get the block number of the start of the era whose properties this object describes that `current` belongs to.

**Parameters:**

Name | Type |
------ | ------ |
`current` | BN &#124; number |

**Returns:** *number*

___

###  death

▸ **death**(`current`: BN | number): *number*

*Inherited from [MortalEra](../classes/_primitive_extrinsic_extrinsicera_.mortalera.md).[death](../classes/_primitive_extrinsic_extrinsicera_.mortalera.md#death)*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts:168](https://github.com/polkadot-js/api/blob/51a866fd35/packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts#L168)*

**`description`** Get the block number of the first block at which the era has ended.

**Parameters:**

Name | Type |
------ | ------ |
`current` | BN &#124; number |

**Returns:** *number*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [AbstractArray](../classes/_codec_abstractarray_.abstractarray.md).[eq](../classes/_codec_abstractarray_.abstractarray.md#eq)*

*Defined in [packages/types/src/codec/AbstractArray.ts:64](https://github.com/polkadot-js/api/blob/51a866fd35/packages/types/src/codec/AbstractArray.ts#L64)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  filter

▸ **filter**(`callbackfn`: function, `thisArg?`: any): *[Codec](_types_.codec.md)[]*

*Inherited from [AbstractArray](../classes/_codec_abstractarray_.abstractarray.md).[filter](../classes/_codec_abstractarray_.abstractarray.md#filter)*

*Overrides void*

*Defined in [packages/types/src/codec/AbstractArray.ts:134](https://github.com/polkadot-js/api/blob/51a866fd35/packages/types/src/codec/AbstractArray.ts#L134)*

**`description`** Filters the array with the callback

**Parameters:**

▪ **callbackfn**: *function*

The filter function

▸ (`value`: [Codec](_types_.codec.md), `index`: number, `array`: [Codec](_types_.codec.md)[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Codec](_types_.codec.md) |
`index` | number |
`array` | [Codec](_types_.codec.md)[] |

▪`Optional`  **thisArg**: *any*

The `this` object to apply the result to

**Returns:** *[Codec](_types_.codec.md)[]*

___

###  includes

▸ **includes**(`check`: any): *boolean*

*Inherited from [AbstractArray](../classes/_codec_abstractarray_.abstractarray.md).[includes](../classes/_codec_abstractarray_.abstractarray.md#includes)*

*Overrides void*

*Defined in [packages/types/src/codec/AbstractArray.ts:150](https://github.com/polkadot-js/api/blob/51a866fd35/packages/types/src/codec/AbstractArray.ts#L150)*

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

*Defined in [packages/types/src/codec/AbstractArray.ts:143](https://github.com/polkadot-js/api/blob/51a866fd35/packages/types/src/codec/AbstractArray.ts#L143)*

**`description`** Maps the array with the callback

**Type parameters:**

▪ **U**

**Parameters:**

▪ **callbackfn**: *function*

The mapping function

▸ (`value`: [Codec](_types_.codec.md), `index`: number, `array`: [Codec](_types_.codec.md)[]): *U*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Codec](_types_.codec.md) |
`index` | number |
`array` | [Codec](_types_.codec.md)[] |

▪`Optional`  **thisArg**: *any*

The `this` onject to apply the result to

**Returns:** *U[]*

___

###  toArray

▸ **toArray**(): *[Codec](_types_.codec.md)[]*

*Inherited from [AbstractArray](../classes/_codec_abstractarray_.abstractarray.md).[toArray](../classes/_codec_abstractarray_.abstractarray.md#toarray)*

*Defined in [packages/types/src/codec/AbstractArray.ts:71](https://github.com/polkadot-js/api/blob/51a866fd35/packages/types/src/codec/AbstractArray.ts#L71)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](_types_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [AbstractArray](../classes/_codec_abstractarray_.abstractarray.md).[toHex](../classes/_codec_abstractarray_.abstractarray.md#tohex)*

*Defined in [packages/types/src/codec/AbstractArray.ts:78](https://github.com/polkadot-js/api/blob/51a866fd35/packages/types/src/codec/AbstractArray.ts#L78)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *any*

*Inherited from [MortalEra](../classes/_primitive_extrinsic_extrinsicera_.mortalera.md).[toJSON](../classes/_primitive_extrinsic_extrinsicera_.mortalera.md#tojson)*

*Overrides [AbstractArray](../classes/_codec_abstractarray_.abstractarray.md).[toJSON](../classes/_codec_abstractarray_.abstractarray.md#tojson)*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts:126](https://github.com/polkadot-js/api/blob/51a866fd35/packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts#L126)*

**`description`** Returns a JSON representation of the actual value

**Returns:** *any*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Tuple](../classes/_codec_tuple_.tuple.md).[toRawType](../classes/_codec_tuple_.tuple.md#torawtype)*

*Overrides [AbstractArray](../classes/_codec_abstractarray_.abstractarray.md).[toRawType](../classes/_codec_abstractarray_.abstractarray.md#abstract-torawtype)*

*Defined in [packages/types/src/codec/Tuple.ts:90](https://github.com/polkadot-js/api/blob/51a866fd35/packages/types/src/codec/Tuple.ts#L90)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Tuple](../classes/_codec_tuple_.tuple.md).[toString](../classes/_codec_tuple_.tuple.md#tostring)*

*Overrides [AbstractArray](../classes/_codec_abstractarray_.abstractarray.md).[toString](../classes/_codec_abstractarray_.abstractarray.md#tostring)*

*Defined in [packages/types/src/codec/Tuple.ts:103](https://github.com/polkadot-js/api/blob/51a866fd35/packages/types/src/codec/Tuple.ts#L103)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from [MortalEra](../classes/_primitive_extrinsic_extrinsicera_.mortalera.md).[toU8a](../classes/_primitive_extrinsic_extrinsicera_.mortalera.md#tou8a)*

*Overrides [Tuple](../classes/_codec_tuple_.tuple.md).[toU8a](../classes/_codec_tuple_.tuple.md#tou8a)*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts:141](https://github.com/polkadot-js/api/blob/51a866fd35/packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts#L141)*

**`description`** Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal) Period and phase are encoded:   - The period of validity from the block hash found in the signing material.   - The phase in the period that this transaction's lifetime begins (and, importantly,     implies which block hash is included in the signature material). If the `period` is     greater than 1 << 12, then it will be a factor of the times greater than 1<<12 that     `period` is.  |

**Returns:** *Uint8Array*

___

### `Static` with

▸ **with**(`Types`: TupleTypes): *[Constructor](_types_.constructor.md)‹[Tuple](../classes/_codec_tuple_.tuple.md)›*

*Inherited from [Tuple](../classes/_codec_tuple_.tuple.md).[with](../classes/_codec_tuple_.tuple.md#static-with)*

*Defined in [packages/types/src/codec/Tuple.ts:59](https://github.com/polkadot-js/api/blob/51a866fd35/packages/types/src/codec/Tuple.ts#L59)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | TupleTypes |

**Returns:** *[Constructor](_types_.constructor.md)‹[Tuple](../classes/_codec_tuple_.tuple.md)›*
