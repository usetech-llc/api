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

*Defined in [packages/types/src/codec/create/registry.ts:69](https://github.com/polkadot-js/api/blob/762b16ea13/packages/types/src/codec/create/registry.ts#L69)*

**Returns:** *[TypeRegistry](_codec_create_registry_.typeregistry.md)*

## Methods

###  findMetaCall

▸ **findMetaCall**(`callIndex`: Uint8Array): *[CallFunction](../interfaces/_types_.callfunction.md)*

*Implementation of [Registry](../interfaces/_types_.registry.md)*

*Defined in [packages/types/src/codec/create/registry.ts:87](https://github.com/polkadot-js/api/blob/762b16ea13/packages/types/src/codec/create/registry.ts#L87)*

**Parameters:**

Name | Type |
------ | ------ |
`callIndex` | Uint8Array |

**Returns:** *[CallFunction](../interfaces/_types_.callfunction.md)*

___

###  findMetaEvent

▸ **findMetaEvent**(`eventIndex`: Uint8Array): *[Constructor](../interfaces/_types_.constructor.md)‹[EventData](_primitive_generic_event_.eventdata.md)›*

*Implementation of [Registry](../interfaces/_types_.registry.md)*

*Defined in [packages/types/src/codec/create/registry.ts:93](https://github.com/polkadot-js/api/blob/762b16ea13/packages/types/src/codec/create/registry.ts#L93)*

**Parameters:**

Name | Type |
------ | ------ |
`eventIndex` | Uint8Array |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹[EventData](_primitive_generic_event_.eventdata.md)›*

___

###  get

▸ **get**<**T**>(`name`: string): *[Constructor](../interfaces/_types_.constructor.md)‹T› | undefined*

*Implementation of [Registry](../interfaces/_types_.registry.md)*

*Defined in [packages/types/src/codec/create/registry.ts:103](https://github.com/polkadot-js/api/blob/762b16ea13/packages/types/src/codec/create/registry.ts#L103)*

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

*Defined in [packages/types/src/codec/create/registry.ts:126](https://github.com/polkadot-js/api/blob/762b16ea13/packages/types/src/codec/create/registry.ts#L126)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *string | undefined*

___

###  getOrThrow

▸ **getOrThrow**<**T**>(`name`: string, `msg?`: undefined | string): *[Constructor](../interfaces/_types_.constructor.md)‹T›*

*Implementation of [Registry](../interfaces/_types_.registry.md)*

*Defined in [packages/types/src/codec/create/registry.ts:130](https://github.com/polkadot-js/api/blob/762b16ea13/packages/types/src/codec/create/registry.ts#L130)*

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

*Defined in [packages/types/src/codec/create/registry.ts:140](https://github.com/polkadot-js/api/blob/762b16ea13/packages/types/src/codec/create/registry.ts#L140)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*

___

###  hasDef

▸ **hasDef**(`name`: string): *boolean*

*Implementation of [Registry](../interfaces/_types_.registry.md)*

*Defined in [packages/types/src/codec/create/registry.ts:144](https://github.com/polkadot-js/api/blob/762b16ea13/packages/types/src/codec/create/registry.ts#L144)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*

___

###  hasType

▸ **hasType**(`name`: string): *boolean*

*Implementation of [Registry](../interfaces/_types_.registry.md)*

*Defined in [packages/types/src/codec/create/registry.ts:148](https://github.com/polkadot-js/api/blob/762b16ea13/packages/types/src/codec/create/registry.ts#L148)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*

___

###  register

▸ **register**(`type`: [Constructor](../interfaces/_types_.constructor.md) | [RegistryTypes](../modules/_types_.md#registrytypes)): *void*

*Implementation of [Registry](../interfaces/_types_.registry.md)*

*Defined in [packages/types/src/codec/create/registry.ts:152](https://github.com/polkadot-js/api/blob/762b16ea13/packages/types/src/codec/create/registry.ts#L152)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | [Constructor](../interfaces/_types_.constructor.md) &#124; [RegistryTypes](../modules/_types_.md#registrytypes) |

**Returns:** *void*

▸ **register**(`name`: string, `type`: [Constructor](../interfaces/_types_.constructor.md)): *void*

*Implementation of [Registry](../interfaces/_types_.registry.md)*

*Defined in [packages/types/src/codec/create/registry.ts:155](https://github.com/polkadot-js/api/blob/762b16ea13/packages/types/src/codec/create/registry.ts#L155)*

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

*Defined in [packages/types/src/codec/create/registry.ts:192](https://github.com/polkadot-js/api/blob/762b16ea13/packages/types/src/codec/create/registry.ts#L192)*

**Parameters:**

Name | Type |
------ | ------ |
`metadata` | [RegistryMetadata](../interfaces/_types_.registrymetadata.md) |

**Returns:** *void*
