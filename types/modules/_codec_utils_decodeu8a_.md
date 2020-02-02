[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["codec/utils/decodeU8a"](_codec_utils_decodeu8a_.md)

# External module: "codec/utils/decodeU8a"

## Index

### Functions

* [decodeU8a](_codec_utils_decodeu8a_.md#decodeu8a)

## Functions

###  decodeU8a

▸ **decodeU8a**(`registry`: Registry, `u8a`: [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array), `_types`: Constructor[] | object): *Codec[]*

*Defined in [packages/types/src/codec/utils/decodeU8a.ts:14](https://github.com/polkadot-js/api/blob/6ba28c8ad2/packages/types/src/codec/utils/decodeU8a.ts#L14)*

Given an u8a, and an array of Type constructors, decode the u8a against the
types, and return an array of decoded values.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`registry` | Registry | - |
`u8a` | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) | The u8a to decode. |
`_types` | Constructor[] &#124; object | - |

**Returns:** *Codec[]*
