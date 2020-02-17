[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["primitive/Bool"](../modules/_primitive_bool_.md) › [Bool](_primitive_bool_.bool.md)

# Class: Bool

**`name`** Bool

**`description`** 
Representation for a boolean value in the system. It extends the base JS `Boolean` class

## Hierarchy

* [Boolean](_primitive_bool_.bool.md#static-boolean)

  ↳ **Bool**

## Implements

* [Codec](../interfaces/_types_codec_.codec.md)

## Index

### Constructors

* [constructor](_primitive_bool_.bool.md#constructor)

### Properties

* [registry](_primitive_bool_.bool.md#registry)
* [Boolean](_primitive_bool_.bool.md#static-boolean)

### Accessors

* [encodedLength](_primitive_bool_.bool.md#encodedlength)
* [hash](_primitive_bool_.bool.md#hash)
* [isEmpty](_primitive_bool_.bool.md#isempty)
* [isFalse](_primitive_bool_.bool.md#isfalse)
* [isTrue](_primitive_bool_.bool.md#istrue)

### Methods

* [eq](_primitive_bool_.bool.md#eq)
* [toHex](_primitive_bool_.bool.md#tohex)
* [toHuman](_primitive_bool_.bool.md#tohuman)
* [toJSON](_primitive_bool_.bool.md#tojson)
* [toRawType](_primitive_bool_.bool.md#torawtype)
* [toString](_primitive_bool_.bool.md#tostring)
* [toU8a](_primitive_bool_.bool.md#tou8a)

## Constructors

###  constructor

\+ **new Bool**(`registry`: [Registry](../interfaces/_types_registry_.registry.md), `value`: [Bool](_primitive_bool_.bool.md) | [Boolean](_primitive_bool_.bool.md#static-boolean) | [Uint8Array](_codec_raw_.raw.md#static-uint8array) | boolean | number): *[Bool](_primitive_bool_.bool.md)*

*Defined in [packages/types/src/primitive/Bool.ts:30](https://github.com/polkadot-js/api/blob/83d780220c/packages/types/src/primitive/Bool.ts#L30)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`registry` | [Registry](../interfaces/_types_registry_.registry.md) | - |
`value` | [Bool](_primitive_bool_.bool.md) &#124; [Boolean](_primitive_bool_.bool.md#static-boolean) &#124; [Uint8Array](_codec_raw_.raw.md#static-uint8array) &#124; boolean &#124; number | false |

**Returns:** *[Bool](_primitive_bool_.bool.md)*

## Properties

###  registry

• **registry**: *[Registry](../interfaces/_types_registry_.registry.md)*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md).[registry](../interfaces/_types_codec_.codec.md#registry)*

*Defined in [packages/types/src/primitive/Bool.ts:30](https://github.com/polkadot-js/api/blob/83d780220c/packages/types/src/primitive/Bool.ts#L30)*

___

### `Static` Boolean

▪ **Boolean**: *BooleanConstructor*

Defined in node_modules/typescript/lib/lib.es5.d.ts:540

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Defined in [packages/types/src/primitive/Bool.ts:42](https://github.com/polkadot-js/api/blob/83d780220c/packages/types/src/primitive/Bool.ts#L42)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](../interfaces/_types_interfaces_.ihash.md)*

*Defined in [packages/types/src/primitive/Bool.ts:49](https://github.com/polkadot-js/api/blob/83d780220c/packages/types/src/primitive/Bool.ts#L49)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](../interfaces/_types_interfaces_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Defined in [packages/types/src/primitive/Bool.ts:56](https://github.com/polkadot-js/api/blob/83d780220c/packages/types/src/primitive/Bool.ts#L56)*

**`description`** Checks if the value is an empty value (always false)

**Returns:** *boolean*

___

###  isFalse

• **get isFalse**(): *boolean*

*Defined in [packages/types/src/primitive/Bool.ts:63](https://github.com/polkadot-js/api/blob/83d780220c/packages/types/src/primitive/Bool.ts#L63)*

**`description`** Checks if the value is an empty value (always false)

**Returns:** *boolean*

___

###  isTrue

• **get isTrue**(): *boolean*

*Defined in [packages/types/src/primitive/Bool.ts:70](https://github.com/polkadot-js/api/blob/83d780220c/packages/types/src/primitive/Bool.ts#L70)*

**`description`** Checks if the value is an empty value (always false)

**Returns:** *boolean*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Defined in [packages/types/src/primitive/Bool.ts:77](https://github.com/polkadot-js/api/blob/83d780220c/packages/types/src/primitive/Bool.ts#L77)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(): *string*

*Defined in [packages/types/src/primitive/Bool.ts:88](https://github.com/polkadot-js/api/blob/83d780220c/packages/types/src/primitive/Bool.ts#L88)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(): *boolean*

*Defined in [packages/types/src/primitive/Bool.ts:95](https://github.com/polkadot-js/api/blob/83d780220c/packages/types/src/primitive/Bool.ts#L95)*

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

**Returns:** *boolean*

___

###  toJSON

▸ **toJSON**(): *boolean*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Defined in [packages/types/src/primitive/Bool.ts:102](https://github.com/polkadot-js/api/blob/83d780220c/packages/types/src/primitive/Bool.ts#L102)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *boolean*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Defined in [packages/types/src/primitive/Bool.ts:109](https://github.com/polkadot-js/api/blob/83d780220c/packages/types/src/primitive/Bool.ts#L109)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Defined in [packages/types/src/primitive/Bool.ts:116](https://github.com/polkadot-js/api/blob/83d780220c/packages/types/src/primitive/Bool.ts#L116)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Defined in [packages/types/src/primitive/Bool.ts:125](https://github.com/polkadot-js/api/blob/83d780220c/packages/types/src/primitive/Bool.ts#L125)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*
