[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["MetaRegistry"](../modules/_metaregistry_.md) › [MetaRegistry](_metaregistry_.metaregistry.md)

# Class: MetaRegistry

## Hierarchy

* MetadataRegistryLookup

  ↳ **MetaRegistry**

  ↳ [ContractRegistry](_contractregistry_.contractregistry.md)

## Index

### Constructors

* [constructor](_metaregistry_.metaregistry.md#constructor)

### Properties

* [registry](_metaregistry_.metaregistry.md#registry)
* [typeDefs](_metaregistry_.metaregistry.md#typedefs)

### Methods

* [hasTypeDefAt](_metaregistry_.metaregistry.md#hastypedefat)
* [setTypeDefAtIndex](_metaregistry_.metaregistry.md#settypedefatindex)
* [stringsAt](_metaregistry_.metaregistry.md#stringsat)
* [typeAt](_metaregistry_.metaregistry.md#typeat)
* [typeDefAt](_metaregistry_.metaregistry.md#typedefat)
* [typeDefForOption](_metaregistry_.metaregistry.md#typedefforoption)
* [typeDefForResult](_metaregistry_.metaregistry.md#typedefforresult)
* [typeDefForStruct](_metaregistry_.metaregistry.md#typedefforstruct)
* [typeDefFromMetaType](_metaregistry_.metaregistry.md#typedeffrommetatype)
* [typeDefFromMetaTypeAt](_metaregistry_.metaregistry.md#typedeffrommetatypeat)
* [typesAt](_metaregistry_.metaregistry.md#typesat)

## Constructors

###  constructor

\+ **new MetaRegistry**(`registry`: Registry, `json`: MetaRegistryJson): *[MetaRegistry](_metaregistry_.metaregistry.md)*

*Overrides void*

*Defined in [MetaRegistry.ts:107](https://github.com/polkadot-js/api/blob/fefcc2e0dc/packages/api-contract/src/MetaRegistry.ts#L107)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | Registry |
`json` | MetaRegistryJson |

**Returns:** *[MetaRegistry](_metaregistry_.metaregistry.md)*

## Properties

###  registry

• **registry**: *Registry*

*Inherited from [MetaRegistry](_metaregistry_.metaregistry.md).[registry](_metaregistry_.metaregistry.md#registry)*

*Defined in [MetaRegistry.ts:37](https://github.com/polkadot-js/api/blob/fefcc2e0dc/packages/api-contract/src/MetaRegistry.ts#L37)*

___

###  typeDefs

• **typeDefs**: *TypeDef[]* = []

*Inherited from [MetaRegistry](_metaregistry_.metaregistry.md).[typeDefs](_metaregistry_.metaregistry.md#typedefs)*

*Defined in [MetaRegistry.ts:43](https://github.com/polkadot-js/api/blob/fefcc2e0dc/packages/api-contract/src/MetaRegistry.ts#L43)*

## Methods

###  hasTypeDefAt

▸ **hasTypeDefAt**(`index`: TypeIndex): *boolean*

*Inherited from [MetaRegistry](_metaregistry_.metaregistry.md).[hasTypeDefAt](_metaregistry_.metaregistry.md#hastypedefat)*

*Defined in [MetaRegistry.ts:95](https://github.com/polkadot-js/api/blob/fefcc2e0dc/packages/api-contract/src/MetaRegistry.ts#L95)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | TypeIndex |

**Returns:** *boolean*

___

###  setTypeDefAtIndex

▸ **setTypeDefAtIndex**(`typeIndex`: TypeIndex): *void*

*Defined in [MetaRegistry.ts:115](https://github.com/polkadot-js/api/blob/fefcc2e0dc/packages/api-contract/src/MetaRegistry.ts#L115)*

**Parameters:**

Name | Type |
------ | ------ |
`typeIndex` | TypeIndex |

**Returns:** *void*

___

###  stringsAt

▸ **stringsAt**(`indices`: StringIndex[]): *string[]*

*Inherited from [MetaRegistry](_metaregistry_.metaregistry.md).[stringsAt](_metaregistry_.metaregistry.md#stringsat)*

*Defined in [MetaRegistry.ts:83](https://github.com/polkadot-js/api/blob/fefcc2e0dc/packages/api-contract/src/MetaRegistry.ts#L83)*

**Parameters:**

Name | Type |
------ | ------ |
`indices` | StringIndex[] |

**Returns:** *string[]*

___

###  typeAt

▸ **typeAt**(`index`: TypeIndex): *MetaType*

*Inherited from [MetaRegistry](_metaregistry_.metaregistry.md).[typeAt](_metaregistry_.metaregistry.md#typeat)*

*Defined in [MetaRegistry.ts:87](https://github.com/polkadot-js/api/blob/fefcc2e0dc/packages/api-contract/src/MetaRegistry.ts#L87)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | TypeIndex |

**Returns:** *MetaType*

___

###  typeDefAt

▸ **typeDefAt**(`index`: TypeIndex, `extra`: Pick‹TypeDef, never›): *TypeDef*

*Inherited from [MetaRegistry](_metaregistry_.metaregistry.md).[typeDefAt](_metaregistry_.metaregistry.md#typedefat)*

*Defined in [MetaRegistry.ts:99](https://github.com/polkadot-js/api/blob/fefcc2e0dc/packages/api-contract/src/MetaRegistry.ts#L99)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`index` | TypeIndex | - |
`extra` | Pick‹TypeDef, never› | {} |

**Returns:** *TypeDef*

___

###  typeDefForOption

▸ **typeDefForOption**(`id`: MetaTypeIdCustom, `typeIndex?`: TypeIndex): *Pick‹TypeDef, any›*

*Defined in [MetaRegistry.ts:300](https://github.com/polkadot-js/api/blob/fefcc2e0dc/packages/api-contract/src/MetaRegistry.ts#L300)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | MetaTypeIdCustom |
`typeIndex?` | TypeIndex |

**Returns:** *Pick‹TypeDef, any›*

___

###  typeDefForResult

▸ **typeDefForResult**(`id`: MetaTypeIdCustom, `typeIndex?`: TypeIndex): *Pick‹TypeDef, any›*

*Defined in [MetaRegistry.ts:309](https://github.com/polkadot-js/api/blob/fefcc2e0dc/packages/api-contract/src/MetaRegistry.ts#L309)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | MetaTypeIdCustom |
`typeIndex?` | TypeIndex |

**Returns:** *Pick‹TypeDef, any›*

___

###  typeDefForStruct

▸ **typeDefForStruct**(`def`: MetaTypeDefStruct | MetaTypeDefEnumVariantStruct): *Pick‹TypeDef, any›*

*Defined in [MetaRegistry.ts:318](https://github.com/polkadot-js/api/blob/fefcc2e0dc/packages/api-contract/src/MetaRegistry.ts#L318)*

**Parameters:**

Name | Type |
------ | ------ |
`def` | MetaTypeDefStruct &#124; MetaTypeDefEnumVariantStruct |

**Returns:** *Pick‹TypeDef, any›*

___

###  typeDefFromMetaType

▸ **typeDefFromMetaType**(`metaType`: MetaType, `typeIndex?`: TypeIndex): *TypeDef*

*Defined in [MetaRegistry.ts:175](https://github.com/polkadot-js/api/blob/fefcc2e0dc/packages/api-contract/src/MetaRegistry.ts#L175)*

**Parameters:**

Name | Type |
------ | ------ |
`metaType` | MetaType |
`typeIndex?` | TypeIndex |

**Returns:** *TypeDef*

___

###  typeDefFromMetaTypeAt

▸ **typeDefFromMetaTypeAt**(`typeIndex`: TypeIndex): *TypeDef*

*Defined in [MetaRegistry.ts:184](https://github.com/polkadot-js/api/blob/fefcc2e0dc/packages/api-contract/src/MetaRegistry.ts#L184)*

**Parameters:**

Name | Type |
------ | ------ |
`typeIndex` | TypeIndex |

**Returns:** *TypeDef*

___

###  typesAt

▸ **typesAt**(`indices`: TypeIndex[]): *MetaType[]*

*Inherited from [MetaRegistry](_metaregistry_.metaregistry.md).[typesAt](_metaregistry_.metaregistry.md#typesat)*

*Defined in [MetaRegistry.ts:91](https://github.com/polkadot-js/api/blob/fefcc2e0dc/packages/api-contract/src/MetaRegistry.ts#L91)*

**Parameters:**

Name | Type |
------ | ------ |
`indices` | TypeIndex[] |

**Returns:** *MetaType[]*
