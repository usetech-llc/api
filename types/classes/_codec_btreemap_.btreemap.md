[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["codec/BTreeMap"](../modules/_codec_btreemap_.md) › [BTreeMap](_codec_btreemap_.btreemap.md)

# Class: BTreeMap <**K, V**>

## Type parameters

▪ **K**: *Codec*

▪ **V**: *Codec*

## Hierarchy

* [Map](_codec_struct_.struct.md#static-map)‹K, V›

  ↳ **BTreeMap**

## Implements

* Codec

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

\+ **new BTreeMap**(`registry`: Registry, `keyType`: Constructor‹K› | InterfaceTypes, `valType`: Constructor‹V› | InterfaceTypes, `rawValue`: any): *[BTreeMap](_codec_btreemap_.btreemap.md)*

*Defined in [packages/types/src/codec/BTreeMap.ts:19](https://github.com/polkadot-js/api/blob/1e975c68ee/packages/types/src/codec/BTreeMap.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | Registry |
`keyType` | Constructor‹K› &#124; InterfaceTypes |
`valType` | Constructor‹V› &#124; InterfaceTypes |
`rawValue` | any |

**Returns:** *[BTreeMap](_codec_btreemap_.btreemap.md)*

## Properties

###  [Symbol.toStringTag]

• **[Symbol.toStringTag]**: *string*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:130

___

###  registry

• **registry**: *Registry*

*Defined in [packages/types/src/codec/BTreeMap.ts:15](https://github.com/polkadot-js/api/blob/1e975c68ee/packages/types/src/codec/BTreeMap.ts#L15)*

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

*Defined in [packages/types/src/codec/BTreeMap.ts:111](https://github.com/polkadot-js/api/blob/1e975c68ee/packages/types/src/codec/BTreeMap.ts#L111)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *IHash*

*Defined in [packages/types/src/codec/BTreeMap.ts:124](https://github.com/polkadot-js/api/blob/1e975c68ee/packages/types/src/codec/BTreeMap.ts#L124)*

**`description`** Returns a hash of the value

**Returns:** *IHash*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Defined in [packages/types/src/codec/BTreeMap.ts:131](https://github.com/polkadot-js/api/blob/1e975c68ee/packages/types/src/codec/BTreeMap.ts#L131)*

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

*Defined in [packages/types/src/codec/BTreeMap.ts:138](https://github.com/polkadot-js/api/blob/1e975c68ee/packages/types/src/codec/BTreeMap.ts#L138)*

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

▸ (`value`: V, `key`: K, `map`: [Map](_codec_struct_.struct.md#static-map)‹K, V›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | V |
`key` | K |
`map` | [Map](_codec_struct_.struct.md#static-map)‹K, V› |

▪`Optional`  **thisArg**: *any*

**Returns:** *void*

___

###  get

▸ **get**(`key`: K): *V | undefined*

*Inherited from [BTreeMap](_codec_btreemap_.btreemap.md).[get](_codec_btreemap_.btreemap.md#get)*

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

*Defined in [packages/types/src/codec/BTreeMap.ts:145](https://github.com/polkadot-js/api/blob/1e975c68ee/packages/types/src/codec/BTreeMap.ts#L145)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *AnyJson*

*Defined in [packages/types/src/codec/BTreeMap.ts:152](https://github.com/polkadot-js/api/blob/1e975c68ee/packages/types/src/codec/BTreeMap.ts#L152)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *AnyJson*

___

###  toRawType

▸ **toRawType**(): *string*

*Defined in [packages/types/src/codec/BTreeMap.ts:165](https://github.com/polkadot-js/api/blob/1e975c68ee/packages/types/src/codec/BTreeMap.ts#L165)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Defined in [packages/types/src/codec/BTreeMap.ts:172](https://github.com/polkadot-js/api/blob/1e975c68ee/packages/types/src/codec/BTreeMap.ts#L172)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Defined in [packages/types/src/codec/BTreeMap.ts:180](https://github.com/polkadot-js/api/blob/1e975c68ee/packages/types/src/codec/BTreeMap.ts#L180)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

___

###  values

▸ **values**(): *IterableIterator‹V›*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:136

Returns an iterable of values in the map

**Returns:** *IterableIterator‹V›*

___

### `Static` with

▸ **with**<**K**, **V**>(`keyType`: Constructor‹K› | InterfaceTypes, `valType`: Constructor‹V› | InterfaceTypes): *Constructor‹[BTreeMap](_codec_btreemap_.btreemap.md)‹K, V››*

*Defined in [packages/types/src/codec/BTreeMap.ts:100](https://github.com/polkadot-js/api/blob/1e975c68ee/packages/types/src/codec/BTreeMap.ts#L100)*

**Type parameters:**

▪ **K**: *Codec*

▪ **V**: *Codec*

**Parameters:**

Name | Type |
------ | ------ |
`keyType` | Constructor‹K› &#124; InterfaceTypes |
`valType` | Constructor‹V› &#124; InterfaceTypes |

**Returns:** *Constructor‹[BTreeMap](_codec_btreemap_.btreemap.md)‹K, V››*
