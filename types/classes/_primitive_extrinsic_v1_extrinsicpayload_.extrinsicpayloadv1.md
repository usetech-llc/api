[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["primitive/Extrinsic/v1/ExtrinsicPayload"](../modules/_primitive_extrinsic_v1_extrinsicpayload_.md) › [ExtrinsicPayloadV1](_primitive_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md)

# Class: ExtrinsicPayloadV1 <**S, T, V, E**>

**`name`** GenericExtrinsicPayloadV1

**`description`** 
A signing payload for an [Extrinsic](_primitive_extrinsic_extrinsic_.extrinsic.md). For the final encoding, it is variable length based
on the contents included

  1-8 bytes: The Transaction Compact<Index/Nonce> as provided in the transaction itself.
  2+ bytes: The Function Descriptor as provided in the transaction itself.
  1/2 bytes: The Transaction Era as provided in the transaction itself.
  32 bytes: The hash of the authoring block implied by the Transaction Era and the current block.

## Type parameters

▪ **S**: *TypesDef*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  ↳ [Struct](_codec_struct_.struct.md)

  ↳ **ExtrinsicPayloadV1**

## Implements

* Codec

## Index

### Constructors

* [constructor](_primitive_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#constructor)

### Properties

* [registry](_primitive_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#registry)

### Accessors

* [Type](_primitive_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#type)
* [blockHash](_primitive_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#blockhash)
* [defKeys](_primitive_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#defkeys)
* [encodedLength](_primitive_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#encodedlength)
* [era](_primitive_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#era)
* [hash](_primitive_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#hash)
* [isEmpty](_primitive_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#isempty)
* [method](_primitive_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#method)
* [nonce](_primitive_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#nonce)

### Methods

* [eq](_primitive_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#eq)
* [get](_primitive_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#get)
* [getAtIndex](_primitive_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#getatindex)
* [sign](_primitive_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#sign)
* [toArray](_primitive_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#toarray)
* [toHex](_primitive_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#tohex)
* [toJSON](_primitive_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#tojson)
* [toRawType](_primitive_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#torawtype)
* [toString](_primitive_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#tostring)
* [toU8a](_primitive_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#tou8a)
* [typesToMap](_primitive_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#static-typestomap)
* [with](_primitive_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#static-with)

## Constructors

###  constructor

\+ **new ExtrinsicPayloadV1**(`registry`: Registry, `value?`: ExtrinsicPayloadValue | [Uint8Array](_codec_raw_.raw.md#static-uint8array) | string): *[ExtrinsicPayloadV1](_primitive_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md)*

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [packages/types/src/primitive/Extrinsic/v1/ExtrinsicPayload.ts:24](https://github.com/polkadot-js/api/blob/9a7e0bf82d/packages/types/src/primitive/Extrinsic/v1/ExtrinsicPayload.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | Registry |
`value?` | ExtrinsicPayloadValue &#124; [Uint8Array](_codec_raw_.raw.md#static-uint8array) &#124; string |

**Returns:** *[ExtrinsicPayloadV1](_primitive_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md)*

## Properties

###  registry

• **registry**: *Registry*

*Inherited from [Struct](_codec_struct_.struct.md).[registry](_codec_struct_.struct.md#registry)*

*Defined in [packages/types/src/codec/Struct.ts:34](https://github.com/polkadot-js/api/blob/9a7e0bf82d/packages/types/src/codec/Struct.ts#L34)*

## Accessors

###  Type

• **get Type**(): *E*

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [packages/types/src/codec/Struct.ts:167](https://github.com/polkadot-js/api/blob/9a7e0bf82d/packages/types/src/codec/Struct.ts#L167)*

**`description`** Returns the Type description to sthe structure

**Returns:** *E*

___

###  blockHash

• **get blockHash**(): *Hash*

*Defined in [packages/types/src/primitive/Extrinsic/v1/ExtrinsicPayload.ts:37](https://github.com/polkadot-js/api/blob/9a7e0bf82d/packages/types/src/primitive/Extrinsic/v1/ExtrinsicPayload.ts#L37)*

**`description`** The block [Hash](../interfaces/_interfaceregistry_.interfaceregistry.md#hash) the signature applies to (mortal/immortal)

**Returns:** *Hash*

___

###  defKeys

• **get defKeys**(): *string[]*

*Inherited from [Struct](_codec_struct_.struct.md).[defKeys](_codec_struct_.struct.md#defkeys)*

*Defined in [packages/types/src/codec/Struct.ts:145](https://github.com/polkadot-js/api/blob/9a7e0bf82d/packages/types/src/codec/Struct.ts#L145)*

**`description`** The available keys for this enum

**Returns:** *string[]*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [packages/types/src/codec/Struct.ts:180](https://github.com/polkadot-js/api/blob/9a7e0bf82d/packages/types/src/codec/Struct.ts#L180)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  era

• **get era**(): *ExtrinsicEra*

*Defined in [packages/types/src/primitive/Extrinsic/v1/ExtrinsicPayload.ts:51](https://github.com/polkadot-js/api/blob/9a7e0bf82d/packages/types/src/primitive/Extrinsic/v1/ExtrinsicPayload.ts#L51)*

**`description`** The [ExtrinsicEra](_primitive_extrinsic_extrinsicera_.extrinsicera.md)

**Returns:** *ExtrinsicEra*

___

###  hash

• **get hash**(): *IHash*

*Inherited from [Struct](_codec_struct_.struct.md).[hash](_codec_struct_.struct.md#hash)*

*Defined in [packages/types/src/codec/Struct.ts:191](https://github.com/polkadot-js/api/blob/9a7e0bf82d/packages/types/src/codec/Struct.ts#L191)*

**`description`** returns a hash of the contents

**Returns:** *IHash*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [packages/types/src/codec/Struct.ts:152](https://github.com/polkadot-js/api/blob/9a7e0bf82d/packages/types/src/codec/Struct.ts#L152)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  method

• **get method**(): *[Bytes](_primitive_bytes_.bytes.md)*

*Defined in [packages/types/src/primitive/Extrinsic/v1/ExtrinsicPayload.ts:44](https://github.com/polkadot-js/api/blob/9a7e0bf82d/packages/types/src/primitive/Extrinsic/v1/ExtrinsicPayload.ts#L44)*

**`description`** The [Bytes](_primitive_bytes_.bytes.md) contained in the payload

**Returns:** *[Bytes](_primitive_bytes_.bytes.md)*

___

###  nonce

• **get nonce**(): *[Compact](_codec_compact_.compact.md)‹Index›*

*Defined in [packages/types/src/primitive/Extrinsic/v1/ExtrinsicPayload.ts:58](https://github.com/polkadot-js/api/blob/9a7e0bf82d/packages/types/src/primitive/Extrinsic/v1/ExtrinsicPayload.ts#L58)*

**`description`** The [Index](../interfaces/_interfaceregistry_.interfaceregistry.md#index)

**Returns:** *[Compact](_codec_compact_.compact.md)‹Index›*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [packages/types/src/codec/Struct.ts:198](https://github.com/polkadot-js/api/blob/9a7e0bf82d/packages/types/src/codec/Struct.ts#L198)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  get

▸ **get**(`name`: keyof S): *Codec | undefined*

*Inherited from [Struct](_codec_struct_.struct.md).[get](_codec_struct_.struct.md#get)*

*Overrides [BTreeMap](_codec_btreemap_.btreemap.md).[get](_codec_btreemap_.btreemap.md#get)*

*Defined in [packages/types/src/codec/Struct.ts:206](https://github.com/polkadot-js/api/blob/9a7e0bf82d/packages/types/src/codec/Struct.ts#L206)*

**`description`** Returns a specific names entry in the structure

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | keyof S | The name of the entry to retrieve  |

**Returns:** *Codec | undefined*

___

###  getAtIndex

▸ **getAtIndex**(`index`: number): *Codec*

*Inherited from [Struct](_codec_struct_.struct.md).[getAtIndex](_codec_struct_.struct.md#getatindex)*

*Defined in [packages/types/src/codec/Struct.ts:213](https://github.com/polkadot-js/api/blob/9a7e0bf82d/packages/types/src/codec/Struct.ts#L213)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *Codec*

___

###  sign

▸ **sign**(`signerPair`: IKeyringPair): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Defined in [packages/types/src/primitive/Extrinsic/v1/ExtrinsicPayload.ts:65](https://github.com/polkadot-js/api/blob/9a7e0bf82d/packages/types/src/primitive/Extrinsic/v1/ExtrinsicPayload.ts#L65)*

**`description`** Sign the payload with the keypair

**Parameters:**

Name | Type |
------ | ------ |
`signerPair` | IKeyringPair |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

___

###  toArray

▸ **toArray**(): *Codec[]*

*Inherited from [Struct](_codec_struct_.struct.md).[toArray](_codec_struct_.struct.md#toarray)*

*Defined in [packages/types/src/codec/Struct.ts:220](https://github.com/polkadot-js/api/blob/9a7e0bf82d/packages/types/src/codec/Struct.ts#L220)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *Codec[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [packages/types/src/codec/Struct.ts:227](https://github.com/polkadot-js/api/blob/9a7e0bf82d/packages/types/src/codec/Struct.ts#L227)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *AnyJsonObject | string*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [packages/types/src/codec/Struct.ts:234](https://github.com/polkadot-js/api/blob/9a7e0bf82d/packages/types/src/codec/Struct.ts#L234)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *AnyJsonObject | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [packages/types/src/codec/Struct.ts:258](https://github.com/polkadot-js/api/blob/9a7e0bf82d/packages/types/src/codec/Struct.ts#L258)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [packages/types/src/codec/Struct.ts:267](https://github.com/polkadot-js/api/blob/9a7e0bf82d/packages/types/src/codec/Struct.ts#L267)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: BareOpts): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [packages/types/src/codec/Struct.ts:275](https://github.com/polkadot-js/api/blob/9a7e0bf82d/packages/types/src/codec/Struct.ts#L275)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | BareOpts | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

___

### `Static` typesToMap

▸ **typesToMap**(`registry`: Registry, `Types`: Record‹string, Constructor›): *Record‹string, string›*

*Inherited from [Struct](_codec_struct_.struct.md).[typesToMap](_codec_struct_.struct.md#static-typestomap)*

*Defined in [packages/types/src/codec/Struct.ts:247](https://github.com/polkadot-js/api/blob/9a7e0bf82d/packages/types/src/codec/Struct.ts#L247)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | Registry |
`Types` | Record‹string, Constructor› |

**Returns:** *Record‹string, string›*

___

### `Static` with

▸ **with**<**S**>(`Types`: S): *Constructor‹[Struct](_codec_struct_.struct.md)‹S››*

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#static-with)*

*Defined in [packages/types/src/codec/Struct.ts:122](https://github.com/polkadot-js/api/blob/9a7e0bf82d/packages/types/src/codec/Struct.ts#L122)*

**Type parameters:**

▪ **S**: *TypesDef*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | S |

**Returns:** *Constructor‹[Struct](_codec_struct_.struct.md)‹S››*
