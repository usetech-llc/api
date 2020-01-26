[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/runtime/types"](../modules/_interfaces_runtime_types_.md) › [PhantomData](_interfaces_runtime_types_.phantomdata.md)

# Interface: PhantomData

Null

## Hierarchy

* [Null](../classes/_primitive_null_.null.md)

  ↳ **PhantomData**

## Implements

* [Codec](_types_.codec.md)

## Index

### Constructors

* [constructor](_interfaces_runtime_types_.phantomdata.md#constructor)

### Properties

* [registry](_interfaces_runtime_types_.phantomdata.md#registry)

### Accessors

* [encodedLength](_interfaces_runtime_types_.phantomdata.md#encodedlength)
* [hash](_interfaces_runtime_types_.phantomdata.md#hash)
* [isEmpty](_interfaces_runtime_types_.phantomdata.md#isempty)

### Methods

* [eq](_interfaces_runtime_types_.phantomdata.md#eq)
* [toHex](_interfaces_runtime_types_.phantomdata.md#tohex)
* [toJSON](_interfaces_runtime_types_.phantomdata.md#tojson)
* [toRawType](_interfaces_runtime_types_.phantomdata.md#torawtype)
* [toString](_interfaces_runtime_types_.phantomdata.md#tostring)
* [toU8a](_interfaces_runtime_types_.phantomdata.md#tou8a)

## Constructors

###  constructor

\+ **new PhantomData**(`registry`: [Registry](_types_.registry.md)): *[PhantomData](_interfaces_runtime_types_.phantomdata.md)*

*Inherited from [Null](../classes/_primitive_null_.null.md).[constructor](../classes/_primitive_null_.null.md#constructor)*

*Defined in [packages/types/src/primitive/Null.ts:15](https://github.com/polkadot-js/api/blob/3db15e73a5/packages/types/src/primitive/Null.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](_types_.registry.md) |

**Returns:** *[PhantomData](_interfaces_runtime_types_.phantomdata.md)*

## Properties

###  registry

• **registry**: *[Registry](_types_.registry.md)*

*Inherited from [Null](../classes/_primitive_null_.null.md).[registry](../classes/_primitive_null_.null.md#registry)*

*Defined in [packages/types/src/primitive/Null.ts:15](https://github.com/polkadot-js/api/blob/3db15e73a5/packages/types/src/primitive/Null.ts#L15)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Null](../classes/_primitive_null_.null.md).[encodedLength](../classes/_primitive_null_.null.md#encodedlength)*

*Defined in [packages/types/src/primitive/Null.ts:24](https://github.com/polkadot-js/api/blob/3db15e73a5/packages/types/src/primitive/Null.ts#L24)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](_types_.ihash.md)*

*Inherited from [Null](../classes/_primitive_null_.null.md).[hash](../classes/_primitive_null_.null.md#hash)*

*Defined in [packages/types/src/primitive/Null.ts:31](https://github.com/polkadot-js/api/blob/3db15e73a5/packages/types/src/primitive/Null.ts#L31)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Null](../classes/_primitive_null_.null.md).[isEmpty](../classes/_primitive_null_.null.md#isempty)*

*Defined in [packages/types/src/primitive/Null.ts:38](https://github.com/polkadot-js/api/blob/3db15e73a5/packages/types/src/primitive/Null.ts#L38)*

**`description`** Checks if the value is an empty value (always true)

**Returns:** *boolean*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Null](../classes/_primitive_null_.null.md).[eq](../classes/_primitive_null_.null.md#eq)*

*Defined in [packages/types/src/primitive/Null.ts:45](https://github.com/polkadot-js/api/blob/3db15e73a5/packages/types/src/primitive/Null.ts#L45)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Null](../classes/_primitive_null_.null.md).[toHex](../classes/_primitive_null_.null.md#tohex)*

*Defined in [packages/types/src/primitive/Null.ts:52](https://github.com/polkadot-js/api/blob/3db15e73a5/packages/types/src/primitive/Null.ts#L52)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *null*

*Inherited from [Null](../classes/_primitive_null_.null.md).[toJSON](../classes/_primitive_null_.null.md#tojson)*

*Defined in [packages/types/src/primitive/Null.ts:59](https://github.com/polkadot-js/api/blob/3db15e73a5/packages/types/src/primitive/Null.ts#L59)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *null*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Null](../classes/_primitive_null_.null.md).[toRawType](../classes/_primitive_null_.null.md#torawtype)*

*Defined in [packages/types/src/primitive/Null.ts:66](https://github.com/polkadot-js/api/blob/3db15e73a5/packages/types/src/primitive/Null.ts#L66)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Null](../classes/_primitive_null_.null.md).[toString](../classes/_primitive_null_.null.md#tostring)*

*Defined in [packages/types/src/primitive/Null.ts:73](https://github.com/polkadot-js/api/blob/3db15e73a5/packages/types/src/primitive/Null.ts#L73)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

*Inherited from [Null](../classes/_primitive_null_.null.md).[toU8a](../classes/_primitive_null_.null.md#tou8a)*

*Defined in [packages/types/src/primitive/Null.ts:82](https://github.com/polkadot-js/api/blob/3db15e73a5/packages/types/src/primitive/Null.ts#L82)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*
