[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/runtime/types"](../modules/_interfaces_runtime_types_.md) › [Seal](_interfaces_runtime_types_.seal.md)

# Interface: Seal

ITuple<[ConsensusEngineId, Bytes]>

## Hierarchy

* [[ConsensusEngineId](_interfaces_runtime_types_.consensusengineid.md)‹›, [Bytes](../classes/_primitive_bytes_.bytes.md)‹›] & [Codec](_types_.codec.md)

  ↳ **Seal**

## Index

### Properties

* [encodedLength](_interfaces_runtime_types_.seal.md#encodedlength)
* [hash](_interfaces_runtime_types_.seal.md#hash)
* [isEmpty](_interfaces_runtime_types_.seal.md#isempty)
* [registry](_interfaces_runtime_types_.seal.md#registry)

### Methods

* [eq](_interfaces_runtime_types_.seal.md#eq)
* [toHex](_interfaces_runtime_types_.seal.md#tohex)
* [toJSON](_interfaces_runtime_types_.seal.md#tojson)
* [toRawType](_interfaces_runtime_types_.seal.md#torawtype)
* [toString](_interfaces_runtime_types_.seal.md#tostring)
* [toU8a](_interfaces_runtime_types_.seal.md#tou8a)

## Properties

###  encodedLength

• **encodedLength**: *number*

*Inherited from [Consensus](_interfaces_runtime_types_.consensus.md).[encodedLength](_interfaces_runtime_types_.consensus.md#encodedlength)*

*Defined in [packages/types/src/types.ts:76](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/types.ts#L76)*

**`description`** The length of the value when encoded as a Uint8Array

___

###  hash

• **hash**: *[IHash](_types_.ihash.md)*

*Inherited from [Consensus](_interfaces_runtime_types_.consensus.md).[hash](_interfaces_runtime_types_.consensus.md#hash)*

*Defined in [packages/types/src/types.ts:81](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/types.ts#L81)*

**`description`** Returns a hash of the value

___

###  isEmpty

• **isEmpty**: *boolean*

*Inherited from [Consensus](_interfaces_runtime_types_.consensus.md).[isEmpty](_interfaces_runtime_types_.consensus.md#isempty)*

*Defined in [packages/types/src/types.ts:86](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/types.ts#L86)*

**`description`** Checks if the value is an empty value

___

###  registry

• **registry**: *[Registry](_types_.registry.md)*

*Inherited from [Consensus](_interfaces_runtime_types_.consensus.md).[registry](_interfaces_runtime_types_.consensus.md#registry)*

*Defined in [packages/types/src/types.ts:91](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/types.ts#L91)*

**`description`** The registry associated with this object

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Consensus](_interfaces_runtime_types_.consensus.md).[eq](_interfaces_runtime_types_.consensus.md#eq)*

*Defined in [packages/types/src/types.ts:96](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/types.ts#L96)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Inherited from [Consensus](_interfaces_runtime_types_.consensus.md).[toHex](_interfaces_runtime_types_.consensus.md#tohex)*

*Defined in [packages/types/src/types.ts:101](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/types.ts#L101)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

**Parameters:**

Name | Type |
------ | ------ |
`isLe?` | undefined &#124; false &#124; true |

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_.md#anyjson)*

*Inherited from [Consensus](_interfaces_runtime_types_.consensus.md).[toJSON](_interfaces_runtime_types_.consensus.md#tojson)*

*Defined in [packages/types/src/types.ts:106](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/types.ts#L106)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Consensus](_interfaces_runtime_types_.consensus.md).[toRawType](_interfaces_runtime_types_.consensus.md#torawtype)*

*Defined in [packages/types/src/types.ts:111](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/types.ts#L111)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Consensus](_interfaces_runtime_types_.consensus.md).[toString](_interfaces_runtime_types_.consensus.md#tostring)*

*Defined in [packages/types/src/types.ts:116](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/types.ts#L116)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: [BareOpts](../modules/_types_.md#bareopts)): *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

*Inherited from [Consensus](_interfaces_runtime_types_.consensus.md).[toU8a](_interfaces_runtime_types_.consensus.md#tou8a)*

*Defined in [packages/types/src/types.ts:122](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/types.ts#L122)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | [BareOpts](../modules/_types_.md#bareopts) | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*
