[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/runtime/types"](../modules/_interfaces_runtime_types_.md) › [Extrinsic](_interfaces_runtime_types_.extrinsic.md)

# Interface: Extrinsic

GenericExtrinsic

## Hierarchy

  ↳ [Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md)

  ↳ **Extrinsic**

## Implements

* [Codec](_types_.codec.md)
* [IExtrinsic](_types_.iextrinsic.md)

## Index

### Constructors

* [constructor](_interfaces_runtime_types_.extrinsic.md#constructor)

### Properties

* [registry](_interfaces_runtime_types_.extrinsic.md#registry)

### Accessors

* [args](_interfaces_runtime_types_.extrinsic.md#args)
* [argsDef](_interfaces_runtime_types_.extrinsic.md#argsdef)
* [callIndex](_interfaces_runtime_types_.extrinsic.md#callindex)
* [data](_interfaces_runtime_types_.extrinsic.md#data)
* [encodedLength](_interfaces_runtime_types_.extrinsic.md#encodedlength)
* [era](_interfaces_runtime_types_.extrinsic.md#era)
* [hasOrigin](_interfaces_runtime_types_.extrinsic.md#hasorigin)
* [hash](_interfaces_runtime_types_.extrinsic.md#hash)
* [isEmpty](_interfaces_runtime_types_.extrinsic.md#isempty)
* [isSigned](_interfaces_runtime_types_.extrinsic.md#issigned)
* [length](_interfaces_runtime_types_.extrinsic.md#length)
* [meta](_interfaces_runtime_types_.extrinsic.md#meta)
* [method](_interfaces_runtime_types_.extrinsic.md#method)
* [nonce](_interfaces_runtime_types_.extrinsic.md#nonce)
* [signature](_interfaces_runtime_types_.extrinsic.md#signature)
* [signer](_interfaces_runtime_types_.extrinsic.md#signer)
* [tip](_interfaces_runtime_types_.extrinsic.md#tip)
* [type](_interfaces_runtime_types_.extrinsic.md#type)
* [version](_interfaces_runtime_types_.extrinsic.md#version)

### Methods

* [addSignature](_interfaces_runtime_types_.extrinsic.md#addsignature)
* [eq](_interfaces_runtime_types_.extrinsic.md#eq)
* [sign](_interfaces_runtime_types_.extrinsic.md#sign)
* [toHex](_interfaces_runtime_types_.extrinsic.md#tohex)
* [toJSON](_interfaces_runtime_types_.extrinsic.md#tojson)
* [toRawType](_interfaces_runtime_types_.extrinsic.md#torawtype)
* [toString](_interfaces_runtime_types_.extrinsic.md#tostring)
* [toU8a](_interfaces_runtime_types_.extrinsic.md#tou8a)
* [decodeExtrinsic](_interfaces_runtime_types_.extrinsic.md#static-decodeextrinsic)

## Constructors

###  constructor

\+ **new Extrinsic**(`registry`: [Registry](_types_.registry.md), `value`: [Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md) | ExtrinsicValue | [AnyU8a](../modules/_types_.md#anyu8a) | [Call](_interfaces_runtime_types_.call.md) | undefined, `__namedParameters`: object): *[Extrinsic](_interfaces_runtime_types_.extrinsic.md)*

*Inherited from [Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md).[constructor](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md#constructor)*

*Defined in [packages/types/src/primitive/Extrinsic/Extrinsic.ts:53](https://github.com/polkadot-js/api/blob/6bf0d5eea/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L53)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`registry` | [Registry](_types_.registry.md) | - |
`value` | [Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md) &#124; ExtrinsicValue &#124; [AnyU8a](../modules/_types_.md#anyu8a) &#124; [Call](_interfaces_runtime_types_.call.md) &#124; undefined | - |
`__namedParameters` | object |  {} |

**Returns:** *[Extrinsic](_interfaces_runtime_types_.extrinsic.md)*

## Properties

###  registry

• **registry**: *[Registry](_types_.registry.md)*

*Inherited from [Base](../classes/_codec_base_.base.md).[registry](../classes/_codec_base_.base.md#registry)*

*Defined in [packages/types/src/codec/Base.ts:16](https://github.com/polkadot-js/api/blob/6bf0d5eea/packages/types/src/codec/Base.ts#L16)*

## Accessors

###  args

• **get args**(): *[Codec](_types_.codec.md)[]*

*Inherited from [Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md).[args](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md#args)*

*Defined in [packages/types/src/primitive/Extrinsic/Extrinsic.ts:121](https://github.com/polkadot-js/api/blob/6bf0d5eea/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L121)*

**`description`** The arguments passed to for the call, exposes args so it is compatible with [Call](_interfaces_runtime_types_.call.md)

**Returns:** *[Codec](_types_.codec.md)[]*

___

###  argsDef

• **get argsDef**(): *[ArgsDef](../modules/_types_.md#argsdef)*

*Inherited from [Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md).[argsDef](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md#argsdef)*

*Defined in [packages/types/src/primitive/Extrinsic/Extrinsic.ts:128](https://github.com/polkadot-js/api/blob/6bf0d5eea/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L128)*

**`description`** The argument definitions, compatible with [Call](_interfaces_runtime_types_.call.md)

**Returns:** *[ArgsDef](../modules/_types_.md#argsdef)*

___

###  callIndex

• **get callIndex**(): *Uint8Array*

*Inherited from [Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md).[callIndex](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md#callindex)*

*Defined in [packages/types/src/primitive/Extrinsic/Extrinsic.ts:135](https://github.com/polkadot-js/api/blob/6bf0d5eea/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L135)*

**`description`** The actual `[sectionIndex, methodIndex]` as used in the Call

**Returns:** *Uint8Array*

___

###  data

• **get data**(): *Uint8Array*

*Inherited from [Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md).[data](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md#data)*

*Defined in [packages/types/src/primitive/Extrinsic/Extrinsic.ts:142](https://github.com/polkadot-js/api/blob/6bf0d5eea/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L142)*

**`description`** The actual data for the Call

**Returns:** *Uint8Array*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md).[encodedLength](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md#encodedlength)*

*Overrides [Base](../classes/_codec_base_.base.md).[encodedLength](../classes/_codec_base_.base.md#encodedlength)*

*Defined in [packages/types/src/primitive/Extrinsic/Extrinsic.ts:156](https://github.com/polkadot-js/api/blob/6bf0d5eea/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L156)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  era

• **get era**(): *[ExtrinsicEra](../classes/_primitive_extrinsic_extrinsicera_.extrinsicera.md)*

*Inherited from [Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md).[era](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md#era)*

*Defined in [packages/types/src/primitive/Extrinsic/Extrinsic.ts:149](https://github.com/polkadot-js/api/blob/6bf0d5eea/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L149)*

**`description`** The era for this extrinsic

**Returns:** *[ExtrinsicEra](../classes/_primitive_extrinsic_extrinsicera_.extrinsicera.md)*

___

###  hasOrigin

• **get hasOrigin**(): *boolean*

*Inherited from [Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md).[hasOrigin](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md#hasorigin)*

*Defined in [packages/types/src/primitive/Extrinsic/Extrinsic.ts:163](https://github.com/polkadot-js/api/blob/6bf0d5eea/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L163)*

**`description`** `true` is method has `Origin` argument (compatibility with [Call])

**Returns:** *boolean*

___

###  hash

• **get hash**(): *[IHash](_types_.ihash.md)*

*Inherited from [Base](../classes/_codec_base_.base.md).[hash](../classes/_codec_base_.base.md#hash)*

*Defined in [packages/types/src/codec/Base.ts:35](https://github.com/polkadot-js/api/blob/6bf0d5eea/packages/types/src/codec/Base.ts#L35)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Base](../classes/_codec_base_.base.md).[isEmpty](../classes/_codec_base_.base.md#isempty)*

*Defined in [packages/types/src/codec/Base.ts:42](https://github.com/polkadot-js/api/blob/6bf0d5eea/packages/types/src/codec/Base.ts#L42)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  isSigned

• **get isSigned**(): *boolean*

*Inherited from [Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md).[isSigned](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md#issigned)*

*Defined in [packages/types/src/primitive/Extrinsic/Extrinsic.ts:170](https://github.com/polkadot-js/api/blob/6bf0d5eea/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L170)*

**`description`** `true` id the extrinsic is signed

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Inherited from [Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md).[length](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md#length)*

*Defined in [packages/types/src/primitive/Extrinsic/Extrinsic.ts:177](https://github.com/polkadot-js/api/blob/6bf0d5eea/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L177)*

**`description`** The length of the actual data, excluding prefix

**Returns:** *number*

___

###  meta

• **get meta**(): *[FunctionMetadataLatest](_interfaces_metadata_types_.functionmetadatalatest.md)*

*Inherited from [Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md).[meta](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md#meta)*

*Defined in [packages/types/src/primitive/Extrinsic/Extrinsic.ts:184](https://github.com/polkadot-js/api/blob/6bf0d5eea/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L184)*

**`description`** The [FunctionMetadataLatest](_interfaceregistry_.interfaceregistry.md#functionmetadatalatest) that describes the extrinsic

**Returns:** *[FunctionMetadataLatest](_interfaces_metadata_types_.functionmetadatalatest.md)*

___

###  method

• **get method**(): *[Call](_interfaces_runtime_types_.call.md)*

*Inherited from [Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md).[method](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md#method)*

*Defined in [packages/types/src/primitive/Extrinsic/Extrinsic.ts:191](https://github.com/polkadot-js/api/blob/6bf0d5eea/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L191)*

**`description`** The [Call](_interfaces_runtime_types_.call.md) this extrinsic wraps

**Returns:** *[Call](_interfaces_runtime_types_.call.md)*

___

###  nonce

• **get nonce**(): *[Compact](../classes/_codec_compact_.compact.md)‹[Index](_interfaces_runtime_types_.index.md)›*

*Inherited from [Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md).[nonce](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md#nonce)*

*Defined in [packages/types/src/primitive/Extrinsic/Extrinsic.ts:198](https://github.com/polkadot-js/api/blob/6bf0d5eea/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L198)*

**`description`** The nonce for this extrinsic

**Returns:** *[Compact](../classes/_codec_compact_.compact.md)‹[Index](_interfaces_runtime_types_.index.md)›*

___

###  signature

• **get signature**(): *[EcdsaSignature](_interfaces_runtime_types_.ecdsasignature.md) | [Ed25519Signature](_interfaces_runtime_types_.ed25519signature.md) | [Sr25519Signature](_interfaces_runtime_types_.sr25519signature.md)*

*Inherited from [Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md).[signature](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md#signature)*

*Defined in [packages/types/src/primitive/Extrinsic/Extrinsic.ts:205](https://github.com/polkadot-js/api/blob/6bf0d5eea/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L205)*

**`description`** The actual [EcdsaSignature](_interfaces_runtime_types_.ecdsasignature.md), [Ed25519Signature](_interfaces_runtime_types_.ed25519signature.md) or [Sr25519Signature](_interfaces_runtime_types_.sr25519signature.md)

**Returns:** *[EcdsaSignature](_interfaces_runtime_types_.ecdsasignature.md) | [Ed25519Signature](_interfaces_runtime_types_.ed25519signature.md) | [Sr25519Signature](_interfaces_runtime_types_.sr25519signature.md)*

___

###  signer

• **get signer**(): *[Address](_interfaces_runtime_types_.address.md)*

*Inherited from [Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md).[signer](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md#signer)*

*Defined in [packages/types/src/primitive/Extrinsic/Extrinsic.ts:212](https://github.com/polkadot-js/api/blob/6bf0d5eea/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L212)*

**`description`** The [Address](_interfaces_runtime_types_.address.md) that signed

**Returns:** *[Address](_interfaces_runtime_types_.address.md)*

___

###  tip

• **get tip**(): *[Compact](../classes/_codec_compact_.compact.md)‹[Balance](_interfaces_runtime_types_.balance.md)›*

*Inherited from [Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md).[tip](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md#tip)*

*Defined in [packages/types/src/primitive/Extrinsic/Extrinsic.ts:219](https://github.com/polkadot-js/api/blob/6bf0d5eea/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L219)*

**`description`** Forwards compat

**Returns:** *[Compact](../classes/_codec_compact_.compact.md)‹[Balance](_interfaces_runtime_types_.balance.md)›*

___

###  type

• **get type**(): *number*

*Inherited from [Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md).[type](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md#type)*

*Defined in [packages/types/src/primitive/Extrinsic/Extrinsic.ts:226](https://github.com/polkadot-js/api/blob/6bf0d5eea/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L226)*

**`description`** Returns the raw transaction version (not flagged with signing information)

**Returns:** *number*

___

###  version

• **get version**(): *number*

*Inherited from [Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md).[version](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md#version)*

*Defined in [packages/types/src/primitive/Extrinsic/Extrinsic.ts:233](https://github.com/polkadot-js/api/blob/6bf0d5eea/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L233)*

**`description`** Returns the encoded version flag

**Returns:** *number*

## Methods

###  addSignature

▸ **addSignature**(`signer`: [Address](_interfaces_runtime_types_.address.md) | Uint8Array | string, `signature`: Uint8Array | string, `payload`: [ExtrinsicPayloadValue](_types_.extrinsicpayloadvalue.md) | Uint8Array | string): *[Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md)*

*Inherited from [Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md).[addSignature](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md#addsignature)*

*Defined in [packages/types/src/primitive/Extrinsic/Extrinsic.ts:240](https://github.com/polkadot-js/api/blob/6bf0d5eea/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L240)*

**`description`** Injects an already-generated signature into the extrinsic

**Parameters:**

Name | Type |
------ | ------ |
`signer` | [Address](_interfaces_runtime_types_.address.md) &#124; Uint8Array &#124; string |
`signature` | Uint8Array &#124; string |
`payload` | [ExtrinsicPayloadValue](_types_.extrinsicpayloadvalue.md) &#124; Uint8Array &#124; string |

**Returns:** *[Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md)*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Base](../classes/_codec_base_.base.md).[eq](../classes/_codec_base_.base.md#eq)*

*Defined in [packages/types/src/codec/Base.ts:49](https://github.com/polkadot-js/api/blob/6bf0d5eea/packages/types/src/codec/Base.ts#L49)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  sign

▸ **sign**(`account`: [IKeyringPair](_types_.ikeyringpair.md), `options`: [SignatureOptions](_types_.signatureoptions.md)): *[Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md)*

*Inherited from [Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md).[sign](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md#sign)*

*Defined in [packages/types/src/primitive/Extrinsic/Extrinsic.ts:249](https://github.com/polkadot-js/api/blob/6bf0d5eea/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L249)*

**`description`** Sign the extrinsic with a specific keypair

**Parameters:**

Name | Type |
------ | ------ |
`account` | [IKeyringPair](_types_.ikeyringpair.md) |
`options` | [SignatureOptions](_types_.signatureoptions.md) |

**Returns:** *[Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md)*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md).[toHex](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md#tohex)*

*Overrides [Base](../classes/_codec_base_.base.md).[toHex](../classes/_codec_base_.base.md#tohex)*

*Defined in [packages/types/src/primitive/Extrinsic/Extrinsic.ts:258](https://github.com/polkadot-js/api/blob/6bf0d5eea/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L258)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *string*

*Inherited from [Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md).[toJSON](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md#tojson)*

*Overrides [Base](../classes/_codec_base_.base.md).[toJSON](../classes/_codec_base_.base.md#tojson)*

*Defined in [packages/types/src/primitive/Extrinsic/Extrinsic.ts:265](https://github.com/polkadot-js/api/blob/6bf0d5eea/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L265)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md).[toRawType](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md#torawtype)*

*Overrides [Base](../classes/_codec_base_.base.md).[toRawType](../classes/_codec_base_.base.md#torawtype)*

*Defined in [packages/types/src/primitive/Extrinsic/Extrinsic.ts:272](https://github.com/polkadot-js/api/blob/6bf0d5eea/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L272)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Base](../classes/_codec_base_.base.md).[toString](../classes/_codec_base_.base.md#tostring)*

*Defined in [packages/types/src/codec/Base.ts:70](https://github.com/polkadot-js/api/blob/6bf0d5eea/packages/types/src/codec/Base.ts#L70)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from [Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md).[toU8a](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md#tou8a)*

*Overrides [Base](../classes/_codec_base_.base.md).[toU8a](../classes/_codec_base_.base.md#tou8a)*

*Defined in [packages/types/src/primitive/Extrinsic/Extrinsic.ts:280](https://github.com/polkadot-js/api/blob/6bf0d5eea/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L280)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*

___

### `Static` decodeExtrinsic

▸ **decodeExtrinsic**(`registry`: [Registry](_types_.registry.md), `value`: [Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md) | ExtrinsicValue | [AnyU8a](../modules/_types_.md#anyu8a) | [Call](_interfaces_runtime_types_.call.md) | undefined, `version`: number): *ExtrinsicVx | [ExtrinsicUnknown](_interfaces_runtime_types_.extrinsicunknown.md)*

*Inherited from [Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md).[decodeExtrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md#static-decodeextrinsic)*

*Defined in [packages/types/src/primitive/Extrinsic/Extrinsic.ts:71](https://github.com/polkadot-js/api/blob/6bf0d5eea/packages/types/src/primitive/Extrinsic/Extrinsic.ts#L71)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`registry` | [Registry](_types_.registry.md) | - |
`value` | [Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md) &#124; ExtrinsicValue &#124; [AnyU8a](../modules/_types_.md#anyu8a) &#124; [Call](_interfaces_runtime_types_.call.md) &#124; undefined | - |
`version` | number |  DEFAULT_VERSION |

**Returns:** *ExtrinsicVx | [ExtrinsicUnknown](_interfaces_runtime_types_.extrinsicunknown.md)*
