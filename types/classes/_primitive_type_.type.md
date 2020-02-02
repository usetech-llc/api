[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["primitive/Type"](../modules/_primitive_type_.md) › [Type](_primitive_type_.type.md)

# Class: Type

**`name`** Type

**`description`** 
This is a extended version of String, specifically to handle types. Here we rely fully
on what string provides us, however we also adjust the types received from the runtime,
i.e. we remove the `T::` prefixes found in some types for consistency across implementation.

## Hierarchy

  ↳ [Text](_primitive_text_.text.md)

  ↳ **Type**

## Implements

* Codec

## Indexable

* \[ **index**: *number*\]: string

## Index

### Constructors

* [constructor](_primitive_type_.type.md#constructor)

### Properties

* [registry](_primitive_type_.type.md#registry)

### Accessors

* [encodedLength](_primitive_type_.type.md#encodedlength)
* [hash](_primitive_type_.type.md#hash)
* [isEmpty](_primitive_type_.type.md#isempty)
* [length](_primitive_type_.type.md#length)

### Methods

* [eq](_primitive_type_.type.md#eq)
* [setOverride](_primitive_type_.type.md#setoverride)
* [toHex](_primitive_type_.type.md#tohex)
* [toJSON](_primitive_type_.type.md#tojson)
* [toRawType](_primitive_type_.type.md#torawtype)
* [toString](_primitive_type_.type.md#tostring)
* [toU8a](_primitive_type_.type.md#tou8a)

## Constructors

###  constructor

\+ **new Type**(`registry`: Registry, `value`: [Text](_primitive_text_.text.md) | [Uint8Array](_codec_raw_.raw.md#static-uint8array) | string): *[Type](_primitive_type_.type.md)*

*Overrides [Text](_primitive_text_.text.md).[constructor](_primitive_text_.text.md#constructor)*

*Defined in [packages/types/src/primitive/Type.ts:18](https://github.com/polkadot-js/api/blob/56e28bed7f/packages/types/src/primitive/Type.ts#L18)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`registry` | Registry | - |
`value` | [Text](_primitive_text_.text.md) &#124; [Uint8Array](_codec_raw_.raw.md#static-uint8array) &#124; string | "" |

**Returns:** *[Type](_primitive_type_.type.md)*

## Properties

###  registry

• **registry**: *Registry*

*Inherited from [Text](_primitive_text_.text.md).[registry](_primitive_text_.text.md#registry)*

*Defined in [packages/types/src/primitive/Text.ts:25](https://github.com/polkadot-js/api/blob/56e28bed7f/packages/types/src/primitive/Text.ts#L25)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Overrides [Text](_primitive_text_.text.md).[encodedLength](_primitive_text_.text.md#encodedlength)*

*Defined in [packages/types/src/primitive/Type.ts:34](https://github.com/polkadot-js/api/blob/56e28bed7f/packages/types/src/primitive/Type.ts#L34)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *IHash*

*Inherited from [Text](_primitive_text_.text.md).[hash](_primitive_text_.text.md#hash)*

*Defined in [packages/types/src/primitive/Text.ts:70](https://github.com/polkadot-js/api/blob/56e28bed7f/packages/types/src/primitive/Text.ts#L70)*

**`description`** returns a hash of the contents

**Returns:** *IHash*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Text](_primitive_text_.text.md).[isEmpty](_primitive_text_.text.md#isempty)*

*Defined in [packages/types/src/primitive/Text.ts:77](https://github.com/polkadot-js/api/blob/56e28bed7f/packages/types/src/primitive/Text.ts#L77)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Inherited from [Text](_primitive_text_.text.md).[length](_primitive_text_.text.md#length)*

*Overrides void*

*Defined in [packages/types/src/primitive/Text.ts:84](https://github.com/polkadot-js/api/blob/56e28bed7f/packages/types/src/primitive/Text.ts#L84)*

**`description`** The length of the value

**Returns:** *number*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Text](_primitive_text_.text.md).[eq](_primitive_text_.text.md#eq)*

*Defined in [packages/types/src/primitive/Text.ts:92](https://github.com/polkadot-js/api/blob/56e28bed7f/packages/types/src/primitive/Text.ts#L92)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  setOverride

▸ **setOverride**(`override`: string): *void*

*Inherited from [Text](_primitive_text_.text.md).[setOverride](_primitive_text_.text.md#setoverride)*

*Defined in [packages/types/src/primitive/Text.ts:101](https://github.com/polkadot-js/api/blob/56e28bed7f/packages/types/src/primitive/Text.ts#L101)*

**`description`** Set an override value for this

**Parameters:**

Name | Type |
------ | ------ |
`override` | string |

**Returns:** *void*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Text](_primitive_text_.text.md).[toHex](_primitive_text_.text.md#tohex)*

*Defined in [packages/types/src/primitive/Text.ts:108](https://github.com/polkadot-js/api/blob/56e28bed7f/packages/types/src/primitive/Text.ts#L108)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *string*

*Inherited from [Text](_primitive_text_.text.md).[toJSON](_primitive_text_.text.md#tojson)*

*Defined in [packages/types/src/primitive/Text.ts:117](https://github.com/polkadot-js/api/blob/56e28bed7f/packages/types/src/primitive/Text.ts#L117)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Overrides [Text](_primitive_text_.text.md).[toRawType](_primitive_text_.text.md#torawtype)*

*Defined in [packages/types/src/primitive/Type.ts:44](https://github.com/polkadot-js/api/blob/56e28bed7f/packages/types/src/primitive/Type.ts#L44)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Text](_primitive_text_.text.md).[toString](_primitive_text_.text.md#tostring)*

*Overrides void*

*Defined in [packages/types/src/primitive/Text.ts:131](https://github.com/polkadot-js/api/blob/56e28bed7f/packages/types/src/primitive/Text.ts#L131)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Inherited from [Text](_primitive_text_.text.md).[toU8a](_primitive_text_.text.md#tou8a)*

*Defined in [packages/types/src/primitive/Text.ts:139](https://github.com/polkadot-js/api/blob/56e28bed7f/packages/types/src/primitive/Text.ts#L139)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*
