[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/democracy/types"](../modules/_interfaces_democracy_types_.md) › [Conviction](_interfaces_democracy_types_.conviction.md)

# Interface: Conviction

Enum

## Hierarchy

  ↳ [Enum](../classes/_codec_enum_.enum.md)

  ↳ **Conviction**

## Implements

* [Codec](_types_.codec.md)

## Index

### Constructors

* [constructor](_interfaces_democracy_types_.conviction.md#constructor)

### Properties

* [isLocked1X](_interfaces_democracy_types_.conviction.md#islocked1x)
* [isLocked2X](_interfaces_democracy_types_.conviction.md#islocked2x)
* [isLocked3X](_interfaces_democracy_types_.conviction.md#islocked3x)
* [isLocked4X](_interfaces_democracy_types_.conviction.md#islocked4x)
* [isLocked5X](_interfaces_democracy_types_.conviction.md#islocked5x)
* [isLocked6X](_interfaces_democracy_types_.conviction.md#islocked6x)
* [isNone](_interfaces_democracy_types_.conviction.md#isnone)
* [registry](_interfaces_democracy_types_.conviction.md#registry)

### Accessors

* [encodedLength](_interfaces_democracy_types_.conviction.md#encodedlength)
* [hash](_interfaces_democracy_types_.conviction.md#hash)
* [index](_interfaces_democracy_types_.conviction.md#index)
* [isEmpty](_interfaces_democracy_types_.conviction.md#isempty)
* [isNull](_interfaces_democracy_types_.conviction.md#isnull)
* [type](_interfaces_democracy_types_.conviction.md#type)
* [value](_interfaces_democracy_types_.conviction.md#value)

### Methods

* [eq](_interfaces_democracy_types_.conviction.md#eq)
* [toHex](_interfaces_democracy_types_.conviction.md#tohex)
* [toJSON](_interfaces_democracy_types_.conviction.md#tojson)
* [toNumber](_interfaces_democracy_types_.conviction.md#tonumber)
* [toRawType](_interfaces_democracy_types_.conviction.md#torawtype)
* [toString](_interfaces_democracy_types_.conviction.md#tostring)
* [toU8a](_interfaces_democracy_types_.conviction.md#tou8a)
* [with](_interfaces_democracy_types_.conviction.md#static-with)

## Constructors

###  constructor

\+ **new Conviction**(`registry`: [Registry](_types_.registry.md), `def`: Record‹string, [InterfaceTypes](../modules/_types_.md#interfacetypes) | [Constructor](_types_.constructor.md)› | string[], `value?`: any, `index?`: undefined | number): *[Conviction](_interfaces_democracy_types_.conviction.md)*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[constructor](../classes/_codec_enum_.enum.md#constructor)*

*Defined in [packages/types/src/codec/Enum.ts:110](https://github.com/polkadot-js/api/blob/b1dff2295/packages/types/src/codec/Enum.ts#L110)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](_types_.registry.md) |
`def` | Record‹string, [InterfaceTypes](../modules/_types_.md#interfacetypes) &#124; [Constructor](_types_.constructor.md)› &#124; string[] |
`value?` | any |
`index?` | undefined &#124; number |

**Returns:** *[Conviction](_interfaces_democracy_types_.conviction.md)*

## Properties

###  isLocked1X

• **isLocked1X**: *boolean*

*Defined in [packages/types/src/interfaces/democracy/types.ts:14](https://github.com/polkadot-js/api/blob/b1dff2295/packages/types/src/interfaces/democracy/types.ts#L14)*

1:: Locked1x

___

###  isLocked2X

• **isLocked2X**: *boolean*

*Defined in [packages/types/src/interfaces/democracy/types.ts:16](https://github.com/polkadot-js/api/blob/b1dff2295/packages/types/src/interfaces/democracy/types.ts#L16)*

2:: Locked2x

___

###  isLocked3X

• **isLocked3X**: *boolean*

*Defined in [packages/types/src/interfaces/democracy/types.ts:18](https://github.com/polkadot-js/api/blob/b1dff2295/packages/types/src/interfaces/democracy/types.ts#L18)*

3:: Locked3x

___

###  isLocked4X

• **isLocked4X**: *boolean*

*Defined in [packages/types/src/interfaces/democracy/types.ts:20](https://github.com/polkadot-js/api/blob/b1dff2295/packages/types/src/interfaces/democracy/types.ts#L20)*

4:: Locked4x

___

###  isLocked5X

• **isLocked5X**: *boolean*

*Defined in [packages/types/src/interfaces/democracy/types.ts:22](https://github.com/polkadot-js/api/blob/b1dff2295/packages/types/src/interfaces/democracy/types.ts#L22)*

5:: Locked5x

___

###  isLocked6X

• **isLocked6X**: *boolean*

*Defined in [packages/types/src/interfaces/democracy/types.ts:24](https://github.com/polkadot-js/api/blob/b1dff2295/packages/types/src/interfaces/democracy/types.ts#L24)*

6:: Locked6x

___

###  isNone

• **isNone**: *boolean*

*Overrides [Enum](../classes/_codec_enum_.enum.md).[isNone](../classes/_codec_enum_.enum.md#isnone)*

*Defined in [packages/types/src/interfaces/democracy/types.ts:12](https://github.com/polkadot-js/api/blob/b1dff2295/packages/types/src/interfaces/democracy/types.ts#L12)*

0:: None

___

###  registry

• **registry**: *[Registry](_types_.registry.md)*

*Inherited from [Base](../classes/_codec_base_.base.md).[registry](../classes/_codec_base_.base.md#registry)*

*Defined in [packages/types/src/codec/Base.ts:16](https://github.com/polkadot-js/api/blob/b1dff2295/packages/types/src/codec/Base.ts#L16)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[encodedLength](../classes/_codec_enum_.enum.md#encodedlength)*

*Overrides [Base](../classes/_codec_base_.base.md).[encodedLength](../classes/_codec_base_.base.md#encodedlength)*

*Defined in [packages/types/src/codec/Enum.ts:173](https://github.com/polkadot-js/api/blob/b1dff2295/packages/types/src/codec/Enum.ts#L173)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](_types_.ihash.md)*

*Inherited from [Base](../classes/_codec_base_.base.md).[hash](../classes/_codec_base_.base.md#hash)*

*Defined in [packages/types/src/codec/Base.ts:35](https://github.com/polkadot-js/api/blob/b1dff2295/packages/types/src/codec/Base.ts#L35)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](_types_.ihash.md)*

___

###  index

• **get index**(): *number*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[index](../classes/_codec_enum_.enum.md#index)*

*Defined in [packages/types/src/codec/Enum.ts:180](https://github.com/polkadot-js/api/blob/b1dff2295/packages/types/src/codec/Enum.ts#L180)*

**`description`** The index of the metadata value

**Returns:** *number*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Base](../classes/_codec_base_.base.md).[isEmpty](../classes/_codec_base_.base.md#isempty)*

*Defined in [packages/types/src/codec/Base.ts:42](https://github.com/polkadot-js/api/blob/b1dff2295/packages/types/src/codec/Base.ts#L42)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  isNull

• **get isNull**(): *boolean*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[isNull](../classes/_codec_enum_.enum.md#isnull)*

*Defined in [packages/types/src/codec/Enum.ts:194](https://github.com/polkadot-js/api/blob/b1dff2295/packages/types/src/codec/Enum.ts#L194)*

**`description`** Checks if the Enum points to a [Null](../classes/_primitive_null_.null.md) type (deprecated, use isNone)

**Returns:** *boolean*

___

###  type

• **get type**(): *string*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[type](../classes/_codec_enum_.enum.md#type)*

*Defined in [packages/types/src/codec/Enum.ts:201](https://github.com/polkadot-js/api/blob/b1dff2295/packages/types/src/codec/Enum.ts#L201)*

**`description`** The name of the type this enum value represents

**Returns:** *string*

___

###  value

• **get value**(): *[Codec](_types_.codec.md)*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[value](../classes/_codec_enum_.enum.md#value)*

*Defined in [packages/types/src/codec/Enum.ts:208](https://github.com/polkadot-js/api/blob/b1dff2295/packages/types/src/codec/Enum.ts#L208)*

**`description`** The value of the enum

**Returns:** *[Codec](_types_.codec.md)*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[eq](../classes/_codec_enum_.enum.md#eq)*

*Overrides [Base](../classes/_codec_base_.base.md).[eq](../classes/_codec_base_.base.md#eq)*

*Defined in [packages/types/src/codec/Enum.ts:215](https://github.com/polkadot-js/api/blob/b1dff2295/packages/types/src/codec/Enum.ts#L215)*

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

*Defined in [packages/types/src/codec/Enum.ts:238](https://github.com/polkadot-js/api/blob/b1dff2295/packages/types/src/codec/Enum.ts#L238)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_.md#anyjson)*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[toJSON](../classes/_codec_enum_.enum.md#tojson)*

*Overrides [Base](../classes/_codec_base_.base.md).[toJSON](../classes/_codec_base_.base.md#tojson)*

*Defined in [packages/types/src/codec/Enum.ts:245](https://github.com/polkadot-js/api/blob/b1dff2295/packages/types/src/codec/Enum.ts#L245)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

___

###  toNumber

▸ **toNumber**(): *number*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[toNumber](../classes/_codec_enum_.enum.md#tonumber)*

*Defined in [packages/types/src/codec/Enum.ts:254](https://github.com/polkadot-js/api/blob/b1dff2295/packages/types/src/codec/Enum.ts#L254)*

**`description`** Returns the number representation for the value

**Returns:** *number*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[toRawType](../classes/_codec_enum_.enum.md#torawtype)*

*Overrides [Base](../classes/_codec_base_.base.md).[toRawType](../classes/_codec_base_.base.md#torawtype)*

*Defined in [packages/types/src/codec/Enum.ts:270](https://github.com/polkadot-js/api/blob/b1dff2295/packages/types/src/codec/Enum.ts#L270)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[toString](../classes/_codec_enum_.enum.md#tostring)*

*Overrides [Base](../classes/_codec_base_.base.md).[toString](../classes/_codec_base_.base.md#tostring)*

*Defined in [packages/types/src/codec/Enum.ts:277](https://github.com/polkadot-js/api/blob/b1dff2295/packages/types/src/codec/Enum.ts#L277)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[toU8a](../classes/_codec_enum_.enum.md#tou8a)*

*Overrides [Base](../classes/_codec_base_.base.md).[toU8a](../classes/_codec_base_.base.md#tou8a)*

*Defined in [packages/types/src/codec/Enum.ts:287](https://github.com/polkadot-js/api/blob/b1dff2295/packages/types/src/codec/Enum.ts#L287)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*

___

### `Static` with

▸ **with**(`Types`: Record‹string, [InterfaceTypes](../modules/_types_.md#interfacetypes) | [Constructor](_types_.constructor.md)› | string[]): *[EnumConstructor](_codec_enum_.enumconstructor.md)‹[Enum](../classes/_codec_enum_.enum.md)›*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[with](../classes/_codec_enum_.enum.md#static-with)*

*Defined in [packages/types/src/codec/Enum.ts:137](https://github.com/polkadot-js/api/blob/b1dff2295/packages/types/src/codec/Enum.ts#L137)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | Record‹string, [InterfaceTypes](../modules/_types_.md#interfacetypes) &#124; [Constructor](_types_.constructor.md)› &#124; string[] |

**Returns:** *[EnumConstructor](_codec_enum_.enumconstructor.md)‹[Enum](../classes/_codec_enum_.enum.md)›*
