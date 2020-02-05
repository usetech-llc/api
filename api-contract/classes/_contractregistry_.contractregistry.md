[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["ContractRegistry"](../modules/_contractregistry_.md) › [ContractRegistry](_contractregistry_.contractregistry.md)

# Class: ContractRegistry

## Hierarchy

  ↳ [MetaRegistry](_metaregistry_.metaregistry.md)

  ↳ **ContractRegistry**

  ↳ [ContractAbi](_abi_.contractabi.md)

## Index

### Constructors

* [constructor](_contractregistry_.contractregistry.md#constructor)

### Properties

* [registry](_contractregistry_.contractregistry.md#registry)
* [typeDefs](_contractregistry_.contractregistry.md#typedefs)

### Methods

* [convertAbi](_contractregistry_.contractregistry.md#convertabi)
* [convertArgs](_contractregistry_.contractregistry.md#convertargs)
* [convertConstructors](_contractregistry_.contractregistry.md#convertconstructors)
* [convertContract](_contractregistry_.contractregistry.md#convertcontract)
* [convertEvent](_contractregistry_.contractregistry.md#convertevent)
* [convertMessage](_contractregistry_.contractregistry.md#convertmessage)
* [convertStorage](_contractregistry_.contractregistry.md#convertstorage)
* [convertStorageLayout](_contractregistry_.contractregistry.md#convertstoragelayout)
* [convertStorageRange](_contractregistry_.contractregistry.md#convertstoragerange)
* [convertStorageStruct](_contractregistry_.contractregistry.md#convertstoragestruct)
* [convertType](_contractregistry_.contractregistry.md#converttype)
* [createMessage](_contractregistry_.contractregistry.md#createmessage)
* [hasTypeDefAt](_contractregistry_.contractregistry.md#hastypedefat)
* [setTypeDefAtIndex](_contractregistry_.contractregistry.md#settypedefatindex)
* [stringsAt](_contractregistry_.contractregistry.md#stringsat)
* [typeAt](_contractregistry_.contractregistry.md#typeat)
* [typeDefAt](_contractregistry_.contractregistry.md#typedefat)
* [typeDefForOption](_contractregistry_.contractregistry.md#typedefforoption)
* [typeDefForResult](_contractregistry_.contractregistry.md#typedefforresult)
* [typeDefForStruct](_contractregistry_.contractregistry.md#typedefforstruct)
* [typeDefFromMetaType](_contractregistry_.contractregistry.md#typedeffrommetatype)
* [typeDefFromMetaTypeAt](_contractregistry_.contractregistry.md#typedeffrommetatypeat)
* [typesAt](_contractregistry_.contractregistry.md#typesat)
* [validateAbi](_contractregistry_.contractregistry.md#validateabi)
* [validateArgs](_contractregistry_.contractregistry.md#validateargs)
* [validateConstructors](_contractregistry_.contractregistry.md#validateconstructors)
* [validateMessages](_contractregistry_.contractregistry.md#validatemessages)

## Constructors

###  constructor

\+ **new ContractRegistry**(`registry`: Registry, `json`: MetaRegistryJson): *[ContractRegistry](_contractregistry_.contractregistry.md)*

*Inherited from [MetaRegistry](_metaregistry_.metaregistry.md).[constructor](_metaregistry_.metaregistry.md#constructor)*

*Overrides void*

*Defined in [MetaRegistry.ts:107](https://github.com/polkadot-js/api/blob/19f87aac4d/packages/api-contract/src/MetaRegistry.ts#L107)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | Registry |
`json` | MetaRegistryJson |

**Returns:** *[ContractRegistry](_contractregistry_.contractregistry.md)*

## Properties

###  registry

• **registry**: *Registry*

*Inherited from [MetaRegistry](_metaregistry_.metaregistry.md).[registry](_metaregistry_.metaregistry.md#registry)*

*Defined in [MetaRegistry.ts:37](https://github.com/polkadot-js/api/blob/19f87aac4d/packages/api-contract/src/MetaRegistry.ts#L37)*

___

###  typeDefs

• **typeDefs**: *TypeDef[]* = []

*Inherited from [MetaRegistry](_metaregistry_.metaregistry.md).[typeDefs](_metaregistry_.metaregistry.md#typedefs)*

*Defined in [MetaRegistry.ts:43](https://github.com/polkadot-js/api/blob/19f87aac4d/packages/api-contract/src/MetaRegistry.ts#L43)*

## Methods

###  convertAbi

▸ **convertAbi**(`__namedParameters`: object): *ContractABI*

*Defined in [ContractRegistry.ts:142](https://github.com/polkadot-js/api/blob/19f87aac4d/packages/api-contract/src/ContractRegistry.ts#L142)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`contract` | ContractABIContractPre |
`storage` | ContractABIStorageStructPre |

**Returns:** *ContractABI*

___

###  convertArgs

▸ **convertArgs**(`args`: ContractABIArgBasePre[]): *any[]*

*Defined in [ContractRegistry.ts:149](https://github.com/polkadot-js/api/blob/19f87aac4d/packages/api-contract/src/ContractRegistry.ts#L149)*

**Parameters:**

Name | Type |
------ | ------ |
`args` | ContractABIArgBasePre[] |

**Returns:** *any[]*

___

###  convertConstructors

▸ **convertConstructors**(`constructors`: ContractABIMessagePre[]): *ContractABIMessage[]*

*Defined in [ContractRegistry.ts:170](https://github.com/polkadot-js/api/blob/19f87aac4d/packages/api-contract/src/ContractRegistry.ts#L170)*

**Parameters:**

Name | Type |
------ | ------ |
`constructors` | ContractABIMessagePre[] |

**Returns:** *ContractABIMessage[]*

___

###  convertContract

▸ **convertContract**(`__namedParameters`: object): *ContractABIContract*

*Defined in [ContractRegistry.ts:158](https://github.com/polkadot-js/api/blob/19f87aac4d/packages/api-contract/src/ContractRegistry.ts#L158)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`constructors` | ContractABIMessagePre[] |
`contract` | contract |
`events` | undefined &#124; ContractABIEventPre[] |
`messages` | ContractABIMessagePre[] |
`name` | number |

**Returns:** *ContractABIContract*

___

###  convertEvent

▸ **convertEvent**(`__namedParameters`: object): *ContractABIEvent*

*Defined in [ContractRegistry.ts:187](https://github.com/polkadot-js/api/blob/19f87aac4d/packages/api-contract/src/ContractRegistry.ts#L187)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`args` | ContractABIEventArgPre[] |

**Returns:** *ContractABIEvent*

___

###  convertMessage

▸ **convertMessage**(`__namedParameters`: object): *ContractABIMessage*

*Defined in [ContractRegistry.ts:178](https://github.com/polkadot-js/api/blob/19f87aac4d/packages/api-contract/src/ContractRegistry.ts#L178)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`args` | ContractABIArgBasePre[] |
`message` | message |
`name` | number |
`returnType` | null &#124; ContractABITypePre |

**Returns:** *ContractABIMessage*

___

###  convertStorage

▸ **convertStorage**(`storage`: ContractABIStoragePre): *ContractABIStorage*

*Defined in [ContractRegistry.ts:193](https://github.com/polkadot-js/api/blob/19f87aac4d/packages/api-contract/src/ContractRegistry.ts#L193)*

**Parameters:**

Name | Type |
------ | ------ |
`storage` | ContractABIStoragePre |

**Returns:** *ContractABIStorage*

___

###  convertStorageLayout

▸ **convertStorageLayout**(`storageLayout`: ContractABIStorageLayoutPre): *ContractABIStorageLayout*

*Defined in [ContractRegistry.ts:197](https://github.com/polkadot-js/api/blob/19f87aac4d/packages/api-contract/src/ContractRegistry.ts#L197)*

**Parameters:**

Name | Type |
------ | ------ |
`storageLayout` | ContractABIStorageLayoutPre |

**Returns:** *ContractABIStorageLayout*

___

###  convertStorageRange

▸ **convertStorageRange**(`__namedParameters`: object): *ContractABIRange*

*Defined in [ContractRegistry.ts:215](https://github.com/polkadot-js/api/blob/19f87aac4d/packages/api-contract/src/ContractRegistry.ts#L215)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`range` | range |
`type` | number |

**Returns:** *ContractABIRange*

___

###  convertStorageStruct

▸ **convertStorageStruct**(`__namedParameters`: object): *ContractABIStorageStruct*

*Defined in [ContractRegistry.ts:205](https://github.com/polkadot-js/api/blob/19f87aac4d/packages/api-contract/src/ContractRegistry.ts#L205)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`structFields` | ContractABIStorageStructFieldPre[] |
`structType` | number |

**Returns:** *ContractABIStorageStruct*

___

###  convertType

▸ **convertType**(`__namedParameters`: object): *TypeDef*

*Defined in [ContractRegistry.ts:153](https://github.com/polkadot-js/api/blob/19f87aac4d/packages/api-contract/src/ContractRegistry.ts#L153)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`displayNameIndices` | number[] |
`ty` | number |

**Returns:** *TypeDef*

___

###  createMessage

▸ **createMessage**(`name`: string, `message`: Partial‹ContractABIMessage› & ContractABIMessageBase): *ContractABIFn*

*Defined in [ContractRegistry.ts:109](https://github.com/polkadot-js/api/blob/19f87aac4d/packages/api-contract/src/ContractRegistry.ts#L109)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`message` | Partial‹ContractABIMessage› & ContractABIMessageBase |

**Returns:** *ContractABIFn*

___

###  hasTypeDefAt

▸ **hasTypeDefAt**(`index`: TypeIndex): *boolean*

*Inherited from [MetaRegistry](_metaregistry_.metaregistry.md).[hasTypeDefAt](_metaregistry_.metaregistry.md#hastypedefat)*

*Defined in [MetaRegistry.ts:95](https://github.com/polkadot-js/api/blob/19f87aac4d/packages/api-contract/src/MetaRegistry.ts#L95)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | TypeIndex |

**Returns:** *boolean*

___

###  setTypeDefAtIndex

▸ **setTypeDefAtIndex**(`typeIndex`: TypeIndex): *void*

*Inherited from [MetaRegistry](_metaregistry_.metaregistry.md).[setTypeDefAtIndex](_metaregistry_.metaregistry.md#settypedefatindex)*

*Defined in [MetaRegistry.ts:115](https://github.com/polkadot-js/api/blob/19f87aac4d/packages/api-contract/src/MetaRegistry.ts#L115)*

**Parameters:**

Name | Type |
------ | ------ |
`typeIndex` | TypeIndex |

**Returns:** *void*

___

###  stringsAt

▸ **stringsAt**(`indices`: StringIndex[]): *string[]*

*Inherited from [MetaRegistry](_metaregistry_.metaregistry.md).[stringsAt](_metaregistry_.metaregistry.md#stringsat)*

*Defined in [MetaRegistry.ts:83](https://github.com/polkadot-js/api/blob/19f87aac4d/packages/api-contract/src/MetaRegistry.ts#L83)*

**Parameters:**

Name | Type |
------ | ------ |
`indices` | StringIndex[] |

**Returns:** *string[]*

___

###  typeAt

▸ **typeAt**(`index`: TypeIndex): *MetaType*

*Inherited from [MetaRegistry](_metaregistry_.metaregistry.md).[typeAt](_metaregistry_.metaregistry.md#typeat)*

*Defined in [MetaRegistry.ts:87](https://github.com/polkadot-js/api/blob/19f87aac4d/packages/api-contract/src/MetaRegistry.ts#L87)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | TypeIndex |

**Returns:** *MetaType*

___

###  typeDefAt

▸ **typeDefAt**(`index`: TypeIndex, `extra`: Pick‹TypeDef, never›): *TypeDef*

*Inherited from [MetaRegistry](_metaregistry_.metaregistry.md).[typeDefAt](_metaregistry_.metaregistry.md#typedefat)*

*Defined in [MetaRegistry.ts:99](https://github.com/polkadot-js/api/blob/19f87aac4d/packages/api-contract/src/MetaRegistry.ts#L99)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`index` | TypeIndex | - |
`extra` | Pick‹TypeDef, never› | {} |

**Returns:** *TypeDef*

___

###  typeDefForOption

▸ **typeDefForOption**(`id`: MetaTypeIdCustom, `typeIndex?`: TypeIndex): *Pick‹TypeDef, any›*

*Inherited from [MetaRegistry](_metaregistry_.metaregistry.md).[typeDefForOption](_metaregistry_.metaregistry.md#typedefforoption)*

*Defined in [MetaRegistry.ts:300](https://github.com/polkadot-js/api/blob/19f87aac4d/packages/api-contract/src/MetaRegistry.ts#L300)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | MetaTypeIdCustom |
`typeIndex?` | TypeIndex |

**Returns:** *Pick‹TypeDef, any›*

___

###  typeDefForResult

▸ **typeDefForResult**(`id`: MetaTypeIdCustom, `typeIndex?`: TypeIndex): *Pick‹TypeDef, any›*

*Inherited from [MetaRegistry](_metaregistry_.metaregistry.md).[typeDefForResult](_metaregistry_.metaregistry.md#typedefforresult)*

*Defined in [MetaRegistry.ts:309](https://github.com/polkadot-js/api/blob/19f87aac4d/packages/api-contract/src/MetaRegistry.ts#L309)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | MetaTypeIdCustom |
`typeIndex?` | TypeIndex |

**Returns:** *Pick‹TypeDef, any›*

___

###  typeDefForStruct

▸ **typeDefForStruct**(`def`: MetaTypeDefStruct | MetaTypeDefEnumVariantStruct): *Pick‹TypeDef, any›*

*Inherited from [MetaRegistry](_metaregistry_.metaregistry.md).[typeDefForStruct](_metaregistry_.metaregistry.md#typedefforstruct)*

*Defined in [MetaRegistry.ts:318](https://github.com/polkadot-js/api/blob/19f87aac4d/packages/api-contract/src/MetaRegistry.ts#L318)*

**Parameters:**

Name | Type |
------ | ------ |
`def` | MetaTypeDefStruct &#124; MetaTypeDefEnumVariantStruct |

**Returns:** *Pick‹TypeDef, any›*

___

###  typeDefFromMetaType

▸ **typeDefFromMetaType**(`metaType`: MetaType, `typeIndex?`: TypeIndex): *TypeDef*

*Inherited from [MetaRegistry](_metaregistry_.metaregistry.md).[typeDefFromMetaType](_metaregistry_.metaregistry.md#typedeffrommetatype)*

*Defined in [MetaRegistry.ts:175](https://github.com/polkadot-js/api/blob/19f87aac4d/packages/api-contract/src/MetaRegistry.ts#L175)*

**Parameters:**

Name | Type |
------ | ------ |
`metaType` | MetaType |
`typeIndex?` | TypeIndex |

**Returns:** *TypeDef*

___

###  typeDefFromMetaTypeAt

▸ **typeDefFromMetaTypeAt**(`typeIndex`: TypeIndex): *TypeDef*

*Inherited from [MetaRegistry](_metaregistry_.metaregistry.md).[typeDefFromMetaTypeAt](_metaregistry_.metaregistry.md#typedeffrommetatypeat)*

*Defined in [MetaRegistry.ts:184](https://github.com/polkadot-js/api/blob/19f87aac4d/packages/api-contract/src/MetaRegistry.ts#L184)*

**Parameters:**

Name | Type |
------ | ------ |
`typeIndex` | TypeIndex |

**Returns:** *TypeDef*

___

###  typesAt

▸ **typesAt**(`indices`: TypeIndex[]): *MetaType[]*

*Inherited from [MetaRegistry](_metaregistry_.metaregistry.md).[typesAt](_metaregistry_.metaregistry.md#typesat)*

*Defined in [MetaRegistry.ts:91](https://github.com/polkadot-js/api/blob/19f87aac4d/packages/api-contract/src/MetaRegistry.ts#L91)*

**Parameters:**

Name | Type |
------ | ------ |
`indices` | TypeIndex[] |

**Returns:** *MetaType[]*

___

###  validateAbi

▸ **validateAbi**(`abi`: ContractABIPre): *void*

*Defined in [ContractRegistry.ts:96](https://github.com/polkadot-js/api/blob/19f87aac4d/packages/api-contract/src/ContractRegistry.ts#L96)*

**Parameters:**

Name | Type |
------ | ------ |
`abi` | ContractABIPre |

**Returns:** *void*

___

###  validateArgs

▸ **validateArgs**(`name`: string, `args`: ContractABIArgBasePre[]): *void*

*Defined in [ContractRegistry.ts:57](https://github.com/polkadot-js/api/blob/19f87aac4d/packages/api-contract/src/ContractRegistry.ts#L57)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`args` | ContractABIArgBasePre[] |

**Returns:** *void*

___

###  validateConstructors

▸ **validateConstructors**(`__namedParameters`: object): *void*

*Defined in [ContractRegistry.ts:69](https://github.com/polkadot-js/api/blob/19f87aac4d/packages/api-contract/src/ContractRegistry.ts#L69)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`contract` | object |

**Returns:** *void*

___

###  validateMessages

▸ **validateMessages**(`__namedParameters`: object): *void*

*Defined in [ContractRegistry.ts:79](https://github.com/polkadot-js/api/blob/19f87aac4d/packages/api-contract/src/ContractRegistry.ts#L79)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`contract` | object |

**Returns:** *void*
