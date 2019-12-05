[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types"](../modules/_types_.md) › [DerivedStaking](_types_.derivedstaking.md)

# Interface: DerivedStaking

## Hierarchy

* [DerivedStakingOnlineStatus](_types_.derivedstakingonlinestatus.md)

* [DerivedStakingStash](_types_.derivedstakingstash.md)

  ↳ **DerivedStaking**

## Index

### Properties

* [accountId](_types_.derivedstaking.md#accountid)
* [controllerId](_types_.derivedstaking.md#optional-controllerid)
* [nextKeys](_types_.derivedstaking.md#optional-nextkeys)
* [nextSessionIds](_types_.derivedstaking.md#nextsessionids)
* [nominators](_types_.derivedstaking.md#optional-nominators)
* [offline](_types_.derivedstaking.md#optional-offline)
* [online](_types_.derivedstaking.md#optional-online)
* [redeemable](_types_.derivedstaking.md#optional-redeemable)
* [rewardDestination](_types_.derivedstaking.md#optional-rewarddestination)
* [sessionIds](_types_.derivedstaking.md#sessionids)
* [stakers](_types_.derivedstaking.md#optional-stakers)
* [stakingLedger](_types_.derivedstaking.md#optional-stakingledger)
* [stashId](_types_.derivedstaking.md#optional-stashid)
* [unlocking](_types_.derivedstaking.md#optional-unlocking)
* [validatorPrefs](_types_.derivedstaking.md#optional-validatorprefs)

## Properties

###  accountId

• **accountId**: *AccountId*

*Defined in [packages/api-derive/src/types.ts:165](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/api-derive/src/types.ts#L165)*

___

### `Optional` controllerId

• **controllerId**? : *AccountId*

*Inherited from [DerivedStakingStash](_types_.derivedstakingstash.md).[controllerId](_types_.derivedstakingstash.md#optional-controllerid)*

*Defined in [packages/api-derive/src/types.ts:155](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/api-derive/src/types.ts#L155)*

___

### `Optional` nextKeys

• **nextKeys**? : *Keys*

*Inherited from [DerivedStakingStash](_types_.derivedstakingstash.md).[nextKeys](_types_.derivedstakingstash.md#optional-nextkeys)*

*Defined in [packages/api-derive/src/types.ts:158](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/api-derive/src/types.ts#L158)*

___

###  nextSessionIds

• **nextSessionIds**: *AccountId[]*

*Defined in [packages/api-derive/src/types.ts:166](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/api-derive/src/types.ts#L166)*

___

### `Optional` nominators

• **nominators**? : *AccountId[]*

*Inherited from [DerivedStakingStash](_types_.derivedstakingstash.md).[nominators](_types_.derivedstakingstash.md#optional-nominators)*

*Defined in [packages/api-derive/src/types.ts:156](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/api-derive/src/types.ts#L156)*

___

### `Optional` offline

• **offline**? : *object[]*

*Inherited from [DerivedStakingOnlineStatus](_types_.derivedstakingonlinestatus.md).[offline](_types_.derivedstakingonlinestatus.md#optional-offline)*

*Defined in [packages/api-derive/src/types.ts:143](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/api-derive/src/types.ts#L143)*

___

### `Optional` online

• **online**? : *undefined | object*

*Inherited from [DerivedStakingOnlineStatus](_types_.derivedstakingonlinestatus.md).[online](_types_.derivedstakingonlinestatus.md#optional-online)*

*Defined in [packages/api-derive/src/types.ts:139](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/api-derive/src/types.ts#L139)*

___

### `Optional` redeemable

• **redeemable**? : *Balance*

*Defined in [packages/api-derive/src/types.ts:167](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/api-derive/src/types.ts#L167)*

___

### `Optional` rewardDestination

• **rewardDestination**? : *RewardDestination*

*Inherited from [DerivedStakingStash](_types_.derivedstakingstash.md).[rewardDestination](_types_.derivedstakingstash.md#optional-rewarddestination)*

*Defined in [packages/api-derive/src/types.ts:157](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/api-derive/src/types.ts#L157)*

___

###  sessionIds

• **sessionIds**: *AccountId[]*

*Defined in [packages/api-derive/src/types.ts:168](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/api-derive/src/types.ts#L168)*

___

### `Optional` stakers

• **stakers**? : *Exposure*

*Inherited from [DerivedStakingStash](_types_.derivedstakingstash.md).[stakers](_types_.derivedstakingstash.md#optional-stakers)*

*Defined in [packages/api-derive/src/types.ts:159](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/api-derive/src/types.ts#L159)*

___

### `Optional` stakingLedger

• **stakingLedger**? : *StakingLedger*

*Defined in [packages/api-derive/src/types.ts:169](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/api-derive/src/types.ts#L169)*

___

### `Optional` stashId

• **stashId**? : *AccountId*

*Inherited from [DerivedStakingStash](_types_.derivedstakingstash.md).[stashId](_types_.derivedstakingstash.md#optional-stashid)*

*Defined in [packages/api-derive/src/types.ts:160](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/api-derive/src/types.ts#L160)*

___

### `Optional` unlocking

• **unlocking**? : *[DerivedUnlocking](../modules/_types_.md#derivedunlocking)[]*

*Defined in [packages/api-derive/src/types.ts:170](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/api-derive/src/types.ts#L170)*

___

### `Optional` validatorPrefs

• **validatorPrefs**? : *ValidatorPrefs*

*Inherited from [DerivedStakingStash](_types_.derivedstakingstash.md).[validatorPrefs](_types_.derivedstakingstash.md#optional-validatorprefs)*

*Defined in [packages/api-derive/src/types.ts:161](https://github.com/polkadot-js/api/blob/01a4d6b4a/packages/api-derive/src/types.ts#L161)*
