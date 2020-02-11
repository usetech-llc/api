[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["primitive/IdentityFields"](../modules/_primitive_identityfields_.md) › [IdentityFields](_primitive_identityfields_.identityfields.md)

# Class: IdentityFields

## Hierarchy

  ↳ [CodecSet](_codec_set_.codecset.md)

  ↳ **IdentityFields**

## Implements

* Codec

## Index

### Constructors

* [constructor](_primitive_identityfields_.identityfields.md#constructor)

### Properties

* [registry](_primitive_identityfields_.identityfields.md#registry)
* [size](_primitive_identityfields_.identityfields.md#size)

### Accessors

* [encodedLength](_primitive_identityfields_.identityfields.md#encodedlength)
* [hash](_primitive_identityfields_.identityfields.md#hash)
* [isEmpty](_primitive_identityfields_.identityfields.md#isempty)
* [strings](_primitive_identityfields_.identityfields.md#strings)
* [valueEncoded](_primitive_identityfields_.identityfields.md#valueencoded)

### Methods

* [add](_primitive_identityfields_.identityfields.md#add)
* [clear](_primitive_identityfields_.identityfields.md#clear)
* [delete](_primitive_identityfields_.identityfields.md#delete)
* [eq](_primitive_identityfields_.identityfields.md#eq)
* [forEach](_primitive_identityfields_.identityfields.md#foreach)
* [has](_primitive_identityfields_.identityfields.md#has)
* [toHex](_primitive_identityfields_.identityfields.md#tohex)
* [toJSON](_primitive_identityfields_.identityfields.md#tojson)
* [toNumber](_primitive_identityfields_.identityfields.md#tonumber)
* [toRawType](_primitive_identityfields_.identityfields.md#torawtype)
* [toString](_primitive_identityfields_.identityfields.md#tostring)
* [toU8a](_primitive_identityfields_.identityfields.md#tou8a)
* [encodeSet](_primitive_identityfields_.identityfields.md#static-encodeset)
* [with](_primitive_identityfields_.identityfields.md#static-with)

## Constructors

###  constructor

\+ **new IdentityFields**(`registry`: Registry, `value?`: any): *[IdentityFields](_primitive_identityfields_.identityfields.md)*

*Overrides [CodecSet](_codec_set_.codecset.md).[constructor](_codec_set_.codecset.md#constructor)*

*Defined in [packages/types/src/primitive/IdentityFields.ts:23](https://github.com/polkadot-js/api/blob/52ffa175a9/packages/types/src/primitive/IdentityFields.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | Registry |
`value?` | any |

**Returns:** *[IdentityFields](_primitive_identityfields_.identityfields.md)*

## Properties

###  registry

• **registry**: *Registry*

*Inherited from [CodecSet](_codec_set_.codecset.md).[registry](_codec_set_.codecset.md#registry)*

*Defined in [packages/types/src/codec/Set.ts:24](https://github.com/polkadot-js/api/blob/52ffa175a9/packages/types/src/codec/Set.ts#L24)*

___

###  size

• **size**: *number*

*Inherited from [BTreeSet](_codec_btreeset_.btreeset.md).[size](_codec_btreeset_.btreeset.md#size)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:64

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Overrides [CodecSet](_codec_set_.codecset.md).[encodedLength](_codec_set_.codecset.md#encodedlength)*

*Defined in [packages/types/src/primitive/IdentityFields.ts:40](https://github.com/polkadot-js/api/blob/52ffa175a9/packages/types/src/primitive/IdentityFields.ts#L40)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *IHash*

*Inherited from [CodecSet](_codec_set_.codecset.md).[hash](_codec_set_.codecset.md#hash)*

*Defined in [packages/types/src/codec/Set.ts:118](https://github.com/polkadot-js/api/blob/52ffa175a9/packages/types/src/codec/Set.ts#L118)*

**`description`** returns a hash of the contents

**Returns:** *IHash*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [CodecSet](_codec_set_.codecset.md).[isEmpty](_codec_set_.codecset.md#isempty)*

*Defined in [packages/types/src/codec/Set.ts:125](https://github.com/polkadot-js/api/blob/52ffa175a9/packages/types/src/codec/Set.ts#L125)*

**`description`** true is the Set contains no values

**Returns:** *boolean*

___

###  strings

• **get strings**(): *string[]*

*Inherited from [CodecSet](_codec_set_.codecset.md).[strings](_codec_set_.codecset.md#strings)*

*Defined in [packages/types/src/codec/Set.ts:132](https://github.com/polkadot-js/api/blob/52ffa175a9/packages/types/src/codec/Set.ts#L132)*

**`description`** The actual set values as a string[]

**Returns:** *string[]*

___

###  valueEncoded

• **get valueEncoded**(): *BN*

*Inherited from [CodecSet](_codec_set_.codecset.md).[valueEncoded](_codec_set_.codecset.md#valueencoded)*

*Defined in [packages/types/src/codec/Set.ts:139](https://github.com/polkadot-js/api/blob/52ffa175a9/packages/types/src/codec/Set.ts#L139)*

**`description`** The encoded value for the set members

**Returns:** *BN*

## Methods

###  add

▸ **add**(`key`: string): *this*

*Inherited from [CodecSet](_codec_set_.codecset.md).[add](_codec_set_.codecset.md#add)*

*Overrides [BTreeSet](_codec_btreeset_.btreeset.md).[add](_codec_btreeset_.btreeset.md#add)*

*Defined in [packages/types/src/codec/Set.ts:146](https://github.com/polkadot-js/api/blob/52ffa175a9/packages/types/src/codec/Set.ts#L146)*

**`description`** adds a value to the Set (extended to allow for validity checking)

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *this*

___

###  clear

▸ **clear**(): *void*

*Inherited from [BTreeSet](_codec_btreeset_.btreeset.md).[clear](_codec_btreeset_.btreeset.md#clear)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:60

**Returns:** *void*

___

###  delete

▸ **delete**(`value`: string): *boolean*

*Inherited from [BTreeSet](_codec_btreeset_.btreeset.md).[delete](_codec_btreeset_.btreeset.md#delete)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:61

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *boolean*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [CodecSet](_codec_set_.codecset.md).[eq](_codec_set_.codecset.md#eq)*

*Defined in [packages/types/src/codec/Set.ts:159](https://github.com/polkadot-js/api/blob/52ffa175a9/packages/types/src/codec/Set.ts#L159)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  forEach

▸ **forEach**(`callbackfn`: function, `thisArg?`: any): *void*

*Inherited from [BTreeSet](_codec_btreeset_.btreeset.md).[forEach](_codec_btreeset_.btreeset.md#foreach)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:62

**Parameters:**

▪ **callbackfn**: *function*

▸ (`value`: string, `value2`: string, `set`: [Set](_codec_btreeset_.btreeset.md#static-set)‹string›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |
`value2` | string |
`set` | [Set](_codec_btreeset_.btreeset.md#static-set)‹string› |

▪`Optional`  **thisArg**: *any*

**Returns:** *void*

___

###  has

▸ **has**(`value`: string): *boolean*

*Inherited from [BTreeSet](_codec_btreeset_.btreeset.md).[has](_codec_btreeset_.btreeset.md#has)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:63

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [CodecSet](_codec_set_.codecset.md).[toHex](_codec_set_.codecset.md#tohex)*

*Defined in [packages/types/src/codec/Set.ts:175](https://github.com/polkadot-js/api/blob/52ffa175a9/packages/types/src/codec/Set.ts#L175)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *string[]*

*Inherited from [CodecSet](_codec_set_.codecset.md).[toJSON](_codec_set_.codecset.md#tojson)*

*Defined in [packages/types/src/codec/Set.ts:182](https://github.com/polkadot-js/api/blob/52ffa175a9/packages/types/src/codec/Set.ts#L182)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *string[]*

___

###  toNumber

▸ **toNumber**(): *number*

*Inherited from [CodecSet](_codec_set_.codecset.md).[toNumber](_codec_set_.codecset.md#tonumber)*

*Defined in [packages/types/src/codec/Set.ts:189](https://github.com/polkadot-js/api/blob/52ffa175a9/packages/types/src/codec/Set.ts#L189)*

**`description`** The encoded value for the set members

**Returns:** *number*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [CodecSet](_codec_set_.codecset.md).[toRawType](_codec_set_.codecset.md#torawtype)*

*Defined in [packages/types/src/codec/Set.ts:196](https://github.com/polkadot-js/api/blob/52ffa175a9/packages/types/src/codec/Set.ts#L196)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [CodecSet](_codec_set_.codecset.md).[toString](_codec_set_.codecset.md#tostring)*

*Defined in [packages/types/src/codec/Set.ts:204](https://github.com/polkadot-js/api/blob/52ffa175a9/packages/types/src/codec/Set.ts#L204)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Overrides [CodecSet](_codec_set_.codecset.md).[toU8a](_codec_set_.codecset.md#tou8a)*

*Defined in [packages/types/src/primitive/IdentityFields.ts:47](https://github.com/polkadot-js/api/blob/52ffa175a9/packages/types/src/primitive/IdentityFields.ts#L47)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

___

### `Static` encodeSet

▸ **encodeSet**(`setValues`: SetValues, `value`: string[]): *BN*

*Inherited from [CodecSet](_codec_set_.codecset.md).[encodeSet](_codec_set_.codecset.md#static-encodeset)*

*Defined in [packages/types/src/codec/Set.ts:81](https://github.com/polkadot-js/api/blob/52ffa175a9/packages/types/src/codec/Set.ts#L81)*

**Parameters:**

Name | Type |
------ | ------ |
`setValues` | SetValues |
`value` | string[] |

**Returns:** *BN*

___

### `Static` with

▸ **with**(`values`: SetValues): *Constructor‹[CodecSet](_codec_set_.codecset.md)›*

*Inherited from [CodecSet](_codec_set_.codecset.md).[with](_codec_set_.codecset.md#static-with)*

*Defined in [packages/types/src/codec/Set.ts:87](https://github.com/polkadot-js/api/blob/52ffa175a9/packages/types/src/codec/Set.ts#L87)*

**Parameters:**

Name | Type |
------ | ------ |
`values` | SetValues |

**Returns:** *Constructor‹[CodecSet](_codec_set_.codecset.md)›*
