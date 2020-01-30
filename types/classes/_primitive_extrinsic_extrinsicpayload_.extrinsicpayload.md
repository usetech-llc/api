[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["primitive/Extrinsic/ExtrinsicPayload"](../modules/_primitive_extrinsic_extrinsicpayload_.md) › [ExtrinsicPayload](_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md)

# Class: ExtrinsicPayload

**`name`** ExtrinsicPayload

**`description`** 
A signing payload for an [Extrinsic](_primitive_extrinsic_extrinsic_.extrinsic.md). For the final encoding, it is variable length based
on the contents included

## Hierarchy

* [Base](_codec_base_.base.md)‹ExtrinsicPayloadVx›

  ↳ **ExtrinsicPayload**

## Implements

* Codec

## Index

### Constructors

* [constructor](_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md#constructor)

### Properties

* [registry](_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md#registry)

### Accessors

* [blockHash](_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md#blockhash)
* [encodedLength](_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md#encodedlength)
* [era](_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md#era)
* [genesisHash](_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md#genesishash)
* [hash](_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md#hash)
* [isEmpty](_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md#isempty)
* [method](_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md#method)
* [nonce](_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md#nonce)
* [specVersion](_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md#specversion)
* [tip](_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md#tip)

### Methods

* [eq](_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md#eq)
* [sign](_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md#sign)
* [toHex](_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md#tohex)
* [toJSON](_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md#tojson)
* [toRawType](_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md#torawtype)
* [toString](_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md#tostring)
* [toU8a](_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md#tou8a)
* [decodeExtrinsicPayload](_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md#static-decodeextrinsicpayload)

## Constructors

###  constructor

\+ **new ExtrinsicPayload**(`registry`: Registry, `value`: Partial‹ExtrinsicPayloadValue› | [Uint8Array](_codec_raw_.raw.md#static-uint8array) | string | undefined, `__namedParameters`: object): *[ExtrinsicPayload](_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md)*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts:39](https://github.com/polkadot-js/api/blob/9c913fb482/packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts#L39)*

**Parameters:**

▪ **registry**: *Registry*

▪ **value**: *Partial‹ExtrinsicPayloadValue› | [Uint8Array](_codec_raw_.raw.md#static-uint8array) | string | undefined*

▪`Default value`  **__namedParameters**: *object*= {}

Name | Type |
------ | ------ |
`version` | undefined &#124; number |

**Returns:** *[ExtrinsicPayload](_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md)*

## Properties

###  registry

• **registry**: *Registry*

*Inherited from [Base](_codec_base_.base.md).[registry](_codec_base_.base.md#registry)*

*Defined in [packages/types/src/codec/Base.ts:16](https://github.com/polkadot-js/api/blob/9c913fb482/packages/types/src/codec/Base.ts#L16)*

## Accessors

###  blockHash

• **get blockHash**(): *Hash*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts:55](https://github.com/polkadot-js/api/blob/9c913fb482/packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts#L55)*

**`description`** The block [Hash](../interfaces/_interfaceregistry_.interfaceregistry.md#hash) the signature applies to (mortal/immortal)

**Returns:** *Hash*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Base](_codec_base_.base.md).[encodedLength](_codec_base_.base.md#encodedlength)*

*Defined in [packages/types/src/codec/Base.ts:28](https://github.com/polkadot-js/api/blob/9c913fb482/packages/types/src/codec/Base.ts#L28)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  era

• **get era**(): *[ExtrinsicEra](_primitive_extrinsic_extrinsicera_.extrinsicera.md)*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts:62](https://github.com/polkadot-js/api/blob/9c913fb482/packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts#L62)*

**`description`** The [ExtrinsicEra](_primitive_extrinsic_extrinsicera_.extrinsicera.md)

**Returns:** *[ExtrinsicEra](_primitive_extrinsic_extrinsicera_.extrinsicera.md)*

___

###  genesisHash

• **get genesisHash**(): *Hash*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts:69](https://github.com/polkadot-js/api/blob/9c913fb482/packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts#L69)*

**`description`** The genesis block [Hash](../interfaces/_interfaceregistry_.interfaceregistry.md#hash) the signature applies to

**Returns:** *Hash*

___

###  hash

• **get hash**(): *IHash*

*Inherited from [Base](_codec_base_.base.md).[hash](_codec_base_.base.md#hash)*

*Defined in [packages/types/src/codec/Base.ts:35](https://github.com/polkadot-js/api/blob/9c913fb482/packages/types/src/codec/Base.ts#L35)*

**`description`** returns a hash of the contents

**Returns:** *IHash*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Base](_codec_base_.base.md).[isEmpty](_codec_base_.base.md#isempty)*

*Defined in [packages/types/src/codec/Base.ts:42](https://github.com/polkadot-js/api/blob/9c913fb482/packages/types/src/codec/Base.ts#L42)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  method

• **get method**(): *[Raw](_codec_raw_.raw.md)*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts:77](https://github.com/polkadot-js/api/blob/9c913fb482/packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts#L77)*

**`description`** The [Raw](_codec_raw_.raw.md) contained in the payload

**Returns:** *[Raw](_codec_raw_.raw.md)*

___

###  nonce

• **get nonce**(): *[Compact](_codec_compact_.compact.md)‹Index›*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts:84](https://github.com/polkadot-js/api/blob/9c913fb482/packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts#L84)*

**`description`** The [Index](../interfaces/_interfaceregistry_.interfaceregistry.md#index)

**Returns:** *[Compact](_codec_compact_.compact.md)‹Index›*

___

###  specVersion

• **get specVersion**(): *[u32](../interfaces/_interfaceregistry_.interfaceregistry.md#u32)*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts:91](https://github.com/polkadot-js/api/blob/9c913fb482/packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts#L91)*

**`description`** The specVersion as a [u32](../interfaces/_interfaceregistry_.interfaceregistry.md#u32) for this payload

**Returns:** *[u32](../interfaces/_interfaceregistry_.interfaceregistry.md#u32)*

___

###  tip

• **get tip**(): *[Compact](_codec_compact_.compact.md)‹Balance›*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts:99](https://github.com/polkadot-js/api/blob/9c913fb482/packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts#L99)*

**`description`** The [Balance](../interfaces/_interfaceregistry_.interfaceregistry.md#balance)

**Returns:** *[Compact](_codec_compact_.compact.md)‹Balance›*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Overrides [Base](_codec_base_.base.md).[eq](_codec_base_.base.md#eq)*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts:107](https://github.com/polkadot-js/api/blob/9c913fb482/packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts#L107)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  sign

▸ **sign**(`signerPair`: IKeyringPair): *object*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts:114](https://github.com/polkadot-js/api/blob/9c913fb482/packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts#L114)*

**`description`** Sign the payload with the keypair

**Parameters:**

Name | Type |
------ | ------ |
`signerPair` | IKeyringPair |

**Returns:** *object*

* **signature**: *string*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Inherited from [Base](_codec_base_.base.md).[toHex](_codec_base_.base.md#tohex)*

*Defined in [packages/types/src/codec/Base.ts:56](https://github.com/polkadot-js/api/blob/9c913fb482/packages/types/src/codec/Base.ts#L56)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

**Parameters:**

Name | Type |
------ | ------ |
`isLe?` | undefined &#124; false &#124; true |

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *any*

*Overrides [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts:129](https://github.com/polkadot-js/api/blob/9c913fb482/packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts#L129)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *any*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Base](_codec_base_.base.md).[toRawType](_codec_base_.base.md#torawtype)*

*Defined in [packages/types/src/codec/Base.ts:85](https://github.com/polkadot-js/api/blob/9c913fb482/packages/types/src/codec/Base.ts#L85)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts:136](https://github.com/polkadot-js/api/blob/9c913fb482/packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts#L136)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: BareOpts): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Overrides [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts:143](https://github.com/polkadot-js/api/blob/9c913fb482/packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts#L143)*

**`description`** Returns a serialized u8a form

**Parameters:**

Name | Type |
------ | ------ |
`isBare?` | BareOpts |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

___

### `Static` decodeExtrinsicPayload

▸ **decodeExtrinsicPayload**(`registry`: Registry, `value`: [ExtrinsicPayload](_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md) | ExtrinsicPayloadValue | [Uint8Array](_codec_raw_.raw.md#static-uint8array) | string | undefined, `version`: number): *ExtrinsicPayloadVx*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts:44](https://github.com/polkadot-js/api/blob/9c913fb482/packages/types/src/primitive/Extrinsic/ExtrinsicPayload.ts#L44)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`registry` | Registry | - |
`value` | [ExtrinsicPayload](_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md) &#124; ExtrinsicPayloadValue &#124; [Uint8Array](_codec_raw_.raw.md#static-uint8array) &#124; string &#124; undefined | - |
`version` | number | DEFAULT_VERSION |

**Returns:** *ExtrinsicPayloadVx*
