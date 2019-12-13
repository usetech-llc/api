[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types"](../modules/_types_.md) › [IMethod](_types_.imethod.md)

# Interface: IMethod

## Hierarchy

* [Codec](_types_.codec.md)

  ↳ **IMethod**

  ↳ [IExtrinsic](_types_.iextrinsic.md)

## Implemented by

* [Call](_interfaces_runtime_types_.call.md)
* [Call](../classes/_primitive_generic_call_.call.md)
* [Proposal](_interfaces_democracy_types_.proposal.md)

## Index

### Properties

* [args](_types_.imethod.md#args)
* [argsDef](_types_.imethod.md#argsdef)
* [callIndex](_types_.imethod.md#callindex)
* [data](_types_.imethod.md#data)
* [encodedLength](_types_.imethod.md#encodedlength)
* [hasOrigin](_types_.imethod.md#hasorigin)
* [hash](_types_.imethod.md#hash)
* [isEmpty](_types_.imethod.md#isempty)
* [meta](_types_.imethod.md#meta)
* [registry](_types_.imethod.md#registry)

### Methods

* [eq](_types_.imethod.md#eq)
* [toHex](_types_.imethod.md#tohex)
* [toJSON](_types_.imethod.md#tojson)
* [toRawType](_types_.imethod.md#torawtype)
* [toString](_types_.imethod.md#tostring)
* [toU8a](_types_.imethod.md#tou8a)

## Properties

###  args

• **args**: *[Codec](_types_.codec.md)[]*

*Defined in [packages/types/src/types.ts:181](https://github.com/polkadot-js/api/blob/f9a42e47e/packages/types/src/types.ts#L181)*

___

###  argsDef

• **argsDef**: *[ArgsDef](../modules/_types_.md#argsdef)*

*Defined in [packages/types/src/types.ts:182](https://github.com/polkadot-js/api/blob/f9a42e47e/packages/types/src/types.ts#L182)*

___

###  callIndex

• **callIndex**: *Uint8Array*

*Defined in [packages/types/src/types.ts:183](https://github.com/polkadot-js/api/blob/f9a42e47e/packages/types/src/types.ts#L183)*

___

###  data

• **data**: *Uint8Array*

*Defined in [packages/types/src/types.ts:184](https://github.com/polkadot-js/api/blob/f9a42e47e/packages/types/src/types.ts#L184)*

___

###  encodedLength

• **encodedLength**: *number*

*Inherited from [Codec](_types_.codec.md).[encodedLength](_types_.codec.md#encodedlength)*

*Defined in [packages/types/src/types.ts:75](https://github.com/polkadot-js/api/blob/f9a42e47e/packages/types/src/types.ts#L75)*

**`description`** The length of the value when encoded as a Uint8Array

___

###  hasOrigin

• **hasOrigin**: *boolean*

*Defined in [packages/types/src/types.ts:186](https://github.com/polkadot-js/api/blob/f9a42e47e/packages/types/src/types.ts#L186)*

___

###  hash

• **hash**: *[IHash](_types_.ihash.md)*

*Overrides [Codec](_types_.codec.md).[hash](_types_.codec.md#hash)*

*Defined in [packages/types/src/types.ts:185](https://github.com/polkadot-js/api/blob/f9a42e47e/packages/types/src/types.ts#L185)*

___

###  isEmpty

• **isEmpty**: *boolean*

*Inherited from [Codec](_types_.codec.md).[isEmpty](_types_.codec.md#isempty)*

*Defined in [packages/types/src/types.ts:85](https://github.com/polkadot-js/api/blob/f9a42e47e/packages/types/src/types.ts#L85)*

**`description`** Checks if the value is an empty value

___

###  meta

• **meta**: *[FunctionMetadataLatest](_interfaces_metadata_types_.functionmetadatalatest.md)*

*Defined in [packages/types/src/types.ts:187](https://github.com/polkadot-js/api/blob/f9a42e47e/packages/types/src/types.ts#L187)*

___

###  registry

• **registry**: *[Registry](_types_.registry.md)*

*Inherited from [Codec](_types_.codec.md).[registry](_types_.codec.md#registry)*

*Defined in [packages/types/src/types.ts:90](https://github.com/polkadot-js/api/blob/f9a42e47e/packages/types/src/types.ts#L90)*

**`description`** The registry associated with this object

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Codec](_types_.codec.md).[eq](_types_.codec.md#eq)*

*Defined in [packages/types/src/types.ts:95](https://github.com/polkadot-js/api/blob/f9a42e47e/packages/types/src/types.ts#L95)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Inherited from [Codec](_types_.codec.md).[toHex](_types_.codec.md#tohex)*

*Defined in [packages/types/src/types.ts:100](https://github.com/polkadot-js/api/blob/f9a42e47e/packages/types/src/types.ts#L100)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

**Parameters:**

Name | Type |
------ | ------ |
`isLe?` | undefined &#124; false &#124; true |

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_.md#anyjson)*

*Inherited from [Codec](_types_.codec.md).[toJSON](_types_.codec.md#tojson)*

*Defined in [packages/types/src/types.ts:105](https://github.com/polkadot-js/api/blob/f9a42e47e/packages/types/src/types.ts#L105)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Codec](_types_.codec.md).[toRawType](_types_.codec.md#torawtype)*

*Defined in [packages/types/src/types.ts:110](https://github.com/polkadot-js/api/blob/f9a42e47e/packages/types/src/types.ts#L110)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Codec](_types_.codec.md).[toString](_types_.codec.md#tostring)*

*Defined in [packages/types/src/types.ts:115](https://github.com/polkadot-js/api/blob/f9a42e47e/packages/types/src/types.ts#L115)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: [BareOpts](../modules/_types_.md#bareopts)): *Uint8Array*

*Inherited from [Codec](_types_.codec.md).[toU8a](_types_.codec.md#tou8a)*

*Defined in [packages/types/src/types.ts:121](https://github.com/polkadot-js/api/blob/f9a42e47e/packages/types/src/types.ts#L121)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | [BareOpts](../modules/_types_.md#bareopts) | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*
