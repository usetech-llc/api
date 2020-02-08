[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["primitive/Generic/Digest"](../modules/_primitive_generic_digest_.md) › [DigestItem](_primitive_generic_digest_.digestitem.md)

# Class: DigestItem

**`name`** DigestItem

**`description`** 
A [Enum](_codec_enum_.enum.md) the specifies the specific item in the logs of a [Digest](_primitive_generic_digest_.digest.md)

## Hierarchy

  ↳ [Enum](_codec_enum_.enum.md)

  ↳ **DigestItem**

## Implements

* Codec

## Index

### Constructors

* [constructor](_primitive_generic_digest_.digestitem.md#constructor)

### Properties

* [registry](_primitive_generic_digest_.digestitem.md#registry)

### Accessors

* [asAuthoritiesChange](_primitive_generic_digest_.digestitem.md#asauthoritieschange)
* [asChangesTrieRoot](_primitive_generic_digest_.digestitem.md#aschangestrieroot)
* [asConsensus](_primitive_generic_digest_.digestitem.md#asconsensus)
* [asOther](_primitive_generic_digest_.digestitem.md#asother)
* [asPreRuntime](_primitive_generic_digest_.digestitem.md#aspreruntime)
* [asSeal](_primitive_generic_digest_.digestitem.md#asseal)
* [asSealV0](_primitive_generic_digest_.digestitem.md#assealv0)
* [defEntries](_primitive_generic_digest_.digestitem.md#defentries)
* [defKeys](_primitive_generic_digest_.digestitem.md#defkeys)
* [encodedLength](_primitive_generic_digest_.digestitem.md#encodedlength)
* [hash](_primitive_generic_digest_.digestitem.md#hash)
* [index](_primitive_generic_digest_.digestitem.md#index)
* [isAuthoritiesChange](_primitive_generic_digest_.digestitem.md#isauthoritieschange)
* [isBasic](_primitive_generic_digest_.digestitem.md#isbasic)
* [isChangesTrieRoot](_primitive_generic_digest_.digestitem.md#ischangestrieroot)
* [isConsensus](_primitive_generic_digest_.digestitem.md#isconsensus)
* [isEmpty](_primitive_generic_digest_.digestitem.md#isempty)
* [isNone](_primitive_generic_digest_.digestitem.md#isnone)
* [isNull](_primitive_generic_digest_.digestitem.md#isnull)
* [isOther](_primitive_generic_digest_.digestitem.md#isother)
* [isPreRuntime](_primitive_generic_digest_.digestitem.md#ispreruntime)
* [isSeal](_primitive_generic_digest_.digestitem.md#isseal)
* [isSealV0](_primitive_generic_digest_.digestitem.md#issealv0)
* [type](_primitive_generic_digest_.digestitem.md#type)
* [value](_primitive_generic_digest_.digestitem.md#value)

### Methods

* [eq](_primitive_generic_digest_.digestitem.md#eq)
* [toHex](_primitive_generic_digest_.digestitem.md#tohex)
* [toJSON](_primitive_generic_digest_.digestitem.md#tojson)
* [toNumber](_primitive_generic_digest_.digestitem.md#tonumber)
* [toRawType](_primitive_generic_digest_.digestitem.md#torawtype)
* [toString](_primitive_generic_digest_.digestitem.md#tostring)
* [toU8a](_primitive_generic_digest_.digestitem.md#tou8a)
* [with](_primitive_generic_digest_.digestitem.md#static-with)

## Constructors

###  constructor

\+ **new DigestItem**(`registry`: Registry, `value`: any): *[DigestItem](_primitive_generic_digest_.digestitem.md)*

*Overrides [Enum](_codec_enum_.enum.md).[constructor](_codec_enum_.enum.md#constructor)*

*Defined in [packages/types/src/primitive/Generic/Digest.ts:21](https://github.com/polkadot-js/api/blob/b6534d2958/packages/types/src/primitive/Generic/Digest.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | Registry |
`value` | any |

**Returns:** *[DigestItem](_primitive_generic_digest_.digestitem.md)*

## Properties

###  registry

• **registry**: *Registry*

*Inherited from [Base](_codec_base_.base.md).[registry](_codec_base_.base.md#registry)*

*Defined in [packages/types/src/codec/Base.ts:16](https://github.com/polkadot-js/api/blob/b6534d2958/packages/types/src/codec/Base.ts#L16)*

## Accessors

###  asAuthoritiesChange

• **get asAuthoritiesChange**(): *[Vec](_codec_vec_.vec.md)‹AuthorityId›*

*Defined in [packages/types/src/primitive/Generic/Digest.ts:37](https://github.com/polkadot-js/api/blob/b6534d2958/packages/types/src/primitive/Generic/Digest.ts#L37)*

**`description`** Returns the item as a [Vec<AuthorityId>](../interfaces/_interfaceregistry_.interfaceregistry.md#vec<authorityid>)

**Returns:** *[Vec](_codec_vec_.vec.md)‹AuthorityId›*

___

###  asChangesTrieRoot

• **get asChangesTrieRoot**(): *Hash*

*Defined in [packages/types/src/primitive/Generic/Digest.ts:46](https://github.com/polkadot-js/api/blob/b6534d2958/packages/types/src/primitive/Generic/Digest.ts#L46)*

**`description`** Returns the item as a [[ChangesTrieRoot]]

**Returns:** *Hash*

___

###  asConsensus

• **get asConsensus**(): *Consensus*

*Defined in [packages/types/src/primitive/Generic/Digest.ts:55](https://github.com/polkadot-js/api/blob/b6534d2958/packages/types/src/primitive/Generic/Digest.ts#L55)*

**`desciption`** Retuns the item as a [Consensus](../interfaces/_interfaceregistry_.interfaceregistry.md#consensus)

**Returns:** *Consensus*

___

###  asOther

• **get asOther**(): *[Bytes](_primitive_bytes_.bytes.md)*

*Defined in [packages/types/src/primitive/Generic/Digest.ts:64](https://github.com/polkadot-js/api/blob/b6534d2958/packages/types/src/primitive/Generic/Digest.ts#L64)*

**`description`** Returns the item as a [Bytes](_primitive_bytes_.bytes.md)

**Returns:** *[Bytes](_primitive_bytes_.bytes.md)*

___

###  asPreRuntime

• **get asPreRuntime**(): *PreRuntime*

*Defined in [packages/types/src/primitive/Generic/Digest.ts:73](https://github.com/polkadot-js/api/blob/b6534d2958/packages/types/src/primitive/Generic/Digest.ts#L73)*

**`description`** Returns the item as a [PreRuntime](../interfaces/_interfaceregistry_.interfaceregistry.md#preruntime)

**Returns:** *PreRuntime*

___

###  asSeal

• **get asSeal**(): *Seal*

*Defined in [packages/types/src/primitive/Generic/Digest.ts:82](https://github.com/polkadot-js/api/blob/b6534d2958/packages/types/src/primitive/Generic/Digest.ts#L82)*

**`description`** Returns the item as a [Seal](../interfaces/_interfaceregistry_.interfaceregistry.md#seal)

**Returns:** *Seal*

___

###  asSealV0

• **get asSealV0**(): *SealV0*

*Defined in [packages/types/src/primitive/Generic/Digest.ts:91](https://github.com/polkadot-js/api/blob/b6534d2958/packages/types/src/primitive/Generic/Digest.ts#L91)*

**`description`** Returns the item as a [SealV0](../interfaces/_interfaceregistry_.interfaceregistry.md#sealv0)

**Returns:** *SealV0*

___

###  defEntries

• **get defEntries**(): *string[]*

*Inherited from [Enum](_codec_enum_.enum.md).[defEntries](_codec_enum_.enum.md#defentries)*

*Defined in [packages/types/src/codec/Enum.ts:209](https://github.com/polkadot-js/api/blob/b6534d2958/packages/types/src/codec/Enum.ts#L209)*

**`description`** The available keys for this enum

**Returns:** *string[]*

___

###  defKeys

• **get defKeys**(): *string[]*

*Inherited from [Enum](_codec_enum_.enum.md).[defKeys](_codec_enum_.enum.md#defkeys)*

*Defined in [packages/types/src/codec/Enum.ts:216](https://github.com/polkadot-js/api/blob/b6534d2958/packages/types/src/codec/Enum.ts#L216)*

**`description`** The available keys for this enum

**Returns:** *string[]*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Enum](_codec_enum_.enum.md).[encodedLength](_codec_enum_.enum.md#encodedlength)*

*Overrides [Base](_codec_base_.base.md).[encodedLength](_codec_base_.base.md#encodedlength)*

*Defined in [packages/types/src/codec/Enum.ts:174](https://github.com/polkadot-js/api/blob/b6534d2958/packages/types/src/codec/Enum.ts#L174)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *IHash*

*Inherited from [Base](_codec_base_.base.md).[hash](_codec_base_.base.md#hash)*

*Defined in [packages/types/src/codec/Base.ts:35](https://github.com/polkadot-js/api/blob/b6534d2958/packages/types/src/codec/Base.ts#L35)*

**`description`** returns a hash of the contents

**Returns:** *IHash*

___

###  index

• **get index**(): *number*

*Inherited from [Enum](_codec_enum_.enum.md).[index](_codec_enum_.enum.md#index)*

*Defined in [packages/types/src/codec/Enum.ts:181](https://github.com/polkadot-js/api/blob/b6534d2958/packages/types/src/codec/Enum.ts#L181)*

**`description`** The index of the metadata value

**Returns:** *number*

___

###  isAuthoritiesChange

• **get isAuthoritiesChange**(): *boolean*

*Defined in [packages/types/src/primitive/Generic/Digest.ts:100](https://github.com/polkadot-js/api/blob/b6534d2958/packages/types/src/primitive/Generic/Digest.ts#L100)*

**`description`** Returns true on [[AuthoritiesChange]]

**Returns:** *boolean*

___

###  isBasic

• **get isBasic**(): *boolean*

*Inherited from [Enum](_codec_enum_.enum.md).[isBasic](_codec_enum_.enum.md#isbasic)*

*Defined in [packages/types/src/codec/Enum.ts:188](https://github.com/polkadot-js/api/blob/b6534d2958/packages/types/src/codec/Enum.ts#L188)*

**`description`** true if this is a basic enum (no values)

**Returns:** *boolean*

___

###  isChangesTrieRoot

• **get isChangesTrieRoot**(): *boolean*

*Defined in [packages/types/src/primitive/Generic/Digest.ts:107](https://github.com/polkadot-js/api/blob/b6534d2958/packages/types/src/primitive/Generic/Digest.ts#L107)*

**`description`** Returns true on [[ChangesTrieRoot]]

**Returns:** *boolean*

___

###  isConsensus

• **get isConsensus**(): *boolean*

*Defined in [packages/types/src/primitive/Generic/Digest.ts:114](https://github.com/polkadot-js/api/blob/b6534d2958/packages/types/src/primitive/Generic/Digest.ts#L114)*

**`description`** Returns true on [Consensus](../interfaces/_interfaceregistry_.interfaceregistry.md#consensus)

**Returns:** *boolean*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Base](_codec_base_.base.md).[isEmpty](_codec_base_.base.md#isempty)*

*Defined in [packages/types/src/codec/Base.ts:42](https://github.com/polkadot-js/api/blob/b6534d2958/packages/types/src/codec/Base.ts#L42)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  isNone

• **get isNone**(): *boolean*

*Inherited from [Enum](_codec_enum_.enum.md).[isNone](_codec_enum_.enum.md#isnone)*

*Defined in [packages/types/src/codec/Enum.ts:195](https://github.com/polkadot-js/api/blob/b6534d2958/packages/types/src/codec/Enum.ts#L195)*

**`description`** Checks if the Enum points to a [Null](_primitive_null_.null.md) type

**Returns:** *boolean*

___

###  isNull

• **get isNull**(): *boolean*

*Inherited from [Enum](_codec_enum_.enum.md).[isNull](_codec_enum_.enum.md#isnull)*

*Defined in [packages/types/src/codec/Enum.ts:202](https://github.com/polkadot-js/api/blob/b6534d2958/packages/types/src/codec/Enum.ts#L202)*

**`description`** Checks if the Enum points to a [Null](_primitive_null_.null.md) type (deprecated, use isNone)

**Returns:** *boolean*

___

###  isOther

• **get isOther**(): *boolean*

*Defined in [packages/types/src/primitive/Generic/Digest.ts:121](https://github.com/polkadot-js/api/blob/b6534d2958/packages/types/src/primitive/Generic/Digest.ts#L121)*

**`description`** Returns true on [[Other]]

**Returns:** *boolean*

___

###  isPreRuntime

• **get isPreRuntime**(): *boolean*

*Defined in [packages/types/src/primitive/Generic/Digest.ts:128](https://github.com/polkadot-js/api/blob/b6534d2958/packages/types/src/primitive/Generic/Digest.ts#L128)*

**`description`** Returns true on [PreRuntime](../interfaces/_interfaceregistry_.interfaceregistry.md#preruntime)

**Returns:** *boolean*

___

###  isSeal

• **get isSeal**(): *boolean*

*Defined in [packages/types/src/primitive/Generic/Digest.ts:135](https://github.com/polkadot-js/api/blob/b6534d2958/packages/types/src/primitive/Generic/Digest.ts#L135)*

**`description`** Returns true on [Seal](../interfaces/_interfaceregistry_.interfaceregistry.md#seal)

**Returns:** *boolean*

___

###  isSealV0

• **get isSealV0**(): *boolean*

*Defined in [packages/types/src/primitive/Generic/Digest.ts:142](https://github.com/polkadot-js/api/blob/b6534d2958/packages/types/src/primitive/Generic/Digest.ts#L142)*

**`description`** Returns true on [SealV0](../interfaces/_interfaceregistry_.interfaceregistry.md#sealv0)

**Returns:** *boolean*

___

###  type

• **get type**(): *string*

*Overrides [Enum](_codec_enum_.enum.md).[type](_codec_enum_.enum.md#type)*

*Defined in [packages/types/src/primitive/Generic/Digest.ts:156](https://github.com/polkadot-js/api/blob/b6534d2958/packages/types/src/primitive/Generic/Digest.ts#L156)*

**`description`** Returns the type of engine

**Returns:** *string*

___

###  value

• **get value**(): *Codec*

*Inherited from [Enum](_codec_enum_.enum.md).[value](_codec_enum_.enum.md#value)*

*Defined in [packages/types/src/codec/Enum.ts:230](https://github.com/polkadot-js/api/blob/b6534d2958/packages/types/src/codec/Enum.ts#L230)*

**`description`** The value of the enum

**Returns:** *Codec*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Enum](_codec_enum_.enum.md).[eq](_codec_enum_.enum.md#eq)*

*Overrides [Base](_codec_base_.base.md).[eq](_codec_base_.base.md#eq)*

*Defined in [packages/types/src/codec/Enum.ts:237](https://github.com/polkadot-js/api/blob/b6534d2958/packages/types/src/codec/Enum.ts#L237)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Enum](_codec_enum_.enum.md).[toHex](_codec_enum_.enum.md#tohex)*

*Overrides [Base](_codec_base_.base.md).[toHex](_codec_base_.base.md#tohex)*

*Defined in [packages/types/src/codec/Enum.ts:260](https://github.com/polkadot-js/api/blob/b6534d2958/packages/types/src/codec/Enum.ts#L260)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *string*

*Overrides [Enum](_codec_enum_.enum.md).[toJSON](_codec_enum_.enum.md#tojson)*

*Defined in [packages/types/src/primitive/Generic/Digest.ts:149](https://github.com/polkadot-js/api/blob/b6534d2958/packages/types/src/primitive/Generic/Digest.ts#L149)*

**`description`** Converts the Object to JSON, typically used for RPC transfers. For logs, we overrides to produce the hex version (sligning with substrate gives in actual JSON responses)

**Returns:** *string*

___

###  toNumber

▸ **toNumber**(): *number*

*Inherited from [Enum](_codec_enum_.enum.md).[toNumber](_codec_enum_.enum.md#tonumber)*

*Defined in [packages/types/src/codec/Enum.ts:276](https://github.com/polkadot-js/api/blob/b6534d2958/packages/types/src/codec/Enum.ts#L276)*

**`description`** Returns the number representation for the value

**Returns:** *number*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Enum](_codec_enum_.enum.md).[toRawType](_codec_enum_.enum.md#torawtype)*

*Overrides [Base](_codec_base_.base.md).[toRawType](_codec_base_.base.md#torawtype)*

*Defined in [packages/types/src/codec/Enum.ts:292](https://github.com/polkadot-js/api/blob/b6534d2958/packages/types/src/codec/Enum.ts#L292)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Enum](_codec_enum_.enum.md).[toString](_codec_enum_.enum.md#tostring)*

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [packages/types/src/codec/Enum.ts:299](https://github.com/polkadot-js/api/blob/b6534d2958/packages/types/src/codec/Enum.ts#L299)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Inherited from [Enum](_codec_enum_.enum.md).[toU8a](_codec_enum_.enum.md#tou8a)*

*Overrides [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [packages/types/src/codec/Enum.ts:309](https://github.com/polkadot-js/api/blob/b6534d2958/packages/types/src/codec/Enum.ts#L309)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

___

### `Static` with

▸ **with**(`Types`: Record‹string, InterfaceTypes | Constructor› | string[]): *[EnumConstructor](../interfaces/_codec_enum_.enumconstructor.md)‹[Enum](_codec_enum_.enum.md)›*

*Inherited from [Enum](_codec_enum_.enum.md).[with](_codec_enum_.enum.md#static-with)*

*Defined in [packages/types/src/codec/Enum.ts:138](https://github.com/polkadot-js/api/blob/b6534d2958/packages/types/src/codec/Enum.ts#L138)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | Record‹string, InterfaceTypes &#124; Constructor› &#124; string[] |

**Returns:** *[EnumConstructor](../interfaces/_codec_enum_.enumconstructor.md)‹[Enum](_codec_enum_.enum.md)›*
