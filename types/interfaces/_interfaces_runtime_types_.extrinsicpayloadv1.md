[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/runtime/types"](../modules/_interfaces_runtime_types_.md) › [ExtrinsicPayloadV1](_interfaces_runtime_types_.extrinsicpayloadv1.md)

# Interface: ExtrinsicPayloadV1 <**S, T, V, E**>

GenericExtrinsicPayloadV1

## Type parameters

▪ **S**: *TypesDef*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  ↳ [ExtrinsicPayloadV1](../classes/_primitive_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md)

  ↳ **ExtrinsicPayloadV1**

## Implements

* [Codec](_types_.codec.md)

## Index

### Constructors

* [constructor](_interfaces_runtime_types_.extrinsicpayloadv1.md#constructor)

### Properties

* [[Symbol.toStringTag]](_interfaces_runtime_types_.extrinsicpayloadv1.md#[symbol.tostringtag])
* [registry](_interfaces_runtime_types_.extrinsicpayloadv1.md#registry)

### Accessors

* [Type](_interfaces_runtime_types_.extrinsicpayloadv1.md#type)
* [blockHash](_interfaces_runtime_types_.extrinsicpayloadv1.md#blockhash)
* [encodedLength](_interfaces_runtime_types_.extrinsicpayloadv1.md#encodedlength)
* [era](_interfaces_runtime_types_.extrinsicpayloadv1.md#era)
* [hash](_interfaces_runtime_types_.extrinsicpayloadv1.md#hash)
* [isEmpty](_interfaces_runtime_types_.extrinsicpayloadv1.md#isempty)
* [method](_interfaces_runtime_types_.extrinsicpayloadv1.md#method)
* [nonce](_interfaces_runtime_types_.extrinsicpayloadv1.md#nonce)

### Methods

* [[Symbol.iterator]](_interfaces_runtime_types_.extrinsicpayloadv1.md#[symbol.iterator])
* [eq](_interfaces_runtime_types_.extrinsicpayloadv1.md#eq)
* [get](_interfaces_runtime_types_.extrinsicpayloadv1.md#get)
* [getAtIndex](_interfaces_runtime_types_.extrinsicpayloadv1.md#getatindex)
* [sign](_interfaces_runtime_types_.extrinsicpayloadv1.md#sign)
* [toArray](_interfaces_runtime_types_.extrinsicpayloadv1.md#toarray)
* [toHex](_interfaces_runtime_types_.extrinsicpayloadv1.md#tohex)
* [toJSON](_interfaces_runtime_types_.extrinsicpayloadv1.md#tojson)
* [toRawType](_interfaces_runtime_types_.extrinsicpayloadv1.md#torawtype)
* [toString](_interfaces_runtime_types_.extrinsicpayloadv1.md#tostring)
* [toU8a](_interfaces_runtime_types_.extrinsicpayloadv1.md#tou8a)
* [typesToMap](_interfaces_runtime_types_.extrinsicpayloadv1.md#static-typestomap)
* [with](_interfaces_runtime_types_.extrinsicpayloadv1.md#static-with)

## Constructors

###  constructor

\+ **new ExtrinsicPayloadV1**(`registry`: [Registry](_types_.registry.md), `value?`: [ExtrinsicPayloadValue](_types_.extrinsicpayloadvalue.md) | Uint8Array | string): *[ExtrinsicPayloadV1](_interfaces_runtime_types_.extrinsicpayloadv1.md)*

*Inherited from [ExtrinsicPayloadV1](../classes/_primitive_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md).[constructor](../classes/_primitive_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#constructor)*

*Overrides [Struct](../classes/_codec_struct_.struct.md).[constructor](../classes/_codec_struct_.struct.md#constructor)*

*Defined in [packages/types/src/primitive/Extrinsic/v1/ExtrinsicPayload.ts:24](https://github.com/polkadot-js/api/blob/82828d8e09/packages/types/src/primitive/Extrinsic/v1/ExtrinsicPayload.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](_types_.registry.md) |
`value?` | [ExtrinsicPayloadValue](_types_.extrinsicpayloadvalue.md) &#124; Uint8Array &#124; string |

**Returns:** *[ExtrinsicPayloadV1](_interfaces_runtime_types_.extrinsicpayloadv1.md)*

## Properties

###  [Symbol.toStringTag]

• **[Symbol.toStringTag]**: *string*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:130

___

###  registry

• **registry**: *[Registry](_types_.registry.md)*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[registry](../classes/_codec_struct_.struct.md#registry)*

*Defined in [packages/types/src/codec/Struct.ts:34](https://github.com/polkadot-js/api/blob/82828d8e09/packages/types/src/codec/Struct.ts#L34)*

## Accessors

###  Type

• **get Type**(): *E*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[Type](../classes/_codec_struct_.struct.md#type)*

*Defined in [packages/types/src/codec/Struct.ts:158](https://github.com/polkadot-js/api/blob/82828d8e09/packages/types/src/codec/Struct.ts#L158)*

**`description`** Returns the Type description to sthe structure

**Returns:** *E*

___

###  blockHash

• **get blockHash**(): *[Hash](_interfaces_runtime_types_.hash.md)*

*Inherited from [ExtrinsicPayloadV1](../classes/_primitive_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md).[blockHash](../classes/_primitive_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#blockhash)*

*Defined in [packages/types/src/primitive/Extrinsic/v1/ExtrinsicPayload.ts:37](https://github.com/polkadot-js/api/blob/82828d8e09/packages/types/src/primitive/Extrinsic/v1/ExtrinsicPayload.ts#L37)*

**`description`** The block [Hash](_interfaces_runtime_types_.hash.md) the signature applies to (mortal/immortal)

**Returns:** *[Hash](_interfaces_runtime_types_.hash.md)*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[encodedLength](../classes/_codec_struct_.struct.md#encodedlength)*

*Defined in [packages/types/src/codec/Struct.ts:171](https://github.com/polkadot-js/api/blob/82828d8e09/packages/types/src/codec/Struct.ts#L171)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  era

• **get era**(): *[ExtrinsicEra](_interfaces_runtime_types_.extrinsicera.md)*

*Inherited from [ExtrinsicPayloadV1](../classes/_primitive_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md).[era](../classes/_primitive_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#era)*

*Defined in [packages/types/src/primitive/Extrinsic/v1/ExtrinsicPayload.ts:51](https://github.com/polkadot-js/api/blob/82828d8e09/packages/types/src/primitive/Extrinsic/v1/ExtrinsicPayload.ts#L51)*

**`description`** The [ExtrinsicEra](_interfaces_runtime_types_.extrinsicera.md)

**Returns:** *[ExtrinsicEra](_interfaces_runtime_types_.extrinsicera.md)*

___

###  hash

• **get hash**(): *[IHash](_types_.ihash.md)*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[hash](../classes/_codec_struct_.struct.md#hash)*

*Defined in [packages/types/src/codec/Struct.ts:182](https://github.com/polkadot-js/api/blob/82828d8e09/packages/types/src/codec/Struct.ts#L182)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[isEmpty](../classes/_codec_struct_.struct.md#isempty)*

*Defined in [packages/types/src/codec/Struct.ts:143](https://github.com/polkadot-js/api/blob/82828d8e09/packages/types/src/codec/Struct.ts#L143)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  method

• **get method**(): *[Bytes](../classes/_primitive_bytes_.bytes.md)*

*Inherited from [ExtrinsicPayloadV1](../classes/_primitive_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md).[method](../classes/_primitive_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#method)*

*Defined in [packages/types/src/primitive/Extrinsic/v1/ExtrinsicPayload.ts:44](https://github.com/polkadot-js/api/blob/82828d8e09/packages/types/src/primitive/Extrinsic/v1/ExtrinsicPayload.ts#L44)*

**`description`** The [Bytes](../classes/_primitive_bytes_.bytes.md) contained in the payload

**Returns:** *[Bytes](../classes/_primitive_bytes_.bytes.md)*

___

###  nonce

• **get nonce**(): *[Compact](../classes/_codec_compact_.compact.md)‹[Index](_interfaces_runtime_types_.index.md)›*

*Inherited from [ExtrinsicPayloadV1](../classes/_primitive_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md).[nonce](../classes/_primitive_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#nonce)*

*Defined in [packages/types/src/primitive/Extrinsic/v1/ExtrinsicPayload.ts:58](https://github.com/polkadot-js/api/blob/82828d8e09/packages/types/src/primitive/Extrinsic/v1/ExtrinsicPayload.ts#L58)*

**`description`** The [Index](_interfaces_runtime_types_.index.md)

**Returns:** *[Compact](../classes/_codec_compact_.compact.md)‹[Index](_interfaces_runtime_types_.index.md)›*

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *IterableIterator‹[keyof S, [Codec](_types_.codec.md)]›*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:121

Returns an iterable of entries in the map.

**Returns:** *IterableIterator‹[keyof S, [Codec](_types_.codec.md)]›*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[eq](../classes/_codec_struct_.struct.md#eq)*

*Defined in [packages/types/src/codec/Struct.ts:189](https://github.com/polkadot-js/api/blob/82828d8e09/packages/types/src/codec/Struct.ts#L189)*

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

*Defined in [packages/types/src/codec/Struct.ts:197](https://github.com/polkadot-js/api/blob/82828d8e09/packages/types/src/codec/Struct.ts#L197)*

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

*Defined in [packages/types/src/codec/Struct.ts:204](https://github.com/polkadot-js/api/blob/82828d8e09/packages/types/src/codec/Struct.ts#L204)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *[Codec](_types_.codec.md)*

___

###  sign

▸ **sign**(`signerPair`: [IKeyringPair](_types_.ikeyringpair.md)): *Uint8Array*

*Inherited from [ExtrinsicPayloadV1](../classes/_primitive_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md).[sign](../classes/_primitive_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#sign)*

*Defined in [packages/types/src/primitive/Extrinsic/v1/ExtrinsicPayload.ts:65](https://github.com/polkadot-js/api/blob/82828d8e09/packages/types/src/primitive/Extrinsic/v1/ExtrinsicPayload.ts#L65)*

**`description`** Sign the payload with the keypair

**Parameters:**

Name | Type |
------ | ------ |
`signerPair` | [IKeyringPair](_types_.ikeyringpair.md) |

**Returns:** *Uint8Array*

___

###  toArray

▸ **toArray**(): *[Codec](_types_.codec.md)[]*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toArray](../classes/_codec_struct_.struct.md#toarray)*

*Defined in [packages/types/src/codec/Struct.ts:211](https://github.com/polkadot-js/api/blob/82828d8e09/packages/types/src/codec/Struct.ts#L211)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](_types_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toHex](../classes/_codec_struct_.struct.md#tohex)*

*Defined in [packages/types/src/codec/Struct.ts:218](https://github.com/polkadot-js/api/blob/82828d8e09/packages/types/src/codec/Struct.ts#L218)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](_types_.anyjsonobject.md) | string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toJSON](../classes/_codec_struct_.struct.md#tojson)*

*Defined in [packages/types/src/codec/Struct.ts:225](https://github.com/polkadot-js/api/blob/82828d8e09/packages/types/src/codec/Struct.ts#L225)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](_types_.anyjsonobject.md) | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toRawType](../classes/_codec_struct_.struct.md#torawtype)*

*Defined in [packages/types/src/codec/Struct.ts:249](https://github.com/polkadot-js/api/blob/82828d8e09/packages/types/src/codec/Struct.ts#L249)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toString](../classes/_codec_struct_.struct.md#tostring)*

*Defined in [packages/types/src/codec/Struct.ts:258](https://github.com/polkadot-js/api/blob/82828d8e09/packages/types/src/codec/Struct.ts#L258)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: [BareOpts](../modules/_types_.md#bareopts)): *Uint8Array*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toU8a](../classes/_codec_struct_.struct.md#tou8a)*

*Defined in [packages/types/src/codec/Struct.ts:266](https://github.com/polkadot-js/api/blob/82828d8e09/packages/types/src/codec/Struct.ts#L266)*

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

*Defined in [packages/types/src/codec/Struct.ts:238](https://github.com/polkadot-js/api/blob/82828d8e09/packages/types/src/codec/Struct.ts#L238)*

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

*Defined in [packages/types/src/codec/Struct.ts:120](https://github.com/polkadot-js/api/blob/82828d8e09/packages/types/src/codec/Struct.ts#L120)*

**Type parameters:**

▪ **S**: *TypesDef*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | S |

**Returns:** *[Constructor](_types_.constructor.md)‹[Struct](../classes/_codec_struct_.struct.md)‹S››*
