[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["primitive/Extrinsic/v2/ExtrinsicPayload"](../modules/_primitive_extrinsic_v2_extrinsicpayload_.md) › [ExtrinsicPayloadV2](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md)

# Class: ExtrinsicPayloadV2 <**S, T, V, E**>

**`name`** GenericExtrinsicPayloadV2

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

  ↳ **ExtrinsicPayloadV2**

## Implements

* Codec

## Index

### Constructors

* [constructor](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md#constructor)

### Properties

* [registry](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md#registry)

### Accessors

* [Type](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md#type)
* [blockHash](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md#blockhash)
* [defKeys](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md#defkeys)
* [encodedLength](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md#encodedlength)
* [era](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md#era)
* [hash](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md#hash)
* [isEmpty](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md#isempty)
* [method](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md#method)
* [nonce](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md#nonce)
* [tip](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md#tip)

### Methods

* [eq](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md#eq)
* [get](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md#get)
* [getAtIndex](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md#getatindex)
* [sign](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md#sign)
* [toArray](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md#toarray)
* [toHex](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md#tohex)
* [toJSON](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md#tojson)
* [toRawType](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md#torawtype)
* [toString](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md#tostring)
* [toU8a](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md#tou8a)
* [typesToMap](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md#static-typestomap)
* [with](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md#static-with)

## Constructors

###  constructor

\+ **new ExtrinsicPayloadV2**(`registry`: Registry, `value?`: ExtrinsicPayloadValue | [Uint8Array](_codec_raw_.raw.md#static-uint8array) | string): *[ExtrinsicPayloadV2](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md)*

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [packages/types/src/primitive/Extrinsic/v2/ExtrinsicPayload.ts:19](https://github.com/polkadot-js/api/blob/8889e69341/packages/types/src/primitive/Extrinsic/v2/ExtrinsicPayload.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | Registry |
`value?` | ExtrinsicPayloadValue &#124; [Uint8Array](_codec_raw_.raw.md#static-uint8array) &#124; string |

**Returns:** *[ExtrinsicPayloadV2](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md)*

## Properties

###  registry

• **registry**: *Registry*

*Inherited from [Struct](_codec_struct_.struct.md).[registry](_codec_struct_.struct.md#registry)*

*Defined in [packages/types/src/codec/Struct.ts:34](https://github.com/polkadot-js/api/blob/8889e69341/packages/types/src/codec/Struct.ts#L34)*

## Accessors

###  Type

• **get Type**(): *E*

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [packages/types/src/codec/Struct.ts:167](https://github.com/polkadot-js/api/blob/8889e69341/packages/types/src/codec/Struct.ts#L167)*

**`description`** Returns the Type description to sthe structure

**Returns:** *E*

___

###  blockHash

• **get blockHash**(): *Hash*

*Defined in [packages/types/src/primitive/Extrinsic/v2/ExtrinsicPayload.ts:33](https://github.com/polkadot-js/api/blob/8889e69341/packages/types/src/primitive/Extrinsic/v2/ExtrinsicPayload.ts#L33)*

**`description`** The block [Hash](../interfaces/_interfaceregistry_.interfaceregistry.md#hash) the signature applies to (mortal/immortal)

**Returns:** *Hash*

___

###  defKeys

• **get defKeys**(): *string[]*

*Inherited from [Struct](_codec_struct_.struct.md).[defKeys](_codec_struct_.struct.md#defkeys)*

*Defined in [packages/types/src/codec/Struct.ts:145](https://github.com/polkadot-js/api/blob/8889e69341/packages/types/src/codec/Struct.ts#L145)*

**`description`** The available keys for this enum

**Returns:** *string[]*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [packages/types/src/codec/Struct.ts:180](https://github.com/polkadot-js/api/blob/8889e69341/packages/types/src/codec/Struct.ts#L180)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  era

• **get era**(): *ExtrinsicEra*

*Defined in [packages/types/src/primitive/Extrinsic/v2/ExtrinsicPayload.ts:40](https://github.com/polkadot-js/api/blob/8889e69341/packages/types/src/primitive/Extrinsic/v2/ExtrinsicPayload.ts#L40)*

**`description`** The [ExtrinsicEra](_primitive_extrinsic_extrinsicera_.extrinsicera.md)

**Returns:** *ExtrinsicEra*

___

###  hash

• **get hash**(): *IHash*

*Inherited from [Struct](_codec_struct_.struct.md).[hash](_codec_struct_.struct.md#hash)*

*Defined in [packages/types/src/codec/Struct.ts:191](https://github.com/polkadot-js/api/blob/8889e69341/packages/types/src/codec/Struct.ts#L191)*

**`description`** returns a hash of the contents

**Returns:** *IHash*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [packages/types/src/codec/Struct.ts:152](https://github.com/polkadot-js/api/blob/8889e69341/packages/types/src/codec/Struct.ts#L152)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  method

• **get method**(): *[Bytes](_primitive_bytes_.bytes.md)*

*Defined in [packages/types/src/primitive/Extrinsic/v2/ExtrinsicPayload.ts:47](https://github.com/polkadot-js/api/blob/8889e69341/packages/types/src/primitive/Extrinsic/v2/ExtrinsicPayload.ts#L47)*

**`description`** The [Bytes](_primitive_bytes_.bytes.md) contained in the payload

**Returns:** *[Bytes](_primitive_bytes_.bytes.md)*

___

###  nonce

• **get nonce**(): *[Compact](_codec_compact_.compact.md)‹Index›*

*Defined in [packages/types/src/primitive/Extrinsic/v2/ExtrinsicPayload.ts:54](https://github.com/polkadot-js/api/blob/8889e69341/packages/types/src/primitive/Extrinsic/v2/ExtrinsicPayload.ts#L54)*

**`description`** The [Index](../interfaces/_interfaceregistry_.interfaceregistry.md#index)

**Returns:** *[Compact](_codec_compact_.compact.md)‹Index›*

___

###  tip

• **get tip**(): *[Compact](_codec_compact_.compact.md)‹Balance›*

*Defined in [packages/types/src/primitive/Extrinsic/v2/ExtrinsicPayload.ts:61](https://github.com/polkadot-js/api/blob/8889e69341/packages/types/src/primitive/Extrinsic/v2/ExtrinsicPayload.ts#L61)*

**`description`** The tip [Balance](../interfaces/_interfaceregistry_.interfaceregistry.md#balance)

**Returns:** *[Compact](_codec_compact_.compact.md)‹Balance›*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [packages/types/src/codec/Struct.ts:198](https://github.com/polkadot-js/api/blob/8889e69341/packages/types/src/codec/Struct.ts#L198)*

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

*Defined in [packages/types/src/codec/Struct.ts:206](https://github.com/polkadot-js/api/blob/8889e69341/packages/types/src/codec/Struct.ts#L206)*

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

*Defined in [packages/types/src/codec/Struct.ts:213](https://github.com/polkadot-js/api/blob/8889e69341/packages/types/src/codec/Struct.ts#L213)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *Codec*

___

###  sign

▸ **sign**(`signerPair`: IKeyringPair): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Defined in [packages/types/src/primitive/Extrinsic/v2/ExtrinsicPayload.ts:68](https://github.com/polkadot-js/api/blob/8889e69341/packages/types/src/primitive/Extrinsic/v2/ExtrinsicPayload.ts#L68)*

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

*Defined in [packages/types/src/codec/Struct.ts:220](https://github.com/polkadot-js/api/blob/8889e69341/packages/types/src/codec/Struct.ts#L220)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *Codec[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [packages/types/src/codec/Struct.ts:227](https://github.com/polkadot-js/api/blob/8889e69341/packages/types/src/codec/Struct.ts#L227)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *AnyJsonObject | string*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [packages/types/src/codec/Struct.ts:234](https://github.com/polkadot-js/api/blob/8889e69341/packages/types/src/codec/Struct.ts#L234)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *AnyJsonObject | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [packages/types/src/codec/Struct.ts:258](https://github.com/polkadot-js/api/blob/8889e69341/packages/types/src/codec/Struct.ts#L258)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [packages/types/src/codec/Struct.ts:267](https://github.com/polkadot-js/api/blob/8889e69341/packages/types/src/codec/Struct.ts#L267)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: BareOpts): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [packages/types/src/codec/Struct.ts:275](https://github.com/polkadot-js/api/blob/8889e69341/packages/types/src/codec/Struct.ts#L275)*

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

*Defined in [packages/types/src/codec/Struct.ts:247](https://github.com/polkadot-js/api/blob/8889e69341/packages/types/src/codec/Struct.ts#L247)*

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

*Defined in [packages/types/src/codec/Struct.ts:122](https://github.com/polkadot-js/api/blob/8889e69341/packages/types/src/codec/Struct.ts#L122)*

**Type parameters:**

▪ **S**: *TypesDef*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | S |

**Returns:** *Constructor‹[Struct](_codec_struct_.struct.md)‹S››*
