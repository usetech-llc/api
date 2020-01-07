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

*Defined in [api-contract/src/MetaRegistry.ts:107](https://github.com/polkadot-js/api/blob/5278138cc3/packages/api-contract/src/MetaRegistry.ts#L107)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | Registry |
`json` | MetaRegistryJson |

**Returns:** *[ContractRegistry](_contractregistry_.contractregistry.md)*

## Properties

###  registry

• **registry**: *Registry*

*Inherited from void*

*Defined in [api-contract/src/MetaRegistry.ts:37](https://github.com/polkadot-js/api/blob/5278138cc3/packages/api-contract/src/MetaRegistry.ts#L37)*

___

###  typeDefs

• **typeDefs**: *TypeDef[]* =  []

*Inherited from void*

*Defined in [api-contract/src/MetaRegistry.ts:43](https://github.com/polkadot-js/api/blob/5278138cc3/packages/api-contract/src/MetaRegistry.ts#L43)*

## Methods

###  convertAbi

▸ **convertAbi**(`__namedParameters`: object): *[ContractABI](../interfaces/_types_.contractabi.md)*

*Defined in [api-contract/src/ContractRegistry.ts:142](https://github.com/polkadot-js/api/blob/5278138cc3/packages/api-contract/src/ContractRegistry.ts#L142)*

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | object |

**Returns:** *[ContractABI](../interfaces/_types_.contractabi.md)*

___

###  convertArgs

▸ **convertArgs**(`args`: [ContractABIArgBasePre](../interfaces/_types_.contractabiargbasepre.md)[]): *any[]*

*Defined in [api-contract/src/ContractRegistry.ts:149](https://github.com/polkadot-js/api/blob/5278138cc3/packages/api-contract/src/ContractRegistry.ts#L149)*

**Parameters:**

Name | Type |
------ | ------ |
`args` | [ContractABIArgBasePre](../interfaces/_types_.contractabiargbasepre.md)[] |

**Returns:** *any[]*

___

###  convertConstructors

▸ **convertConstructors**(`constructors`: [ContractABIMessagePre](../interfaces/_types_.contractabimessagepre.md)[]): *[ContractABIMessage](../interfaces/_types_.contractabimessage.md)[]*

*Defined in [api-contract/src/ContractRegistry.ts:170](https://github.com/polkadot-js/api/blob/5278138cc3/packages/api-contract/src/ContractRegistry.ts#L170)*

**Parameters:**

Name | Type |
------ | ------ |
`constructors` | [ContractABIMessagePre](../interfaces/_types_.contractabimessagepre.md)[] |

**Returns:** *[ContractABIMessage](../interfaces/_types_.contractabimessage.md)[]*

___

###  convertContract

▸ **convertContract**(`__namedParameters`: object): *[ContractABIContract](../interfaces/_types_.contractabicontract.md)*

*Defined in [api-contract/src/ContractRegistry.ts:158](https://github.com/polkadot-js/api/blob/5278138cc3/packages/api-contract/src/ContractRegistry.ts#L158)*

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | object |

**Returns:** *[ContractABIContract](../interfaces/_types_.contractabicontract.md)*

___

###  convertEvent

▸ **convertEvent**(`__namedParameters`: object): *[ContractABIEvent](../interfaces/_types_.contractabievent.md)*

*Defined in [api-contract/src/ContractRegistry.ts:187](https://github.com/polkadot-js/api/blob/5278138cc3/packages/api-contract/src/ContractRegistry.ts#L187)*

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | object |

**Returns:** *[ContractABIEvent](../interfaces/_types_.contractabievent.md)*

___

###  convertMessage

▸ **convertMessage**(`__namedParameters`: object): *[ContractABIMessage](../interfaces/_types_.contractabimessage.md)*

*Defined in [api-contract/src/ContractRegistry.ts:178](https://github.com/polkadot-js/api/blob/5278138cc3/packages/api-contract/src/ContractRegistry.ts#L178)*

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | object |

**Returns:** *[ContractABIMessage](../interfaces/_types_.contractabimessage.md)*

___

###  convertStorage

▸ **convertStorage**(`storage`: [ContractABIStoragePre](../modules/_types_.md#contractabistoragepre)): *[ContractABIStorage](../modules/_types_.md#contractabistorage)*

*Defined in [api-contract/src/ContractRegistry.ts:193](https://github.com/polkadot-js/api/blob/5278138cc3/packages/api-contract/src/ContractRegistry.ts#L193)*

**Parameters:**

Name | Type |
------ | ------ |
`storage` | [ContractABIStoragePre](../modules/_types_.md#contractabistoragepre) |

**Returns:** *[ContractABIStorage](../modules/_types_.md#contractabistorage)*

___

###  convertStorageLayout

▸ **convertStorageLayout**(`storageLayout`: [ContractABIStorageLayoutPre](../modules/_types_.md#contractabistoragelayoutpre)): *[ContractABIStorageLayout](../modules/_types_.md#contractabistoragelayout)*

*Defined in [api-contract/src/ContractRegistry.ts:197](https://github.com/polkadot-js/api/blob/5278138cc3/packages/api-contract/src/ContractRegistry.ts#L197)*

**Parameters:**

Name | Type |
------ | ------ |
`storageLayout` | [ContractABIStorageLayoutPre](../modules/_types_.md#contractabistoragelayoutpre) |

**Returns:** *[ContractABIStorageLayout](../modules/_types_.md#contractabistoragelayout)*

___

###  convertStorageRange

▸ **convertStorageRange**(`__namedParameters`: object): *[ContractABIRange](../interfaces/_types_.contractabirange.md)*

*Defined in [api-contract/src/ContractRegistry.ts:215](https://github.com/polkadot-js/api/blob/5278138cc3/packages/api-contract/src/ContractRegistry.ts#L215)*

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | object |

**Returns:** *[ContractABIRange](../interfaces/_types_.contractabirange.md)*

___

###  convertStorageStruct

▸ **convertStorageStruct**(`__namedParameters`: object): *[ContractABIStorageStruct](../interfaces/_types_.contractabistoragestruct.md)*

*Defined in [api-contract/src/ContractRegistry.ts:205](https://github.com/polkadot-js/api/blob/5278138cc3/packages/api-contract/src/ContractRegistry.ts#L205)*

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | object |

**Returns:** *[ContractABIStorageStruct](../interfaces/_types_.contractabistoragestruct.md)*

___

###  convertType

▸ **convertType**(`__namedParameters`: object): *TypeDef*

*Defined in [api-contract/src/ContractRegistry.ts:153](https://github.com/polkadot-js/api/blob/5278138cc3/packages/api-contract/src/ContractRegistry.ts#L153)*

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | object |

**Returns:** *TypeDef*

___

###  createMessage

▸ **createMessage**(`name`: string, `message`: Partial‹[ContractABIMessage](../interfaces/_types_.contractabimessage.md)› & [ContractABIMessageBase](../interfaces/_types_.contractabimessagebase.md)): *[ContractABIFn](../interfaces/_types_.contractabifn.md)*

*Defined in [api-contract/src/ContractRegistry.ts:109](https://github.com/polkadot-js/api/blob/5278138cc3/packages/api-contract/src/ContractRegistry.ts#L109)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`message` | Partial‹[ContractABIMessage](../interfaces/_types_.contractabimessage.md)› & [ContractABIMessageBase](../interfaces/_types_.contractabimessagebase.md) |

**Returns:** *[ContractABIFn](../interfaces/_types_.contractabifn.md)*

___

###  hasTypeDefAt

▸ **hasTypeDefAt**(`index`: TypeIndex): *boolean*

*Inherited from void*

*Defined in [api-contract/src/MetaRegistry.ts:95](https://github.com/polkadot-js/api/blob/5278138cc3/packages/api-contract/src/MetaRegistry.ts#L95)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | TypeIndex |

**Returns:** *boolean*

___

###  setTypeDefAtIndex

▸ **setTypeDefAtIndex**(`typeIndex`: TypeIndex): *void*

*Inherited from [MetaRegistry](_metaregistry_.metaregistry.md).[setTypeDefAtIndex](_metaregistry_.metaregistry.md#settypedefatindex)*

*Defined in [api-contract/src/MetaRegistry.ts:115](https://github.com/polkadot-js/api/blob/5278138cc3/packages/api-contract/src/MetaRegistry.ts#L115)*

**Parameters:**

Name | Type |
------ | ------ |
`typeIndex` | TypeIndex |

**Returns:** *void*

___

###  stringsAt

▸ **stringsAt**(`indices`: StringIndex[]): *string[]*

*Inherited from void*

*Defined in [api-contract/src/MetaRegistry.ts:83](https://github.com/polkadot-js/api/blob/5278138cc3/packages/api-contract/src/MetaRegistry.ts#L83)*

**Parameters:**

Name | Type |
------ | ------ |
`indices` | StringIndex[] |

**Returns:** *string[]*

___

###  typeAt

▸ **typeAt**(`index`: TypeIndex): *MetaType*

*Inherited from void*

*Defined in [api-contract/src/MetaRegistry.ts:87](https://github.com/polkadot-js/api/blob/5278138cc3/packages/api-contract/src/MetaRegistry.ts#L87)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | TypeIndex |

**Returns:** *MetaType*

___

###  typeDefAt

▸ **typeDefAt**(`index`: TypeIndex, `extra`: Pick‹TypeDef, never›): *TypeDef*

*Inherited from void*

*Defined in [api-contract/src/MetaRegistry.ts:99](https://github.com/polkadot-js/api/blob/5278138cc3/packages/api-contract/src/MetaRegistry.ts#L99)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`index` | TypeIndex | - |
`extra` | Pick‹TypeDef, never› |  {} |

**Returns:** *TypeDef*

___

###  typeDefForOption

▸ **typeDefForOption**(`id`: MetaTypeIdCustom, `typeIndex?`: TypeIndex): *Pick‹TypeDef, any›*

*Inherited from [MetaRegistry](_metaregistry_.metaregistry.md).[typeDefForOption](_metaregistry_.metaregistry.md#typedefforoption)*

*Defined in [api-contract/src/MetaRegistry.ts:300](https://github.com/polkadot-js/api/blob/5278138cc3/packages/api-contract/src/MetaRegistry.ts#L300)*

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

*Defined in [api-contract/src/MetaRegistry.ts:309](https://github.com/polkadot-js/api/blob/5278138cc3/packages/api-contract/src/MetaRegistry.ts#L309)*

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

*Defined in [api-contract/src/MetaRegistry.ts:318](https://github.com/polkadot-js/api/blob/5278138cc3/packages/api-contract/src/MetaRegistry.ts#L318)*

**Parameters:**

Name | Type |
------ | ------ |
`def` | MetaTypeDefStruct &#124; MetaTypeDefEnumVariantStruct |

**Returns:** *Pick‹TypeDef, any›*

___

###  typeDefFromMetaType

▸ **typeDefFromMetaType**(`metaType`: MetaType, `typeIndex?`: TypeIndex): *TypeDef*

*Inherited from [MetaRegistry](_metaregistry_.metaregistry.md).[typeDefFromMetaType](_metaregistry_.metaregistry.md#typedeffrommetatype)*

*Defined in [api-contract/src/MetaRegistry.ts:175](https://github.com/polkadot-js/api/blob/5278138cc3/packages/api-contract/src/MetaRegistry.ts#L175)*

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

*Defined in [api-contract/src/MetaRegistry.ts:184](https://github.com/polkadot-js/api/blob/5278138cc3/packages/api-contract/src/MetaRegistry.ts#L184)*

**Parameters:**

Name | Type |
------ | ------ |
`typeIndex` | TypeIndex |

**Returns:** *TypeDef*

___

###  typesAt

▸ **typesAt**(`indices`: TypeIndex[]): *MetaType[]*

*Inherited from void*

*Defined in [api-contract/src/MetaRegistry.ts:91](https://github.com/polkadot-js/api/blob/5278138cc3/packages/api-contract/src/MetaRegistry.ts#L91)*

**Parameters:**

Name | Type |
------ | ------ |
`indices` | TypeIndex[] |

**Returns:** *MetaType[]*

___

###  validateAbi

▸ **validateAbi**(`abi`: [ContractABIPre](../interfaces/_types_.contractabipre.md)): *void*

*Defined in [api-contract/src/ContractRegistry.ts:96](https://github.com/polkadot-js/api/blob/5278138cc3/packages/api-contract/src/ContractRegistry.ts#L96)*

**Parameters:**

Name | Type |
------ | ------ |
`abi` | [ContractABIPre](../interfaces/_types_.contractabipre.md) |

**Returns:** *void*

___

###  validateArgs

▸ **validateArgs**(`name`: string, `args`: [ContractABIArgBasePre](../interfaces/_types_.contractabiargbasepre.md)[]): *void*

*Defined in [api-contract/src/ContractRegistry.ts:57](https://github.com/polkadot-js/api/blob/5278138cc3/packages/api-contract/src/ContractRegistry.ts#L57)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`args` | [ContractABIArgBasePre](../interfaces/_types_.contractabiargbasepre.md)[] |

**Returns:** *void*

___

###  validateConstructors

▸ **validateConstructors**(`__namedParameters`: object): *void*

*Defined in [api-contract/src/ContractRegistry.ts:69](https://github.com/polkadot-js/api/blob/5278138cc3/packages/api-contract/src/ContractRegistry.ts#L69)*

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | object |

**Returns:** *void*

___

###  validateMessages

▸ **validateMessages**(`__namedParameters`: object): *void*

*Defined in [api-contract/src/ContractRegistry.ts:79](https://github.com/polkadot-js/api/blob/5278138cc3/packages/api-contract/src/ContractRegistry.ts#L79)*

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | object |

**Returns:** *void*
