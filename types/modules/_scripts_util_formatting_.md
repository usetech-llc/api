[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["scripts/util/formatting"](_scripts_util_formatting_.md)

# External module: "scripts/util/formatting"

## Index

### Variables

* [FOOTER](_scripts_util_formatting_.md#const-footer)
* [HEADER](_scripts_util_formatting_.md#const-header)

### Functions

* [createImportCode](_scripts_util_formatting_.md#createimportcode)
* [exportInterface](_scripts_util_formatting_.md#exportinterface)
* [exportType](_scripts_util_formatting_.md#exporttype)
* [formatType](_scripts_util_formatting_.md#formattype)
* [indent](_scripts_util_formatting_.md#indent)

## Variables

### `Const` FOOTER

• **FOOTER**: *"
"* = "
"

*Defined in [packages/types/src/scripts/util/formatting.ts:12](https://github.com/polkadot-js/api/blob/0d2896630/packages/types/src/scripts/util/formatting.ts#L12)*

___

### `Const` HEADER

• **HEADER**: *"// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

"* = "// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

"

*Defined in [packages/types/src/scripts/util/formatting.ts:11](https://github.com/polkadot-js/api/blob/0d2896630/packages/types/src/scripts/util/formatting.ts#L11)*

## Functions

###  createImportCode

▸ **createImportCode**(`header`: string, `checks`: object[]): *string*

*Defined in [packages/types/src/scripts/util/formatting.ts:15](https://github.com/polkadot-js/api/blob/0d2896630/packages/types/src/scripts/util/formatting.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`header` | string |
`checks` | object[] |

**Returns:** *string*

___

###  exportInterface

▸ **exportInterface**(`name`: string, `base`: string, `body`: string): *string*

*Defined in [packages/types/src/scripts/util/formatting.ts:26](https://github.com/polkadot-js/api/blob/0d2896630/packages/types/src/scripts/util/formatting.ts#L26)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`name` | string | "" |
`base` | string | - |
`body` | string | "" |

**Returns:** *string*

___

###  exportType

▸ **exportType**(`name`: string, `base`: string): *string*

*Defined in [packages/types/src/scripts/util/formatting.ts:33](https://github.com/polkadot-js/api/blob/0d2896630/packages/types/src/scripts/util/formatting.ts#L33)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`name` | string | "" |
`base` | string | - |

**Returns:** *string*

___

###  formatType

▸ **formatType**(`definitions`: object, `type`: string | [TypeDef](../interfaces/_codec_create_types_.typedef.md), `imports`: [TypeImports](../interfaces/_scripts_util_imports_.typeimports.md)): *string*

*Defined in [packages/types/src/scripts/util/formatting.ts:82](https://github.com/polkadot-js/api/blob/0d2896630/packages/types/src/scripts/util/formatting.ts#L82)*

Correctly format a given type

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | object |
`type` | string &#124; [TypeDef](../interfaces/_codec_create_types_.typedef.md) |
`imports` | [TypeImports](../interfaces/_scripts_util_imports_.typeimports.md) |

**Returns:** *string*

___

###  indent

▸ **indent**(`n`: number, `char`: string): *function*

*Defined in [packages/types/src/scripts/util/formatting.ts:146](https://github.com/polkadot-js/api/blob/0d2896630/packages/types/src/scripts/util/formatting.ts#L146)*

Indent a string with `n` spaces before.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`n` | number | - |
`char` | string | " " |

**Returns:** *function*

▸ (`str`: string): *string*

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |
