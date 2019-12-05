[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["submittable/types"](../modules/_submittable_types_.md) › [SubmittableExtrinsic](_submittable_types_.submittableextrinsic.md)

# Interface: SubmittableExtrinsic <**ApiType**>

## Type parameters

▪ **ApiType**: *[ApiTypes](../modules/_types_.md#apitypes)*

## Hierarchy

* IExtrinsic

  ↳ **SubmittableExtrinsic**

## Index

### Properties

* [args](_submittable_types_.submittableextrinsic.md#args)
* [argsDef](_submittable_types_.submittableextrinsic.md#argsdef)
* [callIndex](_submittable_types_.submittableextrinsic.md#callindex)
* [data](_submittable_types_.submittableextrinsic.md#data)
* [encodedLength](_submittable_types_.submittableextrinsic.md#encodedlength)
* [era](_submittable_types_.submittableextrinsic.md#era)
* [hasOrigin](_submittable_types_.submittableextrinsic.md#hasorigin)
* [hash](_submittable_types_.submittableextrinsic.md#hash)
* [isEmpty](_submittable_types_.submittableextrinsic.md#isempty)
* [isSigned](_submittable_types_.submittableextrinsic.md#issigned)
* [length](_submittable_types_.submittableextrinsic.md#length)
* [meta](_submittable_types_.submittableextrinsic.md#meta)
* [method](_submittable_types_.submittableextrinsic.md#method)
* [nonce](_submittable_types_.submittableextrinsic.md#nonce)
* [registry](_submittable_types_.submittableextrinsic.md#registry)
* [signature](_submittable_types_.submittableextrinsic.md#signature)
* [signer](_submittable_types_.submittableextrinsic.md#signer)
* [tip](_submittable_types_.submittableextrinsic.md#tip)
* [type](_submittable_types_.submittableextrinsic.md#type)
* [version](_submittable_types_.submittableextrinsic.md#version)

### Methods

* [addSignature](_submittable_types_.submittableextrinsic.md#addsignature)
* [eq](_submittable_types_.submittableextrinsic.md#eq)
* [send](_submittable_types_.submittableextrinsic.md#send)
* [sign](_submittable_types_.submittableextrinsic.md#sign)
* [signAndSend](_submittable_types_.submittableextrinsic.md#signandsend)
* [signAsync](_submittable_types_.submittableextrinsic.md#signasync)
* [toHex](_submittable_types_.submittableextrinsic.md#tohex)
* [toJSON](_submittable_types_.submittableextrinsic.md#tojson)
* [toRawType](_submittable_types_.submittableextrinsic.md#torawtype)
* [toString](_submittable_types_.submittableextrinsic.md#tostring)
* [toU8a](_submittable_types_.submittableextrinsic.md#tou8a)

## Properties

###  args

• **args**: *Codec[]*

*Inherited from void*

*Defined in [types/src/types.ts:181](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/types/src/types.ts#L181)*

___

###  argsDef

• **argsDef**: *ArgsDef*

*Inherited from void*

*Defined in [types/src/types.ts:182](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/types/src/types.ts#L182)*

___

###  callIndex

• **callIndex**: *Uint8Array*

*Inherited from void*

*Defined in [types/src/types.ts:183](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/types/src/types.ts#L183)*

___

###  data

• **data**: *Uint8Array*

*Inherited from void*

*Defined in [types/src/types.ts:184](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/types/src/types.ts#L184)*

___

###  encodedLength

• **encodedLength**: *number*

*Inherited from void*

*Defined in [types/src/types.ts:75](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/types/src/types.ts#L75)*

**`description`** The length of the value when encoded as a Uint8Array

___

###  era

• **era**: *IExtrinsicEra*

*Inherited from void*

*Defined in [types/src/types.ts:192](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/types/src/types.ts#L192)*

___

###  hasOrigin

• **hasOrigin**: *boolean*

*Inherited from void*

*Defined in [types/src/types.ts:186](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/types/src/types.ts#L186)*

___

###  hash

• **hash**: *IHash*

*Inherited from void*

*Overrides void*

*Defined in [types/src/types.ts:185](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/types/src/types.ts#L185)*

___

###  isEmpty

• **isEmpty**: *boolean*

*Inherited from void*

*Defined in [types/src/types.ts:85](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/types/src/types.ts#L85)*

**`description`** Checks if the value is an empty value

___

###  isSigned

• **isSigned**: *boolean*

*Inherited from void*

*Defined in [types/src/types.ts:191](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/types/src/types.ts#L191)*

___

###  length

• **length**: *number*

*Inherited from void*

*Defined in [types/src/types.ts:236](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/types/src/types.ts#L236)*

___

###  meta

• **meta**: *FunctionMetadataLatest*

*Inherited from void*

*Defined in [types/src/types.ts:187](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/types/src/types.ts#L187)*

___

###  method

• **method**: *Call*

*Inherited from void*

*Defined in [types/src/types.ts:237](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/types/src/types.ts#L237)*

___

###  nonce

• **nonce**: *ICompact‹Index›*

*Inherited from void*

*Defined in [types/src/types.ts:193](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/types/src/types.ts#L193)*

___

###  registry

• **registry**: *Registry*

*Inherited from void*

*Defined in [types/src/types.ts:90](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/types/src/types.ts#L90)*

**`description`** The registry associated with this object

___

###  signature

• **signature**: *EcdsaSignature | Ed25519Signature | Sr25519Signature*

*Inherited from void*

*Defined in [types/src/types.ts:194](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/types/src/types.ts#L194)*

___

###  signer

• **signer**: *Address*

*Inherited from void*

*Defined in [types/src/types.ts:195](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/types/src/types.ts#L195)*

___

###  tip

• **tip**: *ICompact‹Balance›*

*Inherited from void*

*Defined in [types/src/types.ts:196](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/types/src/types.ts#L196)*

___

###  type

• **type**: *number*

*Inherited from void*

*Defined in [types/src/types.ts:238](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/types/src/types.ts#L238)*

___

###  version

• **version**: *number*

*Inherited from void*

*Defined in [types/src/types.ts:239](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/types/src/types.ts#L239)*

## Methods

###  addSignature

▸ **addSignature**(`signer`: Address | Uint8Array | string, `signature`: Uint8Array | string, `payload`: ExtrinsicPayloadValue | Uint8Array | string): *IExtrinsic*

*Inherited from void*

*Defined in [types/src/types.ts:223](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/types/src/types.ts#L223)*

**Parameters:**

Name | Type |
------ | ------ |
`signer` | Address &#124; Uint8Array &#124; string |
`signature` | Uint8Array &#124; string |
`payload` | ExtrinsicPayloadValue &#124; Uint8Array &#124; string |

**Returns:** *IExtrinsic*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from void*

*Defined in [types/src/types.ts:95](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/types/src/types.ts#L95)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  send

▸ **send**(): *[SubmittableResultResult](../modules/_submittable_types_.md#submittableresultresult)‹ApiType›*

*Defined in [api/src/submittable/types.ts:45](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/api/src/submittable/types.ts#L45)*

**Returns:** *[SubmittableResultResult](../modules/_submittable_types_.md#submittableresultresult)‹ApiType›*

▸ **send**(`statusCb`: Callback‹[SubmittableResultImpl](_submittable_types_.submittableresultimpl.md)›): *[SubmittableResultSubscription](../modules/_submittable_types_.md#submittableresultsubscription)‹ApiType›*

*Defined in [api/src/submittable/types.ts:47](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/api/src/submittable/types.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`statusCb` | Callback‹[SubmittableResultImpl](_submittable_types_.submittableresultimpl.md)› |

**Returns:** *[SubmittableResultSubscription](../modules/_submittable_types_.md#submittableresultsubscription)‹ApiType›*

___

###  sign

▸ **sign**(`account`: IKeyringPair, `_options`: Partial‹SignatureOptions›): *this*

*Overrides void*

*Defined in [api/src/submittable/types.ts:49](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/api/src/submittable/types.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`account` | IKeyringPair |
`_options` | Partial‹SignatureOptions› |

**Returns:** *this*

___

###  signAndSend

▸ **signAndSend**(`account`: IKeyringPair | string | AccountId | Address, `options?`: Partial‹[SignerOptions](_submittable_types_.signeroptions.md)›): *[SubmittableResultResult](../modules/_submittable_types_.md#submittableresultresult)‹ApiType›*

*Defined in [api/src/submittable/types.ts:53](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/api/src/submittable/types.ts#L53)*

**Parameters:**

Name | Type |
------ | ------ |
`account` | IKeyringPair &#124; string &#124; AccountId &#124; Address |
`options?` | Partial‹[SignerOptions](_submittable_types_.signeroptions.md)› |

**Returns:** *[SubmittableResultResult](../modules/_submittable_types_.md#submittableresultresult)‹ApiType›*

▸ **signAndSend**(`account`: IKeyringPair | string | AccountId | Address, `statusCb`: Callback‹[SubmittableResultImpl](_submittable_types_.submittableresultimpl.md)›): *[SubmittableResultSubscription](../modules/_submittable_types_.md#submittableresultsubscription)‹ApiType›*

*Defined in [api/src/submittable/types.ts:55](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/api/src/submittable/types.ts#L55)*

**Parameters:**

Name | Type |
------ | ------ |
`account` | IKeyringPair &#124; string &#124; AccountId &#124; Address |
`statusCb` | Callback‹[SubmittableResultImpl](_submittable_types_.submittableresultimpl.md)› |

**Returns:** *[SubmittableResultSubscription](../modules/_submittable_types_.md#submittableresultsubscription)‹ApiType›*

▸ **signAndSend**(`account`: IKeyringPair | string | AccountId | Address, `options`: Partial‹[SignerOptions](_submittable_types_.signeroptions.md)›, `statusCb?`: Callback‹[SubmittableResultImpl](_submittable_types_.submittableresultimpl.md)›): *[SubmittableResultSubscription](../modules/_submittable_types_.md#submittableresultsubscription)‹ApiType›*

*Defined in [api/src/submittable/types.ts:57](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/api/src/submittable/types.ts#L57)*

**Parameters:**

Name | Type |
------ | ------ |
`account` | IKeyringPair &#124; string &#124; AccountId &#124; Address |
`options` | Partial‹[SignerOptions](_submittable_types_.signeroptions.md)› |
`statusCb?` | Callback‹[SubmittableResultImpl](_submittable_types_.submittableresultimpl.md)› |

**Returns:** *[SubmittableResultSubscription](../modules/_submittable_types_.md#submittableresultsubscription)‹ApiType›*

___

###  signAsync

▸ **signAsync**(`account`: IKeyringPair, `_options`: Partial‹SignatureOptions›): *Promise‹this›*

*Defined in [api/src/submittable/types.ts:51](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/api/src/submittable/types.ts#L51)*

**Parameters:**

Name | Type |
------ | ------ |
`account` | IKeyringPair |
`_options` | Partial‹SignatureOptions› |

**Returns:** *Promise‹this›*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Inherited from void*

*Defined in [types/src/types.ts:100](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/types/src/types.ts#L100)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

**Parameters:**

Name | Type |
------ | ------ |
`isLe?` | undefined &#124; false &#124; true |

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *AnyJson*

*Inherited from void*

*Defined in [types/src/types.ts:105](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/types/src/types.ts#L105)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *AnyJson*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from void*

*Defined in [types/src/types.ts:110](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/types/src/types.ts#L110)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from void*

*Defined in [types/src/types.ts:115](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/types/src/types.ts#L115)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: BareOpts): *Uint8Array*

*Inherited from void*

*Defined in [types/src/types.ts:121](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/types/src/types.ts#L121)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | BareOpts | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*
