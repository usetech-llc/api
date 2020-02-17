(window.webpackJsonp=window.webpackJsonp||[]).push([[243],{440:function(e,t,a){"use strict";a.r(t);var o=a(0),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"faq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[e._v("#")]),e._v(" FAQ")]),e._v(" "),a("p",[e._v("The list will be updated/expanded as questions come up, dealing with some common issues that API users find.")]),e._v(" "),a("h2",{attrs:{id:"i-am-getting-a-unknown-types-found-no-types-for-error"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#i-am-getting-a-unknown-types-found-no-types-for-error"}},[e._v("#")]),e._v(' I am getting a "Unknown types found, no types for ..." error')]),e._v(" "),a("p",[e._v("There are 2 causes for this, both related to the version of the API that you are using and the support of types. As explained in the elsewhere, types on Polkadot/Substrate are continuously evolving - the latest version of the API always tries to support types for the latest Polkadot networks, such as "),a("a",{attrs:{href:"https://kusama.network/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kusama"),a("OutboundLink")],1),e._v(". So for Polkadot public chains, ensure that you are using the latest released API version.")]),e._v(" "),a("p",[e._v("If however you are running against a master branch of either Polkadot or Substrate, you may well be better suited running "),a("RouterLink",{attrs:{to:"/start/install.html#betas"}},[e._v("a beta version, tracking master")]),e._v(". If you are connected to a customized chain, you would rather want to "),a("RouterLink",{attrs:{to:"/start/types.extend.html"}},[e._v("register the types")]),e._v(" either on your own, or via packages that the chain vendor provides.")],1),e._v(" "),a("h2",{attrs:{id:"i-am-getting-a-metadata-failed-on-magicnumber-error"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#i-am-getting-a-metadata-failed-on-magicnumber-error"}},[e._v("#")]),e._v(' I am getting a "Metadata:: failed on MagicNumber" error')]),e._v(" "),a("p",[e._v("Update your version of the API to the "),a("RouterLink",{attrs:{to:"/start/install.html"}},[e._v("latest version")]),e._v(". Like types, the "),a("RouterLink",{attrs:{to:"/start/basics.html"}},[e._v("metadata interfaces")]),e._v(" are continuously evolving. For instance with the Polkadot Alexander network, only metadata v3 is available. By the time Kusama launched, this has been bumped to v7. As these versions are added to the Polkadot/Substrate codebase, they are added to the API.")],1),e._v(" "),a("h2",{attrs:{id:"i-would-like-to-sign-transactions-offline"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#i-would-like-to-sign-transactions-offline"}},[e._v("#")]),e._v(" I would like to sign transactions offline")]),e._v(" "),a("p",[e._v("The API itself is independent on where the signature comes from and how it is injected. Additionally it implements a signer interface, that can be used for external signing - an example of this is the "),a("a",{attrs:{href:"https://github.com/polkadot-js/apps",target:"_blank",rel:"noopener noreferrer"}},[e._v("polkadot-js/apps"),a("OutboundLink")],1),e._v(" support for signing via extensions and even the "),a("a",{attrs:{href:"https://github.com/polkadot-js/extension",target:"_blank",rel:"noopener noreferrer"}},[e._v("polkadot-js/extension"),a("OutboundLink")],1),e._v(" support for tools such as the "),a("a",{attrs:{href:"https://github.com/paritytech/parity-signer",target:"_blank",rel:"noopener noreferrer"}},[e._v("Parity Signer"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("As of this writing we don't have an explicit example of implementing the signer interface in these docs, although we do use one in "),a("a",{attrs:{href:"https://github.com/polkadot-js/api/blob/master/packages/api/test/util/SingleAccountSigner.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("our tests"),a("OutboundLink")],1),e._v(". Additionally, the "),a("a",{attrs:{href:"https://github.com/polkadot-js/tools",target:"_blank",rel:"noopener noreferrer"}},[e._v("polkadot-js/tools"),a("OutboundLink")],1),e._v(" has an implementation of "),a("a",{attrs:{href:"https://github.com/polkadot-js/tools/tree/master/packages/signer-cli",target:"_blank",rel:"noopener noreferrer"}},[e._v("a very basic offline signer"),a("OutboundLink")],1),e._v(" where transactions are generated in one process and signatures in another non-connected process.")]),e._v(" "),a("h2",{attrs:{id:"i-would-like-to-send-a-root-transaction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#i-would-like-to-send-a-root-transaction"}},[e._v("#")]),e._v(" I would like to send a root transaction")]),e._v(" "),a("p",[e._v("Some calls in Polkadot/Substrate can only be submitted as root, these are indicated by "),a("code",[e._v("ensure_root(origin)")]),e._v(" in the Rust codebase. Root here does not refer to the actual account, i.e. "),a("code",[e._v("//Alice")]),e._v(" on  a "),a("code",[e._v("--dev")]),e._v(" chain, but rather that it cannot be submitted as a bare user transaction. This restriction applies to chain upgrades, changing balances or anything that modifies the state and/or chain operation.")]),e._v(" "),a("p",[e._v("To submit these transactions, it needs to be send as a "),a("RouterLink",{attrs:{to:"/start/api.tx.wrap.html#sudo-use"}},[e._v("wrapped transaction")]),e._v(" via either "),a("code",[e._v("sudo.sudo")]),e._v(" (assuming you have access on your chain) or "),a("code",[e._v("democracy.proposal")]),e._v(" (which would allow users of the chain to vote on it).")],1),e._v(" "),a("h2",{attrs:{id:"how-do-i-call-a-function-with-a-tuple-input"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-call-a-function-with-a-tuple-input"}},[e._v("#")]),e._v(" How do I call a function with a Tuple input")]),e._v(" "),a("p",[e._v("Tuples, as defined in the Polkadot/Substrate types appear as "),a("code",[e._v("(TypeA, TypeB)")]),e._v(". For instance we may have an "),a("code",[e._v("(AccountId, u64)")]),e._v(" input as defined in the metadata or as part of the user types. To specify a Tuple as an input, wrap it is an  array format, for instance to call "),a("code",[e._v("query.module.get((u32, u64))")]),e._v(" where a "),a("code",[e._v("(u32, u64)")]),e._v(" Tuple input is expected, you would do  "),a("code",[e._v("query.module.get([123, 456])")])]),e._v(" "),a("h2",{attrs:{id:"how-long-do-transactions-live"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-long-do-transactions-live"}},[e._v("#")]),e._v(" How long do transactions live")]),e._v(" "),a("p",[e._v("Polkadot/Substrate supports both immortal and mortal transactions. For immortal, this means that the transaction has an infinite lifetime, for mortals, the transactions expire after a defined period. By default the API sends mortal transactions when no explicit extrinsic era has been specified. This means that all transaction has a limited lifetime and will expire if not included in the period set.")]),e._v(" "),a("p",[e._v("The length for this transaction validity is set to 50 blocks, which translates to 5 minutes assuming a default of 6 second blocktimes. (10 blocks per minute in this default configuration).")]),e._v(" "),a("h2",{attrs:{id:"my-chain-does-not-support-system-account-queries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#my-chain-does-not-support-system-account-queries"}},[e._v("#")]),e._v(" My chain does not support system.account queries")]),e._v(" "),a("p",[e._v("The API always tracks the latest Substrate master in terms of examples. This means that nonce & balance queries are done via the "),a("code",[e._v("api.query.system.account(<account>)")]),e._v(" which returns a Tuple "),a("code",[e._v("(Index, AccountData)")]),e._v(" where the first is the nonce, the second a struct containing the free and reserved balances. As with all "),a("code",[e._v("api.query.*")]),e._v(" endpoints, this is decorated based on what the chain you connect to support, via the metadata exchange.")]),e._v(" "),a("p",[e._v("It is possible that you are connecting to an older chain that has not been upgraded yet. For these chains, this storage entry won't be available (yet). To query the nonce on older chains, you can do a query to "),a("code",[e._v("api.query.system.accountNonce(<account>)")]),e._v(" and balances can be retrieved via "),a("code",[e._v("api.query.balances.freeBalance(<account>)")]),e._v(".")]),e._v(" "),a("p",[e._v("Likewise, if your chain has been upgraded recently and you are still using the old "),a("code",[e._v("system.accountNonce")]),e._v(" or "),a("code",[e._v("balances.freeBalance")]),e._v(" queries in your code (which is now not available in the chain metadata), you need to update it to query the new location.")])])}),[],!1,null,null,null);t.default=n.exports}}]);