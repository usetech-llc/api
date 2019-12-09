[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["primitive/Generic/Origin"](../modules/_primitive_generic_origin_.md) › [Origin](_primitive_generic_origin_.origin.md)

# Class: Origin

**`name`** Origin

**`description`** 
Where Origin occurs, it should be ignored as an internal-only value, so it should
never actually be constructed

## Hierarchy

* [Null](_primitive_null_.null.md)

  ↳ **Origin**

  ↳ [Origin](../interfaces/_interfaces_runtime_types_.origin.md)

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_primitive_generic_origin_.origin.md#constructor)

### Properties

* [registry](_primitive_generic_origin_.origin.md#registry)

### Accessors

* [encodedLength](_primitive_generic_origin_.origin.md#encodedlength)
* [hash](_primitive_generic_origin_.origin.md#hash)
* [isEmpty](_primitive_generic_origin_.origin.md#isempty)

### Methods

* [eq](_primitive_generic_origin_.origin.md#eq)
* [toHex](_primitive_generic_origin_.origin.md#tohex)
* [toJSON](_primitive_generic_origin_.origin.md#tojson)
* [toRawType](_primitive_generic_origin_.origin.md#torawtype)
* [toString](_primitive_generic_origin_.origin.md#tostring)
* [toU8a](_primitive_generic_origin_.origin.md#tou8a)

## Constructors

###  constructor

\+ **new Origin**(`registry`: [Registry](../interfaces/_types_.registry.md)): *[Origin](_primitive_generic_origin_.origin.md)*

*Overrides [Null](_primitive_null_.null.md).[constructor](_primitive_null_.null.md#constructor)*

*Defined in [packages/types/src/primitive/Generic/Origin.ts:15](https://github.com/polkadot-js/api/blob/6bf0d5eea/packages/types/src/primitive/Generic/Origin.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_types_.registry.md) |

**Returns:** *[Origin](_primitive_generic_origin_.origin.md)*

## Properties

###  registry

• **registry**: *[Registry](../interfaces/_types_.registry.md)*

*Implementation of [Codec](../interfaces/_types_.codec.md).[registry](../interfaces/_types_.codec.md#registry)*

*Inherited from [Null](_primitive_null_.null.md).[registry](_primitive_null_.null.md#registry)*

*Defined in [packages/types/src/primitive/Null.ts:15](https://github.com/polkadot-js/api/blob/6bf0d5eea/packages/types/src/primitive/Null.ts#L15)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Null](_primitive_null_.null.md).[encodedLength](_primitive_null_.null.md#encodedlength)*

*Defined in [packages/types/src/primitive/Null.ts:24](https://github.com/polkadot-js/api/blob/6bf0d5eea/packages/types/src/primitive/Null.ts#L24)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](../interfaces/_types_.ihash.md)*

*Inherited from [Null](_primitive_null_.null.md).[hash](_primitive_null_.null.md#hash)*

*Defined in [packages/types/src/primitive/Null.ts:31](https://github.com/polkadot-js/api/blob/6bf0d5eea/packages/types/src/primitive/Null.ts#L31)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](../interfaces/_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Null](_primitive_null_.null.md).[isEmpty](_primitive_null_.null.md#isempty)*

*Defined in [packages/types/src/primitive/Null.ts:38](https://github.com/polkadot-js/api/blob/6bf0d5eea/packages/types/src/primitive/Null.ts#L38)*

**`description`** Checks if the value is an empty value (always true)

**Returns:** *boolean*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Null](_primitive_null_.null.md).[eq](_primitive_null_.null.md#eq)*

*Defined in [packages/types/src/primitive/Null.ts:45](https://github.com/polkadot-js/api/blob/6bf0d5eea/packages/types/src/primitive/Null.ts#L45)*

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

*Defined in [packages/types/src/primitive/Null.ts:52](https://github.com/polkadot-js/api/blob/6bf0d5eea/packages/types/src/primitive/Null.ts#L52)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *null*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Null](_primitive_null_.null.md).[toJSON](_primitive_null_.null.md#tojson)*

*Defined in [packages/types/src/primitive/Null.ts:59](https://github.com/polkadot-js/api/blob/6bf0d5eea/packages/types/src/primitive/Null.ts#L59)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *null*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Null](_primitive_null_.null.md).[toRawType](_primitive_null_.null.md#torawtype)*

*Defined in [packages/types/src/primitive/Null.ts:66](https://github.com/polkadot-js/api/blob/6bf0d5eea/packages/types/src/primitive/Null.ts#L66)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Null](_primitive_null_.null.md).[toString](_primitive_null_.null.md#tostring)*

*Defined in [packages/types/src/primitive/Null.ts:73](https://github.com/polkadot-js/api/blob/6bf0d5eea/packages/types/src/primitive/Null.ts#L73)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from [Null](_primitive_null_.null.md).[toU8a](_primitive_null_.null.md#tou8a)*

*Defined in [packages/types/src/primitive/Null.ts:82](https://github.com/polkadot-js/api/blob/6bf0d5eea/packages/types/src/primitive/Null.ts#L82)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*
