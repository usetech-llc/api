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

*Defined in [packages/api-derive/src/types.ts:198](https://github.com/polkadot-js/api/blob/da8ff51615/packages/api-derive/src/types.ts#L198)*

___

### `Optional` controllerId

• **controllerId**? : *AccountId*

*Inherited from [DerivedStakingStash](_types_.derivedstakingstash.md).[controllerId](_types_.derivedstakingstash.md#optional-controllerid)*

*Defined in [packages/api-derive/src/types.ts:188](https://github.com/polkadot-js/api/blob/da8ff51615/packages/api-derive/src/types.ts#L188)*

___

### `Optional` nextKeys

• **nextKeys**? : *Keys*

*Inherited from [DerivedStakingStash](_types_.derivedstakingstash.md).[nextKeys](_types_.derivedstakingstash.md#optional-nextkeys)*

*Defined in [packages/api-derive/src/types.ts:191](https://github.com/polkadot-js/api/blob/da8ff51615/packages/api-derive/src/types.ts#L191)*

___

###  nextSessionIds

• **nextSessionIds**: *AccountId[]*

*Inherited from [DerivedStakingQuery](_types_.derivedstakingquery.md).[nextSessionIds](_types_.derivedstakingquery.md#nextsessionids)*

*Defined in [packages/api-derive/src/types.ts:199](https://github.com/polkadot-js/api/blob/da8ff51615/packages/api-derive/src/types.ts#L199)*

___

### `Optional` nominators

• **nominators**? : *AccountId[]*

*Inherited from [DerivedStakingStash](_types_.derivedstakingstash.md).[nominators](_types_.derivedstakingstash.md#optional-nominators)*

*Defined in [packages/api-derive/src/types.ts:189](https://github.com/polkadot-js/api/blob/da8ff51615/packages/api-derive/src/types.ts#L189)*

___

### `Optional` redeemable

• **redeemable**? : *Balance*

*Defined in [packages/api-derive/src/types.ts:205](https://github.com/polkadot-js/api/blob/da8ff51615/packages/api-derive/src/types.ts#L205)*

___

### `Optional` rewardDestination

• **rewardDestination**? : *RewardDestination*

*Inherited from [DerivedStakingStash](_types_.derivedstakingstash.md).[rewardDestination](_types_.derivedstakingstash.md#optional-rewarddestination)*

*Defined in [packages/api-derive/src/types.ts:190](https://github.com/polkadot-js/api/blob/da8ff51615/packages/api-derive/src/types.ts#L190)*

___

###  sessionIds

• **sessionIds**: *AccountId[]*

*Inherited from [DerivedStakingQuery](_types_.derivedstakingquery.md).[sessionIds](_types_.derivedstakingquery.md#sessionids)*

*Defined in [packages/api-derive/src/types.ts:200](https://github.com/polkadot-js/api/blob/da8ff51615/packages/api-derive/src/types.ts#L200)*

___

### `Optional` stakers

• **stakers**? : *Exposure*

*Inherited from [DerivedStakingStash](_types_.derivedstakingstash.md).[stakers](_types_.derivedstakingstash.md#optional-stakers)*

*Defined in [packages/api-derive/src/types.ts:192](https://github.com/polkadot-js/api/blob/da8ff51615/packages/api-derive/src/types.ts#L192)*

___

### `Optional` stakingLedger

• **stakingLedger**? : *StakingLedger*

*Inherited from [DerivedStakingQuery](_types_.derivedstakingquery.md).[stakingLedger](_types_.derivedstakingquery.md#optional-stakingledger)*

*Defined in [packages/api-derive/src/types.ts:201](https://github.com/polkadot-js/api/blob/da8ff51615/packages/api-derive/src/types.ts#L201)*

___

### `Optional` stashId

• **stashId**? : *AccountId*

*Inherited from [DerivedStakingStash](_types_.derivedstakingstash.md).[stashId](_types_.derivedstakingstash.md#optional-stashid)*

*Defined in [packages/api-derive/src/types.ts:193](https://github.com/polkadot-js/api/blob/da8ff51615/packages/api-derive/src/types.ts#L193)*

___

### `Optional` unlocking

• **unlocking**? : *[DerivedUnlocking](../modules/_types_.md#derivedunlocking)[]*

*Defined in [packages/api-derive/src/types.ts:206](https://github.com/polkadot-js/api/blob/da8ff51615/packages/api-derive/src/types.ts#L206)*

___

### `Optional` validatorPrefs

• **validatorPrefs**? : *ValidatorPrefs*

*Inherited from [DerivedStakingStash](_types_.derivedstakingstash.md).[validatorPrefs](_types_.derivedstakingstash.md#optional-validatorprefs)*

*Defined in [packages/api-derive/src/types.ts:194](https://github.com/polkadot-js/api/blob/da8ff51615/packages/api-derive/src/types.ts#L194)*
