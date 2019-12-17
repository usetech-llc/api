[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["primitive/Text"](../modules/_primitive_text_.md) › [Text](_primitive_text_.text.md)

# Class: Text

**`name`** Text

**`description`** 
This is a string wrapper, along with the length. It is used both for strings as well
as items such as documentation. It simply extends the standard JS `String` built-in
object, inheriting all methods exposed from `String`.

## Hierarchy

* String

  ↳ **Text**

  ↳ [Type](_primitive_type_.type.md)

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Indexable

* \[ **index**: *number*\]: string

## Index

### Constructors

* [constructor](_primitive_text_.text.md#constructor)

### Properties

* [registry](_primitive_text_.text.md#registry)
* [String](_primitive_text_.text.md#static-string)

### Accessors

* [encodedLength](_primitive_text_.text.md#encodedlength)
* [hash](_primitive_text_.text.md#hash)
* [isEmpty](_primitive_text_.text.md#isempty)
* [length](_primitive_text_.text.md#length)

### Methods

* [eq](_primitive_text_.text.md#eq)
* [toHex](_primitive_text_.text.md#tohex)
* [toJSON](_primitive_text_.text.md#tojson)
* [toRawType](_primitive_text_.text.md#torawtype)
* [toString](_primitive_text_.text.md#tostring)
* [toU8a](_primitive_text_.text.md#tou8a)

## Constructors

###  constructor

\+ **new Text**(`registry`: [Registry](../interfaces/_types_.registry.md), `value`: [Text](_primitive_text_.text.md) | string | [AnyU8a](../modules/_types_.md#anyu8a) | object): *[Text](_primitive_text_.text.md)*

*Defined in [packages/types/src/primitive/Text.ts:25](https://github.com/polkadot-js/api/blob/006c686c1/packages/types/src/primitive/Text.ts#L25)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`registry` | [Registry](../interfaces/_types_.registry.md) | - |
`value` | [Text](_primitive_text_.text.md) &#124; string &#124; [AnyU8a](../modules/_types_.md#anyu8a) &#124; object | "" |

**Returns:** *[Text](_primitive_text_.text.md)*

## Properties

###  registry

• **registry**: *[Registry](../interfaces/_types_.registry.md)*

*Implementation of [Codec](../interfaces/_types_.codec.md).[registry](../interfaces/_types_.codec.md#registry)*

*Defined in [packages/types/src/primitive/Text.ts:25](https://github.com/polkadot-js/api/blob/006c686c1/packages/types/src/primitive/Text.ts#L25)*

___

### `Static` String

▪ **String**: *StringConstructor*

Defined in node_modules/typescript/lib/lib.es5.d.ts:527

Allows manipulation and formatting of text strings and determination and location of substrings within strings.

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Defined in [packages/types/src/primitive/Text.ts:61](https://github.com/polkadot-js/api/blob/006c686c1/packages/types/src/primitive/Text.ts#L61)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](../interfaces/_types_.ihash.md)*

*Defined in [packages/types/src/primitive/Text.ts:68](https://github.com/polkadot-js/api/blob/006c686c1/packages/types/src/primitive/Text.ts#L68)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](../interfaces/_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Defined in [packages/types/src/primitive/Text.ts:75](https://github.com/polkadot-js/api/blob/006c686c1/packages/types/src/primitive/Text.ts#L75)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Overrides void*

*Defined in [packages/types/src/primitive/Text.ts:82](https://github.com/polkadot-js/api/blob/006c686c1/packages/types/src/primitive/Text.ts#L82)*

**`description`** The length of the value

**Returns:** *number*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [packages/types/src/primitive/Text.ts:90](https://github.com/polkadot-js/api/blob/006c686c1/packages/types/src/primitive/Text.ts#L90)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(): *string*

*Defined in [packages/types/src/primitive/Text.ts:99](https://github.com/polkadot-js/api/blob/006c686c1/packages/types/src/primitive/Text.ts#L99)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [packages/types/src/primitive/Text.ts:108](https://github.com/polkadot-js/api/blob/006c686c1/packages/types/src/primitive/Text.ts#L108)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [packages/types/src/primitive/Text.ts:115](https://github.com/polkadot-js/api/blob/006c686c1/packages/types/src/primitive/Text.ts#L115)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Overrides void*

*Defined in [packages/types/src/primitive/Text.ts:122](https://github.com/polkadot-js/api/blob/006c686c1/packages/types/src/primitive/Text.ts#L122)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Defined in [packages/types/src/primitive/Text.ts:131](https://github.com/polkadot-js/api/blob/006c686c1/packages/types/src/primitive/Text.ts#L131)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*
