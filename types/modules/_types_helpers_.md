[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types/helpers"](_types_helpers_.md)

# External module: "types/helpers"

## Index

### Interfaces

* [AnyJsonArray](../interfaces/_types_helpers_.anyjsonarray.md)
* [AnyJsonObject](../interfaces/_types_helpers_.anyjsonobject.md)

### Type aliases

* [AnyFunction](_types_helpers_.md#anyfunction)
* [AnyJson](_types_helpers_.md#anyjson)
* [AnyNumber](_types_helpers_.md#anynumber)
* [AnyString](_types_helpers_.md#anystring)
* [AnyU8a](_types_helpers_.md#anyu8a)
* [ArrayElementType](_types_helpers_.md#arrayelementtype)
* [BareOpts](_types_helpers_.md#bareopts)
* [Callback](_types_helpers_.md#callback)
* [InterfaceTypes](_types_helpers_.md#interfacetypes)

## Type aliases

###  AnyFunction

Ƭ **AnyFunction**: *function*

*Defined in [packages/types/src/types/helpers.ts:21](https://github.com/polkadot-js/api/blob/01758229eb/packages/types/src/types/helpers.ts#L21)*

#### Type declaration:

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

___

###  AnyJson

Ƭ **AnyJson**: *string | number | boolean | null | undefined | [AnyJsonObject](../interfaces/_types_helpers_.anyjsonobject.md) | [AnyJsonArray](../interfaces/_types_helpers_.anyjsonarray.md)*

*Defined in [packages/types/src/types/helpers.ts:35](https://github.com/polkadot-js/api/blob/01758229eb/packages/types/src/types/helpers.ts#L35)*

___

###  AnyNumber

Ƭ **AnyNumber**: *BN | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) | number | string*

*Defined in [packages/types/src/types/helpers.ts:23](https://github.com/polkadot-js/api/blob/01758229eb/packages/types/src/types/helpers.ts#L23)*

___

###  AnyString

Ƭ **AnyString**: *string | string*

*Defined in [packages/types/src/types/helpers.ts:25](https://github.com/polkadot-js/api/blob/01758229eb/packages/types/src/types/helpers.ts#L25)*

___

###  AnyU8a

Ƭ **AnyU8a**: *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) | number[] | string*

*Defined in [packages/types/src/types/helpers.ts:27](https://github.com/polkadot-js/api/blob/01758229eb/packages/types/src/types/helpers.ts#L27)*

___

###  ArrayElementType

Ƭ **ArrayElementType**: *T extends ReadonlyArray<infer ElementType> ? ElementType : never*

*Defined in [packages/types/src/types/helpers.ts:12](https://github.com/polkadot-js/api/blob/01758229eb/packages/types/src/types/helpers.ts#L12)*

___

###  BareOpts

Ƭ **BareOpts**: *boolean | Record‹string, boolean›*

*Defined in [packages/types/src/types/helpers.ts:16](https://github.com/polkadot-js/api/blob/01758229eb/packages/types/src/types/helpers.ts#L16)*

___

###  Callback

Ƭ **Callback**: *function*

*Defined in [packages/types/src/types/helpers.ts:18](https://github.com/polkadot-js/api/blob/01758229eb/packages/types/src/types/helpers.ts#L18)*

#### Type declaration:

▸ (`result`: T): *void | Promise‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`result` | T |

___

###  InterfaceTypes

Ƭ **InterfaceTypes**: *keyof InterfaceRegistry*

*Defined in [packages/types/src/types/helpers.ts:9](https://github.com/polkadot-js/api/blob/01758229eb/packages/types/src/types/helpers.ts#L9)*
