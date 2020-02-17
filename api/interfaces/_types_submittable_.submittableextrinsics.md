[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types/submittable"](../modules/_types_submittable_.md) › [SubmittableExtrinsics](_types_submittable_.submittableextrinsics.md)

# Interface: SubmittableExtrinsics <**ApiType**>

## Type parameters

▪ **ApiType**: *[ApiTypes](../modules/_types_base_.md#apitypes)*

## Hierarchy

* [AugmentedSubmittables](_types_submittable_.augmentedsubmittables.md)‹ApiType›

  ↳ **SubmittableExtrinsics**

## Callable

▸ (`extrinsic`: Uint8Array | string): *SubmittableExtrinsic‹ApiType›*

*Defined in [api/src/types/submittable.ts:23](https://github.com/polkadot-js/api/blob/01abc030f9/packages/api/src/types/submittable.ts#L23)*

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
* [indices](_types_submittable_.submittableextrinsics.md#indices)
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
* [vesting](_types_submittable_.submittableextrinsics.md#vesting)

## Properties

###  authorship

• **authorship**: *object*

*Inherited from [SubmittableExtrinsics](_types_submittable_.submittableextrinsics.md).[authorship](_types_submittable_.submittableextrinsics.md#authorship)*

*Defined in [api/src/types/augment/tx.ts:190](https://github.com/polkadot-js/api/blob/01abc030f9/packages/api/src/types/augment/tx.ts#L190)*

#### Type declaration:

* \[ **index**: *string*\]: [SubmittableExtrinsicFunction](_types_submittable_.submittableextrinsicfunction.md)‹ApiType›

* **setUncles**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

___

###  balances

• **balances**: *object*

*Inherited from [SubmittableExtrinsics](_types_submittable_.submittableextrinsics.md).[balances](_types_submittable_.submittableextrinsics.md#balances)*

*Defined in [api/src/types/augment/tx.ts:258](https://github.com/polkadot-js/api/blob/01abc030f9/packages/api/src/types/augment/tx.ts#L258)*

#### Type declaration:

* \[ **index**: *string*\]: [SubmittableExtrinsicFunction](_types_submittable_.submittableextrinsicfunction.md)‹ApiType›

* **forceTransfer**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **setBalance**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **transfer**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **transferKeepAlive**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

___

###  contracts

• **contracts**: *object*

*Inherited from [SubmittableExtrinsics](_types_submittable_.submittableextrinsics.md).[contracts](_types_submittable_.submittableextrinsics.md#contracts)*

*Defined in [api/src/types/augment/tx.ts:931](https://github.com/polkadot-js/api/blob/01abc030f9/packages/api/src/types/augment/tx.ts#L931)*

#### Type declaration:

* \[ **index**: *string*\]: [SubmittableExtrinsicFunction](_types_submittable_.submittableextrinsicfunction.md)‹ApiType›

* **call**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **claimSurcharge**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **instantiate**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **putCode**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **updateSchedule**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

___

###  council

• **council**: *object*

*Inherited from [SubmittableExtrinsics](_types_submittable_.submittableextrinsics.md).[council](_types_submittable_.submittableextrinsics.md#council)*

*Defined in [api/src/types/augment/tx.ts:635](https://github.com/polkadot-js/api/blob/01abc030f9/packages/api/src/types/augment/tx.ts#L635)*

#### Type declaration:

* \[ **index**: *string*\]: [SubmittableExtrinsicFunction](_types_submittable_.submittableextrinsicfunction.md)‹ApiType›

* **execute**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **propose**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **setMembers**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **vote**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

___

###  democracy

• **democracy**: *object*

*Inherited from [SubmittableExtrinsics](_types_submittable_.submittableextrinsics.md).[democracy](_types_submittable_.submittableextrinsics.md#democracy)*

*Defined in [api/src/types/augment/tx.ts:494](https://github.com/polkadot-js/api/blob/01abc030f9/packages/api/src/types/augment/tx.ts#L494)*

#### Type declaration:

* \[ **index**: *string*\]: [SubmittableExtrinsicFunction](_types_submittable_.submittableextrinsicfunction.md)‹ApiType›

* **cancelQueued**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **cancelReferendum**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **clearPublicProposals**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **delegate**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **emergencyCancel**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **externalPropose**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **externalProposeDefault**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **externalProposeMajority**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **fastTrack**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **noteImminentPreimage**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **notePreimage**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **propose**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **proxyVote**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **reapPreimage**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **removeProxy**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **resignProxy**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **second**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **setProxy**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **undelegate**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **unlock**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **vetoExternal**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **vote**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

___

###  elections

• **elections**: *object*

*Inherited from [SubmittableExtrinsics](_types_submittable_.submittableextrinsics.md).[elections](_types_submittable_.submittableextrinsics.md#elections)*

*Defined in [api/src/types/augment/tx.ts:691](https://github.com/polkadot-js/api/blob/01abc030f9/packages/api/src/types/augment/tx.ts#L691)*

#### Type declaration:

* \[ **index**: *string*\]: [SubmittableExtrinsicFunction](_types_submittable_.submittableextrinsicfunction.md)‹ApiType›

* **removeMember**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **removeVoter**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **renounceCandidacy**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **reportDefunctVoter**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **submitCandidacy**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **vote**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

___

###  finalityTracker

• **finalityTracker**: *object*

*Inherited from [SubmittableExtrinsics](_types_submittable_.submittableextrinsics.md).[finalityTracker](_types_submittable_.submittableextrinsics.md#finalitytracker)*

*Defined in [api/src/types/augment/tx.ts:800](https://github.com/polkadot-js/api/blob/01abc030f9/packages/api/src/types/augment/tx.ts#L800)*

#### Type declaration:

* \[ **index**: *string*\]: [SubmittableExtrinsicFunction](_types_submittable_.submittableextrinsicfunction.md)‹ApiType›

* **finalHint**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

___

###  grandpa

• **grandpa**: *object*

*Inherited from [SubmittableExtrinsics](_types_submittable_.submittableextrinsics.md).[grandpa](_types_submittable_.submittableextrinsics.md#grandpa)*

*Defined in [api/src/types/augment/tx.ts:808](https://github.com/polkadot-js/api/blob/01abc030f9/packages/api/src/types/augment/tx.ts#L808)*

#### Type declaration:

* \[ **index**: *string*\]: [SubmittableExtrinsicFunction](_types_submittable_.submittableextrinsicfunction.md)‹ApiType›

* **reportMisbehavior**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

___

###  identity

• **identity**: *object*

*Inherited from [SubmittableExtrinsics](_types_submittable_.submittableextrinsics.md).[identity](_types_submittable_.submittableextrinsics.md#identity)*

*Defined in [api/src/types/augment/tx.ts:1011](https://github.com/polkadot-js/api/blob/01abc030f9/packages/api/src/types/augment/tx.ts#L1011)*

#### Type declaration:

* \[ **index**: *string*\]: [SubmittableExtrinsicFunction](_types_submittable_.submittableextrinsicfunction.md)‹ApiType›

* **addRegistrar**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **cancelRequest**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **clearIdentity**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **killIdentity**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **provideJudgement**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **requestJudgement**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **setAccountId**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **setFee**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **setFields**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **setIdentity**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **setSubs**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

___

###  imOnline

• **imOnline**: *object*

*Inherited from [SubmittableExtrinsics](_types_submittable_.submittableextrinsics.md).[imOnline](_types_submittable_.submittableextrinsics.md#imonline)*

*Defined in [api/src/types/augment/tx.ts:1007](https://github.com/polkadot-js/api/blob/01abc030f9/packages/api/src/types/augment/tx.ts#L1007)*

#### Type declaration:

* \[ **index**: *string*\]: [SubmittableExtrinsicFunction](_types_submittable_.submittableextrinsicfunction.md)‹ApiType›

* **heartbeat**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

___

###  indices

• **indices**: *object*

*Inherited from [SubmittableExtrinsics](_types_submittable_.submittableextrinsics.md).[indices](_types_submittable_.submittableextrinsics.md#indices)*

*Defined in [api/src/types/augment/tx.ts:197](https://github.com/polkadot-js/api/blob/01abc030f9/packages/api/src/types/augment/tx.ts#L197)*

#### Type declaration:

* \[ **index**: *string*\]: [SubmittableExtrinsicFunction](_types_submittable_.submittableextrinsicfunction.md)‹ApiType›

* **claim**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **forceTransfer**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **free**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **transfer**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

___

###  recovery

• **recovery**: *object*

*Inherited from [SubmittableExtrinsics](_types_submittable_.submittableextrinsics.md).[recovery](_types_submittable_.submittableextrinsics.md#recovery)*

*Defined in [api/src/types/augment/tx.ts:1439](https://github.com/polkadot-js/api/blob/01abc030f9/packages/api/src/types/augment/tx.ts#L1439)*

#### Type declaration:

* \[ **index**: *string*\]: [SubmittableExtrinsicFunction](_types_submittable_.submittableextrinsicfunction.md)‹ApiType›

* **asRecovered**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **claimRecovery**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **closeRecovery**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **createRecovery**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **initiateRecovery**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **removeRecovery**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **setRecovered**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **vouchRecovery**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

___

###  session

• **session**: *object*

*Inherited from [SubmittableExtrinsics](_types_submittable_.submittableextrinsics.md).[session](_types_submittable_.submittableextrinsics.md#session)*

*Defined in [api/src/types/augment/tx.ts:480](https://github.com/polkadot-js/api/blob/01abc030f9/packages/api/src/types/augment/tx.ts#L480)*

#### Type declaration:

* \[ **index**: *string*\]: [SubmittableExtrinsicFunction](_types_submittable_.submittableextrinsicfunction.md)‹ApiType›

* **setKeys**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

___

###  society

• **society**: *object*

*Inherited from [SubmittableExtrinsics](_types_submittable_.submittableextrinsics.md).[society](_types_submittable_.submittableextrinsics.md#society)*

*Defined in [api/src/types/augment/tx.ts:1177](https://github.com/polkadot-js/api/blob/01abc030f9/packages/api/src/types/augment/tx.ts#L1177)*

#### Type declaration:

* \[ **index**: *string*\]: [SubmittableExtrinsicFunction](_types_submittable_.submittableextrinsicfunction.md)‹ApiType›

* **bid**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **defenderVote**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **found**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **judgeSuspendedCandidate**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **judgeSuspendedMember**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **payout**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **setMaxMembers**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **unbid**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **unfound**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **unvouch**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **vote**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **vouch**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

___

###  staking

• **staking**: *object*

*Inherited from [SubmittableExtrinsics](_types_submittable_.submittableextrinsics.md).[staking](_types_submittable_.submittableextrinsics.md#staking)*

*Defined in [api/src/types/augment/tx.ts:307](https://github.com/polkadot-js/api/blob/01abc030f9/packages/api/src/types/augment/tx.ts#L307)*

#### Type declaration:

* \[ **index**: *string*\]: [SubmittableExtrinsicFunction](_types_submittable_.submittableextrinsicfunction.md)‹ApiType›

* **bond**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **bondExtra**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **cancelDeferredSlash**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **chill**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **forceNewEra**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **forceNewEraAlways**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **forceNoEras**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **forceUnstake**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **nominate**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **rebond**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **setController**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **setInvulnerables**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **setPayee**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **setValidatorCount**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **unbond**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **validate**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **withdrawUnbonded**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

___

###  sudo

• **sudo**: *object*

*Inherited from [SubmittableExtrinsics](_types_submittable_.submittableextrinsics.md).[sudo](_types_submittable_.submittableextrinsics.md#sudo)*

*Defined in [api/src/types/augment/tx.ts:971](https://github.com/polkadot-js/api/blob/01abc030f9/packages/api/src/types/augment/tx.ts#L971)*

#### Type declaration:

* \[ **index**: *string*\]: [SubmittableExtrinsicFunction](_types_submittable_.submittableextrinsicfunction.md)‹ApiType›

* **setKey**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **sudo**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **sudoAs**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

___

###  system

• **system**: *object*

*Inherited from [SubmittableExtrinsics](_types_submittable_.submittableextrinsics.md).[system](_types_submittable_.submittableextrinsics.md#system)*

*Defined in [api/src/types/augment/tx.ts:23](https://github.com/polkadot-js/api/blob/01abc030f9/packages/api/src/types/augment/tx.ts#L23)*

#### Type declaration:

* \[ **index**: *string*\]: [SubmittableExtrinsicFunction](_types_submittable_.submittableextrinsicfunction.md)‹ApiType›

* **fillBlock**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **killPrefix**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **killStorage**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **remark**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **setChangesTrieConfig**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **setCode**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **setCodeWithoutChecks**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **setHeapPages**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **setStorage**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

___

###  technicalCommittee

• **technicalCommittee**: *object*

*Inherited from [SubmittableExtrinsics](_types_submittable_.submittableextrinsics.md).[technicalCommittee](_types_submittable_.submittableextrinsics.md#technicalcommittee)*

*Defined in [api/src/types/augment/tx.ts:663](https://github.com/polkadot-js/api/blob/01abc030f9/packages/api/src/types/augment/tx.ts#L663)*

#### Type declaration:

* \[ **index**: *string*\]: [SubmittableExtrinsicFunction](_types_submittable_.submittableextrinsicfunction.md)‹ApiType›

* **execute**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **propose**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **setMembers**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **vote**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

___

###  technicalMembership

• **technicalMembership**: *object*

*Inherited from [SubmittableExtrinsics](_types_submittable_.submittableextrinsics.md).[technicalMembership](_types_submittable_.submittableextrinsics.md#technicalmembership)*

*Defined in [api/src/types/augment/tx.ts:771](https://github.com/polkadot-js/api/blob/01abc030f9/packages/api/src/types/augment/tx.ts#L771)*

#### Type declaration:

* \[ **index**: *string*\]: [SubmittableExtrinsicFunction](_types_submittable_.submittableextrinsicfunction.md)‹ApiType›

* **addMember**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **changeKey**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **removeMember**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **resetMembers**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **swapMember**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

___

###  timestamp

• **timestamp**: *object*

*Inherited from [SubmittableExtrinsics](_types_submittable_.submittableextrinsics.md).[timestamp](_types_submittable_.submittableextrinsics.md#timestamp)*

*Defined in [api/src/types/augment/tx.ts:178](https://github.com/polkadot-js/api/blob/01abc030f9/packages/api/src/types/augment/tx.ts#L178)*

#### Type declaration:

* \[ **index**: *string*\]: [SubmittableExtrinsicFunction](_types_submittable_.submittableextrinsicfunction.md)‹ApiType›

* **set**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

___

###  treasury

• **treasury**: *object*

*Inherited from [SubmittableExtrinsics](_types_submittable_.submittableextrinsics.md).[treasury](_types_submittable_.submittableextrinsics.md#treasury)*

*Defined in [api/src/types/augment/tx.ts:815](https://github.com/polkadot-js/api/blob/01abc030f9/packages/api/src/types/augment/tx.ts#L815)*

#### Type declaration:

* \[ **index**: *string*\]: [SubmittableExtrinsicFunction](_types_submittable_.submittableextrinsicfunction.md)‹ApiType›

* **approveProposal**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **closeTip**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **proposeSpend**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **rejectProposal**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **reportAwesome**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **retractTip**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **tip**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **tipNew**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

___

###  utility

• **utility**: *object*

*Inherited from [SubmittableExtrinsics](_types_submittable_.submittableextrinsics.md).[utility](_types_submittable_.submittableextrinsics.md#utility)*

*Defined in [api/src/types/augment/tx.ts:62](https://github.com/polkadot-js/api/blob/01abc030f9/packages/api/src/types/augment/tx.ts#L62)*

#### Type declaration:

* \[ **index**: *string*\]: [SubmittableExtrinsicFunction](_types_submittable_.submittableextrinsicfunction.md)‹ApiType›

* **approveAsMulti**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **asMulti**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **asSub**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **batch**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **cancelAsMulti**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

___

###  vesting

• **vesting**: *object*

*Inherited from [SubmittableExtrinsics](_types_submittable_.submittableextrinsics.md).[vesting](_types_submittable_.submittableextrinsics.md#vesting)*

*Defined in [api/src/types/augment/tx.ts:1592](https://github.com/polkadot-js/api/blob/01abc030f9/packages/api/src/types/augment/tx.ts#L1592)*

#### Type declaration:

* \[ **index**: *string*\]: [SubmittableExtrinsicFunction](_types_submittable_.submittableextrinsicfunction.md)‹ApiType›

* **vest**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*

* **vestOther**: *[AugmentedSubmittable](../modules/_types_submittable_.md#augmentedsubmittable)‹function›*
