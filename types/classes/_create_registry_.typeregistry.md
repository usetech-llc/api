[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["create/registry"](../modules/_create_registry_.md) › [TypeRegistry](_create_registry_.typeregistry.md)

# Class: TypeRegistry

## Hierarchy

* **TypeRegistry**

## Implements

* [Registry](../interfaces/_types_registry_.registry.md)

## Index

### Constructors

* [constructor](_create_registry_.typeregistry.md#constructor)

### Accessors

* [chainDecimals](_create_registry_.typeregistry.md#chaindecimals)
* [chainSS58](_create_registry_.typeregistry.md#chainss58)
* [chainToken](_create_registry_.typeregistry.md#chaintoken)

### Methods

* [findMetaCall](_create_registry_.typeregistry.md#findmetacall)
* [findMetaError](_create_registry_.typeregistry.md#findmetaerror)
* [findMetaEvent](_create_registry_.typeregistry.md#findmetaevent)
* [get](_create_registry_.typeregistry.md#get)
* [getChainProperties](_create_registry_.typeregistry.md#getchainproperties)
* [getDefinition](_create_registry_.typeregistry.md#getdefinition)
* [getOrThrow](_create_registry_.typeregistry.md#getorthrow)
* [getOrUnknown](_create_registry_.typeregistry.md#getorunknown)
* [getSignedExtensionExtra](_create_registry_.typeregistry.md#getsignedextensionextra)
* [getSignedExtensionTypes](_create_registry_.typeregistry.md#getsignedextensiontypes)
* [hasClass](_create_registry_.typeregistry.md#hasclass)
* [hasDef](_create_registry_.typeregistry.md#hasdef)
* [hasType](_create_registry_.typeregistry.md#hastype)
* [register](_create_registry_.typeregistry.md#register)
* [setChainProperties](_create_registry_.typeregistry.md#setchainproperties)
* [setMetadata](_create_registry_.typeregistry.md#setmetadata)

## Constructors

###  constructor

\+ **new TypeRegistry**(): *[TypeRegistry](_create_registry_.typeregistry.md)*

*Defined in [packages/types/src/create/registry.ts:94](https://github.com/polkadot-js/api/blob/bdd1e4c917/packages/types/src/create/registry.ts#L94)*

**Returns:** *[TypeRegistry](_create_registry_.typeregistry.md)*

## Accessors

###  chainDecimals

• **get chainDecimals**(): *number*

*Defined in [packages/types/src/create/registry.ts:112](https://github.com/polkadot-js/api/blob/bdd1e4c917/packages/types/src/create/registry.ts#L112)*

**Returns:** *number*

___

###  chainSS58

• **get chainSS58**(): *number | undefined*

*Defined in [packages/types/src/create/registry.ts:118](https://github.com/polkadot-js/api/blob/bdd1e4c917/packages/types/src/create/registry.ts#L118)*

**Returns:** *number | undefined*

___

###  chainToken

• **get chainToken**(): *string*

*Defined in [packages/types/src/create/registry.ts:124](https://github.com/polkadot-js/api/blob/bdd1e4c917/packages/types/src/create/registry.ts#L124)*

**Returns:** *string*

## Methods

###  findMetaCall

▸ **findMetaCall**(`callIndex`: [Uint8Array](_codec_raw_.raw.md#static-uint8array)): *[CallFunction](../interfaces/_types_calls_.callfunction.md)*

*Implementation of [Registry](../interfaces/_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:131](https://github.com/polkadot-js/api/blob/bdd1e4c917/packages/types/src/create/registry.ts#L131)*

**Parameters:**

Name | Type |
------ | ------ |
`callIndex` | [Uint8Array](_codec_raw_.raw.md#static-uint8array) |

**Returns:** *[CallFunction](../interfaces/_types_calls_.callfunction.md)*

___

###  findMetaError

▸ **findMetaError**(`errorIndex`: [Uint8Array](_codec_raw_.raw.md#static-uint8array) | DispatchErrorModule): *[RegistryError](../interfaces/_types_registry_.registryerror.md)*

*Defined in [packages/types/src/create/registry.ts:141](https://github.com/polkadot-js/api/blob/bdd1e4c917/packages/types/src/create/registry.ts#L141)*

**Parameters:**

Name | Type |
------ | ------ |
`errorIndex` | [Uint8Array](_codec_raw_.raw.md#static-uint8array) &#124; DispatchErrorModule |

**Returns:** *[RegistryError](../interfaces/_types_registry_.registryerror.md)*

___

###  findMetaEvent

▸ **findMetaEvent**(`eventIndex`: [Uint8Array](_codec_raw_.raw.md#static-uint8array)): *[Constructor](../interfaces/_types_codec_.constructor.md)‹[EventData](_primitive_generic_event_.eventdata.md)›*

*Implementation of [Registry](../interfaces/_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:154](https://github.com/polkadot-js/api/blob/bdd1e4c917/packages/types/src/create/registry.ts#L154)*

**Parameters:**

Name | Type |
------ | ------ |
`eventIndex` | [Uint8Array](_codec_raw_.raw.md#static-uint8array) |

**Returns:** *[Constructor](../interfaces/_types_codec_.constructor.md)‹[EventData](_primitive_generic_event_.eventdata.md)›*

___

###  get

▸ **get**<**T**>(`name`: string, `withUnknown?`: undefined | false | true): *[Constructor](../interfaces/_types_codec_.constructor.md)‹T› | undefined*

*Implementation of [Registry](../interfaces/_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:163](https://github.com/polkadot-js/api/blob/bdd1e4c917/packages/types/src/create/registry.ts#L163)*

**Type parameters:**

▪ **T**: *[Codec](../interfaces/_types_codec_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`withUnknown?` | undefined &#124; false &#124; true |

**Returns:** *[Constructor](../interfaces/_types_codec_.constructor.md)‹T› | undefined*

___

###  getChainProperties

▸ **getChainProperties**(): *ChainProperties | undefined*

*Implementation of [Registry](../interfaces/_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:194](https://github.com/polkadot-js/api/blob/bdd1e4c917/packages/types/src/create/registry.ts#L194)*

**Returns:** *ChainProperties | undefined*

___

###  getDefinition

▸ **getDefinition**(`name`: string): *string | undefined*

*Implementation of [Registry](../interfaces/_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:198](https://github.com/polkadot-js/api/blob/bdd1e4c917/packages/types/src/create/registry.ts#L198)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *string | undefined*

___

###  getOrThrow

▸ **getOrThrow**<**T**>(`name`: string, `msg?`: undefined | string): *[Constructor](../interfaces/_types_codec_.constructor.md)‹T›*

*Implementation of [Registry](../interfaces/_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:202](https://github.com/polkadot-js/api/blob/bdd1e4c917/packages/types/src/create/registry.ts#L202)*

**Type parameters:**

▪ **T**: *[Codec](../interfaces/_types_codec_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`msg?` | undefined &#124; string |

**Returns:** *[Constructor](../interfaces/_types_codec_.constructor.md)‹T›*

___

###  getOrUnknown

▸ **getOrUnknown**<**T**>(`name`: string): *[Constructor](../interfaces/_types_codec_.constructor.md)‹T›*

*Implementation of [Registry](../interfaces/_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:212](https://github.com/polkadot-js/api/blob/bdd1e4c917/packages/types/src/create/registry.ts#L212)*

**Type parameters:**

▪ **T**: *[Codec](../interfaces/_types_codec_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *[Constructor](../interfaces/_types_codec_.constructor.md)‹T›*

___

###  getSignedExtensionExtra

▸ **getSignedExtensionExtra**(): *Record‹string, [InterfaceTypes](../modules/_types_helpers_.md#interfacetypes)›*

*Implementation of [Registry](../interfaces/_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:216](https://github.com/polkadot-js/api/blob/bdd1e4c917/packages/types/src/create/registry.ts#L216)*

**Returns:** *Record‹string, [InterfaceTypes](../modules/_types_helpers_.md#interfacetypes)›*

___

###  getSignedExtensionTypes

▸ **getSignedExtensionTypes**(): *Record‹string, [InterfaceTypes](../modules/_types_helpers_.md#interfacetypes)›*

*Implementation of [Registry](../interfaces/_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:220](https://github.com/polkadot-js/api/blob/bdd1e4c917/packages/types/src/create/registry.ts#L220)*

**Returns:** *Record‹string, [InterfaceTypes](../modules/_types_helpers_.md#interfacetypes)›*

___

###  hasClass

▸ **hasClass**(`name`: string): *boolean*

*Implementation of [Registry](../interfaces/_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:224](https://github.com/polkadot-js/api/blob/bdd1e4c917/packages/types/src/create/registry.ts#L224)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*

___

###  hasDef

▸ **hasDef**(`name`: string): *boolean*

*Implementation of [Registry](../interfaces/_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:228](https://github.com/polkadot-js/api/blob/bdd1e4c917/packages/types/src/create/registry.ts#L228)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*

___

###  hasType

▸ **hasType**(`name`: string): *boolean*

*Implementation of [Registry](../interfaces/_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:232](https://github.com/polkadot-js/api/blob/bdd1e4c917/packages/types/src/create/registry.ts#L232)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*

___

###  register

▸ **register**(`type`: [Constructor](../interfaces/_types_codec_.constructor.md) | [RegistryTypes](../modules/_types_registry_.md#registrytypes)): *void*

*Implementation of [Registry](../interfaces/_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:236](https://github.com/polkadot-js/api/blob/bdd1e4c917/packages/types/src/create/registry.ts#L236)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | [Constructor](../interfaces/_types_codec_.constructor.md) &#124; [RegistryTypes](../modules/_types_registry_.md#registrytypes) |

**Returns:** *void*

▸ **register**(`name`: string, `type`: [Constructor](../interfaces/_types_codec_.constructor.md)): *void*

*Implementation of [Registry](../interfaces/_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:239](https://github.com/polkadot-js/api/blob/bdd1e4c917/packages/types/src/create/registry.ts#L239)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`type` | [Constructor](../interfaces/_types_codec_.constructor.md) |

**Returns:** *void*

___

###  setChainProperties

▸ **setChainProperties**(`properties?`: [ChainProperties](../interfaces/_interfaceregistry_.interfaceregistry.md#chainproperties)): *void*

*Implementation of [Registry](../interfaces/_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:276](https://github.com/polkadot-js/api/blob/bdd1e4c917/packages/types/src/create/registry.ts#L276)*

**Parameters:**

Name | Type |
------ | ------ |
`properties?` | [ChainProperties](../interfaces/_interfaceregistry_.interfaceregistry.md#chainproperties) |

**Returns:** *void*

___

###  setMetadata

▸ **setMetadata**(`metadata`: [RegistryMetadata](../interfaces/_types_registry_.registrymetadata.md)): *void*

*Implementation of [Registry](../interfaces/_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:283](https://github.com/polkadot-js/api/blob/bdd1e4c917/packages/types/src/create/registry.ts#L283)*

**Parameters:**

Name | Type |
------ | ------ |
`metadata` | [RegistryMetadata](../interfaces/_types_registry_.registrymetadata.md) |

**Returns:** *void*
