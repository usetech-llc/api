[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["Decorated/storage/fromMetadata/substrate"](_decorated_storage_frommetadata_substrate_.md)

# External module: "Decorated/storage/fromMetadata/substrate"

## Index

### Variables

* [changesTrieConfig](_decorated_storage_frommetadata_substrate_.md#const-changestrieconfig)
* [childStorageKeyPrefix](_decorated_storage_frommetadata_substrate_.md#const-childstoragekeyprefix)
* [code](_decorated_storage_frommetadata_substrate_.md#const-code)
* [extrinsicIndex](_decorated_storage_frommetadata_substrate_.md#const-extrinsicindex)
* [heapPages](_decorated_storage_frommetadata_substrate_.md#const-heappages)

## Variables

### `Const` changesTrieConfig

• **changesTrieConfig**: *function* = createRuntimeFunction('changesTrieConfig', ':changes_trie', {
  documentation: 'Changes trie configuration is stored under this key.',
  type: 'u32'
})

*Defined in [packages/metadata/src/Decorated/storage/fromMetadata/substrate.ts:50](https://github.com/polkadot-js/api/blob/4a1e504ca2/packages/metadata/src/Decorated/storage/fromMetadata/substrate.ts#L50)*

#### Type declaration:

▸ (`registry`: Registry, `metaVersion`: number): *StorageEntry*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | Registry |
`metaVersion` | number |

___

### `Const` childStorageKeyPrefix

• **childStorageKeyPrefix**: *function* = createRuntimeFunction('childStorageKeyPrefix', ':child_storage:', {
  documentation: 'Prefix of child storage keys.',
  type: 'u32'
})

*Defined in [packages/metadata/src/Decorated/storage/fromMetadata/substrate.ts:55](https://github.com/polkadot-js/api/blob/4a1e504ca2/packages/metadata/src/Decorated/storage/fromMetadata/substrate.ts#L55)*

#### Type declaration:

▸ (`registry`: Registry, `metaVersion`: number): *StorageEntry*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | Registry |
`metaVersion` | number |

___

### `Const` code

• **code**: *function* = createRuntimeFunction('code', ':code', {
  documentation: 'Wasm code of the runtime.',
  type: 'Bytes'
})

*Defined in [packages/metadata/src/Decorated/storage/fromMetadata/substrate.ts:35](https://github.com/polkadot-js/api/blob/4a1e504ca2/packages/metadata/src/Decorated/storage/fromMetadata/substrate.ts#L35)*

#### Type declaration:

▸ (`registry`: Registry, `metaVersion`: number): *StorageEntry*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | Registry |
`metaVersion` | number |

___

### `Const` extrinsicIndex

• **extrinsicIndex**: *function* = createRuntimeFunction('extrinsicIndex', ':extrinsic_index', {
  documentation: 'Current extrinsic index (u32) is stored under this key.',
  type: 'u32'
})

*Defined in [packages/metadata/src/Decorated/storage/fromMetadata/substrate.ts:45](https://github.com/polkadot-js/api/blob/4a1e504ca2/packages/metadata/src/Decorated/storage/fromMetadata/substrate.ts#L45)*

#### Type declaration:

▸ (`registry`: Registry, `metaVersion`: number): *StorageEntry*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | Registry |
`metaVersion` | number |

___

### `Const` heapPages

• **heapPages**: *function* = createRuntimeFunction('heapPages', ':heappages', {
  documentation: 'Number of wasm linear memory pages required for execution of the runtime.',
  type: 'u64'
})

*Defined in [packages/metadata/src/Decorated/storage/fromMetadata/substrate.ts:40](https://github.com/polkadot-js/api/blob/4a1e504ca2/packages/metadata/src/Decorated/storage/fromMetadata/substrate.ts#L40)*

#### Type declaration:

▸ (`registry`: Registry, `metaVersion`: number): *StorageEntry*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | Registry |
`metaVersion` | number |
