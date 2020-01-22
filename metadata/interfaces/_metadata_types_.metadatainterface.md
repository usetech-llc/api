[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["Metadata/types"](../modules/_metadata_types_.md) › [MetadataInterface](_metadata_types_.metadatainterface.md)

# Interface: MetadataInterface <**Modules**>

## Type parameters

▪ **Modules**: *Codec*

## Hierarchy

* Codec

  ↳ **MetadataInterface**

## Index

### Properties

* [encodedLength](_metadata_types_.metadatainterface.md#encodedlength)
* [hash](_metadata_types_.metadatainterface.md#hash)
* [isEmpty](_metadata_types_.metadatainterface.md#isempty)
* [modules](_metadata_types_.metadatainterface.md#modules)
* [registry](_metadata_types_.metadatainterface.md#registry)

### Methods

* [eq](_metadata_types_.metadatainterface.md#eq)
* [toHex](_metadata_types_.metadatainterface.md#tohex)
* [toJSON](_metadata_types_.metadatainterface.md#tojson)
* [toRawType](_metadata_types_.metadatainterface.md#torawtype)
* [toString](_metadata_types_.metadatainterface.md#tostring)
* [toU8a](_metadata_types_.metadatainterface.md#tou8a)

## Properties

###  encodedLength

• **encodedLength**: *number*

*Inherited from void*

*Defined in [packages/types/src/types.ts:76](https://github.com/polkadot-js/api/blob/7ed1857589/packages/types/src/types.ts#L76)*

**`description`** The length of the value when encoded as a Uint8Array

___

###  hash

• **hash**: *IHash*

*Inherited from void*

*Defined in [packages/types/src/types.ts:81](https://github.com/polkadot-js/api/blob/7ed1857589/packages/types/src/types.ts#L81)*

**`description`** Returns a hash of the value

___

###  isEmpty

• **isEmpty**: *boolean*

*Inherited from void*

*Defined in [packages/types/src/types.ts:86](https://github.com/polkadot-js/api/blob/7ed1857589/packages/types/src/types.ts#L86)*

**`description`** Checks if the value is an empty value

___

###  modules

• **modules**: *Vec‹Modules›*

*Defined in [packages/metadata/src/Metadata/types.ts:9](https://github.com/polkadot-js/api/blob/7ed1857589/packages/metadata/src/Metadata/types.ts#L9)*

___

###  registry

• **registry**: *Registry*

*Inherited from void*

*Defined in [packages/types/src/types.ts:91](https://github.com/polkadot-js/api/blob/7ed1857589/packages/types/src/types.ts#L91)*

**`description`** The registry associated with this object

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from void*

*Defined in [packages/types/src/types.ts:96](https://github.com/polkadot-js/api/blob/7ed1857589/packages/types/src/types.ts#L96)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Inherited from void*

*Defined in [packages/types/src/types.ts:101](https://github.com/polkadot-js/api/blob/7ed1857589/packages/types/src/types.ts#L101)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

**Parameters:**

Name | Type |
------ | ------ |
`isLe?` | undefined &#124; false &#124; true |

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *AnyJson*

*Inherited from void*

*Defined in [packages/types/src/types.ts:106](https://github.com/polkadot-js/api/blob/7ed1857589/packages/types/src/types.ts#L106)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *AnyJson*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from void*

*Defined in [packages/types/src/types.ts:111](https://github.com/polkadot-js/api/blob/7ed1857589/packages/types/src/types.ts#L111)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from void*

*Defined in [packages/types/src/types.ts:116](https://github.com/polkadot-js/api/blob/7ed1857589/packages/types/src/types.ts#L116)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: BareOpts): *Uint8Array*

*Inherited from void*

*Defined in [packages/types/src/types.ts:122](https://github.com/polkadot-js/api/blob/7ed1857589/packages/types/src/types.ts#L122)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | BareOpts | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*
