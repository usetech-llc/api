[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types"](../modules/_types_.md) › [Signer](_types_.signer.md)

# Interface: Signer

## Hierarchy

* **Signer**

## Index

### Properties

* [signPayload](_types_.signer.md#optional-signpayload)
* [signRaw](_types_.signer.md#optional-signraw)
* [update](_types_.signer.md#optional-update)

## Properties

### `Optional` signPayload

• **signPayload**? : *undefined | function*

*Defined in [api/src/types.ts:270](https://github.com/polkadot-js/api/blob/bf946c20d/packages/api/src/types.ts#L270)*

**`description`** signs an extrinsic payload from a serialized form

___

### `Optional` signRaw

• **signRaw**? : *undefined | function*

*Defined in [api/src/types.ts:275](https://github.com/polkadot-js/api/blob/bf946c20d/packages/api/src/types.ts#L275)*

**`description`** signs a raw payload, only the bytes data as supplied

___

### `Optional` update

• **update**? : *undefined | function*

*Defined in [api/src/types.ts:280](https://github.com/polkadot-js/api/blob/bf946c20d/packages/api/src/types.ts#L280)*

**`description`** Receives an update for the extrinsic signed by a `signer.sign`
