[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["Metadata/MagicNumber"](../modules/_metadata_magicnumber_.md) › [MagicNumber](_metadata_magicnumber_.magicnumber.md)

# Class: MagicNumber

## Hierarchy

* U32

  ↳ **MagicNumber**

## Implements

* Codec

## Index

### Interfaces

* [MPrime](../interfaces/_metadata_magicnumber_.magicnumber.mprime.md)
* [ReductionContext](../interfaces/_metadata_magicnumber_.magicnumber.reductioncontext.md)

### Type aliases

* [Endianness](_metadata_magicnumber_.magicnumber.md#static-endianness)
* [IPrimeName](_metadata_magicnumber_.magicnumber.md#static-iprimename)

### Constructors

* [constructor](_metadata_magicnumber_.magicnumber.md#constructor)

### Properties

* [registry](_metadata_magicnumber_.magicnumber.md#registry)

### Accessors

* [encodedLength](_metadata_magicnumber_.magicnumber.md#encodedlength)
* [hash](_metadata_magicnumber_.magicnumber.md#hash)
* [isEmpty](_metadata_magicnumber_.magicnumber.md#isempty)

### Methods

* [bitLength](_metadata_magicnumber_.magicnumber.md#bitlength)
* [eq](_metadata_magicnumber_.magicnumber.md#eq)
* [isMax](_metadata_magicnumber_.magicnumber.md#ismax)
* [toBn](_metadata_magicnumber_.magicnumber.md#tobn)
* [toHex](_metadata_magicnumber_.magicnumber.md#tohex)
* [toHuman](_metadata_magicnumber_.magicnumber.md#tohuman)
* [toJSON](_metadata_magicnumber_.magicnumber.md#tojson)
* [toRawType](_metadata_magicnumber_.magicnumber.md#torawtype)
* [toString](_metadata_magicnumber_.magicnumber.md#tostring)
* [toU8a](_metadata_magicnumber_.magicnumber.md#tou8a)
* [with](_metadata_magicnumber_.magicnumber.md#static-with)

## Type aliases

### `Static` Endianness

Ƭ **Endianness**: *"le" | "be"*

Defined in node_modules/@types/bn.js/index.d.ts:11

___

### `Static` IPrimeName

Ƭ **IPrimeName**: *"k256" | "p224" | "p192" | "p25519"*

Defined in node_modules/@types/bn.js/index.d.ts:12

## Constructors

###  constructor

\+ **new MagicNumber**(`registry`: Registry, `value?`: any): *[MagicNumber](_metadata_magicnumber_.magicnumber.md)*

*Overrides void*

*Defined in [packages/metadata/src/Metadata/MagicNumber.ts:13](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/metadata/src/Metadata/MagicNumber.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | Registry |
`value?` | any |

**Returns:** *[MagicNumber](_metadata_magicnumber_.magicnumber.md)*

## Properties

###  registry

• **registry**: *Registry*

*Inherited from [MagicNumber](_metadata_magicnumber_.magicnumber.md).[registry](_metadata_magicnumber_.magicnumber.md#registry)*

*Defined in [packages/types/src/codec/AbstractInt.ts:26](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/codec/AbstractInt.ts#L26)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [MagicNumber](_metadata_magicnumber_.magicnumber.md).[encodedLength](_metadata_magicnumber_.magicnumber.md#encodedlength)*

*Defined in [packages/types/src/codec/AbstractInt.ts:78](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/codec/AbstractInt.ts#L78)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *H256*

*Inherited from [MagicNumber](_metadata_magicnumber_.magicnumber.md).[hash](_metadata_magicnumber_.magicnumber.md#hash)*

*Defined in [packages/types/src/codec/AbstractInt.ts:85](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/codec/AbstractInt.ts#L85)*

**`description`** returns a hash of the contents

**Returns:** *H256*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [MagicNumber](_metadata_magicnumber_.magicnumber.md).[isEmpty](_metadata_magicnumber_.magicnumber.md#isempty)*

*Defined in [packages/types/src/codec/AbstractInt.ts:92](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/codec/AbstractInt.ts#L92)*

**`description`** Checks if the value is a zero value (align elsewhere)

**Returns:** *boolean*

## Methods

###  bitLength

▸ **bitLength**(): *UIntBitLength*

*Inherited from [MagicNumber](_metadata_magicnumber_.magicnumber.md).[bitLength](_metadata_magicnumber_.magicnumber.md#bitlength)*

*Defined in [packages/types/src/codec/AbstractInt.ts:99](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/codec/AbstractInt.ts#L99)*

**`description`** Returns the number of bits in the value

**Returns:** *UIntBitLength*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [MagicNumber](_metadata_magicnumber_.magicnumber.md).[eq](_metadata_magicnumber_.magicnumber.md#eq)*

*Defined in [packages/types/src/codec/AbstractInt.ts:107](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/codec/AbstractInt.ts#L107)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  isMax

▸ **isMax**(): *boolean*

*Inherited from [MagicNumber](_metadata_magicnumber_.magicnumber.md).[isMax](_metadata_magicnumber_.magicnumber.md#ismax)*

*Defined in [packages/types/src/codec/AbstractInt.ts:120](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/codec/AbstractInt.ts#L120)*

**`description`** True if this value is the max of the type

**Returns:** *boolean*

___

###  toBn

▸ **toBn**(): *BN*

*Inherited from [MagicNumber](_metadata_magicnumber_.magicnumber.md).[toBn](_metadata_magicnumber_.magicnumber.md#tobn)*

*Defined in [packages/types/src/codec/AbstractInt.ts:129](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/codec/AbstractInt.ts#L129)*

**`description`** Returns the BN representation of the number. (Compatibility)

**Returns:** *BN*

___

###  toHex

▸ **toHex**(`isLe`: boolean): *string*

*Inherited from [MagicNumber](_metadata_magicnumber_.magicnumber.md).[toHex](_metadata_magicnumber_.magicnumber.md#tohex)*

*Overrides void*

*Defined in [packages/types/src/codec/UInt.ts:42](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/codec/UInt.ts#L42)*

**`description`** Returns a hex string representation of the value

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`isLe` | boolean | false |

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(`isExpanded?`: undefined | false | true): *any*

*Inherited from [MagicNumber](_metadata_magicnumber_.magicnumber.md).[toHuman](_metadata_magicnumber_.magicnumber.md#tohuman)*

*Overrides void*

*Defined in [packages/types/src/codec/UInt.ts:54](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/codec/UInt.ts#L54)*

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

**Parameters:**

Name | Type |
------ | ------ |
`isExpanded?` | undefined &#124; false &#124; true |

**Returns:** *any*

___

###  toJSON

▸ **toJSON**(): *any*

*Inherited from [MagicNumber](_metadata_magicnumber_.magicnumber.md).[toJSON](_metadata_magicnumber_.magicnumber.md#tojson)*

*Defined in [packages/types/src/codec/AbstractInt.ts:149](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/codec/AbstractInt.ts#L149)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *any*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [MagicNumber](_metadata_magicnumber_.magicnumber.md).[toRawType](_metadata_magicnumber_.magicnumber.md#torawtype)*

*Overrides void*

*Defined in [packages/types/src/codec/UInt.ts:64](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/codec/UInt.ts#L64)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(`base?`: undefined | number): *string*

*Inherited from [MagicNumber](_metadata_magicnumber_.magicnumber.md).[toString](_metadata_magicnumber_.magicnumber.md#tostring)*

*Defined in [packages/types/src/codec/AbstractInt.ts:167](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/codec/AbstractInt.ts#L167)*

**`description`** Returns the string representation of the value

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`base?` | undefined &#124; number | The base to use for the conversion  |

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from [MagicNumber](_metadata_magicnumber_.magicnumber.md).[toU8a](_metadata_magicnumber_.magicnumber.md#tou8a)*

*Overrides void*

*Defined in [packages/types/src/codec/UInt.ts:78](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/codec/UInt.ts#L78)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*

___

### `Static` with

▸ **with**(`bitLength`: UIntBitLength, `typeName?`: undefined | string): *Constructor‹UInt›*

*Inherited from [MagicNumber](_metadata_magicnumber_.magicnumber.md).[with](_metadata_magicnumber_.magicnumber.md#static-with)*

*Defined in [packages/types/src/codec/UInt.ts:27](https://github.com/polkadot-js/api/blob/2b8ce1b3b7/packages/types/src/codec/UInt.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`bitLength` | UIntBitLength |
`typeName?` | undefined &#124; string |

**Returns:** *Constructor‹UInt›*
