[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types"](../modules/_types_.md) › [QueryableStorage](_types_.queryablestorage.md)

# Interface: QueryableStorage <**ApiType**>

## Type parameters

▪ **ApiType**: *[ApiTypes](../modules/_types_.md#apitypes)*

## Hierarchy

* [QueryableStorageExact](_types_.queryablestorageexact.md)‹ApiType›

  ↳ **QueryableStorage**

## Indexable

* \[ **index**: *string*\]: [QueryableModuleStorage](_types_.queryablemodulestorage.md)‹ApiType›

## Index

### Properties

* [authorship](_types_.queryablestorage.md#authorship)
* [babe](_types_.queryablestorage.md#babe)
* [balances](_types_.queryablestorage.md#balances)
* [contracts](_types_.queryablestorage.md#contracts)
* [council](_types_.queryablestorage.md#council)
* [democracy](_types_.queryablestorage.md#democracy)
* [elections](_types_.queryablestorage.md#elections)
* [grandpa](_types_.queryablestorage.md#grandpa)
* [imOnline](_types_.queryablestorage.md#imonline)
* [indices](_types_.queryablestorage.md#indices)
* [nicks](_types_.queryablestorage.md#nicks)
* [offences](_types_.queryablestorage.md#offences)
* [randomnessCollectiveFlip](_types_.queryablestorage.md#randomnesscollectiveflip)
* [session](_types_.queryablestorage.md#session)
* [staking](_types_.queryablestorage.md#staking)
* [sudo](_types_.queryablestorage.md#sudo)
* [system](_types_.queryablestorage.md#system)
* [technicalCommittee](_types_.queryablestorage.md#technicalcommittee)
* [technicalMembership](_types_.queryablestorage.md#technicalmembership)
* [timestamp](_types_.queryablestorage.md#timestamp)
* [transactionPayment](_types_.queryablestorage.md#transactionpayment)
* [treasury](_types_.queryablestorage.md#treasury)

## Properties

###  authorship

• **authorship**: *object*

*Inherited from [QueryableStorage](_types_.queryablestorage.md).[authorship](_types_.queryablestorage.md#authorship)*

*Defined in [api/src/query.types.ts:61](https://github.com/polkadot-js/api/blob/854a520517/packages/api/src/query.types.ts#L61)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›

* **author**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **didSetUncles**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **uncles**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

___

###  babe

• **babe**: *object*

*Inherited from [QueryableStorage](_types_.queryablestorage.md).[babe](_types_.queryablestorage.md#babe)*

*Defined in [api/src/query.types.ts:44](https://github.com/polkadot-js/api/blob/854a520517/packages/api/src/query.types.ts#L44)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›

* **authorities**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **currentSlot**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **epochIndex**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **genesisSlot**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **initialized**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **nextRandomness**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **randomness**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **segmentIndex**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **underConstruction**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

___

###  balances

• **balances**: *object*

*Inherited from [QueryableStorage](_types_.queryablestorage.md).[balances](_types_.queryablestorage.md#balances)*

*Defined in [api/src/query.types.ts:72](https://github.com/polkadot-js/api/blob/854a520517/packages/api/src/query.types.ts#L72)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›

* **freeBalance**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **locks**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **reservedBalance**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **totalIssuance**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **vesting**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

___

###  contracts

• **contracts**: *object*

*Inherited from [QueryableStorage](_types_.queryablestorage.md).[contracts](_types_.queryablestorage.md#contracts)*

*Defined in [api/src/query.types.ts:187](https://github.com/polkadot-js/api/blob/854a520517/packages/api/src/query.types.ts#L187)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›

* **accountCounter**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **codeStorage**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **contractInfoOf**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **currentSchedule**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **gasPrice**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **gasSpent**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **pristineCode**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

___

###  council

• **council**: *object*

*Inherited from [QueryableStorage](_types_.queryablestorage.md).[council](_types_.queryablestorage.md#council)*

*Defined in [api/src/query.types.ts:142](https://github.com/polkadot-js/api/blob/854a520517/packages/api/src/query.types.ts#L142)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›

* **members**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **proposalCount**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **proposalOf**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **proposals**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **voting**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

___

###  democracy

• **democracy**: *object*

*Inherited from [QueryableStorage](_types_.queryablestorage.md).[democracy](_types_.queryablestorage.md#democracy)*

*Defined in [api/src/query.types.ts:123](https://github.com/polkadot-js/api/blob/854a520517/packages/api/src/query.types.ts#L123)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›

* **blacklist**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **cancellations**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **delegations**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **depositOf**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **dispatchQueue**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **lastTabledWasExternal**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **nextExternal**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **nextTally**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **preimages**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **proxy**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **publicPropCount**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **publicProps**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **referendumCount**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **referendumInfoOf**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **voteOf**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **votersFor**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

___

###  elections

• **elections**: *object*

*Inherited from [QueryableStorage](_types_.queryablestorage.md).[elections](_types_.queryablestorage.md#elections)*

*Defined in [api/src/query.types.ts:158](https://github.com/polkadot-js/api/blob/854a520517/packages/api/src/query.types.ts#L158)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›

* **candidates**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **electionRounds**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **members**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **runnersUp**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **stakeOf**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **votesOf**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

___

###  grandpa

• **grandpa**: *object*

*Inherited from [QueryableStorage](_types_.queryablestorage.md).[grandpa](_types_.queryablestorage.md#grandpa)*

*Defined in [api/src/query.types.ts:171](https://github.com/polkadot-js/api/blob/854a520517/packages/api/src/query.types.ts#L171)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›

* **authorities**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **currentSetId**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **nextForced**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **pendingChange**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **setIdSession**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **stalled**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **state**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

___

###  imOnline

• **imOnline**: *object*

*Inherited from [QueryableStorage](_types_.queryablestorage.md).[imOnline](_types_.queryablestorage.md#imonline)*

*Defined in [api/src/query.types.ts:201](https://github.com/polkadot-js/api/blob/854a520517/packages/api/src/query.types.ts#L201)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›

* **authoredBlocks**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **gossipAt**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **keys**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **receivedHeartbeats**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

___

###  indices

• **indices**: *object*

*Inherited from [QueryableStorage](_types_.queryablestorage.md).[indices](_types_.queryablestorage.md#indices)*

*Defined in [api/src/query.types.ts:67](https://github.com/polkadot-js/api/blob/854a520517/packages/api/src/query.types.ts#L67)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›

* **enumSet**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **nextEnumSet**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

___

###  nicks

• **nicks**: *object*

*Inherited from [QueryableStorage](_types_.queryablestorage.md).[nicks](_types_.queryablestorage.md#nicks)*

*Defined in [api/src/query.types.ts:218](https://github.com/polkadot-js/api/blob/854a520517/packages/api/src/query.types.ts#L218)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›

* **nameOf**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

___

###  offences

• **offences**: *object*

*Inherited from [QueryableStorage](_types_.queryablestorage.md).[offences](_types_.queryablestorage.md#offences)*

*Defined in [api/src/query.types.ts:208](https://github.com/polkadot-js/api/blob/854a520517/packages/api/src/query.types.ts#L208)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›

* **concurrentReportsIndex**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **reports**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **reportsByKindIndex**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

___

###  randomnessCollectiveFlip

• **randomnessCollectiveFlip**: *object*

*Inherited from [QueryableStorage](_types_.queryablestorage.md).[randomnessCollectiveFlip](_types_.queryablestorage.md#randomnesscollectiveflip)*

*Defined in [api/src/query.types.ts:214](https://github.com/polkadot-js/api/blob/854a520517/packages/api/src/query.types.ts#L214)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›

* **randomMaterial**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

___

###  session

• **session**: *object*

*Inherited from [QueryableStorage](_types_.queryablestorage.md).[session](_types_.queryablestorage.md#session)*

*Defined in [api/src/query.types.ts:113](https://github.com/polkadot-js/api/blob/854a520517/packages/api/src/query.types.ts#L113)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›

* **currentIndex**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **disabledValidators**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **keyOwner**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **nextKeys**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **queuedChanged**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **queuedKeys**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **validators**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

___

###  staking

• **staking**: *object*

*Inherited from [QueryableStorage](_types_.queryablestorage.md).[staking](_types_.queryablestorage.md#staking)*

*Defined in [api/src/query.types.ts:84](https://github.com/polkadot-js/api/blob/854a520517/packages/api/src/query.types.ts#L84)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›

* **bonded**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **bondedEras**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **canceledSlashPayout**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **currentElected**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **currentEra**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **currentEraPointsEarned**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **currentEraStart**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **currentEraStartSessionIndex**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **earliestUnappliedSlash**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **forceEra**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **invulnerables**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **ledger**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **minimumValidatorCount**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **nominatorSlashInEra**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **nominators**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **payee**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **slashRewardFraction**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **slashingSpans**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **slotStake**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **spanSlash**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **stakers**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **storageVersion**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **unappliedSlashes**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **validatorCount**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **validatorSlashInEra**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **validators**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

___

###  sudo

• **sudo**: *object*

*Inherited from [QueryableStorage](_types_.queryablestorage.md).[sudo](_types_.queryablestorage.md#sudo)*

*Defined in [api/src/query.types.ts:197](https://github.com/polkadot-js/api/blob/854a520517/packages/api/src/query.types.ts#L197)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›

* **key**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

___

###  system

• **system**: *object*

*Inherited from [QueryableStorage](_types_.queryablestorage.md).[system](_types_.queryablestorage.md#system)*

*Defined in [api/src/query.types.ts:28](https://github.com/polkadot-js/api/blob/854a520517/packages/api/src/query.types.ts#L28)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›

* **accountNonce**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **allExtrinsicsLen**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **allExtrinsicsWeight**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **blockHash**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **digest**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **eventCount**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **eventTopics**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **events**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **extrinsicCount**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **extrinsicData**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **extrinsicsRoot**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **number**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **parentHash**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

___

###  technicalCommittee

• **technicalCommittee**: *object*

*Inherited from [QueryableStorage](_types_.queryablestorage.md).[technicalCommittee](_types_.queryablestorage.md#technicalcommittee)*

*Defined in [api/src/query.types.ts:150](https://github.com/polkadot-js/api/blob/854a520517/packages/api/src/query.types.ts#L150)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›

* **members**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **proposalCount**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **proposalOf**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **proposals**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **voting**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

___

###  technicalMembership

• **technicalMembership**: *object*

*Inherited from [QueryableStorage](_types_.queryablestorage.md).[technicalMembership](_types_.queryablestorage.md#technicalmembership)*

*Defined in [api/src/query.types.ts:167](https://github.com/polkadot-js/api/blob/854a520517/packages/api/src/query.types.ts#L167)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›

* **members**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

___

###  timestamp

• **timestamp**: *object*

*Inherited from [QueryableStorage](_types_.queryablestorage.md).[timestamp](_types_.queryablestorage.md#timestamp)*

*Defined in [api/src/query.types.ts:56](https://github.com/polkadot-js/api/blob/854a520517/packages/api/src/query.types.ts#L56)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›

* **didUpdate**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **now**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

___

###  transactionPayment

• **transactionPayment**: *object*

*Inherited from [QueryableStorage](_types_.queryablestorage.md).[transactionPayment](_types_.queryablestorage.md#transactionpayment)*

*Defined in [api/src/query.types.ts:80](https://github.com/polkadot-js/api/blob/854a520517/packages/api/src/query.types.ts#L80)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›

* **nextFeeMultiplier**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

___

###  treasury

• **treasury**: *object*

*Inherited from [QueryableStorage](_types_.queryablestorage.md).[treasury](_types_.queryablestorage.md#treasury)*

*Defined in [api/src/query.types.ts:181](https://github.com/polkadot-js/api/blob/854a520517/packages/api/src/query.types.ts#L181)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›

* **approvals**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **proposalCount**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*

* **proposals**: *[StorageEntryExact](../modules/_types_.md#storageentryexact)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_.md#queryablestorageentry)‹ApiType›*
