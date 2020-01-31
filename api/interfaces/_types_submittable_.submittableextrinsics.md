[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types/submittable"](../modules/_types_submittable_.md) › [SubmittableExtrinsics](_types_submittable_.submittableextrinsics.md)

# Interface: SubmittableExtrinsics <**ApiType**>

## Type parameters

▪ **ApiType**: *[ApiTypes](../modules/_types_base_.md#apitypes)*

## Hierarchy

* [AugmentedSubmittables](_types_submittable_.augmentedsubmittables.md)‹ApiType›

  ↳ **SubmittableExtrinsics**

## Callable

▸ (`extrinsic`: Uint8Array | string): *SubmittableExtrinsic‹ApiType›*

*Defined in [api/src/types/submittable.ts:23](https://github.com/polkadot-js/api/blob/4aa5693906/packages/api/src/types/submittable.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`extrinsic` | Uint8Array &#124; string |

**Returns:** *SubmittableExtrinsic‹ApiType›*

## Indexable

* \[ **index**: *string*\]: [SubmittableModuleExtrinsics](_types_submittable_.submittablemoduleextrinsics.md)‹ApiType›

## Index

### Properties

* [authorship](_types_submittable_.submittableextrinsics.md#authorship)
* [balances](_types_submittable_.submittableextrinsics.md#balances)
* [contracts](_types_submittable_.submittableextrinsics.md#contracts)
* [council](_types_submittable_.submittableextrinsics.md#council)
* [democracy](_types_submittable_.submittableextrinsics.md#democracy)
* [elections](_types_submittable_.submittableextrinsics.md#elections)
* [finalityTracker](_types_submittable_.submittableextrinsics.md#finalitytracker)
* [grandpa](_types_submittable_.submittableextrinsics.md#grandpa)
* [identity](_types_submittable_.submittableextrinsics.md#identity)
* [imOnline](_types_submittable_.submittableextrinsics.md#imonline)
* [recovery](_types_submittable_.submittableextrinsics.md#recovery)
* [session](_types_submittable_.submittableextrinsics.md#session)
* [society](_types_submittable_.submittableextrinsics.md#society)
* [staking](_types_submittable_.submittableextrinsics.md#staking)
* [sudo](_types_submittable_.submittableextrinsics.md#sudo)
* [system](_types_submittable_.submittableextrinsics.md#system)
* [technicalCommittee](_types_submittable_.submittableextrinsics.md#technicalcommittee)
* [technicalMembership](_types_submittable_.submittableextrinsics.md#technicalmembership)
* [timestamp](_types_submittable_.submittableextrinsics.md#timestamp)
* [treasury](_types_submittable_.submittableextrinsics.md#treasury)
* [utility](_types_submittable_.submittableextrinsics.md#utility)

## Properties

###  authorship

• **authorship**: *object*

*Inherited from [SubmittableExtrinsics](_types_submittable_.submittableextrinsics.md).[authorship](_types_submittable_.submittableextrinsics.md#authorship)*

*Defined in [api/src/types/augment/tx.ts:44](https://github.com/polkadot-js/api/blob/4aa5693906/packages/api/src/types/augment/tx.ts#L44)*

#### Type declaration:

* **setUncles**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

___

###  balances

• **balances**: *object*

*Inherited from [SubmittableExtrinsics](_types_submittable_.submittableextrinsics.md).[balances](_types_submittable_.submittableextrinsics.md#balances)*

*Defined in [api/src/types/augment/tx.ts:47](https://github.com/polkadot-js/api/blob/4aa5693906/packages/api/src/types/augment/tx.ts#L47)*

#### Type declaration:

* **forceTransfer**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **setBalance**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **transfer**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **transferKeepAlive**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

___

###  contracts

• **contracts**: *object*

*Inherited from [SubmittableExtrinsics](_types_submittable_.submittableextrinsics.md).[contracts](_types_submittable_.submittableextrinsics.md#contracts)*

*Defined in [api/src/types/augment/tx.ts:141](https://github.com/polkadot-js/api/blob/4aa5693906/packages/api/src/types/augment/tx.ts#L141)*

#### Type declaration:

* **call**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **claimSurcharge**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **instantiate**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **putCode**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **updateSchedule**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

___

###  council

• **council**: *object*

*Inherited from [SubmittableExtrinsics](_types_submittable_.submittableextrinsics.md).[council](_types_submittable_.submittableextrinsics.md#council)*

*Defined in [api/src/types/augment/tx.ts:98](https://github.com/polkadot-js/api/blob/4aa5693906/packages/api/src/types/augment/tx.ts#L98)*

#### Type declaration:

* **execute**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **propose**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **setMembers**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **vote**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

___

###  democracy

• **democracy**: *object*

*Inherited from [SubmittableExtrinsics](_types_submittable_.submittableextrinsics.md).[democracy](_types_submittable_.submittableextrinsics.md#democracy)*

*Defined in [api/src/types/augment/tx.ts:75](https://github.com/polkadot-js/api/blob/4aa5693906/packages/api/src/types/augment/tx.ts#L75)*

#### Type declaration:

* **cancelQueued**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **cancelReferendum**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **clearPublicProposals**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **delegate**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **emergencyCancel**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **externalPropose**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **externalProposeDefault**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **externalProposeMajority**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **fastTrack**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **noteImminentPreimage**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **notePreimage**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **propose**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **proxyVote**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **reapPreimage**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **removeProxy**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **resignProxy**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **second**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **setProxy**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **undelegate**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **vetoExternal**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **vote**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

___

###  elections

• **elections**: *object*

*Inherited from [SubmittableExtrinsics](_types_submittable_.submittableextrinsics.md).[elections](_types_submittable_.submittableextrinsics.md#elections)*

*Defined in [api/src/types/augment/tx.ts:110](https://github.com/polkadot-js/api/blob/4aa5693906/packages/api/src/types/augment/tx.ts#L110)*

#### Type declaration:

* **removeMember**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **removeVoter**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **renounceCandidacy**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **reportDefunctVoter**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **submitCandidacy**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **vote**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

___

###  finalityTracker

• **finalityTracker**: *object*

*Inherited from [SubmittableExtrinsics](_types_submittable_.submittableextrinsics.md).[finalityTracker](_types_submittable_.submittableextrinsics.md#finalitytracker)*

*Defined in [api/src/types/augment/tx.ts:125](https://github.com/polkadot-js/api/blob/4aa5693906/packages/api/src/types/augment/tx.ts#L125)*

#### Type declaration:

* **finalHint**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

___

###  grandpa

• **grandpa**: *object*

*Inherited from [SubmittableExtrinsics](_types_submittable_.submittableextrinsics.md).[grandpa](_types_submittable_.submittableextrinsics.md#grandpa)*

*Defined in [api/src/types/augment/tx.ts:128](https://github.com/polkadot-js/api/blob/4aa5693906/packages/api/src/types/augment/tx.ts#L128)*

#### Type declaration:

* **reportMisbehavior**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

___

###  identity

• **identity**: *object*

*Inherited from [SubmittableExtrinsics](_types_submittable_.submittableextrinsics.md).[identity](_types_submittable_.submittableextrinsics.md#identity)*

*Defined in [api/src/types/augment/tx.ts:156](https://github.com/polkadot-js/api/blob/4aa5693906/packages/api/src/types/augment/tx.ts#L156)*

#### Type declaration:

* **addRegistrar**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **cancelRequest**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **clearIdentity**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **killIdentity**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **provideJudgement**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **requestJudgement**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **setAccountId**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **setFee**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **setFields**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **setIdentity**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **setSubs**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

___

###  imOnline

• **imOnline**: *object*

*Inherited from [SubmittableExtrinsics](_types_submittable_.submittableextrinsics.md).[imOnline](_types_submittable_.submittableextrinsics.md#imonline)*

*Defined in [api/src/types/augment/tx.ts:153](https://github.com/polkadot-js/api/blob/4aa5693906/packages/api/src/types/augment/tx.ts#L153)*

#### Type declaration:

* **heartbeat**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

___

###  recovery

• **recovery**: *object*

*Inherited from [SubmittableExtrinsics](_types_submittable_.submittableextrinsics.md).[recovery](_types_submittable_.submittableextrinsics.md#recovery)*

*Defined in [api/src/types/augment/tx.ts:183](https://github.com/polkadot-js/api/blob/4aa5693906/packages/api/src/types/augment/tx.ts#L183)*

#### Type declaration:

* **asRecovered**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **claimRecovery**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **closeRecovery**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **createRecovery**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **initiateRecovery**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **removeRecovery**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **setRecovered**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **vouchRecovery**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

___

###  session

• **session**: *object*

*Inherited from [SubmittableExtrinsics](_types_submittable_.submittableextrinsics.md).[session](_types_submittable_.submittableextrinsics.md#session)*

*Defined in [api/src/types/augment/tx.ts:72](https://github.com/polkadot-js/api/blob/4aa5693906/packages/api/src/types/augment/tx.ts#L72)*

#### Type declaration:

* **setKeys**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

___

###  society

• **society**: *object*

*Inherited from [SubmittableExtrinsics](_types_submittable_.submittableextrinsics.md).[society](_types_submittable_.submittableextrinsics.md#society)*

*Defined in [api/src/types/augment/tx.ts:169](https://github.com/polkadot-js/api/blob/4aa5693906/packages/api/src/types/augment/tx.ts#L169)*

#### Type declaration:

* **bid**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **defenderVote**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **found**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **judgeSuspendedCandidate**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **judgeSuspendedMember**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **payout**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **setMaxMembers**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **unbid**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **unfound**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **unvouch**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **vote**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **vouch**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

___

###  staking

• **staking**: *object*

*Inherited from [SubmittableExtrinsics](_types_submittable_.submittableextrinsics.md).[staking](_types_submittable_.submittableextrinsics.md#staking)*

*Defined in [api/src/types/augment/tx.ts:53](https://github.com/polkadot-js/api/blob/4aa5693906/packages/api/src/types/augment/tx.ts#L53)*

#### Type declaration:

* **bond**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **bondExtra**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **cancelDeferredSlash**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **chill**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **forceNewEra**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **forceNewEraAlways**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **forceNoEras**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **forceUnstake**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **nominate**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **rebond**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **setController**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **setInvulnerables**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **setPayee**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **setValidatorCount**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **unbond**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **validate**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **withdrawUnbonded**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

___

###  sudo

• **sudo**: *object*

*Inherited from [SubmittableExtrinsics](_types_submittable_.submittableextrinsics.md).[sudo](_types_submittable_.submittableextrinsics.md#sudo)*

*Defined in [api/src/types/augment/tx.ts:148](https://github.com/polkadot-js/api/blob/4aa5693906/packages/api/src/types/augment/tx.ts#L148)*

#### Type declaration:

* **setKey**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **sudo**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **sudoAs**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

___

###  system

• **system**: *object*

*Inherited from [SubmittableExtrinsics](_types_submittable_.submittableextrinsics.md).[system](_types_submittable_.submittableextrinsics.md#system)*

*Defined in [api/src/types/augment/tx.ts:23](https://github.com/polkadot-js/api/blob/4aa5693906/packages/api/src/types/augment/tx.ts#L23)*

#### Type declaration:

* **fillBlock**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **killPrefix**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **killStorage**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **remark**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **setChangesTrieConfig**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **setCode**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **setCodeWithoutChecks**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **setHeapPages**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **setStorage**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

___

###  technicalCommittee

• **technicalCommittee**: *object*

*Inherited from [SubmittableExtrinsics](_types_submittable_.submittableextrinsics.md).[technicalCommittee](_types_submittable_.submittableextrinsics.md#technicalcommittee)*

*Defined in [api/src/types/augment/tx.ts:104](https://github.com/polkadot-js/api/blob/4aa5693906/packages/api/src/types/augment/tx.ts#L104)*

#### Type declaration:

* **execute**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **propose**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **setMembers**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **vote**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

___

###  technicalMembership

• **technicalMembership**: *object*

*Inherited from [SubmittableExtrinsics](_types_submittable_.submittableextrinsics.md).[technicalMembership](_types_submittable_.submittableextrinsics.md#technicalmembership)*

*Defined in [api/src/types/augment/tx.ts:118](https://github.com/polkadot-js/api/blob/4aa5693906/packages/api/src/types/augment/tx.ts#L118)*

#### Type declaration:

* **addMember**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **changeKey**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **removeMember**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **resetMembers**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **swapMember**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

___

###  timestamp

• **timestamp**: *object*

*Inherited from [SubmittableExtrinsics](_types_submittable_.submittableextrinsics.md).[timestamp](_types_submittable_.submittableextrinsics.md#timestamp)*

*Defined in [api/src/types/augment/tx.ts:41](https://github.com/polkadot-js/api/blob/4aa5693906/packages/api/src/types/augment/tx.ts#L41)*

#### Type declaration:

* **set**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

___

###  treasury

• **treasury**: *object*

*Inherited from [SubmittableExtrinsics](_types_submittable_.submittableextrinsics.md).[treasury](_types_submittable_.submittableextrinsics.md#treasury)*

*Defined in [api/src/types/augment/tx.ts:131](https://github.com/polkadot-js/api/blob/4aa5693906/packages/api/src/types/augment/tx.ts#L131)*

#### Type declaration:

* **approveProposal**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **closeTip**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **proposeSpend**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **rejectProposal**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **reportAwesome**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **retractTip**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **tip**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **tipNew**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

___

###  utility

• **utility**: *object*

*Inherited from [SubmittableExtrinsics](_types_submittable_.submittableextrinsics.md).[utility](_types_submittable_.submittableextrinsics.md#utility)*

*Defined in [api/src/types/augment/tx.ts:34](https://github.com/polkadot-js/api/blob/4aa5693906/packages/api/src/types/augment/tx.ts#L34)*

#### Type declaration:

* **approveAsMulti**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **asMulti**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **asSub**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **batch**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*

* **cancelAsMulti**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹ApiType, function›*
