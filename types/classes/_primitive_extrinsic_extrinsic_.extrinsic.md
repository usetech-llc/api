[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["primitive/Extrinsic/Extrinsic"](../modules/_primitive_extrinsic_extrinsic_.md) › [Extrinsic](_primitive_extrinsic_extrinsic_.extrinsic.md)

# Class: Extrinsic

**`name`** Extrinsic

**`description`** 
Representation of an Extrinsic in the system. It contains the actual call,
(optional) signature and encodes with an actual length prefix

[https://github.com/paritytech/wiki/blob/master/Extrinsic.md#the-extrinsic-format-for-node](https://github.com/paritytech/wiki/blob/master/Extrinsic.md#the-extrinsic-format-for-node).

Can be:
- signed, to create a transaction
- left as is, to create an inherent

## Hierarchy

* [Base](_codec_base_.base.md)‹ExtrinsicVx | ExtrinsicUnknown›

  ↳ **Extrinsic**

## Implements

* Codec
* IExtrinsic

## Index

### Constructors

* [constructor](_primitive_extrinsic_extrinsic_.extrinsic.md#constructor)

### Properties

* [registry](_primitive_extrinsic_extrinsic_.extrinsic.md#registry)

### Accessors

* [args](_primitive_extrinsic_extrinsic_.extrinsic.md#args)
* [argsDef](_primitive_extrinsic_extrinsic_.extrinsic.md#argsdef)
* [callIndex](_primitive_extrinsic_extrinsic_.extrinsic.md#callindex)
* [data](_primitive_extrinsic_extrinsic_.extrinsic.md#data)
* [encodedLength](_primitive_extrinsic_extrinsic_.extrinsic.md#encodedlength)
* [era](_primitive_extrinsic_extrinsic_.extrinsic.md#era)
* [hasOrigin](_primitive_extrinsic_extrinsic_.extrinsic.md#hasorigin)
* [hash](_primitive_extrinsic_extrinsic_.extrinsic.md#hash)
* [isEmpty](_primitive_extrinsic_extrinsic_.extrinsic.md#isempty)
* [isSigned](_primitive_extrinsic_extrinsic_.extrinsic.md#issigned)
* [length](_primitive_extrinsic_extrinsic_.extrinsic.md#length)
* [meta](_primitive_extrinsic_extrinsic_.extrinsic.md#meta)
* [method](_primitive_extrinsic_extrinsic_.extrinsic.md#method)
* [nonce](_primitive_extrinsic_extrinsic_.extrinsic.md#nonce)
* [signature](_primitive_extrinsic_extrinsic_.extrinsic.md#signature)
* [signer](_primitive_extrinsic_extrinsic_.extrinsic.md#signer)
* [tip](_primitive_extrinsic_extrinsic_.extrinsic.md#tip)
* [type](_primitive_extrinsic_extrinsic_.extrinsic.md#type)
* [version](_primitive_extrinsic_extrinsic_.extrinsic.md#version)

### Methods

* [addSignature](_primitive_extrinsic_extrinsic_.extrinsic.md#addsignature)
* [eq](_primitive_extrinsic_extrinsic_.extrinsic.md#eq)
* [sign](_primitive_extrinsic_extrinsic_.extrinsic.md#sign)
* [signFake](_primitive_extrinsic_extrinsic_.extrinsic.md#signfake)
* [toHex](_primitive_extrinsic_extrinsic_.extrinsic.md#tohex)
* [toJSON](_primitive_extrinsic_extrinsic_.extrinsic.md#tojson)
* [toRawType](_primitive_extrinsic_extrinsic_.extrinsic.md#torawtype)
* [toString](_primitive_extrinsic_extrinsic_.extrinsic.md#tostring)
* [toU8a](_primitive_extrinsic_extrinsic_.extrinsic.md#tou8a)
* [decodeExtrinsic](_primitive_extrinsic_extrinsic_.extrinsic.md#static-decodeextrinsic)

## Constructors

###  constructor

\+ **new Extrinsic**(`registry`: Registry, `value`: [Extrinsic](_primitive_extrinsic_extrinsic_.extrinsic.md) | ExtrinsicValue | AnyU8a | Call | undefined, `__namedParameters`: object): *[Extrinsic](_primitive_extrinsic_extrinsic_.extrinsic.md)*

*Defined in [packages/types/src/primitive/Extrinsic/Extrinsic.ts:53](https://github.com/polkadot-js/api/blob/4aa5693906/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L53)*

**Parameters:**

▪ **registry**: *Registry*

▪ **value**: *[Extrinsic](_primitive_extrinsic_extrinsic_.extrinsic.md) | ExtrinsicValue | AnyU8a | Call | undefined*

▪`Default value`  **__namedParameters**: *object*= {}

Name | Type |
------ | ------ |
`version` | undefined &#124; number |

**Returns:** *[Extrinsic](_primitive_extrinsic_extrinsic_.extrinsic.md)*

## Properties

###  registry

• **registry**: *Registry*

*Inherited from [Base](_codec_base_.base.md).[registry](_codec_base_.base.md#registry)*

*Defined in [packages/types/src/codec/Base.ts:16](https://github.com/polkadot-js/api/blob/4aa5693906/packages/types/src/codec/Base.ts#L16)*

## Accessors

###  args

• **get args**(): *Codec[]*

*Defined in [packages/types/src/primitive/Extrinsic/Extrinsic.ts:121](https://github.com/polkadot-js/api/blob/4aa5693906/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L121)*

**`description`** The arguments passed to for the call, exposes args so it is compatible with [Call](_primitive_generic_call_.call.md)

**Returns:** *Codec[]*

___

###  argsDef

• **get argsDef**(): *ArgsDef*

*Defined in [packages/types/src/primitive/Extrinsic/Extrinsic.ts:128](https://github.com/polkadot-js/api/blob/4aa5693906/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L128)*

**`description`** The argument definitions, compatible with [Call](_primitive_generic_call_.call.md)

**Returns:** *ArgsDef*

___

###  callIndex

• **get callIndex**(): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Defined in [packages/types/src/primitive/Extrinsic/Extrinsic.ts:135](https://github.com/polkadot-js/api/blob/4aa5693906/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L135)*

**`description`** The actual `[sectionIndex, methodIndex]` as used in the Call

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

___

###  data

• **get data**(): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Defined in [packages/types/src/primitive/Extrinsic/Extrinsic.ts:142](https://github.com/polkadot-js/api/blob/4aa5693906/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L142)*

**`description`** The actual data for the Call

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

___

###  encodedLength

• **get encodedLength**(): *number*

*Overrides [Base](_codec_base_.base.md).[encodedLength](_codec_base_.base.md#encodedlength)*

*Defined in [packages/types/src/primitive/Extrinsic/Extrinsic.ts:156](https://github.com/polkadot-js/api/blob/4aa5693906/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L156)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  era

• **get era**(): *[ExtrinsicEra](_primitive_extrinsic_extrinsicera_.extrinsicera.md)*

*Defined in [packages/types/src/primitive/Extrinsic/Extrinsic.ts:149](https://github.com/polkadot-js/api/blob/4aa5693906/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L149)*

**`description`** The era for this extrinsic

**Returns:** *[ExtrinsicEra](_primitive_extrinsic_extrinsicera_.extrinsicera.md)*

___

###  hasOrigin

• **get hasOrigin**(): *boolean*

*Defined in [packages/types/src/primitive/Extrinsic/Extrinsic.ts:163](https://github.com/polkadot-js/api/blob/4aa5693906/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L163)*

**`description`** `true` is method has `Origin` argument (compatibility with [Call])

**Returns:** *boolean*

___

###  hash

• **get hash**(): *IHash*

*Inherited from [Base](_codec_base_.base.md).[hash](_codec_base_.base.md#hash)*

*Defined in [packages/types/src/codec/Base.ts:35](https://github.com/polkadot-js/api/blob/4aa5693906/packages/types/src/codec/Base.ts#L35)*

**`description`** returns a hash of the contents

**Returns:** *IHash*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Base](_codec_base_.base.md).[isEmpty](_codec_base_.base.md#isempty)*

*Defined in [packages/types/src/codec/Base.ts:42](https://github.com/polkadot-js/api/blob/4aa5693906/packages/types/src/codec/Base.ts#L42)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  isSigned

• **get isSigned**(): *boolean*

*Defined in [packages/types/src/primitive/Extrinsic/Extrinsic.ts:170](https://github.com/polkadot-js/api/blob/4aa5693906/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L170)*

**`description`** `true` id the extrinsic is signed

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Defined in [packages/types/src/primitive/Extrinsic/Extrinsic.ts:177](https://github.com/polkadot-js/api/blob/4aa5693906/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L177)*

**`description`** The length of the actual data, excluding prefix

**Returns:** *number*

___

###  meta

• **get meta**(): *FunctionMetadataLatest*

*Defined in [packages/types/src/primitive/Extrinsic/Extrinsic.ts:184](https://github.com/polkadot-js/api/blob/4aa5693906/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L184)*

**`description`** The [FunctionMetadataLatest](../interfaces/_interfaceregistry_.interfaceregistry.md#functionmetadatalatest) that describes the extrinsic

**Returns:** *FunctionMetadataLatest*

___

###  method

• **get method**(): *Call*

*Defined in [packages/types/src/primitive/Extrinsic/Extrinsic.ts:191](https://github.com/polkadot-js/api/blob/4aa5693906/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L191)*

**`description`** The [Call](_primitive_generic_call_.call.md) this extrinsic wraps

**Returns:** *Call*

___

###  nonce

• **get nonce**(): *[Compact](_codec_compact_.compact.md)‹Index›*

*Defined in [packages/types/src/primitive/Extrinsic/Extrinsic.ts:198](https://github.com/polkadot-js/api/blob/4aa5693906/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L198)*

**`description`** The nonce for this extrinsic

**Returns:** *[Compact](_codec_compact_.compact.md)‹Index›*

___

###  signature

• **get signature**(): *EcdsaSignature | Ed25519Signature | Sr25519Signature*

*Defined in [packages/types/src/primitive/Extrinsic/Extrinsic.ts:205](https://github.com/polkadot-js/api/blob/4aa5693906/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L205)*

**`description`** The actual [EcdsaSignature](../interfaces/_interfaceregistry_.interfaceregistry.md#ecdsasignature), [Ed25519Signature](../interfaces/_interfaceregistry_.interfaceregistry.md#ed25519signature) or [Sr25519Signature](../interfaces/_interfaceregistry_.interfaceregistry.md#sr25519signature)

**Returns:** *EcdsaSignature | Ed25519Signature | Sr25519Signature*

___

###  signer

• **get signer**(): *Address*

*Defined in [packages/types/src/primitive/Extrinsic/Extrinsic.ts:212](https://github.com/polkadot-js/api/blob/4aa5693906/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L212)*

**`description`** The [Address](_primitive_generic_address_.address.md) that signed

**Returns:** *Address*

___

###  tip

• **get tip**(): *[Compact](_codec_compact_.compact.md)‹Balance›*

*Defined in [packages/types/src/primitive/Extrinsic/Extrinsic.ts:219](https://github.com/polkadot-js/api/blob/4aa5693906/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L219)*

**`description`** Forwards compat

**Returns:** *[Compact](_codec_compact_.compact.md)‹Balance›*

___

###  type

• **get type**(): *number*

*Defined in [packages/types/src/primitive/Extrinsic/Extrinsic.ts:226](https://github.com/polkadot-js/api/blob/4aa5693906/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L226)*

**`description`** Returns the raw transaction version (not flagged with signing information)

**Returns:** *number*

___

###  version

• **get version**(): *number*

*Defined in [packages/types/src/primitive/Extrinsic/Extrinsic.ts:233](https://github.com/polkadot-js/api/blob/4aa5693906/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L233)*

**`description`** Returns the encoded version flag

**Returns:** *number*

## Methods

###  addSignature

▸ **addSignature**(`signer`: Address | [Uint8Array](_codec_raw_.raw.md#static-uint8array) | string, `signature`: [Uint8Array](_codec_raw_.raw.md#static-uint8array) | string, `payload`: ExtrinsicPayloadValue | [Uint8Array](_codec_raw_.raw.md#static-uint8array) | string): *[Extrinsic](_primitive_extrinsic_extrinsic_.extrinsic.md)*

*Defined in [packages/types/src/primitive/Extrinsic/Extrinsic.ts:240](https://github.com/polkadot-js/api/blob/4aa5693906/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L240)*

**`description`** Injects an already-generated signature into the extrinsic

**Parameters:**

Name | Type |
------ | ------ |
`signer` | Address &#124; [Uint8Array](_codec_raw_.raw.md#static-uint8array) &#124; string |
`signature` | [Uint8Array](_codec_raw_.raw.md#static-uint8array) &#124; string |
`payload` | ExtrinsicPayloadValue &#124; [Uint8Array](_codec_raw_.raw.md#static-uint8array) &#124; string |

**Returns:** *[Extrinsic](_primitive_extrinsic_extrinsic_.extrinsic.md)*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Base](_codec_base_.base.md).[eq](_codec_base_.base.md#eq)*

*Defined in [packages/types/src/codec/Base.ts:49](https://github.com/polkadot-js/api/blob/4aa5693906/packages/types/src/codec/Base.ts#L49)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  sign

▸ **sign**(`account`: IKeyringPair, `options`: SignatureOptions): *[Extrinsic](_primitive_extrinsic_extrinsic_.extrinsic.md)*

*Defined in [packages/types/src/primitive/Extrinsic/Extrinsic.ts:249](https://github.com/polkadot-js/api/blob/4aa5693906/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L249)*

**`description`** Sign the extrinsic with a specific keypair

**Parameters:**

Name | Type |
------ | ------ |
`account` | IKeyringPair |
`options` | SignatureOptions |

**Returns:** *[Extrinsic](_primitive_extrinsic_extrinsic_.extrinsic.md)*

___

###  signFake

▸ **signFake**(`signer`: Address | [Uint8Array](_codec_raw_.raw.md#static-uint8array) | string, `options`: SignatureOptions): *[Extrinsic](_primitive_extrinsic_extrinsic_.extrinsic.md)*

*Defined in [packages/types/src/primitive/Extrinsic/Extrinsic.ts:258](https://github.com/polkadot-js/api/blob/4aa5693906/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L258)*

**`describe`** Adds a fake signature to the extrinsic

**Parameters:**

Name | Type |
------ | ------ |
`signer` | Address &#124; [Uint8Array](_codec_raw_.raw.md#static-uint8array) &#124; string |
`options` | SignatureOptions |

**Returns:** *[Extrinsic](_primitive_extrinsic_extrinsic_.extrinsic.md)*

___

###  toHex

▸ **toHex**(`isBare?`: undefined | false | true): *string*

*Overrides [Base](_codec_base_.base.md).[toHex](_codec_base_.base.md#tohex)*

*Defined in [packages/types/src/primitive/Extrinsic/Extrinsic.ts:267](https://github.com/polkadot-js/api/blob/4aa5693906/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L267)*

**`description`** Returns a hex string representation of the value

**Parameters:**

Name | Type |
------ | ------ |
`isBare?` | undefined &#124; false &#124; true |

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *string*

*Overrides [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [packages/types/src/primitive/Extrinsic/Extrinsic.ts:274](https://github.com/polkadot-js/api/blob/4aa5693906/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L274)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Overrides [Base](_codec_base_.base.md).[toRawType](_codec_base_.base.md#torawtype)*

*Defined in [packages/types/src/primitive/Extrinsic/Extrinsic.ts:281](https://github.com/polkadot-js/api/blob/4aa5693906/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L281)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [packages/types/src/codec/Base.ts:70](https://github.com/polkadot-js/api/blob/4aa5693906/packages/types/src/codec/Base.ts#L70)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Overrides [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [packages/types/src/primitive/Extrinsic/Extrinsic.ts:289](https://github.com/polkadot-js/api/blob/4aa5693906/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L289)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value is not length-prefixed  |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

___

### `Static` decodeExtrinsic

▸ **decodeExtrinsic**(`registry`: Registry, `value`: [Extrinsic](_primitive_extrinsic_extrinsic_.extrinsic.md) | ExtrinsicValue | AnyU8a | Call | undefined, `version`: number): *ExtrinsicVx | ExtrinsicUnknown*

*Defined in [packages/types/src/primitive/Extrinsic/Extrinsic.ts:71](https://github.com/polkadot-js/api/blob/4aa5693906/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L71)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`registry` | Registry | - |
`value` | [Extrinsic](_primitive_extrinsic_extrinsic_.extrinsic.md) &#124; ExtrinsicValue &#124; AnyU8a &#124; Call &#124; undefined | - |
`version` | number | DEFAULT_VERSION |

**Returns:** *ExtrinsicVx | ExtrinsicUnknown*
