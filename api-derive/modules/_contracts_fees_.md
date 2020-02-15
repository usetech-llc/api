[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["contracts/fees"](_contracts_fees_.md)

# External module: "contracts/fees"

## Index

### Functions

* [fees](_contracts_fees_.md#fees)

## Functions

###  fees

▸ **fees**(`api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/contracts/fees.ts:48](https://github.com/polkadot-js/api/blob/26c59f6d6e/packages/api-derive/src/contracts/fees.ts#L48)*

**`name`** fees

**`example`** 
<BR>

```javascript
api.derive.contracts.fees(([creationFee, transferFee]) => {
  console.log(`The fee for creating a new contract on this chain is ${creationFee} units. The fee required to call this contract is ${transferFee} units.`);
});
```

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |

**Returns:** *function*

An object containing the combined results of the queries for
all relevant contract fees as declared in the substrate chain spec.

▸ (): *Observable‹DerivedContractFees›*
