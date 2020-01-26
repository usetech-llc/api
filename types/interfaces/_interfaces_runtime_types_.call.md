[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/runtime/types"](../modules/_interfaces_runtime_types_.md) › [Call](_interfaces_runtime_types_.call.md)

# Interface: Call <**S, T, V, E**>

GenericCall

## Type parameters

▪ **S**: *TypesDef*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  ↳ [Call](../classes/_primitive_generic_call_.call.md)

  ↳ **Call**

  ↳ [Proposal](_interfaces_democracy_types_.proposal.md)

## Implements

* [Codec](_types_.codec.md)
* [IMethod](_types_.imethod.md)

## Index

### Constructors

* [constructor](_interfaces_runtime_types_.call.md#constructor)

### Properties

* [registry](_interfaces_runtime_types_.call.md#registry)
* [size](_interfaces_runtime_types_.call.md#size)

### Accessors

* [Type](_interfaces_runtime_types_.call.md#type)
* [args](_interfaces_runtime_types_.call.md#args)
* [argsDef](_interfaces_runtime_types_.call.md#argsdef)
* [callIndex](_interfaces_runtime_types_.call.md#callindex)
* [data](_interfaces_runtime_types_.call.md#data)
* [encodedLength](_interfaces_runtime_types_.call.md#encodedlength)
* [hasOrigin](_interfaces_runtime_types_.call.md#hasorigin)
* [hash](_interfaces_runtime_types_.call.md#hash)
* [isEmpty](_interfaces_runtime_types_.call.md#isempty)
* [meta](_interfaces_runtime_types_.call.md#meta)
* [methodName](_interfaces_runtime_types_.call.md#methodname)
* [sectionName](_interfaces_runtime_types_.call.md#sectionname)

### Methods

* [clear](_interfaces_runtime_types_.call.md#clear)
* [delete](_interfaces_runtime_types_.call.md#delete)
* [eq](_interfaces_runtime_types_.call.md#eq)
* [forEach](_interfaces_runtime_types_.call.md#foreach)
* [get](_interfaces_runtime_types_.call.md#get)
* [getAtIndex](_interfaces_runtime_types_.call.md#getatindex)
* [has](_interfaces_runtime_types_.call.md#has)
* [set](_interfaces_runtime_types_.call.md#set)
* [toArray](_interfaces_runtime_types_.call.md#toarray)
* [toHex](_interfaces_runtime_types_.call.md#tohex)
* [toJSON](_interfaces_runtime_types_.call.md#tojson)
* [toRawType](_interfaces_runtime_types_.call.md#torawtype)
* [toString](_interfaces_runtime_types_.call.md#tostring)
* [toU8a](_interfaces_runtime_types_.call.md#tou8a)
* [filterOrigin](_interfaces_runtime_types_.call.md#static-filterorigin)
* [typesToMap](_interfaces_runtime_types_.call.md#static-typestomap)
* [with](_interfaces_runtime_types_.call.md#static-with)

## Constructors

###  constructor

\+ **new Call**(`registry`: [Registry](_types_.registry.md), `value`: any, `meta?`: [FunctionMetadataLatest](../modules/_interfaces_types_.md#functionmetadatalatest)): *[Call](_interfaces_runtime_types_.call.md)*

*Inherited from [Call](_interfaces_runtime_types_.call.md).[constructor](_interfaces_runtime_types_.call.md#constructor)*

*Overrides [Struct](../classes/_codec_struct_.struct.md).[constructor](../classes/_codec_struct_.struct.md#constructor)*

*Defined in [packages/types/src/primitive/Generic/Call.ts:42](https://github.com/polkadot-js/api/blob/3db15e73a5/packages/types/src/primitive/Generic/Call.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](_types_.registry.md) |
`value` | any |
`meta?` | [FunctionMetadataLatest](../modules/_interfaces_types_.md#functionmetadatalatest) |

**Returns:** *[Call](_interfaces_runtime_types_.call.md)*

## Properties

###  registry

• **registry**: *[Registry](_types_.registry.md)*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[registry](../classes/_codec_struct_.struct.md#registry)*

*Defined in [packages/types/src/codec/Struct.ts:34](https://github.com/polkadot-js/api/blob/3db15e73a5/packages/types/src/codec/Struct.ts#L34)*

___

###  size

• **size**: *number*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:28

## Accessors

###  Type

• **get Type**(): *E*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[Type](../classes/_codec_struct_.struct.md#type)*

*Defined in [packages/types/src/codec/Struct.ts:158](https://github.com/polkadot-js/api/blob/3db15e73a5/packages/types/src/codec/Struct.ts#L158)*

**`description`** Returns the Type description to sthe structure

**Returns:** *E*

___

###  args

• **get args**(): *[Codec](_types_.codec.md)[]*

*Inherited from [Call](_interfaces_runtime_types_.call.md).[args](_interfaces_runtime_types_.call.md#args)*

*Defined in [packages/types/src/primitive/Generic/Call.ts:140](https://github.com/polkadot-js/api/blob/3db15e73a5/packages/types/src/primitive/Generic/Call.ts#L140)*

**`description`** The arguments for the function call

**Returns:** *[Codec](_types_.codec.md)[]*

___

###  argsDef

• **get argsDef**(): *[ArgsDef](../modules/_types_.md#argsdef)*

*Inherited from [Call](_interfaces_runtime_types_.call.md).[argsDef](_interfaces_runtime_types_.call.md#argsdef)*

*Defined in [packages/types/src/primitive/Generic/Call.ts:148](https://github.com/polkadot-js/api/blob/3db15e73a5/packages/types/src/primitive/Generic/Call.ts#L148)*

**`description`** The argument definitions

**Returns:** *[ArgsDef](../modules/_types_.md#argsdef)*

___

###  callIndex

• **get callIndex**(): *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

*Inherited from [Call](_interfaces_runtime_types_.call.md).[callIndex](_interfaces_runtime_types_.call.md#callindex)*

*Defined in [packages/types/src/primitive/Generic/Call.ts:155](https://github.com/polkadot-js/api/blob/3db15e73a5/packages/types/src/primitive/Generic/Call.ts#L155)*

**`description`** The encoded `[sectionIndex, methodIndex]` identifier

**Returns:** *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

___

###  data

• **get data**(): *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

*Inherited from [Call](_interfaces_runtime_types_.call.md).[data](_interfaces_runtime_types_.call.md#data)*

*Defined in [packages/types/src/primitive/Generic/Call.ts:162](https://github.com/polkadot-js/api/blob/3db15e73a5/packages/types/src/primitive/Generic/Call.ts#L162)*

**`description`** The encoded data

**Returns:** *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[encodedLength](../classes/_codec_struct_.struct.md#encodedlength)*

*Defined in [packages/types/src/codec/Struct.ts:171](https://github.com/polkadot-js/api/blob/3db15e73a5/packages/types/src/codec/Struct.ts#L171)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hasOrigin

• **get hasOrigin**(): *boolean*

*Inherited from [Call](_interfaces_runtime_types_.call.md).[hasOrigin](_interfaces_runtime_types_.call.md#hasorigin)*

*Defined in [packages/types/src/primitive/Generic/Call.ts:169](https://github.com/polkadot-js/api/blob/3db15e73a5/packages/types/src/primitive/Generic/Call.ts#L169)*

**`description`** `true` if the `Origin` type is on the method (extrinsic method)

**Returns:** *boolean*

___

###  hash

• **get hash**(): *[IHash](_types_.ihash.md)*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[hash](../classes/_codec_struct_.struct.md#hash)*

*Defined in [packages/types/src/codec/Struct.ts:182](https://github.com/polkadot-js/api/blob/3db15e73a5/packages/types/src/codec/Struct.ts#L182)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[isEmpty](../classes/_codec_struct_.struct.md#isempty)*

*Defined in [packages/types/src/codec/Struct.ts:143](https://github.com/polkadot-js/api/blob/3db15e73a5/packages/types/src/codec/Struct.ts#L143)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  meta

• **get meta**(): *[FunctionMetadataLatest](_interfaces_metadata_types_.functionmetadatalatest.md)*

*Inherited from [Call](_interfaces_runtime_types_.call.md).[meta](_interfaces_runtime_types_.call.md#meta)*

*Defined in [packages/types/src/primitive/Generic/Call.ts:178](https://github.com/polkadot-js/api/blob/3db15e73a5/packages/types/src/primitive/Generic/Call.ts#L178)*

**`description`** The [[FunctionMetadata]]

**Returns:** *[FunctionMetadataLatest](_interfaces_metadata_types_.functionmetadatalatest.md)*

___

###  methodName

• **get methodName**(): *string*

*Inherited from [Call](_interfaces_runtime_types_.call.md).[methodName](_interfaces_runtime_types_.call.md#methodname)*

*Defined in [packages/types/src/primitive/Generic/Call.ts:185](https://github.com/polkadot-js/api/blob/3db15e73a5/packages/types/src/primitive/Generic/Call.ts#L185)*

**`description`** Returns the name of the method

**Returns:** *string*

___

###  sectionName

• **get sectionName**(): *string*

*Inherited from [Call](_interfaces_runtime_types_.call.md).[sectionName](_interfaces_runtime_types_.call.md#sectionname)*

*Defined in [packages/types/src/primitive/Generic/Call.ts:192](https://github.com/polkadot-js/api/blob/3db15e73a5/packages/types/src/primitive/Generic/Call.ts#L192)*

**`description`** Returns the module containing the method

**Returns:** *string*

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

*Defined in [packages/types/src/codec/Struct.ts:189](https://github.com/polkadot-js/api/blob/3db15e73a5/packages/types/src/codec/Struct.ts#L189)*

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

*Defined in [packages/types/src/codec/Struct.ts:197](https://github.com/polkadot-js/api/blob/3db15e73a5/packages/types/src/codec/Struct.ts#L197)*

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

*Defined in [packages/types/src/codec/Struct.ts:204](https://github.com/polkadot-js/api/blob/3db15e73a5/packages/types/src/codec/Struct.ts#L204)*

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

*Defined in [packages/types/src/codec/Struct.ts:211](https://github.com/polkadot-js/api/blob/3db15e73a5/packages/types/src/codec/Struct.ts#L211)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](_types_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toHex](../classes/_codec_struct_.struct.md#tohex)*

*Defined in [packages/types/src/codec/Struct.ts:218](https://github.com/polkadot-js/api/blob/3db15e73a5/packages/types/src/codec/Struct.ts#L218)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](_types_.anyjsonobject.md) | string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toJSON](../classes/_codec_struct_.struct.md#tojson)*

*Defined in [packages/types/src/codec/Struct.ts:225](https://github.com/polkadot-js/api/blob/3db15e73a5/packages/types/src/codec/Struct.ts#L225)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](_types_.anyjsonobject.md) | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Call](_interfaces_runtime_types_.call.md).[toRawType](_interfaces_runtime_types_.call.md#torawtype)*

*Overrides [Struct](../classes/_codec_struct_.struct.md).[toRawType](../classes/_codec_struct_.struct.md#torawtype)*

*Defined in [packages/types/src/primitive/Generic/Call.ts:199](https://github.com/polkadot-js/api/blob/3db15e73a5/packages/types/src/primitive/Generic/Call.ts#L199)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toString](../classes/_codec_struct_.struct.md#tostring)*

*Defined in [packages/types/src/codec/Struct.ts:258](https://github.com/polkadot-js/api/blob/3db15e73a5/packages/types/src/codec/Struct.ts#L258)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: [BareOpts](../modules/_types_.md#bareopts)): *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toU8a](../classes/_codec_struct_.struct.md#tou8a)*

*Defined in [packages/types/src/codec/Struct.ts:266](https://github.com/polkadot-js/api/blob/3db15e73a5/packages/types/src/codec/Struct.ts#L266)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | [BareOpts](../modules/_types_.md#bareopts) | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

___

### `Static` filterOrigin

▸ **filterOrigin**(`meta?`: [FunctionMetadataLatest](../modules/_interfaces_types_.md#functionmetadatalatest)): *[FunctionArgumentMetadataLatest](_interfaces_metadata_types_.functionargumentmetadatalatest.md)[]*

*Inherited from [Call](_interfaces_runtime_types_.call.md).[filterOrigin](_interfaces_runtime_types_.call.md#static-filterorigin)*

*Defined in [packages/types/src/primitive/Generic/Call.ts:113](https://github.com/polkadot-js/api/blob/3db15e73a5/packages/types/src/primitive/Generic/Call.ts#L113)*

**Parameters:**

Name | Type |
------ | ------ |
`meta?` | [FunctionMetadataLatest](../modules/_interfaces_types_.md#functionmetadatalatest) |

**Returns:** *[FunctionArgumentMetadataLatest](_interfaces_metadata_types_.functionargumentmetadatalatest.md)[]*

___

### `Static` typesToMap

▸ **typesToMap**(`registry`: [Registry](_types_.registry.md), `Types`: Record‹string, [Constructor](_types_.constructor.md)›): *Record‹string, string›*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[typesToMap](../classes/_codec_struct_.struct.md#static-typestomap)*

*Defined in [packages/types/src/codec/Struct.ts:238](https://github.com/polkadot-js/api/blob/3db15e73a5/packages/types/src/codec/Struct.ts#L238)*

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

*Defined in [packages/types/src/codec/Struct.ts:120](https://github.com/polkadot-js/api/blob/3db15e73a5/packages/types/src/codec/Struct.ts#L120)*

**Type parameters:**

▪ **S**: *TypesDef*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | S |

**Returns:** *[Constructor](_types_.constructor.md)‹[Struct](../classes/_codec_struct_.struct.md)‹S››*
