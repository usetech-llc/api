[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["primitive/Extrinsic/SignerPayload"](../modules/_primitive_extrinsic_signerpayload_.md) › [SignerPayload](_primitive_extrinsic_signerpayload_.signerpayload.md)

# Class: SignerPayload

## Hierarchy

  ↳ [SignerPayloadType](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md)

  ↳ **SignerPayload**

  ↳ [SignerPayload](../interfaces/_interfaces_runtime_types_.signerpayload.md)

## Implements

* [ISignerPayload](../interfaces/_types_.isignerpayload.md)

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

• **address**: *[Address](../interfaces/_interfaces_runtime_types_.address.md)*

*Inherited from [SignerPayloadType](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md).[address](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md#address)*

*Defined in [packages/types/src/primitive/Extrinsic/SignerPayload.ts:14](https://github.com/polkadot-js/api/blob/b1dff2295/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L14)*

___

###  blockHash

• **blockHash**: *[Hash](../interfaces/_interfaces_runtime_types_.hash.md)*

*Inherited from [SignerPayloadType](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md).[blockHash](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md#blockhash)*

*Defined in [packages/types/src/primitive/Extrinsic/SignerPayload.ts:15](https://github.com/polkadot-js/api/blob/b1dff2295/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L15)*

___

###  blockNumber

• **blockNumber**: *[BlockNumber](../interfaces/_interfaces_runtime_types_.blocknumber.md)*

*Inherited from [SignerPayloadType](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md).[blockNumber](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md#blocknumber)*

*Defined in [packages/types/src/primitive/Extrinsic/SignerPayload.ts:16](https://github.com/polkadot-js/api/blob/b1dff2295/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L16)*

___

###  encodedLength

• **encodedLength**: *number*

*Inherited from [Codec](../interfaces/_types_.codec.md).[encodedLength](../interfaces/_types_.codec.md#encodedlength)*

*Defined in [packages/types/src/types.ts:75](https://github.com/polkadot-js/api/blob/b1dff2295/packages/types/src/types.ts#L75)*

**`description`** The length of the value when encoded as a Uint8Array

___

###  era

• **era**: *[ExtrinsicEra](../interfaces/_interfaces_runtime_types_.extrinsicera.md)*

*Inherited from [SignerPayloadType](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md).[era](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md#era)*

*Defined in [packages/types/src/primitive/Extrinsic/SignerPayload.ts:17](https://github.com/polkadot-js/api/blob/b1dff2295/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L17)*

___

###  genesisHash

• **genesisHash**: *[Hash](../interfaces/_interfaces_runtime_types_.hash.md)*

*Inherited from [SignerPayloadType](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md).[genesisHash](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md#genesishash)*

*Defined in [packages/types/src/primitive/Extrinsic/SignerPayload.ts:18](https://github.com/polkadot-js/api/blob/b1dff2295/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L18)*

___

###  hash

• **hash**: *[IHash](../interfaces/_types_.ihash.md)*

*Inherited from [Codec](../interfaces/_types_.codec.md).[hash](../interfaces/_types_.codec.md#hash)*

*Defined in [packages/types/src/types.ts:80](https://github.com/polkadot-js/api/blob/b1dff2295/packages/types/src/types.ts#L80)*

**`description`** Returns a hash of the value

___

###  isEmpty

• **isEmpty**: *boolean*

*Inherited from [Codec](../interfaces/_types_.codec.md).[isEmpty](../interfaces/_types_.codec.md#isempty)*

*Defined in [packages/types/src/types.ts:85](https://github.com/polkadot-js/api/blob/b1dff2295/packages/types/src/types.ts#L85)*

**`description`** Checks if the value is an empty value

___

###  method

• **method**: *[Call](../interfaces/_interfaces_runtime_types_.call.md)*

*Inherited from [SignerPayloadType](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md).[method](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md#method)*

*Defined in [packages/types/src/primitive/Extrinsic/SignerPayload.ts:19](https://github.com/polkadot-js/api/blob/b1dff2295/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L19)*

___

###  nonce

• **nonce**: *[Compact](_codec_compact_.compact.md)‹[Index](../interfaces/_interfaces_runtime_types_.index.md)›*

*Inherited from [SignerPayloadType](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md).[nonce](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md#nonce)*

*Defined in [packages/types/src/primitive/Extrinsic/SignerPayload.ts:20](https://github.com/polkadot-js/api/blob/b1dff2295/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L20)*

___

###  registry

• **registry**: *[Registry](../interfaces/_types_.registry.md)*

*Inherited from [Codec](../interfaces/_types_.codec.md).[registry](../interfaces/_types_.codec.md#registry)*

*Defined in [packages/types/src/types.ts:90](https://github.com/polkadot-js/api/blob/b1dff2295/packages/types/src/types.ts#L90)*

**`description`** The registry associated with this object

___

###  runtimeVersion

• **runtimeVersion**: *[RuntimeVersion](../interfaces/_interfaces_rpc_types_.runtimeversion.md)*

*Inherited from [SignerPayloadType](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md).[runtimeVersion](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md#runtimeversion)*

*Defined in [packages/types/src/primitive/Extrinsic/SignerPayload.ts:21](https://github.com/polkadot-js/api/blob/b1dff2295/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L21)*

___

###  tip

• **tip**: *[Compact](_codec_compact_.compact.md)‹[Balance](../interfaces/_interfaces_runtime_types_.balance.md)›*

*Inherited from [SignerPayloadType](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md).[tip](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md#tip)*

*Defined in [packages/types/src/primitive/Extrinsic/SignerPayload.ts:22](https://github.com/polkadot-js/api/blob/b1dff2295/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L22)*

___

###  version

• **version**: *[u8](../interfaces/_interfaceregistry_.interfaceregistry.md#u8)*

*Inherited from [SignerPayloadType](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md).[version](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md#version)*

*Defined in [packages/types/src/primitive/Extrinsic/SignerPayload.ts:23](https://github.com/polkadot-js/api/blob/b1dff2295/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L23)*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Codec](../interfaces/_types_.codec.md).[eq](../interfaces/_types_.codec.md#eq)*

*Defined in [packages/types/src/types.ts:95](https://github.com/polkadot-js/api/blob/b1dff2295/packages/types/src/types.ts#L95)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Inherited from [Codec](../interfaces/_types_.codec.md).[toHex](../interfaces/_types_.codec.md#tohex)*

*Defined in [packages/types/src/types.ts:100](https://github.com/polkadot-js/api/blob/b1dff2295/packages/types/src/types.ts#L100)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

**Parameters:**

Name | Type |
------ | ------ |
`isLe?` | undefined &#124; false &#124; true |

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_.md#anyjson)*

*Inherited from [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Defined in [packages/types/src/types.ts:105](https://github.com/polkadot-js/api/blob/b1dff2295/packages/types/src/types.ts#L105)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

___

###  toPayload

▸ **toPayload**(): *[SignerPayloadJSON](../interfaces/_types_.signerpayloadjson.md)*

*Implementation of [ISignerPayload](../interfaces/_types_.isignerpayload.md)*

*Defined in [packages/types/src/primitive/Extrinsic/SignerPayload.ts:45](https://github.com/polkadot-js/api/blob/b1dff2295/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L45)*

**`description`** Creates an representation of the structure as an ISignerPayload JSON

**Returns:** *[SignerPayloadJSON](../interfaces/_types_.signerpayloadjson.md)*

___

###  toRaw

▸ **toRaw**(): *[SignerPayloadRaw](../interfaces/_types_.signerpayloadraw.md)*

*Implementation of [ISignerPayload](../interfaces/_types_.isignerpayload.md)*

*Defined in [packages/types/src/primitive/Extrinsic/SignerPayload.ts:65](https://github.com/polkadot-js/api/blob/b1dff2295/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L65)*

**`description`** Creates a representation of the payload in raw Exrinsic form

**Returns:** *[SignerPayloadRaw](../interfaces/_types_.signerpayloadraw.md)*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Codec](../interfaces/_types_.codec.md).[toRawType](../interfaces/_types_.codec.md#torawtype)*

*Defined in [packages/types/src/types.ts:110](https://github.com/polkadot-js/api/blob/b1dff2295/packages/types/src/types.ts#L110)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Defined in [packages/types/src/types.ts:115](https://github.com/polkadot-js/api/blob/b1dff2295/packages/types/src/types.ts#L115)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: [BareOpts](../modules/_types_.md#bareopts)): *Uint8Array*

*Inherited from [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Defined in [packages/types/src/types.ts:121](https://github.com/polkadot-js/api/blob/b1dff2295/packages/types/src/types.ts#L121)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | [BareOpts](../modules/_types_.md#bareopts) | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*
