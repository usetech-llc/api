[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["codec/create/registry"](../modules/_codec_create_registry_.md) › [TypeRegistry](_codec_create_registry_.typeregistry.md)

# Class: TypeRegistry

## Hierarchy

* **TypeRegistry**

## Implements

* Registry

## Index

### Constructors

* [constructor](_codec_create_registry_.typeregistry.md#constructor)

### Accessors

* [chainDecimals](_codec_create_registry_.typeregistry.md#chaindecimals)
* [chainSS58](_codec_create_registry_.typeregistry.md#chainss58)
* [chainToken](_codec_create_registry_.typeregistry.md#chaintoken)

### Methods

* [findMetaCall](_codec_create_registry_.typeregistry.md#findmetacall)
* [findMetaError](_codec_create_registry_.typeregistry.md#findmetaerror)
* [findMetaEvent](_codec_create_registry_.typeregistry.md#findmetaevent)
* [get](_codec_create_registry_.typeregistry.md#get)
* [getChainProperties](_codec_create_registry_.typeregistry.md#getchainproperties)
* [getDefinition](_codec_create_registry_.typeregistry.md#getdefinition)
* [getOrThrow](_codec_create_registry_.typeregistry.md#getorthrow)
* [getSignedExtensionExtra](_codec_create_registry_.typeregistry.md#getsignedextensionextra)
* [getSignedExtensionTypes](_codec_create_registry_.typeregistry.md#getsignedextensiontypes)
* [hasClass](_codec_create_registry_.typeregistry.md#hasclass)
* [hasDef](_codec_create_registry_.typeregistry.md#hasdef)
* [hasType](_codec_create_registry_.typeregistry.md#hastype)
* [register](_codec_create_registry_.typeregistry.md#register)
* [setChainProperties](_codec_create_registry_.typeregistry.md#setchainproperties)
* [setMetadata](_codec_create_registry_.typeregistry.md#setmetadata)

## Constructors

###  constructor

\+ **new TypeRegistry**(): *[TypeRegistry](_codec_create_registry_.typeregistry.md)*

*Defined in [packages/types/src/codec/create/registry.ts:92](https://github.com/polkadot-js/api/blob/1e975c68ee/packages/types/src/codec/create/registry.ts#L92)*

**Returns:** *[TypeRegistry](_codec_create_registry_.typeregistry.md)*

## Accessors

###  chainDecimals

• **get chainDecimals**(): *number*

*Defined in [packages/types/src/codec/create/registry.ts:110](https://github.com/polkadot-js/api/blob/1e975c68ee/packages/types/src/codec/create/registry.ts#L110)*

**Returns:** *number*

___

###  chainSS58

• **get chainSS58**(): *number | undefined*

*Defined in [packages/types/src/codec/create/registry.ts:116](https://github.com/polkadot-js/api/blob/1e975c68ee/packages/types/src/codec/create/registry.ts#L116)*

**Returns:** *number | undefined*

___

###  chainToken

• **get chainToken**(): *string*

*Defined in [packages/types/src/codec/create/registry.ts:122](https://github.com/polkadot-js/api/blob/1e975c68ee/packages/types/src/codec/create/registry.ts#L122)*

**Returns:** *string*

## Methods

###  findMetaCall

▸ **findMetaCall**(`callIndex`: [Uint8Array](_codec_raw_.raw.md#static-uint8array)): *CallFunction*

*Defined in [packages/types/src/codec/create/registry.ts:129](https://github.com/polkadot-js/api/blob/1e975c68ee/packages/types/src/codec/create/registry.ts#L129)*

**Parameters:**

Name | Type |
------ | ------ |
`callIndex` | [Uint8Array](_codec_raw_.raw.md#static-uint8array) |

**Returns:** *CallFunction*

___

###  findMetaError

▸ **findMetaError**(`errorIndex`: [Uint8Array](_codec_raw_.raw.md#static-uint8array) | DispatchErrorModule): *RegistryError*

*Defined in [packages/types/src/codec/create/registry.ts:139](https://github.com/polkadot-js/api/blob/1e975c68ee/packages/types/src/codec/create/registry.ts#L139)*

**Parameters:**

Name | Type |
------ | ------ |
`errorIndex` | [Uint8Array](_codec_raw_.raw.md#static-uint8array) &#124; DispatchErrorModule |

**Returns:** *RegistryError*

___

###  findMetaEvent

▸ **findMetaEvent**(`eventIndex`: [Uint8Array](_codec_raw_.raw.md#static-uint8array)): *Constructor‹[EventData](_primitive_generic_event_.eventdata.md)›*

*Defined in [packages/types/src/codec/create/registry.ts:152](https://github.com/polkadot-js/api/blob/1e975c68ee/packages/types/src/codec/create/registry.ts#L152)*

**Parameters:**

Name | Type |
------ | ------ |
`eventIndex` | [Uint8Array](_codec_raw_.raw.md#static-uint8array) |

**Returns:** *Constructor‹[EventData](_primitive_generic_event_.eventdata.md)›*

___

###  get

▸ **get**<**T**>(`name`: string): *Constructor‹T› | undefined*

*Defined in [packages/types/src/codec/create/registry.ts:161](https://github.com/polkadot-js/api/blob/1e975c68ee/packages/types/src/codec/create/registry.ts#L161)*

**Type parameters:**

▪ **T**: *Codec*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *Constructor‹T› | undefined*

___

###  getChainProperties

▸ **getChainProperties**(): *ChainProperties | undefined*

*Defined in [packages/types/src/codec/create/registry.ts:184](https://github.com/polkadot-js/api/blob/1e975c68ee/packages/types/src/codec/create/registry.ts#L184)*

**Returns:** *ChainProperties | undefined*

___

###  getDefinition

▸ **getDefinition**(`name`: string): *string | undefined*

*Defined in [packages/types/src/codec/create/registry.ts:188](https://github.com/polkadot-js/api/blob/1e975c68ee/packages/types/src/codec/create/registry.ts#L188)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *string | undefined*

___

###  getOrThrow

▸ **getOrThrow**<**T**>(`name`: string, `msg?`: undefined | string): *Constructor‹T›*

*Defined in [packages/types/src/codec/create/registry.ts:192](https://github.com/polkadot-js/api/blob/1e975c68ee/packages/types/src/codec/create/registry.ts#L192)*

**Type parameters:**

▪ **T**: *Codec*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`msg?` | undefined &#124; string |

**Returns:** *Constructor‹T›*

___

###  getSignedExtensionExtra

▸ **getSignedExtensionExtra**(): *Record‹string, InterfaceTypes›*

*Defined in [packages/types/src/codec/create/registry.ts:202](https://github.com/polkadot-js/api/blob/1e975c68ee/packages/types/src/codec/create/registry.ts#L202)*

**Returns:** *Record‹string, InterfaceTypes›*

___

###  getSignedExtensionTypes

▸ **getSignedExtensionTypes**(): *Record‹string, InterfaceTypes›*

*Defined in [packages/types/src/codec/create/registry.ts:206](https://github.com/polkadot-js/api/blob/1e975c68ee/packages/types/src/codec/create/registry.ts#L206)*

**Returns:** *Record‹string, InterfaceTypes›*

___

###  hasClass

▸ **hasClass**(`name`: string): *boolean*

*Defined in [packages/types/src/codec/create/registry.ts:210](https://github.com/polkadot-js/api/blob/1e975c68ee/packages/types/src/codec/create/registry.ts#L210)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*

___

###  hasDef

▸ **hasDef**(`name`: string): *boolean*

*Defined in [packages/types/src/codec/create/registry.ts:214](https://github.com/polkadot-js/api/blob/1e975c68ee/packages/types/src/codec/create/registry.ts#L214)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*

___

###  hasType

▸ **hasType**(`name`: string): *boolean*

*Defined in [packages/types/src/codec/create/registry.ts:218](https://github.com/polkadot-js/api/blob/1e975c68ee/packages/types/src/codec/create/registry.ts#L218)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*

___

###  register

▸ **register**(`type`: Constructor | RegistryTypes): *void*

*Defined in [packages/types/src/codec/create/registry.ts:222](https://github.com/polkadot-js/api/blob/1e975c68ee/packages/types/src/codec/create/registry.ts#L222)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | Constructor &#124; RegistryTypes |

**Returns:** *void*

▸ **register**(`name`: string, `type`: Constructor): *void*

*Defined in [packages/types/src/codec/create/registry.ts:225](https://github.com/polkadot-js/api/blob/1e975c68ee/packages/types/src/codec/create/registry.ts#L225)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`type` | Constructor |

**Returns:** *void*

___

###  setChainProperties

▸ **setChainProperties**(`properties?`: [ChainProperties](../interfaces/_interfaceregistry_.interfaceregistry.md#chainproperties)): *void*

*Defined in [packages/types/src/codec/create/registry.ts:262](https://github.com/polkadot-js/api/blob/1e975c68ee/packages/types/src/codec/create/registry.ts#L262)*

**Parameters:**

Name | Type |
------ | ------ |
`properties?` | [ChainProperties](../interfaces/_interfaceregistry_.interfaceregistry.md#chainproperties) |

**Returns:** *void*

___

###  setMetadata

▸ **setMetadata**(`metadata`: RegistryMetadata): *void*

*Defined in [packages/types/src/codec/create/registry.ts:269](https://github.com/polkadot-js/api/blob/1e975c68ee/packages/types/src/codec/create/registry.ts#L269)*

**Parameters:**

Name | Type |
------ | ------ |
`metadata` | RegistryMetadata |

**Returns:** *void*
