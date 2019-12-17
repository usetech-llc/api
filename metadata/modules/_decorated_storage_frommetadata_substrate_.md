[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["Decorated/storage/fromMetadata/substrate"](_decorated_storage_frommetadata_substrate_.md)

# External module: "Decorated/storage/fromMetadata/substrate"

## Index

### Variables

* [authorityCount](_decorated_storage_frommetadata_substrate_.md#const-authoritycount)
* [authorityPrefix](_decorated_storage_frommetadata_substrate_.md#const-authorityprefix)
* [changesTrieConfig](_decorated_storage_frommetadata_substrate_.md#const-changestrieconfig)
* [childStorageKeyPrefix](_decorated_storage_frommetadata_substrate_.md#const-childstoragekeyprefix)
* [code](_decorated_storage_frommetadata_substrate_.md#const-code)
* [extrinsicIndex](_decorated_storage_frommetadata_substrate_.md#const-extrinsicindex)
* [heapPages](_decorated_storage_frommetadata_substrate_.md#const-heappages)

## Variables

### `Const` authorityCount

• **authorityCount**: *function* =  createRuntimeFunction('authorityCount', ':auth:len', {
  documentation: 'Number of authorities.',
  type: 'u32'
})

*Defined in [packages/metadata/src/Decorated/storage/fromMetadata/substrate.ts:36](https://github.com/polkadot-js/api/blob/006c686c1/packages/metadata/src/Decorated/storage/fromMetadata/substrate.ts#L36)*

#### Type declaration:

▸ (`registry`: Registry, `metaVersion`: number): *StorageEntry*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | Registry |
`metaVersion` | number |

___

### `Const` authorityPrefix

• **authorityPrefix**: *function* =  createRuntimeFunction('authorityPrefix', ':auth:', {
  documentation: 'Prefix under which authorities are stored.',
  type: 'u32'
})

*Defined in [packages/metadata/src/Decorated/storage/fromMetadata/substrate.ts:41](https://github.com/polkadot-js/api/blob/006c686c1/packages/metadata/src/Decorated/storage/fromMetadata/substrate.ts#L41)*

#### Type declaration:

▸ (`registry`: Registry, `metaVersion`: number): *StorageEntry*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | Registry |
`metaVersion` | number |

___

### `Const` changesTrieConfig

• **changesTrieConfig**: *function* =  createRuntimeFunction('changesTrieConfig', ':changes_trie', {
  documentation: 'Changes trie configuration is stored under this key.',
  type: 'u32'
})

*Defined in [packages/metadata/src/Decorated/storage/fromMetadata/substrate.ts:61](https://github.com/polkadot-js/api/blob/006c686c1/packages/metadata/src/Decorated/storage/fromMetadata/substrate.ts#L61)*

#### Type declaration:

▸ (`registry`: Registry, `metaVersion`: number): *StorageEntry*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | Registry |
`metaVersion` | number |

___

### `Const` childStorageKeyPrefix

• **childStorageKeyPrefix**: *function* =  createRuntimeFunction('childStorageKeyPrefix', ':child_storage:', {
  documentation: 'Prefix of child storage keys.',
  type: 'u32'
})

*Defined in [packages/metadata/src/Decorated/storage/fromMetadata/substrate.ts:66](https://github.com/polkadot-js/api/blob/006c686c1/packages/metadata/src/Decorated/storage/fromMetadata/substrate.ts#L66)*

#### Type declaration:

▸ (`registry`: Registry, `metaVersion`: number): *StorageEntry*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | Registry |
`metaVersion` | number |

___

### `Const` code

• **code**: *function* =  createRuntimeFunction('code', ':code', {
  documentation: 'Wasm code of the runtime.',
  type: 'Bytes'
})

*Defined in [packages/metadata/src/Decorated/storage/fromMetadata/substrate.ts:46](https://github.com/polkadot-js/api/blob/006c686c1/packages/metadata/src/Decorated/storage/fromMetadata/substrate.ts#L46)*

#### Type declaration:

▸ (`registry`: Registry, `metaVersion`: number): *StorageEntry*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | Registry |
`metaVersion` | number |

___

### `Const` extrinsicIndex

• **extrinsicIndex**: *function* =  createRuntimeFunction('extrinsicIndex', ':extrinsic_index', {
  documentation: 'Current extrinsic index (u32) is stored under this key.',
  type: 'u32'
})

*Defined in [packages/metadata/src/Decorated/storage/fromMetadata/substrate.ts:56](https://github.com/polkadot-js/api/blob/006c686c1/packages/metadata/src/Decorated/storage/fromMetadata/substrate.ts#L56)*

#### Type declaration:

▸ (`registry`: Registry, `metaVersion`: number): *StorageEntry*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | Registry |
`metaVersion` | number |

___

### `Const` heapPages

• **heapPages**: *function* =  createRuntimeFunction('heapPages', ':heappages', {
  documentation: 'Number of wasm linear memory pages required for execution of the runtime.',
  type: 'u64'
})

*Defined in [packages/metadata/src/Decorated/storage/fromMetadata/substrate.ts:51](https://github.com/polkadot-js/api/blob/006c686c1/packages/metadata/src/Decorated/storage/fromMetadata/substrate.ts#L51)*

#### Type declaration:

▸ (`registry`: Registry, `metaVersion`: number): *StorageEntry*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | Registry |
`metaVersion` | number |
