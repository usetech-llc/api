[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/runtime/types"](../modules/_interfaces_runtime_types_.md) › [ExtrinsicEra](_interfaces_runtime_types_.extrinsicera.md)

# Interface: ExtrinsicEra

GenericExtrinsicEra

## Hierarchy

  ↳ [ExtrinsicEra](../classes/_primitive_extrinsic_extrinsicera_.extrinsicera.md)

  ↳ **ExtrinsicEra**

## Implements

* [Codec](_types_.codec.md)
* [IExtrinsicEra](_types_.iextrinsicera.md)

## Index

### Constructors

* [constructor](_interfaces_runtime_types_.extrinsicera.md#constructor)

### Properties

* [registry](_interfaces_runtime_types_.extrinsicera.md#registry)

### Accessors

* [asImmortalEra](_interfaces_runtime_types_.extrinsicera.md#asimmortalera)
* [asMortalEra](_interfaces_runtime_types_.extrinsicera.md#asmortalera)
* [encodedLength](_interfaces_runtime_types_.extrinsicera.md#encodedlength)
* [hash](_interfaces_runtime_types_.extrinsicera.md#hash)
* [index](_interfaces_runtime_types_.extrinsicera.md#index)
* [isEmpty](_interfaces_runtime_types_.extrinsicera.md#isempty)
* [isImmortalEra](_interfaces_runtime_types_.extrinsicera.md#isimmortalera)
* [isMortalEra](_interfaces_runtime_types_.extrinsicera.md#ismortalera)
* [isNone](_interfaces_runtime_types_.extrinsicera.md#isnone)
* [isNull](_interfaces_runtime_types_.extrinsicera.md#isnull)
* [type](_interfaces_runtime_types_.extrinsicera.md#type)
* [value](_interfaces_runtime_types_.extrinsicera.md#value)

### Methods

* [eq](_interfaces_runtime_types_.extrinsicera.md#eq)
* [toHex](_interfaces_runtime_types_.extrinsicera.md#tohex)
* [toJSON](_interfaces_runtime_types_.extrinsicera.md#tojson)
* [toNumber](_interfaces_runtime_types_.extrinsicera.md#tonumber)
* [toRawType](_interfaces_runtime_types_.extrinsicera.md#torawtype)
* [toString](_interfaces_runtime_types_.extrinsicera.md#tostring)
* [toU8a](_interfaces_runtime_types_.extrinsicera.md#tou8a)
* [with](_interfaces_runtime_types_.extrinsicera.md#static-with)

## Constructors

###  constructor

\+ **new ExtrinsicEra**(`registry`: [Registry](_types_.registry.md), `value?`: any): *[ExtrinsicEra](_interfaces_runtime_types_.extrinsicera.md)*

*Inherited from [ExtrinsicEra](../classes/_primitive_extrinsic_extrinsicera_.extrinsicera.md).[constructor](../classes/_primitive_extrinsic_extrinsicera_.extrinsicera.md#constructor)*

*Overrides [Enum](../classes/_codec_enum_.enum.md).[constructor](../classes/_codec_enum_.enum.md#constructor)*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts:193](https://github.com/polkadot-js/api/blob/d487490ca/packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts#L193)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](_types_.registry.md) |
`value?` | any |

**Returns:** *[ExtrinsicEra](_interfaces_runtime_types_.extrinsicera.md)*

## Properties

###  registry

• **registry**: *[Registry](_types_.registry.md)*

*Inherited from [Base](../classes/_codec_base_.base.md).[registry](../classes/_codec_base_.base.md#registry)*

*Defined in [packages/types/src/codec/Base.ts:16](https://github.com/polkadot-js/api/blob/d487490ca/packages/types/src/codec/Base.ts#L16)*

## Accessors

###  asImmortalEra

• **get asImmortalEra**(): *[ImmortalEra](../classes/_primitive_extrinsic_extrinsicera_.immortalera.md)*

*Inherited from [ExtrinsicEra](../classes/_primitive_extrinsic_extrinsicera_.extrinsicera.md).[asImmortalEra](../classes/_primitive_extrinsic_extrinsicera_.extrinsicera.md#asimmortalera)*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts:241](https://github.com/polkadot-js/api/blob/d487490ca/packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts#L241)*

**`description`** Returns the item as a [ImmortalEra](_interfaces_runtime_types_.immortalera.md)

**Returns:** *[ImmortalEra](../classes/_primitive_extrinsic_extrinsicera_.immortalera.md)*

___

###  asMortalEra

• **get asMortalEra**(): *[MortalEra](../classes/_primitive_extrinsic_extrinsicera_.mortalera.md)*

*Inherited from [ExtrinsicEra](../classes/_primitive_extrinsic_extrinsicera_.extrinsicera.md).[asMortalEra](../classes/_primitive_extrinsic_extrinsicera_.extrinsicera.md#asmortalera)*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts:250](https://github.com/polkadot-js/api/blob/d487490ca/packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts#L250)*

**`description`** Returns the item as a [MortalEra](_interfaces_runtime_types_.mortalera.md)

**Returns:** *[MortalEra](../classes/_primitive_extrinsic_extrinsicera_.mortalera.md)*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [ExtrinsicEra](../classes/_primitive_extrinsic_extrinsicera_.extrinsicera.md).[encodedLength](../classes/_primitive_extrinsic_extrinsicera_.extrinsicera.md#encodedlength)*

*Overrides [Enum](../classes/_codec_enum_.enum.md).[encodedLength](../classes/_codec_enum_.enum.md#encodedlength)*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts:230](https://github.com/polkadot-js/api/blob/d487490ca/packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts#L230)*

**`description`** Override the encoded length method

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](_types_.ihash.md)*

*Inherited from [Base](../classes/_codec_base_.base.md).[hash](../classes/_codec_base_.base.md#hash)*

*Defined in [packages/types/src/codec/Base.ts:35](https://github.com/polkadot-js/api/blob/d487490ca/packages/types/src/codec/Base.ts#L35)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](_types_.ihash.md)*

___

###  index

• **get index**(): *number*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[index](../classes/_codec_enum_.enum.md#index)*

*Defined in [packages/types/src/codec/Enum.ts:180](https://github.com/polkadot-js/api/blob/d487490ca/packages/types/src/codec/Enum.ts#L180)*

**`description`** The index of the metadata value

**Returns:** *number*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Base](../classes/_codec_base_.base.md).[isEmpty](../classes/_codec_base_.base.md#isempty)*

*Defined in [packages/types/src/codec/Base.ts:42](https://github.com/polkadot-js/api/blob/d487490ca/packages/types/src/codec/Base.ts#L42)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  isImmortalEra

• **get isImmortalEra**(): *boolean*

*Inherited from [ExtrinsicEra](../classes/_primitive_extrinsic_extrinsicera_.extrinsicera.md).[isImmortalEra](../classes/_primitive_extrinsic_extrinsicera_.extrinsicera.md#isimmortalera)*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts:259](https://github.com/polkadot-js/api/blob/d487490ca/packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts#L259)*

**`description`** `true` if Immortal

**Returns:** *boolean*

___

###  isMortalEra

• **get isMortalEra**(): *boolean*

*Inherited from [ExtrinsicEra](../classes/_primitive_extrinsic_extrinsicera_.extrinsicera.md).[isMortalEra](../classes/_primitive_extrinsic_extrinsicera_.extrinsicera.md#ismortalera)*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts:266](https://github.com/polkadot-js/api/blob/d487490ca/packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts#L266)*

**`description`** `true` if Mortal

**Returns:** *boolean*

___

###  isNone

• **get isNone**(): *boolean*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[isNone](../classes/_codec_enum_.enum.md#isnone)*

*Defined in [packages/types/src/codec/Enum.ts:187](https://github.com/polkadot-js/api/blob/d487490ca/packages/types/src/codec/Enum.ts#L187)*

**`description`** Checks if the Enum points to a [Null](../classes/_primitive_null_.null.md) type

**Returns:** *boolean*

___

###  isNull

• **get isNull**(): *boolean*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[isNull](../classes/_codec_enum_.enum.md#isnull)*

*Defined in [packages/types/src/codec/Enum.ts:194](https://github.com/polkadot-js/api/blob/d487490ca/packages/types/src/codec/Enum.ts#L194)*

**`description`** Checks if the Enum points to a [Null](../classes/_primitive_null_.null.md) type (deprecated, use isNone)

**Returns:** *boolean*

___

###  type

• **get type**(): *string*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[type](../classes/_codec_enum_.enum.md#type)*

*Defined in [packages/types/src/codec/Enum.ts:201](https://github.com/polkadot-js/api/blob/d487490ca/packages/types/src/codec/Enum.ts#L201)*

**`description`** The name of the type this enum value represents

**Returns:** *string*

___

###  value

• **get value**(): *[Codec](_types_.codec.md)*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[value](../classes/_codec_enum_.enum.md#value)*

*Defined in [packages/types/src/codec/Enum.ts:208](https://github.com/polkadot-js/api/blob/d487490ca/packages/types/src/codec/Enum.ts#L208)*

**`description`** The value of the enum

**Returns:** *[Codec](_types_.codec.md)*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[eq](../classes/_codec_enum_.enum.md#eq)*

*Overrides [Base](../classes/_codec_base_.base.md).[eq](../classes/_codec_base_.base.md#eq)*

*Defined in [packages/types/src/codec/Enum.ts:215](https://github.com/polkadot-js/api/blob/d487490ca/packages/types/src/codec/Enum.ts#L215)*

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

*Defined in [packages/types/src/codec/Enum.ts:238](https://github.com/polkadot-js/api/blob/d487490ca/packages/types/src/codec/Enum.ts#L238)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_.md#anyjson)*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[toJSON](../classes/_codec_enum_.enum.md#tojson)*

*Overrides [Base](../classes/_codec_base_.base.md).[toJSON](../classes/_codec_base_.base.md#tojson)*

*Defined in [packages/types/src/codec/Enum.ts:245](https://github.com/polkadot-js/api/blob/d487490ca/packages/types/src/codec/Enum.ts#L245)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

___

###  toNumber

▸ **toNumber**(): *number*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[toNumber](../classes/_codec_enum_.enum.md#tonumber)*

*Defined in [packages/types/src/codec/Enum.ts:254](https://github.com/polkadot-js/api/blob/d487490ca/packages/types/src/codec/Enum.ts#L254)*

**`description`** Returns the number representation for the value

**Returns:** *number*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[toRawType](../classes/_codec_enum_.enum.md#torawtype)*

*Overrides [Base](../classes/_codec_base_.base.md).[toRawType](../classes/_codec_base_.base.md#torawtype)*

*Defined in [packages/types/src/codec/Enum.ts:270](https://github.com/polkadot-js/api/blob/d487490ca/packages/types/src/codec/Enum.ts#L270)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[toString](../classes/_codec_enum_.enum.md#tostring)*

*Overrides [Base](../classes/_codec_base_.base.md).[toString](../classes/_codec_base_.base.md#tostring)*

*Defined in [packages/types/src/codec/Enum.ts:277](https://github.com/polkadot-js/api/blob/d487490ca/packages/types/src/codec/Enum.ts#L277)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from [ExtrinsicEra](../classes/_primitive_extrinsic_extrinsicera_.extrinsicera.md).[toU8a](../classes/_primitive_extrinsic_extrinsicera_.extrinsicera.md#tou8a)*

*Overrides [Enum](../classes/_codec_enum_.enum.md).[toU8a](../classes/_codec_enum_.enum.md#tou8a)*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts:274](https://github.com/polkadot-js/api/blob/d487490ca/packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts#L274)*

**`description`** Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*

___

### `Static` with

▸ **with**(`Types`: Record‹string, [InterfaceTypes](../modules/_types_.md#interfacetypes) | [Constructor](_types_.constructor.md)› | string[]): *[EnumConstructor](_codec_enum_.enumconstructor.md)‹[Enum](../classes/_codec_enum_.enum.md)›*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[with](../classes/_codec_enum_.enum.md#static-with)*

*Defined in [packages/types/src/codec/Enum.ts:137](https://github.com/polkadot-js/api/blob/d487490ca/packages/types/src/codec/Enum.ts#L137)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | Record‹string, [InterfaceTypes](../modules/_types_.md#interfacetypes) &#124; [Constructor](_types_.constructor.md)› &#124; string[] |

**Returns:** *[EnumConstructor](_codec_enum_.enumconstructor.md)‹[Enum](../classes/_codec_enum_.enum.md)›*
