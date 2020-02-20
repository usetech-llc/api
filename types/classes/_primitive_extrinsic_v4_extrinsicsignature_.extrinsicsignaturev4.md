[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["primitive/Extrinsic/v4/ExtrinsicSignature"](../modules/_primitive_extrinsic_v4_extrinsicsignature_.md) › [ExtrinsicSignatureV4](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md)

# Class: ExtrinsicSignatureV4 <**S, T, V, E**>

**`name`** GenericExtrinsicSignatureV4

**`description`** 
A container for the [Signature](../interfaces/_interfaceregistry_.interfaceregistry.md#signature) associated with a specific [Extrinsic](_primitive_extrinsic_extrinsic_.extrinsic.md)

## Type parameters

▪ **S**: *TypesDef*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  ↳ [Struct](_codec_struct_.struct.md)

  ↳ **ExtrinsicSignatureV4**

## Implements

* [Codec](../interfaces/_types_codec_.codec.md)
* [IExtrinsicSignature](../interfaces/_types_extrinsic_.iextrinsicsignature.md)

## Index

### Constructors

* [constructor](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md#constructor)

### Properties

* [registry](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md#registry)

### Accessors

* [Type](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md#type)
* [defKeys](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md#defkeys)
* [encodedLength](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md#encodedlength)
* [era](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md#era)
* [hash](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md#hash)
* [isEmpty](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md#isempty)
* [isSigned](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md#issigned)
* [multiSignature](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md#multisignature)
* [nonce](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md#nonce)
* [signature](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md#signature)
* [signer](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md#signer)
* [tip](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md#tip)

### Methods

* [addSignature](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md#addsignature)
* [createPayload](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md#createpayload)
* [eq](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md#eq)
* [get](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md#get)
* [getAtIndex](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md#getatindex)
* [sign](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md#sign)
* [signFake](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md#signfake)
* [toArray](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md#toarray)
* [toHex](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md#tohex)
* [toHuman](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md#tohuman)
* [toJSON](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md#tojson)
* [toRawType](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md#torawtype)
* [toString](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md#tostring)
* [toU8a](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md#tou8a)
* [typesToMap](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md#static-typestomap)
* [with](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md#static-with)

## Constructors

###  constructor

\+ **new ExtrinsicSignatureV4**(`registry`: [Registry](../interfaces/_types_registry_.registry.md), `value`: [ExtrinsicSignatureV4](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md) | [Uint8Array](_codec_raw_.raw.md#static-uint8array) | undefined, `__namedParameters`: object): *[ExtrinsicSignatureV4](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md)*

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [packages/types/src/primitive/Extrinsic/v4/ExtrinsicSignature.ts:22](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/primitive/Extrinsic/v4/ExtrinsicSignature.ts#L22)*

**Parameters:**

▪ **registry**: *[Registry](../interfaces/_types_registry_.registry.md)*

▪ **value**: *[ExtrinsicSignatureV4](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md) | [Uint8Array](_codec_raw_.raw.md#static-uint8array) | undefined*

▪`Default value`  **__namedParameters**: *object*= {}

Name | Type |
------ | ------ |
`isSigned` | undefined &#124; false &#124; true |

**Returns:** *[ExtrinsicSignatureV4](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md)*

## Properties

###  registry

• **registry**: *[Registry](../interfaces/_types_registry_.registry.md)*

*Implementation of [IExtrinsicSignature](../interfaces/_types_extrinsic_.iextrinsicsignature.md).[registry](../interfaces/_types_extrinsic_.iextrinsicsignature.md#registry)*

*Inherited from [Struct](_codec_struct_.struct.md).[registry](_codec_struct_.struct.md#registry)*

*Defined in [packages/types/src/codec/Struct.ts:106](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/codec/Struct.ts#L106)*

## Accessors

###  Type

• **get Type**(): *E*

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [packages/types/src/codec/Struct.ts:168](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/codec/Struct.ts#L168)*

**`description`** Returns the Type description to sthe structure

**Returns:** *E*

___

###  defKeys

• **get defKeys**(): *string[]*

*Inherited from [Struct](_codec_struct_.struct.md).[defKeys](_codec_struct_.struct.md#defkeys)*

*Defined in [packages/types/src/codec/Struct.ts:146](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/codec/Struct.ts#L146)*

**`description`** The available keys for this enum

**Returns:** *string[]*

___

###  encodedLength

• **get encodedLength**(): *number*

*Overrides [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [packages/types/src/primitive/Extrinsic/v4/ExtrinsicSignature.ts:47](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/primitive/Extrinsic/v4/ExtrinsicSignature.ts#L47)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  era

• **get era**(): *ExtrinsicEra*

*Defined in [packages/types/src/primitive/Extrinsic/v4/ExtrinsicSignature.ts:63](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/primitive/Extrinsic/v4/ExtrinsicSignature.ts#L63)*

**`description`** The [ExtrinsicEra](_primitive_extrinsic_extrinsicera_.extrinsicera.md) (mortal or immortal) this signature applies to

**Returns:** *ExtrinsicEra*

___

###  hash

• **get hash**(): *H256*

*Inherited from [Struct](_codec_struct_.struct.md).[hash](_codec_struct_.struct.md#hash)*

*Defined in [packages/types/src/codec/Struct.ts:192](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/codec/Struct.ts#L192)*

**`description`** returns a hash of the contents

**Returns:** *H256*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [packages/types/src/codec/Struct.ts:153](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/codec/Struct.ts#L153)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  isSigned

• **get isSigned**(): *boolean*

*Defined in [packages/types/src/primitive/Extrinsic/v4/ExtrinsicSignature.ts:56](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/primitive/Extrinsic/v4/ExtrinsicSignature.ts#L56)*

**`description`** `true` if the signature is valid

**Returns:** *boolean*

___

###  multiSignature

• **get multiSignature**(): *MultiSignature*

*Defined in [packages/types/src/primitive/Extrinsic/v4/ExtrinsicSignature.ts:84](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/primitive/Extrinsic/v4/ExtrinsicSignature.ts#L84)*

**`description`** The raw [MultiSignature](../interfaces/_interfaceregistry_.interfaceregistry.md#multisignature)

**Returns:** *MultiSignature*

___

###  nonce

• **get nonce**(): *[Compact](_codec_compact_.compact.md)‹Index›*

*Defined in [packages/types/src/primitive/Extrinsic/v4/ExtrinsicSignature.ts:70](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/primitive/Extrinsic/v4/ExtrinsicSignature.ts#L70)*

**`description`** The [Index](../interfaces/_interfaceregistry_.interfaceregistry.md#index) for the signature

**Returns:** *[Compact](_codec_compact_.compact.md)‹Index›*

___

###  signature

• **get signature**(): *EcdsaSignature | Ed25519Signature | Sr25519Signature*

*Defined in [packages/types/src/primitive/Extrinsic/v4/ExtrinsicSignature.ts:77](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/primitive/Extrinsic/v4/ExtrinsicSignature.ts#L77)*

**`description`** The actual [EcdsaSignature](../interfaces/_interfaceregistry_.interfaceregistry.md#ecdsasignature), [Ed25519Signature](../interfaces/_interfaceregistry_.interfaceregistry.md#ed25519signature) or [Sr25519Signature](../interfaces/_interfaceregistry_.interfaceregistry.md#sr25519signature)

**Returns:** *EcdsaSignature | Ed25519Signature | Sr25519Signature*

___

###  signer

• **get signer**(): *Address*

*Defined in [packages/types/src/primitive/Extrinsic/v4/ExtrinsicSignature.ts:91](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/primitive/Extrinsic/v4/ExtrinsicSignature.ts#L91)*

**`description`** The [Address](_primitive_generic_address_.address.md) that signed

**Returns:** *Address*

___

###  tip

• **get tip**(): *[Compact](_codec_compact_.compact.md)‹Balance›*

*Defined in [packages/types/src/primitive/Extrinsic/v4/ExtrinsicSignature.ts:98](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/primitive/Extrinsic/v4/ExtrinsicSignature.ts#L98)*

**`description`** The [Balance](../interfaces/_interfaceregistry_.interfaceregistry.md#balance) tip

**Returns:** *[Compact](_codec_compact_.compact.md)‹Balance›*

## Methods

###  addSignature

▸ **addSignature**(`signer`: Address | [Uint8Array](_codec_raw_.raw.md#static-uint8array) | string, `signature`: [Uint8Array](_codec_raw_.raw.md#static-uint8array) | string, `payload`: [ExtrinsicPayloadValue](../interfaces/_types_extrinsic_.extrinsicpayloadvalue.md) | [Uint8Array](_codec_raw_.raw.md#static-uint8array) | string): *[IExtrinsicSignature](../interfaces/_types_extrinsic_.iextrinsicsignature.md)*

*Defined in [packages/types/src/primitive/Extrinsic/v4/ExtrinsicSignature.ts:115](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/primitive/Extrinsic/v4/ExtrinsicSignature.ts#L115)*

**`description`** Adds a raw signature

**Parameters:**

Name | Type |
------ | ------ |
`signer` | Address &#124; [Uint8Array](_codec_raw_.raw.md#static-uint8array) &#124; string |
`signature` | [Uint8Array](_codec_raw_.raw.md#static-uint8array) &#124; string |
`payload` | [ExtrinsicPayloadValue](../interfaces/_types_extrinsic_.extrinsicpayloadvalue.md) &#124; [Uint8Array](_codec_raw_.raw.md#static-uint8array) &#124; string |

**Returns:** *[IExtrinsicSignature](../interfaces/_types_extrinsic_.iextrinsicsignature.md)*

___

###  createPayload

▸ **createPayload**(`method`: Call, `__namedParameters`: object): *[ExtrinsicPayloadV4](_primitive_extrinsic_v4_extrinsicpayload_.extrinsicpayloadv4.md)*

*Defined in [packages/types/src/primitive/Extrinsic/v4/ExtrinsicSignature.ts:126](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/primitive/Extrinsic/v4/ExtrinsicSignature.ts#L126)*

**`description`** Creates a payload from the supplied options

**Parameters:**

▪ **method**: *Call*

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`blockHash` | string &#124; [Uint8Array](_codec_raw_.raw.md#static-uint8array)‹› &#124; number[] |
`era` | undefined &#124; [IExtrinsicEra](../interfaces/_types_extrinsic_.iextrinsicera.md) |
`genesisHash` | string &#124; [Uint8Array](_codec_raw_.raw.md#static-uint8array)‹› &#124; number[] |
`nonce` | string &#124; number &#124; [Uint8Array](_codec_raw_.raw.md#static-uint8array)‹› &#124; BN‹› |
`runtimeVersion` | object |
`tip` | undefined &#124; string &#124; number &#124; [Uint8Array](_codec_raw_.raw.md#static-uint8array)‹› &#124; BN‹› |

**Returns:** *[ExtrinsicPayloadV4](_primitive_extrinsic_v4_extrinsicpayload_.extrinsicpayloadv4.md)*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [IExtrinsicSignature](../interfaces/_types_extrinsic_.iextrinsicsignature.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [packages/types/src/codec/Struct.ts:199](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/codec/Struct.ts#L199)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  get

▸ **get**(`name`: keyof S): *[Codec](../interfaces/_types_codec_.codec.md) | undefined*

*Inherited from [Struct](_codec_struct_.struct.md).[get](_codec_struct_.struct.md#get)*

*Overrides [BTreeMap](_codec_btreemap_.btreemap.md).[get](_codec_btreemap_.btreemap.md#get)*

*Defined in [packages/types/src/codec/Struct.ts:207](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/codec/Struct.ts#L207)*

**`description`** Returns a specific names entry in the structure

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | keyof S | The name of the entry to retrieve  |

**Returns:** *[Codec](../interfaces/_types_codec_.codec.md) | undefined*

___

###  getAtIndex

▸ **getAtIndex**(`index`: number): *[Codec](../interfaces/_types_codec_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[getAtIndex](_codec_struct_.struct.md#getatindex)*

*Defined in [packages/types/src/codec/Struct.ts:214](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/codec/Struct.ts#L214)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *[Codec](../interfaces/_types_codec_.codec.md)*

___

###  sign

▸ **sign**(`method`: Call, `account`: [IKeyringPair](../interfaces/_types_interfaces_.ikeyringpair.md), `options`: [SignatureOptions](../interfaces/_types_extrinsic_.signatureoptions.md)): *[IExtrinsicSignature](../interfaces/_types_extrinsic_.iextrinsicsignature.md)*

*Implementation of [IExtrinsicSignature](../interfaces/_types_extrinsic_.iextrinsicsignature.md)*

*Defined in [packages/types/src/primitive/Extrinsic/v4/ExtrinsicSignature.ts:141](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/primitive/Extrinsic/v4/ExtrinsicSignature.ts#L141)*

**`description`** Generate a payload and applies the signature from a keypair

**Parameters:**

Name | Type |
------ | ------ |
`method` | Call |
`account` | [IKeyringPair](../interfaces/_types_interfaces_.ikeyringpair.md) |
`options` | [SignatureOptions](../interfaces/_types_extrinsic_.signatureoptions.md) |

**Returns:** *[IExtrinsicSignature](../interfaces/_types_extrinsic_.iextrinsicsignature.md)*

___

###  signFake

▸ **signFake**(`method`: Call, `address`: Address | [Uint8Array](_codec_raw_.raw.md#static-uint8array) | string, `options`: [SignatureOptions](../interfaces/_types_extrinsic_.signatureoptions.md)): *[IExtrinsicSignature](../interfaces/_types_extrinsic_.iextrinsicsignature.md)*

*Implementation of [IExtrinsicSignature](../interfaces/_types_extrinsic_.iextrinsicsignature.md)*

*Defined in [packages/types/src/primitive/Extrinsic/v4/ExtrinsicSignature.ts:152](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/primitive/Extrinsic/v4/ExtrinsicSignature.ts#L152)*

**`description`** Generate a payload and applies a fake signature

**Parameters:**

Name | Type |
------ | ------ |
`method` | Call |
`address` | Address &#124; [Uint8Array](_codec_raw_.raw.md#static-uint8array) &#124; string |
`options` | [SignatureOptions](../interfaces/_types_extrinsic_.signatureoptions.md) |

**Returns:** *[IExtrinsicSignature](../interfaces/_types_extrinsic_.iextrinsicsignature.md)*

___

###  toArray

▸ **toArray**(): *[Codec](../interfaces/_types_codec_.codec.md)[]*

*Inherited from [Struct](_codec_struct_.struct.md).[toArray](_codec_struct_.struct.md#toarray)*

*Defined in [packages/types/src/codec/Struct.ts:221](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/codec/Struct.ts#L221)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](../interfaces/_types_codec_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [packages/types/src/codec/Struct.ts:228](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/codec/Struct.ts#L228)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(`isExtended?`: undefined | false | true): *[AnyJsonObject](../interfaces/_types_helpers_.anyjsonobject.md)*

*Implementation of [IExtrinsicSignature](../interfaces/_types_extrinsic_.iextrinsicsignature.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toHuman](_codec_struct_.struct.md#tohuman)*

*Defined in [packages/types/src/codec/Struct.ts:235](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/codec/Struct.ts#L235)*

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

**Parameters:**

Name | Type |
------ | ------ |
`isExtended?` | undefined &#124; false &#124; true |

**Returns:** *[AnyJsonObject](../interfaces/_types_helpers_.anyjsonobject.md)*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](../interfaces/_types_helpers_.anyjsonobject.md)*

*Implementation of [IExtrinsicSignature](../interfaces/_types_extrinsic_.iextrinsicsignature.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [packages/types/src/codec/Struct.ts:249](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/codec/Struct.ts#L249)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](../interfaces/_types_helpers_.anyjsonobject.md)*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [IExtrinsicSignature](../interfaces/_types_extrinsic_.iextrinsicsignature.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [packages/types/src/codec/Struct.ts:273](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/codec/Struct.ts#L273)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [IExtrinsicSignature](../interfaces/_types_extrinsic_.iextrinsicsignature.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [packages/types/src/codec/Struct.ts:282](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/codec/Struct.ts#L282)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Overrides [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [packages/types/src/primitive/Extrinsic/v4/ExtrinsicSignature.ts:164](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/primitive/Extrinsic/v4/ExtrinsicSignature.ts#L164)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

___

### `Static` typesToMap

▸ **typesToMap**(`registry`: [Registry](../interfaces/_types_registry_.registry.md), `Types`: Record‹string, [Constructor](../interfaces/_types_codec_.constructor.md)›): *Record‹string, string›*

*Inherited from [Struct](_codec_struct_.struct.md).[typesToMap](_codec_struct_.struct.md#static-typestomap)*

*Defined in [packages/types/src/codec/Struct.ts:262](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/codec/Struct.ts#L262)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_types_registry_.registry.md) |
`Types` | Record‹string, [Constructor](../interfaces/_types_codec_.constructor.md)› |

**Returns:** *Record‹string, string›*

___

### `Static` with

▸ **with**<**S**>(`Types`: S): *[Constructor](../interfaces/_types_codec_.constructor.md)‹[Struct](_codec_struct_.struct.md)‹S››*

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#static-with)*

*Defined in [packages/types/src/codec/Struct.ts:123](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/codec/Struct.ts#L123)*

**Type parameters:**

▪ **S**: *TypesDef*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | S |

**Returns:** *[Constructor](../interfaces/_types_codec_.constructor.md)‹[Struct](_codec_struct_.struct.md)‹S››*
