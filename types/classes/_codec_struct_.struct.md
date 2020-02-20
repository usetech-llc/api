[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["codec/Struct"](../modules/_codec_struct_.md) › [Struct](_codec_struct_.struct.md)

# Class: Struct <**S, T, V, E**>

**`name`** Struct

**`description`** 
A Struct defines an Object with key-value pairs - where the values are Codec values. It removes
a lot of repetition from the actual coding, define a structure type, pass it the key/Codec
values in the constructor and it manages the decoding. It is important that the constructor
values matches 100% to the order in th Rust code, i.e. don't go crazy and make it alphabetical,
it needs to decoded in the specific defined order.

## Type parameters

▪ **S**: *TypesDef*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

* [Map](_codec_struct_.struct.md#static-map)‹keyof S, [Codec](../interfaces/_types_codec_.codec.md)›

  ↳ **Struct**

  ↳ [Event](_primitive_generic_event_.event.md)

  ↳ [ExtrinsicV1](_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md)

  ↳ [ExtrinsicV2](_primitive_extrinsic_v2_extrinsic_.extrinsicv2.md)

  ↳ [ExtrinsicV3](_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md)

  ↳ [ExtrinsicV4](_primitive_extrinsic_v4_extrinsic_.extrinsicv4.md)

  ↳ [Block](_primitive_generic_block_.block.md)

  ↳ [Call](_primitive_generic_call_.call.md)

  ↳ [Digest](_primitive_generic_digest_.digest.md)

  ↳ [ExtrinsicPayloadUnknown](_primitive_extrinsic_extrinsicpayloadunknown_.extrinsicpayloadunknown.md)

  ↳ [ExtrinsicUnknown](_primitive_extrinsic_extrinsicunknown_.extrinsicunknown.md)

  ↳ [ExtrinsicPayloadV1](_primitive_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md)

  ↳ [ExtrinsicSignatureV1](_primitive_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md)

  ↳ [ExtrinsicPayloadV2](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md)

  ↳ [ExtrinsicSignatureV2](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md)

  ↳ [ExtrinsicPayloadV3](_primitive_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md)

  ↳ [ExtrinsicPayloadV4](_primitive_extrinsic_v4_extrinsicpayload_.extrinsicpayloadv4.md)

  ↳ [ExtrinsicSignatureV4](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md)

  ↳ [Linkage](_codec_linkage_.linkage.md)

## Implements

* [Codec](../interfaces/_types_codec_.codec.md)

## Index

### Constructors

* [constructor](_codec_struct_.struct.md#constructor)

### Properties

* [registry](_codec_struct_.struct.md#registry)
* [Map](_codec_struct_.struct.md#static-map)

### Accessors

* [Type](_codec_struct_.struct.md#type)
* [defKeys](_codec_struct_.struct.md#defkeys)
* [encodedLength](_codec_struct_.struct.md#encodedlength)
* [hash](_codec_struct_.struct.md#hash)
* [isEmpty](_codec_struct_.struct.md#isempty)

### Methods

* [eq](_codec_struct_.struct.md#eq)
* [get](_codec_struct_.struct.md#get)
* [getAtIndex](_codec_struct_.struct.md#getatindex)
* [toArray](_codec_struct_.struct.md#toarray)
* [toHex](_codec_struct_.struct.md#tohex)
* [toHuman](_codec_struct_.struct.md#tohuman)
* [toJSON](_codec_struct_.struct.md#tojson)
* [toRawType](_codec_struct_.struct.md#torawtype)
* [toString](_codec_struct_.struct.md#tostring)
* [toU8a](_codec_struct_.struct.md#tou8a)
* [typesToMap](_codec_struct_.struct.md#static-typestomap)
* [with](_codec_struct_.struct.md#static-with)

## Constructors

###  constructor

\+ **new Struct**(`registry`: [Registry](../interfaces/_types_registry_.registry.md), `Types`: S, `value`: V | [Map](_codec_struct_.struct.md#static-map)‹any, any› | any[] | string, `jsonMap`: [Map](_codec_struct_.struct.md#static-map)‹keyof S, string›): *[Struct](_codec_struct_.struct.md)*

*Defined in [packages/types/src/codec/Struct.ts:110](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/codec/Struct.ts#L110)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`registry` | [Registry](../interfaces/_types_registry_.registry.md) | - |
`Types` | S | - |
`value` | V &#124; [Map](_codec_struct_.struct.md#static-map)‹any, any› &#124; any[] &#124; string | {} as V |
`jsonMap` | [Map](_codec_struct_.struct.md#static-map)‹keyof S, string› | new Map() |

**Returns:** *[Struct](_codec_struct_.struct.md)*

## Properties

###  registry

• **registry**: *[Registry](../interfaces/_types_registry_.registry.md)*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md).[registry](../interfaces/_types_codec_.codec.md#registry)*

*Defined in [packages/types/src/codec/Struct.ts:106](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/codec/Struct.ts#L106)*

___

### `Static` Map

▪ **Map**: *MapConstructor*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:36

## Accessors

###  Type

• **get Type**(): *E*

*Defined in [packages/types/src/codec/Struct.ts:168](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/codec/Struct.ts#L168)*

**`description`** Returns the Type description to sthe structure

**Returns:** *E*

___

###  defKeys

• **get defKeys**(): *string[]*

*Defined in [packages/types/src/codec/Struct.ts:146](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/codec/Struct.ts#L146)*

**`description`** The available keys for this enum

**Returns:** *string[]*

___

###  encodedLength

• **get encodedLength**(): *number*

*Defined in [packages/types/src/codec/Struct.ts:181](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/codec/Struct.ts#L181)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *H256*

*Defined in [packages/types/src/codec/Struct.ts:192](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/codec/Struct.ts#L192)*

**`description`** returns a hash of the contents

**Returns:** *H256*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Defined in [packages/types/src/codec/Struct.ts:153](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/codec/Struct.ts#L153)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Defined in [packages/types/src/codec/Struct.ts:199](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/codec/Struct.ts#L199)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  get

▸ **get**(`name`: keyof S): *[Codec](../interfaces/_types_codec_.codec.md) | undefined*

*Overrides [BTreeMap](_codec_btreemap_.btreemap.md).[get](_codec_btreemap_.btreemap.md#get)*

*Defined in [packages/types/src/codec/Struct.ts:207](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/codec/Struct.ts#L207)*

**`description`** Returns a specific names entry in the structure

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | keyof S | The name of the entry to retrieve  |

**Returns:** *[Codec](../interfaces/_types_codec_.codec.md) | undefined*

___

###  getAtIndex

▸ **getAtIndex**(`index`: number): *[Codec](../interfaces/_types_codec_.codec.md)*

*Defined in [packages/types/src/codec/Struct.ts:214](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/codec/Struct.ts#L214)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *[Codec](../interfaces/_types_codec_.codec.md)*

___

###  toArray

▸ **toArray**(): *[Codec](../interfaces/_types_codec_.codec.md)[]*

*Defined in [packages/types/src/codec/Struct.ts:221](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/codec/Struct.ts#L221)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](../interfaces/_types_codec_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Defined in [packages/types/src/codec/Struct.ts:228](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/codec/Struct.ts#L228)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(`isExtended?`: undefined | false | true): *[AnyJsonObject](../interfaces/_types_helpers_.anyjsonobject.md)*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Defined in [packages/types/src/codec/Struct.ts:235](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/codec/Struct.ts#L235)*

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

*Defined in [packages/types/src/codec/Struct.ts:249](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/codec/Struct.ts#L249)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](../interfaces/_types_helpers_.anyjsonobject.md)*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Defined in [packages/types/src/codec/Struct.ts:273](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/codec/Struct.ts#L273)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Defined in [packages/types/src/codec/Struct.ts:282](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/codec/Struct.ts#L282)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: [BareOpts](../modules/_types_helpers_.md#bareopts)): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Defined in [packages/types/src/codec/Struct.ts:290](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/codec/Struct.ts#L290)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | [BareOpts](../modules/_types_helpers_.md#bareopts) | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

___

### `Static` typesToMap

▸ **typesToMap**(`registry`: [Registry](../interfaces/_types_registry_.registry.md), `Types`: Record‹string, [Constructor](../interfaces/_types_codec_.constructor.md)›): *Record‹string, string›*

*Defined in [packages/types/src/codec/Struct.ts:262](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/codec/Struct.ts#L262)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_types_registry_.registry.md) |
`Types` | Record‹string, [Constructor](../interfaces/_types_codec_.constructor.md)› |

**Returns:** *Record‹string, string›*

___

### `Static` with

▸ **with**<**S**>(`Types`: S): *[Constructor](../interfaces/_types_codec_.constructor.md)‹[Struct](_codec_struct_.struct.md)‹S››*

*Defined in [packages/types/src/codec/Struct.ts:123](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/codec/Struct.ts#L123)*

**Type parameters:**

▪ **S**: *TypesDef*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | S |

**Returns:** *[Constructor](../interfaces/_types_codec_.constructor.md)‹[Struct](_codec_struct_.struct.md)‹S››*
