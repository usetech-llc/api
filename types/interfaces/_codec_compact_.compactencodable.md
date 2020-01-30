[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["codec/Compact"](../modules/_codec_compact_.md) › [CompactEncodable](_codec_compact_.compactencodable.md)

# Interface: CompactEncodable

## Hierarchy

* Codec

  ↳ **CompactEncodable**

## Index

### Properties

* [encodedLength](_codec_compact_.compactencodable.md#encodedlength)
* [hash](_codec_compact_.compactencodable.md#hash)
* [isEmpty](_codec_compact_.compactencodable.md#isempty)
* [registry](_codec_compact_.compactencodable.md#registry)

### Methods

* [bitLength](_codec_compact_.compactencodable.md#bitlength)
* [eq](_codec_compact_.compactencodable.md#eq)
* [toBn](_codec_compact_.compactencodable.md#tobn)
* [toHex](_codec_compact_.compactencodable.md#tohex)
* [toJSON](_codec_compact_.compactencodable.md#tojson)
* [toNumber](_codec_compact_.compactencodable.md#tonumber)
* [toRawType](_codec_compact_.compactencodable.md#torawtype)
* [toString](_codec_compact_.compactencodable.md#tostring)
* [toU8a](_codec_compact_.compactencodable.md#tou8a)

## Properties

###  encodedLength

• **encodedLength**: *number*

*Inherited from [SignerPayloadType](_primitive_extrinsic_signerpayload_.signerpayloadtype.md).[encodedLength](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#encodedlength)*

*Defined in [packages/types/src/types.ts:76](https://github.com/polkadot-js/api/blob/1c327c60d9/packages/types/src/types.ts#L76)*

**`description`** The length of the value when encoded as a Uint8Array

___

###  hash

• **hash**: *IHash*

*Inherited from [SignerPayloadType](_primitive_extrinsic_signerpayload_.signerpayloadtype.md).[hash](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#hash)*

*Defined in [packages/types/src/types.ts:81](https://github.com/polkadot-js/api/blob/1c327c60d9/packages/types/src/types.ts#L81)*

**`description`** Returns a hash of the value

___

###  isEmpty

• **isEmpty**: *boolean*

*Inherited from [SignerPayloadType](_primitive_extrinsic_signerpayload_.signerpayloadtype.md).[isEmpty](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#isempty)*

*Defined in [packages/types/src/types.ts:86](https://github.com/polkadot-js/api/blob/1c327c60d9/packages/types/src/types.ts#L86)*

**`description`** Checks if the value is an empty value

___

###  registry

• **registry**: *Registry*

*Inherited from [SignerPayloadType](_primitive_extrinsic_signerpayload_.signerpayloadtype.md).[registry](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#registry)*

*Defined in [packages/types/src/types.ts:91](https://github.com/polkadot-js/api/blob/1c327c60d9/packages/types/src/types.ts#L91)*

**`description`** The registry associated with this object

## Methods

###  bitLength

▸ **bitLength**(): *[UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength)*

*Defined in [packages/types/src/codec/Compact.ts:16](https://github.com/polkadot-js/api/blob/1c327c60d9/packages/types/src/codec/Compact.ts#L16)*

**Returns:** *[UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength)*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [SignerPayloadType](_primitive_extrinsic_signerpayload_.signerpayloadtype.md).[eq](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#eq)*

*Defined in [packages/types/src/types.ts:96](https://github.com/polkadot-js/api/blob/1c327c60d9/packages/types/src/types.ts#L96)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toBn

▸ **toBn**(): *BN*

*Defined in [packages/types/src/codec/Compact.ts:17](https://github.com/polkadot-js/api/blob/1c327c60d9/packages/types/src/codec/Compact.ts#L17)*

**Returns:** *BN*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Inherited from [SignerPayloadType](_primitive_extrinsic_signerpayload_.signerpayloadtype.md).[toHex](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#tohex)*

*Defined in [packages/types/src/types.ts:101](https://github.com/polkadot-js/api/blob/1c327c60d9/packages/types/src/types.ts#L101)*

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

*Defined in [packages/types/src/types.ts:106](https://github.com/polkadot-js/api/blob/1c327c60d9/packages/types/src/types.ts#L106)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *AnyJson*

___

###  toNumber

▸ **toNumber**(): *number*

*Defined in [packages/types/src/codec/Compact.ts:18](https://github.com/polkadot-js/api/blob/1c327c60d9/packages/types/src/codec/Compact.ts#L18)*

**Returns:** *number*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [SignerPayloadType](_primitive_extrinsic_signerpayload_.signerpayloadtype.md).[toRawType](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#torawtype)*

*Defined in [packages/types/src/types.ts:111](https://github.com/polkadot-js/api/blob/1c327c60d9/packages/types/src/types.ts#L111)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [SignerPayloadType](_primitive_extrinsic_signerpayload_.signerpayloadtype.md).[toString](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#tostring)*

*Defined in [packages/types/src/types.ts:116](https://github.com/polkadot-js/api/blob/1c327c60d9/packages/types/src/types.ts#L116)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: BareOpts): *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

*Inherited from [SignerPayloadType](_primitive_extrinsic_signerpayload_.signerpayloadtype.md).[toU8a](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#tou8a)*

*Defined in [packages/types/src/types.ts:122](https://github.com/polkadot-js/api/blob/1c327c60d9/packages/types/src/types.ts#L122)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | BareOpts | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*
