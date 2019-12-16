[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/contracts/types"](../modules/_interfaces_contracts_types_.md) › [PrefabWasmModuleReserved](_interfaces_contracts_types_.prefabwasmmodulereserved.md)

# Interface: PrefabWasmModuleReserved

Option<Null>

## Hierarchy

  ↳ [Option](../classes/_codec_option_.option.md)‹[Null](../classes/_primitive_null_.null.md)›

  ↳ **PrefabWasmModuleReserved**

## Implements

* [Codec](_types_.codec.md)

## Index

### Constructors

* [constructor](_interfaces_contracts_types_.prefabwasmmodulereserved.md#constructor)

### Properties

* [registry](_interfaces_contracts_types_.prefabwasmmodulereserved.md#registry)

### Accessors

* [encodedLength](_interfaces_contracts_types_.prefabwasmmodulereserved.md#encodedlength)
* [hash](_interfaces_contracts_types_.prefabwasmmodulereserved.md#hash)
* [isEmpty](_interfaces_contracts_types_.prefabwasmmodulereserved.md#isempty)
* [isNone](_interfaces_contracts_types_.prefabwasmmodulereserved.md#isnone)
* [isSome](_interfaces_contracts_types_.prefabwasmmodulereserved.md#issome)
* [value](_interfaces_contracts_types_.prefabwasmmodulereserved.md#value)

### Methods

* [eq](_interfaces_contracts_types_.prefabwasmmodulereserved.md#eq)
* [toHex](_interfaces_contracts_types_.prefabwasmmodulereserved.md#tohex)
* [toJSON](_interfaces_contracts_types_.prefabwasmmodulereserved.md#tojson)
* [toRawType](_interfaces_contracts_types_.prefabwasmmodulereserved.md#torawtype)
* [toString](_interfaces_contracts_types_.prefabwasmmodulereserved.md#tostring)
* [toU8a](_interfaces_contracts_types_.prefabwasmmodulereserved.md#tou8a)
* [unwrap](_interfaces_contracts_types_.prefabwasmmodulereserved.md#unwrap)
* [unwrapOr](_interfaces_contracts_types_.prefabwasmmodulereserved.md#unwrapor)
* [decodeOption](_interfaces_contracts_types_.prefabwasmmodulereserved.md#static-decodeoption)
* [with](_interfaces_contracts_types_.prefabwasmmodulereserved.md#static-with)

## Constructors

###  constructor

\+ **new PrefabWasmModuleReserved**(`registry`: [Registry](_types_.registry.md), `Type`: [Constructor](_types_.constructor.md) | [InterfaceTypes](../modules/_types_.md#interfacetypes), `value?`: any): *[PrefabWasmModuleReserved](_interfaces_contracts_types_.prefabwasmmodulereserved.md)*

*Inherited from [Option](../classes/_codec_option_.option.md).[constructor](../classes/_codec_option_.option.md#constructor)*

*Defined in [packages/types/src/codec/Option.ts:22](https://github.com/polkadot-js/api/blob/9e681c066/packages/types/src/codec/Option.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](_types_.registry.md) |
`Type` | [Constructor](_types_.constructor.md) &#124; [InterfaceTypes](../modules/_types_.md#interfacetypes) |
`value?` | any |

**Returns:** *[PrefabWasmModuleReserved](_interfaces_contracts_types_.prefabwasmmodulereserved.md)*

## Properties

###  registry

• **registry**: *[Registry](_types_.registry.md)*

*Inherited from [Base](../classes/_codec_base_.base.md).[registry](../classes/_codec_base_.base.md#registry)*

*Defined in [packages/types/src/codec/Base.ts:16](https://github.com/polkadot-js/api/blob/9e681c066/packages/types/src/codec/Base.ts#L16)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Option](../classes/_codec_option_.option.md).[encodedLength](../classes/_codec_option_.option.md#encodedlength)*

*Overrides [Base](../classes/_codec_base_.base.md).[encodedLength](../classes/_codec_base_.base.md#encodedlength)*

*Defined in [packages/types/src/codec/Option.ts:66](https://github.com/polkadot-js/api/blob/9e681c066/packages/types/src/codec/Option.ts#L66)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](_types_.ihash.md)*

*Inherited from [Base](../classes/_codec_base_.base.md).[hash](../classes/_codec_base_.base.md#hash)*

*Defined in [packages/types/src/codec/Base.ts:35](https://github.com/polkadot-js/api/blob/9e681c066/packages/types/src/codec/Base.ts#L35)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Option](../classes/_codec_option_.option.md).[isEmpty](../classes/_codec_option_.option.md#isempty)*

*Overrides [Base](../classes/_codec_base_.base.md).[isEmpty](../classes/_codec_base_.base.md#isempty)*

*Defined in [packages/types/src/codec/Option.ts:74](https://github.com/polkadot-js/api/blob/9e681c066/packages/types/src/codec/Option.ts#L74)*

**`description`** Checks if the Option has no value

**Returns:** *boolean*

___

###  isNone

• **get isNone**(): *boolean*

*Inherited from [Option](../classes/_codec_option_.option.md).[isNone](../classes/_codec_option_.option.md#isnone)*

*Defined in [packages/types/src/codec/Option.ts:81](https://github.com/polkadot-js/api/blob/9e681c066/packages/types/src/codec/Option.ts#L81)*

**`description`** Checks if the Option has no value

**Returns:** *boolean*

___

###  isSome

• **get isSome**(): *boolean*

*Inherited from [Option](../classes/_codec_option_.option.md).[isSome](../classes/_codec_option_.option.md#issome)*

*Defined in [packages/types/src/codec/Option.ts:88](https://github.com/polkadot-js/api/blob/9e681c066/packages/types/src/codec/Option.ts#L88)*

**`description`** Checks if the Option has a value

**Returns:** *boolean*

___

###  value

• **get value**(): *[Codec](_types_.codec.md)*

*Inherited from [Option](../classes/_codec_option_.option.md).[value](../classes/_codec_option_.option.md#value)*

*Defined in [packages/types/src/codec/Option.ts:95](https://github.com/polkadot-js/api/blob/9e681c066/packages/types/src/codec/Option.ts#L95)*

**`description`** The actual value for the Option

**Returns:** *[Codec](_types_.codec.md)*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Option](../classes/_codec_option_.option.md).[eq](../classes/_codec_option_.option.md#eq)*

*Overrides [Base](../classes/_codec_base_.base.md).[eq](../classes/_codec_base_.base.md#eq)*

*Defined in [packages/types/src/codec/Option.ts:102](https://github.com/polkadot-js/api/blob/9e681c066/packages/types/src/codec/Option.ts#L102)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Option](../classes/_codec_option_.option.md).[toHex](../classes/_codec_option_.option.md#tohex)*

*Overrides [Base](../classes/_codec_base_.base.md).[toHex](../classes/_codec_base_.base.md#tohex)*

*Defined in [packages/types/src/codec/Option.ts:113](https://github.com/polkadot-js/api/blob/9e681c066/packages/types/src/codec/Option.ts#L113)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_.md#anyjson)*

*Inherited from [Base](../classes/_codec_base_.base.md).[toJSON](../classes/_codec_base_.base.md#tojson)*

*Defined in [packages/types/src/codec/Base.ts:63](https://github.com/polkadot-js/api/blob/9e681c066/packages/types/src/codec/Base.ts#L63)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(`isBare?`: undefined | false | true): *string*

*Inherited from [Option](../classes/_codec_option_.option.md).[toRawType](../classes/_codec_option_.option.md#torawtype)*

*Overrides [Base](../classes/_codec_base_.base.md).[toRawType](../classes/_codec_base_.base.md#torawtype)*

*Defined in [packages/types/src/codec/Option.ts:124](https://github.com/polkadot-js/api/blob/9e681c066/packages/types/src/codec/Option.ts#L124)*

**`description`** Returns the base runtime type name for this instance

**Parameters:**

Name | Type |
------ | ------ |
`isBare?` | undefined &#124; false &#124; true |

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Base](../classes/_codec_base_.base.md).[toString](../classes/_codec_base_.base.md#tostring)*

*Defined in [packages/types/src/codec/Base.ts:70](https://github.com/polkadot-js/api/blob/9e681c066/packages/types/src/codec/Base.ts#L70)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from [Option](../classes/_codec_option_.option.md).[toU8a](../classes/_codec_option_.option.md#tou8a)*

*Overrides [Base](../classes/_codec_base_.base.md).[toU8a](../classes/_codec_base_.base.md#tou8a)*

*Defined in [packages/types/src/codec/Option.ts:136](https://github.com/polkadot-js/api/blob/9e681c066/packages/types/src/codec/Option.ts#L136)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*

___

###  unwrap

▸ **unwrap**(): *[Null](../classes/_primitive_null_.null.md)*

*Inherited from [Option](../classes/_codec_option_.option.md).[unwrap](../classes/_codec_option_.option.md#unwrap)*

*Defined in [packages/types/src/codec/Option.ts:154](https://github.com/polkadot-js/api/blob/9e681c066/packages/types/src/codec/Option.ts#L154)*

**`description`** Returns the value that the Option represents (if available), throws if null

**Returns:** *[Null](../classes/_primitive_null_.null.md)*

___

###  unwrapOr

▸ **unwrapOr**<**O**>(`defaultValue`: O): *[Null](../classes/_primitive_null_.null.md) | O*

*Inherited from [Option](../classes/_codec_option_.option.md).[unwrapOr](../classes/_codec_option_.option.md#unwrapor)*

*Defined in [packages/types/src/codec/Option.ts:166](https://github.com/polkadot-js/api/blob/9e681c066/packages/types/src/codec/Option.ts#L166)*

**`description`** Returns the value that the Option represents (if available) or defaultValue if none

**Type parameters:**

▪ **O**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`defaultValue` | O | The value to return if the option isNone  |

**Returns:** *[Null](../classes/_primitive_null_.null.md) | O*

___

### `Static` decodeOption

▸ **decodeOption**(`registry`: [Registry](_types_.registry.md), `Type`: [Constructor](_types_.constructor.md), `value?`: any): *[Codec](_types_.codec.md)*

*Inherited from [Option](../classes/_codec_option_.option.md).[decodeOption](../classes/_codec_option_.option.md#static-decodeoption)*

*Defined in [packages/types/src/codec/Option.ts:32](https://github.com/polkadot-js/api/blob/9e681c066/packages/types/src/codec/Option.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](_types_.registry.md) |
`Type` | [Constructor](_types_.constructor.md) |
`value?` | any |

**Returns:** *[Codec](_types_.codec.md)*

___

### `Static` with

▸ **with**<**O**>(`Type`: [Constructor](_types_.constructor.md) | [InterfaceTypes](../modules/_types_.md#interfacetypes)): *[Constructor](_types_.constructor.md)‹[Option](../classes/_codec_option_.option.md)‹O››*

*Inherited from [Option](../classes/_codec_option_.option.md).[with](../classes/_codec_option_.option.md#static-with)*

*Defined in [packages/types/src/codec/Option.ts:55](https://github.com/polkadot-js/api/blob/9e681c066/packages/types/src/codec/Option.ts#L55)*

**Type parameters:**

▪ **O**: *[Codec](_types_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`Type` | [Constructor](_types_.constructor.md) &#124; [InterfaceTypes](../modules/_types_.md#interfacetypes) |

**Returns:** *[Constructor](_types_.constructor.md)‹[Option](../classes/_codec_option_.option.md)‹O››*
