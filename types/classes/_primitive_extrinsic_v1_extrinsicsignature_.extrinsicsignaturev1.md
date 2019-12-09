[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["primitive/Extrinsic/v1/ExtrinsicSignature"](../modules/_primitive_extrinsic_v1_extrinsicsignature_.md) › [ExtrinsicSignatureV1](_primitive_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md)

# Class: ExtrinsicSignatureV1 <**S, T, V, E**>

**`name`** ExtrinsicSignatureV1

**`description`** 
A container for the [Signature](../interfaces/_interfaces_runtime_types_.signature.md) associated with a specific [Extrinsic](../interfaces/_interfaces_runtime_types_.extrinsic.md)

## Type parameters

▪ **S**: *TypesDef*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  ↳ [Struct](_codec_struct_.struct.md)

  ↳ **ExtrinsicSignatureV1**

## Implements

* [Codec](../interfaces/_types_.codec.md)
* [IExtrinsicSignature](../interfaces/_types_.iextrinsicsignature.md)

## Index

### Constructors

* [constructor](_primitive_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md#constructor)

### Properties

* [registry](_primitive_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md#registry)

### Accessors

* [Type](_primitive_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md#type)
* [encodedLength](_primitive_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md#encodedlength)
* [era](_primitive_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md#era)
* [hash](_primitive_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md#hash)
* [isEmpty](_primitive_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md#isempty)
* [isSigned](_primitive_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md#issigned)
* [nonce](_primitive_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md#nonce)
* [signature](_primitive_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md#signature)
* [signer](_primitive_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md#signer)
* [tip](_primitive_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md#tip)

### Methods

* [addSignature](_primitive_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md#addsignature)
* [eq](_primitive_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md#eq)
* [get](_primitive_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md#get)
* [getAtIndex](_primitive_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md#getatindex)
* [sign](_primitive_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md#sign)
* [toArray](_primitive_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md#toarray)
* [toHex](_primitive_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md#tohex)
* [toJSON](_primitive_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md#tojson)
* [toRawType](_primitive_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md#torawtype)
* [toString](_primitive_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md#tostring)
* [toU8a](_primitive_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md#tou8a)
* [decodeExtrinsicSignature](_primitive_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md#static-decodeextrinsicsignature)
* [typesToMap](_primitive_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md#static-typestomap)
* [with](_primitive_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md#static-with)

## Constructors

###  constructor

\+ **new ExtrinsicSignatureV1**(`registry`: [Registry](../interfaces/_types_.registry.md), `value?`: [ExtrinsicSignatureV1](_primitive_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md) | Uint8Array, `__namedParameters`: object): *[ExtrinsicSignatureV1](_primitive_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md)*

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [packages/types/src/primitive/Extrinsic/v1/ExtrinsicSignature.ts:20](https://github.com/polkadot-js/api/blob/4653cc0d8/packages/types/src/primitive/Extrinsic/v1/ExtrinsicSignature.ts#L20)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`registry` | [Registry](../interfaces/_types_.registry.md) | - |
`value?` | [ExtrinsicSignatureV1](_primitive_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md) &#124; Uint8Array | - |
`__namedParameters` | object |  {} |

**Returns:** *[ExtrinsicSignatureV1](_primitive_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md)*

## Properties

###  registry

• **registry**: *[Registry](../interfaces/_types_.registry.md)*

*Implementation of [IExtrinsicSignature](../interfaces/_types_.iextrinsicsignature.md).[registry](../interfaces/_types_.iextrinsicsignature.md#registry)*

*Inherited from [Struct](_codec_struct_.struct.md).[registry](_codec_struct_.struct.md#registry)*

*Defined in [packages/types/src/codec/Struct.ts:34](https://github.com/polkadot-js/api/blob/4653cc0d8/packages/types/src/codec/Struct.ts#L34)*

## Accessors

###  Type

• **get Type**(): *E*

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [packages/types/src/codec/Struct.ts:158](https://github.com/polkadot-js/api/blob/4653cc0d8/packages/types/src/codec/Struct.ts#L158)*

**`description`** Returns the Type description to sthe structure

**Returns:** *E*

___

###  encodedLength

• **get encodedLength**(): *number*

*Overrides [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [packages/types/src/primitive/Extrinsic/v1/ExtrinsicSignature.ts:50](https://github.com/polkadot-js/api/blob/4653cc0d8/packages/types/src/primitive/Extrinsic/v1/ExtrinsicSignature.ts#L50)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  era

• **get era**(): *[ExtrinsicEra](../interfaces/_interfaces_runtime_types_.extrinsicera.md)*

*Defined in [packages/types/src/primitive/Extrinsic/v1/ExtrinsicSignature.ts:66](https://github.com/polkadot-js/api/blob/4653cc0d8/packages/types/src/primitive/Extrinsic/v1/ExtrinsicSignature.ts#L66)*

**`description`** The [ExtrinsicEra](../interfaces/_interfaces_runtime_types_.extrinsicera.md) (mortal or immortal) this signature applies to

**Returns:** *[ExtrinsicEra](../interfaces/_interfaces_runtime_types_.extrinsicera.md)*

___

###  hash

• **get hash**(): *[IHash](../interfaces/_types_.ihash.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[hash](_codec_struct_.struct.md#hash)*

*Defined in [packages/types/src/codec/Struct.ts:182](https://github.com/polkadot-js/api/blob/4653cc0d8/packages/types/src/codec/Struct.ts#L182)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](../interfaces/_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [packages/types/src/codec/Struct.ts:143](https://github.com/polkadot-js/api/blob/4653cc0d8/packages/types/src/codec/Struct.ts#L143)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  isSigned

• **get isSigned**(): *boolean*

*Defined in [packages/types/src/primitive/Extrinsic/v1/ExtrinsicSignature.ts:59](https://github.com/polkadot-js/api/blob/4653cc0d8/packages/types/src/primitive/Extrinsic/v1/ExtrinsicSignature.ts#L59)*

**`description`** `true` if the signature is valid

**Returns:** *boolean*

___

###  nonce

• **get nonce**(): *[Compact](_codec_compact_.compact.md)‹[Index](../interfaces/_interfaces_runtime_types_.index.md)›*

*Defined in [packages/types/src/primitive/Extrinsic/v1/ExtrinsicSignature.ts:73](https://github.com/polkadot-js/api/blob/4653cc0d8/packages/types/src/primitive/Extrinsic/v1/ExtrinsicSignature.ts#L73)*

**`description`** The [Index](../interfaces/_interfaces_runtime_types_.index.md) for the signature

**Returns:** *[Compact](_codec_compact_.compact.md)‹[Index](../interfaces/_interfaces_runtime_types_.index.md)›*

___

###  signature

• **get signature**(): *[Signature](../interfaces/_interfaces_runtime_types_.signature.md)*

*Defined in [packages/types/src/primitive/Extrinsic/v1/ExtrinsicSignature.ts:80](https://github.com/polkadot-js/api/blob/4653cc0d8/packages/types/src/primitive/Extrinsic/v1/ExtrinsicSignature.ts#L80)*

**`description`** The actual [Signature](../interfaces/_interfaces_runtime_types_.signature.md) hash

**Returns:** *[Signature](../interfaces/_interfaces_runtime_types_.signature.md)*

___

###  signer

• **get signer**(): *[Address](../interfaces/_interfaces_runtime_types_.address.md)*

*Defined in [packages/types/src/primitive/Extrinsic/v1/ExtrinsicSignature.ts:87](https://github.com/polkadot-js/api/blob/4653cc0d8/packages/types/src/primitive/Extrinsic/v1/ExtrinsicSignature.ts#L87)*

**`description`** The [Address](../interfaces/_interfaces_runtime_types_.address.md) that signed

**Returns:** *[Address](../interfaces/_interfaces_runtime_types_.address.md)*

___

###  tip

• **get tip**(): *[Compact](_codec_compact_.compact.md)‹[Balance](../interfaces/_interfaces_runtime_types_.balance.md)›*

*Defined in [packages/types/src/primitive/Extrinsic/v1/ExtrinsicSignature.ts:94](https://github.com/polkadot-js/api/blob/4653cc0d8/packages/types/src/primitive/Extrinsic/v1/ExtrinsicSignature.ts#L94)*

**`description`** Forwards compat

**Returns:** *[Compact](_codec_compact_.compact.md)‹[Balance](../interfaces/_interfaces_runtime_types_.balance.md)›*

## Methods

###  addSignature

▸ **addSignature**(`signer`: [Address](../interfaces/_interfaces_runtime_types_.address.md) | Uint8Array | string, `signature`: Uint8Array | string, `payload`: [ExtrinsicPayloadValue](../interfaces/_types_.extrinsicpayloadvalue.md) | Uint8Array | string): *[IExtrinsicSignature](../interfaces/_types_.iextrinsicsignature.md)*

*Defined in [packages/types/src/primitive/Extrinsic/v1/ExtrinsicSignature.ts:110](https://github.com/polkadot-js/api/blob/4653cc0d8/packages/types/src/primitive/Extrinsic/v1/ExtrinsicSignature.ts#L110)*

**`description`** Adds a raw signature

**Parameters:**

Name | Type |
------ | ------ |
`signer` | [Address](../interfaces/_interfaces_runtime_types_.address.md) &#124; Uint8Array &#124; string |
`signature` | Uint8Array &#124; string |
`payload` | [ExtrinsicPayloadValue](../interfaces/_types_.extrinsicpayloadvalue.md) &#124; Uint8Array &#124; string |

**Returns:** *[IExtrinsicSignature](../interfaces/_types_.iextrinsicsignature.md)*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [IExtrinsicSignature](../interfaces/_types_.iextrinsicsignature.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [packages/types/src/codec/Struct.ts:189](https://github.com/polkadot-js/api/blob/4653cc0d8/packages/types/src/codec/Struct.ts#L189)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  get

▸ **get**(`name`: keyof S): *[Codec](../interfaces/_types_.codec.md) | undefined*

*Inherited from [Struct](_codec_struct_.struct.md).[get](_codec_struct_.struct.md#get)*

*Overrides void*

*Defined in [packages/types/src/codec/Struct.ts:197](https://github.com/polkadot-js/api/blob/4653cc0d8/packages/types/src/codec/Struct.ts#L197)*

**`description`** Returns a specific names entry in the structure

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | keyof S | The name of the entry to retrieve  |

**Returns:** *[Codec](../interfaces/_types_.codec.md) | undefined*

___

###  getAtIndex

▸ **getAtIndex**(`index`: number): *[Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[getAtIndex](_codec_struct_.struct.md#getatindex)*

*Defined in [packages/types/src/codec/Struct.ts:204](https://github.com/polkadot-js/api/blob/4653cc0d8/packages/types/src/codec/Struct.ts#L204)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *[Codec](../interfaces/_types_.codec.md)*

___

###  sign

▸ **sign**(`method`: [Call](../interfaces/_interfaces_runtime_types_.call.md), `account`: [IKeyringPair](../interfaces/_types_.ikeyringpair.md), `__namedParameters`: object): *[IExtrinsicSignature](../interfaces/_types_.iextrinsicsignature.md)*

*Defined in [packages/types/src/primitive/Extrinsic/v1/ExtrinsicSignature.ts:121](https://github.com/polkadot-js/api/blob/4653cc0d8/packages/types/src/primitive/Extrinsic/v1/ExtrinsicSignature.ts#L121)*

**`description`** Generate a payload and applies the signature from a keypair

**Parameters:**

Name | Type |
------ | ------ |
`method` | [Call](../interfaces/_interfaces_runtime_types_.call.md) |
`account` | [IKeyringPair](../interfaces/_types_.ikeyringpair.md) |
`__namedParameters` | object |

**Returns:** *[IExtrinsicSignature](../interfaces/_types_.iextrinsicsignature.md)*

___

###  toArray

▸ **toArray**(): *[Codec](../interfaces/_types_.codec.md)[]*

*Inherited from [Struct](_codec_struct_.struct.md).[toArray](_codec_struct_.struct.md#toarray)*

*Defined in [packages/types/src/codec/Struct.ts:211](https://github.com/polkadot-js/api/blob/4653cc0d8/packages/types/src/codec/Struct.ts#L211)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](../interfaces/_types_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [packages/types/src/codec/Struct.ts:218](https://github.com/polkadot-js/api/blob/4653cc0d8/packages/types/src/codec/Struct.ts#L218)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

*Implementation of [IExtrinsicSignature](../interfaces/_types_.iextrinsicsignature.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [packages/types/src/codec/Struct.ts:225](https://github.com/polkadot-js/api/blob/4653cc0d8/packages/types/src/codec/Struct.ts#L225)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [IExtrinsicSignature](../interfaces/_types_.iextrinsicsignature.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [packages/types/src/codec/Struct.ts:249](https://github.com/polkadot-js/api/blob/4653cc0d8/packages/types/src/codec/Struct.ts#L249)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [IExtrinsicSignature](../interfaces/_types_.iextrinsicsignature.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [packages/types/src/codec/Struct.ts:258](https://github.com/polkadot-js/api/blob/4653cc0d8/packages/types/src/codec/Struct.ts#L258)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Overrides [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [packages/types/src/primitive/Extrinsic/v1/ExtrinsicSignature.ts:141](https://github.com/polkadot-js/api/blob/4653cc0d8/packages/types/src/primitive/Extrinsic/v1/ExtrinsicSignature.ts#L141)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*

___

### `Static` decodeExtrinsicSignature

▸ **decodeExtrinsicSignature**(`value`: [ExtrinsicSignatureV1](_primitive_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md) | Uint8Array | undefined, `isSigned`: boolean): *[ExtrinsicSignatureV1](_primitive_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md) | Uint8Array*

*Defined in [packages/types/src/primitive/Extrinsic/v1/ExtrinsicSignature.ts:35](https://github.com/polkadot-js/api/blob/4653cc0d8/packages/types/src/primitive/Extrinsic/v1/ExtrinsicSignature.ts#L35)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | [ExtrinsicSignatureV1](_primitive_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md) &#124; Uint8Array &#124; undefined | - |
`isSigned` | boolean | false |

**Returns:** *[ExtrinsicSignatureV1](_primitive_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md) | Uint8Array*

___

### `Static` typesToMap

▸ **typesToMap**(`registry`: [Registry](../interfaces/_types_.registry.md), `Types`: Record‹string, [Constructor](../interfaces/_types_.constructor.md)›): *Record‹string, string›*

*Inherited from [Struct](_codec_struct_.struct.md).[typesToMap](_codec_struct_.struct.md#static-typestomap)*

*Defined in [packages/types/src/codec/Struct.ts:238](https://github.com/polkadot-js/api/blob/4653cc0d8/packages/types/src/codec/Struct.ts#L238)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_types_.registry.md) |
`Types` | Record‹string, [Constructor](../interfaces/_types_.constructor.md)› |

**Returns:** *Record‹string, string›*

___

### `Static` with

▸ **with**<**S**>(`Types`: S): *[Constructor](../interfaces/_types_.constructor.md)‹[Struct](_codec_struct_.struct.md)‹S››*

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#static-with)*

*Defined in [packages/types/src/codec/Struct.ts:120](https://github.com/polkadot-js/api/blob/4653cc0d8/packages/types/src/codec/Struct.ts#L120)*

**Type parameters:**

▪ **S**: *TypesDef*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | S |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹[Struct](_codec_struct_.struct.md)‹S››*
