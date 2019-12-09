[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["primitive/Extrinsic/v4/Extrinsic"](../modules/_primitive_extrinsic_v4_extrinsic_.md) › [ExtrinsicV4](_primitive_extrinsic_v4_extrinsic_.extrinsicv4.md)

# Class: ExtrinsicV4 <**S, T, V, E**>

**`name`** ExtrinsicV4

**`description`** 
The third generation of compact extrinsics

## Type parameters

▪ **S**: *TypesDef*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  ↳ [Struct](_codec_struct_.struct.md)

  ↳ **ExtrinsicV4**

  ↳ [ExtrinsicV4](../interfaces/_interfaces_runtime_types_.extrinsicv4.md)

## Implements

* [Codec](../interfaces/_types_.codec.md)
* [IExtrinsicImpl](../interfaces/_types_.iextrinsicimpl.md)

## Index

### Constructors

* [constructor](_primitive_extrinsic_v4_extrinsic_.extrinsicv4.md#constructor)

### Properties

* [registry](_primitive_extrinsic_v4_extrinsic_.extrinsicv4.md#registry)

### Accessors

* [Type](_primitive_extrinsic_v4_extrinsic_.extrinsicv4.md#type)
* [encodedLength](_primitive_extrinsic_v4_extrinsic_.extrinsicv4.md#encodedlength)
* [hash](_primitive_extrinsic_v4_extrinsic_.extrinsicv4.md#hash)
* [isEmpty](_primitive_extrinsic_v4_extrinsic_.extrinsicv4.md#isempty)
* [method](_primitive_extrinsic_v4_extrinsic_.extrinsicv4.md#method)
* [signature](_primitive_extrinsic_v4_extrinsic_.extrinsicv4.md#signature)
* [version](_primitive_extrinsic_v4_extrinsic_.extrinsicv4.md#version)

### Methods

* [addSignature](_primitive_extrinsic_v4_extrinsic_.extrinsicv4.md#addsignature)
* [eq](_primitive_extrinsic_v4_extrinsic_.extrinsicv4.md#eq)
* [get](_primitive_extrinsic_v4_extrinsic_.extrinsicv4.md#get)
* [getAtIndex](_primitive_extrinsic_v4_extrinsic_.extrinsicv4.md#getatindex)
* [sign](_primitive_extrinsic_v4_extrinsic_.extrinsicv4.md#sign)
* [toArray](_primitive_extrinsic_v4_extrinsic_.extrinsicv4.md#toarray)
* [toHex](_primitive_extrinsic_v4_extrinsic_.extrinsicv4.md#tohex)
* [toJSON](_primitive_extrinsic_v4_extrinsic_.extrinsicv4.md#tojson)
* [toRawType](_primitive_extrinsic_v4_extrinsic_.extrinsicv4.md#torawtype)
* [toString](_primitive_extrinsic_v4_extrinsic_.extrinsicv4.md#tostring)
* [toU8a](_primitive_extrinsic_v4_extrinsic_.extrinsicv4.md#tou8a)
* [decodeExtrinsic](_primitive_extrinsic_v4_extrinsic_.extrinsicv4.md#static-decodeextrinsic)
* [typesToMap](_primitive_extrinsic_v4_extrinsic_.extrinsicv4.md#static-typestomap)
* [with](_primitive_extrinsic_v4_extrinsic_.extrinsicv4.md#static-with)

## Constructors

###  constructor

\+ **new ExtrinsicV4**(`registry`: [Registry](../interfaces/_types_.registry.md), `value?`: Uint8Array | [ExtrinsicValueV4](../interfaces/_primitive_extrinsic_v4_extrinsic_.extrinsicvaluev4.md) | [Call](../interfaces/_interfaces_runtime_types_.call.md), `__namedParameters`: object): *[ExtrinsicV4](_primitive_extrinsic_v4_extrinsic_.extrinsicv4.md)*

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [packages/types/src/primitive/Extrinsic/v4/Extrinsic.ts:27](https://github.com/polkadot-js/api/blob/77bf33b4e/packages/types/src/primitive/Extrinsic/v4/Extrinsic.ts#L27)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`registry` | [Registry](../interfaces/_types_.registry.md) | - |
`value?` | Uint8Array &#124; [ExtrinsicValueV4](../interfaces/_primitive_extrinsic_v4_extrinsic_.extrinsicvaluev4.md) &#124; [Call](../interfaces/_interfaces_runtime_types_.call.md) | - |
`__namedParameters` | object |  {} |

**Returns:** *[ExtrinsicV4](_primitive_extrinsic_v4_extrinsic_.extrinsicv4.md)*

## Properties

###  registry

• **registry**: *[Registry](../interfaces/_types_.registry.md)*

*Implementation of [IExtrinsicImpl](../interfaces/_types_.iextrinsicimpl.md).[registry](../interfaces/_types_.iextrinsicimpl.md#registry)*

*Inherited from [Struct](_codec_struct_.struct.md).[registry](_codec_struct_.struct.md#registry)*

*Defined in [packages/types/src/codec/Struct.ts:34](https://github.com/polkadot-js/api/blob/77bf33b4e/packages/types/src/codec/Struct.ts#L34)*

## Accessors

###  Type

• **get Type**(): *E*

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [packages/types/src/codec/Struct.ts:158](https://github.com/polkadot-js/api/blob/77bf33b4e/packages/types/src/codec/Struct.ts#L158)*

**`description`** Returns the Type description to sthe structure

**Returns:** *E*

___

###  encodedLength

• **get encodedLength**(): *number*

*Overrides [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [packages/types/src/primitive/Extrinsic/v4/Extrinsic.ts:59](https://github.com/polkadot-js/api/blob/77bf33b4e/packages/types/src/primitive/Extrinsic/v4/Extrinsic.ts#L59)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](../interfaces/_types_.ihash.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[hash](_codec_struct_.struct.md#hash)*

*Defined in [packages/types/src/codec/Struct.ts:182](https://github.com/polkadot-js/api/blob/77bf33b4e/packages/types/src/codec/Struct.ts#L182)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](../interfaces/_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [packages/types/src/codec/Struct.ts:143](https://github.com/polkadot-js/api/blob/77bf33b4e/packages/types/src/codec/Struct.ts#L143)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  method

• **get method**(): *[Call](../interfaces/_interfaces_runtime_types_.call.md)*

*Defined in [packages/types/src/primitive/Extrinsic/v4/Extrinsic.ts:66](https://github.com/polkadot-js/api/blob/77bf33b4e/packages/types/src/primitive/Extrinsic/v4/Extrinsic.ts#L66)*

**`description`** The [Call](../interfaces/_interfaces_runtime_types_.call.md) this extrinsic wraps

**Returns:** *[Call](../interfaces/_interfaces_runtime_types_.call.md)*

___

###  signature

• **get signature**(): *[ExtrinsicSignatureV4](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md)*

*Defined in [packages/types/src/primitive/Extrinsic/v4/Extrinsic.ts:73](https://github.com/polkadot-js/api/blob/77bf33b4e/packages/types/src/primitive/Extrinsic/v4/Extrinsic.ts#L73)*

**`description`** The [ExtrinsicSignatureV4](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md)

**Returns:** *[ExtrinsicSignatureV4](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md)*

___

###  version

• **get version**(): *number*

*Defined in [packages/types/src/primitive/Extrinsic/v4/Extrinsic.ts:80](https://github.com/polkadot-js/api/blob/77bf33b4e/packages/types/src/primitive/Extrinsic/v4/Extrinsic.ts#L80)*

**`description`** The version for the signature

**Returns:** *number*

## Methods

###  addSignature

▸ **addSignature**(`signer`: [Address](../interfaces/_interfaces_runtime_types_.address.md) | Uint8Array | string, `signature`: Uint8Array | string, `payload`: [ExtrinsicPayloadValue](../interfaces/_types_.extrinsicpayloadvalue.md) | Uint8Array | string): *[ExtrinsicV4](_primitive_extrinsic_v4_extrinsic_.extrinsicv4.md)*

*Implementation of [IExtrinsicImpl](../interfaces/_types_.iextrinsicimpl.md)*

*Defined in [packages/types/src/primitive/Extrinsic/v4/Extrinsic.ts:87](https://github.com/polkadot-js/api/blob/77bf33b4e/packages/types/src/primitive/Extrinsic/v4/Extrinsic.ts#L87)*

**`description`** Add an [ExtrinsicSignatureV4](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md) to the extrinsic (already generated)

**Parameters:**

Name | Type |
------ | ------ |
`signer` | [Address](../interfaces/_interfaces_runtime_types_.address.md) &#124; Uint8Array &#124; string |
`signature` | Uint8Array &#124; string |
`payload` | [ExtrinsicPayloadValue](../interfaces/_types_.extrinsicpayloadvalue.md) &#124; Uint8Array &#124; string |

**Returns:** *[ExtrinsicV4](_primitive_extrinsic_v4_extrinsic_.extrinsicv4.md)*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [IExtrinsicImpl](../interfaces/_types_.iextrinsicimpl.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [packages/types/src/codec/Struct.ts:189](https://github.com/polkadot-js/api/blob/77bf33b4e/packages/types/src/codec/Struct.ts#L189)*

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

*Defined in [packages/types/src/codec/Struct.ts:197](https://github.com/polkadot-js/api/blob/77bf33b4e/packages/types/src/codec/Struct.ts#L197)*

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

*Defined in [packages/types/src/codec/Struct.ts:204](https://github.com/polkadot-js/api/blob/77bf33b4e/packages/types/src/codec/Struct.ts#L204)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *[Codec](../interfaces/_types_.codec.md)*

___

###  sign

▸ **sign**(`account`: [IKeyringPair](../interfaces/_types_.ikeyringpair.md), `options`: [SignatureOptions](../interfaces/_types_.signatureoptions.md)): *[ExtrinsicV4](_primitive_extrinsic_v4_extrinsic_.extrinsicv4.md)*

*Implementation of [IExtrinsicImpl](../interfaces/_types_.iextrinsicimpl.md)*

*Defined in [packages/types/src/primitive/Extrinsic/v4/Extrinsic.ts:96](https://github.com/polkadot-js/api/blob/77bf33b4e/packages/types/src/primitive/Extrinsic/v4/Extrinsic.ts#L96)*

**`description`** Sign the extrinsic with a specific keypair

**Parameters:**

Name | Type |
------ | ------ |
`account` | [IKeyringPair](../interfaces/_types_.ikeyringpair.md) |
`options` | [SignatureOptions](../interfaces/_types_.signatureoptions.md) |

**Returns:** *[ExtrinsicV4](_primitive_extrinsic_v4_extrinsic_.extrinsicv4.md)*

___

###  toArray

▸ **toArray**(): *[Codec](../interfaces/_types_.codec.md)[]*

*Inherited from [Struct](_codec_struct_.struct.md).[toArray](_codec_struct_.struct.md#toarray)*

*Defined in [packages/types/src/codec/Struct.ts:211](https://github.com/polkadot-js/api/blob/77bf33b4e/packages/types/src/codec/Struct.ts#L211)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](../interfaces/_types_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [packages/types/src/codec/Struct.ts:218](https://github.com/polkadot-js/api/blob/77bf33b4e/packages/types/src/codec/Struct.ts#L218)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

*Implementation of [IExtrinsicImpl](../interfaces/_types_.iextrinsicimpl.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [packages/types/src/codec/Struct.ts:225](https://github.com/polkadot-js/api/blob/77bf33b4e/packages/types/src/codec/Struct.ts#L225)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [IExtrinsicImpl](../interfaces/_types_.iextrinsicimpl.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [packages/types/src/codec/Struct.ts:249](https://github.com/polkadot-js/api/blob/77bf33b4e/packages/types/src/codec/Struct.ts#L249)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [IExtrinsicImpl](../interfaces/_types_.iextrinsicimpl.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [packages/types/src/codec/Struct.ts:258](https://github.com/polkadot-js/api/blob/77bf33b4e/packages/types/src/codec/Struct.ts#L258)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: [BareOpts](../modules/_types_.md#bareopts)): *Uint8Array*

*Implementation of [IExtrinsicImpl](../interfaces/_types_.iextrinsicimpl.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [packages/types/src/codec/Struct.ts:266](https://github.com/polkadot-js/api/blob/77bf33b4e/packages/types/src/codec/Struct.ts#L266)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | [BareOpts](../modules/_types_.md#bareopts) | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*

___

### `Static` decodeExtrinsic

▸ **decodeExtrinsic**(`registry`: [Registry](../interfaces/_types_.registry.md), `value?`: [Call](../interfaces/_interfaces_runtime_types_.call.md) | Uint8Array | [ExtrinsicValueV4](../interfaces/_primitive_extrinsic_v4_extrinsic_.extrinsicvaluev4.md), `isSigned`: boolean): *[ExtrinsicValueV4](../interfaces/_primitive_extrinsic_v4_extrinsic_.extrinsicvaluev4.md)*

*Defined in [packages/types/src/primitive/Extrinsic/v4/Extrinsic.ts:35](https://github.com/polkadot-js/api/blob/77bf33b4e/packages/types/src/primitive/Extrinsic/v4/Extrinsic.ts#L35)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`registry` | [Registry](../interfaces/_types_.registry.md) | - |
`value?` | [Call](../interfaces/_interfaces_runtime_types_.call.md) &#124; Uint8Array &#124; [ExtrinsicValueV4](../interfaces/_primitive_extrinsic_v4_extrinsic_.extrinsicvaluev4.md) | - |
`isSigned` | boolean | false |

**Returns:** *[ExtrinsicValueV4](../interfaces/_primitive_extrinsic_v4_extrinsic_.extrinsicvaluev4.md)*

___

### `Static` typesToMap

▸ **typesToMap**(`registry`: [Registry](../interfaces/_types_.registry.md), `Types`: Record‹string, [Constructor](../interfaces/_types_.constructor.md)›): *Record‹string, string›*

*Inherited from [Struct](_codec_struct_.struct.md).[typesToMap](_codec_struct_.struct.md#static-typestomap)*

*Defined in [packages/types/src/codec/Struct.ts:238](https://github.com/polkadot-js/api/blob/77bf33b4e/packages/types/src/codec/Struct.ts#L238)*

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

*Defined in [packages/types/src/codec/Struct.ts:120](https://github.com/polkadot-js/api/blob/77bf33b4e/packages/types/src/codec/Struct.ts#L120)*

**Type parameters:**

▪ **S**: *TypesDef*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | S |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹[Struct](_codec_struct_.struct.md)‹S››*
