[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/babe/types"](../modules/_interfaces_babe_types_.md) › [VrfData](_interfaces_babe_types_.vrfdata.md)

# Interface: VrfData

Uint8Array, Codec

## Hierarchy

* Uint8Array

* [Codec](_types_.codec.md)

  ↳ **VrfData**

## Indexable

* \[ **index**: *number*\]: number

Uint8Array, Codec

## Index

### Properties

* [BYTES_PER_ELEMENT](_interfaces_babe_types_.vrfdata.md#bytes_per_element)
* [Uint8Array](_interfaces_babe_types_.vrfdata.md#uint8array)
* [__@toStringTag](_interfaces_babe_types_.vrfdata.md#__@tostringtag)
* [buffer](_interfaces_babe_types_.vrfdata.md#buffer)
* [byteLength](_interfaces_babe_types_.vrfdata.md#bytelength)
* [byteOffset](_interfaces_babe_types_.vrfdata.md#byteoffset)
* [encodedLength](_interfaces_babe_types_.vrfdata.md#encodedlength)
* [hash](_interfaces_babe_types_.vrfdata.md#hash)
* [isEmpty](_interfaces_babe_types_.vrfdata.md#isempty)
* [length](_interfaces_babe_types_.vrfdata.md#length)
* [registry](_interfaces_babe_types_.vrfdata.md#registry)

### Methods

* [__@iterator](_interfaces_babe_types_.vrfdata.md#__@iterator)
* [copyWithin](_interfaces_babe_types_.vrfdata.md#copywithin)
* [entries](_interfaces_babe_types_.vrfdata.md#entries)
* [eq](_interfaces_babe_types_.vrfdata.md#eq)
* [every](_interfaces_babe_types_.vrfdata.md#every)
* [fill](_interfaces_babe_types_.vrfdata.md#fill)
* [filter](_interfaces_babe_types_.vrfdata.md#filter)
* [find](_interfaces_babe_types_.vrfdata.md#find)
* [findIndex](_interfaces_babe_types_.vrfdata.md#findindex)
* [forEach](_interfaces_babe_types_.vrfdata.md#foreach)
* [includes](_interfaces_babe_types_.vrfdata.md#includes)
* [indexOf](_interfaces_babe_types_.vrfdata.md#indexof)
* [join](_interfaces_babe_types_.vrfdata.md#join)
* [keys](_interfaces_babe_types_.vrfdata.md#keys)
* [lastIndexOf](_interfaces_babe_types_.vrfdata.md#lastindexof)
* [map](_interfaces_babe_types_.vrfdata.md#map)
* [reduce](_interfaces_babe_types_.vrfdata.md#reduce)
* [reduceRight](_interfaces_babe_types_.vrfdata.md#reduceright)
* [reverse](_interfaces_babe_types_.vrfdata.md#reverse)
* [set](_interfaces_babe_types_.vrfdata.md#set)
* [slice](_interfaces_babe_types_.vrfdata.md#slice)
* [some](_interfaces_babe_types_.vrfdata.md#some)
* [sort](_interfaces_babe_types_.vrfdata.md#sort)
* [subarray](_interfaces_babe_types_.vrfdata.md#subarray)
* [toHex](_interfaces_babe_types_.vrfdata.md#tohex)
* [toJSON](_interfaces_babe_types_.vrfdata.md#tojson)
* [toLocaleString](_interfaces_babe_types_.vrfdata.md#tolocalestring)
* [toRawType](_interfaces_babe_types_.vrfdata.md#torawtype)
* [toString](_interfaces_babe_types_.vrfdata.md#tostring)
* [toU8a](_interfaces_babe_types_.vrfdata.md#tou8a)
* [values](_interfaces_babe_types_.vrfdata.md#values)

## Properties

###  BYTES_PER_ELEMENT

• **BYTES_PER_ELEMENT**: *number*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1988

The size in bytes of each element in the array.

___

###  Uint8Array

• **Uint8Array**: *Uint8ArrayConstructor*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2257

___

###  __@toStringTag

• **__@toStringTag**: *"UInt8Array"*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:276

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

*Inherited from [Codec](_types_.codec.md).[encodedLength](_types_.codec.md#encodedlength)*

*Defined in [packages/types/src/types.ts:75](https://github.com/polkadot-js/api/blob/8ba402963/packages/types/src/types.ts#L75)*

**`description`** The length of the value when encoded as a Uint8Array

___

###  hash

• **hash**: *[IHash](_types_.ihash.md)*

*Inherited from [Codec](_types_.codec.md).[hash](_types_.codec.md#hash)*

*Defined in [packages/types/src/types.ts:80](https://github.com/polkadot-js/api/blob/8ba402963/packages/types/src/types.ts#L80)*

**`description`** Returns a hash of the value

___

###  isEmpty

• **isEmpty**: *boolean*

*Inherited from [Codec](_types_.codec.md).[isEmpty](_types_.codec.md#isempty)*

*Defined in [packages/types/src/types.ts:85](https://github.com/polkadot-js/api/blob/8ba402963/packages/types/src/types.ts#L85)*

**`description`** Checks if the value is an empty value

___

###  length

• **length**: *number*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2102

The length of the array.

___

###  registry

• **registry**: *[Registry](_types_.registry.md)*

*Inherited from [Codec](_types_.codec.md).[registry](_types_.codec.md#registry)*

*Defined in [packages/types/src/types.ts:90](https://github.com/polkadot-js/api/blob/8ba402963/packages/types/src/types.ts#L90)*

**`description`** The registry associated with this object

## Methods

###  __@iterator

▸ **__@iterator**(): *IterableIterator‹number›*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:275

**Returns:** *IterableIterator‹number›*

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

###  entries

▸ **entries**(): *IterableIterator‹[number, number]›*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:279

Returns an array of key, value pairs for every entry in the array

**Returns:** *IterableIterator‹[number, number]›*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Codec](_types_.codec.md).[eq](_types_.codec.md#eq)*

*Defined in [packages/types/src/types.ts:95](https://github.com/polkadot-js/api/blob/8ba402963/packages/types/src/types.ts#L95)*

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

▸ (`value`: number, `index`: number, `array`: Uint8Array): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`index` | number |
`array` | Uint8Array |

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

▸ **filter**(`callbackfn`: function, `thisArg?`: any): *Uint8Array*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2043

Returns the elements of an array that meet the condition specified in a callback function.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The filter method calls
the callbackfn function one time for each element in the array.

▸ (`value`: number, `index`: number, `array`: Uint8Array): *any*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`index` | number |
`array` | Uint8Array |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function.
If thisArg is omitted, undefined is used as the this value.

**Returns:** *Uint8Array*

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

▸ (`value`: number, `index`: number, `obj`: Uint8Array): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`index` | number |
`obj` | Uint8Array |

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

▸ (`value`: number, `index`: number, `obj`: Uint8Array): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`index` | number |
`obj` | Uint8Array |

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

▸ (`value`: number, `index`: number, `array`: Uint8Array): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`index` | number |
`array` | Uint8Array |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function.
If thisArg is omitted, undefined is used as the this value.

**Returns:** *void*

___

###  includes

▸ **includes**(`searchElement`: number, `fromIndex?`: undefined | number): *boolean*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2016.array.include.d.ts:54

Determines whether an array includes a certain element, returning true or false as appropriate.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`searchElement` | number | The element to search for. |
`fromIndex?` | undefined &#124; number | The position in this array at which to begin searching for searchElement.  |

**Returns:** *boolean*

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

###  keys

▸ **keys**(): *IterableIterator‹number›*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:283

Returns an list of keys in the array

**Returns:** *IterableIterator‹number›*

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

▸ **map**(`callbackfn`: function, `thisArg?`: any): *Uint8Array*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2112

Calls a defined callback function on each element of an array, and returns an array that
contains the results.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The map method calls the
callbackfn function one time for each element in the array.

▸ (`value`: number, `index`: number, `array`: Uint8Array): *number*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`index` | number |
`array` | Uint8Array |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function.
If thisArg is omitted, undefined is used as the this value.

**Returns:** *Uint8Array*

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

▸ (`previousValue`: number, `currentValue`: number, `currentIndex`: number, `array`: Uint8Array): *number*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | number |
`currentValue` | number |
`currentIndex` | number |
`array` | Uint8Array |

**Returns:** *number*

▸ **reduce**(`callbackfn`: function, `initialValue`: number): *number*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2125

**Parameters:**

▪ **callbackfn**: *function*

▸ (`previousValue`: number, `currentValue`: number, `currentIndex`: number, `array`: Uint8Array): *number*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | number |
`currentValue` | number |
`currentIndex` | number |
`array` | Uint8Array |

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

▸ (`previousValue`: U, `currentValue`: number, `currentIndex`: number, `array`: Uint8Array): *U*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | U |
`currentValue` | number |
`currentIndex` | number |
`array` | Uint8Array |

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

▸ (`previousValue`: number, `currentValue`: number, `currentIndex`: number, `array`: Uint8Array): *number*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | number |
`currentValue` | number |
`currentIndex` | number |
`array` | Uint8Array |

**Returns:** *number*

▸ **reduceRight**(`callbackfn`: function, `initialValue`: number): *number*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2150

**Parameters:**

▪ **callbackfn**: *function*

▸ (`previousValue`: number, `currentValue`: number, `currentIndex`: number, `array`: Uint8Array): *number*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | number |
`currentValue` | number |
`currentIndex` | number |
`array` | Uint8Array |

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

▸ (`previousValue`: U, `currentValue`: number, `currentIndex`: number, `array`: Uint8Array): *U*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | U |
`currentValue` | number |
`currentIndex` | number |
`array` | Uint8Array |

▪ **initialValue**: *U*

If initialValue is specified, it is used as the initial value to start
the accumulation. The first call to the callbackfn function provides this value as an argument
instead of an array value.

**Returns:** *U*

___

###  reverse

▸ **reverse**(): *Uint8Array*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2167

Reverses the elements in an Array.

**Returns:** *Uint8Array*

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

▸ **slice**(`start?`: undefined | number, `end?`: undefined | number): *Uint8Array*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2181

Returns a section of an array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`start?` | undefined &#124; number | The beginning of the specified portion of the array. |
`end?` | undefined &#124; number | The end of the specified portion of the array. This is exclusive of the element at the index 'end'.  |

**Returns:** *Uint8Array*

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

▸ (`value`: number, `index`: number, `array`: Uint8Array): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`index` | number |
`array` | Uint8Array |

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

▸ **subarray**(`begin?`: undefined | number, `end?`: undefined | number): *Uint8Array*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2210

Gets a new Uint8Array view of the ArrayBuffer store for this array, referencing the elements
at begin, inclusive, up to end, exclusive.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`begin?` | undefined &#124; number | The index of the beginning of the array. |
`end?` | undefined &#124; number | The index of the end of the array.  |

**Returns:** *Uint8Array*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Inherited from [Codec](_types_.codec.md).[toHex](_types_.codec.md#tohex)*

*Defined in [packages/types/src/types.ts:100](https://github.com/polkadot-js/api/blob/8ba402963/packages/types/src/types.ts#L100)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

**Parameters:**

Name | Type |
------ | ------ |
`isLe?` | undefined &#124; false &#124; true |

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_.md#anyjson)*

*Inherited from [Codec](_types_.codec.md).[toJSON](_types_.codec.md#tojson)*

*Defined in [packages/types/src/types.ts:105](https://github.com/polkadot-js/api/blob/8ba402963/packages/types/src/types.ts#L105)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

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

*Inherited from [Codec](_types_.codec.md).[toRawType](_types_.codec.md#torawtype)*

*Defined in [packages/types/src/types.ts:110](https://github.com/polkadot-js/api/blob/8ba402963/packages/types/src/types.ts#L110)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from void*

*Overrides [Codec](_types_.codec.md).[toString](_types_.codec.md#tostring)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2220

Returns a string representation of an array.

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: [BareOpts](../modules/_types_.md#bareopts)): *Uint8Array*

*Inherited from [Codec](_types_.codec.md).[toU8a](_types_.codec.md#tou8a)*

*Defined in [packages/types/src/types.ts:121](https://github.com/polkadot-js/api/blob/8ba402963/packages/types/src/types.ts#L121)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | [BareOpts](../modules/_types_.md#bareopts) | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*

___

###  values

▸ **values**(): *IterableIterator‹number›*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:287

Returns an list of values in the array

**Returns:** *IterableIterator‹number›*
