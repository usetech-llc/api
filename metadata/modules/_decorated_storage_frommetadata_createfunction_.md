[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["Decorated/storage/fromMetadata/createFunction"](_decorated_storage_frommetadata_createfunction_.md)

# External module: "Decorated/storage/fromMetadata/createFunction"

## Index

### Interfaces

* [CreateItemFn](../interfaces/_decorated_storage_frommetadata_createfunction_.createitemfn.md)
* [CreateItemOptions](../interfaces/_decorated_storage_frommetadata_createfunction_.createitemoptions.md)

### Functions

* [createFunction](_decorated_storage_frommetadata_createfunction_.md#createfunction)

## Functions

###  createFunction

▸ **createFunction**(`registry`: Registry, `itemFn`: [CreateItemFn](../interfaces/_decorated_storage_frommetadata_createfunction_.createitemfn.md), `options`: [CreateItemOptions](../interfaces/_decorated_storage_frommetadata_createfunction_.createitemoptions.md)): *StorageEntry*

*Defined in [packages/metadata/src/Decorated/storage/fromMetadata/createFunction.ts:194](https://github.com/polkadot-js/api/blob/ce5c8f7443/packages/metadata/src/Decorated/storage/fromMetadata/createFunction.ts#L194)*

From the schema of a function in the module's storage, generate the function
that will return the correct storage key.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`registry` | Registry | - |
`itemFn` | [CreateItemFn](../interfaces/_decorated_storage_frommetadata_createfunction_.createitemfn.md) | - |
`options` | [CreateItemOptions](../interfaces/_decorated_storage_frommetadata_createfunction_.createitemoptions.md) | Additional options when creating the function. These options are not known at runtime (from state_getMetadata), they need to be supplied by us manually at compile time.  |

**Returns:** *StorageEntry*
