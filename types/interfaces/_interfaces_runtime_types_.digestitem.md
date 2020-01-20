[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/runtime/types"](../modules/_interfaces_runtime_types_.md) › [DigestItem](_interfaces_runtime_types_.digestitem.md)

# Interface: DigestItem

GenericDigestItem

## Hierarchy

  ↳ [DigestItem](../classes/_primitive_generic_digest_.digestitem.md)

  ↳ **DigestItem**

## Implements

* [Codec](_types_.codec.md)

## Index

### Constructors

* [constructor](_interfaces_runtime_types_.digestitem.md#constructor)

### Properties

* [registry](_interfaces_runtime_types_.digestitem.md#registry)

### Accessors

* [asAuthoritiesChange](_interfaces_runtime_types_.digestitem.md#asauthoritieschange)
* [asChangesTrieRoot](_interfaces_runtime_types_.digestitem.md#aschangestrieroot)
* [asConsensus](_interfaces_runtime_types_.digestitem.md#asconsensus)
* [asOther](_interfaces_runtime_types_.digestitem.md#asother)
* [asPreRuntime](_interfaces_runtime_types_.digestitem.md#aspreruntime)
* [asSeal](_interfaces_runtime_types_.digestitem.md#asseal)
* [asSealV0](_interfaces_runtime_types_.digestitem.md#assealv0)
* [encodedLength](_interfaces_runtime_types_.digestitem.md#encodedlength)
* [hash](_interfaces_runtime_types_.digestitem.md#hash)
* [index](_interfaces_runtime_types_.digestitem.md#index)
* [isAuthoritiesChange](_interfaces_runtime_types_.digestitem.md#isauthoritieschange)
* [isChangesTrieRoot](_interfaces_runtime_types_.digestitem.md#ischangestrieroot)
* [isConsensus](_interfaces_runtime_types_.digestitem.md#isconsensus)
* [isEmpty](_interfaces_runtime_types_.digestitem.md#isempty)
* [isNone](_interfaces_runtime_types_.digestitem.md#isnone)
* [isNull](_interfaces_runtime_types_.digestitem.md#isnull)
* [isOther](_interfaces_runtime_types_.digestitem.md#isother)
* [isPreRuntime](_interfaces_runtime_types_.digestitem.md#ispreruntime)
* [isSeal](_interfaces_runtime_types_.digestitem.md#isseal)
* [isSealV0](_interfaces_runtime_types_.digestitem.md#issealv0)
* [type](_interfaces_runtime_types_.digestitem.md#type)
* [value](_interfaces_runtime_types_.digestitem.md#value)

### Methods

* [eq](_interfaces_runtime_types_.digestitem.md#eq)
* [toHex](_interfaces_runtime_types_.digestitem.md#tohex)
* [toJSON](_interfaces_runtime_types_.digestitem.md#tojson)
* [toNumber](_interfaces_runtime_types_.digestitem.md#tonumber)
* [toRawType](_interfaces_runtime_types_.digestitem.md#torawtype)
* [toString](_interfaces_runtime_types_.digestitem.md#tostring)
* [toU8a](_interfaces_runtime_types_.digestitem.md#tou8a)
* [with](_interfaces_runtime_types_.digestitem.md#static-with)

## Constructors

###  constructor

\+ **new DigestItem**(`registry`: [Registry](_types_.registry.md), `value`: any): *[DigestItem](_interfaces_runtime_types_.digestitem.md)*

*Inherited from [DigestItem](../classes/_primitive_generic_digest_.digestitem.md).[constructor](../classes/_primitive_generic_digest_.digestitem.md#constructor)*

*Overrides [Enum](../classes/_codec_enum_.enum.md).[constructor](../classes/_codec_enum_.enum.md#constructor)*

*Defined in [packages/types/src/primitive/Generic/Digest.ts:21](https://github.com/polkadot-js/api/blob/eb5ee9860b/packages/types/src/primitive/Generic/Digest.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](_types_.registry.md) |
`value` | any |

**Returns:** *[DigestItem](_interfaces_runtime_types_.digestitem.md)*

## Properties

###  registry

• **registry**: *[Registry](_types_.registry.md)*

*Inherited from [Base](../classes/_codec_base_.base.md).[registry](../classes/_codec_base_.base.md#registry)*

*Defined in [packages/types/src/codec/Base.ts:16](https://github.com/polkadot-js/api/blob/eb5ee9860b/packages/types/src/codec/Base.ts#L16)*

## Accessors

###  asAuthoritiesChange

• **get asAuthoritiesChange**(): *[Vec](../classes/_codec_vec_.vec.md)‹[AuthorityId](_interfaces_consensus_types_.authorityid.md)›*

*Inherited from [DigestItem](../classes/_primitive_generic_digest_.digestitem.md).[asAuthoritiesChange](../classes/_primitive_generic_digest_.digestitem.md#asauthoritieschange)*

*Defined in [packages/types/src/primitive/Generic/Digest.ts:37](https://github.com/polkadot-js/api/blob/eb5ee9860b/packages/types/src/primitive/Generic/Digest.ts#L37)*

**`description`** Returns the item as a [Vec<AuthorityId>](_interfaceregistry_.interfaceregistry.md#vec<authorityid>)

**Returns:** *[Vec](../classes/_codec_vec_.vec.md)‹[AuthorityId](_interfaces_consensus_types_.authorityid.md)›*

___

###  asChangesTrieRoot

• **get asChangesTrieRoot**(): *[Hash](_interfaces_runtime_types_.hash.md)*

*Inherited from [DigestItem](../classes/_primitive_generic_digest_.digestitem.md).[asChangesTrieRoot](../classes/_primitive_generic_digest_.digestitem.md#aschangestrieroot)*

*Defined in [packages/types/src/primitive/Generic/Digest.ts:46](https://github.com/polkadot-js/api/blob/eb5ee9860b/packages/types/src/primitive/Generic/Digest.ts#L46)*

**`description`** Returns the item as a [[ChangesTrieRoot]]

**Returns:** *[Hash](_interfaces_runtime_types_.hash.md)*

___

###  asConsensus

• **get asConsensus**(): *[Consensus](_interfaces_runtime_types_.consensus.md)*

*Inherited from [DigestItem](../classes/_primitive_generic_digest_.digestitem.md).[asConsensus](../classes/_primitive_generic_digest_.digestitem.md#asconsensus)*

*Defined in [packages/types/src/primitive/Generic/Digest.ts:55](https://github.com/polkadot-js/api/blob/eb5ee9860b/packages/types/src/primitive/Generic/Digest.ts#L55)*

**`desciption`** Retuns the item as a [Consensus](_interfaces_runtime_types_.consensus.md)

**Returns:** *[Consensus](_interfaces_runtime_types_.consensus.md)*

___

###  asOther

• **get asOther**(): *[Bytes](../classes/_primitive_bytes_.bytes.md)*

*Inherited from [DigestItem](../classes/_primitive_generic_digest_.digestitem.md).[asOther](../classes/_primitive_generic_digest_.digestitem.md#asother)*

*Defined in [packages/types/src/primitive/Generic/Digest.ts:64](https://github.com/polkadot-js/api/blob/eb5ee9860b/packages/types/src/primitive/Generic/Digest.ts#L64)*

**`description`** Returns the item as a [Bytes](../classes/_primitive_bytes_.bytes.md)

**Returns:** *[Bytes](../classes/_primitive_bytes_.bytes.md)*

___

###  asPreRuntime

• **get asPreRuntime**(): *[PreRuntime](_interfaces_runtime_types_.preruntime.md)*

*Inherited from [DigestItem](../classes/_primitive_generic_digest_.digestitem.md).[asPreRuntime](../classes/_primitive_generic_digest_.digestitem.md#aspreruntime)*

*Defined in [packages/types/src/primitive/Generic/Digest.ts:73](https://github.com/polkadot-js/api/blob/eb5ee9860b/packages/types/src/primitive/Generic/Digest.ts#L73)*

**`description`** Returns the item as a [PreRuntime](_interfaces_runtime_types_.preruntime.md)

**Returns:** *[PreRuntime](_interfaces_runtime_types_.preruntime.md)*

___

###  asSeal

• **get asSeal**(): *[Seal](_interfaces_runtime_types_.seal.md)*

*Inherited from [DigestItem](../classes/_primitive_generic_digest_.digestitem.md).[asSeal](../classes/_primitive_generic_digest_.digestitem.md#asseal)*

*Defined in [packages/types/src/primitive/Generic/Digest.ts:82](https://github.com/polkadot-js/api/blob/eb5ee9860b/packages/types/src/primitive/Generic/Digest.ts#L82)*

**`description`** Returns the item as a [Seal](_interfaces_runtime_types_.seal.md)

**Returns:** *[Seal](_interfaces_runtime_types_.seal.md)*

___

###  asSealV0

• **get asSealV0**(): *[SealV0](_interfaces_runtime_types_.sealv0.md)*

*Inherited from [DigestItem](../classes/_primitive_generic_digest_.digestitem.md).[asSealV0](../classes/_primitive_generic_digest_.digestitem.md#assealv0)*

*Defined in [packages/types/src/primitive/Generic/Digest.ts:91](https://github.com/polkadot-js/api/blob/eb5ee9860b/packages/types/src/primitive/Generic/Digest.ts#L91)*

**`description`** Returns the item as a [SealV0](_interfaces_runtime_types_.sealv0.md)

**Returns:** *[SealV0](_interfaces_runtime_types_.sealv0.md)*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[encodedLength](../classes/_codec_enum_.enum.md#encodedlength)*

*Overrides [Base](../classes/_codec_base_.base.md).[encodedLength](../classes/_codec_base_.base.md#encodedlength)*

*Defined in [packages/types/src/codec/Enum.ts:173](https://github.com/polkadot-js/api/blob/eb5ee9860b/packages/types/src/codec/Enum.ts#L173)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](_types_.ihash.md)*

*Inherited from [Base](../classes/_codec_base_.base.md).[hash](../classes/_codec_base_.base.md#hash)*

*Defined in [packages/types/src/codec/Base.ts:35](https://github.com/polkadot-js/api/blob/eb5ee9860b/packages/types/src/codec/Base.ts#L35)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](_types_.ihash.md)*

___

###  index

• **get index**(): *number*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[index](../classes/_codec_enum_.enum.md#index)*

*Defined in [packages/types/src/codec/Enum.ts:180](https://github.com/polkadot-js/api/blob/eb5ee9860b/packages/types/src/codec/Enum.ts#L180)*

**`description`** The index of the metadata value

**Returns:** *number*

___

###  isAuthoritiesChange

• **get isAuthoritiesChange**(): *boolean*

*Inherited from [DigestItem](../classes/_primitive_generic_digest_.digestitem.md).[isAuthoritiesChange](../classes/_primitive_generic_digest_.digestitem.md#isauthoritieschange)*

*Defined in [packages/types/src/primitive/Generic/Digest.ts:100](https://github.com/polkadot-js/api/blob/eb5ee9860b/packages/types/src/primitive/Generic/Digest.ts#L100)*

**`description`** Returns true on [[AuthoritiesChange]]

**Returns:** *boolean*

___

###  isChangesTrieRoot

• **get isChangesTrieRoot**(): *boolean*

*Inherited from [DigestItem](../classes/_primitive_generic_digest_.digestitem.md).[isChangesTrieRoot](../classes/_primitive_generic_digest_.digestitem.md#ischangestrieroot)*

*Defined in [packages/types/src/primitive/Generic/Digest.ts:107](https://github.com/polkadot-js/api/blob/eb5ee9860b/packages/types/src/primitive/Generic/Digest.ts#L107)*

**`description`** Returns true on [[ChangesTrieRoot]]

**Returns:** *boolean*

___

###  isConsensus

• **get isConsensus**(): *boolean*

*Inherited from [DigestItem](../classes/_primitive_generic_digest_.digestitem.md).[isConsensus](../classes/_primitive_generic_digest_.digestitem.md#isconsensus)*

*Defined in [packages/types/src/primitive/Generic/Digest.ts:114](https://github.com/polkadot-js/api/blob/eb5ee9860b/packages/types/src/primitive/Generic/Digest.ts#L114)*

**`description`** Returns true on [Consensus](_interfaces_runtime_types_.consensus.md)

**Returns:** *boolean*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Base](../classes/_codec_base_.base.md).[isEmpty](../classes/_codec_base_.base.md#isempty)*

*Defined in [packages/types/src/codec/Base.ts:42](https://github.com/polkadot-js/api/blob/eb5ee9860b/packages/types/src/codec/Base.ts#L42)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  isNone

• **get isNone**(): *boolean*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[isNone](../classes/_codec_enum_.enum.md#isnone)*

*Defined in [packages/types/src/codec/Enum.ts:187](https://github.com/polkadot-js/api/blob/eb5ee9860b/packages/types/src/codec/Enum.ts#L187)*

**`description`** Checks if the Enum points to a [Null](../classes/_primitive_null_.null.md) type

**Returns:** *boolean*

___

###  isNull

• **get isNull**(): *boolean*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[isNull](../classes/_codec_enum_.enum.md#isnull)*

*Defined in [packages/types/src/codec/Enum.ts:194](https://github.com/polkadot-js/api/blob/eb5ee9860b/packages/types/src/codec/Enum.ts#L194)*

**`description`** Checks if the Enum points to a [Null](../classes/_primitive_null_.null.md) type (deprecated, use isNone)

**Returns:** *boolean*

___

###  isOther

• **get isOther**(): *boolean*

*Inherited from [DigestItem](../classes/_primitive_generic_digest_.digestitem.md).[isOther](../classes/_primitive_generic_digest_.digestitem.md#isother)*

*Defined in [packages/types/src/primitive/Generic/Digest.ts:121](https://github.com/polkadot-js/api/blob/eb5ee9860b/packages/types/src/primitive/Generic/Digest.ts#L121)*

**`description`** Returns true on [[Other]]

**Returns:** *boolean*

___

###  isPreRuntime

• **get isPreRuntime**(): *boolean*

*Inherited from [DigestItem](../classes/_primitive_generic_digest_.digestitem.md).[isPreRuntime](../classes/_primitive_generic_digest_.digestitem.md#ispreruntime)*

*Defined in [packages/types/src/primitive/Generic/Digest.ts:128](https://github.com/polkadot-js/api/blob/eb5ee9860b/packages/types/src/primitive/Generic/Digest.ts#L128)*

**`description`** Returns true on [PreRuntime](_interfaces_runtime_types_.preruntime.md)

**Returns:** *boolean*

___

###  isSeal

• **get isSeal**(): *boolean*

*Inherited from [DigestItem](../classes/_primitive_generic_digest_.digestitem.md).[isSeal](../classes/_primitive_generic_digest_.digestitem.md#isseal)*

*Defined in [packages/types/src/primitive/Generic/Digest.ts:135](https://github.com/polkadot-js/api/blob/eb5ee9860b/packages/types/src/primitive/Generic/Digest.ts#L135)*

**`description`** Returns true on [Seal](_interfaces_runtime_types_.seal.md)

**Returns:** *boolean*

___

###  isSealV0

• **get isSealV0**(): *boolean*

*Inherited from [DigestItem](../classes/_primitive_generic_digest_.digestitem.md).[isSealV0](../classes/_primitive_generic_digest_.digestitem.md#issealv0)*

*Defined in [packages/types/src/primitive/Generic/Digest.ts:142](https://github.com/polkadot-js/api/blob/eb5ee9860b/packages/types/src/primitive/Generic/Digest.ts#L142)*

**`description`** Returns true on [SealV0](_interfaces_runtime_types_.sealv0.md)

**Returns:** *boolean*

___

###  type

• **get type**(): *string*

*Inherited from [DigestItem](../classes/_primitive_generic_digest_.digestitem.md).[type](../classes/_primitive_generic_digest_.digestitem.md#type)*

*Overrides [Enum](../classes/_codec_enum_.enum.md).[type](../classes/_codec_enum_.enum.md#type)*

*Defined in [packages/types/src/primitive/Generic/Digest.ts:156](https://github.com/polkadot-js/api/blob/eb5ee9860b/packages/types/src/primitive/Generic/Digest.ts#L156)*

**`description`** Returns the type of engine

**Returns:** *string*

___

###  value

• **get value**(): *[Codec](_types_.codec.md)*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[value](../classes/_codec_enum_.enum.md#value)*

*Defined in [packages/types/src/codec/Enum.ts:208](https://github.com/polkadot-js/api/blob/eb5ee9860b/packages/types/src/codec/Enum.ts#L208)*

**`description`** The value of the enum

**Returns:** *[Codec](_types_.codec.md)*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[eq](../classes/_codec_enum_.enum.md#eq)*

*Overrides [Base](../classes/_codec_base_.base.md).[eq](../classes/_codec_base_.base.md#eq)*

*Defined in [packages/types/src/codec/Enum.ts:215](https://github.com/polkadot-js/api/blob/eb5ee9860b/packages/types/src/codec/Enum.ts#L215)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[toHex](../classes/_codec_enum_.enum.md#tohex)*

*Overrides [Base](../classes/_codec_base_.base.md).[toHex](../classes/_codec_base_.base.md#tohex)*

*Defined in [packages/types/src/codec/Enum.ts:238](https://github.com/polkadot-js/api/blob/eb5ee9860b/packages/types/src/codec/Enum.ts#L238)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *string*

*Inherited from [DigestItem](../classes/_primitive_generic_digest_.digestitem.md).[toJSON](../classes/_primitive_generic_digest_.digestitem.md#tojson)*

*Overrides [Enum](../classes/_codec_enum_.enum.md).[toJSON](../classes/_codec_enum_.enum.md#tojson)*

*Defined in [packages/types/src/primitive/Generic/Digest.ts:149](https://github.com/polkadot-js/api/blob/eb5ee9860b/packages/types/src/primitive/Generic/Digest.ts#L149)*

**`description`** Converts the Object to JSON, typically used for RPC transfers. For logs, we overrides to produce the hex version (sligning with substrate gives in actual JSON responses)

**Returns:** *string*

___

###  toNumber

▸ **toNumber**(): *number*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[toNumber](../classes/_codec_enum_.enum.md#tonumber)*

*Defined in [packages/types/src/codec/Enum.ts:254](https://github.com/polkadot-js/api/blob/eb5ee9860b/packages/types/src/codec/Enum.ts#L254)*

**`description`** Returns the number representation for the value

**Returns:** *number*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[toRawType](../classes/_codec_enum_.enum.md#torawtype)*

*Overrides [Base](../classes/_codec_base_.base.md).[toRawType](../classes/_codec_base_.base.md#torawtype)*

*Defined in [packages/types/src/codec/Enum.ts:270](https://github.com/polkadot-js/api/blob/eb5ee9860b/packages/types/src/codec/Enum.ts#L270)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[toString](../classes/_codec_enum_.enum.md#tostring)*

*Overrides [Base](../classes/_codec_base_.base.md).[toString](../classes/_codec_base_.base.md#tostring)*

*Defined in [packages/types/src/codec/Enum.ts:277](https://github.com/polkadot-js/api/blob/eb5ee9860b/packages/types/src/codec/Enum.ts#L277)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[toU8a](../classes/_codec_enum_.enum.md#tou8a)*

*Overrides [Base](../classes/_codec_base_.base.md).[toU8a](../classes/_codec_base_.base.md#tou8a)*

*Defined in [packages/types/src/codec/Enum.ts:287](https://github.com/polkadot-js/api/blob/eb5ee9860b/packages/types/src/codec/Enum.ts#L287)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*

___

### `Static` with

▸ **with**(`Types`: Record‹string, [InterfaceTypes](../modules/_types_.md#interfacetypes) | [Constructor](_types_.constructor.md)› | string[]): *[EnumConstructor](_codec_enum_.enumconstructor.md)‹[Enum](../classes/_codec_enum_.enum.md)›*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[with](../classes/_codec_enum_.enum.md#static-with)*

*Defined in [packages/types/src/codec/Enum.ts:137](https://github.com/polkadot-js/api/blob/eb5ee9860b/packages/types/src/codec/Enum.ts#L137)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | Record‹string, [InterfaceTypes](../modules/_types_.md#interfacetypes) &#124; [Constructor](_types_.constructor.md)› &#124; string[] |

**Returns:** *[EnumConstructor](_codec_enum_.enumconstructor.md)‹[Enum](../classes/_codec_enum_.enum.md)›*
