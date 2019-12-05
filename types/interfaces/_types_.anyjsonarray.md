[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types"](../modules/_types_.md) › [AnyJsonArray](_types_.anyjsonarray.md)

# Interface: AnyJsonArray

## Hierarchy

* Array‹[AnyJson](../modules/_types_.md#anyjson)›

  ↳ **AnyJsonArray**

## Indexable

* \[ **n**: *number*\]: [AnyJson](../modules/_types_.md#anyjson)

## Index

### Properties

* [Array](_types_.anyjsonarray.md#array)
* [length](_types_.anyjsonarray.md#length)

### Methods

* [__@iterator](_types_.anyjsonarray.md#__@iterator)
* [__@unscopables](_types_.anyjsonarray.md#__@unscopables)
* [concat](_types_.anyjsonarray.md#concat)
* [copyWithin](_types_.anyjsonarray.md#copywithin)
* [entries](_types_.anyjsonarray.md#entries)
* [every](_types_.anyjsonarray.md#every)
* [fill](_types_.anyjsonarray.md#fill)
* [filter](_types_.anyjsonarray.md#filter)
* [find](_types_.anyjsonarray.md#find)
* [findIndex](_types_.anyjsonarray.md#findindex)
* [flat](_types_.anyjsonarray.md#flat)
* [flatMap](_types_.anyjsonarray.md#flatmap)
* [forEach](_types_.anyjsonarray.md#foreach)
* [includes](_types_.anyjsonarray.md#includes)
* [indexOf](_types_.anyjsonarray.md#indexof)
* [join](_types_.anyjsonarray.md#join)
* [keys](_types_.anyjsonarray.md#keys)
* [lastIndexOf](_types_.anyjsonarray.md#lastindexof)
* [map](_types_.anyjsonarray.md#map)
* [pop](_types_.anyjsonarray.md#pop)
* [push](_types_.anyjsonarray.md#push)
* [reduce](_types_.anyjsonarray.md#reduce)
* [reduceRight](_types_.anyjsonarray.md#reduceright)
* [reverse](_types_.anyjsonarray.md#reverse)
* [shift](_types_.anyjsonarray.md#shift)
* [slice](_types_.anyjsonarray.md#slice)
* [some](_types_.anyjsonarray.md#some)
* [sort](_types_.anyjsonarray.md#sort)
* [splice](_types_.anyjsonarray.md#splice)
* [toLocaleString](_types_.anyjsonarray.md#tolocalestring)
* [toString](_types_.anyjsonarray.md#tostring)
* [unshift](_types_.anyjsonarray.md#unshift)
* [values](_types_.anyjsonarray.md#values)

## Properties

###  Array

• **Array**: *ArrayConstructor*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1385

___

###  length

• **length**: *number*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1215

Gets or sets the length of the array. This is a number one higher than the highest element defined in an array.

## Methods

###  __@iterator

▸ **__@iterator**(): *IterableIterator‹[AnyJson](../modules/_types_.md#anyjson)›*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:60

Iterator

**Returns:** *IterableIterator‹[AnyJson](../modules/_types_.md#anyjson)›*

___

###  __@unscopables

▸ **__@unscopables**(): *object*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:94

Returns an object whose properties have the value 'true'
when they will be absent when used in a 'with' statement.

**Returns:** *object*

___

###  concat

▸ **concat**(...`items`: ConcatArray‹[AnyJson](../modules/_types_.md#anyjson)›[]): *[AnyJson](../modules/_types_.md#anyjson)[]*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1237

Combines two or more arrays.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...items` | ConcatArray‹[AnyJson](../modules/_types_.md#anyjson)›[] | Additional items to add to the end of array1.  |

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)[]*

▸ **concat**(...`items`: T | ConcatArray‹T›[]): *[AnyJson](../modules/_types_.md#anyjson)[]*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1242

Combines two or more arrays.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...items` | T &#124; ConcatArray‹T›[] | Additional items to add to the end of array1.  |

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)[]*

___

###  copyWithin

▸ **copyWithin**(`target`: number, `start`: number, `end?`: undefined | number): *this*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.core.d.ts:64

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

▸ **entries**(): *IterableIterator‹[number, [AnyJson](../modules/_types_.md#anyjson)]›*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:65

Returns an iterable of key, value pairs for every entry in the array

**Returns:** *IterableIterator‹[number, [AnyJson](../modules/_types_.md#anyjson)]›*

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

▸ (`value`: [AnyJson](../modules/_types_.md#anyjson), `index`: number, `array`: [AnyJson](../modules/_types_.md#anyjson)[]): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [AnyJson](../modules/_types_.md#anyjson) |
`index` | number |
`array` | [AnyJson](../modules/_types_.md#anyjson)[] |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function.
If thisArg is omitted, undefined is used as the this value.

**Returns:** *boolean*

___

###  fill

▸ **fill**(`value`: [AnyJson](../modules/_types_.md#anyjson), `start?`: undefined | number, `end?`: undefined | number): *this*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.core.d.ts:53

Returns the this object after filling the section identified by start and end with value

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | [AnyJson](../modules/_types_.md#anyjson) | value to fill array section with |
`start?` | undefined &#124; number | index to start filling the array at. If start is negative, it is treated as length+start where length is the length of the array. |
`end?` | undefined &#124; number | index to stop filling the array at. If end is negative, it is treated as length+end.  |

**Returns:** *this*

___

###  filter

▸ **filter**<**S**>(`callbackfn`: function, `thisArg?`: any): *S[]*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1337

Returns the elements of an array that meet the condition specified in a callback function.

**Type parameters:**

▪ **S**: *[AnyJson](../modules/_types_.md#anyjson)*

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.

▸ (`value`: [AnyJson](../modules/_types_.md#anyjson), `index`: number, `array`: [AnyJson](../modules/_types_.md#anyjson)[]): *value is S*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [AnyJson](../modules/_types_.md#anyjson) |
`index` | number |
`array` | [AnyJson](../modules/_types_.md#anyjson)[] |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

**Returns:** *S[]*

▸ **filter**(`callbackfn`: function, `thisArg?`: any): *[AnyJson](../modules/_types_.md#anyjson)[]*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1343

Returns the elements of an array that meet the condition specified in a callback function.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.

▸ (`value`: [AnyJson](../modules/_types_.md#anyjson), `index`: number, `array`: [AnyJson](../modules/_types_.md#anyjson)[]): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [AnyJson](../modules/_types_.md#anyjson) |
`index` | number |
`array` | [AnyJson](../modules/_types_.md#anyjson)[] |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)[]*

___

###  find

▸ **find**<**S**>(`predicate`: function, `thisArg?`: any): *S | undefined*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.core.d.ts:31

Returns the value of the first element in the array where predicate is true, and undefined
otherwise.

**Type parameters:**

▪ **S**: *[AnyJson](../modules/_types_.md#anyjson)*

**Parameters:**

▪ **predicate**: *function*

find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found, find
immediately returns that element value. Otherwise, find returns undefined.

▸ (`this`: void, `value`: [AnyJson](../modules/_types_.md#anyjson), `index`: number, `obj`: [AnyJson](../modules/_types_.md#anyjson)[]): *value is S*

**Parameters:**

Name | Type |
------ | ------ |
`this` | void |
`value` | [AnyJson](../modules/_types_.md#anyjson) |
`index` | number |
`obj` | [AnyJson](../modules/_types_.md#anyjson)[] |

▪`Optional`  **thisArg**: *any*

If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.

**Returns:** *S | undefined*

▸ **find**(`predicate`: function, `thisArg?`: any): *[AnyJson](../modules/_types_.md#anyjson) | undefined*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.core.d.ts:32

**Parameters:**

▪ **predicate**: *function*

▸ (`value`: [AnyJson](../modules/_types_.md#anyjson), `index`: number, `obj`: [AnyJson](../modules/_types_.md#anyjson)[]): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [AnyJson](../modules/_types_.md#anyjson) |
`index` | number |
`obj` | [AnyJson](../modules/_types_.md#anyjson)[] |

▪`Optional`  **thisArg**: *any*

**Returns:** *[AnyJson](../modules/_types_.md#anyjson) | undefined*

___

###  findIndex

▸ **findIndex**(`predicate`: function, `thisArg?`: any): *number*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.core.d.ts:43

Returns the index of the first element in the array where predicate is true, and -1
otherwise.

**Parameters:**

▪ **predicate**: *function*

find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found,
findIndex immediately returns that element index. Otherwise, findIndex returns -1.

▸ (`value`: [AnyJson](../modules/_types_.md#anyjson), `index`: number, `obj`: [AnyJson](../modules/_types_.md#anyjson)[]): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [AnyJson](../modules/_types_.md#anyjson) |
`index` | number |
`obj` | [AnyJson](../modules/_types_.md#anyjson)[] |

▪`Optional`  **thisArg**: *any*

If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.

**Returns:** *number*

___

###  flat

▸ **flat**<**U**>(`this`: U[][][][][][][][], `depth`: 7): *U[]*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2019.array.d.ts:158

Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`this` | U[][][][][][][][] | - |
`depth` | 7 | The maximum recursion depth  |

**Returns:** *U[]*

▸ **flat**<**U**>(`this`: U[][][][][][][], `depth`: 6): *U[]*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2019.array.d.ts:166

Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`this` | U[][][][][][][] | - |
`depth` | 6 | The maximum recursion depth  |

**Returns:** *U[]*

▸ **flat**<**U**>(`this`: U[][][][][][], `depth`: 5): *U[]*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2019.array.d.ts:174

Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`this` | U[][][][][][] | - |
`depth` | 5 | The maximum recursion depth  |

**Returns:** *U[]*

▸ **flat**<**U**>(`this`: U[][][][][], `depth`: 4): *U[]*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2019.array.d.ts:182

Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`this` | U[][][][][] | - |
`depth` | 4 | The maximum recursion depth  |

**Returns:** *U[]*

▸ **flat**<**U**>(`this`: U[][][][], `depth`: 3): *U[]*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2019.array.d.ts:190

Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`this` | U[][][][] | - |
`depth` | 3 | The maximum recursion depth  |

**Returns:** *U[]*

▸ **flat**<**U**>(`this`: U[][][], `depth`: 2): *U[]*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2019.array.d.ts:198

Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`this` | U[][][] | - |
`depth` | 2 | The maximum recursion depth  |

**Returns:** *U[]*

▸ **flat**<**U**>(`this`: U[][], `depth?`: undefined | 1): *U[]*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2019.array.d.ts:206

Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`this` | U[][] | - |
`depth?` | undefined &#124; 1 | The maximum recursion depth  |

**Returns:** *U[]*

▸ **flat**<**U**>(`this`: U[], `depth`: 0): *U[]*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2019.array.d.ts:214

Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`this` | U[] | - |
`depth` | 0 | The maximum recursion depth  |

**Returns:** *U[]*

▸ **flat**<**U**>(`depth?`: undefined | number): *any[]*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2019.array.d.ts:222

Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth. If no depth is provided, flat method defaults to the depth of 1.

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`depth?` | undefined &#124; number | The maximum recursion depth  |

**Returns:** *any[]*

___

###  flatMap

▸ **flatMap**<**U**, **This**>(`callback`: function, `thisArg?`: This): *U[]*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2019.array.d.ts:147

Calls a defined callback function on each element of an array. Then, flattens the result into
a new array.
This is identical to a map followed by flat with depth 1.

**Type parameters:**

▪ **U**

▪ **This**

**Parameters:**

▪ **callback**: *function*

A function that accepts up to three arguments. The flatMap method calls the
callback function one time for each element in the array.

▸ (`this`: This, `value`: [AnyJson](../modules/_types_.md#anyjson), `index`: number, `array`: [AnyJson](../modules/_types_.md#anyjson)[]): *U | ReadonlyArray‹U›*

**Parameters:**

Name | Type |
------ | ------ |
`this` | This |
`value` | [AnyJson](../modules/_types_.md#anyjson) |
`index` | number |
`array` | [AnyJson](../modules/_types_.md#anyjson)[] |

▪`Optional`  **thisArg**: *This*

An object to which the this keyword can refer in the callback function. If
thisArg is omitted, undefined is used as the this value.

**Returns:** *U[]*

___

###  forEach

▸ **forEach**(`callbackfn`: function, `thisArg?`: any): *void*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1325

Performs the specified action for each element in an array.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.

▸ (`value`: [AnyJson](../modules/_types_.md#anyjson), `index`: number, `array`: [AnyJson](../modules/_types_.md#anyjson)[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [AnyJson](../modules/_types_.md#anyjson) |
`index` | number |
`array` | [AnyJson](../modules/_types_.md#anyjson)[] |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

**Returns:** *void*

___

###  includes

▸ **includes**(`searchElement`: [AnyJson](../modules/_types_.md#anyjson), `fromIndex?`: undefined | number): *boolean*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2016.array.include.d.ts:27

Determines whether an array includes a certain element, returning true or false as appropriate.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`searchElement` | [AnyJson](../modules/_types_.md#anyjson) | The element to search for. |
`fromIndex?` | undefined &#124; number | The position in this array at which to begin searching for searchElement.  |

**Returns:** *boolean*

___

###  indexOf

▸ **indexOf**(`searchElement`: [AnyJson](../modules/_types_.md#anyjson), `fromIndex?`: undefined | number): *number*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1295

Returns the index of the first occurrence of a value in an array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`searchElement` | [AnyJson](../modules/_types_.md#anyjson) | The value to locate in the array. |
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

###  keys

▸ **keys**(): *IterableIterator‹number›*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:70

Returns an iterable of keys in the array

**Returns:** *IterableIterator‹number›*

___

###  lastIndexOf

▸ **lastIndexOf**(`searchElement`: [AnyJson](../modules/_types_.md#anyjson), `fromIndex?`: undefined | number): *number*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1301

Returns the index of the last occurrence of a specified value in an array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`searchElement` | [AnyJson](../modules/_types_.md#anyjson) | The value to locate in the array. |
`fromIndex?` | undefined &#124; number | The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array.  |

**Returns:** *number*

___

###  map

▸ **map**<**U**>(`callbackfn`: function, `thisArg?`: any): *U[]*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1331

Calls a defined callback function on each element of an array, and returns an array that contains the results.

**Type parameters:**

▪ **U**

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.

▸ (`value`: [AnyJson](../modules/_types_.md#anyjson), `index`: number, `array`: [AnyJson](../modules/_types_.md#anyjson)[]): *U*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [AnyJson](../modules/_types_.md#anyjson) |
`index` | number |
`array` | [AnyJson](../modules/_types_.md#anyjson)[] |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

**Returns:** *U[]*

___

###  pop

▸ **pop**(): *[AnyJson](../modules/_types_.md#anyjson) | undefined*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1227

Removes the last element from an array and returns it.

**Returns:** *[AnyJson](../modules/_types_.md#anyjson) | undefined*

___

###  push

▸ **push**(...`items`: [AnyJson](../modules/_types_.md#anyjson)[]): *number*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1232

Appends new elements to an array, and returns the new length of the array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...items` | [AnyJson](../modules/_types_.md#anyjson)[] | New elements of the Array.  |

**Returns:** *number*

___

###  reduce

▸ **reduce**(`callbackfn`: function): *[AnyJson](../modules/_types_.md#anyjson)*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1349

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.

▸ (`previousValue`: [AnyJson](../modules/_types_.md#anyjson), `currentValue`: [AnyJson](../modules/_types_.md#anyjson), `currentIndex`: number, `array`: [AnyJson](../modules/_types_.md#anyjson)[]): *[AnyJson](../modules/_types_.md#anyjson)*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | [AnyJson](../modules/_types_.md#anyjson) |
`currentValue` | [AnyJson](../modules/_types_.md#anyjson) |
`currentIndex` | number |
`array` | [AnyJson](../modules/_types_.md#anyjson)[] |

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

▸ **reduce**(`callbackfn`: function, `initialValue`: [AnyJson](../modules/_types_.md#anyjson)): *[AnyJson](../modules/_types_.md#anyjson)*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1350

**Parameters:**

▪ **callbackfn**: *function*

▸ (`previousValue`: [AnyJson](../modules/_types_.md#anyjson), `currentValue`: [AnyJson](../modules/_types_.md#anyjson), `currentIndex`: number, `array`: [AnyJson](../modules/_types_.md#anyjson)[]): *[AnyJson](../modules/_types_.md#anyjson)*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | [AnyJson](../modules/_types_.md#anyjson) |
`currentValue` | [AnyJson](../modules/_types_.md#anyjson) |
`currentIndex` | number |
`array` | [AnyJson](../modules/_types_.md#anyjson)[] |

▪ **initialValue**: *[AnyJson](../modules/_types_.md#anyjson)*

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

▸ **reduce**<**U**>(`callbackfn`: function, `initialValue`: U): *U*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1356

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**Type parameters:**

▪ **U**

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.

▸ (`previousValue`: U, `currentValue`: [AnyJson](../modules/_types_.md#anyjson), `currentIndex`: number, `array`: [AnyJson](../modules/_types_.md#anyjson)[]): *U*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | U |
`currentValue` | [AnyJson](../modules/_types_.md#anyjson) |
`currentIndex` | number |
`array` | [AnyJson](../modules/_types_.md#anyjson)[] |

▪ **initialValue**: *U*

If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.

**Returns:** *U*

___

###  reduceRight

▸ **reduceRight**(`callbackfn`: function): *[AnyJson](../modules/_types_.md#anyjson)*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1362

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.

▸ (`previousValue`: [AnyJson](../modules/_types_.md#anyjson), `currentValue`: [AnyJson](../modules/_types_.md#anyjson), `currentIndex`: number, `array`: [AnyJson](../modules/_types_.md#anyjson)[]): *[AnyJson](../modules/_types_.md#anyjson)*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | [AnyJson](../modules/_types_.md#anyjson) |
`currentValue` | [AnyJson](../modules/_types_.md#anyjson) |
`currentIndex` | number |
`array` | [AnyJson](../modules/_types_.md#anyjson)[] |

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

▸ **reduceRight**(`callbackfn`: function, `initialValue`: [AnyJson](../modules/_types_.md#anyjson)): *[AnyJson](../modules/_types_.md#anyjson)*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1363

**Parameters:**

▪ **callbackfn**: *function*

▸ (`previousValue`: [AnyJson](../modules/_types_.md#anyjson), `currentValue`: [AnyJson](../modules/_types_.md#anyjson), `currentIndex`: number, `array`: [AnyJson](../modules/_types_.md#anyjson)[]): *[AnyJson](../modules/_types_.md#anyjson)*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | [AnyJson](../modules/_types_.md#anyjson) |
`currentValue` | [AnyJson](../modules/_types_.md#anyjson) |
`currentIndex` | number |
`array` | [AnyJson](../modules/_types_.md#anyjson)[] |

▪ **initialValue**: *[AnyJson](../modules/_types_.md#anyjson)*

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

▸ **reduceRight**<**U**>(`callbackfn`: function, `initialValue`: U): *U*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1369

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**Type parameters:**

▪ **U**

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.

▸ (`previousValue`: U, `currentValue`: [AnyJson](../modules/_types_.md#anyjson), `currentIndex`: number, `array`: [AnyJson](../modules/_types_.md#anyjson)[]): *U*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | U |
`currentValue` | [AnyJson](../modules/_types_.md#anyjson) |
`currentIndex` | number |
`array` | [AnyJson](../modules/_types_.md#anyjson)[] |

▪ **initialValue**: *U*

If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.

**Returns:** *U*

___

###  reverse

▸ **reverse**(): *[AnyJson](../modules/_types_.md#anyjson)[]*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1251

Reverses the elements in an Array.

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)[]*

___

###  shift

▸ **shift**(): *[AnyJson](../modules/_types_.md#anyjson) | undefined*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1255

Removes the first element from an array and returns it.

**Returns:** *[AnyJson](../modules/_types_.md#anyjson) | undefined*

___

###  slice

▸ **slice**(`start?`: undefined | number, `end?`: undefined | number): *[AnyJson](../modules/_types_.md#anyjson)[]*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1261

Returns a section of an array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`start?` | undefined &#124; number | The beginning of the specified portion of the array. |
`end?` | undefined &#124; number | The end of the specified portion of the array. This is exclusive of the element at the index 'end'.  |

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)[]*

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

▸ (`value`: [AnyJson](../modules/_types_.md#anyjson), `index`: number, `array`: [AnyJson](../modules/_types_.md#anyjson)[]): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [AnyJson](../modules/_types_.md#anyjson) |
`index` | number |
`array` | [AnyJson](../modules/_types_.md#anyjson)[] |

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

▸ **splice**(`start`: number, `deleteCount?`: undefined | number): *[AnyJson](../modules/_types_.md#anyjson)[]*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1277

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`start` | number | The zero-based location in the array from which to start removing elements. |
`deleteCount?` | undefined &#124; number | The number of elements to remove.  |

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)[]*

▸ **splice**(`start`: number, `deleteCount`: number, ...`items`: [AnyJson](../modules/_types_.md#anyjson)[]): *[AnyJson](../modules/_types_.md#anyjson)[]*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1284

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`start` | number | The zero-based location in the array from which to start removing elements. |
`deleteCount` | number | The number of elements to remove. |
`...items` | [AnyJson](../modules/_types_.md#anyjson)[] | Elements to insert into the array in place of the deleted elements.  |

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)[]*

___

###  toLocaleString

▸ **toLocaleString**(): *string*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1223

Returns a string representation of an array. The elements are converted to string using their toLocalString methods.

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1219

Returns a string representation of an array.

**Returns:** *string*

___

###  unshift

▸ **unshift**(...`items`: [AnyJson](../modules/_types_.md#anyjson)[]): *number*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1289

Inserts new elements at the start of an array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...items` | [AnyJson](../modules/_types_.md#anyjson)[] | Elements to insert at the start of the Array.  |

**Returns:** *number*

___

###  values

▸ **values**(): *IterableIterator‹[AnyJson](../modules/_types_.md#anyjson)›*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:75

Returns an iterable of values in the array

**Returns:** *IterableIterator‹[AnyJson](../modules/_types_.md#anyjson)›*
