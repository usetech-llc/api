[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["Decorated/storage/fromMetadata/getHasher"](_decorated_storage_frommetadata_gethasher_.md)

# External module: "Decorated/storage/fromMetadata/getHasher"

## Index

### Type aliases

* [HasherFunction](_decorated_storage_frommetadata_gethasher_.md#hasherfunction)
* [HasherInput](_decorated_storage_frommetadata_gethasher_.md#hasherinput)

### Functions

* [getHasher](_decorated_storage_frommetadata_gethasher_.md#gethasher)

## Type aliases

###  HasherFunction

Ƭ **HasherFunction**: *function*

*Defined in [packages/metadata/src/Decorated/storage/fromMetadata/getHasher.ts:11](https://github.com/polkadot-js/api/blob/3619fabe5/packages/metadata/src/Decorated/storage/fromMetadata/getHasher.ts#L11)*

#### Type declaration:

▸ (`data`: [HasherInput](_decorated_storage_frommetadata_gethasher_.md#hasherinput)): *Uint8Array*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [HasherInput](_decorated_storage_frommetadata_gethasher_.md#hasherinput) |

___

###  HasherInput

Ƭ **HasherInput**: *string | Buffer | Uint8Array*

*Defined in [packages/metadata/src/Decorated/storage/fromMetadata/getHasher.ts:9](https://github.com/polkadot-js/api/blob/3619fabe5/packages/metadata/src/Decorated/storage/fromMetadata/getHasher.ts#L9)*

## Functions

###  getHasher

▸ **getHasher**(`hasher?`: StorageHasher): *[HasherFunction](_decorated_storage_frommetadata_gethasher_.md#hasherfunction)*

*Defined in [packages/metadata/src/Decorated/storage/fromMetadata/getHasher.ts:25](https://github.com/polkadot-js/api/blob/3619fabe5/packages/metadata/src/Decorated/storage/fromMetadata/getHasher.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`hasher?` | StorageHasher |

**Returns:** *[HasherFunction](_decorated_storage_frommetadata_gethasher_.md#hasherfunction)*
