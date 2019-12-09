(window.webpackJsonp=window.webpackJsonp||[]).push([[330],{526:function(e,t,a){"use strict";a.r(t);var s=a(0),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"json-rpc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#json-rpc"}},[e._v("#")]),e._v(" JSON-RPC")]),e._v(" "),a("p",[e._v("The following sections contain RPC methods that are Remote Calls available by default and allow you to interact with the actual node, query, and submit.")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[a("a",{attrs:{href:"#account"}},[e._v("account")])])])]),e._v(" "),a("li",[a("p",[a("strong",[a("a",{attrs:{href:"#author"}},[e._v("author")])])])]),e._v(" "),a("li",[a("p",[a("strong",[a("a",{attrs:{href:"#chain"}},[e._v("chain")])])])]),e._v(" "),a("li",[a("p",[a("strong",[a("a",{attrs:{href:"#contracts"}},[e._v("contracts")])])])]),e._v(" "),a("li",[a("p",[a("strong",[a("a",{attrs:{href:"#payment"}},[e._v("payment")])])])]),e._v(" "),a("li",[a("p",[a("strong",[a("a",{attrs:{href:"#rpc"}},[e._v("rpc")])])])]),e._v(" "),a("li",[a("p",[a("strong",[a("a",{attrs:{href:"#state"}},[e._v("state")])])])]),e._v(" "),a("li",[a("p",[a("strong",[a("a",{attrs:{href:"#system"}},[e._v("system")])])])])]),e._v(" "),a("hr"),e._v(" "),a("h2",{attrs:{id:"account"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#account"}},[e._v("#")]),e._v(" account")]),e._v(" "),a("p",[a("em",[e._v("(Optional) Methods that retrieves account-specific information")])]),e._v(" "),a("h3",{attrs:{id:"nextindex-accountid-accountid-index"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nextindex-accountid-accountid-index"}},[e._v("#")]),e._v(" nextIndex(accountId: "),a("code",[e._v("AccountId")]),e._v("): "),a("code",[e._v("Index")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("jsonrpc")]),e._v(": account_nextIndex")]),e._v(" "),a("li",[a("strong",[e._v("interface")]),e._v(": api.rpc.account.nextIndex")]),e._v(" "),a("li",[a("strong",[e._v("summary")]),e._v(": Retrieves the next accountIndex as available on the node")])]),e._v(" "),a("hr"),e._v(" "),a("h2",{attrs:{id:"author"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#author"}},[e._v("#")]),e._v(" author")]),e._v(" "),a("p",[a("em",[e._v("Authoring of network items")])]),e._v(" "),a("h3",{attrs:{id:"insertkey-keytype-text-suri-text-publickey-bytes-bytes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#insertkey-keytype-text-suri-text-publickey-bytes-bytes"}},[e._v("#")]),e._v(" insertKey(keyType: "),a("code",[e._v("Text")]),e._v(", suri: "),a("code",[e._v("Text")]),e._v(", publicKey: "),a("code",[e._v("Bytes")]),e._v("): "),a("code",[e._v("Bytes")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("jsonrpc")]),e._v(": author_insertKey")]),e._v(" "),a("li",[a("strong",[e._v("interface")]),e._v(": api.rpc.author.insertKey")]),e._v(" "),a("li",[a("strong",[e._v("summary")]),e._v(": Insert a key into the keystore.")])]),e._v(" "),a("h3",{attrs:{id:"pendingextrinsics-vec-extrinsic"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pendingextrinsics-vec-extrinsic"}},[e._v("#")]),e._v(" pendingExtrinsics(): "),a("code",[e._v("Vec<Extrinsic>")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("jsonrpc")]),e._v(": author_pendingExtrinsics")]),e._v(" "),a("li",[a("strong",[e._v("interface")]),e._v(": api.rpc.author.pendingExtrinsics")]),e._v(" "),a("li",[a("strong",[e._v("summary")]),e._v(": Returns all pending extrinsics, potentially grouped by sender")])]),e._v(" "),a("h3",{attrs:{id:"removeextrinsic-bytesorhash-vec-extrinsicorhash-vec-hash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#removeextrinsic-bytesorhash-vec-extrinsicorhash-vec-hash"}},[e._v("#")]),e._v(" removeExtrinsic(bytesOrHash: "),a("code",[e._v("Vec<ExtrinsicOrHash>")]),e._v("): "),a("code",[e._v("Vec<Hash>")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("jsonrpc")]),e._v(": author_removeExtrinsic")]),e._v(" "),a("li",[a("strong",[e._v("interface")]),e._v(": api.rpc.author.removeExtrinsic")]),e._v(" "),a("li",[a("strong",[e._v("summary")]),e._v(": Remove given extrinsic from the pool and temporarily ban it to prevent reimporting")])]),e._v(" "),a("h3",{attrs:{id:"rotatekeys-bytes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rotatekeys-bytes"}},[e._v("#")]),e._v(" rotateKeys(): "),a("code",[e._v("Bytes")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("jsonrpc")]),e._v(": author_rotateKeys")]),e._v(" "),a("li",[a("strong",[e._v("interface")]),e._v(": api.rpc.author.rotateKeys")]),e._v(" "),a("li",[a("strong",[e._v("summary")]),e._v(": Generate new session keys and returns the corresponding public keys")])]),e._v(" "),a("h3",{attrs:{id:"submitandwatchextrinsic-extrinsic-extrinsic-extrinsicstatus"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#submitandwatchextrinsic-extrinsic-extrinsic-extrinsicstatus"}},[e._v("#")]),e._v(" submitAndWatchExtrinsic(extrinsic: "),a("code",[e._v("Extrinsic")]),e._v("): "),a("code",[e._v("ExtrinsicStatus")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("jsonrpc")]),e._v(": author_submitAndWatchExtrinsic")]),e._v(" "),a("li",[a("strong",[e._v("interface")]),e._v(": api.rpc.author.submitAndWatchExtrinsic")]),e._v(" "),a("li",[a("strong",[e._v("summary")]),e._v(": Submit and subscribe to watch an extrinsic until unsubscribed")])]),e._v(" "),a("h3",{attrs:{id:"submitextrinsic-extrinsic-extrinsic-hash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#submitextrinsic-extrinsic-extrinsic-hash"}},[e._v("#")]),e._v(" submitExtrinsic(extrinsic: "),a("code",[e._v("Extrinsic")]),e._v("): "),a("code",[e._v("Hash")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("jsonrpc")]),e._v(": author_submitExtrinsic")]),e._v(" "),a("li",[a("strong",[e._v("interface")]),e._v(": api.rpc.author.submitExtrinsic")]),e._v(" "),a("li",[a("strong",[e._v("summary")]),e._v(": Submit a fully formatted extrinsic for block inclusion")])]),e._v(" "),a("hr"),e._v(" "),a("h2",{attrs:{id:"chain"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chain"}},[e._v("#")]),e._v(" chain")]),e._v(" "),a("p",[a("em",[e._v("Retrieval of chain data")])]),e._v(" "),a("h3",{attrs:{id:"getblock-hash-blockhash-signedblock"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getblock-hash-blockhash-signedblock"}},[e._v("#")]),e._v(" getBlock(hash?: "),a("code",[e._v("BlockHash")]),e._v("): "),a("code",[e._v("SignedBlock")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("jsonrpc")]),e._v(": chain_getBlock")]),e._v(" "),a("li",[a("strong",[e._v("interface")]),e._v(": api.rpc.chain.getBlock")]),e._v(" "),a("li",[a("strong",[e._v("summary")]),e._v(": Get header and body of a relay chain block")])]),e._v(" "),a("h3",{attrs:{id:"getblockhash-blocknumber-blocknumber-blockhash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getblockhash-blocknumber-blocknumber-blockhash"}},[e._v("#")]),e._v(" getBlockHash(blockNumber?: "),a("code",[e._v("BlockNumber")]),e._v("): "),a("code",[e._v("BlockHash")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("jsonrpc")]),e._v(": chain_getBlockHash")]),e._v(" "),a("li",[a("strong",[e._v("interface")]),e._v(": api.rpc.chain.getBlockHash")]),e._v(" "),a("li",[a("strong",[e._v("summary")]),e._v(": Get the block hash for a specific block")])]),e._v(" "),a("h3",{attrs:{id:"getfinalizedhead-blockhash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getfinalizedhead-blockhash"}},[e._v("#")]),e._v(" getFinalizedHead(): "),a("code",[e._v("BlockHash")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("jsonrpc")]),e._v(": chain_getFinalizedHead")]),e._v(" "),a("li",[a("strong",[e._v("interface")]),e._v(": api.rpc.chain.getFinalizedHead")]),e._v(" "),a("li",[a("strong",[e._v("summary")]),e._v(": Get hash of the last finalized block in the canon chain")])]),e._v(" "),a("h3",{attrs:{id:"getheader-hash-blockhash-header"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getheader-hash-blockhash-header"}},[e._v("#")]),e._v(" getHeader(hash?: "),a("code",[e._v("BlockHash")]),e._v("): "),a("code",[e._v("Header")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("jsonrpc")]),e._v(": chain_getHeader")]),e._v(" "),a("li",[a("strong",[e._v("interface")]),e._v(": api.rpc.chain.getHeader")]),e._v(" "),a("li",[a("strong",[e._v("summary")]),e._v(": Retrieves the header for a specific block")])]),e._v(" "),a("h3",{attrs:{id:"subscribefinalizedheads-header"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#subscribefinalizedheads-header"}},[e._v("#")]),e._v(" subscribeFinalizedHeads(): "),a("code",[e._v("Header")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("jsonrpc")]),e._v(": chain_subscribeFinalizedHeads")]),e._v(" "),a("li",[a("strong",[e._v("interface")]),e._v(": api.rpc.chain.subscribeFinalizedHeads")]),e._v(" "),a("li",[a("strong",[e._v("summary")]),e._v(": Retrieves the best finalized header via subscription")])]),e._v(" "),a("h3",{attrs:{id:"subscribenewheads-header"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#subscribenewheads-header"}},[e._v("#")]),e._v(" subscribeNewHeads(): "),a("code",[e._v("Header")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("jsonrpc")]),e._v(": chain_subscribeNewHeads")]),e._v(" "),a("li",[a("strong",[e._v("interface")]),e._v(": api.rpc.chain.subscribeNewHeads")]),e._v(" "),a("li",[a("strong",[e._v("summary")]),e._v(": Retrieves the best header via subscription")])]),e._v(" "),a("hr"),e._v(" "),a("h2",{attrs:{id:"contracts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contracts"}},[e._v("#")]),e._v(" contracts")]),e._v(" "),a("p",[a("em",[e._v("(Optional) Methods that performs actions on contracts")])]),e._v(" "),a("h3",{attrs:{id:"call-callrequest-contractcallrequest-at-blockhash-contractexecresult"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#call-callrequest-contractcallrequest-at-blockhash-contractexecresult"}},[e._v("#")]),e._v(" call(callRequest: "),a("code",[e._v("ContractCallRequest")]),e._v(", at?: "),a("code",[e._v("BlockHash")]),e._v("): "),a("code",[e._v("ContractExecResult")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("jsonrpc")]),e._v(": contracts_call")]),e._v(" "),a("li",[a("strong",[e._v("interface")]),e._v(": api.rpc.contracts.call")]),e._v(" "),a("li",[a("strong",[e._v("summary")]),e._v(": Executes a call to a contract")])]),e._v(" "),a("h3",{attrs:{id:"getstorage-address-accountid-key-h256-at-blockhash-option-bytes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getstorage-address-accountid-key-h256-at-blockhash-option-bytes"}},[e._v("#")]),e._v(" getStorage(address: "),a("code",[e._v("AccountId")]),e._v(", key: "),a("code",[e._v("H256")]),e._v(", at?: "),a("code",[e._v("BlockHash")]),e._v("): "),a("code",[e._v("Option<Bytes>")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("jsonrpc")]),e._v(": contracts_getStorage")]),e._v(" "),a("li",[a("strong",[e._v("interface")]),e._v(": api.rpc.contracts.getStorage")]),e._v(" "),a("li",[a("strong",[e._v("summary")]),e._v(": Returns the value under a specified storage key in a contract")])]),e._v(" "),a("hr"),e._v(" "),a("h2",{attrs:{id:"payment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#payment"}},[e._v("#")]),e._v(" payment")]),e._v(" "),a("p",[a("em",[e._v("Methods that retrieves payment information, e.g. fee calculations")])]),e._v(" "),a("h3",{attrs:{id:"queryinfo-extrinsic-bytes-at-blockhash-runtimedispatchinfo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#queryinfo-extrinsic-bytes-at-blockhash-runtimedispatchinfo"}},[e._v("#")]),e._v(" queryInfo(extrinsic: "),a("code",[e._v("Bytes")]),e._v(", at?: "),a("code",[e._v("BlockHash")]),e._v("): "),a("code",[e._v("RuntimeDispatchInfo")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("jsonrpc")]),e._v(": payment_queryInfo")]),e._v(" "),a("li",[a("strong",[e._v("interface")]),e._v(": api.rpc.payment.queryInfo")]),e._v(" "),a("li",[a("strong",[e._v("summary")]),e._v(": Retrieves the fee information for an encoded extrinsic")])]),e._v(" "),a("hr"),e._v(" "),a("h2",{attrs:{id:"rpc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rpc"}},[e._v("#")]),e._v(" rpc")]),e._v(" "),a("p",[a("em",[e._v("Retrieves information about the RPC endpoints")])]),e._v(" "),a("h3",{attrs:{id:"methods-rpcmethods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#methods-rpcmethods"}},[e._v("#")]),e._v(" methods(): "),a("code",[e._v("RpcMethods")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("jsonrpc")]),e._v(": rpc_methods")]),e._v(" "),a("li",[a("strong",[e._v("interface")]),e._v(": api.rpc.rpc.methods")]),e._v(" "),a("li",[a("strong",[e._v("summary")]),e._v(": Retrieves the list of RPC methods that are exposed by the node")])]),e._v(" "),a("hr"),e._v(" "),a("h2",{attrs:{id:"state"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#state"}},[e._v("#")]),e._v(" state")]),e._v(" "),a("p",[a("em",[e._v("Query of state")])]),e._v(" "),a("h3",{attrs:{id:"call-method-text-data-bytes-at-blockhash-bytes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#call-method-text-data-bytes-at-blockhash-bytes"}},[e._v("#")]),e._v(" call(method: "),a("code",[e._v("Text")]),e._v(", data: "),a("code",[e._v("Bytes")]),e._v(", at?: "),a("code",[e._v("BlockHash")]),e._v("): "),a("code",[e._v("Bytes")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("jsonrpc")]),e._v(": state_call")]),e._v(" "),a("li",[a("strong",[e._v("interface")]),e._v(": api.rpc.state.call")]),e._v(" "),a("li",[a("strong",[e._v("summary")]),e._v(": Perform a call to a builtin on the chain")])]),e._v(" "),a("h3",{attrs:{id:"getchildkeys-childstoragekey-storagekey-key-storagekey-at-blockhash-vec-storagekey"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getchildkeys-childstoragekey-storagekey-key-storagekey-at-blockhash-vec-storagekey"}},[e._v("#")]),e._v(" getChildKeys(childStorageKey: "),a("code",[e._v("StorageKey")]),e._v(", key: "),a("code",[e._v("StorageKey")]),e._v(", at?: "),a("code",[e._v("BlockHash")]),e._v("): "),a("code",[e._v("Vec<StorageKey>")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("jsonrpc")]),e._v(": state_getChildKeys")]),e._v(" "),a("li",[a("strong",[e._v("interface")]),e._v(": api.rpc.state.getChildKeys")]),e._v(" "),a("li",[a("strong",[e._v("summary")]),e._v(": Retrieves the keys with prefix of a specific child storage")])]),e._v(" "),a("h3",{attrs:{id:"getchildstorage-childstoragekey-storagekey-key-storagekey-at-blockhash-storagedata"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getchildstorage-childstoragekey-storagekey-key-storagekey-at-blockhash-storagedata"}},[e._v("#")]),e._v(" getChildStorage(childStorageKey: "),a("code",[e._v("StorageKey")]),e._v(", key: "),a("code",[e._v("StorageKey")]),e._v(", at?: "),a("code",[e._v("BlockHash")]),e._v("): "),a("code",[e._v("StorageData")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("jsonrpc")]),e._v(": state_getChildStorage")]),e._v(" "),a("li",[a("strong",[e._v("interface")]),e._v(": api.rpc.state.getChildStorage")]),e._v(" "),a("li",[a("strong",[e._v("summary")]),e._v(": Retrieves the child storage for a key")])]),e._v(" "),a("h3",{attrs:{id:"getchildstoragehash-childstoragekey-storagekey-key-storagekey-at-blockhash-hash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getchildstoragehash-childstoragekey-storagekey-key-storagekey-at-blockhash-hash"}},[e._v("#")]),e._v(" getChildStorageHash(childStorageKey: "),a("code",[e._v("StorageKey")]),e._v(", key: "),a("code",[e._v("StorageKey")]),e._v(", at?: "),a("code",[e._v("BlockHash")]),e._v("): "),a("code",[e._v("Hash")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("jsonrpc")]),e._v(": state_getChildStorageHash")]),e._v(" "),a("li",[a("strong",[e._v("interface")]),e._v(": api.rpc.state.getChildStorageHash")]),e._v(" "),a("li",[a("strong",[e._v("summary")]),e._v(": Retrieves the child storage hash")])]),e._v(" "),a("h3",{attrs:{id:"getchildstoragesize-childstoragekey-storagekey-key-storagekey-at-blockhash-u64"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getchildstoragesize-childstoragekey-storagekey-key-storagekey-at-blockhash-u64"}},[e._v("#")]),e._v(" getChildStorageSize(childStorageKey: "),a("code",[e._v("StorageKey")]),e._v(", key: "),a("code",[e._v("StorageKey")]),e._v(", at?: "),a("code",[e._v("BlockHash")]),e._v("): "),a("code",[e._v("u64")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("jsonrpc")]),e._v(": state_getChildStorageSize")]),e._v(" "),a("li",[a("strong",[e._v("interface")]),e._v(": api.rpc.state.getChildStorageSize")]),e._v(" "),a("li",[a("strong",[e._v("summary")]),e._v(": Retrieves the child storage size")])]),e._v(" "),a("h3",{attrs:{id:"getkeys-key-storagekey-at-blockhash-vec-storagekey"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getkeys-key-storagekey-at-blockhash-vec-storagekey"}},[e._v("#")]),e._v(" getKeys(key: "),a("code",[e._v("StorageKey")]),e._v(", at?: "),a("code",[e._v("BlockHash")]),e._v("): "),a("code",[e._v("Vec<StorageKey>")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("jsonrpc")]),e._v(": state_getKeys")]),e._v(" "),a("li",[a("strong",[e._v("interface")]),e._v(": api.rpc.state.getKeys")]),e._v(" "),a("li",[a("strong",[e._v("summary")]),e._v(": Retrieves the keys with a certain prefix")])]),e._v(" "),a("h3",{attrs:{id:"getmetadata-at-blockhash-metadata"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getmetadata-at-blockhash-metadata"}},[e._v("#")]),e._v(" getMetadata(at?: "),a("code",[e._v("BlockHash")]),e._v("): "),a("code",[e._v("Metadata")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("jsonrpc")]),e._v(": state_getMetadata")]),e._v(" "),a("li",[a("strong",[e._v("interface")]),e._v(": api.rpc.state.getMetadata")]),e._v(" "),a("li",[a("strong",[e._v("summary")]),e._v(": Returns the runtime metadata")])]),e._v(" "),a("h3",{attrs:{id:"getruntimeversion-at-blockhash-runtimeversion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getruntimeversion-at-blockhash-runtimeversion"}},[e._v("#")]),e._v(" getRuntimeVersion(at?: "),a("code",[e._v("BlockHash")]),e._v("): "),a("code",[e._v("RuntimeVersion")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("jsonrpc")]),e._v(": state_getRuntimeVersion")]),e._v(" "),a("li",[a("strong",[e._v("interface")]),e._v(": api.rpc.state.getRuntimeVersion")]),e._v(" "),a("li",[a("strong",[e._v("summary")]),e._v(": Get the runtime version")])]),e._v(" "),a("h3",{attrs:{id:"getstorage-key-storagekey-at-blockhash-storagedata"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getstorage-key-storagekey-at-blockhash-storagedata"}},[e._v("#")]),e._v(" getStorage(key: "),a("code",[e._v("StorageKey")]),e._v(", at?: "),a("code",[e._v("BlockHash")]),e._v("): "),a("code",[e._v("StorageData")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("jsonrpc")]),e._v(": state_getStorage")]),e._v(" "),a("li",[a("strong",[e._v("interface")]),e._v(": api.rpc.state.getStorage")]),e._v(" "),a("li",[a("strong",[e._v("summary")]),e._v(": Retrieves the storage for a key")])]),e._v(" "),a("h3",{attrs:{id:"getstoragehash-key-storagekey-at-blockhash-hash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getstoragehash-key-storagekey-at-blockhash-hash"}},[e._v("#")]),e._v(" getStorageHash(key: "),a("code",[e._v("StorageKey")]),e._v(", at?: "),a("code",[e._v("BlockHash")]),e._v("): "),a("code",[e._v("Hash")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("jsonrpc")]),e._v(": state_getStorageHash")]),e._v(" "),a("li",[a("strong",[e._v("interface")]),e._v(": api.rpc.state.getStorageHash")]),e._v(" "),a("li",[a("strong",[e._v("summary")]),e._v(": Retrieves the storage hash")])]),e._v(" "),a("h3",{attrs:{id:"getstoragesize-key-storagekey-at-blockhash-u64"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getstoragesize-key-storagekey-at-blockhash-u64"}},[e._v("#")]),e._v(" getStorageSize(key: "),a("code",[e._v("StorageKey")]),e._v(", at?: "),a("code",[e._v("BlockHash")]),e._v("): "),a("code",[e._v("u64")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("jsonrpc")]),e._v(": state_getStorageSize")]),e._v(" "),a("li",[a("strong",[e._v("interface")]),e._v(": api.rpc.state.getStorageSize")]),e._v(" "),a("li",[a("strong",[e._v("summary")]),e._v(": Retrieves the storage size")])]),e._v(" "),a("h3",{attrs:{id:"querystorage-keys-vec-storagekey-startblock-hash-at-blockhash-vec-storagechangeset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#querystorage-keys-vec-storagekey-startblock-hash-at-blockhash-vec-storagechangeset"}},[e._v("#")]),e._v(" queryStorage(keys: "),a("code",[e._v("Vec<StorageKey>")]),e._v(", startBlock: "),a("code",[e._v("Hash")]),e._v(", at?: "),a("code",[e._v("BlockHash")]),e._v("): "),a("code",[e._v("Vec<StorageChangeSet>")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("jsonrpc")]),e._v(": state_queryStorage")]),e._v(" "),a("li",[a("strong",[e._v("interface")]),e._v(": api.rpc.state.queryStorage")]),e._v(" "),a("li",[a("strong",[e._v("summary")]),e._v(": Query historical storage entries (by key) starting from a start block")])]),e._v(" "),a("h3",{attrs:{id:"subscriberuntimeversion-runtimeversion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#subscriberuntimeversion-runtimeversion"}},[e._v("#")]),e._v(" subscribeRuntimeVersion(): "),a("code",[e._v("RuntimeVersion")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("jsonrpc")]),e._v(": state_subscribeRuntimeVersion")]),e._v(" "),a("li",[a("strong",[e._v("interface")]),e._v(": api.rpc.state.subscribeRuntimeVersion")]),e._v(" "),a("li",[a("strong",[e._v("summary")]),e._v(": Retrieves the runtime version via subscription")])]),e._v(" "),a("h3",{attrs:{id:"subscribestorage-keys-vec-storagekey-storagechangeset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#subscribestorage-keys-vec-storagekey-storagechangeset"}},[e._v("#")]),e._v(" subscribeStorage(keys: "),a("code",[e._v("Vec<StorageKey>")]),e._v("): "),a("code",[e._v("StorageChangeSet")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("jsonrpc")]),e._v(": state_subscribeStorage")]),e._v(" "),a("li",[a("strong",[e._v("interface")]),e._v(": api.rpc.state.subscribeStorage")]),e._v(" "),a("li",[a("strong",[e._v("summary")]),e._v(": Subscribes to storage changes for the provided keys")])]),e._v(" "),a("hr"),e._v(" "),a("h2",{attrs:{id:"system"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#system"}},[e._v("#")]),e._v(" system")]),e._v(" "),a("p",[a("em",[e._v("Calls to retrieve system info")])]),e._v(" "),a("h3",{attrs:{id:"chain-text"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chain-text"}},[e._v("#")]),e._v(" chain(): "),a("code",[e._v("Text")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("jsonrpc")]),e._v(": system_chain")]),e._v(" "),a("li",[a("strong",[e._v("interface")]),e._v(": api.rpc.system.chain")]),e._v(" "),a("li",[a("strong",[e._v("summary")]),e._v(": Retrieves the chain")])]),e._v(" "),a("h3",{attrs:{id:"health-health"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#health-health"}},[e._v("#")]),e._v(" health(): "),a("code",[e._v("Health")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("jsonrpc")]),e._v(": system_health")]),e._v(" "),a("li",[a("strong",[e._v("interface")]),e._v(": api.rpc.system.health")]),e._v(" "),a("li",[a("strong",[e._v("summary")]),e._v(": Return health status of the node")])]),e._v(" "),a("h3",{attrs:{id:"name-text"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#name-text"}},[e._v("#")]),e._v(" name(): "),a("code",[e._v("Text")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("jsonrpc")]),e._v(": system_name")]),e._v(" "),a("li",[a("strong",[e._v("interface")]),e._v(": api.rpc.system.name")]),e._v(" "),a("li",[a("strong",[e._v("summary")]),e._v(": Retrieves the node name")])]),e._v(" "),a("h3",{attrs:{id:"networkstate-networkstate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#networkstate-networkstate"}},[e._v("#")]),e._v(" networkState(): "),a("code",[e._v("NetworkState")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("jsonrpc")]),e._v(": system_networkState")]),e._v(" "),a("li",[a("strong",[e._v("interface")]),e._v(": api.rpc.system.networkState")]),e._v(" "),a("li",[a("strong",[e._v("summary")]),e._v(": Returns current state of the network")])]),e._v(" "),a("h3",{attrs:{id:"peers-vec-peerinfo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#peers-vec-peerinfo"}},[e._v("#")]),e._v(" peers(): "),a("code",[e._v("Vec<PeerInfo>")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("jsonrpc")]),e._v(": system_peers")]),e._v(" "),a("li",[a("strong",[e._v("interface")]),e._v(": api.rpc.system.peers")]),e._v(" "),a("li",[a("strong",[e._v("summary")]),e._v(": Returns the currently connected peers")])]),e._v(" "),a("h3",{attrs:{id:"properties-chainproperties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#properties-chainproperties"}},[e._v("#")]),e._v(" properties(): "),a("code",[e._v("ChainProperties")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("jsonrpc")]),e._v(": system_properties")]),e._v(" "),a("li",[a("strong",[e._v("interface")]),e._v(": api.rpc.system.properties")]),e._v(" "),a("li",[a("strong",[e._v("summary")]),e._v(": Get a custom set of properties as a JSON object, defined in the chain spec")])]),e._v(" "),a("h3",{attrs:{id:"version-text"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#version-text"}},[e._v("#")]),e._v(" version(): "),a("code",[e._v("Text")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("jsonrpc")]),e._v(": system_version")]),e._v(" "),a("li",[a("strong",[e._v("interface")]),e._v(": api.rpc.system.version")]),e._v(" "),a("li",[a("strong",[e._v("summary")]),e._v(": Retrieves the version of the node")])])])}),[],!1,null,null,null);t.default=r.exports}}]);