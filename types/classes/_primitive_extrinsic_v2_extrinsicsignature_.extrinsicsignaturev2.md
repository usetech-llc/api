[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["primitive/Extrinsic/v2/ExtrinsicSignature"](../modules/_primitive_extrinsic_v2_extrinsicsignature_.md) › [ExtrinsicSignatureV2](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md)

# Class: ExtrinsicSignatureV2 <**S, T, V, E**>

**`name`** ExtrinsicSignatureV2

**`description`** 
A container for the [Signature](../interfaces/_interfaceregistry_.interfaceregistry.md#signature) associated with a specific [Extrinsic](_primitive_extrinsic_extrinsic_.extrinsic.md)

## Type parameters

▪ **S**: *TypesDef*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  ↳ [Struct](_codec_struct_.struct.md)

  ↳ **ExtrinsicSignatureV2**

  ↳ [ExtrinsicSignatureV3](_primitive_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md)

## Implements

* Codec
* IExtrinsicSignature

## Index

### Constructors

* [constructor](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#constructor)

### Properties

* [registry](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#registry)

### Accessors

* [Type](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#type)
* [encodedLength](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#encodedlength)
* [era](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#era)
* [hash](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#hash)
* [isEmpty](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#isempty)
* [isSigned](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#issigned)
* [nonce](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#nonce)
* [signature](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#signature)
* [signer](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#signer)
* [tip](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#tip)

### Methods

* [addSignature](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#addsignature)
* [createPayload](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#createpayload)
* [eq](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#eq)
* [get](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#get)
* [getAtIndex](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#getatindex)
* [sign](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#sign)
* [signFake](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#signfake)
* [toArray](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#toarray)
* [toHex](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#tohex)
* [toJSON](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#tojson)
* [toRawType](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#torawtype)
* [toString](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#tostring)
* [toU8a](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#tou8a)
* [decodeExtrinsicSignature](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#static-decodeextrinsicsignature)
* [typesToMap](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#static-typestomap)
* [with](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#static-with)

## Constructors

###  constructor

\+ **new ExtrinsicSignatureV2**(`registry`: Registry, `value`: [ExtrinsicSignatureV2](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md) | [Uint8Array](_codec_raw_.raw.md#static-uint8array) | undefined, `__namedParameters`: object): *[ExtrinsicSignatureV2](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md)*

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [packages/types/src/primitive/Extrinsic/v2/ExtrinsicSignature.ts:20](https://github.com/polkadot-js/api/blob/6e2ad7789e/packages/types/src/primitive/Extrinsic/v2/ExtrinsicSignature.ts#L20)*

**Parameters:**

▪ **registry**: *Registry*

▪ **value**: *[ExtrinsicSignatureV2](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md) | [Uint8Array](_codec_raw_.raw.md#static-uint8array) | undefined*

▪`Default value`  **__namedParameters**: *object*= {}

Name | Type |
------ | ------ |
`isSigned` | undefined &#124; false &#124; true |

**Returns:** *[ExtrinsicSignatureV2](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md)*

## Properties

###  registry

• **registry**: *Registry*

*Inherited from [Struct](_codec_struct_.struct.md).[registry](_codec_struct_.struct.md#registry)*

*Defined in [packages/types/src/codec/Struct.ts:34](https://github.com/polkadot-js/api/blob/6e2ad7789e/packages/types/src/codec/Struct.ts#L34)*

## Accessors

###  Type

• **get Type**(): *E*

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [packages/types/src/codec/Struct.ts:158](https://github.com/polkadot-js/api/blob/6e2ad7789e/packages/types/src/codec/Struct.ts#L158)*

**`description`** Returns the Type description to sthe structure

**Returns:** *E*

___

###  encodedLength

• **get encodedLength**(): *number*

*Overrides [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [packages/types/src/primitive/Extrinsic/v2/ExtrinsicSignature.ts:46](https://github.com/polkadot-js/api/blob/6e2ad7789e/packages/types/src/primitive/Extrinsic/v2/ExtrinsicSignature.ts#L46)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  era

• **get era**(): *ExtrinsicEra*

*Defined in [packages/types/src/primitive/Extrinsic/v2/ExtrinsicSignature.ts:62](https://github.com/polkadot-js/api/blob/6e2ad7789e/packages/types/src/primitive/Extrinsic/v2/ExtrinsicSignature.ts#L62)*

**`description`** The [ExtrinsicEra](_primitive_extrinsic_extrinsicera_.extrinsicera.md) (mortal or immortal) this signature applies to

**Returns:** *ExtrinsicEra*

___

###  hash

• **get hash**(): *IHash*

*Inherited from [Struct](_codec_struct_.struct.md).[hash](_codec_struct_.struct.md#hash)*

*Defined in [packages/types/src/codec/Struct.ts:182](https://github.com/polkadot-js/api/blob/6e2ad7789e/packages/types/src/codec/Struct.ts#L182)*

**`description`** returns a hash of the contents

**Returns:** *IHash*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [packages/types/src/codec/Struct.ts:143](https://github.com/polkadot-js/api/blob/6e2ad7789e/packages/types/src/codec/Struct.ts#L143)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  isSigned

• **get isSigned**(): *boolean*

*Defined in [packages/types/src/primitive/Extrinsic/v2/ExtrinsicSignature.ts:55](https://github.com/polkadot-js/api/blob/6e2ad7789e/packages/types/src/primitive/Extrinsic/v2/ExtrinsicSignature.ts#L55)*

**`description`** `true` if the signature is valid

**Returns:** *boolean*

___

###  nonce

• **get nonce**(): *[Compact](_codec_compact_.compact.md)‹Index›*

*Defined in [packages/types/src/primitive/Extrinsic/v2/ExtrinsicSignature.ts:69](https://github.com/polkadot-js/api/blob/6e2ad7789e/packages/types/src/primitive/Extrinsic/v2/ExtrinsicSignature.ts#L69)*

**`description`** The [Index](../interfaces/_interfaceregistry_.interfaceregistry.md#index) for the signature

**Returns:** *[Compact](_codec_compact_.compact.md)‹Index›*

___

###  signature

• **get signature**(): *Signature*

*Defined in [packages/types/src/primitive/Extrinsic/v2/ExtrinsicSignature.ts:76](https://github.com/polkadot-js/api/blob/6e2ad7789e/packages/types/src/primitive/Extrinsic/v2/ExtrinsicSignature.ts#L76)*

**`description`** The actual [Signature](../interfaces/_interfaceregistry_.interfaceregistry.md#signature) hash

**Returns:** *Signature*

___

###  signer

• **get signer**(): *Address*

*Defined in [packages/types/src/primitive/Extrinsic/v2/ExtrinsicSignature.ts:83](https://github.com/polkadot-js/api/blob/6e2ad7789e/packages/types/src/primitive/Extrinsic/v2/ExtrinsicSignature.ts#L83)*

**`description`** The [Address](_primitive_generic_address_.address.md) that signed

**Returns:** *Address*

___

###  tip

• **get tip**(): *[Compact](_codec_compact_.compact.md)‹Balance›*

*Defined in [packages/types/src/primitive/Extrinsic/v2/ExtrinsicSignature.ts:90](https://github.com/polkadot-js/api/blob/6e2ad7789e/packages/types/src/primitive/Extrinsic/v2/ExtrinsicSignature.ts#L90)*

**`description`** The [Balance](../interfaces/_interfaceregistry_.interfaceregistry.md#balance) tip

**Returns:** *[Compact](_codec_compact_.compact.md)‹Balance›*

## Methods

###  addSignature

▸ **addSignature**(`signer`: Address | [Uint8Array](_codec_raw_.raw.md#static-uint8array) | string, `signature`: [Uint8Array](_codec_raw_.raw.md#static-uint8array) | string, `payload`: ExtrinsicPayloadValue | [Uint8Array](_codec_raw_.raw.md#static-uint8array) | string): *IExtrinsicSignature*

*Defined in [packages/types/src/primitive/Extrinsic/v2/ExtrinsicSignature.ts:107](https://github.com/polkadot-js/api/blob/6e2ad7789e/packages/types/src/primitive/Extrinsic/v2/ExtrinsicSignature.ts#L107)*

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

▸ **createPayload**(`method`: Call, `__namedParameters`: object): *[ExtrinsicPayloadV2](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md)*

*Defined in [packages/types/src/primitive/Extrinsic/v2/ExtrinsicSignature.ts:118](https://github.com/polkadot-js/api/blob/6e2ad7789e/packages/types/src/primitive/Extrinsic/v2/ExtrinsicSignature.ts#L118)*

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
`tip` | undefined &#124; string &#124; number &#124; [Uint8Array](_codec_raw_.raw.md#static-uint8array)‹› &#124; BN‹› |

**Returns:** *[ExtrinsicPayloadV2](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md)*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [packages/types/src/codec/Struct.ts:189](https://github.com/polkadot-js/api/blob/6e2ad7789e/packages/types/src/codec/Struct.ts#L189)*

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

*Defined in [packages/types/src/codec/Struct.ts:197](https://github.com/polkadot-js/api/blob/6e2ad7789e/packages/types/src/codec/Struct.ts#L197)*

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

*Defined in [packages/types/src/codec/Struct.ts:204](https://github.com/polkadot-js/api/blob/6e2ad7789e/packages/types/src/codec/Struct.ts#L204)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *Codec*

___

###  sign

▸ **sign**(`method`: Call, `account`: IKeyringPair, `options`: SignatureOptions): *IExtrinsicSignature*

*Defined in [packages/types/src/primitive/Extrinsic/v2/ExtrinsicSignature.ts:133](https://github.com/polkadot-js/api/blob/6e2ad7789e/packages/types/src/primitive/Extrinsic/v2/ExtrinsicSignature.ts#L133)*

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

*Defined in [packages/types/src/primitive/Extrinsic/v2/ExtrinsicSignature.ts:144](https://github.com/polkadot-js/api/blob/6e2ad7789e/packages/types/src/primitive/Extrinsic/v2/ExtrinsicSignature.ts#L144)*

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

*Defined in [packages/types/src/codec/Struct.ts:211](https://github.com/polkadot-js/api/blob/6e2ad7789e/packages/types/src/codec/Struct.ts#L211)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *Codec[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [packages/types/src/codec/Struct.ts:218](https://github.com/polkadot-js/api/blob/6e2ad7789e/packages/types/src/codec/Struct.ts#L218)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *AnyJsonObject | string*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [packages/types/src/codec/Struct.ts:225](https://github.com/polkadot-js/api/blob/6e2ad7789e/packages/types/src/codec/Struct.ts#L225)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *AnyJsonObject | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [packages/types/src/codec/Struct.ts:249](https://github.com/polkadot-js/api/blob/6e2ad7789e/packages/types/src/codec/Struct.ts#L249)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [packages/types/src/codec/Struct.ts:258](https://github.com/polkadot-js/api/blob/6e2ad7789e/packages/types/src/codec/Struct.ts#L258)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Overrides [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [packages/types/src/primitive/Extrinsic/v2/ExtrinsicSignature.ts:156](https://github.com/polkadot-js/api/blob/6e2ad7789e/packages/types/src/primitive/Extrinsic/v2/ExtrinsicSignature.ts#L156)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

___

### `Static` decodeExtrinsicSignature

▸ **decodeExtrinsicSignature**(`value`: [ExtrinsicSignatureV2](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md) | [Uint8Array](_codec_raw_.raw.md#static-uint8array) | undefined, `isSigned`: boolean): *[ExtrinsicSignatureV2](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md) | [Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Defined in [packages/types/src/primitive/Extrinsic/v2/ExtrinsicSignature.ts:31](https://github.com/polkadot-js/api/blob/6e2ad7789e/packages/types/src/primitive/Extrinsic/v2/ExtrinsicSignature.ts#L31)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | [ExtrinsicSignatureV2](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md) &#124; [Uint8Array](_codec_raw_.raw.md#static-uint8array) &#124; undefined | - |
`isSigned` | boolean | false |

**Returns:** *[ExtrinsicSignatureV2](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md) | [Uint8Array](_codec_raw_.raw.md#static-uint8array)*

___

### `Static` typesToMap

▸ **typesToMap**(`registry`: Registry, `Types`: Record‹string, Constructor›): *Record‹string, string›*

*Inherited from [Struct](_codec_struct_.struct.md).[typesToMap](_codec_struct_.struct.md#static-typestomap)*

*Defined in [packages/types/src/codec/Struct.ts:238](https://github.com/polkadot-js/api/blob/6e2ad7789e/packages/types/src/codec/Struct.ts#L238)*

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

*Defined in [packages/types/src/codec/Struct.ts:120](https://github.com/polkadot-js/api/blob/6e2ad7789e/packages/types/src/codec/Struct.ts#L120)*

**Type parameters:**

▪ **S**: *TypesDef*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | S |

**Returns:** *Constructor‹[Struct](_codec_struct_.struct.md)‹S››*
