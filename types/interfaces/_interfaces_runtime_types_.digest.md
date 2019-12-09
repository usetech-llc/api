[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/runtime/types"](../modules/_interfaces_runtime_types_.md) › [Digest](_interfaces_runtime_types_.digest.md)

# Interface: Digest <**S, T, V, E**>

GenericDigest

## Type parameters

▪ **S**: *TypesDef*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  ↳ [Digest](../classes/_primitive_generic_digest_.digest.md)

  ↳ **Digest**

  ↳ [DigestOf](_interfaces_system_types_.digestof.md)

## Implements

* [Codec](_types_.codec.md)

## Index

### Constructors

* [constructor](_interfaces_runtime_types_.digest.md#constructor)

### Properties

* [registry](_interfaces_runtime_types_.digest.md#registry)

### Accessors

* [Type](_interfaces_runtime_types_.digest.md#type)
* [encodedLength](_interfaces_runtime_types_.digest.md#encodedlength)
* [hash](_interfaces_runtime_types_.digest.md#hash)
* [isEmpty](_interfaces_runtime_types_.digest.md#isempty)
* [logs](_interfaces_runtime_types_.digest.md#logs)

### Methods

* [eq](_interfaces_runtime_types_.digest.md#eq)
* [get](_interfaces_runtime_types_.digest.md#get)
* [getAtIndex](_interfaces_runtime_types_.digest.md#getatindex)
* [logsWith](_interfaces_runtime_types_.digest.md#logswith)
* [logsWithout](_interfaces_runtime_types_.digest.md#logswithout)
* [toArray](_interfaces_runtime_types_.digest.md#toarray)
* [toHex](_interfaces_runtime_types_.digest.md#tohex)
* [toJSON](_interfaces_runtime_types_.digest.md#tojson)
* [toRawType](_interfaces_runtime_types_.digest.md#torawtype)
* [toString](_interfaces_runtime_types_.digest.md#tostring)
* [toU8a](_interfaces_runtime_types_.digest.md#tou8a)
* [typesToMap](_interfaces_runtime_types_.digest.md#static-typestomap)
* [with](_interfaces_runtime_types_.digest.md#static-with)

## Constructors

###  constructor

\+ **new Digest**(`registry`: [Registry](_types_.registry.md), `value`: any): *[Digest](_interfaces_runtime_types_.digest.md)*

*Inherited from [Digest](../classes/_primitive_generic_digest_.digest.md).[constructor](../classes/_primitive_generic_digest_.digest.md#constructor)*

*Overrides [Struct](../classes/_codec_struct_.struct.md).[constructor](../classes/_codec_struct_.struct.md#constructor)*

*Defined in [packages/types/src/primitive/Generic/Digest.ts:166](https://github.com/polkadot-js/api/blob/8a5a86e8b/packages/types/src/primitive/Generic/Digest.ts#L166)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](_types_.registry.md) |
`value` | any |

**Returns:** *[Digest](_interfaces_runtime_types_.digest.md)*

## Properties

###  registry

• **registry**: *[Registry](_types_.registry.md)*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[registry](../classes/_codec_struct_.struct.md#registry)*

*Defined in [packages/types/src/codec/Struct.ts:34](https://github.com/polkadot-js/api/blob/8a5a86e8b/packages/types/src/codec/Struct.ts#L34)*

## Accessors

###  Type

• **get Type**(): *E*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[Type](../classes/_codec_struct_.struct.md#type)*

*Defined in [packages/types/src/codec/Struct.ts:158](https://github.com/polkadot-js/api/blob/8a5a86e8b/packages/types/src/codec/Struct.ts#L158)*

**`description`** Returns the Type description to sthe structure

**Returns:** *E*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[encodedLength](../classes/_codec_struct_.struct.md#encodedlength)*

*Defined in [packages/types/src/codec/Struct.ts:171](https://github.com/polkadot-js/api/blob/8a5a86e8b/packages/types/src/codec/Struct.ts#L171)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](_types_.ihash.md)*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[hash](../classes/_codec_struct_.struct.md#hash)*

*Defined in [packages/types/src/codec/Struct.ts:182](https://github.com/polkadot-js/api/blob/8a5a86e8b/packages/types/src/codec/Struct.ts#L182)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[isEmpty](../classes/_codec_struct_.struct.md#isempty)*

*Defined in [packages/types/src/codec/Struct.ts:143](https://github.com/polkadot-js/api/blob/8a5a86e8b/packages/types/src/codec/Struct.ts#L143)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  logs

• **get logs**(): *[Vec](../classes/_codec_vec_.vec.md)‹[DigestItem](../classes/_primitive_generic_digest_.digestitem.md)›*

*Inherited from [Digest](../classes/_primitive_generic_digest_.digest.md).[logs](../classes/_primitive_generic_digest_.digest.md#logs)*

*Defined in [packages/types/src/primitive/Generic/Digest.ts:176](https://github.com/polkadot-js/api/blob/8a5a86e8b/packages/types/src/primitive/Generic/Digest.ts#L176)*

**`description`** The [DigestItem](_interfaces_runtime_types_.digestitem.md) logs

**Returns:** *[Vec](../classes/_codec_vec_.vec.md)‹[DigestItem](../classes/_primitive_generic_digest_.digestitem.md)›*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[eq](../classes/_codec_struct_.struct.md#eq)*

*Defined in [packages/types/src/codec/Struct.ts:189](https://github.com/polkadot-js/api/blob/8a5a86e8b/packages/types/src/codec/Struct.ts#L189)*

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

*Overrides void*

*Defined in [packages/types/src/codec/Struct.ts:197](https://github.com/polkadot-js/api/blob/8a5a86e8b/packages/types/src/codec/Struct.ts#L197)*

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

*Defined in [packages/types/src/codec/Struct.ts:204](https://github.com/polkadot-js/api/blob/8a5a86e8b/packages/types/src/codec/Struct.ts#L204)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *[Codec](_types_.codec.md)*

___

###  logsWith

▸ **logsWith**(...`include`: string[]): *[Vec](../classes/_codec_vec_.vec.md)‹[DigestItem](../classes/_primitive_generic_digest_.digestitem.md)›*

*Inherited from [Digest](../classes/_primitive_generic_digest_.digest.md).[logsWith](../classes/_primitive_generic_digest_.digest.md#logswith)*

*Defined in [packages/types/src/primitive/Generic/Digest.ts:183](https://github.com/polkadot-js/api/blob/8a5a86e8b/packages/types/src/primitive/Generic/Digest.ts#L183)*

**`description`** The [DigestItem](_interfaces_runtime_types_.digestitem.md) logs, filtered, filter items included. This is useful for derive functionality where only a certain type of log is to be returned.

**Parameters:**

Name | Type |
------ | ------ |
`...include` | string[] |

**Returns:** *[Vec](../classes/_codec_vec_.vec.md)‹[DigestItem](../classes/_primitive_generic_digest_.digestitem.md)›*

___

###  logsWithout

▸ **logsWithout**(...`exclude`: string[]): *[Vec](../classes/_codec_vec_.vec.md)‹[DigestItem](../classes/_primitive_generic_digest_.digestitem.md)›*

*Inherited from [Digest](../classes/_primitive_generic_digest_.digest.md).[logsWithout](../classes/_primitive_generic_digest_.digest.md#logswithout)*

*Defined in [packages/types/src/primitive/Generic/Digest.ts:190](https://github.com/polkadot-js/api/blob/8a5a86e8b/packages/types/src/primitive/Generic/Digest.ts#L190)*

**`description`** The [DigestItem](_interfaces_runtime_types_.digestitem.md) logs, filtered, filter items exluded. This is useful for stripping headers for eg. WASM runtime execution.

**Parameters:**

Name | Type |
------ | ------ |
`...exclude` | string[] |

**Returns:** *[Vec](../classes/_codec_vec_.vec.md)‹[DigestItem](../classes/_primitive_generic_digest_.digestitem.md)›*

___

###  toArray

▸ **toArray**(): *[Codec](_types_.codec.md)[]*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toArray](../classes/_codec_struct_.struct.md#toarray)*

*Defined in [packages/types/src/codec/Struct.ts:211](https://github.com/polkadot-js/api/blob/8a5a86e8b/packages/types/src/codec/Struct.ts#L211)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](_types_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toHex](../classes/_codec_struct_.struct.md#tohex)*

*Defined in [packages/types/src/codec/Struct.ts:218](https://github.com/polkadot-js/api/blob/8a5a86e8b/packages/types/src/codec/Struct.ts#L218)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](_types_.anyjsonobject.md) | string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toJSON](../classes/_codec_struct_.struct.md#tojson)*

*Defined in [packages/types/src/codec/Struct.ts:225](https://github.com/polkadot-js/api/blob/8a5a86e8b/packages/types/src/codec/Struct.ts#L225)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](_types_.anyjsonobject.md) | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toRawType](../classes/_codec_struct_.struct.md#torawtype)*

*Defined in [packages/types/src/codec/Struct.ts:249](https://github.com/polkadot-js/api/blob/8a5a86e8b/packages/types/src/codec/Struct.ts#L249)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toString](../classes/_codec_struct_.struct.md#tostring)*

*Defined in [packages/types/src/codec/Struct.ts:258](https://github.com/polkadot-js/api/blob/8a5a86e8b/packages/types/src/codec/Struct.ts#L258)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: [BareOpts](../modules/_types_.md#bareopts)): *Uint8Array*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toU8a](../classes/_codec_struct_.struct.md#tou8a)*

*Defined in [packages/types/src/codec/Struct.ts:266](https://github.com/polkadot-js/api/blob/8a5a86e8b/packages/types/src/codec/Struct.ts#L266)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | [BareOpts](../modules/_types_.md#bareopts) | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*

___

### `Static` typesToMap

▸ **typesToMap**(`registry`: [Registry](_types_.registry.md), `Types`: Record‹string, [Constructor](_types_.constructor.md)›): *Record‹string, string›*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[typesToMap](../classes/_codec_struct_.struct.md#static-typestomap)*

*Defined in [packages/types/src/codec/Struct.ts:238](https://github.com/polkadot-js/api/blob/8a5a86e8b/packages/types/src/codec/Struct.ts#L238)*

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

*Defined in [packages/types/src/codec/Struct.ts:120](https://github.com/polkadot-js/api/blob/8a5a86e8b/packages/types/src/codec/Struct.ts#L120)*

**Type parameters:**

▪ **S**: *TypesDef*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | S |

**Returns:** *[Constructor](_types_.constructor.md)‹[Struct](../classes/_codec_struct_.struct.md)‹S››*
