[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["primitive/U32"](../modules/_primitive_u32_.md) › [U32](_primitive_u32_.u32.md)

# Class: U32

**`name`** U32

**`description`** 
A 32-bit unsigned integer

## Hierarchy

  ↳ [UInt](_codec_uint_.uint.md)

  ↳ **U32**

  ↳ [AssetId](../interfaces/_interfaces_runtime_types_.assetid.md)

  ↳ [BlockNumber](../interfaces/_interfaces_runtime_types_.blocknumber.md)

  ↳ [Index](../interfaces/_interfaces_runtime_types_.index.md)

  ↳ [KeyTypeId](../interfaces/_interfaces_runtime_types_.keytypeid.md)

  ↳ [Perbill](../interfaces/_interfaces_runtime_types_.perbill.md)

  ↳ [Permill](../interfaces/_interfaces_runtime_types_.permill.md)

  ↳ [Weight](../interfaces/_interfaces_runtime_types_.weight.md)

  ↳ [BabeBlockWeight](../interfaces/_interfaces_babe_types_.babeblockweight.md)

  ↳ [MemberCount](../interfaces/_interfaces_collective_types_.membercount.md)

  ↳ [ProposalIndex](../interfaces/_interfaces_collective_types_.proposalindex.md)

  ↳ [ApprovalFlag](../interfaces/_interfaces_elections_types_.approvalflag.md)

  ↳ [SetIndex](../interfaces/_interfaces_elections_types_.setindex.md)

  ↳ [VoteIndex](../interfaces/_interfaces_elections_types_.voteindex.md)

  ↳ [PropIndex](../interfaces/_interfaces_democracy_types_.propindex.md)

  ↳ [ReferendumIndex](../interfaces/_interfaces_democracy_types_.referendumindex.md)

  ↳ [AssetOf](../interfaces/_interfaces_deprecated_types_.assetof.md)

  ↳ [EraIndex](../interfaces/_interfaces_staking_types_.eraindex.md)

  ↳ [Points](../interfaces/_interfaces_staking_types_.points.md)

  ↳ [SpanIndex](../interfaces/_interfaces_staking_types_.spanindex.md)

  ↳ [SessionIndex](../interfaces/_interfaces_session_types_.sessionindex.md)

  ↳ [AuthIndex](../interfaces/_interfaces_imonline_types_.authindex.md)

  ↳ [EventIndex](../interfaces/_interfaces_system_types_.eventindex.md)

  ↳ [AuctionIndex](../interfaces/_interfaces_parachains_types_.auctionindex.md)

  ↳ [ParaId](../interfaces/_interfaces_parachains_types_.paraid.md)

  ↳ [SubId](../interfaces/_interfaces_parachains_types_.subid.md)

  ↳ [ValidatorIndex](../interfaces/_interfaces_parachains_types_.validatorindex.md)

  ↳ [USize](_primitive_usize_.usize.md)

  ↳ [AccountIndex](_primitive_generic_accountindex_.accountindex.md)

  ↳ [ConsensusEngineId](_primitive_generic_consensusengineid_.consensusengineid.md)

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_primitive_u32_.u32.md#constructor)

### Methods

* [toHex](_primitive_u32_.u32.md#tohex)
* [toRawType](_primitive_u32_.u32.md#torawtype)
* [toU8a](_primitive_u32_.u32.md#tou8a)
* [with](_primitive_u32_.u32.md#static-with)

## Constructors

###  constructor

\+ **new U32**(`registry`: [Registry](../interfaces/_types_.registry.md), `value?`: [AnyNumber](../modules/_types_.md#anynumber)): *[U32](_primitive_u32_.u32.md)*

*Overrides [UInt](_codec_uint_.uint.md).[constructor](_codec_uint_.uint.md#constructor)*

*Defined in [packages/types/src/primitive/U32.ts:14](https://github.com/polkadot-js/api/blob/bf946c20d/packages/types/src/primitive/U32.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_types_.registry.md) |
`value?` | [AnyNumber](../modules/_types_.md#anynumber) |

**Returns:** *[U32](_primitive_u32_.u32.md)*

## Methods

###  toHex

▸ **toHex**(`isLe`: boolean): *string*

*Inherited from [UInt](_codec_uint_.uint.md).[toHex](_codec_uint_.uint.md#tohex)*

*Overrides void*

*Defined in [packages/types/src/codec/UInt.ts:38](https://github.com/polkadot-js/api/blob/bf946c20d/packages/types/src/codec/UInt.ts#L38)*

**`description`** Returns a hex string representation of the value

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`isLe` | boolean | false |

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [UInt](_codec_uint_.uint.md).[toRawType](_codec_uint_.uint.md#torawtype)*

*Overrides void*

*Defined in [packages/types/src/codec/UInt.ts:50](https://github.com/polkadot-js/api/blob/bf946c20d/packages/types/src/codec/UInt.ts#L50)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from [UInt](_codec_uint_.uint.md).[toU8a](_codec_uint_.uint.md#tou8a)*

*Overrides void*

*Defined in [packages/types/src/codec/UInt.ts:64](https://github.com/polkadot-js/api/blob/bf946c20d/packages/types/src/codec/UInt.ts#L64)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*

___

### `Static` with

▸ **with**(`bitLength?`: [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength)): *[Constructor](../interfaces/_types_.constructor.md)‹[UInt](_codec_uint_.uint.md)›*

*Inherited from [UInt](_codec_uint_.uint.md).[with](_codec_uint_.uint.md#static-with)*

*Defined in [packages/types/src/codec/UInt.ts:27](https://github.com/polkadot-js/api/blob/bf946c20d/packages/types/src/codec/UInt.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`bitLength?` | [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength) |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹[UInt](_codec_uint_.uint.md)›*
