[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["primitive/Null"](../modules/_primitive_null_.md) › [Null](_primitive_null_.null.md)

# Class: Null

**`name`** Null

**`description`** 
Implements a type that does not contain anything (apart from `null`)

## Hierarchy

* **Null**

  ↳ [Unconstructable](_primitive_unconstructable_.unconstructable.md)

  ↳ [Origin](_primitive_generic_origin_.origin.md)

## Implements

* [Codec](../interfaces/_types_codec_.codec.md)

## Index

### Constructors

* [constructor](_primitive_null_.null.md#constructor)

### Properties

* [registry](_primitive_null_.null.md#registry)

### Accessors

* [encodedLength](_primitive_null_.null.md#encodedlength)
* [hash](_primitive_null_.null.md#hash)
* [isEmpty](_primitive_null_.null.md#isempty)

### Methods

* [eq](_primitive_null_.null.md#eq)
* [toHex](_primitive_null_.null.md#tohex)
* [toHuman](_primitive_null_.null.md#tohuman)
* [toJSON](_primitive_null_.null.md#tojson)
* [toRawType](_primitive_null_.null.md#torawtype)
* [toString](_primitive_null_.null.md#tostring)
* [toU8a](_primitive_null_.null.md#tou8a)

## Constructors

###  constructor

\+ **new Null**(`registry`: [Registry](../interfaces/_types_registry_.registry.md)): *[Null](_primitive_null_.null.md)*

*Defined in [packages/types/src/primitive/Null.ts:16](https://github.com/polkadot-js/api/blob/cc5b5c81c9/packages/types/src/primitive/Null.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_types_registry_.registry.md) |

**Returns:** *[Null](_primitive_null_.null.md)*

## Properties

###  registry

• **registry**: *[Registry](../interfaces/_types_registry_.registry.md)*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md).[registry](../interfaces/_types_codec_.codec.md#registry)*

*Defined in [packages/types/src/primitive/Null.ts:16](https://github.com/polkadot-js/api/blob/cc5b5c81c9/packages/types/src/primitive/Null.ts#L16)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Defined in [packages/types/src/primitive/Null.ts:25](https://github.com/polkadot-js/api/blob/cc5b5c81c9/packages/types/src/primitive/Null.ts#L25)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *H256*

*Defined in [packages/types/src/primitive/Null.ts:32](https://github.com/polkadot-js/api/blob/cc5b5c81c9/packages/types/src/primitive/Null.ts#L32)*

**`description`** returns a hash of the contents

**Returns:** *H256*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Defined in [packages/types/src/primitive/Null.ts:39](https://github.com/polkadot-js/api/blob/cc5b5c81c9/packages/types/src/primitive/Null.ts#L39)*

**`description`** Checks if the value is an empty value (always true)

**Returns:** *boolean*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Defined in [packages/types/src/primitive/Null.ts:46](https://github.com/polkadot-js/api/blob/cc5b5c81c9/packages/types/src/primitive/Null.ts#L46)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(): *string*

*Defined in [packages/types/src/primitive/Null.ts:53](https://github.com/polkadot-js/api/blob/cc5b5c81c9/packages/types/src/primitive/Null.ts#L53)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(): *null*

*Defined in [packages/types/src/primitive/Null.ts:60](https://github.com/polkadot-js/api/blob/cc5b5c81c9/packages/types/src/primitive/Null.ts#L60)*

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

**Returns:** *null*

___

###  toJSON

▸ **toJSON**(): *null*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Defined in [packages/types/src/primitive/Null.ts:67](https://github.com/polkadot-js/api/blob/cc5b5c81c9/packages/types/src/primitive/Null.ts#L67)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *null*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Defined in [packages/types/src/primitive/Null.ts:74](https://github.com/polkadot-js/api/blob/cc5b5c81c9/packages/types/src/primitive/Null.ts#L74)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Defined in [packages/types/src/primitive/Null.ts:81](https://github.com/polkadot-js/api/blob/cc5b5c81c9/packages/types/src/primitive/Null.ts#L81)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Defined in [packages/types/src/primitive/Null.ts:90](https://github.com/polkadot-js/api/blob/cc5b5c81c9/packages/types/src/primitive/Null.ts#L90)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*
