[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["primitive/Extrinsic/ExtrinsicEra"](../modules/_primitive_extrinsic_extrinsicera_.md) › [ExtrinsicEra](_primitive_extrinsic_extrinsicera_.extrinsicera.md)

# Class: ExtrinsicEra

**`name`** GenericExtrinsicEra

**`description`** 
The era for an extrinsic, indicating either a mortal or immortal extrinsic

## Hierarchy

  ↳ [Enum](_codec_enum_.enum.md)

  ↳ **ExtrinsicEra**

## Implements

* [Codec](../interfaces/_types_codec_.codec.md)
* [IExtrinsicEra](../interfaces/_types_extrinsic_.iextrinsicera.md)

## Index

### Constructors

* [constructor](_primitive_extrinsic_extrinsicera_.extrinsicera.md#constructor)

### Properties

* [registry](_primitive_extrinsic_extrinsicera_.extrinsicera.md#registry)

### Accessors

* [asImmortalEra](_primitive_extrinsic_extrinsicera_.extrinsicera.md#asimmortalera)
* [asMortalEra](_primitive_extrinsic_extrinsicera_.extrinsicera.md#asmortalera)
* [defEntries](_primitive_extrinsic_extrinsicera_.extrinsicera.md#defentries)
* [defKeys](_primitive_extrinsic_extrinsicera_.extrinsicera.md#defkeys)
* [encodedLength](_primitive_extrinsic_extrinsicera_.extrinsicera.md#encodedlength)
* [hash](_primitive_extrinsic_extrinsicera_.extrinsicera.md#hash)
* [index](_primitive_extrinsic_extrinsicera_.extrinsicera.md#index)
* [isBasic](_primitive_extrinsic_extrinsicera_.extrinsicera.md#isbasic)
* [isEmpty](_primitive_extrinsic_extrinsicera_.extrinsicera.md#isempty)
* [isImmortalEra](_primitive_extrinsic_extrinsicera_.extrinsicera.md#isimmortalera)
* [isMortalEra](_primitive_extrinsic_extrinsicera_.extrinsicera.md#ismortalera)
* [isNone](_primitive_extrinsic_extrinsicera_.extrinsicera.md#isnone)
* [isNull](_primitive_extrinsic_extrinsicera_.extrinsicera.md#isnull)
* [type](_primitive_extrinsic_extrinsicera_.extrinsicera.md#type)
* [value](_primitive_extrinsic_extrinsicera_.extrinsicera.md#value)

### Methods

* [eq](_primitive_extrinsic_extrinsicera_.extrinsicera.md#eq)
* [toHex](_primitive_extrinsic_extrinsicera_.extrinsicera.md#tohex)
* [toHuman](_primitive_extrinsic_extrinsicera_.extrinsicera.md#tohuman)
* [toJSON](_primitive_extrinsic_extrinsicera_.extrinsicera.md#tojson)
* [toNumber](_primitive_extrinsic_extrinsicera_.extrinsicera.md#tonumber)
* [toRawType](_primitive_extrinsic_extrinsicera_.extrinsicera.md#torawtype)
* [toString](_primitive_extrinsic_extrinsicera_.extrinsicera.md#tostring)
* [toU8a](_primitive_extrinsic_extrinsicera_.extrinsicera.md#tou8a)
* [with](_primitive_extrinsic_extrinsicera_.extrinsicera.md#static-with)

## Constructors

###  constructor

\+ **new ExtrinsicEra**(`registry`: [Registry](../interfaces/_types_registry_.registry.md), `value?`: any): *[ExtrinsicEra](_primitive_extrinsic_extrinsicera_.extrinsicera.md)*

*Overrides [Enum](_codec_enum_.enum.md).[constructor](_codec_enum_.enum.md#constructor)*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts:206](https://github.com/polkadot-js/api/blob/427f821430/packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts#L206)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_types_registry_.registry.md) |
`value?` | any |

**Returns:** *[ExtrinsicEra](_primitive_extrinsic_extrinsicera_.extrinsicera.md)*

## Properties

###  registry

• **registry**: *[Registry](../interfaces/_types_registry_.registry.md)*

*Implementation of [IExtrinsicEra](../interfaces/_types_extrinsic_.iextrinsicera.md).[registry](../interfaces/_types_extrinsic_.iextrinsicera.md#registry)*

*Inherited from [Base](_codec_base_.base.md).[registry](_codec_base_.base.md#registry)*

*Defined in [packages/types/src/codec/Base.ts:17](https://github.com/polkadot-js/api/blob/427f821430/packages/types/src/codec/Base.ts#L17)*

## Accessors

###  asImmortalEra

• **get asImmortalEra**(): *[ImmortalEra](_primitive_extrinsic_extrinsicera_.immortalera.md)*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts:255](https://github.com/polkadot-js/api/blob/427f821430/packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts#L255)*

**`description`** Returns the item as a [ImmortalEra](_primitive_extrinsic_extrinsicera_.immortalera.md)

**Returns:** *[ImmortalEra](_primitive_extrinsic_extrinsicera_.immortalera.md)*

___

###  asMortalEra

• **get asMortalEra**(): *[MortalEra](_primitive_extrinsic_extrinsicera_.mortalera.md)*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts:264](https://github.com/polkadot-js/api/blob/427f821430/packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts#L264)*

**`description`** Returns the item as a [MortalEra](_primitive_extrinsic_extrinsicera_.mortalera.md)

**Returns:** *[MortalEra](_primitive_extrinsic_extrinsicera_.mortalera.md)*

___

###  defEntries

• **get defEntries**(): *string[]*

*Inherited from [Enum](_codec_enum_.enum.md).[defEntries](_codec_enum_.enum.md#defentries)*

*Defined in [packages/types/src/codec/Enum.ts:209](https://github.com/polkadot-js/api/blob/427f821430/packages/types/src/codec/Enum.ts#L209)*

**`description`** The available keys for this enum

**Returns:** *string[]*

___

###  defKeys

• **get defKeys**(): *string[]*

*Inherited from [Enum](_codec_enum_.enum.md).[defKeys](_codec_enum_.enum.md#defkeys)*

*Defined in [packages/types/src/codec/Enum.ts:216](https://github.com/polkadot-js/api/blob/427f821430/packages/types/src/codec/Enum.ts#L216)*

**`description`** The available keys for this enum

**Returns:** *string[]*

___

###  encodedLength

• **get encodedLength**(): *number*

*Overrides [Enum](_codec_enum_.enum.md).[encodedLength](_codec_enum_.enum.md#encodedlength)*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts:244](https://github.com/polkadot-js/api/blob/427f821430/packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts#L244)*

**`description`** Override the encoded length method

**Returns:** *number*

___

###  hash

• **get hash**(): *H256*

*Inherited from [Base](_codec_base_.base.md).[hash](_codec_base_.base.md#hash)*

*Defined in [packages/types/src/codec/Base.ts:36](https://github.com/polkadot-js/api/blob/427f821430/packages/types/src/codec/Base.ts#L36)*

**`description`** returns a hash of the contents

**Returns:** *H256*

___

###  index

• **get index**(): *number*

*Inherited from [Enum](_codec_enum_.enum.md).[index](_codec_enum_.enum.md#index)*

*Defined in [packages/types/src/codec/Enum.ts:181](https://github.com/polkadot-js/api/blob/427f821430/packages/types/src/codec/Enum.ts#L181)*

**`description`** The index of the metadata value

**Returns:** *number*

___

###  isBasic

• **get isBasic**(): *boolean*

*Inherited from [Enum](_codec_enum_.enum.md).[isBasic](_codec_enum_.enum.md#isbasic)*

*Defined in [packages/types/src/codec/Enum.ts:188](https://github.com/polkadot-js/api/blob/427f821430/packages/types/src/codec/Enum.ts#L188)*

**`description`** true if this is a basic enum (no values)

**Returns:** *boolean*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Base](_codec_base_.base.md).[isEmpty](_codec_base_.base.md#isempty)*

*Defined in [packages/types/src/codec/Base.ts:43](https://github.com/polkadot-js/api/blob/427f821430/packages/types/src/codec/Base.ts#L43)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  isImmortalEra

• **get isImmortalEra**(): *boolean*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts:273](https://github.com/polkadot-js/api/blob/427f821430/packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts#L273)*

**`description`** `true` if Immortal

**Returns:** *boolean*

___

###  isMortalEra

• **get isMortalEra**(): *boolean*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts:280](https://github.com/polkadot-js/api/blob/427f821430/packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts#L280)*

**`description`** `true` if Mortal

**Returns:** *boolean*

___

###  isNone

• **get isNone**(): *boolean*

*Inherited from [Enum](_codec_enum_.enum.md).[isNone](_codec_enum_.enum.md#isnone)*

*Defined in [packages/types/src/codec/Enum.ts:195](https://github.com/polkadot-js/api/blob/427f821430/packages/types/src/codec/Enum.ts#L195)*

**`description`** Checks if the Enum points to a [Null](_primitive_null_.null.md) type

**Returns:** *boolean*

___

###  isNull

• **get isNull**(): *boolean*

*Inherited from [Enum](_codec_enum_.enum.md).[isNull](_codec_enum_.enum.md#isnull)*

*Defined in [packages/types/src/codec/Enum.ts:202](https://github.com/polkadot-js/api/blob/427f821430/packages/types/src/codec/Enum.ts#L202)*

**`description`** Checks if the Enum points to a [Null](_primitive_null_.null.md) type (deprecated, use isNone)

**Returns:** *boolean*

___

###  type

• **get type**(): *string*

*Inherited from [Enum](_codec_enum_.enum.md).[type](_codec_enum_.enum.md#type)*

*Defined in [packages/types/src/codec/Enum.ts:223](https://github.com/polkadot-js/api/blob/427f821430/packages/types/src/codec/Enum.ts#L223)*

**`description`** The name of the type this enum value represents

**Returns:** *string*

___

###  value

• **get value**(): *[Codec](../interfaces/_types_codec_.codec.md)*

*Inherited from [Enum](_codec_enum_.enum.md).[value](_codec_enum_.enum.md#value)*

*Defined in [packages/types/src/codec/Enum.ts:230](https://github.com/polkadot-js/api/blob/427f821430/packages/types/src/codec/Enum.ts#L230)*

**`description`** The value of the enum

**Returns:** *[Codec](../interfaces/_types_codec_.codec.md)*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [IExtrinsicEra](../interfaces/_types_extrinsic_.iextrinsicera.md)*

*Inherited from [Enum](_codec_enum_.enum.md).[eq](_codec_enum_.enum.md#eq)*

*Overrides [Base](_codec_base_.base.md).[eq](_codec_base_.base.md#eq)*

*Defined in [packages/types/src/codec/Enum.ts:237](https://github.com/polkadot-js/api/blob/427f821430/packages/types/src/codec/Enum.ts#L237)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Enum](_codec_enum_.enum.md).[toHex](_codec_enum_.enum.md#tohex)*

*Overrides [Base](_codec_base_.base.md).[toHex](_codec_base_.base.md#tohex)*

*Defined in [packages/types/src/codec/Enum.ts:260](https://github.com/polkadot-js/api/blob/427f821430/packages/types/src/codec/Enum.ts#L260)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(`isExtended?`: undefined | false | true): *[AnyJson](../modules/_types_helpers_.md#anyjson)*

*Implementation of [IExtrinsicEra](../interfaces/_types_extrinsic_.iextrinsicera.md)*

*Inherited from [Enum](_codec_enum_.enum.md).[toHuman](_codec_enum_.enum.md#tohuman)*

*Overrides [Base](_codec_base_.base.md).[toHuman](_codec_base_.base.md#tohuman)*

*Defined in [packages/types/src/codec/Enum.ts:267](https://github.com/polkadot-js/api/blob/427f821430/packages/types/src/codec/Enum.ts#L267)*

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

**Parameters:**

Name | Type |
------ | ------ |
`isExtended?` | undefined &#124; false &#124; true |

**Returns:** *[AnyJson](../modules/_types_helpers_.md#anyjson)*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_helpers_.md#anyjson)*

*Implementation of [IExtrinsicEra](../interfaces/_types_extrinsic_.iextrinsicera.md)*

*Inherited from [Enum](_codec_enum_.enum.md).[toJSON](_codec_enum_.enum.md#tojson)*

*Overrides [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [packages/types/src/codec/Enum.ts:276](https://github.com/polkadot-js/api/blob/427f821430/packages/types/src/codec/Enum.ts#L276)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_helpers_.md#anyjson)*

___

###  toNumber

▸ **toNumber**(): *number*

*Inherited from [Enum](_codec_enum_.enum.md).[toNumber](_codec_enum_.enum.md#tonumber)*

*Defined in [packages/types/src/codec/Enum.ts:285](https://github.com/polkadot-js/api/blob/427f821430/packages/types/src/codec/Enum.ts#L285)*

**`description`** Returns the number representation for the value

**Returns:** *number*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [IExtrinsicEra](../interfaces/_types_extrinsic_.iextrinsicera.md)*

*Inherited from [Enum](_codec_enum_.enum.md).[toRawType](_codec_enum_.enum.md#torawtype)*

*Overrides [Base](_codec_base_.base.md).[toRawType](_codec_base_.base.md#torawtype)*

*Defined in [packages/types/src/codec/Enum.ts:301](https://github.com/polkadot-js/api/blob/427f821430/packages/types/src/codec/Enum.ts#L301)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [IExtrinsicEra](../interfaces/_types_extrinsic_.iextrinsicera.md)*

*Inherited from [Enum](_codec_enum_.enum.md).[toString](_codec_enum_.enum.md#tostring)*

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [packages/types/src/codec/Enum.ts:308](https://github.com/polkadot-js/api/blob/427f821430/packages/types/src/codec/Enum.ts#L308)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Overrides [Enum](_codec_enum_.enum.md).[toU8a](_codec_enum_.enum.md#tou8a)*

*Defined in [packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts:288](https://github.com/polkadot-js/api/blob/427f821430/packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts#L288)*

**`description`** Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

___

### `Static` with

▸ **with**(`Types`: Record‹string, [InterfaceTypes](../modules/_types_helpers_.md#interfacetypes) | [Constructor](../interfaces/_types_codec_.constructor.md)› | string[]): *[EnumConstructor](../interfaces/_codec_enum_.enumconstructor.md)‹[Enum](_codec_enum_.enum.md)›*

*Inherited from [Enum](_codec_enum_.enum.md).[with](_codec_enum_.enum.md#static-with)*

*Defined in [packages/types/src/codec/Enum.ts:138](https://github.com/polkadot-js/api/blob/427f821430/packages/types/src/codec/Enum.ts#L138)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | Record‹string, [InterfaceTypes](../modules/_types_helpers_.md#interfacetypes) &#124; [Constructor](../interfaces/_types_codec_.constructor.md)› &#124; string[] |

**Returns:** *[EnumConstructor](../interfaces/_codec_enum_.enumconstructor.md)‹[Enum](_codec_enum_.enum.md)›*
