[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types"](_types_.md)

# External module: "types"

## Index

### Interfaces

* [ContractABI](../interfaces/_types_.contractabi.md)
* [ContractABIArgBase](../interfaces/_types_.contractabiargbase.md)
* [ContractABIArgBasePre](../interfaces/_types_.contractabiargbasepre.md)
* [ContractABIContract](../interfaces/_types_.contractabicontract.md)
* [ContractABIContractCommon](../interfaces/_types_.contractabicontractcommon.md)
* [ContractABIContractPre](../interfaces/_types_.contractabicontractpre.md)
* [ContractABIEvent](../interfaces/_types_.contractabievent.md)
* [ContractABIEventArg](../interfaces/_types_.contractabieventarg.md)
* [ContractABIEventArgBase](../interfaces/_types_.contractabieventargbase.md)
* [ContractABIEventArgPre](../interfaces/_types_.contractabieventargpre.md)
* [ContractABIEventPre](../interfaces/_types_.contractabieventpre.md)
* [ContractABIFn](../interfaces/_types_.contractabifn.md)
* [ContractABIFnArg](../interfaces/_types_.contractabifnarg.md)
* [ContractABIMessage](../interfaces/_types_.contractabimessage.md)
* [ContractABIMessageBase](../interfaces/_types_.contractabimessagebase.md)
* [ContractABIMessageBasePre](../interfaces/_types_.contractabimessagebasepre.md)
* [ContractABIMessageCommon](../interfaces/_types_.contractabimessagecommon.md)
* [ContractABIMessagePre](../interfaces/_types_.contractabimessagepre.md)
* [ContractABIMeta](../interfaces/_types_.contractabimeta.md)
* [ContractABIPre](../interfaces/_types_.contractabipre.md)
* [ContractABIRange](../interfaces/_types_.contractabirange.md)
* [ContractABIRangeBase](../interfaces/_types_.contractabirangebase.md)
* [ContractABIRangePre](../interfaces/_types_.contractabirangepre.md)
* [ContractABIStorageStruct](../interfaces/_types_.contractabistoragestruct.md)
* [ContractABIStorageStructField](../interfaces/_types_.contractabistoragestructfield.md)
* [ContractABIStorageStructFieldPre](../interfaces/_types_.contractabistoragestructfieldpre.md)
* [ContractABIStorageStructPre](../interfaces/_types_.contractabistoragestructpre.md)
* [ContractABITypePre](../interfaces/_types_.contractabitypepre.md)
* [ContractBase](../interfaces/_types_.contractbase.md)
* [ContractCallOutcome](../interfaces/_types_.contractcalloutcome.md)
* [ContractMessage](../interfaces/_types_.contractmessage.md)
* [InterfaceAbi](../interfaces/_types_.interfaceabi.md)
* [InterfaceContract](../interfaces/_types_.interfacecontract.md)
* [InterfaceContractCalls](../interfaces/_types_.interfacecontractcalls.md)

### Type aliases

* [AbiConstructors](_types_.md#abiconstructors)
* [AbiMessages](_types_.md#abimessages)
* [ApiObject](_types_.md#apiobject)
* [ContractABIDocs](_types_.md#contractabidocs)
* [ContractABIMessageArg](_types_.md#contractabimessagearg)
* [ContractABIMessageArgPre](_types_.md#contractabimessageargpre)
* [ContractABIStorage](_types_.md#contractabistorage)
* [ContractABIStorageLayout](_types_.md#contractabistoragelayout)
* [ContractABIStorageLayoutPre](_types_.md#contractabistoragelayoutpre)
* [ContractABIStoragePre](_types_.md#contractabistoragepre)

## Type aliases

###  AbiConstructors

Ƭ **AbiConstructors**: *[ContractABIFn](../interfaces/_types_.contractabifn.md)[]*

*Defined in [api-contract/src/types.ts:180](https://github.com/polkadot-js/api/blob/bd2e690261/packages/api-contract/src/types.ts#L180)*

___

###  AbiMessages

Ƭ **AbiMessages**: *Record‹string, [ContractABIFn](../interfaces/_types_.contractabifn.md)›*

*Defined in [api-contract/src/types.ts:182](https://github.com/polkadot-js/api/blob/bd2e690261/packages/api-contract/src/types.ts#L182)*

___

###  ApiObject

Ƭ **ApiObject**: *ApiObject<ApiType>*

*Defined in [api-contract/src/types.ts:13](https://github.com/polkadot-js/api/blob/bd2e690261/packages/api-contract/src/types.ts#L13)*

___

###  ContractABIDocs

Ƭ **ContractABIDocs**: *string[]*

*Defined in [api-contract/src/types.ts:122](https://github.com/polkadot-js/api/blob/bd2e690261/packages/api-contract/src/types.ts#L122)*

___

###  ContractABIMessageArg

Ƭ **ContractABIMessageArg**: *[ContractABIArgBase](../interfaces/_types_.contractabiargbase.md)*

*Defined in [api-contract/src/types.ts:42](https://github.com/polkadot-js/api/blob/bd2e690261/packages/api-contract/src/types.ts#L42)*

___

###  ContractABIMessageArgPre

Ƭ **ContractABIMessageArgPre**: *[ContractABIArgBasePre](../interfaces/_types_.contractabiargbasepre.md)*

*Defined in [api-contract/src/types.ts:40](https://github.com/polkadot-js/api/blob/bd2e690261/packages/api-contract/src/types.ts#L40)*

___

###  ContractABIStorage

Ƭ **ContractABIStorage**: *[ContractABIStorageStruct](../interfaces/_types_.contractabistoragestruct.md)*

*Defined in [api-contract/src/types.ts:172](https://github.com/polkadot-js/api/blob/bd2e690261/packages/api-contract/src/types.ts#L172)*

___

###  ContractABIStorageLayout

Ƭ **ContractABIStorageLayout**: *[ContractABIStorageStruct](../interfaces/_types_.contractabistoragestruct.md) | [ContractABIRange](../interfaces/_types_.contractabirange.md)*

*Defined in [api-contract/src/types.ts:148](https://github.com/polkadot-js/api/blob/bd2e690261/packages/api-contract/src/types.ts#L148)*

___

###  ContractABIStorageLayoutPre

Ƭ **ContractABIStorageLayoutPre**: *[ContractABIStorageStructPre](../interfaces/_types_.contractabistoragestructpre.md) | [ContractABIRangePre](../interfaces/_types_.contractabirangepre.md)*

*Defined in [api-contract/src/types.ts:146](https://github.com/polkadot-js/api/blob/bd2e690261/packages/api-contract/src/types.ts#L146)*

___

###  ContractABIStoragePre

Ƭ **ContractABIStoragePre**: *[ContractABIStorageStructPre](../interfaces/_types_.contractabistoragestructpre.md)*

*Defined in [api-contract/src/types.ts:170](https://github.com/polkadot-js/api/blob/bd2e690261/packages/api-contract/src/types.ts#L170)*
