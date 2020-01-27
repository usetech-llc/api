[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/runtime/types"](../modules/_interfaces_runtime_types_.md) › [ConsensusEngineId](_interfaces_runtime_types_.consensusengineid.md)

# Interface: ConsensusEngineId

GenericConsensusEngineId

## Hierarchy

  ↳ [ConsensusEngineId](../classes/_primitive_generic_consensusengineid_.consensusengineid.md)

  ↳ **ConsensusEngineId**

## Implements

* [Codec](_types_.codec.md)

## Index

### Interfaces

* [MPrime](_interfaces_runtime_types_.consensusengineid.mprime.md)
* [ReductionContext](_interfaces_runtime_types_.consensusengineid.reductioncontext.md)

### Type aliases

* [Endianness](_interfaces_runtime_types_.consensusengineid.md#endianness)
* [IPrimeName](_interfaces_runtime_types_.consensusengineid.md#iprimename)

### Constructors

* [constructor](_interfaces_runtime_types_.consensusengineid.md#constructor)

### Properties

* [registry](_interfaces_runtime_types_.consensusengineid.md#registry)

### Accessors

* [encodedLength](_interfaces_runtime_types_.consensusengineid.md#encodedlength)
* [hash](_interfaces_runtime_types_.consensusengineid.md#hash)
* [isAura](_interfaces_runtime_types_.consensusengineid.md#isaura)
* [isBabe](_interfaces_runtime_types_.consensusengineid.md#isbabe)
* [isEmpty](_interfaces_runtime_types_.consensusengineid.md#isempty)
* [isGrandpa](_interfaces_runtime_types_.consensusengineid.md#isgrandpa)

### Methods

* [bitLength](_interfaces_runtime_types_.consensusengineid.md#bitlength)
* [eq](_interfaces_runtime_types_.consensusengineid.md#eq)
* [extractAuthor](_interfaces_runtime_types_.consensusengineid.md#extractauthor)
* [toBn](_interfaces_runtime_types_.consensusengineid.md#tobn)
* [toHex](_interfaces_runtime_types_.consensusengineid.md#tohex)
* [toJSON](_interfaces_runtime_types_.consensusengineid.md#tojson)
* [toRawType](_interfaces_runtime_types_.consensusengineid.md#torawtype)
* [toString](_interfaces_runtime_types_.consensusengineid.md#tostring)
* [toU8a](_interfaces_runtime_types_.consensusengineid.md#tou8a)
* [decodeAbstracInt](_interfaces_runtime_types_.consensusengineid.md#static-decodeabstracint)
* [idToString](_interfaces_runtime_types_.consensusengineid.md#static-idtostring)
* [stringToId](_interfaces_runtime_types_.consensusengineid.md#static-stringtoid)
* [with](_interfaces_runtime_types_.consensusengineid.md#static-with)

## Type aliases

###  Endianness

Ƭ **Endianness**: *"le" | "be"*

Defined in node_modules/@types/bn.js/index.d.ts:11

___

###  IPrimeName

Ƭ **IPrimeName**: *"k256" | "p224" | "p192" | "p25519"*

Defined in node_modules/@types/bn.js/index.d.ts:12

## Constructors

###  constructor

\+ **new ConsensusEngineId**(`registry`: [Registry](_types_.registry.md), `value?`: [AnyNumber](../modules/_types_.md#anynumber)): *[ConsensusEngineId](_interfaces_runtime_types_.consensusengineid.md)*

*Inherited from [AssetId](_interfaces_runtime_types_.assetid.md).[constructor](_interfaces_runtime_types_.assetid.md#constructor)*

*Overrides [UInt](../classes/_codec_uint_.uint.md).[constructor](../classes/_codec_uint_.uint.md#constructor)*

*Defined in [packages/types/src/primitive/U32.ts:14](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/primitive/U32.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](_types_.registry.md) |
`value?` | [AnyNumber](../modules/_types_.md#anynumber) |

**Returns:** *[ConsensusEngineId](_interfaces_runtime_types_.consensusengineid.md)*

## Properties

###  registry

• **registry**: *[Registry](_types_.registry.md)*

*Inherited from [AccountIndex](_interfaces_runtime_types_.accountindex.md).[registry](_interfaces_runtime_types_.accountindex.md#registry)*

*Defined in [packages/types/src/codec/AbstractInt.ts:25](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/AbstractInt.ts#L25)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [AccountIndex](_interfaces_runtime_types_.accountindex.md).[encodedLength](_interfaces_runtime_types_.accountindex.md#encodedlength)*

*Defined in [packages/types/src/codec/AbstractInt.ts:73](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/AbstractInt.ts#L73)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](_types_.ihash.md)*

*Inherited from [AccountIndex](_interfaces_runtime_types_.accountindex.md).[hash](_interfaces_runtime_types_.accountindex.md#hash)*

*Defined in [packages/types/src/codec/AbstractInt.ts:80](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/AbstractInt.ts#L80)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](_types_.ihash.md)*

___

###  isAura

• **get isAura**(): *boolean*

*Inherited from [ConsensusEngineId](_interfaces_runtime_types_.consensusengineid.md).[isAura](_interfaces_runtime_types_.consensusengineid.md#isaura)*

*Defined in [packages/types/src/primitive/Generic/ConsensusEngineId.ts:43](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/primitive/Generic/ConsensusEngineId.ts#L43)*

**`description`** `true` if the engine matches aura

**Returns:** *boolean*

___

###  isBabe

• **get isBabe**(): *boolean*

*Inherited from [ConsensusEngineId](_interfaces_runtime_types_.consensusengineid.md).[isBabe](_interfaces_runtime_types_.consensusengineid.md#isbabe)*

*Defined in [packages/types/src/primitive/Generic/ConsensusEngineId.ts:50](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/primitive/Generic/ConsensusEngineId.ts#L50)*

**`description`** `true` is the engine matches babe

**Returns:** *boolean*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [AccountIndex](_interfaces_runtime_types_.accountindex.md).[isEmpty](_interfaces_runtime_types_.accountindex.md#isempty)*

*Defined in [packages/types/src/codec/AbstractInt.ts:87](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/AbstractInt.ts#L87)*

**`description`** Checks if the value is a zero value (align elsewhere)

**Returns:** *boolean*

___

###  isGrandpa

• **get isGrandpa**(): *boolean*

*Inherited from [ConsensusEngineId](_interfaces_runtime_types_.consensusengineid.md).[isGrandpa](_interfaces_runtime_types_.consensusengineid.md#isgrandpa)*

*Defined in [packages/types/src/primitive/Generic/ConsensusEngineId.ts:57](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/primitive/Generic/ConsensusEngineId.ts#L57)*

**`description`** `true` is the engine matches grandpa

**Returns:** *boolean*

## Methods

###  bitLength

▸ **bitLength**(): *[UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength)*

*Inherited from [AccountIndex](_interfaces_runtime_types_.accountindex.md).[bitLength](_interfaces_runtime_types_.accountindex.md#bitlength)*

*Defined in [packages/types/src/codec/AbstractInt.ts:94](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/AbstractInt.ts#L94)*

**`description`** Returns the number of bits in the value

**Returns:** *[UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength)*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from void*

*Defined in [packages/types/src/codec/AbstractInt.ts:102](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/AbstractInt.ts#L102)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  extractAuthor

▸ **extractAuthor**(`bytes`: [Bytes](../classes/_primitive_bytes_.bytes.md), `sessionValidators`: [AccountId](_interfaces_runtime_types_.accountid.md)[]): *[AccountId](_interfaces_runtime_types_.accountid.md) | undefined*

*Inherited from [ConsensusEngineId](_interfaces_runtime_types_.consensusengineid.md).[extractAuthor](_interfaces_runtime_types_.consensusengineid.md#extractauthor)*

*Defined in [packages/types/src/primitive/Generic/ConsensusEngineId.ts:81](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/primitive/Generic/ConsensusEngineId.ts#L81)*

**`description`** From the input bytes, decode into an author

**Parameters:**

Name | Type |
------ | ------ |
`bytes` | [Bytes](../classes/_primitive_bytes_.bytes.md) |
`sessionValidators` | [AccountId](_interfaces_runtime_types_.accountid.md)[] |

**Returns:** *[AccountId](_interfaces_runtime_types_.accountid.md) | undefined*

___

###  toBn

▸ **toBn**(): *BN*

*Inherited from [AccountIndex](_interfaces_runtime_types_.accountindex.md).[toBn](_interfaces_runtime_types_.accountindex.md#tobn)*

*Defined in [packages/types/src/codec/AbstractInt.ts:115](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/AbstractInt.ts#L115)*

**`description`** Returns the BN representation of the number. (Compatibility)

**Returns:** *BN*

___

###  toHex

▸ **toHex**(`isLe`: boolean): *string*

*Inherited from [AccountIndex](_interfaces_runtime_types_.accountindex.md).[toHex](_interfaces_runtime_types_.accountindex.md#tohex)*

*Overrides void*

*Defined in [packages/types/src/codec/UInt.ts:38](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/UInt.ts#L38)*

**`description`** Returns a hex string representation of the value

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`isLe` | boolean | false |

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *any*

*Inherited from void*

*Defined in [packages/types/src/codec/AbstractInt.ts:127](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/AbstractInt.ts#L127)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *any*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [AssetId](_interfaces_runtime_types_.assetid.md).[toRawType](_interfaces_runtime_types_.assetid.md#torawtype)*

*Overrides void*

*Defined in [packages/types/src/codec/UInt.ts:50](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/UInt.ts#L50)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [ConsensusEngineId](_interfaces_runtime_types_.consensusengineid.md).[toString](_interfaces_runtime_types_.consensusengineid.md#tostring)*

*Overrides void*

*Defined in [packages/types/src/primitive/Generic/ConsensusEngineId.ts:94](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/primitive/Generic/ConsensusEngineId.ts#L94)*

**`description`** Override the default toString to return a 4-byte string

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

*Inherited from [AccountIndex](_interfaces_runtime_types_.accountindex.md).[toU8a](_interfaces_runtime_types_.accountindex.md#tou8a)*

*Overrides void*

*Defined in [packages/types/src/codec/UInt.ts:64](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/UInt.ts#L64)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

___

### `Static` decodeAbstracInt

▸ **decodeAbstracInt**(`value`: [AnyNumber](../modules/_types_.md#anynumber), `bitLength`: [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength), `isNegative`: boolean): *string*

*Inherited from [AccountIndex](_interfaces_runtime_types_.accountindex.md).[decodeAbstracInt](_interfaces_runtime_types_.accountindex.md#static-decodeabstracint)*

*Defined in [packages/types/src/codec/AbstractInt.ts:42](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/AbstractInt.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [AnyNumber](../modules/_types_.md#anynumber) |
`bitLength` | [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength) |
`isNegative` | boolean |

**Returns:** *string*

___

### `Static` idToString

▸ **idToString**(`input`: number | BN): *string*

*Inherited from [ConsensusEngineId](_interfaces_runtime_types_.consensusengineid.md).[idToString](_interfaces_runtime_types_.consensusengineid.md#static-idtostring)*

*Defined in [packages/types/src/primitive/Generic/ConsensusEngineId.ts:26](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/primitive/Generic/ConsensusEngineId.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`input` | number &#124; BN |

**Returns:** *string*

___

### `Static` stringToId

▸ **stringToId**(`input`: string): *number*

*Inherited from [ConsensusEngineId](_interfaces_runtime_types_.consensusengineid.md).[stringToId](_interfaces_runtime_types_.consensusengineid.md#static-stringtoid)*

*Defined in [packages/types/src/primitive/Generic/ConsensusEngineId.ts:33](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/primitive/Generic/ConsensusEngineId.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`input` | string |

**Returns:** *number*

___

### `Static` with

▸ **with**(`bitLength?`: [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength)): *[Constructor](_types_.constructor.md)‹[UInt](../classes/_codec_uint_.uint.md)›*

*Inherited from [AccountIndex](_interfaces_runtime_types_.accountindex.md).[with](_interfaces_runtime_types_.accountindex.md#static-with)*

*Defined in [packages/types/src/codec/UInt.ts:27](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/codec/UInt.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`bitLength?` | [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength) |

**Returns:** *[Constructor](_types_.constructor.md)‹[UInt](../classes/_codec_uint_.uint.md)›*
