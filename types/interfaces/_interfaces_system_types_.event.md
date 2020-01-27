[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/system/types"](../modules/_interfaces_system_types_.md) › [Event](_interfaces_system_types_.event.md)

# Interface: Event <**S, T, V, E**>

GenericEvent

## Type parameters

▪ **S**: *TypesDef*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  ↳ [Event](../classes/_primitive_generic_event_.event.md)

  ↳ **Event**

## Implements

* [Codec](_types_.codec.md)

## Index

### Constructors

* [constructor](_interfaces_system_types_.event.md#constructor)

### Properties

* [registry](_interfaces_system_types_.event.md#registry)
* [size](_interfaces_system_types_.event.md#size)

### Accessors

* [Type](_interfaces_system_types_.event.md#type)
* [data](_interfaces_system_types_.event.md#data)
* [encodedLength](_interfaces_system_types_.event.md#encodedlength)
* [hash](_interfaces_system_types_.event.md#hash)
* [index](_interfaces_system_types_.event.md#index)
* [isEmpty](_interfaces_system_types_.event.md#isempty)
* [meta](_interfaces_system_types_.event.md#meta)
* [method](_interfaces_system_types_.event.md#method)
* [section](_interfaces_system_types_.event.md#section)
* [typeDef](_interfaces_system_types_.event.md#typedef)

### Methods

* [clear](_interfaces_system_types_.event.md#clear)
* [delete](_interfaces_system_types_.event.md#delete)
* [eq](_interfaces_system_types_.event.md#eq)
* [forEach](_interfaces_system_types_.event.md#foreach)
* [get](_interfaces_system_types_.event.md#get)
* [getAtIndex](_interfaces_system_types_.event.md#getatindex)
* [has](_interfaces_system_types_.event.md#has)
* [set](_interfaces_system_types_.event.md#set)
* [toArray](_interfaces_system_types_.event.md#toarray)
* [toHex](_interfaces_system_types_.event.md#tohex)
* [toJSON](_interfaces_system_types_.event.md#tojson)
* [toRawType](_interfaces_system_types_.event.md#torawtype)
* [toString](_interfaces_system_types_.event.md#tostring)
* [toU8a](_interfaces_system_types_.event.md#tou8a)
* [decodeEvent](_interfaces_system_types_.event.md#static-decodeevent)
* [typesToMap](_interfaces_system_types_.event.md#static-typestomap)
* [with](_interfaces_system_types_.event.md#static-with)

## Constructors

###  constructor

\+ **new Event**(`registry`: [Registry](_types_.registry.md), `_value?`: [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)): *[Event](_interfaces_system_types_.event.md)*

*Inherited from [Event](_interfaces_system_types_.event.md).[constructor](_interfaces_system_types_.event.md#constructor)*

*Overrides [Struct](../classes/_codec_struct_.struct.md).[constructor](../classes/_codec_struct_.struct.md#constructor)*

*Defined in [packages/types/src/primitive/Generic/Event.ts:72](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/primitive/Generic/Event.ts#L72)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](_types_.registry.md) |
`_value?` | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) |

**Returns:** *[Event](_interfaces_system_types_.event.md)*

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

###  data

• **get data**(): *[EventData](../classes/_primitive_generic_event_.eventdata.md)*

*Inherited from [Event](_interfaces_system_types_.event.md).[data](_interfaces_system_types_.event.md#data)*

*Defined in [packages/types/src/primitive/Generic/Event.ts:105](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/primitive/Generic/Event.ts#L105)*

**`description`** The wrapped [EventData](../classes/_primitive_generic_event_.eventdata.md)

**Returns:** *[EventData](../classes/_primitive_generic_event_.eventdata.md)*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[encodedLength](../classes/_codec_struct_.struct.md#encodedlength)*

*Defined in [packages/types/src/codec/Struct.ts:171](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/Struct.ts#L171)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](_types_.ihash.md)*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[hash](../classes/_codec_struct_.struct.md#hash)*

*Defined in [packages/types/src/codec/Struct.ts:182](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/Struct.ts#L182)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](_types_.ihash.md)*

___

###  index

• **get index**(): *[EventId](_interfaces_system_types_.eventid.md)*

*Inherited from [Event](_interfaces_system_types_.event.md).[index](_interfaces_system_types_.event.md#index)*

*Defined in [packages/types/src/primitive/Generic/Event.ts:112](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/primitive/Generic/Event.ts#L112)*

**`description`** The [EventId](_interfaces_system_types_.eventid.md), identifying the raw event

**Returns:** *[EventId](_interfaces_system_types_.eventid.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[isEmpty](../classes/_codec_struct_.struct.md#isempty)*

*Defined in [packages/types/src/codec/Struct.ts:143](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/Struct.ts#L143)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  meta

• **get meta**(): *[EventMetadataLatest](_interfaces_metadata_types_.eventmetadatalatest.md)*

*Inherited from [Event](_interfaces_system_types_.event.md).[meta](_interfaces_system_types_.event.md#meta)*

*Defined in [packages/types/src/primitive/Generic/Event.ts:119](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/primitive/Generic/Event.ts#L119)*

**`description`** The [[EventMetadata]] with the documentation

**Returns:** *[EventMetadataLatest](_interfaces_metadata_types_.eventmetadatalatest.md)*

___

###  method

• **get method**(): *string*

*Inherited from [Event](_interfaces_system_types_.event.md).[method](_interfaces_system_types_.event.md#method)*

*Defined in [packages/types/src/primitive/Generic/Event.ts:126](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/primitive/Generic/Event.ts#L126)*

**`description`** The method string identifying the event

**Returns:** *string*

___

###  section

• **get section**(): *string*

*Inherited from [Event](_interfaces_system_types_.event.md).[section](_interfaces_system_types_.event.md#section)*

*Defined in [packages/types/src/primitive/Generic/Event.ts:133](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/primitive/Generic/Event.ts#L133)*

**`description`** The section string identifying the event

**Returns:** *string*

___

###  typeDef

• **get typeDef**(): *[TypeDef](_codec_create_types_.typedef.md)[]*

*Inherited from [Event](_interfaces_system_types_.event.md).[typeDef](_interfaces_system_types_.event.md#typedef)*

*Defined in [packages/types/src/primitive/Generic/Event.ts:140](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/primitive/Generic/Event.ts#L140)*

**`description`** The [TypeDef](_codec_create_types_.typedef.md) for the event

**Returns:** *[TypeDef](_codec_create_types_.typedef.md)[]*

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

### `Static` decodeEvent

▸ **decodeEvent**(`registry`: [Registry](_types_.registry.md), `value`: [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)): *object*

*Inherited from [Event](_interfaces_system_types_.event.md).[decodeEvent](_interfaces_system_types_.event.md#static-decodeevent)*

*Defined in [packages/types/src/primitive/Generic/Event.ts:84](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/primitive/Generic/Event.ts#L84)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`registry` | [Registry](_types_.registry.md) | - |
`value` | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) | new Uint8Array() |

**Returns:** *object*

* **DataType**: *[Constructor](_types_.constructor.md)‹[Null](../classes/_primitive_null_.null.md)› | [Constructor](_types_.constructor.md)‹[EventData](../classes/_primitive_generic_event_.eventdata.md)›*

* **value**? : *undefined | object*

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
