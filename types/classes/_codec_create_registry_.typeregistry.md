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
* [hasClass](_codec_create_registry_.typeregistry.md#hasclass)
* [hasDef](_codec_create_registry_.typeregistry.md#hasdef)
* [hasType](_codec_create_registry_.typeregistry.md#hastype)
* [register](_codec_create_registry_.typeregistry.md#register)
* [setMetadata](_codec_create_registry_.typeregistry.md#setmetadata)

## Constructors

###  constructor

\+ **new TypeRegistry**(): *[TypeRegistry](_codec_create_registry_.typeregistry.md)*

*Defined in [packages/types/src/codec/create/registry.ts:86](https://github.com/polkadot-js/api/blob/9c913fb482/packages/types/src/codec/create/registry.ts#L86)*

**Returns:** *[TypeRegistry](_codec_create_registry_.typeregistry.md)*

## Methods

###  findMetaCall

▸ **findMetaCall**(`callIndex`: [Uint8Array](_codec_raw_.raw.md#static-uint8array)): *CallFunction*

*Defined in [packages/types/src/codec/create/registry.ts:104](https://github.com/polkadot-js/api/blob/9c913fb482/packages/types/src/codec/create/registry.ts#L104)*

**Parameters:**

Name | Type |
------ | ------ |
`callIndex` | [Uint8Array](_codec_raw_.raw.md#static-uint8array) |

**Returns:** *CallFunction*

___

###  findMetaError

▸ **findMetaError**(`errorIndex`: [Uint8Array](_codec_raw_.raw.md#static-uint8array)): *RegistryError*

*Defined in [packages/types/src/codec/create/registry.ts:113](https://github.com/polkadot-js/api/blob/9c913fb482/packages/types/src/codec/create/registry.ts#L113)*

**Parameters:**

Name | Type |
------ | ------ |
`errorIndex` | [Uint8Array](_codec_raw_.raw.md#static-uint8array) |

**Returns:** *RegistryError*

___

###  findMetaEvent

▸ **findMetaEvent**(`eventIndex`: [Uint8Array](_codec_raw_.raw.md#static-uint8array)): *Constructor‹[EventData](_primitive_generic_event_.eventdata.md)›*

*Defined in [packages/types/src/codec/create/registry.ts:122](https://github.com/polkadot-js/api/blob/9c913fb482/packages/types/src/codec/create/registry.ts#L122)*

**Parameters:**

Name | Type |
------ | ------ |
`eventIndex` | [Uint8Array](_codec_raw_.raw.md#static-uint8array) |

**Returns:** *Constructor‹[EventData](_primitive_generic_event_.eventdata.md)›*

___

###  get

▸ **get**<**T**>(`name`: string): *Constructor‹T› | undefined*

*Defined in [packages/types/src/codec/create/registry.ts:131](https://github.com/polkadot-js/api/blob/9c913fb482/packages/types/src/codec/create/registry.ts#L131)*

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

*Defined in [packages/types/src/codec/create/registry.ts:154](https://github.com/polkadot-js/api/blob/9c913fb482/packages/types/src/codec/create/registry.ts#L154)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *string | undefined*

___

###  getOrThrow

▸ **getOrThrow**<**T**>(`name`: string, `msg?`: undefined | string): *Constructor‹T›*

*Defined in [packages/types/src/codec/create/registry.ts:158](https://github.com/polkadot-js/api/blob/9c913fb482/packages/types/src/codec/create/registry.ts#L158)*

**Type parameters:**

▪ **T**: *Codec*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`msg?` | undefined &#124; string |

**Returns:** *Constructor‹T›*

___

###  hasClass

▸ **hasClass**(`name`: string): *boolean*

*Defined in [packages/types/src/codec/create/registry.ts:168](https://github.com/polkadot-js/api/blob/9c913fb482/packages/types/src/codec/create/registry.ts#L168)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*

___

###  hasDef

▸ **hasDef**(`name`: string): *boolean*

*Defined in [packages/types/src/codec/create/registry.ts:172](https://github.com/polkadot-js/api/blob/9c913fb482/packages/types/src/codec/create/registry.ts#L172)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*

___

###  hasType

▸ **hasType**(`name`: string): *boolean*

*Defined in [packages/types/src/codec/create/registry.ts:176](https://github.com/polkadot-js/api/blob/9c913fb482/packages/types/src/codec/create/registry.ts#L176)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*

___

###  register

▸ **register**(`type`: Constructor | RegistryTypes): *void*

*Defined in [packages/types/src/codec/create/registry.ts:180](https://github.com/polkadot-js/api/blob/9c913fb482/packages/types/src/codec/create/registry.ts#L180)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | Constructor &#124; RegistryTypes |

**Returns:** *void*

▸ **register**(`name`: string, `type`: Constructor): *void*

*Defined in [packages/types/src/codec/create/registry.ts:183](https://github.com/polkadot-js/api/blob/9c913fb482/packages/types/src/codec/create/registry.ts#L183)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`type` | Constructor |

**Returns:** *void*

___

###  setMetadata

▸ **setMetadata**(`metadata`: RegistryMetadata): *void*

*Defined in [packages/types/src/codec/create/registry.ts:220](https://github.com/polkadot-js/api/blob/9c913fb482/packages/types/src/codec/create/registry.ts#L220)*

**Parameters:**

Name | Type |
------ | ------ |
`metadata` | RegistryMetadata |

**Returns:** *void*
