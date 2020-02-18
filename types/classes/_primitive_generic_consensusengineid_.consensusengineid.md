[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["primitive/Generic/ConsensusEngineId"](../modules/_primitive_generic_consensusengineid_.md) › [ConsensusEngineId](_primitive_generic_consensusengineid_.consensusengineid.md)

# Class: ConsensusEngineId

**`name`** ConsensusEngineId

**`description`** 
A 4-byte identifier (actually a [u8; 4]) identifying the engine, e.g. for Aura it would be [b'a', b'u', b'r', b'a']

## Hierarchy

  ↳ [U32](_primitive_u32_.u32.md)

  ↳ **ConsensusEngineId**

## Implements

* [Codec](../interfaces/_types_codec_.codec.md)

## Index

### Interfaces

* [MPrime](../interfaces/_primitive_generic_consensusengineid_.consensusengineid.mprime.md)
* [ReductionContext](../interfaces/_primitive_generic_consensusengineid_.consensusengineid.reductioncontext.md)

### Type aliases

* [Endianness](_primitive_generic_consensusengineid_.consensusengineid.md#static-endianness)
* [IPrimeName](_primitive_generic_consensusengineid_.consensusengineid.md#static-iprimename)

### Constructors

* [constructor](_primitive_generic_consensusengineid_.consensusengineid.md#constructor)

### Accessors

* [isAura](_primitive_generic_consensusengineid_.consensusengineid.md#isaura)
* [isBabe](_primitive_generic_consensusengineid_.consensusengineid.md#isbabe)
* [isGrandpa](_primitive_generic_consensusengineid_.consensusengineid.md#isgrandpa)

### Methods

* [extractAuthor](_primitive_generic_consensusengineid_.consensusengineid.md#extractauthor)
* [toHex](_primitive_generic_consensusengineid_.consensusengineid.md#tohex)
* [toHuman](_primitive_generic_consensusengineid_.consensusengineid.md#tohuman)
* [toRawType](_primitive_generic_consensusengineid_.consensusengineid.md#torawtype)
* [toString](_primitive_generic_consensusengineid_.consensusengineid.md#tostring)
* [toU8a](_primitive_generic_consensusengineid_.consensusengineid.md#tou8a)
* [idToString](_primitive_generic_consensusengineid_.consensusengineid.md#static-idtostring)
* [stringToId](_primitive_generic_consensusengineid_.consensusengineid.md#static-stringtoid)
* [with](_primitive_generic_consensusengineid_.consensusengineid.md#static-with)

## Type aliases

### `Static` Endianness

Ƭ **Endianness**: *"le" | "be"*

Defined in node_modules/@types/bn.js/index.d.ts:11

___

### `Static` IPrimeName

Ƭ **IPrimeName**: *"k256" | "p224" | "p192" | "p25519"*

Defined in node_modules/@types/bn.js/index.d.ts:12

## Constructors

###  constructor

\+ **new ConsensusEngineId**(`registry`: [Registry](../interfaces/_types_registry_.registry.md), `value`: [AnyNumber](../modules/_types_helpers_.md#anynumber), `bitLength`: [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength), `isHexJson`: boolean): *[ConsensusEngineId](_primitive_generic_consensusengineid_.consensusengineid.md)*

*Inherited from [UInt](_codec_uint_.uint.md).[constructor](_codec_uint_.uint.md#constructor)*

*Defined in [packages/types/src/codec/UInt.ts:22](https://github.com/polkadot-js/api/blob/aee09c48b9/packages/types/src/codec/UInt.ts#L22)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`registry` | [Registry](../interfaces/_types_registry_.registry.md) | - |
`value` | [AnyNumber](../modules/_types_helpers_.md#anynumber) | 0 |
`bitLength` | [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength) | DEFAULT_UINT_BITS |
`isHexJson` | boolean | false |

**Returns:** *[ConsensusEngineId](_primitive_generic_consensusengineid_.consensusengineid.md)*

## Accessors

###  isAura

• **get isAura**(): *boolean*

*Defined in [packages/types/src/primitive/Generic/ConsensusEngineId.ts:43](https://github.com/polkadot-js/api/blob/aee09c48b9/packages/types/src/primitive/Generic/ConsensusEngineId.ts#L43)*

**`description`** `true` if the engine matches aura

**Returns:** *boolean*

___

###  isBabe

• **get isBabe**(): *boolean*

*Defined in [packages/types/src/primitive/Generic/ConsensusEngineId.ts:50](https://github.com/polkadot-js/api/blob/aee09c48b9/packages/types/src/primitive/Generic/ConsensusEngineId.ts#L50)*

**`description`** `true` is the engine matches babe

**Returns:** *boolean*

___

###  isGrandpa

• **get isGrandpa**(): *boolean*

*Defined in [packages/types/src/primitive/Generic/ConsensusEngineId.ts:57](https://github.com/polkadot-js/api/blob/aee09c48b9/packages/types/src/primitive/Generic/ConsensusEngineId.ts#L57)*

**`description`** `true` is the engine matches grandpa

**Returns:** *boolean*

## Methods

###  extractAuthor

▸ **extractAuthor**(`bytes`: [Bytes](_primitive_bytes_.bytes.md), `sessionValidators`: AccountId[]): *AccountId | undefined*

*Defined in [packages/types/src/primitive/Generic/ConsensusEngineId.ts:81](https://github.com/polkadot-js/api/blob/aee09c48b9/packages/types/src/primitive/Generic/ConsensusEngineId.ts#L81)*

**`description`** From the input bytes, decode into an author

**Parameters:**

Name | Type |
------ | ------ |
`bytes` | [Bytes](_primitive_bytes_.bytes.md) |
`sessionValidators` | AccountId[] |

**Returns:** *AccountId | undefined*

___

###  toHex

▸ **toHex**(`isLe`: boolean): *string*

*Inherited from [UInt](_codec_uint_.uint.md).[toHex](_codec_uint_.uint.md#tohex)*

*Overrides void*

*Defined in [packages/types/src/codec/UInt.ts:42](https://github.com/polkadot-js/api/blob/aee09c48b9/packages/types/src/codec/UInt.ts#L42)*

**`description`** Returns a hex string representation of the value

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`isLe` | boolean | false |

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(`isExpanded?`: undefined | false | true): *any*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Inherited from [UInt](_codec_uint_.uint.md).[toHuman](_codec_uint_.uint.md#tohuman)*

*Overrides void*

*Defined in [packages/types/src/codec/UInt.ts:54](https://github.com/polkadot-js/api/blob/aee09c48b9/packages/types/src/codec/UInt.ts#L54)*

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

**Parameters:**

Name | Type |
------ | ------ |
`isExpanded?` | undefined &#124; false &#124; true |

**Returns:** *any*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Inherited from [UInt](_codec_uint_.uint.md).[toRawType](_codec_uint_.uint.md#torawtype)*

*Overrides void*

*Defined in [packages/types/src/codec/UInt.ts:64](https://github.com/polkadot-js/api/blob/aee09c48b9/packages/types/src/codec/UInt.ts#L64)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Overrides void*

*Defined in [packages/types/src/primitive/Generic/ConsensusEngineId.ts:96](https://github.com/polkadot-js/api/blob/aee09c48b9/packages/types/src/primitive/Generic/ConsensusEngineId.ts#L96)*

**`description`** Override the default toString to return a 4-byte string

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Inherited from [UInt](_codec_uint_.uint.md).[toU8a](_codec_uint_.uint.md#tou8a)*

*Overrides void*

*Defined in [packages/types/src/codec/UInt.ts:78](https://github.com/polkadot-js/api/blob/aee09c48b9/packages/types/src/codec/UInt.ts#L78)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

___

### `Static` idToString

▸ **idToString**(`input`: number | BN): *string*

*Defined in [packages/types/src/primitive/Generic/ConsensusEngineId.ts:26](https://github.com/polkadot-js/api/blob/aee09c48b9/packages/types/src/primitive/Generic/ConsensusEngineId.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`input` | number &#124; BN |

**Returns:** *string*

___

### `Static` stringToId

▸ **stringToId**(`input`: string): *number*

*Defined in [packages/types/src/primitive/Generic/ConsensusEngineId.ts:33](https://github.com/polkadot-js/api/blob/aee09c48b9/packages/types/src/primitive/Generic/ConsensusEngineId.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`input` | string |

**Returns:** *number*

___

### `Static` with

▸ **with**(`bitLength`: [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength), `typeName?`: undefined | string): *[Constructor](../interfaces/_types_codec_.constructor.md)‹[UInt](_codec_uint_.uint.md)›*

*Inherited from [UInt](_codec_uint_.uint.md).[with](_codec_uint_.uint.md#static-with)*

*Defined in [packages/types/src/codec/UInt.ts:27](https://github.com/polkadot-js/api/blob/aee09c48b9/packages/types/src/codec/UInt.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`bitLength` | [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength) |
`typeName?` | undefined &#124; string |

**Returns:** *[Constructor](../interfaces/_types_codec_.constructor.md)‹[UInt](_codec_uint_.uint.md)›*
