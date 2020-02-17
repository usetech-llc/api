[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types/extrinsic"](../modules/_types_extrinsic_.md) › [IExtrinsicImpl](_types_extrinsic_.iextrinsicimpl.md)

# Interface: IExtrinsicImpl

## Hierarchy

* IExtrinsicSignable‹[IExtrinsicImpl](_types_extrinsic_.iextrinsicimpl.md)›

* [Codec](_types_codec_.codec.md)

  ↳ **IExtrinsicImpl**

## Implemented by

* [ExtrinsicV1](../classes/_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md)
* [ExtrinsicV2](../classes/_primitive_extrinsic_v2_extrinsic_.extrinsicv2.md)
* [ExtrinsicV3](../classes/_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md)
* [ExtrinsicV4](../classes/_primitive_extrinsic_v4_extrinsic_.extrinsicv4.md)

## Index

### Properties

* [encodedLength](_types_extrinsic_.iextrinsicimpl.md#encodedlength)
* [hash](_types_extrinsic_.iextrinsicimpl.md#hash)
* [isEmpty](_types_extrinsic_.iextrinsicimpl.md#isempty)
* [method](_types_extrinsic_.iextrinsicimpl.md#method)
* [registry](_types_extrinsic_.iextrinsicimpl.md#registry)
* [signature](_types_extrinsic_.iextrinsicimpl.md#signature)
* [version](_types_extrinsic_.iextrinsicimpl.md#version)

### Methods

* [addSignature](_types_extrinsic_.iextrinsicimpl.md#addsignature)
* [eq](_types_extrinsic_.iextrinsicimpl.md#eq)
* [sign](_types_extrinsic_.iextrinsicimpl.md#sign)
* [signFake](_types_extrinsic_.iextrinsicimpl.md#signfake)
* [toHex](_types_extrinsic_.iextrinsicimpl.md#tohex)
* [toJSON](_types_extrinsic_.iextrinsicimpl.md#tojson)
* [toRawType](_types_extrinsic_.iextrinsicimpl.md#torawtype)
* [toString](_types_extrinsic_.iextrinsicimpl.md#tostring)
* [toU8a](_types_extrinsic_.iextrinsicimpl.md#tou8a)

## Properties

###  encodedLength

• **encodedLength**: *number*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[encodedLength](_codec_compact_.compactencodable.md#encodedlength)*

*Defined in [packages/types/src/types/codec.ts:43](https://github.com/polkadot-js/api/blob/8a152ea4c0/packages/types/src/types/codec.ts#L43)*

**`description`** The length of the value when encoded as a Uint8Array

___

###  hash

• **hash**: *[IHash](_types_interfaces_.ihash.md)*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[hash](_codec_compact_.compactencodable.md#hash)*

*Defined in [packages/types/src/types/codec.ts:48](https://github.com/polkadot-js/api/blob/8a152ea4c0/packages/types/src/types/codec.ts#L48)*

**`description`** Returns a hash of the value

___

###  isEmpty

• **isEmpty**: *boolean*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[isEmpty](_codec_compact_.compactencodable.md#isempty)*

*Defined in [packages/types/src/types/codec.ts:53](https://github.com/polkadot-js/api/blob/8a152ea4c0/packages/types/src/types/codec.ts#L53)*

**`description`** Checks if the value is an empty value

___

###  method

• **method**: *Call*

*Defined in [packages/types/src/types/extrinsic.ts:105](https://github.com/polkadot-js/api/blob/8a152ea4c0/packages/types/src/types/extrinsic.ts#L105)*

___

###  registry

• **registry**: *[Registry](_types_registry_.registry.md)*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[registry](_codec_compact_.compactencodable.md#registry)*

*Defined in [packages/types/src/types/codec.ts:58](https://github.com/polkadot-js/api/blob/8a152ea4c0/packages/types/src/types/codec.ts#L58)*

**`description`** The registry associated with this object

___

###  signature

• **signature**: *[IExtrinsicSignature](_types_extrinsic_.iextrinsicsignature.md)*

*Defined in [packages/types/src/types/extrinsic.ts:106](https://github.com/polkadot-js/api/blob/8a152ea4c0/packages/types/src/types/extrinsic.ts#L106)*

___

###  version

• **version**: *number*

*Defined in [packages/types/src/types/extrinsic.ts:107](https://github.com/polkadot-js/api/blob/8a152ea4c0/packages/types/src/types/extrinsic.ts#L107)*

## Methods

###  addSignature

▸ **addSignature**(`signer`: Address | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) | string, `signature`: [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) | string, `payload`: [ExtrinsicPayloadValue](_types_extrinsic_.extrinsicpayloadvalue.md) | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) | string): *[IExtrinsicImpl](_types_extrinsic_.iextrinsicimpl.md)*

*Inherited from [IExtrinsicImpl](_types_extrinsic_.iextrinsicimpl.md).[addSignature](_types_extrinsic_.iextrinsicimpl.md#addsignature)*

*Defined in [packages/types/src/types/extrinsic.ts:98](https://github.com/polkadot-js/api/blob/8a152ea4c0/packages/types/src/types/extrinsic.ts#L98)*

**Parameters:**

Name | Type |
------ | ------ |
`signer` | Address &#124; [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) &#124; string |
`signature` | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) &#124; string |
`payload` | [ExtrinsicPayloadValue](_types_extrinsic_.extrinsicpayloadvalue.md) &#124; [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) &#124; string |

**Returns:** *[IExtrinsicImpl](_types_extrinsic_.iextrinsicimpl.md)*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[eq](_codec_compact_.compactencodable.md#eq)*

*Defined in [packages/types/src/types/codec.ts:63](https://github.com/polkadot-js/api/blob/8a152ea4c0/packages/types/src/types/codec.ts#L63)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  sign

▸ **sign**(`account`: [IKeyringPair](_types_interfaces_.ikeyringpair.md), `options`: [SignatureOptions](_types_extrinsic_.signatureoptions.md)): *[IExtrinsicImpl](_types_extrinsic_.iextrinsicimpl.md)*

*Inherited from [IExtrinsicImpl](_types_extrinsic_.iextrinsicimpl.md).[sign](_types_extrinsic_.iextrinsicimpl.md#sign)*

*Defined in [packages/types/src/types/extrinsic.ts:99](https://github.com/polkadot-js/api/blob/8a152ea4c0/packages/types/src/types/extrinsic.ts#L99)*

**Parameters:**

Name | Type |
------ | ------ |
`account` | [IKeyringPair](_types_interfaces_.ikeyringpair.md) |
`options` | [SignatureOptions](_types_extrinsic_.signatureoptions.md) |

**Returns:** *[IExtrinsicImpl](_types_extrinsic_.iextrinsicimpl.md)*

___

###  signFake

▸ **signFake**(`address`: Address | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) | string, `options`: [SignatureOptions](_types_extrinsic_.signatureoptions.md)): *[IExtrinsicImpl](_types_extrinsic_.iextrinsicimpl.md)*

*Inherited from [IExtrinsicImpl](_types_extrinsic_.iextrinsicimpl.md).[signFake](_types_extrinsic_.iextrinsicimpl.md#signfake)*

*Defined in [packages/types/src/types/extrinsic.ts:100](https://github.com/polkadot-js/api/blob/8a152ea4c0/packages/types/src/types/extrinsic.ts#L100)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | Address &#124; [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) &#124; string |
`options` | [SignatureOptions](_types_extrinsic_.signatureoptions.md) |

**Returns:** *[IExtrinsicImpl](_types_extrinsic_.iextrinsicimpl.md)*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[toHex](_codec_compact_.compactencodable.md#tohex)*

*Defined in [packages/types/src/types/codec.ts:68](https://github.com/polkadot-js/api/blob/8a152ea4c0/packages/types/src/types/codec.ts#L68)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

**Parameters:**

Name | Type |
------ | ------ |
`isLe?` | undefined &#124; false &#124; true |

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_helpers_.md#anyjson)*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[toJSON](_codec_compact_.compactencodable.md#tojson)*

*Defined in [packages/types/src/types/codec.ts:73](https://github.com/polkadot-js/api/blob/8a152ea4c0/packages/types/src/types/codec.ts#L73)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_helpers_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[toRawType](_codec_compact_.compactencodable.md#torawtype)*

*Defined in [packages/types/src/types/codec.ts:78](https://github.com/polkadot-js/api/blob/8a152ea4c0/packages/types/src/types/codec.ts#L78)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[toString](_codec_compact_.compactencodable.md#tostring)*

*Defined in [packages/types/src/types/codec.ts:83](https://github.com/polkadot-js/api/blob/8a152ea4c0/packages/types/src/types/codec.ts#L83)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: [BareOpts](../modules/_types_helpers_.md#bareopts)): *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[toU8a](_codec_compact_.compactencodable.md#tou8a)*

*Defined in [packages/types/src/types/codec.ts:89](https://github.com/polkadot-js/api/blob/8a152ea4c0/packages/types/src/types/codec.ts#L89)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | [BareOpts](../modules/_types_helpers_.md#bareopts) | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*
