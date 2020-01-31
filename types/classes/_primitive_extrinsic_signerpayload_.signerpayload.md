[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["primitive/Extrinsic/SignerPayload"](../modules/_primitive_extrinsic_signerpayload_.md) › [SignerPayload](_primitive_extrinsic_signerpayload_.signerpayload.md)

# Class: SignerPayload

## Hierarchy

  ↳ [SignerPayloadType](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md)

  ↳ **SignerPayload**

## Implements

* ISignerPayload

## Index

### Properties

* [address](_primitive_extrinsic_signerpayload_.signerpayload.md#address)
* [blockHash](_primitive_extrinsic_signerpayload_.signerpayload.md#blockhash)
* [blockNumber](_primitive_extrinsic_signerpayload_.signerpayload.md#blocknumber)
* [encodedLength](_primitive_extrinsic_signerpayload_.signerpayload.md#encodedlength)
* [era](_primitive_extrinsic_signerpayload_.signerpayload.md#era)
* [genesisHash](_primitive_extrinsic_signerpayload_.signerpayload.md#genesishash)
* [hash](_primitive_extrinsic_signerpayload_.signerpayload.md#hash)
* [isEmpty](_primitive_extrinsic_signerpayload_.signerpayload.md#isempty)
* [method](_primitive_extrinsic_signerpayload_.signerpayload.md#method)
* [nonce](_primitive_extrinsic_signerpayload_.signerpayload.md#nonce)
* [registry](_primitive_extrinsic_signerpayload_.signerpayload.md#registry)
* [runtimeVersion](_primitive_extrinsic_signerpayload_.signerpayload.md#runtimeversion)
* [tip](_primitive_extrinsic_signerpayload_.signerpayload.md#tip)
* [version](_primitive_extrinsic_signerpayload_.signerpayload.md#version)

### Methods

* [eq](_primitive_extrinsic_signerpayload_.signerpayload.md#eq)
* [toHex](_primitive_extrinsic_signerpayload_.signerpayload.md#tohex)
* [toJSON](_primitive_extrinsic_signerpayload_.signerpayload.md#tojson)
* [toPayload](_primitive_extrinsic_signerpayload_.signerpayload.md#topayload)
* [toRaw](_primitive_extrinsic_signerpayload_.signerpayload.md#toraw)
* [toRawType](_primitive_extrinsic_signerpayload_.signerpayload.md#torawtype)
* [toString](_primitive_extrinsic_signerpayload_.signerpayload.md#tostring)
* [toU8a](_primitive_extrinsic_signerpayload_.signerpayload.md#tou8a)

## Properties

###  address

• **address**: *Address*

*Inherited from [SignerPayloadType](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md).[address](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md#address)*

*Defined in [packages/types/src/primitive/Extrinsic/SignerPayload.ts:14](https://github.com/polkadot-js/api/blob/4f0e573adf/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L14)*

___

###  blockHash

• **blockHash**: *Hash*

*Inherited from [SignerPayloadType](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md).[blockHash](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md#blockhash)*

*Defined in [packages/types/src/primitive/Extrinsic/SignerPayload.ts:15](https://github.com/polkadot-js/api/blob/4f0e573adf/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L15)*

___

###  blockNumber

• **blockNumber**: *BlockNumber*

*Inherited from [SignerPayloadType](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md).[blockNumber](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md#blocknumber)*

*Defined in [packages/types/src/primitive/Extrinsic/SignerPayload.ts:16](https://github.com/polkadot-js/api/blob/4f0e573adf/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L16)*

___

###  encodedLength

• **encodedLength**: *number*

*Inherited from [SignerPayloadType](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md).[encodedLength](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md#encodedlength)*

*Defined in [packages/types/src/types.ts:76](https://github.com/polkadot-js/api/blob/4f0e573adf/packages/types/src/types.ts#L76)*

**`description`** The length of the value when encoded as a Uint8Array

___

###  era

• **era**: *ExtrinsicEra*

*Inherited from [SignerPayloadType](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md).[era](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md#era)*

*Defined in [packages/types/src/primitive/Extrinsic/SignerPayload.ts:17](https://github.com/polkadot-js/api/blob/4f0e573adf/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L17)*

___

###  genesisHash

• **genesisHash**: *Hash*

*Inherited from [SignerPayloadType](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md).[genesisHash](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md#genesishash)*

*Defined in [packages/types/src/primitive/Extrinsic/SignerPayload.ts:18](https://github.com/polkadot-js/api/blob/4f0e573adf/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L18)*

___

###  hash

• **hash**: *IHash*

*Inherited from [SignerPayloadType](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md).[hash](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md#hash)*

*Defined in [packages/types/src/types.ts:81](https://github.com/polkadot-js/api/blob/4f0e573adf/packages/types/src/types.ts#L81)*

**`description`** Returns a hash of the value

___

###  isEmpty

• **isEmpty**: *boolean*

*Inherited from [SignerPayloadType](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md).[isEmpty](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md#isempty)*

*Defined in [packages/types/src/types.ts:86](https://github.com/polkadot-js/api/blob/4f0e573adf/packages/types/src/types.ts#L86)*

**`description`** Checks if the value is an empty value

___

###  method

• **method**: *Call*

*Inherited from [SignerPayloadType](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md).[method](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md#method)*

*Defined in [packages/types/src/primitive/Extrinsic/SignerPayload.ts:19](https://github.com/polkadot-js/api/blob/4f0e573adf/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L19)*

___

###  nonce

• **nonce**: *[Compact](_codec_compact_.compact.md)‹Index›*

*Inherited from [SignerPayloadType](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md).[nonce](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md#nonce)*

*Defined in [packages/types/src/primitive/Extrinsic/SignerPayload.ts:20](https://github.com/polkadot-js/api/blob/4f0e573adf/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L20)*

___

###  registry

• **registry**: *Registry*

*Inherited from [SignerPayloadType](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md).[registry](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md#registry)*

*Defined in [packages/types/src/types.ts:91](https://github.com/polkadot-js/api/blob/4f0e573adf/packages/types/src/types.ts#L91)*

**`description`** The registry associated with this object

___

###  runtimeVersion

• **runtimeVersion**: *RuntimeVersion*

*Inherited from [SignerPayloadType](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md).[runtimeVersion](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md#runtimeversion)*

*Defined in [packages/types/src/primitive/Extrinsic/SignerPayload.ts:21](https://github.com/polkadot-js/api/blob/4f0e573adf/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L21)*

___

###  tip

• **tip**: *[Compact](_codec_compact_.compact.md)‹Balance›*

*Inherited from [SignerPayloadType](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md).[tip](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md#tip)*

*Defined in [packages/types/src/primitive/Extrinsic/SignerPayload.ts:22](https://github.com/polkadot-js/api/blob/4f0e573adf/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L22)*

___

###  version

• **version**: *[u8](../interfaces/_interfaceregistry_.interfaceregistry.md#u8)*

*Inherited from [SignerPayloadType](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md).[version](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md#version)*

*Defined in [packages/types/src/primitive/Extrinsic/SignerPayload.ts:23](https://github.com/polkadot-js/api/blob/4f0e573adf/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L23)*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [SignerPayloadType](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md).[eq](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md#eq)*

*Defined in [packages/types/src/types.ts:96](https://github.com/polkadot-js/api/blob/4f0e573adf/packages/types/src/types.ts#L96)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Inherited from [SignerPayloadType](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md).[toHex](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md#tohex)*

*Defined in [packages/types/src/types.ts:101](https://github.com/polkadot-js/api/blob/4f0e573adf/packages/types/src/types.ts#L101)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

**Parameters:**

Name | Type |
------ | ------ |
`isLe?` | undefined &#124; false &#124; true |

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *AnyJson*

*Inherited from [SignerPayloadType](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md).[toJSON](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md#tojson)*

*Defined in [packages/types/src/types.ts:106](https://github.com/polkadot-js/api/blob/4f0e573adf/packages/types/src/types.ts#L106)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *AnyJson*

___

###  toPayload

▸ **toPayload**(): *SignerPayloadJSON*

*Defined in [packages/types/src/primitive/Extrinsic/SignerPayload.ts:45](https://github.com/polkadot-js/api/blob/4f0e573adf/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L45)*

**`description`** Creates an representation of the structure as an ISignerPayload JSON

**Returns:** *SignerPayloadJSON*

___

###  toRaw

▸ **toRaw**(): *SignerPayloadRaw*

*Defined in [packages/types/src/primitive/Extrinsic/SignerPayload.ts:65](https://github.com/polkadot-js/api/blob/4f0e573adf/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L65)*

**`description`** Creates a representation of the payload in raw Exrinsic form

**Returns:** *SignerPayloadRaw*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [SignerPayloadType](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md).[toRawType](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md#torawtype)*

*Defined in [packages/types/src/types.ts:111](https://github.com/polkadot-js/api/blob/4f0e573adf/packages/types/src/types.ts#L111)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [SignerPayloadType](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md).[toString](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md#tostring)*

*Defined in [packages/types/src/types.ts:116](https://github.com/polkadot-js/api/blob/4f0e573adf/packages/types/src/types.ts#L116)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: BareOpts): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Inherited from [SignerPayloadType](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md).[toU8a](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md#tou8a)*

*Defined in [packages/types/src/types.ts:122](https://github.com/polkadot-js/api/blob/4f0e573adf/packages/types/src/types.ts#L122)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | BareOpts | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*
