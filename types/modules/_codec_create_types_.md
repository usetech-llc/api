[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["codec/create/types"](_codec_create_types_.md)

# External module: "codec/create/types"

## Index

### Enumerations

* [MetaRegistryItem](../enums/_codec_create_types_.metaregistryitem.md)
* [MetaTypeInfo](../enums/_codec_create_types_.metatypeinfo.md)
* [TypeDefInfo](../enums/_codec_create_types_.typedefinfo.md)

### Interfaces

* [MetaRegistryJson](../interfaces/_codec_create_types_.metaregistryjson.md)
* [MetaType](../interfaces/_codec_create_types_.metatype.md)
* [MetaTypeDefClikeEnum](../interfaces/_codec_create_types_.metatypedefclikeenum.md)
* [MetaTypeDefClikeEnumVariant](../interfaces/_codec_create_types_.metatypedefclikeenumvariant.md)
* [MetaTypeDefEnum](../interfaces/_codec_create_types_.metatypedefenum.md)
* [MetaTypeDefEnumVariantStruct](../interfaces/_codec_create_types_.metatypedefenumvariantstruct.md)
* [MetaTypeDefEnumVariantTupleStruct](../interfaces/_codec_create_types_.metatypedefenumvarianttuplestruct.md)
* [MetaTypeDefEnumVariantUnit](../interfaces/_codec_create_types_.metatypedefenumvariantunit.md)
* [MetaTypeDefStruct](../interfaces/_codec_create_types_.metatypedefstruct.md)
* [MetaTypeDefStructField](../interfaces/_codec_create_types_.metatypedefstructfield.md)
* [MetaTypeDefTupleStruct](../interfaces/_codec_create_types_.metatypedeftuplestruct.md)
* [MetaTypeDefUnion](../interfaces/_codec_create_types_.metatypedefunion.md)
* [MetaTypeIdCustom](../interfaces/_codec_create_types_.metatypeidcustom.md)
* [MetaTypeIdVec](../interfaces/_codec_create_types_.metatypeidvec.md)
* [MetaTypeIdVecFixed](../interfaces/_codec_create_types_.metatypeidvecfixed.md)
* [TypeDef](../interfaces/_codec_create_types_.typedef.md)
* [TypeDefExtEnumDiscriminant](../interfaces/_codec_create_types_.typedefextenumdiscriminant.md)
* [TypeDefExtVecFixed](../interfaces/_codec_create_types_.typedefextvecfixed.md)

### Type aliases

* [FromReg](_codec_create_types_.md#fromreg)
* [MetaTypeDef](_codec_create_types_.md#metatypedef)
* [MetaTypeDefBuiltIn](_codec_create_types_.md#metatypedefbuiltin)
* [MetaTypeDefEnumVariant](_codec_create_types_.md#metatypedefenumvariant)
* [MetaTypeDefUnionField](_codec_create_types_.md#metatypedefunionfield)
* [MetaTypeId](_codec_create_types_.md#metatypeid)
* [MetaTypeIdPrimitive](_codec_create_types_.md#metatypeidprimitive)
* [MetaTypeIdTuple](_codec_create_types_.md#metatypeidtuple)
* [StringIndex](_codec_create_types_.md#stringindex)
* [TypeIndex](_codec_create_types_.md#typeindex)

## Type aliases

###  FromReg

Ƭ **FromReg**: *K extends InterfaceTypes ? InterfaceRegistry[K] : T*

*Defined in [packages/types/src/codec/create/types.ts:10](https://github.com/polkadot-js/api/blob/ffaea83e3e/packages/types/src/codec/create/types.ts#L10)*

___

###  MetaTypeDef

Ƭ **MetaTypeDef**: *[MetaTypeDefBuiltIn](_codec_create_types_.md#metatypedefbuiltin) | [MetaTypeDefClikeEnum](../interfaces/_codec_create_types_.metatypedefclikeenum.md) | [MetaTypeDefEnum](../interfaces/_codec_create_types_.metatypedefenum.md) | [MetaTypeDefStruct](../interfaces/_codec_create_types_.metatypedefstruct.md) | [MetaTypeDefTupleStruct](../interfaces/_codec_create_types_.metatypedeftuplestruct.md) | [MetaTypeDefUnion](../interfaces/_codec_create_types_.metatypedefunion.md)*

*Defined in [packages/types/src/codec/create/types.ts:142](https://github.com/polkadot-js/api/blob/ffaea83e3e/packages/types/src/codec/create/types.ts#L142)*

___

###  MetaTypeDefBuiltIn

Ƭ **MetaTypeDefBuiltIn**: *"builtin"*

*Defined in [packages/types/src/codec/create/types.ts:101](https://github.com/polkadot-js/api/blob/ffaea83e3e/packages/types/src/codec/create/types.ts#L101)*

___

###  MetaTypeDefEnumVariant

Ƭ **MetaTypeDefEnumVariant**: *[MetaTypeDefEnumVariantUnit](../interfaces/_codec_create_types_.metatypedefenumvariantunit.md) | [MetaTypeDefEnumVariantTupleStruct](../interfaces/_codec_create_types_.metatypedefenumvarianttuplestruct.md) | [MetaTypeDefEnumVariantStruct](../interfaces/_codec_create_types_.metatypedefenumvariantstruct.md)*

*Defined in [packages/types/src/codec/create/types.ts:117](https://github.com/polkadot-js/api/blob/ffaea83e3e/packages/types/src/codec/create/types.ts#L117)*

___

###  MetaTypeDefUnionField

Ƭ **MetaTypeDefUnionField**: *[MetaTypeDefStructField](../interfaces/_codec_create_types_.metatypedefstructfield.md)*

*Defined in [packages/types/src/codec/create/types.ts:128](https://github.com/polkadot-js/api/blob/ffaea83e3e/packages/types/src/codec/create/types.ts#L128)*

___

###  MetaTypeId

Ƭ **MetaTypeId**: *[MetaTypeIdPrimitive](_codec_create_types_.md#metatypeidprimitive) | [MetaTypeIdTuple](_codec_create_types_.md#metatypeidtuple) | [MetaTypeIdVec](../interfaces/_codec_create_types_.metatypeidvec.md) | [MetaTypeIdVecFixed](../interfaces/_codec_create_types_.metatypeidvecfixed.md) | [MetaTypeIdCustom](../interfaces/_codec_create_types_.metatypeidcustom.md)*

*Defined in [packages/types/src/codec/create/types.ts:88](https://github.com/polkadot-js/api/blob/ffaea83e3e/packages/types/src/codec/create/types.ts#L88)*

___

###  MetaTypeIdPrimitive

Ƭ **MetaTypeIdPrimitive**: *string*

*Defined in [packages/types/src/codec/create/types.ts:69](https://github.com/polkadot-js/api/blob/ffaea83e3e/packages/types/src/codec/create/types.ts#L69)*

___

###  MetaTypeIdTuple

Ƭ **MetaTypeIdTuple**: *[TypeIndex](_codec_create_types_.md#typeindex)[]*

*Defined in [packages/types/src/codec/create/types.ts:71](https://github.com/polkadot-js/api/blob/ffaea83e3e/packages/types/src/codec/create/types.ts#L71)*

___

###  StringIndex

Ƭ **StringIndex**: *number*

*Defined in [packages/types/src/codec/create/types.ts:55](https://github.com/polkadot-js/api/blob/ffaea83e3e/packages/types/src/codec/create/types.ts#L55)*

___

###  TypeIndex

Ƭ **TypeIndex**: *number*

*Defined in [packages/types/src/codec/create/types.ts:53](https://github.com/polkadot-js/api/blob/ffaea83e3e/packages/types/src/codec/create/types.ts#L53)*
