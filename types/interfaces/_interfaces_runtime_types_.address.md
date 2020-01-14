[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/runtime/types"](../modules/_interfaces_runtime_types_.md) › [Address](_interfaces_runtime_types_.address.md)

# Interface: Address

GenericAddress

## Hierarchy

  ↳ [Address](../classes/_primitive_generic_address_.address.md)

  ↳ **Address**

## Implements

* [Codec](_types_.codec.md)

## Index

### Constructors

* [constructor](_interfaces_runtime_types_.address.md#constructor)

### Properties

* [registry](_interfaces_runtime_types_.address.md#registry)

### Accessors

* [encodedLength](_interfaces_runtime_types_.address.md#encodedlength)
* [hash](_interfaces_runtime_types_.address.md#hash)
* [isEmpty](_interfaces_runtime_types_.address.md#isempty)
* [rawLength](_interfaces_runtime_types_.address.md#rawlength)

### Methods

* [eq](_interfaces_runtime_types_.address.md#eq)
* [toHex](_interfaces_runtime_types_.address.md#tohex)
* [toJSON](_interfaces_runtime_types_.address.md#tojson)
* [toRawType](_interfaces_runtime_types_.address.md#torawtype)
* [toString](_interfaces_runtime_types_.address.md#tostring)
* [toU8a](_interfaces_runtime_types_.address.md#tou8a)
* [decodeAddress](_interfaces_runtime_types_.address.md#static-decodeaddress)

## Constructors

###  constructor

\+ **new Address**(`registry`: [Registry](_types_.registry.md), `value`: AnyAddress): *[Address](_interfaces_runtime_types_.address.md)*

*Inherited from [Address](../classes/_primitive_generic_address_.address.md).[constructor](../classes/_primitive_generic_address_.address.md#constructor)*

*Defined in [packages/types/src/primitive/Generic/Address.ts:28](https://github.com/polkadot-js/api/blob/cc4a4607f1/packages/types/src/primitive/Generic/Address.ts#L28)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`registry` | [Registry](_types_.registry.md) | - |
`value` | AnyAddress |  new Uint8Array() |

**Returns:** *[Address](_interfaces_runtime_types_.address.md)*

## Properties

###  registry

• **registry**: *[Registry](_types_.registry.md)*

*Inherited from [Base](../classes/_codec_base_.base.md).[registry](../classes/_codec_base_.base.md#registry)*

*Defined in [packages/types/src/codec/Base.ts:16](https://github.com/polkadot-js/api/blob/cc4a4607f1/packages/types/src/codec/Base.ts#L16)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Address](../classes/_primitive_generic_address_.address.md).[encodedLength](../classes/_primitive_generic_address_.address.md#encodedlength)*

*Overrides [Base](../classes/_codec_base_.base.md).[encodedLength](../classes/_codec_base_.base.md#encodedlength)*

*Defined in [packages/types/src/primitive/Generic/Address.ts:72](https://github.com/polkadot-js/api/blob/cc4a4607f1/packages/types/src/primitive/Generic/Address.ts#L72)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](_types_.ihash.md)*

*Inherited from [Base](../classes/_codec_base_.base.md).[hash](../classes/_codec_base_.base.md#hash)*

*Defined in [packages/types/src/codec/Base.ts:35](https://github.com/polkadot-js/api/blob/cc4a4607f1/packages/types/src/codec/Base.ts#L35)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Base](../classes/_codec_base_.base.md).[isEmpty](../classes/_codec_base_.base.md#isempty)*

*Defined in [packages/types/src/codec/Base.ts:42](https://github.com/polkadot-js/api/blob/cc4a4607f1/packages/types/src/codec/Base.ts#L42)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  rawLength

• **get rawLength**(): *number*

*Inherited from [Address](../classes/_primitive_generic_address_.address.md).[rawLength](../classes/_primitive_generic_address_.address.md#rawlength)*

*Defined in [packages/types/src/primitive/Generic/Address.ts:86](https://github.com/polkadot-js/api/blob/cc4a4607f1/packages/types/src/primitive/Generic/Address.ts#L86)*

**`description`** The length of the raw value, either AccountIndex or AccountId

**Returns:** *number*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Base](../classes/_codec_base_.base.md).[eq](../classes/_codec_base_.base.md#eq)*

*Defined in [packages/types/src/codec/Base.ts:49](https://github.com/polkadot-js/api/blob/cc4a4607f1/packages/types/src/codec/Base.ts#L49)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Address](../classes/_primitive_generic_address_.address.md).[toHex](../classes/_primitive_generic_address_.address.md#tohex)*

*Overrides [Base](../classes/_codec_base_.base.md).[toHex](../classes/_codec_base_.base.md#tohex)*

*Defined in [packages/types/src/primitive/Generic/Address.ts:95](https://github.com/polkadot-js/api/blob/cc4a4607f1/packages/types/src/primitive/Generic/Address.ts#L95)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_.md#anyjson)*

*Inherited from [Base](../classes/_codec_base_.base.md).[toJSON](../classes/_codec_base_.base.md#tojson)*

*Defined in [packages/types/src/codec/Base.ts:63](https://github.com/polkadot-js/api/blob/cc4a4607f1/packages/types/src/codec/Base.ts#L63)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Address](../classes/_primitive_generic_address_.address.md).[toRawType](../classes/_primitive_generic_address_.address.md#torawtype)*

*Overrides [Base](../classes/_codec_base_.base.md).[toRawType](../classes/_codec_base_.base.md#torawtype)*

*Defined in [packages/types/src/primitive/Generic/Address.ts:102](https://github.com/polkadot-js/api/blob/cc4a4607f1/packages/types/src/primitive/Generic/Address.ts#L102)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Base](../classes/_codec_base_.base.md).[toString](../classes/_codec_base_.base.md#tostring)*

*Defined in [packages/types/src/codec/Base.ts:70](https://github.com/polkadot-js/api/blob/cc4a4607f1/packages/types/src/codec/Base.ts#L70)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from [Address](../classes/_primitive_generic_address_.address.md).[toU8a](../classes/_primitive_generic_address_.address.md#tou8a)*

*Overrides [Base](../classes/_codec_base_.base.md).[toU8a](../classes/_codec_base_.base.md#tou8a)*

*Defined in [packages/types/src/primitive/Generic/Address.ts:110](https://github.com/polkadot-js/api/blob/cc4a4607f1/packages/types/src/primitive/Generic/Address.ts#L110)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*

___

### `Static` decodeAddress

▸ **decodeAddress**(`registry`: [Registry](_types_.registry.md), `value`: AnyAddress): *[AccountId](../classes/_primitive_generic_accountid_.accountid.md) | [AccountIndex](../classes/_primitive_generic_accountindex_.accountindex.md)*

*Inherited from [Address](../classes/_primitive_generic_address_.address.md).[decodeAddress](../classes/_primitive_generic_address_.address.md#static-decodeaddress)*

*Defined in [packages/types/src/primitive/Generic/Address.ts:33](https://github.com/polkadot-js/api/blob/cc4a4607f1/packages/types/src/primitive/Generic/Address.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](_types_.registry.md) |
`value` | AnyAddress |

**Returns:** *[AccountId](../classes/_primitive_generic_accountid_.accountid.md) | [AccountIndex](../classes/_primitive_generic_accountindex_.accountindex.md)*
