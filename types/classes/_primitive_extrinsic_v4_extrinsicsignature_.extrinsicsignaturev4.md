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

* Codec
* IExtrinsicSignature

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
* [toJSON](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md#tojson)
* [toRawType](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md#torawtype)
* [toString](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md#tostring)
* [toU8a](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md#tou8a)
* [typesToMap](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md#static-typestomap)
* [with](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md#static-with)

## Constructors

###  constructor

\+ **new ExtrinsicSignatureV4**(`registry`: Registry, `value`: [ExtrinsicSignatureV4](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md) | [Uint8Array](_codec_raw_.raw.md#static-uint8array) | undefined, `__namedParameters`: object): *[ExtrinsicSignatureV4](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md)*

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [packages/types/src/primitive/Extrinsic/v4/ExtrinsicSignature.ts:22](https://github.com/polkadot-js/api/blob/0e7c508d7f/packages/types/src/primitive/Extrinsic/v4/ExtrinsicSignature.ts#L22)*

**Parameters:**

▪ **registry**: *Registry*

▪ **value**: *[ExtrinsicSignatureV4](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md) | [Uint8Array](_codec_raw_.raw.md#static-uint8array) | undefined*

▪`Default value`  **__namedParameters**: *object*= {}

Name | Type |
------ | ------ |
`isSigned` | undefined &#124; false &#124; true |

**Returns:** *[ExtrinsicSignatureV4](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md)*

## Properties

###  registry

• **registry**: *Registry*

*Inherited from [Struct](_codec_struct_.struct.md).[registry](_codec_struct_.struct.md#registry)*

*Defined in [packages/types/src/codec/Struct.ts:34](https://github.com/polkadot-js/api/blob/0e7c508d7f/packages/types/src/codec/Struct.ts#L34)*

## Accessors

###  Type

• **get Type**(): *E*

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [packages/types/src/codec/Struct.ts:167](https://github.com/polkadot-js/api/blob/0e7c508d7f/packages/types/src/codec/Struct.ts#L167)*

**`description`** Returns the Type description to sthe structure

**Returns:** *E*

___

###  defKeys

• **get defKeys**(): *string[]*

*Inherited from [Struct](_codec_struct_.struct.md).[defKeys](_codec_struct_.struct.md#defkeys)*

*Defined in [packages/types/src/codec/Struct.ts:145](https://github.com/polkadot-js/api/blob/0e7c508d7f/packages/types/src/codec/Struct.ts#L145)*

**`description`** The available keys for this enum

**Returns:** *string[]*

___

###  encodedLength

• **get encodedLength**(): *number*

*Overrides [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [packages/types/src/primitive/Extrinsic/v4/ExtrinsicSignature.ts:47](https://github.com/polkadot-js/api/blob/0e7c508d7f/packages/types/src/primitive/Extrinsic/v4/ExtrinsicSignature.ts#L47)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  era

• **get era**(): *ExtrinsicEra*

*Defined in [packages/types/src/primitive/Extrinsic/v4/ExtrinsicSignature.ts:63](https://github.com/polkadot-js/api/blob/0e7c508d7f/packages/types/src/primitive/Extrinsic/v4/ExtrinsicSignature.ts#L63)*

**`description`** The [ExtrinsicEra](_primitive_extrinsic_extrinsicera_.extrinsicera.md) (mortal or immortal) this signature applies to

**Returns:** *ExtrinsicEra*

___

###  hash

• **get hash**(): *IHash*

*Inherited from [Struct](_codec_struct_.struct.md).[hash](_codec_struct_.struct.md#hash)*

*Defined in [packages/types/src/codec/Struct.ts:191](https://github.com/polkadot-js/api/blob/0e7c508d7f/packages/types/src/codec/Struct.ts#L191)*

**`description`** returns a hash of the contents

**Returns:** *IHash*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [packages/types/src/codec/Struct.ts:152](https://github.com/polkadot-js/api/blob/0e7c508d7f/packages/types/src/codec/Struct.ts#L152)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  isSigned

• **get isSigned**(): *boolean*

*Defined in [packages/types/src/primitive/Extrinsic/v4/ExtrinsicSignature.ts:56](https://github.com/polkadot-js/api/blob/0e7c508d7f/packages/types/src/primitive/Extrinsic/v4/ExtrinsicSignature.ts#L56)*

**`description`** `true` if the signature is valid

**Returns:** *boolean*

___

###  multiSignature

• **get multiSignature**(): *MultiSignature*

*Defined in [packages/types/src/primitive/Extrinsic/v4/ExtrinsicSignature.ts:84](https://github.com/polkadot-js/api/blob/0e7c508d7f/packages/types/src/primitive/Extrinsic/v4/ExtrinsicSignature.ts#L84)*

**`description`** The raw [MultiSignature](../interfaces/_interfaceregistry_.interfaceregistry.md#multisignature)

**Returns:** *MultiSignature*

___

###  nonce

• **get nonce**(): *[Compact](_codec_compact_.compact.md)‹Index›*

*Defined in [packages/types/src/primitive/Extrinsic/v4/ExtrinsicSignature.ts:70](https://github.com/polkadot-js/api/blob/0e7c508d7f/packages/types/src/primitive/Extrinsic/v4/ExtrinsicSignature.ts#L70)*

**`description`** The [Index](../interfaces/_interfaceregistry_.interfaceregistry.md#index) for the signature

**Returns:** *[Compact](_codec_compact_.compact.md)‹Index›*

___

###  signature

• **get signature**(): *EcdsaSignature | Ed25519Signature | Sr25519Signature*

*Defined in [packages/types/src/primitive/Extrinsic/v4/ExtrinsicSignature.ts:77](https://github.com/polkadot-js/api/blob/0e7c508d7f/packages/types/src/primitive/Extrinsic/v4/ExtrinsicSignature.ts#L77)*

**`description`** The actual [EcdsaSignature](../interfaces/_interfaceregistry_.interfaceregistry.md#ecdsasignature), [Ed25519Signature](../interfaces/_interfaceregistry_.interfaceregistry.md#ed25519signature) or [Sr25519Signature](../interfaces/_interfaceregistry_.interfaceregistry.md#sr25519signature)

**Returns:** *EcdsaSignature | Ed25519Signature | Sr25519Signature*

___

###  signer

• **get signer**(): *Address*

*Defined in [packages/types/src/primitive/Extrinsic/v4/ExtrinsicSignature.ts:91](https://github.com/polkadot-js/api/blob/0e7c508d7f/packages/types/src/primitive/Extrinsic/v4/ExtrinsicSignature.ts#L91)*

**`description`** The [Address](_primitive_generic_address_.address.md) that signed

**Returns:** *Address*

___

###  tip

• **get tip**(): *[Compact](_codec_compact_.compact.md)‹Balance›*

*Defined in [packages/types/src/primitive/Extrinsic/v4/ExtrinsicSignature.ts:98](https://github.com/polkadot-js/api/blob/0e7c508d7f/packages/types/src/primitive/Extrinsic/v4/ExtrinsicSignature.ts#L98)*

**`description`** The [Balance](../interfaces/_interfaceregistry_.interfaceregistry.md#balance) tip

**Returns:** *[Compact](_codec_compact_.compact.md)‹Balance›*

## Methods

###  addSignature

▸ **addSignature**(`signer`: Address | [Uint8Array](_codec_raw_.raw.md#static-uint8array) | string, `signature`: [Uint8Array](_codec_raw_.raw.md#static-uint8array) | string, `payload`: ExtrinsicPayloadValue | [Uint8Array](_codec_raw_.raw.md#static-uint8array) | string): *IExtrinsicSignature*

*Defined in [packages/types/src/primitive/Extrinsic/v4/ExtrinsicSignature.ts:115](https://github.com/polkadot-js/api/blob/0e7c508d7f/packages/types/src/primitive/Extrinsic/v4/ExtrinsicSignature.ts#L115)*

**`description`** Adds a raw signature

**Parameters:**

Name | Type |
------ | ------ |
`signer` | Address &#124; [Uint8Array](_codec_raw_.raw.md#static-uint8array) &#124; string |
`signature` | [Uint8Array](_codec_raw_.raw.md#static-uint8array) &#124; string |
`payload` | ExtrinsicPayloadValue &#124; [Uint8Array](_codec_raw_.raw.md#static-uint8array) &#124; string |

**Returns:** *IExtrinsicSignature*

___

###  createPayload

▸ **createPayload**(`method`: Call, `__namedParameters`: object): *[ExtrinsicPayloadV4](_primitive_extrinsic_v4_extrinsicpayload_.extrinsicpayloadv4.md)*

*Defined in [packages/types/src/primitive/Extrinsic/v4/ExtrinsicSignature.ts:126](https://github.com/polkadot-js/api/blob/0e7c508d7f/packages/types/src/primitive/Extrinsic/v4/ExtrinsicSignature.ts#L126)*

**`description`** Creates a payload from the supplied options

**Parameters:**

▪ **method**: *Call*

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`blockHash` | string &#124; [Uint8Array](_codec_raw_.raw.md#static-uint8array)‹› &#124; number[] |
`era` | undefined &#124; IExtrinsicEra |
`genesisHash` | string &#124; [Uint8Array](_codec_raw_.raw.md#static-uint8array)‹› &#124; number[] |
`nonce` | string &#124; number &#124; [Uint8Array](_codec_raw_.raw.md#static-uint8array)‹› &#124; BN‹› |
`runtimeVersion` | object |
`tip` | undefined &#124; string &#124; number &#124; [Uint8Array](_codec_raw_.raw.md#static-uint8array)‹› &#124; BN‹› |

**Returns:** *[ExtrinsicPayloadV4](_primitive_extrinsic_v4_extrinsicpayload_.extrinsicpayloadv4.md)*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [packages/types/src/codec/Struct.ts:198](https://github.com/polkadot-js/api/blob/0e7c508d7f/packages/types/src/codec/Struct.ts#L198)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  get

▸ **get**(`name`: keyof S): *Codec | undefined*

*Inherited from [Struct](_codec_struct_.struct.md).[get](_codec_struct_.struct.md#get)*

*Overrides [BTreeMap](_codec_btreemap_.btreemap.md).[get](_codec_btreemap_.btreemap.md#get)*

*Defined in [packages/types/src/codec/Struct.ts:206](https://github.com/polkadot-js/api/blob/0e7c508d7f/packages/types/src/codec/Struct.ts#L206)*

**`description`** Returns a specific names entry in the structure

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | keyof S | The name of the entry to retrieve  |

**Returns:** *Codec | undefined*

___

###  getAtIndex

▸ **getAtIndex**(`index`: number): *Codec*

*Inherited from [Struct](_codec_struct_.struct.md).[getAtIndex](_codec_struct_.struct.md#getatindex)*

*Defined in [packages/types/src/codec/Struct.ts:213](https://github.com/polkadot-js/api/blob/0e7c508d7f/packages/types/src/codec/Struct.ts#L213)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *Codec*

___

###  sign

▸ **sign**(`method`: Call, `account`: IKeyringPair, `options`: SignatureOptions): *IExtrinsicSignature*

*Defined in [packages/types/src/primitive/Extrinsic/v4/ExtrinsicSignature.ts:141](https://github.com/polkadot-js/api/blob/0e7c508d7f/packages/types/src/primitive/Extrinsic/v4/ExtrinsicSignature.ts#L141)*

**`description`** Generate a payload and applies the signature from a keypair

**Parameters:**

Name | Type |
------ | ------ |
`method` | Call |
`account` | IKeyringPair |
`options` | SignatureOptions |

**Returns:** *IExtrinsicSignature*

___

###  signFake

▸ **signFake**(`method`: Call, `address`: Address | [Uint8Array](_codec_raw_.raw.md#static-uint8array) | string, `options`: SignatureOptions): *IExtrinsicSignature*

*Defined in [packages/types/src/primitive/Extrinsic/v4/ExtrinsicSignature.ts:152](https://github.com/polkadot-js/api/blob/0e7c508d7f/packages/types/src/primitive/Extrinsic/v4/ExtrinsicSignature.ts#L152)*

**`description`** Generate a payload and applies a fake signature

**Parameters:**

Name | Type |
------ | ------ |
`method` | Call |
`address` | Address &#124; [Uint8Array](_codec_raw_.raw.md#static-uint8array) &#124; string |
`options` | SignatureOptions |

**Returns:** *IExtrinsicSignature*

___

###  toArray

▸ **toArray**(): *Codec[]*

*Inherited from [Struct](_codec_struct_.struct.md).[toArray](_codec_struct_.struct.md#toarray)*

*Defined in [packages/types/src/codec/Struct.ts:220](https://github.com/polkadot-js/api/blob/0e7c508d7f/packages/types/src/codec/Struct.ts#L220)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *Codec[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [packages/types/src/codec/Struct.ts:227](https://github.com/polkadot-js/api/blob/0e7c508d7f/packages/types/src/codec/Struct.ts#L227)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *AnyJsonObject | string*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [packages/types/src/codec/Struct.ts:234](https://github.com/polkadot-js/api/blob/0e7c508d7f/packages/types/src/codec/Struct.ts#L234)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *AnyJsonObject | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [packages/types/src/codec/Struct.ts:258](https://github.com/polkadot-js/api/blob/0e7c508d7f/packages/types/src/codec/Struct.ts#L258)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [packages/types/src/codec/Struct.ts:267](https://github.com/polkadot-js/api/blob/0e7c508d7f/packages/types/src/codec/Struct.ts#L267)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Overrides [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [packages/types/src/primitive/Extrinsic/v4/ExtrinsicSignature.ts:164](https://github.com/polkadot-js/api/blob/0e7c508d7f/packages/types/src/primitive/Extrinsic/v4/ExtrinsicSignature.ts#L164)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

___

### `Static` typesToMap

▸ **typesToMap**(`registry`: Registry, `Types`: Record‹string, Constructor›): *Record‹string, string›*

*Inherited from [Struct](_codec_struct_.struct.md).[typesToMap](_codec_struct_.struct.md#static-typestomap)*

*Defined in [packages/types/src/codec/Struct.ts:247](https://github.com/polkadot-js/api/blob/0e7c508d7f/packages/types/src/codec/Struct.ts#L247)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | Registry |
`Types` | Record‹string, Constructor› |

**Returns:** *Record‹string, string›*

___

### `Static` with

▸ **with**<**S**>(`Types`: S): *Constructor‹[Struct](_codec_struct_.struct.md)‹S››*

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#static-with)*

*Defined in [packages/types/src/codec/Struct.ts:122](https://github.com/polkadot-js/api/blob/0e7c508d7f/packages/types/src/codec/Struct.ts#L122)*

**Type parameters:**

▪ **S**: *TypesDef*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | S |

**Returns:** *Constructor‹[Struct](_codec_struct_.struct.md)‹S››*
