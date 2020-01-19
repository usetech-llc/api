[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types"](../modules/_types_.md) › [ApiOptions](_types_.apioptions.md)

# Interface: ApiOptions

## Hierarchy

* **ApiOptions**

## Index

### Properties

* [derives](_types_.apioptions.md#optional-derives)
* [metadata](_types_.apioptions.md#optional-metadata)
* [provider](_types_.apioptions.md#optional-provider)
* [registry](_types_.apioptions.md#optional-registry)
* [rpc](_types_.apioptions.md#optional-rpc)
* [signer](_types_.apioptions.md#optional-signer)
* [source](_types_.apioptions.md#optional-source)
* [types](_types_.apioptions.md#optional-types)
* [typesChain](_types_.apioptions.md#optional-typeschain)
* [typesSpec](_types_.apioptions.md#optional-typesspec)

## Properties

### `Optional` derives

• **derives**? : *DeriveCustom*

*Defined in [api/src/types.ts:185](https://github.com/polkadot-js/api/blob/ffaea83e3e/packages/api/src/types.ts#L185)*

**`description`** Add custom derives to be injected

___

### `Optional` metadata

• **metadata**? : *Record‹string, string›*

*Defined in [api/src/types.ts:190](https://github.com/polkadot-js/api/blob/ffaea83e3e/packages/api/src/types.ts#L190)*

**`description`** prebundles is a map of 'genesis hash and runtime spec version' as key to metadata's hex string
if genesis hash and runtime spec version matches, then use metadata, else fetch it from chain

___

### `Optional` provider

• **provider**? : *ProviderInterface*

*Defined in [api/src/types.ts:195](https://github.com/polkadot-js/api/blob/ffaea83e3e/packages/api/src/types.ts#L195)*

**`description`** Transport Provider from rpc-provider. If not specified, it will default to
connecting to a WsProvider connecting localhost with the default port, i.e. `ws://127.0.0.1:9944`

___

### `Optional` registry

• **registry**? : *Registry*

*Defined in [api/src/types.ts:199](https://github.com/polkadot-js/api/blob/ffaea83e3e/packages/api/src/types.ts#L199)*

**`description`** A type registry to use along with this instance

___

### `Optional` rpc

• **rpc**? : *UserRpc*

*Defined in [api/src/types.ts:203](https://github.com/polkadot-js/api/blob/ffaea83e3e/packages/api/src/types.ts#L203)*

**`description`** User-defined RPC methods

___

### `Optional` signer

• **signer**? : *[Signer](_types_.signer.md)*

*Defined in [api/src/types.ts:207](https://github.com/polkadot-js/api/blob/ffaea83e3e/packages/api/src/types.ts#L207)*

**`description`** An external signer which will be used to sign extrinsic when account passed in is not KeyringPair

___

### `Optional` source

• **source**? : *ApiBase‹any›*

*Defined in [api/src/types.ts:211](https://github.com/polkadot-js/api/blob/ffaea83e3e/packages/api/src/types.ts#L211)*

**`description`** The source object to use for runtime information (only used when cloning)

___

### `Optional` types

• **types**? : *RegistryTypes*

*Defined in [api/src/types.ts:216](https://github.com/polkadot-js/api/blob/ffaea83e3e/packages/api/src/types.ts#L216)*

**`description`** Additional types used by runtime modules. This is nessusary if the runtime modules
uses types not available in the base Substrate runtime.

___

### `Optional` typesChain

• **typesChain**? : *Record‹string, RegistryTypes›*

*Defined in [api/src/types.ts:220](https://github.com/polkadot-js/api/blob/ffaea83e3e/packages/api/src/types.ts#L220)*

**`description`** Additional types that are injected based on the chain we are connecting to. There are keyed by the chain, i.e. `{ 'Kusama CC1': { ... } }`

___

### `Optional` typesSpec

• **typesSpec**? : *Record‹string, RegistryTypes›*

*Defined in [api/src/types.ts:224](https://github.com/polkadot-js/api/blob/ffaea83e3e/packages/api/src/types.ts#L224)*

**`description`** Additional types that are injected based on the type of node we are connecting to, as set via specName in the runtime version. There are keyed by the node, i.e. `{ 'edgeware': { ... } }`
