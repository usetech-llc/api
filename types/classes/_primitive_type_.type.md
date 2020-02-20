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

* [Codec](../interfaces/_types_codec_.codec.md)

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
* [toHuman](_primitive_type_.type.md#tohuman)
* [toJSON](_primitive_type_.type.md#tojson)
* [toRawType](_primitive_type_.type.md#torawtype)
* [toString](_primitive_type_.type.md#tostring)
* [toU8a](_primitive_type_.type.md#tou8a)

## Constructors

###  constructor

\+ **new Type**(`registry`: [Registry](../interfaces/_types_registry_.registry.md), `value`: [Text](_primitive_text_.text.md) | [Uint8Array](_codec_raw_.raw.md#static-uint8array) | string): *[Type](_primitive_type_.type.md)*

*Overrides [Text](_primitive_text_.text.md).[constructor](_primitive_text_.text.md#constructor)*

*Defined in [packages/types/src/primitive/Type.ts:17](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/primitive/Type.ts#L17)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`registry` | [Registry](../interfaces/_types_registry_.registry.md) | - |
`value` | [Text](_primitive_text_.text.md) &#124; [Uint8Array](_codec_raw_.raw.md#static-uint8array) &#124; string | "" |

**Returns:** *[Type](_primitive_type_.type.md)*

## Properties

###  registry

• **registry**: *[Registry](../interfaces/_types_registry_.registry.md)*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md).[registry](../interfaces/_types_codec_.codec.md#registry)*

*Inherited from [Text](_primitive_text_.text.md).[registry](_primitive_text_.text.md#registry)*

*Defined in [packages/types/src/primitive/Text.ts:52](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/primitive/Text.ts#L52)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Text](_primitive_text_.text.md).[encodedLength](_primitive_text_.text.md#encodedlength)*

*Defined in [packages/types/src/primitive/Text.ts:64](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/primitive/Text.ts#L64)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *H256*

*Inherited from [Text](_primitive_text_.text.md).[hash](_primitive_text_.text.md#hash)*

*Defined in [packages/types/src/primitive/Text.ts:71](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/primitive/Text.ts#L71)*

**`description`** returns a hash of the contents

**Returns:** *H256*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Text](_primitive_text_.text.md).[isEmpty](_primitive_text_.text.md#isempty)*

*Defined in [packages/types/src/primitive/Text.ts:78](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/primitive/Text.ts#L78)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Inherited from [Text](_primitive_text_.text.md).[length](_primitive_text_.text.md#length)*

*Overrides [RegistryMetadataText](../interfaces/_types_registry_.registrymetadatatext.md).[length](../interfaces/_types_registry_.registrymetadatatext.md#length)*

*Defined in [packages/types/src/primitive/Text.ts:85](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/primitive/Text.ts#L85)*

**`description`** The length of the value

**Returns:** *number*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Inherited from [Text](_primitive_text_.text.md).[eq](_primitive_text_.text.md#eq)*

*Defined in [packages/types/src/primitive/Text.ts:93](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/primitive/Text.ts#L93)*

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

*Defined in [packages/types/src/primitive/Text.ts:102](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/primitive/Text.ts#L102)*

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

*Defined in [packages/types/src/primitive/Text.ts:109](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/primitive/Text.ts#L109)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(): *string*

*Inherited from [Text](_primitive_text_.text.md).[toHuman](_primitive_text_.text.md#tohuman)*

*Defined in [packages/types/src/primitive/Text.ts:118](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/primitive/Text.ts#L118)*

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *string*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Inherited from [Text](_primitive_text_.text.md).[toJSON](_primitive_text_.text.md#tojson)*

*Defined in [packages/types/src/primitive/Text.ts:125](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/primitive/Text.ts#L125)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Overrides [Text](_primitive_text_.text.md).[toRawType](_primitive_text_.text.md#torawtype)*

*Defined in [packages/types/src/primitive/Type.ts:27](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/primitive/Type.ts#L27)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Inherited from [Text](_primitive_text_.text.md).[toString](_primitive_text_.text.md#tostring)*

*Overrides [RegistryMetadataText](../interfaces/_types_registry_.registrymetadatatext.md).[toString](../interfaces/_types_registry_.registrymetadatatext.md#tostring)*

*Defined in [packages/types/src/primitive/Text.ts:139](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/primitive/Text.ts#L139)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Inherited from [Text](_primitive_text_.text.md).[toU8a](_primitive_text_.text.md#tou8a)*

*Defined in [packages/types/src/primitive/Text.ts:147](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/primitive/Text.ts#L147)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*
