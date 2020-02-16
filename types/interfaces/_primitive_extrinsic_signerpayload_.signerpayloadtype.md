[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["primitive/Extrinsic/SignerPayload"](../modules/_primitive_extrinsic_signerpayload_.md) › [SignerPayloadType](_primitive_extrinsic_signerpayload_.signerpayloadtype.md)

# Interface: SignerPayloadType

## Hierarchy

* Codec

  ↳ **SignerPayloadType**

  ↳ [SignerPayload](../classes/_primitive_extrinsic_signerpayload_.signerpayload.md)

## Index

### Properties

* [address](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#address)
* [blockHash](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#blockhash)
* [blockNumber](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#blocknumber)
* [encodedLength](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#encodedlength)
* [era](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#era)
* [genesisHash](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#genesishash)
* [hash](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#hash)
* [isEmpty](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#isempty)
* [method](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#method)
* [nonce](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#nonce)
* [registry](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#registry)
* [runtimeVersion](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#runtimeversion)
* [tip](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#tip)
* [version](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#version)

### Methods

* [eq](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#eq)
* [toHex](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#tohex)
* [toJSON](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#tojson)
* [toRawType](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#torawtype)
* [toString](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#tostring)
* [toU8a](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#tou8a)

## Properties

###  address

• **address**: *Address*

*Defined in [packages/types/src/primitive/Extrinsic/SignerPayload.ts:14](https://github.com/polkadot-js/api/blob/0ed156e5d9/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L14)*

___

###  blockHash

• **blockHash**: *Hash*

*Defined in [packages/types/src/primitive/Extrinsic/SignerPayload.ts:15](https://github.com/polkadot-js/api/blob/0ed156e5d9/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L15)*

___

###  blockNumber

• **blockNumber**: *BlockNumber*

*Defined in [packages/types/src/primitive/Extrinsic/SignerPayload.ts:16](https://github.com/polkadot-js/api/blob/0ed156e5d9/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L16)*

___

###  encodedLength

• **encodedLength**: *number*

*Inherited from [SignerPayloadType](_primitive_extrinsic_signerpayload_.signerpayloadtype.md).[encodedLength](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#encodedlength)*

*Defined in [packages/types/src/types.ts:84](https://github.com/polkadot-js/api/blob/0ed156e5d9/packages/types/src/types.ts#L84)*

**`description`** The length of the value when encoded as a Uint8Array

___

###  era

• **era**: *ExtrinsicEra*

*Defined in [packages/types/src/primitive/Extrinsic/SignerPayload.ts:17](https://github.com/polkadot-js/api/blob/0ed156e5d9/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L17)*

___

###  genesisHash

• **genesisHash**: *Hash*

*Defined in [packages/types/src/primitive/Extrinsic/SignerPayload.ts:18](https://github.com/polkadot-js/api/blob/0ed156e5d9/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L18)*

___

###  hash

• **hash**: *IHash*

*Inherited from [SignerPayloadType](_primitive_extrinsic_signerpayload_.signerpayloadtype.md).[hash](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#hash)*

*Defined in [packages/types/src/types.ts:89](https://github.com/polkadot-js/api/blob/0ed156e5d9/packages/types/src/types.ts#L89)*

**`description`** Returns a hash of the value

___

###  isEmpty

• **isEmpty**: *boolean*

*Inherited from [SignerPayloadType](_primitive_extrinsic_signerpayload_.signerpayloadtype.md).[isEmpty](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#isempty)*

*Defined in [packages/types/src/types.ts:94](https://github.com/polkadot-js/api/blob/0ed156e5d9/packages/types/src/types.ts#L94)*

**`description`** Checks if the value is an empty value

___

###  method

• **method**: *Call*

*Defined in [packages/types/src/primitive/Extrinsic/SignerPayload.ts:19](https://github.com/polkadot-js/api/blob/0ed156e5d9/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L19)*

___

###  nonce

• **nonce**: *[Compact](../classes/_codec_compact_.compact.md)‹Index›*

*Defined in [packages/types/src/primitive/Extrinsic/SignerPayload.ts:20](https://github.com/polkadot-js/api/blob/0ed156e5d9/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L20)*

___

###  registry

• **registry**: *Registry*

*Inherited from [SignerPayloadType](_primitive_extrinsic_signerpayload_.signerpayloadtype.md).[registry](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#registry)*

*Defined in [packages/types/src/types.ts:99](https://github.com/polkadot-js/api/blob/0ed156e5d9/packages/types/src/types.ts#L99)*

**`description`** The registry associated with this object

___

###  runtimeVersion

• **runtimeVersion**: *RuntimeVersion*

*Defined in [packages/types/src/primitive/Extrinsic/SignerPayload.ts:21](https://github.com/polkadot-js/api/blob/0ed156e5d9/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L21)*

___

###  tip

• **tip**: *[Compact](../classes/_codec_compact_.compact.md)‹Balance›*

*Defined in [packages/types/src/primitive/Extrinsic/SignerPayload.ts:22](https://github.com/polkadot-js/api/blob/0ed156e5d9/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L22)*

___

###  version

• **version**: *[u8](_interfaceregistry_.interfaceregistry.md#u8)*

*Defined in [packages/types/src/primitive/Extrinsic/SignerPayload.ts:23](https://github.com/polkadot-js/api/blob/0ed156e5d9/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L23)*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [SignerPayloadType](_primitive_extrinsic_signerpayload_.signerpayloadtype.md).[eq](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#eq)*

*Defined in [packages/types/src/types.ts:104](https://github.com/polkadot-js/api/blob/0ed156e5d9/packages/types/src/types.ts#L104)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Inherited from [SignerPayloadType](_primitive_extrinsic_signerpayload_.signerpayloadtype.md).[toHex](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#tohex)*

*Defined in [packages/types/src/types.ts:109](https://github.com/polkadot-js/api/blob/0ed156e5d9/packages/types/src/types.ts#L109)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

**Parameters:**

Name | Type |
------ | ------ |
`isLe?` | undefined &#124; false &#124; true |

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *AnyJson*

*Inherited from [SignerPayloadType](_primitive_extrinsic_signerpayload_.signerpayloadtype.md).[toJSON](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#tojson)*

*Defined in [packages/types/src/types.ts:114](https://github.com/polkadot-js/api/blob/0ed156e5d9/packages/types/src/types.ts#L114)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *AnyJson*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [SignerPayloadType](_primitive_extrinsic_signerpayload_.signerpayloadtype.md).[toRawType](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#torawtype)*

*Defined in [packages/types/src/types.ts:119](https://github.com/polkadot-js/api/blob/0ed156e5d9/packages/types/src/types.ts#L119)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [SignerPayloadType](_primitive_extrinsic_signerpayload_.signerpayloadtype.md).[toString](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#tostring)*

*Defined in [packages/types/src/types.ts:124](https://github.com/polkadot-js/api/blob/0ed156e5d9/packages/types/src/types.ts#L124)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: BareOpts): *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

*Inherited from [SignerPayloadType](_primitive_extrinsic_signerpayload_.signerpayloadtype.md).[toU8a](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#tou8a)*

*Defined in [packages/types/src/types.ts:130](https://github.com/polkadot-js/api/blob/0ed156e5d9/packages/types/src/types.ts#L130)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | BareOpts | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*
