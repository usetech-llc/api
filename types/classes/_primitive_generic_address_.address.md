[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["primitive/Generic/Address"](../modules/_primitive_generic_address_.md) › [Address](_primitive_generic_address_.address.md)

# Class: Address

**`name`** Address

**`description`** 
A wrapper around an AccountId and/or AccountIndex that is encoded with a prefix.
Since we are dealing with underlying publicKeys (or shorter encoded addresses),
we extend from Base with an AccountId/AccountIndex wrapper. Basically the Address
is encoded as `[ <prefix-byte>, ...publicKey/...bytes ]` as per spec

## Hierarchy

* [Base](_codec_base_.base.md)‹[AccountId](_primitive_generic_accountid_.accountid.md) | [AccountIndex](_primitive_generic_accountindex_.accountindex.md)›

  ↳ **Address**

## Implements

* [Codec](../interfaces/_types_codec_.codec.md)

## Index

### Constructors

* [constructor](_primitive_generic_address_.address.md#constructor)

### Properties

* [registry](_primitive_generic_address_.address.md#registry)

### Accessors

* [encodedLength](_primitive_generic_address_.address.md#encodedlength)
* [hash](_primitive_generic_address_.address.md#hash)
* [isEmpty](_primitive_generic_address_.address.md#isempty)
* [rawLength](_primitive_generic_address_.address.md#rawlength)

### Methods

* [eq](_primitive_generic_address_.address.md#eq)
* [toHex](_primitive_generic_address_.address.md#tohex)
* [toHuman](_primitive_generic_address_.address.md#tohuman)
* [toJSON](_primitive_generic_address_.address.md#tojson)
* [toRawType](_primitive_generic_address_.address.md#torawtype)
* [toString](_primitive_generic_address_.address.md#tostring)
* [toU8a](_primitive_generic_address_.address.md#tou8a)

## Constructors

###  constructor

\+ **new Address**(`registry`: [Registry](../interfaces/_types_registry_.registry.md), `value`: AnyAddress): *[Address](_primitive_generic_address_.address.md)*

*Defined in [packages/types/src/primitive/Generic/Address.ts:52](https://github.com/polkadot-js/api/blob/30f5baa906/packages/types/src/primitive/Generic/Address.ts#L52)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`registry` | [Registry](../interfaces/_types_registry_.registry.md) | - |
`value` | AnyAddress | new Uint8Array() |

**Returns:** *[Address](_primitive_generic_address_.address.md)*

## Properties

###  registry

• **registry**: *[Registry](../interfaces/_types_registry_.registry.md)*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md).[registry](../interfaces/_types_codec_.codec.md#registry)*

*Inherited from [Base](_codec_base_.base.md).[registry](_codec_base_.base.md#registry)*

*Defined in [packages/types/src/codec/Base.ts:17](https://github.com/polkadot-js/api/blob/30f5baa906/packages/types/src/codec/Base.ts#L17)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Overrides [Base](_codec_base_.base.md).[encodedLength](_codec_base_.base.md#encodedlength)*

*Defined in [packages/types/src/primitive/Generic/Address.ts:75](https://github.com/polkadot-js/api/blob/30f5baa906/packages/types/src/primitive/Generic/Address.ts#L75)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *H256*

*Inherited from [Base](_codec_base_.base.md).[hash](_codec_base_.base.md#hash)*

*Defined in [packages/types/src/codec/Base.ts:36](https://github.com/polkadot-js/api/blob/30f5baa906/packages/types/src/codec/Base.ts#L36)*

**`description`** returns a hash of the contents

**Returns:** *H256*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Base](_codec_base_.base.md).[isEmpty](_codec_base_.base.md#isempty)*

*Defined in [packages/types/src/codec/Base.ts:43](https://github.com/polkadot-js/api/blob/30f5baa906/packages/types/src/codec/Base.ts#L43)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  rawLength

• **get rawLength**(): *number*

*Defined in [packages/types/src/primitive/Generic/Address.ts:89](https://github.com/polkadot-js/api/blob/30f5baa906/packages/types/src/primitive/Generic/Address.ts#L89)*

**`description`** The length of the raw value, either AccountIndex or AccountId

**Returns:** *number*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Inherited from [Base](_codec_base_.base.md).[eq](_codec_base_.base.md#eq)*

*Defined in [packages/types/src/codec/Base.ts:50](https://github.com/polkadot-js/api/blob/30f5baa906/packages/types/src/codec/Base.ts#L50)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(): *string*

*Overrides [Base](_codec_base_.base.md).[toHex](_codec_base_.base.md#tohex)*

*Defined in [packages/types/src/primitive/Generic/Address.ts:98](https://github.com/polkadot-js/api/blob/30f5baa906/packages/types/src/primitive/Generic/Address.ts#L98)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(`isExtended?`: undefined | false | true): *[AnyJson](../modules/_types_helpers_.md#anyjson)*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Inherited from [Base](_codec_base_.base.md).[toHuman](_codec_base_.base.md#tohuman)*

*Defined in [packages/types/src/codec/Base.ts:64](https://github.com/polkadot-js/api/blob/30f5baa906/packages/types/src/codec/Base.ts#L64)*

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

**Parameters:**

Name | Type |
------ | ------ |
`isExtended?` | undefined &#124; false &#124; true |

**Returns:** *[AnyJson](../modules/_types_helpers_.md#anyjson)*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_helpers_.md#anyjson)*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Inherited from [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [packages/types/src/codec/Base.ts:71](https://github.com/polkadot-js/api/blob/30f5baa906/packages/types/src/codec/Base.ts#L71)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_helpers_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Overrides [Base](_codec_base_.base.md).[toRawType](_codec_base_.base.md#torawtype)*

*Defined in [packages/types/src/primitive/Generic/Address.ts:105](https://github.com/polkadot-js/api/blob/30f5baa906/packages/types/src/primitive/Generic/Address.ts#L105)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Inherited from [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [packages/types/src/codec/Base.ts:78](https://github.com/polkadot-js/api/blob/30f5baa906/packages/types/src/codec/Base.ts#L78)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Overrides [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [packages/types/src/primitive/Generic/Address.ts:113](https://github.com/polkadot-js/api/blob/30f5baa906/packages/types/src/primitive/Generic/Address.ts#L113)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*
