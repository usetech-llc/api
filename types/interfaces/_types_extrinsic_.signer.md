[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types/extrinsic"](../modules/_types_extrinsic_.md) › [Signer](_types_extrinsic_.signer.md)

# Interface: Signer

## Hierarchy

* **Signer**

## Index

### Properties

* [signPayload](_types_extrinsic_.signer.md#optional-signpayload)
* [signRaw](_types_extrinsic_.signer.md#optional-signraw)
* [update](_types_extrinsic_.signer.md#optional-update)

## Properties

### `Optional` signPayload

• **signPayload**? : *undefined | function*

*Defined in [packages/types/src/types/extrinsic.ts:41](https://github.com/polkadot-js/api/blob/01abc030f9/packages/types/src/types/extrinsic.ts#L41)*

**`description`** signs an extrinsic payload from a serialized form

___

### `Optional` signRaw

• **signRaw**? : *undefined | function*

*Defined in [packages/types/src/types/extrinsic.ts:46](https://github.com/polkadot-js/api/blob/01abc030f9/packages/types/src/types/extrinsic.ts#L46)*

**`description`** signs a raw payload, only the bytes data as supplied

___

### `Optional` update

• **update**? : *undefined | function*

*Defined in [packages/types/src/types/extrinsic.ts:51](https://github.com/polkadot-js/api/blob/01abc030f9/packages/types/src/types/extrinsic.ts#L51)*

**`description`** Receives an update for the extrinsic signed by a `signer.sign`
