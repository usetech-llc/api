[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types/interfaces"](../modules/_types_interfaces_.md) › [IKeyringPair](_types_interfaces_.ikeyringpair.md)

# Interface: IKeyringPair

## Hierarchy

* **IKeyringPair**

## Index

### Properties

* [address](_types_interfaces_.ikeyringpair.md#address)
* [publicKey](_types_interfaces_.ikeyringpair.md#publickey)
* [sign](_types_interfaces_.ikeyringpair.md#sign)

## Properties

###  address

• **address**: *string*

*Defined in [packages/types/src/types/interfaces.ts:23](https://github.com/polkadot-js/api/blob/2b5be7eaab/packages/types/src/types/interfaces.ts#L23)*

___

###  publicKey

• **publicKey**: *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

*Defined in [packages/types/src/types/interfaces.ts:24](https://github.com/polkadot-js/api/blob/2b5be7eaab/packages/types/src/types/interfaces.ts#L24)*

___

###  sign

• **sign**: *function*

*Defined in [packages/types/src/types/interfaces.ts:25](https://github.com/polkadot-js/api/blob/2b5be7eaab/packages/types/src/types/interfaces.ts#L25)*

#### Type declaration:

▸ (`data`: [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array), `options?`: SignOptions): *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) |
`options?` | SignOptions |
