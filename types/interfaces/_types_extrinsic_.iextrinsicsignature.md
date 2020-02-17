[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types/extrinsic"](../modules/_types_extrinsic_.md) › [IExtrinsicSignature](_types_extrinsic_.iextrinsicsignature.md)

# Interface: IExtrinsicSignature

## Hierarchy

* ExtrinsicSignatureBase

* [Codec](_types_codec_.codec.md)

  ↳ **IExtrinsicSignature**

## Implemented by

* [ExtrinsicSignatureV1](../classes/_primitive_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md)
* [ExtrinsicSignatureV2](../classes/_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md)
* [ExtrinsicSignatureV3](../classes/_primitive_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md)
* [ExtrinsicSignatureV4](../classes/_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md)

## Index

### Properties

* [encodedLength](_types_extrinsic_.iextrinsicsignature.md#encodedlength)
* [era](_types_extrinsic_.iextrinsicsignature.md#era)
* [hash](_types_extrinsic_.iextrinsicsignature.md#hash)
* [isEmpty](_types_extrinsic_.iextrinsicsignature.md#isempty)
* [isSigned](_types_extrinsic_.iextrinsicsignature.md#issigned)
* [nonce](_types_extrinsic_.iextrinsicsignature.md#nonce)
* [registry](_types_extrinsic_.iextrinsicsignature.md#registry)
* [signature](_types_extrinsic_.iextrinsicsignature.md#signature)
* [signer](_types_extrinsic_.iextrinsicsignature.md#signer)
* [tip](_types_extrinsic_.iextrinsicsignature.md#tip)

### Methods

* [addSignature](_types_extrinsic_.iextrinsicsignature.md#addsignature)
* [eq](_types_extrinsic_.iextrinsicsignature.md#eq)
* [sign](_types_extrinsic_.iextrinsicsignature.md#sign)
* [signFake](_types_extrinsic_.iextrinsicsignature.md#signfake)
* [toHex](_types_extrinsic_.iextrinsicsignature.md#tohex)
* [toHuman](_types_extrinsic_.iextrinsicsignature.md#tohuman)
* [toJSON](_types_extrinsic_.iextrinsicsignature.md#tojson)
* [toRawType](_types_extrinsic_.iextrinsicsignature.md#torawtype)
* [toString](_types_extrinsic_.iextrinsicsignature.md#tostring)
* [toU8a](_types_extrinsic_.iextrinsicsignature.md#tou8a)

## Properties

###  encodedLength

• **encodedLength**: *number*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[encodedLength](_codec_compact_.compactencodable.md#encodedlength)*

*Defined in [packages/types/src/types/codec.ts:43](https://github.com/polkadot-js/api/blob/849f519efe/packages/types/src/types/codec.ts#L43)*

**`description`** The length of the value when encoded as a Uint8Array

___

###  era

• **era**: *[IExtrinsicEra](_types_extrinsic_.iextrinsicera.md)*

*Inherited from [IExtrinsicSignature](_types_extrinsic_.iextrinsicsignature.md).[era](_types_extrinsic_.iextrinsicsignature.md#era)*

*Defined in [packages/types/src/types/extrinsic.ts:66](https://github.com/polkadot-js/api/blob/849f519efe/packages/types/src/types/extrinsic.ts#L66)*

___

###  hash

• **hash**: *[IHash](_types_interfaces_.ihash.md)*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[hash](_codec_compact_.compactencodable.md#hash)*

*Defined in [packages/types/src/types/codec.ts:48](https://github.com/polkadot-js/api/blob/849f519efe/packages/types/src/types/codec.ts#L48)*

**`description`** Returns a hash of the value

___

###  isEmpty

• **isEmpty**: *boolean*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[isEmpty](_codec_compact_.compactencodable.md#isempty)*

*Defined in [packages/types/src/types/codec.ts:53](https://github.com/polkadot-js/api/blob/849f519efe/packages/types/src/types/codec.ts#L53)*

**`description`** Checks if the value is an empty value

___

###  isSigned

• **isSigned**: *boolean*

*Inherited from [IExtrinsicSignature](_types_extrinsic_.iextrinsicsignature.md).[isSigned](_types_extrinsic_.iextrinsicsignature.md#issigned)*

*Defined in [packages/types/src/types/extrinsic.ts:65](https://github.com/polkadot-js/api/blob/849f519efe/packages/types/src/types/extrinsic.ts#L65)*

___

###  nonce

• **nonce**: *[ICompact](_types_interfaces_.icompact.md)‹Index›*

*Inherited from [IExtrinsicSignature](_types_extrinsic_.iextrinsicsignature.md).[nonce](_types_extrinsic_.iextrinsicsignature.md#nonce)*

*Defined in [packages/types/src/types/extrinsic.ts:67](https://github.com/polkadot-js/api/blob/849f519efe/packages/types/src/types/extrinsic.ts#L67)*

___

###  registry

• **registry**: *[Registry](_types_registry_.registry.md)*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[registry](_codec_compact_.compactencodable.md#registry)*

*Defined in [packages/types/src/types/codec.ts:58](https://github.com/polkadot-js/api/blob/849f519efe/packages/types/src/types/codec.ts#L58)*

**`description`** The registry associated with this object

___

###  signature

• **signature**: *EcdsaSignature | Ed25519Signature | Sr25519Signature*

*Inherited from [IExtrinsicSignature](_types_extrinsic_.iextrinsicsignature.md).[signature](_types_extrinsic_.iextrinsicsignature.md#signature)*

*Defined in [packages/types/src/types/extrinsic.ts:68](https://github.com/polkadot-js/api/blob/849f519efe/packages/types/src/types/extrinsic.ts#L68)*

___

###  signer

• **signer**: *Address*

*Inherited from [IExtrinsicSignature](_types_extrinsic_.iextrinsicsignature.md).[signer](_types_extrinsic_.iextrinsicsignature.md#signer)*

*Defined in [packages/types/src/types/extrinsic.ts:69](https://github.com/polkadot-js/api/blob/849f519efe/packages/types/src/types/extrinsic.ts#L69)*

___

###  tip

• **tip**: *[ICompact](_types_interfaces_.icompact.md)‹Balance›*

*Inherited from [IExtrinsicSignature](_types_extrinsic_.iextrinsicsignature.md).[tip](_types_extrinsic_.iextrinsicsignature.md#tip)*

*Defined in [packages/types/src/types/extrinsic.ts:70](https://github.com/polkadot-js/api/blob/849f519efe/packages/types/src/types/extrinsic.ts#L70)*

## Methods

###  addSignature

▸ **addSignature**(`signer`: Address | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) | string, `signature`: [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) | string, `payload`: [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) | string): *[IExtrinsicSignature](_types_extrinsic_.iextrinsicsignature.md)*

*Defined in [packages/types/src/types/extrinsic.ts:85](https://github.com/polkadot-js/api/blob/849f519efe/packages/types/src/types/extrinsic.ts#L85)*

**Parameters:**

Name | Type |
------ | ------ |
`signer` | Address &#124; [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) &#124; string |
`signature` | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) &#124; string |
`payload` | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) &#124; string |

**Returns:** *[IExtrinsicSignature](_types_extrinsic_.iextrinsicsignature.md)*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[eq](_codec_compact_.compactencodable.md#eq)*

*Defined in [packages/types/src/types/codec.ts:63](https://github.com/polkadot-js/api/blob/849f519efe/packages/types/src/types/codec.ts#L63)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  sign

▸ **sign**(`method`: Call, `account`: [IKeyringPair](_types_interfaces_.ikeyringpair.md), `options`: [SignatureOptions](_types_extrinsic_.signatureoptions.md)): *[IExtrinsicSignature](_types_extrinsic_.iextrinsicsignature.md)*

*Defined in [packages/types/src/types/extrinsic.ts:86](https://github.com/polkadot-js/api/blob/849f519efe/packages/types/src/types/extrinsic.ts#L86)*

**Parameters:**

Name | Type |
------ | ------ |
`method` | Call |
`account` | [IKeyringPair](_types_interfaces_.ikeyringpair.md) |
`options` | [SignatureOptions](_types_extrinsic_.signatureoptions.md) |

**Returns:** *[IExtrinsicSignature](_types_extrinsic_.iextrinsicsignature.md)*

___

###  signFake

▸ **signFake**(`method`: Call, `address`: Address | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) | string, `options`: [SignatureOptions](_types_extrinsic_.signatureoptions.md)): *[IExtrinsicSignature](_types_extrinsic_.iextrinsicsignature.md)*

*Defined in [packages/types/src/types/extrinsic.ts:87](https://github.com/polkadot-js/api/blob/849f519efe/packages/types/src/types/extrinsic.ts#L87)*

**Parameters:**

Name | Type |
------ | ------ |
`method` | Call |
`address` | Address &#124; [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) &#124; string |
`options` | [SignatureOptions](_types_extrinsic_.signatureoptions.md) |

**Returns:** *[IExtrinsicSignature](_types_extrinsic_.iextrinsicsignature.md)*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[toHex](_codec_compact_.compactencodable.md#tohex)*

*Defined in [packages/types/src/types/codec.ts:68](https://github.com/polkadot-js/api/blob/849f519efe/packages/types/src/types/codec.ts#L68)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

**Parameters:**

Name | Type |
------ | ------ |
`isLe?` | undefined &#124; false &#124; true |

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(`isExtended?`: undefined | false | true): *[AnyJson](../modules/_types_helpers_.md#anyjson)*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[toHuman](_codec_compact_.compactencodable.md#tohuman)*

*Defined in [packages/types/src/types/codec.ts:73](https://github.com/polkadot-js/api/blob/849f519efe/packages/types/src/types/codec.ts#L73)*

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

**Parameters:**

Name | Type |
------ | ------ |
`isExtended?` | undefined &#124; false &#124; true |

**Returns:** *[AnyJson](../modules/_types_helpers_.md#anyjson)*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_helpers_.md#anyjson)*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[toJSON](_codec_compact_.compactencodable.md#tojson)*

*Defined in [packages/types/src/types/codec.ts:78](https://github.com/polkadot-js/api/blob/849f519efe/packages/types/src/types/codec.ts#L78)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_helpers_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[toRawType](_codec_compact_.compactencodable.md#torawtype)*

*Defined in [packages/types/src/types/codec.ts:83](https://github.com/polkadot-js/api/blob/849f519efe/packages/types/src/types/codec.ts#L83)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[toString](_codec_compact_.compactencodable.md#tostring)*

*Defined in [packages/types/src/types/codec.ts:88](https://github.com/polkadot-js/api/blob/849f519efe/packages/types/src/types/codec.ts#L88)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: [BareOpts](../modules/_types_helpers_.md#bareopts)): *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[toU8a](_codec_compact_.compactencodable.md#tou8a)*

*Defined in [packages/types/src/types/codec.ts:94](https://github.com/polkadot-js/api/blob/849f519efe/packages/types/src/types/codec.ts#L94)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | [BareOpts](../modules/_types_helpers_.md#bareopts) | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*
