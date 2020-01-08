[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["primitive/IdentityFields"](../modules/_primitive_identityfields_.md) › [IdentityFields](_primitive_identityfields_.identityfields.md)

# Class: IdentityFields

## Hierarchy

  ↳ [CodecSet](_codec_set_.codecset.md)

  ↳ **IdentityFields**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_primitive_identityfields_.identityfields.md#constructor)

### Properties

* [[Symbol.toStringTag]](_primitive_identityfields_.identityfields.md#[symbol.tostringtag])
* [registry](_primitive_identityfields_.identityfields.md#registry)
* [size](_primitive_identityfields_.identityfields.md#size)

### Accessors

* [encodedLength](_primitive_identityfields_.identityfields.md#encodedlength)
* [hash](_primitive_identityfields_.identityfields.md#hash)
* [isEmpty](_primitive_identityfields_.identityfields.md#isempty)
* [strings](_primitive_identityfields_.identityfields.md#strings)
* [valueEncoded](_primitive_identityfields_.identityfields.md#valueencoded)

### Methods

* [[Symbol.iterator]](_primitive_identityfields_.identityfields.md#[symbol.iterator])
* [add](_primitive_identityfields_.identityfields.md#add)
* [clear](_primitive_identityfields_.identityfields.md#clear)
* [delete](_primitive_identityfields_.identityfields.md#delete)
* [entries](_primitive_identityfields_.identityfields.md#entries)
* [eq](_primitive_identityfields_.identityfields.md#eq)
* [forEach](_primitive_identityfields_.identityfields.md#foreach)
* [has](_primitive_identityfields_.identityfields.md#has)
* [keys](_primitive_identityfields_.identityfields.md#keys)
* [toHex](_primitive_identityfields_.identityfields.md#tohex)
* [toJSON](_primitive_identityfields_.identityfields.md#tojson)
* [toNumber](_primitive_identityfields_.identityfields.md#tonumber)
* [toRawType](_primitive_identityfields_.identityfields.md#torawtype)
* [toString](_primitive_identityfields_.identityfields.md#tostring)
* [toU8a](_primitive_identityfields_.identityfields.md#tou8a)
* [values](_primitive_identityfields_.identityfields.md#values)
* [decodeSet](_primitive_identityfields_.identityfields.md#static-decodeset)
* [encodeSet](_primitive_identityfields_.identityfields.md#static-encodeset)
* [with](_primitive_identityfields_.identityfields.md#static-with)

## Constructors

###  constructor

\+ **new IdentityFields**(`registry`: [Registry](../interfaces/_types_.registry.md), `value?`: any): *[IdentityFields](_primitive_identityfields_.identityfields.md)*

*Overrides [CodecSet](_codec_set_.codecset.md).[constructor](_codec_set_.codecset.md#constructor)*

*Defined in [packages/types/src/primitive/IdentityFields.ts:23](https://github.com/polkadot-js/api/blob/e855da1f13/packages/types/src/primitive/IdentityFields.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_types_.registry.md) |
`value?` | any |

**Returns:** *[IdentityFields](_primitive_identityfields_.identityfields.md)*

## Properties

###  [Symbol.toStringTag]

• **[Symbol.toStringTag]**: *string*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:138

___

###  registry

• **registry**: *[Registry](../interfaces/_types_.registry.md)*

*Implementation of [Codec](../interfaces/_types_.codec.md).[registry](../interfaces/_types_.codec.md#registry)*

*Inherited from [CodecSet](_codec_set_.codecset.md).[registry](_codec_set_.codecset.md#registry)*

*Defined in [packages/types/src/codec/Set.ts:24](https://github.com/polkadot-js/api/blob/e855da1f13/packages/types/src/codec/Set.ts#L24)*

___

###  size

• **size**: *number*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:64

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Overrides [CodecSet](_codec_set_.codecset.md).[encodedLength](_codec_set_.codecset.md#encodedlength)*

*Defined in [packages/types/src/primitive/IdentityFields.ts:39](https://github.com/polkadot-js/api/blob/e855da1f13/packages/types/src/primitive/IdentityFields.ts#L39)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](../interfaces/_types_.ihash.md)*

*Inherited from [CodecSet](_codec_set_.codecset.md).[hash](_codec_set_.codecset.md#hash)*

*Defined in [packages/types/src/codec/Set.ts:115](https://github.com/polkadot-js/api/blob/e855da1f13/packages/types/src/codec/Set.ts#L115)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](../interfaces/_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [CodecSet](_codec_set_.codecset.md).[isEmpty](_codec_set_.codecset.md#isempty)*

*Defined in [packages/types/src/codec/Set.ts:122](https://github.com/polkadot-js/api/blob/e855da1f13/packages/types/src/codec/Set.ts#L122)*

**`description`** true is the Set contains no values

**Returns:** *boolean*

___

###  strings

• **get strings**(): *string[]*

*Inherited from [CodecSet](_codec_set_.codecset.md).[strings](_codec_set_.codecset.md#strings)*

*Defined in [packages/types/src/codec/Set.ts:129](https://github.com/polkadot-js/api/blob/e855da1f13/packages/types/src/codec/Set.ts#L129)*

**`description`** The actual set values as a string[]

**Returns:** *string[]*

___

###  valueEncoded

• **get valueEncoded**(): *BN*

*Inherited from [CodecSet](_codec_set_.codecset.md).[valueEncoded](_codec_set_.codecset.md#valueencoded)*

*Defined in [packages/types/src/codec/Set.ts:136](https://github.com/polkadot-js/api/blob/e855da1f13/packages/types/src/codec/Set.ts#L136)*

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

*Inherited from [CodecSet](_codec_set_.codecset.md).[add](_codec_set_.codecset.md#add)*

*Overrides void*

*Defined in [packages/types/src/codec/Set.ts:143](https://github.com/polkadot-js/api/blob/e855da1f13/packages/types/src/codec/Set.ts#L143)*

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

*Inherited from [CodecSet](_codec_set_.codecset.md).[eq](_codec_set_.codecset.md#eq)*

*Defined in [packages/types/src/codec/Set.ts:156](https://github.com/polkadot-js/api/blob/e855da1f13/packages/types/src/codec/Set.ts#L156)*

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

*Inherited from [CodecSet](_codec_set_.codecset.md).[toHex](_codec_set_.codecset.md#tohex)*

*Defined in [packages/types/src/codec/Set.ts:172](https://github.com/polkadot-js/api/blob/e855da1f13/packages/types/src/codec/Set.ts#L172)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *string[]*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [CodecSet](_codec_set_.codecset.md).[toJSON](_codec_set_.codecset.md#tojson)*

*Defined in [packages/types/src/codec/Set.ts:179](https://github.com/polkadot-js/api/blob/e855da1f13/packages/types/src/codec/Set.ts#L179)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *string[]*

___

###  toNumber

▸ **toNumber**(): *number*

*Inherited from [CodecSet](_codec_set_.codecset.md).[toNumber](_codec_set_.codecset.md#tonumber)*

*Defined in [packages/types/src/codec/Set.ts:186](https://github.com/polkadot-js/api/blob/e855da1f13/packages/types/src/codec/Set.ts#L186)*

**`description`** The encoded value for the set members

**Returns:** *number*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [CodecSet](_codec_set_.codecset.md).[toRawType](_codec_set_.codecset.md#torawtype)*

*Defined in [packages/types/src/codec/Set.ts:193](https://github.com/polkadot-js/api/blob/e855da1f13/packages/types/src/codec/Set.ts#L193)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [CodecSet](_codec_set_.codecset.md).[toString](_codec_set_.codecset.md#tostring)*

*Defined in [packages/types/src/codec/Set.ts:201](https://github.com/polkadot-js/api/blob/e855da1f13/packages/types/src/codec/Set.ts#L201)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(): *Uint8Array*

*Overrides [CodecSet](_codec_set_.codecset.md).[toU8a](_codec_set_.codecset.md#tou8a)*

*Defined in [packages/types/src/primitive/IdentityFields.ts:46](https://github.com/polkadot-js/api/blob/e855da1f13/packages/types/src/primitive/IdentityFields.ts#L46)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

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

*Inherited from [CodecSet](_codec_set_.codecset.md).[decodeSet](_codec_set_.codecset.md#static-decodeset)*

*Defined in [packages/types/src/codec/Set.ts:35](https://github.com/polkadot-js/api/blob/e855da1f13/packages/types/src/codec/Set.ts#L35)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`setValues` | SetValues | - |
`value` | string[] &#124; Set‹string› &#124; Uint8Array &#124; BN &#124; number &#124; string | 0 |

**Returns:** *string[]*

___

### `Static` encodeSet

▸ **encodeSet**(`setValues`: SetValues, `value`: string[]): *BN*

*Inherited from [CodecSet](_codec_set_.codecset.md).[encodeSet](_codec_set_.codecset.md#static-encodeset)*

*Defined in [packages/types/src/codec/Set.ts:78](https://github.com/polkadot-js/api/blob/e855da1f13/packages/types/src/codec/Set.ts#L78)*

**Parameters:**

Name | Type |
------ | ------ |
`setValues` | SetValues |
`value` | string[] |

**Returns:** *BN*

___

### `Static` with

▸ **with**(`values`: SetValues): *[Constructor](../interfaces/_types_.constructor.md)‹[CodecSet](_codec_set_.codecset.md)›*

*Inherited from [CodecSet](_codec_set_.codecset.md).[with](_codec_set_.codecset.md#static-with)*

*Defined in [packages/types/src/codec/Set.ts:84](https://github.com/polkadot-js/api/blob/e855da1f13/packages/types/src/codec/Set.ts#L84)*

**Parameters:**

Name | Type |
------ | ------ |
`values` | SetValues |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹[CodecSet](_codec_set_.codecset.md)›*
