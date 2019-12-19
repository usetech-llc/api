[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["codec/Linkage"](../modules/_codec_linkage_.md) › [Linkage](_codec_linkage_.linkage.md)

# Class: Linkage <**T, S, T, V, E**>

**`name`** Linkage

**`description`** The wrapper for the result from a LinkedMap

## Type parameters

▪ **T**: *[Codec](../interfaces/_types_.codec.md)*

▪ **S**: *TypesDef*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  ↳ [Struct](_codec_struct_.struct.md)

  ↳ **Linkage**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_codec_linkage_.linkage.md#constructor)

### Properties

* [[Symbol.toStringTag]](_codec_linkage_.linkage.md#[symbol.tostringtag])
* [registry](_codec_linkage_.linkage.md#registry)

### Accessors

* [Type](_codec_linkage_.linkage.md#type)
* [encodedLength](_codec_linkage_.linkage.md#encodedlength)
* [hash](_codec_linkage_.linkage.md#hash)
* [isEmpty](_codec_linkage_.linkage.md#isempty)
* [next](_codec_linkage_.linkage.md#next)
* [previous](_codec_linkage_.linkage.md#previous)

### Methods

* [[Symbol.iterator]](_codec_linkage_.linkage.md#[symbol.iterator])
* [eq](_codec_linkage_.linkage.md#eq)
* [get](_codec_linkage_.linkage.md#get)
* [getAtIndex](_codec_linkage_.linkage.md#getatindex)
* [toArray](_codec_linkage_.linkage.md#toarray)
* [toHex](_codec_linkage_.linkage.md#tohex)
* [toJSON](_codec_linkage_.linkage.md#tojson)
* [toRawType](_codec_linkage_.linkage.md#torawtype)
* [toString](_codec_linkage_.linkage.md#tostring)
* [toU8a](_codec_linkage_.linkage.md#tou8a)
* [typesToMap](_codec_linkage_.linkage.md#static-typestomap)
* [with](_codec_linkage_.linkage.md#static-with)
* [withKey](_codec_linkage_.linkage.md#static-withkey)

## Constructors

###  constructor

\+ **new Linkage**(`registry`: [Registry](../interfaces/_types_.registry.md), `Type`: [Constructor](../interfaces/_types_.constructor.md) | [InterfaceTypes](../modules/_types_.md#interfacetypes), `value?`: any): *[Linkage](_codec_linkage_.linkage.md)*

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [packages/types/src/codec/Linkage.ts:20](https://github.com/polkadot-js/api/blob/c04fb9073/packages/types/src/codec/Linkage.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_types_.registry.md) |
`Type` | [Constructor](../interfaces/_types_.constructor.md) &#124; [InterfaceTypes](../modules/_types_.md#interfacetypes) |
`value?` | any |

**Returns:** *[Linkage](_codec_linkage_.linkage.md)*

## Properties

###  [Symbol.toStringTag]

• **[Symbol.toStringTag]**: *string*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:130

___

###  registry

• **registry**: *[Registry](../interfaces/_types_.registry.md)*

*Implementation of [Codec](../interfaces/_types_.codec.md).[registry](../interfaces/_types_.codec.md#registry)*

*Inherited from [Struct](_codec_struct_.struct.md).[registry](_codec_struct_.struct.md#registry)*

*Defined in [packages/types/src/codec/Struct.ts:34](https://github.com/polkadot-js/api/blob/c04fb9073/packages/types/src/codec/Struct.ts#L34)*

## Accessors

###  Type

• **get Type**(): *E*

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [packages/types/src/codec/Struct.ts:158](https://github.com/polkadot-js/api/blob/c04fb9073/packages/types/src/codec/Struct.ts#L158)*

**`description`** Returns the Type description to sthe structure

**Returns:** *E*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [packages/types/src/codec/Struct.ts:171](https://github.com/polkadot-js/api/blob/c04fb9073/packages/types/src/codec/Struct.ts#L171)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](../interfaces/_types_.ihash.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[hash](_codec_struct_.struct.md#hash)*

*Defined in [packages/types/src/codec/Struct.ts:182](https://github.com/polkadot-js/api/blob/c04fb9073/packages/types/src/codec/Struct.ts#L182)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](../interfaces/_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [packages/types/src/codec/Struct.ts:143](https://github.com/polkadot-js/api/blob/c04fb9073/packages/types/src/codec/Struct.ts#L143)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  next

• **get next**(): *[Option](_codec_option_.option.md)‹T›*

*Defined in [packages/types/src/codec/Linkage.ts:40](https://github.com/polkadot-js/api/blob/c04fb9073/packages/types/src/codec/Linkage.ts#L40)*

**Returns:** *[Option](_codec_option_.option.md)‹T›*

___

###  previous

• **get previous**(): *[Option](_codec_option_.option.md)‹T›*

*Defined in [packages/types/src/codec/Linkage.ts:36](https://github.com/polkadot-js/api/blob/c04fb9073/packages/types/src/codec/Linkage.ts#L36)*

**Returns:** *[Option](_codec_option_.option.md)‹T›*

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *IterableIterator‹[keyof S, [Codec](../interfaces/_types_.codec.md)]›*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:121

Returns an iterable of entries in the map.

**Returns:** *IterableIterator‹[keyof S, [Codec](../interfaces/_types_.codec.md)]›*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [packages/types/src/codec/Struct.ts:189](https://github.com/polkadot-js/api/blob/c04fb9073/packages/types/src/codec/Struct.ts#L189)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  get

▸ **get**(`name`: keyof S): *[Codec](../interfaces/_types_.codec.md) | undefined*

*Inherited from [Struct](_codec_struct_.struct.md).[get](_codec_struct_.struct.md#get)*

*Overrides void*

*Defined in [packages/types/src/codec/Struct.ts:197](https://github.com/polkadot-js/api/blob/c04fb9073/packages/types/src/codec/Struct.ts#L197)*

**`description`** Returns a specific names entry in the structure

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | keyof S | The name of the entry to retrieve  |

**Returns:** *[Codec](../interfaces/_types_.codec.md) | undefined*

___

###  getAtIndex

▸ **getAtIndex**(`index`: number): *[Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[getAtIndex](_codec_struct_.struct.md#getatindex)*

*Defined in [packages/types/src/codec/Struct.ts:204](https://github.com/polkadot-js/api/blob/c04fb9073/packages/types/src/codec/Struct.ts#L204)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *[Codec](../interfaces/_types_.codec.md)*

___

###  toArray

▸ **toArray**(): *[Codec](../interfaces/_types_.codec.md)[]*

*Inherited from [Struct](_codec_struct_.struct.md).[toArray](_codec_struct_.struct.md#toarray)*

*Defined in [packages/types/src/codec/Struct.ts:211](https://github.com/polkadot-js/api/blob/c04fb9073/packages/types/src/codec/Struct.ts#L211)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](../interfaces/_types_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [packages/types/src/codec/Struct.ts:218](https://github.com/polkadot-js/api/blob/c04fb9073/packages/types/src/codec/Struct.ts#L218)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [packages/types/src/codec/Struct.ts:225](https://github.com/polkadot-js/api/blob/c04fb9073/packages/types/src/codec/Struct.ts#L225)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Overrides [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [packages/types/src/codec/Linkage.ts:47](https://github.com/polkadot-js/api/blob/c04fb9073/packages/types/src/codec/Linkage.ts#L47)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [packages/types/src/codec/Struct.ts:258](https://github.com/polkadot-js/api/blob/c04fb9073/packages/types/src/codec/Struct.ts#L258)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(): *Uint8Array*

*Overrides [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [packages/types/src/codec/Linkage.ts:54](https://github.com/polkadot-js/api/blob/c04fb9073/packages/types/src/codec/Linkage.ts#L54)*

**`description`** Custom toU8a which with bare mode does not return the linkage if empty

**Returns:** *Uint8Array*

___

### `Static` typesToMap

▸ **typesToMap**(`registry`: [Registry](../interfaces/_types_.registry.md), `Types`: Record‹string, [Constructor](../interfaces/_types_.constructor.md)›): *Record‹string, string›*

*Inherited from [Struct](_codec_struct_.struct.md).[typesToMap](_codec_struct_.struct.md#static-typestomap)*

*Defined in [packages/types/src/codec/Struct.ts:238](https://github.com/polkadot-js/api/blob/c04fb9073/packages/types/src/codec/Struct.ts#L238)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_types_.registry.md) |
`Types` | Record‹string, [Constructor](../interfaces/_types_.constructor.md)› |

**Returns:** *Record‹string, string›*

___

### `Static` with

▸ **with**<**S**>(`Types`: S): *[Constructor](../interfaces/_types_.constructor.md)‹[Struct](_codec_struct_.struct.md)‹S››*

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#static-with)*

*Defined in [packages/types/src/codec/Struct.ts:120](https://github.com/polkadot-js/api/blob/c04fb9073/packages/types/src/codec/Struct.ts#L120)*

**Type parameters:**

▪ **S**: *TypesDef*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | S |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹[Struct](_codec_struct_.struct.md)‹S››*

___

### `Static` withKey

▸ **withKey**<**O**>(`Type`: [Constructor](../interfaces/_types_.constructor.md) | [InterfaceTypes](../modules/_types_.md#interfacetypes)): *[Constructor](../interfaces/_types_.constructor.md)‹[Linkage](_codec_linkage_.linkage.md)‹O››*

*Defined in [packages/types/src/codec/Linkage.ts:28](https://github.com/polkadot-js/api/blob/c04fb9073/packages/types/src/codec/Linkage.ts#L28)*

**Type parameters:**

▪ **O**: *[Codec](../interfaces/_types_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`Type` | [Constructor](../interfaces/_types_.constructor.md) &#124; [InterfaceTypes](../modules/_types_.md#interfacetypes) |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹[Linkage](_codec_linkage_.linkage.md)‹O››*
