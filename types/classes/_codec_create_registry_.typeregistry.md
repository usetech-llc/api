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

*Defined in [packages/types/src/codec/create/registry.ts:90](https://github.com/polkadot-js/api/blob/79ee2ede3d/packages/types/src/codec/create/registry.ts#L90)*

**Returns:** *[TypeRegistry](_codec_create_registry_.typeregistry.md)*

## Methods

###  findMetaCall

▸ **findMetaCall**(`callIndex`: [Uint8Array](_codec_raw_.raw.md#static-uint8array)): *CallFunction*

*Defined in [packages/types/src/codec/create/registry.ts:108](https://github.com/polkadot-js/api/blob/79ee2ede3d/packages/types/src/codec/create/registry.ts#L108)*

**Parameters:**

Name | Type |
------ | ------ |
`callIndex` | [Uint8Array](_codec_raw_.raw.md#static-uint8array) |

**Returns:** *CallFunction*

___

###  findMetaError

▸ **findMetaError**(`errorIndex`: [Uint8Array](_codec_raw_.raw.md#static-uint8array) | DispatchErrorModule): *RegistryError*

*Defined in [packages/types/src/codec/create/registry.ts:117](https://github.com/polkadot-js/api/blob/79ee2ede3d/packages/types/src/codec/create/registry.ts#L117)*

**Parameters:**

Name | Type |
------ | ------ |
`errorIndex` | [Uint8Array](_codec_raw_.raw.md#static-uint8array) &#124; DispatchErrorModule |

**Returns:** *RegistryError*

___

###  findMetaEvent

▸ **findMetaEvent**(`eventIndex`: [Uint8Array](_codec_raw_.raw.md#static-uint8array)): *Constructor‹[EventData](_primitive_generic_event_.eventdata.md)›*

*Defined in [packages/types/src/codec/create/registry.ts:130](https://github.com/polkadot-js/api/blob/79ee2ede3d/packages/types/src/codec/create/registry.ts#L130)*

**Parameters:**

Name | Type |
------ | ------ |
`eventIndex` | [Uint8Array](_codec_raw_.raw.md#static-uint8array) |

**Returns:** *Constructor‹[EventData](_primitive_generic_event_.eventdata.md)›*

___

###  get

▸ **get**<**T**>(`name`: string): *Constructor‹T› | undefined*

*Defined in [packages/types/src/codec/create/registry.ts:139](https://github.com/polkadot-js/api/blob/79ee2ede3d/packages/types/src/codec/create/registry.ts#L139)*

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

*Defined in [packages/types/src/codec/create/registry.ts:162](https://github.com/polkadot-js/api/blob/79ee2ede3d/packages/types/src/codec/create/registry.ts#L162)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *string | undefined*

___

###  getOrThrow

▸ **getOrThrow**<**T**>(`name`: string, `msg?`: undefined | string): *Constructor‹T›*

*Defined in [packages/types/src/codec/create/registry.ts:166](https://github.com/polkadot-js/api/blob/79ee2ede3d/packages/types/src/codec/create/registry.ts#L166)*

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

*Defined in [packages/types/src/codec/create/registry.ts:176](https://github.com/polkadot-js/api/blob/79ee2ede3d/packages/types/src/codec/create/registry.ts#L176)*

**Returns:** *Record‹string, InterfaceTypes›*

___

###  getSignedExtensionTypes

▸ **getSignedExtensionTypes**(): *Record‹string, InterfaceTypes›*

*Defined in [packages/types/src/codec/create/registry.ts:180](https://github.com/polkadot-js/api/blob/79ee2ede3d/packages/types/src/codec/create/registry.ts#L180)*

**Returns:** *Record‹string, InterfaceTypes›*

___

###  hasClass

▸ **hasClass**(`name`: string): *boolean*

*Defined in [packages/types/src/codec/create/registry.ts:184](https://github.com/polkadot-js/api/blob/79ee2ede3d/packages/types/src/codec/create/registry.ts#L184)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*

___

###  hasDef

▸ **hasDef**(`name`: string): *boolean*

*Defined in [packages/types/src/codec/create/registry.ts:188](https://github.com/polkadot-js/api/blob/79ee2ede3d/packages/types/src/codec/create/registry.ts#L188)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*

___

###  hasType

▸ **hasType**(`name`: string): *boolean*

*Defined in [packages/types/src/codec/create/registry.ts:192](https://github.com/polkadot-js/api/blob/79ee2ede3d/packages/types/src/codec/create/registry.ts#L192)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*

___

###  register

▸ **register**(`type`: Constructor | RegistryTypes): *void*

*Defined in [packages/types/src/codec/create/registry.ts:196](https://github.com/polkadot-js/api/blob/79ee2ede3d/packages/types/src/codec/create/registry.ts#L196)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | Constructor &#124; RegistryTypes |

**Returns:** *void*

▸ **register**(`name`: string, `type`: Constructor): *void*

*Defined in [packages/types/src/codec/create/registry.ts:199](https://github.com/polkadot-js/api/blob/79ee2ede3d/packages/types/src/codec/create/registry.ts#L199)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`type` | Constructor |

**Returns:** *void*

___

###  setMetadata

▸ **setMetadata**(`metadata`: RegistryMetadata): *void*

*Defined in [packages/types/src/codec/create/registry.ts:236](https://github.com/polkadot-js/api/blob/79ee2ede3d/packages/types/src/codec/create/registry.ts#L236)*

**Parameters:**

Name | Type |
------ | ------ |
`metadata` | RegistryMetadata |

**Returns:** *void*
