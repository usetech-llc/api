[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/identity/types"](../modules/_interfaces_identity_types_.md) › [Data](_interfaces_identity_types_.data.md)

# Interface: Data

Enum

## Hierarchy

  ↳ [Enum](../classes/_codec_enum_.enum.md)

  ↳ **Data**

## Implements

* [Codec](_types_.codec.md)

## Index

### Constructors

* [constructor](_interfaces_identity_types_.data.md#constructor)

### Properties

* [asBlakeTwo256](_interfaces_identity_types_.data.md#asblaketwo256)
* [asKeccak256](_interfaces_identity_types_.data.md#askeccak256)
* [asRaw](_interfaces_identity_types_.data.md#asraw)
* [asSha256](_interfaces_identity_types_.data.md#assha256)
* [asShaThree256](_interfaces_identity_types_.data.md#asshathree256)
* [isBlakeTwo256](_interfaces_identity_types_.data.md#isblaketwo256)
* [isKeccak256](_interfaces_identity_types_.data.md#iskeccak256)
* [isNone](_interfaces_identity_types_.data.md#isnone)
* [isRaw](_interfaces_identity_types_.data.md#israw)
* [isSha256](_interfaces_identity_types_.data.md#issha256)
* [isShaThree256](_interfaces_identity_types_.data.md#isshathree256)
* [registry](_interfaces_identity_types_.data.md#registry)

### Accessors

* [encodedLength](_interfaces_identity_types_.data.md#encodedlength)
* [hash](_interfaces_identity_types_.data.md#hash)
* [index](_interfaces_identity_types_.data.md#index)
* [isEmpty](_interfaces_identity_types_.data.md#isempty)
* [isNull](_interfaces_identity_types_.data.md#isnull)
* [type](_interfaces_identity_types_.data.md#type)
* [value](_interfaces_identity_types_.data.md#value)

### Methods

* [eq](_interfaces_identity_types_.data.md#eq)
* [toHex](_interfaces_identity_types_.data.md#tohex)
* [toJSON](_interfaces_identity_types_.data.md#tojson)
* [toNumber](_interfaces_identity_types_.data.md#tonumber)
* [toRawType](_interfaces_identity_types_.data.md#torawtype)
* [toString](_interfaces_identity_types_.data.md#tostring)
* [toU8a](_interfaces_identity_types_.data.md#tou8a)
* [with](_interfaces_identity_types_.data.md#static-with)

## Constructors

###  constructor

\+ **new Data**(`registry`: [Registry](_types_.registry.md), `def`: Record‹string, [InterfaceTypes](../modules/_types_.md#interfacetypes) | [Constructor](_types_.constructor.md)› | string[], `value?`: any, `index?`: undefined | number): *[Data](_interfaces_identity_types_.data.md)*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[constructor](../classes/_codec_enum_.enum.md#constructor)*

*Defined in [packages/types/src/codec/Enum.ts:110](https://github.com/polkadot-js/api/blob/3a7059459/packages/types/src/codec/Enum.ts#L110)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](_types_.registry.md) |
`def` | Record‹string, [InterfaceTypes](../modules/_types_.md#interfacetypes) &#124; [Constructor](_types_.constructor.md)› &#124; string[] |
`value?` | any |
`index?` | undefined &#124; number |

**Returns:** *[Data](_interfaces_identity_types_.data.md)*

## Properties

###  asBlakeTwo256

• **asBlakeTwo256**: *[H256](../classes/_primitive_h256_.h256.md)*

*Defined in [packages/types/src/interfaces/identity/types.ts:20](https://github.com/polkadot-js/api/blob/3a7059459/packages/types/src/interfaces/identity/types.ts#L20)*

H256

___

###  asKeccak256

• **asKeccak256**: *[H256](../classes/_primitive_h256_.h256.md)*

*Defined in [packages/types/src/interfaces/identity/types.ts:28](https://github.com/polkadot-js/api/blob/3a7059459/packages/types/src/interfaces/identity/types.ts#L28)*

H256

___

###  asRaw

• **asRaw**: *[Bytes](../classes/_primitive_bytes_.bytes.md)*

*Defined in [packages/types/src/interfaces/identity/types.ts:16](https://github.com/polkadot-js/api/blob/3a7059459/packages/types/src/interfaces/identity/types.ts#L16)*

Bytes

___

###  asSha256

• **asSha256**: *[H256](../classes/_primitive_h256_.h256.md)*

*Defined in [packages/types/src/interfaces/identity/types.ts:24](https://github.com/polkadot-js/api/blob/3a7059459/packages/types/src/interfaces/identity/types.ts#L24)*

H256

___

###  asShaThree256

• **asShaThree256**: *[H256](../classes/_primitive_h256_.h256.md)*

*Defined in [packages/types/src/interfaces/identity/types.ts:32](https://github.com/polkadot-js/api/blob/3a7059459/packages/types/src/interfaces/identity/types.ts#L32)*

H256

___

###  isBlakeTwo256

• **isBlakeTwo256**: *boolean*

*Defined in [packages/types/src/interfaces/identity/types.ts:18](https://github.com/polkadot-js/api/blob/3a7059459/packages/types/src/interfaces/identity/types.ts#L18)*

2:: BlakeTwo256(H256)

___

###  isKeccak256

• **isKeccak256**: *boolean*

*Defined in [packages/types/src/interfaces/identity/types.ts:26](https://github.com/polkadot-js/api/blob/3a7059459/packages/types/src/interfaces/identity/types.ts#L26)*

4:: Keccak256(H256)

___

###  isNone

• **isNone**: *boolean*

*Overrides [Enum](../classes/_codec_enum_.enum.md).[isNone](../classes/_codec_enum_.enum.md#isnone)*

*Defined in [packages/types/src/interfaces/identity/types.ts:12](https://github.com/polkadot-js/api/blob/3a7059459/packages/types/src/interfaces/identity/types.ts#L12)*

0:: None

___

###  isRaw

• **isRaw**: *boolean*

*Defined in [packages/types/src/interfaces/identity/types.ts:14](https://github.com/polkadot-js/api/blob/3a7059459/packages/types/src/interfaces/identity/types.ts#L14)*

1:: Raw(Bytes)

___

###  isSha256

• **isSha256**: *boolean*

*Defined in [packages/types/src/interfaces/identity/types.ts:22](https://github.com/polkadot-js/api/blob/3a7059459/packages/types/src/interfaces/identity/types.ts#L22)*

3:: Sha256(H256)

___

###  isShaThree256

• **isShaThree256**: *boolean*

*Defined in [packages/types/src/interfaces/identity/types.ts:30](https://github.com/polkadot-js/api/blob/3a7059459/packages/types/src/interfaces/identity/types.ts#L30)*

5:: ShaThree256(H256)

___

###  registry

• **registry**: *[Registry](_types_.registry.md)*

*Inherited from [Base](../classes/_codec_base_.base.md).[registry](../classes/_codec_base_.base.md#registry)*

*Defined in [packages/types/src/codec/Base.ts:16](https://github.com/polkadot-js/api/blob/3a7059459/packages/types/src/codec/Base.ts#L16)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[encodedLength](../classes/_codec_enum_.enum.md#encodedlength)*

*Overrides [Base](../classes/_codec_base_.base.md).[encodedLength](../classes/_codec_base_.base.md#encodedlength)*

*Defined in [packages/types/src/codec/Enum.ts:173](https://github.com/polkadot-js/api/blob/3a7059459/packages/types/src/codec/Enum.ts#L173)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](_types_.ihash.md)*

*Inherited from [Base](../classes/_codec_base_.base.md).[hash](../classes/_codec_base_.base.md#hash)*

*Defined in [packages/types/src/codec/Base.ts:35](https://github.com/polkadot-js/api/blob/3a7059459/packages/types/src/codec/Base.ts#L35)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](_types_.ihash.md)*

___

###  index

• **get index**(): *number*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[index](../classes/_codec_enum_.enum.md#index)*

*Defined in [packages/types/src/codec/Enum.ts:180](https://github.com/polkadot-js/api/blob/3a7059459/packages/types/src/codec/Enum.ts#L180)*

**`description`** The index of the metadata value

**Returns:** *number*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Base](../classes/_codec_base_.base.md).[isEmpty](../classes/_codec_base_.base.md#isempty)*

*Defined in [packages/types/src/codec/Base.ts:42](https://github.com/polkadot-js/api/blob/3a7059459/packages/types/src/codec/Base.ts#L42)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  isNull

• **get isNull**(): *boolean*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[isNull](../classes/_codec_enum_.enum.md#isnull)*

*Defined in [packages/types/src/codec/Enum.ts:194](https://github.com/polkadot-js/api/blob/3a7059459/packages/types/src/codec/Enum.ts#L194)*

**`description`** Checks if the Enum points to a [Null](../classes/_primitive_null_.null.md) type (deprecated, use isNone)

**Returns:** *boolean*

___

###  type

• **get type**(): *string*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[type](../classes/_codec_enum_.enum.md#type)*

*Defined in [packages/types/src/codec/Enum.ts:201](https://github.com/polkadot-js/api/blob/3a7059459/packages/types/src/codec/Enum.ts#L201)*

**`description`** The name of the type this enum value represents

**Returns:** *string*

___

###  value

• **get value**(): *[Codec](_types_.codec.md)*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[value](../classes/_codec_enum_.enum.md#value)*

*Defined in [packages/types/src/codec/Enum.ts:208](https://github.com/polkadot-js/api/blob/3a7059459/packages/types/src/codec/Enum.ts#L208)*

**`description`** The value of the enum

**Returns:** *[Codec](_types_.codec.md)*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[eq](../classes/_codec_enum_.enum.md#eq)*

*Overrides [Base](../classes/_codec_base_.base.md).[eq](../classes/_codec_base_.base.md#eq)*

*Defined in [packages/types/src/codec/Enum.ts:215](https://github.com/polkadot-js/api/blob/3a7059459/packages/types/src/codec/Enum.ts#L215)*

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

*Defined in [packages/types/src/codec/Enum.ts:238](https://github.com/polkadot-js/api/blob/3a7059459/packages/types/src/codec/Enum.ts#L238)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_.md#anyjson)*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[toJSON](../classes/_codec_enum_.enum.md#tojson)*

*Overrides [Base](../classes/_codec_base_.base.md).[toJSON](../classes/_codec_base_.base.md#tojson)*

*Defined in [packages/types/src/codec/Enum.ts:245](https://github.com/polkadot-js/api/blob/3a7059459/packages/types/src/codec/Enum.ts#L245)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

___

###  toNumber

▸ **toNumber**(): *number*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[toNumber](../classes/_codec_enum_.enum.md#tonumber)*

*Defined in [packages/types/src/codec/Enum.ts:254](https://github.com/polkadot-js/api/blob/3a7059459/packages/types/src/codec/Enum.ts#L254)*

**`description`** Returns the number representation for the value

**Returns:** *number*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[toRawType](../classes/_codec_enum_.enum.md#torawtype)*

*Overrides [Base](../classes/_codec_base_.base.md).[toRawType](../classes/_codec_base_.base.md#torawtype)*

*Defined in [packages/types/src/codec/Enum.ts:270](https://github.com/polkadot-js/api/blob/3a7059459/packages/types/src/codec/Enum.ts#L270)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[toString](../classes/_codec_enum_.enum.md#tostring)*

*Overrides [Base](../classes/_codec_base_.base.md).[toString](../classes/_codec_base_.base.md#tostring)*

*Defined in [packages/types/src/codec/Enum.ts:277](https://github.com/polkadot-js/api/blob/3a7059459/packages/types/src/codec/Enum.ts#L277)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[toU8a](../classes/_codec_enum_.enum.md#tou8a)*

*Overrides [Base](../classes/_codec_base_.base.md).[toU8a](../classes/_codec_base_.base.md#tou8a)*

*Defined in [packages/types/src/codec/Enum.ts:287](https://github.com/polkadot-js/api/blob/3a7059459/packages/types/src/codec/Enum.ts#L287)*

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

*Defined in [packages/types/src/codec/Enum.ts:137](https://github.com/polkadot-js/api/blob/3a7059459/packages/types/src/codec/Enum.ts#L137)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | Record‹string, [InterfaceTypes](../modules/_types_.md#interfacetypes) &#124; [Constructor](_types_.constructor.md)› &#124; string[] |

**Returns:** *[EnumConstructor](_codec_enum_.enumconstructor.md)‹[Enum](../classes/_codec_enum_.enum.md)›*
