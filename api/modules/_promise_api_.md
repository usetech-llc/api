[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["promise/Api"](_promise_api_.md)

# External module: "promise/Api"

## Index

### Classes

* [ApiPromise](../classes/_promise_api_.apipromise.md)

### Functions

* [decorateMethod](_promise_api_.md#decoratemethod)

## Functions

###  decorateMethod

▸ **decorateMethod**<**Method**>(`method`: Method, `options?`: [DecorateMethodOptions](../interfaces/_types_.decoratemethodoptions.md)): *[StorageEntryPromiseOverloads](../interfaces/_types_.storageentrypromiseoverloads.md)*

*Defined in [api/src/promise/Api.ts:63](https://github.com/polkadot-js/api/blob/5278138cc3/packages/api/src/promise/Api.ts#L63)*

**`description`** Decorate method for ApiPromise, where the results are converted to the Promise equivalent

**Type parameters:**

▪ **Method**: *AnyFunction*

**Parameters:**

Name | Type |
------ | ------ |
`method` | Method |
`options?` | [DecorateMethodOptions](../interfaces/_types_.decoratemethodoptions.md) |

**Returns:** *[StorageEntryPromiseOverloads](../interfaces/_types_.storageentrypromiseoverloads.md)*
