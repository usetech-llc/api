[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["codec/Date"](../modules/_codec_date_.md) › [CodecDate](_codec_date_.codecdate.md)

# Class: CodecDate

**`name`** Date

**`description`** 
A wrapper around seconds/timestamps. Internally the representation only has
second precicion (aligning with Rust), so any numbers passed an/out are always
per-second. For any encoding/decoding the 1000 multiplier would be applied to
get it in line with JavaScript formats. It extends the base JS `Date` object
and has all the methods available that are applicable to any `Date`

## Hierarchy

* [Date](_codec_date_.codecdate.md#static-date)

  ↳ **CodecDate**

## Implements

* [Codec](../interfaces/_types_codec_.codec.md)

## Index

### Constructors

* [constructor](_codec_date_.codecdate.md#constructor)

### Properties

* [registry](_codec_date_.codecdate.md#registry)
* [Date](_codec_date_.codecdate.md#static-date)

### Accessors

* [encodedLength](_codec_date_.codecdate.md#encodedlength)
* [hash](_codec_date_.codecdate.md#hash)
* [isEmpty](_codec_date_.codecdate.md#isempty)

### Methods

* [bitLength](_codec_date_.codecdate.md#bitlength)
* [eq](_codec_date_.codecdate.md#eq)
* [toBn](_codec_date_.codecdate.md#tobn)
* [toHex](_codec_date_.codecdate.md#tohex)
* [toHuman](_codec_date_.codecdate.md#tohuman)
* [toJSON](_codec_date_.codecdate.md#tojson)
* [toNumber](_codec_date_.codecdate.md#tonumber)
* [toRawType](_codec_date_.codecdate.md#torawtype)
* [toString](_codec_date_.codecdate.md#tostring)
* [toU8a](_codec_date_.codecdate.md#tou8a)

## Constructors

###  constructor

\+ **new CodecDate**(`registry`: [Registry](../interfaces/_types_registry_.registry.md), `value`: [CodecDate](_codec_date_.codecdate.md) | [Date](_codec_date_.codecdate.md#static-date) | [AnyNumber](../modules/_types_helpers_.md#anynumber)): *[CodecDate](_codec_date_.codecdate.md)*

*Defined in [packages/types/src/codec/Date.ts:30](https://github.com/polkadot-js/api/blob/30f5baa906/packages/types/src/codec/Date.ts#L30)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`registry` | [Registry](../interfaces/_types_registry_.registry.md) | - |
`value` | [CodecDate](_codec_date_.codecdate.md) &#124; [Date](_codec_date_.codecdate.md#static-date) &#124; [AnyNumber](../modules/_types_helpers_.md#anynumber) | 0 |

**Returns:** *[CodecDate](_codec_date_.codecdate.md)*

## Properties

###  registry

• **registry**: *[Registry](../interfaces/_types_registry_.registry.md)*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md).[registry](../interfaces/_types_codec_.codec.md#registry)*

*Defined in [packages/types/src/codec/Date.ts:28](https://github.com/polkadot-js/api/blob/30f5baa906/packages/types/src/codec/Date.ts#L28)*

___

### `Static` Date

▪ **Date**: *DateConstructor*

Defined in node_modules/typescript/lib/lib.es5.d.ts:907

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Defined in [packages/types/src/codec/Date.ts:57](https://github.com/polkadot-js/api/blob/30f5baa906/packages/types/src/codec/Date.ts#L57)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *H256*

*Defined in [packages/types/src/codec/Date.ts:64](https://github.com/polkadot-js/api/blob/30f5baa906/packages/types/src/codec/Date.ts#L64)*

**`description`** returns a hash of the contents

**Returns:** *H256*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Defined in [packages/types/src/codec/Date.ts:71](https://github.com/polkadot-js/api/blob/30f5baa906/packages/types/src/codec/Date.ts#L71)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

## Methods

###  bitLength

▸ **bitLength**(): *[UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength)*

*Defined in [packages/types/src/codec/Date.ts:85](https://github.com/polkadot-js/api/blob/30f5baa906/packages/types/src/codec/Date.ts#L85)*

**`description`** Returns the number of bits in the value

**Returns:** *[UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength)*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Defined in [packages/types/src/codec/Date.ts:78](https://github.com/polkadot-js/api/blob/30f5baa906/packages/types/src/codec/Date.ts#L78)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toBn

▸ **toBn**(): *BN*

*Defined in [packages/types/src/codec/Date.ts:92](https://github.com/polkadot-js/api/blob/30f5baa906/packages/types/src/codec/Date.ts#L92)*

**`description`** Returns the BN representation of the timestamp

**Returns:** *BN*

___

###  toHex

▸ **toHex**(`isLe`: boolean): *string*

*Defined in [packages/types/src/codec/Date.ts:99](https://github.com/polkadot-js/api/blob/30f5baa906/packages/types/src/codec/Date.ts#L99)*

**`description`** Returns a hex string representation of the value

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`isLe` | boolean | false |

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(): *string*

*Defined in [packages/types/src/codec/Date.ts:110](https://github.com/polkadot-js/api/blob/30f5baa906/packages/types/src/codec/Date.ts#L110)*

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *any*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Overrides void*

*Defined in [packages/types/src/codec/Date.ts:117](https://github.com/polkadot-js/api/blob/30f5baa906/packages/types/src/codec/Date.ts#L117)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *any*

___

###  toNumber

▸ **toNumber**(): *number*

*Defined in [packages/types/src/codec/Date.ts:126](https://github.com/polkadot-js/api/blob/30f5baa906/packages/types/src/codec/Date.ts#L126)*

**`description`** Returns the number representation for the timestamp

**Returns:** *number*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Defined in [packages/types/src/codec/Date.ts:133](https://github.com/polkadot-js/api/blob/30f5baa906/packages/types/src/codec/Date.ts#L133)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Overrides void*

*Defined in [packages/types/src/codec/Date.ts:140](https://github.com/polkadot-js/api/blob/30f5baa906/packages/types/src/codec/Date.ts#L140)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Defined in [packages/types/src/codec/Date.ts:150](https://github.com/polkadot-js/api/blob/30f5baa906/packages/types/src/codec/Date.ts#L150)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*
