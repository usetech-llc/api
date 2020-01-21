[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["scripts/generateTypes/tsDef"](_scripts_generatetypes_tsdef_.md)

# External module: "scripts/generateTypes/tsDef"

## Index

### Functions

* [createGetter](_scripts_generatetypes_tsdef_.md#creategetter)
* [generateTsDef](_scripts_generatetypes_tsdef_.md#generatetsdef)
* [generateTsDefDefault](_scripts_generatetypes_tsdef_.md#generatetsdefdefault)

## Functions

###  createGetter

▸ **createGetter**(`definitions`: object, `name`: string, `type`: string, `imports`: [TypeImports](../interfaces/_scripts_util_imports_.typeimports.md), `doc?`: undefined | string): *string*

*Defined in [packages/types/src/scripts/generateTypes/tsDef.ts:20](https://github.com/polkadot-js/api/blob/20ed3bb5fe/packages/types/src/scripts/generateTypes/tsDef.ts#L20)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`definitions` | object | - |
`name` | string | "" |
`type` | string | - |
`imports` | [TypeImports](../interfaces/_scripts_util_imports_.typeimports.md) | - |
`doc?` | undefined &#124; string | - |

**Returns:** *string*

___

###  generateTsDef

▸ **generateTsDef**(`importDefinitions`: object, `outputDir`: string, `generatingPackage`: string): *void*

*Defined in [packages/types/src/scripts/generateTypes/tsDef.ts:198](https://github.com/polkadot-js/api/blob/20ed3bb5fe/packages/types/src/scripts/generateTypes/tsDef.ts#L198)*

**Parameters:**

Name | Type |
------ | ------ |
`importDefinitions` | object |
`outputDir` | string |
`generatingPackage` | string |

**Returns:** *void*

___

###  generateTsDefDefault

▸ **generateTsDefDefault**(): *void*

*Defined in [packages/types/src/scripts/generateTypes/tsDef.ts:212](https://github.com/polkadot-js/api/blob/20ed3bb5fe/packages/types/src/scripts/generateTypes/tsDef.ts#L212)*

**Returns:** *void*
