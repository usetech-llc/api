[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["primitive/Unconstructable"](../modules/_primitive_unconstructable_.md) › [Unconstructable](_primitive_unconstructable_.unconstructable.md)

# Class: Unconstructable

**`name`** Unconstructable

**`description`** 
A type that should not be constructed

## Hierarchy

* [Null](_primitive_null_.null.md)

  ↳ **Unconstructable**

## Implements

* Codec

## Index

### Constructors

* [constructor](_primitive_unconstructable_.unconstructable.md#constructor)

### Properties

* [registry](_primitive_unconstructable_.unconstructable.md#registry)

### Accessors

* [encodedLength](_primitive_unconstructable_.unconstructable.md#encodedlength)
* [hash](_primitive_unconstructable_.unconstructable.md#hash)
* [isEmpty](_primitive_unconstructable_.unconstructable.md#isempty)

### Methods

* [eq](_primitive_unconstructable_.unconstructable.md#eq)
* [toHex](_primitive_unconstructable_.unconstructable.md#tohex)
* [toJSON](_primitive_unconstructable_.unconstructable.md#tojson)
* [toRawType](_primitive_unconstructable_.unconstructable.md#torawtype)
* [toString](_primitive_unconstructable_.unconstructable.md#tostring)
* [toU8a](_primitive_unconstructable_.unconstructable.md#tou8a)
* [with](_primitive_unconstructable_.unconstructable.md#static-with)

## Constructors

###  constructor

\+ **new Unconstructable**(`registry`: Registry): *[Unconstructable](_primitive_unconstructable_.unconstructable.md)*

*Overrides [Null](_primitive_null_.null.md).[constructor](_primitive_null_.null.md#constructor)*

*Defined in [packages/types/src/primitive/Unconstructable.ts:14](https://github.com/polkadot-js/api/blob/5e82c97c8a/packages/types/src/primitive/Unconstructable.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | Registry |

**Returns:** *[Unconstructable](_primitive_unconstructable_.unconstructable.md)*

## Properties

###  registry

• **registry**: *Registry*

*Inherited from [Null](_primitive_null_.null.md).[registry](_primitive_null_.null.md#registry)*

*Defined in [packages/types/src/primitive/Null.ts:15](https://github.com/polkadot-js/api/blob/5e82c97c8a/packages/types/src/primitive/Null.ts#L15)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Null](_primitive_null_.null.md).[encodedLength](_primitive_null_.null.md#encodedlength)*

*Defined in [packages/types/src/primitive/Null.ts:24](https://github.com/polkadot-js/api/blob/5e82c97c8a/packages/types/src/primitive/Null.ts#L24)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *IHash*

*Inherited from [Null](_primitive_null_.null.md).[hash](_primitive_null_.null.md#hash)*

*Defined in [packages/types/src/primitive/Null.ts:31](https://github.com/polkadot-js/api/blob/5e82c97c8a/packages/types/src/primitive/Null.ts#L31)*

**`description`** returns a hash of the contents

**Returns:** *IHash*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Null](_primitive_null_.null.md).[isEmpty](_primitive_null_.null.md#isempty)*

*Defined in [packages/types/src/primitive/Null.ts:38](https://github.com/polkadot-js/api/blob/5e82c97c8a/packages/types/src/primitive/Null.ts#L38)*

**`description`** Checks if the value is an empty value (always true)

**Returns:** *boolean*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Null](_primitive_null_.null.md).[eq](_primitive_null_.null.md#eq)*

*Defined in [packages/types/src/primitive/Null.ts:45](https://github.com/polkadot-js/api/blob/5e82c97c8a/packages/types/src/primitive/Null.ts#L45)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Null](_primitive_null_.null.md).[toHex](_primitive_null_.null.md#tohex)*

*Defined in [packages/types/src/primitive/Null.ts:52](https://github.com/polkadot-js/api/blob/5e82c97c8a/packages/types/src/primitive/Null.ts#L52)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *null*

*Inherited from [Null](_primitive_null_.null.md).[toJSON](_primitive_null_.null.md#tojson)*

*Defined in [packages/types/src/primitive/Null.ts:59](https://github.com/polkadot-js/api/blob/5e82c97c8a/packages/types/src/primitive/Null.ts#L59)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *null*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Null](_primitive_null_.null.md).[toRawType](_primitive_null_.null.md#torawtype)*

*Defined in [packages/types/src/primitive/Null.ts:66](https://github.com/polkadot-js/api/blob/5e82c97c8a/packages/types/src/primitive/Null.ts#L66)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Null](_primitive_null_.null.md).[toString](_primitive_null_.null.md#tostring)*

*Defined in [packages/types/src/primitive/Null.ts:73](https://github.com/polkadot-js/api/blob/5e82c97c8a/packages/types/src/primitive/Null.ts#L73)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Inherited from [Null](_primitive_null_.null.md).[toU8a](_primitive_null_.null.md#tou8a)*

*Defined in [packages/types/src/primitive/Null.ts:82](https://github.com/polkadot-js/api/blob/5e82c97c8a/packages/types/src/primitive/Null.ts#L82)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

___

### `Static` with

▸ **with**(`typeDef`: any): *Constructor*

*Defined in [packages/types/src/primitive/Unconstructable.ts:22](https://github.com/polkadot-js/api/blob/5e82c97c8a/packages/types/src/primitive/Unconstructable.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`typeDef` | any |

**Returns:** *Constructor*
