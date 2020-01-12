[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["codec/Set"](../modules/_codec_set_.md) › [CodecSet](_codec_set_.codecset.md)

# Class: CodecSet

**`name`** Set

**`description`** 
An Set is an array of string values, represented an an encoded type by
a bitwise representation of the values.

## Hierarchy

* Set‹string›

  ↳ **CodecSet**

  ↳ [WithdrawReasons](../interfaces/_interfaces_balances_types_.withdrawreasons.md)

  ↳ [IdentityFields](_primitive_identityfields_.identityfields.md)

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_codec_set_.codecset.md#constructor)

### Properties

* [[Symbol.toStringTag]](_codec_set_.codecset.md#[symbol.tostringtag])
* [registry](_codec_set_.codecset.md#registry)
* [size](_codec_set_.codecset.md#size)
* [Set](_codec_set_.codecset.md#static-set)

### Accessors

* [encodedLength](_codec_set_.codecset.md#encodedlength)
* [hash](_codec_set_.codecset.md#hash)
* [isEmpty](_codec_set_.codecset.md#isempty)
* [strings](_codec_set_.codecset.md#strings)
* [valueEncoded](_codec_set_.codecset.md#valueencoded)

### Methods

* [[Symbol.iterator]](_codec_set_.codecset.md#[symbol.iterator])
* [add](_codec_set_.codecset.md#add)
* [clear](_codec_set_.codecset.md#clear)
* [delete](_codec_set_.codecset.md#delete)
* [entries](_codec_set_.codecset.md#entries)
* [eq](_codec_set_.codecset.md#eq)
* [forEach](_codec_set_.codecset.md#foreach)
* [has](_codec_set_.codecset.md#has)
* [keys](_codec_set_.codecset.md#keys)
* [toHex](_codec_set_.codecset.md#tohex)
* [toJSON](_codec_set_.codecset.md#tojson)
* [toNumber](_codec_set_.codecset.md#tonumber)
* [toRawType](_codec_set_.codecset.md#torawtype)
* [toString](_codec_set_.codecset.md#tostring)
* [toU8a](_codec_set_.codecset.md#tou8a)
* [values](_codec_set_.codecset.md#values)
* [decodeSet](_codec_set_.codecset.md#static-decodeset)
* [encodeSet](_codec_set_.codecset.md#static-encodeset)
* [with](_codec_set_.codecset.md#static-with)

## Constructors

###  constructor

\+ **new CodecSet**(`registry`: [Registry](../interfaces/_types_.registry.md), `setValues`: SetValues, `value?`: string[] | Set‹string› | Uint8Array | BN | number | string): *[CodecSet](_codec_set_.codecset.md)*

*Defined in [packages/types/src/codec/Set.ts:26](https://github.com/polkadot-js/api/blob/7ac3043f83/packages/types/src/codec/Set.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_types_.registry.md) |
`setValues` | SetValues |
`value?` | string[] &#124; Set‹string› &#124; Uint8Array &#124; BN &#124; number &#124; string |

**Returns:** *[CodecSet](_codec_set_.codecset.md)*

## Properties

###  [Symbol.toStringTag]

• **[Symbol.toStringTag]**: *string*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:138

___

###  registry

• **registry**: *[Registry](../interfaces/_types_.registry.md)*

*Implementation of [Codec](../interfaces/_types_.codec.md).[registry](../interfaces/_types_.codec.md#registry)*

*Defined in [packages/types/src/codec/Set.ts:24](https://github.com/polkadot-js/api/blob/7ac3043f83/packages/types/src/codec/Set.ts#L24)*

___

###  size

• **size**: *number*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:64

___

### `Static` Set

▪ **Set**: *SetConstructor*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:71

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Defined in [packages/types/src/codec/Set.ts:108](https://github.com/polkadot-js/api/blob/7ac3043f83/packages/types/src/codec/Set.ts#L108)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](../interfaces/_types_.ihash.md)*

*Defined in [packages/types/src/codec/Set.ts:115](https://github.com/polkadot-js/api/blob/7ac3043f83/packages/types/src/codec/Set.ts#L115)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](../interfaces/_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Defined in [packages/types/src/codec/Set.ts:122](https://github.com/polkadot-js/api/blob/7ac3043f83/packages/types/src/codec/Set.ts#L122)*

**`description`** true is the Set contains no values

**Returns:** *boolean*

___

###  strings

• **get strings**(): *string[]*

*Defined in [packages/types/src/codec/Set.ts:129](https://github.com/polkadot-js/api/blob/7ac3043f83/packages/types/src/codec/Set.ts#L129)*

**`description`** The actual set values as a string[]

**Returns:** *string[]*

___

###  valueEncoded

• **get valueEncoded**(): *BN*

*Defined in [packages/types/src/codec/Set.ts:136](https://github.com/polkadot-js/api/blob/7ac3043f83/packages/types/src/codec/Set.ts#L136)*

**`description`** The encoded value for the set members

**Returns:** *BN*

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *IterableIterator‹string›*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:171

Iterates over values in the set.

**Returns:** *IterableIterator‹string›*

___

###  add

▸ **add**(`key`: string): *this*

*Overrides void*

*Defined in [packages/types/src/codec/Set.ts:143](https://github.com/polkadot-js/api/blob/7ac3043f83/packages/types/src/codec/Set.ts#L143)*

**`description`** adds a value to the Set (extended to allow for validity checking)

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *this*

___

###  clear

▸ **clear**(): *void*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:60

**Returns:** *void*

___

###  delete

▸ **delete**(`value`: string): *boolean*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:61

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *boolean*

___

###  entries

▸ **entries**(): *IterableIterator‹[string, string]›*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:175

Returns an iterable of [v,v] pairs for every value `v` in the set.

**Returns:** *IterableIterator‹[string, string]›*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [packages/types/src/codec/Set.ts:156](https://github.com/polkadot-js/api/blob/7ac3043f83/packages/types/src/codec/Set.ts#L156)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  forEach

▸ **forEach**(`callbackfn`: function, `thisArg?`: any): *void*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:62

**Parameters:**

▪ **callbackfn**: *function*

▸ (`value`: string, `value2`: string, `set`: Set‹string›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |
`value2` | string |
`set` | Set‹string› |

▪`Optional`  **thisArg**: *any*

**Returns:** *void*

___

###  has

▸ **has**(`value`: string): *boolean*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:63

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *boolean*

___

###  keys

▸ **keys**(): *IterableIterator‹string›*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:179

Despite its name, returns an iterable of the values in the set,

**Returns:** *IterableIterator‹string›*

___

###  toHex

▸ **toHex**(): *string*

*Defined in [packages/types/src/codec/Set.ts:172](https://github.com/polkadot-js/api/blob/7ac3043f83/packages/types/src/codec/Set.ts#L172)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *string[]*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [packages/types/src/codec/Set.ts:179](https://github.com/polkadot-js/api/blob/7ac3043f83/packages/types/src/codec/Set.ts#L179)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *string[]*

___

###  toNumber

▸ **toNumber**(): *number*

*Defined in [packages/types/src/codec/Set.ts:186](https://github.com/polkadot-js/api/blob/7ac3043f83/packages/types/src/codec/Set.ts#L186)*

**`description`** The encoded value for the set members

**Returns:** *number*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [packages/types/src/codec/Set.ts:193](https://github.com/polkadot-js/api/blob/7ac3043f83/packages/types/src/codec/Set.ts#L193)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [packages/types/src/codec/Set.ts:201](https://github.com/polkadot-js/api/blob/7ac3043f83/packages/types/src/codec/Set.ts#L201)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Defined in [packages/types/src/codec/Set.ts:210](https://github.com/polkadot-js/api/blob/7ac3043f83/packages/types/src/codec/Set.ts#L210)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*

___

###  values

▸ **values**(): *IterableIterator‹string›*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:184

Returns an iterable of values in the set.

**Returns:** *IterableIterator‹string›*

___

### `Static` decodeSet

▸ **decodeSet**(`setValues`: SetValues, `value`: string[] | Set‹string› | Uint8Array | BN | number | string): *string[]*

*Defined in [packages/types/src/codec/Set.ts:35](https://github.com/polkadot-js/api/blob/7ac3043f83/packages/types/src/codec/Set.ts#L35)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`setValues` | SetValues | - |
`value` | string[] &#124; Set‹string› &#124; Uint8Array &#124; BN &#124; number &#124; string | 0 |

**Returns:** *string[]*

___

### `Static` encodeSet

▸ **encodeSet**(`setValues`: SetValues, `value`: string[]): *BN*

*Defined in [packages/types/src/codec/Set.ts:78](https://github.com/polkadot-js/api/blob/7ac3043f83/packages/types/src/codec/Set.ts#L78)*

**Parameters:**

Name | Type |
------ | ------ |
`setValues` | SetValues |
`value` | string[] |

**Returns:** *BN*

___

### `Static` with

▸ **with**(`values`: SetValues): *[Constructor](../interfaces/_types_.constructor.md)‹[CodecSet](_codec_set_.codecset.md)›*

*Defined in [packages/types/src/codec/Set.ts:84](https://github.com/polkadot-js/api/blob/7ac3043f83/packages/types/src/codec/Set.ts#L84)*

**Parameters:**

Name | Type |
------ | ------ |
`values` | SetValues |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹[CodecSet](_codec_set_.codecset.md)›*
