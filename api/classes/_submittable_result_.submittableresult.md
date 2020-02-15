[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["submittable/Result"](../modules/_submittable_result_.md) › [SubmittableResult](_submittable_result_.submittableresult.md)

# Class: SubmittableResult

## Hierarchy

* **SubmittableResult**

## Implements

* SubmittableResultImpl

## Index

### Constructors

* [constructor](_submittable_result_.submittableresult.md#constructor)

### Properties

* [events](_submittable_result_.submittableresult.md#events)
* [status](_submittable_result_.submittableresult.md#status)

### Accessors

* [isCompleted](_submittable_result_.submittableresult.md#iscompleted)
* [isError](_submittable_result_.submittableresult.md#iserror)
* [isFinalized](_submittable_result_.submittableresult.md#isfinalized)
* [isInBlock](_submittable_result_.submittableresult.md#isinblock)

### Methods

* [filterRecords](_submittable_result_.submittableresult.md#filterrecords)
* [findRecord](_submittable_result_.submittableresult.md#findrecord)

## Constructors

###  constructor

\+ **new SubmittableResult**(`__namedParameters`: object): *[SubmittableResult](_submittable_result_.submittableresult.md)*

*Defined in [api/src/submittable/Result.ts:11](https://github.com/polkadot-js/api/blob/79ee2ede3d/packages/api/src/submittable/Result.ts#L11)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`events` | undefined &#124; EventRecord‹›[] |
`status` | ExtrinsicStatus‹› |

**Returns:** *[SubmittableResult](_submittable_result_.submittableresult.md)*

## Properties

###  events

• **events**: *EventRecord[]*

*Defined in [api/src/submittable/Result.ts:9](https://github.com/polkadot-js/api/blob/79ee2ede3d/packages/api/src/submittable/Result.ts#L9)*

___

###  status

• **status**: *ExtrinsicStatus*

*Defined in [api/src/submittable/Result.ts:11](https://github.com/polkadot-js/api/blob/79ee2ede3d/packages/api/src/submittable/Result.ts#L11)*

## Accessors

###  isCompleted

• **get isCompleted**(): *boolean*

*Defined in [api/src/submittable/Result.ts:18](https://github.com/polkadot-js/api/blob/79ee2ede3d/packages/api/src/submittable/Result.ts#L18)*

**Returns:** *boolean*

___

###  isError

• **get isError**(): *boolean*

*Defined in [api/src/submittable/Result.ts:22](https://github.com/polkadot-js/api/blob/79ee2ede3d/packages/api/src/submittable/Result.ts#L22)*

**Returns:** *boolean*

___

###  isFinalized

• **get isFinalized**(): *boolean*

*Defined in [api/src/submittable/Result.ts:26](https://github.com/polkadot-js/api/blob/79ee2ede3d/packages/api/src/submittable/Result.ts#L26)*

**Returns:** *boolean*

___

###  isInBlock

• **get isInBlock**(): *boolean*

*Defined in [api/src/submittable/Result.ts:30](https://github.com/polkadot-js/api/blob/79ee2ede3d/packages/api/src/submittable/Result.ts#L30)*

**Returns:** *boolean*

## Methods

###  filterRecords

▸ **filterRecords**(`section`: string, `method`: string): *EventRecord[]*

*Defined in [api/src/submittable/Result.ts:37](https://github.com/polkadot-js/api/blob/79ee2ede3d/packages/api/src/submittable/Result.ts#L37)*

**`description`** Filters EventRecords for the specified method & section (there could be multiple)

**Parameters:**

Name | Type |
------ | ------ |
`section` | string |
`method` | string |

**Returns:** *EventRecord[]*

___

###  findRecord

▸ **findRecord**(`section`: string, `method`: string): *EventRecord | undefined*

*Defined in [api/src/submittable/Result.ts:46](https://github.com/polkadot-js/api/blob/79ee2ede3d/packages/api/src/submittable/Result.ts#L46)*

**`description`** Finds an EventRecord for the specified method & section

**Parameters:**

Name | Type |
------ | ------ |
`section` | string |
`method` | string |

**Returns:** *EventRecord | undefined*
