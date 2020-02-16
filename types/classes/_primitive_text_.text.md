[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["primitive/Text"](../modules/_primitive_text_.md) › [Text](_primitive_text_.text.md)

# Class: Text

**`name`** Text

**`description`** 
This is a string wrapper, along with the length. It is used both for strings as well
as items such as documentation. It simply extends the standard JS `String` built-in
object, inheriting all methods exposed from `String`.

## Hierarchy

* [String](_primitive_text_.text.md#static-string)

  ↳ **Text**

  ↳ [Type](_primitive_type_.type.md)

## Implements

* Codec

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
* [setOverride](_primitive_text_.text.md#setoverride)
* [toHex](_primitive_text_.text.md#tohex)
* [toJSON](_primitive_text_.text.md#tojson)
* [toRawType](_primitive_text_.text.md#torawtype)
* [toString](_primitive_text_.text.md#tostring)
* [toU8a](_primitive_text_.text.md#tou8a)

## Constructors

###  constructor

\+ **new Text**(`registry`: Registry, `value`: [Text](_primitive_text_.text.md) | string | AnyU8a | object): *[Text](_primitive_text_.text.md)*

*Defined in [packages/types/src/primitive/Text.ts:52](https://github.com/polkadot-js/api/blob/c465252e69/packages/types/src/primitive/Text.ts#L52)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`registry` | Registry | - |
`value` | [Text](_primitive_text_.text.md) &#124; string &#124; AnyU8a &#124; object | "" |

**Returns:** *[Text](_primitive_text_.text.md)*

## Properties

###  registry

• **registry**: *Registry*

*Defined in [packages/types/src/primitive/Text.ts:51](https://github.com/polkadot-js/api/blob/c465252e69/packages/types/src/primitive/Text.ts#L51)*

___

### `Static` String

▪ **String**: *StringConstructor*

Defined in node_modules/typescript/lib/lib.es5.d.ts:527

Allows manipulation and formatting of text strings and determination and location of substrings within strings.

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Defined in [packages/types/src/primitive/Text.ts:63](https://github.com/polkadot-js/api/blob/c465252e69/packages/types/src/primitive/Text.ts#L63)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *IHash*

*Defined in [packages/types/src/primitive/Text.ts:70](https://github.com/polkadot-js/api/blob/c465252e69/packages/types/src/primitive/Text.ts#L70)*

**`description`** returns a hash of the contents

**Returns:** *IHash*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Defined in [packages/types/src/primitive/Text.ts:77](https://github.com/polkadot-js/api/blob/c465252e69/packages/types/src/primitive/Text.ts#L77)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Overrides void*

*Defined in [packages/types/src/primitive/Text.ts:84](https://github.com/polkadot-js/api/blob/c465252e69/packages/types/src/primitive/Text.ts#L84)*

**`description`** The length of the value

**Returns:** *number*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Defined in [packages/types/src/primitive/Text.ts:92](https://github.com/polkadot-js/api/blob/c465252e69/packages/types/src/primitive/Text.ts#L92)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  setOverride

▸ **setOverride**(`override`: string): *void*

*Defined in [packages/types/src/primitive/Text.ts:101](https://github.com/polkadot-js/api/blob/c465252e69/packages/types/src/primitive/Text.ts#L101)*

**`description`** Set an override value for this

**Parameters:**

Name | Type |
------ | ------ |
`override` | string |

**Returns:** *void*

___

###  toHex

▸ **toHex**(): *string*

*Defined in [packages/types/src/primitive/Text.ts:108](https://github.com/polkadot-js/api/blob/c465252e69/packages/types/src/primitive/Text.ts#L108)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *string*

*Defined in [packages/types/src/primitive/Text.ts:117](https://github.com/polkadot-js/api/blob/c465252e69/packages/types/src/primitive/Text.ts#L117)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Defined in [packages/types/src/primitive/Text.ts:124](https://github.com/polkadot-js/api/blob/c465252e69/packages/types/src/primitive/Text.ts#L124)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Overrides void*

*Defined in [packages/types/src/primitive/Text.ts:131](https://github.com/polkadot-js/api/blob/c465252e69/packages/types/src/primitive/Text.ts#L131)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Defined in [packages/types/src/primitive/Text.ts:139](https://github.com/polkadot-js/api/blob/c465252e69/packages/types/src/primitive/Text.ts#L139)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*
