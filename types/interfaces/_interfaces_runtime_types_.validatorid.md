[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/runtime/types"](../modules/_interfaces_runtime_types_.md) › [ValidatorId](_interfaces_runtime_types_.validatorid.md)

# Interface: ValidatorId

AccountId

## Hierarchy

  ↳ [AccountId](_interfaces_runtime_types_.accountid.md)

  ↳ **ValidatorId**

## Implements

* [IU8a](_types_.iu8a.md)

## Indexable

* \[ **index**: *number*\]: number

AccountId

## Index

### Constructors

* [constructor](_interfaces_runtime_types_.validatorid.md#constructor)

### Properties

* [registry](_interfaces_runtime_types_.validatorid.md#registry)

### Accessors

* [encodedLength](_interfaces_runtime_types_.validatorid.md#encodedlength)
* [hash](_interfaces_runtime_types_.validatorid.md#hash)
* [isEmpty](_interfaces_runtime_types_.validatorid.md#isempty)
* [length](_interfaces_runtime_types_.validatorid.md#length)

### Methods

* [bitLength](_interfaces_runtime_types_.validatorid.md#bitlength)
* [eq](_interfaces_runtime_types_.validatorid.md#eq)
* [subarray](_interfaces_runtime_types_.validatorid.md#subarray)
* [toHex](_interfaces_runtime_types_.validatorid.md#tohex)
* [toJSON](_interfaces_runtime_types_.validatorid.md#tojson)
* [toRawType](_interfaces_runtime_types_.validatorid.md#torawtype)
* [toString](_interfaces_runtime_types_.validatorid.md#tostring)
* [toU8a](_interfaces_runtime_types_.validatorid.md#tou8a)
* [encode](_interfaces_runtime_types_.validatorid.md#static-encode)
* [with](_interfaces_runtime_types_.validatorid.md#static-with)

## Constructors

###  constructor

\+ **new ValidatorId**(`registry`: [Registry](_types_.registry.md), `value`: [AnyU8a](../modules/_types_.md#anyu8a)): *[ValidatorId](_interfaces_runtime_types_.validatorid.md)*

*Inherited from [AccountId](../classes/_primitive_generic_accountid_.accountid.md).[constructor](../classes/_primitive_generic_accountid_.accountid.md#constructor)*

*Overrides [U8aFixed](../classes/_codec_u8afixed_.u8afixed.md).[constructor](../classes/_codec_u8afixed_.u8afixed.md#constructor)*

*Defined in [packages/types/src/primitive/Generic/AccountId.ts:19](https://github.com/polkadot-js/api/blob/191abe4e0/packages/types/src/primitive/Generic/AccountId.ts#L19)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`registry` | [Registry](_types_.registry.md) | - |
`value` | [AnyU8a](../modules/_types_.md#anyu8a) |  new Uint8Array() |

**Returns:** *[ValidatorId](_interfaces_runtime_types_.validatorid.md)*

## Properties

###  registry

• **registry**: *[Registry](_types_.registry.md)*

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[registry](../classes/_codec_u8a_.u8a.md#registry)*

*Defined in [packages/types/src/codec/U8a.ts:20](https://github.com/polkadot-js/api/blob/191abe4e0/packages/types/src/codec/U8a.ts#L20)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[encodedLength](../classes/_codec_u8a_.u8a.md#encodedlength)*

*Defined in [packages/types/src/codec/U8a.ts:39](https://github.com/polkadot-js/api/blob/191abe4e0/packages/types/src/codec/U8a.ts#L39)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](_types_.ihash.md)*

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[hash](../classes/_codec_u8a_.u8a.md#hash)*

*Defined in [packages/types/src/codec/U8a.ts:46](https://github.com/polkadot-js/api/blob/191abe4e0/packages/types/src/codec/U8a.ts#L46)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[isEmpty](../classes/_codec_u8a_.u8a.md#isempty)*

*Defined in [packages/types/src/codec/U8a.ts:53](https://github.com/polkadot-js/api/blob/191abe4e0/packages/types/src/codec/U8a.ts#L53)*

**`description`** Returns true if the type wraps an empty/default all-0 value

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[length](../classes/_codec_u8a_.u8a.md#length)*

*Overrides void*

*Defined in [packages/types/src/codec/U8a.ts:60](https://github.com/polkadot-js/api/blob/191abe4e0/packages/types/src/codec/U8a.ts#L60)*

**`description`** The length of the value

**Returns:** *number*

## Methods

###  bitLength

▸ **bitLength**(): *number*

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[bitLength](../classes/_codec_u8a_.u8a.md#bitlength)*

*Defined in [packages/types/src/codec/U8a.ts:68](https://github.com/polkadot-js/api/blob/191abe4e0/packages/types/src/codec/U8a.ts#L68)*

**`description`** Returns the number of bits in the value

**Returns:** *number*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [AccountId](../classes/_primitive_generic_accountid_.accountid.md).[eq](../classes/_primitive_generic_accountid_.accountid.md#eq)*

*Overrides [U8a](../classes/_codec_u8a_.u8a.md).[eq](../classes/_codec_u8a_.u8a.md#eq)*

*Defined in [packages/types/src/primitive/Generic/AccountId.ts:43](https://github.com/polkadot-js/api/blob/191abe4e0/packages/types/src/primitive/Generic/AccountId.ts#L43)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  subarray

▸ **subarray**(`begin`: number, `end?`: undefined | number): *Uint8Array*

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[subarray](../classes/_codec_u8a_.u8a.md#subarray)*

*Overrides void*

*Defined in [packages/types/src/codec/U8a.ts:89](https://github.com/polkadot-js/api/blob/191abe4e0/packages/types/src/codec/U8a.ts#L89)*

**`description`** Create a new subarray from the actual buffer. This is needed for compat reasons since a new Uint8Array gets returned here

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`begin` | number | The position to start at |
`end?` | undefined &#124; number | The position to end at  |

**Returns:** *Uint8Array*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[toHex](../classes/_codec_u8a_.u8a.md#tohex)*

*Defined in [packages/types/src/codec/U8a.ts:96](https://github.com/polkadot-js/api/blob/191abe4e0/packages/types/src/codec/U8a.ts#L96)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *string*

*Inherited from [AccountId](../classes/_primitive_generic_accountid_.accountid.md).[toJSON](../classes/_primitive_generic_accountid_.accountid.md#tojson)*

*Overrides [U8a](../classes/_codec_u8a_.u8a.md).[toJSON](../classes/_codec_u8a_.u8a.md#tojson)*

*Defined in [packages/types/src/primitive/Generic/AccountId.ts:50](https://github.com/polkadot-js/api/blob/191abe4e0/packages/types/src/primitive/Generic/AccountId.ts#L50)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [AccountId](../classes/_primitive_generic_accountid_.accountid.md).[toRawType](../classes/_primitive_generic_accountid_.accountid.md#torawtype)*

*Overrides [U8aFixed](../classes/_codec_u8afixed_.u8afixed.md).[toRawType](../classes/_codec_u8afixed_.u8afixed.md#torawtype)*

*Defined in [packages/types/src/primitive/Generic/AccountId.ts:64](https://github.com/polkadot-js/api/blob/191abe4e0/packages/types/src/primitive/Generic/AccountId.ts#L64)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [AccountId](../classes/_primitive_generic_accountid_.accountid.md).[toString](../classes/_primitive_generic_accountid_.accountid.md#tostring)*

*Overrides [U8a](../classes/_codec_u8a_.u8a.md).[toString](../classes/_codec_u8a_.u8a.md#tostring)*

*Defined in [packages/types/src/primitive/Generic/AccountId.ts:57](https://github.com/polkadot-js/api/blob/191abe4e0/packages/types/src/primitive/Generic/AccountId.ts#L57)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[toU8a](../classes/_codec_u8a_.u8a.md#tou8a)*

*Defined in [packages/types/src/codec/U8a.ts:126](https://github.com/polkadot-js/api/blob/191abe4e0/packages/types/src/codec/U8a.ts#L126)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*

___

### `Static` encode

▸ **encode**(`value`: Uint8Array): *string*

*Inherited from [AccountId](../classes/_primitive_generic_accountid_.accountid.md).[encode](../classes/_primitive_generic_accountid_.accountid.md#static-encode)*

*Defined in [packages/types/src/primitive/Generic/AccountId.ts:24](https://github.com/polkadot-js/api/blob/191abe4e0/packages/types/src/primitive/Generic/AccountId.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | Uint8Array |

**Returns:** *string*

___

### `Static` with

▸ **with**(`bitLength`: [BitLength](../modules/_codec_u8afixed_.md#bitlength)): *[Constructor](_types_.constructor.md)‹[U8aFixed](../classes/_codec_u8afixed_.u8afixed.md)›*

*Inherited from [U8aFixed](../classes/_codec_u8afixed_.u8afixed.md).[with](../classes/_codec_u8afixed_.u8afixed.md#static-with)*

*Defined in [packages/types/src/codec/U8aFixed.ts:48](https://github.com/polkadot-js/api/blob/191abe4e0/packages/types/src/codec/U8aFixed.ts#L48)*

**Parameters:**

Name | Type |
------ | ------ |
`bitLength` | [BitLength](../modules/_codec_u8afixed_.md#bitlength) |

**Returns:** *[Constructor](_types_.constructor.md)‹[U8aFixed](../classes/_codec_u8afixed_.u8afixed.md)›*
