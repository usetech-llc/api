[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types/extrinsic"](../modules/_types_extrinsic_.md) › [IExtrinsicEra](_types_extrinsic_.iextrinsicera.md)

# Interface: IExtrinsicEra

## Hierarchy

* [Codec](_types_codec_.codec.md)

  ↳ **IExtrinsicEra**

## Implemented by

* [ExtrinsicEra](../classes/_primitive_extrinsic_extrinsicera_.extrinsicera.md)

## Index

### Properties

* [asImmortalEra](_types_extrinsic_.iextrinsicera.md#asimmortalera)
* [asMortalEra](_types_extrinsic_.iextrinsicera.md#asmortalera)
* [encodedLength](_types_extrinsic_.iextrinsicera.md#encodedlength)
* [hash](_types_extrinsic_.iextrinsicera.md#hash)
* [isEmpty](_types_extrinsic_.iextrinsicera.md#isempty)
* [registry](_types_extrinsic_.iextrinsicera.md#registry)

### Methods

* [eq](_types_extrinsic_.iextrinsicera.md#eq)
* [toHex](_types_extrinsic_.iextrinsicera.md#tohex)
* [toJSON](_types_extrinsic_.iextrinsicera.md#tojson)
* [toRawType](_types_extrinsic_.iextrinsicera.md#torawtype)
* [toString](_types_extrinsic_.iextrinsicera.md#tostring)
* [toU8a](_types_extrinsic_.iextrinsicera.md#tou8a)

## Properties

###  asImmortalEra

• **asImmortalEra**: *[Codec](_types_codec_.codec.md)*

*Defined in [packages/types/src/types/extrinsic.ts:92](https://github.com/polkadot-js/api/blob/6e535b0502/packages/types/src/types/extrinsic.ts#L92)*

___

###  asMortalEra

• **asMortalEra**: *[Codec](_types_codec_.codec.md)*

*Defined in [packages/types/src/types/extrinsic.ts:93](https://github.com/polkadot-js/api/blob/6e535b0502/packages/types/src/types/extrinsic.ts#L93)*

___

###  encodedLength

• **encodedLength**: *number*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[encodedLength](_codec_compact_.compactencodable.md#encodedlength)*

*Defined in [packages/types/src/types/codec.ts:42](https://github.com/polkadot-js/api/blob/6e535b0502/packages/types/src/types/codec.ts#L42)*

**`description`** The length of the value when encoded as a Uint8Array

___

###  hash

• **hash**: *[IHash](_types_interfaces_.ihash.md)*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[hash](_codec_compact_.compactencodable.md#hash)*

*Defined in [packages/types/src/types/codec.ts:47](https://github.com/polkadot-js/api/blob/6e535b0502/packages/types/src/types/codec.ts#L47)*

**`description`** Returns a hash of the value

___

###  isEmpty

• **isEmpty**: *boolean*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[isEmpty](_codec_compact_.compactencodable.md#isempty)*

*Defined in [packages/types/src/types/codec.ts:52](https://github.com/polkadot-js/api/blob/6e535b0502/packages/types/src/types/codec.ts#L52)*

**`description`** Checks if the value is an empty value

___

###  registry

• **registry**: *[Registry](_types_registry_.registry.md)*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[registry](_codec_compact_.compactencodable.md#registry)*

*Defined in [packages/types/src/types/codec.ts:57](https://github.com/polkadot-js/api/blob/6e535b0502/packages/types/src/types/codec.ts#L57)*

**`description`** The registry associated with this object

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[eq](_codec_compact_.compactencodable.md#eq)*

*Defined in [packages/types/src/types/codec.ts:62](https://github.com/polkadot-js/api/blob/6e535b0502/packages/types/src/types/codec.ts#L62)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[toHex](_codec_compact_.compactencodable.md#tohex)*

*Defined in [packages/types/src/types/codec.ts:67](https://github.com/polkadot-js/api/blob/6e535b0502/packages/types/src/types/codec.ts#L67)*

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

*Defined in [packages/types/src/types/codec.ts:72](https://github.com/polkadot-js/api/blob/6e535b0502/packages/types/src/types/codec.ts#L72)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_helpers_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[toRawType](_codec_compact_.compactencodable.md#torawtype)*

*Defined in [packages/types/src/types/codec.ts:77](https://github.com/polkadot-js/api/blob/6e535b0502/packages/types/src/types/codec.ts#L77)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[toString](_codec_compact_.compactencodable.md#tostring)*

*Defined in [packages/types/src/types/codec.ts:82](https://github.com/polkadot-js/api/blob/6e535b0502/packages/types/src/types/codec.ts#L82)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: [BareOpts](../modules/_types_helpers_.md#bareopts)): *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[toU8a](_codec_compact_.compactencodable.md#tou8a)*

*Defined in [packages/types/src/types/codec.ts:88](https://github.com/polkadot-js/api/blob/6e535b0502/packages/types/src/types/codec.ts#L88)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | [BareOpts](../modules/_types_helpers_.md#bareopts) | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*
