[Polkadot JS API](README.md) › [Globals](globals.md)

# Polkadot JS API

# @polkadot/types

Implementation of the types and their (de-)serialisation via SCALE codec.<br>
On the Rust side, the codec types and primitive types are implemented via the [parity-codec](https://github.com/paritytech/parity-codec).

## Codec types

These are the base types of the codec. They are typically not used directly, but rather inherited from to create specific types. They are the building blocks for declaring custom types:

| **Types** | |
| --- | --- |
| [Compact](enums/_codec_create_types_.typedefinfo.md#compact) | A compact length-encoding codec wrapper. Mostly used by other types to add length-prefixed encoding |
| [Enum](classes/_codec_enum_.enum.md) | A codec wrapper for an enum. Enums are encoded as a single byte, where the byte is a zero-indexed value |
| [Int](classes/_codec_int_.int.md) | A generic signed integer codec |
| [Option](classes/_codec_option_.option.md) | An Option is an optional field. The first byte indicates that there is a value to follow |
| [Set](classes/_codec_btreeset_.btreeset.md#static-set) | An Set is an array of string values, represented an an encoded type by a bitwise representation of the values |
| [Struct](classes/_codec_struct_.struct.md) | A Struct defines an Object with key-value pairs - where the values are Codec values. |
| [Tuple](classes/_codec_tuple_.tuple.md) | A Tuple defines an anonymous fixed-length array, where each element has its own type |
| [Raw](classes/_codec_raw_.raw.md) |  A basic wrapper around Uint8Array. It will consume the full Uint8Array as passed to it |
| [U8aFixed](classes/_codec_u8afixed_.u8afixed.md) | A U8a that manages a a sequence of bytes up to the specified bitLength |
| [UInt](classes/_codec_uint_.uint.md) | A generic unsigned integer codec. It handles the encoding and decoding of Little Endian encoded numbers in Substrate |
| [Vec](classes/_codec_vec_.vec.md) | This manages codec arrays. Internally it keeps track of the length (as decoded) |
| [VecAny](classes/_codec_vecany_.vecany.md) | This manages codec arrays, assuming that the inputs are already of type Codec |

## Primitive types

These primitive types are available:

| **Types** | |
| --- | --- |
| [AccountId](interfaces/_interfaces_runtime_types_.accountid.md) | A wrapper around an AccountId/PublicKey representation |
| [AccountIndex](interfaces/_interfaces_runtime_types_.accountindex.md) | A wrapper around an AccountIndex, which is a shortened, variable-length encoding for an Account |
| [Address](interfaces/_interfaces_runtime_types_.address.md) | A wrapper around an AccountId and/or AccountIndex that is encoded with a prefix |
| [bool](interfaces/_interfaceregistry_.interfaceregistry.md#bool) | Representation for a boolean value in the system |
| [Bytes](classes/_primitive_bytes_.bytes.md) | A Bytes wrapper for `Vec<u8>` |
| [Call](interfaces/_interfaces_runtime_types_.call.md) | Extrinsic function descriptor, as defined in [the extrinsic format for a node](https://github.com/paritytech/wiki/blob/master/Extrinsic.md#the-extrinsic-format-for-node) |
| [Event](interfaces/_interfaces_system_types_.event.md) | Wrapper for the actual data that forms part of an [Event](interfaces/_interfaces_system_types_.event.md) |
| [EventRecord](interfaces/_interfaces_system_types_.eventrecord.md) | A record for an [Event](interfaces/_interfaces_system_types_.event.md) (as specified by [[Metadata]]) with the specific [Phase](interfaces/_interfaces_system_types_.phase.md) of application |
| [Extrinsic](interfaces/_interfaces_runtime_types_.extrinsic.md) | Representation of an Extrinsic in the system |
| [ExtrinsicEra](interfaces/_interfaces_runtime_types_.extrinsicera.md) | The era for an extrinsic, indicating either a mortal or immortal extrinsic |
| [ExtrinsicPayload](interfaces/_interfaces_runtime_types_.extrinsicpayload.md) | A signing payload for an [Extrinsic](interfaces/_interfaces_runtime_types_.extrinsic.md). For the final encoding, it is variable length based on the contents included |
| [H160](classes/_primitive_h160_.h160.md) | Hash containing 160 bits (20 bytes), typically used in blocks, extrinsics and as a sane default |
| [H256](classes/_primitive_h256_.h256.md) | Hash containing 256 bits (32 bytes), typically used in blocks, extrinsics and as a sane default |
| [H512](classes/_primitive_h512_.h512.md) | Hash containing 512 bits (64 bytes), typically used for signatures |
| [Hash](interfaces/_interfaces_runtime_types_.hash.md) | The default hash that is used accross the system. It is just a thin wrapper around [H256](classes/_primitive_h256_.h256.md)
| [i8](interfaces/_interfaceregistry_.interfaceregistry.md#i8) | An 8-bit signed integer |
| [i16](interfaces/_interfaceregistry_.interfaceregistry.md#i16) | A 16-bit signed integer |
| [i32](interfaces/_interfaceregistry_.interfaceregistry.md#i32) | A 32-bit signed integer |
| [i64](interfaces/_interfaceregistry_.interfaceregistry.md#i64) | A 64-bit signed integer |
| [i128](interfaces/_interfaceregistry_.interfaceregistry.md#i128) | A 128-bit signed integer |
| [i256](interfaces/_interfaceregistry_.interfaceregistry.md#i256) | A 256-bit signed integer |
| [Moment](interfaces/_interfaces_runtime_types_.moment.md) | A wrapper around seconds/timestamps. Internally the representation only has second precicion (aligning with Rust) |
| [Null](classes/_primitive_null_.null.md) | Implements a type that does not contain anything (apart from `null`) |
| [Signature](interfaces/_interfaces_runtime_types_.signature.md) | The default signature that is used accross the system |
| [StorageData](classes/_primitive_storagedata_.storagedata.md) | Data retrieved via Storage queries and data for key-value pairs |
| [StorageKey](classes/_primitive_storagekey_.storagekey.md) |  A representation of a storage key (typically hashed) in the system |
| [Text](classes/_primitive_text_.text.md) | This is a string wrapper, along with the length. |
| [Type](classes/_codec_struct_.struct.md#type) | This is a extended version of String, specifically to handle types |
| [u8](interfaces/_interfaceregistry_.interfaceregistry.md#u8) | An 8-bit unsigned integer |
| [u16](interfaces/_interfaceregistry_.interfaceregistry.md#u16) | A 16-bit unsigned integer |
| [u32](interfaces/_interfaceregistry_.interfaceregistry.md#u32) | A 32-bit unsigned integer |
| [u64](interfaces/_interfaceregistry_.interfaceregistry.md#u64) | A 64-bit unsigned integer |
| [u128](interfaces/_interfaceregistry_.interfaceregistry.md#u128) | A 128-bit unsigned integer |
| [u256](interfaces/_interfaceregistry_.interfaceregistry.md#u256) | A 256-bit unsigned integer |
