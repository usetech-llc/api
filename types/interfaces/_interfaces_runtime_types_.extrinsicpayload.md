[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/runtime/types"](../modules/_interfaces_runtime_types_.md) › [ExtrinsicPayload](_interfaces_runtime_types_.extrinsicpayload.md)

# Interface: ExtrinsicPayload

GenericExtrinsicPayload

## Hierarchy

  ↳ [ExtrinsicPayload](../classes/_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md)

  ↳ **ExtrinsicPayload**

## Implements

* [Codec](_types_.codec.md)

## Index

### Constructors

* [constructor](_interfaces_runtime_types_.extrinsicpayload.md#constructor)

### Properties

* [registry](_interfaces_runtime_types_.extrinsicpayload.md#registry)

### Accessors

* [blockHash](_interfaces_runtime_types_.extrinsicpayload.md#blockhash)
* [encodedLength](_interfaces_runtime_types_.extrinsicpayload.md#encodedlength)
* [era](_interfaces_runtime_types_.extrinsicpayload.md#era)
* [genesisHash](_interfaces_runtime_types_.extrinsicpayload.md#genesishash)
* [hash](_interfaces_runtime_types_.extrinsicpayload.md#hash)
* [isEmpty](_interfaces_runtime_types_.extrinsicpayload.md#isempty)
* [method](_interfaces_runtime_types_.extrinsicpayload.md#method)
* [nonce](_interfaces_runtime_types_.extrinsicpayload.md#nonce)
* [specVersion](_interfaces_runtime_types_.extrinsicpayload.md#specversion)
* [tip](_interfaces_runtime_types_.extrinsicpayload.md#tip)

### Methods

* [eq](_interfaces_runtime_types_.extrinsicpayload.md#eq)
* [sign](_interfaces_runtime_types_.extrinsicpayload.md#sign)
* [toHex](_interfaces_runtime_types_.extrinsicpayload.md#tohex)
* [toJSON](_interfaces_runtime_types_.extrinsicpayload.md#tojson)
* [toRawType](_interfaces_runtime_types_.extrinsicpayload.md#torawtype)
* [toString](_interfaces_runtime_types_.extrinsicpayload.md#tostring)
* [toU8a](_interfaces_runtime_types_.extrinsicpayload.md#tou8a)
* [decodeExtrinsicPayload](_interfaces_runtime_types_.extrinsicpayload.md#static-decodeextrinsicpayload)

## Constructors

###  constructor

\+ **new ExtrinsicPayload**(`registry`: [Registry](_types_.registry.md), `value`: Partial‹[ExtrinsicPayloadValue](_types_.extrinsicpayloadvalue.md)› | Uint8Array | string | undefined, `__namedParameters`: object): *[ExtrinsicPayload](_interfaces_runtime_types_.extrinsicpayload.md)*

*Inherited from [ExtrinsicPayload](../classes/_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md).[constructor](../classes/_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md#constructor)*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts:39](https://github.com/polkadot-js/api/blob/0c98593ae/packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts#L39)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`registry` | [Registry](_types_.registry.md) | - |
`value` | Partial‹[ExtrinsicPayloadValue](_types_.extrinsicpayloadvalue.md)› &#124; Uint8Array &#124; string &#124; undefined | - |
`__namedParameters` | object |  {} |

**Returns:** *[ExtrinsicPayload](_interfaces_runtime_types_.extrinsicpayload.md)*

## Properties

###  registry

• **registry**: *[Registry](_types_.registry.md)*

*Inherited from [Base](../classes/_codec_base_.base.md).[registry](../classes/_codec_base_.base.md#registry)*

*Defined in [packages/types/src/codec/Base.ts:16](https://github.com/polkadot-js/api/blob/0c98593ae/packages/types/src/codec/Base.ts#L16)*

## Accessors

###  blockHash

• **get blockHash**(): *[Hash](_interfaces_runtime_types_.hash.md)*

*Inherited from [ExtrinsicPayload](../classes/_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md).[blockHash](../classes/_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md#blockhash)*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts:55](https://github.com/polkadot-js/api/blob/0c98593ae/packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts#L55)*

**`description`** The block [Hash](_interfaces_runtime_types_.hash.md) the signature applies to (mortal/immortal)

**Returns:** *[Hash](_interfaces_runtime_types_.hash.md)*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Base](../classes/_codec_base_.base.md).[encodedLength](../classes/_codec_base_.base.md#encodedlength)*

*Defined in [packages/types/src/codec/Base.ts:28](https://github.com/polkadot-js/api/blob/0c98593ae/packages/types/src/codec/Base.ts#L28)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  era

• **get era**(): *[ExtrinsicEra](../classes/_primitive_extrinsic_extrinsicera_.extrinsicera.md)*

*Inherited from [ExtrinsicPayload](../classes/_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md).[era](../classes/_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md#era)*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts:62](https://github.com/polkadot-js/api/blob/0c98593ae/packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts#L62)*

**`description`** The [ExtrinsicEra](_interfaces_runtime_types_.extrinsicera.md)

**Returns:** *[ExtrinsicEra](../classes/_primitive_extrinsic_extrinsicera_.extrinsicera.md)*

___

###  genesisHash

• **get genesisHash**(): *[Hash](_interfaces_runtime_types_.hash.md)*

*Inherited from [ExtrinsicPayload](../classes/_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md).[genesisHash](../classes/_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md#genesishash)*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts:69](https://github.com/polkadot-js/api/blob/0c98593ae/packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts#L69)*

**`description`** The genesis block [Hash](_interfaces_runtime_types_.hash.md) the signature applies to

**Returns:** *[Hash](_interfaces_runtime_types_.hash.md)*

___

###  hash

• **get hash**(): *[IHash](_types_.ihash.md)*

*Inherited from [Base](../classes/_codec_base_.base.md).[hash](../classes/_codec_base_.base.md#hash)*

*Defined in [packages/types/src/codec/Base.ts:35](https://github.com/polkadot-js/api/blob/0c98593ae/packages/types/src/codec/Base.ts#L35)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Base](../classes/_codec_base_.base.md).[isEmpty](../classes/_codec_base_.base.md#isempty)*

*Defined in [packages/types/src/codec/Base.ts:42](https://github.com/polkadot-js/api/blob/0c98593ae/packages/types/src/codec/Base.ts#L42)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  method

• **get method**(): *[Raw](../classes/_codec_raw_.raw.md)*

*Inherited from [ExtrinsicPayload](../classes/_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md).[method](../classes/_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md#method)*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts:77](https://github.com/polkadot-js/api/blob/0c98593ae/packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts#L77)*

**`description`** The [Raw](../classes/_codec_raw_.raw.md) contained in the payload

**Returns:** *[Raw](../classes/_codec_raw_.raw.md)*

___

###  nonce

• **get nonce**(): *[Compact](../classes/_codec_compact_.compact.md)‹[Index](_interfaces_runtime_types_.index.md)›*

*Inherited from [ExtrinsicPayload](../classes/_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md).[nonce](../classes/_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md#nonce)*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts:84](https://github.com/polkadot-js/api/blob/0c98593ae/packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts#L84)*

**`description`** The [Index](_interfaces_runtime_types_.index.md)

**Returns:** *[Compact](../classes/_codec_compact_.compact.md)‹[Index](_interfaces_runtime_types_.index.md)›*

___

###  specVersion

• **get specVersion**(): *[u32](_interfaceregistry_.interfaceregistry.md#u32)*

*Inherited from [ExtrinsicPayload](../classes/_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md).[specVersion](../classes/_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md#specversion)*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts:91](https://github.com/polkadot-js/api/blob/0c98593ae/packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts#L91)*

**`description`** The specVersion as a [u32](_interfaceregistry_.interfaceregistry.md#u32) for this payload

**Returns:** *[u32](_interfaceregistry_.interfaceregistry.md#u32)*

___

###  tip

• **get tip**(): *[Compact](../classes/_codec_compact_.compact.md)‹[Balance](_interfaces_runtime_types_.balance.md)›*

*Inherited from [ExtrinsicPayload](../classes/_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md).[tip](../classes/_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md#tip)*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts:99](https://github.com/polkadot-js/api/blob/0c98593ae/packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts#L99)*

**`description`** The [Balance](_interfaces_runtime_types_.balance.md)

**Returns:** *[Compact](../classes/_codec_compact_.compact.md)‹[Balance](_interfaces_runtime_types_.balance.md)›*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [ExtrinsicPayload](../classes/_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md).[eq](../classes/_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md#eq)*

*Overrides [Base](../classes/_codec_base_.base.md).[eq](../classes/_codec_base_.base.md#eq)*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts:107](https://github.com/polkadot-js/api/blob/0c98593ae/packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts#L107)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  sign

▸ **sign**(`signerPair`: [IKeyringPair](_types_.ikeyringpair.md)): *object*

*Inherited from [ExtrinsicPayload](../classes/_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md).[sign](../classes/_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md#sign)*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts:114](https://github.com/polkadot-js/api/blob/0c98593ae/packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts#L114)*

**`description`** Sign the payload with the keypair

**Parameters:**

Name | Type |
------ | ------ |
`signerPair` | [IKeyringPair](_types_.ikeyringpair.md) |

**Returns:** *object*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Inherited from [Base](../classes/_codec_base_.base.md).[toHex](../classes/_codec_base_.base.md#tohex)*

*Defined in [packages/types/src/codec/Base.ts:56](https://github.com/polkadot-js/api/blob/0c98593ae/packages/types/src/codec/Base.ts#L56)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

**Parameters:**

Name | Type |
------ | ------ |
`isLe?` | undefined &#124; false &#124; true |

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *any*

*Inherited from [ExtrinsicPayload](../classes/_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md).[toJSON](../classes/_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md#tojson)*

*Overrides [Base](../classes/_codec_base_.base.md).[toJSON](../classes/_codec_base_.base.md#tojson)*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts:129](https://github.com/polkadot-js/api/blob/0c98593ae/packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts#L129)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *any*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Base](../classes/_codec_base_.base.md).[toRawType](../classes/_codec_base_.base.md#torawtype)*

*Defined in [packages/types/src/codec/Base.ts:85](https://github.com/polkadot-js/api/blob/0c98593ae/packages/types/src/codec/Base.ts#L85)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [ExtrinsicPayload](../classes/_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md).[toString](../classes/_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md#tostring)*

*Overrides [Base](../classes/_codec_base_.base.md).[toString](../classes/_codec_base_.base.md#tostring)*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts:136](https://github.com/polkadot-js/api/blob/0c98593ae/packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts#L136)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: [BareOpts](../modules/_types_.md#bareopts)): *Uint8Array*

*Inherited from [ExtrinsicPayload](../classes/_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md).[toU8a](../classes/_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md#tou8a)*

*Overrides [Base](../classes/_codec_base_.base.md).[toU8a](../classes/_codec_base_.base.md#tou8a)*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts:143](https://github.com/polkadot-js/api/blob/0c98593ae/packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts#L143)*

**`description`** Returns a serialized u8a form

**Parameters:**

Name | Type |
------ | ------ |
`isBare?` | [BareOpts](../modules/_types_.md#bareopts) |

**Returns:** *Uint8Array*

___

### `Static` decodeExtrinsicPayload

▸ **decodeExtrinsicPayload**(`registry`: [Registry](_types_.registry.md), `value`: [ExtrinsicPayload](../classes/_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md) | [ExtrinsicPayloadValue](_types_.extrinsicpayloadvalue.md) | Uint8Array | string | undefined, `version`: number): *ExtrinsicPayloadVx*

*Inherited from [ExtrinsicPayload](../classes/_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md).[decodeExtrinsicPayload](../classes/_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md#static-decodeextrinsicpayload)*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts:44](https://github.com/polkadot-js/api/blob/0c98593ae/packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts#L44)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`registry` | [Registry](_types_.registry.md) | - |
`value` | [ExtrinsicPayload](../classes/_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md) &#124; [ExtrinsicPayloadValue](_types_.extrinsicpayloadvalue.md) &#124; Uint8Array &#124; string &#124; undefined | - |
`version` | number |  DEFAULT_VERSION |

**Returns:** *ExtrinsicPayloadVx*
