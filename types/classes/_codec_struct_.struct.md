[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["codec/Struct"](../modules/_codec_struct_.md) › [Struct](_codec_struct_.struct.md)

# Class: Struct <**S, T, V, E**>

**`name`** Struct

**`description`** 
A Struct defines an Object with key-value pairs - where the values are Codec values. It removes
a lot of repetition from the actual coding, define a structure type, pass it the key/Codec
values in the constructor and it manages the decoding. It is important that the constructor
values matches 100% to the order in th Rust code, i.e. don't go crazy and make it alphabetical,
it needs to decoded in the specific defined order.

## Type parameters

▪ **S**: *TypesDef*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

* Map‹keyof S, [Codec](../interfaces/_types_.codec.md)›

  ↳ **Struct**

  ↳ [DispatchInfo](../interfaces/_interfaces_runtime_types_.dispatchinfo.md)

  ↳ [DispatchInfoTo190](../interfaces/_interfaces_runtime_types_.dispatchinfoto190.md)

  ↳ [Header](../interfaces/_interfaces_runtime_types_.header.md)

  ↳ [SignedBlock](../interfaces/_interfaces_runtime_types_.signedblock.md)

  ↳ [RawAuraPreDigest](../interfaces/_interfaces_aura_types_.rawaurapredigest.md)

  ↳ [RawBabePreDigestPrimary](../interfaces/_interfaces_babe_types_.rawbabepredigestprimary.md)

  ↳ [RawBabePreDigestPrimary0to159](../interfaces/_interfaces_babe_types_.rawbabepredigestprimary0to159.md)

  ↳ [RawBabePreDigestSecondary](../interfaces/_interfaces_babe_types_.rawbabepredigestsecondary.md)

  ↳ [RawBabePreDigestSecondary0to159](../interfaces/_interfaces_babe_types_.rawbabepredigestsecondary0to159.md)

  ↳ [BalanceLock](../interfaces/_interfaces_balances_types_.balancelock.md)

  ↳ [VestingSchedule](../interfaces/_interfaces_balances_types_.vestingschedule.md)

  ↳ [Votes](../interfaces/_interfaces_collective_types_.votes.md)

  ↳ [AliveContractInfo](../interfaces/_interfaces_contracts_types_.alivecontractinfo.md)

  ↳ [ContractCallRequest](../interfaces/_interfaces_contracts_types_.contractcallrequest.md)

  ↳ [ContractExecResultSuccess](../interfaces/_interfaces_contracts_types_.contractexecresultsuccess.md)

  ↳ [PrefabWasmModule](../interfaces/_interfaces_contracts_types_.prefabwasmmodule.md)

  ↳ [Schedule](../interfaces/_interfaces_contracts_types_.schedule.md)

  ↳ [VoterInfo](../interfaces/_interfaces_elections_types_.voterinfo.md)

  ↳ [ReferendumInfo](../interfaces/_interfaces_democracy_types_.referenduminfo.md)

  ↳ [AccountInfo](../interfaces/_interfaces_deprecated_types_.accountinfo.md)

  ↳ [AssetOptions](../interfaces/_interfaces_genericasset_types_.assetoptions.md)

  ↳ [PermissionsV1](../interfaces/_interfaces_genericasset_types_.permissionsv1.md)

  ↳ [PendingPause](../interfaces/_interfaces_grandpa_types_.pendingpause.md)

  ↳ [PendingResume](../interfaces/_interfaces_grandpa_types_.pendingresume.md)

  ↳ [StoredPendingChange](../interfaces/_interfaces_grandpa_types_.storedpendingchange.md)

  ↳ [IdentityInfo](../interfaces/_interfaces_identity_types_.identityinfo.md)

  ↳ [RegistrarInfo](../interfaces/_interfaces_identity_types_.registrarinfo.md)

  ↳ [Registration](../interfaces/_interfaces_identity_types_.registration.md)

  ↳ [EraPoints](../interfaces/_interfaces_staking_types_.erapoints.md)

  ↳ [EraRewards](../interfaces/_interfaces_staking_types_.erarewards.md)

  ↳ [Exposure](../interfaces/_interfaces_staking_types_.exposure.md)

  ↳ [IndividualExposure](../interfaces/_interfaces_staking_types_.individualexposure.md)

  ↳ [Nominations](../interfaces/_interfaces_staking_types_.nominations.md)

  ↳ [SlashingSpans](../interfaces/_interfaces_staking_types_.slashingspans.md)

  ↳ [SlashJournalEntry](../interfaces/_interfaces_staking_types_.slashjournalentry.md)

  ↳ [SpanRecord](../interfaces/_interfaces_staking_types_.spanrecord.md)

  ↳ [StakingLedger](../interfaces/_interfaces_staking_types_.stakingledger.md)

  ↳ [UnappliedSlash](../interfaces/_interfaces_staking_types_.unappliedslash.md)

  ↳ [UnlockChunk](../interfaces/_interfaces_staking_types_.unlockchunk.md)

  ↳ [ValidatorPrefs](../interfaces/_interfaces_staking_types_.validatorprefs.md)

  ↳ [ValidatorPrefsTo145](../interfaces/_interfaces_staking_types_.validatorprefsto145.md)

  ↳ [ValidatorPrefsTo196](../interfaces/_interfaces_staking_types_.validatorprefsto196.md)

  ↳ [Heartbeat](../interfaces/_interfaces_imonline_types_.heartbeat.md)

  ↳ [OpaqueNetworkState](../interfaces/_interfaces_imonline_types_.opaquenetworkstate.md)

  ↳ [OffenceDetails](../interfaces/_interfaces_offences_types_.offencedetails.md)

  ↳ [ActiveRecovery](../interfaces/_interfaces_recovery_types_.activerecovery.md)

  ↳ [RecoveryConfig](../interfaces/_interfaces_recovery_types_.recoveryconfig.md)

  ↳ [Bid](../interfaces/_interfaces_society_types_.bid.md)

  ↳ [DispatchErrorModule](../interfaces/_interfaces_system_types_.dispatcherrormodule.md)

  ↳ [DispatchErrorTo198](../interfaces/_interfaces_system_types_.dispatcherrorto198.md)

  ↳ [EventRecord](../interfaces/_interfaces_system_types_.eventrecord.md)

  ↳ [EventRecordTo76](../interfaces/_interfaces_system_types_.eventrecordto76.md)

  ↳ [OpenTip](../interfaces/_interfaces_treasury_types_.opentip.md)

  ↳ [TreasuryProposal](../interfaces/_interfaces_treasury_types_.treasuryproposal.md)

  ↳ [Multisig](../interfaces/_interfaces_utility_types_.multisig.md)

  ↳ [Timepoint](../interfaces/_interfaces_utility_types_.timepoint.md)

  ↳ [AttestedCandidate](../interfaces/_interfaces_parachains_types_.attestedcandidate.md)

  ↳ [CandidateReceipt](../interfaces/_interfaces_parachains_types_.candidatereceipt.md)

  ↳ [IncomingParachainDeploy](../interfaces/_interfaces_parachains_types_.incomingparachaindeploy.md)

  ↳ [IncomingParachainFixed](../interfaces/_interfaces_parachains_types_.incomingparachainfixed.md)

  ↳ [NewBidder](../interfaces/_interfaces_parachains_types_.newbidder.md)

  ↳ [ParaInfo](../interfaces/_interfaces_parachains_types_.parainfo.md)

  ↳ [UpwardMessage](../interfaces/_interfaces_parachains_types_.upwardmessage.md)

  ↳ [BlockAttestations](../interfaces/_interfaces_attestations_types_.blockattestations.md)

  ↳ [IncludedBlocks](../interfaces/_interfaces_attestations_types_.includedblocks.md)

  ↳ [MoreAttestations](../interfaces/_interfaces_attestations_types_.moreattestations.md)

  ↳ [ChainProperties](../interfaces/_interfaces_rpc_types_.chainproperties.md)

  ↳ [Health](../interfaces/_interfaces_rpc_types_.health.md)

  ↳ [NetworkState](../interfaces/_interfaces_rpc_types_.networkstate.md)

  ↳ [PeerInfo](../interfaces/_interfaces_rpc_types_.peerinfo.md)

  ↳ [RpcMethods](../interfaces/_interfaces_rpc_types_.rpcmethods.md)

  ↳ [RuntimeDispatchInfo](../interfaces/_interfaces_rpc_types_.runtimedispatchinfo.md)

  ↳ [RuntimeVersion](../interfaces/_interfaces_rpc_types_.runtimeversion.md)

  ↳ [StorageChangeSet](../interfaces/_interfaces_rpc_types_.storagechangeset.md)

  ↳ [Event](_primitive_generic_event_.event.md)

  ↳ [ExtrinsicPayloadV1](_primitive_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md)

  ↳ [ExtrinsicSignatureV1](_primitive_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md)

  ↳ [ExtrinsicV1](_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md)

  ↳ [ExtrinsicPayloadV2](_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md)

  ↳ [ExtrinsicSignatureV2](_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md)

  ↳ [ExtrinsicV2](_primitive_extrinsic_v2_extrinsic_.extrinsicv2.md)

  ↳ [ExtrinsicPayloadV3](_primitive_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md)

  ↳ [ExtrinsicV3](_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md)

  ↳ [ExtrinsicPayloadV4](_primitive_extrinsic_v4_extrinsicpayload_.extrinsicpayloadv4.md)

  ↳ [ExtrinsicSignatureV4](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md)

  ↳ [ExtrinsicV4](_primitive_extrinsic_v4_extrinsic_.extrinsicv4.md)

  ↳ [Block](_primitive_generic_block_.block.md)

  ↳ [Call](_primitive_generic_call_.call.md)

  ↳ [Digest](_primitive_generic_digest_.digest.md)

  ↳ [ExtrinsicPayloadUnknown](_primitive_extrinsic_extrinsicpayloadunknown_.extrinsicpayloadunknown.md)

  ↳ [ExtrinsicUnknown](_primitive_extrinsic_extrinsicunknown_.extrinsicunknown.md)

  ↳ [CallMetadataV0](../interfaces/_interfaces_metadata_types_.callmetadatav0.md)

  ↳ [DoubleMapTypeV10](../interfaces/_interfaces_metadata_types_.doublemaptypev10.md)

  ↳ [DoubleMapTypeV3](../interfaces/_interfaces_metadata_types_.doublemaptypev3.md)

  ↳ [DoubleMapTypeV4](../interfaces/_interfaces_metadata_types_.doublemaptypev4.md)

  ↳ [DoubleMapTypeV5](../interfaces/_interfaces_metadata_types_.doublemaptypev5.md)

  ↳ [ErrorMetadataV8](../interfaces/_interfaces_metadata_types_.errormetadatav8.md)

  ↳ [EventMetadataV0](../interfaces/_interfaces_metadata_types_.eventmetadatav0.md)

  ↳ [FunctionArgumentMetadataV0](../interfaces/_interfaces_metadata_types_.functionargumentmetadatav0.md)

  ↳ [FunctionMetadataV0](../interfaces/_interfaces_metadata_types_.functionmetadatav0.md)

  ↳ [FunctionMetadataV1](../interfaces/_interfaces_metadata_types_.functionmetadatav1.md)

  ↳ [MapTypeV0](../interfaces/_interfaces_metadata_types_.maptypev0.md)

  ↳ [MapTypeV10](../interfaces/_interfaces_metadata_types_.maptypev10.md)

  ↳ [MapTypeV11](../interfaces/_interfaces_metadata_types_.maptypev11.md)

  ↳ [MapTypeV2](../interfaces/_interfaces_metadata_types_.maptypev2.md)

  ↳ [MapTypeV4](../interfaces/_interfaces_metadata_types_.maptypev4.md)

  ↳ [MetadataV0](../interfaces/_interfaces_metadata_types_.metadatav0.md)

  ↳ [MetadataV1](../interfaces/_interfaces_metadata_types_.metadatav1.md)

  ↳ [MetadataV10](../interfaces/_interfaces_metadata_types_.metadatav10.md)

  ↳ [MetadataV11](../interfaces/_interfaces_metadata_types_.metadatav11.md)

  ↳ [MetadataV2](../interfaces/_interfaces_metadata_types_.metadatav2.md)

  ↳ [MetadataV3](../interfaces/_interfaces_metadata_types_.metadatav3.md)

  ↳ [MetadataV4](../interfaces/_interfaces_metadata_types_.metadatav4.md)

  ↳ [MetadataV5](../interfaces/_interfaces_metadata_types_.metadatav5.md)

  ↳ [MetadataV6](../interfaces/_interfaces_metadata_types_.metadatav6.md)

  ↳ [MetadataV7](../interfaces/_interfaces_metadata_types_.metadatav7.md)

  ↳ [MetadataV8](../interfaces/_interfaces_metadata_types_.metadatav8.md)

  ↳ [ModuleConstantMetadataV6](../interfaces/_interfaces_metadata_types_.moduleconstantmetadatav6.md)

  ↳ [ModuleMetadataV0](../interfaces/_interfaces_metadata_types_.modulemetadatav0.md)

  ↳ [ModuleMetadataV1](../interfaces/_interfaces_metadata_types_.modulemetadatav1.md)

  ↳ [ModuleMetadataV10](../interfaces/_interfaces_metadata_types_.modulemetadatav10.md)

  ↳ [ModuleMetadataV11](../interfaces/_interfaces_metadata_types_.modulemetadatav11.md)

  ↳ [ModuleMetadataV2](../interfaces/_interfaces_metadata_types_.modulemetadatav2.md)

  ↳ [ModuleMetadataV3](../interfaces/_interfaces_metadata_types_.modulemetadatav3.md)

  ↳ [ModuleMetadataV4](../interfaces/_interfaces_metadata_types_.modulemetadatav4.md)

  ↳ [ModuleMetadataV5](../interfaces/_interfaces_metadata_types_.modulemetadatav5.md)

  ↳ [ModuleMetadataV6](../interfaces/_interfaces_metadata_types_.modulemetadatav6.md)

  ↳ [ModuleMetadataV7](../interfaces/_interfaces_metadata_types_.modulemetadatav7.md)

  ↳ [ModuleMetadataV8](../interfaces/_interfaces_metadata_types_.modulemetadatav8.md)

  ↳ [OuterDispatchCallV0](../interfaces/_interfaces_metadata_types_.outerdispatchcallv0.md)

  ↳ [OuterDispatchMetadataV0](../interfaces/_interfaces_metadata_types_.outerdispatchmetadatav0.md)

  ↳ [OuterEventMetadataV0](../interfaces/_interfaces_metadata_types_.outereventmetadatav0.md)

  ↳ [RuntimeModuleMetadataV0](../interfaces/_interfaces_metadata_types_.runtimemodulemetadatav0.md)

  ↳ [StorageEntryMetadataV10](../interfaces/_interfaces_metadata_types_.storageentrymetadatav10.md)

  ↳ [StorageEntryMetadataV11](../interfaces/_interfaces_metadata_types_.storageentrymetadatav11.md)

  ↳ [StorageFunctionMetadataV0](../interfaces/_interfaces_metadata_types_.storagefunctionmetadatav0.md)

  ↳ [StorageFunctionMetadataV2](../interfaces/_interfaces_metadata_types_.storagefunctionmetadatav2.md)

  ↳ [StorageFunctionMetadataV3](../interfaces/_interfaces_metadata_types_.storagefunctionmetadatav3.md)

  ↳ [StorageFunctionMetadataV4](../interfaces/_interfaces_metadata_types_.storagefunctionmetadatav4.md)

  ↳ [StorageFunctionMetadataV5](../interfaces/_interfaces_metadata_types_.storagefunctionmetadatav5.md)

  ↳ [StorageMetadataV0](../interfaces/_interfaces_metadata_types_.storagemetadatav0.md)

  ↳ [StorageMetadataV10](../interfaces/_interfaces_metadata_types_.storagemetadatav10.md)

  ↳ [StorageMetadataV11](../interfaces/_interfaces_metadata_types_.storagemetadatav11.md)

  ↳ [StorageMetadataV7](../interfaces/_interfaces_metadata_types_.storagemetadatav7.md)

  ↳ [Linkage](_codec_linkage_.linkage.md)

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_codec_struct_.struct.md#constructor)

### Properties

* [registry](_codec_struct_.struct.md#registry)
* [Map](_codec_struct_.struct.md#static-map)

### Accessors

* [Type](_codec_struct_.struct.md#type)
* [encodedLength](_codec_struct_.struct.md#encodedlength)
* [hash](_codec_struct_.struct.md#hash)
* [isEmpty](_codec_struct_.struct.md#isempty)

### Methods

* [eq](_codec_struct_.struct.md#eq)
* [get](_codec_struct_.struct.md#get)
* [getAtIndex](_codec_struct_.struct.md#getatindex)
* [toArray](_codec_struct_.struct.md#toarray)
* [toHex](_codec_struct_.struct.md#tohex)
* [toJSON](_codec_struct_.struct.md#tojson)
* [toRawType](_codec_struct_.struct.md#torawtype)
* [toString](_codec_struct_.struct.md#tostring)
* [toU8a](_codec_struct_.struct.md#tou8a)
* [typesToMap](_codec_struct_.struct.md#static-typestomap)
* [with](_codec_struct_.struct.md#static-with)

## Constructors

###  constructor

\+ **new Struct**(`registry`: [Registry](../interfaces/_types_.registry.md), `Types`: S, `value`: V | Map‹any, any› | any[] | string, `jsonMap`: Map‹keyof S, string›): *[Struct](_codec_struct_.struct.md)*

*Defined in [packages/types/src/codec/Struct.ts:38](https://github.com/polkadot-js/api/blob/7b9a11ac25/packages/types/src/codec/Struct.ts#L38)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`registry` | [Registry](../interfaces/_types_.registry.md) | - |
`Types` | S | - |
`value` | V &#124; Map‹any, any› &#124; any[] &#124; string |  {} as V |
`jsonMap` | Map‹keyof S, string› |  new Map() |

**Returns:** *[Struct](_codec_struct_.struct.md)*

## Properties

###  registry

• **registry**: *[Registry](../interfaces/_types_.registry.md)*

*Implementation of [Codec](../interfaces/_types_.codec.md).[registry](../interfaces/_types_.codec.md#registry)*

*Defined in [packages/types/src/codec/Struct.ts:34](https://github.com/polkadot-js/api/blob/7b9a11ac25/packages/types/src/codec/Struct.ts#L34)*

___

### `Static` Map

▪ **Map**: *MapConstructor*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:36

## Accessors

###  Type

• **get Type**(): *E*

*Defined in [packages/types/src/codec/Struct.ts:158](https://github.com/polkadot-js/api/blob/7b9a11ac25/packages/types/src/codec/Struct.ts#L158)*

**`description`** Returns the Type description to sthe structure

**Returns:** *E*

___

###  encodedLength

• **get encodedLength**(): *number*

*Defined in [packages/types/src/codec/Struct.ts:171](https://github.com/polkadot-js/api/blob/7b9a11ac25/packages/types/src/codec/Struct.ts#L171)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](../interfaces/_types_.ihash.md)*

*Defined in [packages/types/src/codec/Struct.ts:182](https://github.com/polkadot-js/api/blob/7b9a11ac25/packages/types/src/codec/Struct.ts#L182)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](../interfaces/_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Defined in [packages/types/src/codec/Struct.ts:143](https://github.com/polkadot-js/api/blob/7b9a11ac25/packages/types/src/codec/Struct.ts#L143)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [packages/types/src/codec/Struct.ts:189](https://github.com/polkadot-js/api/blob/7b9a11ac25/packages/types/src/codec/Struct.ts#L189)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  get

▸ **get**(`name`: keyof S): *[Codec](../interfaces/_types_.codec.md) | undefined*

*Overrides void*

*Defined in [packages/types/src/codec/Struct.ts:197](https://github.com/polkadot-js/api/blob/7b9a11ac25/packages/types/src/codec/Struct.ts#L197)*

**`description`** Returns a specific names entry in the structure

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | keyof S | The name of the entry to retrieve  |

**Returns:** *[Codec](../interfaces/_types_.codec.md) | undefined*

___

###  getAtIndex

▸ **getAtIndex**(`index`: number): *[Codec](../interfaces/_types_.codec.md)*

*Defined in [packages/types/src/codec/Struct.ts:204](https://github.com/polkadot-js/api/blob/7b9a11ac25/packages/types/src/codec/Struct.ts#L204)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *[Codec](../interfaces/_types_.codec.md)*

___

###  toArray

▸ **toArray**(): *[Codec](../interfaces/_types_.codec.md)[]*

*Defined in [packages/types/src/codec/Struct.ts:211](https://github.com/polkadot-js/api/blob/7b9a11ac25/packages/types/src/codec/Struct.ts#L211)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](../interfaces/_types_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Defined in [packages/types/src/codec/Struct.ts:218](https://github.com/polkadot-js/api/blob/7b9a11ac25/packages/types/src/codec/Struct.ts#L218)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [packages/types/src/codec/Struct.ts:225](https://github.com/polkadot-js/api/blob/7b9a11ac25/packages/types/src/codec/Struct.ts#L225)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [packages/types/src/codec/Struct.ts:249](https://github.com/polkadot-js/api/blob/7b9a11ac25/packages/types/src/codec/Struct.ts#L249)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [packages/types/src/codec/Struct.ts:258](https://github.com/polkadot-js/api/blob/7b9a11ac25/packages/types/src/codec/Struct.ts#L258)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: [BareOpts](../modules/_types_.md#bareopts)): *Uint8Array*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [packages/types/src/codec/Struct.ts:266](https://github.com/polkadot-js/api/blob/7b9a11ac25/packages/types/src/codec/Struct.ts#L266)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | [BareOpts](../modules/_types_.md#bareopts) | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*

___

### `Static` typesToMap

▸ **typesToMap**(`registry`: [Registry](../interfaces/_types_.registry.md), `Types`: Record‹string, [Constructor](../interfaces/_types_.constructor.md)›): *Record‹string, string›*

*Defined in [packages/types/src/codec/Struct.ts:238](https://github.com/polkadot-js/api/blob/7b9a11ac25/packages/types/src/codec/Struct.ts#L238)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_types_.registry.md) |
`Types` | Record‹string, [Constructor](../interfaces/_types_.constructor.md)› |

**Returns:** *Record‹string, string›*

___

### `Static` with

▸ **with**<**S**>(`Types`: S): *[Constructor](../interfaces/_types_.constructor.md)‹[Struct](_codec_struct_.struct.md)‹S››*

*Defined in [packages/types/src/codec/Struct.ts:120](https://github.com/polkadot-js/api/blob/7b9a11ac25/packages/types/src/codec/Struct.ts#L120)*

**Type parameters:**

▪ **S**: *TypesDef*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | S |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹[Struct](_codec_struct_.struct.md)‹S››*
