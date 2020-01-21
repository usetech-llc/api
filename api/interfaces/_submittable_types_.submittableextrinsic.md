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
* [paymentInfo](_submittable_types_.submittableextrinsic.md#paymentinfo)
* [send](_submittable_types_.submittableextrinsic.md#send)
* [sign](_submittable_types_.submittableextrinsic.md#sign)
* [signAndSend](_submittable_types_.submittableextrinsic.md#signandsend)
* [signAsync](_submittable_types_.submittableextrinsic.md#signasync)
* [signFake](_submittable_types_.submittableextrinsic.md#signfake)
* [toHex](_submittable_types_.submittableextrinsic.md#tohex)
* [toJSON](_submittable_types_.submittableextrinsic.md#tojson)
* [toRawType](_submittable_types_.submittableextrinsic.md#torawtype)
* [toString](_submittable_types_.submittableextrinsic.md#tostring)
* [toU8a](_submittable_types_.submittableextrinsic.md#tou8a)

## Properties

###  args

• **args**: *Codec[]*

*Inherited from void*

*Defined in [types/src/types.ts:183](https://github.com/polkadot-js/api/blob/20ed3bb5fe/packages/types/src/types.ts#L183)*

___

###  argsDef

• **argsDef**: *ArgsDef*

*Inherited from void*

*Defined in [types/src/types.ts:184](https://github.com/polkadot-js/api/blob/20ed3bb5fe/packages/types/src/types.ts#L184)*

___

###  callIndex

• **callIndex**: *Uint8Array*

*Inherited from void*

*Defined in [types/src/types.ts:185](https://github.com/polkadot-js/api/blob/20ed3bb5fe/packages/types/src/types.ts#L185)*

___

###  data

• **data**: *Uint8Array*

*Inherited from void*

*Defined in [types/src/types.ts:186](https://github.com/polkadot-js/api/blob/20ed3bb5fe/packages/types/src/types.ts#L186)*

___

###  encodedLength

• **encodedLength**: *number*

*Inherited from void*

*Defined in [types/src/types.ts:76](https://github.com/polkadot-js/api/blob/20ed3bb5fe/packages/types/src/types.ts#L76)*

**`description`** The length of the value when encoded as a Uint8Array

___

###  era

• **era**: *IExtrinsicEra*

*Inherited from void*

*Defined in [types/src/types.ts:194](https://github.com/polkadot-js/api/blob/20ed3bb5fe/packages/types/src/types.ts#L194)*

___

###  hasOrigin

• **hasOrigin**: *boolean*

*Inherited from void*

*Defined in [types/src/types.ts:188](https://github.com/polkadot-js/api/blob/20ed3bb5fe/packages/types/src/types.ts#L188)*

___

###  hash

• **hash**: *IHash*

*Inherited from void*

*Overrides void*

*Defined in [types/src/types.ts:187](https://github.com/polkadot-js/api/blob/20ed3bb5fe/packages/types/src/types.ts#L187)*

___

###  isEmpty

• **isEmpty**: *boolean*

*Inherited from void*

*Defined in [types/src/types.ts:86](https://github.com/polkadot-js/api/blob/20ed3bb5fe/packages/types/src/types.ts#L86)*

**`description`** Checks if the value is an empty value

___

###  isSigned

• **isSigned**: *boolean*

*Inherited from void*

*Defined in [types/src/types.ts:193](https://github.com/polkadot-js/api/blob/20ed3bb5fe/packages/types/src/types.ts#L193)*

___

###  length

• **length**: *number*

*Inherited from void*

*Defined in [types/src/types.ts:240](https://github.com/polkadot-js/api/blob/20ed3bb5fe/packages/types/src/types.ts#L240)*

___

###  meta

• **meta**: *FunctionMetadataLatest*

*Inherited from void*

*Defined in [types/src/types.ts:189](https://github.com/polkadot-js/api/blob/20ed3bb5fe/packages/types/src/types.ts#L189)*

___

###  method

• **method**: *Call*

*Inherited from void*

*Defined in [types/src/types.ts:241](https://github.com/polkadot-js/api/blob/20ed3bb5fe/packages/types/src/types.ts#L241)*

___

###  nonce

• **nonce**: *ICompact‹Index›*

*Inherited from void*

*Defined in [types/src/types.ts:195](https://github.com/polkadot-js/api/blob/20ed3bb5fe/packages/types/src/types.ts#L195)*

___

###  registry

• **registry**: *Registry*

*Inherited from void*

*Defined in [types/src/types.ts:91](https://github.com/polkadot-js/api/blob/20ed3bb5fe/packages/types/src/types.ts#L91)*

**`description`** The registry associated with this object

___

###  signature

• **signature**: *EcdsaSignature | Ed25519Signature | Sr25519Signature*

*Inherited from void*

*Defined in [types/src/types.ts:196](https://github.com/polkadot-js/api/blob/20ed3bb5fe/packages/types/src/types.ts#L196)*

___

###  signer

• **signer**: *Address*

*Inherited from void*

*Defined in [types/src/types.ts:197](https://github.com/polkadot-js/api/blob/20ed3bb5fe/packages/types/src/types.ts#L197)*

___

###  tip

• **tip**: *ICompact‹Balance›*

*Inherited from void*

*Defined in [types/src/types.ts:198](https://github.com/polkadot-js/api/blob/20ed3bb5fe/packages/types/src/types.ts#L198)*

___

###  type

• **type**: *number*

*Inherited from void*

*Defined in [types/src/types.ts:242](https://github.com/polkadot-js/api/blob/20ed3bb5fe/packages/types/src/types.ts#L242)*

___

###  version

• **version**: *number*

*Inherited from void*

*Defined in [types/src/types.ts:243](https://github.com/polkadot-js/api/blob/20ed3bb5fe/packages/types/src/types.ts#L243)*

## Methods

###  addSignature

▸ **addSignature**(`signer`: Address | Uint8Array | string, `signature`: Uint8Array | string, `payload`: ExtrinsicPayloadValue | Uint8Array | string): *IExtrinsic*

*Inherited from void*

*Defined in [types/src/types.ts:226](https://github.com/polkadot-js/api/blob/20ed3bb5fe/packages/types/src/types.ts#L226)*

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

*Defined in [types/src/types.ts:96](https://github.com/polkadot-js/api/blob/20ed3bb5fe/packages/types/src/types.ts#L96)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  paymentInfo

▸ **paymentInfo**(`account`: IKeyringPair | string | AccountId | Address, `options?`: Partial‹[SignerOptions](_submittable_types_.signeroptions.md)›): *[SubmittablePaymentResult](../modules/_submittable_types_.md#submittablepaymentresult)‹ApiType›*

*Defined in [api/src/submittable/types.ts:56](https://github.com/polkadot-js/api/blob/20ed3bb5fe/packages/api/src/submittable/types.ts#L56)*

**Parameters:**

Name | Type |
------ | ------ |
`account` | IKeyringPair &#124; string &#124; AccountId &#124; Address |
`options?` | Partial‹[SignerOptions](_submittable_types_.signeroptions.md)› |

**Returns:** *[SubmittablePaymentResult](../modules/_submittable_types_.md#submittablepaymentresult)‹ApiType›*

___

###  send

▸ **send**(): *[SubmittableResultResult](../modules/_submittable_types_.md#submittableresultresult)‹ApiType›*

*Defined in [api/src/submittable/types.ts:58](https://github.com/polkadot-js/api/blob/20ed3bb5fe/packages/api/src/submittable/types.ts#L58)*

**Returns:** *[SubmittableResultResult](../modules/_submittable_types_.md#submittableresultresult)‹ApiType›*

▸ **send**(`statusCb`: Callback‹[SubmittableResultImpl](_submittable_types_.submittableresultimpl.md)›): *[SubmittableResultSubscription](../modules/_submittable_types_.md#submittableresultsubscription)‹ApiType›*

*Defined in [api/src/submittable/types.ts:60](https://github.com/polkadot-js/api/blob/20ed3bb5fe/packages/api/src/submittable/types.ts#L60)*

**Parameters:**

Name | Type |
------ | ------ |
`statusCb` | Callback‹[SubmittableResultImpl](_submittable_types_.submittableresultimpl.md)› |

**Returns:** *[SubmittableResultSubscription](../modules/_submittable_types_.md#submittableresultsubscription)‹ApiType›*

___

###  sign

▸ **sign**(`account`: IKeyringPair, `_options`: Partial‹SignatureOptions›): *this*

*Overrides void*

*Defined in [api/src/submittable/types.ts:62](https://github.com/polkadot-js/api/blob/20ed3bb5fe/packages/api/src/submittable/types.ts#L62)*

**Parameters:**

Name | Type |
------ | ------ |
`account` | IKeyringPair |
`_options` | Partial‹SignatureOptions› |

**Returns:** *this*

___

###  signAndSend

▸ **signAndSend**(`account`: IKeyringPair | string | AccountId | Address, `options?`: Partial‹[SignerOptions](_submittable_types_.signeroptions.md)›): *[SubmittableResultResult](../modules/_submittable_types_.md#submittableresultresult)‹ApiType›*

*Defined in [api/src/submittable/types.ts:66](https://github.com/polkadot-js/api/blob/20ed3bb5fe/packages/api/src/submittable/types.ts#L66)*

**Parameters:**

Name | Type |
------ | ------ |
`account` | IKeyringPair &#124; string &#124; AccountId &#124; Address |
`options?` | Partial‹[SignerOptions](_submittable_types_.signeroptions.md)› |

**Returns:** *[SubmittableResultResult](../modules/_submittable_types_.md#submittableresultresult)‹ApiType›*

▸ **signAndSend**(`account`: IKeyringPair | string | AccountId | Address, `statusCb`: Callback‹[SubmittableResultImpl](_submittable_types_.submittableresultimpl.md)›): *[SubmittableResultSubscription](../modules/_submittable_types_.md#submittableresultsubscription)‹ApiType›*

*Defined in [api/src/submittable/types.ts:68](https://github.com/polkadot-js/api/blob/20ed3bb5fe/packages/api/src/submittable/types.ts#L68)*

**Parameters:**

Name | Type |
------ | ------ |
`account` | IKeyringPair &#124; string &#124; AccountId &#124; Address |
`statusCb` | Callback‹[SubmittableResultImpl](_submittable_types_.submittableresultimpl.md)› |

**Returns:** *[SubmittableResultSubscription](../modules/_submittable_types_.md#submittableresultsubscription)‹ApiType›*

▸ **signAndSend**(`account`: IKeyringPair | string | AccountId | Address, `options`: Partial‹[SignerOptions](_submittable_types_.signeroptions.md)›, `statusCb?`: Callback‹[SubmittableResultImpl](_submittable_types_.submittableresultimpl.md)›): *[SubmittableResultSubscription](../modules/_submittable_types_.md#submittableresultsubscription)‹ApiType›*

*Defined in [api/src/submittable/types.ts:70](https://github.com/polkadot-js/api/blob/20ed3bb5fe/packages/api/src/submittable/types.ts#L70)*

**Parameters:**

Name | Type |
------ | ------ |
`account` | IKeyringPair &#124; string &#124; AccountId &#124; Address |
`options` | Partial‹[SignerOptions](_submittable_types_.signeroptions.md)› |
`statusCb?` | Callback‹[SubmittableResultImpl](_submittable_types_.submittableresultimpl.md)› |

**Returns:** *[SubmittableResultSubscription](../modules/_submittable_types_.md#submittableresultsubscription)‹ApiType›*

___

###  signAsync

▸ **signAsync**(`account`: IKeyringPair, `_options`: Partial‹SignatureOptions›): *[SubmittableThis](../modules/_submittable_types_.md#submittablethis)‹ApiType, this›*

*Defined in [api/src/submittable/types.ts:64](https://github.com/polkadot-js/api/blob/20ed3bb5fe/packages/api/src/submittable/types.ts#L64)*

**Parameters:**

Name | Type |
------ | ------ |
`account` | IKeyringPair |
`_options` | Partial‹SignatureOptions› |

**Returns:** *[SubmittableThis](../modules/_submittable_types_.md#submittablethis)‹ApiType, this›*

___

###  signFake

▸ **signFake**(`address`: Address | Uint8Array | string, `options`: SignatureOptions): *IExtrinsic*

*Inherited from void*

*Defined in [types/src/types.ts:228](https://github.com/polkadot-js/api/blob/20ed3bb5fe/packages/types/src/types.ts#L228)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | Address &#124; Uint8Array &#124; string |
`options` | SignatureOptions |

**Returns:** *IExtrinsic*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Inherited from void*

*Defined in [types/src/types.ts:101](https://github.com/polkadot-js/api/blob/20ed3bb5fe/packages/types/src/types.ts#L101)*

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

*Defined in [types/src/types.ts:106](https://github.com/polkadot-js/api/blob/20ed3bb5fe/packages/types/src/types.ts#L106)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *AnyJson*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from void*

*Defined in [types/src/types.ts:111](https://github.com/polkadot-js/api/blob/20ed3bb5fe/packages/types/src/types.ts#L111)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from void*

*Defined in [types/src/types.ts:116](https://github.com/polkadot-js/api/blob/20ed3bb5fe/packages/types/src/types.ts#L116)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: BareOpts): *Uint8Array*

*Inherited from void*

*Defined in [types/src/types.ts:122](https://github.com/polkadot-js/api/blob/20ed3bb5fe/packages/types/src/types.ts#L122)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | BareOpts | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*
