[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["balances/fees"](_balances_fees_.md)

# External module: "balances/fees"

## Index

### Functions

* [fees](_balances_fees_.md#fees)

## Functions

###  fees

▸ **fees**(`api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/balances/fees.ts:54](https://github.com/polkadot-js/api/blob/2dee50f019/packages/api-derive/src/balances/fees.ts#L54)*

**`name`** fees

**`example`** 
<BR>

```javascript
api.derive.balances.fees(({ creationFee, transferFee }) => {
  console.log(`The fee for creating a new account on this chain is ${creationFee} units. The fee required for making a transfer is ${transferFee} units.`);
});
```

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |

**Returns:** *function*

An object containing the combined results of the storage queries for
all relevant fees as declared in the substrate chain spec.

▸ (): *Observable‹[DerivedFees](../interfaces/_types_.derivedfees.md)›*
