[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["codec/Option"](../modules/_codec_option_.md) › [Option](_codec_option_.option.md)

# Class: Option <**T**>

**`name`** Option

**`description`** 
An Option is an optional field. Basically the first byte indicates that there is
is value to follow. If the byte is `1` there is an actual value. So the Option
implements that - decodes, checks for optionality and wraps the required structure
with a value if/as required/found.

## Type parameters

▪ **T**: *Codec*

## Hierarchy

* [Base](_codec_base_.base.md)‹T›

  ↳ **Option**

## Implements

* Codec

## Index

### Constructors

* [constructor](_codec_option_.option.md#constructor)

### Properties

* [registry](_codec_option_.option.md#registry)

### Accessors

* [encodedLength](_codec_option_.option.md#encodedlength)
* [hash](_codec_option_.option.md#hash)
* [isEmpty](_codec_option_.option.md#isempty)
* [isNone](_codec_option_.option.md#isnone)
* [isSome](_codec_option_.option.md#issome)
* [value](_codec_option_.option.md#value)

### Methods

* [eq](_codec_option_.option.md#eq)
* [toHex](_codec_option_.option.md#tohex)
* [toJSON](_codec_option_.option.md#tojson)
* [toRawType](_codec_option_.option.md#torawtype)
* [toString](_codec_option_.option.md#tostring)
* [toU8a](_codec_option_.option.md#tou8a)
* [unwrap](_codec_option_.option.md#unwrap)
* [unwrapOr](_codec_option_.option.md#unwrapor)
* [with](_codec_option_.option.md#static-with)

## Constructors

###  constructor

\+ **new Option**(`registry`: Registry, `Type`: Constructor | InterfaceTypes, `value?`: any): *[Option](_codec_option_.option.md)*

*Defined in [packages/types/src/codec/Option.ts:22](https://github.com/polkadot-js/api/blob/5e82c97c8a/packages/types/src/codec/Option.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | Registry |
`Type` | Constructor &#124; InterfaceTypes |
`value?` | any |

**Returns:** *[Option](_codec_option_.option.md)*

## Properties

###  registry

• **registry**: *Registry*

*Inherited from [Base](_codec_base_.base.md).[registry](_codec_base_.base.md#registry)*

*Defined in [packages/types/src/codec/Base.ts:16](https://github.com/polkadot-js/api/blob/5e82c97c8a/packages/types/src/codec/Base.ts#L16)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Overrides [Base](_codec_base_.base.md).[encodedLength](_codec_base_.base.md#encodedlength)*

*Defined in [packages/types/src/codec/Option.ts:68](https://github.com/polkadot-js/api/blob/5e82c97c8a/packages/types/src/codec/Option.ts#L68)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *IHash*

*Inherited from [Base](_codec_base_.base.md).[hash](_codec_base_.base.md#hash)*

*Defined in [packages/types/src/codec/Base.ts:35](https://github.com/polkadot-js/api/blob/5e82c97c8a/packages/types/src/codec/Base.ts#L35)*

**`description`** returns a hash of the contents

**Returns:** *IHash*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Overrides [Base](_codec_base_.base.md).[isEmpty](_codec_base_.base.md#isempty)*

*Defined in [packages/types/src/codec/Option.ts:76](https://github.com/polkadot-js/api/blob/5e82c97c8a/packages/types/src/codec/Option.ts#L76)*

**`description`** Checks if the Option has no value

**Returns:** *boolean*

___

###  isNone

• **get isNone**(): *boolean*

*Defined in [packages/types/src/codec/Option.ts:83](https://github.com/polkadot-js/api/blob/5e82c97c8a/packages/types/src/codec/Option.ts#L83)*

**`description`** Checks if the Option has no value

**Returns:** *boolean*

___

###  isSome

• **get isSome**(): *boolean*

*Defined in [packages/types/src/codec/Option.ts:90](https://github.com/polkadot-js/api/blob/5e82c97c8a/packages/types/src/codec/Option.ts#L90)*

**`description`** Checks if the Option has a value

**Returns:** *boolean*

___

###  value

• **get value**(): *Codec*

*Defined in [packages/types/src/codec/Option.ts:97](https://github.com/polkadot-js/api/blob/5e82c97c8a/packages/types/src/codec/Option.ts#L97)*

**`description`** The actual value for the Option

**Returns:** *Codec*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Overrides [Base](_codec_base_.base.md).[eq](_codec_base_.base.md#eq)*

*Defined in [packages/types/src/codec/Option.ts:104](https://github.com/polkadot-js/api/blob/5e82c97c8a/packages/types/src/codec/Option.ts#L104)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(): *string*

*Overrides [Base](_codec_base_.base.md).[toHex](_codec_base_.base.md#tohex)*

*Defined in [packages/types/src/codec/Option.ts:115](https://github.com/polkadot-js/api/blob/5e82c97c8a/packages/types/src/codec/Option.ts#L115)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *AnyJson*

*Inherited from [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [packages/types/src/codec/Base.ts:63](https://github.com/polkadot-js/api/blob/5e82c97c8a/packages/types/src/codec/Base.ts#L63)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *AnyJson*

___

###  toRawType

▸ **toRawType**(`isBare?`: undefined | false | true): *string*

*Overrides [Base](_codec_base_.base.md).[toRawType](_codec_base_.base.md#torawtype)*

*Defined in [packages/types/src/codec/Option.ts:126](https://github.com/polkadot-js/api/blob/5e82c97c8a/packages/types/src/codec/Option.ts#L126)*

**`description`** Returns the base runtime type name for this instance

**Parameters:**

Name | Type |
------ | ------ |
`isBare?` | undefined &#124; false &#124; true |

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [packages/types/src/codec/Base.ts:70](https://github.com/polkadot-js/api/blob/5e82c97c8a/packages/types/src/codec/Base.ts#L70)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Overrides [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [packages/types/src/codec/Option.ts:138](https://github.com/polkadot-js/api/blob/5e82c97c8a/packages/types/src/codec/Option.ts#L138)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

___

###  unwrap

▸ **unwrap**(): *T*

*Defined in [packages/types/src/codec/Option.ts:156](https://github.com/polkadot-js/api/blob/5e82c97c8a/packages/types/src/codec/Option.ts#L156)*

**`description`** Returns the value that the Option represents (if available), throws if null

**Returns:** *T*

___

###  unwrapOr

▸ **unwrapOr**<**O**>(`defaultValue`: O): *T | O*

*Defined in [packages/types/src/codec/Option.ts:168](https://github.com/polkadot-js/api/blob/5e82c97c8a/packages/types/src/codec/Option.ts#L168)*

**`description`** Returns the value that the Option represents (if available) or defaultValue if none

**Type parameters:**

▪ **O**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`defaultValue` | O | The value to return if the option isNone  |

**Returns:** *T | O*

___

### `Static` with

▸ **with**<**O**>(`Type`: Constructor | InterfaceTypes): *Constructor‹[Option](_codec_option_.option.md)‹O››*

*Defined in [packages/types/src/codec/Option.ts:57](https://github.com/polkadot-js/api/blob/5e82c97c8a/packages/types/src/codec/Option.ts#L57)*

**Type parameters:**

▪ **O**: *Codec*

**Parameters:**

Name | Type |
------ | ------ |
`Type` | Constructor &#124; InterfaceTypes |

**Returns:** *Constructor‹[Option](_codec_option_.option.md)‹O››*
