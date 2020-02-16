[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["Abi"](../modules/_abi_.md) › [ContractAbi](_abi_.contractabi.md)

# Class: ContractAbi

## Hierarchy

  ↳ [ContractRegistry](_contractregistry_.contractregistry.md)

  ↳ **ContractAbi**

## Implements

* InterfaceAbi

## Index

### Constructors

* [constructor](_abi_.contractabi.md#constructor)

### Properties

* [abi](_abi_.contractabi.md#abi)
* [constructors](_abi_.contractabi.md#constructors)
* [messages](_abi_.contractabi.md#messages)
* [registry](_abi_.contractabi.md#registry)
* [typeDefs](_abi_.contractabi.md#typedefs)

### Methods

* [convertAbi](_abi_.contractabi.md#convertabi)
* [convertArgs](_abi_.contractabi.md#convertargs)
* [convertConstructors](_abi_.contractabi.md#convertconstructors)
* [convertContract](_abi_.contractabi.md#convertcontract)
* [convertEvent](_abi_.contractabi.md#convertevent)
* [convertMessage](_abi_.contractabi.md#convertmessage)
* [convertStorage](_abi_.contractabi.md#convertstorage)
* [convertStorageLayout](_abi_.contractabi.md#convertstoragelayout)
* [convertStorageRange](_abi_.contractabi.md#convertstoragerange)
* [convertStorageStruct](_abi_.contractabi.md#convertstoragestruct)
* [convertType](_abi_.contractabi.md#converttype)
* [createMessage](_abi_.contractabi.md#createmessage)
* [hasTypeDefAt](_abi_.contractabi.md#hastypedefat)
* [setTypeDefAtIndex](_abi_.contractabi.md#settypedefatindex)
* [stringsAt](_abi_.contractabi.md#stringsat)
* [typeAt](_abi_.contractabi.md#typeat)
* [typeDefAt](_abi_.contractabi.md#typedefat)
* [typeDefForOption](_abi_.contractabi.md#typedefforoption)
* [typeDefForResult](_abi_.contractabi.md#typedefforresult)
* [typeDefForStruct](_abi_.contractabi.md#typedefforstruct)
* [typeDefFromMetaType](_abi_.contractabi.md#typedeffrommetatype)
* [typeDefFromMetaTypeAt](_abi_.contractabi.md#typedeffrommetatypeat)
* [typesAt](_abi_.contractabi.md#typesat)
* [validateAbi](_abi_.contractabi.md#validateabi)
* [validateArgs](_abi_.contractabi.md#validateargs)
* [validateConstructors](_abi_.contractabi.md#validateconstructors)
* [validateMessages](_abi_.contractabi.md#validatemessages)

## Constructors

###  constructor

\+ **new ContractAbi**(`registry`: Registry, `abi`: ContractABIPre): *[ContractAbi](_abi_.contractabi.md)*

*Overrides [MetaRegistry](_metaregistry_.metaregistry.md).[constructor](_metaregistry_.metaregistry.md#constructor)*

*Defined in [Abi.ts:17](https://github.com/polkadot-js/api/blob/ad2b1abdc9/packages/api-contract/src/Abi.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | Registry |
`abi` | ContractABIPre |

**Returns:** *[ContractAbi](_abi_.contractabi.md)*

## Properties

###  abi

• **abi**: *ContractABI*

*Defined in [Abi.ts:13](https://github.com/polkadot-js/api/blob/ad2b1abdc9/packages/api-contract/src/Abi.ts#L13)*

___

###  constructors

• **constructors**: *AbiConstructors*

*Defined in [Abi.ts:15](https://github.com/polkadot-js/api/blob/ad2b1abdc9/packages/api-contract/src/Abi.ts#L15)*

___

###  messages

• **messages**: *AbiMessages*

*Defined in [Abi.ts:17](https://github.com/polkadot-js/api/blob/ad2b1abdc9/packages/api-contract/src/Abi.ts#L17)*

___

###  registry

• **registry**: *Registry*

*Inherited from [MetaRegistry](_metaregistry_.metaregistry.md).[registry](_metaregistry_.metaregistry.md#registry)*

*Defined in [MetaRegistry.ts:37](https://github.com/polkadot-js/api/blob/ad2b1abdc9/packages/api-contract/src/MetaRegistry.ts#L37)*

___

###  typeDefs

• **typeDefs**: *TypeDef[]* = []

*Inherited from [MetaRegistry](_metaregistry_.metaregistry.md).[typeDefs](_metaregistry_.metaregistry.md#typedefs)*

*Defined in [MetaRegistry.ts:43](https://github.com/polkadot-js/api/blob/ad2b1abdc9/packages/api-contract/src/MetaRegistry.ts#L43)*

## Methods

###  convertAbi

▸ **convertAbi**(`__namedParameters`: object): *ContractABI*

*Inherited from [ContractRegistry](_contractregistry_.contractregistry.md).[convertAbi](_contractregistry_.contractregistry.md#convertabi)*

*Defined in [ContractRegistry.ts:142](https://github.com/polkadot-js/api/blob/ad2b1abdc9/packages/api-contract/src/ContractRegistry.ts#L142)*

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

*Inherited from [ContractRegistry](_contractregistry_.contractregistry.md).[convertArgs](_contractregistry_.contractregistry.md#convertargs)*

*Defined in [ContractRegistry.ts:149](https://github.com/polkadot-js/api/blob/ad2b1abdc9/packages/api-contract/src/ContractRegistry.ts#L149)*

**Parameters:**

Name | Type |
------ | ------ |
`args` | ContractABIArgBasePre[] |

**Returns:** *any[]*

___

###  convertConstructors

▸ **convertConstructors**(`constructors`: ContractABIMessagePre[]): *ContractABIMessage[]*

*Inherited from [ContractRegistry](_contractregistry_.contractregistry.md).[convertConstructors](_contractregistry_.contractregistry.md#convertconstructors)*

*Defined in [ContractRegistry.ts:170](https://github.com/polkadot-js/api/blob/ad2b1abdc9/packages/api-contract/src/ContractRegistry.ts#L170)*

**Parameters:**

Name | Type |
------ | ------ |
`constructors` | ContractABIMessagePre[] |

**Returns:** *ContractABIMessage[]*

___

###  convertContract

▸ **convertContract**(`__namedParameters`: object): *ContractABIContract*

*Inherited from [ContractRegistry](_contractregistry_.contractregistry.md).[convertContract](_contractregistry_.contractregistry.md#convertcontract)*

*Defined in [ContractRegistry.ts:158](https://github.com/polkadot-js/api/blob/ad2b1abdc9/packages/api-contract/src/ContractRegistry.ts#L158)*

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

*Inherited from [ContractRegistry](_contractregistry_.contractregistry.md).[convertEvent](_contractregistry_.contractregistry.md#convertevent)*

*Defined in [ContractRegistry.ts:187](https://github.com/polkadot-js/api/blob/ad2b1abdc9/packages/api-contract/src/ContractRegistry.ts#L187)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`args` | ContractABIEventArgPre[] |

**Returns:** *ContractABIEvent*

___

###  convertMessage

▸ **convertMessage**(`__namedParameters`: object): *ContractABIMessage*

*Inherited from [ContractRegistry](_contractregistry_.contractregistry.md).[convertMessage](_contractregistry_.contractregistry.md#convertmessage)*

*Defined in [ContractRegistry.ts:178](https://github.com/polkadot-js/api/blob/ad2b1abdc9/packages/api-contract/src/ContractRegistry.ts#L178)*

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

*Inherited from [ContractRegistry](_contractregistry_.contractregistry.md).[convertStorage](_contractregistry_.contractregistry.md#convertstorage)*

*Defined in [ContractRegistry.ts:193](https://github.com/polkadot-js/api/blob/ad2b1abdc9/packages/api-contract/src/ContractRegistry.ts#L193)*

**Parameters:**

Name | Type |
------ | ------ |
`storage` | ContractABIStoragePre |

**Returns:** *ContractABIStorage*

___

###  convertStorageLayout

▸ **convertStorageLayout**(`storageLayout`: ContractABIStorageLayoutPre): *ContractABIStorageLayout*

*Inherited from [ContractRegistry](_contractregistry_.contractregistry.md).[convertStorageLayout](_contractregistry_.contractregistry.md#convertstoragelayout)*

*Defined in [ContractRegistry.ts:197](https://github.com/polkadot-js/api/blob/ad2b1abdc9/packages/api-contract/src/ContractRegistry.ts#L197)*

**Parameters:**

Name | Type |
------ | ------ |
`storageLayout` | ContractABIStorageLayoutPre |

**Returns:** *ContractABIStorageLayout*

___

###  convertStorageRange

▸ **convertStorageRange**(`__namedParameters`: object): *ContractABIRange*

*Inherited from [ContractRegistry](_contractregistry_.contractregistry.md).[convertStorageRange](_contractregistry_.contractregistry.md#convertstoragerange)*

*Defined in [ContractRegistry.ts:215](https://github.com/polkadot-js/api/blob/ad2b1abdc9/packages/api-contract/src/ContractRegistry.ts#L215)*

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

*Inherited from [ContractRegistry](_contractregistry_.contractregistry.md).[convertStorageStruct](_contractregistry_.contractregistry.md#convertstoragestruct)*

*Defined in [ContractRegistry.ts:205](https://github.com/polkadot-js/api/blob/ad2b1abdc9/packages/api-contract/src/ContractRegistry.ts#L205)*

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

*Inherited from [ContractRegistry](_contractregistry_.contractregistry.md).[convertType](_contractregistry_.contractregistry.md#converttype)*

*Defined in [ContractRegistry.ts:153](https://github.com/polkadot-js/api/blob/ad2b1abdc9/packages/api-contract/src/ContractRegistry.ts#L153)*

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

*Inherited from [ContractRegistry](_contractregistry_.contractregistry.md).[createMessage](_contractregistry_.contractregistry.md#createmessage)*

*Defined in [ContractRegistry.ts:109](https://github.com/polkadot-js/api/blob/ad2b1abdc9/packages/api-contract/src/ContractRegistry.ts#L109)*

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

*Defined in [MetaRegistry.ts:95](https://github.com/polkadot-js/api/blob/ad2b1abdc9/packages/api-contract/src/MetaRegistry.ts#L95)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | TypeIndex |

**Returns:** *boolean*

___

###  setTypeDefAtIndex

▸ **setTypeDefAtIndex**(`typeIndex`: TypeIndex): *void*

*Inherited from [MetaRegistry](_metaregistry_.metaregistry.md).[setTypeDefAtIndex](_metaregistry_.metaregistry.md#settypedefatindex)*

*Defined in [MetaRegistry.ts:115](https://github.com/polkadot-js/api/blob/ad2b1abdc9/packages/api-contract/src/MetaRegistry.ts#L115)*

**Parameters:**

Name | Type |
------ | ------ |
`typeIndex` | TypeIndex |

**Returns:** *void*

___

###  stringsAt

▸ **stringsAt**(`indices`: StringIndex[]): *string[]*

*Inherited from [MetaRegistry](_metaregistry_.metaregistry.md).[stringsAt](_metaregistry_.metaregistry.md#stringsat)*

*Defined in [MetaRegistry.ts:83](https://github.com/polkadot-js/api/blob/ad2b1abdc9/packages/api-contract/src/MetaRegistry.ts#L83)*

**Parameters:**

Name | Type |
------ | ------ |
`indices` | StringIndex[] |

**Returns:** *string[]*

___

###  typeAt

▸ **typeAt**(`index`: TypeIndex): *MetaType*

*Inherited from [MetaRegistry](_metaregistry_.metaregistry.md).[typeAt](_metaregistry_.metaregistry.md#typeat)*

*Defined in [MetaRegistry.ts:87](https://github.com/polkadot-js/api/blob/ad2b1abdc9/packages/api-contract/src/MetaRegistry.ts#L87)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | TypeIndex |

**Returns:** *MetaType*

___

###  typeDefAt

▸ **typeDefAt**(`index`: TypeIndex, `extra`: Pick‹TypeDef, never›): *TypeDef*

*Inherited from [MetaRegistry](_metaregistry_.metaregistry.md).[typeDefAt](_metaregistry_.metaregistry.md#typedefat)*

*Defined in [MetaRegistry.ts:99](https://github.com/polkadot-js/api/blob/ad2b1abdc9/packages/api-contract/src/MetaRegistry.ts#L99)*

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

*Defined in [MetaRegistry.ts:300](https://github.com/polkadot-js/api/blob/ad2b1abdc9/packages/api-contract/src/MetaRegistry.ts#L300)*

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

*Defined in [MetaRegistry.ts:309](https://github.com/polkadot-js/api/blob/ad2b1abdc9/packages/api-contract/src/MetaRegistry.ts#L309)*

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

*Defined in [MetaRegistry.ts:318](https://github.com/polkadot-js/api/blob/ad2b1abdc9/packages/api-contract/src/MetaRegistry.ts#L318)*

**Parameters:**

Name | Type |
------ | ------ |
`def` | MetaTypeDefStruct &#124; MetaTypeDefEnumVariantStruct |

**Returns:** *Pick‹TypeDef, any›*

___

###  typeDefFromMetaType

▸ **typeDefFromMetaType**(`metaType`: MetaType, `typeIndex?`: TypeIndex): *TypeDef*

*Inherited from [MetaRegistry](_metaregistry_.metaregistry.md).[typeDefFromMetaType](_metaregistry_.metaregistry.md#typedeffrommetatype)*

*Defined in [MetaRegistry.ts:175](https://github.com/polkadot-js/api/blob/ad2b1abdc9/packages/api-contract/src/MetaRegistry.ts#L175)*

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

*Defined in [MetaRegistry.ts:184](https://github.com/polkadot-js/api/blob/ad2b1abdc9/packages/api-contract/src/MetaRegistry.ts#L184)*

**Parameters:**

Name | Type |
------ | ------ |
`typeIndex` | TypeIndex |

**Returns:** *TypeDef*

___

###  typesAt

▸ **typesAt**(`indices`: TypeIndex[]): *MetaType[]*

*Inherited from [MetaRegistry](_metaregistry_.metaregistry.md).[typesAt](_metaregistry_.metaregistry.md#typesat)*

*Defined in [MetaRegistry.ts:91](https://github.com/polkadot-js/api/blob/ad2b1abdc9/packages/api-contract/src/MetaRegistry.ts#L91)*

**Parameters:**

Name | Type |
------ | ------ |
`indices` | TypeIndex[] |

**Returns:** *MetaType[]*

___

###  validateAbi

▸ **validateAbi**(`abi`: ContractABIPre): *void*

*Inherited from [ContractRegistry](_contractregistry_.contractregistry.md).[validateAbi](_contractregistry_.contractregistry.md#validateabi)*

*Defined in [ContractRegistry.ts:96](https://github.com/polkadot-js/api/blob/ad2b1abdc9/packages/api-contract/src/ContractRegistry.ts#L96)*

**Parameters:**

Name | Type |
------ | ------ |
`abi` | ContractABIPre |

**Returns:** *void*

___

###  validateArgs

▸ **validateArgs**(`name`: string, `args`: ContractABIArgBasePre[]): *void*

*Inherited from [ContractRegistry](_contractregistry_.contractregistry.md).[validateArgs](_contractregistry_.contractregistry.md#validateargs)*

*Defined in [ContractRegistry.ts:57](https://github.com/polkadot-js/api/blob/ad2b1abdc9/packages/api-contract/src/ContractRegistry.ts#L57)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`args` | ContractABIArgBasePre[] |

**Returns:** *void*

___

###  validateConstructors

▸ **validateConstructors**(`__namedParameters`: object): *void*

*Inherited from [ContractRegistry](_contractregistry_.contractregistry.md).[validateConstructors](_contractregistry_.contractregistry.md#validateconstructors)*

*Defined in [ContractRegistry.ts:69](https://github.com/polkadot-js/api/blob/ad2b1abdc9/packages/api-contract/src/ContractRegistry.ts#L69)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`contract` | object |

**Returns:** *void*

___

###  validateMessages

▸ **validateMessages**(`__namedParameters`: object): *void*

*Inherited from [ContractRegistry](_contractregistry_.contractregistry.md).[validateMessages](_contractregistry_.contractregistry.md#validatemessages)*

*Defined in [ContractRegistry.ts:79](https://github.com/polkadot-js/api/blob/ad2b1abdc9/packages/api-contract/src/ContractRegistry.ts#L79)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`contract` | object |

**Returns:** *void*
