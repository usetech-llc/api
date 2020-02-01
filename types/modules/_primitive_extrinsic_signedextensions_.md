[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["primitive/Extrinsic/SignedExtensions"](_primitive_extrinsic_signedextensions_.md)

# External module: "primitive/Extrinsic/SignedExtensions"

## Index

### Variables

* [defaultExtensions](_primitive_extrinsic_signedextensions_.md#const-defaultextensions)

### Functions

* [expandExtensionTypes](_primitive_extrinsic_signedextensions_.md#expandextensiontypes)

### Object literals

* [allExtensions](_primitive_extrinsic_signedextensions_.md#const-allextensions)

## Variables

### `Const` defaultExtensions

• **defaultExtensions**: *[Array](../classes/_codec_abstractarray_.abstractarray.md#static-array)‹keyof typeof allExtensions›* = [
  'CheckVersion',
  'CheckGenesis',
  'CheckEra',
  'CheckNonce',
  'CheckWeight',
  'ChargeTransactionPayment',
  'CheckBlockGasLimit'
]

*Defined in [packages/types/src/primitive/Extrinsic/SignedExtensions.ts:61](https://github.com/polkadot-js/api/blob/b24a1ff350/packages/types/src/primitive/Extrinsic/SignedExtensions.ts#L61)*

## Functions

###  expandExtensionTypes

▸ **expandExtensionTypes**(`extensions`: string[], `type`: keyof ExtInfo): *ExtTypes*

*Defined in [packages/types/src/primitive/Extrinsic/SignedExtensions.ts:71](https://github.com/polkadot-js/api/blob/b24a1ff350/packages/types/src/primitive/Extrinsic/SignedExtensions.ts#L71)*

**Parameters:**

Name | Type |
------ | ------ |
`extensions` | string[] |
`type` | keyof ExtInfo |

**Returns:** *ExtTypes*

## Object literals

### `Const` allExtensions

### ▪ **allExtensions**: *object*

*Defined in [packages/types/src/primitive/Extrinsic/SignedExtensions.ts:17](https://github.com/polkadot-js/api/blob/b24a1ff350/packages/types/src/primitive/Extrinsic/SignedExtensions.ts#L17)*

▪ **ChargeTransactionPayment**: *object*

*Defined in [packages/types/src/primitive/Extrinsic/SignedExtensions.ts:18](https://github.com/polkadot-js/api/blob/b24a1ff350/packages/types/src/primitive/Extrinsic/SignedExtensions.ts#L18)*

* **extra**(): *object*

* **types**: *object*

  * **tip**: *"Compact<Balance>"* = "Compact<Balance>"

▪ **CheckBlockGasLimit**: *object*

*Defined in [packages/types/src/primitive/Extrinsic/SignedExtensions.ts:24](https://github.com/polkadot-js/api/blob/b24a1ff350/packages/types/src/primitive/Extrinsic/SignedExtensions.ts#L24)*

* **extra**(): *object*

* **types**(): *object*

▪ **CheckEra**: *object*

*Defined in [packages/types/src/primitive/Extrinsic/SignedExtensions.ts:28](https://github.com/polkadot-js/api/blob/b24a1ff350/packages/types/src/primitive/Extrinsic/SignedExtensions.ts#L28)*

* **extra**: *object*

  * **blockHash**: *"Hash"* = "Hash"

* **types**: *object*

  * **era**: *"ExtrinsicEra"* = "ExtrinsicEra"

▪ **CheckGenesis**: *object*

*Defined in [packages/types/src/primitive/Extrinsic/SignedExtensions.ts:36](https://github.com/polkadot-js/api/blob/b24a1ff350/packages/types/src/primitive/Extrinsic/SignedExtensions.ts#L36)*

* **types**(): *object*

* **extra**: *object*

  * **genesisHash**: *"Hash"* = "Hash"

▪ **CheckNonce**: *object*

*Defined in [packages/types/src/primitive/Extrinsic/SignedExtensions.ts:42](https://github.com/polkadot-js/api/blob/b24a1ff350/packages/types/src/primitive/Extrinsic/SignedExtensions.ts#L42)*

* **extra**(): *object*

* **types**: *object*

  * **nonce**: *"Compact<Index>"* = "Compact<Index>"

▪ **CheckVersion**: *object*

*Defined in [packages/types/src/primitive/Extrinsic/SignedExtensions.ts:48](https://github.com/polkadot-js/api/blob/b24a1ff350/packages/types/src/primitive/Extrinsic/SignedExtensions.ts#L48)*

* **types**(): *object*

* **extra**: *object*

  * **specVersion**: *"u32"* = "u32"

▪ **CheckWeight**: *object*

*Defined in [packages/types/src/primitive/Extrinsic/SignedExtensions.ts:54](https://github.com/polkadot-js/api/blob/b24a1ff350/packages/types/src/primitive/Extrinsic/SignedExtensions.ts#L54)*

* **extra**(): *object*

* **types**(): *object*
