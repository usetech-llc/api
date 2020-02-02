[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["codec/create/registry"](../modules/_codec_create_registry_.md) › [TypeRegistry](_codec_create_registry_.typeregistry.md)

# Class: TypeRegistry

## Hierarchy

* **TypeRegistry**

## Implements

* Registry

## Index

### Constructors

* [constructor](_codec_create_registry_.typeregistry.md#constructor)

### Methods

* [findMetaCall](_codec_create_registry_.typeregistry.md#findmetacall)
* [findMetaError](_codec_create_registry_.typeregistry.md#findmetaerror)
* [findMetaEvent](_codec_create_registry_.typeregistry.md#findmetaevent)
* [get](_codec_create_registry_.typeregistry.md#get)
* [getDefinition](_codec_create_registry_.typeregistry.md#getdefinition)
* [getOrThrow](_codec_create_registry_.typeregistry.md#getorthrow)
* [getSignedExtensionExtra](_codec_create_registry_.typeregistry.md#getsignedextensionextra)
* [getSignedExtensionTypes](_codec_create_registry_.typeregistry.md#getsignedextensiontypes)
* [hasClass](_codec_create_registry_.typeregistry.md#hasclass)
* [hasDef](_codec_create_registry_.typeregistry.md#hasdef)
* [hasType](_codec_create_registry_.typeregistry.md#hastype)
* [register](_codec_create_registry_.typeregistry.md#register)
* [setMetadata](_codec_create_registry_.typeregistry.md#setmetadata)

## Constructors

###  constructor

\+ **new TypeRegistry**(): *[TypeRegistry](_codec_create_registry_.typeregistry.md)*

*Defined in [packages/types/src/codec/create/registry.ts:89](https://github.com/polkadot-js/api/blob/9d4b0ea56a/packages/types/src/codec/create/registry.ts#L89)*

**Returns:** *[TypeRegistry](_codec_create_registry_.typeregistry.md)*

## Methods

###  findMetaCall

▸ **findMetaCall**(`callIndex`: [Uint8Array](_codec_raw_.raw.md#static-uint8array)): *CallFunction*

*Defined in [packages/types/src/codec/create/registry.ts:107](https://github.com/polkadot-js/api/blob/9d4b0ea56a/packages/types/src/codec/create/registry.ts#L107)*

**Parameters:**

Name | Type |
------ | ------ |
`callIndex` | [Uint8Array](_codec_raw_.raw.md#static-uint8array) |

**Returns:** *CallFunction*

___

###  findMetaError

▸ **findMetaError**(`errorIndex`: [Uint8Array](_codec_raw_.raw.md#static-uint8array)): *RegistryError*

*Defined in [packages/types/src/codec/create/registry.ts:116](https://github.com/polkadot-js/api/blob/9d4b0ea56a/packages/types/src/codec/create/registry.ts#L116)*

**Parameters:**

Name | Type |
------ | ------ |
`errorIndex` | [Uint8Array](_codec_raw_.raw.md#static-uint8array) |

**Returns:** *RegistryError*

___

###  findMetaEvent

▸ **findMetaEvent**(`eventIndex`: [Uint8Array](_codec_raw_.raw.md#static-uint8array)): *Constructor‹[EventData](_primitive_generic_event_.eventdata.md)›*

*Defined in [packages/types/src/codec/create/registry.ts:125](https://github.com/polkadot-js/api/blob/9d4b0ea56a/packages/types/src/codec/create/registry.ts#L125)*

**Parameters:**

Name | Type |
------ | ------ |
`eventIndex` | [Uint8Array](_codec_raw_.raw.md#static-uint8array) |

**Returns:** *Constructor‹[EventData](_primitive_generic_event_.eventdata.md)›*

___

###  get

▸ **get**<**T**>(`name`: string): *Constructor‹T› | undefined*

*Defined in [packages/types/src/codec/create/registry.ts:134](https://github.com/polkadot-js/api/blob/9d4b0ea56a/packages/types/src/codec/create/registry.ts#L134)*

**Type parameters:**

▪ **T**: *Codec*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *Constructor‹T› | undefined*

___

###  getDefinition

▸ **getDefinition**(`name`: string): *string | undefined*

*Defined in [packages/types/src/codec/create/registry.ts:157](https://github.com/polkadot-js/api/blob/9d4b0ea56a/packages/types/src/codec/create/registry.ts#L157)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *string | undefined*

___

###  getOrThrow

▸ **getOrThrow**<**T**>(`name`: string, `msg?`: undefined | string): *Constructor‹T›*

*Defined in [packages/types/src/codec/create/registry.ts:161](https://github.com/polkadot-js/api/blob/9d4b0ea56a/packages/types/src/codec/create/registry.ts#L161)*

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

*Defined in [packages/types/src/codec/create/registry.ts:171](https://github.com/polkadot-js/api/blob/9d4b0ea56a/packages/types/src/codec/create/registry.ts#L171)*

**Returns:** *Record‹string, InterfaceTypes›*

___

###  getSignedExtensionTypes

▸ **getSignedExtensionTypes**(): *Record‹string, InterfaceTypes›*

*Defined in [packages/types/src/codec/create/registry.ts:175](https://github.com/polkadot-js/api/blob/9d4b0ea56a/packages/types/src/codec/create/registry.ts#L175)*

**Returns:** *Record‹string, InterfaceTypes›*

___

###  hasClass

▸ **hasClass**(`name`: string): *boolean*

*Defined in [packages/types/src/codec/create/registry.ts:179](https://github.com/polkadot-js/api/blob/9d4b0ea56a/packages/types/src/codec/create/registry.ts#L179)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*

___

###  hasDef

▸ **hasDef**(`name`: string): *boolean*

*Defined in [packages/types/src/codec/create/registry.ts:183](https://github.com/polkadot-js/api/blob/9d4b0ea56a/packages/types/src/codec/create/registry.ts#L183)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*

___

###  hasType

▸ **hasType**(`name`: string): *boolean*

*Defined in [packages/types/src/codec/create/registry.ts:187](https://github.com/polkadot-js/api/blob/9d4b0ea56a/packages/types/src/codec/create/registry.ts#L187)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*

___

###  register

▸ **register**(`type`: Constructor | RegistryTypes): *void*

*Defined in [packages/types/src/codec/create/registry.ts:191](https://github.com/polkadot-js/api/blob/9d4b0ea56a/packages/types/src/codec/create/registry.ts#L191)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | Constructor &#124; RegistryTypes |

**Returns:** *void*

▸ **register**(`name`: string, `type`: Constructor): *void*

*Defined in [packages/types/src/codec/create/registry.ts:194](https://github.com/polkadot-js/api/blob/9d4b0ea56a/packages/types/src/codec/create/registry.ts#L194)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`type` | Constructor |

**Returns:** *void*

___

###  setMetadata

▸ **setMetadata**(`metadata`: RegistryMetadata): *void*

*Defined in [packages/types/src/codec/create/registry.ts:231](https://github.com/polkadot-js/api/blob/9d4b0ea56a/packages/types/src/codec/create/registry.ts#L231)*

**Parameters:**

Name | Type |
------ | ------ |
`metadata` | RegistryMetadata |

**Returns:** *void*
