[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types"](../modules/_types_.md) › [DerivedStakingAccount](_types_.derivedstakingaccount.md)

# Interface: DerivedStakingAccount

## Hierarchy

  ↳ [DerivedStakingQuery](_types_.derivedstakingquery.md)

  ↳ **DerivedStakingAccount**

## Index

### Properties

* [accountId](_types_.derivedstakingaccount.md#accountid)
* [controllerId](_types_.derivedstakingaccount.md#optional-controllerid)
* [nextKeys](_types_.derivedstakingaccount.md#optional-nextkeys)
* [nextSessionIds](_types_.derivedstakingaccount.md#nextsessionids)
* [nominators](_types_.derivedstakingaccount.md#optional-nominators)
* [redeemable](_types_.derivedstakingaccount.md#optional-redeemable)
* [rewardDestination](_types_.derivedstakingaccount.md#optional-rewarddestination)
* [sessionIds](_types_.derivedstakingaccount.md#sessionids)
* [stakers](_types_.derivedstakingaccount.md#optional-stakers)
* [stakingLedger](_types_.derivedstakingaccount.md#optional-stakingledger)
* [stashId](_types_.derivedstakingaccount.md#optional-stashid)
* [unlocking](_types_.derivedstakingaccount.md#optional-unlocking)
* [validatorPrefs](_types_.derivedstakingaccount.md#optional-validatorprefs)

## Properties

###  accountId

• **accountId**: *AccountId*

*Inherited from [DerivedStakingQuery](_types_.derivedstakingquery.md).[accountId](_types_.derivedstakingquery.md#accountid)*

*Defined in [packages/api-derive/src/types.ts:164](https://github.com/polkadot-js/api/blob/6e61be960/packages/api-derive/src/types.ts#L164)*

___

### `Optional` controllerId

• **controllerId**? : *AccountId*

*Inherited from [DerivedStakingStash](_types_.derivedstakingstash.md).[controllerId](_types_.derivedstakingstash.md#optional-controllerid)*

*Defined in [packages/api-derive/src/types.ts:154](https://github.com/polkadot-js/api/blob/6e61be960/packages/api-derive/src/types.ts#L154)*

___

### `Optional` nextKeys

• **nextKeys**? : *Keys*

*Inherited from [DerivedStakingStash](_types_.derivedstakingstash.md).[nextKeys](_types_.derivedstakingstash.md#optional-nextkeys)*

*Defined in [packages/api-derive/src/types.ts:157](https://github.com/polkadot-js/api/blob/6e61be960/packages/api-derive/src/types.ts#L157)*

___

###  nextSessionIds

• **nextSessionIds**: *AccountId[]*

*Inherited from [DerivedStakingQuery](_types_.derivedstakingquery.md).[nextSessionIds](_types_.derivedstakingquery.md#nextsessionids)*

*Defined in [packages/api-derive/src/types.ts:165](https://github.com/polkadot-js/api/blob/6e61be960/packages/api-derive/src/types.ts#L165)*

___

### `Optional` nominators

• **nominators**? : *AccountId[]*

*Inherited from [DerivedStakingStash](_types_.derivedstakingstash.md).[nominators](_types_.derivedstakingstash.md#optional-nominators)*

*Defined in [packages/api-derive/src/types.ts:155](https://github.com/polkadot-js/api/blob/6e61be960/packages/api-derive/src/types.ts#L155)*

___

### `Optional` redeemable

• **redeemable**? : *Balance*

*Defined in [packages/api-derive/src/types.ts:171](https://github.com/polkadot-js/api/blob/6e61be960/packages/api-derive/src/types.ts#L171)*

___

### `Optional` rewardDestination

• **rewardDestination**? : *RewardDestination*

*Inherited from [DerivedStakingStash](_types_.derivedstakingstash.md).[rewardDestination](_types_.derivedstakingstash.md#optional-rewarddestination)*

*Defined in [packages/api-derive/src/types.ts:156](https://github.com/polkadot-js/api/blob/6e61be960/packages/api-derive/src/types.ts#L156)*

___

###  sessionIds

• **sessionIds**: *AccountId[]*

*Inherited from [DerivedStakingQuery](_types_.derivedstakingquery.md).[sessionIds](_types_.derivedstakingquery.md#sessionids)*

*Defined in [packages/api-derive/src/types.ts:166](https://github.com/polkadot-js/api/blob/6e61be960/packages/api-derive/src/types.ts#L166)*

___

### `Optional` stakers

• **stakers**? : *Exposure*

*Inherited from [DerivedStakingStash](_types_.derivedstakingstash.md).[stakers](_types_.derivedstakingstash.md#optional-stakers)*

*Defined in [packages/api-derive/src/types.ts:158](https://github.com/polkadot-js/api/blob/6e61be960/packages/api-derive/src/types.ts#L158)*

___

### `Optional` stakingLedger

• **stakingLedger**? : *StakingLedger*

*Inherited from [DerivedStakingQuery](_types_.derivedstakingquery.md).[stakingLedger](_types_.derivedstakingquery.md#optional-stakingledger)*

*Defined in [packages/api-derive/src/types.ts:167](https://github.com/polkadot-js/api/blob/6e61be960/packages/api-derive/src/types.ts#L167)*

___

### `Optional` stashId

• **stashId**? : *AccountId*

*Inherited from [DerivedStakingStash](_types_.derivedstakingstash.md).[stashId](_types_.derivedstakingstash.md#optional-stashid)*

*Defined in [packages/api-derive/src/types.ts:159](https://github.com/polkadot-js/api/blob/6e61be960/packages/api-derive/src/types.ts#L159)*

___

### `Optional` unlocking

• **unlocking**? : *[DerivedUnlocking](../modules/_types_.md#derivedunlocking)[]*

*Defined in [packages/api-derive/src/types.ts:172](https://github.com/polkadot-js/api/blob/6e61be960/packages/api-derive/src/types.ts#L172)*

___

### `Optional` validatorPrefs

• **validatorPrefs**? : *ValidatorPrefs*

*Inherited from [DerivedStakingStash](_types_.derivedstakingstash.md).[validatorPrefs](_types_.derivedstakingstash.md#optional-validatorprefs)*

*Defined in [packages/api-derive/src/types.ts:160](https://github.com/polkadot-js/api/blob/6e61be960/packages/api-derive/src/types.ts#L160)*