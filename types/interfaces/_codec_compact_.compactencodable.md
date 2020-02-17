[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["codec/Compact"](../modules/_codec_compact_.md) › [CompactEncodable](_codec_compact_.compactencodable.md)

# Interface: CompactEncodable

## Hierarchy

* [Codec](_types_codec_.codec.md)

  ↳ **CompactEncodable**

## Index

### Properties

* [encodedLength](_codec_compact_.compactencodable.md#encodedlength)
* [hash](_codec_compact_.compactencodable.md#hash)
* [isEmpty](_codec_compact_.compactencodable.md#isempty)
* [registry](_codec_compact_.compactencodable.md#registry)

### Methods

* [bitLength](_codec_compact_.compactencodable.md#bitlength)
* [eq](_codec_compact_.compactencodable.md#eq)
* [toBn](_codec_compact_.compactencodable.md#tobn)
* [toHex](_codec_compact_.compactencodable.md#tohex)
* [toJSON](_codec_compact_.compactencodable.md#tojson)
* [toNumber](_codec_compact_.compactencodable.md#tonumber)
* [toRawType](_codec_compact_.compactencodable.md#torawtype)
* [toString](_codec_compact_.compactencodable.md#tostring)
* [toU8a](_codec_compact_.compactencodable.md#tou8a)

## Properties

###  encodedLength

• **encodedLength**: *number*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[encodedLength](_codec_compact_.compactencodable.md#encodedlength)*

*Defined in [packages/types/src/types/codec.ts:43](https://github.com/polkadot-js/api/blob/2b5be7eaab/packages/types/src/types/codec.ts#L43)*

**`description`** The length of the value when encoded as a Uint8Array

___

###  hash

• **hash**: *[IHash](_types_interfaces_.ihash.md)*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[hash](_codec_compact_.compactencodable.md#hash)*

*Defined in [packages/types/src/types/codec.ts:48](https://github.com/polkadot-js/api/blob/2b5be7eaab/packages/types/src/types/codec.ts#L48)*

**`description`** Returns a hash of the value

___

###  isEmpty

• **isEmpty**: *boolean*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[isEmpty](_codec_compact_.compactencodable.md#isempty)*

*Defined in [packages/types/src/types/codec.ts:53](https://github.com/polkadot-js/api/blob/2b5be7eaab/packages/types/src/types/codec.ts#L53)*

**`description`** Checks if the value is an empty value

___

###  registry

• **registry**: *[Registry](_types_registry_.registry.md)*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[registry](_codec_compact_.compactencodable.md#registry)*

*Defined in [packages/types/src/types/codec.ts:58](https://github.com/polkadot-js/api/blob/2b5be7eaab/packages/types/src/types/codec.ts#L58)*

**`description`** The registry associated with this object

## Methods

###  bitLength

▸ **bitLength**(): *[UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength)*

*Defined in [packages/types/src/codec/Compact.ts:16](https://github.com/polkadot-js/api/blob/2b5be7eaab/packages/types/src/codec/Compact.ts#L16)*

**Returns:** *[UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength)*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[eq](_codec_compact_.compactencodable.md#eq)*

*Defined in [packages/types/src/types/codec.ts:63](https://github.com/polkadot-js/api/blob/2b5be7eaab/packages/types/src/types/codec.ts#L63)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toBn

▸ **toBn**(): *BN*

*Defined in [packages/types/src/codec/Compact.ts:17](https://github.com/polkadot-js/api/blob/2b5be7eaab/packages/types/src/codec/Compact.ts#L17)*

**Returns:** *BN*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[toHex](_codec_compact_.compactencodable.md#tohex)*

*Defined in [packages/types/src/types/codec.ts:68](https://github.com/polkadot-js/api/blob/2b5be7eaab/packages/types/src/types/codec.ts#L68)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

**Parameters:**

Name | Type |
------ | ------ |
`isLe?` | undefined &#124; false &#124; true |

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_helpers_.md#anyjson)*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[toJSON](_codec_compact_.compactencodable.md#tojson)*

*Defined in [packages/types/src/types/codec.ts:73](https://github.com/polkadot-js/api/blob/2b5be7eaab/packages/types/src/types/codec.ts#L73)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_helpers_.md#anyjson)*

___

###  toNumber

▸ **toNumber**(): *number*

*Defined in [packages/types/src/codec/Compact.ts:18](https://github.com/polkadot-js/api/blob/2b5be7eaab/packages/types/src/codec/Compact.ts#L18)*

**Returns:** *number*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[toRawType](_codec_compact_.compactencodable.md#torawtype)*

*Defined in [packages/types/src/types/codec.ts:78](https://github.com/polkadot-js/api/blob/2b5be7eaab/packages/types/src/types/codec.ts#L78)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[toString](_codec_compact_.compactencodable.md#tostring)*

*Defined in [packages/types/src/types/codec.ts:83](https://github.com/polkadot-js/api/blob/2b5be7eaab/packages/types/src/types/codec.ts#L83)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: [BareOpts](../modules/_types_helpers_.md#bareopts)): *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[toU8a](_codec_compact_.compactencodable.md#tou8a)*

*Defined in [packages/types/src/types/codec.ts:89](https://github.com/polkadot-js/api/blob/2b5be7eaab/packages/types/src/types/codec.ts#L89)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | [BareOpts](../modules/_types_helpers_.md#bareopts) | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*
