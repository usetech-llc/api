[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["Decorated/extrinsics/fromMetadata/createUnchecked"](_decorated_extrinsics_frommetadata_createunchecked_.md)

# External module: "Decorated/extrinsics/fromMetadata/createUnchecked"

## Index

### Functions

* [createDescriptor](_decorated_extrinsics_frommetadata_createunchecked_.md#createdescriptor)

## Functions

###  createDescriptor

▸ **createDescriptor**(`registry`: Registry, `section`: string, `sectionIndex`: number, `methodIndex`: number, `callMetadata`: RegistryMetadataCall): *CallFunction*

*Defined in [packages/metadata/src/Decorated/extrinsics/fromMetadata/createUnchecked.ts:22](https://github.com/polkadot-js/api/blob/ddd5eab7f/packages/metadata/src/Decorated/extrinsics/fromMetadata/createUnchecked.ts#L22)*

From the metadata of a function in the module's storage, generate the function
that will return the an [[CallFunction]].

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`registry` | Registry | - |
`section` | string | Name of the module section. |
`sectionIndex` | number | Index of the module section in the modules array. |
`methodIndex` | number | Index of the method inside the section. |
`callMetadata` | RegistryMetadataCall | Metadata of the call function.  |

**Returns:** *CallFunction*
