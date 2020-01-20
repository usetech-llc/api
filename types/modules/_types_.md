[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types"](_types_.md)

# External module: "types"

## Index

### Interfaces

* [AnyJsonArray](../interfaces/_types_.anyjsonarray.md)
* [AnyJsonObject](../interfaces/_types_.anyjsonobject.md)
* [CallFunction](../interfaces/_types_.callfunction.md)
* [Codec](../interfaces/_types_.codec.md)
* [Constructor](../interfaces/_types_.constructor.md)
* [ExtrinsicPayloadValue](../interfaces/_types_.extrinsicpayloadvalue.md)
* [ICompact](../interfaces/_types_.icompact.md)
* [IExtrinsic](../interfaces/_types_.iextrinsic.md)
* [IExtrinsicEra](../interfaces/_types_.iextrinsicera.md)
* [IExtrinsicImpl](../interfaces/_types_.iextrinsicimpl.md)
* [IExtrinsicSignature](../interfaces/_types_.iextrinsicsignature.md)
* [IHash](../interfaces/_types_.ihash.md)
* [IKeyringPair](../interfaces/_types_.ikeyringpair.md)
* [IMethod](../interfaces/_types_.imethod.md)
* [ISignerPayload](../interfaces/_types_.isignerpayload.md)
* [IU8a](../interfaces/_types_.iu8a.md)
* [Registry](../interfaces/_types_.registry.md)
* [RegistryError](../interfaces/_types_.registryerror.md)
* [RegistryMetadata](../interfaces/_types_.registrymetadata.md)
* [RegistryMetadataCall](../interfaces/_types_.registrymetadatacall.md)
* [RegistryMetadataCalls](../interfaces/_types_.registrymetadatacalls.md)
* [RegistryMetadataError](../interfaces/_types_.registrymetadataerror.md)
* [RegistryMetadataEvent](../interfaces/_types_.registrymetadataevent.md)
* [RegistryMetadataEvents](../interfaces/_types_.registrymetadataevents.md)
* [RegistryMetadataLatest](../interfaces/_types_.registrymetadatalatest.md)
* [RegistryMetadataModule](../interfaces/_types_.registrymetadatamodule.md)
* [RuntimeVersionInterface](../interfaces/_types_.runtimeversioninterface.md)
* [SignatureOptions](../interfaces/_types_.signatureoptions.md)
* [SignerPayloadJSON](../interfaces/_types_.signerpayloadjson.md)
* [SignerPayloadRaw](../interfaces/_types_.signerpayloadraw.md)
* [SignerPayloadRawBase](../interfaces/_types_.signerpayloadrawbase.md)

### Type aliases

* [AnyFunction](_types_.md#anyfunction)
* [AnyJson](_types_.md#anyjson)
* [AnyNumber](_types_.md#anynumber)
* [AnyString](_types_.md#anystring)
* [AnyU8a](_types_.md#anyu8a)
* [ArgsDef](_types_.md#argsdef)
* [BareOpts](_types_.md#bareopts)
* [Callback](_types_.md#callback)
* [Calls](_types_.md#calls)
* [CodecArg](_types_.md#codecarg)
* [CodecTo](_types_.md#codecto)
* [ConstructorDef](_types_.md#constructordef)
* [ITuple](_types_.md#ituple)
* [InterfaceTypes](_types_.md#interfacetypes)
* [ModulesWithCalls](_types_.md#moduleswithcalls)
* [RegistryMetadataErrors](_types_.md#registrymetadataerrors)
* [RegistryTypes](_types_.md#registrytypes)

## Type aliases

###  AnyFunction

Ƭ **AnyFunction**: *function*

*Defined in [packages/types/src/types.ts:50](https://github.com/polkadot-js/api/blob/eb5ee9860b/packages/types/src/types.ts#L50)*

#### Type declaration:

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

___

###  AnyJson

Ƭ **AnyJson**: *string | number | boolean | null | undefined | [AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | [AnyJsonArray](../interfaces/_types_.anyjsonarray.md)*

*Defined in [packages/types/src/types.ts:62](https://github.com/polkadot-js/api/blob/eb5ee9860b/packages/types/src/types.ts#L62)*

___

###  AnyNumber

Ƭ **AnyNumber**: *BN | Uint8Array | number | string*

*Defined in [packages/types/src/types.ts:52](https://github.com/polkadot-js/api/blob/eb5ee9860b/packages/types/src/types.ts#L52)*

___

###  AnyString

Ƭ **AnyString**: *string | string*

*Defined in [packages/types/src/types.ts:54](https://github.com/polkadot-js/api/blob/eb5ee9860b/packages/types/src/types.ts#L54)*

___

###  AnyU8a

Ƭ **AnyU8a**: *Uint8Array | number[] | string*

*Defined in [packages/types/src/types.ts:56](https://github.com/polkadot-js/api/blob/eb5ee9860b/packages/types/src/types.ts#L56)*

___

###  ArgsDef

Ƭ **ArgsDef**: *Record‹string, [Constructor](../interfaces/_types_.constructor.md)›*

*Defined in [packages/types/src/types.ts:172](https://github.com/polkadot-js/api/blob/eb5ee9860b/packages/types/src/types.ts#L172)*

___

###  BareOpts

Ƭ **BareOpts**: *boolean | Record‹string, boolean›*

*Defined in [packages/types/src/types.ts:15](https://github.com/polkadot-js/api/blob/eb5ee9860b/packages/types/src/types.ts#L15)*

___

###  Callback

Ƭ **Callback**: *function*

*Defined in [packages/types/src/types.ts:43](https://github.com/polkadot-js/api/blob/eb5ee9860b/packages/types/src/types.ts#L43)*

#### Type declaration:

▸ (`result`: T): *void | Promise‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`result` | T |

___

###  Calls

Ƭ **Calls**: *Record‹string, [CallFunction](../interfaces/_types_.callfunction.md)›*

*Defined in [packages/types/src/types.ts:28](https://github.com/polkadot-js/api/blob/eb5ee9860b/packages/types/src/types.ts#L28)*

___

###  CodecArg

Ƭ **CodecArg**: *[Codec](../interfaces/_types_.codec.md) | BN | boolean | string | Uint8Array | boolean | number | string | undefined | CodecArgArray | CodecArgObject*

*Defined in [packages/types/src/types.ts:41](https://github.com/polkadot-js/api/blob/eb5ee9860b/packages/types/src/types.ts#L41)*

___

###  CodecTo

Ƭ **CodecTo**: *"toHex" | "toJSON" | "toString" | "toU8a"*

*Defined in [packages/types/src/types.ts:140](https://github.com/polkadot-js/api/blob/eb5ee9860b/packages/types/src/types.ts#L140)*

___

###  ConstructorDef

Ƭ **ConstructorDef**: *Record‹string, [Constructor](../interfaces/_types_.constructor.md)‹T››*

*Defined in [packages/types/src/types.ts:147](https://github.com/polkadot-js/api/blob/eb5ee9860b/packages/types/src/types.ts#L147)*

___

###  ITuple

Ƭ **ITuple**: *Sub & [Codec](../interfaces/_types_.codec.md)*

*Defined in [packages/types/src/types.ts:177](https://github.com/polkadot-js/api/blob/eb5ee9860b/packages/types/src/types.ts#L177)*

___

###  InterfaceTypes

Ƭ **InterfaceTypes**: *keyof InterfaceRegistry*

*Defined in [packages/types/src/types.ts:17](https://github.com/polkadot-js/api/blob/eb5ee9860b/packages/types/src/types.ts#L17)*

___

###  ModulesWithCalls

Ƭ **ModulesWithCalls**: *Record‹string, [Calls](_types_.md#calls)›*

*Defined in [packages/types/src/types.ts:30](https://github.com/polkadot-js/api/blob/eb5ee9860b/packages/types/src/types.ts#L30)*

___

###  RegistryMetadataErrors

Ƭ **RegistryMetadataErrors**: *[RegistryMetadataError](../interfaces/_types_.registrymetadataerror.md)[]*

*Defined in [packages/types/src/types.ts:353](https://github.com/polkadot-js/api/blob/eb5ee9860b/packages/types/src/types.ts#L353)*

___

###  RegistryTypes

Ƭ **RegistryTypes**: *Record‹string, [Constructor](../interfaces/_types_.constructor.md) | string | Record‹string, string› | object | object›*

*Defined in [packages/types/src/types.ts:149](https://github.com/polkadot-js/api/blob/eb5ee9860b/packages/types/src/types.ts#L149)*
