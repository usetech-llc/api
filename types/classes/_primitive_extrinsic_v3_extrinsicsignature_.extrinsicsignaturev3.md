[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["primitive/Extrinsic/v3/ExtrinsicSignature"](../modules/_primitive_extrinsic_v3_extrinsicsignature_.md) › [ExtrinsicSignatureV3](_primitive_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md)

# Class: ExtrinsicSignatureV3 <**S, T, V, E**>

**`name`** GenericExtrinsicSignatureV3

**`description`** 
A container for the [Signature](../interfaces/_interfaceregistry_.interfaceregistry.md#signature) associated with a specific [Extrinsic](_primitive_extrinsic_extrinsic_.extrinsic.md)

## Type parameters

▪ **S**: *TypesDef*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  ↳ [ExtrinsicSignatureV2](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md)

  ↳ **ExtrinsicSignatureV3**

## Implements

* [Codec](../interfaces/_types_codec_.codec.md)
* [IExtrinsicSignature](../interfaces/_types_extrinsic_.iextrinsicsignature.md)

## Index

### Constructors

* [constructor](_primitive_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md#constructor)

### Properties

* [registry](_primitive_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md#registry)

### Accessors

* [Type](_primitive_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md#type)
* [defKeys](_primitive_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md#defkeys)
* [encodedLength](_primitive_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md#encodedlength)
* [era](_primitive_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md#era)
* [hash](_primitive_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md#hash)
* [isEmpty](_primitive_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md#isempty)
* [isSigned](_primitive_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md#issigned)
* [nonce](_primitive_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md#nonce)
* [signature](_primitive_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md#signature)
* [signer](_primitive_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md#signer)
* [tip](_primitive_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md#tip)

### Methods

* [addSignature](_primitive_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md#addsignature)
* [createPayload](_primitive_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md#createpayload)
* [eq](_primitive_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md#eq)
* [get](_primitive_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md#get)
* [getAtIndex](_primitive_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md#getatindex)
* [sign](_primitive_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md#sign)
* [signFake](_primitive_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md#signfake)
* [toArray](_primitive_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md#toarray)
* [toHex](_primitive_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md#tohex)
* [toHuman](_primitive_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md#tohuman)
* [toJSON](_primitive_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md#tojson)
* [toRawType](_primitive_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md#torawtype)
* [toString](_primitive_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md#tostring)
* [toU8a](_primitive_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md#tou8a)
* [typesToMap](_primitive_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md#static-typestomap)
* [with](_primitive_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md#static-with)

## Constructors

###  constructor

\+ **new ExtrinsicSignatureV3**(`registry`: [Registry](../interfaces/_types_registry_.registry.md), `value`: [ExtrinsicSignatureV2](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md) | [Uint8Array](_codec_raw_.raw.md#static-uint8array) | undefined, `__namedParameters`: object): *[ExtrinsicSignatureV3](_primitive_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md)*

*Inherited from [ExtrinsicSignatureV2](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md).[constructor](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#constructor)*

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [packages/types/src/primitive/Extrinsic/v2/ExtrinsicSignature.ts:20](https://github.com/polkadot-js/api/blob/b46093e5d3/packages/types/src/primitive/Extrinsic/v2/ExtrinsicSignature.ts#L20)*

**Parameters:**

▪ **registry**: *[Registry](../interfaces/_types_registry_.registry.md)*

▪ **value**: *[ExtrinsicSignatureV2](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md) | [Uint8Array](_codec_raw_.raw.md#static-uint8array) | undefined*

▪`Default value`  **__namedParameters**: *object*= {}

Name | Type |
------ | ------ |
`isSigned` | undefined &#124; false &#124; true |

**Returns:** *[ExtrinsicSignatureV3](_primitive_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md)*

## Properties

###  registry

• **registry**: *[Registry](../interfaces/_types_registry_.registry.md)*

*Implementation of [IExtrinsicSignature](../interfaces/_types_extrinsic_.iextrinsicsignature.md).[registry](../interfaces/_types_extrinsic_.iextrinsicsignature.md#registry)*

*Inherited from [Struct](_codec_struct_.struct.md).[registry](_codec_struct_.struct.md#registry)*

*Defined in [packages/types/src/codec/Struct.ts:105](https://github.com/polkadot-js/api/blob/b46093e5d3/packages/types/src/codec/Struct.ts#L105)*

## Accessors

###  Type

• **get Type**(): *E*

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [packages/types/src/codec/Struct.ts:167](https://github.com/polkadot-js/api/blob/b46093e5d3/packages/types/src/codec/Struct.ts#L167)*

**`description`** Returns the Type description to sthe structure

**Returns:** *E*

___

###  defKeys

• **get defKeys**(): *string[]*

*Inherited from [Struct](_codec_struct_.struct.md).[defKeys](_codec_struct_.struct.md#defkeys)*

*Defined in [packages/types/src/codec/Struct.ts:145](https://github.com/polkadot-js/api/blob/b46093e5d3/packages/types/src/codec/Struct.ts#L145)*

**`description`** The available keys for this enum

**Returns:** *string[]*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [ExtrinsicSignatureV2](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md).[encodedLength](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#encodedlength)*

*Overrides [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [packages/types/src/primitive/Extrinsic/v2/ExtrinsicSignature.ts:47](https://github.com/polkadot-js/api/blob/b46093e5d3/packages/types/src/primitive/Extrinsic/v2/ExtrinsicSignature.ts#L47)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  era

• **get era**(): *ExtrinsicEra*

*Inherited from [ExtrinsicSignatureV2](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md).[era](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#era)*

*Defined in [packages/types/src/primitive/Extrinsic/v2/ExtrinsicSignature.ts:63](https://github.com/polkadot-js/api/blob/b46093e5d3/packages/types/src/primitive/Extrinsic/v2/ExtrinsicSignature.ts#L63)*

**`description`** The [ExtrinsicEra](_primitive_extrinsic_extrinsicera_.extrinsicera.md) (mortal or immortal) this signature applies to

**Returns:** *ExtrinsicEra*

___

###  hash

• **get hash**(): *[IHash](../interfaces/_types_interfaces_.ihash.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[hash](_codec_struct_.struct.md#hash)*

*Defined in [packages/types/src/codec/Struct.ts:191](https://github.com/polkadot-js/api/blob/b46093e5d3/packages/types/src/codec/Struct.ts#L191)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](../interfaces/_types_interfaces_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [packages/types/src/codec/Struct.ts:152](https://github.com/polkadot-js/api/blob/b46093e5d3/packages/types/src/codec/Struct.ts#L152)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  isSigned

• **get isSigned**(): *boolean*

*Inherited from [ExtrinsicSignatureV2](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md).[isSigned](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#issigned)*

*Defined in [packages/types/src/primitive/Extrinsic/v2/ExtrinsicSignature.ts:56](https://github.com/polkadot-js/api/blob/b46093e5d3/packages/types/src/primitive/Extrinsic/v2/ExtrinsicSignature.ts#L56)*

**`description`** `true` if the signature is valid

**Returns:** *boolean*

___

###  nonce

• **get nonce**(): *[Compact](_codec_compact_.compact.md)‹Index›*

*Inherited from [ExtrinsicSignatureV2](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md).[nonce](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#nonce)*

*Defined in [packages/types/src/primitive/Extrinsic/v2/ExtrinsicSignature.ts:70](https://github.com/polkadot-js/api/blob/b46093e5d3/packages/types/src/primitive/Extrinsic/v2/ExtrinsicSignature.ts#L70)*

**`description`** The [Index](../interfaces/_interfaceregistry_.interfaceregistry.md#index) for the signature

**Returns:** *[Compact](_codec_compact_.compact.md)‹Index›*

___

###  signature

• **get signature**(): *Signature*

*Inherited from [ExtrinsicSignatureV2](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md).[signature](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#signature)*

*Defined in [packages/types/src/primitive/Extrinsic/v2/ExtrinsicSignature.ts:77](https://github.com/polkadot-js/api/blob/b46093e5d3/packages/types/src/primitive/Extrinsic/v2/ExtrinsicSignature.ts#L77)*

**`description`** The actual [Signature](../interfaces/_interfaceregistry_.interfaceregistry.md#signature) hash

**Returns:** *Signature*

___

###  signer

• **get signer**(): *Address*

*Inherited from [ExtrinsicSignatureV2](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md).[signer](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#signer)*

*Defined in [packages/types/src/primitive/Extrinsic/v2/ExtrinsicSignature.ts:84](https://github.com/polkadot-js/api/blob/b46093e5d3/packages/types/src/primitive/Extrinsic/v2/ExtrinsicSignature.ts#L84)*

**`description`** The [Address](_primitive_generic_address_.address.md) that signed

**Returns:** *Address*

___

###  tip

• **get tip**(): *[Compact](_codec_compact_.compact.md)‹Balance›*

*Inherited from [ExtrinsicSignatureV2](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md).[tip](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#tip)*

*Defined in [packages/types/src/primitive/Extrinsic/v2/ExtrinsicSignature.ts:91](https://github.com/polkadot-js/api/blob/b46093e5d3/packages/types/src/primitive/Extrinsic/v2/ExtrinsicSignature.ts#L91)*

**`description`** The [Balance](../interfaces/_interfaceregistry_.interfaceregistry.md#balance) tip

**Returns:** *[Compact](_codec_compact_.compact.md)‹Balance›*

## Methods

###  addSignature

▸ **addSignature**(`signer`: Address | [Uint8Array](_codec_raw_.raw.md#static-uint8array) | string, `signature`: [Uint8Array](_codec_raw_.raw.md#static-uint8array) | string, `payload`: [ExtrinsicPayloadValue](../interfaces/_types_extrinsic_.extrinsicpayloadvalue.md) | [Uint8Array](_codec_raw_.raw.md#static-uint8array) | string): *[IExtrinsicSignature](../interfaces/_types_extrinsic_.iextrinsicsignature.md)*

*Overrides [ExtrinsicSignatureV2](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md).[addSignature](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#addsignature)*

*Defined in [packages/types/src/primitive/Extrinsic/v3/ExtrinsicSignature.ts:22](https://github.com/polkadot-js/api/blob/b46093e5d3/packages/types/src/primitive/Extrinsic/v3/ExtrinsicSignature.ts#L22)*

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

▸ **createPayload**(`method`: Call, `__namedParameters`: object): *[ExtrinsicPayloadV3](_primitive_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md)*

*Overrides [ExtrinsicSignatureV2](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md).[createPayload](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#createpayload)*

*Defined in [packages/types/src/primitive/Extrinsic/v3/ExtrinsicSignature.ts:33](https://github.com/polkadot-js/api/blob/b46093e5d3/packages/types/src/primitive/Extrinsic/v3/ExtrinsicSignature.ts#L33)*

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

**Returns:** *[ExtrinsicPayloadV3](_primitive_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md)*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [IExtrinsicSignature](../interfaces/_types_extrinsic_.iextrinsicsignature.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [packages/types/src/codec/Struct.ts:198](https://github.com/polkadot-js/api/blob/b46093e5d3/packages/types/src/codec/Struct.ts#L198)*

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

*Defined in [packages/types/src/codec/Struct.ts:206](https://github.com/polkadot-js/api/blob/b46093e5d3/packages/types/src/codec/Struct.ts#L206)*

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

*Defined in [packages/types/src/codec/Struct.ts:213](https://github.com/polkadot-js/api/blob/b46093e5d3/packages/types/src/codec/Struct.ts#L213)*

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

*Overrides [ExtrinsicSignatureV2](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md).[sign](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#sign)*

*Defined in [packages/types/src/primitive/Extrinsic/v3/ExtrinsicSignature.ts:48](https://github.com/polkadot-js/api/blob/b46093e5d3/packages/types/src/primitive/Extrinsic/v3/ExtrinsicSignature.ts#L48)*

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

*Overrides [ExtrinsicSignatureV2](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md).[signFake](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#signfake)*

*Defined in [packages/types/src/primitive/Extrinsic/v3/ExtrinsicSignature.ts:59](https://github.com/polkadot-js/api/blob/b46093e5d3/packages/types/src/primitive/Extrinsic/v3/ExtrinsicSignature.ts#L59)*

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

*Defined in [packages/types/src/codec/Struct.ts:220](https://github.com/polkadot-js/api/blob/b46093e5d3/packages/types/src/codec/Struct.ts#L220)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](../interfaces/_types_codec_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [packages/types/src/codec/Struct.ts:227](https://github.com/polkadot-js/api/blob/b46093e5d3/packages/types/src/codec/Struct.ts#L227)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(`isExtended?`: undefined | false | true): *[AnyJsonObject](../interfaces/_types_helpers_.anyjsonobject.md)*

*Implementation of [IExtrinsicSignature](../interfaces/_types_extrinsic_.iextrinsicsignature.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toHuman](_codec_struct_.struct.md#tohuman)*

*Defined in [packages/types/src/codec/Struct.ts:234](https://github.com/polkadot-js/api/blob/b46093e5d3/packages/types/src/codec/Struct.ts#L234)*

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

*Defined in [packages/types/src/codec/Struct.ts:248](https://github.com/polkadot-js/api/blob/b46093e5d3/packages/types/src/codec/Struct.ts#L248)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](../interfaces/_types_helpers_.anyjsonobject.md)*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [IExtrinsicSignature](../interfaces/_types_extrinsic_.iextrinsicsignature.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [packages/types/src/codec/Struct.ts:272](https://github.com/polkadot-js/api/blob/b46093e5d3/packages/types/src/codec/Struct.ts#L272)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [IExtrinsicSignature](../interfaces/_types_extrinsic_.iextrinsicsignature.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [packages/types/src/codec/Struct.ts:281](https://github.com/polkadot-js/api/blob/b46093e5d3/packages/types/src/codec/Struct.ts#L281)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Inherited from [ExtrinsicSignatureV2](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md).[toU8a](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#tou8a)*

*Overrides [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [packages/types/src/primitive/Extrinsic/v2/ExtrinsicSignature.ts:157](https://github.com/polkadot-js/api/blob/b46093e5d3/packages/types/src/primitive/Extrinsic/v2/ExtrinsicSignature.ts#L157)*

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

*Defined in [packages/types/src/codec/Struct.ts:261](https://github.com/polkadot-js/api/blob/b46093e5d3/packages/types/src/codec/Struct.ts#L261)*

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

*Defined in [packages/types/src/codec/Struct.ts:122](https://github.com/polkadot-js/api/blob/b46093e5d3/packages/types/src/codec/Struct.ts#L122)*

**Type parameters:**

▪ **S**: *TypesDef*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | S |

**Returns:** *[Constructor](../interfaces/_types_codec_.constructor.md)‹[Struct](_codec_struct_.struct.md)‹S››*
