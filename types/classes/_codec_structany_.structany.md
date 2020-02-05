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

* Codec

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

\+ **new StructAny**(`registry`: Registry, `value?`: object | null): *[StructAny](_codec_structany_.structany.md)*

*Defined in [packages/types/src/codec/StructAny.ts:23](https://github.com/polkadot-js/api/blob/2de7a3c130/packages/types/src/codec/StructAny.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | Registry |
`value?` | object &#124; null |

**Returns:** *[StructAny](_codec_structany_.structany.md)*

## Properties

###  registry

• **registry**: *Registry*

*Defined in [packages/types/src/codec/StructAny.ts:23](https://github.com/polkadot-js/api/blob/2de7a3c130/packages/types/src/codec/StructAny.ts#L23)*

___

### `Static` Map

▪ **Map**: *MapConstructor*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:36

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Defined in [packages/types/src/codec/StructAny.ts:54](https://github.com/polkadot-js/api/blob/2de7a3c130/packages/types/src/codec/StructAny.ts#L54)*

**`description`** Always 0, never encodes as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *IHash*

*Defined in [packages/types/src/codec/StructAny.ts:61](https://github.com/polkadot-js/api/blob/2de7a3c130/packages/types/src/codec/StructAny.ts#L61)*

**`description`** returns a hash of the contents

**Returns:** *IHash*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Defined in [packages/types/src/codec/StructAny.ts:68](https://github.com/polkadot-js/api/blob/2de7a3c130/packages/types/src/codec/StructAny.ts#L68)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Defined in [packages/types/src/codec/StructAny.ts:75](https://github.com/polkadot-js/api/blob/2de7a3c130/packages/types/src/codec/StructAny.ts#L75)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(): *string*

*Defined in [packages/types/src/codec/StructAny.ts:82](https://github.com/polkadot-js/api/blob/2de7a3c130/packages/types/src/codec/StructAny.ts#L82)*

**`description`** Unimplemented, will throw

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *AnyJsonObject*

*Defined in [packages/types/src/codec/StructAny.ts:89](https://github.com/polkadot-js/api/blob/2de7a3c130/packages/types/src/codec/StructAny.ts#L89)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *AnyJsonObject*

___

###  toRawType

▸ **toRawType**(): *string*

*Defined in [packages/types/src/codec/StructAny.ts:100](https://github.com/polkadot-js/api/blob/2de7a3c130/packages/types/src/codec/StructAny.ts#L100)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Defined in [packages/types/src/codec/StructAny.ts:107](https://github.com/polkadot-js/api/blob/2de7a3c130/packages/types/src/codec/StructAny.ts#L107)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Defined in [packages/types/src/codec/StructAny.ts:115](https://github.com/polkadot-js/api/blob/2de7a3c130/packages/types/src/codec/StructAny.ts#L115)*

**`description`** Unimplemented, will throw

**Parameters:**

Name | Type |
------ | ------ |
`isBare?` | undefined &#124; false &#124; true |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*
