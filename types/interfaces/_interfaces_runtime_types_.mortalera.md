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

* [birth](_interfaces_runtime_types_.mortalera.md#birth)
* [concat](_interfaces_runtime_types_.mortalera.md#concat)
* [death](_interfaces_runtime_types_.mortalera.md#death)
* [eq](_interfaces_runtime_types_.mortalera.md#eq)
* [every](_interfaces_runtime_types_.mortalera.md#every)
* [filter](_interfaces_runtime_types_.mortalera.md#filter)
* [forEach](_interfaces_runtime_types_.mortalera.md#foreach)
* [includes](_interfaces_runtime_types_.mortalera.md#includes)
* [indexOf](_interfaces_runtime_types_.mortalera.md#indexof)
* [join](_interfaces_runtime_types_.mortalera.md#join)
* [lastIndexOf](_interfaces_runtime_types_.mortalera.md#lastindexof)
* [map](_interfaces_runtime_types_.mortalera.md#map)
* [pop](_interfaces_runtime_types_.mortalera.md#pop)
* [push](_interfaces_runtime_types_.mortalera.md#push)
* [reduce](_interfaces_runtime_types_.mortalera.md#reduce)
* [reduceRight](_interfaces_runtime_types_.mortalera.md#reduceright)
* [reverse](_interfaces_runtime_types_.mortalera.md#reverse)
* [shift](_interfaces_runtime_types_.mortalera.md#shift)
* [slice](_interfaces_runtime_types_.mortalera.md#slice)
* [some](_interfaces_runtime_types_.mortalera.md#some)
* [sort](_interfaces_runtime_types_.mortalera.md#sort)
* [splice](_interfaces_runtime_types_.mortalera.md#splice)
* [toArray](_interfaces_runtime_types_.mortalera.md#toarray)
* [toHex](_interfaces_runtime_types_.mortalera.md#tohex)
* [toJSON](_interfaces_runtime_types_.mortalera.md#tojson)
* [toLocaleString](_interfaces_runtime_types_.mortalera.md#tolocalestring)
* [toRawType](_interfaces_runtime_types_.mortalera.md#torawtype)
* [toString](_interfaces_runtime_types_.mortalera.md#tostring)
* [toU8a](_interfaces_runtime_types_.mortalera.md#tou8a)
* [unshift](_interfaces_runtime_types_.mortalera.md#unshift)
* [with](_interfaces_runtime_types_.mortalera.md#static-with)

## Constructors

###  constructor

\+ **new MortalEra**(`registry`: [Registry](_types_.registry.md), `value?`: MortalMethod | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) | number[] | string): *[MortalEra](_interfaces_runtime_types_.mortalera.md)*

*Inherited from [MortalEra](_interfaces_runtime_types_.mortalera.md).[constructor](_interfaces_runtime_types_.mortalera.md#constructor)*

*Overrides [Tuple](../classes/_codec_tuple_.tuple.md).[constructor](../classes/_codec_tuple_.tuple.md#constructor)*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts:50](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts#L50)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](_types_.registry.md) |
`value?` | MortalMethod &#124; [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) &#124; number[] &#124; string |

**Returns:** *[MortalEra](_interfaces_runtime_types_.mortalera.md)*

## Properties

###  registry

• **registry**: *[Registry](_types_.registry.md)*

*Inherited from [AbstractArray](../classes/_codec_abstractarray_.abstractarray.md).[registry](../classes/_codec_abstractarray_.abstractarray.md#registry)*

*Defined in [packages/types/src/codec/AbstractArray.ts:22](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/AbstractArray.ts#L22)*

## Accessors

###  Types

• **get Types**(): *string[]*

*Inherited from [Tuple](../classes/_codec_tuple_.tuple.md).[Types](../classes/_codec_tuple_.tuple.md#types)*

*Defined in [packages/types/src/codec/Tuple.ts:81](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/Tuple.ts#L81)*

**`description`** The types definition of the tuple

**Returns:** *string[]*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [MortalEra](_interfaces_runtime_types_.mortalera.md).[encodedLength](_interfaces_runtime_types_.mortalera.md#encodedlength)*

*Overrides [Tuple](../classes/_codec_tuple_.tuple.md).[encodedLength](../classes/_codec_tuple_.tuple.md#encodedlength)*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts:105](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts#L105)*

**`description`** Encoded length for mortals occupy 2 bytes, different from the actual Tuple since it is encoded. This is a shortcut fro `toU8a().length`

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](_types_.ihash.md)*

*Inherited from [AbstractArray](../classes/_codec_abstractarray_.abstractarray.md).[hash](../classes/_codec_abstractarray_.abstractarray.md#hash)*

*Defined in [packages/types/src/codec/AbstractArray.ts:42](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/AbstractArray.ts#L42)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [AbstractArray](../classes/_codec_abstractarray_.abstractarray.md).[isEmpty](../classes/_codec_abstractarray_.abstractarray.md#isempty)*

*Defined in [packages/types/src/codec/AbstractArray.ts:49](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/AbstractArray.ts#L49)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Inherited from [AbstractArray](../classes/_codec_abstractarray_.abstractarray.md).[length](../classes/_codec_abstractarray_.abstractarray.md#length)*

*Overrides [AnyJsonArray](_types_.anyjsonarray.md).[length](_types_.anyjsonarray.md#length)*

*Defined in [packages/types/src/codec/AbstractArray.ts:56](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/AbstractArray.ts#L56)*

**`description`** The length of the value

**Returns:** *number*

___

###  period

• **get period**(): *[U64](../classes/_primitive_u64_.u64.md)*

*Inherited from [MortalEra](_interfaces_runtime_types_.mortalera.md).[period](_interfaces_runtime_types_.mortalera.md#period)*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts:112](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts#L112)*

**`description`** The period of this Mortal wraps as a [U64](../classes/_primitive_u64_.u64.md)

**Returns:** *[U64](../classes/_primitive_u64_.u64.md)*

___

###  phase

• **get phase**(): *[U64](../classes/_primitive_u64_.u64.md)*

*Inherited from [MortalEra](_interfaces_runtime_types_.mortalera.md).[phase](_interfaces_runtime_types_.mortalera.md#phase)*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts:119](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts#L119)*

**`description`** The phase of this Mortal wraps as a [U64](../classes/_primitive_u64_.u64.md)

**Returns:** *[U64](../classes/_primitive_u64_.u64.md)*

## Methods

###  birth

▸ **birth**(`current`: BN | number): *number*

*Inherited from [MortalEra](_interfaces_runtime_types_.mortalera.md).[birth](_interfaces_runtime_types_.mortalera.md#birth)*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts:156](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts#L156)*

**`description`** Get the block number of the start of the era whose properties this object describes that `current` belongs to.

**Parameters:**

Name | Type |
------ | ------ |
`current` | BN &#124; number |

**Returns:** *number*

___

###  concat

▸ **concat**(...`items`: ConcatArray‹[Codec](_types_.codec.md)›[]): *[Codec](_types_.codec.md)[]*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1237

Combines two or more arrays.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...items` | ConcatArray‹[Codec](_types_.codec.md)›[] | Additional items to add to the end of array1.  |

**Returns:** *[Codec](_types_.codec.md)[]*

▸ **concat**(...`items`: T | ConcatArray‹T›[]): *[Codec](_types_.codec.md)[]*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1242

Combines two or more arrays.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...items` | T &#124; ConcatArray‹T›[] | Additional items to add to the end of array1.  |

**Returns:** *[Codec](_types_.codec.md)[]*

___

###  death

▸ **death**(`current`: BN | number): *number*

*Inherited from [MortalEra](_interfaces_runtime_types_.mortalera.md).[death](_interfaces_runtime_types_.mortalera.md#death)*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts:168](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts#L168)*

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

*Defined in [packages/types/src/codec/AbstractArray.ts:64](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/AbstractArray.ts#L64)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  every

▸ **every**(`callbackfn`: function, `thisArg?`: any): *boolean*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1310

Determines whether all the members of an array satisfy the specified test.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The every method calls
the callbackfn function for each element in the array until the callbackfn returns a value
which is coercible to the Boolean value false, or until the end of the array.

▸ (`value`: [Codec](_types_.codec.md), `index`: number, `array`: [Codec](_types_.codec.md)[]): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Codec](_types_.codec.md) |
`index` | number |
`array` | [Codec](_types_.codec.md)[] |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function.
If thisArg is omitted, undefined is used as the this value.

**Returns:** *boolean*

___

###  filter

▸ **filter**(`callbackfn`: function, `thisArg?`: any): *[Codec](_types_.codec.md)[]*

*Inherited from [AbstractArray](../classes/_codec_abstractarray_.abstractarray.md).[filter](../classes/_codec_abstractarray_.abstractarray.md#filter)*

*Overrides [AnyJsonArray](_types_.anyjsonarray.md).[filter](_types_.anyjsonarray.md#filter)*

*Defined in [packages/types/src/codec/AbstractArray.ts:134](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/AbstractArray.ts#L134)*

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

###  forEach

▸ **forEach**(`callbackfn`: function, `thisArg?`: any): *void*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1325

Performs the specified action for each element in an array.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.

▸ (`value`: [Codec](_types_.codec.md), `index`: number, `array`: [Codec](_types_.codec.md)[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Codec](_types_.codec.md) |
`index` | number |
`array` | [Codec](_types_.codec.md)[] |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

**Returns:** *void*

___

###  includes

▸ **includes**(`check`: any): *boolean*

*Inherited from [AbstractArray](../classes/_codec_abstractarray_.abstractarray.md).[includes](../classes/_codec_abstractarray_.abstractarray.md#includes)*

*Defined in [packages/types/src/codec/AbstractArray.ts:150](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/AbstractArray.ts#L150)*

**`description`** Checks if the array includes a specific value

**Parameters:**

Name | Type |
------ | ------ |
`check` | any |

**Returns:** *boolean*

___

###  indexOf

▸ **indexOf**(`searchElement`: [Codec](_types_.codec.md), `fromIndex?`: undefined | number): *number*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1295

Returns the index of the first occurrence of a value in an array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`searchElement` | [Codec](_types_.codec.md) | The value to locate in the array. |
`fromIndex?` | undefined &#124; number | The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.  |

**Returns:** *number*

___

###  join

▸ **join**(`separator?`: undefined | string): *string*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1247

Adds all the elements of an array separated by the specified separator string.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`separator?` | undefined &#124; string | A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.  |

**Returns:** *string*

___

###  lastIndexOf

▸ **lastIndexOf**(`searchElement`: [Codec](_types_.codec.md), `fromIndex?`: undefined | number): *number*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1301

Returns the index of the last occurrence of a specified value in an array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`searchElement` | [Codec](_types_.codec.md) | The value to locate in the array. |
`fromIndex?` | undefined &#124; number | The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array.  |

**Returns:** *number*

___

###  map

▸ **map**<**U**>(`callbackfn`: function, `thisArg?`: any): *U[]*

*Inherited from [AbstractArray](../classes/_codec_abstractarray_.abstractarray.md).[map](../classes/_codec_abstractarray_.abstractarray.md#map)*

*Overrides [AnyJsonArray](_types_.anyjsonarray.md).[map](_types_.anyjsonarray.md#map)*

*Defined in [packages/types/src/codec/AbstractArray.ts:143](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/AbstractArray.ts#L143)*

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

###  pop

▸ **pop**(): *[Codec](_types_.codec.md) | undefined*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1227

Removes the last element from an array and returns it.

**Returns:** *[Codec](_types_.codec.md) | undefined*

___

###  push

▸ **push**(...`items`: [Codec](_types_.codec.md)[]): *number*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1232

Appends new elements to an array, and returns the new length of the array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...items` | [Codec](_types_.codec.md)[] | New elements of the Array.  |

**Returns:** *number*

___

###  reduce

▸ **reduce**(`callbackfn`: function): *[Codec](_types_.codec.md)*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1349

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.

▸ (`previousValue`: [Codec](_types_.codec.md), `currentValue`: [Codec](_types_.codec.md), `currentIndex`: number, `array`: [Codec](_types_.codec.md)[]): *[Codec](_types_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | [Codec](_types_.codec.md) |
`currentValue` | [Codec](_types_.codec.md) |
`currentIndex` | number |
`array` | [Codec](_types_.codec.md)[] |

**Returns:** *[Codec](_types_.codec.md)*

▸ **reduce**(`callbackfn`: function, `initialValue`: [Codec](_types_.codec.md)): *[Codec](_types_.codec.md)*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1350

**Parameters:**

▪ **callbackfn**: *function*

▸ (`previousValue`: [Codec](_types_.codec.md), `currentValue`: [Codec](_types_.codec.md), `currentIndex`: number, `array`: [Codec](_types_.codec.md)[]): *[Codec](_types_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | [Codec](_types_.codec.md) |
`currentValue` | [Codec](_types_.codec.md) |
`currentIndex` | number |
`array` | [Codec](_types_.codec.md)[] |

▪ **initialValue**: *[Codec](_types_.codec.md)*

**Returns:** *[Codec](_types_.codec.md)*

▸ **reduce**<**U**>(`callbackfn`: function, `initialValue`: U): *U*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1356

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**Type parameters:**

▪ **U**

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.

▸ (`previousValue`: U, `currentValue`: [Codec](_types_.codec.md), `currentIndex`: number, `array`: [Codec](_types_.codec.md)[]): *U*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | U |
`currentValue` | [Codec](_types_.codec.md) |
`currentIndex` | number |
`array` | [Codec](_types_.codec.md)[] |

▪ **initialValue**: *U*

If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.

**Returns:** *U*

___

###  reduceRight

▸ **reduceRight**(`callbackfn`: function): *[Codec](_types_.codec.md)*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1362

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.

▸ (`previousValue`: [Codec](_types_.codec.md), `currentValue`: [Codec](_types_.codec.md), `currentIndex`: number, `array`: [Codec](_types_.codec.md)[]): *[Codec](_types_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | [Codec](_types_.codec.md) |
`currentValue` | [Codec](_types_.codec.md) |
`currentIndex` | number |
`array` | [Codec](_types_.codec.md)[] |

**Returns:** *[Codec](_types_.codec.md)*

▸ **reduceRight**(`callbackfn`: function, `initialValue`: [Codec](_types_.codec.md)): *[Codec](_types_.codec.md)*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1363

**Parameters:**

▪ **callbackfn**: *function*

▸ (`previousValue`: [Codec](_types_.codec.md), `currentValue`: [Codec](_types_.codec.md), `currentIndex`: number, `array`: [Codec](_types_.codec.md)[]): *[Codec](_types_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | [Codec](_types_.codec.md) |
`currentValue` | [Codec](_types_.codec.md) |
`currentIndex` | number |
`array` | [Codec](_types_.codec.md)[] |

▪ **initialValue**: *[Codec](_types_.codec.md)*

**Returns:** *[Codec](_types_.codec.md)*

▸ **reduceRight**<**U**>(`callbackfn`: function, `initialValue`: U): *U*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1369

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**Type parameters:**

▪ **U**

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.

▸ (`previousValue`: U, `currentValue`: [Codec](_types_.codec.md), `currentIndex`: number, `array`: [Codec](_types_.codec.md)[]): *U*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | U |
`currentValue` | [Codec](_types_.codec.md) |
`currentIndex` | number |
`array` | [Codec](_types_.codec.md)[] |

▪ **initialValue**: *U*

If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.

**Returns:** *U*

___

###  reverse

▸ **reverse**(): *[Codec](_types_.codec.md)[]*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1251

Reverses the elements in an Array.

**Returns:** *[Codec](_types_.codec.md)[]*

___

###  shift

▸ **shift**(): *[Codec](_types_.codec.md) | undefined*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1255

Removes the first element from an array and returns it.

**Returns:** *[Codec](_types_.codec.md) | undefined*

___

###  slice

▸ **slice**(`start?`: undefined | number, `end?`: undefined | number): *[Codec](_types_.codec.md)[]*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1261

Returns a section of an array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`start?` | undefined &#124; number | The beginning of the specified portion of the array. |
`end?` | undefined &#124; number | The end of the specified portion of the array. This is exclusive of the element at the index 'end'.  |

**Returns:** *[Codec](_types_.codec.md)[]*

___

###  some

▸ **some**(`callbackfn`: function, `thisArg?`: any): *boolean*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1319

Determines whether the specified callback function returns true for any element of an array.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The some method calls
the callbackfn function for each element in the array until the callbackfn returns a value
which is coercible to the Boolean value true, or until the end of the array.

▸ (`value`: [Codec](_types_.codec.md), `index`: number, `array`: [Codec](_types_.codec.md)[]): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Codec](_types_.codec.md) |
`index` | number |
`array` | [Codec](_types_.codec.md)[] |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function.
If thisArg is omitted, undefined is used as the this value.

**Returns:** *boolean*

___

###  sort

▸ **sort**(`compareFn?`: undefined | function): *this*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1271

Sorts an array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`compareFn?` | undefined &#124; function | Function used to determine the order of the elements. It is expected to return a negative value if first argument is less than second argument, zero if they're equal and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order. ```ts [11,2,22,1].sort((a, b) => a - b) ```  |

**Returns:** *this*

___

###  splice

▸ **splice**(`start`: number, `deleteCount?`: undefined | number): *[Codec](_types_.codec.md)[]*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1277

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`start` | number | The zero-based location in the array from which to start removing elements. |
`deleteCount?` | undefined &#124; number | The number of elements to remove.  |

**Returns:** *[Codec](_types_.codec.md)[]*

▸ **splice**(`start`: number, `deleteCount`: number, ...`items`: [Codec](_types_.codec.md)[]): *[Codec](_types_.codec.md)[]*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1284

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`start` | number | The zero-based location in the array from which to start removing elements. |
`deleteCount` | number | The number of elements to remove. |
`...items` | [Codec](_types_.codec.md)[] | Elements to insert into the array in place of the deleted elements.  |

**Returns:** *[Codec](_types_.codec.md)[]*

___

###  toArray

▸ **toArray**(): *[Codec](_types_.codec.md)[]*

*Inherited from [AbstractArray](../classes/_codec_abstractarray_.abstractarray.md).[toArray](../classes/_codec_abstractarray_.abstractarray.md#toarray)*

*Defined in [packages/types/src/codec/AbstractArray.ts:71](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/AbstractArray.ts#L71)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](_types_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [AbstractArray](../classes/_codec_abstractarray_.abstractarray.md).[toHex](../classes/_codec_abstractarray_.abstractarray.md#tohex)*

*Defined in [packages/types/src/codec/AbstractArray.ts:78](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/AbstractArray.ts#L78)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *any*

*Inherited from [MortalEra](_interfaces_runtime_types_.mortalera.md).[toJSON](_interfaces_runtime_types_.mortalera.md#tojson)*

*Overrides [AbstractArray](../classes/_codec_abstractarray_.abstractarray.md).[toJSON](../classes/_codec_abstractarray_.abstractarray.md#tojson)*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts:126](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts#L126)*

**`description`** Returns a JSON representation of the actual value

**Returns:** *any*

___

###  toLocaleString

▸ **toLocaleString**(): *string*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1223

Returns a string representation of an array. The elements are converted to string using their toLocalString methods.

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Tuple](../classes/_codec_tuple_.tuple.md).[toRawType](../classes/_codec_tuple_.tuple.md#torawtype)*

*Overrides [AbstractArray](../classes/_codec_abstractarray_.abstractarray.md).[toRawType](../classes/_codec_abstractarray_.abstractarray.md#abstract-torawtype)*

*Defined in [packages/types/src/codec/Tuple.ts:90](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/Tuple.ts#L90)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Tuple](../classes/_codec_tuple_.tuple.md).[toString](../classes/_codec_tuple_.tuple.md#tostring)*

*Overrides [AbstractArray](../classes/_codec_abstractarray_.abstractarray.md).[toString](../classes/_codec_abstractarray_.abstractarray.md#tostring)*

*Defined in [packages/types/src/codec/Tuple.ts:103](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/Tuple.ts#L103)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

*Inherited from [MortalEra](_interfaces_runtime_types_.mortalera.md).[toU8a](_interfaces_runtime_types_.mortalera.md#tou8a)*

*Overrides [Tuple](../classes/_codec_tuple_.tuple.md).[toU8a](../classes/_codec_tuple_.tuple.md#tou8a)*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts:141](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts#L141)*

**`description`** Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal) Period and phase are encoded:   - The period of validity from the block hash found in the signing material.   - The phase in the period that this transaction's lifetime begins (and, importantly,     implies which block hash is included in the signature material). If the `period` is     greater than 1 << 12, then it will be a factor of the times greater than 1<<12 that     `period` is.  |

**Returns:** *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

___

###  unshift

▸ **unshift**(...`items`: [Codec](_types_.codec.md)[]): *number*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1289

Inserts new elements at the start of an array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...items` | [Codec](_types_.codec.md)[] | Elements to insert at the start of the Array.  |

**Returns:** *number*

___

### `Static` with

▸ **with**(`Types`: TupleTypes): *[Constructor](_types_.constructor.md)‹[Tuple](../classes/_codec_tuple_.tuple.md)›*

*Inherited from [Tuple](../classes/_codec_tuple_.tuple.md).[with](../classes/_codec_tuple_.tuple.md#static-with)*

*Defined in [packages/types/src/codec/Tuple.ts:59](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/Tuple.ts#L59)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | TupleTypes |

**Returns:** *[Constructor](_types_.constructor.md)‹[Tuple](../classes/_codec_tuple_.tuple.md)›*
