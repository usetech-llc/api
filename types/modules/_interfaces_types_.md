[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/types"](_interfaces_types_.md)

# External module: "interfaces/types"

## Index

### References

* [AccountId](_interfaces_types_.md#accountid)
* [AccountIdOf](_interfaces_types_.md#accountidof)
* [AccountIndex](_interfaces_types_.md#accountindex)
* [AccountInfo](_interfaces_types_.md#accountinfo)
* [ActiveRecovery](_interfaces_types_.md#activerecovery)
* [Address](_interfaces_types_.md#address)
* [AliveContractInfo](_interfaces_types_.md#alivecontractinfo)
* [Amount](_interfaces_types_.md#amount)
* [ApiId](_interfaces_types_.md#apiid)
* [ApprovalFlag](_interfaces_types_.md#approvalflag)
* [AssetId](_interfaces_types_.md#assetid)
* [AssetOf](_interfaces_types_.md#assetof)
* [AssetOptions](_interfaces_types_.md#assetoptions)
* [AttestedCandidate](_interfaces_types_.md#attestedcandidate)
* [AuctionIndex](_interfaces_types_.md#auctionindex)
* [AuthIndex](_interfaces_types_.md#authindex)
* [AuthorityId](_interfaces_types_.md#authorityid)
* [AuthorityIndex](_interfaces_types_.md#authorityindex)
* [AuthorityList](_interfaces_types_.md#authoritylist)
* [AuthoritySignature](_interfaces_types_.md#authoritysignature)
* [AuthorityWeight](_interfaces_types_.md#authorityweight)
* [BabeAuthorityWeight](_interfaces_types_.md#babeauthorityweight)
* [BabeBlockWeight](_interfaces_types_.md#babeblockweight)
* [BabeWeight](_interfaces_types_.md#babeweight)
* [Balance](_interfaces_types_.md#balance)
* [BalanceLock](_interfaces_types_.md#balancelock)
* [BalanceOf](_interfaces_types_.md#balanceof)
* [BalanceUpload](_interfaces_types_.md#balanceupload)
* [Bid](_interfaces_types_.md#bid)
* [BidKind](_interfaces_types_.md#bidkind)
* [BidKindVouch](_interfaces_types_.md#bidkindvouch)
* [Bidder](_interfaces_types_.md#bidder)
* [Block](_interfaces_types_.md#block)
* [BlockAttestations](_interfaces_types_.md#blockattestations)
* [BlockHash](_interfaces_types_.md#blockhash)
* [BlockNumber](_interfaces_types_.md#blocknumber)
* [Call](_interfaces_types_.md#call)
* [CallMetadataV0](_interfaces_types_.md#callmetadatav0)
* [CandidateReceipt](_interfaces_types_.md#candidatereceipt)
* [ChainProperties](_interfaces_types_.md#chainproperties)
* [ChangesTrieConfiguration](_interfaces_types_.md#changestrieconfiguration)
* [CodeHash](_interfaces_types_.md#codehash)
* [CollatorId](_interfaces_types_.md#collatorid)
* [CollatorSignature](_interfaces_types_.md#collatorsignature)
* [Consensus](_interfaces_types_.md#consensus)
* [ConsensusEngineId](_interfaces_types_.md#consensusengineid)
* [ContractCallRequest](_interfaces_types_.md#contractcallrequest)
* [ContractExecResult](_interfaces_types_.md#contractexecresult)
* [ContractExecResultSuccess](_interfaces_types_.md#contractexecresultsuccess)
* [ContractInfo](_interfaces_types_.md#contractinfo)
* [ContractStorageKey](_interfaces_types_.md#contractstoragekey)
* [Conviction](_interfaces_types_.md#conviction)
* [Digest](_interfaces_types_.md#digest)
* [DigestItem](_interfaces_types_.md#digestitem)
* [DigestOf](_interfaces_types_.md#digestof)
* [DispatchClass](_interfaces_types_.md#dispatchclass)
* [DispatchError](_interfaces_types_.md#dispatcherror)
* [DispatchErrorModule](_interfaces_types_.md#dispatcherrormodule)
* [DispatchErrorTo198](_interfaces_types_.md#dispatcherrorto198)
* [DispatchInfo](_interfaces_types_.md#dispatchinfo)
* [DispatchInfoTo190](_interfaces_types_.md#dispatchinfoto190)
* [DispatchResult](_interfaces_types_.md#dispatchresult)
* [DispatchResultOf](_interfaces_types_.md#dispatchresultof)
* [DispatchResultTo198](_interfaces_types_.md#dispatchresultto198)
* [DoubleMapTypeV10](_interfaces_types_.md#doublemaptypev10)
* [DoubleMapTypeV11](_interfaces_types_.md#doublemaptypev11)
* [DoubleMapTypeV3](_interfaces_types_.md#doublemaptypev3)
* [DoubleMapTypeV4](_interfaces_types_.md#doublemaptypev4)
* [DoubleMapTypeV5](_interfaces_types_.md#doublemaptypev5)
* [DoubleMapTypeV6](_interfaces_types_.md#doublemaptypev6)
* [DoubleMapTypeV7](_interfaces_types_.md#doublemaptypev7)
* [DoubleMapTypeV8](_interfaces_types_.md#doublemaptypev8)
* [DoubleMapTypeV9](_interfaces_types_.md#doublemaptypev9)
* [EcdsaSignature](_interfaces_types_.md#ecdsasignature)
* [Ed25519Signature](_interfaces_types_.md#ed25519signature)
* [EgressQueueRoot](_interfaces_types_.md#egressqueueroot)
* [EraIndex](_interfaces_types_.md#eraindex)
* [EraPoints](_interfaces_types_.md#erapoints)
* [EraRewards](_interfaces_types_.md#erarewards)
* [ErrorMetadataV10](_interfaces_types_.md#errormetadatav10)
* [ErrorMetadataV11](_interfaces_types_.md#errormetadatav11)
* [ErrorMetadataV8](_interfaces_types_.md#errormetadatav8)
* [ErrorMetadataV9](_interfaces_types_.md#errormetadatav9)
* [EthereumAddress](_interfaces_types_.md#ethereumaddress)
* [Event](_interfaces_types_.md#event)
* [EventId](_interfaces_types_.md#eventid)
* [EventIndex](_interfaces_types_.md#eventindex)
* [EventMetadataLatest](_interfaces_types_.md#eventmetadatalatest)
* [EventMetadataV0](_interfaces_types_.md#eventmetadatav0)
* [EventMetadataV1](_interfaces_types_.md#eventmetadatav1)
* [EventMetadataV10](_interfaces_types_.md#eventmetadatav10)
* [EventMetadataV11](_interfaces_types_.md#eventmetadatav11)
* [EventMetadataV2](_interfaces_types_.md#eventmetadatav2)
* [EventMetadataV3](_interfaces_types_.md#eventmetadatav3)
* [EventMetadataV4](_interfaces_types_.md#eventmetadatav4)
* [EventMetadataV5](_interfaces_types_.md#eventmetadatav5)
* [EventMetadataV6](_interfaces_types_.md#eventmetadatav6)
* [EventMetadataV7](_interfaces_types_.md#eventmetadatav7)
* [EventMetadataV8](_interfaces_types_.md#eventmetadatav8)
* [EventMetadataV9](_interfaces_types_.md#eventmetadatav9)
* [EventRecord](_interfaces_types_.md#eventrecord)
* [EventRecordTo76](_interfaces_types_.md#eventrecordto76)
* [Exposure](_interfaces_types_.md#exposure)
* [Extrinsic](_interfaces_types_.md#extrinsic)
* [ExtrinsicEra](_interfaces_types_.md#extrinsicera)
* [ExtrinsicOrHash](_interfaces_types_.md#extrinsicorhash)
* [ExtrinsicPayload](_interfaces_types_.md#extrinsicpayload)
* [ExtrinsicPayloadUnknown](_interfaces_types_.md#extrinsicpayloadunknown)
* [ExtrinsicPayloadV1](_interfaces_types_.md#extrinsicpayloadv1)
* [ExtrinsicPayloadV2](_interfaces_types_.md#extrinsicpayloadv2)
* [ExtrinsicPayloadV3](_interfaces_types_.md#extrinsicpayloadv3)
* [ExtrinsicPayloadV4](_interfaces_types_.md#extrinsicpayloadv4)
* [ExtrinsicStatus](_interfaces_types_.md#extrinsicstatus)
* [ExtrinsicUnknown](_interfaces_types_.md#extrinsicunknown)
* [ExtrinsicV1](_interfaces_types_.md#extrinsicv1)
* [ExtrinsicV2](_interfaces_types_.md#extrinsicv2)
* [ExtrinsicV3](_interfaces_types_.md#extrinsicv3)
* [ExtrinsicV4](_interfaces_types_.md#extrinsicv4)
* [Forcing](_interfaces_types_.md#forcing)
* [FullIdentification](_interfaces_types_.md#fullidentification)
* [FunctionArgumentMetadataLatest](_interfaces_types_.md#functionargumentmetadatalatest)
* [FunctionArgumentMetadataV0](_interfaces_types_.md#functionargumentmetadatav0)
* [FunctionArgumentMetadataV1](_interfaces_types_.md#functionargumentmetadatav1)
* [FunctionArgumentMetadataV10](_interfaces_types_.md#functionargumentmetadatav10)
* [FunctionArgumentMetadataV11](_interfaces_types_.md#functionargumentmetadatav11)
* [FunctionArgumentMetadataV2](_interfaces_types_.md#functionargumentmetadatav2)
* [FunctionArgumentMetadataV3](_interfaces_types_.md#functionargumentmetadatav3)
* [FunctionArgumentMetadataV4](_interfaces_types_.md#functionargumentmetadatav4)
* [FunctionArgumentMetadataV5](_interfaces_types_.md#functionargumentmetadatav5)
* [FunctionArgumentMetadataV6](_interfaces_types_.md#functionargumentmetadatav6)
* [FunctionArgumentMetadataV7](_interfaces_types_.md#functionargumentmetadatav7)
* [FunctionArgumentMetadataV8](_interfaces_types_.md#functionargumentmetadatav8)
* [FunctionArgumentMetadataV9](_interfaces_types_.md#functionargumentmetadatav9)
* [FunctionMetadataLatest](_interfaces_types_.md#functionmetadatalatest)
* [FunctionMetadataV0](_interfaces_types_.md#functionmetadatav0)
* [FunctionMetadataV1](_interfaces_types_.md#functionmetadatav1)
* [FunctionMetadataV10](_interfaces_types_.md#functionmetadatav10)
* [FunctionMetadataV11](_interfaces_types_.md#functionmetadatav11)
* [FunctionMetadataV2](_interfaces_types_.md#functionmetadatav2)
* [FunctionMetadataV3](_interfaces_types_.md#functionmetadatav3)
* [FunctionMetadataV4](_interfaces_types_.md#functionmetadatav4)
* [FunctionMetadataV5](_interfaces_types_.md#functionmetadatav5)
* [FunctionMetadataV6](_interfaces_types_.md#functionmetadatav6)
* [FunctionMetadataV7](_interfaces_types_.md#functionmetadatav7)
* [FunctionMetadataV8](_interfaces_types_.md#functionmetadatav8)
* [FunctionMetadataV9](_interfaces_types_.md#functionmetadatav9)
* [Gas](_interfaces_types_.md#gas)
* [Hash](_interfaces_types_.md#hash)
* [HeadData](_interfaces_types_.md#headdata)
* [Header](_interfaces_types_.md#header)
* [Health](_interfaces_types_.md#health)
* [Heartbeat](_interfaces_types_.md#heartbeat)
* [IdentificationTuple](_interfaces_types_.md#identificationtuple)
* [IdentityInfo](_interfaces_types_.md#identityinfo)
* [IdentityInfoAdditional](_interfaces_types_.md#identityinfoadditional)
* [IdentityJudgement](_interfaces_types_.md#identityjudgement)
* [ImmortalEra](_interfaces_types_.md#immortalera)
* [IncludedBlocks](_interfaces_types_.md#includedblocks)
* [InclusionHeight](_interfaces_types_.md#inclusionheight)
* [IncomingParachain](_interfaces_types_.md#incomingparachain)
* [IncomingParachainDeploy](_interfaces_types_.md#incomingparachaindeploy)
* [IncomingParachainFixed](_interfaces_types_.md#incomingparachainfixed)
* [Index](_interfaces_types_.md#index)
* [IndividualExposure](_interfaces_types_.md#individualexposure)
* [InherentOfflineReport](_interfaces_types_.md#inherentofflinereport)
* [Justification](_interfaces_types_.md#justification)
* [Key](_interfaces_types_.md#key)
* [KeyTypeId](_interfaces_types_.md#keytypeid)
* [KeyValue](_interfaces_types_.md#keyvalue)
* [KeyValueOption](_interfaces_types_.md#keyvalueoption)
* [Keys](_interfaces_types_.md#keys)
* [Kind](_interfaces_types_.md#kind)
* [LeasePeriod](_interfaces_types_.md#leaseperiod)
* [LeasePeriodOf](_interfaces_types_.md#leaseperiodof)
* [LockIdentifier](_interfaces_types_.md#lockidentifier)
* [LockPeriods](_interfaces_types_.md#lockperiods)
* [MapKindV11](_interfaces_types_.md#mapkindv11)
* [MapTypeV0](_interfaces_types_.md#maptypev0)
* [MapTypeV10](_interfaces_types_.md#maptypev10)
* [MapTypeV11](_interfaces_types_.md#maptypev11)
* [MapTypeV2](_interfaces_types_.md#maptypev2)
* [MapTypeV3](_interfaces_types_.md#maptypev3)
* [MapTypeV4](_interfaces_types_.md#maptypev4)
* [MapTypeV5](_interfaces_types_.md#maptypev5)
* [MapTypeV6](_interfaces_types_.md#maptypev6)
* [MapTypeV7](_interfaces_types_.md#maptypev7)
* [MapTypeV8](_interfaces_types_.md#maptypev8)
* [MapTypeV9](_interfaces_types_.md#maptypev9)
* [MaybeVrf](_interfaces_types_.md#maybevrf)
* [MemberCount](_interfaces_types_.md#membercount)
* [MetadataAll](_interfaces_types_.md#metadataall)
* [MetadataLatest](_interfaces_types_.md#metadatalatest)
* [MetadataV0](_interfaces_types_.md#metadatav0)
* [MetadataV1](_interfaces_types_.md#metadatav1)
* [MetadataV10](_interfaces_types_.md#metadatav10)
* [MetadataV11](_interfaces_types_.md#metadatav11)
* [MetadataV2](_interfaces_types_.md#metadatav2)
* [MetadataV3](_interfaces_types_.md#metadatav3)
* [MetadataV4](_interfaces_types_.md#metadatav4)
* [MetadataV5](_interfaces_types_.md#metadatav5)
* [MetadataV6](_interfaces_types_.md#metadatav6)
* [MetadataV7](_interfaces_types_.md#metadatav7)
* [MetadataV8](_interfaces_types_.md#metadatav8)
* [MetadataV9](_interfaces_types_.md#metadatav9)
* [ModuleConstantMetadataLatest](_interfaces_types_.md#moduleconstantmetadatalatest)
* [ModuleConstantMetadataV10](_interfaces_types_.md#moduleconstantmetadatav10)
* [ModuleConstantMetadataV11](_interfaces_types_.md#moduleconstantmetadatav11)
* [ModuleConstantMetadataV6](_interfaces_types_.md#moduleconstantmetadatav6)
* [ModuleConstantMetadataV7](_interfaces_types_.md#moduleconstantmetadatav7)
* [ModuleConstantMetadataV8](_interfaces_types_.md#moduleconstantmetadatav8)
* [ModuleConstantMetadataV9](_interfaces_types_.md#moduleconstantmetadatav9)
* [ModuleMetadataLatest](_interfaces_types_.md#modulemetadatalatest)
* [ModuleMetadataV0](_interfaces_types_.md#modulemetadatav0)
* [ModuleMetadataV1](_interfaces_types_.md#modulemetadatav1)
* [ModuleMetadataV10](_interfaces_types_.md#modulemetadatav10)
* [ModuleMetadataV11](_interfaces_types_.md#modulemetadatav11)
* [ModuleMetadataV2](_interfaces_types_.md#modulemetadatav2)
* [ModuleMetadataV3](_interfaces_types_.md#modulemetadatav3)
* [ModuleMetadataV4](_interfaces_types_.md#modulemetadatav4)
* [ModuleMetadataV5](_interfaces_types_.md#modulemetadatav5)
* [ModuleMetadataV6](_interfaces_types_.md#modulemetadatav6)
* [ModuleMetadataV7](_interfaces_types_.md#modulemetadatav7)
* [ModuleMetadataV8](_interfaces_types_.md#modulemetadatav8)
* [ModuleMetadataV9](_interfaces_types_.md#modulemetadatav9)
* [Moment](_interfaces_types_.md#moment)
* [MomentOf](_interfaces_types_.md#momentof)
* [MoreAttestations](_interfaces_types_.md#moreattestations)
* [MortalEra](_interfaces_types_.md#mortalera)
* [MultiSignature](_interfaces_types_.md#multisignature)
* [Multiplier](_interfaces_types_.md#multiplier)
* [Multisig](_interfaces_types_.md#multisig)
* [NetworkState](_interfaces_types_.md#networkstate)
* [NewAccountOutcome](_interfaces_types_.md#newaccountoutcome)
* [NewBidder](_interfaces_types_.md#newbidder)
* [NextAuthority](_interfaces_types_.md#nextauthority)
* [Nominations](_interfaces_types_.md#nominations)
* [OffenceDetails](_interfaces_types_.md#offencedetails)
* [Offender](_interfaces_types_.md#offender)
* [OpaqueKey](_interfaces_types_.md#opaquekey)
* [OpaqueMultiaddr](_interfaces_types_.md#opaquemultiaddr)
* [OpaqueNetworkState](_interfaces_types_.md#opaquenetworkstate)
* [OpaquePeerId](_interfaces_types_.md#opaquepeerid)
* [OpaqueTimeSlot](_interfaces_types_.md#opaquetimeslot)
* [OpenTip](_interfaces_types_.md#opentip)
* [OpenTipFinder](_interfaces_types_.md#opentipfinder)
* [OpenTipTip](_interfaces_types_.md#opentiptip)
* [Origin](_interfaces_types_.md#origin)
* [OuterDispatchCallV0](_interfaces_types_.md#outerdispatchcallv0)
* [OuterDispatchMetadataV0](_interfaces_types_.md#outerdispatchmetadatav0)
* [OuterEventEventMetadataEventsV0](_interfaces_types_.md#outereventeventmetadataeventsv0)
* [OuterEventEventMetadataV0](_interfaces_types_.md#outereventeventmetadatav0)
* [OuterEventMetadataV0](_interfaces_types_.md#outereventmetadatav0)
* [Owner](_interfaces_types_.md#owner)
* [ParaId](_interfaces_types_.md#paraid)
* [ParaIdOf](_interfaces_types_.md#paraidof)
* [ParaInfo](_interfaces_types_.md#parainfo)
* [ParaScheduling](_interfaces_types_.md#parascheduling)
* [ParachainDispatchOrigin](_interfaces_types_.md#parachaindispatchorigin)
* [PeerInfo](_interfaces_types_.md#peerinfo)
* [PendingPause](_interfaces_types_.md#pendingpause)
* [PendingResume](_interfaces_types_.md#pendingresume)
* [Perbill](_interfaces_types_.md#perbill)
* [Percent](_interfaces_types_.md#percent)
* [Permill](_interfaces_types_.md#permill)
* [PermissionLatest](_interfaces_types_.md#permissionlatest)
* [PermissionVersions](_interfaces_types_.md#permissionversions)
* [PermissionsV1](_interfaces_types_.md#permissionsv1)
* [Perquintill](_interfaces_types_.md#perquintill)
* [Phantom](_interfaces_types_.md#phantom)
* [PhantomData](_interfaces_types_.md#phantomdata)
* [Phase](_interfaces_types_.md#phase)
* [PlainTypeLatest](_interfaces_types_.md#plaintypelatest)
* [PlainTypeV0](_interfaces_types_.md#plaintypev0)
* [PlainTypeV10](_interfaces_types_.md#plaintypev10)
* [PlainTypeV11](_interfaces_types_.md#plaintypev11)
* [PlainTypeV2](_interfaces_types_.md#plaintypev2)
* [PlainTypeV3](_interfaces_types_.md#plaintypev3)
* [PlainTypeV4](_interfaces_types_.md#plaintypev4)
* [PlainTypeV5](_interfaces_types_.md#plaintypev5)
* [PlainTypeV6](_interfaces_types_.md#plaintypev6)
* [PlainTypeV7](_interfaces_types_.md#plaintypev7)
* [PlainTypeV8](_interfaces_types_.md#plaintypev8)
* [PlainTypeV9](_interfaces_types_.md#plaintypev9)
* [Points](_interfaces_types_.md#points)
* [PreRuntime](_interfaces_types_.md#preruntime)
* [PrefabWasmModule](_interfaces_types_.md#prefabwasmmodule)
* [PrefabWasmModuleReserved](_interfaces_types_.md#prefabwasmmodulereserved)
* [PropIndex](_interfaces_types_.md#propindex)
* [Proposal](_interfaces_types_.md#proposal)
* [ProposalIndex](_interfaces_types_.md#proposalindex)
* [RawAuraPreDigest](_interfaces_types_.md#rawaurapredigest)
* [RawBabePreDigest](_interfaces_types_.md#rawbabepredigest)
* [RawBabePreDigestCompat](_interfaces_types_.md#rawbabepredigestcompat)
* [RawBabePreDigestPrimary](_interfaces_types_.md#rawbabepredigestprimary)
* [RawBabePreDigestPrimaryTo159](_interfaces_types_.md#rawbabepredigestprimaryto159)
* [RawBabePreDigestSecondary](_interfaces_types_.md#rawbabepredigestsecondary)
* [RawBabePreDigestSecondaryTo159](_interfaces_types_.md#rawbabepredigestsecondaryto159)
* [RawBabePreDigestTo159](_interfaces_types_.md#rawbabepredigestto159)
* [RecoveryConfig](_interfaces_types_.md#recoveryconfig)
* [ReferendumIndex](_interfaces_types_.md#referendumindex)
* [ReferendumInfo](_interfaces_types_.md#referenduminfo)
* [RegistrarIndex](_interfaces_types_.md#registrarindex)
* [RegistrarInfo](_interfaces_types_.md#registrarinfo)
* [Registration](_interfaces_types_.md#registration)
* [RegistrationJudgement](_interfaces_types_.md#registrationjudgement)
* [ReportIdOf](_interfaces_types_.md#reportidof)
* [Reporter](_interfaces_types_.md#reporter)
* [Retriable](_interfaces_types_.md#retriable)
* [RewardDestination](_interfaces_types_.md#rewarddestination)
* [RpcMethods](_interfaces_types_.md#rpcmethods)
* [RuntimeDispatchInfo](_interfaces_types_.md#runtimedispatchinfo)
* [RuntimeModuleMetadataV0](_interfaces_types_.md#runtimemodulemetadatav0)
* [RuntimeVersion](_interfaces_types_.md#runtimeversion)
* [RuntimeVersionApi](_interfaces_types_.md#runtimeversionapi)
* [Schedule](_interfaces_types_.md#schedule)
* [Seal](_interfaces_types_.md#seal)
* [SealV0](_interfaces_types_.md#sealv0)
* [SeedOf](_interfaces_types_.md#seedof)
* [SessionIndex](_interfaces_types_.md#sessionindex)
* [SessionKey](_interfaces_types_.md#sessionkey)
* [SessionKeys1](_interfaces_types_.md#sessionkeys1)
* [SessionKeys2](_interfaces_types_.md#sessionkeys2)
* [SessionKeys3](_interfaces_types_.md#sessionkeys3)
* [SessionKeys4](_interfaces_types_.md#sessionkeys4)
* [SessionKeys5](_interfaces_types_.md#sessionkeys5)
* [SessionKeys6](_interfaces_types_.md#sessionkeys6)
* [SetId](_interfaces_types_.md#setid)
* [SetIndex](_interfaces_types_.md#setindex)
* [Signature](_interfaces_types_.md#signature)
* [SignedBlock](_interfaces_types_.md#signedblock)
* [SignerPayload](_interfaces_types_.md#signerpayload)
* [SlashJournalEntry](_interfaces_types_.md#slashjournalentry)
* [SlashingSpans](_interfaces_types_.md#slashingspans)
* [SlashingSpansTo204](_interfaces_types_.md#slashingspansto204)
* [SlotNumber](_interfaces_types_.md#slotnumber)
* [SlotRange](_interfaces_types_.md#slotrange)
* [SocietyJudgement](_interfaces_types_.md#societyjudgement)
* [SpanIndex](_interfaces_types_.md#spanindex)
* [SpanRecord](_interfaces_types_.md#spanrecord)
* [Sr25519Signature](_interfaces_types_.md#sr25519signature)
* [StakingLedger](_interfaces_types_.md#stakingledger)
* [StorageChangeSet](_interfaces_types_.md#storagechangeset)
* [StorageEntryMetadataLatest](_interfaces_types_.md#storageentrymetadatalatest)
* [StorageEntryMetadataV10](_interfaces_types_.md#storageentrymetadatav10)
* [StorageEntryMetadataV11](_interfaces_types_.md#storageentrymetadatav11)
* [StorageEntryMetadataV6](_interfaces_types_.md#storageentrymetadatav6)
* [StorageEntryMetadataV7](_interfaces_types_.md#storageentrymetadatav7)
* [StorageEntryMetadataV8](_interfaces_types_.md#storageentrymetadatav8)
* [StorageEntryMetadataV9](_interfaces_types_.md#storageentrymetadatav9)
* [StorageEntryModifierLatest](_interfaces_types_.md#storageentrymodifierlatest)
* [StorageEntryModifierV10](_interfaces_types_.md#storageentrymodifierv10)
* [StorageEntryModifierV11](_interfaces_types_.md#storageentrymodifierv11)
* [StorageEntryModifierV6](_interfaces_types_.md#storageentrymodifierv6)
* [StorageEntryModifierV7](_interfaces_types_.md#storageentrymodifierv7)
* [StorageEntryModifierV8](_interfaces_types_.md#storageentrymodifierv8)
* [StorageEntryModifierV9](_interfaces_types_.md#storageentrymodifierv9)
* [StorageEntryTypeLatest](_interfaces_types_.md#storageentrytypelatest)
* [StorageEntryTypeV10](_interfaces_types_.md#storageentrytypev10)
* [StorageEntryTypeV11](_interfaces_types_.md#storageentrytypev11)
* [StorageEntryTypeV6](_interfaces_types_.md#storageentrytypev6)
* [StorageEntryTypeV7](_interfaces_types_.md#storageentrytypev7)
* [StorageEntryTypeV8](_interfaces_types_.md#storageentrytypev8)
* [StorageEntryTypeV9](_interfaces_types_.md#storageentrytypev9)
* [StorageFunctionMetadataV0](_interfaces_types_.md#storagefunctionmetadatav0)
* [StorageFunctionMetadataV1](_interfaces_types_.md#storagefunctionmetadatav1)
* [StorageFunctionMetadataV2](_interfaces_types_.md#storagefunctionmetadatav2)
* [StorageFunctionMetadataV3](_interfaces_types_.md#storagefunctionmetadatav3)
* [StorageFunctionMetadataV4](_interfaces_types_.md#storagefunctionmetadatav4)
* [StorageFunctionMetadataV5](_interfaces_types_.md#storagefunctionmetadatav5)
* [StorageFunctionModifierV0](_interfaces_types_.md#storagefunctionmodifierv0)
* [StorageFunctionModifierV1](_interfaces_types_.md#storagefunctionmodifierv1)
* [StorageFunctionModifierV2](_interfaces_types_.md#storagefunctionmodifierv2)
* [StorageFunctionModifierV3](_interfaces_types_.md#storagefunctionmodifierv3)
* [StorageFunctionModifierV4](_interfaces_types_.md#storagefunctionmodifierv4)
* [StorageFunctionModifierV5](_interfaces_types_.md#storagefunctionmodifierv5)
* [StorageFunctionTypeV0](_interfaces_types_.md#storagefunctiontypev0)
* [StorageFunctionTypeV1](_interfaces_types_.md#storagefunctiontypev1)
* [StorageFunctionTypeV2](_interfaces_types_.md#storagefunctiontypev2)
* [StorageFunctionTypeV3](_interfaces_types_.md#storagefunctiontypev3)
* [StorageFunctionTypeV4](_interfaces_types_.md#storagefunctiontypev4)
* [StorageFunctionTypeV5](_interfaces_types_.md#storagefunctiontypev5)
* [StorageHasher](_interfaces_types_.md#storagehasher)
* [StorageHasherV10](_interfaces_types_.md#storagehasherv10)
* [StorageHasherV11](_interfaces_types_.md#storagehasherv11)
* [StorageHasherV4](_interfaces_types_.md#storagehasherv4)
* [StorageHasherV5](_interfaces_types_.md#storagehasherv5)
* [StorageHasherV6](_interfaces_types_.md#storagehasherv6)
* [StorageHasherV7](_interfaces_types_.md#storagehasherv7)
* [StorageHasherV8](_interfaces_types_.md#storagehasherv8)
* [StorageHasherV9](_interfaces_types_.md#storagehasherv9)
* [StorageMetadataV0](_interfaces_types_.md#storagemetadatav0)
* [StorageMetadataV10](_interfaces_types_.md#storagemetadatav10)
* [StorageMetadataV11](_interfaces_types_.md#storagemetadatav11)
* [StorageMetadataV7](_interfaces_types_.md#storagemetadatav7)
* [StorageMetadataV8](_interfaces_types_.md#storagemetadatav8)
* [StorageMetadataV9](_interfaces_types_.md#storagemetadatav9)
* [StoredPendingChange](_interfaces_types_.md#storedpendingchange)
* [StoredState](_interfaces_types_.md#storedstate)
* [StrikeCount](_interfaces_types_.md#strikecount)
* [SubId](_interfaces_types_.md#subid)
* [Timepoint](_interfaces_types_.md#timepoint)
* [TombstoneContractInfo](_interfaces_types_.md#tombstonecontractinfo)
* [TreasuryProposal](_interfaces_types_.md#treasuryproposal)
* [TrieId](_interfaces_types_.md#trieid)
* [UnappliedSlash](_interfaces_types_.md#unappliedslash)
* [UnappliedSlashOther](_interfaces_types_.md#unappliedslashother)
* [Uncle](_interfaces_types_.md#uncle)
* [UncleEntryItem](_interfaces_types_.md#uncleentryitem)
* [UnlockChunk](_interfaces_types_.md#unlockchunk)
* [UpwardMessage](_interfaces_types_.md#upwardmessage)
* [ValidatorId](_interfaces_types_.md#validatorid)
* [ValidatorIndex](_interfaces_types_.md#validatorindex)
* [ValidatorPrefs](_interfaces_types_.md#validatorprefs)
* [ValidatorPrefsTo145](_interfaces_types_.md#validatorprefsto145)
* [ValidatorPrefsTo196](_interfaces_types_.md#validatorprefsto196)
* [ValidityAttestation](_interfaces_types_.md#validityattestation)
* [ValidityVote](_interfaces_types_.md#validityvote)
* [VestingSchedule](_interfaces_types_.md#vestingschedule)
* [Vote](_interfaces_types_.md#vote)
* [VoteIndex](_interfaces_types_.md#voteindex)
* [VoteThreshold](_interfaces_types_.md#votethreshold)
* [VoterInfo](_interfaces_types_.md#voterinfo)
* [Votes](_interfaces_types_.md#votes)
* [VouchingStatus](_interfaces_types_.md#vouchingstatus)
* [VrfData](_interfaces_types_.md#vrfdata)
* [VrfProof](_interfaces_types_.md#vrfproof)
* [Weight](_interfaces_types_.md#weight)
* [WeightMultiplier](_interfaces_types_.md#weightmultiplier)
* [WinningData](_interfaces_types_.md#winningdata)
* [WinningDataEntry](_interfaces_types_.md#winningdataentry)
* [WithdrawReasons](_interfaces_types_.md#withdrawreasons)

## References

###  AccountId

• **AccountId**:

___

###  AccountIdOf

• **AccountIdOf**:

___

###  AccountIndex

• **AccountIndex**:

___

###  AccountInfo

• **AccountInfo**:

___

###  ActiveRecovery

• **ActiveRecovery**:

___

###  Address

• **Address**:

___

###  AliveContractInfo

• **AliveContractInfo**:

___

###  Amount

• **Amount**:

___

###  ApiId

• **ApiId**:

___

###  ApprovalFlag

• **ApprovalFlag**:

___

###  AssetId

• **AssetId**:

___

###  AssetOf

• **AssetOf**:

___

###  AssetOptions

• **AssetOptions**:

___

###  AttestedCandidate

• **AttestedCandidate**:

___

###  AuctionIndex

• **AuctionIndex**:

___

###  AuthIndex

• **AuthIndex**:

___

###  AuthorityId

• **AuthorityId**:

___

###  AuthorityIndex

• **AuthorityIndex**:

___

###  AuthorityList

• **AuthorityList**:

___

###  AuthoritySignature

• **AuthoritySignature**:

___

###  AuthorityWeight

• **AuthorityWeight**:

___

###  BabeAuthorityWeight

• **BabeAuthorityWeight**:

___

###  BabeBlockWeight

• **BabeBlockWeight**:

___

###  BabeWeight

• **BabeWeight**:

___

###  Balance

• **Balance**:

___

###  BalanceLock

• **BalanceLock**:

___

###  BalanceOf

• **BalanceOf**:

___

###  BalanceUpload

• **BalanceUpload**:

___

###  Bid

• **Bid**:

___

###  BidKind

• **BidKind**:

___

###  BidKindVouch

• **BidKindVouch**:

___

###  Bidder

• **Bidder**:

___

###  Block

• **Block**:

___

###  BlockAttestations

• **BlockAttestations**:

___

###  BlockHash

• **BlockHash**:

___

###  BlockNumber

• **BlockNumber**:

___

###  Call

• **Call**:

___

###  CallMetadataV0

• **CallMetadataV0**:

___

###  CandidateReceipt

• **CandidateReceipt**:

___

###  ChainProperties

• **ChainProperties**:

___

###  ChangesTrieConfiguration

• **ChangesTrieConfiguration**:

___

###  CodeHash

• **CodeHash**:

___

###  CollatorId

• **CollatorId**:

___

###  CollatorSignature

• **CollatorSignature**:

___

###  Consensus

• **Consensus**:

___

###  ConsensusEngineId

• **ConsensusEngineId**:

___

###  ContractCallRequest

• **ContractCallRequest**:

___

###  ContractExecResult

• **ContractExecResult**:

___

###  ContractExecResultSuccess

• **ContractExecResultSuccess**:

___

###  ContractInfo

• **ContractInfo**:

___

###  ContractStorageKey

• **ContractStorageKey**:

___

###  Conviction

• **Conviction**:

___

###  Digest

• **Digest**:

___

###  DigestItem

• **DigestItem**:

___

###  DigestOf

• **DigestOf**:

___

###  DispatchClass

• **DispatchClass**:

___

###  DispatchError

• **DispatchError**:

___

###  DispatchErrorModule

• **DispatchErrorModule**:

___

###  DispatchErrorTo198

• **DispatchErrorTo198**:

___

###  DispatchInfo

• **DispatchInfo**:

___

###  DispatchInfoTo190

• **DispatchInfoTo190**:

___

###  DispatchResult

• **DispatchResult**:

___

###  DispatchResultOf

• **DispatchResultOf**:

___

###  DispatchResultTo198

• **DispatchResultTo198**:

___

###  DoubleMapTypeV10

• **DoubleMapTypeV10**:

___

###  DoubleMapTypeV11

• **DoubleMapTypeV11**:

___

###  DoubleMapTypeV3

• **DoubleMapTypeV3**:

___

###  DoubleMapTypeV4

• **DoubleMapTypeV4**:

___

###  DoubleMapTypeV5

• **DoubleMapTypeV5**:

___

###  DoubleMapTypeV6

• **DoubleMapTypeV6**:

___

###  DoubleMapTypeV7

• **DoubleMapTypeV7**:

___

###  DoubleMapTypeV8

• **DoubleMapTypeV8**:

___

###  DoubleMapTypeV9

• **DoubleMapTypeV9**:

___

###  EcdsaSignature

• **EcdsaSignature**:

___

###  Ed25519Signature

• **Ed25519Signature**:

___

###  EgressQueueRoot

• **EgressQueueRoot**:

___

###  EraIndex

• **EraIndex**:

___

###  EraPoints

• **EraPoints**:

___

###  EraRewards

• **EraRewards**:

___

###  ErrorMetadataV10

• **ErrorMetadataV10**:

___

###  ErrorMetadataV11

• **ErrorMetadataV11**:

___

###  ErrorMetadataV8

• **ErrorMetadataV8**:

___

###  ErrorMetadataV9

• **ErrorMetadataV9**:

___

###  EthereumAddress

• **EthereumAddress**:

___

###  Event

• **Event**:

___

###  EventId

• **EventId**:

___

###  EventIndex

• **EventIndex**:

___

###  EventMetadataLatest

• **EventMetadataLatest**:

___

###  EventMetadataV0

• **EventMetadataV0**:

___

###  EventMetadataV1

• **EventMetadataV1**:

___

###  EventMetadataV10

• **EventMetadataV10**:

___

###  EventMetadataV11

• **EventMetadataV11**:

___

###  EventMetadataV2

• **EventMetadataV2**:

___

###  EventMetadataV3

• **EventMetadataV3**:

___

###  EventMetadataV4

• **EventMetadataV4**:

___

###  EventMetadataV5

• **EventMetadataV5**:

___

###  EventMetadataV6

• **EventMetadataV6**:

___

###  EventMetadataV7

• **EventMetadataV7**:

___

###  EventMetadataV8

• **EventMetadataV8**:

___

###  EventMetadataV9

• **EventMetadataV9**:

___

###  EventRecord

• **EventRecord**:

___

###  EventRecordTo76

• **EventRecordTo76**:

___

###  Exposure

• **Exposure**:

___

###  Extrinsic

• **Extrinsic**:

___

###  ExtrinsicEra

• **ExtrinsicEra**:

___

###  ExtrinsicOrHash

• **ExtrinsicOrHash**:

___

###  ExtrinsicPayload

• **ExtrinsicPayload**:

___

###  ExtrinsicPayloadUnknown

• **ExtrinsicPayloadUnknown**:

___

###  ExtrinsicPayloadV1

• **ExtrinsicPayloadV1**:

___

###  ExtrinsicPayloadV2

• **ExtrinsicPayloadV2**:

___

###  ExtrinsicPayloadV3

• **ExtrinsicPayloadV3**:

___

###  ExtrinsicPayloadV4

• **ExtrinsicPayloadV4**:

___

###  ExtrinsicStatus

• **ExtrinsicStatus**:

___

###  ExtrinsicUnknown

• **ExtrinsicUnknown**:

___

###  ExtrinsicV1

• **ExtrinsicV1**:

___

###  ExtrinsicV2

• **ExtrinsicV2**:

___

###  ExtrinsicV3

• **ExtrinsicV3**:

___

###  ExtrinsicV4

• **ExtrinsicV4**:

___

###  Forcing

• **Forcing**:

___

###  FullIdentification

• **FullIdentification**:

___

###  FunctionArgumentMetadataLatest

• **FunctionArgumentMetadataLatest**:

___

###  FunctionArgumentMetadataV0

• **FunctionArgumentMetadataV0**:

___

###  FunctionArgumentMetadataV1

• **FunctionArgumentMetadataV1**:

___

###  FunctionArgumentMetadataV10

• **FunctionArgumentMetadataV10**:

___

###  FunctionArgumentMetadataV11

• **FunctionArgumentMetadataV11**:

___

###  FunctionArgumentMetadataV2

• **FunctionArgumentMetadataV2**:

___

###  FunctionArgumentMetadataV3

• **FunctionArgumentMetadataV3**:

___

###  FunctionArgumentMetadataV4

• **FunctionArgumentMetadataV4**:

___

###  FunctionArgumentMetadataV5

• **FunctionArgumentMetadataV5**:

___

###  FunctionArgumentMetadataV6

• **FunctionArgumentMetadataV6**:

___

###  FunctionArgumentMetadataV7

• **FunctionArgumentMetadataV7**:

___

###  FunctionArgumentMetadataV8

• **FunctionArgumentMetadataV8**:

___

###  FunctionArgumentMetadataV9

• **FunctionArgumentMetadataV9**:

___

###  FunctionMetadataLatest

• **FunctionMetadataLatest**:

___

###  FunctionMetadataV0

• **FunctionMetadataV0**:

___

###  FunctionMetadataV1

• **FunctionMetadataV1**:

___

###  FunctionMetadataV10

• **FunctionMetadataV10**:

___

###  FunctionMetadataV11

• **FunctionMetadataV11**:

___

###  FunctionMetadataV2

• **FunctionMetadataV2**:

___

###  FunctionMetadataV3

• **FunctionMetadataV3**:

___

###  FunctionMetadataV4

• **FunctionMetadataV4**:

___

###  FunctionMetadataV5

• **FunctionMetadataV5**:

___

###  FunctionMetadataV6

• **FunctionMetadataV6**:

___

###  FunctionMetadataV7

• **FunctionMetadataV7**:

___

###  FunctionMetadataV8

• **FunctionMetadataV8**:

___

###  FunctionMetadataV9

• **FunctionMetadataV9**:

___

###  Gas

• **Gas**:

___

###  Hash

• **Hash**:

___

###  HeadData

• **HeadData**:

___

###  Header

• **Header**:

___

###  Health

• **Health**:

___

###  Heartbeat

• **Heartbeat**:

___

###  IdentificationTuple

• **IdentificationTuple**:

___

###  IdentityInfo

• **IdentityInfo**:

___

###  IdentityInfoAdditional

• **IdentityInfoAdditional**:

___

###  IdentityJudgement

• **IdentityJudgement**:

___

###  ImmortalEra

• **ImmortalEra**:

___

###  IncludedBlocks

• **IncludedBlocks**:

___

###  InclusionHeight

• **InclusionHeight**:

___

###  IncomingParachain

• **IncomingParachain**:

___

###  IncomingParachainDeploy

• **IncomingParachainDeploy**:

___

###  IncomingParachainFixed

• **IncomingParachainFixed**:

___

###  Index

• **Index**:

___

###  IndividualExposure

• **IndividualExposure**:

___

###  InherentOfflineReport

• **InherentOfflineReport**:

___

###  Justification

• **Justification**:

___

###  Key

• **Key**:

___

###  KeyTypeId

• **KeyTypeId**:

___

###  KeyValue

• **KeyValue**:

___

###  KeyValueOption

• **KeyValueOption**:

___

###  Keys

• **Keys**:

___

###  Kind

• **Kind**:

___

###  LeasePeriod

• **LeasePeriod**:

___

###  LeasePeriodOf

• **LeasePeriodOf**:

___

###  LockIdentifier

• **LockIdentifier**:

___

###  LockPeriods

• **LockPeriods**:

___

###  MapKindV11

• **MapKindV11**:

___

###  MapTypeV0

• **MapTypeV0**:

___

###  MapTypeV10

• **MapTypeV10**:

___

###  MapTypeV11

• **MapTypeV11**:

___

###  MapTypeV2

• **MapTypeV2**:

___

###  MapTypeV3

• **MapTypeV3**:

___

###  MapTypeV4

• **MapTypeV4**:

___

###  MapTypeV5

• **MapTypeV5**:

___

###  MapTypeV6

• **MapTypeV6**:

___

###  MapTypeV7

• **MapTypeV7**:

___

###  MapTypeV8

• **MapTypeV8**:

___

###  MapTypeV9

• **MapTypeV9**:

___

###  MaybeVrf

• **MaybeVrf**:

___

###  MemberCount

• **MemberCount**:

___

###  MetadataAll

• **MetadataAll**:

___

###  MetadataLatest

• **MetadataLatest**:

___

###  MetadataV0

• **MetadataV0**:

___

###  MetadataV1

• **MetadataV1**:

___

###  MetadataV10

• **MetadataV10**:

___

###  MetadataV11

• **MetadataV11**:

___

###  MetadataV2

• **MetadataV2**:

___

###  MetadataV3

• **MetadataV3**:

___

###  MetadataV4

• **MetadataV4**:

___

###  MetadataV5

• **MetadataV5**:

___

###  MetadataV6

• **MetadataV6**:

___

###  MetadataV7

• **MetadataV7**:

___

###  MetadataV8

• **MetadataV8**:

___

###  MetadataV9

• **MetadataV9**:

___

###  ModuleConstantMetadataLatest

• **ModuleConstantMetadataLatest**:

___

###  ModuleConstantMetadataV10

• **ModuleConstantMetadataV10**:

___

###  ModuleConstantMetadataV11

• **ModuleConstantMetadataV11**:

___

###  ModuleConstantMetadataV6

• **ModuleConstantMetadataV6**:

___

###  ModuleConstantMetadataV7

• **ModuleConstantMetadataV7**:

___

###  ModuleConstantMetadataV8

• **ModuleConstantMetadataV8**:

___

###  ModuleConstantMetadataV9

• **ModuleConstantMetadataV9**:

___

###  ModuleMetadataLatest

• **ModuleMetadataLatest**:

___

###  ModuleMetadataV0

• **ModuleMetadataV0**:

___

###  ModuleMetadataV1

• **ModuleMetadataV1**:

___

###  ModuleMetadataV10

• **ModuleMetadataV10**:

___

###  ModuleMetadataV11

• **ModuleMetadataV11**:

___

###  ModuleMetadataV2

• **ModuleMetadataV2**:

___

###  ModuleMetadataV3

• **ModuleMetadataV3**:

___

###  ModuleMetadataV4

• **ModuleMetadataV4**:

___

###  ModuleMetadataV5

• **ModuleMetadataV5**:

___

###  ModuleMetadataV6

• **ModuleMetadataV6**:

___

###  ModuleMetadataV7

• **ModuleMetadataV7**:

___

###  ModuleMetadataV8

• **ModuleMetadataV8**:

___

###  ModuleMetadataV9

• **ModuleMetadataV9**:

___

###  Moment

• **Moment**:

___

###  MomentOf

• **MomentOf**:

___

###  MoreAttestations

• **MoreAttestations**:

___

###  MortalEra

• **MortalEra**:

___

###  MultiSignature

• **MultiSignature**:

___

###  Multiplier

• **Multiplier**:

___

###  Multisig

• **Multisig**:

___

###  NetworkState

• **NetworkState**:

___

###  NewAccountOutcome

• **NewAccountOutcome**:

___

###  NewBidder

• **NewBidder**:

___

###  NextAuthority

• **NextAuthority**:

___

###  Nominations

• **Nominations**:

___

###  OffenceDetails

• **OffenceDetails**:

___

###  Offender

• **Offender**:

___

###  OpaqueKey

• **OpaqueKey**:

___

###  OpaqueMultiaddr

• **OpaqueMultiaddr**:

___

###  OpaqueNetworkState

• **OpaqueNetworkState**:

___

###  OpaquePeerId

• **OpaquePeerId**:

___

###  OpaqueTimeSlot

• **OpaqueTimeSlot**:

___

###  OpenTip

• **OpenTip**:

___

###  OpenTipFinder

• **OpenTipFinder**:

___

###  OpenTipTip

• **OpenTipTip**:

___

###  Origin

• **Origin**:

___

###  OuterDispatchCallV0

• **OuterDispatchCallV0**:

___

###  OuterDispatchMetadataV0

• **OuterDispatchMetadataV0**:

___

###  OuterEventEventMetadataEventsV0

• **OuterEventEventMetadataEventsV0**:

___

###  OuterEventEventMetadataV0

• **OuterEventEventMetadataV0**:

___

###  OuterEventMetadataV0

• **OuterEventMetadataV0**:

___

###  Owner

• **Owner**:

___

###  ParaId

• **ParaId**:

___

###  ParaIdOf

• **ParaIdOf**:

___

###  ParaInfo

• **ParaInfo**:

___

###  ParaScheduling

• **ParaScheduling**:

___

###  ParachainDispatchOrigin

• **ParachainDispatchOrigin**:

___

###  PeerInfo

• **PeerInfo**:

___

###  PendingPause

• **PendingPause**:

___

###  PendingResume

• **PendingResume**:

___

###  Perbill

• **Perbill**:

___

###  Percent

• **Percent**:

___

###  Permill

• **Permill**:

___

###  PermissionLatest

• **PermissionLatest**:

___

###  PermissionVersions

• **PermissionVersions**:

___

###  PermissionsV1

• **PermissionsV1**:

___

###  Perquintill

• **Perquintill**:

___

###  Phantom

• **Phantom**:

___

###  PhantomData

• **PhantomData**:

___

###  Phase

• **Phase**:

___

###  PlainTypeLatest

• **PlainTypeLatest**:

___

###  PlainTypeV0

• **PlainTypeV0**:

___

###  PlainTypeV10

• **PlainTypeV10**:

___

###  PlainTypeV11

• **PlainTypeV11**:

___

###  PlainTypeV2

• **PlainTypeV2**:

___

###  PlainTypeV3

• **PlainTypeV3**:

___

###  PlainTypeV4

• **PlainTypeV4**:

___

###  PlainTypeV5

• **PlainTypeV5**:

___

###  PlainTypeV6

• **PlainTypeV6**:

___

###  PlainTypeV7

• **PlainTypeV7**:

___

###  PlainTypeV8

• **PlainTypeV8**:

___

###  PlainTypeV9

• **PlainTypeV9**:

___

###  Points

• **Points**:

___

###  PreRuntime

• **PreRuntime**:

___

###  PrefabWasmModule

• **PrefabWasmModule**:

___

###  PrefabWasmModuleReserved

• **PrefabWasmModuleReserved**:

___

###  PropIndex

• **PropIndex**:

___

###  Proposal

• **Proposal**:

___

###  ProposalIndex

• **ProposalIndex**:

___

###  RawAuraPreDigest

• **RawAuraPreDigest**:

___

###  RawBabePreDigest

• **RawBabePreDigest**:

___

###  RawBabePreDigestCompat

• **RawBabePreDigestCompat**:

___

###  RawBabePreDigestPrimary

• **RawBabePreDigestPrimary**:

___

###  RawBabePreDigestPrimaryTo159

• **RawBabePreDigestPrimaryTo159**:

___

###  RawBabePreDigestSecondary

• **RawBabePreDigestSecondary**:

___

###  RawBabePreDigestSecondaryTo159

• **RawBabePreDigestSecondaryTo159**:

___

###  RawBabePreDigestTo159

• **RawBabePreDigestTo159**:

___

###  RecoveryConfig

• **RecoveryConfig**:

___

###  ReferendumIndex

• **ReferendumIndex**:

___

###  ReferendumInfo

• **ReferendumInfo**:

___

###  RegistrarIndex

• **RegistrarIndex**:

___

###  RegistrarInfo

• **RegistrarInfo**:

___

###  Registration

• **Registration**:

___

###  RegistrationJudgement

• **RegistrationJudgement**:

___

###  ReportIdOf

• **ReportIdOf**:

___

###  Reporter

• **Reporter**:

___

###  Retriable

• **Retriable**:

___

###  RewardDestination

• **RewardDestination**:

___

###  RpcMethods

• **RpcMethods**:

___

###  RuntimeDispatchInfo

• **RuntimeDispatchInfo**:

___

###  RuntimeModuleMetadataV0

• **RuntimeModuleMetadataV0**:

___

###  RuntimeVersion

• **RuntimeVersion**:

___

###  RuntimeVersionApi

• **RuntimeVersionApi**:

___

###  Schedule

• **Schedule**:

___

###  Seal

• **Seal**:

___

###  SealV0

• **SealV0**:

___

###  SeedOf

• **SeedOf**:

___

###  SessionIndex

• **SessionIndex**:

___

###  SessionKey

• **SessionKey**:

___

###  SessionKeys1

• **SessionKeys1**:

___

###  SessionKeys2

• **SessionKeys2**:

___

###  SessionKeys3

• **SessionKeys3**:

___

###  SessionKeys4

• **SessionKeys4**:

___

###  SessionKeys5

• **SessionKeys5**:

___

###  SessionKeys6

• **SessionKeys6**:

___

###  SetId

• **SetId**:

___

###  SetIndex

• **SetIndex**:

___

###  Signature

• **Signature**:

___

###  SignedBlock

• **SignedBlock**:

___

###  SignerPayload

• **SignerPayload**:

___

###  SlashJournalEntry

• **SlashJournalEntry**:

___

###  SlashingSpans

• **SlashingSpans**:

___

###  SlashingSpansTo204

• **SlashingSpansTo204**:

___

###  SlotNumber

• **SlotNumber**:

___

###  SlotRange

• **SlotRange**:

___

###  SocietyJudgement

• **SocietyJudgement**:

___

###  SpanIndex

• **SpanIndex**:

___

###  SpanRecord

• **SpanRecord**:

___

###  Sr25519Signature

• **Sr25519Signature**:

___

###  StakingLedger

• **StakingLedger**:

___

###  StorageChangeSet

• **StorageChangeSet**:

___

###  StorageEntryMetadataLatest

• **StorageEntryMetadataLatest**:

___

###  StorageEntryMetadataV10

• **StorageEntryMetadataV10**:

___

###  StorageEntryMetadataV11

• **StorageEntryMetadataV11**:

___

###  StorageEntryMetadataV6

• **StorageEntryMetadataV6**:

___

###  StorageEntryMetadataV7

• **StorageEntryMetadataV7**:

___

###  StorageEntryMetadataV8

• **StorageEntryMetadataV8**:

___

###  StorageEntryMetadataV9

• **StorageEntryMetadataV9**:

___

###  StorageEntryModifierLatest

• **StorageEntryModifierLatest**:

___

###  StorageEntryModifierV10

• **StorageEntryModifierV10**:

___

###  StorageEntryModifierV11

• **StorageEntryModifierV11**:

___

###  StorageEntryModifierV6

• **StorageEntryModifierV6**:

___

###  StorageEntryModifierV7

• **StorageEntryModifierV7**:

___

###  StorageEntryModifierV8

• **StorageEntryModifierV8**:

___

###  StorageEntryModifierV9

• **StorageEntryModifierV9**:

___

###  StorageEntryTypeLatest

• **StorageEntryTypeLatest**:

___

###  StorageEntryTypeV10

• **StorageEntryTypeV10**:

___

###  StorageEntryTypeV11

• **StorageEntryTypeV11**:

___

###  StorageEntryTypeV6

• **StorageEntryTypeV6**:

___

###  StorageEntryTypeV7

• **StorageEntryTypeV7**:

___

###  StorageEntryTypeV8

• **StorageEntryTypeV8**:

___

###  StorageEntryTypeV9

• **StorageEntryTypeV9**:

___

###  StorageFunctionMetadataV0

• **StorageFunctionMetadataV0**:

___

###  StorageFunctionMetadataV1

• **StorageFunctionMetadataV1**:

___

###  StorageFunctionMetadataV2

• **StorageFunctionMetadataV2**:

___

###  StorageFunctionMetadataV3

• **StorageFunctionMetadataV3**:

___

###  StorageFunctionMetadataV4

• **StorageFunctionMetadataV4**:

___

###  StorageFunctionMetadataV5

• **StorageFunctionMetadataV5**:

___

###  StorageFunctionModifierV0

• **StorageFunctionModifierV0**:

___

###  StorageFunctionModifierV1

• **StorageFunctionModifierV1**:

___

###  StorageFunctionModifierV2

• **StorageFunctionModifierV2**:

___

###  StorageFunctionModifierV3

• **StorageFunctionModifierV3**:

___

###  StorageFunctionModifierV4

• **StorageFunctionModifierV4**:

___

###  StorageFunctionModifierV5

• **StorageFunctionModifierV5**:

___

###  StorageFunctionTypeV0

• **StorageFunctionTypeV0**:

___

###  StorageFunctionTypeV1

• **StorageFunctionTypeV1**:

___

###  StorageFunctionTypeV2

• **StorageFunctionTypeV2**:

___

###  StorageFunctionTypeV3

• **StorageFunctionTypeV3**:

___

###  StorageFunctionTypeV4

• **StorageFunctionTypeV4**:

___

###  StorageFunctionTypeV5

• **StorageFunctionTypeV5**:

___

###  StorageHasher

• **StorageHasher**:

___

###  StorageHasherV10

• **StorageHasherV10**:

___

###  StorageHasherV11

• **StorageHasherV11**:

___

###  StorageHasherV4

• **StorageHasherV4**:

___

###  StorageHasherV5

• **StorageHasherV5**:

___

###  StorageHasherV6

• **StorageHasherV6**:

___

###  StorageHasherV7

• **StorageHasherV7**:

___

###  StorageHasherV8

• **StorageHasherV8**:

___

###  StorageHasherV9

• **StorageHasherV9**:

___

###  StorageMetadataV0

• **StorageMetadataV0**:

___

###  StorageMetadataV10

• **StorageMetadataV10**:

___

###  StorageMetadataV11

• **StorageMetadataV11**:

___

###  StorageMetadataV7

• **StorageMetadataV7**:

___

###  StorageMetadataV8

• **StorageMetadataV8**:

___

###  StorageMetadataV9

• **StorageMetadataV9**:

___

###  StoredPendingChange

• **StoredPendingChange**:

___

###  StoredState

• **StoredState**:

___

###  StrikeCount

• **StrikeCount**:

___

###  SubId

• **SubId**:

___

###  Timepoint

• **Timepoint**:

___

###  TombstoneContractInfo

• **TombstoneContractInfo**:

___

###  TreasuryProposal

• **TreasuryProposal**:

___

###  TrieId

• **TrieId**:

___

###  UnappliedSlash

• **UnappliedSlash**:

___

###  UnappliedSlashOther

• **UnappliedSlashOther**:

___

###  Uncle

• **Uncle**:

___

###  UncleEntryItem

• **UncleEntryItem**:

___

###  UnlockChunk

• **UnlockChunk**:

___

###  UpwardMessage

• **UpwardMessage**:

___

###  ValidatorId

• **ValidatorId**:

___

###  ValidatorIndex

• **ValidatorIndex**:

___

###  ValidatorPrefs

• **ValidatorPrefs**:

___

###  ValidatorPrefsTo145

• **ValidatorPrefsTo145**:

___

###  ValidatorPrefsTo196

• **ValidatorPrefsTo196**:

___

###  ValidityAttestation

• **ValidityAttestation**:

___

###  ValidityVote

• **ValidityVote**:

___

###  VestingSchedule

• **VestingSchedule**:

___

###  Vote

• **Vote**:

___

###  VoteIndex

• **VoteIndex**:

___

###  VoteThreshold

• **VoteThreshold**:

___

###  VoterInfo

• **VoterInfo**:

___

###  Votes

• **Votes**:

___

###  VouchingStatus

• **VouchingStatus**:

___

###  VrfData

• **VrfData**:

___

###  VrfProof

• **VrfProof**:

___

###  Weight

• **Weight**:

___

###  WeightMultiplier

• **WeightMultiplier**:

___

###  WinningData

• **WinningData**:

___

###  WinningDataEntry

• **WinningDataEntry**:

___

###  WithdrawReasons

• **WithdrawReasons**:
