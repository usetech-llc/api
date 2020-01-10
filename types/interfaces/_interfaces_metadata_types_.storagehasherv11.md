[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/metadata/types"](../modules/_interfaces_metadata_types_.md) › [StorageHasherV11](_interfaces_metadata_types_.storagehasherv11.md)

# Interface: StorageHasherV11

StorageHasherV10

## Hierarchy

  ↳ [StorageHasherV10](../classes/_primitive_storagehasher_.storagehasherv10.md)

  ↳ **StorageHasherV11**

  ↳ [StorageHasher](_interfaces_metadata_types_.storagehasher.md)

## Implements

* [Codec](_types_.codec.md)

## Index

### Constructors

* [constructor](_interfaces_metadata_types_.storagehasherv11.md#constructor)

### Properties

* [registry](_interfaces_metadata_types_.storagehasherv11.md#registry)

### Accessors

* [encodedLength](_interfaces_metadata_types_.storagehasherv11.md#encodedlength)
* [hash](_interfaces_metadata_types_.storagehasherv11.md#hash)
* [index](_interfaces_metadata_types_.storagehasherv11.md#index)
* [isBlake2128](_interfaces_metadata_types_.storagehasherv11.md#isblake2128)
* [isBlake2128Concat](_interfaces_metadata_types_.storagehasherv11.md#isblake2128concat)
* [isBlake2256](_interfaces_metadata_types_.storagehasherv11.md#isblake2256)
* [isEmpty](_interfaces_metadata_types_.storagehasherv11.md#isempty)
* [isNone](_interfaces_metadata_types_.storagehasherv11.md#isnone)
* [isNull](_interfaces_metadata_types_.storagehasherv11.md#isnull)
* [isTwox128](_interfaces_metadata_types_.storagehasherv11.md#istwox128)
* [isTwox256](_interfaces_metadata_types_.storagehasherv11.md#istwox256)
* [isTwox64Concat](_interfaces_metadata_types_.storagehasherv11.md#istwox64concat)
* [type](_interfaces_metadata_types_.storagehasherv11.md#type)
* [value](_interfaces_metadata_types_.storagehasherv11.md#value)

### Methods

* [eq](_interfaces_metadata_types_.storagehasherv11.md#eq)
* [toHex](_interfaces_metadata_types_.storagehasherv11.md#tohex)
* [toJSON](_interfaces_metadata_types_.storagehasherv11.md#tojson)
* [toNumber](_interfaces_metadata_types_.storagehasherv11.md#tonumber)
* [toRawType](_interfaces_metadata_types_.storagehasherv11.md#torawtype)
* [toString](_interfaces_metadata_types_.storagehasherv11.md#tostring)
* [toU8a](_interfaces_metadata_types_.storagehasherv11.md#tou8a)
* [with](_interfaces_metadata_types_.storagehasherv11.md#static-with)

## Constructors

###  constructor

\+ **new StorageHasherV11**(`registry`: [Registry](_types_.registry.md), `value?`: any): *[StorageHasherV11](_interfaces_metadata_types_.storagehasherv11.md)*

*Inherited from [StorageHasherV10](../classes/_primitive_storagehasher_.storagehasherv10.md).[constructor](../classes/_primitive_storagehasher_.storagehasherv10.md#constructor)*

*Overrides [Enum](../classes/_codec_enum_.enum.md).[constructor](../classes/_codec_enum_.enum.md#constructor)*

*Defined in [packages/types/src/primitive/StorageHasher.ts:61](https://github.com/polkadot-js/api/blob/f77ae4d99f/packages/types/src/primitive/StorageHasher.ts#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](_types_.registry.md) |
`value?` | any |

**Returns:** *[StorageHasherV11](_interfaces_metadata_types_.storagehasherv11.md)*

## Properties

###  registry

• **registry**: *[Registry](_types_.registry.md)*

*Inherited from [Base](../classes/_codec_base_.base.md).[registry](../classes/_codec_base_.base.md#registry)*

*Defined in [packages/types/src/codec/Base.ts:16](https://github.com/polkadot-js/api/blob/f77ae4d99f/packages/types/src/codec/Base.ts#L16)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[encodedLength](../classes/_codec_enum_.enum.md#encodedlength)*

*Overrides [Base](../classes/_codec_base_.base.md).[encodedLength](../classes/_codec_base_.base.md#encodedlength)*

*Defined in [packages/types/src/codec/Enum.ts:173](https://github.com/polkadot-js/api/blob/f77ae4d99f/packages/types/src/codec/Enum.ts#L173)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](_types_.ihash.md)*

*Inherited from [Base](../classes/_codec_base_.base.md).[hash](../classes/_codec_base_.base.md#hash)*

*Defined in [packages/types/src/codec/Base.ts:35](https://github.com/polkadot-js/api/blob/f77ae4d99f/packages/types/src/codec/Base.ts#L35)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](_types_.ihash.md)*

___

###  index

• **get index**(): *number*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[index](../classes/_codec_enum_.enum.md#index)*

*Defined in [packages/types/src/codec/Enum.ts:180](https://github.com/polkadot-js/api/blob/f77ae4d99f/packages/types/src/codec/Enum.ts#L180)*

**`description`** The index of the metadata value

**Returns:** *number*

___

###  isBlake2128

• **get isBlake2128**(): *boolean*

*Inherited from [StorageHasherV10](../classes/_primitive_storagehasher_.storagehasherv10.md).[isBlake2128](../classes/_primitive_storagehasher_.storagehasherv10.md#isblake2128)*

*Defined in [packages/types/src/primitive/StorageHasher.ts:76](https://github.com/polkadot-js/api/blob/f77ae4d99f/packages/types/src/primitive/StorageHasher.ts#L76)*

**`description`** Is the enum Blake2_128?

**Returns:** *boolean*

___

###  isBlake2128Concat

• **get isBlake2128Concat**(): *boolean*

*Inherited from [StorageHasherV10](../classes/_primitive_storagehasher_.storagehasherv10.md).[isBlake2128Concat](../classes/_primitive_storagehasher_.storagehasherv10.md#isblake2128concat)*

*Defined in [packages/types/src/primitive/StorageHasher.ts:90](https://github.com/polkadot-js/api/blob/f77ae4d99f/packages/types/src/primitive/StorageHasher.ts#L90)*

**`description`** Is the enum Blake2_128Concat?

**Returns:** *boolean*

___

###  isBlake2256

• **get isBlake2256**(): *boolean*

*Inherited from [StorageHasherV10](../classes/_primitive_storagehasher_.storagehasherv10.md).[isBlake2256](../classes/_primitive_storagehasher_.storagehasherv10.md#isblake2256)*

*Defined in [packages/types/src/primitive/StorageHasher.ts:83](https://github.com/polkadot-js/api/blob/f77ae4d99f/packages/types/src/primitive/StorageHasher.ts#L83)*

**`description`** Is the enum Blake2_256?

**Returns:** *boolean*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Base](../classes/_codec_base_.base.md).[isEmpty](../classes/_codec_base_.base.md#isempty)*

*Defined in [packages/types/src/codec/Base.ts:42](https://github.com/polkadot-js/api/blob/f77ae4d99f/packages/types/src/codec/Base.ts#L42)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  isNone

• **get isNone**(): *boolean*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[isNone](../classes/_codec_enum_.enum.md#isnone)*

*Defined in [packages/types/src/codec/Enum.ts:187](https://github.com/polkadot-js/api/blob/f77ae4d99f/packages/types/src/codec/Enum.ts#L187)*

**`description`** Checks if the Enum points to a [Null](../classes/_primitive_null_.null.md) type

**Returns:** *boolean*

___

###  isNull

• **get isNull**(): *boolean*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[isNull](../classes/_codec_enum_.enum.md#isnull)*

*Defined in [packages/types/src/codec/Enum.ts:194](https://github.com/polkadot-js/api/blob/f77ae4d99f/packages/types/src/codec/Enum.ts#L194)*

**`description`** Checks if the Enum points to a [Null](../classes/_primitive_null_.null.md) type (deprecated, use isNone)

**Returns:** *boolean*

___

###  isTwox128

• **get isTwox128**(): *boolean*

*Inherited from [StorageHasherV10](../classes/_primitive_storagehasher_.storagehasherv10.md).[isTwox128](../classes/_primitive_storagehasher_.storagehasherv10.md#istwox128)*

*Defined in [packages/types/src/primitive/StorageHasher.ts:97](https://github.com/polkadot-js/api/blob/f77ae4d99f/packages/types/src/primitive/StorageHasher.ts#L97)*

**`description`** Is the enum Twox128?

**Returns:** *boolean*

___

###  isTwox256

• **get isTwox256**(): *boolean*

*Inherited from [StorageHasherV10](../classes/_primitive_storagehasher_.storagehasherv10.md).[isTwox256](../classes/_primitive_storagehasher_.storagehasherv10.md#istwox256)*

*Defined in [packages/types/src/primitive/StorageHasher.ts:104](https://github.com/polkadot-js/api/blob/f77ae4d99f/packages/types/src/primitive/StorageHasher.ts#L104)*

**`description`** Is the enum Twox256?

**Returns:** *boolean*

___

###  isTwox64Concat

• **get isTwox64Concat**(): *boolean*

*Inherited from [StorageHasherV10](../classes/_primitive_storagehasher_.storagehasherv10.md).[isTwox64Concat](../classes/_primitive_storagehasher_.storagehasherv10.md#istwox64concat)*

*Defined in [packages/types/src/primitive/StorageHasher.ts:111](https://github.com/polkadot-js/api/blob/f77ae4d99f/packages/types/src/primitive/StorageHasher.ts#L111)*

**`description`** Is the enum isTwox64Concat?

**Returns:** *boolean*

___

###  type

• **get type**(): *string*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[type](../classes/_codec_enum_.enum.md#type)*

*Defined in [packages/types/src/codec/Enum.ts:201](https://github.com/polkadot-js/api/blob/f77ae4d99f/packages/types/src/codec/Enum.ts#L201)*

**`description`** The name of the type this enum value represents

**Returns:** *string*

___

###  value

• **get value**(): *[Codec](_types_.codec.md)*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[value](../classes/_codec_enum_.enum.md#value)*

*Defined in [packages/types/src/codec/Enum.ts:208](https://github.com/polkadot-js/api/blob/f77ae4d99f/packages/types/src/codec/Enum.ts#L208)*

**`description`** The value of the enum

**Returns:** *[Codec](_types_.codec.md)*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[eq](../classes/_codec_enum_.enum.md#eq)*

*Overrides [Base](../classes/_codec_base_.base.md).[eq](../classes/_codec_base_.base.md#eq)*

*Defined in [packages/types/src/codec/Enum.ts:215](https://github.com/polkadot-js/api/blob/f77ae4d99f/packages/types/src/codec/Enum.ts#L215)*

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

*Defined in [packages/types/src/codec/Enum.ts:238](https://github.com/polkadot-js/api/blob/f77ae4d99f/packages/types/src/codec/Enum.ts#L238)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *string*

*Inherited from [StorageHasherV10](../classes/_primitive_storagehasher_.storagehasherv10.md).[toJSON](../classes/_primitive_storagehasher_.storagehasherv10.md#tojson)*

*Overrides [Enum](../classes/_codec_enum_.enum.md).[toJSON](../classes/_codec_enum_.enum.md#tojson)*

*Defined in [packages/types/src/primitive/StorageHasher.ts:115](https://github.com/polkadot-js/api/blob/f77ae4d99f/packages/types/src/primitive/StorageHasher.ts#L115)*

**Returns:** *string*

___

###  toNumber

▸ **toNumber**(): *number*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[toNumber](../classes/_codec_enum_.enum.md#tonumber)*

*Defined in [packages/types/src/codec/Enum.ts:254](https://github.com/polkadot-js/api/blob/f77ae4d99f/packages/types/src/codec/Enum.ts#L254)*

**`description`** Returns the number representation for the value

**Returns:** *number*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[toRawType](../classes/_codec_enum_.enum.md#torawtype)*

*Overrides [Base](../classes/_codec_base_.base.md).[toRawType](../classes/_codec_base_.base.md#torawtype)*

*Defined in [packages/types/src/codec/Enum.ts:270](https://github.com/polkadot-js/api/blob/f77ae4d99f/packages/types/src/codec/Enum.ts#L270)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[toString](../classes/_codec_enum_.enum.md#tostring)*

*Overrides [Base](../classes/_codec_base_.base.md).[toString](../classes/_codec_base_.base.md#tostring)*

*Defined in [packages/types/src/codec/Enum.ts:277](https://github.com/polkadot-js/api/blob/f77ae4d99f/packages/types/src/codec/Enum.ts#L277)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[toU8a](../classes/_codec_enum_.enum.md#tou8a)*

*Overrides [Base](../classes/_codec_base_.base.md).[toU8a](../classes/_codec_base_.base.md#tou8a)*

*Defined in [packages/types/src/codec/Enum.ts:287](https://github.com/polkadot-js/api/blob/f77ae4d99f/packages/types/src/codec/Enum.ts#L287)*

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

*Defined in [packages/types/src/codec/Enum.ts:137](https://github.com/polkadot-js/api/blob/f77ae4d99f/packages/types/src/codec/Enum.ts#L137)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | Record‹string, [InterfaceTypes](../modules/_types_.md#interfacetypes) &#124; [Constructor](_types_.constructor.md)› &#124; string[] |

**Returns:** *[EnumConstructor](_codec_enum_.enumconstructor.md)‹[Enum](../classes/_codec_enum_.enum.md)›*
