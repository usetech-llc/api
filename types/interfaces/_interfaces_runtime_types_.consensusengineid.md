[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/runtime/types"](../modules/_interfaces_runtime_types_.md) › [ConsensusEngineId](_interfaces_runtime_types_.consensusengineid.md)

# Interface: ConsensusEngineId

GenericConsensusEngineId

## Hierarchy

  ↳ [ConsensusEngineId](../classes/_primitive_generic_consensusengineid_.consensusengineid.md)

  ↳ **ConsensusEngineId**

## Implements

* [Codec](_types_.codec.md)

## Index

### Constructors

* [constructor](_interfaces_runtime_types_.consensusengineid.md#constructor)

### Accessors

* [isAura](_interfaces_runtime_types_.consensusengineid.md#isaura)
* [isBabe](_interfaces_runtime_types_.consensusengineid.md#isbabe)
* [isGrandpa](_interfaces_runtime_types_.consensusengineid.md#isgrandpa)

### Methods

* [extractAuthor](_interfaces_runtime_types_.consensusengineid.md#extractauthor)
* [toHex](_interfaces_runtime_types_.consensusengineid.md#tohex)
* [toRawType](_interfaces_runtime_types_.consensusengineid.md#torawtype)
* [toU8a](_interfaces_runtime_types_.consensusengineid.md#tou8a)
* [idToString](_interfaces_runtime_types_.consensusengineid.md#static-idtostring)
* [stringToId](_interfaces_runtime_types_.consensusengineid.md#static-stringtoid)
* [with](_interfaces_runtime_types_.consensusengineid.md#static-with)

## Constructors

###  constructor

\+ **new ConsensusEngineId**(`registry`: [Registry](_types_.registry.md), `value?`: [AnyNumber](../modules/_types_.md#anynumber)): *[ConsensusEngineId](_interfaces_runtime_types_.consensusengineid.md)*

*Inherited from [U32](../classes/_primitive_u32_.u32.md).[constructor](../classes/_primitive_u32_.u32.md#constructor)*

*Overrides [UInt](../classes/_codec_uint_.uint.md).[constructor](../classes/_codec_uint_.uint.md#constructor)*

*Defined in [packages/types/src/primitive/U32.ts:14](https://github.com/polkadot-js/api/blob/47f135065/packages/types/src/primitive/U32.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](_types_.registry.md) |
`value?` | [AnyNumber](../modules/_types_.md#anynumber) |

**Returns:** *[ConsensusEngineId](_interfaces_runtime_types_.consensusengineid.md)*

## Accessors

###  isAura

• **get isAura**(): *boolean*

*Inherited from [ConsensusEngineId](../classes/_primitive_generic_consensusengineid_.consensusengineid.md).[isAura](../classes/_primitive_generic_consensusengineid_.consensusengineid.md#isaura)*

*Defined in [packages/types/src/primitive/Generic/ConsensusEngineId.ts:43](https://github.com/polkadot-js/api/blob/47f135065/packages/types/src/primitive/Generic/ConsensusEngineId.ts#L43)*

**`description`** `true` if the engine matches aura

**Returns:** *boolean*

___

###  isBabe

• **get isBabe**(): *boolean*

*Inherited from [ConsensusEngineId](../classes/_primitive_generic_consensusengineid_.consensusengineid.md).[isBabe](../classes/_primitive_generic_consensusengineid_.consensusengineid.md#isbabe)*

*Defined in [packages/types/src/primitive/Generic/ConsensusEngineId.ts:50](https://github.com/polkadot-js/api/blob/47f135065/packages/types/src/primitive/Generic/ConsensusEngineId.ts#L50)*

**`description`** `true` is the engine matches babe

**Returns:** *boolean*

___

###  isGrandpa

• **get isGrandpa**(): *boolean*

*Inherited from [ConsensusEngineId](../classes/_primitive_generic_consensusengineid_.consensusengineid.md).[isGrandpa](../classes/_primitive_generic_consensusengineid_.consensusengineid.md#isgrandpa)*

*Defined in [packages/types/src/primitive/Generic/ConsensusEngineId.ts:57](https://github.com/polkadot-js/api/blob/47f135065/packages/types/src/primitive/Generic/ConsensusEngineId.ts#L57)*

**`description`** `true` is the engine matches grandpa

**Returns:** *boolean*

## Methods

###  extractAuthor

▸ **extractAuthor**(`bytes`: [Bytes](../classes/_primitive_bytes_.bytes.md), `sessionValidators`: [AccountId](_interfaces_runtime_types_.accountid.md)[]): *[AccountId](_interfaces_runtime_types_.accountid.md) | undefined*

*Inherited from [ConsensusEngineId](../classes/_primitive_generic_consensusengineid_.consensusengineid.md).[extractAuthor](../classes/_primitive_generic_consensusengineid_.consensusengineid.md#extractauthor)*

*Defined in [packages/types/src/primitive/Generic/ConsensusEngineId.ts:80](https://github.com/polkadot-js/api/blob/47f135065/packages/types/src/primitive/Generic/ConsensusEngineId.ts#L80)*

**`description`** From the input bytes, decode into an author

**Parameters:**

Name | Type |
------ | ------ |
`bytes` | [Bytes](../classes/_primitive_bytes_.bytes.md) |
`sessionValidators` | [AccountId](_interfaces_runtime_types_.accountid.md)[] |

**Returns:** *[AccountId](_interfaces_runtime_types_.accountid.md) | undefined*

___

###  toHex

▸ **toHex**(`isLe`: boolean): *string*

*Inherited from [UInt](../classes/_codec_uint_.uint.md).[toHex](../classes/_codec_uint_.uint.md#tohex)*

*Overrides void*

*Defined in [packages/types/src/codec/UInt.ts:38](https://github.com/polkadot-js/api/blob/47f135065/packages/types/src/codec/UInt.ts#L38)*

**`description`** Returns a hex string representation of the value

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`isLe` | boolean | false |

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [UInt](../classes/_codec_uint_.uint.md).[toRawType](../classes/_codec_uint_.uint.md#torawtype)*

*Overrides void*

*Defined in [packages/types/src/codec/UInt.ts:50](https://github.com/polkadot-js/api/blob/47f135065/packages/types/src/codec/UInt.ts#L50)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from [UInt](../classes/_codec_uint_.uint.md).[toU8a](../classes/_codec_uint_.uint.md#tou8a)*

*Overrides void*

*Defined in [packages/types/src/codec/UInt.ts:64](https://github.com/polkadot-js/api/blob/47f135065/packages/types/src/codec/UInt.ts#L64)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*

___

### `Static` idToString

▸ **idToString**(`input`: number | BN): *string*

*Inherited from [ConsensusEngineId](../classes/_primitive_generic_consensusengineid_.consensusengineid.md).[idToString](../classes/_primitive_generic_consensusengineid_.consensusengineid.md#static-idtostring)*

*Defined in [packages/types/src/primitive/Generic/ConsensusEngineId.ts:26](https://github.com/polkadot-js/api/blob/47f135065/packages/types/src/primitive/Generic/ConsensusEngineId.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`input` | number &#124; BN |

**Returns:** *string*

___

### `Static` stringToId

▸ **stringToId**(`input`: string): *number*

*Inherited from [ConsensusEngineId](../classes/_primitive_generic_consensusengineid_.consensusengineid.md).[stringToId](../classes/_primitive_generic_consensusengineid_.consensusengineid.md#static-stringtoid)*

*Defined in [packages/types/src/primitive/Generic/ConsensusEngineId.ts:33](https://github.com/polkadot-js/api/blob/47f135065/packages/types/src/primitive/Generic/ConsensusEngineId.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`input` | string |

**Returns:** *number*

___

### `Static` with

▸ **with**(`bitLength?`: [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength)): *[Constructor](_types_.constructor.md)‹[UInt](../classes/_codec_uint_.uint.md)›*

*Inherited from [UInt](../classes/_codec_uint_.uint.md).[with](../classes/_codec_uint_.uint.md#static-with)*

*Defined in [packages/types/src/codec/UInt.ts:27](https://github.com/polkadot-js/api/blob/47f135065/packages/types/src/codec/UInt.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`bitLength?` | [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength) |

**Returns:** *[Constructor](_types_.constructor.md)‹[UInt](../classes/_codec_uint_.uint.md)›*
