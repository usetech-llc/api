[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types/extrinsic"](../modules/_types_extrinsic_.md) › [ISubmittableResult](_types_extrinsic_.isubmittableresult.md)

# Interface: ISubmittableResult

## Hierarchy

* **ISubmittableResult**

## Index

### Properties

* [events](_types_extrinsic_.isubmittableresult.md#events)
* [isCompleted](_types_extrinsic_.isubmittableresult.md#iscompleted)
* [isError](_types_extrinsic_.isubmittableresult.md#iserror)
* [isFinalized](_types_extrinsic_.isubmittableresult.md#isfinalized)
* [isInBlock](_types_extrinsic_.isubmittableresult.md#isinblock)
* [status](_types_extrinsic_.isubmittableresult.md#status)

### Methods

* [filterRecords](_types_extrinsic_.isubmittableresult.md#filterrecords)
* [findRecord](_types_extrinsic_.isubmittableresult.md#findrecord)
* [toHuman](_types_extrinsic_.isubmittableresult.md#tohuman)

## Properties

###  events

• **events**: *EventRecord[]*

*Defined in [packages/types/src/types/extrinsic.ts:14](https://github.com/polkadot-js/api/blob/ad2939cc4f/packages/types/src/types/extrinsic.ts#L14)*

___

###  isCompleted

• **isCompleted**: *boolean*

*Defined in [packages/types/src/types/extrinsic.ts:16](https://github.com/polkadot-js/api/blob/ad2939cc4f/packages/types/src/types/extrinsic.ts#L16)*

___

###  isError

• **isError**: *boolean*

*Defined in [packages/types/src/types/extrinsic.ts:17](https://github.com/polkadot-js/api/blob/ad2939cc4f/packages/types/src/types/extrinsic.ts#L17)*

___

###  isFinalized

• **isFinalized**: *boolean*

*Defined in [packages/types/src/types/extrinsic.ts:18](https://github.com/polkadot-js/api/blob/ad2939cc4f/packages/types/src/types/extrinsic.ts#L18)*

___

###  isInBlock

• **isInBlock**: *boolean*

*Defined in [packages/types/src/types/extrinsic.ts:19](https://github.com/polkadot-js/api/blob/ad2939cc4f/packages/types/src/types/extrinsic.ts#L19)*

___

###  status

• **status**: *ExtrinsicStatus*

*Defined in [packages/types/src/types/extrinsic.ts:15](https://github.com/polkadot-js/api/blob/ad2939cc4f/packages/types/src/types/extrinsic.ts#L15)*

## Methods

###  filterRecords

▸ **filterRecords**(`section`: string, `method`: string): *EventRecord[]*

*Defined in [packages/types/src/types/extrinsic.ts:21](https://github.com/polkadot-js/api/blob/ad2939cc4f/packages/types/src/types/extrinsic.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`section` | string |
`method` | string |

**Returns:** *EventRecord[]*

___

###  findRecord

▸ **findRecord**(`section`: string, `method`: string): *EventRecord | undefined*

*Defined in [packages/types/src/types/extrinsic.ts:22](https://github.com/polkadot-js/api/blob/ad2939cc4f/packages/types/src/types/extrinsic.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`section` | string |
`method` | string |

**Returns:** *EventRecord | undefined*

___

###  toHuman

▸ **toHuman**(`isExtended?`: undefined | false | true): *[AnyJson](../modules/_types_helpers_.md#anyjson)*

*Defined in [packages/types/src/types/extrinsic.ts:23](https://github.com/polkadot-js/api/blob/ad2939cc4f/packages/types/src/types/extrinsic.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`isExtended?` | undefined &#124; false &#124; true |

**Returns:** *[AnyJson](../modules/_types_helpers_.md#anyjson)*
