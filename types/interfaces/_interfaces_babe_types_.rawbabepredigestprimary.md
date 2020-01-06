[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/babe/types"](../modules/_interfaces_babe_types_.md) › [RawBabePreDigestPrimary](_interfaces_babe_types_.rawbabepredigestprimary.md)

# Interface: RawBabePreDigestPrimary <**S, T, V, E**>

Struct

## Type parameters

▪ **S**: *TypesDef*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  ↳ [Struct](../classes/_codec_struct_.struct.md)

  ↳ **RawBabePreDigestPrimary**

## Implements

* [Codec](_types_.codec.md)

## Index

### Constructors

* [constructor](_interfaces_babe_types_.rawbabepredigestprimary.md#constructor)

### Properties

* [[Symbol.toStringTag]](_interfaces_babe_types_.rawbabepredigestprimary.md#[symbol.tostringtag])
* [authorityIndex](_interfaces_babe_types_.rawbabepredigestprimary.md#authorityindex)
* [registry](_interfaces_babe_types_.rawbabepredigestprimary.md#registry)
* [slotNumber](_interfaces_babe_types_.rawbabepredigestprimary.md#slotnumber)
* [vrfOutput](_interfaces_babe_types_.rawbabepredigestprimary.md#vrfoutput)
* [vrfProof](_interfaces_babe_types_.rawbabepredigestprimary.md#vrfproof)

### Accessors

* [Type](_interfaces_babe_types_.rawbabepredigestprimary.md#type)
* [encodedLength](_interfaces_babe_types_.rawbabepredigestprimary.md#encodedlength)
* [hash](_interfaces_babe_types_.rawbabepredigestprimary.md#hash)
* [isEmpty](_interfaces_babe_types_.rawbabepredigestprimary.md#isempty)

### Methods

* [[Symbol.iterator]](_interfaces_babe_types_.rawbabepredigestprimary.md#[symbol.iterator])
* [eq](_interfaces_babe_types_.rawbabepredigestprimary.md#eq)
* [get](_interfaces_babe_types_.rawbabepredigestprimary.md#get)
* [getAtIndex](_interfaces_babe_types_.rawbabepredigestprimary.md#getatindex)
* [toArray](_interfaces_babe_types_.rawbabepredigestprimary.md#toarray)
* [toHex](_interfaces_babe_types_.rawbabepredigestprimary.md#tohex)
* [toJSON](_interfaces_babe_types_.rawbabepredigestprimary.md#tojson)
* [toRawType](_interfaces_babe_types_.rawbabepredigestprimary.md#torawtype)
* [toString](_interfaces_babe_types_.rawbabepredigestprimary.md#tostring)
* [toU8a](_interfaces_babe_types_.rawbabepredigestprimary.md#tou8a)
* [typesToMap](_interfaces_babe_types_.rawbabepredigestprimary.md#static-typestomap)
* [with](_interfaces_babe_types_.rawbabepredigestprimary.md#static-with)

## Constructors

###  constructor

\+ **new RawBabePreDigestPrimary**(`registry`: [Registry](_types_.registry.md), `Types`: S, `value`: V | Map‹any, any› | any[] | string, `jsonMap`: Map‹keyof S, string›): *[RawBabePreDigestPrimary](_interfaces_babe_types_.rawbabepredigestprimary.md)*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[constructor](../classes/_codec_struct_.struct.md#constructor)*

*Defined in [packages/types/src/codec/Struct.ts:38](https://github.com/polkadot-js/api/blob/b7eeb992cd/packages/types/src/codec/Struct.ts#L38)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`registry` | [Registry](_types_.registry.md) | - |
`Types` | S | - |
`value` | V &#124; Map‹any, any› &#124; any[] &#124; string |  {} as V |
`jsonMap` | Map‹keyof S, string› |  new Map() |

**Returns:** *[RawBabePreDigestPrimary](_interfaces_babe_types_.rawbabepredigestprimary.md)*

## Properties

###  [Symbol.toStringTag]

• **[Symbol.toStringTag]**: *string*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:130

___

###  authorityIndex

• **authorityIndex**: *[u32](_interfaceregistry_.interfaceregistry.md#u32)*

*Defined in [packages/types/src/interfaces/babe/types.ts:65](https://github.com/polkadot-js/api/blob/b7eeb992cd/packages/types/src/interfaces/babe/types.ts#L65)*

u32

___

###  registry

• **registry**: *[Registry](_types_.registry.md)*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[registry](../classes/_codec_struct_.struct.md#registry)*

*Defined in [packages/types/src/codec/Struct.ts:34](https://github.com/polkadot-js/api/blob/b7eeb992cd/packages/types/src/codec/Struct.ts#L34)*

___

###  slotNumber

• **slotNumber**: *[SlotNumber](_interfaces_babe_types_.slotnumber.md)*

*Defined in [packages/types/src/interfaces/babe/types.ts:67](https://github.com/polkadot-js/api/blob/b7eeb992cd/packages/types/src/interfaces/babe/types.ts#L67)*

SlotNumber

___

###  vrfOutput

• **vrfOutput**: *[VrfData](_interfaces_babe_types_.vrfdata.md)*

*Defined in [packages/types/src/interfaces/babe/types.ts:69](https://github.com/polkadot-js/api/blob/b7eeb992cd/packages/types/src/interfaces/babe/types.ts#L69)*

VrfData

___

###  vrfProof

• **vrfProof**: *[VrfProof](_interfaces_babe_types_.vrfproof.md)*

*Defined in [packages/types/src/interfaces/babe/types.ts:71](https://github.com/polkadot-js/api/blob/b7eeb992cd/packages/types/src/interfaces/babe/types.ts#L71)*

VrfProof

## Accessors

###  Type

• **get Type**(): *E*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[Type](../classes/_codec_struct_.struct.md#type)*

*Defined in [packages/types/src/codec/Struct.ts:158](https://github.com/polkadot-js/api/blob/b7eeb992cd/packages/types/src/codec/Struct.ts#L158)*

**`description`** Returns the Type description to sthe structure

**Returns:** *E*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[encodedLength](../classes/_codec_struct_.struct.md#encodedlength)*

*Defined in [packages/types/src/codec/Struct.ts:171](https://github.com/polkadot-js/api/blob/b7eeb992cd/packages/types/src/codec/Struct.ts#L171)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](_types_.ihash.md)*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[hash](../classes/_codec_struct_.struct.md#hash)*

*Defined in [packages/types/src/codec/Struct.ts:182](https://github.com/polkadot-js/api/blob/b7eeb992cd/packages/types/src/codec/Struct.ts#L182)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[isEmpty](../classes/_codec_struct_.struct.md#isempty)*

*Defined in [packages/types/src/codec/Struct.ts:143](https://github.com/polkadot-js/api/blob/b7eeb992cd/packages/types/src/codec/Struct.ts#L143)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *IterableIterator‹[keyof S, [Codec](_types_.codec.md)]›*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:121

Returns an iterable of entries in the map.

**Returns:** *IterableIterator‹[keyof S, [Codec](_types_.codec.md)]›*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[eq](../classes/_codec_struct_.struct.md#eq)*

*Defined in [packages/types/src/codec/Struct.ts:189](https://github.com/polkadot-js/api/blob/b7eeb992cd/packages/types/src/codec/Struct.ts#L189)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  get

▸ **get**(`name`: keyof S): *[Codec](_types_.codec.md) | undefined*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[get](../classes/_codec_struct_.struct.md#get)*

*Overrides void*

*Defined in [packages/types/src/codec/Struct.ts:197](https://github.com/polkadot-js/api/blob/b7eeb992cd/packages/types/src/codec/Struct.ts#L197)*

**`description`** Returns a specific names entry in the structure

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | keyof S | The name of the entry to retrieve  |

**Returns:** *[Codec](_types_.codec.md) | undefined*

___

###  getAtIndex

▸ **getAtIndex**(`index`: number): *[Codec](_types_.codec.md)*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[getAtIndex](../classes/_codec_struct_.struct.md#getatindex)*

*Defined in [packages/types/src/codec/Struct.ts:204](https://github.com/polkadot-js/api/blob/b7eeb992cd/packages/types/src/codec/Struct.ts#L204)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *[Codec](_types_.codec.md)*

___

###  toArray

▸ **toArray**(): *[Codec](_types_.codec.md)[]*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toArray](../classes/_codec_struct_.struct.md#toarray)*

*Defined in [packages/types/src/codec/Struct.ts:211](https://github.com/polkadot-js/api/blob/b7eeb992cd/packages/types/src/codec/Struct.ts#L211)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](_types_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toHex](../classes/_codec_struct_.struct.md#tohex)*

*Defined in [packages/types/src/codec/Struct.ts:218](https://github.com/polkadot-js/api/blob/b7eeb992cd/packages/types/src/codec/Struct.ts#L218)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](_types_.anyjsonobject.md) | string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toJSON](../classes/_codec_struct_.struct.md#tojson)*

*Defined in [packages/types/src/codec/Struct.ts:225](https://github.com/polkadot-js/api/blob/b7eeb992cd/packages/types/src/codec/Struct.ts#L225)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](_types_.anyjsonobject.md) | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toRawType](../classes/_codec_struct_.struct.md#torawtype)*

*Defined in [packages/types/src/codec/Struct.ts:249](https://github.com/polkadot-js/api/blob/b7eeb992cd/packages/types/src/codec/Struct.ts#L249)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toString](../classes/_codec_struct_.struct.md#tostring)*

*Defined in [packages/types/src/codec/Struct.ts:258](https://github.com/polkadot-js/api/blob/b7eeb992cd/packages/types/src/codec/Struct.ts#L258)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: [BareOpts](../modules/_types_.md#bareopts)): *Uint8Array*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toU8a](../classes/_codec_struct_.struct.md#tou8a)*

*Defined in [packages/types/src/codec/Struct.ts:266](https://github.com/polkadot-js/api/blob/b7eeb992cd/packages/types/src/codec/Struct.ts#L266)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | [BareOpts](../modules/_types_.md#bareopts) | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*

___

### `Static` typesToMap

▸ **typesToMap**(`registry`: [Registry](_types_.registry.md), `Types`: Record‹string, [Constructor](_types_.constructor.md)›): *Record‹string, string›*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[typesToMap](../classes/_codec_struct_.struct.md#static-typestomap)*

*Defined in [packages/types/src/codec/Struct.ts:238](https://github.com/polkadot-js/api/blob/b7eeb992cd/packages/types/src/codec/Struct.ts#L238)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](_types_.registry.md) |
`Types` | Record‹string, [Constructor](_types_.constructor.md)› |

**Returns:** *Record‹string, string›*

___

### `Static` with

▸ **with**<**S**>(`Types`: S): *[Constructor](_types_.constructor.md)‹[Struct](../classes/_codec_struct_.struct.md)‹S››*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[with](../classes/_codec_struct_.struct.md#static-with)*

*Defined in [packages/types/src/codec/Struct.ts:120](https://github.com/polkadot-js/api/blob/b7eeb992cd/packages/types/src/codec/Struct.ts#L120)*

**Type parameters:**

▪ **S**: *TypesDef*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | S |

**Returns:** *[Constructor](_types_.constructor.md)‹[Struct](../classes/_codec_struct_.struct.md)‹S››*
