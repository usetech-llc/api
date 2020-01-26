[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/consensus/types"](../modules/_interfaces_consensus_types_.md) › [AuthorityId](_interfaces_consensus_types_.authorityid.md)

# Interface: AuthorityId

AccountId

## Hierarchy

  ↳ [AccountId](_interfaces_runtime_types_.accountid.md)

  ↳ **AuthorityId**

## Implements

* [IU8a](_types_.iu8a.md)

## Indexable

* \[ **index**: *number*\]: number

AccountId

## Index

### Constructors

* [constructor](_interfaces_consensus_types_.authorityid.md#constructor)

### Properties

* [BYTES_PER_ELEMENT](_interfaces_consensus_types_.authorityid.md#bytes_per_element)
* [buffer](_interfaces_consensus_types_.authorityid.md#buffer)
* [byteLength](_interfaces_consensus_types_.authorityid.md#bytelength)
* [byteOffset](_interfaces_consensus_types_.authorityid.md#byteoffset)
* [registry](_interfaces_consensus_types_.authorityid.md#registry)

### Accessors

* [encodedLength](_interfaces_consensus_types_.authorityid.md#encodedlength)
* [hash](_interfaces_consensus_types_.authorityid.md#hash)
* [isEmpty](_interfaces_consensus_types_.authorityid.md#isempty)
* [length](_interfaces_consensus_types_.authorityid.md#length)

### Methods

* [bitLength](_interfaces_consensus_types_.authorityid.md#bitlength)
* [copyWithin](_interfaces_consensus_types_.authorityid.md#copywithin)
* [eq](_interfaces_consensus_types_.authorityid.md#eq)
* [every](_interfaces_consensus_types_.authorityid.md#every)
* [fill](_interfaces_consensus_types_.authorityid.md#fill)
* [filter](_interfaces_consensus_types_.authorityid.md#filter)
* [find](_interfaces_consensus_types_.authorityid.md#find)
* [findIndex](_interfaces_consensus_types_.authorityid.md#findindex)
* [forEach](_interfaces_consensus_types_.authorityid.md#foreach)
* [indexOf](_interfaces_consensus_types_.authorityid.md#indexof)
* [join](_interfaces_consensus_types_.authorityid.md#join)
* [lastIndexOf](_interfaces_consensus_types_.authorityid.md#lastindexof)
* [map](_interfaces_consensus_types_.authorityid.md#map)
* [reduce](_interfaces_consensus_types_.authorityid.md#reduce)
* [reduceRight](_interfaces_consensus_types_.authorityid.md#reduceright)
* [reverse](_interfaces_consensus_types_.authorityid.md#reverse)
* [set](_interfaces_consensus_types_.authorityid.md#set)
* [slice](_interfaces_consensus_types_.authorityid.md#slice)
* [some](_interfaces_consensus_types_.authorityid.md#some)
* [sort](_interfaces_consensus_types_.authorityid.md#sort)
* [subarray](_interfaces_consensus_types_.authorityid.md#subarray)
* [toHex](_interfaces_consensus_types_.authorityid.md#tohex)
* [toJSON](_interfaces_consensus_types_.authorityid.md#tojson)
* [toLocaleString](_interfaces_consensus_types_.authorityid.md#tolocalestring)
* [toRawType](_interfaces_consensus_types_.authorityid.md#torawtype)
* [toString](_interfaces_consensus_types_.authorityid.md#tostring)
* [toU8a](_interfaces_consensus_types_.authorityid.md#tou8a)
* [encode](_interfaces_consensus_types_.authorityid.md#static-encode)
* [with](_interfaces_consensus_types_.authorityid.md#static-with)

## Constructors

###  constructor

\+ **new AuthorityId**(`registry`: [Registry](_types_.registry.md), `value`: [AnyU8a](../modules/_types_.md#anyu8a)): *[AuthorityId](_interfaces_consensus_types_.authorityid.md)*

*Inherited from [AccountId](_interfaces_runtime_types_.accountid.md).[constructor](_interfaces_runtime_types_.accountid.md#constructor)*

*Overrides [U8aFixed](../classes/_codec_u8afixed_.u8afixed.md).[constructor](../classes/_codec_u8afixed_.u8afixed.md#constructor)*

*Defined in [packages/types/src/primitive/Generic/AccountId.ts:19](https://github.com/polkadot-js/api/blob/3db15e73a5/packages/types/src/primitive/Generic/AccountId.ts#L19)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`registry` | [Registry](_types_.registry.md) | - |
`value` | [AnyU8a](../modules/_types_.md#anyu8a) | new Uint8Array() |

**Returns:** *[AuthorityId](_interfaces_consensus_types_.authorityid.md)*

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

###  registry

• **registry**: *[Registry](_types_.registry.md)*

*Inherited from [Raw](../classes/_codec_raw_.raw.md).[registry](../classes/_codec_raw_.raw.md#registry)*

*Defined in [packages/types/src/codec/Raw.ts:20](https://github.com/polkadot-js/api/blob/3db15e73a5/packages/types/src/codec/Raw.ts#L20)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Raw](../classes/_codec_raw_.raw.md).[encodedLength](../classes/_codec_raw_.raw.md#encodedlength)*

*Defined in [packages/types/src/codec/Raw.ts:39](https://github.com/polkadot-js/api/blob/3db15e73a5/packages/types/src/codec/Raw.ts#L39)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](_types_.ihash.md)*

*Inherited from [Raw](../classes/_codec_raw_.raw.md).[hash](../classes/_codec_raw_.raw.md#hash)*

*Defined in [packages/types/src/codec/Raw.ts:46](https://github.com/polkadot-js/api/blob/3db15e73a5/packages/types/src/codec/Raw.ts#L46)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Raw](../classes/_codec_raw_.raw.md).[isEmpty](../classes/_codec_raw_.raw.md#isempty)*

*Defined in [packages/types/src/codec/Raw.ts:53](https://github.com/polkadot-js/api/blob/3db15e73a5/packages/types/src/codec/Raw.ts#L53)*

**`description`** Returns true if the type wraps an empty/default all-0 value

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Inherited from [Raw](../classes/_codec_raw_.raw.md).[length](../classes/_codec_raw_.raw.md#length)*

*Overrides [EcdsaSignature](_interfaces_runtime_types_.ecdsasignature.md).[length](_interfaces_runtime_types_.ecdsasignature.md#length)*

*Defined in [packages/types/src/codec/Raw.ts:60](https://github.com/polkadot-js/api/blob/3db15e73a5/packages/types/src/codec/Raw.ts#L60)*

**`description`** The length of the value

**Returns:** *number*

## Methods

###  bitLength

▸ **bitLength**(): *number*

*Inherited from [Raw](../classes/_codec_raw_.raw.md).[bitLength](../classes/_codec_raw_.raw.md#bitlength)*

*Defined in [packages/types/src/codec/Raw.ts:68](https://github.com/polkadot-js/api/blob/3db15e73a5/packages/types/src/codec/Raw.ts#L68)*

**`description`** Returns the number of bits in the value

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

*Inherited from [AccountId](_interfaces_runtime_types_.accountid.md).[eq](_interfaces_runtime_types_.accountid.md#eq)*

*Overrides [Raw](../classes/_codec_raw_.raw.md).[eq](../classes/_codec_raw_.raw.md#eq)*

*Defined in [packages/types/src/primitive/Generic/AccountId.ts:43](https://github.com/polkadot-js/api/blob/3db15e73a5/packages/types/src/primitive/Generic/AccountId.ts#L43)*

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

▸ **subarray**(`begin`: number, `end?`: undefined | number): *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

*Inherited from [Raw](../classes/_codec_raw_.raw.md).[subarray](../classes/_codec_raw_.raw.md#subarray)*

*Overrides [EcdsaSignature](_interfaces_runtime_types_.ecdsasignature.md).[subarray](_interfaces_runtime_types_.ecdsasignature.md#subarray)*

*Defined in [packages/types/src/codec/Raw.ts:89](https://github.com/polkadot-js/api/blob/3db15e73a5/packages/types/src/codec/Raw.ts#L89)*

**`description`** Create a new subarray from the actual buffer. This is needed for compat reasons since a new Uint8Array gets returned here

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`begin` | number | The position to start at |
`end?` | undefined &#124; number | The position to end at  |

**Returns:** *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Raw](../classes/_codec_raw_.raw.md).[toHex](../classes/_codec_raw_.raw.md#tohex)*

*Defined in [packages/types/src/codec/Raw.ts:96](https://github.com/polkadot-js/api/blob/3db15e73a5/packages/types/src/codec/Raw.ts#L96)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *string*

*Inherited from [AccountId](_interfaces_runtime_types_.accountid.md).[toJSON](_interfaces_runtime_types_.accountid.md#tojson)*

*Overrides [Raw](../classes/_codec_raw_.raw.md).[toJSON](../classes/_codec_raw_.raw.md#tojson)*

*Defined in [packages/types/src/primitive/Generic/AccountId.ts:50](https://github.com/polkadot-js/api/blob/3db15e73a5/packages/types/src/primitive/Generic/AccountId.ts#L50)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *string*

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

*Inherited from [AccountId](_interfaces_runtime_types_.accountid.md).[toRawType](_interfaces_runtime_types_.accountid.md#torawtype)*

*Overrides [U8aFixed](../classes/_codec_u8afixed_.u8afixed.md).[toRawType](../classes/_codec_u8afixed_.u8afixed.md#torawtype)*

*Defined in [packages/types/src/primitive/Generic/AccountId.ts:64](https://github.com/polkadot-js/api/blob/3db15e73a5/packages/types/src/primitive/Generic/AccountId.ts#L64)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [AccountId](_interfaces_runtime_types_.accountid.md).[toString](_interfaces_runtime_types_.accountid.md#tostring)*

*Overrides [Raw](../classes/_codec_raw_.raw.md).[toString](../classes/_codec_raw_.raw.md#tostring)*

*Defined in [packages/types/src/primitive/Generic/AccountId.ts:57](https://github.com/polkadot-js/api/blob/3db15e73a5/packages/types/src/primitive/Generic/AccountId.ts#L57)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

*Inherited from [Raw](../classes/_codec_raw_.raw.md).[toU8a](../classes/_codec_raw_.raw.md#tou8a)*

*Defined in [packages/types/src/codec/Raw.ts:126](https://github.com/polkadot-js/api/blob/3db15e73a5/packages/types/src/codec/Raw.ts#L126)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

___

### `Static` encode

▸ **encode**(`value`: [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)): *string*

*Inherited from [AccountId](_interfaces_runtime_types_.accountid.md).[encode](_interfaces_runtime_types_.accountid.md#static-encode)*

*Defined in [packages/types/src/primitive/Generic/AccountId.ts:24](https://github.com/polkadot-js/api/blob/3db15e73a5/packages/types/src/primitive/Generic/AccountId.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) |

**Returns:** *string*

___

### `Static` with

▸ **with**(`bitLength`: [BitLength](../modules/_codec_u8afixed_.md#bitlength)): *[Constructor](_types_.constructor.md)‹[U8aFixed](../classes/_codec_u8afixed_.u8afixed.md)›*

*Inherited from [U8aFixed](../classes/_codec_u8afixed_.u8afixed.md).[with](../classes/_codec_u8afixed_.u8afixed.md#static-with)*

*Defined in [packages/types/src/codec/U8aFixed.ts:48](https://github.com/polkadot-js/api/blob/3db15e73a5/packages/types/src/codec/U8aFixed.ts#L48)*

**Parameters:**

Name | Type |
------ | ------ |
`bitLength` | [BitLength](../modules/_codec_u8afixed_.md#bitlength) |

**Returns:** *[Constructor](_types_.constructor.md)‹[U8aFixed](../classes/_codec_u8afixed_.u8afixed.md)›*
