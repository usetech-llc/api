[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["codec/utils/encodeTypes"](_codec_utils_encodetypes_.md)

# External module: "codec/utils/encodeTypes"

## Index

### Variables

* [SPECIAL_TYPES](_codec_utils_encodetypes_.md#const-special_types)

### Functions

* [displayType](_codec_utils_encodetypes_.md#displaytype)
* [encodeType](_codec_utils_encodetypes_.md#encodetype)
* [paramsNotation](_codec_utils_encodetypes_.md#paramsnotation)
* [withTypeString](_codec_utils_encodetypes_.md#withtypestring)

## Variables

### `Const` SPECIAL_TYPES

• **SPECIAL_TYPES**: *string[]* = ['AccountId', 'AccountIndex', 'Address', 'Balance']

*Defined in [packages/types/src/codec/utils/encodeTypes.ts:9](https://github.com/polkadot-js/api/blob/d8141198e1/packages/types/src/codec/utils/encodeTypes.ts#L9)*

## Functions

###  displayType

▸ **displayType**(`typeDef`: Pick‹TypeDef, any›): *string*

*Defined in [packages/types/src/codec/utils/encodeTypes.ts:142](https://github.com/polkadot-js/api/blob/d8141198e1/packages/types/src/codec/utils/encodeTypes.ts#L142)*

**Parameters:**

Name | Type |
------ | ------ |
`typeDef` | Pick‹TypeDef, any› |

**Returns:** *string*

___

###  encodeType

▸ **encodeType**(`typeDef`: Pick‹TypeDef, any›): *string*

*Defined in [packages/types/src/codec/utils/encodeTypes.ts:134](https://github.com/polkadot-js/api/blob/d8141198e1/packages/types/src/codec/utils/encodeTypes.ts#L134)*

**Parameters:**

Name | Type |
------ | ------ |
`typeDef` | Pick‹TypeDef, any› |

**Returns:** *string*

___

###  paramsNotation

▸ **paramsNotation**(`outer`: string, `inner?`: string | any[], `transform`: function): *string*

*Defined in [packages/types/src/codec/utils/encodeTypes.ts:13](https://github.com/polkadot-js/api/blob/d8141198e1/packages/types/src/codec/utils/encodeTypes.ts#L13)*

**Parameters:**

▪ **outer**: *string*

▪`Optional`  **inner**: *string | any[]*

▪`Default value`  **transform**: *function*= identity

▸ (`_`: any): *string*

**Parameters:**

Name | Type |
------ | ------ |
`_` | any |

**Returns:** *string*

___

###  withTypeString

▸ **withTypeString**(`typeDef`: Pick‹TypeDef, any›): *Pick‹TypeDef, any›*

*Defined in [packages/types/src/codec/utils/encodeTypes.ts:157](https://github.com/polkadot-js/api/blob/d8141198e1/packages/types/src/codec/utils/encodeTypes.ts#L157)*

**Parameters:**

Name | Type |
------ | ------ |
`typeDef` | Pick‹TypeDef, any› |

**Returns:** *Pick‹TypeDef, any›*
