[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types/interfaces"](../modules/_types_interfaces_.md) › [IHash](_types_interfaces_.ihash.md)

# Interface: IHash

## Hierarchy

  ↳ [IU8a](_types_interfaces_.iu8a.md)

  ↳ **IHash**

## Implemented by

* [H256](../classes/_primitive_h256_.h256.md)

## Indexable

* \[ **index**: *number*\]: number

## Index

### Properties

* [BYTES_PER_ELEMENT](_types_interfaces_.ihash.md#bytes_per_element)
* [buffer](_types_interfaces_.ihash.md#buffer)
* [byteLength](_types_interfaces_.ihash.md#bytelength)
* [byteOffset](_types_interfaces_.ihash.md#byteoffset)
* [encodedLength](_types_interfaces_.ihash.md#encodedlength)
* [hash](_types_interfaces_.ihash.md#hash)
* [isEmpty](_types_interfaces_.ihash.md#isempty)
* [length](_types_interfaces_.ihash.md#length)
* [registry](_types_interfaces_.ihash.md#registry)

### Methods

* [bitLength](_types_interfaces_.ihash.md#bitlength)
* [copyWithin](_types_interfaces_.ihash.md#copywithin)
* [eq](_types_interfaces_.ihash.md#eq)
* [every](_types_interfaces_.ihash.md#every)
* [fill](_types_interfaces_.ihash.md#fill)
* [filter](_types_interfaces_.ihash.md#filter)
* [find](_types_interfaces_.ihash.md#find)
* [findIndex](_types_interfaces_.ihash.md#findindex)
* [forEach](_types_interfaces_.ihash.md#foreach)
* [indexOf](_types_interfaces_.ihash.md#indexof)
* [join](_types_interfaces_.ihash.md#join)
* [lastIndexOf](_types_interfaces_.ihash.md#lastindexof)
* [map](_types_interfaces_.ihash.md#map)
* [reduce](_types_interfaces_.ihash.md#reduce)
* [reduceRight](_types_interfaces_.ihash.md#reduceright)
* [reverse](_types_interfaces_.ihash.md#reverse)
* [set](_types_interfaces_.ihash.md#set)
* [slice](_types_interfaces_.ihash.md#slice)
* [some](_types_interfaces_.ihash.md#some)
* [sort](_types_interfaces_.ihash.md#sort)
* [subarray](_types_interfaces_.ihash.md#subarray)
* [toHex](_types_interfaces_.ihash.md#tohex)
* [toHuman](_types_interfaces_.ihash.md#tohuman)
* [toJSON](_types_interfaces_.ihash.md#tojson)
* [toLocaleString](_types_interfaces_.ihash.md#tolocalestring)
* [toRawType](_types_interfaces_.ihash.md#torawtype)
* [toString](_types_interfaces_.ihash.md#tostring)
* [toU8a](_types_interfaces_.ihash.md#tou8a)

## Properties

###  BYTES_PER_ELEMENT

• **BYTES_PER_ELEMENT**: *number*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1988

The size in bytes of each element in the array.

___

###  buffer

• **buffer**: *ArrayBufferLike*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1993

The ArrayBuffer instance referenced by the array.

___

###  byteLength

• **byteLength**: *number*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1998

The length in bytes of the array.

___

###  byteOffset

• **byteOffset**: *number*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2003

The offset in bytes of the array.

___

###  encodedLength

• **encodedLength**: *number*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[encodedLength](_codec_compact_.compactencodable.md#encodedlength)*

*Defined in [packages/types/src/types/codec.ts:43](https://github.com/polkadot-js/api/blob/4a1e504ca2/packages/types/src/types/codec.ts#L43)*

**`description`** The length of the value when encoded as a Uint8Array

___

###  hash

• **hash**: *[IHash](_types_interfaces_.ihash.md)*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[hash](_codec_compact_.compactencodable.md#hash)*

*Defined in [packages/types/src/types/codec.ts:48](https://github.com/polkadot-js/api/blob/4a1e504ca2/packages/types/src/types/codec.ts#L48)*

**`description`** Returns a hash of the value

___

###  isEmpty

• **isEmpty**: *boolean*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[isEmpty](_codec_compact_.compactencodable.md#isempty)*

*Defined in [packages/types/src/types/codec.ts:53](https://github.com/polkadot-js/api/blob/4a1e504ca2/packages/types/src/types/codec.ts#L53)*

**`description`** Checks if the value is an empty value

___

###  length

• **length**: *number*

*Inherited from [IHash](_types_interfaces_.ihash.md).[length](_types_interfaces_.ihash.md#length)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2102

The length of the array.

___

###  registry

• **registry**: *[Registry](_types_registry_.registry.md)*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[registry](_codec_compact_.compactencodable.md#registry)*

*Defined in [packages/types/src/types/codec.ts:58](https://github.com/polkadot-js/api/blob/4a1e504ca2/packages/types/src/types/codec.ts#L58)*

**`description`** The registry associated with this object

## Methods

###  bitLength

▸ **bitLength**(): *number*

*Inherited from [IHash](_types_interfaces_.ihash.md).[bitLength](_types_interfaces_.ihash.md#bitlength)*

*Defined in [packages/types/src/types/interfaces.ts:57](https://github.com/polkadot-js/api/blob/4a1e504ca2/packages/types/src/types/interfaces.ts#L57)*

**Returns:** *number*

___

###  copyWithin

▸ **copyWithin**(`target`: number, `start`: number, `end?`: undefined | number): *this*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2014

Returns the this object after copying a section of the array identified by start and end
to the same array starting at position target

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`target` | number | If target is negative, it is treated as length+target where length is the length of the array. |
`start` | number | If start is negative, it is treated as length+start. If end is negative, it is treated as length+end. |
`end?` | undefined &#124; number | If not specified, length of the this object is used as its default value.  |

**Returns:** *this*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[eq](_codec_compact_.compactencodable.md#eq)*

*Defined in [packages/types/src/types/codec.ts:63](https://github.com/polkadot-js/api/blob/4a1e504ca2/packages/types/src/types/codec.ts#L63)*

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

Defined in node_modules/typescript/lib/lib.es5.d.ts:2024

Determines whether all the members of an array satisfy the specified test.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The every method calls
the callbackfn function for each element in the array until the callbackfn returns a value
which is coercible to the Boolean value false, or until the end of the array.

▸ (`value`: number, `index`: number, `array`: [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`index` | number |
`array` | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function.
If thisArg is omitted, undefined is used as the this value.

**Returns:** *boolean*

___

###  fill

▸ **fill**(`value`: number, `start?`: undefined | number, `end?`: undefined | number): *this*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2034

Returns the this object after filling the section identified by start and end with value

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | number | value to fill array section with |
`start?` | undefined &#124; number | index to start filling the array at. If start is negative, it is treated as length+start where length is the length of the array. |
`end?` | undefined &#124; number | index to stop filling the array at. If end is negative, it is treated as length+end.  |

**Returns:** *this*

___

###  filter

▸ **filter**(`callbackfn`: function, `thisArg?`: any): *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2043

Returns the elements of an array that meet the condition specified in a callback function.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The filter method calls
the callbackfn function one time for each element in the array.

▸ (`value`: number, `index`: number, `array`: [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)): *any*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`index` | number |
`array` | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function.
If thisArg is omitted, undefined is used as the this value.

**Returns:** *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

___

###  find

▸ **find**(`predicate`: function, `thisArg?`: any): *number | undefined*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2054

Returns the value of the first element in the array where predicate is true, and undefined
otherwise.

**Parameters:**

▪ **predicate**: *function*

find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found, find
immediately returns that element value. Otherwise, find returns undefined.

▸ (`value`: number, `index`: number, `obj`: [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`index` | number |
`obj` | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) |

▪`Optional`  **thisArg**: *any*

If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.

**Returns:** *number | undefined*

___

###  findIndex

▸ **findIndex**(`predicate`: function, `thisArg?`: any): *number*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2065

Returns the index of the first element in the array where predicate is true, and -1
otherwise.

**Parameters:**

▪ **predicate**: *function*

find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found,
findIndex immediately returns that element index. Otherwise, findIndex returns -1.

▸ (`value`: number, `index`: number, `obj`: [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`index` | number |
`obj` | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) |

▪`Optional`  **thisArg**: *any*

If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.

**Returns:** *number*

___

###  forEach

▸ **forEach**(`callbackfn`: function, `thisArg?`: any): *void*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2074

Performs the specified action for each element in an array.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. forEach calls the
callbackfn function one time for each element in the array.

▸ (`value`: number, `index`: number, `array`: [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`index` | number |
`array` | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function.
If thisArg is omitted, undefined is used as the this value.

**Returns:** *void*

___

###  indexOf

▸ **indexOf**(`searchElement`: number, `fromIndex?`: undefined | number): *number*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2082

Returns the index of the first occurrence of a value in an array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`searchElement` | number | The value to locate in the array. |
`fromIndex?` | undefined &#124; number | The array index at which to begin the search. If fromIndex is omitted, the  search starts at index 0.  |

**Returns:** *number*

___

###  join

▸ **join**(`separator?`: undefined | string): *string*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2089

Adds all the elements of an array separated by the specified separator string.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`separator?` | undefined &#124; string | A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.  |

**Returns:** *string*

___

###  lastIndexOf

▸ **lastIndexOf**(`searchElement`: number, `fromIndex?`: undefined | number): *number*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2097

Returns the index of the last occurrence of a value in an array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`searchElement` | number | The value to locate in the array. |
`fromIndex?` | undefined &#124; number | The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.  |

**Returns:** *number*

___

###  map

▸ **map**(`callbackfn`: function, `thisArg?`: any): *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2112

Calls a defined callback function on each element of an array, and returns an array that
contains the results.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The map method calls the
callbackfn function one time for each element in the array.

▸ (`value`: number, `index`: number, `array`: [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)): *number*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`index` | number |
`array` | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function.
If thisArg is omitted, undefined is used as the this value.

**Returns:** *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

___

###  reduce

▸ **reduce**(`callbackfn`: function): *number*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2124

Calls the specified callback function for all the elements in an array. The return value of
the callback function is the accumulated result, and is provided as an argument in the next
call to the callback function.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to four arguments. The reduce method calls the
callbackfn function one time for each element in the array.

▸ (`previousValue`: number, `currentValue`: number, `currentIndex`: number, `array`: [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)): *number*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | number |
`currentValue` | number |
`currentIndex` | number |
`array` | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) |

**Returns:** *number*

▸ **reduce**(`callbackfn`: function, `initialValue`: number): *number*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2125

**Parameters:**

▪ **callbackfn**: *function*

▸ (`previousValue`: number, `currentValue`: number, `currentIndex`: number, `array`: [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)): *number*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | number |
`currentValue` | number |
`currentIndex` | number |
`array` | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) |

▪ **initialValue**: *number*

**Returns:** *number*

▸ **reduce**<**U**>(`callbackfn`: function, `initialValue`: U): *U*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2137

Calls the specified callback function for all the elements in an array. The return value of
the callback function is the accumulated result, and is provided as an argument in the next
call to the callback function.

**Type parameters:**

▪ **U**

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to four arguments. The reduce method calls the
callbackfn function one time for each element in the array.

▸ (`previousValue`: U, `currentValue`: number, `currentIndex`: number, `array`: [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)): *U*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | U |
`currentValue` | number |
`currentIndex` | number |
`array` | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) |

▪ **initialValue**: *U*

If initialValue is specified, it is used as the initial value to start
the accumulation. The first call to the callbackfn function provides this value as an argument
instead of an array value.

**Returns:** *U*

___

###  reduceRight

▸ **reduceRight**(`callbackfn`: function): *number*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2149

Calls the specified callback function for all the elements in an array, in descending order.
The return value of the callback function is the accumulated result, and is provided as an
argument in the next call to the callback function.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to four arguments. The reduceRight method calls
the callbackfn function one time for each element in the array.

▸ (`previousValue`: number, `currentValue`: number, `currentIndex`: number, `array`: [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)): *number*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | number |
`currentValue` | number |
`currentIndex` | number |
`array` | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) |

**Returns:** *number*

▸ **reduceRight**(`callbackfn`: function, `initialValue`: number): *number*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2150

**Parameters:**

▪ **callbackfn**: *function*

▸ (`previousValue`: number, `currentValue`: number, `currentIndex`: number, `array`: [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)): *number*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | number |
`currentValue` | number |
`currentIndex` | number |
`array` | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) |

▪ **initialValue**: *number*

**Returns:** *number*

▸ **reduceRight**<**U**>(`callbackfn`: function, `initialValue`: U): *U*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2162

Calls the specified callback function for all the elements in an array, in descending order.
The return value of the callback function is the accumulated result, and is provided as an
argument in the next call to the callback function.

**Type parameters:**

▪ **U**

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to four arguments. The reduceRight method calls
the callbackfn function one time for each element in the array.

▸ (`previousValue`: U, `currentValue`: number, `currentIndex`: number, `array`: [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)): *U*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | U |
`currentValue` | number |
`currentIndex` | number |
`array` | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) |

▪ **initialValue**: *U*

If initialValue is specified, it is used as the initial value to start
the accumulation. The first call to the callbackfn function provides this value as an argument
instead of an array value.

**Returns:** *U*

___

###  reverse

▸ **reverse**(): *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2167

Reverses the elements in an Array.

**Returns:** *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

___

###  set

▸ **set**(`array`: ArrayLike‹number›, `offset?`: undefined | number): *void*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2174

Sets a value or an array of values.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | ArrayLike‹number› | A typed or untyped array of values to set. |
`offset?` | undefined &#124; number | The index in the current array at which the values are to be written.  |

**Returns:** *void*

___

###  slice

▸ **slice**(`start?`: undefined | number, `end?`: undefined | number): *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2181

Returns a section of an array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`start?` | undefined &#124; number | The beginning of the specified portion of the array. |
`end?` | undefined &#124; number | The end of the specified portion of the array. This is exclusive of the element at the index 'end'.  |

**Returns:** *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

___

###  some

▸ **some**(`callbackfn`: function, `thisArg?`: any): *boolean*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2191

Determines whether the specified callback function returns true for any element of an array.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The some method calls
the callbackfn function for each element in the array until the callbackfn returns a value
which is coercible to the Boolean value true, or until the end of the array.

▸ (`value`: number, `index`: number, `array`: [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`index` | number |
`array` | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function.
If thisArg is omitted, undefined is used as the this value.

**Returns:** *boolean*

___

###  sort

▸ **sort**(`compareFn?`: undefined | function): *this*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2202

Sorts an array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`compareFn?` | undefined &#124; function | Function used to determine the order of the elements. It is expected to return a negative value if first argument is less than second argument, zero if they're equal and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order. ```ts [11,2,22,1].sort((a, b) => a - b) ```  |

**Returns:** *this*

___

###  subarray

▸ **subarray**(`begin?`: undefined | number, `end?`: undefined | number): *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

*Inherited from [IHash](_types_interfaces_.ihash.md).[subarray](_types_interfaces_.ihash.md#subarray)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2210

Gets a new Uint8Array view of the ArrayBuffer store for this array, referencing the elements
at begin, inclusive, up to end, exclusive.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`begin?` | undefined &#124; number | The index of the beginning of the array. |
`end?` | undefined &#124; number | The index of the end of the array.  |

**Returns:** *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[toHex](_codec_compact_.compactencodable.md#tohex)*

*Defined in [packages/types/src/types/codec.ts:68](https://github.com/polkadot-js/api/blob/4a1e504ca2/packages/types/src/types/codec.ts#L68)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

**Parameters:**

Name | Type |
------ | ------ |
`isLe?` | undefined &#124; false &#124; true |

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(`isExtended?`: undefined | false | true): *any*

*Inherited from [IHash](_types_interfaces_.ihash.md).[toHuman](_types_interfaces_.ihash.md#tohuman)*

*Overrides [CompactEncodable](_codec_compact_.compactencodable.md).[toHuman](_codec_compact_.compactencodable.md#tohuman)*

*Defined in [packages/types/src/types/interfaces.ts:58](https://github.com/polkadot-js/api/blob/4a1e504ca2/packages/types/src/types/interfaces.ts#L58)*

**Parameters:**

Name | Type |
------ | ------ |
`isExtended?` | undefined &#124; false &#124; true |

**Returns:** *any*

___

###  toJSON

▸ **toJSON**(): *any*

*Inherited from [IHash](_types_interfaces_.ihash.md).[toJSON](_types_interfaces_.ihash.md#tojson)*

*Overrides [CompactEncodable](_codec_compact_.compactencodable.md).[toJSON](_codec_compact_.compactencodable.md#tojson)*

*Defined in [packages/types/src/types/interfaces.ts:59](https://github.com/polkadot-js/api/blob/4a1e504ca2/packages/types/src/types/interfaces.ts#L59)*

**Returns:** *any*

___

###  toLocaleString

▸ **toLocaleString**(): *string*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2215

Converts a number to a string by using the current locale.

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[toRawType](_codec_compact_.compactencodable.md#torawtype)*

*Defined in [packages/types/src/types/codec.ts:83](https://github.com/polkadot-js/api/blob/4a1e504ca2/packages/types/src/types/codec.ts#L83)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [IHash](_types_interfaces_.ihash.md).[toString](_types_interfaces_.ihash.md#tostring)*

*Overrides [CompactEncodable](_codec_compact_.compactencodable.md).[toString](_codec_compact_.compactencodable.md#tostring)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2220

Returns a string representation of an array.

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: [BareOpts](../modules/_types_helpers_.md#bareopts)): *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[toU8a](_codec_compact_.compactencodable.md#tou8a)*

*Defined in [packages/types/src/types/codec.ts:94](https://github.com/polkadot-js/api/blob/4a1e504ca2/packages/types/src/types/codec.ts#L94)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | [BareOpts](../modules/_types_helpers_.md#bareopts) | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*
