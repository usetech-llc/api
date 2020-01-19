[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types"](../modules/_types_.md) › [IExtrinsicSignature](_types_.iextrinsicsignature.md)

# Interface: IExtrinsicSignature

## Hierarchy

* ExtrinsicSignatureBase

* [Codec](_types_.codec.md)

  ↳ **IExtrinsicSignature**

## Implemented by

* [ExtrinsicSignatureV1](../classes/_primitive_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md)
* [ExtrinsicSignatureV2](../classes/_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md)
* [ExtrinsicSignatureV3](../classes/_primitive_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md)
* [ExtrinsicSignatureV4](../classes/_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md)

## Index

### Properties

* [encodedLength](_types_.iextrinsicsignature.md#encodedlength)
* [era](_types_.iextrinsicsignature.md#era)
* [hash](_types_.iextrinsicsignature.md#hash)
* [isEmpty](_types_.iextrinsicsignature.md#isempty)
* [isSigned](_types_.iextrinsicsignature.md#issigned)
* [nonce](_types_.iextrinsicsignature.md#nonce)
* [registry](_types_.iextrinsicsignature.md#registry)
* [signature](_types_.iextrinsicsignature.md#signature)
* [signer](_types_.iextrinsicsignature.md#signer)
* [tip](_types_.iextrinsicsignature.md#tip)

### Methods

* [addSignature](_types_.iextrinsicsignature.md#addsignature)
* [eq](_types_.iextrinsicsignature.md#eq)
* [sign](_types_.iextrinsicsignature.md#sign)
* [signFake](_types_.iextrinsicsignature.md#signfake)
* [toHex](_types_.iextrinsicsignature.md#tohex)
* [toJSON](_types_.iextrinsicsignature.md#tojson)
* [toRawType](_types_.iextrinsicsignature.md#torawtype)
* [toString](_types_.iextrinsicsignature.md#tostring)
* [toU8a](_types_.iextrinsicsignature.md#tou8a)

## Properties

###  encodedLength

• **encodedLength**: *number*

*Inherited from [Codec](_types_.codec.md).[encodedLength](_types_.codec.md#encodedlength)*

*Defined in [packages/types/src/types.ts:75](https://github.com/polkadot-js/api/blob/ffaea83e3e/packages/types/src/types.ts#L75)*

**`description`** The length of the value when encoded as a Uint8Array

___

###  era

• **era**: *[IExtrinsicEra](_types_.iextrinsicera.md)*

*Inherited from void*

*Defined in [packages/types/src/types.ts:192](https://github.com/polkadot-js/api/blob/ffaea83e3e/packages/types/src/types.ts#L192)*

___

###  hash

• **hash**: *[IHash](_types_.ihash.md)*

*Inherited from [Codec](_types_.codec.md).[hash](_types_.codec.md#hash)*

*Defined in [packages/types/src/types.ts:80](https://github.com/polkadot-js/api/blob/ffaea83e3e/packages/types/src/types.ts#L80)*

**`description`** Returns a hash of the value

___

###  isEmpty

• **isEmpty**: *boolean*

*Inherited from [Codec](_types_.codec.md).[isEmpty](_types_.codec.md#isempty)*

*Defined in [packages/types/src/types.ts:85](https://github.com/polkadot-js/api/blob/ffaea83e3e/packages/types/src/types.ts#L85)*

**`description`** Checks if the value is an empty value

___

###  isSigned

• **isSigned**: *boolean*

*Inherited from void*

*Defined in [packages/types/src/types.ts:191](https://github.com/polkadot-js/api/blob/ffaea83e3e/packages/types/src/types.ts#L191)*

___

###  nonce

• **nonce**: *[ICompact](_types_.icompact.md)‹[Index](_interfaces_runtime_types_.index.md)›*

*Inherited from void*

*Defined in [packages/types/src/types.ts:193](https://github.com/polkadot-js/api/blob/ffaea83e3e/packages/types/src/types.ts#L193)*

___

###  registry

• **registry**: *[Registry](_types_.registry.md)*

*Inherited from [Codec](_types_.codec.md).[registry](_types_.codec.md#registry)*

*Defined in [packages/types/src/types.ts:90](https://github.com/polkadot-js/api/blob/ffaea83e3e/packages/types/src/types.ts#L90)*

**`description`** The registry associated with this object

___

###  signature

• **signature**: *[EcdsaSignature](_interfaces_runtime_types_.ecdsasignature.md) | [Ed25519Signature](_interfaces_runtime_types_.ed25519signature.md) | [Sr25519Signature](_interfaces_runtime_types_.sr25519signature.md)*

*Inherited from void*

*Defined in [packages/types/src/types.ts:194](https://github.com/polkadot-js/api/blob/ffaea83e3e/packages/types/src/types.ts#L194)*

___

###  signer

• **signer**: *[Address](_interfaces_runtime_types_.address.md)*

*Inherited from void*

*Defined in [packages/types/src/types.ts:195](https://github.com/polkadot-js/api/blob/ffaea83e3e/packages/types/src/types.ts#L195)*

___

###  tip

• **tip**: *[ICompact](_types_.icompact.md)‹[Balance](_interfaces_runtime_types_.balance.md)›*

*Inherited from void*

*Defined in [packages/types/src/types.ts:196](https://github.com/polkadot-js/api/blob/ffaea83e3e/packages/types/src/types.ts#L196)*

## Methods

###  addSignature

▸ **addSignature**(`signer`: [Address](_interfaces_runtime_types_.address.md) | Uint8Array | string, `signature`: Uint8Array | string, `payload`: Uint8Array | string): *[IExtrinsicSignature](_types_.iextrinsicsignature.md)*

*Defined in [packages/types/src/types.ts:211](https://github.com/polkadot-js/api/blob/ffaea83e3e/packages/types/src/types.ts#L211)*

**Parameters:**

Name | Type |
------ | ------ |
`signer` | [Address](_interfaces_runtime_types_.address.md) &#124; Uint8Array &#124; string |
`signature` | Uint8Array &#124; string |
`payload` | Uint8Array &#124; string |

**Returns:** *[IExtrinsicSignature](_types_.iextrinsicsignature.md)*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Codec](_types_.codec.md).[eq](_types_.codec.md#eq)*

*Defined in [packages/types/src/types.ts:95](https://github.com/polkadot-js/api/blob/ffaea83e3e/packages/types/src/types.ts#L95)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  sign

▸ **sign**(`method`: [Call](_interfaces_runtime_types_.call.md), `account`: [IKeyringPair](_types_.ikeyringpair.md), `options`: [SignatureOptions](_types_.signatureoptions.md)): *[IExtrinsicSignature](_types_.iextrinsicsignature.md)*

*Defined in [packages/types/src/types.ts:212](https://github.com/polkadot-js/api/blob/ffaea83e3e/packages/types/src/types.ts#L212)*

**Parameters:**

Name | Type |
------ | ------ |
`method` | [Call](_interfaces_runtime_types_.call.md) |
`account` | [IKeyringPair](_types_.ikeyringpair.md) |
`options` | [SignatureOptions](_types_.signatureoptions.md) |

**Returns:** *[IExtrinsicSignature](_types_.iextrinsicsignature.md)*

___

###  signFake

▸ **signFake**(`method`: [Call](_interfaces_runtime_types_.call.md), `address`: [Address](_interfaces_runtime_types_.address.md) | Uint8Array | string, `options`: [SignatureOptions](_types_.signatureoptions.md)): *[IExtrinsicSignature](_types_.iextrinsicsignature.md)*

*Defined in [packages/types/src/types.ts:213](https://github.com/polkadot-js/api/blob/ffaea83e3e/packages/types/src/types.ts#L213)*

**Parameters:**

Name | Type |
------ | ------ |
`method` | [Call](_interfaces_runtime_types_.call.md) |
`address` | [Address](_interfaces_runtime_types_.address.md) &#124; Uint8Array &#124; string |
`options` | [SignatureOptions](_types_.signatureoptions.md) |

**Returns:** *[IExtrinsicSignature](_types_.iextrinsicsignature.md)*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Inherited from [Codec](_types_.codec.md).[toHex](_types_.codec.md#tohex)*

*Defined in [packages/types/src/types.ts:100](https://github.com/polkadot-js/api/blob/ffaea83e3e/packages/types/src/types.ts#L100)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

**Parameters:**

Name | Type |
------ | ------ |
`isLe?` | undefined &#124; false &#124; true |

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_.md#anyjson)*

*Inherited from [Codec](_types_.codec.md).[toJSON](_types_.codec.md#tojson)*

*Defined in [packages/types/src/types.ts:105](https://github.com/polkadot-js/api/blob/ffaea83e3e/packages/types/src/types.ts#L105)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Codec](_types_.codec.md).[toRawType](_types_.codec.md#torawtype)*

*Defined in [packages/types/src/types.ts:110](https://github.com/polkadot-js/api/blob/ffaea83e3e/packages/types/src/types.ts#L110)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Codec](_types_.codec.md).[toString](_types_.codec.md#tostring)*

*Defined in [packages/types/src/types.ts:115](https://github.com/polkadot-js/api/blob/ffaea83e3e/packages/types/src/types.ts#L115)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: [BareOpts](../modules/_types_.md#bareopts)): *Uint8Array*

*Inherited from [Codec](_types_.codec.md).[toU8a](_types_.codec.md#tou8a)*

*Defined in [packages/types/src/types.ts:121](https://github.com/polkadot-js/api/blob/ffaea83e3e/packages/types/src/types.ts#L121)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | [BareOpts](../modules/_types_.md#bareopts) | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*
