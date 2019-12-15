[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/utility/types"](../modules/_interfaces_utility_types_.md) › [DispatchResultOf](_interfaces_utility_types_.dispatchresultof.md)

# Interface: DispatchResultOf

DispatchResult

## Hierarchy

  ↳ [DispatchResult](_interfaces_utility_types_.dispatchresult.md)

  ↳ **DispatchResultOf**

## Implements

* [Codec](_types_.codec.md)

## Index

### Constructors

* [constructor](_interfaces_utility_types_.dispatchresultof.md#constructor)

### Properties

* [asError](_interfaces_utility_types_.dispatchresultof.md#aserror)
* [isError](_interfaces_utility_types_.dispatchresultof.md#iserror)
* [isOk](_interfaces_utility_types_.dispatchresultof.md#isok)
* [registry](_interfaces_utility_types_.dispatchresultof.md#registry)

### Accessors

* [asOk](_interfaces_utility_types_.dispatchresultof.md#asok)
* [encodedLength](_interfaces_utility_types_.dispatchresultof.md#encodedlength)
* [hash](_interfaces_utility_types_.dispatchresultof.md#hash)
* [index](_interfaces_utility_types_.dispatchresultof.md#index)
* [isEmpty](_interfaces_utility_types_.dispatchresultof.md#isempty)
* [isNone](_interfaces_utility_types_.dispatchresultof.md#isnone)
* [isNull](_interfaces_utility_types_.dispatchresultof.md#isnull)
* [type](_interfaces_utility_types_.dispatchresultof.md#type)
* [value](_interfaces_utility_types_.dispatchresultof.md#value)

### Methods

* [eq](_interfaces_utility_types_.dispatchresultof.md#eq)
* [toHex](_interfaces_utility_types_.dispatchresultof.md#tohex)
* [toJSON](_interfaces_utility_types_.dispatchresultof.md#tojson)
* [toNumber](_interfaces_utility_types_.dispatchresultof.md#tonumber)
* [toRawType](_interfaces_utility_types_.dispatchresultof.md#torawtype)
* [toString](_interfaces_utility_types_.dispatchresultof.md#tostring)
* [toU8a](_interfaces_utility_types_.dispatchresultof.md#tou8a)
* [with](_interfaces_utility_types_.dispatchresultof.md#static-with)

## Constructors

###  constructor

\+ **new DispatchResultOf**(`registry`: [Registry](_types_.registry.md), `Ok`: [Constructor](_types_.constructor.md)‹[Null](../classes/_primitive_null_.null.md)› | [InterfaceTypes](../modules/_types_.md#interfacetypes), `Error`: [Constructor](_types_.constructor.md)‹[Text](../classes/_primitive_text_.text.md)› | [InterfaceTypes](../modules/_types_.md#interfacetypes), `value?`: any): *[DispatchResultOf](_interfaces_utility_types_.dispatchresultof.md)*

*Inherited from [Result](../classes/_codec_result_.result.md).[constructor](../classes/_codec_result_.result.md#constructor)*

*Overrides [Enum](../classes/_codec_enum_.enum.md).[constructor](../classes/_codec_enum_.enum.md#constructor)*

*Defined in [packages/types/src/codec/Result.ts:16](https://github.com/polkadot-js/api/blob/382f7d75c/packages/types/src/codec/Result.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](_types_.registry.md) |
`Ok` | [Constructor](_types_.constructor.md)‹[Null](../classes/_primitive_null_.null.md)› &#124; [InterfaceTypes](../modules/_types_.md#interfacetypes) |
`Error` | [Constructor](_types_.constructor.md)‹[Text](../classes/_primitive_text_.text.md)› &#124; [InterfaceTypes](../modules/_types_.md#interfacetypes) |
`value?` | any |

**Returns:** *[DispatchResultOf](_interfaces_utility_types_.dispatchresultof.md)*

## Properties

###  asError

• **asError**: *[Text](../classes/_primitive_text_.text.md)*

*Inherited from [DispatchResult](_interfaces_utility_types_.dispatchresult.md).[asError](_interfaces_utility_types_.dispatchresult.md#aserror)*

*Overrides [Result](../classes/_codec_result_.result.md).[asError](../classes/_codec_result_.result.md#aserror)*

*Defined in [packages/types/src/interfaces/utility/types.ts:12](https://github.com/polkadot-js/api/blob/382f7d75c/packages/types/src/interfaces/utility/types.ts#L12)*

Text

___

###  isError

• **isError**: *boolean*

*Inherited from [DispatchResult](_interfaces_utility_types_.dispatchresult.md).[isError](_interfaces_utility_types_.dispatchresult.md#iserror)*

*Overrides [Result](../classes/_codec_result_.result.md).[isError](../classes/_codec_result_.result.md#iserror)*

*Defined in [packages/types/src/interfaces/utility/types.ts:10](https://github.com/polkadot-js/api/blob/382f7d75c/packages/types/src/interfaces/utility/types.ts#L10)*

Error:: (Text)

___

###  isOk

• **isOk**: *boolean*

*Inherited from [DispatchResult](_interfaces_utility_types_.dispatchresult.md).[isOk](_interfaces_utility_types_.dispatchresult.md#isok)*

*Overrides [Result](../classes/_codec_result_.result.md).[isOk](../classes/_codec_result_.result.md#isok)*

*Defined in [packages/types/src/interfaces/utility/types.ts:14](https://github.com/polkadot-js/api/blob/382f7d75c/packages/types/src/interfaces/utility/types.ts#L14)*

Ok::

___

###  registry

• **registry**: *[Registry](_types_.registry.md)*

*Inherited from [Base](../classes/_codec_base_.base.md).[registry](../classes/_codec_base_.base.md#registry)*

*Defined in [packages/types/src/codec/Base.ts:16](https://github.com/polkadot-js/api/blob/382f7d75c/packages/types/src/codec/Base.ts#L16)*

## Accessors

###  asOk

• **get asOk**(): *[Null](../classes/_primitive_null_.null.md)*

*Inherited from [Result](../classes/_codec_result_.result.md).[asOk](../classes/_codec_result_.result.md#asok)*

*Defined in [packages/types/src/codec/Result.ts:42](https://github.com/polkadot-js/api/blob/382f7d75c/packages/types/src/codec/Result.ts#L42)*

**`description`** Returns the wrapper Ok value (if isOk)

**Returns:** *[Null](../classes/_primitive_null_.null.md)*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[encodedLength](../classes/_codec_enum_.enum.md#encodedlength)*

*Overrides [Base](../classes/_codec_base_.base.md).[encodedLength](../classes/_codec_base_.base.md#encodedlength)*

*Defined in [packages/types/src/codec/Enum.ts:173](https://github.com/polkadot-js/api/blob/382f7d75c/packages/types/src/codec/Enum.ts#L173)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](_types_.ihash.md)*

*Inherited from [Base](../classes/_codec_base_.base.md).[hash](../classes/_codec_base_.base.md#hash)*

*Defined in [packages/types/src/codec/Base.ts:35](https://github.com/polkadot-js/api/blob/382f7d75c/packages/types/src/codec/Base.ts#L35)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](_types_.ihash.md)*

___

###  index

• **get index**(): *number*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[index](../classes/_codec_enum_.enum.md#index)*

*Defined in [packages/types/src/codec/Enum.ts:180](https://github.com/polkadot-js/api/blob/382f7d75c/packages/types/src/codec/Enum.ts#L180)*

**`description`** The index of the metadata value

**Returns:** *number*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Result](../classes/_codec_result_.result.md).[isEmpty](../classes/_codec_result_.result.md#isempty)*

*Overrides [Base](../classes/_codec_base_.base.md).[isEmpty](../classes/_codec_base_.base.md#isempty)*

*Defined in [packages/types/src/codec/Result.ts:51](https://github.com/polkadot-js/api/blob/382f7d75c/packages/types/src/codec/Result.ts#L51)*

**`description`** Checks if the Result has no value

**Returns:** *boolean*

___

###  isNone

• **get isNone**(): *boolean*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[isNone](../classes/_codec_enum_.enum.md#isnone)*

*Defined in [packages/types/src/codec/Enum.ts:187](https://github.com/polkadot-js/api/blob/382f7d75c/packages/types/src/codec/Enum.ts#L187)*

**`description`** Checks if the Enum points to a [Null](../classes/_primitive_null_.null.md) type

**Returns:** *boolean*

___

###  isNull

• **get isNull**(): *boolean*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[isNull](../classes/_codec_enum_.enum.md#isnull)*

*Defined in [packages/types/src/codec/Enum.ts:194](https://github.com/polkadot-js/api/blob/382f7d75c/packages/types/src/codec/Enum.ts#L194)*

**`description`** Checks if the Enum points to a [Null](../classes/_primitive_null_.null.md) type (deprecated, use isNone)

**Returns:** *boolean*

___

###  type

• **get type**(): *string*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[type](../classes/_codec_enum_.enum.md#type)*

*Defined in [packages/types/src/codec/Enum.ts:201](https://github.com/polkadot-js/api/blob/382f7d75c/packages/types/src/codec/Enum.ts#L201)*

**`description`** The name of the type this enum value represents

**Returns:** *string*

___

###  value

• **get value**(): *[Codec](_types_.codec.md)*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[value](../classes/_codec_enum_.enum.md#value)*

*Defined in [packages/types/src/codec/Enum.ts:208](https://github.com/polkadot-js/api/blob/382f7d75c/packages/types/src/codec/Enum.ts#L208)*

**`description`** The value of the enum

**Returns:** *[Codec](_types_.codec.md)*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[eq](../classes/_codec_enum_.enum.md#eq)*

*Overrides [Base](../classes/_codec_base_.base.md).[eq](../classes/_codec_base_.base.md#eq)*

*Defined in [packages/types/src/codec/Enum.ts:215](https://github.com/polkadot-js/api/blob/382f7d75c/packages/types/src/codec/Enum.ts#L215)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[toHex](../classes/_codec_enum_.enum.md#tohex)*

*Overrides [Base](../classes/_codec_base_.base.md).[toHex](../classes/_codec_base_.base.md#tohex)*

*Defined in [packages/types/src/codec/Enum.ts:238](https://github.com/polkadot-js/api/blob/382f7d75c/packages/types/src/codec/Enum.ts#L238)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_.md#anyjson)*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[toJSON](../classes/_codec_enum_.enum.md#tojson)*

*Overrides [Base](../classes/_codec_base_.base.md).[toJSON](../classes/_codec_base_.base.md#tojson)*

*Defined in [packages/types/src/codec/Enum.ts:245](https://github.com/polkadot-js/api/blob/382f7d75c/packages/types/src/codec/Enum.ts#L245)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

___

###  toNumber

▸ **toNumber**(): *number*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[toNumber](../classes/_codec_enum_.enum.md#tonumber)*

*Defined in [packages/types/src/codec/Enum.ts:254](https://github.com/polkadot-js/api/blob/382f7d75c/packages/types/src/codec/Enum.ts#L254)*

**`description`** Returns the number representation for the value

**Returns:** *number*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Result](../classes/_codec_result_.result.md).[toRawType](../classes/_codec_result_.result.md#torawtype)*

*Overrides [Enum](../classes/_codec_enum_.enum.md).[toRawType](../classes/_codec_enum_.enum.md#torawtype)*

*Defined in [packages/types/src/codec/Result.ts:72](https://github.com/polkadot-js/api/blob/382f7d75c/packages/types/src/codec/Result.ts#L72)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[toString](../classes/_codec_enum_.enum.md#tostring)*

*Overrides [Base](../classes/_codec_base_.base.md).[toString](../classes/_codec_base_.base.md#tostring)*

*Defined in [packages/types/src/codec/Enum.ts:277](https://github.com/polkadot-js/api/blob/382f7d75c/packages/types/src/codec/Enum.ts#L277)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[toU8a](../classes/_codec_enum_.enum.md#tou8a)*

*Overrides [Base](../classes/_codec_base_.base.md).[toU8a](../classes/_codec_base_.base.md#tou8a)*

*Defined in [packages/types/src/codec/Enum.ts:287](https://github.com/polkadot-js/api/blob/382f7d75c/packages/types/src/codec/Enum.ts#L287)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*

___

### `Static` with

▸ **with**<**O**, **E**>(`Types`: object): *[Constructor](_types_.constructor.md)‹[Result](../classes/_codec_result_.result.md)‹O, E››*

*Inherited from [Result](../classes/_codec_result_.result.md).[with](../classes/_codec_result_.result.md#static-with)*

*Overrides [Enum](../classes/_codec_enum_.enum.md).[with](../classes/_codec_enum_.enum.md#static-with)*

*Defined in [packages/types/src/codec/Result.ts:22](https://github.com/polkadot-js/api/blob/382f7d75c/packages/types/src/codec/Result.ts#L22)*

**Type parameters:**

▪ **O**: *[Codec](_types_.codec.md)*

▪ **E**: *[Codec](_types_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | object |

**Returns:** *[Constructor](_types_.constructor.md)‹[Result](../classes/_codec_result_.result.md)‹O, E››*
