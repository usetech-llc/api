[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["codec/create/registry"](../modules/_codec_create_registry_.md) › [TypeRegistry](_codec_create_registry_.typeregistry.md)

# Class: TypeRegistry

## Hierarchy

* **TypeRegistry**

## Implements

* [Registry](../interfaces/_types_.registry.md)

## Index

### Constructors

* [constructor](_codec_create_registry_.typeregistry.md#constructor)

### Methods

* [findMetaCall](_codec_create_registry_.typeregistry.md#findmetacall)
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

*Defined in [packages/types/src/codec/create/registry.ts:70](https://github.com/polkadot-js/api/blob/0d2896630/packages/types/src/codec/create/registry.ts#L70)*

**Returns:** *[TypeRegistry](_codec_create_registry_.typeregistry.md)*

## Methods

###  findMetaCall

▸ **findMetaCall**(`callIndex`: Uint8Array): *[CallFunction](../interfaces/_types_.callfunction.md)*

*Implementation of [Registry](../interfaces/_types_.registry.md)*

*Defined in [packages/types/src/codec/create/registry.ts:88](https://github.com/polkadot-js/api/blob/0d2896630/packages/types/src/codec/create/registry.ts#L88)*

**Parameters:**

Name | Type |
------ | ------ |
`callIndex` | Uint8Array |

**Returns:** *[CallFunction](../interfaces/_types_.callfunction.md)*

___

###  findMetaEvent

▸ **findMetaEvent**(`eventIndex`: Uint8Array): *[Constructor](../interfaces/_types_.constructor.md)‹[EventData](_primitive_generic_event_.eventdata.md)›*

*Implementation of [Registry](../interfaces/_types_.registry.md)*

*Defined in [packages/types/src/codec/create/registry.ts:94](https://github.com/polkadot-js/api/blob/0d2896630/packages/types/src/codec/create/registry.ts#L94)*

**Parameters:**

Name | Type |
------ | ------ |
`eventIndex` | Uint8Array |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹[EventData](_primitive_generic_event_.eventdata.md)›*

___

###  get

▸ **get**<**T**>(`name`: string): *[Constructor](../interfaces/_types_.constructor.md)‹T› | undefined*

*Implementation of [Registry](../interfaces/_types_.registry.md)*

*Defined in [packages/types/src/codec/create/registry.ts:104](https://github.com/polkadot-js/api/blob/0d2896630/packages/types/src/codec/create/registry.ts#L104)*

**Type parameters:**

▪ **T**: *[Codec](../interfaces/_types_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹T› | undefined*

___

###  getDefinition

▸ **getDefinition**(`name`: string): *string | undefined*

*Defined in [packages/types/src/codec/create/registry.ts:127](https://github.com/polkadot-js/api/blob/0d2896630/packages/types/src/codec/create/registry.ts#L127)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *string | undefined*

___

###  getOrThrow

▸ **getOrThrow**<**T**>(`name`: string, `msg?`: undefined | string): *[Constructor](../interfaces/_types_.constructor.md)‹T›*

*Implementation of [Registry](../interfaces/_types_.registry.md)*

*Defined in [packages/types/src/codec/create/registry.ts:131](https://github.com/polkadot-js/api/blob/0d2896630/packages/types/src/codec/create/registry.ts#L131)*

**Type parameters:**

▪ **T**: *[Codec](../interfaces/_types_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`msg?` | undefined &#124; string |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹T›*

___

###  hasClass

▸ **hasClass**(`name`: string): *boolean*

*Implementation of [Registry](../interfaces/_types_.registry.md)*

*Defined in [packages/types/src/codec/create/registry.ts:141](https://github.com/polkadot-js/api/blob/0d2896630/packages/types/src/codec/create/registry.ts#L141)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*

___

###  hasDef

▸ **hasDef**(`name`: string): *boolean*

*Implementation of [Registry](../interfaces/_types_.registry.md)*

*Defined in [packages/types/src/codec/create/registry.ts:145](https://github.com/polkadot-js/api/blob/0d2896630/packages/types/src/codec/create/registry.ts#L145)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*

___

###  hasType

▸ **hasType**(`name`: string): *boolean*

*Implementation of [Registry](../interfaces/_types_.registry.md)*

*Defined in [packages/types/src/codec/create/registry.ts:149](https://github.com/polkadot-js/api/blob/0d2896630/packages/types/src/codec/create/registry.ts#L149)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*

___

###  register

▸ **register**(`type`: [Constructor](../interfaces/_types_.constructor.md) | [RegistryTypes](../modules/_types_.md#registrytypes)): *void*

*Implementation of [Registry](../interfaces/_types_.registry.md)*

*Defined in [packages/types/src/codec/create/registry.ts:153](https://github.com/polkadot-js/api/blob/0d2896630/packages/types/src/codec/create/registry.ts#L153)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | [Constructor](../interfaces/_types_.constructor.md) &#124; [RegistryTypes](../modules/_types_.md#registrytypes) |

**Returns:** *void*

▸ **register**(`name`: string, `type`: [Constructor](../interfaces/_types_.constructor.md)): *void*

*Implementation of [Registry](../interfaces/_types_.registry.md)*

*Defined in [packages/types/src/codec/create/registry.ts:156](https://github.com/polkadot-js/api/blob/0d2896630/packages/types/src/codec/create/registry.ts#L156)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`type` | [Constructor](../interfaces/_types_.constructor.md) |

**Returns:** *void*

___

###  setMetadata

▸ **setMetadata**(`metadata`: [RegistryMetadata](../interfaces/_types_.registrymetadata.md)): *void*

*Implementation of [Registry](../interfaces/_types_.registry.md)*

*Defined in [packages/types/src/codec/create/registry.ts:193](https://github.com/polkadot-js/api/blob/0d2896630/packages/types/src/codec/create/registry.ts#L193)*

**Parameters:**

Name | Type |
------ | ------ |
`metadata` | [RegistryMetadata](../interfaces/_types_.registrymetadata.md) |

**Returns:** *void*
