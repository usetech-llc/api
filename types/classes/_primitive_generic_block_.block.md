[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["primitive/Generic/Block"](../modules/_primitive_generic_block_.md) › [Block](_primitive_generic_block_.block.md)

# Class: Block <**S, T, V, E**>

**`name`** Block

**`description`** 
A block encoded with header and extrinsics

## Type parameters

▪ **S**: *TypesDef*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  ↳ [Struct](_codec_struct_.struct.md)

  ↳ **Block**

## Implements

* [Codec](../interfaces/_types_codec_.codec.md)

## Index

### Constructors

* [constructor](_primitive_generic_block_.block.md#constructor)

### Properties

* [registry](_primitive_generic_block_.block.md#registry)

### Accessors

* [Type](_primitive_generic_block_.block.md#type)
* [contentHash](_primitive_generic_block_.block.md#contenthash)
* [defKeys](_primitive_generic_block_.block.md#defkeys)
* [encodedLength](_primitive_generic_block_.block.md#encodedlength)
* [extrinsics](_primitive_generic_block_.block.md#extrinsics)
* [hash](_primitive_generic_block_.block.md#hash)
* [header](_primitive_generic_block_.block.md#header)
* [isEmpty](_primitive_generic_block_.block.md#isempty)

### Methods

* [eq](_primitive_generic_block_.block.md#eq)
* [get](_primitive_generic_block_.block.md#get)
* [getAtIndex](_primitive_generic_block_.block.md#getatindex)
* [toArray](_primitive_generic_block_.block.md#toarray)
* [toHex](_primitive_generic_block_.block.md#tohex)
* [toHuman](_primitive_generic_block_.block.md#tohuman)
* [toJSON](_primitive_generic_block_.block.md#tojson)
* [toRawType](_primitive_generic_block_.block.md#torawtype)
* [toString](_primitive_generic_block_.block.md#tostring)
* [toU8a](_primitive_generic_block_.block.md#tou8a)
* [typesToMap](_primitive_generic_block_.block.md#static-typestomap)
* [with](_primitive_generic_block_.block.md#static-with)

## Constructors

###  constructor

\+ **new Block**(`registry`: [Registry](../interfaces/_types_registry_.registry.md), `value?`: [BlockValue](../interfaces/_primitive_generic_block_.blockvalue.md) | [Uint8Array](_codec_raw_.raw.md#static-uint8array)): *[Block](_primitive_generic_block_.block.md)*

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [packages/types/src/primitive/Generic/Block.ts:33](https://github.com/polkadot-js/api/blob/aee09c48b9/packages/types/src/primitive/Generic/Block.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_types_registry_.registry.md) |
`value?` | [BlockValue](../interfaces/_primitive_generic_block_.blockvalue.md) &#124; [Uint8Array](_codec_raw_.raw.md#static-uint8array) |

**Returns:** *[Block](_primitive_generic_block_.block.md)*

## Properties

###  registry

• **registry**: *[Registry](../interfaces/_types_registry_.registry.md)*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md).[registry](../interfaces/_types_codec_.codec.md#registry)*

*Inherited from [Struct](_codec_struct_.struct.md).[registry](_codec_struct_.struct.md#registry)*

*Defined in [packages/types/src/codec/Struct.ts:105](https://github.com/polkadot-js/api/blob/aee09c48b9/packages/types/src/codec/Struct.ts#L105)*

## Accessors

###  Type

• **get Type**(): *E*

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [packages/types/src/codec/Struct.ts:167](https://github.com/polkadot-js/api/blob/aee09c48b9/packages/types/src/codec/Struct.ts#L167)*

**`description`** Returns the Type description to sthe structure

**Returns:** *E*

___

###  contentHash

• **get contentHash**(): *Hash*

*Defined in [packages/types/src/primitive/Generic/Block.ts:44](https://github.com/polkadot-js/api/blob/aee09c48b9/packages/types/src/primitive/Generic/Block.ts#L44)*

**`description`** Encodes a content [Hash](../interfaces/_interfaceregistry_.interfaceregistry.md#hash) for the block

**Returns:** *Hash*

___

###  defKeys

• **get defKeys**(): *string[]*

*Inherited from [Struct](_codec_struct_.struct.md).[defKeys](_codec_struct_.struct.md#defkeys)*

*Defined in [packages/types/src/codec/Struct.ts:145](https://github.com/polkadot-js/api/blob/aee09c48b9/packages/types/src/codec/Struct.ts#L145)*

**`description`** The available keys for this enum

**Returns:** *string[]*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [packages/types/src/codec/Struct.ts:180](https://github.com/polkadot-js/api/blob/aee09c48b9/packages/types/src/codec/Struct.ts#L180)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  extrinsics

• **get extrinsics**(): *[Vec](_codec_vec_.vec.md)‹[Extrinsic](_primitive_extrinsic_extrinsic_.extrinsic.md)›*

*Defined in [packages/types/src/primitive/Generic/Block.ts:51](https://github.com/polkadot-js/api/blob/aee09c48b9/packages/types/src/primitive/Generic/Block.ts#L51)*

**`description`** The [Extrinsic](_primitive_extrinsic_extrinsic_.extrinsic.md) contained in the block

**Returns:** *[Vec](_codec_vec_.vec.md)‹[Extrinsic](_primitive_extrinsic_extrinsic_.extrinsic.md)›*

___

###  hash

• **get hash**(): *Hash*

*Overrides [Struct](_codec_struct_.struct.md).[hash](_codec_struct_.struct.md#hash)*

*Defined in [packages/types/src/primitive/Generic/Block.ts:58](https://github.com/polkadot-js/api/blob/aee09c48b9/packages/types/src/primitive/Generic/Block.ts#L58)*

**`description`** Block/header [Hash](../interfaces/_interfaceregistry_.interfaceregistry.md#hash)

**Returns:** *Hash*

___

###  header

• **get header**(): *Header*

*Defined in [packages/types/src/primitive/Generic/Block.ts:65](https://github.com/polkadot-js/api/blob/aee09c48b9/packages/types/src/primitive/Generic/Block.ts#L65)*

**`description`** The [Header](../interfaces/_interfaceregistry_.interfaceregistry.md#header) of the block

**Returns:** *Header*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [packages/types/src/codec/Struct.ts:152](https://github.com/polkadot-js/api/blob/aee09c48b9/packages/types/src/codec/Struct.ts#L152)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [packages/types/src/codec/Struct.ts:198](https://github.com/polkadot-js/api/blob/aee09c48b9/packages/types/src/codec/Struct.ts#L198)*

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

*Defined in [packages/types/src/codec/Struct.ts:206](https://github.com/polkadot-js/api/blob/aee09c48b9/packages/types/src/codec/Struct.ts#L206)*

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

*Defined in [packages/types/src/codec/Struct.ts:213](https://github.com/polkadot-js/api/blob/aee09c48b9/packages/types/src/codec/Struct.ts#L213)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *[Codec](../interfaces/_types_codec_.codec.md)*

___

###  toArray

▸ **toArray**(): *[Codec](../interfaces/_types_codec_.codec.md)[]*

*Inherited from [Struct](_codec_struct_.struct.md).[toArray](_codec_struct_.struct.md#toarray)*

*Defined in [packages/types/src/codec/Struct.ts:220](https://github.com/polkadot-js/api/blob/aee09c48b9/packages/types/src/codec/Struct.ts#L220)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](../interfaces/_types_codec_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [packages/types/src/codec/Struct.ts:227](https://github.com/polkadot-js/api/blob/aee09c48b9/packages/types/src/codec/Struct.ts#L227)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(`isExtended?`: undefined | false | true): *[AnyJsonObject](../interfaces/_types_helpers_.anyjsonobject.md)*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toHuman](_codec_struct_.struct.md#tohuman)*

*Defined in [packages/types/src/codec/Struct.ts:234](https://github.com/polkadot-js/api/blob/aee09c48b9/packages/types/src/codec/Struct.ts#L234)*

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

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [packages/types/src/codec/Struct.ts:248](https://github.com/polkadot-js/api/blob/aee09c48b9/packages/types/src/codec/Struct.ts#L248)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](../interfaces/_types_helpers_.anyjsonobject.md)*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [packages/types/src/codec/Struct.ts:272](https://github.com/polkadot-js/api/blob/aee09c48b9/packages/types/src/codec/Struct.ts#L272)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [packages/types/src/codec/Struct.ts:281](https://github.com/polkadot-js/api/blob/aee09c48b9/packages/types/src/codec/Struct.ts#L281)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: [BareOpts](../modules/_types_helpers_.md#bareopts)): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [packages/types/src/codec/Struct.ts:289](https://github.com/polkadot-js/api/blob/aee09c48b9/packages/types/src/codec/Struct.ts#L289)*

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

*Defined in [packages/types/src/codec/Struct.ts:261](https://github.com/polkadot-js/api/blob/aee09c48b9/packages/types/src/codec/Struct.ts#L261)*

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

*Defined in [packages/types/src/codec/Struct.ts:122](https://github.com/polkadot-js/api/blob/aee09c48b9/packages/types/src/codec/Struct.ts#L122)*

**Type parameters:**

▪ **S**: *TypesDef*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | S |

**Returns:** *[Constructor](../interfaces/_types_codec_.constructor.md)‹[Struct](_codec_struct_.struct.md)‹S››*
