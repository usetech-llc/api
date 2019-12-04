[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/metadata/types"](../modules/_interfaces_metadata_types_.md) › [PlainTypeLatest](_interfaces_metadata_types_.plaintypelatest.md)

# Interface: PlainTypeLatest

PlainTypeV10

## Hierarchy

  ↳ [PlainTypeV10](_interfaces_metadata_types_.plaintypev10.md)

  ↳ **PlainTypeLatest**

## Implements

* [Codec](_types_.codec.md)

## Indexable

* \[ **index**: *number*\]: string

PlainTypeV10

## Index

### Constructors

* [constructor](_interfaces_metadata_types_.plaintypelatest.md#constructor)

### Properties

* [registry](_interfaces_metadata_types_.plaintypelatest.md#registry)

### Accessors

* [encodedLength](_interfaces_metadata_types_.plaintypelatest.md#encodedlength)
* [hash](_interfaces_metadata_types_.plaintypelatest.md#hash)
* [isEmpty](_interfaces_metadata_types_.plaintypelatest.md#isempty)
* [length](_interfaces_metadata_types_.plaintypelatest.md#length)

### Methods

* [eq](_interfaces_metadata_types_.plaintypelatest.md#eq)
* [toHex](_interfaces_metadata_types_.plaintypelatest.md#tohex)
* [toJSON](_interfaces_metadata_types_.plaintypelatest.md#tojson)
* [toRawType](_interfaces_metadata_types_.plaintypelatest.md#torawtype)
* [toString](_interfaces_metadata_types_.plaintypelatest.md#tostring)
* [toU8a](_interfaces_metadata_types_.plaintypelatest.md#tou8a)

## Constructors

###  constructor

\+ **new PlainTypeLatest**(`registry`: [Registry](_types_.registry.md), `value`: [Text](../classes/_primitive_text_.text.md) | Uint8Array | string): *[PlainTypeLatest](_interfaces_metadata_types_.plaintypelatest.md)*

*Inherited from [Type](../classes/_primitive_type_.type.md).[constructor](../classes/_primitive_type_.type.md#constructor)*

*Overrides [Text](../classes/_primitive_text_.text.md).[constructor](../classes/_primitive_text_.text.md#constructor)*

*Defined in [packages/types/src/primitive/Type.ts:18](https://github.com/polkadot-js/api/blob/64a4bb2e1/packages/types/src/primitive/Type.ts#L18)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`registry` | [Registry](_types_.registry.md) | - |
`value` | [Text](../classes/_primitive_text_.text.md) &#124; Uint8Array &#124; string | "" |

**Returns:** *[PlainTypeLatest](_interfaces_metadata_types_.plaintypelatest.md)*

## Properties

###  registry

• **registry**: *[Registry](_types_.registry.md)*

*Inherited from [Text](../classes/_primitive_text_.text.md).[registry](../classes/_primitive_text_.text.md#registry)*

*Defined in [packages/types/src/primitive/Text.ts:24](https://github.com/polkadot-js/api/blob/64a4bb2e1/packages/types/src/primitive/Text.ts#L24)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Type](../classes/_primitive_type_.type.md).[encodedLength](../classes/_primitive_type_.type.md#encodedlength)*

*Overrides [Text](../classes/_primitive_text_.text.md).[encodedLength](../classes/_primitive_text_.text.md#encodedlength)*

*Defined in [packages/types/src/primitive/Type.ts:34](https://github.com/polkadot-js/api/blob/64a4bb2e1/packages/types/src/primitive/Type.ts#L34)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](_types_.ihash.md)*

*Inherited from [Text](../classes/_primitive_text_.text.md).[hash](../classes/_primitive_text_.text.md#hash)*

*Defined in [packages/types/src/primitive/Text.ts:61](https://github.com/polkadot-js/api/blob/64a4bb2e1/packages/types/src/primitive/Text.ts#L61)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Text](../classes/_primitive_text_.text.md).[isEmpty](../classes/_primitive_text_.text.md#isempty)*

*Defined in [packages/types/src/primitive/Text.ts:68](https://github.com/polkadot-js/api/blob/64a4bb2e1/packages/types/src/primitive/Text.ts#L68)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Inherited from [Text](../classes/_primitive_text_.text.md).[length](../classes/_primitive_text_.text.md#length)*

*Overrides void*

*Defined in [packages/types/src/primitive/Text.ts:75](https://github.com/polkadot-js/api/blob/64a4bb2e1/packages/types/src/primitive/Text.ts#L75)*

**`description`** The length of the value

**Returns:** *number*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Text](../classes/_primitive_text_.text.md).[eq](../classes/_primitive_text_.text.md#eq)*

*Defined in [packages/types/src/primitive/Text.ts:83](https://github.com/polkadot-js/api/blob/64a4bb2e1/packages/types/src/primitive/Text.ts#L83)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Text](../classes/_primitive_text_.text.md).[toHex](../classes/_primitive_text_.text.md#tohex)*

*Defined in [packages/types/src/primitive/Text.ts:92](https://github.com/polkadot-js/api/blob/64a4bb2e1/packages/types/src/primitive/Text.ts#L92)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *string*

*Inherited from [Text](../classes/_primitive_text_.text.md).[toJSON](../classes/_primitive_text_.text.md#tojson)*

*Defined in [packages/types/src/primitive/Text.ts:101](https://github.com/polkadot-js/api/blob/64a4bb2e1/packages/types/src/primitive/Text.ts#L101)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Type](../classes/_primitive_type_.type.md).[toRawType](../classes/_primitive_type_.type.md#torawtype)*

*Overrides [Text](../classes/_primitive_text_.text.md).[toRawType](../classes/_primitive_text_.text.md#torawtype)*

*Defined in [packages/types/src/primitive/Type.ts:44](https://github.com/polkadot-js/api/blob/64a4bb2e1/packages/types/src/primitive/Type.ts#L44)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Text](../classes/_primitive_text_.text.md).[toString](../classes/_primitive_text_.text.md#tostring)*

*Overrides void*

*Defined in [packages/types/src/primitive/Text.ts:115](https://github.com/polkadot-js/api/blob/64a4bb2e1/packages/types/src/primitive/Text.ts#L115)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from [Text](../classes/_primitive_text_.text.md).[toU8a](../classes/_primitive_text_.text.md#tou8a)*

*Defined in [packages/types/src/primitive/Text.ts:124](https://github.com/polkadot-js/api/blob/64a4bb2e1/packages/types/src/primitive/Text.ts#L124)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*
