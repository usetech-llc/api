[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types/registry"](../modules/_types_registry_.md) › [Registry](_types_registry_.registry.md)

# Interface: Registry

## Hierarchy

* **Registry**

## Implemented by

* [TypeRegistry](../classes/_create_registry_.typeregistry.md)

## Index

### Properties

* [chainDecimals](_types_registry_.registry.md#chaindecimals)
* [chainSS58](_types_registry_.registry.md#chainss58)
* [chainToken](_types_registry_.registry.md#chaintoken)

### Methods

* [findMetaCall](_types_registry_.registry.md#findmetacall)
* [findMetaError](_types_registry_.registry.md#findmetaerror)
* [findMetaEvent](_types_registry_.registry.md#findmetaevent)
* [get](_types_registry_.registry.md#get)
* [getChainProperties](_types_registry_.registry.md#getchainproperties)
* [getDefinition](_types_registry_.registry.md#getdefinition)
* [getOrThrow](_types_registry_.registry.md#getorthrow)
* [getOrUnknown](_types_registry_.registry.md#getorunknown)
* [getSignedExtensionExtra](_types_registry_.registry.md#getsignedextensionextra)
* [getSignedExtensionTypes](_types_registry_.registry.md#getsignedextensiontypes)
* [hasClass](_types_registry_.registry.md#hasclass)
* [hasDef](_types_registry_.registry.md#hasdef)
* [hasType](_types_registry_.registry.md#hastype)
* [register](_types_registry_.registry.md#register)
* [setChainProperties](_types_registry_.registry.md#setchainproperties)
* [setMetadata](_types_registry_.registry.md#setmetadata)

## Properties

###  chainDecimals

• **chainDecimals**: *number*

*Defined in [packages/types/src/types/registry.ts:85](https://github.com/polkadot-js/api/blob/cc5b5c81c9/packages/types/src/types/registry.ts#L85)*

___

###  chainSS58

• **chainSS58**: *number | undefined*

*Defined in [packages/types/src/types/registry.ts:86](https://github.com/polkadot-js/api/blob/cc5b5c81c9/packages/types/src/types/registry.ts#L86)*

___

###  chainToken

• **chainToken**: *string*

*Defined in [packages/types/src/types/registry.ts:87](https://github.com/polkadot-js/api/blob/cc5b5c81c9/packages/types/src/types/registry.ts#L87)*

## Methods

###  findMetaCall

▸ **findMetaCall**(`callIndex`: [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)): *[CallFunction](_types_calls_.callfunction.md)*

*Defined in [packages/types/src/types/registry.ts:89](https://github.com/polkadot-js/api/blob/cc5b5c81c9/packages/types/src/types/registry.ts#L89)*

**Parameters:**

Name | Type |
------ | ------ |
`callIndex` | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) |

**Returns:** *[CallFunction](_types_calls_.callfunction.md)*

___

###  findMetaError

▸ **findMetaError**(`errorIndex`: [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)): *any*

*Defined in [packages/types/src/types/registry.ts:90](https://github.com/polkadot-js/api/blob/cc5b5c81c9/packages/types/src/types/registry.ts#L90)*

**Parameters:**

Name | Type |
------ | ------ |
`errorIndex` | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) |

**Returns:** *any*

___

###  findMetaEvent

▸ **findMetaEvent**(`eventIndex`: [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)): *[Constructor](_types_codec_.constructor.md)‹any›*

*Defined in [packages/types/src/types/registry.ts:93](https://github.com/polkadot-js/api/blob/cc5b5c81c9/packages/types/src/types/registry.ts#L93)*

**Parameters:**

Name | Type |
------ | ------ |
`eventIndex` | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) |

**Returns:** *[Constructor](_types_codec_.constructor.md)‹any›*

___

###  get

▸ **get**<**T**>(`name`: string, `withUnknown?`: undefined | false | true): *[Constructor](_types_codec_.constructor.md)‹T› | undefined*

*Defined in [packages/types/src/types/registry.ts:95](https://github.com/polkadot-js/api/blob/cc5b5c81c9/packages/types/src/types/registry.ts#L95)*

**Type parameters:**

▪ **T**: *[Codec](_types_codec_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`withUnknown?` | undefined &#124; false &#124; true |

**Returns:** *[Constructor](_types_codec_.constructor.md)‹T› | undefined*

___

###  getChainProperties

▸ **getChainProperties**(): *ChainProperties | undefined*

*Defined in [packages/types/src/types/registry.ts:96](https://github.com/polkadot-js/api/blob/cc5b5c81c9/packages/types/src/types/registry.ts#L96)*

**Returns:** *ChainProperties | undefined*

___

###  getDefinition

▸ **getDefinition**(`name`: string): *string | undefined*

*Defined in [packages/types/src/types/registry.ts:97](https://github.com/polkadot-js/api/blob/cc5b5c81c9/packages/types/src/types/registry.ts#L97)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *string | undefined*

___

###  getOrThrow

▸ **getOrThrow**<**T**>(`name`: string, `msg?`: undefined | string): *[Constructor](_types_codec_.constructor.md)‹T›*

*Defined in [packages/types/src/types/registry.ts:98](https://github.com/polkadot-js/api/blob/cc5b5c81c9/packages/types/src/types/registry.ts#L98)*

**Type parameters:**

▪ **T**: *[Codec](_types_codec_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`msg?` | undefined &#124; string |

**Returns:** *[Constructor](_types_codec_.constructor.md)‹T›*

___

###  getOrUnknown

▸ **getOrUnknown**<**T**>(`name`: string): *[Constructor](_types_codec_.constructor.md)‹T›*

*Defined in [packages/types/src/types/registry.ts:99](https://github.com/polkadot-js/api/blob/cc5b5c81c9/packages/types/src/types/registry.ts#L99)*

**Type parameters:**

▪ **T**: *[Codec](_types_codec_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *[Constructor](_types_codec_.constructor.md)‹T›*

___

###  getSignedExtensionExtra

▸ **getSignedExtensionExtra**(): *Record‹string, [InterfaceTypes](../modules/_types_helpers_.md#interfacetypes)›*

*Defined in [packages/types/src/types/registry.ts:100](https://github.com/polkadot-js/api/blob/cc5b5c81c9/packages/types/src/types/registry.ts#L100)*

**Returns:** *Record‹string, [InterfaceTypes](../modules/_types_helpers_.md#interfacetypes)›*

___

###  getSignedExtensionTypes

▸ **getSignedExtensionTypes**(): *Record‹string, [InterfaceTypes](../modules/_types_helpers_.md#interfacetypes)›*

*Defined in [packages/types/src/types/registry.ts:101](https://github.com/polkadot-js/api/blob/cc5b5c81c9/packages/types/src/types/registry.ts#L101)*

**Returns:** *Record‹string, [InterfaceTypes](../modules/_types_helpers_.md#interfacetypes)›*

___

###  hasClass

▸ **hasClass**(`name`: string): *boolean*

*Defined in [packages/types/src/types/registry.ts:102](https://github.com/polkadot-js/api/blob/cc5b5c81c9/packages/types/src/types/registry.ts#L102)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*

___

###  hasDef

▸ **hasDef**(`name`: string): *boolean*

*Defined in [packages/types/src/types/registry.ts:103](https://github.com/polkadot-js/api/blob/cc5b5c81c9/packages/types/src/types/registry.ts#L103)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*

___

###  hasType

▸ **hasType**(`name`: string): *boolean*

*Defined in [packages/types/src/types/registry.ts:104](https://github.com/polkadot-js/api/blob/cc5b5c81c9/packages/types/src/types/registry.ts#L104)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*

___

###  register

▸ **register**(`type`: [Constructor](_types_codec_.constructor.md) | [RegistryTypes](../modules/_types_registry_.md#registrytypes)): *void*

*Defined in [packages/types/src/types/registry.ts:105](https://github.com/polkadot-js/api/blob/cc5b5c81c9/packages/types/src/types/registry.ts#L105)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | [Constructor](_types_codec_.constructor.md) &#124; [RegistryTypes](../modules/_types_registry_.md#registrytypes) |

**Returns:** *void*

▸ **register**(`name`: string, `type`: [Constructor](_types_codec_.constructor.md)): *void*

*Defined in [packages/types/src/types/registry.ts:106](https://github.com/polkadot-js/api/blob/cc5b5c81c9/packages/types/src/types/registry.ts#L106)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`type` | [Constructor](_types_codec_.constructor.md) |

**Returns:** *void*

▸ **register**(`arg1`: string | [Constructor](_types_codec_.constructor.md) | [RegistryTypes](../modules/_types_registry_.md#registrytypes), `arg2?`: [Constructor](_types_codec_.constructor.md)): *void*

*Defined in [packages/types/src/types/registry.ts:107](https://github.com/polkadot-js/api/blob/cc5b5c81c9/packages/types/src/types/registry.ts#L107)*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | string &#124; [Constructor](_types_codec_.constructor.md) &#124; [RegistryTypes](../modules/_types_registry_.md#registrytypes) |
`arg2?` | [Constructor](_types_codec_.constructor.md) |

**Returns:** *void*

___

###  setChainProperties

▸ **setChainProperties**(`properties?`: [ChainProperties](_interfaceregistry_.interfaceregistry.md#chainproperties)): *void*

*Defined in [packages/types/src/types/registry.ts:108](https://github.com/polkadot-js/api/blob/cc5b5c81c9/packages/types/src/types/registry.ts#L108)*

**Parameters:**

Name | Type |
------ | ------ |
`properties?` | [ChainProperties](_interfaceregistry_.interfaceregistry.md#chainproperties) |

**Returns:** *void*

___

###  setMetadata

▸ **setMetadata**(`metadata`: [RegistryMetadata](_types_registry_.registrymetadata.md)): *void*

*Defined in [packages/types/src/types/registry.ts:109](https://github.com/polkadot-js/api/blob/cc5b5c81c9/packages/types/src/types/registry.ts#L109)*

**Parameters:**

Name | Type |
------ | ------ |
`metadata` | [RegistryMetadata](_types_registry_.registrymetadata.md) |

**Returns:** *void*
