[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types/interfaces"](../modules/_types_interfaces_.md) › [IMethod](_types_interfaces_.imethod.md)

# Interface: IMethod

## Hierarchy

* [Codec](_types_codec_.codec.md)

  ↳ **IMethod**

  ↳ [IExtrinsic](_types_extrinsic_.iextrinsic.md)

## Implemented by

* [Call](../classes/_primitive_generic_call_.call.md)

## Index

### Properties

* [args](_types_interfaces_.imethod.md#args)
* [argsDef](_types_interfaces_.imethod.md#argsdef)
* [callIndex](_types_interfaces_.imethod.md#callindex)
* [data](_types_interfaces_.imethod.md#data)
* [encodedLength](_types_interfaces_.imethod.md#encodedlength)
* [hasOrigin](_types_interfaces_.imethod.md#hasorigin)
* [hash](_types_interfaces_.imethod.md#hash)
* [isEmpty](_types_interfaces_.imethod.md#isempty)
* [meta](_types_interfaces_.imethod.md#meta)
* [registry](_types_interfaces_.imethod.md#registry)

### Methods

* [eq](_types_interfaces_.imethod.md#eq)
* [toHex](_types_interfaces_.imethod.md#tohex)
* [toHuman](_types_interfaces_.imethod.md#tohuman)
* [toJSON](_types_interfaces_.imethod.md#tojson)
* [toRawType](_types_interfaces_.imethod.md#torawtype)
* [toString](_types_interfaces_.imethod.md#tostring)
* [toU8a](_types_interfaces_.imethod.md#tou8a)

## Properties

###  args

• **args**: *[Codec](_types_codec_.codec.md)[]*

*Defined in [packages/types/src/types/interfaces.ts:30](https://github.com/polkadot-js/api/blob/4a1e504ca2/packages/types/src/types/interfaces.ts#L30)*

___

###  argsDef

• **argsDef**: *[ArgsDef](../modules/_types_codec_.md#argsdef)*

*Defined in [packages/types/src/types/interfaces.ts:31](https://github.com/polkadot-js/api/blob/4a1e504ca2/packages/types/src/types/interfaces.ts#L31)*

___

###  callIndex

• **callIndex**: *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

*Defined in [packages/types/src/types/interfaces.ts:32](https://github.com/polkadot-js/api/blob/4a1e504ca2/packages/types/src/types/interfaces.ts#L32)*

___

###  data

• **data**: *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

*Defined in [packages/types/src/types/interfaces.ts:33](https://github.com/polkadot-js/api/blob/4a1e504ca2/packages/types/src/types/interfaces.ts#L33)*

___

###  encodedLength

• **encodedLength**: *number*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[encodedLength](_codec_compact_.compactencodable.md#encodedlength)*

*Defined in [packages/types/src/types/codec.ts:43](https://github.com/polkadot-js/api/blob/4a1e504ca2/packages/types/src/types/codec.ts#L43)*

**`description`** The length of the value when encoded as a Uint8Array

___

###  hasOrigin

• **hasOrigin**: *boolean*

*Defined in [packages/types/src/types/interfaces.ts:35](https://github.com/polkadot-js/api/blob/4a1e504ca2/packages/types/src/types/interfaces.ts#L35)*

___

###  hash

• **hash**: *[IHash](_types_interfaces_.ihash.md)*

*Overrides [CompactEncodable](_codec_compact_.compactencodable.md).[hash](_codec_compact_.compactencodable.md#hash)*

*Defined in [packages/types/src/types/interfaces.ts:34](https://github.com/polkadot-js/api/blob/4a1e504ca2/packages/types/src/types/interfaces.ts#L34)*

___

###  isEmpty

• **isEmpty**: *boolean*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[isEmpty](_codec_compact_.compactencodable.md#isempty)*

*Defined in [packages/types/src/types/codec.ts:53](https://github.com/polkadot-js/api/blob/4a1e504ca2/packages/types/src/types/codec.ts#L53)*

**`description`** Checks if the value is an empty value

___

###  meta

• **meta**: *FunctionMetadataLatest*

*Defined in [packages/types/src/types/interfaces.ts:36](https://github.com/polkadot-js/api/blob/4a1e504ca2/packages/types/src/types/interfaces.ts#L36)*

___

###  registry

• **registry**: *[Registry](_types_registry_.registry.md)*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[registry](_codec_compact_.compactencodable.md#registry)*

*Defined in [packages/types/src/types/codec.ts:58](https://github.com/polkadot-js/api/blob/4a1e504ca2/packages/types/src/types/codec.ts#L58)*

**`description`** The registry associated with this object

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[eq](_codec_compact_.compactencodable.md#eq)*

*Defined in [packages/types/src/types/codec.ts:63](https://github.com/polkadot-js/api/blob/4a1e504ca2/packages/types/src/types/codec.ts#L63)*

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

*Defined in [packages/types/src/types/codec.ts:68](https://github.com/polkadot-js/api/blob/4a1e504ca2/packages/types/src/types/codec.ts#L68)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

**Parameters:**

Name | Type |
------ | ------ |
`isLe?` | undefined &#124; false &#124; true |

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(`isExtended?`: undefined | false | true): *[AnyJson](../modules/_types_helpers_.md#anyjson)*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[toHuman](_codec_compact_.compactencodable.md#tohuman)*

*Defined in [packages/types/src/types/codec.ts:73](https://github.com/polkadot-js/api/blob/4a1e504ca2/packages/types/src/types/codec.ts#L73)*

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

**Parameters:**

Name | Type |
------ | ------ |
`isExtended?` | undefined &#124; false &#124; true |

**Returns:** *[AnyJson](../modules/_types_helpers_.md#anyjson)*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_helpers_.md#anyjson)*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[toJSON](_codec_compact_.compactencodable.md#tojson)*

*Defined in [packages/types/src/types/codec.ts:78](https://github.com/polkadot-js/api/blob/4a1e504ca2/packages/types/src/types/codec.ts#L78)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_helpers_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[toRawType](_codec_compact_.compactencodable.md#torawtype)*

*Defined in [packages/types/src/types/codec.ts:83](https://github.com/polkadot-js/api/blob/4a1e504ca2/packages/types/src/types/codec.ts#L83)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[toString](_codec_compact_.compactencodable.md#tostring)*

*Defined in [packages/types/src/types/codec.ts:88](https://github.com/polkadot-js/api/blob/4a1e504ca2/packages/types/src/types/codec.ts#L88)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: [BareOpts](../modules/_types_helpers_.md#bareopts)): *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

*Inherited from [CompactEncodable](_codec_compact_.compactencodable.md).[toU8a](_codec_compact_.compactencodable.md#tou8a)*

*Defined in [packages/types/src/types/codec.ts:94](https://github.com/polkadot-js/api/blob/4a1e504ca2/packages/types/src/types/codec.ts#L94)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | [BareOpts](../modules/_types_helpers_.md#bareopts) | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*
