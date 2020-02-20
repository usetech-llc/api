[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["codec/StructAny"](../modules/_codec_structany_.md) › [StructAny](_codec_structany_.structany.md)

# Class: StructAny

**`name`** Json

**`description`** 
Wraps the a JSON structure retrieve via RPC. It extends the standard JS Map with. While it
implements a Codec, it is limited in that it can only be used with input objects via RPC,
i.e. no hex decoding. Unlike a struct, this waps a JSON object with unknown keys

## Hierarchy

* [Map](_codec_struct_.struct.md#static-map)‹string, any›

  ↳ **StructAny**

## Implements

* [Codec](../interfaces/_types_codec_.codec.md)

## Index

### Constructors

* [constructor](_codec_structany_.structany.md#constructor)

### Properties

* [registry](_codec_structany_.structany.md#registry)
* [Map](_codec_structany_.structany.md#static-map)

### Accessors

* [encodedLength](_codec_structany_.structany.md#encodedlength)
* [hash](_codec_structany_.structany.md#hash)
* [isEmpty](_codec_structany_.structany.md#isempty)

### Methods

* [eq](_codec_structany_.structany.md#eq)
* [toHex](_codec_structany_.structany.md#tohex)
* [toHuman](_codec_structany_.structany.md#tohuman)
* [toJSON](_codec_structany_.structany.md#tojson)
* [toRawType](_codec_structany_.structany.md#torawtype)
* [toString](_codec_structany_.structany.md#tostring)
* [toU8a](_codec_structany_.structany.md#tou8a)

## Constructors

###  constructor

\+ **new StructAny**(`registry`: [Registry](../interfaces/_types_registry_.registry.md), `value?`: object | null): *[StructAny](_codec_structany_.structany.md)*

*Defined in [packages/types/src/codec/StructAny.ts:24](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/codec/StructAny.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_types_registry_.registry.md) |
`value?` | object &#124; null |

**Returns:** *[StructAny](_codec_structany_.structany.md)*

## Properties

###  registry

• **registry**: *[Registry](../interfaces/_types_registry_.registry.md)*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md).[registry](../interfaces/_types_codec_.codec.md#registry)*

*Defined in [packages/types/src/codec/StructAny.ts:24](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/codec/StructAny.ts#L24)*

___

### `Static` Map

▪ **Map**: *MapConstructor*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:36

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Defined in [packages/types/src/codec/StructAny.ts:55](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/codec/StructAny.ts#L55)*

**`description`** Always 0, never encodes as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *H256*

*Defined in [packages/types/src/codec/StructAny.ts:62](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/codec/StructAny.ts#L62)*

**`description`** returns a hash of the contents

**Returns:** *H256*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Defined in [packages/types/src/codec/StructAny.ts:69](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/codec/StructAny.ts#L69)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Defined in [packages/types/src/codec/StructAny.ts:76](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/codec/StructAny.ts#L76)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(): *string*

*Defined in [packages/types/src/codec/StructAny.ts:83](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/codec/StructAny.ts#L83)*

**`description`** Unimplemented, will throw

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(): *[AnyJsonObject](../interfaces/_types_helpers_.anyjsonobject.md)*

*Defined in [packages/types/src/codec/StructAny.ts:90](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/codec/StructAny.ts#L90)*

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

**Returns:** *[AnyJsonObject](../interfaces/_types_helpers_.anyjsonobject.md)*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](../interfaces/_types_helpers_.anyjsonobject.md)*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Defined in [packages/types/src/codec/StructAny.ts:97](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/codec/StructAny.ts#L97)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](../interfaces/_types_helpers_.anyjsonobject.md)*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Defined in [packages/types/src/codec/StructAny.ts:108](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/codec/StructAny.ts#L108)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Defined in [packages/types/src/codec/StructAny.ts:115](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/codec/StructAny.ts#L115)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Defined in [packages/types/src/codec/StructAny.ts:123](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/codec/StructAny.ts#L123)*

**`description`** Unimplemented, will throw

**Parameters:**

Name | Type |
------ | ------ |
`isBare?` | undefined &#124; false &#124; true |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*
