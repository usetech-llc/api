[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["known/overrides"](_known_overrides_.md)

# External module: "known/overrides"

## Index

### Variables

* [TYPES_CHAIN](_known_overrides_.md#const-types_chain)
* [TYPES_META](_known_overrides_.md#const-types_meta)

### Object literals

* [TYPES_MODULES](_known_overrides_.md#const-types_modules)
* [TYPES_SPEC](_known_overrides_.md#const-types_spec)

## Variables

### `Const` TYPES_CHAIN

• **TYPES_CHAIN**: *Record‹string, OverrideVersionedType[]›*

*Defined in [packages/types/src/known/overrides.ts:78](https://github.com/polkadot-js/api/blob/d8141198e1/packages/types/src/known/overrides.ts#L78)*

___

### `Const` TYPES_META

• **TYPES_META**: *OverrideVersionedType[]* = [
  {
    // NOTE this is for support of old, e.g. Alex, old metadata and BlockNumber/Index
    // This is detected based on metadata version, since this is what we have up-front
    //   v3 = Alex
    //   v4 = v1.0 branch
    minmax: [0, 4],
    types: {
      BlockNumber: 'u64',
      Index: 'u64',
      EventRecord: 'EventRecordTo76',
      ValidatorPrefs: 'ValidatorPrefsTo145'
    }
  }
]

*Defined in [packages/types/src/known/overrides.ts:81](https://github.com/polkadot-js/api/blob/d8141198e1/packages/types/src/known/overrides.ts#L81)*

## Object literals

### `Const` TYPES_MODULES

### ▪ **TYPES_MODULES**: *object*

*Defined in [packages/types/src/known/overrides.ts:8](https://github.com/polkadot-js/api/blob/d8141198e1/packages/types/src/known/overrides.ts#L8)*

▪ **contracts**: *object*

*Defined in [packages/types/src/known/overrides.ts:9](https://github.com/polkadot-js/api/blob/d8141198e1/packages/types/src/known/overrides.ts#L9)*

* **StorageKey**: *string* = "ContractStorageKey"

▪ **identity**: *object*

*Defined in [packages/types/src/known/overrides.ts:12](https://github.com/polkadot-js/api/blob/d8141198e1/packages/types/src/known/overrides.ts#L12)*

* **Judgement**: *string* = "IdentityJudgement"

▪ **parachains**: *object*

*Defined in [packages/types/src/known/overrides.ts:15](https://github.com/polkadot-js/api/blob/d8141198e1/packages/types/src/known/overrides.ts#L15)*

* **Id**: *string* = "ParaId"

▪ **society**: *object*

*Defined in [packages/types/src/known/overrides.ts:18](https://github.com/polkadot-js/api/blob/d8141198e1/packages/types/src/known/overrides.ts#L18)*

* **Judgement**: *string* = "SocietyJudgement"

* **Vote**: *string* = "SocietyVote"

▪ **treasury**: *object*

*Defined in [packages/types/src/known/overrides.ts:22](https://github.com/polkadot-js/api/blob/d8141198e1/packages/types/src/known/overrides.ts#L22)*

* **Proposal**: *string* = "TreasuryProposal"

___

### `Const` TYPES_SPEC

### ▪ **TYPES_SPEC**: *object*

*Defined in [packages/types/src/known/overrides.ts:98](https://github.com/polkadot-js/api/blob/d8141198e1/packages/types/src/known/overrides.ts#L98)*

###  kusama

• **kusama**: *OverrideVersionedType[]* = TYPES_KUSAMA_VERSIONED

*Defined in [packages/types/src/known/overrides.ts:99](https://github.com/polkadot-js/api/blob/d8141198e1/packages/types/src/known/overrides.ts#L99)*

###  polkadot

• **polkadot**: *OverrideVersionedType[]* = TYPES_POLKADOT_VERSIONED

*Defined in [packages/types/src/known/overrides.ts:100](https://github.com/polkadot-js/api/blob/d8141198e1/packages/types/src/known/overrides.ts#L100)*
