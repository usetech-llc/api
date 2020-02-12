[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["primitive/Extrinsic/v3/Extrinsic"](../modules/_primitive_extrinsic_v3_extrinsic_.md) › [ExtrinsicV3](_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md)

# Class: ExtrinsicV3 <**S, T, V, E**>

**`name`** GenericExtrinsicV3

**`description`** 
The third generation of compact extrinsics

## Type parameters

▪ **S**: *TypesDef*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  ↳ [Struct](_codec_struct_.struct.md)

  ↳ **ExtrinsicV3**

## Implements

* Codec
* IExtrinsicImpl

## Index

### Constructors

* [constructor](_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md#constructor)

### Properties

* [registry](_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md#registry)

### Accessors

* [Type](_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md#type)
* [defKeys](_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md#defkeys)
* [encodedLength](_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md#encodedlength)
* [hash](_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md#hash)
* [isEmpty](_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md#isempty)
* [method](_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md#method)
* [signature](_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md#signature)
* [version](_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md#version)

### Methods

* [addSignature](_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md#addsignature)
* [eq](_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md#eq)
* [get](_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md#get)
* [getAtIndex](_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md#getatindex)
* [sign](_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md#sign)
* [signFake](_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md#signfake)
* [toArray](_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md#toarray)
* [toHex](_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md#tohex)
* [toJSON](_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md#tojson)
* [toRawType](_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md#torawtype)
* [toString](_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md#tostring)
* [toU8a](_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md#tou8a)
* [typesToMap](_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md#static-typestomap)
* [with](_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md#static-with)

## Constructors

###  constructor

\+ **new ExtrinsicV3**(`registry`: Registry, `value?`: [Uint8Array](_codec_raw_.raw.md#static-uint8array) | [ExtrinsicValueV3](../interfaces/_primitive_extrinsic_v3_extrinsic_.extrinsicvaluev3.md) | Call, `__namedParameters`: object): *[ExtrinsicV3](_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md)*

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [packages/types/src/primitive/Extrinsic/v3/Extrinsic.ts:26](https://github.com/polkadot-js/api/blob/d7eb40caf5/packages/types/src/primitive/Extrinsic/v3/Extrinsic.ts#L26)*

**Parameters:**

▪ **registry**: *Registry*

▪`Optional`  **value**: *[Uint8Array](_codec_raw_.raw.md#static-uint8array) | [ExtrinsicValueV3](../interfaces/_primitive_extrinsic_v3_extrinsic_.extrinsicvaluev3.md) | Call*

▪`Default value`  **__namedParameters**: *object*= {}

Name | Type |
------ | ------ |
`isSigned` | undefined &#124; false &#124; true |

**Returns:** *[ExtrinsicV3](_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md)*

## Properties

###  registry

• **registry**: *Registry*

*Inherited from [Struct](_codec_struct_.struct.md).[registry](_codec_struct_.struct.md#registry)*

*Defined in [packages/types/src/codec/Struct.ts:34](https://github.com/polkadot-js/api/blob/d7eb40caf5/packages/types/src/codec/Struct.ts#L34)*

## Accessors

###  Type

• **get Type**(): *E*

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [packages/types/src/codec/Struct.ts:167](https://github.com/polkadot-js/api/blob/d7eb40caf5/packages/types/src/codec/Struct.ts#L167)*

**`description`** Returns the Type description to sthe structure

**Returns:** *E*

___

###  defKeys

• **get defKeys**(): *string[]*

*Inherited from [Struct](_codec_struct_.struct.md).[defKeys](_codec_struct_.struct.md#defkeys)*

*Defined in [packages/types/src/codec/Struct.ts:145](https://github.com/polkadot-js/api/blob/d7eb40caf5/packages/types/src/codec/Struct.ts#L145)*

**`description`** The available keys for this enum

**Returns:** *string[]*

___

###  encodedLength

• **get encodedLength**(): *number*

*Overrides [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [packages/types/src/primitive/Extrinsic/v3/Extrinsic.ts:57](https://github.com/polkadot-js/api/blob/d7eb40caf5/packages/types/src/primitive/Extrinsic/v3/Extrinsic.ts#L57)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *IHash*

*Inherited from [Struct](_codec_struct_.struct.md).[hash](_codec_struct_.struct.md#hash)*

*Defined in [packages/types/src/codec/Struct.ts:191](https://github.com/polkadot-js/api/blob/d7eb40caf5/packages/types/src/codec/Struct.ts#L191)*

**`description`** returns a hash of the contents

**Returns:** *IHash*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [packages/types/src/codec/Struct.ts:152](https://github.com/polkadot-js/api/blob/d7eb40caf5/packages/types/src/codec/Struct.ts#L152)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  method

• **get method**(): *Call*

*Defined in [packages/types/src/primitive/Extrinsic/v3/Extrinsic.ts:64](https://github.com/polkadot-js/api/blob/d7eb40caf5/packages/types/src/primitive/Extrinsic/v3/Extrinsic.ts#L64)*

**`description`** The [Call](_primitive_generic_call_.call.md) this extrinsic wraps

**Returns:** *Call*

___

###  signature

• **get signature**(): *ExtrinsicSignatureV3*

*Defined in [packages/types/src/primitive/Extrinsic/v3/Extrinsic.ts:71](https://github.com/polkadot-js/api/blob/d7eb40caf5/packages/types/src/primitive/Extrinsic/v3/Extrinsic.ts#L71)*

**`description`** The [ExtrinsicSignatureV3](_primitive_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md)

**Returns:** *ExtrinsicSignatureV3*

___

###  version

• **get version**(): *number*

*Defined in [packages/types/src/primitive/Extrinsic/v3/Extrinsic.ts:78](https://github.com/polkadot-js/api/blob/d7eb40caf5/packages/types/src/primitive/Extrinsic/v3/Extrinsic.ts#L78)*

**`description`** The version for the signature

**Returns:** *number*

## Methods

###  addSignature

▸ **addSignature**(`signer`: Address | [Uint8Array](_codec_raw_.raw.md#static-uint8array) | string, `signature`: [Uint8Array](_codec_raw_.raw.md#static-uint8array) | string, `payload`: ExtrinsicPayloadValue | [Uint8Array](_codec_raw_.raw.md#static-uint8array) | string): *[ExtrinsicV3](_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md)*

*Defined in [packages/types/src/primitive/Extrinsic/v3/Extrinsic.ts:85](https://github.com/polkadot-js/api/blob/d7eb40caf5/packages/types/src/primitive/Extrinsic/v3/Extrinsic.ts#L85)*

**`description`** Add an [ExtrinsicSignatureV3](_primitive_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md) to the extrinsic (already generated)

**Parameters:**

Name | Type |
------ | ------ |
`signer` | Address &#124; [Uint8Array](_codec_raw_.raw.md#static-uint8array) &#124; string |
`signature` | [Uint8Array](_codec_raw_.raw.md#static-uint8array) &#124; string |
`payload` | ExtrinsicPayloadValue &#124; [Uint8Array](_codec_raw_.raw.md#static-uint8array) &#124; string |

**Returns:** *[ExtrinsicV3](_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md)*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [packages/types/src/codec/Struct.ts:198](https://github.com/polkadot-js/api/blob/d7eb40caf5/packages/types/src/codec/Struct.ts#L198)*

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

*Defined in [packages/types/src/codec/Struct.ts:206](https://github.com/polkadot-js/api/blob/d7eb40caf5/packages/types/src/codec/Struct.ts#L206)*

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

*Defined in [packages/types/src/codec/Struct.ts:213](https://github.com/polkadot-js/api/blob/d7eb40caf5/packages/types/src/codec/Struct.ts#L213)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *Codec*

___

###  sign

▸ **sign**(`account`: IKeyringPair, `options`: SignatureOptions): *[ExtrinsicV3](_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md)*

*Defined in [packages/types/src/primitive/Extrinsic/v3/Extrinsic.ts:94](https://github.com/polkadot-js/api/blob/d7eb40caf5/packages/types/src/primitive/Extrinsic/v3/Extrinsic.ts#L94)*

**`description`** Sign the extrinsic with a specific keypair

**Parameters:**

Name | Type |
------ | ------ |
`account` | IKeyringPair |
`options` | SignatureOptions |

**Returns:** *[ExtrinsicV3](_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md)*

___

###  signFake

▸ **signFake**(`signer`: Address | [Uint8Array](_codec_raw_.raw.md#static-uint8array) | string, `options`: SignatureOptions): *[ExtrinsicV3](_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md)*

*Defined in [packages/types/src/primitive/Extrinsic/v3/Extrinsic.ts:103](https://github.com/polkadot-js/api/blob/d7eb40caf5/packages/types/src/primitive/Extrinsic/v3/Extrinsic.ts#L103)*

**`describe`** Adds a fake signature to the extrinsic

**Parameters:**

Name | Type |
------ | ------ |
`signer` | Address &#124; [Uint8Array](_codec_raw_.raw.md#static-uint8array) &#124; string |
`options` | SignatureOptions |

**Returns:** *[ExtrinsicV3](_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md)*

___

###  toArray

▸ **toArray**(): *Codec[]*

*Inherited from [Struct](_codec_struct_.struct.md).[toArray](_codec_struct_.struct.md#toarray)*

*Defined in [packages/types/src/codec/Struct.ts:220](https://github.com/polkadot-js/api/blob/d7eb40caf5/packages/types/src/codec/Struct.ts#L220)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *Codec[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [packages/types/src/codec/Struct.ts:227](https://github.com/polkadot-js/api/blob/d7eb40caf5/packages/types/src/codec/Struct.ts#L227)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *AnyJsonObject | string*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [packages/types/src/codec/Struct.ts:234](https://github.com/polkadot-js/api/blob/d7eb40caf5/packages/types/src/codec/Struct.ts#L234)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *AnyJsonObject | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [packages/types/src/codec/Struct.ts:258](https://github.com/polkadot-js/api/blob/d7eb40caf5/packages/types/src/codec/Struct.ts#L258)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [packages/types/src/codec/Struct.ts:267](https://github.com/polkadot-js/api/blob/d7eb40caf5/packages/types/src/codec/Struct.ts#L267)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: BareOpts): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [packages/types/src/codec/Struct.ts:275](https://github.com/polkadot-js/api/blob/d7eb40caf5/packages/types/src/codec/Struct.ts#L275)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | BareOpts | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

___

### `Static` typesToMap

▸ **typesToMap**(`registry`: Registry, `Types`: Record‹string, Constructor›): *Record‹string, string›*

*Inherited from [Struct](_codec_struct_.struct.md).[typesToMap](_codec_struct_.struct.md#static-typestomap)*

*Defined in [packages/types/src/codec/Struct.ts:247](https://github.com/polkadot-js/api/blob/d7eb40caf5/packages/types/src/codec/Struct.ts#L247)*

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

*Defined in [packages/types/src/codec/Struct.ts:122](https://github.com/polkadot-js/api/blob/d7eb40caf5/packages/types/src/codec/Struct.ts#L122)*

**Type parameters:**

▪ **S**: *TypesDef*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | S |

**Returns:** *Constructor‹[Struct](_codec_struct_.struct.md)‹S››*
