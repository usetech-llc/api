[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types"](../modules/_types_.md) › [IKeyringPair](_types_.ikeyringpair.md)

# Interface: IKeyringPair

## Hierarchy

* **IKeyringPair**

## Index

### Properties

* [address](_types_.ikeyringpair.md#address)
* [publicKey](_types_.ikeyringpair.md#publickey)
* [sign](_types_.ikeyringpair.md#sign)

## Properties

###  address

• **address**: *string*

*Defined in [packages/types/src/types.ts:35](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/types.ts#L35)*

___

###  publicKey

• **publicKey**: *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

*Defined in [packages/types/src/types.ts:36](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/types.ts#L36)*

___

###  sign

• **sign**: *function*

*Defined in [packages/types/src/types.ts:37](https://github.com/polkadot-js/api/blob/854a520517/packages/types/src/types.ts#L37)*

#### Type declaration:

▸ (`data`: [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array), `options?`: SignOptions): *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) |
`options?` | SignOptions |
