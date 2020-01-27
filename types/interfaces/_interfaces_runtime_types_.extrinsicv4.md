[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/runtime/types"](../modules/_interfaces_runtime_types_.md) › [ExtrinsicV4](_interfaces_runtime_types_.extrinsicv4.md)

# Interface: ExtrinsicV4 <**S, T, V, E**>

GenericExtrinsicV4

## Type parameters

▪ **S**: *TypesDef*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  ↳ [ExtrinsicV4](../classes/_primitive_extrinsic_v4_extrinsic_.extrinsicv4.md)

  ↳ **ExtrinsicV4**

## Implements

* [Codec](_types_.codec.md)
* [IExtrinsicImpl](_types_.iextrinsicimpl.md)

## Index

### Constructors

* [constructor](_interfaces_runtime_types_.extrinsicv4.md#constructor)

### Properties

* [registry](_interfaces_runtime_types_.extrinsicv4.md#registry)
* [size](_interfaces_runtime_types_.extrinsicv4.md#size)

### Accessors

* [Type](_interfaces_runtime_types_.extrinsicv4.md#type)
* [encodedLength](_interfaces_runtime_types_.extrinsicv4.md#encodedlength)
* [hash](_interfaces_runtime_types_.extrinsicv4.md#hash)
* [isEmpty](_interfaces_runtime_types_.extrinsicv4.md#isempty)
* [method](_interfaces_runtime_types_.extrinsicv4.md#method)
* [signature](_interfaces_runtime_types_.extrinsicv4.md#signature)
* [version](_interfaces_runtime_types_.extrinsicv4.md#version)

### Methods

* [addSignature](_interfaces_runtime_types_.extrinsicv4.md#addsignature)
* [clear](_interfaces_runtime_types_.extrinsicv4.md#clear)
* [delete](_interfaces_runtime_types_.extrinsicv4.md#delete)
* [eq](_interfaces_runtime_types_.extrinsicv4.md#eq)
* [forEach](_interfaces_runtime_types_.extrinsicv4.md#foreach)
* [get](_interfaces_runtime_types_.extrinsicv4.md#get)
* [getAtIndex](_interfaces_runtime_types_.extrinsicv4.md#getatindex)
* [has](_interfaces_runtime_types_.extrinsicv4.md#has)
* [set](_interfaces_runtime_types_.extrinsicv4.md#set)
* [sign](_interfaces_runtime_types_.extrinsicv4.md#sign)
* [signFake](_interfaces_runtime_types_.extrinsicv4.md#signfake)
* [toArray](_interfaces_runtime_types_.extrinsicv4.md#toarray)
* [toHex](_interfaces_runtime_types_.extrinsicv4.md#tohex)
* [toJSON](_interfaces_runtime_types_.extrinsicv4.md#tojson)
* [toRawType](_interfaces_runtime_types_.extrinsicv4.md#torawtype)
* [toString](_interfaces_runtime_types_.extrinsicv4.md#tostring)
* [toU8a](_interfaces_runtime_types_.extrinsicv4.md#tou8a)
* [decodeExtrinsic](_interfaces_runtime_types_.extrinsicv4.md#static-decodeextrinsic)
* [typesToMap](_interfaces_runtime_types_.extrinsicv4.md#static-typestomap)
* [with](_interfaces_runtime_types_.extrinsicv4.md#static-with)

## Constructors

###  constructor

\+ **new ExtrinsicV4**(`registry`: [Registry](_types_.registry.md), `value?`: [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) | [ExtrinsicValueV4](_primitive_extrinsic_v4_extrinsic_.extrinsicvaluev4.md) | [Call](_interfaces_runtime_types_.call.md), `__namedParameters`: object): *[ExtrinsicV4](_interfaces_runtime_types_.extrinsicv4.md)*

*Inherited from [ExtrinsicV4](_interfaces_runtime_types_.extrinsicv4.md).[constructor](_interfaces_runtime_types_.extrinsicv4.md#constructor)*

*Overrides [Struct](../classes/_codec_struct_.struct.md).[constructor](../classes/_codec_struct_.struct.md#constructor)*

*Defined in [packages/types/src/primitive/Extrinsic/v4/Extrinsic.ts:27](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/primitive/Extrinsic/v4/Extrinsic.ts#L27)*

**Parameters:**

▪ **registry**: *[Registry](_types_.registry.md)*

▪`Optional`  **value**: *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) | [ExtrinsicValueV4](_primitive_extrinsic_v4_extrinsic_.extrinsicvaluev4.md) | [Call](_interfaces_runtime_types_.call.md)*

▪`Default value`  **__namedParameters**: *object*= {}

Name | Type |
------ | ------ |
`isSigned` | undefined &#124; false &#124; true |

**Returns:** *[ExtrinsicV4](_interfaces_runtime_types_.extrinsicv4.md)*

## Properties

###  registry

• **registry**: *[Registry](_types_.registry.md)*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[registry](../classes/_codec_struct_.struct.md#registry)*

*Defined in [packages/types/src/codec/Struct.ts:34](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/Struct.ts#L34)*

___

###  size

• **size**: *number*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:28

## Accessors

###  Type

• **get Type**(): *E*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[Type](../classes/_codec_struct_.struct.md#type)*

*Defined in [packages/types/src/codec/Struct.ts:158](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/Struct.ts#L158)*

**`description`** Returns the Type description to sthe structure

**Returns:** *E*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [ExtrinsicV4](_interfaces_runtime_types_.extrinsicv4.md).[encodedLength](_interfaces_runtime_types_.extrinsicv4.md#encodedlength)*

*Overrides [Struct](../classes/_codec_struct_.struct.md).[encodedLength](../classes/_codec_struct_.struct.md#encodedlength)*

*Defined in [packages/types/src/primitive/Extrinsic/v4/Extrinsic.ts:59](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/primitive/Extrinsic/v4/Extrinsic.ts#L59)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](_types_.ihash.md)*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[hash](../classes/_codec_struct_.struct.md#hash)*

*Defined in [packages/types/src/codec/Struct.ts:182](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/Struct.ts#L182)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[isEmpty](../classes/_codec_struct_.struct.md#isempty)*

*Defined in [packages/types/src/codec/Struct.ts:143](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/Struct.ts#L143)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  method

• **get method**(): *[Call](_interfaces_runtime_types_.call.md)*

*Inherited from [ExtrinsicV4](_interfaces_runtime_types_.extrinsicv4.md).[method](_interfaces_runtime_types_.extrinsicv4.md#method)*

*Defined in [packages/types/src/primitive/Extrinsic/v4/Extrinsic.ts:66](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/primitive/Extrinsic/v4/Extrinsic.ts#L66)*

**`description`** The [Call](_interfaces_runtime_types_.call.md) this extrinsic wraps

**Returns:** *[Call](_interfaces_runtime_types_.call.md)*

___

###  signature

• **get signature**(): *[ExtrinsicSignatureV4](../classes/_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md)*

*Inherited from [ExtrinsicV4](_interfaces_runtime_types_.extrinsicv4.md).[signature](_interfaces_runtime_types_.extrinsicv4.md#signature)*

*Defined in [packages/types/src/primitive/Extrinsic/v4/Extrinsic.ts:73](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/primitive/Extrinsic/v4/Extrinsic.ts#L73)*

**`description`** The [ExtrinsicSignatureV4](../classes/_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md)

**Returns:** *[ExtrinsicSignatureV4](../classes/_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md)*

___

###  version

• **get version**(): *number*

*Inherited from [ExtrinsicV4](_interfaces_runtime_types_.extrinsicv4.md).[version](_interfaces_runtime_types_.extrinsicv4.md#version)*

*Defined in [packages/types/src/primitive/Extrinsic/v4/Extrinsic.ts:80](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/primitive/Extrinsic/v4/Extrinsic.ts#L80)*

**`description`** The version for the signature

**Returns:** *number*

## Methods

###  addSignature

▸ **addSignature**(`signer`: [Address](_interfaces_runtime_types_.address.md) | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) | string, `signature`: [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) | string, `payload`: [ExtrinsicPayloadValue](_types_.extrinsicpayloadvalue.md) | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) | string): *[ExtrinsicV4](../classes/_primitive_extrinsic_v4_extrinsic_.extrinsicv4.md)*

*Inherited from [ExtrinsicV4](_interfaces_runtime_types_.extrinsicv4.md).[addSignature](_interfaces_runtime_types_.extrinsicv4.md#addsignature)*

*Defined in [packages/types/src/primitive/Extrinsic/v4/Extrinsic.ts:87](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/primitive/Extrinsic/v4/Extrinsic.ts#L87)*

**`description`** Add an [ExtrinsicSignatureV4](../classes/_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md) to the extrinsic (already generated)

**Parameters:**

Name | Type |
------ | ------ |
`signer` | [Address](_interfaces_runtime_types_.address.md) &#124; [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) &#124; string |
`signature` | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) &#124; string |
`payload` | [ExtrinsicPayloadValue](_types_.extrinsicpayloadvalue.md) &#124; [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) &#124; string |

**Returns:** *[ExtrinsicV4](../classes/_primitive_extrinsic_v4_extrinsic_.extrinsicv4.md)*

___

###  clear

▸ **clear**(): *void*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:22

**Returns:** *void*

___

###  delete

▸ **delete**(`key`: keyof S): *boolean*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:23

**Parameters:**

Name | Type |
------ | ------ |
`key` | keyof S |

**Returns:** *boolean*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[eq](../classes/_codec_struct_.struct.md#eq)*

*Defined in [packages/types/src/codec/Struct.ts:189](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/Struct.ts#L189)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  forEach

▸ **forEach**(`callbackfn`: function, `thisArg?`: any): *void*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:24

**Parameters:**

▪ **callbackfn**: *function*

▸ (`value`: [Codec](_types_.codec.md), `key`: keyof S, `map`: [Map](../classes/_codec_struct_.struct.md#static-map)‹keyof S, [Codec](_types_.codec.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Codec](_types_.codec.md) |
`key` | keyof S |
`map` | [Map](../classes/_codec_struct_.struct.md#static-map)‹keyof S, [Codec](_types_.codec.md)› |

▪`Optional`  **thisArg**: *any*

**Returns:** *void*

___

###  get

▸ **get**(`name`: keyof S): *[Codec](_types_.codec.md) | undefined*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[get](../classes/_codec_struct_.struct.md#get)*

*Overrides [BTreeMap](../classes/_codec_btreemap_.btreemap.md).[get](../classes/_codec_btreemap_.btreemap.md#get)*

*Defined in [packages/types/src/codec/Struct.ts:197](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/Struct.ts#L197)*

**`description`** Returns a specific names entry in the structure

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | keyof S | The name of the entry to retrieve  |

**Returns:** *[Codec](_types_.codec.md) | undefined*

___

###  getAtIndex

▸ **getAtIndex**(`index`: number): *[Codec](_types_.codec.md)*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[getAtIndex](../classes/_codec_struct_.struct.md#getatindex)*

*Defined in [packages/types/src/codec/Struct.ts:204](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/Struct.ts#L204)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *[Codec](_types_.codec.md)*

___

###  has

▸ **has**(`key`: keyof S): *boolean*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:26

**Parameters:**

Name | Type |
------ | ------ |
`key` | keyof S |

**Returns:** *boolean*

___

###  set

▸ **set**(`key`: keyof S, `value`: [Codec](_types_.codec.md)): *this*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:27

**Parameters:**

Name | Type |
------ | ------ |
`key` | keyof S |
`value` | [Codec](_types_.codec.md) |

**Returns:** *this*

___

###  sign

▸ **sign**(`account`: [IKeyringPair](_types_.ikeyringpair.md), `options`: [SignatureOptions](_types_.signatureoptions.md)): *[ExtrinsicV4](../classes/_primitive_extrinsic_v4_extrinsic_.extrinsicv4.md)*

*Inherited from [ExtrinsicV4](_interfaces_runtime_types_.extrinsicv4.md).[sign](_interfaces_runtime_types_.extrinsicv4.md#sign)*

*Defined in [packages/types/src/primitive/Extrinsic/v4/Extrinsic.ts:96](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/primitive/Extrinsic/v4/Extrinsic.ts#L96)*

**`description`** Sign the extrinsic with a specific keypair

**Parameters:**

Name | Type |
------ | ------ |
`account` | [IKeyringPair](_types_.ikeyringpair.md) |
`options` | [SignatureOptions](_types_.signatureoptions.md) |

**Returns:** *[ExtrinsicV4](../classes/_primitive_extrinsic_v4_extrinsic_.extrinsicv4.md)*

___

###  signFake

▸ **signFake**(`signer`: [Address](_interfaces_runtime_types_.address.md) | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) | string, `options`: [SignatureOptions](_types_.signatureoptions.md)): *[ExtrinsicV4](../classes/_primitive_extrinsic_v4_extrinsic_.extrinsicv4.md)*

*Inherited from [ExtrinsicV4](_interfaces_runtime_types_.extrinsicv4.md).[signFake](_interfaces_runtime_types_.extrinsicv4.md#signfake)*

*Defined in [packages/types/src/primitive/Extrinsic/v4/Extrinsic.ts:105](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/primitive/Extrinsic/v4/Extrinsic.ts#L105)*

**`describe`** Adds a fake signature to the extrinsic

**Parameters:**

Name | Type |
------ | ------ |
`signer` | [Address](_interfaces_runtime_types_.address.md) &#124; [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) &#124; string |
`options` | [SignatureOptions](_types_.signatureoptions.md) |

**Returns:** *[ExtrinsicV4](../classes/_primitive_extrinsic_v4_extrinsic_.extrinsicv4.md)*

___

###  toArray

▸ **toArray**(): *[Codec](_types_.codec.md)[]*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toArray](../classes/_codec_struct_.struct.md#toarray)*

*Defined in [packages/types/src/codec/Struct.ts:211](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/Struct.ts#L211)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](_types_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toHex](../classes/_codec_struct_.struct.md#tohex)*

*Defined in [packages/types/src/codec/Struct.ts:218](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/Struct.ts#L218)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](_types_.anyjsonobject.md) | string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toJSON](../classes/_codec_struct_.struct.md#tojson)*

*Defined in [packages/types/src/codec/Struct.ts:225](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/Struct.ts#L225)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](_types_.anyjsonobject.md) | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toRawType](../classes/_codec_struct_.struct.md#torawtype)*

*Defined in [packages/types/src/codec/Struct.ts:249](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/Struct.ts#L249)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toString](../classes/_codec_struct_.struct.md#tostring)*

*Defined in [packages/types/src/codec/Struct.ts:258](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/Struct.ts#L258)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: [BareOpts](../modules/_types_.md#bareopts)): *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toU8a](../classes/_codec_struct_.struct.md#tou8a)*

*Defined in [packages/types/src/codec/Struct.ts:266](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/Struct.ts#L266)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | [BareOpts](../modules/_types_.md#bareopts) | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

___

### `Static` decodeExtrinsic

▸ **decodeExtrinsic**(`registry`: [Registry](_types_.registry.md), `value?`: [Call](_interfaces_runtime_types_.call.md) | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) | [ExtrinsicValueV4](_primitive_extrinsic_v4_extrinsic_.extrinsicvaluev4.md), `isSigned`: boolean): *[ExtrinsicValueV4](_primitive_extrinsic_v4_extrinsic_.extrinsicvaluev4.md)*

*Inherited from [ExtrinsicV4](_interfaces_runtime_types_.extrinsicv4.md).[decodeExtrinsic](_interfaces_runtime_types_.extrinsicv4.md#static-decodeextrinsic)*

*Defined in [packages/types/src/primitive/Extrinsic/v4/Extrinsic.ts:35](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/primitive/Extrinsic/v4/Extrinsic.ts#L35)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`registry` | [Registry](_types_.registry.md) | - |
`value?` | [Call](_interfaces_runtime_types_.call.md) &#124; [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) &#124; [ExtrinsicValueV4](_primitive_extrinsic_v4_extrinsic_.extrinsicvaluev4.md) | - |
`isSigned` | boolean | false |

**Returns:** *[ExtrinsicValueV4](_primitive_extrinsic_v4_extrinsic_.extrinsicvaluev4.md)*

___

### `Static` typesToMap

▸ **typesToMap**(`registry`: [Registry](_types_.registry.md), `Types`: Record‹string, [Constructor](_types_.constructor.md)›): *Record‹string, string›*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[typesToMap](../classes/_codec_struct_.struct.md#static-typestomap)*

*Defined in [packages/types/src/codec/Struct.ts:238](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/Struct.ts#L238)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](_types_.registry.md) |
`Types` | Record‹string, [Constructor](_types_.constructor.md)› |

**Returns:** *Record‹string, string›*

___

### `Static` with

▸ **with**<**S**>(`Types`: S): *[Constructor](_types_.constructor.md)‹[Struct](../classes/_codec_struct_.struct.md)‹S››*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[with](../classes/_codec_struct_.struct.md#static-with)*

*Defined in [packages/types/src/codec/Struct.ts:120](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/Struct.ts#L120)*

**Type parameters:**

▪ **S**: *TypesDef*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | S |

**Returns:** *[Constructor](_types_.constructor.md)‹[Struct](../classes/_codec_struct_.struct.md)‹S››*
