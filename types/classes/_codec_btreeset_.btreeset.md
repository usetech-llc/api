[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["codec/BTreeSet"](../modules/_codec_btreeset_.md) › [BTreeSet](_codec_btreeset_.btreeset.md)

# Class: BTreeSet <**V**>

## Type parameters

▪ **V**: *Codec*

## Hierarchy

* [Set](_codec_btreeset_.btreeset.md#static-set)‹V›

  ↳ **BTreeSet**

## Implements

* Codec

## Index

### Constructors

* [constructor](_codec_btreeset_.btreeset.md#constructor)

### Properties

* [[Symbol.toStringTag]](_codec_btreeset_.btreeset.md#[symbol.tostringtag])
* [registry](_codec_btreeset_.btreeset.md#registry)
* [size](_codec_btreeset_.btreeset.md#size)
* [Set](_codec_btreeset_.btreeset.md#static-set)

### Accessors

* [encodedLength](_codec_btreeset_.btreeset.md#encodedlength)
* [hash](_codec_btreeset_.btreeset.md#hash)
* [isEmpty](_codec_btreeset_.btreeset.md#isempty)

### Methods

* [[Symbol.iterator]](_codec_btreeset_.btreeset.md#[symbol.iterator])
* [add](_codec_btreeset_.btreeset.md#add)
* [clear](_codec_btreeset_.btreeset.md#clear)
* [delete](_codec_btreeset_.btreeset.md#delete)
* [entries](_codec_btreeset_.btreeset.md#entries)
* [eq](_codec_btreeset_.btreeset.md#eq)
* [forEach](_codec_btreeset_.btreeset.md#foreach)
* [has](_codec_btreeset_.btreeset.md#has)
* [keys](_codec_btreeset_.btreeset.md#keys)
* [toHex](_codec_btreeset_.btreeset.md#tohex)
* [toJSON](_codec_btreeset_.btreeset.md#tojson)
* [toRawType](_codec_btreeset_.btreeset.md#torawtype)
* [toString](_codec_btreeset_.btreeset.md#tostring)
* [toU8a](_codec_btreeset_.btreeset.md#tou8a)
* [values](_codec_btreeset_.btreeset.md#values)
* [with](_codec_btreeset_.btreeset.md#static-with)

## Constructors

###  constructor

\+ **new BTreeSet**(`registry`: Registry, `valType`: Constructor‹V› | InterfaceTypes, `rawValue`: any): *[BTreeSet](_codec_btreeset_.btreeset.md)*

*Defined in [packages/types/src/codec/BTreeSet.ts:17](https://github.com/polkadot-js/api/blob/c465252e69/packages/types/src/codec/BTreeSet.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | Registry |
`valType` | Constructor‹V› &#124; InterfaceTypes |
`rawValue` | any |

**Returns:** *[BTreeSet](_codec_btreeset_.btreeset.md)*

## Properties

###  [Symbol.toStringTag]

• **[Symbol.toStringTag]**: *string*

*Inherited from [BTreeSet](_codec_btreeset_.btreeset.md).[[Symbol.toStringTag]](_codec_btreeset_.btreeset.md#[symbol.tostringtag])*

Defined in node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:138

___

###  registry

• **registry**: *Registry*

*Defined in [packages/types/src/codec/BTreeSet.ts:15](https://github.com/polkadot-js/api/blob/c465252e69/packages/types/src/codec/BTreeSet.ts#L15)*

___

###  size

• **size**: *number*

*Inherited from [BTreeSet](_codec_btreeset_.btreeset.md).[size](_codec_btreeset_.btreeset.md#size)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:64

___

### `Static` Set

▪ **Set**: *SetConstructor*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:71

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Defined in [packages/types/src/codec/BTreeSet.ts:105](https://github.com/polkadot-js/api/blob/c465252e69/packages/types/src/codec/BTreeSet.ts#L105)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *IHash*

*Defined in [packages/types/src/codec/BTreeSet.ts:118](https://github.com/polkadot-js/api/blob/c465252e69/packages/types/src/codec/BTreeSet.ts#L118)*

**`description`** Returns a hash of the value

**Returns:** *IHash*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Defined in [packages/types/src/codec/BTreeSet.ts:125](https://github.com/polkadot-js/api/blob/c465252e69/packages/types/src/codec/BTreeSet.ts#L125)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *IterableIterator‹V›*

*Inherited from [BTreeSet](_codec_btreeset_.btreeset.md).[[Symbol.iterator]](_codec_btreeset_.btreeset.md#[symbol.iterator])*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:171

Iterates over values in the set.

**Returns:** *IterableIterator‹V›*

___

###  add

▸ **add**(`value`: V): *this*

*Inherited from [BTreeSet](_codec_btreeset_.btreeset.md).[add](_codec_btreeset_.btreeset.md#add)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:59

**Parameters:**

Name | Type |
------ | ------ |
`value` | V |

**Returns:** *this*

___

###  clear

▸ **clear**(): *void*

*Inherited from [BTreeSet](_codec_btreeset_.btreeset.md).[clear](_codec_btreeset_.btreeset.md#clear)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:60

**Returns:** *void*

___

###  delete

▸ **delete**(`value`: V): *boolean*

*Inherited from [BTreeSet](_codec_btreeset_.btreeset.md).[delete](_codec_btreeset_.btreeset.md#delete)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:61

**Parameters:**

Name | Type |
------ | ------ |
`value` | V |

**Returns:** *boolean*

___

###  entries

▸ **entries**(): *IterableIterator‹[V, V]›*

*Inherited from [BTreeSet](_codec_btreeset_.btreeset.md).[entries](_codec_btreeset_.btreeset.md#entries)*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:175

Returns an iterable of [v,v] pairs for every value `v` in the set.

**Returns:** *IterableIterator‹[V, V]›*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Defined in [packages/types/src/codec/BTreeSet.ts:132](https://github.com/polkadot-js/api/blob/c465252e69/packages/types/src/codec/BTreeSet.ts#L132)*

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

▸ (`value`: V, `value2`: V, `set`: [Set](_codec_btreeset_.btreeset.md#static-set)‹V›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | V |
`value2` | V |
`set` | [Set](_codec_btreeset_.btreeset.md#static-set)‹V› |

▪`Optional`  **thisArg**: *any*

**Returns:** *void*

___

###  has

▸ **has**(`value`: V): *boolean*

*Inherited from [BTreeSet](_codec_btreeset_.btreeset.md).[has](_codec_btreeset_.btreeset.md#has)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:63

**Parameters:**

Name | Type |
------ | ------ |
`value` | V |

**Returns:** *boolean*

___

###  keys

▸ **keys**(): *IterableIterator‹V›*

*Inherited from [BTreeSet](_codec_btreeset_.btreeset.md).[keys](_codec_btreeset_.btreeset.md#keys)*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:179

Despite its name, returns an iterable of the values in the set,

**Returns:** *IterableIterator‹V›*

___

###  toHex

▸ **toHex**(): *string*

*Defined in [packages/types/src/codec/BTreeSet.ts:139](https://github.com/polkadot-js/api/blob/c465252e69/packages/types/src/codec/BTreeSet.ts#L139)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *AnyJsonArray*

*Defined in [packages/types/src/codec/BTreeSet.ts:146](https://github.com/polkadot-js/api/blob/c465252e69/packages/types/src/codec/BTreeSet.ts#L146)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *AnyJsonArray*

___

###  toRawType

▸ **toRawType**(): *string*

*Defined in [packages/types/src/codec/BTreeSet.ts:157](https://github.com/polkadot-js/api/blob/c465252e69/packages/types/src/codec/BTreeSet.ts#L157)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Defined in [packages/types/src/codec/BTreeSet.ts:164](https://github.com/polkadot-js/api/blob/c465252e69/packages/types/src/codec/BTreeSet.ts#L164)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Defined in [packages/types/src/codec/BTreeSet.ts:172](https://github.com/polkadot-js/api/blob/c465252e69/packages/types/src/codec/BTreeSet.ts#L172)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

___

###  values

▸ **values**(): *IterableIterator‹V›*

*Inherited from [BTreeSet](_codec_btreeset_.btreeset.md).[values](_codec_btreeset_.btreeset.md#values)*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:184

Returns an iterable of values in the set.

**Returns:** *IterableIterator‹V›*

___

### `Static` with

▸ **with**<**V**>(`valType`: Constructor‹V› | InterfaceTypes): *Constructor‹[BTreeSet](_codec_btreeset_.btreeset.md)‹V››*

*Defined in [packages/types/src/codec/BTreeSet.ts:94](https://github.com/polkadot-js/api/blob/c465252e69/packages/types/src/codec/BTreeSet.ts#L94)*

**Type parameters:**

▪ **V**: *Codec*

**Parameters:**

Name | Type |
------ | ------ |
`valType` | Constructor‹V› &#124; InterfaceTypes |

**Returns:** *Constructor‹[BTreeSet](_codec_btreeset_.btreeset.md)‹V››*
