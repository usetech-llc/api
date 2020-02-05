[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["primitive/Generic/Call"](../modules/_primitive_generic_call_.md) › [Call](_primitive_generic_call_.call.md)

# Class: Call <**S, T, V, E**>

**`name`** Call

**`description`** 
Extrinsic function descriptor, as defined in
[https://github.com/paritytech/wiki/blob/master/Extrinsic.md#the-extrinsic-format-for-node](https://github.com/paritytech/wiki/blob/master/Extrinsic.md#the-extrinsic-format-for-node).

## Type parameters

▪ **S**: *TypesDef*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  ↳ [Struct](_codec_struct_.struct.md)

  ↳ **Call**

## Implements

* Codec
* IMethod

## Index

### Constructors

* [constructor](_primitive_generic_call_.call.md#constructor)

### Properties

* [registry](_primitive_generic_call_.call.md#registry)

### Accessors

* [Type](_primitive_generic_call_.call.md#type)
* [args](_primitive_generic_call_.call.md#args)
* [argsDef](_primitive_generic_call_.call.md#argsdef)
* [callIndex](_primitive_generic_call_.call.md#callindex)
* [data](_primitive_generic_call_.call.md#data)
* [defKeys](_primitive_generic_call_.call.md#defkeys)
* [encodedLength](_primitive_generic_call_.call.md#encodedlength)
* [hasOrigin](_primitive_generic_call_.call.md#hasorigin)
* [hash](_primitive_generic_call_.call.md#hash)
* [isEmpty](_primitive_generic_call_.call.md#isempty)
* [meta](_primitive_generic_call_.call.md#meta)
* [methodName](_primitive_generic_call_.call.md#methodname)
* [sectionName](_primitive_generic_call_.call.md#sectionname)

### Methods

* [eq](_primitive_generic_call_.call.md#eq)
* [get](_primitive_generic_call_.call.md#get)
* [getAtIndex](_primitive_generic_call_.call.md#getatindex)
* [toArray](_primitive_generic_call_.call.md#toarray)
* [toHex](_primitive_generic_call_.call.md#tohex)
* [toJSON](_primitive_generic_call_.call.md#tojson)
* [toRawType](_primitive_generic_call_.call.md#torawtype)
* [toString](_primitive_generic_call_.call.md#tostring)
* [toU8a](_primitive_generic_call_.call.md#tou8a)
* [filterOrigin](_primitive_generic_call_.call.md#static-filterorigin)
* [typesToMap](_primitive_generic_call_.call.md#static-typestomap)
* [with](_primitive_generic_call_.call.md#static-with)

## Constructors

###  constructor

\+ **new Call**(`registry`: Registry, `value`: any, `meta?`: [FunctionMetadataLatest](../interfaces/_interfaceregistry_.interfaceregistry.md#functionmetadatalatest)): *[Call](_primitive_generic_call_.call.md)*

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [packages/types/src/primitive/Generic/Call.ts:42](https://github.com/polkadot-js/api/blob/2de7a3c130/packages/types/src/primitive/Generic/Call.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | Registry |
`value` | any |
`meta?` | [FunctionMetadataLatest](../interfaces/_interfaceregistry_.interfaceregistry.md#functionmetadatalatest) |

**Returns:** *[Call](_primitive_generic_call_.call.md)*

## Properties

###  registry

• **registry**: *Registry*

*Inherited from [Struct](_codec_struct_.struct.md).[registry](_codec_struct_.struct.md#registry)*

*Defined in [packages/types/src/codec/Struct.ts:34](https://github.com/polkadot-js/api/blob/2de7a3c130/packages/types/src/codec/Struct.ts#L34)*

## Accessors

###  Type

• **get Type**(): *E*

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [packages/types/src/codec/Struct.ts:167](https://github.com/polkadot-js/api/blob/2de7a3c130/packages/types/src/codec/Struct.ts#L167)*

**`description`** Returns the Type description to sthe structure

**Returns:** *E*

___

###  args

• **get args**(): *Codec[]*

*Defined in [packages/types/src/primitive/Generic/Call.ts:144](https://github.com/polkadot-js/api/blob/2de7a3c130/packages/types/src/primitive/Generic/Call.ts#L144)*

**`description`** The arguments for the function call

**Returns:** *Codec[]*

___

###  argsDef

• **get argsDef**(): *ArgsDef*

*Defined in [packages/types/src/primitive/Generic/Call.ts:152](https://github.com/polkadot-js/api/blob/2de7a3c130/packages/types/src/primitive/Generic/Call.ts#L152)*

**`description`** The argument definitions

**Returns:** *ArgsDef*

___

###  callIndex

• **get callIndex**(): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Defined in [packages/types/src/primitive/Generic/Call.ts:159](https://github.com/polkadot-js/api/blob/2de7a3c130/packages/types/src/primitive/Generic/Call.ts#L159)*

**`description`** The encoded `[sectionIndex, methodIndex]` identifier

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

___

###  data

• **get data**(): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Defined in [packages/types/src/primitive/Generic/Call.ts:166](https://github.com/polkadot-js/api/blob/2de7a3c130/packages/types/src/primitive/Generic/Call.ts#L166)*

**`description`** The encoded data

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

___

###  defKeys

• **get defKeys**(): *string[]*

*Inherited from [Struct](_codec_struct_.struct.md).[defKeys](_codec_struct_.struct.md#defkeys)*

*Defined in [packages/types/src/codec/Struct.ts:145](https://github.com/polkadot-js/api/blob/2de7a3c130/packages/types/src/codec/Struct.ts#L145)*

**`description`** The available keys for this enum

**Returns:** *string[]*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [packages/types/src/codec/Struct.ts:180](https://github.com/polkadot-js/api/blob/2de7a3c130/packages/types/src/codec/Struct.ts#L180)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hasOrigin

• **get hasOrigin**(): *boolean*

*Defined in [packages/types/src/primitive/Generic/Call.ts:173](https://github.com/polkadot-js/api/blob/2de7a3c130/packages/types/src/primitive/Generic/Call.ts#L173)*

**`description`** `true` if the `Origin` type is on the method (extrinsic method)

**Returns:** *boolean*

___

###  hash

• **get hash**(): *IHash*

*Inherited from [Struct](_codec_struct_.struct.md).[hash](_codec_struct_.struct.md#hash)*

*Defined in [packages/types/src/codec/Struct.ts:191](https://github.com/polkadot-js/api/blob/2de7a3c130/packages/types/src/codec/Struct.ts#L191)*

**`description`** returns a hash of the contents

**Returns:** *IHash*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [packages/types/src/codec/Struct.ts:152](https://github.com/polkadot-js/api/blob/2de7a3c130/packages/types/src/codec/Struct.ts#L152)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  meta

• **get meta**(): *FunctionMetadataLatest*

*Defined in [packages/types/src/primitive/Generic/Call.ts:182](https://github.com/polkadot-js/api/blob/2de7a3c130/packages/types/src/primitive/Generic/Call.ts#L182)*

**`description`** The [[FunctionMetadata]]

**Returns:** *FunctionMetadataLatest*

___

###  methodName

• **get methodName**(): *string*

*Defined in [packages/types/src/primitive/Generic/Call.ts:189](https://github.com/polkadot-js/api/blob/2de7a3c130/packages/types/src/primitive/Generic/Call.ts#L189)*

**`description`** Returns the name of the method

**Returns:** *string*

___

###  sectionName

• **get sectionName**(): *string*

*Defined in [packages/types/src/primitive/Generic/Call.ts:196](https://github.com/polkadot-js/api/blob/2de7a3c130/packages/types/src/primitive/Generic/Call.ts#L196)*

**`description`** Returns the module containing the method

**Returns:** *string*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [packages/types/src/codec/Struct.ts:198](https://github.com/polkadot-js/api/blob/2de7a3c130/packages/types/src/codec/Struct.ts#L198)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  get

▸ **get**(`name`: keyof S): *Codec | undefined*

*Inherited from [Struct](_codec_struct_.struct.md).[get](_codec_struct_.struct.md#get)*

*Overrides [BTreeMap](_codec_btreemap_.btreemap.md).[get](_codec_btreemap_.btreemap.md#get)*

*Defined in [packages/types/src/codec/Struct.ts:206](https://github.com/polkadot-js/api/blob/2de7a3c130/packages/types/src/codec/Struct.ts#L206)*

**`description`** Returns a specific names entry in the structure

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | keyof S | The name of the entry to retrieve  |

**Returns:** *Codec | undefined*

___

###  getAtIndex

▸ **getAtIndex**(`index`: number): *Codec*

*Inherited from [Struct](_codec_struct_.struct.md).[getAtIndex](_codec_struct_.struct.md#getatindex)*

*Defined in [packages/types/src/codec/Struct.ts:213](https://github.com/polkadot-js/api/blob/2de7a3c130/packages/types/src/codec/Struct.ts#L213)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *Codec*

___

###  toArray

▸ **toArray**(): *Codec[]*

*Inherited from [Struct](_codec_struct_.struct.md).[toArray](_codec_struct_.struct.md#toarray)*

*Defined in [packages/types/src/codec/Struct.ts:220](https://github.com/polkadot-js/api/blob/2de7a3c130/packages/types/src/codec/Struct.ts#L220)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *Codec[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [packages/types/src/codec/Struct.ts:227](https://github.com/polkadot-js/api/blob/2de7a3c130/packages/types/src/codec/Struct.ts#L227)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *AnyJsonObject | string*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [packages/types/src/codec/Struct.ts:234](https://github.com/polkadot-js/api/blob/2de7a3c130/packages/types/src/codec/Struct.ts#L234)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *AnyJsonObject | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Overrides [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [packages/types/src/primitive/Generic/Call.ts:203](https://github.com/polkadot-js/api/blob/2de7a3c130/packages/types/src/primitive/Generic/Call.ts#L203)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [packages/types/src/codec/Struct.ts:267](https://github.com/polkadot-js/api/blob/2de7a3c130/packages/types/src/codec/Struct.ts#L267)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: BareOpts): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [packages/types/src/codec/Struct.ts:275](https://github.com/polkadot-js/api/blob/2de7a3c130/packages/types/src/codec/Struct.ts#L275)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | BareOpts | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

___

### `Static` filterOrigin

▸ **filterOrigin**(`meta?`: [FunctionMetadataLatest](../interfaces/_interfaceregistry_.interfaceregistry.md#functionmetadatalatest)): *FunctionArgumentMetadataLatest[]*

*Defined in [packages/types/src/primitive/Generic/Call.ts:116](https://github.com/polkadot-js/api/blob/2de7a3c130/packages/types/src/primitive/Generic/Call.ts#L116)*

**Parameters:**

Name | Type |
------ | ------ |
`meta?` | [FunctionMetadataLatest](../interfaces/_interfaceregistry_.interfaceregistry.md#functionmetadatalatest) |

**Returns:** *FunctionArgumentMetadataLatest[]*

___

### `Static` typesToMap

▸ **typesToMap**(`registry`: Registry, `Types`: Record‹string, Constructor›): *Record‹string, string›*

*Inherited from [Struct](_codec_struct_.struct.md).[typesToMap](_codec_struct_.struct.md#static-typestomap)*

*Defined in [packages/types/src/codec/Struct.ts:247](https://github.com/polkadot-js/api/blob/2de7a3c130/packages/types/src/codec/Struct.ts#L247)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | Registry |
`Types` | Record‹string, Constructor› |

**Returns:** *Record‹string, string›*

___

### `Static` with

▸ **with**<**S**>(`Types`: S): *Constructor‹[Struct](_codec_struct_.struct.md)‹S››*

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#static-with)*

*Defined in [packages/types/src/codec/Struct.ts:122](https://github.com/polkadot-js/api/blob/2de7a3c130/packages/types/src/codec/Struct.ts#L122)*

**Type parameters:**

▪ **S**: *TypesDef*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | S |

**Returns:** *Constructor‹[Struct](_codec_struct_.struct.md)‹S››*
