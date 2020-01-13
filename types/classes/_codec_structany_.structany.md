[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["codec/StructAny"](../modules/_codec_structany_.md) › [StructAny](_codec_structany_.structany.md)

# Class: StructAny

**`name`** Json

**`description`** 
Wraps the a JSON structure retrieve via RPC. It extends the standard JS Map with. While it
implements a Codec, it is limited in that it can only be used with input objects via RPC,
i.e. no hex decoding. Unlike a struct, this waps a JSON object with unknown keys

## Hierarchy

* Map‹string, any›

  ↳ **StructAny**

## Implements

* [Codec](../interfaces/_types_.codec.md)

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
* [toJSON](_codec_structany_.structany.md#tojson)
* [toRawType](_codec_structany_.structany.md#torawtype)
* [toString](_codec_structany_.structany.md#tostring)
* [toU8a](_codec_structany_.structany.md#tou8a)

## Constructors

###  constructor

\+ **new StructAny**(`registry`: [Registry](../interfaces/_types_.registry.md), `value?`: object | null): *[StructAny](_codec_structany_.structany.md)*

*Defined in [packages/types/src/codec/StructAny.ts:23](https://github.com/polkadot-js/api/blob/64ff226535/packages/types/src/codec/StructAny.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_types_.registry.md) |
`value?` | object &#124; null |

**Returns:** *[StructAny](_codec_structany_.structany.md)*

## Properties

###  registry

• **registry**: *[Registry](../interfaces/_types_.registry.md)*

*Implementation of [Codec](../interfaces/_types_.codec.md).[registry](../interfaces/_types_.codec.md#registry)*

*Defined in [packages/types/src/codec/StructAny.ts:23](https://github.com/polkadot-js/api/blob/64ff226535/packages/types/src/codec/StructAny.ts#L23)*

___

### `Static` Map

▪ **Map**: *MapConstructor*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:36

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Defined in [packages/types/src/codec/StructAny.ts:53](https://github.com/polkadot-js/api/blob/64ff226535/packages/types/src/codec/StructAny.ts#L53)*

**`description`** Always 0, never encodes as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](../interfaces/_types_.ihash.md)*

*Defined in [packages/types/src/codec/StructAny.ts:60](https://github.com/polkadot-js/api/blob/64ff226535/packages/types/src/codec/StructAny.ts#L60)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](../interfaces/_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Defined in [packages/types/src/codec/StructAny.ts:67](https://github.com/polkadot-js/api/blob/64ff226535/packages/types/src/codec/StructAny.ts#L67)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [packages/types/src/codec/StructAny.ts:74](https://github.com/polkadot-js/api/blob/64ff226535/packages/types/src/codec/StructAny.ts#L74)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(): *string*

*Defined in [packages/types/src/codec/StructAny.ts:81](https://github.com/polkadot-js/api/blob/64ff226535/packages/types/src/codec/StructAny.ts#L81)*

**`description`** Unimplemented, will throw

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md)*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [packages/types/src/codec/StructAny.ts:88](https://github.com/polkadot-js/api/blob/64ff226535/packages/types/src/codec/StructAny.ts#L88)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md)*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [packages/types/src/codec/StructAny.ts:99](https://github.com/polkadot-js/api/blob/64ff226535/packages/types/src/codec/StructAny.ts#L99)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Defined in [packages/types/src/codec/StructAny.ts:106](https://github.com/polkadot-js/api/blob/64ff226535/packages/types/src/codec/StructAny.ts#L106)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Defined in [packages/types/src/codec/StructAny.ts:114](https://github.com/polkadot-js/api/blob/64ff226535/packages/types/src/codec/StructAny.ts#L114)*

**`description`** Unimplemented, will throw

**Parameters:**

Name | Type |
------ | ------ |
`isBare?` | undefined &#124; false &#124; true |

**Returns:** *Uint8Array*
