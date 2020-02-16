[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["primitive/Extrinsic/v3/ExtrinsicPayload"](../modules/_primitive_extrinsic_v3_extrinsicpayload_.md) › [ExtrinsicPayloadV3](_primitive_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md)

# Class: ExtrinsicPayloadV3 <**S, T, V, E**>

**`name`** GenericExtrinsicPayloadV3

**`description`** 
A signing payload for an [Extrinsic](_primitive_extrinsic_extrinsic_.extrinsic.md). For the final encoding, it is variable length based
on the contents included

## Type parameters

▪ **S**: *TypesDef*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  ↳ [Struct](_codec_struct_.struct.md)

  ↳ **ExtrinsicPayloadV3**

## Implements

* [Codec](../interfaces/_types_codec_.codec.md)

## Index

### Constructors

* [constructor](_primitive_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md#constructor)

### Properties

* [registry](_primitive_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md#registry)

### Accessors

* [Type](_primitive_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md#type)
* [blockHash](_primitive_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md#blockhash)
* [defKeys](_primitive_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md#defkeys)
* [encodedLength](_primitive_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md#encodedlength)
* [era](_primitive_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md#era)
* [genesisHash](_primitive_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md#genesishash)
* [hash](_primitive_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md#hash)
* [isEmpty](_primitive_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md#isempty)
* [method](_primitive_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md#method)
* [nonce](_primitive_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md#nonce)
* [specVersion](_primitive_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md#specversion)
* [tip](_primitive_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md#tip)

### Methods

* [eq](_primitive_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md#eq)
* [get](_primitive_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md#get)
* [getAtIndex](_primitive_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md#getatindex)
* [sign](_primitive_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md#sign)
* [toArray](_primitive_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md#toarray)
* [toHex](_primitive_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md#tohex)
* [toJSON](_primitive_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md#tojson)
* [toRawType](_primitive_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md#torawtype)
* [toString](_primitive_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md#tostring)
* [toU8a](_primitive_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md#tou8a)
* [typesToMap](_primitive_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md#static-typestomap)
* [with](_primitive_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md#static-with)

## Constructors

###  constructor

\+ **new ExtrinsicPayloadV3**(`registry`: [Registry](../interfaces/_types_registry_.registry.md), `value?`: [ExtrinsicPayloadValue](../interfaces/_types_extrinsic_.extrinsicpayloadvalue.md) | [Uint8Array](_codec_raw_.raw.md#static-uint8array) | string): *[ExtrinsicPayloadV3](_primitive_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md)*

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [packages/types/src/primitive/Extrinsic/v3/ExtrinsicPayload.ts:20](https://github.com/polkadot-js/api/blob/921e55a82e/packages/types/src/primitive/Extrinsic/v3/ExtrinsicPayload.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_types_registry_.registry.md) |
`value?` | [ExtrinsicPayloadValue](../interfaces/_types_extrinsic_.extrinsicpayloadvalue.md) &#124; [Uint8Array](_codec_raw_.raw.md#static-uint8array) &#124; string |

**Returns:** *[ExtrinsicPayloadV3](_primitive_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md)*

## Properties

###  registry

• **registry**: *[Registry](../interfaces/_types_registry_.registry.md)*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md).[registry](../interfaces/_types_codec_.codec.md#registry)*

*Inherited from [Struct](_codec_struct_.struct.md).[registry](_codec_struct_.struct.md#registry)*

*Defined in [packages/types/src/codec/Struct.ts:105](https://github.com/polkadot-js/api/blob/921e55a82e/packages/types/src/codec/Struct.ts#L105)*

## Accessors

###  Type

• **get Type**(): *E*

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [packages/types/src/codec/Struct.ts:167](https://github.com/polkadot-js/api/blob/921e55a82e/packages/types/src/codec/Struct.ts#L167)*

**`description`** Returns the Type description to sthe structure

**Returns:** *E*

___

###  blockHash

• **get blockHash**(): *Hash*

*Defined in [packages/types/src/primitive/Extrinsic/v3/ExtrinsicPayload.ts:38](https://github.com/polkadot-js/api/blob/921e55a82e/packages/types/src/primitive/Extrinsic/v3/ExtrinsicPayload.ts#L38)*

**`description`** The block [Hash](../interfaces/_interfaceregistry_.interfaceregistry.md#hash) the signature applies to (mortal/immortal)

**Returns:** *Hash*

___

###  defKeys

• **get defKeys**(): *string[]*

*Inherited from [Struct](_codec_struct_.struct.md).[defKeys](_codec_struct_.struct.md#defkeys)*

*Defined in [packages/types/src/codec/Struct.ts:145](https://github.com/polkadot-js/api/blob/921e55a82e/packages/types/src/codec/Struct.ts#L145)*

**`description`** The available keys for this enum

**Returns:** *string[]*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [packages/types/src/codec/Struct.ts:180](https://github.com/polkadot-js/api/blob/921e55a82e/packages/types/src/codec/Struct.ts#L180)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  era

• **get era**(): *ExtrinsicEra*

*Defined in [packages/types/src/primitive/Extrinsic/v3/ExtrinsicPayload.ts:45](https://github.com/polkadot-js/api/blob/921e55a82e/packages/types/src/primitive/Extrinsic/v3/ExtrinsicPayload.ts#L45)*

**`description`** The [ExtrinsicEra](_primitive_extrinsic_extrinsicera_.extrinsicera.md)

**Returns:** *ExtrinsicEra*

___

###  genesisHash

• **get genesisHash**(): *Hash*

*Defined in [packages/types/src/primitive/Extrinsic/v3/ExtrinsicPayload.ts:52](https://github.com/polkadot-js/api/blob/921e55a82e/packages/types/src/primitive/Extrinsic/v3/ExtrinsicPayload.ts#L52)*

**`description`** The genesis [Hash](../interfaces/_interfaceregistry_.interfaceregistry.md#hash) the signature applies to (mortal/immortal)

**Returns:** *Hash*

___

###  hash

• **get hash**(): *[IHash](../interfaces/_types_interfaces_.ihash.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[hash](_codec_struct_.struct.md#hash)*

*Defined in [packages/types/src/codec/Struct.ts:191](https://github.com/polkadot-js/api/blob/921e55a82e/packages/types/src/codec/Struct.ts#L191)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](../interfaces/_types_interfaces_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [packages/types/src/codec/Struct.ts:152](https://github.com/polkadot-js/api/blob/921e55a82e/packages/types/src/codec/Struct.ts#L152)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  method

• **get method**(): *[Bytes](_primitive_bytes_.bytes.md)*

*Defined in [packages/types/src/primitive/Extrinsic/v3/ExtrinsicPayload.ts:59](https://github.com/polkadot-js/api/blob/921e55a82e/packages/types/src/primitive/Extrinsic/v3/ExtrinsicPayload.ts#L59)*

**`description`** The [Bytes](_primitive_bytes_.bytes.md) contained in the payload

**Returns:** *[Bytes](_primitive_bytes_.bytes.md)*

___

###  nonce

• **get nonce**(): *[Compact](_codec_compact_.compact.md)‹Index›*

*Defined in [packages/types/src/primitive/Extrinsic/v3/ExtrinsicPayload.ts:66](https://github.com/polkadot-js/api/blob/921e55a82e/packages/types/src/primitive/Extrinsic/v3/ExtrinsicPayload.ts#L66)*

**`description`** The [Index](../interfaces/_interfaceregistry_.interfaceregistry.md#index)

**Returns:** *[Compact](_codec_compact_.compact.md)‹Index›*

___

###  specVersion

• **get specVersion**(): *[u32](../interfaces/_interfaceregistry_.interfaceregistry.md#u32)*

*Defined in [packages/types/src/primitive/Extrinsic/v3/ExtrinsicPayload.ts:73](https://github.com/polkadot-js/api/blob/921e55a82e/packages/types/src/primitive/Extrinsic/v3/ExtrinsicPayload.ts#L73)*

**`description`** The specVersion for this signature

**Returns:** *[u32](../interfaces/_interfaceregistry_.interfaceregistry.md#u32)*

___

###  tip

• **get tip**(): *[Compact](_codec_compact_.compact.md)‹Balance›*

*Defined in [packages/types/src/primitive/Extrinsic/v3/ExtrinsicPayload.ts:80](https://github.com/polkadot-js/api/blob/921e55a82e/packages/types/src/primitive/Extrinsic/v3/ExtrinsicPayload.ts#L80)*

**`description`** The tip [Balance](../interfaces/_interfaceregistry_.interfaceregistry.md#balance)

**Returns:** *[Compact](_codec_compact_.compact.md)‹Balance›*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [packages/types/src/codec/Struct.ts:198](https://github.com/polkadot-js/api/blob/921e55a82e/packages/types/src/codec/Struct.ts#L198)*

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

*Defined in [packages/types/src/codec/Struct.ts:206](https://github.com/polkadot-js/api/blob/921e55a82e/packages/types/src/codec/Struct.ts#L206)*

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

*Defined in [packages/types/src/codec/Struct.ts:213](https://github.com/polkadot-js/api/blob/921e55a82e/packages/types/src/codec/Struct.ts#L213)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *[Codec](../interfaces/_types_codec_.codec.md)*

___

###  sign

▸ **sign**(`signerPair`: [IKeyringPair](../interfaces/_types_interfaces_.ikeyringpair.md)): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Defined in [packages/types/src/primitive/Extrinsic/v3/ExtrinsicPayload.ts:87](https://github.com/polkadot-js/api/blob/921e55a82e/packages/types/src/primitive/Extrinsic/v3/ExtrinsicPayload.ts#L87)*

**`description`** Sign the payload with the keypair

**Parameters:**

Name | Type |
------ | ------ |
`signerPair` | [IKeyringPair](../interfaces/_types_interfaces_.ikeyringpair.md) |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

___

###  toArray

▸ **toArray**(): *[Codec](../interfaces/_types_codec_.codec.md)[]*

*Inherited from [Struct](_codec_struct_.struct.md).[toArray](_codec_struct_.struct.md#toarray)*

*Defined in [packages/types/src/codec/Struct.ts:220](https://github.com/polkadot-js/api/blob/921e55a82e/packages/types/src/codec/Struct.ts#L220)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](../interfaces/_types_codec_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [packages/types/src/codec/Struct.ts:227](https://github.com/polkadot-js/api/blob/921e55a82e/packages/types/src/codec/Struct.ts#L227)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](../interfaces/_types_helpers_.anyjsonobject.md)*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [packages/types/src/codec/Struct.ts:234](https://github.com/polkadot-js/api/blob/921e55a82e/packages/types/src/codec/Struct.ts#L234)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](../interfaces/_types_helpers_.anyjsonobject.md)*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [packages/types/src/codec/Struct.ts:258](https://github.com/polkadot-js/api/blob/921e55a82e/packages/types/src/codec/Struct.ts#L258)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [packages/types/src/codec/Struct.ts:267](https://github.com/polkadot-js/api/blob/921e55a82e/packages/types/src/codec/Struct.ts#L267)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: [BareOpts](../modules/_types_helpers_.md#bareopts)): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [packages/types/src/codec/Struct.ts:275](https://github.com/polkadot-js/api/blob/921e55a82e/packages/types/src/codec/Struct.ts#L275)*

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

*Defined in [packages/types/src/codec/Struct.ts:247](https://github.com/polkadot-js/api/blob/921e55a82e/packages/types/src/codec/Struct.ts#L247)*

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

*Defined in [packages/types/src/codec/Struct.ts:122](https://github.com/polkadot-js/api/blob/921e55a82e/packages/types/src/codec/Struct.ts#L122)*

**Type parameters:**

▪ **S**: *TypesDef*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | S |

**Returns:** *[Constructor](../interfaces/_types_codec_.constructor.md)‹[Struct](_codec_struct_.struct.md)‹S››*
