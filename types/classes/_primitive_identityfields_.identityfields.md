[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["primitive/IdentityFields"](../modules/_primitive_identityfields_.md) › [IdentityFields](_primitive_identityfields_.identityfields.md)

# Class: IdentityFields

**`name`** IdentityFields

**`description`** 
Encoder/Decoder class fo registry IdentityFields

## Hierarchy

  ↳ [CodecSet](_codec_set_.codecset.md)

  ↳ **IdentityFields**

## Implements

* [Codec](../interfaces/_types_codec_.codec.md)

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
* [toHuman](_primitive_identityfields_.identityfields.md#tohuman)
* [toJSON](_primitive_identityfields_.identityfields.md#tojson)
* [toNumber](_primitive_identityfields_.identityfields.md#tonumber)
* [toRawType](_primitive_identityfields_.identityfields.md#torawtype)
* [toString](_primitive_identityfields_.identityfields.md#tostring)
* [toU8a](_primitive_identityfields_.identityfields.md#tou8a)
* [encodeSet](_primitive_identityfields_.identityfields.md#static-encodeset)
* [with](_primitive_identityfields_.identityfields.md#static-with)

## Constructors

###  constructor

\+ **new IdentityFields**(`registry`: [Registry](../interfaces/_types_registry_.registry.md), `value?`: any): *[IdentityFields](_primitive_identityfields_.identityfields.md)*

*Overrides [CodecSet](_codec_set_.codecset.md).[constructor](_codec_set_.codecset.md#constructor)*

*Defined in [packages/types/src/primitive/IdentityFields.ts:29](https://github.com/polkadot-js/api/blob/30f5baa906/packages/types/src/primitive/IdentityFields.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_types_registry_.registry.md) |
`value?` | any |

**Returns:** *[IdentityFields](_primitive_identityfields_.identityfields.md)*

## Properties

###  registry

• **registry**: *[Registry](../interfaces/_types_registry_.registry.md)*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md).[registry](../interfaces/_types_codec_.codec.md#registry)*

*Inherited from [CodecSet](_codec_set_.codecset.md).[registry](_codec_set_.codecset.md#registry)*

*Defined in [packages/types/src/codec/Set.ts:25](https://github.com/polkadot-js/api/blob/30f5baa906/packages/types/src/codec/Set.ts#L25)*

___

###  size

• **size**: *number*

*Inherited from [BTreeSet](_codec_btreeset_.btreeset.md).[size](_codec_btreeset_.btreeset.md#size)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:64

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Overrides [CodecSet](_codec_set_.codecset.md).[encodedLength](_codec_set_.codecset.md#encodedlength)*

*Defined in [packages/types/src/primitive/IdentityFields.ts:46](https://github.com/polkadot-js/api/blob/30f5baa906/packages/types/src/primitive/IdentityFields.ts#L46)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *H256*

*Inherited from [CodecSet](_codec_set_.codecset.md).[hash](_codec_set_.codecset.md#hash)*

*Defined in [packages/types/src/codec/Set.ts:119](https://github.com/polkadot-js/api/blob/30f5baa906/packages/types/src/codec/Set.ts#L119)*

**`description`** returns a hash of the contents

**Returns:** *H256*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [CodecSet](_codec_set_.codecset.md).[isEmpty](_codec_set_.codecset.md#isempty)*

*Defined in [packages/types/src/codec/Set.ts:126](https://github.com/polkadot-js/api/blob/30f5baa906/packages/types/src/codec/Set.ts#L126)*

**`description`** true is the Set contains no values

**Returns:** *boolean*

___

###  strings

• **get strings**(): *string[]*

*Inherited from [CodecSet](_codec_set_.codecset.md).[strings](_codec_set_.codecset.md#strings)*

*Defined in [packages/types/src/codec/Set.ts:133](https://github.com/polkadot-js/api/blob/30f5baa906/packages/types/src/codec/Set.ts#L133)*

**`description`** The actual set values as a string[]

**Returns:** *string[]*

___

###  valueEncoded

• **get valueEncoded**(): *BN*

*Inherited from [CodecSet](_codec_set_.codecset.md).[valueEncoded](_codec_set_.codecset.md#valueencoded)*

*Defined in [packages/types/src/codec/Set.ts:140](https://github.com/polkadot-js/api/blob/30f5baa906/packages/types/src/codec/Set.ts#L140)*

**`description`** The encoded value for the set members

**Returns:** *BN*

## Methods

###  add

▸ **add**(`key`: string): *this*

*Inherited from [CodecSet](_codec_set_.codecset.md).[add](_codec_set_.codecset.md#add)*

*Overrides [BTreeSet](_codec_btreeset_.btreeset.md).[add](_codec_btreeset_.btreeset.md#add)*

*Defined in [packages/types/src/codec/Set.ts:147](https://github.com/polkadot-js/api/blob/30f5baa906/packages/types/src/codec/Set.ts#L147)*

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

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Inherited from [CodecSet](_codec_set_.codecset.md).[eq](_codec_set_.codecset.md#eq)*

*Defined in [packages/types/src/codec/Set.ts:160](https://github.com/polkadot-js/api/blob/30f5baa906/packages/types/src/codec/Set.ts#L160)*

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

*Defined in [packages/types/src/codec/Set.ts:176](https://github.com/polkadot-js/api/blob/30f5baa906/packages/types/src/codec/Set.ts#L176)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(): *string[]*

*Inherited from [CodecSet](_codec_set_.codecset.md).[toHuman](_codec_set_.codecset.md#tohuman)*

*Defined in [packages/types/src/codec/Set.ts:183](https://github.com/polkadot-js/api/blob/30f5baa906/packages/types/src/codec/Set.ts#L183)*

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

**Returns:** *string[]*

___

###  toJSON

▸ **toJSON**(): *string[]*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Inherited from [CodecSet](_codec_set_.codecset.md).[toJSON](_codec_set_.codecset.md#tojson)*

*Defined in [packages/types/src/codec/Set.ts:190](https://github.com/polkadot-js/api/blob/30f5baa906/packages/types/src/codec/Set.ts#L190)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *string[]*

___

###  toNumber

▸ **toNumber**(): *number*

*Inherited from [CodecSet](_codec_set_.codecset.md).[toNumber](_codec_set_.codecset.md#tonumber)*

*Defined in [packages/types/src/codec/Set.ts:197](https://github.com/polkadot-js/api/blob/30f5baa906/packages/types/src/codec/Set.ts#L197)*

**`description`** The encoded value for the set members

**Returns:** *number*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Inherited from [CodecSet](_codec_set_.codecset.md).[toRawType](_codec_set_.codecset.md#torawtype)*

*Defined in [packages/types/src/codec/Set.ts:204](https://github.com/polkadot-js/api/blob/30f5baa906/packages/types/src/codec/Set.ts#L204)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Inherited from [CodecSet](_codec_set_.codecset.md).[toString](_codec_set_.codecset.md#tostring)*

*Defined in [packages/types/src/codec/Set.ts:212](https://github.com/polkadot-js/api/blob/30f5baa906/packages/types/src/codec/Set.ts#L212)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Overrides [CodecSet](_codec_set_.codecset.md).[toU8a](_codec_set_.codecset.md#tou8a)*

*Defined in [packages/types/src/primitive/IdentityFields.ts:53](https://github.com/polkadot-js/api/blob/30f5baa906/packages/types/src/primitive/IdentityFields.ts#L53)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

___

### `Static` encodeSet

▸ **encodeSet**(`setValues`: SetValues, `value`: string[]): *BN*

*Inherited from [CodecSet](_codec_set_.codecset.md).[encodeSet](_codec_set_.codecset.md#static-encodeset)*

*Defined in [packages/types/src/codec/Set.ts:82](https://github.com/polkadot-js/api/blob/30f5baa906/packages/types/src/codec/Set.ts#L82)*

**Parameters:**

Name | Type |
------ | ------ |
`setValues` | SetValues |
`value` | string[] |

**Returns:** *BN*

___

### `Static` with

▸ **with**(`values`: SetValues): *[Constructor](../interfaces/_types_codec_.constructor.md)‹[CodecSet](_codec_set_.codecset.md)›*

*Inherited from [CodecSet](_codec_set_.codecset.md).[with](_codec_set_.codecset.md#static-with)*

*Defined in [packages/types/src/codec/Set.ts:88](https://github.com/polkadot-js/api/blob/30f5baa906/packages/types/src/codec/Set.ts#L88)*

**Parameters:**

Name | Type |
------ | ------ |
`values` | SetValues |

**Returns:** *[Constructor](../interfaces/_types_codec_.constructor.md)‹[CodecSet](_codec_set_.codecset.md)›*
