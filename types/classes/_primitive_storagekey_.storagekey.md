[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["primitive/StorageKey"](../modules/_primitive_storagekey_.md) › [StorageKey](_primitive_storagekey_.storagekey.md)

# Class: StorageKey

**`name`** StorageKey

**`description`** 
A representation of a storage key (typically hashed) in the system. It can be
constructed by passing in a raw key or a StorageEntry with (optional) arguments.

## Hierarchy

  ↳ [Bytes](_primitive_bytes_.bytes.md)

  ↳ **StorageKey**

## Implements

* [IU8a](../interfaces/_types_.iu8a.md)

## Indexable

* \[ **index**: *number*\]: number

## Index

### Constructors

* [constructor](_primitive_storagekey_.storagekey.md#constructor)

### Properties

* [registry](_primitive_storagekey_.storagekey.md#registry)

### Accessors

* [encodedLength](_primitive_storagekey_.storagekey.md#encodedlength)
* [hash](_primitive_storagekey_.storagekey.md#hash)
* [isEmpty](_primitive_storagekey_.storagekey.md#isempty)
* [length](_primitive_storagekey_.storagekey.md#length)
* [meta](_primitive_storagekey_.storagekey.md#meta)
* [method](_primitive_storagekey_.storagekey.md#method)
* [outputType](_primitive_storagekey_.storagekey.md#outputtype)
* [section](_primitive_storagekey_.storagekey.md#section)

### Methods

* [bitLength](_primitive_storagekey_.storagekey.md#bitlength)
* [eq](_primitive_storagekey_.storagekey.md#eq)
* [setMeta](_primitive_storagekey_.storagekey.md#setmeta)
* [setOutputType](_primitive_storagekey_.storagekey.md#setoutputtype)
* [subarray](_primitive_storagekey_.storagekey.md#subarray)
* [toHex](_primitive_storagekey_.storagekey.md#tohex)
* [toJSON](_primitive_storagekey_.storagekey.md#tojson)
* [toRawType](_primitive_storagekey_.storagekey.md#torawtype)
* [toString](_primitive_storagekey_.storagekey.md#tostring)
* [toU8a](_primitive_storagekey_.storagekey.md#tou8a)
* [decodeStorageKey](_primitive_storagekey_.storagekey.md#static-decodestoragekey)
* [getMeta](_primitive_storagekey_.storagekey.md#static-getmeta)
* [getType](_primitive_storagekey_.storagekey.md#static-gettype)

## Constructors

###  constructor

\+ **new StorageKey**(`registry`: [Registry](../interfaces/_types_.registry.md), `value?`: [AnyU8a](../modules/_types_.md#anyu8a) | [StorageKey](_primitive_storagekey_.storagekey.md) | [StorageEntry](../interfaces/_primitive_storagekey_.storageentry.md) | [[StorageEntry](../interfaces/_primitive_storagekey_.storageentry.md), any], `override`: Partial‹StorageKeyExtra›): *[StorageKey](_primitive_storagekey_.storagekey.md)*

*Overrides [Bytes](_primitive_bytes_.bytes.md).[constructor](_primitive_bytes_.bytes.md#constructor)*

*Defined in [packages/types/src/primitive/StorageKey.ts:65](https://github.com/polkadot-js/api/blob/f02613754/packages/types/src/primitive/StorageKey.ts#L65)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`registry` | [Registry](../interfaces/_types_.registry.md) | - |
`value?` | [AnyU8a](../modules/_types_.md#anyu8a) &#124; [StorageKey](_primitive_storagekey_.storagekey.md) &#124; [StorageEntry](../interfaces/_primitive_storagekey_.storageentry.md) &#124; [[StorageEntry](../interfaces/_primitive_storagekey_.storageentry.md), any] | - |
`override` | Partial‹StorageKeyExtra› |  {} |

**Returns:** *[StorageKey](_primitive_storagekey_.storagekey.md)*

## Properties

###  registry

• **registry**: *[Registry](../interfaces/_types_.registry.md)*

*Implementation of [IU8a](../interfaces/_types_.iu8a.md).[registry](../interfaces/_types_.iu8a.md#registry)*

*Inherited from [Raw](_codec_raw_.raw.md).[registry](_codec_raw_.raw.md#registry)*

*Defined in [packages/types/src/codec/Raw.ts:20](https://github.com/polkadot-js/api/blob/f02613754/packages/types/src/codec/Raw.ts#L20)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Bytes](_primitive_bytes_.bytes.md).[encodedLength](_primitive_bytes_.bytes.md#encodedlength)*

*Overrides [Raw](_codec_raw_.raw.md).[encodedLength](_codec_raw_.raw.md#encodedlength)*

*Defined in [packages/types/src/primitive/Bytes.ts:53](https://github.com/polkadot-js/api/blob/f02613754/packages/types/src/primitive/Bytes.ts#L53)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](../interfaces/_types_.ihash.md)*

*Inherited from [Raw](_codec_raw_.raw.md).[hash](_codec_raw_.raw.md#hash)*

*Defined in [packages/types/src/codec/Raw.ts:46](https://github.com/polkadot-js/api/blob/f02613754/packages/types/src/codec/Raw.ts#L46)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](../interfaces/_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Raw](_codec_raw_.raw.md).[isEmpty](_codec_raw_.raw.md#isempty)*

*Defined in [packages/types/src/codec/Raw.ts:53](https://github.com/polkadot-js/api/blob/f02613754/packages/types/src/codec/Raw.ts#L53)*

**`description`** Returns true if the type wraps an empty/default all-0 value

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Inherited from [Raw](_codec_raw_.raw.md).[length](_codec_raw_.raw.md#length)*

*Overrides void*

*Defined in [packages/types/src/codec/Raw.ts:60](https://github.com/polkadot-js/api/blob/f02613754/packages/types/src/codec/Raw.ts#L60)*

**`description`** The length of the value

**Returns:** *number*

___

###  meta

• **get meta**(): *[StorageEntryMetadataLatest](../interfaces/_interfaces_metadata_types_.storageentrymetadatalatest.md) | undefined*

*Defined in [packages/types/src/primitive/StorageKey.ts:140](https://github.com/polkadot-js/api/blob/f02613754/packages/types/src/primitive/StorageKey.ts#L140)*

**`description`** The metadata or `undefined` when not available

**Returns:** *[StorageEntryMetadataLatest](../interfaces/_interfaces_metadata_types_.storageentrymetadatalatest.md) | undefined*

___

###  method

• **get method**(): *string | undefined*

*Defined in [packages/types/src/primitive/StorageKey.ts:147](https://github.com/polkadot-js/api/blob/f02613754/packages/types/src/primitive/StorageKey.ts#L147)*

**`description`** The key method or `undefined` when not specified

**Returns:** *string | undefined*

___

###  outputType

• **get outputType**(): *string | undefined*

*Defined in [packages/types/src/primitive/StorageKey.ts:154](https://github.com/polkadot-js/api/blob/f02613754/packages/types/src/primitive/StorageKey.ts#L154)*

**`description`** The output type, `null` when not available

**Returns:** *string | undefined*

___

###  section

• **get section**(): *string | undefined*

*Defined in [packages/types/src/primitive/StorageKey.ts:161](https://github.com/polkadot-js/api/blob/f02613754/packages/types/src/primitive/StorageKey.ts#L161)*

**`description`** The key section or `undefined` when not specified

**Returns:** *string | undefined*

## Methods

###  bitLength

▸ **bitLength**(): *number*

*Implementation of [IU8a](../interfaces/_types_.iu8a.md)*

*Inherited from [Raw](_codec_raw_.raw.md).[bitLength](_codec_raw_.raw.md#bitlength)*

*Defined in [packages/types/src/codec/Raw.ts:68](https://github.com/polkadot-js/api/blob/f02613754/packages/types/src/codec/Raw.ts#L68)*

**`description`** Returns the number of bits in the value

**Returns:** *number*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [IU8a](../interfaces/_types_.iu8a.md)*

*Inherited from [Raw](_codec_raw_.raw.md).[eq](_codec_raw_.raw.md#eq)*

*Defined in [packages/types/src/codec/Raw.ts:75](https://github.com/polkadot-js/api/blob/f02613754/packages/types/src/codec/Raw.ts#L75)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  setMeta

▸ **setMeta**(`meta?`: [StorageEntryMetadataLatest](../interfaces/_interfaceregistry_.interfaceregistry.md#storageentrymetadatalatest)): *this*

*Defined in [packages/types/src/primitive/StorageKey.ts:168](https://github.com/polkadot-js/api/blob/f02613754/packages/types/src/primitive/StorageKey.ts#L168)*

**`description`** Sets the meta for this key

**Parameters:**

Name | Type |
------ | ------ |
`meta?` | [StorageEntryMetadataLatest](../interfaces/_interfaceregistry_.interfaceregistry.md#storageentrymetadatalatest) |

**Returns:** *this*

___

###  setOutputType

▸ **setOutputType**(`outputType?`: undefined | string): *this*

*Defined in [packages/types/src/primitive/StorageKey.ts:177](https://github.com/polkadot-js/api/blob/f02613754/packages/types/src/primitive/StorageKey.ts#L177)*

**`description`** Sets the output type for this storage key

**Parameters:**

Name | Type |
------ | ------ |
`outputType?` | undefined &#124; string |

**Returns:** *this*

___

###  subarray

▸ **subarray**(`begin`: number, `end?`: undefined | number): *Uint8Array*

*Inherited from [Raw](_codec_raw_.raw.md).[subarray](_codec_raw_.raw.md#subarray)*

*Overrides void*

*Defined in [packages/types/src/codec/Raw.ts:89](https://github.com/polkadot-js/api/blob/f02613754/packages/types/src/codec/Raw.ts#L89)*

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

*Inherited from [Raw](_codec_raw_.raw.md).[toHex](_codec_raw_.raw.md#tohex)*

*Defined in [packages/types/src/codec/Raw.ts:96](https://github.com/polkadot-js/api/blob/f02613754/packages/types/src/codec/Raw.ts#L96)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *string*

*Implementation of [IU8a](../interfaces/_types_.iu8a.md)*

*Inherited from [Raw](_codec_raw_.raw.md).[toJSON](_codec_raw_.raw.md#tojson)*

*Defined in [packages/types/src/codec/Raw.ts:103](https://github.com/polkadot-js/api/blob/f02613754/packages/types/src/codec/Raw.ts#L103)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [IU8a](../interfaces/_types_.iu8a.md)*

*Inherited from [Bytes](_primitive_bytes_.bytes.md).[toRawType](_primitive_bytes_.bytes.md#torawtype)*

*Overrides [Raw](_codec_raw_.raw.md).[toRawType](_codec_raw_.raw.md#torawtype)*

*Defined in [packages/types/src/primitive/Bytes.ts:60](https://github.com/polkadot-js/api/blob/f02613754/packages/types/src/primitive/Bytes.ts#L60)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [IU8a](../interfaces/_types_.iu8a.md)*

*Inherited from [Raw](_codec_raw_.raw.md).[toString](_codec_raw_.raw.md#tostring)*

*Overrides void*

*Defined in [packages/types/src/codec/Raw.ts:117](https://github.com/polkadot-js/api/blob/f02613754/packages/types/src/codec/Raw.ts#L117)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from [Bytes](_primitive_bytes_.bytes.md).[toU8a](_primitive_bytes_.bytes.md#tou8a)*

*Overrides [Raw](_codec_raw_.raw.md).[toU8a](_codec_raw_.raw.md#tou8a)*

*Defined in [packages/types/src/primitive/Bytes.ts:68](https://github.com/polkadot-js/api/blob/f02613754/packages/types/src/primitive/Bytes.ts#L68)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*

___

### `Static` decodeStorageKey

▸ **decodeStorageKey**(`value?`: [AnyU8a](../modules/_types_.md#anyu8a) | [StorageKey](_primitive_storagekey_.storagekey.md) | [StorageEntry](../interfaces/_primitive_storagekey_.storageentry.md) | [[StorageEntry](../interfaces/_primitive_storagekey_.storageentry.md), any]): *Decoded*

*Defined in [packages/types/src/primitive/StorageKey.ts:78](https://github.com/polkadot-js/api/blob/f02613754/packages/types/src/primitive/StorageKey.ts#L78)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | [AnyU8a](../modules/_types_.md#anyu8a) &#124; [StorageKey](_primitive_storagekey_.storagekey.md) &#124; [StorageEntry](../interfaces/_primitive_storagekey_.storageentry.md) &#124; [[StorageEntry](../interfaces/_primitive_storagekey_.storageentry.md), any] |

**Returns:** *Decoded*

___

### `Static` getMeta

▸ **getMeta**(`value`: [StorageKey](_primitive_storagekey_.storagekey.md) | [StorageEntry](../interfaces/_primitive_storagekey_.storageentry.md) | [[StorageEntry](../interfaces/_primitive_storagekey_.storageentry.md), any]): *[StorageEntryMetadataLatest](../interfaces/_interfaces_metadata_types_.storageentrymetadatalatest.md) | undefined*

*Defined in [packages/types/src/primitive/StorageKey.ts:109](https://github.com/polkadot-js/api/blob/f02613754/packages/types/src/primitive/StorageKey.ts#L109)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [StorageKey](_primitive_storagekey_.storagekey.md) &#124; [StorageEntry](../interfaces/_primitive_storagekey_.storageentry.md) &#124; [[StorageEntry](../interfaces/_primitive_storagekey_.storageentry.md), any] |

**Returns:** *[StorageEntryMetadataLatest](../interfaces/_interfaces_metadata_types_.storageentrymetadatalatest.md) | undefined*

___

### `Static` getType

▸ **getType**(`value`: [StorageKey](_primitive_storagekey_.storagekey.md) | [StorageEntry](../interfaces/_primitive_storagekey_.storageentry.md) | [[StorageEntry](../interfaces/_primitive_storagekey_.storageentry.md), any]): *string | undefined*

*Defined in [packages/types/src/primitive/StorageKey.ts:123](https://github.com/polkadot-js/api/blob/f02613754/packages/types/src/primitive/StorageKey.ts#L123)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [StorageKey](_primitive_storagekey_.storagekey.md) &#124; [StorageEntry](../interfaces/_primitive_storagekey_.storageentry.md) &#124; [[StorageEntry](../interfaces/_primitive_storagekey_.storageentry.md), any] |

**Returns:** *string | undefined*
