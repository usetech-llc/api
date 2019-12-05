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

* [Codec](../interfaces/_types_.codec.md)
* [ICompact](../interfaces/_types_.icompact.md)‹T›

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
* [decodeCompact](_codec_compact_.compact.md#static-decodecompact)
* [stripLengthPrefix](_codec_compact_.compact.md#static-striplengthprefix)
* [with](_codec_compact_.compact.md#static-with)

## Constructors

###  constructor

\+ **new Compact**(`registry`: [Registry](../interfaces/_types_.registry.md), `Type`: [Constructor](../interfaces/_types_.constructor.md)‹T› | [InterfaceTypes](../modules/_types_.md#interfacetypes), `value`: [Compact](_codec_compact_.compact.md)‹T› | [AnyNumber](../modules/_types_.md#anynumber)): *[Compact](_codec_compact_.compact.md)*

*Defined in [packages/types/src/codec/Compact.ts:29](https://github.com/polkadot-js/api/blob/01f3666cc/packages/types/src/codec/Compact.ts#L29)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`registry` | [Registry](../interfaces/_types_.registry.md) | - |
`Type` | [Constructor](../interfaces/_types_.constructor.md)‹T› &#124; [InterfaceTypes](../modules/_types_.md#interfacetypes) | - |
`value` | [Compact](_codec_compact_.compact.md)‹T› &#124; [AnyNumber](../modules/_types_.md#anynumber) | 0 |

**Returns:** *[Compact](_codec_compact_.compact.md)*

## Properties

###  registry

• **registry**: *[Registry](../interfaces/_types_.registry.md)*

*Implementation of [ICompact](../interfaces/_types_.icompact.md).[registry](../interfaces/_types_.icompact.md#registry)*

*Inherited from [Base](_codec_base_.base.md).[registry](_codec_base_.base.md#registry)*

*Defined in [packages/types/src/codec/Base.ts:16](https://github.com/polkadot-js/api/blob/01f3666cc/packages/types/src/codec/Base.ts#L16)*

___

### `Static` addLengthPrefix

▪ **addLengthPrefix**: *compactAddLength* =  compactAddLength

*Defined in [packages/types/src/codec/Compact.ts:47](https://github.com/polkadot-js/api/blob/01f3666cc/packages/types/src/codec/Compact.ts#L47)*

Prepend a Uint8Array with its compact length.

**`param`** The Uint8Array to be prefixed

___

### `Static` decodeU8a

▪ **decodeU8a**: *compactFromU8a* =  compactFromU8a

*Defined in [packages/types/src/codec/Compact.ts:49](https://github.com/polkadot-js/api/blob/01f3666cc/packages/types/src/codec/Compact.ts#L49)*

___

### `Static` encodeU8a

▪ **encodeU8a**: *compactToU8a* =  compactToU8a

*Defined in [packages/types/src/codec/Compact.ts:51](https://github.com/polkadot-js/api/blob/01f3666cc/packages/types/src/codec/Compact.ts#L51)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Base](_codec_base_.base.md).[encodedLength](_codec_base_.base.md#encodedlength)*

*Defined in [packages/types/src/codec/Base.ts:28](https://github.com/polkadot-js/api/blob/01f3666cc/packages/types/src/codec/Base.ts#L28)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](../interfaces/_types_.ihash.md)*

*Inherited from [Base](_codec_base_.base.md).[hash](_codec_base_.base.md#hash)*

*Defined in [packages/types/src/codec/Base.ts:35](https://github.com/polkadot-js/api/blob/01f3666cc/packages/types/src/codec/Base.ts#L35)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](../interfaces/_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Base](_codec_base_.base.md).[isEmpty](_codec_base_.base.md#isempty)*

*Defined in [packages/types/src/codec/Base.ts:42](https://github.com/polkadot-js/api/blob/01f3666cc/packages/types/src/codec/Base.ts#L42)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

## Methods

###  bitLength

▸ **bitLength**(): *[UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength)*

*Defined in [packages/types/src/codec/Compact.ts:74](https://github.com/polkadot-js/api/blob/01f3666cc/packages/types/src/codec/Compact.ts#L74)*

**`description`** Returns the number of bits in the value

**Returns:** *[UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength)*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [ICompact](../interfaces/_types_.icompact.md)*

*Overrides [Base](_codec_base_.base.md).[eq](_codec_base_.base.md#eq)*

*Defined in [packages/types/src/codec/Compact.ts:81](https://github.com/polkadot-js/api/blob/01f3666cc/packages/types/src/codec/Compact.ts#L81)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toBn

▸ **toBn**(): *BN*

*Implementation of [ICompact](../interfaces/_types_.icompact.md)*

*Defined in [packages/types/src/codec/Compact.ts:92](https://github.com/polkadot-js/api/blob/01f3666cc/packages/types/src/codec/Compact.ts#L92)*

**`description`** Returns the BN representation of the number

**Returns:** *BN*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Implementation of [ICompact](../interfaces/_types_.icompact.md)*

*Inherited from [Base](_codec_base_.base.md).[toHex](_codec_base_.base.md#tohex)*

*Defined in [packages/types/src/codec/Base.ts:56](https://github.com/polkadot-js/api/blob/01f3666cc/packages/types/src/codec/Base.ts#L56)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

**Parameters:**

Name | Type |
------ | ------ |
`isLe?` | undefined &#124; false &#124; true |

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_.md#anyjson)*

*Implementation of [ICompact](../interfaces/_types_.icompact.md)*

*Inherited from [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [packages/types/src/codec/Base.ts:63](https://github.com/polkadot-js/api/blob/01f3666cc/packages/types/src/codec/Base.ts#L63)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

___

###  toNumber

▸ **toNumber**(): *number*

*Implementation of [ICompact](../interfaces/_types_.icompact.md)*

*Defined in [packages/types/src/codec/Compact.ts:99](https://github.com/polkadot-js/api/blob/01f3666cc/packages/types/src/codec/Compact.ts#L99)*

**`description`** Returns the number representation for the value

**Returns:** *number*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [ICompact](../interfaces/_types_.icompact.md)*

*Overrides [Base](_codec_base_.base.md).[toRawType](_codec_base_.base.md#torawtype)*

*Defined in [packages/types/src/codec/Compact.ts:106](https://github.com/polkadot-js/api/blob/01f3666cc/packages/types/src/codec/Compact.ts#L106)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [ICompact](../interfaces/_types_.icompact.md)*

*Inherited from [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [packages/types/src/codec/Base.ts:70](https://github.com/polkadot-js/api/blob/01f3666cc/packages/types/src/codec/Base.ts#L70)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Overrides [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [packages/types/src/codec/Compact.ts:115](https://github.com/polkadot-js/api/blob/01f3666cc/packages/types/src/codec/Compact.ts#L115)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*

___

###  unwrap

▸ **unwrap**(): *T*

*Implementation of [ICompact](../interfaces/_types_.icompact.md)*

*Defined in [packages/types/src/codec/Compact.ts:122](https://github.com/polkadot-js/api/blob/01f3666cc/packages/types/src/codec/Compact.ts#L122)*

**`description`** Returns the embedded [UInt](_codec_uint_.uint.md) or [Moment](../interfaces/_interfaces_runtime_types_.moment.md) value

**Returns:** *T*

___

### `Static` decodeCompact

▸ **decodeCompact**<**T**>(`registry`: [Registry](../interfaces/_types_.registry.md), `Type`: [Constructor](../interfaces/_types_.constructor.md)‹T›, `value`: [Compact](_codec_compact_.compact.md)‹T› | [AnyNumber](../modules/_types_.md#anynumber)): *[CompactEncodable](../interfaces/_codec_compact_.compactencodable.md)*

*Defined in [packages/types/src/codec/Compact.ts:59](https://github.com/polkadot-js/api/blob/01f3666cc/packages/types/src/codec/Compact.ts#L59)*

**Type parameters:**

▪ **T**: *[CompactEncodable](../interfaces/_codec_compact_.compactencodable.md)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_types_.registry.md) |
`Type` | [Constructor](../interfaces/_types_.constructor.md)‹T› |
`value` | [Compact](_codec_compact_.compact.md)‹T› &#124; [AnyNumber](../modules/_types_.md#anynumber) |

**Returns:** *[CompactEncodable](../interfaces/_codec_compact_.compactencodable.md)*

___

### `Static` stripLengthPrefix

▸ **stripLengthPrefix**(`u8a`: Uint8Array, `bitLength`: [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength)): *Uint8Array*

*Defined in [packages/types/src/codec/Compact.ts:53](https://github.com/polkadot-js/api/blob/01f3666cc/packages/types/src/codec/Compact.ts#L53)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`u8a` | Uint8Array | - |
`bitLength` | [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength) |  DEFAULT_BITLENGTH |

**Returns:** *Uint8Array*

___

### `Static` with

▸ **with**<**T**>(`Type`: [Constructor](../interfaces/_types_.constructor.md)‹T› | [InterfaceTypes](../modules/_types_.md#interfacetypes)): *[Constructor](../interfaces/_types_.constructor.md)‹[Compact](_codec_compact_.compact.md)‹T››*

*Defined in [packages/types/src/codec/Compact.ts:34](https://github.com/polkadot-js/api/blob/01f3666cc/packages/types/src/codec/Compact.ts#L34)*

**Type parameters:**

▪ **T**: *[CompactEncodable](../interfaces/_codec_compact_.compactencodable.md)*

**Parameters:**

Name | Type |
------ | ------ |
`Type` | [Constructor](../interfaces/_types_.constructor.md)‹T› &#124; [InterfaceTypes](../modules/_types_.md#interfacetypes) |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹[Compact](_codec_compact_.compact.md)‹T››*
