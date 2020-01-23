[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["codec/BTreeMap"](../modules/_codec_btreemap_.md) › [BTreeMap](_codec_btreemap_.btreemap.md)

# Class: BTreeMap <**K, V**>

## Type parameters

▪ **K**: *[Codec](../interfaces/_types_.codec.md)*

▪ **V**: *[Codec](../interfaces/_types_.codec.md)*

## Hierarchy

* Map‹K, V›

  ↳ **BTreeMap**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_codec_btreemap_.btreemap.md#constructor)

### Properties

* [[Symbol.toStringTag]](_codec_btreemap_.btreemap.md#[symbol.tostringtag])
* [registry](_codec_btreemap_.btreemap.md#registry)
* [size](_codec_btreemap_.btreemap.md#size)
* [Map](_codec_btreemap_.btreemap.md#static-map)

### Accessors

* [encodedLength](_codec_btreemap_.btreemap.md#encodedlength)
* [hash](_codec_btreemap_.btreemap.md#hash)
* [isEmpty](_codec_btreemap_.btreemap.md#isempty)

### Methods

* [[Symbol.iterator]](_codec_btreemap_.btreemap.md#[symbol.iterator])
* [clear](_codec_btreemap_.btreemap.md#clear)
* [delete](_codec_btreemap_.btreemap.md#delete)
* [entries](_codec_btreemap_.btreemap.md#entries)
* [eq](_codec_btreemap_.btreemap.md#eq)
* [forEach](_codec_btreemap_.btreemap.md#foreach)
* [get](_codec_btreemap_.btreemap.md#get)
* [has](_codec_btreemap_.btreemap.md#has)
* [keys](_codec_btreemap_.btreemap.md#keys)
* [set](_codec_btreemap_.btreemap.md#set)
* [toHex](_codec_btreemap_.btreemap.md#tohex)
* [toJSON](_codec_btreemap_.btreemap.md#tojson)
* [toRawType](_codec_btreemap_.btreemap.md#torawtype)
* [toString](_codec_btreemap_.btreemap.md#tostring)
* [toU8a](_codec_btreemap_.btreemap.md#tou8a)
* [values](_codec_btreemap_.btreemap.md#values)
* [with](_codec_btreemap_.btreemap.md#static-with)

## Constructors

###  constructor

\+ **new BTreeMap**(`registry`: [Registry](../interfaces/_types_.registry.md), `keyType`: [Constructor](../interfaces/_types_.constructor.md)‹K› | [InterfaceTypes](../modules/_types_.md#interfacetypes), `valType`: [Constructor](../interfaces/_types_.constructor.md)‹V› | [InterfaceTypes](../modules/_types_.md#interfacetypes), `rawValue`: any): *[BTreeMap](_codec_btreemap_.btreemap.md)*

*Defined in [packages/types/src/codec/BTreeMap.ts:19](https://github.com/polkadot-js/api/blob/7ef945d15b/packages/types/src/codec/BTreeMap.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_types_.registry.md) |
`keyType` | [Constructor](../interfaces/_types_.constructor.md)‹K› &#124; [InterfaceTypes](../modules/_types_.md#interfacetypes) |
`valType` | [Constructor](../interfaces/_types_.constructor.md)‹V› &#124; [InterfaceTypes](../modules/_types_.md#interfacetypes) |
`rawValue` | any |

**Returns:** *[BTreeMap](_codec_btreemap_.btreemap.md)*

## Properties

###  [Symbol.toStringTag]

• **[Symbol.toStringTag]**: *string*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:130

___

###  registry

• **registry**: *[Registry](../interfaces/_types_.registry.md)*

*Implementation of [Codec](../interfaces/_types_.codec.md).[registry](../interfaces/_types_.codec.md#registry)*

*Defined in [packages/types/src/codec/BTreeMap.ts:15](https://github.com/polkadot-js/api/blob/7ef945d15b/packages/types/src/codec/BTreeMap.ts#L15)*

___

###  size

• **size**: *number*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:28

___

### `Static` Map

▪ **Map**: *MapConstructor*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:36

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Defined in [packages/types/src/codec/BTreeMap.ts:108](https://github.com/polkadot-js/api/blob/7ef945d15b/packages/types/src/codec/BTreeMap.ts#L108)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](../interfaces/_types_.ihash.md)*

*Defined in [packages/types/src/codec/BTreeMap.ts:121](https://github.com/polkadot-js/api/blob/7ef945d15b/packages/types/src/codec/BTreeMap.ts#L121)*

**`description`** Returns a hash of the value

**Returns:** *[IHash](../interfaces/_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Defined in [packages/types/src/codec/BTreeMap.ts:128](https://github.com/polkadot-js/api/blob/7ef945d15b/packages/types/src/codec/BTreeMap.ts#L128)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *IterableIterator‹[K, V]›*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:121

Returns an iterable of entries in the map.

**Returns:** *IterableIterator‹[K, V]›*

___

###  clear

▸ **clear**(): *void*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:22

**Returns:** *void*

___

###  delete

▸ **delete**(`key`: K): *boolean*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:23

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |

**Returns:** *boolean*

___

###  entries

▸ **entries**(): *IterableIterator‹[K, V]›*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:126

Returns an iterable of key, value pairs for every entry in the map.

**Returns:** *IterableIterator‹[K, V]›*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [packages/types/src/codec/BTreeMap.ts:135](https://github.com/polkadot-js/api/blob/7ef945d15b/packages/types/src/codec/BTreeMap.ts#L135)*

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

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:24

**Parameters:**

▪ **callbackfn**: *function*

▸ (`value`: V, `key`: K, `map`: Map‹K, V›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | V |
`key` | K |
`map` | Map‹K, V› |

▪`Optional`  **thisArg**: *any*

**Returns:** *void*

___

###  get

▸ **get**(`key`: K): *V | undefined*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:25

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |

**Returns:** *V | undefined*

___

###  has

▸ **has**(`key`: K): *boolean*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:26

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |

**Returns:** *boolean*

___

###  keys

▸ **keys**(): *IterableIterator‹K›*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:131

Returns an iterable of keys in the map

**Returns:** *IterableIterator‹K›*

___

###  set

▸ **set**(`key`: K, `value`: V): *this*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:27

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |
`value` | V |

**Returns:** *this*

___

###  toHex

▸ **toHex**(): *string*

*Defined in [packages/types/src/codec/BTreeMap.ts:142](https://github.com/polkadot-js/api/blob/7ef945d15b/packages/types/src/codec/BTreeMap.ts#L142)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_.md#anyjson)*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [packages/types/src/codec/BTreeMap.ts:149](https://github.com/polkadot-js/api/blob/7ef945d15b/packages/types/src/codec/BTreeMap.ts#L149)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [packages/types/src/codec/BTreeMap.ts:162](https://github.com/polkadot-js/api/blob/7ef945d15b/packages/types/src/codec/BTreeMap.ts#L162)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [packages/types/src/codec/BTreeMap.ts:169](https://github.com/polkadot-js/api/blob/7ef945d15b/packages/types/src/codec/BTreeMap.ts#L169)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Defined in [packages/types/src/codec/BTreeMap.ts:177](https://github.com/polkadot-js/api/blob/7ef945d15b/packages/types/src/codec/BTreeMap.ts#L177)*

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

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:136

Returns an iterable of values in the map

**Returns:** *IterableIterator‹V›*

___

### `Static` with

▸ **with**<**K**, **V**>(`keyType`: [Constructor](../interfaces/_types_.constructor.md)‹K› | [InterfaceTypes](../modules/_types_.md#interfacetypes), `valType`: [Constructor](../interfaces/_types_.constructor.md)‹V› | [InterfaceTypes](../modules/_types_.md#interfacetypes)): *[Constructor](../interfaces/_types_.constructor.md)‹[BTreeMap](_codec_btreemap_.btreemap.md)‹K, V››*

*Defined in [packages/types/src/codec/BTreeMap.ts:97](https://github.com/polkadot-js/api/blob/7ef945d15b/packages/types/src/codec/BTreeMap.ts#L97)*

**Type parameters:**

▪ **K**: *[Codec](../interfaces/_types_.codec.md)*

▪ **V**: *[Codec](../interfaces/_types_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`keyType` | [Constructor](../interfaces/_types_.constructor.md)‹K› &#124; [InterfaceTypes](../modules/_types_.md#interfacetypes) |
`valType` | [Constructor](../interfaces/_types_.constructor.md)‹V› &#124; [InterfaceTypes](../modules/_types_.md#interfacetypes) |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹[BTreeMap](_codec_btreemap_.btreemap.md)‹K, V››*
