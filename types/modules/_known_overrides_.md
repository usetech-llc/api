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

• **TYPES_CHAIN**: *Record‹string, [OverrideVersionedType](../interfaces/_known_types_.overrideversionedtype.md)[]›*

*Defined in [packages/types/src/known/overrides.ts:61](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/known/overrides.ts#L61)*

___

### `Const` TYPES_META

• **TYPES_META**: *[OverrideVersionedType](../interfaces/_known_types_.overrideversionedtype.md)[]* = [
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

*Defined in [packages/types/src/known/overrides.ts:64](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/known/overrides.ts#L64)*

## Object literals

### `Const` TYPES_MODULES

### ▪ **TYPES_MODULES**: *object*

*Defined in [packages/types/src/known/overrides.ts:8](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/known/overrides.ts#L8)*

###  identity

• **identity**: *object[]* = [
    {
      name: 'Judgement',
      override: 'IdentityJudgement'
    }
  ]

*Defined in [packages/types/src/known/overrides.ts:9](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/known/overrides.ts#L9)*

###  society

• **society**: *object[]* = [
    {
      name: 'Judgement',
      override: 'SocietyJudgement'
    }
  ]

*Defined in [packages/types/src/known/overrides.ts:15](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/known/overrides.ts#L15)*

___

### `Const` TYPES_SPEC

### ▪ **TYPES_SPEC**: *object*

*Defined in [packages/types/src/known/overrides.ts:81](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/known/overrides.ts#L81)*

###  kusama

• **kusama**: *[OverrideVersionedType](../interfaces/_known_types_.overrideversionedtype.md)[]* = TYPES_KUSAMA_VERSIONED

*Defined in [packages/types/src/known/overrides.ts:82](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/known/overrides.ts#L82)*

###  polkadot

• **polkadot**: *[OverrideVersionedType](../interfaces/_known_types_.overrideversionedtype.md)[]* = TYPES_POLKADOT_VERSIONED

*Defined in [packages/types/src/known/overrides.ts:83](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/known/overrides.ts#L83)*
