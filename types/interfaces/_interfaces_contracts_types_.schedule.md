[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/contracts/types"](../modules/_interfaces_contracts_types_.md) › [Schedule](_interfaces_contracts_types_.schedule.md)

# Interface: Schedule <**S, T, V, E**>

Struct

## Type parameters

▪ **S**: *TypesDef*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  ↳ [Struct](../classes/_codec_struct_.struct.md)

  ↳ **Schedule**

## Implements

* [Codec](_types_.codec.md)

## Index

### Constructors

* [constructor](_interfaces_contracts_types_.schedule.md#constructor)

### Properties

* [enablePrintln](_interfaces_contracts_types_.schedule.md#enableprintln)
* [eventBaseCost](_interfaces_contracts_types_.schedule.md#eventbasecost)
* [eventDataPerByteCost](_interfaces_contracts_types_.schedule.md#eventdataperbytecost)
* [eventPerTopicCost](_interfaces_contracts_types_.schedule.md#eventpertopiccost)
* [growMemCost](_interfaces_contracts_types_.schedule.md#growmemcost)
* [maxEventTopics](_interfaces_contracts_types_.schedule.md#maxeventtopics)
* [maxMemoryPages](_interfaces_contracts_types_.schedule.md#maxmemorypages)
* [maxStackHeight](_interfaces_contracts_types_.schedule.md#maxstackheight)
* [maxSubjectLen](_interfaces_contracts_types_.schedule.md#maxsubjectlen)
* [putCodePerByteCost](_interfaces_contracts_types_.schedule.md#putcodeperbytecost)
* [registry](_interfaces_contracts_types_.schedule.md#registry)
* [regularOpCost](_interfaces_contracts_types_.schedule.md#regularopcost)
* [returnDataPerByteCost](_interfaces_contracts_types_.schedule.md#returndataperbytecost)
* [sandboxDataReadCost](_interfaces_contracts_types_.schedule.md#sandboxdatareadcost)
* [sandboxDataWriteCost](_interfaces_contracts_types_.schedule.md#sandboxdatawritecost)
* [version](_interfaces_contracts_types_.schedule.md#version)

### Accessors

* [Type](_interfaces_contracts_types_.schedule.md#type)
* [encodedLength](_interfaces_contracts_types_.schedule.md#encodedlength)
* [hash](_interfaces_contracts_types_.schedule.md#hash)
* [isEmpty](_interfaces_contracts_types_.schedule.md#isempty)

### Methods

* [eq](_interfaces_contracts_types_.schedule.md#eq)
* [get](_interfaces_contracts_types_.schedule.md#get)
* [getAtIndex](_interfaces_contracts_types_.schedule.md#getatindex)
* [toArray](_interfaces_contracts_types_.schedule.md#toarray)
* [toHex](_interfaces_contracts_types_.schedule.md#tohex)
* [toJSON](_interfaces_contracts_types_.schedule.md#tojson)
* [toRawType](_interfaces_contracts_types_.schedule.md#torawtype)
* [toString](_interfaces_contracts_types_.schedule.md#tostring)
* [toU8a](_interfaces_contracts_types_.schedule.md#tou8a)
* [typesToMap](_interfaces_contracts_types_.schedule.md#static-typestomap)
* [with](_interfaces_contracts_types_.schedule.md#static-with)

## Constructors

###  constructor

\+ **new Schedule**(`registry`: [Registry](_types_.registry.md), `Types`: S, `value`: V | [Map](../classes/_codec_struct_.struct.md#static-map)‹any, any› | any[] | string, `jsonMap`: [Map](../classes/_codec_struct_.struct.md#static-map)‹keyof S, string›): *[Schedule](_interfaces_contracts_types_.schedule.md)*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[constructor](../classes/_codec_struct_.struct.md#constructor)*

*Defined in [packages/types/src/codec/Struct.ts:38](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/Struct.ts#L38)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`registry` | [Registry](_types_.registry.md) | - |
`Types` | S | - |
`value` | V &#124; [Map](../classes/_codec_struct_.struct.md#static-map)‹any, any› &#124; any[] &#124; string | {} as V |
`jsonMap` | [Map](../classes/_codec_struct_.struct.md#static-map)‹keyof S, string› | new Map() |

**Returns:** *[Schedule](_interfaces_contracts_types_.schedule.md)*

## Properties

###  enablePrintln

• **enablePrintln**: *[bool](_interfaceregistry_.interfaceregistry.md#bool)*

*Defined in [packages/types/src/interfaces/contracts/types.ts:124](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/interfaces/contracts/types.ts#L124)*

bool

___

###  eventBaseCost

• **eventBaseCost**: *[Gas](_interfaces_contracts_types_.gas.md)*

*Defined in [packages/types/src/interfaces/contracts/types.ts:112](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/interfaces/contracts/types.ts#L112)*

Gas

___

###  eventDataPerByteCost

• **eventDataPerByteCost**: *[Gas](_interfaces_contracts_types_.gas.md)*

*Defined in [packages/types/src/interfaces/contracts/types.ts:108](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/interfaces/contracts/types.ts#L108)*

Gas

___

###  eventPerTopicCost

• **eventPerTopicCost**: *[Gas](_interfaces_contracts_types_.gas.md)*

*Defined in [packages/types/src/interfaces/contracts/types.ts:110](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/interfaces/contracts/types.ts#L110)*

Gas

___

###  growMemCost

• **growMemCost**: *[Gas](_interfaces_contracts_types_.gas.md)*

*Defined in [packages/types/src/interfaces/contracts/types.ts:102](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/interfaces/contracts/types.ts#L102)*

Gas

___

###  maxEventTopics

• **maxEventTopics**: *[u32](_interfaceregistry_.interfaceregistry.md#u32)*

*Defined in [packages/types/src/interfaces/contracts/types.ts:118](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/interfaces/contracts/types.ts#L118)*

u32

___

###  maxMemoryPages

• **maxMemoryPages**: *[u32](_interfaceregistry_.interfaceregistry.md#u32)*

*Defined in [packages/types/src/interfaces/contracts/types.ts:122](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/interfaces/contracts/types.ts#L122)*

u32

___

###  maxStackHeight

• **maxStackHeight**: *[u32](_interfaceregistry_.interfaceregistry.md#u32)*

*Defined in [packages/types/src/interfaces/contracts/types.ts:120](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/interfaces/contracts/types.ts#L120)*

u32

___

###  maxSubjectLen

• **maxSubjectLen**: *[u32](_interfaceregistry_.interfaceregistry.md#u32)*

*Defined in [packages/types/src/interfaces/contracts/types.ts:126](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/interfaces/contracts/types.ts#L126)*

u32

___

###  putCodePerByteCost

• **putCodePerByteCost**: *[Gas](_interfaces_contracts_types_.gas.md)*

*Defined in [packages/types/src/interfaces/contracts/types.ts:100](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/interfaces/contracts/types.ts#L100)*

Gas

___

###  registry

• **registry**: *[Registry](_types_.registry.md)*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[registry](../classes/_codec_struct_.struct.md#registry)*

*Defined in [packages/types/src/codec/Struct.ts:34](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/Struct.ts#L34)*

___

###  regularOpCost

• **regularOpCost**: *[Gas](_interfaces_contracts_types_.gas.md)*

*Defined in [packages/types/src/interfaces/contracts/types.ts:104](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/interfaces/contracts/types.ts#L104)*

Gas

___

###  returnDataPerByteCost

• **returnDataPerByteCost**: *[Gas](_interfaces_contracts_types_.gas.md)*

*Defined in [packages/types/src/interfaces/contracts/types.ts:106](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/interfaces/contracts/types.ts#L106)*

Gas

___

###  sandboxDataReadCost

• **sandboxDataReadCost**: *[Gas](_interfaces_contracts_types_.gas.md)*

*Defined in [packages/types/src/interfaces/contracts/types.ts:114](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/interfaces/contracts/types.ts#L114)*

Gas

___

###  sandboxDataWriteCost

• **sandboxDataWriteCost**: *[Gas](_interfaces_contracts_types_.gas.md)*

*Defined in [packages/types/src/interfaces/contracts/types.ts:116](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/interfaces/contracts/types.ts#L116)*

Gas

___

###  version

• **version**: *[u32](_interfaceregistry_.interfaceregistry.md#u32)*

*Defined in [packages/types/src/interfaces/contracts/types.ts:98](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/interfaces/contracts/types.ts#L98)*

u32

## Accessors

###  Type

• **get Type**(): *E*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[Type](../classes/_codec_struct_.struct.md#type)*

*Defined in [packages/types/src/codec/Struct.ts:158](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/Struct.ts#L158)*

**`description`** Returns the Type description to sthe structure

**Returns:** *E*

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

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[isEmpty](../classes/_codec_struct_.struct.md#isempty)*

*Defined in [packages/types/src/codec/Struct.ts:143](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/Struct.ts#L143)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

## Methods

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
