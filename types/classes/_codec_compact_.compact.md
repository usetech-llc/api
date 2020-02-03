[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["codec/Compact"](../modules/_codec_compact_.md) › [Compact](_codec_compact_.compact.md)

# Class: Compact <**T**>

**`name`** Compact

**`description`** 
A compact length-encoding codec wrapper. It performs the same function as Length, however
differs in that it uses a variable number of bytes to do the actual encoding. This is mostly
used by other types to add length-prefixed encoding, or in the case of wrapped types, taking
a number and making the compact representation thereof

## Type parameters

▪ **T**: *[CompactEncodable](../interfaces/_codec_compact_.compactencodable.md)*

## Hierarchy

* [Base](_codec_base_.base.md)‹T›

  ↳ **Compact**

## Implements

* Codec
* ICompact‹T›

## Index

### Constructors

* [constructor](_codec_compact_.compact.md#constructor)

### Properties

* [registry](_codec_compact_.compact.md#registry)
* [addLengthPrefix](_codec_compact_.compact.md#static-addlengthprefix)
* [decodeU8a](_codec_compact_.compact.md#static-decodeu8a)
* [encodeU8a](_codec_compact_.compact.md#static-encodeu8a)

### Accessors

* [encodedLength](_codec_compact_.compact.md#encodedlength)
* [hash](_codec_compact_.compact.md#hash)
* [isEmpty](_codec_compact_.compact.md#isempty)

### Methods

* [bitLength](_codec_compact_.compact.md#bitlength)
* [eq](_codec_compact_.compact.md#eq)
* [toBn](_codec_compact_.compact.md#tobn)
* [toHex](_codec_compact_.compact.md#tohex)
* [toJSON](_codec_compact_.compact.md#tojson)
* [toNumber](_codec_compact_.compact.md#tonumber)
* [toRawType](_codec_compact_.compact.md#torawtype)
* [toString](_codec_compact_.compact.md#tostring)
* [toU8a](_codec_compact_.compact.md#tou8a)
* [unwrap](_codec_compact_.compact.md#unwrap)
* [stripLengthPrefix](_codec_compact_.compact.md#static-striplengthprefix)
* [with](_codec_compact_.compact.md#static-with)

## Constructors

###  constructor

\+ **new Compact**(`registry`: Registry, `Type`: Constructor‹T› | InterfaceTypes, `value`: [Compact](_codec_compact_.compact.md)‹T› | AnyNumber): *[Compact](_codec_compact_.compact.md)*

*Defined in [packages/types/src/codec/Compact.ts:29](https://github.com/polkadot-js/api/blob/eeb8d20e58/packages/types/src/codec/Compact.ts#L29)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`registry` | Registry | - |
`Type` | Constructor‹T› &#124; InterfaceTypes | - |
`value` | [Compact](_codec_compact_.compact.md)‹T› &#124; AnyNumber | 0 |

**Returns:** *[Compact](_codec_compact_.compact.md)*

## Properties

###  registry

• **registry**: *Registry*

*Inherited from [Base](_codec_base_.base.md).[registry](_codec_base_.base.md#registry)*

*Defined in [packages/types/src/codec/Base.ts:16](https://github.com/polkadot-js/api/blob/eeb8d20e58/packages/types/src/codec/Base.ts#L16)*

___

### `Static` addLengthPrefix

▪ **addLengthPrefix**: *compactAddLength* = compactAddLength

*Defined in [packages/types/src/codec/Compact.ts:47](https://github.com/polkadot-js/api/blob/eeb8d20e58/packages/types/src/codec/Compact.ts#L47)*

Prepend a Uint8Array with its compact length.

**`param`** The Uint8Array to be prefixed

___

### `Static` decodeU8a

▪ **decodeU8a**: *compactFromU8a* = compactFromU8a

*Defined in [packages/types/src/codec/Compact.ts:49](https://github.com/polkadot-js/api/blob/eeb8d20e58/packages/types/src/codec/Compact.ts#L49)*

___

### `Static` encodeU8a

▪ **encodeU8a**: *compactToU8a* = compactToU8a

*Defined in [packages/types/src/codec/Compact.ts:51](https://github.com/polkadot-js/api/blob/eeb8d20e58/packages/types/src/codec/Compact.ts#L51)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Base](_codec_base_.base.md).[encodedLength](_codec_base_.base.md#encodedlength)*

*Defined in [packages/types/src/codec/Base.ts:28](https://github.com/polkadot-js/api/blob/eeb8d20e58/packages/types/src/codec/Base.ts#L28)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *IHash*

*Inherited from [Base](_codec_base_.base.md).[hash](_codec_base_.base.md#hash)*

*Defined in [packages/types/src/codec/Base.ts:35](https://github.com/polkadot-js/api/blob/eeb8d20e58/packages/types/src/codec/Base.ts#L35)*

**`description`** returns a hash of the contents

**Returns:** *IHash*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Base](_codec_base_.base.md).[isEmpty](_codec_base_.base.md#isempty)*

*Defined in [packages/types/src/codec/Base.ts:42](https://github.com/polkadot-js/api/blob/eeb8d20e58/packages/types/src/codec/Base.ts#L42)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

## Methods

###  bitLength

▸ **bitLength**(): *[UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength)*

*Defined in [packages/types/src/codec/Compact.ts:75](https://github.com/polkadot-js/api/blob/eeb8d20e58/packages/types/src/codec/Compact.ts#L75)*

**`description`** Returns the number of bits in the value

**Returns:** *[UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength)*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Overrides [Base](_codec_base_.base.md).[eq](_codec_base_.base.md#eq)*

*Defined in [packages/types/src/codec/Compact.ts:82](https://github.com/polkadot-js/api/blob/eeb8d20e58/packages/types/src/codec/Compact.ts#L82)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toBn

▸ **toBn**(): *BN*

*Defined in [packages/types/src/codec/Compact.ts:93](https://github.com/polkadot-js/api/blob/eeb8d20e58/packages/types/src/codec/Compact.ts#L93)*

**`description`** Returns the BN representation of the number

**Returns:** *BN*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Inherited from [Base](_codec_base_.base.md).[toHex](_codec_base_.base.md#tohex)*

*Defined in [packages/types/src/codec/Base.ts:56](https://github.com/polkadot-js/api/blob/eeb8d20e58/packages/types/src/codec/Base.ts#L56)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

**Parameters:**

Name | Type |
------ | ------ |
`isLe?` | undefined &#124; false &#124; true |

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *AnyJson*

*Inherited from [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [packages/types/src/codec/Base.ts:63](https://github.com/polkadot-js/api/blob/eeb8d20e58/packages/types/src/codec/Base.ts#L63)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *AnyJson*

___

###  toNumber

▸ **toNumber**(): *number*

*Defined in [packages/types/src/codec/Compact.ts:100](https://github.com/polkadot-js/api/blob/eeb8d20e58/packages/types/src/codec/Compact.ts#L100)*

**`description`** Returns the number representation for the value

**Returns:** *number*

___

###  toRawType

▸ **toRawType**(): *string*

*Overrides [Base](_codec_base_.base.md).[toRawType](_codec_base_.base.md#torawtype)*

*Defined in [packages/types/src/codec/Compact.ts:107](https://github.com/polkadot-js/api/blob/eeb8d20e58/packages/types/src/codec/Compact.ts#L107)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [packages/types/src/codec/Base.ts:70](https://github.com/polkadot-js/api/blob/eeb8d20e58/packages/types/src/codec/Base.ts#L70)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Overrides [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [packages/types/src/codec/Compact.ts:116](https://github.com/polkadot-js/api/blob/eeb8d20e58/packages/types/src/codec/Compact.ts#L116)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

___

###  unwrap

▸ **unwrap**(): *T*

*Defined in [packages/types/src/codec/Compact.ts:123](https://github.com/polkadot-js/api/blob/eeb8d20e58/packages/types/src/codec/Compact.ts#L123)*

**`description`** Returns the embedded [UInt](_codec_uint_.uint.md) or [Moment](../interfaces/_interfaceregistry_.interfaceregistry.md#moment) value

**Returns:** *T*

___

### `Static` stripLengthPrefix

▸ **stripLengthPrefix**(`u8a`: [Uint8Array](_codec_raw_.raw.md#static-uint8array), `bitLength`: [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength)): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Defined in [packages/types/src/codec/Compact.ts:53](https://github.com/polkadot-js/api/blob/eeb8d20e58/packages/types/src/codec/Compact.ts#L53)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`u8a` | [Uint8Array](_codec_raw_.raw.md#static-uint8array) | - |
`bitLength` | [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength) | DEFAULT_BITLENGTH |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

___

### `Static` with

▸ **with**<**T**>(`Type`: Constructor‹T› | InterfaceTypes): *Constructor‹[Compact](_codec_compact_.compact.md)‹T››*

*Defined in [packages/types/src/codec/Compact.ts:34](https://github.com/polkadot-js/api/blob/eeb8d20e58/packages/types/src/codec/Compact.ts#L34)*

**Type parameters:**

▪ **T**: *[CompactEncodable](../interfaces/_codec_compact_.compactencodable.md)*

**Parameters:**

Name | Type |
------ | ------ |
`Type` | Constructor‹T› &#124; InterfaceTypes |

**Returns:** *Constructor‹[Compact](_codec_compact_.compact.md)‹T››*
