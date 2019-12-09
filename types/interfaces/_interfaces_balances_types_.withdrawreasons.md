[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/balances/types"](../modules/_interfaces_balances_types_.md) › [WithdrawReasons](_interfaces_balances_types_.withdrawreasons.md)

# Interface: WithdrawReasons

Set

## Hierarchy

  ↳ [CodecSet](../classes/_codec_set_.codecset.md)

  ↳ **WithdrawReasons**

## Implements

* [Codec](_types_.codec.md)

## Index

### Constructors

* [constructor](_interfaces_balances_types_.withdrawreasons.md#constructor)

### Properties

* [__@toStringTag](_interfaces_balances_types_.withdrawreasons.md#__@tostringtag)
* [isFee](_interfaces_balances_types_.withdrawreasons.md#isfee)
* [isReserve](_interfaces_balances_types_.withdrawreasons.md#isreserve)
* [isTip](_interfaces_balances_types_.withdrawreasons.md#istip)
* [isTransactionPayment](_interfaces_balances_types_.withdrawreasons.md#istransactionpayment)
* [isTransfer](_interfaces_balances_types_.withdrawreasons.md#istransfer)
* [registry](_interfaces_balances_types_.withdrawreasons.md#registry)
* [size](_interfaces_balances_types_.withdrawreasons.md#size)

### Accessors

* [encodedLength](_interfaces_balances_types_.withdrawreasons.md#encodedlength)
* [hash](_interfaces_balances_types_.withdrawreasons.md#hash)
* [isEmpty](_interfaces_balances_types_.withdrawreasons.md#isempty)
* [strings](_interfaces_balances_types_.withdrawreasons.md#strings)
* [valueEncoded](_interfaces_balances_types_.withdrawreasons.md#valueencoded)

### Methods

* [__@iterator](_interfaces_balances_types_.withdrawreasons.md#__@iterator)
* [add](_interfaces_balances_types_.withdrawreasons.md#add)
* [clear](_interfaces_balances_types_.withdrawreasons.md#clear)
* [delete](_interfaces_balances_types_.withdrawreasons.md#delete)
* [entries](_interfaces_balances_types_.withdrawreasons.md#entries)
* [eq](_interfaces_balances_types_.withdrawreasons.md#eq)
* [forEach](_interfaces_balances_types_.withdrawreasons.md#foreach)
* [has](_interfaces_balances_types_.withdrawreasons.md#has)
* [keys](_interfaces_balances_types_.withdrawreasons.md#keys)
* [toHex](_interfaces_balances_types_.withdrawreasons.md#tohex)
* [toJSON](_interfaces_balances_types_.withdrawreasons.md#tojson)
* [toNumber](_interfaces_balances_types_.withdrawreasons.md#tonumber)
* [toRawType](_interfaces_balances_types_.withdrawreasons.md#torawtype)
* [toString](_interfaces_balances_types_.withdrawreasons.md#tostring)
* [toU8a](_interfaces_balances_types_.withdrawreasons.md#tou8a)
* [values](_interfaces_balances_types_.withdrawreasons.md#values)
* [decodeSet](_interfaces_balances_types_.withdrawreasons.md#static-decodeset)
* [encodeSet](_interfaces_balances_types_.withdrawreasons.md#static-encodeset)
* [with](_interfaces_balances_types_.withdrawreasons.md#static-with)

## Constructors

###  constructor

\+ **new WithdrawReasons**(`registry`: [Registry](_types_.registry.md), `setValues`: SetValues, `value?`: string[] | Set‹string› | Uint8Array | number): *[WithdrawReasons](_interfaces_balances_types_.withdrawreasons.md)*

*Inherited from [CodecSet](../classes/_codec_set_.codecset.md).[constructor](../classes/_codec_set_.codecset.md#constructor)*

*Defined in [packages/types/src/codec/Set.ts:25](https://github.com/polkadot-js/api/blob/8ba402963/packages/types/src/codec/Set.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](_types_.registry.md) |
`setValues` | SetValues |
`value?` | string[] &#124; Set‹string› &#124; Uint8Array &#124; number |

**Returns:** *[WithdrawReasons](_interfaces_balances_types_.withdrawreasons.md)*

## Properties

###  __@toStringTag

• **__@toStringTag**: *string*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:138

___

###  isFee

• **isFee**: *boolean*

*Defined in [packages/types/src/interfaces/balances/types.ts:38](https://github.com/polkadot-js/api/blob/8ba402963/packages/types/src/interfaces/balances/types.ts#L38)*

boolean

___

###  isReserve

• **isReserve**: *boolean*

*Defined in [packages/types/src/interfaces/balances/types.ts:36](https://github.com/polkadot-js/api/blob/8ba402963/packages/types/src/interfaces/balances/types.ts#L36)*

boolean

___

###  isTip

• **isTip**: *boolean*

*Defined in [packages/types/src/interfaces/balances/types.ts:40](https://github.com/polkadot-js/api/blob/8ba402963/packages/types/src/interfaces/balances/types.ts#L40)*

boolean

___

###  isTransactionPayment

• **isTransactionPayment**: *boolean*

*Defined in [packages/types/src/interfaces/balances/types.ts:32](https://github.com/polkadot-js/api/blob/8ba402963/packages/types/src/interfaces/balances/types.ts#L32)*

boolean

___

###  isTransfer

• **isTransfer**: *boolean*

*Defined in [packages/types/src/interfaces/balances/types.ts:34](https://github.com/polkadot-js/api/blob/8ba402963/packages/types/src/interfaces/balances/types.ts#L34)*

boolean

___

###  registry

• **registry**: *[Registry](_types_.registry.md)*

*Inherited from [CodecSet](../classes/_codec_set_.codecset.md).[registry](../classes/_codec_set_.codecset.md#registry)*

*Defined in [packages/types/src/codec/Set.ts:23](https://github.com/polkadot-js/api/blob/8ba402963/packages/types/src/codec/Set.ts#L23)*

___

###  size

• **size**: *number*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:64

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [CodecSet](../classes/_codec_set_.codecset.md).[encodedLength](../classes/_codec_set_.codecset.md#encodedlength)*

*Defined in [packages/types/src/codec/Set.ts:104](https://github.com/polkadot-js/api/blob/8ba402963/packages/types/src/codec/Set.ts#L104)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](_types_.ihash.md)*

*Inherited from [CodecSet](../classes/_codec_set_.codecset.md).[hash](../classes/_codec_set_.codecset.md#hash)*

*Defined in [packages/types/src/codec/Set.ts:111](https://github.com/polkadot-js/api/blob/8ba402963/packages/types/src/codec/Set.ts#L111)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [CodecSet](../classes/_codec_set_.codecset.md).[isEmpty](../classes/_codec_set_.codecset.md#isempty)*

*Defined in [packages/types/src/codec/Set.ts:118](https://github.com/polkadot-js/api/blob/8ba402963/packages/types/src/codec/Set.ts#L118)*

**`description`** true is the Set contains no values

**Returns:** *boolean*

___

###  strings

• **get strings**(): *string[]*

*Inherited from [CodecSet](../classes/_codec_set_.codecset.md).[strings](../classes/_codec_set_.codecset.md#strings)*

*Defined in [packages/types/src/codec/Set.ts:125](https://github.com/polkadot-js/api/blob/8ba402963/packages/types/src/codec/Set.ts#L125)*

**`description`** The actual set values as a string[]

**Returns:** *string[]*

___

###  valueEncoded

• **get valueEncoded**(): *number*

*Inherited from [CodecSet](../classes/_codec_set_.codecset.md).[valueEncoded](../classes/_codec_set_.codecset.md#valueencoded)*

*Defined in [packages/types/src/codec/Set.ts:132](https://github.com/polkadot-js/api/blob/8ba402963/packages/types/src/codec/Set.ts#L132)*

**`description`** The encoded value for the set members

**Returns:** *number*

## Methods

###  __@iterator

▸ **__@iterator**(): *IterableIterator‹string›*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:171

Iterates over values in the set.

**Returns:** *IterableIterator‹string›*

___

###  add

▸ **add**(`key`: string): *this*

*Inherited from [CodecSet](../classes/_codec_set_.codecset.md).[add](../classes/_codec_set_.codecset.md#add)*

*Overrides void*

*Defined in [packages/types/src/codec/Set.ts:139](https://github.com/polkadot-js/api/blob/8ba402963/packages/types/src/codec/Set.ts#L139)*

**`description`** adds a value to the Set (extended to allow for validity checking)

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *this*

___

###  clear

▸ **clear**(): *void*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:60

**Returns:** *void*

___

###  delete

▸ **delete**(`value`: string): *boolean*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:61

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *boolean*

___

###  entries

▸ **entries**(): *IterableIterator‹[string, string]›*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:175

Returns an iterable of [v,v] pairs for every value `v` in the set.

**Returns:** *IterableIterator‹[string, string]›*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [CodecSet](../classes/_codec_set_.codecset.md).[eq](../classes/_codec_set_.codecset.md#eq)*

*Defined in [packages/types/src/codec/Set.ts:152](https://github.com/polkadot-js/api/blob/8ba402963/packages/types/src/codec/Set.ts#L152)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  forEach

▸ **forEach**(`callbackfn`: function, `thisArg?`: any): *void*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:62

**Parameters:**

▪ **callbackfn**: *function*

▸ (`value`: string, `value2`: string, `set`: Set‹string›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |
`value2` | string |
`set` | Set‹string› |

▪`Optional`  **thisArg**: *any*

**Returns:** *void*

___

###  has

▸ **has**(`value`: string): *boolean*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:63

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *boolean*

___

###  keys

▸ **keys**(): *IterableIterator‹string›*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:179

Despite its name, returns an iterable of the values in the set,

**Returns:** *IterableIterator‹string›*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [CodecSet](../classes/_codec_set_.codecset.md).[toHex](../classes/_codec_set_.codecset.md#tohex)*

*Defined in [packages/types/src/codec/Set.ts:168](https://github.com/polkadot-js/api/blob/8ba402963/packages/types/src/codec/Set.ts#L168)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *string[]*

*Inherited from [CodecSet](../classes/_codec_set_.codecset.md).[toJSON](../classes/_codec_set_.codecset.md#tojson)*

*Defined in [packages/types/src/codec/Set.ts:175](https://github.com/polkadot-js/api/blob/8ba402963/packages/types/src/codec/Set.ts#L175)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *string[]*

___

###  toNumber

▸ **toNumber**(): *number*

*Inherited from [CodecSet](../classes/_codec_set_.codecset.md).[toNumber](../classes/_codec_set_.codecset.md#tonumber)*

*Defined in [packages/types/src/codec/Set.ts:182](https://github.com/polkadot-js/api/blob/8ba402963/packages/types/src/codec/Set.ts#L182)*

**`description`** The encoded value for the set members

**Returns:** *number*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [CodecSet](../classes/_codec_set_.codecset.md).[toRawType](../classes/_codec_set_.codecset.md#torawtype)*

*Defined in [packages/types/src/codec/Set.ts:189](https://github.com/polkadot-js/api/blob/8ba402963/packages/types/src/codec/Set.ts#L189)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [CodecSet](../classes/_codec_set_.codecset.md).[toString](../classes/_codec_set_.codecset.md#tostring)*

*Defined in [packages/types/src/codec/Set.ts:197](https://github.com/polkadot-js/api/blob/8ba402963/packages/types/src/codec/Set.ts#L197)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from [CodecSet](../classes/_codec_set_.codecset.md).[toU8a](../classes/_codec_set_.codecset.md#tou8a)*

*Defined in [packages/types/src/codec/Set.ts:206](https://github.com/polkadot-js/api/blob/8ba402963/packages/types/src/codec/Set.ts#L206)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*

___

###  values

▸ **values**(): *IterableIterator‹string›*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:184

Returns an iterable of values in the set.

**Returns:** *IterableIterator‹string›*

___

### `Static` decodeSet

▸ **decodeSet**(`setValues`: SetValues, `value`: string[] | Set‹string› | Uint8Array | number): *string[]*

*Inherited from [CodecSet](../classes/_codec_set_.codecset.md).[decodeSet](../classes/_codec_set_.codecset.md#static-decodeset)*

*Defined in [packages/types/src/codec/Set.ts:34](https://github.com/polkadot-js/api/blob/8ba402963/packages/types/src/codec/Set.ts#L34)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`setValues` | SetValues | - |
`value` | string[] &#124; Set‹string› &#124; Uint8Array &#124; number | 0 |

**Returns:** *string[]*

___

### `Static` encodeSet

▸ **encodeSet**(`setValues`: SetValues, `value`: string[]): *number*

*Inherited from [CodecSet](../classes/_codec_set_.codecset.md).[encodeSet](../classes/_codec_set_.codecset.md#static-encodeset)*

*Defined in [packages/types/src/codec/Set.ts:74](https://github.com/polkadot-js/api/blob/8ba402963/packages/types/src/codec/Set.ts#L74)*

**Parameters:**

Name | Type |
------ | ------ |
`setValues` | SetValues |
`value` | string[] |

**Returns:** *number*

___

### `Static` with

▸ **with**(`values`: SetValues): *[Constructor](_types_.constructor.md)‹[CodecSet](../classes/_codec_set_.codecset.md)›*

*Inherited from [CodecSet](../classes/_codec_set_.codecset.md).[with](../classes/_codec_set_.codecset.md#static-with)*

*Defined in [packages/types/src/codec/Set.ts:80](https://github.com/polkadot-js/api/blob/8ba402963/packages/types/src/codec/Set.ts#L80)*

**Parameters:**

Name | Type |
------ | ------ |
`values` | SetValues |

**Returns:** *[Constructor](_types_.constructor.md)‹[CodecSet](../classes/_codec_set_.codecset.md)›*
