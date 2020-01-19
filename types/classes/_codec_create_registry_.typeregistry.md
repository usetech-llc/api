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

*Defined in [packages/types/src/codec/create/registry.ts:86](https://github.com/polkadot-js/api/blob/ffaea83e3e/packages/types/src/codec/create/registry.ts#L86)*

**Returns:** *[TypeRegistry](_codec_create_registry_.typeregistry.md)*

## Methods

###  findMetaCall

▸ **findMetaCall**(`callIndex`: Uint8Array): *[CallFunction](../interfaces/_types_.callfunction.md)*

*Implementation of [Registry](../interfaces/_types_.registry.md)*

*Defined in [packages/types/src/codec/create/registry.ts:104](https://github.com/polkadot-js/api/blob/ffaea83e3e/packages/types/src/codec/create/registry.ts#L104)*

**Parameters:**

Name | Type |
------ | ------ |
`callIndex` | Uint8Array |

**Returns:** *[CallFunction](../interfaces/_types_.callfunction.md)*

___

###  findMetaError

▸ **findMetaError**(`errorIndex`: Uint8Array): *[RegistryError](../interfaces/_types_.registryerror.md)*

*Implementation of [Registry](../interfaces/_types_.registry.md)*

*Defined in [packages/types/src/codec/create/registry.ts:113](https://github.com/polkadot-js/api/blob/ffaea83e3e/packages/types/src/codec/create/registry.ts#L113)*

**Parameters:**

Name | Type |
------ | ------ |
`errorIndex` | Uint8Array |

**Returns:** *[RegistryError](../interfaces/_types_.registryerror.md)*

___

###  findMetaEvent

▸ **findMetaEvent**(`eventIndex`: Uint8Array): *[Constructor](../interfaces/_types_.constructor.md)‹[EventData](_primitive_generic_event_.eventdata.md)›*

*Implementation of [Registry](../interfaces/_types_.registry.md)*

*Defined in [packages/types/src/codec/create/registry.ts:122](https://github.com/polkadot-js/api/blob/ffaea83e3e/packages/types/src/codec/create/registry.ts#L122)*

**Parameters:**

Name | Type |
------ | ------ |
`eventIndex` | Uint8Array |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹[EventData](_primitive_generic_event_.eventdata.md)›*

___

###  get

▸ **get**<**T**>(`name`: string): *[Constructor](../interfaces/_types_.constructor.md)‹T› | undefined*

*Implementation of [Registry](../interfaces/_types_.registry.md)*

*Defined in [packages/types/src/codec/create/registry.ts:131](https://github.com/polkadot-js/api/blob/ffaea83e3e/packages/types/src/codec/create/registry.ts#L131)*

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

*Defined in [packages/types/src/codec/create/registry.ts:154](https://github.com/polkadot-js/api/blob/ffaea83e3e/packages/types/src/codec/create/registry.ts#L154)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *string | undefined*

___

###  getOrThrow

▸ **getOrThrow**<**T**>(`name`: string, `msg?`: undefined | string): *[Constructor](../interfaces/_types_.constructor.md)‹T›*

*Implementation of [Registry](../interfaces/_types_.registry.md)*

*Defined in [packages/types/src/codec/create/registry.ts:158](https://github.com/polkadot-js/api/blob/ffaea83e3e/packages/types/src/codec/create/registry.ts#L158)*

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

*Defined in [packages/types/src/codec/create/registry.ts:168](https://github.com/polkadot-js/api/blob/ffaea83e3e/packages/types/src/codec/create/registry.ts#L168)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*

___

###  hasDef

▸ **hasDef**(`name`: string): *boolean*

*Implementation of [Registry](../interfaces/_types_.registry.md)*

*Defined in [packages/types/src/codec/create/registry.ts:172](https://github.com/polkadot-js/api/blob/ffaea83e3e/packages/types/src/codec/create/registry.ts#L172)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*

___

###  hasType

▸ **hasType**(`name`: string): *boolean*

*Implementation of [Registry](../interfaces/_types_.registry.md)*

*Defined in [packages/types/src/codec/create/registry.ts:176](https://github.com/polkadot-js/api/blob/ffaea83e3e/packages/types/src/codec/create/registry.ts#L176)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*

___

###  register

▸ **register**(`type`: [Constructor](../interfaces/_types_.constructor.md) | [RegistryTypes](../modules/_types_.md#registrytypes)): *void*

*Implementation of [Registry](../interfaces/_types_.registry.md)*

*Defined in [packages/types/src/codec/create/registry.ts:180](https://github.com/polkadot-js/api/blob/ffaea83e3e/packages/types/src/codec/create/registry.ts#L180)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | [Constructor](../interfaces/_types_.constructor.md) &#124; [RegistryTypes](../modules/_types_.md#registrytypes) |

**Returns:** *void*

▸ **register**(`name`: string, `type`: [Constructor](../interfaces/_types_.constructor.md)): *void*

*Implementation of [Registry](../interfaces/_types_.registry.md)*

*Defined in [packages/types/src/codec/create/registry.ts:183](https://github.com/polkadot-js/api/blob/ffaea83e3e/packages/types/src/codec/create/registry.ts#L183)*

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

*Defined in [packages/types/src/codec/create/registry.ts:220](https://github.com/polkadot-js/api/blob/ffaea83e3e/packages/types/src/codec/create/registry.ts#L220)*

**Parameters:**

Name | Type |
------ | ------ |
`metadata` | [RegistryMetadata](../interfaces/_types_.registrymetadata.md) |

**Returns:** *void*
