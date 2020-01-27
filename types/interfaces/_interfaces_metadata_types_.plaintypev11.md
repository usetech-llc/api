[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/metadata/types"](../modules/_interfaces_metadata_types_.md) › [PlainTypeV11](_interfaces_metadata_types_.plaintypev11.md)

# Interface: PlainTypeV11

Type

## Hierarchy

  ↳ [Type](../classes/_primitive_type_.type.md)

  ↳ **PlainTypeV11**

  ↳ [PlainTypeLatest](_interfaces_metadata_types_.plaintypelatest.md)

## Implements

* [Codec](_types_.codec.md)

## Indexable

* \[ **index**: *number*\]: string

Type

## Index

### Constructors

* [constructor](_interfaces_metadata_types_.plaintypev11.md#constructor)

### Properties

* [registry](_interfaces_metadata_types_.plaintypev11.md#registry)

### Accessors

* [encodedLength](_interfaces_metadata_types_.plaintypev11.md#encodedlength)
* [hash](_interfaces_metadata_types_.plaintypev11.md#hash)
* [isEmpty](_interfaces_metadata_types_.plaintypev11.md#isempty)
* [length](_interfaces_metadata_types_.plaintypev11.md#length)

### Methods

* [charAt](_interfaces_metadata_types_.plaintypev11.md#charat)
* [charCodeAt](_interfaces_metadata_types_.plaintypev11.md#charcodeat)
* [concat](_interfaces_metadata_types_.plaintypev11.md#concat)
* [eq](_interfaces_metadata_types_.plaintypev11.md#eq)
* [indexOf](_interfaces_metadata_types_.plaintypev11.md#indexof)
* [lastIndexOf](_interfaces_metadata_types_.plaintypev11.md#lastindexof)
* [localeCompare](_interfaces_metadata_types_.plaintypev11.md#localecompare)
* [match](_interfaces_metadata_types_.plaintypev11.md#match)
* [replace](_interfaces_metadata_types_.plaintypev11.md#replace)
* [search](_interfaces_metadata_types_.plaintypev11.md#search)
* [setOverride](_interfaces_metadata_types_.plaintypev11.md#setoverride)
* [slice](_interfaces_metadata_types_.plaintypev11.md#slice)
* [split](_interfaces_metadata_types_.plaintypev11.md#split)
* [substr](_interfaces_metadata_types_.plaintypev11.md#substr)
* [substring](_interfaces_metadata_types_.plaintypev11.md#substring)
* [toHex](_interfaces_metadata_types_.plaintypev11.md#tohex)
* [toJSON](_interfaces_metadata_types_.plaintypev11.md#tojson)
* [toLocaleLowerCase](_interfaces_metadata_types_.plaintypev11.md#tolocalelowercase)
* [toLocaleUpperCase](_interfaces_metadata_types_.plaintypev11.md#tolocaleuppercase)
* [toLowerCase](_interfaces_metadata_types_.plaintypev11.md#tolowercase)
* [toRawType](_interfaces_metadata_types_.plaintypev11.md#torawtype)
* [toString](_interfaces_metadata_types_.plaintypev11.md#tostring)
* [toU8a](_interfaces_metadata_types_.plaintypev11.md#tou8a)
* [toUpperCase](_interfaces_metadata_types_.plaintypev11.md#touppercase)
* [trim](_interfaces_metadata_types_.plaintypev11.md#trim)
* [valueOf](_interfaces_metadata_types_.plaintypev11.md#valueof)

## Constructors

###  constructor

\+ **new PlainTypeV11**(`registry`: [Registry](_types_.registry.md), `value`: [Text](../classes/_primitive_text_.text.md) | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) | string): *[PlainTypeV11](_interfaces_metadata_types_.plaintypev11.md)*

*Inherited from [Type](../classes/_primitive_type_.type.md).[constructor](../classes/_primitive_type_.type.md#constructor)*

*Overrides [Text](../classes/_primitive_text_.text.md).[constructor](../classes/_primitive_text_.text.md#constructor)*

*Defined in [packages/types/src/primitive/Type.ts:18](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/primitive/Type.ts#L18)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`registry` | [Registry](_types_.registry.md) | - |
`value` | [Text](../classes/_primitive_text_.text.md) &#124; [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) &#124; string | "" |

**Returns:** *[PlainTypeV11](_interfaces_metadata_types_.plaintypev11.md)*

## Properties

###  registry

• **registry**: *[Registry](_types_.registry.md)*

*Inherited from [Text](../classes/_primitive_text_.text.md).[registry](../classes/_primitive_text_.text.md#registry)*

*Defined in [packages/types/src/primitive/Text.ts:25](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/primitive/Text.ts#L25)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Type](../classes/_primitive_type_.type.md).[encodedLength](../classes/_primitive_type_.type.md#encodedlength)*

*Overrides [Text](../classes/_primitive_text_.text.md).[encodedLength](../classes/_primitive_text_.text.md#encodedlength)*

*Defined in [packages/types/src/primitive/Type.ts:34](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/primitive/Type.ts#L34)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](_types_.ihash.md)*

*Inherited from [Text](../classes/_primitive_text_.text.md).[hash](../classes/_primitive_text_.text.md#hash)*

*Defined in [packages/types/src/primitive/Text.ts:69](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/primitive/Text.ts#L69)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Text](../classes/_primitive_text_.text.md).[isEmpty](../classes/_primitive_text_.text.md#isempty)*

*Defined in [packages/types/src/primitive/Text.ts:76](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/primitive/Text.ts#L76)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Inherited from [Text](../classes/_primitive_text_.text.md).[length](../classes/_primitive_text_.text.md#length)*

*Overrides [RegistryMetadataText](_types_.registrymetadatatext.md).[length](_types_.registrymetadatatext.md#length)*

*Defined in [packages/types/src/primitive/Text.ts:83](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/primitive/Text.ts#L83)*

**`description`** The length of the value

**Returns:** *number*

## Methods

###  charAt

▸ **charAt**(`pos`: number): *string*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:402

Returns the character at the specified index.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`pos` | number | The zero-based index of the desired character.  |

**Returns:** *string*

___

###  charCodeAt

▸ **charCodeAt**(`index`: number): *number*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:408

Returns the Unicode value of the character at the specified location.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`index` | number | The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.  |

**Returns:** *number*

___

###  concat

▸ **concat**(...`strings`: string[]): *string*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:414

Returns a string that contains the concatenation of two or more strings.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...strings` | string[] | The strings to append to the end of the string.  |

**Returns:** *string*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Text](../classes/_primitive_text_.text.md).[eq](../classes/_primitive_text_.text.md#eq)*

*Defined in [packages/types/src/primitive/Text.ts:91](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/primitive/Text.ts#L91)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  indexOf

▸ **indexOf**(`searchString`: string, `position?`: undefined | number): *number*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:421

Returns the position of the first occurrence of a substring.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`searchString` | string | The substring to search for in the string |
`position?` | undefined &#124; number | The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.  |

**Returns:** *number*

___

###  lastIndexOf

▸ **lastIndexOf**(`searchString`: string, `position?`: undefined | number): *number*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:428

Returns the last occurrence of a substring in the string.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`searchString` | string | The substring to search for. |
`position?` | undefined &#124; number | The index at which to begin searching. If omitted, the search begins at the end of the string.  |

**Returns:** *number*

___

###  localeCompare

▸ **localeCompare**(`that`: string): *number*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:434

Determines whether two strings are equivalent in the current locale.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`that` | string | String to compare to target string  |

**Returns:** *number*

___

###  match

▸ **match**(`regexp`: string | RegExp): *RegExpMatchArray | null*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:440

Matches a string with a regular expression, and returns an array containing the results of that search.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`regexp` | string &#124; RegExp | A variable name or string literal containing the regular expression pattern and flags.  |

**Returns:** *RegExpMatchArray | null*

___

###  replace

▸ **replace**(`searchValue`: string | RegExp, `replaceValue`: string): *string*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:447

Replaces text in a string, using a regular expression or search string.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`searchValue` | string &#124; RegExp | A string to search for. |
`replaceValue` | string | A string containing the text to replace for every successful match of searchValue in this string.  |

**Returns:** *string*

▸ **replace**(`searchValue`: string | RegExp, `replacer`: function): *string*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:454

Replaces text in a string, using a regular expression or search string.

**Parameters:**

▪ **searchValue**: *string | RegExp*

A string to search for.

▪ **replacer**: *function*

A function that returns the replacement text.

▸ (`substring`: string, ...`args`: any[]): *string*

**Parameters:**

Name | Type |
------ | ------ |
`substring` | string |
`...args` | any[] |

**Returns:** *string*

___

###  search

▸ **search**(`regexp`: string | RegExp): *number*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:460

Finds the first substring match in a regular expression search.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`regexp` | string &#124; RegExp | The regular expression pattern and applicable flags.  |

**Returns:** *number*

___

###  setOverride

▸ **setOverride**(`override`: string): *void*

*Inherited from [Text](../classes/_primitive_text_.text.md).[setOverride](../classes/_primitive_text_.text.md#setoverride)*

*Defined in [packages/types/src/primitive/Text.ts:100](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/primitive/Text.ts#L100)*

**`description`** Set an override value for this

**Parameters:**

Name | Type |
------ | ------ |
`override` | string |

**Returns:** *void*

___

###  slice

▸ **slice**(`start?`: undefined | number, `end?`: undefined | number): *string*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:468

Returns a section of a string.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`start?` | undefined &#124; number | The index to the beginning of the specified portion of stringObj. |
`end?` | undefined &#124; number | The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end. If this value is not specified, the substring continues to the end of stringObj.  |

**Returns:** *string*

___

###  split

▸ **split**(`separator`: string | RegExp, `limit?`: undefined | number): *string[]*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:475

Split a string into substrings using the specified separator and return them as an array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`separator` | string &#124; RegExp | A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned. |
`limit?` | undefined &#124; number | A value used to limit the number of elements returned in the array.  |

**Returns:** *string[]*

___

###  substr

▸ **substr**(`from`: number, `length?`: undefined | number): *string*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:509

Gets a substring beginning at the specified location and having the specified length.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`from` | number | The starting position of the desired substring. The index of the first character in the string is zero. |
`length?` | undefined &#124; number | The number of characters to include in the returned substring.  |

**Returns:** *string*

___

###  substring

▸ **substring**(`start`: number, `end?`: undefined | number): *string*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:483

Returns the substring at the specified location within a String object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`start` | number | The zero-based index number indicating the beginning of the substring. |
`end?` | undefined &#124; number | Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end. If end is omitted, the characters from start through the end of the original string are returned.  |

**Returns:** *string*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Text](../classes/_primitive_text_.text.md).[toHex](../classes/_primitive_text_.text.md#tohex)*

*Defined in [packages/types/src/primitive/Text.ts:107](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/primitive/Text.ts#L107)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *string*

*Inherited from [Text](../classes/_primitive_text_.text.md).[toJSON](../classes/_primitive_text_.text.md#tojson)*

*Defined in [packages/types/src/primitive/Text.ts:116](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/primitive/Text.ts#L116)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *string*

___

###  toLocaleLowerCase

▸ **toLocaleLowerCase**(`locales?`: string | string[]): *string*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:489

Converts all alphabetic characters to lowercase, taking into account the host environment's current locale.

**Parameters:**

Name | Type |
------ | ------ |
`locales?` | string &#124; string[] |

**Returns:** *string*

___

###  toLocaleUpperCase

▸ **toLocaleUpperCase**(`locales?`: string | string[]): *string*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:495

Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale.

**Parameters:**

Name | Type |
------ | ------ |
`locales?` | string &#124; string[] |

**Returns:** *string*

___

###  toLowerCase

▸ **toLowerCase**(): *string*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:486

Converts all the alphabetic characters in a string to lowercase.

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Type](../classes/_primitive_type_.type.md).[toRawType](../classes/_primitive_type_.type.md#torawtype)*

*Overrides [Text](../classes/_primitive_text_.text.md).[toRawType](../classes/_primitive_text_.text.md#torawtype)*

*Defined in [packages/types/src/primitive/Type.ts:44](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/primitive/Type.ts#L44)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Text](../classes/_primitive_text_.text.md).[toString](../classes/_primitive_text_.text.md#tostring)*

*Overrides [RegistryMetadataText](_types_.registrymetadatatext.md).[toString](_types_.registrymetadatatext.md#tostring)*

*Defined in [packages/types/src/primitive/Text.ts:130](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/primitive/Text.ts#L130)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

*Inherited from [Text](../classes/_primitive_text_.text.md).[toU8a](../classes/_primitive_text_.text.md#tou8a)*

*Defined in [packages/types/src/primitive/Text.ts:138](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/primitive/Text.ts#L138)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

___

###  toUpperCase

▸ **toUpperCase**(): *string*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:492

Converts all the alphabetic characters in a string to uppercase.

**Returns:** *string*

___

###  trim

▸ **trim**(): *string*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:498

Removes the leading and trailing white space and line terminator characters from a string.

**Returns:** *string*

___

###  valueOf

▸ **valueOf**(): *string*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:512

Returns the primitive value of the specified object.

**Returns:** *string*
