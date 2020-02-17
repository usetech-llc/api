[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types/extrinsic"](../modules/_types_extrinsic_.md) › [IExtrinsic](_types_extrinsic_.iextrinsic.md)

# Interface: IExtrinsic

## Hierarchy

* IExtrinsicSignable‹[IExtrinsic](_types_extrinsic_.iextrinsic.md)›

* ExtrinsicSignatureBase

  ↳ [IMethod](_types_interfaces_.imethod.md)

  ↳ **IExtrinsic**

## Implemented by

* [Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md)

## Index

### Properties

* [args](_types_extrinsic_.iextrinsic.md#args)
* [argsDef](_types_extrinsic_.iextrinsic.md#argsdef)
* [callIndex](_types_extrinsic_.iextrinsic.md#callindex)
* [data](_types_extrinsic_.iextrinsic.md#data)
* [encodedLength](_types_extrinsic_.iextrinsic.md#encodedlength)
* [era](_types_extrinsic_.iextrinsic.md#era)
* [hasOrigin](_types_extrinsic_.iextrinsic.md#hasorigin)
* [hash](_types_extrinsic_.iextrinsic.md#hash)
* [isEmpty](_types_extrinsic_.iextrinsic.md#isempty)
* [isSigned](_types_extrinsic_.iextrinsic.md#issigned)
* [length](_types_extrinsic_.iextrinsic.md#length)
* [meta](_types_extrinsic_.iextrinsic.md#meta)
* [method](_types_extrinsic_.iextrinsic.md#method)
* [nonce](_types_extrinsic_.iextrinsic.md#nonce)
* [registry](_types_extrinsic_.iextrinsic.md#registry)
* [signature](_types_extrinsic_.iextrinsic.md#signature)
* [signer](_types_extrinsic_.iextrinsic.md#signer)
* [tip](_types_extrinsic_.iextrinsic.md#tip)
* [type](_types_extrinsic_.iextrinsic.md#type)
* [version](_types_extrinsic_.iextrinsic.md#version)

### Methods

* [addSignature](_types_extrinsic_.iextrinsic.md#addsignature)
* [eq](_types_extrinsic_.iextrinsic.md#eq)
* [sign](_types_extrinsic_.iextrinsic.md#sign)
* [signFake](_types_extrinsic_.iextrinsic.md#signfake)
* [toHex](_types_extrinsic_.iextrinsic.md#tohex)
* [toJSON](_types_extrinsic_.iextrinsic.md#tojson)
* [toRawType](_types_extrinsic_.iextrinsic.md#torawtype)
* [toString](_types_extrinsic_.iextrinsic.md#tostring)
* [toU8a](_types_extrinsic_.iextrinsic.md#tou8a)

## Properties

###  args

• **args**: *[Codec](_types_codec_.codec.md)[]*

*Inherited from [IMethod](_types_interfaces_.imethod.md).[args](_types_interfaces_.imethod.md#args)*

*Defined in [packages/types/src/types/interfaces.ts:30](https://github.com/polkadot-js/api/blob/2b5be7eaab/packages/types/src/types/interfaces.ts#L30)*

___

###  argsDef

• **argsDef**: *[ArgsDef](../modules/_types_codec_.md#argsdef)*

*Inherited from [IMethod](_types_interfaces_.imethod.md).[argsDef](_types_interfaces_.imethod.md#argsdef)*

*Defined in [packages/types/src/types/interfaces.ts:31](https://github.com/polkadot-js/api/blob/2b5be7eaab/packages/types/src/types/interfaces.ts#L31)*

___

###  callIndex

• **callIndex**: *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

*Inherited from [IMethod](_types_interfaces_.imethod.md).[callIndex](_types_interfaces_.imethod.md#callindex)*

*Defined in [packages/types/src/types/interfaces.ts:32](https://github.com/polkadot-js/api/blob/2b5be7eaab/packages/types/src/types/interfaces.ts#L32)*

___

###  data

• **data**: *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

*Inherited from [IMethod](_types_interfaces_.imethod.md).[data](_types_interfaces_.imethod.md#data)*

*Defined in [packages/types/src/types/interfaces.ts:33](https://github.com/polkadot-js/api/blob/2b5be7eaab/packages/types/src/types/interfaces.ts#L33)*

___

###  encodedLength

• **encodedLength**: *number*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[encodedLength](_codec_compact_.compactencodable.md#encodedlength)*

*Defined in [packages/types/src/types/codec.ts:43](https://github.com/polkadot-js/api/blob/2b5be7eaab/packages/types/src/types/codec.ts#L43)*

**`description`** The length of the value when encoded as a Uint8Array

___

###  era

• **era**: *[IExtrinsicEra](_types_extrinsic_.iextrinsicera.md)*

*Inherited from [IExtrinsicSignature](_types_extrinsic_.iextrinsicsignature.md).[era](_types_extrinsic_.iextrinsicsignature.md#era)*

*Defined in [packages/types/src/types/extrinsic.ts:66](https://github.com/polkadot-js/api/blob/2b5be7eaab/packages/types/src/types/extrinsic.ts#L66)*

___

###  hasOrigin

• **hasOrigin**: *boolean*

*Inherited from [IMethod](_types_interfaces_.imethod.md).[hasOrigin](_types_interfaces_.imethod.md#hasorigin)*

*Defined in [packages/types/src/types/interfaces.ts:35](https://github.com/polkadot-js/api/blob/2b5be7eaab/packages/types/src/types/interfaces.ts#L35)*

___

###  hash

• **hash**: *[IHash](_types_interfaces_.ihash.md)*

*Inherited from [IMethod](_types_interfaces_.imethod.md).[hash](_types_interfaces_.imethod.md#hash)*

*Overrides [CompactEncodable](_codec_compact_.compactencodable.md).[hash](_codec_compact_.compactencodable.md#hash)*

*Defined in [packages/types/src/types/interfaces.ts:34](https://github.com/polkadot-js/api/blob/2b5be7eaab/packages/types/src/types/interfaces.ts#L34)*

___

###  isEmpty

• **isEmpty**: *boolean*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[isEmpty](_codec_compact_.compactencodable.md#isempty)*

*Defined in [packages/types/src/types/codec.ts:53](https://github.com/polkadot-js/api/blob/2b5be7eaab/packages/types/src/types/codec.ts#L53)*

**`description`** Checks if the value is an empty value

___

###  isSigned

• **isSigned**: *boolean*

*Inherited from [IExtrinsicSignature](_types_extrinsic_.iextrinsicsignature.md).[isSigned](_types_extrinsic_.iextrinsicsignature.md#issigned)*

*Defined in [packages/types/src/types/extrinsic.ts:65](https://github.com/polkadot-js/api/blob/2b5be7eaab/packages/types/src/types/extrinsic.ts#L65)*

___

###  length

• **length**: *number*

*Defined in [packages/types/src/types/extrinsic.ts:112](https://github.com/polkadot-js/api/blob/2b5be7eaab/packages/types/src/types/extrinsic.ts#L112)*

___

###  meta

• **meta**: *FunctionMetadataLatest*

*Inherited from [IMethod](_types_interfaces_.imethod.md).[meta](_types_interfaces_.imethod.md#meta)*

*Defined in [packages/types/src/types/interfaces.ts:36](https://github.com/polkadot-js/api/blob/2b5be7eaab/packages/types/src/types/interfaces.ts#L36)*

___

###  method

• **method**: *Call*

*Defined in [packages/types/src/types/extrinsic.ts:113](https://github.com/polkadot-js/api/blob/2b5be7eaab/packages/types/src/types/extrinsic.ts#L113)*

___

###  nonce

• **nonce**: *[ICompact](_types_interfaces_.icompact.md)‹Index›*

*Inherited from [IExtrinsicSignature](_types_extrinsic_.iextrinsicsignature.md).[nonce](_types_extrinsic_.iextrinsicsignature.md#nonce)*

*Defined in [packages/types/src/types/extrinsic.ts:67](https://github.com/polkadot-js/api/blob/2b5be7eaab/packages/types/src/types/extrinsic.ts#L67)*

___

###  registry

• **registry**: *[Registry](_types_registry_.registry.md)*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[registry](_codec_compact_.compactencodable.md#registry)*

*Defined in [packages/types/src/types/codec.ts:58](https://github.com/polkadot-js/api/blob/2b5be7eaab/packages/types/src/types/codec.ts#L58)*

**`description`** The registry associated with this object

___

###  signature

• **signature**: *EcdsaSignature | Ed25519Signature | Sr25519Signature*

*Inherited from [IExtrinsicSignature](_types_extrinsic_.iextrinsicsignature.md).[signature](_types_extrinsic_.iextrinsicsignature.md#signature)*

*Defined in [packages/types/src/types/extrinsic.ts:68](https://github.com/polkadot-js/api/blob/2b5be7eaab/packages/types/src/types/extrinsic.ts#L68)*

___

###  signer

• **signer**: *Address*

*Inherited from [IExtrinsicSignature](_types_extrinsic_.iextrinsicsignature.md).[signer](_types_extrinsic_.iextrinsicsignature.md#signer)*

*Defined in [packages/types/src/types/extrinsic.ts:69](https://github.com/polkadot-js/api/blob/2b5be7eaab/packages/types/src/types/extrinsic.ts#L69)*

___

###  tip

• **tip**: *[ICompact](_types_interfaces_.icompact.md)‹Balance›*

*Inherited from [IExtrinsicSignature](_types_extrinsic_.iextrinsicsignature.md).[tip](_types_extrinsic_.iextrinsicsignature.md#tip)*

*Defined in [packages/types/src/types/extrinsic.ts:70](https://github.com/polkadot-js/api/blob/2b5be7eaab/packages/types/src/types/extrinsic.ts#L70)*

___

###  type

• **type**: *number*

*Defined in [packages/types/src/types/extrinsic.ts:114](https://github.com/polkadot-js/api/blob/2b5be7eaab/packages/types/src/types/extrinsic.ts#L114)*

___

###  version

• **version**: *number*

*Defined in [packages/types/src/types/extrinsic.ts:115](https://github.com/polkadot-js/api/blob/2b5be7eaab/packages/types/src/types/extrinsic.ts#L115)*

## Methods

###  addSignature

▸ **addSignature**(`signer`: Address | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) | string, `signature`: [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) | string, `payload`: [ExtrinsicPayloadValue](_types_extrinsic_.extrinsicpayloadvalue.md) | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) | string): *[IExtrinsic](_types_extrinsic_.iextrinsic.md)*

*Inherited from [IExtrinsicImpl](_types_extrinsic_.iextrinsicimpl.md).[addSignature](_types_extrinsic_.iextrinsicimpl.md#addsignature)*

*Defined in [packages/types/src/types/extrinsic.ts:98](https://github.com/polkadot-js/api/blob/2b5be7eaab/packages/types/src/types/extrinsic.ts#L98)*

**Parameters:**

Name | Type |
------ | ------ |
`signer` | Address &#124; [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) &#124; string |
`signature` | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) &#124; string |
`payload` | [ExtrinsicPayloadValue](_types_extrinsic_.extrinsicpayloadvalue.md) &#124; [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) &#124; string |

**Returns:** *[IExtrinsic](_types_extrinsic_.iextrinsic.md)*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[eq](_codec_compact_.compactencodable.md#eq)*

*Defined in [packages/types/src/types/codec.ts:63](https://github.com/polkadot-js/api/blob/2b5be7eaab/packages/types/src/types/codec.ts#L63)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  sign

▸ **sign**(`account`: [IKeyringPair](_types_interfaces_.ikeyringpair.md), `options`: [SignatureOptions](_types_extrinsic_.signatureoptions.md)): *[IExtrinsic](_types_extrinsic_.iextrinsic.md)*

*Inherited from [IExtrinsicImpl](_types_extrinsic_.iextrinsicimpl.md).[sign](_types_extrinsic_.iextrinsicimpl.md#sign)*

*Defined in [packages/types/src/types/extrinsic.ts:99](https://github.com/polkadot-js/api/blob/2b5be7eaab/packages/types/src/types/extrinsic.ts#L99)*

**Parameters:**

Name | Type |
------ | ------ |
`account` | [IKeyringPair](_types_interfaces_.ikeyringpair.md) |
`options` | [SignatureOptions](_types_extrinsic_.signatureoptions.md) |

**Returns:** *[IExtrinsic](_types_extrinsic_.iextrinsic.md)*

___

###  signFake

▸ **signFake**(`address`: Address | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) | string, `options`: [SignatureOptions](_types_extrinsic_.signatureoptions.md)): *[IExtrinsic](_types_extrinsic_.iextrinsic.md)*

*Inherited from [IExtrinsicImpl](_types_extrinsic_.iextrinsicimpl.md).[signFake](_types_extrinsic_.iextrinsicimpl.md#signfake)*

*Defined in [packages/types/src/types/extrinsic.ts:100](https://github.com/polkadot-js/api/blob/2b5be7eaab/packages/types/src/types/extrinsic.ts#L100)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | Address &#124; [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) &#124; string |
`options` | [SignatureOptions](_types_extrinsic_.signatureoptions.md) |

**Returns:** *[IExtrinsic](_types_extrinsic_.iextrinsic.md)*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[toHex](_codec_compact_.compactencodable.md#tohex)*

*Defined in [packages/types/src/types/codec.ts:68](https://github.com/polkadot-js/api/blob/2b5be7eaab/packages/types/src/types/codec.ts#L68)*

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

*Defined in [packages/types/src/types/codec.ts:73](https://github.com/polkadot-js/api/blob/2b5be7eaab/packages/types/src/types/codec.ts#L73)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_helpers_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[toRawType](_codec_compact_.compactencodable.md#torawtype)*

*Defined in [packages/types/src/types/codec.ts:78](https://github.com/polkadot-js/api/blob/2b5be7eaab/packages/types/src/types/codec.ts#L78)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[toString](_codec_compact_.compactencodable.md#tostring)*

*Defined in [packages/types/src/types/codec.ts:83](https://github.com/polkadot-js/api/blob/2b5be7eaab/packages/types/src/types/codec.ts#L83)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: [BareOpts](../modules/_types_helpers_.md#bareopts)): *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[toU8a](_codec_compact_.compactencodable.md#tou8a)*

*Defined in [packages/types/src/types/codec.ts:89](https://github.com/polkadot-js/api/blob/2b5be7eaab/packages/types/src/types/codec.ts#L89)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | [BareOpts](../modules/_types_helpers_.md#bareopts) | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*
