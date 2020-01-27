[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/runtime/types"](../modules/_interfaces_runtime_types_.md) › [Block](_interfaces_runtime_types_.block.md)

# Interface: Block <**S, T, V, E**>

GenericBlock

## Type parameters

▪ **S**: *TypesDef*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  ↳ [Block](../classes/_primitive_generic_block_.block.md)

  ↳ **Block**

## Implements

* [Codec](_types_.codec.md)

## Index

### Constructors

* [constructor](_interfaces_runtime_types_.block.md#constructor)

### Properties

* [registry](_interfaces_runtime_types_.block.md#registry)
* [size](_interfaces_runtime_types_.block.md#size)

### Accessors

* [Type](_interfaces_runtime_types_.block.md#type)
* [contentHash](_interfaces_runtime_types_.block.md#contenthash)
* [encodedLength](_interfaces_runtime_types_.block.md#encodedlength)
* [extrinsics](_interfaces_runtime_types_.block.md#extrinsics)
* [hash](_interfaces_runtime_types_.block.md#hash)
* [header](_interfaces_runtime_types_.block.md#header)
* [isEmpty](_interfaces_runtime_types_.block.md#isempty)

### Methods

* [clear](_interfaces_runtime_types_.block.md#clear)
* [delete](_interfaces_runtime_types_.block.md#delete)
* [eq](_interfaces_runtime_types_.block.md#eq)
* [forEach](_interfaces_runtime_types_.block.md#foreach)
* [get](_interfaces_runtime_types_.block.md#get)
* [getAtIndex](_interfaces_runtime_types_.block.md#getatindex)
* [has](_interfaces_runtime_types_.block.md#has)
* [set](_interfaces_runtime_types_.block.md#set)
* [toArray](_interfaces_runtime_types_.block.md#toarray)
* [toHex](_interfaces_runtime_types_.block.md#tohex)
* [toJSON](_interfaces_runtime_types_.block.md#tojson)
* [toRawType](_interfaces_runtime_types_.block.md#torawtype)
* [toString](_interfaces_runtime_types_.block.md#tostring)
* [toU8a](_interfaces_runtime_types_.block.md#tou8a)
* [typesToMap](_interfaces_runtime_types_.block.md#static-typestomap)
* [with](_interfaces_runtime_types_.block.md#static-with)

## Constructors

###  constructor

\+ **new Block**(`registry`: [Registry](_types_.registry.md), `value?`: [BlockValue](_primitive_generic_block_.blockvalue.md) | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)): *[Block](_interfaces_runtime_types_.block.md)*

*Inherited from [Block](_interfaces_runtime_types_.block.md).[constructor](_interfaces_runtime_types_.block.md#constructor)*

*Overrides [Struct](../classes/_codec_struct_.struct.md).[constructor](../classes/_codec_struct_.struct.md#constructor)*

*Defined in [packages/types/src/primitive/Generic/Block.ts:33](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/primitive/Generic/Block.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](_types_.registry.md) |
`value?` | [BlockValue](_primitive_generic_block_.blockvalue.md) &#124; [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) |

**Returns:** *[Block](_interfaces_runtime_types_.block.md)*

## Properties

###  registry

• **registry**: *[Registry](_types_.registry.md)*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[registry](../classes/_codec_struct_.struct.md#registry)*

*Defined in [packages/types/src/codec/Struct.ts:34](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/Struct.ts#L34)*

___

###  size

• **size**: *number*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:28

## Accessors

###  Type

• **get Type**(): *E*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[Type](../classes/_codec_struct_.struct.md#type)*

*Defined in [packages/types/src/codec/Struct.ts:158](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/Struct.ts#L158)*

**`description`** Returns the Type description to sthe structure

**Returns:** *E*

___

###  contentHash

• **get contentHash**(): *[Hash](_interfaces_runtime_types_.hash.md)*

*Inherited from [Block](_interfaces_runtime_types_.block.md).[contentHash](_interfaces_runtime_types_.block.md#contenthash)*

*Defined in [packages/types/src/primitive/Generic/Block.ts:44](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/primitive/Generic/Block.ts#L44)*

**`description`** Encodes a content [Hash](_interfaces_runtime_types_.hash.md) for the block

**Returns:** *[Hash](_interfaces_runtime_types_.hash.md)*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[encodedLength](../classes/_codec_struct_.struct.md#encodedlength)*

*Defined in [packages/types/src/codec/Struct.ts:171](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/Struct.ts#L171)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  extrinsics

• **get extrinsics**(): *[Vec](../classes/_codec_vec_.vec.md)‹[Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md)›*

*Inherited from [Block](_interfaces_runtime_types_.block.md).[extrinsics](_interfaces_runtime_types_.block.md#extrinsics)*

*Defined in [packages/types/src/primitive/Generic/Block.ts:51](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/primitive/Generic/Block.ts#L51)*

**`description`** The [Extrinsic](_interfaces_runtime_types_.extrinsic.md) contained in the block

**Returns:** *[Vec](../classes/_codec_vec_.vec.md)‹[Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md)›*

___

###  hash

• **get hash**(): *[Hash](_interfaces_runtime_types_.hash.md)*

*Inherited from [Block](_interfaces_runtime_types_.block.md).[hash](_interfaces_runtime_types_.block.md#hash)*

*Overrides [Struct](../classes/_codec_struct_.struct.md).[hash](../classes/_codec_struct_.struct.md#hash)*

*Defined in [packages/types/src/primitive/Generic/Block.ts:58](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/primitive/Generic/Block.ts#L58)*

**`description`** Block/header [Hash](_interfaces_runtime_types_.hash.md)

**Returns:** *[Hash](_interfaces_runtime_types_.hash.md)*

___

###  header

• **get header**(): *[Header](_interfaces_runtime_types_.header.md)*

*Inherited from [Block](_interfaces_runtime_types_.block.md).[header](_interfaces_runtime_types_.block.md#header)*

*Defined in [packages/types/src/primitive/Generic/Block.ts:65](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/primitive/Generic/Block.ts#L65)*

**`description`** The [Header](_interfaces_runtime_types_.header.md) of the block

**Returns:** *[Header](_interfaces_runtime_types_.header.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[isEmpty](../classes/_codec_struct_.struct.md#isempty)*

*Defined in [packages/types/src/codec/Struct.ts:143](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/Struct.ts#L143)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

## Methods

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

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[eq](../classes/_codec_struct_.struct.md#eq)*

*Defined in [packages/types/src/codec/Struct.ts:189](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/Struct.ts#L189)*

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

▸ (`value`: [Codec](_types_.codec.md), `key`: keyof S, `map`: [Map](../classes/_codec_struct_.struct.md#static-map)‹keyof S, [Codec](_types_.codec.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Codec](_types_.codec.md) |
`key` | keyof S |
`map` | [Map](../classes/_codec_struct_.struct.md#static-map)‹keyof S, [Codec](_types_.codec.md)› |

▪`Optional`  **thisArg**: *any*

**Returns:** *void*

___

###  get

▸ **get**(`name`: keyof S): *[Codec](_types_.codec.md) | undefined*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[get](../classes/_codec_struct_.struct.md#get)*

*Overrides [BTreeMap](../classes/_codec_btreemap_.btreemap.md).[get](../classes/_codec_btreemap_.btreemap.md#get)*

*Defined in [packages/types/src/codec/Struct.ts:197](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/Struct.ts#L197)*

**`description`** Returns a specific names entry in the structure

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | keyof S | The name of the entry to retrieve  |

**Returns:** *[Codec](_types_.codec.md) | undefined*

___

###  getAtIndex

▸ **getAtIndex**(`index`: number): *[Codec](_types_.codec.md)*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[getAtIndex](../classes/_codec_struct_.struct.md#getatindex)*

*Defined in [packages/types/src/codec/Struct.ts:204](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/Struct.ts#L204)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *[Codec](_types_.codec.md)*

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

###  set

▸ **set**(`key`: keyof S, `value`: [Codec](_types_.codec.md)): *this*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:27

**Parameters:**

Name | Type |
------ | ------ |
`key` | keyof S |
`value` | [Codec](_types_.codec.md) |

**Returns:** *this*

___

###  toArray

▸ **toArray**(): *[Codec](_types_.codec.md)[]*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toArray](../classes/_codec_struct_.struct.md#toarray)*

*Defined in [packages/types/src/codec/Struct.ts:211](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/Struct.ts#L211)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](_types_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toHex](../classes/_codec_struct_.struct.md#tohex)*

*Defined in [packages/types/src/codec/Struct.ts:218](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/Struct.ts#L218)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](_types_.anyjsonobject.md) | string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toJSON](../classes/_codec_struct_.struct.md#tojson)*

*Defined in [packages/types/src/codec/Struct.ts:225](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/Struct.ts#L225)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](_types_.anyjsonobject.md) | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toRawType](../classes/_codec_struct_.struct.md#torawtype)*

*Defined in [packages/types/src/codec/Struct.ts:249](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/Struct.ts#L249)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toString](../classes/_codec_struct_.struct.md#tostring)*

*Defined in [packages/types/src/codec/Struct.ts:258](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/Struct.ts#L258)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: [BareOpts](../modules/_types_.md#bareopts)): *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toU8a](../classes/_codec_struct_.struct.md#tou8a)*

*Defined in [packages/types/src/codec/Struct.ts:266](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/Struct.ts#L266)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | [BareOpts](../modules/_types_.md#bareopts) | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

___

### `Static` typesToMap

▸ **typesToMap**(`registry`: [Registry](_types_.registry.md), `Types`: Record‹string, [Constructor](_types_.constructor.md)›): *Record‹string, string›*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[typesToMap](../classes/_codec_struct_.struct.md#static-typestomap)*

*Defined in [packages/types/src/codec/Struct.ts:238](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/Struct.ts#L238)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](_types_.registry.md) |
`Types` | Record‹string, [Constructor](_types_.constructor.md)› |

**Returns:** *Record‹string, string›*

___

### `Static` with

▸ **with**<**S**>(`Types`: S): *[Constructor](_types_.constructor.md)‹[Struct](../classes/_codec_struct_.struct.md)‹S››*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[with](../classes/_codec_struct_.struct.md#static-with)*

*Defined in [packages/types/src/codec/Struct.ts:120](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/Struct.ts#L120)*

**Type parameters:**

▪ **S**: *TypesDef*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | S |

**Returns:** *[Constructor](_types_.constructor.md)‹[Struct](../classes/_codec_struct_.struct.md)‹S››*
