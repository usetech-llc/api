[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["primitive/Bytes"](../modules/_primitive_bytes_.md) › [Bytes](_primitive_bytes_.bytes.md)

# Class: Bytes

**`name`** Bytes

**`description`** 
A Bytes wrapper for Vec<u8>. The significant difference between this and a normal Uint8Array
is that this version allows for length-encoding. (i.e. it is a variable-item codec, the same
as what is found in [Text](_primitive_text_.text.md) and [Vec](_codec_vec_.vec.md))

## Hierarchy

  ↳ [U8a](_codec_u8a_.u8a.md)

  ↳ **Bytes**

  ↳ [Justification](../interfaces/_interfaces_runtime_types_.justification.md)

  ↳ [TrieId](../interfaces/_interfaces_contracts_types_.trieid.md)

  ↳ [OpaqueKey](../interfaces/_interfaces_deprecated_types_.opaquekey.md)

  ↳ [OpaqueMultiaddr](../interfaces/_interfaces_imonline_types_.opaquemultiaddr.md)

  ↳ [OpaquePeerId](../interfaces/_interfaces_imonline_types_.opaquepeerid.md)

  ↳ [OpaqueTimeSlot](../interfaces/_interfaces_offences_types_.opaquetimeslot.md)

  ↳ [Key](../interfaces/_interfaces_system_types_.key.md)

  ↳ [HeadData](../interfaces/_interfaces_parachains_types_.headdata.md)

  ↳ [StorageData](_primitive_storagedata_.storagedata.md)

  ↳ [StorageKey](_primitive_storagekey_.storagekey.md)

## Implements

* [IU8a](../interfaces/_types_.iu8a.md)

## Indexable

* \[ **index**: *number*\]: number

## Index

### Constructors

* [constructor](_primitive_bytes_.bytes.md#constructor)

### Properties

* [registry](_primitive_bytes_.bytes.md#registry)

### Accessors

* [encodedLength](_primitive_bytes_.bytes.md#encodedlength)
* [hash](_primitive_bytes_.bytes.md#hash)
* [isEmpty](_primitive_bytes_.bytes.md#isempty)
* [length](_primitive_bytes_.bytes.md#length)

### Methods

* [bitLength](_primitive_bytes_.bytes.md#bitlength)
* [eq](_primitive_bytes_.bytes.md#eq)
* [subarray](_primitive_bytes_.bytes.md#subarray)
* [toHex](_primitive_bytes_.bytes.md#tohex)
* [toJSON](_primitive_bytes_.bytes.md#tojson)
* [toRawType](_primitive_bytes_.bytes.md#torawtype)
* [toString](_primitive_bytes_.bytes.md#tostring)
* [toU8a](_primitive_bytes_.bytes.md#tou8a)

## Constructors

###  constructor

\+ **new Bytes**(`registry`: [Registry](../interfaces/_types_.registry.md), `value?`: [AnyU8a](../modules/_types_.md#anyu8a)): *[Bytes](_primitive_bytes_.bytes.md)*

*Overrides [U8a](_codec_u8a_.u8a.md).[constructor](_codec_u8a_.u8a.md#constructor)*

*Defined in [packages/types/src/primitive/Bytes.ts:19](https://github.com/polkadot-js/api/blob/532a252fe/packages/types/src/primitive/Bytes.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_types_.registry.md) |
`value?` | [AnyU8a](../modules/_types_.md#anyu8a) |

**Returns:** *[Bytes](_primitive_bytes_.bytes.md)*

## Properties

###  registry

• **registry**: *[Registry](../interfaces/_types_.registry.md)*

*Implementation of [IU8a](../interfaces/_types_.iu8a.md).[registry](../interfaces/_types_.iu8a.md#registry)*

*Inherited from [U8a](_codec_u8a_.u8a.md).[registry](_codec_u8a_.u8a.md#registry)*

*Defined in [packages/types/src/codec/U8a.ts:20](https://github.com/polkadot-js/api/blob/532a252fe/packages/types/src/codec/U8a.ts#L20)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Overrides [U8a](_codec_u8a_.u8a.md).[encodedLength](_codec_u8a_.u8a.md#encodedlength)*

*Defined in [packages/types/src/primitive/Bytes.ts:53](https://github.com/polkadot-js/api/blob/532a252fe/packages/types/src/primitive/Bytes.ts#L53)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](../interfaces/_types_.ihash.md)*

*Inherited from [U8a](_codec_u8a_.u8a.md).[hash](_codec_u8a_.u8a.md#hash)*

*Defined in [packages/types/src/codec/U8a.ts:46](https://github.com/polkadot-js/api/blob/532a252fe/packages/types/src/codec/U8a.ts#L46)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](../interfaces/_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [U8a](_codec_u8a_.u8a.md).[isEmpty](_codec_u8a_.u8a.md#isempty)*

*Defined in [packages/types/src/codec/U8a.ts:53](https://github.com/polkadot-js/api/blob/532a252fe/packages/types/src/codec/U8a.ts#L53)*

**`description`** Returns true if the type wraps an empty/default all-0 value

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Inherited from [U8a](_codec_u8a_.u8a.md).[length](_codec_u8a_.u8a.md#length)*

*Overrides void*

*Defined in [packages/types/src/codec/U8a.ts:60](https://github.com/polkadot-js/api/blob/532a252fe/packages/types/src/codec/U8a.ts#L60)*

**`description`** The length of the value

**Returns:** *number*

## Methods

###  bitLength

▸ **bitLength**(): *number*

*Implementation of [IU8a](../interfaces/_types_.iu8a.md)*

*Inherited from [U8a](_codec_u8a_.u8a.md).[bitLength](_codec_u8a_.u8a.md#bitlength)*

*Defined in [packages/types/src/codec/U8a.ts:68](https://github.com/polkadot-js/api/blob/532a252fe/packages/types/src/codec/U8a.ts#L68)*

**`description`** Returns the number of bits in the value

**Returns:** *number*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [IU8a](../interfaces/_types_.iu8a.md)*

*Inherited from [U8a](_codec_u8a_.u8a.md).[eq](_codec_u8a_.u8a.md#eq)*

*Defined in [packages/types/src/codec/U8a.ts:75](https://github.com/polkadot-js/api/blob/532a252fe/packages/types/src/codec/U8a.ts#L75)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  subarray

▸ **subarray**(`begin`: number, `end?`: undefined | number): *Uint8Array*

*Inherited from [U8a](_codec_u8a_.u8a.md).[subarray](_codec_u8a_.u8a.md#subarray)*

*Overrides void*

*Defined in [packages/types/src/codec/U8a.ts:89](https://github.com/polkadot-js/api/blob/532a252fe/packages/types/src/codec/U8a.ts#L89)*

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

*Inherited from [U8a](_codec_u8a_.u8a.md).[toHex](_codec_u8a_.u8a.md#tohex)*

*Defined in [packages/types/src/codec/U8a.ts:96](https://github.com/polkadot-js/api/blob/532a252fe/packages/types/src/codec/U8a.ts#L96)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *string*

*Implementation of [IU8a](../interfaces/_types_.iu8a.md)*

*Inherited from [U8a](_codec_u8a_.u8a.md).[toJSON](_codec_u8a_.u8a.md#tojson)*

*Defined in [packages/types/src/codec/U8a.ts:103](https://github.com/polkadot-js/api/blob/532a252fe/packages/types/src/codec/U8a.ts#L103)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [IU8a](../interfaces/_types_.iu8a.md)*

*Overrides [U8a](_codec_u8a_.u8a.md).[toRawType](_codec_u8a_.u8a.md#torawtype)*

*Defined in [packages/types/src/primitive/Bytes.ts:60](https://github.com/polkadot-js/api/blob/532a252fe/packages/types/src/primitive/Bytes.ts#L60)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [IU8a](../interfaces/_types_.iu8a.md)*

*Inherited from [U8a](_codec_u8a_.u8a.md).[toString](_codec_u8a_.u8a.md#tostring)*

*Overrides void*

*Defined in [packages/types/src/codec/U8a.ts:117](https://github.com/polkadot-js/api/blob/532a252fe/packages/types/src/codec/U8a.ts#L117)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Overrides [U8a](_codec_u8a_.u8a.md).[toU8a](_codec_u8a_.u8a.md#tou8a)*

*Defined in [packages/types/src/primitive/Bytes.ts:68](https://github.com/polkadot-js/api/blob/532a252fe/packages/types/src/primitive/Bytes.ts#L68)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*
