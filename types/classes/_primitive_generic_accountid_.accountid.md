[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["primitive/Generic/AccountId"](../modules/_primitive_generic_accountid_.md) › [AccountId](_primitive_generic_accountid_.accountid.md)

# Class: AccountId

**`name`** AccountId

**`description`** 
A wrapper around an AccountId/PublicKey representation. Since we are dealing with
underlying PublicKeys (32 bytes in length), we extend from U8aFixed which is
just a Uint8Array wrapper with a fixed length.

## Hierarchy

  ↳ [U8aFixed](_codec_u8afixed_.u8afixed.md)

  ↳ **AccountId**

## Implements

* IU8a

## Indexable

* \[ **index**: *number*\]: number

## Index

### Constructors

* [constructor](_primitive_generic_accountid_.accountid.md#constructor)

### Properties

* [registry](_primitive_generic_accountid_.accountid.md#registry)

### Accessors

* [encodedLength](_primitive_generic_accountid_.accountid.md#encodedlength)
* [hash](_primitive_generic_accountid_.accountid.md#hash)
* [isEmpty](_primitive_generic_accountid_.accountid.md#isempty)
* [length](_primitive_generic_accountid_.accountid.md#length)

### Methods

* [bitLength](_primitive_generic_accountid_.accountid.md#bitlength)
* [eq](_primitive_generic_accountid_.accountid.md#eq)
* [subarray](_primitive_generic_accountid_.accountid.md#subarray)
* [toHex](_primitive_generic_accountid_.accountid.md#tohex)
* [toJSON](_primitive_generic_accountid_.accountid.md#tojson)
* [toRawType](_primitive_generic_accountid_.accountid.md#torawtype)
* [toString](_primitive_generic_accountid_.accountid.md#tostring)
* [toU8a](_primitive_generic_accountid_.accountid.md#tou8a)
* [encode](_primitive_generic_accountid_.accountid.md#static-encode)
* [with](_primitive_generic_accountid_.accountid.md#static-with)

## Constructors

###  constructor

\+ **new AccountId**(`registry`: Registry, `value`: AnyU8a): *[AccountId](_primitive_generic_accountid_.accountid.md)*

*Overrides [U8aFixed](_codec_u8afixed_.u8afixed.md).[constructor](_codec_u8afixed_.u8afixed.md#constructor)*

*Defined in [packages/types/src/primitive/Generic/AccountId.ts:32](https://github.com/polkadot-js/api/blob/c465252e69/packages/types/src/primitive/Generic/AccountId.ts#L32)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`registry` | Registry | - |
`value` | AnyU8a | new Uint8Array() |

**Returns:** *[AccountId](_primitive_generic_accountid_.accountid.md)*

## Properties

###  registry

• **registry**: *Registry*

*Inherited from [Raw](_codec_raw_.raw.md).[registry](_codec_raw_.raw.md#registry)*

*Defined in [packages/types/src/codec/Raw.ts:29](https://github.com/polkadot-js/api/blob/c465252e69/packages/types/src/codec/Raw.ts#L29)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Raw](_codec_raw_.raw.md).[encodedLength](_codec_raw_.raw.md#encodedlength)*

*Defined in [packages/types/src/codec/Raw.ts:40](https://github.com/polkadot-js/api/blob/c465252e69/packages/types/src/codec/Raw.ts#L40)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *IHash*

*Inherited from [Raw](_codec_raw_.raw.md).[hash](_codec_raw_.raw.md#hash)*

*Defined in [packages/types/src/codec/Raw.ts:47](https://github.com/polkadot-js/api/blob/c465252e69/packages/types/src/codec/Raw.ts#L47)*

**`description`** returns a hash of the contents

**Returns:** *IHash*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Raw](_codec_raw_.raw.md).[isEmpty](_codec_raw_.raw.md#isempty)*

*Defined in [packages/types/src/codec/Raw.ts:54](https://github.com/polkadot-js/api/blob/c465252e69/packages/types/src/codec/Raw.ts#L54)*

**`description`** Returns true if the type wraps an empty/default all-0 value

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Inherited from [Raw](_codec_raw_.raw.md).[length](_codec_raw_.raw.md#length)*

*Overrides void*

*Defined in [packages/types/src/codec/Raw.ts:61](https://github.com/polkadot-js/api/blob/c465252e69/packages/types/src/codec/Raw.ts#L61)*

**`description`** The length of the value

**Returns:** *number*

## Methods

###  bitLength

▸ **bitLength**(): *number*

*Inherited from [Raw](_codec_raw_.raw.md).[bitLength](_codec_raw_.raw.md#bitlength)*

*Defined in [packages/types/src/codec/Raw.ts:69](https://github.com/polkadot-js/api/blob/c465252e69/packages/types/src/codec/Raw.ts#L69)*

**`description`** Returns the number of bits in the value

**Returns:** *number*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Overrides [Raw](_codec_raw_.raw.md).[eq](_codec_raw_.raw.md#eq)*

*Defined in [packages/types/src/primitive/Generic/AccountId.ts:44](https://github.com/polkadot-js/api/blob/c465252e69/packages/types/src/primitive/Generic/AccountId.ts#L44)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  subarray

▸ **subarray**(`begin`: number, `end?`: undefined | number): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Inherited from [Raw](_codec_raw_.raw.md).[subarray](_codec_raw_.raw.md#subarray)*

*Overrides void*

*Defined in [packages/types/src/codec/Raw.ts:90](https://github.com/polkadot-js/api/blob/c465252e69/packages/types/src/codec/Raw.ts#L90)*

**`description`** Create a new subarray from the actual buffer. This is needed for compat reasons since a new Uint8Array gets returned here

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`begin` | number | The position to start at |
`end?` | undefined &#124; number | The position to end at  |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Raw](_codec_raw_.raw.md).[toHex](_codec_raw_.raw.md#tohex)*

*Defined in [packages/types/src/codec/Raw.ts:97](https://github.com/polkadot-js/api/blob/c465252e69/packages/types/src/codec/Raw.ts#L97)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *string*

*Overrides [Raw](_codec_raw_.raw.md).[toJSON](_codec_raw_.raw.md#tojson)*

*Defined in [packages/types/src/primitive/Generic/AccountId.ts:51](https://github.com/polkadot-js/api/blob/c465252e69/packages/types/src/primitive/Generic/AccountId.ts#L51)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Overrides [U8aFixed](_codec_u8afixed_.u8afixed.md).[toRawType](_codec_u8afixed_.u8afixed.md#torawtype)*

*Defined in [packages/types/src/primitive/Generic/AccountId.ts:65](https://github.com/polkadot-js/api/blob/c465252e69/packages/types/src/primitive/Generic/AccountId.ts#L65)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Overrides [Raw](_codec_raw_.raw.md).[toString](_codec_raw_.raw.md#tostring)*

*Defined in [packages/types/src/primitive/Generic/AccountId.ts:58](https://github.com/polkadot-js/api/blob/c465252e69/packages/types/src/primitive/Generic/AccountId.ts#L58)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Inherited from [Raw](_codec_raw_.raw.md).[toU8a](_codec_raw_.raw.md#tou8a)*

*Defined in [packages/types/src/codec/Raw.ts:127](https://github.com/polkadot-js/api/blob/c465252e69/packages/types/src/codec/Raw.ts#L127)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

___

### `Static` encode

▸ **encode**(`value`: [Uint8Array](_codec_raw_.raw.md#static-uint8array)): *string*

*Defined in [packages/types/src/primitive/Generic/AccountId.ts:37](https://github.com/polkadot-js/api/blob/c465252e69/packages/types/src/primitive/Generic/AccountId.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Uint8Array](_codec_raw_.raw.md#static-uint8array) |

**Returns:** *string*

___

### `Static` with

▸ **with**(`bitLength`: [BitLength](../modules/_codec_u8afixed_.md#bitlength)): *Constructor‹[U8aFixed](_codec_u8afixed_.u8afixed.md)›*

*Inherited from [U8aFixed](_codec_u8afixed_.u8afixed.md).[with](_codec_u8afixed_.u8afixed.md#static-with)*

*Defined in [packages/types/src/codec/U8aFixed.ts:49](https://github.com/polkadot-js/api/blob/c465252e69/packages/types/src/codec/U8aFixed.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`bitLength` | [BitLength](../modules/_codec_u8afixed_.md#bitlength) |

**Returns:** *Constructor‹[U8aFixed](_codec_u8afixed_.u8afixed.md)›*
