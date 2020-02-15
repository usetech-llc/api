[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types/storage"](../modules/_types_storage_.md) › [QueryableStorage](_types_storage_.queryablestorage.md)

# Interface: QueryableStorage <**ApiType**>

## Type parameters

▪ **ApiType**: *[ApiTypes](../modules/_types_base_.md#apitypes)*

## Hierarchy

* [AugmentedQueries](_types_storage_.augmentedqueries.md)‹ApiType›

  ↳ **QueryableStorage**

## Indexable

* \[ **index**: *string*\]: [QueryableModuleStorage](_types_storage_.queryablemodulestorage.md)‹ApiType›

## Index

### Properties

* [authorship](_types_storage_.queryablestorage.md#authorship)
* [babe](_types_storage_.queryablestorage.md#babe)
* [balances](_types_storage_.queryablestorage.md#balances)
* [contracts](_types_storage_.queryablestorage.md#contracts)
* [council](_types_storage_.queryablestorage.md#council)
* [democracy](_types_storage_.queryablestorage.md#democracy)
* [elections](_types_storage_.queryablestorage.md#elections)
* [grandpa](_types_storage_.queryablestorage.md#grandpa)
* [identity](_types_storage_.queryablestorage.md#identity)
* [imOnline](_types_storage_.queryablestorage.md#imonline)
* [indices](_types_storage_.queryablestorage.md#indices)
* [offences](_types_storage_.queryablestorage.md#offences)
* [randomnessCollectiveFlip](_types_storage_.queryablestorage.md#randomnesscollectiveflip)
* [recovery](_types_storage_.queryablestorage.md#recovery)
* [session](_types_storage_.queryablestorage.md#session)
* [society](_types_storage_.queryablestorage.md#society)
* [staking](_types_storage_.queryablestorage.md#staking)
* [sudo](_types_storage_.queryablestorage.md#sudo)
* [system](_types_storage_.queryablestorage.md#system)
* [technicalCommittee](_types_storage_.queryablestorage.md#technicalcommittee)
* [technicalMembership](_types_storage_.queryablestorage.md#technicalmembership)
* [timestamp](_types_storage_.queryablestorage.md#timestamp)
* [transactionPayment](_types_storage_.queryablestorage.md#transactionpayment)
* [treasury](_types_storage_.queryablestorage.md#treasury)
* [utility](_types_storage_.queryablestorage.md#utility)
* [vesting](_types_storage_.queryablestorage.md#vesting)

## Properties

###  authorship

• **authorship**: *object*

*Inherited from [QueryableStorage](_types_storage_.queryablestorage.md).[authorship](_types_storage_.queryablestorage.md#authorship)*

*Defined in [api/src/types/augment/query.ts:164](https://github.com/polkadot-js/api/blob/c11b0dffc5/packages/api/src/types/augment/query.ts#L164)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›

* **author**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **didSetUncles**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **uncles**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  babe

• **babe**: *object*

*Inherited from [QueryableStorage](_types_storage_.queryablestorage.md).[babe](_types_storage_.queryablestorage.md#babe)*

*Defined in [api/src/types/augment/query.ts:102](https://github.com/polkadot-js/api/blob/c11b0dffc5/packages/api/src/types/augment/query.ts#L102)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›

* **authorities**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **currentSlot**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **epochIndex**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **genesisSlot**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **initialized**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **nextRandomness**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **randomness**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **segmentIndex**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **underConstruction**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  balances

• **balances**: *object*

*Inherited from [QueryableStorage](_types_storage_.queryablestorage.md).[balances](_types_storage_.queryablestorage.md#balances)*

*Defined in [api/src/types/augment/query.ts:186](https://github.com/polkadot-js/api/blob/c11b0dffc5/packages/api/src/types/augment/query.ts#L186)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›

* **account**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **isUpgraded**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **locks**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **totalIssuance**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  contracts

• **contracts**: *object*

*Inherited from [QueryableStorage](_types_storage_.queryablestorage.md).[contracts](_types_storage_.queryablestorage.md#contracts)*

*Defined in [api/src/types/augment/query.ts:590](https://github.com/polkadot-js/api/blob/c11b0dffc5/packages/api/src/types/augment/query.ts#L590)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›

* **accountCounter**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **codeStorage**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **contractInfoOf**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **currentSchedule**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **gasPrice**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **gasSpent**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **pristineCode**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  council

• **council**: *object*

*Inherited from [QueryableStorage](_types_storage_.queryablestorage.md).[council](_types_storage_.queryablestorage.md#council)*

*Defined in [api/src/types/augment/query.ts:449](https://github.com/polkadot-js/api/blob/c11b0dffc5/packages/api/src/types/augment/query.ts#L449)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›

* **members**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **proposalCount**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **proposalOf**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **proposals**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **voting**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  democracy

• **democracy**: *object*

*Inherited from [QueryableStorage](_types_storage_.queryablestorage.md).[democracy](_types_storage_.queryablestorage.md#democracy)*

*Defined in [api/src/types/augment/query.ts:366](https://github.com/polkadot-js/api/blob/c11b0dffc5/packages/api/src/types/augment/query.ts#L366)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›

* **blacklist**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **cancellations**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **delegations**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **depositOf**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **dispatchQueue**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **lastTabledWasExternal**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **locks**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **lowestUnbaked**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **nextExternal**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **preimages**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **proxy**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **publicPropCount**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **publicProps**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **referendumCount**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **referendumInfoOf**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **voteOf**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **votersFor**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  elections

• **elections**: *object*

*Inherited from [QueryableStorage](_types_storage_.queryablestorage.md).[elections](_types_storage_.queryablestorage.md#elections)*

*Defined in [api/src/types/augment/query.ts:495](https://github.com/polkadot-js/api/blob/c11b0dffc5/packages/api/src/types/augment/query.ts#L495)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›

* **candidates**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **electionRounds**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **members**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **runnersUp**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **stakeOf**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **votesOf**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  grandpa

• **grandpa**: *object*

*Inherited from [QueryableStorage](_types_storage_.queryablestorage.md).[grandpa](_types_storage_.queryablestorage.md#grandpa)*

*Defined in [api/src/types/augment/query.ts:530](https://github.com/polkadot-js/api/blob/c11b0dffc5/packages/api/src/types/augment/query.ts#L530)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›

* **authorities**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **currentSetId**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **nextForced**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **pendingChange**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **setIdSession**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **stalled**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **state**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  identity

• **identity**: *object*

*Inherited from [QueryableStorage](_types_storage_.queryablestorage.md).[identity](_types_storage_.queryablestorage.md#identity)*

*Defined in [api/src/types/augment/query.ts:680](https://github.com/polkadot-js/api/blob/c11b0dffc5/packages/api/src/types/augment/query.ts#L680)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›

* **identityOf**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **registrars**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **subsOf**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **superOf**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  imOnline

• **imOnline**: *object*

*Inherited from [QueryableStorage](_types_storage_.queryablestorage.md).[imOnline](_types_storage_.queryablestorage.md#imonline)*

*Defined in [api/src/types/augment/query.ts:628](https://github.com/polkadot-js/api/blob/c11b0dffc5/packages/api/src/types/augment/query.ts#L628)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›

* **authoredBlocks**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **heartbeatAfter**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **keys**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **receivedHeartbeats**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  indices

• **indices**: *object*

*Inherited from [QueryableStorage](_types_storage_.queryablestorage.md).[indices](_types_storage_.queryablestorage.md#indices)*

*Defined in [api/src/types/augment/query.ts:179](https://github.com/polkadot-js/api/blob/c11b0dffc5/packages/api/src/types/augment/query.ts#L179)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›

* **accounts**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  offences

• **offences**: *object*

*Inherited from [QueryableStorage](_types_storage_.queryablestorage.md).[offences](_types_storage_.queryablestorage.md#offences)*

*Defined in [api/src/types/augment/query.ts:653](https://github.com/polkadot-js/api/blob/c11b0dffc5/packages/api/src/types/augment/query.ts#L653)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›

* **concurrentReportsIndex**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **reports**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **reportsByKindIndex**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  randomnessCollectiveFlip

• **randomnessCollectiveFlip**: *object*

*Inherited from [QueryableStorage](_types_storage_.queryablestorage.md).[randomnessCollectiveFlip](_types_storage_.queryablestorage.md#randomnesscollectiveflip)*

*Defined in [api/src/types/augment/query.ts:671](https://github.com/polkadot-js/api/blob/c11b0dffc5/packages/api/src/types/augment/query.ts#L671)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›

* **randomMaterial**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  recovery

• **recovery**: *object*

*Inherited from [QueryableStorage](_types_storage_.queryablestorage.md).[recovery](_types_storage_.queryablestorage.md#recovery)*

*Defined in [api/src/types/augment/query.ts:771](https://github.com/polkadot-js/api/blob/c11b0dffc5/packages/api/src/types/augment/query.ts#L771)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›

* **activeRecoveries**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **recoverable**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **recovered**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  session

• **session**: *object*

*Inherited from [QueryableStorage](_types_storage_.queryablestorage.md).[session](_types_storage_.queryablestorage.md#session)*

*Defined in [api/src/types/augment/query.ts:328](https://github.com/polkadot-js/api/blob/c11b0dffc5/packages/api/src/types/augment/query.ts#L328)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›

* **currentIndex**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **disabledValidators**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **keyOwner**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **nextKeys**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **queuedChanged**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **queuedKeys**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **validators**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  society

• **society**: *object*

*Inherited from [QueryableStorage](_types_storage_.queryablestorage.md).[society](_types_storage_.queryablestorage.md#society)*

*Defined in [api/src/types/augment/query.ts:703](https://github.com/polkadot-js/api/blob/c11b0dffc5/packages/api/src/types/augment/query.ts#L703)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›

* **bids**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **candidates**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **defender**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **defenderVotes**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **founder**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **head**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **maxMembers**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **members**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **payouts**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **pot**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **rules**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **strikes**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **suspendedCandidates**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **suspendedMembers**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **votes**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **vouching**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  staking

• **staking**: *object*

*Inherited from [QueryableStorage](_types_storage_.queryablestorage.md).[staking](_types_storage_.queryablestorage.md#staking)*

*Defined in [api/src/types/augment/query.ts:214](https://github.com/polkadot-js/api/blob/c11b0dffc5/packages/api/src/types/augment/query.ts#L214)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›

* **bonded**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **bondedEras**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **canceledSlashPayout**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **currentElected**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **currentEra**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **currentEraPointsEarned**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **currentEraStart**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **currentEraStartSessionIndex**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **earliestUnappliedSlash**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **forceEra**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **invulnerables**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **ledger**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **minimumValidatorCount**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **nominatorSlashInEra**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **nominators**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **payee**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **slashRewardFraction**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **slashingSpans**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **slotStake**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **spanSlash**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **stakers**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **unappliedSlashes**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **validatorCount**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **validatorSlashInEra**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **validators**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  sudo

• **sudo**: *object*

*Inherited from [QueryableStorage](_types_storage_.queryablestorage.md).[sudo](_types_storage_.queryablestorage.md#sudo)*

*Defined in [api/src/types/augment/query.ts:621](https://github.com/polkadot-js/api/blob/c11b0dffc5/packages/api/src/types/augment/query.ts#L621)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›

* **key**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  system

• **system**: *object*

*Inherited from [QueryableStorage](_types_storage_.queryablestorage.md).[system](_types_storage_.queryablestorage.md#system)*

*Defined in [api/src/types/augment/query.ts:33](https://github.com/polkadot-js/api/blob/c11b0dffc5/packages/api/src/types/augment/query.ts#L33)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›

* **account**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **allExtrinsicsLen**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **allExtrinsicsWeight**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **blockHash**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **digest**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **eventCount**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **eventTopics**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **events**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **extrinsicCount**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **extrinsicData**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **extrinsicsRoot**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **number**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **parentHash**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  technicalCommittee

• **technicalCommittee**: *object*

*Inherited from [QueryableStorage](_types_storage_.queryablestorage.md).[technicalCommittee](_types_storage_.queryablestorage.md#technicalcommittee)*

*Defined in [api/src/types/augment/query.ts:472](https://github.com/polkadot-js/api/blob/c11b0dffc5/packages/api/src/types/augment/query.ts#L472)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›

* **members**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **proposalCount**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **proposalOf**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **proposals**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **voting**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  technicalMembership

• **technicalMembership**: *object*

*Inherited from [QueryableStorage](_types_storage_.queryablestorage.md).[technicalMembership](_types_storage_.queryablestorage.md#technicalmembership)*

*Defined in [api/src/types/augment/query.ts:523](https://github.com/polkadot-js/api/blob/c11b0dffc5/packages/api/src/types/augment/query.ts#L523)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›

* **members**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  timestamp

• **timestamp**: *object*

*Inherited from [QueryableStorage](_types_storage_.queryablestorage.md).[timestamp](_types_storage_.queryablestorage.md#timestamp)*

*Defined in [api/src/types/augment/query.ts:153](https://github.com/polkadot-js/api/blob/c11b0dffc5/packages/api/src/types/augment/query.ts#L153)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›

* **didUpdate**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **now**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  transactionPayment

• **transactionPayment**: *object*

*Inherited from [QueryableStorage](_types_storage_.queryablestorage.md).[transactionPayment](_types_storage_.queryablestorage.md#transactionpayment)*

*Defined in [api/src/types/augment/query.ts:210](https://github.com/polkadot-js/api/blob/c11b0dffc5/packages/api/src/types/augment/query.ts#L210)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›

* **nextFeeMultiplier**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  treasury

• **treasury**: *object*

*Inherited from [QueryableStorage](_types_storage_.queryablestorage.md).[treasury](_types_storage_.queryablestorage.md#treasury)*

*Defined in [api/src/types/augment/query.ts:564](https://github.com/polkadot-js/api/blob/c11b0dffc5/packages/api/src/types/augment/query.ts#L564)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›

* **approvals**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **proposalCount**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **proposals**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **reasons**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

* **tips**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  utility

• **utility**: *object*

*Inherited from [QueryableStorage](_types_storage_.queryablestorage.md).[utility](_types_storage_.queryablestorage.md#utility)*

*Defined in [api/src/types/augment/query.ts:95](https://github.com/polkadot-js/api/blob/c11b0dffc5/packages/api/src/types/augment/query.ts#L95)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›

* **multisigs**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  vesting

• **vesting**: *object*

*Inherited from [QueryableStorage](_types_storage_.queryablestorage.md).[vesting](_types_storage_.queryablestorage.md#vesting)*

*Defined in [api/src/types/augment/query.ts:789](https://github.com/polkadot-js/api/blob/c11b0dffc5/packages/api/src/types/augment/query.ts#L789)*

#### Type declaration:

* \[ **index**: *string*\]: [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›

* **vesting**: *[AugmentedQuery](../modules/_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_types_storage_.md#queryablestorageentry)‹ApiType›*
