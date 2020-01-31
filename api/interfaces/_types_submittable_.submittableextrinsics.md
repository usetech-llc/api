[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types/submittable"](../modules/_types_submittable_.md) › [SubmittableExtrinsics](_types_submittable_.submittableextrinsics.md)

# Interface: SubmittableExtrinsics <**ApiType**>

## Type parameters

▪ **ApiType**: *[ApiTypes](../modules/_types_base_.md#apitypes)*

## Hierarchy

* [AugmentedSubmittables](_types_submittable_.augmentedsubmittables.md)‹ApiType›

  ↳ **SubmittableExtrinsics**

## Callable

▸ (`extrinsic`: Uint8Array | string): *SubmittableExtrinsic‹ApiType›*

*Defined in [api/src/types/submittable.ts:23](https://github.com/polkadot-js/api/blob/4f0e573adf/packages/api/src/types/submittable.ts#L23)*

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

*Defined in [api/src/types/augment/tx.ts:92](https://github.com/polkadot-js/api/blob/4f0e573adf/packages/api/src/types/augment/tx.ts#L92)*

#### Type declaration:

* \[ **index**: *string*\]: [SubmittableExtrinsicFunction](_types_submittable_.submittableextrinsicfunction.md)‹ApiType›

* **setUncles**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

___

###  balances

• **balances**: *object*

*Inherited from [SubmittableExtrinsics](_types_submittable_.submittableextrinsics.md).[balances](_types_submittable_.submittableextrinsics.md#balances)*

*Defined in [api/src/types/augment/tx.ts:99](https://github.com/polkadot-js/api/blob/4f0e573adf/packages/api/src/types/augment/tx.ts#L99)*

#### Type declaration:

* \[ **index**: *string*\]: [SubmittableExtrinsicFunction](_types_submittable_.submittableextrinsicfunction.md)‹ApiType›

* **forceTransfer**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **setBalance**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **transfer**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **transferKeepAlive**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

___

###  contracts

• **contracts**: *object*

*Inherited from [SubmittableExtrinsics](_types_submittable_.submittableextrinsics.md).[contracts](_types_submittable_.submittableextrinsics.md#contracts)*

*Defined in [api/src/types/augment/tx.ts:420](https://github.com/polkadot-js/api/blob/4f0e573adf/packages/api/src/types/augment/tx.ts#L420)*

#### Type declaration:

* \[ **index**: *string*\]: [SubmittableExtrinsicFunction](_types_submittable_.submittableextrinsicfunction.md)‹ApiType›

* **call**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **claimSurcharge**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **instantiate**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **putCode**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **updateSchedule**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

___

###  council

• **council**: *object*

*Inherited from [SubmittableExtrinsics](_types_submittable_.submittableextrinsics.md).[council](_types_submittable_.submittableextrinsics.md#council)*

*Defined in [api/src/types/augment/tx.ts:283](https://github.com/polkadot-js/api/blob/4f0e573adf/packages/api/src/types/augment/tx.ts#L283)*

#### Type declaration:

* \[ **index**: *string*\]: [SubmittableExtrinsicFunction](_types_submittable_.submittableextrinsicfunction.md)‹ApiType›

* **execute**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **propose**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **setMembers**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **vote**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

___

###  democracy

• **democracy**: *object*

*Inherited from [SubmittableExtrinsics](_types_submittable_.submittableextrinsics.md).[democracy](_types_submittable_.submittableextrinsics.md#democracy)*

*Defined in [api/src/types/augment/tx.ts:196](https://github.com/polkadot-js/api/blob/4f0e573adf/packages/api/src/types/augment/tx.ts#L196)*

#### Type declaration:

* \[ **index**: *string*\]: [SubmittableExtrinsicFunction](_types_submittable_.submittableextrinsicfunction.md)‹ApiType›

* **cancelQueued**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **cancelReferendum**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **clearPublicProposals**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **delegate**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **emergencyCancel**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **externalPropose**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **externalProposeDefault**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **externalProposeMajority**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **fastTrack**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **noteImminentPreimage**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **notePreimage**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **propose**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **proxyVote**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **reapPreimage**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **removeProxy**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **resignProxy**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **second**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **setProxy**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **undelegate**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **vetoExternal**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **vote**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

___

###  elections

• **elections**: *object*

*Inherited from [SubmittableExtrinsics](_types_submittable_.submittableextrinsics.md).[elections](_types_submittable_.submittableextrinsics.md#elections)*

*Defined in [api/src/types/augment/tx.ts:321](https://github.com/polkadot-js/api/blob/4f0e573adf/packages/api/src/types/augment/tx.ts#L321)*

#### Type declaration:

* \[ **index**: *string*\]: [SubmittableExtrinsicFunction](_types_submittable_.submittableextrinsicfunction.md)‹ApiType›

* **removeMember**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **removeVoter**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **renounceCandidacy**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **reportDefunctVoter**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **submitCandidacy**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **vote**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

___

###  finalityTracker

• **finalityTracker**: *object*

*Inherited from [SubmittableExtrinsics](_types_submittable_.submittableextrinsics.md).[finalityTracker](_types_submittable_.submittableextrinsics.md#finalitytracker)*

*Defined in [api/src/types/augment/tx.ts:371](https://github.com/polkadot-js/api/blob/4f0e573adf/packages/api/src/types/augment/tx.ts#L371)*

#### Type declaration:

* \[ **index**: *string*\]: [SubmittableExtrinsicFunction](_types_submittable_.submittableextrinsicfunction.md)‹ApiType›

* **finalHint**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

___

###  grandpa

• **grandpa**: *object*

*Inherited from [SubmittableExtrinsics](_types_submittable_.submittableextrinsics.md).[grandpa](_types_submittable_.submittableextrinsics.md#grandpa)*

*Defined in [api/src/types/augment/tx.ts:378](https://github.com/polkadot-js/api/blob/4f0e573adf/packages/api/src/types/augment/tx.ts#L378)*

#### Type declaration:

* \[ **index**: *string*\]: [SubmittableExtrinsicFunction](_types_submittable_.submittableextrinsicfunction.md)‹ApiType›

* **reportMisbehavior**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

___

###  identity

• **identity**: *object*

*Inherited from [SubmittableExtrinsics](_types_submittable_.submittableextrinsics.md).[identity](_types_submittable_.submittableextrinsics.md#identity)*

*Defined in [api/src/types/augment/tx.ts:462](https://github.com/polkadot-js/api/blob/4f0e573adf/packages/api/src/types/augment/tx.ts#L462)*

#### Type declaration:

* \[ **index**: *string*\]: [SubmittableExtrinsicFunction](_types_submittable_.submittableextrinsicfunction.md)‹ApiType›

* **addRegistrar**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **cancelRequest**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **clearIdentity**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **killIdentity**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **provideJudgement**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **requestJudgement**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **setAccountId**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **setFee**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **setFields**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **setIdentity**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **setSubs**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

___

###  imOnline

• **imOnline**: *object*

*Inherited from [SubmittableExtrinsics](_types_submittable_.submittableextrinsics.md).[imOnline](_types_submittable_.submittableextrinsics.md#imonline)*

*Defined in [api/src/types/augment/tx.ts:458](https://github.com/polkadot-js/api/blob/4f0e573adf/packages/api/src/types/augment/tx.ts#L458)*

#### Type declaration:

* \[ **index**: *string*\]: [SubmittableExtrinsicFunction](_types_submittable_.submittableextrinsicfunction.md)‹ApiType›

* **heartbeat**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

___

###  recovery

• **recovery**: *object*

*Inherited from [SubmittableExtrinsics](_types_submittable_.submittableextrinsics.md).[recovery](_types_submittable_.submittableextrinsics.md#recovery)*

*Defined in [api/src/types/augment/tx.ts:560](https://github.com/polkadot-js/api/blob/4f0e573adf/packages/api/src/types/augment/tx.ts#L560)*

#### Type declaration:

* \[ **index**: *string*\]: [SubmittableExtrinsicFunction](_types_submittable_.submittableextrinsicfunction.md)‹ApiType›

* **asRecovered**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **claimRecovery**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **closeRecovery**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **createRecovery**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **initiateRecovery**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **removeRecovery**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **setRecovered**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **vouchRecovery**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

___

###  session

• **session**: *object*

*Inherited from [SubmittableExtrinsics](_types_submittable_.submittableextrinsics.md).[session](_types_submittable_.submittableextrinsics.md#session)*

*Defined in [api/src/types/augment/tx.ts:189](https://github.com/polkadot-js/api/blob/4f0e573adf/packages/api/src/types/augment/tx.ts#L189)*

#### Type declaration:

* \[ **index**: *string*\]: [SubmittableExtrinsicFunction](_types_submittable_.submittableextrinsicfunction.md)‹ApiType›

* **setKeys**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

___

###  society

• **society**: *object*

*Inherited from [SubmittableExtrinsics](_types_submittable_.submittableextrinsics.md).[society](_types_submittable_.submittableextrinsics.md#society)*

*Defined in [api/src/types/augment/tx.ts:509](https://github.com/polkadot-js/api/blob/4f0e573adf/packages/api/src/types/augment/tx.ts#L509)*

#### Type declaration:

* \[ **index**: *string*\]: [SubmittableExtrinsicFunction](_types_submittable_.submittableextrinsicfunction.md)‹ApiType›

* **bid**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **defenderVote**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **found**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **judgeSuspendedCandidate**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **judgeSuspendedMember**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **payout**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **setMaxMembers**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **unbid**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **unfound**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **unvouch**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **vote**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **vouch**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

___

###  staking

• **staking**: *object*

*Inherited from [SubmittableExtrinsics](_types_submittable_.submittableextrinsics.md).[staking](_types_submittable_.submittableextrinsics.md#staking)*

*Defined in [api/src/types/augment/tx.ts:118](https://github.com/polkadot-js/api/blob/4f0e573adf/packages/api/src/types/augment/tx.ts#L118)*

#### Type declaration:

* \[ **index**: *string*\]: [SubmittableExtrinsicFunction](_types_submittable_.submittableextrinsicfunction.md)‹ApiType›

* **bond**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **bondExtra**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **cancelDeferredSlash**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **chill**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **forceNewEra**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **forceNewEraAlways**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **forceNoEras**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **forceUnstake**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **nominate**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **rebond**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **setController**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **setInvulnerables**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **setPayee**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **setValidatorCount**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **unbond**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **validate**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **withdrawUnbonded**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

___

###  sudo

• **sudo**: *object*

*Inherited from [SubmittableExtrinsics](_types_submittable_.submittableextrinsics.md).[sudo](_types_submittable_.submittableextrinsics.md#sudo)*

*Defined in [api/src/types/augment/tx.ts:443](https://github.com/polkadot-js/api/blob/4f0e573adf/packages/api/src/types/augment/tx.ts#L443)*

#### Type declaration:

* \[ **index**: *string*\]: [SubmittableExtrinsicFunction](_types_submittable_.submittableextrinsicfunction.md)‹ApiType›

* **setKey**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **sudo**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **sudoAs**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

___

###  system

• **system**: *object*

*Inherited from [SubmittableExtrinsics](_types_submittable_.submittableextrinsics.md).[system](_types_submittable_.submittableextrinsics.md#system)*

*Defined in [api/src/types/augment/tx.ts:23](https://github.com/polkadot-js/api/blob/4f0e573adf/packages/api/src/types/augment/tx.ts#L23)*

#### Type declaration:

* \[ **index**: *string*\]: [SubmittableExtrinsicFunction](_types_submittable_.submittableextrinsicfunction.md)‹ApiType›

* **fillBlock**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **killPrefix**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **killStorage**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **remark**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **setChangesTrieConfig**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **setCode**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **setCodeWithoutChecks**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **setHeapPages**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **setStorage**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

___

###  technicalCommittee

• **technicalCommittee**: *object*

*Inherited from [SubmittableExtrinsics](_types_submittable_.submittableextrinsics.md).[technicalCommittee](_types_submittable_.submittableextrinsics.md#technicalcommittee)*

*Defined in [api/src/types/augment/tx.ts:302](https://github.com/polkadot-js/api/blob/4f0e573adf/packages/api/src/types/augment/tx.ts#L302)*

#### Type declaration:

* \[ **index**: *string*\]: [SubmittableExtrinsicFunction](_types_submittable_.submittableextrinsicfunction.md)‹ApiType›

* **execute**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **propose**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **setMembers**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **vote**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

___

###  technicalMembership

• **technicalMembership**: *object*

*Inherited from [SubmittableExtrinsics](_types_submittable_.submittableextrinsics.md).[technicalMembership](_types_submittable_.submittableextrinsics.md#technicalmembership)*

*Defined in [api/src/types/augment/tx.ts:348](https://github.com/polkadot-js/api/blob/4f0e573adf/packages/api/src/types/augment/tx.ts#L348)*

#### Type declaration:

* \[ **index**: *string*\]: [SubmittableExtrinsicFunction](_types_submittable_.submittableextrinsicfunction.md)‹ApiType›

* **addMember**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **changeKey**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **removeMember**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **resetMembers**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **swapMember**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

___

###  timestamp

• **timestamp**: *object*

*Inherited from [SubmittableExtrinsics](_types_submittable_.submittableextrinsics.md).[timestamp](_types_submittable_.submittableextrinsics.md#timestamp)*

*Defined in [api/src/types/augment/tx.ts:85](https://github.com/polkadot-js/api/blob/4f0e573adf/packages/api/src/types/augment/tx.ts#L85)*

#### Type declaration:

* \[ **index**: *string*\]: [SubmittableExtrinsicFunction](_types_submittable_.submittableextrinsicfunction.md)‹ApiType›

* **set**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

___

###  treasury

• **treasury**: *object*

*Inherited from [SubmittableExtrinsics](_types_submittable_.submittableextrinsics.md).[treasury](_types_submittable_.submittableextrinsics.md#treasury)*

*Defined in [api/src/types/augment/tx.ts:385](https://github.com/polkadot-js/api/blob/4f0e573adf/packages/api/src/types/augment/tx.ts#L385)*

#### Type declaration:

* \[ **index**: *string*\]: [SubmittableExtrinsicFunction](_types_submittable_.submittableextrinsicfunction.md)‹ApiType›

* **approveProposal**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **closeTip**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **proposeSpend**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **rejectProposal**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **reportAwesome**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **retractTip**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **tip**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **tipNew**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

___

###  utility

• **utility**: *object*

*Inherited from [SubmittableExtrinsics](_types_submittable_.submittableextrinsics.md).[utility](_types_submittable_.submittableextrinsics.md#utility)*

*Defined in [api/src/types/augment/tx.ts:62](https://github.com/polkadot-js/api/blob/4f0e573adf/packages/api/src/types/augment/tx.ts#L62)*

#### Type declaration:

* \[ **index**: *string*\]: [SubmittableExtrinsicFunction](_types_submittable_.submittableextrinsicfunction.md)‹ApiType›

* **approveAsMulti**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **asMulti**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **asSub**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **batch**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*

* **cancelAsMulti**: *[AugmentedExtrinsic](../modules/_types_submittable_.md#augmentedextrinsic)‹function›*
