[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["type/ReferendumInfoExtended"](../modules/_type_referenduminfoextended_.md) › [ReferendumInfoExtended](_type_referenduminfoextended_.referenduminfoextended.md)

# Class: ReferendumInfoExtended <**S, T, V, E**>

**`name`** ReferendumInfoExtended

**`description`** 
A [[ReferendumInfo]] with an additional `index` field

## Type parameters

▪ **S**: *TypesDef*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

* ReferendumInfo

  ↳ **ReferendumInfoExtended**

## Implements

* Codec

## Index

### Constructors

* [constructor](_type_referenduminfoextended_.referenduminfoextended.md#constructor)

### Properties

* [[Symbol.toStringTag]](_type_referenduminfoextended_.referenduminfoextended.md#[symbol.tostringtag])
* [delay](_type_referenduminfoextended_.referenduminfoextended.md#delay)
* [end](_type_referenduminfoextended_.referenduminfoextended.md#end)
* [proposalHash](_type_referenduminfoextended_.referenduminfoextended.md#proposalhash)
* [registry](_type_referenduminfoextended_.referenduminfoextended.md#registry)
* [size](_type_referenduminfoextended_.referenduminfoextended.md#size)
* [threshold](_type_referenduminfoextended_.referenduminfoextended.md#threshold)

### Accessors

* [Type](_type_referenduminfoextended_.referenduminfoextended.md#type)
* [encodedLength](_type_referenduminfoextended_.referenduminfoextended.md#encodedlength)
* [hash](_type_referenduminfoextended_.referenduminfoextended.md#hash)
* [index](_type_referenduminfoextended_.referenduminfoextended.md#index)
* [isEmpty](_type_referenduminfoextended_.referenduminfoextended.md#isempty)

### Methods

* [[Symbol.iterator]](_type_referenduminfoextended_.referenduminfoextended.md#[symbol.iterator])
* [clear](_type_referenduminfoextended_.referenduminfoextended.md#clear)
* [delete](_type_referenduminfoextended_.referenduminfoextended.md#delete)
* [entries](_type_referenduminfoextended_.referenduminfoextended.md#entries)
* [eq](_type_referenduminfoextended_.referenduminfoextended.md#eq)
* [forEach](_type_referenduminfoextended_.referenduminfoextended.md#foreach)
* [get](_type_referenduminfoextended_.referenduminfoextended.md#get)
* [getAtIndex](_type_referenduminfoextended_.referenduminfoextended.md#getatindex)
* [has](_type_referenduminfoextended_.referenduminfoextended.md#has)
* [keys](_type_referenduminfoextended_.referenduminfoextended.md#keys)
* [set](_type_referenduminfoextended_.referenduminfoextended.md#set)
* [toArray](_type_referenduminfoextended_.referenduminfoextended.md#toarray)
* [toHex](_type_referenduminfoextended_.referenduminfoextended.md#tohex)
* [toJSON](_type_referenduminfoextended_.referenduminfoextended.md#tojson)
* [toRawType](_type_referenduminfoextended_.referenduminfoextended.md#torawtype)
* [toString](_type_referenduminfoextended_.referenduminfoextended.md#tostring)
* [toU8a](_type_referenduminfoextended_.referenduminfoextended.md#tou8a)
* [values](_type_referenduminfoextended_.referenduminfoextended.md#values)
* [typesToMap](_type_referenduminfoextended_.referenduminfoextended.md#static-typestomap)
* [with](_type_referenduminfoextended_.referenduminfoextended.md#static-with)

## Constructors

###  constructor

\+ **new ReferendumInfoExtended**(`registry`: Registry, `value`: ReferendumInfo | [ReferendumInfoExtended](_type_referenduminfoextended_.referenduminfoextended.md), `index?`: BN | number): *[ReferendumInfoExtended](_type_referenduminfoextended_.referenduminfoextended.md)*

*Overrides void*

*Defined in [packages/api-derive/src/type/ReferendumInfoExtended.ts:21](https://github.com/polkadot-js/api/blob/5739b69757/packages/api-derive/src/type/ReferendumInfoExtended.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | Registry |
`value` | ReferendumInfo &#124; [ReferendumInfoExtended](_type_referenduminfoextended_.referenduminfoextended.md) |
`index?` | BN &#124; number |

**Returns:** *[ReferendumInfoExtended](_type_referenduminfoextended_.referenduminfoextended.md)*

## Properties

###  [Symbol.toStringTag]

• **[Symbol.toStringTag]**: *string*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:130

___

###  delay

• **delay**: *BlockNumber*

*Inherited from void*

*Defined in [packages/types/src/interfaces/democracy/types.ts:45](https://github.com/polkadot-js/api/blob/5739b69757/packages/types/src/interfaces/democracy/types.ts#L45)*

BlockNumber

___

###  end

• **end**: *BlockNumber*

*Inherited from void*

*Defined in [packages/types/src/interfaces/democracy/types.ts:39](https://github.com/polkadot-js/api/blob/5739b69757/packages/types/src/interfaces/democracy/types.ts#L39)*

BlockNumber

___

###  proposalHash

• **proposalHash**: *Hash*

*Inherited from void*

*Defined in [packages/types/src/interfaces/democracy/types.ts:41](https://github.com/polkadot-js/api/blob/5739b69757/packages/types/src/interfaces/democracy/types.ts#L41)*

Hash

___

###  registry

• **registry**: *Registry*

*Inherited from void*

*Defined in [packages/types/src/codec/Struct.ts:34](https://github.com/polkadot-js/api/blob/5739b69757/packages/types/src/codec/Struct.ts#L34)*

___

###  size

• **size**: *number*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:28

___

###  threshold

• **threshold**: *VoteThreshold*

*Inherited from void*

*Defined in [packages/types/src/interfaces/democracy/types.ts:43](https://github.com/polkadot-js/api/blob/5739b69757/packages/types/src/interfaces/democracy/types.ts#L43)*

VoteThreshold

## Accessors

###  Type

• **get Type**(): *E*

*Inherited from void*

*Defined in [packages/types/src/codec/Struct.ts:158](https://github.com/polkadot-js/api/blob/5739b69757/packages/types/src/codec/Struct.ts#L158)*

**`description`** Returns the Type description to sthe structure

**Returns:** *E*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from void*

*Defined in [packages/types/src/codec/Struct.ts:171](https://github.com/polkadot-js/api/blob/5739b69757/packages/types/src/codec/Struct.ts#L171)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *IHash*

*Inherited from void*

*Defined in [packages/types/src/codec/Struct.ts:182](https://github.com/polkadot-js/api/blob/5739b69757/packages/types/src/codec/Struct.ts#L182)*

**`description`** returns a hash of the contents

**Returns:** *IHash*

___

###  index

• **get index**(): *ReferendumIndex*

*Defined in [packages/api-derive/src/type/ReferendumInfoExtended.ts:34](https://github.com/polkadot-js/api/blob/5739b69757/packages/api-derive/src/type/ReferendumInfoExtended.ts#L34)*

**`description`** Convenience getter, returns the referendumIndex

**Returns:** *ReferendumIndex*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from void*

*Defined in [packages/types/src/codec/Struct.ts:143](https://github.com/polkadot-js/api/blob/5739b69757/packages/types/src/codec/Struct.ts#L143)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *IterableIterator‹[keyof S, Codec]›*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:121

Returns an iterable of entries in the map.

**Returns:** *IterableIterator‹[keyof S, Codec]›*

___

###  clear

▸ **clear**(): *void*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:22

**Returns:** *void*

___

###  delete

▸ **delete**(`key`: keyof S): *boolean*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:23

**Parameters:**

Name | Type |
------ | ------ |
`key` | keyof S |

**Returns:** *boolean*

___

###  entries

▸ **entries**(): *IterableIterator‹[keyof S, Codec]›*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:126

Returns an iterable of key, value pairs for every entry in the map.

**Returns:** *IterableIterator‹[keyof S, Codec]›*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from void*

*Defined in [packages/types/src/codec/Struct.ts:189](https://github.com/polkadot-js/api/blob/5739b69757/packages/types/src/codec/Struct.ts#L189)*

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

▸ (`value`: Codec, `key`: keyof S, `map`: Map‹keyof S, Codec›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | Codec |
`key` | keyof S |
`map` | Map‹keyof S, Codec› |

▪`Optional`  **thisArg**: *any*

**Returns:** *void*

___

###  get

▸ **get**(`name`: keyof S): *Codec | undefined*

*Inherited from void*

*Overrides void*

*Defined in [packages/types/src/codec/Struct.ts:197](https://github.com/polkadot-js/api/blob/5739b69757/packages/types/src/codec/Struct.ts#L197)*

**`description`** Returns a specific names entry in the structure

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | keyof S | The name of the entry to retrieve  |

**Returns:** *Codec | undefined*

___

###  getAtIndex

▸ **getAtIndex**(`index`: number): *Codec*

*Inherited from void*

*Defined in [packages/types/src/codec/Struct.ts:204](https://github.com/polkadot-js/api/blob/5739b69757/packages/types/src/codec/Struct.ts#L204)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *Codec*

___

###  has

▸ **has**(`key`: keyof S): *boolean*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:26

**Parameters:**

Name | Type |
------ | ------ |
`key` | keyof S |

**Returns:** *boolean*

___

###  keys

▸ **keys**(): *IterableIterator‹keyof S›*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:131

Returns an iterable of keys in the map

**Returns:** *IterableIterator‹keyof S›*

___

###  set

▸ **set**(`key`: keyof S, `value`: Codec): *this*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:27

**Parameters:**

Name | Type |
------ | ------ |
`key` | keyof S |
`value` | Codec |

**Returns:** *this*

___

###  toArray

▸ **toArray**(): *Codec[]*

*Inherited from void*

*Defined in [packages/types/src/codec/Struct.ts:211](https://github.com/polkadot-js/api/blob/5739b69757/packages/types/src/codec/Struct.ts#L211)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *Codec[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from void*

*Defined in [packages/types/src/codec/Struct.ts:218](https://github.com/polkadot-js/api/blob/5739b69757/packages/types/src/codec/Struct.ts#L218)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *AnyJsonObject*

*Overrides void*

*Defined in [packages/api-derive/src/type/ReferendumInfoExtended.ts:41](https://github.com/polkadot-js/api/blob/5739b69757/packages/api-derive/src/type/ReferendumInfoExtended.ts#L41)*

**`description`** Creates the JSON representation

**Returns:** *AnyJsonObject*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from void*

*Defined in [packages/types/src/codec/Struct.ts:249](https://github.com/polkadot-js/api/blob/5739b69757/packages/types/src/codec/Struct.ts#L249)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from void*

*Defined in [packages/types/src/codec/Struct.ts:258](https://github.com/polkadot-js/api/blob/5739b69757/packages/types/src/codec/Struct.ts#L258)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: BareOpts): *Uint8Array*

*Inherited from void*

*Defined in [packages/types/src/codec/Struct.ts:266](https://github.com/polkadot-js/api/blob/5739b69757/packages/types/src/codec/Struct.ts#L266)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | BareOpts | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*

___

###  values

▸ **values**(): *IterableIterator‹Codec›*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:136

Returns an iterable of values in the map

**Returns:** *IterableIterator‹Codec›*

___

### `Static` typesToMap

▸ **typesToMap**(`registry`: Registry, `Types`: Record‹string, Constructor›): *Record‹string, string›*

*Inherited from void*

*Defined in [packages/types/src/codec/Struct.ts:238](https://github.com/polkadot-js/api/blob/5739b69757/packages/types/src/codec/Struct.ts#L238)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | Registry |
`Types` | Record‹string, Constructor› |

**Returns:** *Record‹string, string›*

___

### `Static` with

▸ **with**<**S**>(`Types`: S): *Constructor‹Struct‹S››*

*Inherited from void*

*Defined in [packages/types/src/codec/Struct.ts:120](https://github.com/polkadot-js/api/blob/5739b69757/packages/types/src/codec/Struct.ts#L120)*

**Type parameters:**

▪ **S**: *TypesDef*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | S |

**Returns:** *Constructor‹Struct‹S››*
