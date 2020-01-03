[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types"](../modules/_types_.md) › [IExtrinsicImpl](_types_.iextrinsicimpl.md)

# Interface: IExtrinsicImpl

## Hierarchy

* IExtrinsicSignable‹[IExtrinsicImpl](_types_.iextrinsicimpl.md)›

* [Codec](_types_.codec.md)

  ↳ **IExtrinsicImpl**

## Implemented by

* [ExtrinsicV1](_interfaces_runtime_types_.extrinsicv1.md)
* [ExtrinsicV1](../classes/_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md)
* [ExtrinsicV2](_interfaces_runtime_types_.extrinsicv2.md)
* [ExtrinsicV2](../classes/_primitive_extrinsic_v2_extrinsic_.extrinsicv2.md)
* [ExtrinsicV3](_interfaces_runtime_types_.extrinsicv3.md)
* [ExtrinsicV3](../classes/_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md)
* [ExtrinsicV4](_interfaces_runtime_types_.extrinsicv4.md)
* [ExtrinsicV4](../classes/_primitive_extrinsic_v4_extrinsic_.extrinsicv4.md)

## Index

### Properties

* [encodedLength](_types_.iextrinsicimpl.md#encodedlength)
* [hash](_types_.iextrinsicimpl.md#hash)
* [isEmpty](_types_.iextrinsicimpl.md#isempty)
* [method](_types_.iextrinsicimpl.md#method)
* [registry](_types_.iextrinsicimpl.md#registry)
* [signature](_types_.iextrinsicimpl.md#signature)
* [version](_types_.iextrinsicimpl.md#version)

### Methods

* [addSignature](_types_.iextrinsicimpl.md#addsignature)
* [eq](_types_.iextrinsicimpl.md#eq)
* [sign](_types_.iextrinsicimpl.md#sign)
* [toHex](_types_.iextrinsicimpl.md#tohex)
* [toJSON](_types_.iextrinsicimpl.md#tojson)
* [toRawType](_types_.iextrinsicimpl.md#torawtype)
* [toString](_types_.iextrinsicimpl.md#tostring)
* [toU8a](_types_.iextrinsicimpl.md#tou8a)

## Properties

###  encodedLength

• **encodedLength**: *number*

*Inherited from [Codec](_types_.codec.md).[encodedLength](_types_.codec.md#encodedlength)*

*Defined in [packages/types/src/types.ts:75](https://github.com/polkadot-js/api/blob/774f41e6db/packages/types/src/types.ts#L75)*

**`description`** The length of the value when encoded as a Uint8Array

___

###  hash

• **hash**: *[IHash](_types_.ihash.md)*

*Inherited from [Codec](_types_.codec.md).[hash](_types_.codec.md#hash)*

*Defined in [packages/types/src/types.ts:80](https://github.com/polkadot-js/api/blob/774f41e6db/packages/types/src/types.ts#L80)*

**`description`** Returns a hash of the value

___

###  isEmpty

• **isEmpty**: *boolean*

*Inherited from [Codec](_types_.codec.md).[isEmpty](_types_.codec.md#isempty)*

*Defined in [packages/types/src/types.ts:85](https://github.com/polkadot-js/api/blob/774f41e6db/packages/types/src/types.ts#L85)*

**`description`** Checks if the value is an empty value

___

###  method

• **method**: *[Call](_interfaces_runtime_types_.call.md)*

*Defined in [packages/types/src/types.ts:229](https://github.com/polkadot-js/api/blob/774f41e6db/packages/types/src/types.ts#L229)*

___

###  registry

• **registry**: *[Registry](_types_.registry.md)*

*Inherited from [Codec](_types_.codec.md).[registry](_types_.codec.md#registry)*

*Defined in [packages/types/src/types.ts:90](https://github.com/polkadot-js/api/blob/774f41e6db/packages/types/src/types.ts#L90)*

**`description`** The registry associated with this object

___

###  signature

• **signature**: *[IExtrinsicSignature](_types_.iextrinsicsignature.md)*

*Defined in [packages/types/src/types.ts:230](https://github.com/polkadot-js/api/blob/774f41e6db/packages/types/src/types.ts#L230)*

___

###  version

• **version**: *number*

*Defined in [packages/types/src/types.ts:231](https://github.com/polkadot-js/api/blob/774f41e6db/packages/types/src/types.ts#L231)*

## Methods

###  addSignature

▸ **addSignature**(`signer`: [Address](_interfaces_runtime_types_.address.md) | Uint8Array | string, `signature`: Uint8Array | string, `payload`: [ExtrinsicPayloadValue](_types_.extrinsicpayloadvalue.md) | Uint8Array | string): *[IExtrinsicImpl](_types_.iextrinsicimpl.md)*

*Inherited from void*

*Defined in [packages/types/src/types.ts:223](https://github.com/polkadot-js/api/blob/774f41e6db/packages/types/src/types.ts#L223)*

**Parameters:**

Name | Type |
------ | ------ |
`signer` | [Address](_interfaces_runtime_types_.address.md) &#124; Uint8Array &#124; string |
`signature` | Uint8Array &#124; string |
`payload` | [ExtrinsicPayloadValue](_types_.extrinsicpayloadvalue.md) &#124; Uint8Array &#124; string |

**Returns:** *[IExtrinsicImpl](_types_.iextrinsicimpl.md)*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Codec](_types_.codec.md).[eq](_types_.codec.md#eq)*

*Defined in [packages/types/src/types.ts:95](https://github.com/polkadot-js/api/blob/774f41e6db/packages/types/src/types.ts#L95)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  sign

▸ **sign**(`account`: [IKeyringPair](_types_.ikeyringpair.md), `options`: [SignatureOptions](_types_.signatureoptions.md)): *[IExtrinsicImpl](_types_.iextrinsicimpl.md)*

*Inherited from void*

*Defined in [packages/types/src/types.ts:224](https://github.com/polkadot-js/api/blob/774f41e6db/packages/types/src/types.ts#L224)*

**Parameters:**

Name | Type |
------ | ------ |
`account` | [IKeyringPair](_types_.ikeyringpair.md) |
`options` | [SignatureOptions](_types_.signatureoptions.md) |

**Returns:** *[IExtrinsicImpl](_types_.iextrinsicimpl.md)*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Inherited from [Codec](_types_.codec.md).[toHex](_types_.codec.md#tohex)*

*Defined in [packages/types/src/types.ts:100](https://github.com/polkadot-js/api/blob/774f41e6db/packages/types/src/types.ts#L100)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

**Parameters:**

Name | Type |
------ | ------ |
`isLe?` | undefined &#124; false &#124; true |

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_.md#anyjson)*

*Inherited from [Codec](_types_.codec.md).[toJSON](_types_.codec.md#tojson)*

*Defined in [packages/types/src/types.ts:105](https://github.com/polkadot-js/api/blob/774f41e6db/packages/types/src/types.ts#L105)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Codec](_types_.codec.md).[toRawType](_types_.codec.md#torawtype)*

*Defined in [packages/types/src/types.ts:110](https://github.com/polkadot-js/api/blob/774f41e6db/packages/types/src/types.ts#L110)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Codec](_types_.codec.md).[toString](_types_.codec.md#tostring)*

*Defined in [packages/types/src/types.ts:115](https://github.com/polkadot-js/api/blob/774f41e6db/packages/types/src/types.ts#L115)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: [BareOpts](../modules/_types_.md#bareopts)): *Uint8Array*

*Inherited from [Codec](_types_.codec.md).[toU8a](_types_.codec.md#tou8a)*

*Defined in [packages/types/src/types.ts:121](https://github.com/polkadot-js/api/blob/774f41e6db/packages/types/src/types.ts#L121)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | [BareOpts](../modules/_types_.md#bareopts) | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*
