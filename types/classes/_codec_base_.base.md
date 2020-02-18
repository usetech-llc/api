[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["codec/Base"](../modules/_codec_base_.md) › [Base](_codec_base_.base.md)

# Class: Base <**T**>

**`name`** Base

**`description`** A type extends the Base class, when it holds a value

## Type parameters

▪ **T**: *[Codec](../interfaces/_types_codec_.codec.md)*

## Hierarchy

* **Base**

  ↳ [Enum](_codec_enum_.enum.md)

  ↳ [Option](_codec_option_.option.md)

  ↳ [Address](_primitive_generic_address_.address.md)

  ↳ [Extrinsic](_primitive_extrinsic_extrinsic_.extrinsic.md)

  ↳ [ExtrinsicPayload](_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md)

  ↳ [Compact](_codec_compact_.compact.md)

## Implements

* [Codec](../interfaces/_types_codec_.codec.md)

## Index

### Properties

* [registry](_codec_base_.base.md#registry)

### Accessors

* [encodedLength](_codec_base_.base.md#encodedlength)
* [hash](_codec_base_.base.md#hash)
* [isEmpty](_codec_base_.base.md#isempty)

### Methods

* [eq](_codec_base_.base.md#eq)
* [toHex](_codec_base_.base.md#tohex)
* [toHuman](_codec_base_.base.md#tohuman)
* [toJSON](_codec_base_.base.md#tojson)
* [toRawType](_codec_base_.base.md#torawtype)
* [toString](_codec_base_.base.md#tostring)
* [toU8a](_codec_base_.base.md#tou8a)

## Properties

###  registry

• **registry**: *[Registry](../interfaces/_types_registry_.registry.md)*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md).[registry](../interfaces/_types_codec_.codec.md#registry)*

*Defined in [packages/types/src/codec/Base.ts:17](https://github.com/polkadot-js/api/blob/d041c0abb2/packages/types/src/codec/Base.ts#L17)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Defined in [packages/types/src/codec/Base.ts:29](https://github.com/polkadot-js/api/blob/d041c0abb2/packages/types/src/codec/Base.ts#L29)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *H256*

*Defined in [packages/types/src/codec/Base.ts:36](https://github.com/polkadot-js/api/blob/d041c0abb2/packages/types/src/codec/Base.ts#L36)*

**`description`** returns a hash of the contents

**Returns:** *H256*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Defined in [packages/types/src/codec/Base.ts:43](https://github.com/polkadot-js/api/blob/d041c0abb2/packages/types/src/codec/Base.ts#L43)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Defined in [packages/types/src/codec/Base.ts:50](https://github.com/polkadot-js/api/blob/d041c0abb2/packages/types/src/codec/Base.ts#L50)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Defined in [packages/types/src/codec/Base.ts:57](https://github.com/polkadot-js/api/blob/d041c0abb2/packages/types/src/codec/Base.ts#L57)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

**Parameters:**

Name | Type |
------ | ------ |
`isLe?` | undefined &#124; false &#124; true |

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(`isExtended?`: undefined | false | true): *[AnyJson](../modules/_types_helpers_.md#anyjson)*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Defined in [packages/types/src/codec/Base.ts:64](https://github.com/polkadot-js/api/blob/d041c0abb2/packages/types/src/codec/Base.ts#L64)*

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

**Parameters:**

Name | Type |
------ | ------ |
`isExtended?` | undefined &#124; false &#124; true |

**Returns:** *[AnyJson](../modules/_types_helpers_.md#anyjson)*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_helpers_.md#anyjson)*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Defined in [packages/types/src/codec/Base.ts:71](https://github.com/polkadot-js/api/blob/d041c0abb2/packages/types/src/codec/Base.ts#L71)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_helpers_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Defined in [packages/types/src/codec/Base.ts:93](https://github.com/polkadot-js/api/blob/d041c0abb2/packages/types/src/codec/Base.ts#L93)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Defined in [packages/types/src/codec/Base.ts:78](https://github.com/polkadot-js/api/blob/d041c0abb2/packages/types/src/codec/Base.ts#L78)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: [BareOpts](../modules/_types_helpers_.md#bareopts)): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Defined in [packages/types/src/codec/Base.ts:86](https://github.com/polkadot-js/api/blob/d041c0abb2/packages/types/src/codec/Base.ts#L86)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | [BareOpts](../modules/_types_helpers_.md#bareopts) | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*
