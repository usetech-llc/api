[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["codec/Base"](../modules/_codec_base_.md) › [Base](_codec_base_.base.md)

# Class: Base <**T**>

**`name`** Base

**`description`** A type extends the Base class, when it holds a value

## Type parameters

▪ **T**: *Codec*

## Hierarchy

* **Base**

  ↳ [Enum](_codec_enum_.enum.md)

  ↳ [Option](_codec_option_.option.md)

  ↳ [Address](_primitive_generic_address_.address.md)

  ↳ [Extrinsic](_primitive_extrinsic_extrinsic_.extrinsic.md)

  ↳ [ExtrinsicPayload](_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md)

  ↳ [Compact](_codec_compact_.compact.md)

## Implements

* Codec

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
* [toJSON](_codec_base_.base.md#tojson)
* [toRawType](_codec_base_.base.md#torawtype)
* [toString](_codec_base_.base.md#tostring)
* [toU8a](_codec_base_.base.md#tou8a)

## Properties

###  registry

• **registry**: *Registry*

*Defined in [packages/types/src/codec/Base.ts:16](https://github.com/polkadot-js/api/blob/8ca194a3d2/packages/types/src/codec/Base.ts#L16)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Defined in [packages/types/src/codec/Base.ts:28](https://github.com/polkadot-js/api/blob/8ca194a3d2/packages/types/src/codec/Base.ts#L28)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *IHash*

*Defined in [packages/types/src/codec/Base.ts:35](https://github.com/polkadot-js/api/blob/8ca194a3d2/packages/types/src/codec/Base.ts#L35)*

**`description`** returns a hash of the contents

**Returns:** *IHash*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Defined in [packages/types/src/codec/Base.ts:42](https://github.com/polkadot-js/api/blob/8ca194a3d2/packages/types/src/codec/Base.ts#L42)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Defined in [packages/types/src/codec/Base.ts:49](https://github.com/polkadot-js/api/blob/8ca194a3d2/packages/types/src/codec/Base.ts#L49)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Defined in [packages/types/src/codec/Base.ts:56](https://github.com/polkadot-js/api/blob/8ca194a3d2/packages/types/src/codec/Base.ts#L56)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

**Parameters:**

Name | Type |
------ | ------ |
`isLe?` | undefined &#124; false &#124; true |

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *AnyJson*

*Defined in [packages/types/src/codec/Base.ts:63](https://github.com/polkadot-js/api/blob/8ca194a3d2/packages/types/src/codec/Base.ts#L63)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *AnyJson*

___

###  toRawType

▸ **toRawType**(): *string*

*Defined in [packages/types/src/codec/Base.ts:85](https://github.com/polkadot-js/api/blob/8ca194a3d2/packages/types/src/codec/Base.ts#L85)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Defined in [packages/types/src/codec/Base.ts:70](https://github.com/polkadot-js/api/blob/8ca194a3d2/packages/types/src/codec/Base.ts#L70)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: BareOpts): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Defined in [packages/types/src/codec/Base.ts:78](https://github.com/polkadot-js/api/blob/8ca194a3d2/packages/types/src/codec/Base.ts#L78)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | BareOpts | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*
