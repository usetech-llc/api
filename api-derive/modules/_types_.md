[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types"](_types_.md)

# External module: "types"

## Index

### Interfaces

* [DeriveAccountInfo](../interfaces/_types_.deriveaccountinfo.md)
* [DeriveProposal](../interfaces/_types_.deriveproposal.md)
* [DeriveProposalPreImage](../interfaces/_types_.deriveproposalpreimage.md)
* [DeriveSessionIndexes](../interfaces/_types_.derivesessionindexes.md)
* [DeriveStakingValidators](../interfaces/_types_.derivestakingvalidators.md)
* [DerivedBalances](../interfaces/_types_.derivedbalances.md)
* [DerivedContractFees](../interfaces/_types_.derivedcontractfees.md)
* [DerivedElectionsInfo](../interfaces/_types_.derivedelectionsinfo.md)
* [DerivedFees](../interfaces/_types_.derivedfees.md)
* [DerivedHeartbeatAuthor](../interfaces/_types_.derivedheartbeatauthor.md)
* [DerivedReferendum](../interfaces/_types_.derivedreferendum.md)
* [DerivedReferendumVote](../interfaces/_types_.derivedreferendumvote.md)
* [DerivedSessionInfo](../interfaces/_types_.derivedsessioninfo.md)
* [DerivedStaking](../interfaces/_types_.derivedstaking.md)
* [DerivedStakingElected](../interfaces/_types_.derivedstakingelected.md)
* [DerivedStakingOnlineStatus](../interfaces/_types_.derivedstakingonlinestatus.md)
* [DerivedStakingOverview](../interfaces/_types_.derivedstakingoverview.md)
* [DerivedStakingStash](../interfaces/_types_.derivedstakingstash.md)
* [RecentlyOffline](../interfaces/_types_.recentlyoffline.md)
* [VoterPosition](../interfaces/_types_.voterposition.md)

### Type aliases

* [AccountIndexes](_types_.md#accountindexes)
* [DerivedBalancesMap](_types_.md#derivedbalancesmap)
* [DerivedHeartbeats](_types_.md#derivedheartbeats)
* [DerivedRecentlyOffline](_types_.md#derivedrecentlyoffline)
* [DerivedStakingAccount](_types_.md#derivedstakingaccount)
* [DerivedStakingAccounts](_types_.md#derivedstakingaccounts)
* [DerivedUnlocking](_types_.md#derivedunlocking)
* [DerivedVoterPositions](_types_.md#derivedvoterpositions)

## Type aliases

###  AccountIndexes

Ƭ **AccountIndexes**: *Record‹string, AccountIndex›*

*Defined in [packages/api-derive/src/types.ts:10](https://github.com/polkadot-js/api/blob/532a252fe/packages/api-derive/src/types.ts#L10)*

___

###  DerivedBalancesMap

Ƭ **DerivedBalancesMap**: *Record‹string, [DerivedBalances](../interfaces/_types_.derivedbalances.md)›*

*Defined in [packages/api-derive/src/types.ts:32](https://github.com/polkadot-js/api/blob/532a252fe/packages/api-derive/src/types.ts#L32)*

___

###  DerivedHeartbeats

Ƭ **DerivedHeartbeats**: *Record‹string, [DerivedHeartbeatAuthor](../interfaces/_types_.derivedheartbeatauthor.md)›*

*Defined in [packages/api-derive/src/types.ts:75](https://github.com/polkadot-js/api/blob/532a252fe/packages/api-derive/src/types.ts#L75)*

___

###  DerivedRecentlyOffline

Ƭ **DerivedRecentlyOffline**: *Record‹string, [RecentlyOffline](../interfaces/_types_.recentlyoffline.md)[]›*

*Defined in [packages/api-derive/src/types.ts:106](https://github.com/polkadot-js/api/blob/532a252fe/packages/api-derive/src/types.ts#L106)*

___

###  DerivedStakingAccount

Ƭ **DerivedStakingAccount**: *[AccountId, [DerivedStakingOnlineStatus](../interfaces/_types_.derivedstakingonlinestatus.md)]*

*Defined in [packages/api-derive/src/types.ts:129](https://github.com/polkadot-js/api/blob/532a252fe/packages/api-derive/src/types.ts#L129)*

___

###  DerivedStakingAccounts

Ƭ **DerivedStakingAccounts**: *[DerivedStakingAccount](_types_.md#derivedstakingaccount)[]*

*Defined in [packages/api-derive/src/types.ts:131](https://github.com/polkadot-js/api/blob/532a252fe/packages/api-derive/src/types.ts#L131)*

___

###  DerivedUnlocking

Ƭ **DerivedUnlocking**: *object*

*Defined in [packages/api-derive/src/types.ts:179](https://github.com/polkadot-js/api/blob/532a252fe/packages/api-derive/src/types.ts#L179)*

#### Type declaration:

___

###  DerivedVoterPositions

Ƭ **DerivedVoterPositions**: *Record‹string, [VoterPosition](../interfaces/_types_.voterposition.md)›*

*Defined in [packages/api-derive/src/types.ts:187](https://github.com/polkadot-js/api/blob/532a252fe/packages/api-derive/src/types.ts#L187)*
