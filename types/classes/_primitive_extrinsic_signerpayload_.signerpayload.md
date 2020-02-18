[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["primitive/Extrinsic/SignerPayload"](../modules/_primitive_extrinsic_signerpayload_.md) › [SignerPayload](_primitive_extrinsic_signerpayload_.signerpayload.md)

# Class: SignerPayload

**`name`** SignerPayload

**`description`** 
A generic signer payload that can be used for serialization between API and signer

## Hierarchy

  ↳ [SignerPayloadType](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md)

  ↳ **SignerPayload**

## Implements

* [ISignerPayload](../interfaces/_types_extrinsic_.isignerpayload.md)

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
* [toHuman](_primitive_extrinsic_signerpayload_.signerpayload.md#tohuman)
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

*Defined in [packages/types/src/primitive/Extrinsic/SignerPayload.ts:14](https://github.com/polkadot-js/api/blob/ad2939cc4f/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L14)*

___

###  blockHash

• **blockHash**: *Hash*

*Inherited from [SignerPayloadType](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md).[blockHash](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md#blockhash)*

*Defined in [packages/types/src/primitive/Extrinsic/SignerPayload.ts:15](https://github.com/polkadot-js/api/blob/ad2939cc4f/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L15)*

___

###  blockNumber

• **blockNumber**: *BlockNumber*

*Inherited from [SignerPayloadType](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md).[blockNumber](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md#blocknumber)*

*Defined in [packages/types/src/primitive/Extrinsic/SignerPayload.ts:16](https://github.com/polkadot-js/api/blob/ad2939cc4f/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L16)*

___

###  encodedLength

• **encodedLength**: *number*

*Inherited from [CompactEncodable](../interfaces/_codec_compact_.compactencodable.md).[encodedLength](../interfaces/_codec_compact_.compactencodable.md#encodedlength)*

*Defined in [packages/types/src/types/codec.ts:43](https://github.com/polkadot-js/api/blob/ad2939cc4f/packages/types/src/types/codec.ts#L43)*

**`description`** The length of the value when encoded as a Uint8Array

___

###  era

• **era**: *ExtrinsicEra*

*Inherited from [SignerPayloadType](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md).[era](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md#era)*

*Defined in [packages/types/src/primitive/Extrinsic/SignerPayload.ts:17](https://github.com/polkadot-js/api/blob/ad2939cc4f/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L17)*

___

###  genesisHash

• **genesisHash**: *Hash*

*Inherited from [SignerPayloadType](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md).[genesisHash](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md#genesishash)*

*Defined in [packages/types/src/primitive/Extrinsic/SignerPayload.ts:18](https://github.com/polkadot-js/api/blob/ad2939cc4f/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L18)*

___

###  hash

• **hash**: *[IHash](../interfaces/_types_interfaces_.ihash.md)*

*Inherited from [CompactEncodable](../interfaces/_codec_compact_.compactencodable.md).[hash](../interfaces/_codec_compact_.compactencodable.md#hash)*

*Defined in [packages/types/src/types/codec.ts:48](https://github.com/polkadot-js/api/blob/ad2939cc4f/packages/types/src/types/codec.ts#L48)*

**`description`** Returns a hash of the value

___

###  isEmpty

• **isEmpty**: *boolean*

*Inherited from [CompactEncodable](../interfaces/_codec_compact_.compactencodable.md).[isEmpty](../interfaces/_codec_compact_.compactencodable.md#isempty)*

*Defined in [packages/types/src/types/codec.ts:53](https://github.com/polkadot-js/api/blob/ad2939cc4f/packages/types/src/types/codec.ts#L53)*

**`description`** Checks if the value is an empty value

___

###  method

• **method**: *Call*

*Inherited from [SignerPayloadType](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md).[method](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md#method)*

*Defined in [packages/types/src/primitive/Extrinsic/SignerPayload.ts:19](https://github.com/polkadot-js/api/blob/ad2939cc4f/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L19)*

___

###  nonce

• **nonce**: *[Compact](_codec_compact_.compact.md)‹Index›*

*Inherited from [SignerPayloadType](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md).[nonce](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md#nonce)*

*Defined in [packages/types/src/primitive/Extrinsic/SignerPayload.ts:20](https://github.com/polkadot-js/api/blob/ad2939cc4f/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L20)*

___

###  registry

• **registry**: *[Registry](../interfaces/_types_registry_.registry.md)*

*Inherited from [CompactEncodable](../interfaces/_codec_compact_.compactencodable.md).[registry](../interfaces/_codec_compact_.compactencodable.md#registry)*

*Defined in [packages/types/src/types/codec.ts:58](https://github.com/polkadot-js/api/blob/ad2939cc4f/packages/types/src/types/codec.ts#L58)*

**`description`** The registry associated with this object

___

###  runtimeVersion

• **runtimeVersion**: *RuntimeVersion*

*Inherited from [SignerPayloadType](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md).[runtimeVersion](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md#runtimeversion)*

*Defined in [packages/types/src/primitive/Extrinsic/SignerPayload.ts:21](https://github.com/polkadot-js/api/blob/ad2939cc4f/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L21)*

___

###  tip

• **tip**: *[Compact](_codec_compact_.compact.md)‹Balance›*

*Inherited from [SignerPayloadType](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md).[tip](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md#tip)*

*Defined in [packages/types/src/primitive/Extrinsic/SignerPayload.ts:22](https://github.com/polkadot-js/api/blob/ad2939cc4f/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L22)*

___

###  version

• **version**: *[u8](../interfaces/_interfaceregistry_.interfaceregistry.md#u8)*

*Inherited from [SignerPayloadType](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md).[version](../interfaces/_primitive_extrinsic_signerpayload_.signerpayloadtype.md#version)*

*Defined in [packages/types/src/primitive/Extrinsic/SignerPayload.ts:23](https://github.com/polkadot-js/api/blob/ad2939cc4f/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L23)*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [CompactEncodable](../interfaces/_codec_compact_.compactencodable.md).[eq](../interfaces/_codec_compact_.compactencodable.md#eq)*

*Defined in [packages/types/src/types/codec.ts:63](https://github.com/polkadot-js/api/blob/ad2939cc4f/packages/types/src/types/codec.ts#L63)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Inherited from [CompactEncodable](../interfaces/_codec_compact_.compactencodable.md).[toHex](../interfaces/_codec_compact_.compactencodable.md#tohex)*

*Defined in [packages/types/src/types/codec.ts:68](https://github.com/polkadot-js/api/blob/ad2939cc4f/packages/types/src/types/codec.ts#L68)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

**Parameters:**

Name | Type |
------ | ------ |
`isLe?` | undefined &#124; false &#124; true |

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(`isExtended?`: undefined | false | true): *[AnyJson](../modules/_types_helpers_.md#anyjson)*

*Inherited from [CompactEncodable](../interfaces/_codec_compact_.compactencodable.md).[toHuman](../interfaces/_codec_compact_.compactencodable.md#tohuman)*

*Defined in [packages/types/src/types/codec.ts:73](https://github.com/polkadot-js/api/blob/ad2939cc4f/packages/types/src/types/codec.ts#L73)*

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

**Parameters:**

Name | Type |
------ | ------ |
`isExtended?` | undefined &#124; false &#124; true |

**Returns:** *[AnyJson](../modules/_types_helpers_.md#anyjson)*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_helpers_.md#anyjson)*

*Inherited from [CompactEncodable](../interfaces/_codec_compact_.compactencodable.md).[toJSON](../interfaces/_codec_compact_.compactencodable.md#tojson)*

*Defined in [packages/types/src/types/codec.ts:78](https://github.com/polkadot-js/api/blob/ad2939cc4f/packages/types/src/types/codec.ts#L78)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_helpers_.md#anyjson)*

___

###  toPayload

▸ **toPayload**(): *[SignerPayloadJSON](../interfaces/_types_extrinsic_.signerpayloadjson.md)*

*Implementation of [ISignerPayload](../interfaces/_types_extrinsic_.isignerpayload.md)*

*Defined in [packages/types/src/primitive/Extrinsic/SignerPayload.ts:50](https://github.com/polkadot-js/api/blob/ad2939cc4f/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L50)*

**`description`** Creates an representation of the structure as an ISignerPayload JSON

**Returns:** *[SignerPayloadJSON](../interfaces/_types_extrinsic_.signerpayloadjson.md)*

___

###  toRaw

▸ **toRaw**(): *[SignerPayloadRaw](../interfaces/_types_extrinsic_.signerpayloadraw.md)*

*Implementation of [ISignerPayload](../interfaces/_types_extrinsic_.isignerpayload.md)*

*Defined in [packages/types/src/primitive/Extrinsic/SignerPayload.ts:70](https://github.com/polkadot-js/api/blob/ad2939cc4f/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L70)*

**`description`** Creates a representation of the payload in raw Exrinsic form

**Returns:** *[SignerPayloadRaw](../interfaces/_types_extrinsic_.signerpayloadraw.md)*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [CompactEncodable](../interfaces/_codec_compact_.compactencodable.md).[toRawType](../interfaces/_codec_compact_.compactencodable.md#torawtype)*

*Defined in [packages/types/src/types/codec.ts:83](https://github.com/polkadot-js/api/blob/ad2939cc4f/packages/types/src/types/codec.ts#L83)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [CompactEncodable](../interfaces/_codec_compact_.compactencodable.md).[toString](../interfaces/_codec_compact_.compactencodable.md#tostring)*

*Defined in [packages/types/src/types/codec.ts:88](https://github.com/polkadot-js/api/blob/ad2939cc4f/packages/types/src/types/codec.ts#L88)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: [BareOpts](../modules/_types_helpers_.md#bareopts)): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Inherited from [CompactEncodable](../interfaces/_codec_compact_.compactencodable.md).[toU8a](../interfaces/_codec_compact_.compactencodable.md#tou8a)*

*Defined in [packages/types/src/types/codec.ts:94](https://github.com/polkadot-js/api/blob/ad2939cc4f/packages/types/src/types/codec.ts#L94)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | [BareOpts](../modules/_types_helpers_.md#bareopts) | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*
