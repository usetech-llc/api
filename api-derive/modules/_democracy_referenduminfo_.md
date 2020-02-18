[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["democracy/referendumInfo"](_democracy_referenduminfo_.md)

# External module: "democracy/referendumInfo"

## Index

### Functions

* [referendumInfo](_democracy_referenduminfo_.md#referenduminfo)
* [retrieveInfo](_democracy_referenduminfo_.md#retrieveinfo)

## Functions

###  referendumInfo

▸ **referendumInfo**(`api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/democracy/referendumInfo.ts:56](https://github.com/polkadot-js/api/blob/d041c0abb2/packages/api-derive/src/democracy/referendumInfo.ts#L56)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`index`: BN | number): *Observable‹DerivedReferendum | null›*

**Parameters:**

Name | Type |
------ | ------ |
`index` | BN &#124; number |

___

###  retrieveInfo

▸ **retrieveInfo**(`api`: ApiInterfaceRx, `index`: BN | number, `info`: Option‹ReferendumInfo›): *Observable‹DerivedReferendum | null›*

*Defined in [packages/api-derive/src/democracy/referendumInfo.ts:44](https://github.com/polkadot-js/api/blob/d041c0abb2/packages/api-derive/src/democracy/referendumInfo.ts#L44)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |
`index` | BN &#124; number |
`info` | Option‹ReferendumInfo› |

**Returns:** *Observable‹DerivedReferendum | null›*
