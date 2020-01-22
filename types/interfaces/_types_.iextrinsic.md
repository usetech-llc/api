[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types"](../modules/_types_.md) › [IExtrinsic](_types_.iextrinsic.md)

# Interface: IExtrinsic

## Hierarchy

* IExtrinsicSignable‹[IExtrinsic](_types_.iextrinsic.md)›

* ExtrinsicSignatureBase

  ↳ [IMethod](_types_.imethod.md)

  ↳ **IExtrinsic**

## Implemented by

* [Extrinsic](_interfaces_runtime_types_.extrinsic.md)
* [Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md)

## Index

### Properties

* [args](_types_.iextrinsic.md#args)
* [argsDef](_types_.iextrinsic.md#argsdef)
* [callIndex](_types_.iextrinsic.md#callindex)
* [data](_types_.iextrinsic.md#data)
* [encodedLength](_types_.iextrinsic.md#encodedlength)
* [era](_types_.iextrinsic.md#era)
* [hasOrigin](_types_.iextrinsic.md#hasorigin)
* [hash](_types_.iextrinsic.md#hash)
* [isEmpty](_types_.iextrinsic.md#isempty)
* [isSigned](_types_.iextrinsic.md#issigned)
* [length](_types_.iextrinsic.md#length)
* [meta](_types_.iextrinsic.md#meta)
* [method](_types_.iextrinsic.md#method)
* [nonce](_types_.iextrinsic.md#nonce)
* [registry](_types_.iextrinsic.md#registry)
* [signature](_types_.iextrinsic.md#signature)
* [signer](_types_.iextrinsic.md#signer)
* [tip](_types_.iextrinsic.md#tip)
* [type](_types_.iextrinsic.md#type)
* [version](_types_.iextrinsic.md#version)

### Methods

* [addSignature](_types_.iextrinsic.md#addsignature)
* [eq](_types_.iextrinsic.md#eq)
* [sign](_types_.iextrinsic.md#sign)
* [signFake](_types_.iextrinsic.md#signfake)
* [toHex](_types_.iextrinsic.md#tohex)
* [toJSON](_types_.iextrinsic.md#tojson)
* [toRawType](_types_.iextrinsic.md#torawtype)
* [toString](_types_.iextrinsic.md#tostring)
* [toU8a](_types_.iextrinsic.md#tou8a)

## Properties

###  args

• **args**: *[Codec](_types_.codec.md)[]*

*Inherited from [IMethod](_types_.imethod.md).[args](_types_.imethod.md#args)*

*Defined in [packages/types/src/types.ts:183](https://github.com/polkadot-js/api/blob/da8ff51615/packages/types/src/types.ts#L183)*

___

###  argsDef

• **argsDef**: *[ArgsDef](../modules/_types_.md#argsdef)*

*Inherited from [IMethod](_types_.imethod.md).[argsDef](_types_.imethod.md#argsdef)*

*Defined in [packages/types/src/types.ts:184](https://github.com/polkadot-js/api/blob/da8ff51615/packages/types/src/types.ts#L184)*

___

###  callIndex

• **callIndex**: *Uint8Array*

*Inherited from [IMethod](_types_.imethod.md).[callIndex](_types_.imethod.md#callindex)*

*Defined in [packages/types/src/types.ts:185](https://github.com/polkadot-js/api/blob/da8ff51615/packages/types/src/types.ts#L185)*

___

###  data

• **data**: *Uint8Array*

*Inherited from [IMethod](_types_.imethod.md).[data](_types_.imethod.md#data)*

*Defined in [packages/types/src/types.ts:186](https://github.com/polkadot-js/api/blob/da8ff51615/packages/types/src/types.ts#L186)*

___

###  encodedLength

• **encodedLength**: *number*

*Inherited from [Codec](_types_.codec.md).[encodedLength](_types_.codec.md#encodedlength)*

*Defined in [packages/types/src/types.ts:76](https://github.com/polkadot-js/api/blob/da8ff51615/packages/types/src/types.ts#L76)*

**`description`** The length of the value when encoded as a Uint8Array

___

###  era

• **era**: *[IExtrinsicEra](_types_.iextrinsicera.md)*

*Inherited from void*

*Defined in [packages/types/src/types.ts:194](https://github.com/polkadot-js/api/blob/da8ff51615/packages/types/src/types.ts#L194)*

___

###  hasOrigin

• **hasOrigin**: *boolean*

*Inherited from [IMethod](_types_.imethod.md).[hasOrigin](_types_.imethod.md#hasorigin)*

*Defined in [packages/types/src/types.ts:188](https://github.com/polkadot-js/api/blob/da8ff51615/packages/types/src/types.ts#L188)*

___

###  hash

• **hash**: *[IHash](_types_.ihash.md)*

*Inherited from [IMethod](_types_.imethod.md).[hash](_types_.imethod.md#hash)*

*Overrides [Codec](_types_.codec.md).[hash](_types_.codec.md#hash)*

*Defined in [packages/types/src/types.ts:187](https://github.com/polkadot-js/api/blob/da8ff51615/packages/types/src/types.ts#L187)*

___

###  isEmpty

• **isEmpty**: *boolean*

*Inherited from [Codec](_types_.codec.md).[isEmpty](_types_.codec.md#isempty)*

*Defined in [packages/types/src/types.ts:86](https://github.com/polkadot-js/api/blob/da8ff51615/packages/types/src/types.ts#L86)*

**`description`** Checks if the value is an empty value

___

###  isSigned

• **isSigned**: *boolean*

*Inherited from void*

*Defined in [packages/types/src/types.ts:193](https://github.com/polkadot-js/api/blob/da8ff51615/packages/types/src/types.ts#L193)*

___

###  length

• **length**: *number*

*Defined in [packages/types/src/types.ts:240](https://github.com/polkadot-js/api/blob/da8ff51615/packages/types/src/types.ts#L240)*

___

###  meta

• **meta**: *[FunctionMetadataLatest](_interfaces_metadata_types_.functionmetadatalatest.md)*

*Inherited from [IMethod](_types_.imethod.md).[meta](_types_.imethod.md#meta)*

*Defined in [packages/types/src/types.ts:189](https://github.com/polkadot-js/api/blob/da8ff51615/packages/types/src/types.ts#L189)*

___

###  method

• **method**: *[Call](_interfaces_runtime_types_.call.md)*

*Defined in [packages/types/src/types.ts:241](https://github.com/polkadot-js/api/blob/da8ff51615/packages/types/src/types.ts#L241)*

___

###  nonce

• **nonce**: *[ICompact](_types_.icompact.md)‹[Index](_interfaces_runtime_types_.index.md)›*

*Inherited from void*

*Defined in [packages/types/src/types.ts:195](https://github.com/polkadot-js/api/blob/da8ff51615/packages/types/src/types.ts#L195)*

___

###  registry

• **registry**: *[Registry](_types_.registry.md)*

*Inherited from [Codec](_types_.codec.md).[registry](_types_.codec.md#registry)*

*Defined in [packages/types/src/types.ts:91](https://github.com/polkadot-js/api/blob/da8ff51615/packages/types/src/types.ts#L91)*

**`description`** The registry associated with this object

___

###  signature

• **signature**: *[EcdsaSignature](_interfaces_runtime_types_.ecdsasignature.md) | [Ed25519Signature](_interfaces_runtime_types_.ed25519signature.md) | [Sr25519Signature](_interfaces_runtime_types_.sr25519signature.md)*

*Inherited from void*

*Defined in [packages/types/src/types.ts:196](https://github.com/polkadot-js/api/blob/da8ff51615/packages/types/src/types.ts#L196)*

___

###  signer

• **signer**: *[Address](_interfaces_runtime_types_.address.md)*

*Inherited from void*

*Defined in [packages/types/src/types.ts:197](https://github.com/polkadot-js/api/blob/da8ff51615/packages/types/src/types.ts#L197)*

___

###  tip

• **tip**: *[ICompact](_types_.icompact.md)‹[Balance](_interfaces_runtime_types_.balance.md)›*

*Inherited from void*

*Defined in [packages/types/src/types.ts:198](https://github.com/polkadot-js/api/blob/da8ff51615/packages/types/src/types.ts#L198)*

___

###  type

• **type**: *number*

*Defined in [packages/types/src/types.ts:242](https://github.com/polkadot-js/api/blob/da8ff51615/packages/types/src/types.ts#L242)*

___

###  version

• **version**: *number*

*Defined in [packages/types/src/types.ts:243](https://github.com/polkadot-js/api/blob/da8ff51615/packages/types/src/types.ts#L243)*

## Methods

###  addSignature

▸ **addSignature**(`signer`: [Address](_interfaces_runtime_types_.address.md) | Uint8Array | string, `signature`: Uint8Array | string, `payload`: [ExtrinsicPayloadValue](_types_.extrinsicpayloadvalue.md) | Uint8Array | string): *[IExtrinsic](_types_.iextrinsic.md)*

*Inherited from void*

*Defined in [packages/types/src/types.ts:226](https://github.com/polkadot-js/api/blob/da8ff51615/packages/types/src/types.ts#L226)*

**Parameters:**

Name | Type |
------ | ------ |
`signer` | [Address](_interfaces_runtime_types_.address.md) &#124; Uint8Array &#124; string |
`signature` | Uint8Array &#124; string |
`payload` | [ExtrinsicPayloadValue](_types_.extrinsicpayloadvalue.md) &#124; Uint8Array &#124; string |

**Returns:** *[IExtrinsic](_types_.iextrinsic.md)*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Codec](_types_.codec.md).[eq](_types_.codec.md#eq)*

*Defined in [packages/types/src/types.ts:96](https://github.com/polkadot-js/api/blob/da8ff51615/packages/types/src/types.ts#L96)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  sign

▸ **sign**(`account`: [IKeyringPair](_types_.ikeyringpair.md), `options`: [SignatureOptions](_types_.signatureoptions.md)): *[IExtrinsic](_types_.iextrinsic.md)*

*Inherited from void*

*Defined in [packages/types/src/types.ts:227](https://github.com/polkadot-js/api/blob/da8ff51615/packages/types/src/types.ts#L227)*

**Parameters:**

Name | Type |
------ | ------ |
`account` | [IKeyringPair](_types_.ikeyringpair.md) |
`options` | [SignatureOptions](_types_.signatureoptions.md) |

**Returns:** *[IExtrinsic](_types_.iextrinsic.md)*

___

###  signFake

▸ **signFake**(`address`: [Address](_interfaces_runtime_types_.address.md) | Uint8Array | string, `options`: [SignatureOptions](_types_.signatureoptions.md)): *[IExtrinsic](_types_.iextrinsic.md)*

*Inherited from void*

*Defined in [packages/types/src/types.ts:228](https://github.com/polkadot-js/api/blob/da8ff51615/packages/types/src/types.ts#L228)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | [Address](_interfaces_runtime_types_.address.md) &#124; Uint8Array &#124; string |
`options` | [SignatureOptions](_types_.signatureoptions.md) |

**Returns:** *[IExtrinsic](_types_.iextrinsic.md)*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Inherited from [Codec](_types_.codec.md).[toHex](_types_.codec.md#tohex)*

*Defined in [packages/types/src/types.ts:101](https://github.com/polkadot-js/api/blob/da8ff51615/packages/types/src/types.ts#L101)*

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

*Defined in [packages/types/src/types.ts:106](https://github.com/polkadot-js/api/blob/da8ff51615/packages/types/src/types.ts#L106)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Codec](_types_.codec.md).[toRawType](_types_.codec.md#torawtype)*

*Defined in [packages/types/src/types.ts:111](https://github.com/polkadot-js/api/blob/da8ff51615/packages/types/src/types.ts#L111)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Codec](_types_.codec.md).[toString](_types_.codec.md#tostring)*

*Defined in [packages/types/src/types.ts:116](https://github.com/polkadot-js/api/blob/da8ff51615/packages/types/src/types.ts#L116)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: [BareOpts](../modules/_types_.md#bareopts)): *Uint8Array*

*Inherited from [Codec](_types_.codec.md).[toU8a](_types_.codec.md#tou8a)*

*Defined in [packages/types/src/types.ts:122](https://github.com/polkadot-js/api/blob/da8ff51615/packages/types/src/types.ts#L122)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | [BareOpts](../modules/_types_.md#bareopts) | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*
