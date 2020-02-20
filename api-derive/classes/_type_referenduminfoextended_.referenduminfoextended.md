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

* [delay](_type_referenduminfoextended_.referenduminfoextended.md#delay)
* [end](_type_referenduminfoextended_.referenduminfoextended.md#end)
* [proposalHash](_type_referenduminfoextended_.referenduminfoextended.md#proposalhash)
* [registry](_type_referenduminfoextended_.referenduminfoextended.md#registry)
* [size](_type_referenduminfoextended_.referenduminfoextended.md#size)
* [threshold](_type_referenduminfoextended_.referenduminfoextended.md#threshold)

### Accessors

* [Type](_type_referenduminfoextended_.referenduminfoextended.md#type)
* [defKeys](_type_referenduminfoextended_.referenduminfoextended.md#defkeys)
* [encodedLength](_type_referenduminfoextended_.referenduminfoextended.md#encodedlength)
* [hash](_type_referenduminfoextended_.referenduminfoextended.md#hash)
* [index](_type_referenduminfoextended_.referenduminfoextended.md#index)
* [isEmpty](_type_referenduminfoextended_.referenduminfoextended.md#isempty)

### Methods

* [clear](_type_referenduminfoextended_.referenduminfoextended.md#clear)
* [delete](_type_referenduminfoextended_.referenduminfoextended.md#delete)
* [eq](_type_referenduminfoextended_.referenduminfoextended.md#eq)
* [forEach](_type_referenduminfoextended_.referenduminfoextended.md#foreach)
* [get](_type_referenduminfoextended_.referenduminfoextended.md#get)
* [getAtIndex](_type_referenduminfoextended_.referenduminfoextended.md#getatindex)
* [has](_type_referenduminfoextended_.referenduminfoextended.md#has)
* [set](_type_referenduminfoextended_.referenduminfoextended.md#set)
* [toArray](_type_referenduminfoextended_.referenduminfoextended.md#toarray)
* [toHex](_type_referenduminfoextended_.referenduminfoextended.md#tohex)
* [toHuman](_type_referenduminfoextended_.referenduminfoextended.md#tohuman)
* [toJSON](_type_referenduminfoextended_.referenduminfoextended.md#tojson)
* [toRawType](_type_referenduminfoextended_.referenduminfoextended.md#torawtype)
* [toString](_type_referenduminfoextended_.referenduminfoextended.md#tostring)
* [toU8a](_type_referenduminfoextended_.referenduminfoextended.md#tou8a)
* [typesToMap](_type_referenduminfoextended_.referenduminfoextended.md#static-typestomap)
* [with](_type_referenduminfoextended_.referenduminfoextended.md#static-with)

## Constructors

###  constructor

\+ **new ReferendumInfoExtended**(`registry`: Registry, `value`: ReferendumInfo | [ReferendumInfoExtended](_type_referenduminfoextended_.referenduminfoextended.md), `index?`: BN | number): *[ReferendumInfoExtended](_type_referenduminfoextended_.referenduminfoextended.md)*

*Overrides void*

*Defined in [packages/api-derive/src/type/ReferendumInfoExtended.ts:21](https://github.com/polkadot-js/api/blob/92129746dc/packages/api-derive/src/type/ReferendumInfoExtended.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | Registry |
`value` | ReferendumInfo &#124; [ReferendumInfoExtended](_type_referenduminfoextended_.referenduminfoextended.md) |
`index?` | BN &#124; number |

**Returns:** *[ReferendumInfoExtended](_type_referenduminfoextended_.referenduminfoextended.md)*

## Properties

###  delay

• **delay**: *BlockNumber*

*Inherited from [ReferendumInfoExtended](_type_referenduminfoextended_.referenduminfoextended.md).[delay](_type_referenduminfoextended_.referenduminfoextended.md#delay)*

*Defined in [packages/types/src/interfaces/democracy/types.ts:34](https://github.com/polkadot-js/api/blob/92129746dc/packages/types/src/interfaces/democracy/types.ts#L34)*

___

###  end

• **end**: *BlockNumber*

*Inherited from [ReferendumInfoExtended](_type_referenduminfoextended_.referenduminfoextended.md).[end](_type_referenduminfoextended_.referenduminfoextended.md#end)*

*Defined in [packages/types/src/interfaces/democracy/types.ts:31](https://github.com/polkadot-js/api/blob/92129746dc/packages/types/src/interfaces/democracy/types.ts#L31)*

___

###  proposalHash

• **proposalHash**: *Hash*

*Inherited from [ReferendumInfoExtended](_type_referenduminfoextended_.referenduminfoextended.md).[proposalHash](_type_referenduminfoextended_.referenduminfoextended.md#proposalhash)*

*Defined in [packages/types/src/interfaces/democracy/types.ts:32](https://github.com/polkadot-js/api/blob/92129746dc/packages/types/src/interfaces/democracy/types.ts#L32)*

___

###  registry

• **registry**: *Registry*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[registry](_type_headerextended_.headerextended.md#registry)*

*Defined in [packages/types/src/codec/Struct.ts:106](https://github.com/polkadot-js/api/blob/92129746dc/packages/types/src/codec/Struct.ts#L106)*

___

###  size

• **size**: *number*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[size](_type_headerextended_.headerextended.md#size)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:28

___

###  threshold

• **threshold**: *VoteThreshold*

*Inherited from [ReferendumInfoExtended](_type_referenduminfoextended_.referenduminfoextended.md).[threshold](_type_referenduminfoextended_.referenduminfoextended.md#threshold)*

*Defined in [packages/types/src/interfaces/democracy/types.ts:33](https://github.com/polkadot-js/api/blob/92129746dc/packages/types/src/interfaces/democracy/types.ts#L33)*

## Accessors

###  Type

• **get Type**(): *E*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[Type](_type_headerextended_.headerextended.md#type)*

*Defined in [packages/types/src/codec/Struct.ts:168](https://github.com/polkadot-js/api/blob/92129746dc/packages/types/src/codec/Struct.ts#L168)*

**`description`** Returns the Type description to sthe structure

**Returns:** *E*

___

###  defKeys

• **get defKeys**(): *string[]*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[defKeys](_type_headerextended_.headerextended.md#defkeys)*

*Defined in [packages/types/src/codec/Struct.ts:146](https://github.com/polkadot-js/api/blob/92129746dc/packages/types/src/codec/Struct.ts#L146)*

**`description`** The available keys for this enum

**Returns:** *string[]*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[encodedLength](_type_headerextended_.headerextended.md#encodedlength)*

*Defined in [packages/types/src/codec/Struct.ts:181](https://github.com/polkadot-js/api/blob/92129746dc/packages/types/src/codec/Struct.ts#L181)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *H256*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[hash](_type_headerextended_.headerextended.md#hash)*

*Defined in [packages/types/src/codec/Struct.ts:192](https://github.com/polkadot-js/api/blob/92129746dc/packages/types/src/codec/Struct.ts#L192)*

**`description`** returns a hash of the contents

**Returns:** *H256*

___

###  index

• **get index**(): *ReferendumIndex*

*Defined in [packages/api-derive/src/type/ReferendumInfoExtended.ts:34](https://github.com/polkadot-js/api/blob/92129746dc/packages/api-derive/src/type/ReferendumInfoExtended.ts#L34)*

**`description`** Convenience getter, returns the referendumIndex

**Returns:** *ReferendumIndex*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[isEmpty](_type_headerextended_.headerextended.md#isempty)*

*Defined in [packages/types/src/codec/Struct.ts:153](https://github.com/polkadot-js/api/blob/92129746dc/packages/types/src/codec/Struct.ts#L153)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

## Methods

###  clear

▸ **clear**(): *void*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[clear](_type_headerextended_.headerextended.md#clear)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:22

**Returns:** *void*

___

###  delete

▸ **delete**(`key`: keyof S): *boolean*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[delete](_type_headerextended_.headerextended.md#delete)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:23

**Parameters:**

Name | Type |
------ | ------ |
`key` | keyof S |

**Returns:** *boolean*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[eq](_type_headerextended_.headerextended.md#eq)*

*Defined in [packages/types/src/codec/Struct.ts:199](https://github.com/polkadot-js/api/blob/92129746dc/packages/types/src/codec/Struct.ts#L199)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  forEach

▸ **forEach**(`callbackfn`: function, `thisArg?`: any): *void*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[forEach](_type_headerextended_.headerextended.md#foreach)*

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

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[get](_type_headerextended_.headerextended.md#get)*

*Overrides void*

*Defined in [packages/types/src/codec/Struct.ts:207](https://github.com/polkadot-js/api/blob/92129746dc/packages/types/src/codec/Struct.ts#L207)*

**`description`** Returns a specific names entry in the structure

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | keyof S | The name of the entry to retrieve  |

**Returns:** *Codec | undefined*

___

###  getAtIndex

▸ **getAtIndex**(`index`: number): *Codec*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[getAtIndex](_type_headerextended_.headerextended.md#getatindex)*

*Defined in [packages/types/src/codec/Struct.ts:214](https://github.com/polkadot-js/api/blob/92129746dc/packages/types/src/codec/Struct.ts#L214)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *Codec*

___

###  has

▸ **has**(`key`: keyof S): *boolean*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[has](_type_headerextended_.headerextended.md#has)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:26

**Parameters:**

Name | Type |
------ | ------ |
`key` | keyof S |

**Returns:** *boolean*

___

###  set

▸ **set**(`key`: keyof S, `value`: Codec): *this*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[set](_type_headerextended_.headerextended.md#set)*

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

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[toArray](_type_headerextended_.headerextended.md#toarray)*

*Defined in [packages/types/src/codec/Struct.ts:221](https://github.com/polkadot-js/api/blob/92129746dc/packages/types/src/codec/Struct.ts#L221)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *Codec[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[toHex](_type_headerextended_.headerextended.md#tohex)*

*Defined in [packages/types/src/codec/Struct.ts:228](https://github.com/polkadot-js/api/blob/92129746dc/packages/types/src/codec/Struct.ts#L228)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(`isExtended?`: undefined | false | true): *AnyJsonObject*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[toHuman](_type_headerextended_.headerextended.md#tohuman)*

*Defined in [packages/types/src/codec/Struct.ts:235](https://github.com/polkadot-js/api/blob/92129746dc/packages/types/src/codec/Struct.ts#L235)*

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

**Parameters:**

Name | Type |
------ | ------ |
`isExtended?` | undefined &#124; false &#124; true |

**Returns:** *AnyJsonObject*

___

###  toJSON

▸ **toJSON**(): *AnyJsonObject*

*Overrides void*

*Defined in [packages/api-derive/src/type/ReferendumInfoExtended.ts:41](https://github.com/polkadot-js/api/blob/92129746dc/packages/api-derive/src/type/ReferendumInfoExtended.ts#L41)*

**`description`** Creates the JSON representation

**Returns:** *AnyJsonObject*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[toRawType](_type_headerextended_.headerextended.md#torawtype)*

*Defined in [packages/types/src/codec/Struct.ts:273](https://github.com/polkadot-js/api/blob/92129746dc/packages/types/src/codec/Struct.ts#L273)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[toString](_type_headerextended_.headerextended.md#tostring)*

*Defined in [packages/types/src/codec/Struct.ts:282](https://github.com/polkadot-js/api/blob/92129746dc/packages/types/src/codec/Struct.ts#L282)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: BareOpts): *Uint8Array*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[toU8a](_type_headerextended_.headerextended.md#tou8a)*

*Defined in [packages/types/src/codec/Struct.ts:290](https://github.com/polkadot-js/api/blob/92129746dc/packages/types/src/codec/Struct.ts#L290)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | BareOpts | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*

___

### `Static` typesToMap

▸ **typesToMap**(`registry`: Registry, `Types`: Record‹string, Constructor›): *Record‹string, string›*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[typesToMap](_type_headerextended_.headerextended.md#static-typestomap)*

*Defined in [packages/types/src/codec/Struct.ts:262](https://github.com/polkadot-js/api/blob/92129746dc/packages/types/src/codec/Struct.ts#L262)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | Registry |
`Types` | Record‹string, Constructor› |

**Returns:** *Record‹string, string›*

___

### `Static` with

▸ **with**<**S**>(`Types`: S): *Constructor‹Struct‹S››*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[with](_type_headerextended_.headerextended.md#static-with)*

*Defined in [packages/types/src/codec/Struct.ts:123](https://github.com/polkadot-js/api/blob/92129746dc/packages/types/src/codec/Struct.ts#L123)*

**Type parameters:**

▪ **S**: *TypesDef*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | S |

**Returns:** *Constructor‹Struct‹S››*
