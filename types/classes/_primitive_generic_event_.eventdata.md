[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["primitive/Generic/Event"](../modules/_primitive_generic_event_.md) › [EventData](_primitive_generic_event_.eventdata.md)

# Class: EventData

**`name`** EventData

**`description`** 
Wrapper for the actual data that forms part of an [Event](_primitive_generic_event_.event.md)

## Hierarchy

  ↳ [Tuple](_codec_tuple_.tuple.md)

  ↳ **EventData**

## Implements

* Codec

## Indexable

* \[ **n**: *number*\]: Codec

## Index

### Constructors

* [constructor](_primitive_generic_event_.eventdata.md#constructor)

### Properties

* [registry](_primitive_generic_event_.eventdata.md#registry)

### Accessors

* [Types](_primitive_generic_event_.eventdata.md#types)
* [encodedLength](_primitive_generic_event_.eventdata.md#encodedlength)
* [hash](_primitive_generic_event_.eventdata.md#hash)
* [isEmpty](_primitive_generic_event_.eventdata.md#isempty)
* [length](_primitive_generic_event_.eventdata.md#length)
* [meta](_primitive_generic_event_.eventdata.md#meta)
* [method](_primitive_generic_event_.eventdata.md#method)
* [section](_primitive_generic_event_.eventdata.md#section)
* [typeDef](_primitive_generic_event_.eventdata.md#typedef)

### Methods

* [eq](_primitive_generic_event_.eventdata.md#eq)
* [filter](_primitive_generic_event_.eventdata.md#filter)
* [includes](_primitive_generic_event_.eventdata.md#includes)
* [map](_primitive_generic_event_.eventdata.md#map)
* [toArray](_primitive_generic_event_.eventdata.md#toarray)
* [toHex](_primitive_generic_event_.eventdata.md#tohex)
* [toJSON](_primitive_generic_event_.eventdata.md#tojson)
* [toRawType](_primitive_generic_event_.eventdata.md#torawtype)
* [toString](_primitive_generic_event_.eventdata.md#tostring)
* [toU8a](_primitive_generic_event_.eventdata.md#tou8a)
* [with](_primitive_generic_event_.eventdata.md#static-with)

## Constructors

###  constructor

\+ **new EventData**(`registry`: Registry, `Types`: Constructor[], `value`: [Uint8Array](_codec_raw_.raw.md#static-uint8array), `typeDef`: TypeDef[], `meta`: RegistryMetadataEvent, `section`: string, `method`: string): *[EventData](_primitive_generic_event_.eventdata.md)*

*Overrides [Tuple](_codec_tuple_.tuple.md).[constructor](_codec_tuple_.tuple.md#constructor)*

*Defined in [packages/types/src/primitive/Generic/Event.ts:26](https://github.com/polkadot-js/api/blob/83aca87dac/packages/types/src/primitive/Generic/Event.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | Registry |
`Types` | Constructor[] |
`value` | [Uint8Array](_codec_raw_.raw.md#static-uint8array) |
`typeDef` | TypeDef[] |
`meta` | RegistryMetadataEvent |
`section` | string |
`method` | string |

**Returns:** *[EventData](_primitive_generic_event_.eventdata.md)*

## Properties

###  registry

• **registry**: *Registry*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[registry](_codec_abstractarray_.abstractarray.md#registry)*

*Defined in [packages/types/src/codec/AbstractArray.ts:22](https://github.com/polkadot-js/api/blob/83aca87dac/packages/types/src/codec/AbstractArray.ts#L22)*

## Accessors

###  Types

• **get Types**(): *string[]*

*Inherited from [Tuple](_codec_tuple_.tuple.md).[Types](_codec_tuple_.tuple.md#types)*

*Defined in [packages/types/src/codec/Tuple.ts:81](https://github.com/polkadot-js/api/blob/83aca87dac/packages/types/src/codec/Tuple.ts#L81)*

**`description`** The types definition of the tuple

**Returns:** *string[]*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Tuple](_codec_tuple_.tuple.md).[encodedLength](_codec_tuple_.tuple.md#encodedlength)*

*Overrides [AbstractArray](_codec_abstractarray_.abstractarray.md).[encodedLength](_codec_abstractarray_.abstractarray.md#encodedlength)*

*Defined in [packages/types/src/codec/Tuple.ts:70](https://github.com/polkadot-js/api/blob/83aca87dac/packages/types/src/codec/Tuple.ts#L70)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *IHash*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[hash](_codec_abstractarray_.abstractarray.md#hash)*

*Defined in [packages/types/src/codec/AbstractArray.ts:42](https://github.com/polkadot-js/api/blob/83aca87dac/packages/types/src/codec/AbstractArray.ts#L42)*

**`description`** returns a hash of the contents

**Returns:** *IHash*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[isEmpty](_codec_abstractarray_.abstractarray.md#isempty)*

*Defined in [packages/types/src/codec/AbstractArray.ts:49](https://github.com/polkadot-js/api/blob/83aca87dac/packages/types/src/codec/AbstractArray.ts#L49)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[length](_codec_abstractarray_.abstractarray.md#length)*

*Overrides void*

*Defined in [packages/types/src/codec/AbstractArray.ts:56](https://github.com/polkadot-js/api/blob/83aca87dac/packages/types/src/codec/AbstractArray.ts#L56)*

**`description`** The length of the value

**Returns:** *number*

___

###  meta

• **get meta**(): *EventMetadataLatest*

*Defined in [packages/types/src/primitive/Generic/Event.ts:40](https://github.com/polkadot-js/api/blob/83aca87dac/packages/types/src/primitive/Generic/Event.ts#L40)*

**`description`** The wrapped [[EventMetadata]]

**Returns:** *EventMetadataLatest*

___

###  method

• **get method**(): *string*

*Defined in [packages/types/src/primitive/Generic/Event.ts:47](https://github.com/polkadot-js/api/blob/83aca87dac/packages/types/src/primitive/Generic/Event.ts#L47)*

**`description`** The method as a string

**Returns:** *string*

___

###  section

• **get section**(): *string*

*Defined in [packages/types/src/primitive/Generic/Event.ts:54](https://github.com/polkadot-js/api/blob/83aca87dac/packages/types/src/primitive/Generic/Event.ts#L54)*

**`description`** The section as a string

**Returns:** *string*

___

###  typeDef

• **get typeDef**(): *TypeDef[]*

*Defined in [packages/types/src/primitive/Generic/Event.ts:61](https://github.com/polkadot-js/api/blob/83aca87dac/packages/types/src/primitive/Generic/Event.ts#L61)*

**`description`** The [[TypeDef]] for this event

**Returns:** *TypeDef[]*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[eq](_codec_abstractarray_.abstractarray.md#eq)*

*Defined in [packages/types/src/codec/AbstractArray.ts:64](https://github.com/polkadot-js/api/blob/83aca87dac/packages/types/src/codec/AbstractArray.ts#L64)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  filter

▸ **filter**(`callbackfn`: function, `thisArg?`: any): *Codec[]*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[filter](_codec_abstractarray_.abstractarray.md#filter)*

*Overrides void*

*Defined in [packages/types/src/codec/AbstractArray.ts:134](https://github.com/polkadot-js/api/blob/83aca87dac/packages/types/src/codec/AbstractArray.ts#L134)*

**`description`** Filters the array with the callback

**Parameters:**

▪ **callbackfn**: *function*

The filter function

▸ (`value`: Codec, `index`: number, `array`: Codec[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`value` | Codec |
`index` | number |
`array` | Codec[] |

▪`Optional`  **thisArg**: *any*

The `this` object to apply the result to

**Returns:** *Codec[]*

___

###  includes

▸ **includes**(`check`: any): *boolean*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[includes](_codec_abstractarray_.abstractarray.md#includes)*

*Defined in [packages/types/src/codec/AbstractArray.ts:150](https://github.com/polkadot-js/api/blob/83aca87dac/packages/types/src/codec/AbstractArray.ts#L150)*

**`description`** Checks if the array includes a specific value

**Parameters:**

Name | Type |
------ | ------ |
`check` | any |

**Returns:** *boolean*

___

###  map

▸ **map**<**U**>(`callbackfn`: function, `thisArg?`: any): *U[]*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[map](_codec_abstractarray_.abstractarray.md#map)*

*Overrides void*

*Defined in [packages/types/src/codec/AbstractArray.ts:143](https://github.com/polkadot-js/api/blob/83aca87dac/packages/types/src/codec/AbstractArray.ts#L143)*

**`description`** Maps the array with the callback

**Type parameters:**

▪ **U**

**Parameters:**

▪ **callbackfn**: *function*

The mapping function

▸ (`value`: Codec, `index`: number, `array`: Codec[]): *U*

**Parameters:**

Name | Type |
------ | ------ |
`value` | Codec |
`index` | number |
`array` | Codec[] |

▪`Optional`  **thisArg**: *any*

The `this` onject to apply the result to

**Returns:** *U[]*

___

###  toArray

▸ **toArray**(): *Codec[]*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toArray](_codec_abstractarray_.abstractarray.md#toarray)*

*Defined in [packages/types/src/codec/AbstractArray.ts:71](https://github.com/polkadot-js/api/blob/83aca87dac/packages/types/src/codec/AbstractArray.ts#L71)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *Codec[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toHex](_codec_abstractarray_.abstractarray.md#tohex)*

*Defined in [packages/types/src/codec/AbstractArray.ts:78](https://github.com/polkadot-js/api/blob/83aca87dac/packages/types/src/codec/AbstractArray.ts#L78)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *AnyJsonArray*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toJSON](_codec_abstractarray_.abstractarray.md#tojson)*

*Defined in [packages/types/src/codec/AbstractArray.ts:85](https://github.com/polkadot-js/api/blob/83aca87dac/packages/types/src/codec/AbstractArray.ts#L85)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *AnyJsonArray*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Tuple](_codec_tuple_.tuple.md).[toRawType](_codec_tuple_.tuple.md#torawtype)*

*Overrides [AbstractArray](_codec_abstractarray_.abstractarray.md).[toRawType](_codec_abstractarray_.abstractarray.md#abstract-torawtype)*

*Defined in [packages/types/src/codec/Tuple.ts:90](https://github.com/polkadot-js/api/blob/83aca87dac/packages/types/src/codec/Tuple.ts#L90)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Tuple](_codec_tuple_.tuple.md).[toString](_codec_tuple_.tuple.md#tostring)*

*Overrides [AbstractArray](_codec_abstractarray_.abstractarray.md).[toString](_codec_abstractarray_.abstractarray.md#tostring)*

*Defined in [packages/types/src/codec/Tuple.ts:103](https://github.com/polkadot-js/api/blob/83aca87dac/packages/types/src/codec/Tuple.ts#L103)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Inherited from [Tuple](_codec_tuple_.tuple.md).[toU8a](_codec_tuple_.tuple.md#tou8a)*

*Overrides [AbstractArray](_codec_abstractarray_.abstractarray.md).[toU8a](_codec_abstractarray_.abstractarray.md#tou8a)*

*Defined in [packages/types/src/codec/Tuple.ts:112](https://github.com/polkadot-js/api/blob/83aca87dac/packages/types/src/codec/Tuple.ts#L112)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

___

### `Static` with

▸ **with**(`Types`: TupleTypes): *Constructor‹[Tuple](_codec_tuple_.tuple.md)›*

*Inherited from [Tuple](_codec_tuple_.tuple.md).[with](_codec_tuple_.tuple.md#static-with)*

*Defined in [packages/types/src/codec/Tuple.ts:59](https://github.com/polkadot-js/api/blob/83aca87dac/packages/types/src/codec/Tuple.ts#L59)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | TupleTypes |

**Returns:** *Constructor‹[Tuple](_codec_tuple_.tuple.md)›*
