[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["primitive/Generic/Digest"](../modules/_primitive_generic_digest_.md) › [Digest](_primitive_generic_digest_.digest.md)

# Class: Digest <**S, T, V, E**>

**`name`** Digest

**`description`** 
A [Header](../interfaces/_interfaceregistry_.interfaceregistry.md#header) Digest

## Type parameters

▪ **S**: *TypesDef*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  ↳ [Struct](_codec_struct_.struct.md)

  ↳ **Digest**

## Implements

* [Codec](../interfaces/_types_codec_.codec.md)

## Index

### Constructors

* [constructor](_primitive_generic_digest_.digest.md#constructor)

### Properties

* [registry](_primitive_generic_digest_.digest.md#registry)

### Accessors

* [Type](_primitive_generic_digest_.digest.md#type)
* [defKeys](_primitive_generic_digest_.digest.md#defkeys)
* [encodedLength](_primitive_generic_digest_.digest.md#encodedlength)
* [hash](_primitive_generic_digest_.digest.md#hash)
* [isEmpty](_primitive_generic_digest_.digest.md#isempty)
* [logs](_primitive_generic_digest_.digest.md#logs)

### Methods

* [eq](_primitive_generic_digest_.digest.md#eq)
* [get](_primitive_generic_digest_.digest.md#get)
* [getAtIndex](_primitive_generic_digest_.digest.md#getatindex)
* [logsWith](_primitive_generic_digest_.digest.md#logswith)
* [logsWithout](_primitive_generic_digest_.digest.md#logswithout)
* [toArray](_primitive_generic_digest_.digest.md#toarray)
* [toHex](_primitive_generic_digest_.digest.md#tohex)
* [toHuman](_primitive_generic_digest_.digest.md#tohuman)
* [toJSON](_primitive_generic_digest_.digest.md#tojson)
* [toRawType](_primitive_generic_digest_.digest.md#torawtype)
* [toString](_primitive_generic_digest_.digest.md#tostring)
* [toU8a](_primitive_generic_digest_.digest.md#tou8a)
* [typesToMap](_primitive_generic_digest_.digest.md#static-typestomap)
* [with](_primitive_generic_digest_.digest.md#static-with)

## Constructors

###  constructor

\+ **new Digest**(`registry`: [Registry](../interfaces/_types_registry_.registry.md), `value`: any): *[Digest](_primitive_generic_digest_.digest.md)*

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [packages/types/src/primitive/Generic/Digest.ts:16](https://github.com/polkadot-js/api/blob/bdd1e4c917/packages/types/src/primitive/Generic/Digest.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_types_registry_.registry.md) |
`value` | any |

**Returns:** *[Digest](_primitive_generic_digest_.digest.md)*

## Properties

###  registry

• **registry**: *[Registry](../interfaces/_types_registry_.registry.md)*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md).[registry](../interfaces/_types_codec_.codec.md#registry)*

*Inherited from [Struct](_codec_struct_.struct.md).[registry](_codec_struct_.struct.md#registry)*

*Defined in [packages/types/src/codec/Struct.ts:106](https://github.com/polkadot-js/api/blob/bdd1e4c917/packages/types/src/codec/Struct.ts#L106)*

## Accessors

###  Type

• **get Type**(): *E*

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [packages/types/src/codec/Struct.ts:168](https://github.com/polkadot-js/api/blob/bdd1e4c917/packages/types/src/codec/Struct.ts#L168)*

**`description`** Returns the Type description to sthe structure

**Returns:** *E*

___

###  defKeys

• **get defKeys**(): *string[]*

*Inherited from [Struct](_codec_struct_.struct.md).[defKeys](_codec_struct_.struct.md#defkeys)*

*Defined in [packages/types/src/codec/Struct.ts:146](https://github.com/polkadot-js/api/blob/bdd1e4c917/packages/types/src/codec/Struct.ts#L146)*

**`description`** The available keys for this enum

**Returns:** *string[]*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [packages/types/src/codec/Struct.ts:181](https://github.com/polkadot-js/api/blob/bdd1e4c917/packages/types/src/codec/Struct.ts#L181)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *H256*

*Inherited from [Struct](_codec_struct_.struct.md).[hash](_codec_struct_.struct.md#hash)*

*Defined in [packages/types/src/codec/Struct.ts:192](https://github.com/polkadot-js/api/blob/bdd1e4c917/packages/types/src/codec/Struct.ts#L192)*

**`description`** returns a hash of the contents

**Returns:** *H256*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [packages/types/src/codec/Struct.ts:153](https://github.com/polkadot-js/api/blob/bdd1e4c917/packages/types/src/codec/Struct.ts#L153)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  logs

• **get logs**(): *[Vec](_codec_vec_.vec.md)‹DigestItem›*

*Defined in [packages/types/src/primitive/Generic/Digest.ts:26](https://github.com/polkadot-js/api/blob/bdd1e4c917/packages/types/src/primitive/Generic/Digest.ts#L26)*

**`description`** The [DigestItem](../interfaces/_interfaceregistry_.interfaceregistry.md#digestitem) logs

**Returns:** *[Vec](_codec_vec_.vec.md)‹DigestItem›*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [packages/types/src/codec/Struct.ts:199](https://github.com/polkadot-js/api/blob/bdd1e4c917/packages/types/src/codec/Struct.ts#L199)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  get

▸ **get**(`name`: keyof S): *[Codec](../interfaces/_types_codec_.codec.md) | undefined*

*Inherited from [Struct](_codec_struct_.struct.md).[get](_codec_struct_.struct.md#get)*

*Overrides [BTreeMap](_codec_btreemap_.btreemap.md).[get](_codec_btreemap_.btreemap.md#get)*

*Defined in [packages/types/src/codec/Struct.ts:207](https://github.com/polkadot-js/api/blob/bdd1e4c917/packages/types/src/codec/Struct.ts#L207)*

**`description`** Returns a specific names entry in the structure

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | keyof S | The name of the entry to retrieve  |

**Returns:** *[Codec](../interfaces/_types_codec_.codec.md) | undefined*

___

###  getAtIndex

▸ **getAtIndex**(`index`: number): *[Codec](../interfaces/_types_codec_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[getAtIndex](_codec_struct_.struct.md#getatindex)*

*Defined in [packages/types/src/codec/Struct.ts:214](https://github.com/polkadot-js/api/blob/bdd1e4c917/packages/types/src/codec/Struct.ts#L214)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *[Codec](../interfaces/_types_codec_.codec.md)*

___

###  logsWith

▸ **logsWith**(...`include`: string[]): *[Vec](_codec_vec_.vec.md)‹DigestItem›*

*Defined in [packages/types/src/primitive/Generic/Digest.ts:33](https://github.com/polkadot-js/api/blob/bdd1e4c917/packages/types/src/primitive/Generic/Digest.ts#L33)*

**`description`** The [DigestItem](../interfaces/_interfaceregistry_.interfaceregistry.md#digestitem) logs, filtered, filter items included. This is useful for derive functionality where only a certain type of log is to be returned.

**Parameters:**

Name | Type |
------ | ------ |
`...include` | string[] |

**Returns:** *[Vec](_codec_vec_.vec.md)‹DigestItem›*

___

###  logsWithout

▸ **logsWithout**(...`exclude`: string[]): *[Vec](_codec_vec_.vec.md)‹DigestItem›*

*Defined in [packages/types/src/primitive/Generic/Digest.ts:40](https://github.com/polkadot-js/api/blob/bdd1e4c917/packages/types/src/primitive/Generic/Digest.ts#L40)*

**`description`** The [DigestItem](../interfaces/_interfaceregistry_.interfaceregistry.md#digestitem) logs, filtered, filter items exluded. This is useful for stripping headers for eg. WASM runtime execution.

**Parameters:**

Name | Type |
------ | ------ |
`...exclude` | string[] |

**Returns:** *[Vec](_codec_vec_.vec.md)‹DigestItem›*

___

###  toArray

▸ **toArray**(): *[Codec](../interfaces/_types_codec_.codec.md)[]*

*Inherited from [Struct](_codec_struct_.struct.md).[toArray](_codec_struct_.struct.md#toarray)*

*Defined in [packages/types/src/codec/Struct.ts:221](https://github.com/polkadot-js/api/blob/bdd1e4c917/packages/types/src/codec/Struct.ts#L221)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](../interfaces/_types_codec_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [packages/types/src/codec/Struct.ts:228](https://github.com/polkadot-js/api/blob/bdd1e4c917/packages/types/src/codec/Struct.ts#L228)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(`isExtended?`: undefined | false | true): *[AnyJsonObject](../interfaces/_types_helpers_.anyjsonobject.md)*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toHuman](_codec_struct_.struct.md#tohuman)*

*Defined in [packages/types/src/codec/Struct.ts:235](https://github.com/polkadot-js/api/blob/bdd1e4c917/packages/types/src/codec/Struct.ts#L235)*

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

**Parameters:**

Name | Type |
------ | ------ |
`isExtended?` | undefined &#124; false &#124; true |

**Returns:** *[AnyJsonObject](../interfaces/_types_helpers_.anyjsonobject.md)*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](../interfaces/_types_helpers_.anyjsonobject.md)*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Overrides [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [packages/types/src/primitive/Generic/Digest.ts:47](https://github.com/polkadot-js/api/blob/bdd1e4c917/packages/types/src/primitive/Generic/Digest.ts#L47)*

**`desrcript`** The JSON representation as it goes over RPC

**Returns:** *[AnyJsonObject](../interfaces/_types_helpers_.anyjsonobject.md)*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [packages/types/src/codec/Struct.ts:273](https://github.com/polkadot-js/api/blob/bdd1e4c917/packages/types/src/codec/Struct.ts#L273)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [packages/types/src/codec/Struct.ts:282](https://github.com/polkadot-js/api/blob/bdd1e4c917/packages/types/src/codec/Struct.ts#L282)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: [BareOpts](../modules/_types_helpers_.md#bareopts)): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [packages/types/src/codec/Struct.ts:290](https://github.com/polkadot-js/api/blob/bdd1e4c917/packages/types/src/codec/Struct.ts#L290)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | [BareOpts](../modules/_types_helpers_.md#bareopts) | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

___

### `Static` typesToMap

▸ **typesToMap**(`registry`: [Registry](../interfaces/_types_registry_.registry.md), `Types`: Record‹string, [Constructor](../interfaces/_types_codec_.constructor.md)›): *Record‹string, string›*

*Inherited from [Struct](_codec_struct_.struct.md).[typesToMap](_codec_struct_.struct.md#static-typestomap)*

*Defined in [packages/types/src/codec/Struct.ts:262](https://github.com/polkadot-js/api/blob/bdd1e4c917/packages/types/src/codec/Struct.ts#L262)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_types_registry_.registry.md) |
`Types` | Record‹string, [Constructor](../interfaces/_types_codec_.constructor.md)› |

**Returns:** *Record‹string, string›*

___

### `Static` with

▸ **with**<**S**>(`Types`: S): *[Constructor](../interfaces/_types_codec_.constructor.md)‹[Struct](_codec_struct_.struct.md)‹S››*

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#static-with)*

*Defined in [packages/types/src/codec/Struct.ts:123](https://github.com/polkadot-js/api/blob/bdd1e4c917/packages/types/src/codec/Struct.ts#L123)*

**Type parameters:**

▪ **S**: *TypesDef*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | S |

**Returns:** *[Constructor](../interfaces/_types_codec_.constructor.md)‹[Struct](_codec_struct_.struct.md)‹S››*
