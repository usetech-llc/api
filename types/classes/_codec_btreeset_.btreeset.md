[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["codec/BTreeSet"](../modules/_codec_btreeset_.md) › [BTreeSet](_codec_btreeset_.btreeset.md)

# Class: BTreeSet <**V**>

## Type parameters

▪ **V**: *[Codec](../interfaces/_types_.codec.md)*

## Hierarchy

* Set‹V›

  ↳ **BTreeSet**

## Implements

* [Codec](../interfaces/_types_.codec.md)

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

\+ **new BTreeSet**(`registry`: [Registry](../interfaces/_types_.registry.md), `valType`: [Constructor](../interfaces/_types_.constructor.md)‹V› | [InterfaceTypes](../modules/_types_.md#interfacetypes), `rawValue`: any): *[BTreeSet](_codec_btreeset_.btreeset.md)*

*Defined in [packages/types/src/codec/BTreeSet.ts:17](https://github.com/polkadot-js/api/blob/e855da1f13/packages/types/src/codec/BTreeSet.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_types_.registry.md) |
`valType` | [Constructor](../interfaces/_types_.constructor.md)‹V› &#124; [InterfaceTypes](../modules/_types_.md#interfacetypes) |
`rawValue` | any |

**Returns:** *[BTreeSet](_codec_btreeset_.btreeset.md)*

## Properties

###  [Symbol.toStringTag]

• **[Symbol.toStringTag]**: *string*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:138

___

###  registry

• **registry**: *[Registry](../interfaces/_types_.registry.md)*

*Implementation of [Codec](../interfaces/_types_.codec.md).[registry](../interfaces/_types_.codec.md#registry)*

*Defined in [packages/types/src/codec/BTreeSet.ts:15](https://github.com/polkadot-js/api/blob/e855da1f13/packages/types/src/codec/BTreeSet.ts#L15)*

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

*Defined in [packages/types/src/codec/BTreeSet.ts:102](https://github.com/polkadot-js/api/blob/e855da1f13/packages/types/src/codec/BTreeSet.ts#L102)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](../interfaces/_types_.ihash.md)*

*Defined in [packages/types/src/codec/BTreeSet.ts:115](https://github.com/polkadot-js/api/blob/e855da1f13/packages/types/src/codec/BTreeSet.ts#L115)*

**`description`** Returns a hash of the value

**Returns:** *[IHash](../interfaces/_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Defined in [packages/types/src/codec/BTreeSet.ts:122](https://github.com/polkadot-js/api/blob/e855da1f13/packages/types/src/codec/BTreeSet.ts#L122)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *IterableIterator‹V›*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:171

Iterates over values in the set.

**Returns:** *IterableIterator‹V›*

___

###  add

▸ **add**(`value`: V): *this*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:59

**Parameters:**

Name | Type |
------ | ------ |
`value` | V |

**Returns:** *this*

___

###  clear

▸ **clear**(): *void*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:60

**Returns:** *void*

___

###  delete

▸ **delete**(`value`: V): *boolean*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:61

**Parameters:**

Name | Type |
------ | ------ |
`value` | V |

**Returns:** *boolean*

___

###  entries

▸ **entries**(): *IterableIterator‹[V, V]›*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:175

Returns an iterable of [v,v] pairs for every value `v` in the set.

**Returns:** *IterableIterator‹[V, V]›*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [packages/types/src/codec/BTreeSet.ts:129](https://github.com/polkadot-js/api/blob/e855da1f13/packages/types/src/codec/BTreeSet.ts#L129)*

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

▸ (`value`: V, `value2`: V, `set`: Set‹V›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | V |
`value2` | V |
`set` | Set‹V› |

▪`Optional`  **thisArg**: *any*

**Returns:** *void*

___

###  has

▸ **has**(`value`: V): *boolean*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:63

**Parameters:**

Name | Type |
------ | ------ |
`value` | V |

**Returns:** *boolean*

___

###  keys

▸ **keys**(): *IterableIterator‹V›*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:179

Despite its name, returns an iterable of the values in the set,

**Returns:** *IterableIterator‹V›*

___

###  toHex

▸ **toHex**(): *string*

*Defined in [packages/types/src/codec/BTreeSet.ts:136](https://github.com/polkadot-js/api/blob/e855da1f13/packages/types/src/codec/BTreeSet.ts#L136)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonArray](../interfaces/_types_.anyjsonarray.md)*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [packages/types/src/codec/BTreeSet.ts:143](https://github.com/polkadot-js/api/blob/e855da1f13/packages/types/src/codec/BTreeSet.ts#L143)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonArray](../interfaces/_types_.anyjsonarray.md)*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [packages/types/src/codec/BTreeSet.ts:154](https://github.com/polkadot-js/api/blob/e855da1f13/packages/types/src/codec/BTreeSet.ts#L154)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [packages/types/src/codec/BTreeSet.ts:161](https://github.com/polkadot-js/api/blob/e855da1f13/packages/types/src/codec/BTreeSet.ts#L161)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Defined in [packages/types/src/codec/BTreeSet.ts:169](https://github.com/polkadot-js/api/blob/e855da1f13/packages/types/src/codec/BTreeSet.ts#L169)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*

___

###  values

▸ **values**(): *IterableIterator‹V›*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:184

Returns an iterable of values in the set.

**Returns:** *IterableIterator‹V›*

___

### `Static` with

▸ **with**<**V**>(`valType`: [Constructor](../interfaces/_types_.constructor.md)‹V› | [InterfaceTypes](../modules/_types_.md#interfacetypes)): *[Constructor](../interfaces/_types_.constructor.md)‹[BTreeSet](_codec_btreeset_.btreeset.md)‹V››*

*Defined in [packages/types/src/codec/BTreeSet.ts:91](https://github.com/polkadot-js/api/blob/e855da1f13/packages/types/src/codec/BTreeSet.ts#L91)*

**Type parameters:**

▪ **V**: *[Codec](../interfaces/_types_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`valType` | [Constructor](../interfaces/_types_.constructor.md)‹V› &#124; [InterfaceTypes](../modules/_types_.md#interfacetypes) |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹[BTreeSet](_codec_btreeset_.btreeset.md)‹V››*
