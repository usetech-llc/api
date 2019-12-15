(window.webpackJsonp=window.webpackJsonp||[]).push([[304],{499:function(t,e,a){"use strict";a.r(e);var o=a(0),n=Object(o.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"faq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[t._v("#")]),t._v(" FAQ")]),t._v(" "),a("p",[t._v("The list will be updated/expanded as questions come up, dealing with some common issues that API users find.")]),t._v(" "),a("h2",{attrs:{id:"i-am-getting-a-unknown-types-found-no-types-for-error"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#i-am-getting-a-unknown-types-found-no-types-for-error"}},[t._v("#")]),t._v(' I am getting a "Unknown types found, no types for ..." error')]),t._v(" "),a("p",[t._v("There are 2 causes for this, both related to the version of the API that you are using and the support of types. As explained in the elsewhere, types on Polkadot/Substrate are continuously evolving - the latest version of the API always tries to support types for the latest Polkadot networks, such as "),a("a",{attrs:{href:"https://kusama.network/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Kusama"),a("OutboundLink")],1),t._v(". So for Polkadot public chains, ensure that you are using the latest released API version.")]),t._v(" "),a("p",[t._v("If however you are running against a master branch of either Polkadot or Substrate, you may well be better suited running "),a("router-link",{attrs:{to:"/start/install.html#betas"}},[t._v("a beta version, tracking master")]),t._v(". If you are connected to a customized chain, you would rather want to "),a("router-link",{attrs:{to:"/start/types.extend.html"}},[t._v("register the types")]),t._v(" either on your own, or via packages that the chain vendor provides.")],1),t._v(" "),a("h2",{attrs:{id:"i-am-getting-a-metadata-failed-on-magicnumber-error"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#i-am-getting-a-metadata-failed-on-magicnumber-error"}},[t._v("#")]),t._v(' I am getting a "Metadata:: failed on MagicNumber" error')]),t._v(" "),a("p",[t._v("Update your version of the API to the "),a("router-link",{attrs:{to:"/start/install.html"}},[t._v("latest version")]),t._v(". Like types, the "),a("router-link",{attrs:{to:"/start/basics.html"}},[t._v("metadata interfaces")]),t._v(" are continuously evolving. For instance with the Polkadot Alexander network, only metadata v3 is available. By the time Kusama launched, this has been bumped to v7. As these versions are added to the Polkadot/Substrate codebase, they are added to the API.")],1),t._v(" "),a("h2",{attrs:{id:"i-would-like-to-sign-transactions-offline"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#i-would-like-to-sign-transactions-offline"}},[t._v("#")]),t._v(" I would like to sign transactions offline")]),t._v(" "),a("p",[t._v("The API itself is independent on where the signature comes from and how it is injected. Additionally it implements a signer interface, that can be used for external signing - an example of this is the "),a("a",{attrs:{href:"https://github.com/polkadot-js/apps",target:"_blank",rel:"noopener noreferrer"}},[t._v("polkadot-js/apps"),a("OutboundLink")],1),t._v(" support for signing via extensions and even the "),a("a",{attrs:{href:"https://github.com/polkadot-js/extension",target:"_blank",rel:"noopener noreferrer"}},[t._v("polkadot-js/extension"),a("OutboundLink")],1),t._v(" support for tools such as the "),a("a",{attrs:{href:"https://github.com/paritytech/parity-signer",target:"_blank",rel:"noopener noreferrer"}},[t._v("Parity Signer"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("As of this writing we don't have an explicit example of implementing the signer interface in these docs, although we do use one in "),a("a",{attrs:{href:"https://github.com/polkadot-js/api/blob/master/packages/api/test/util/SingleAccountSigner.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("our tests"),a("OutboundLink")],1),t._v(". Additionally, the "),a("a",{attrs:{href:"https://github.com/polkadot-js/tools",target:"_blank",rel:"noopener noreferrer"}},[t._v("polkadot-js/tools"),a("OutboundLink")],1),t._v(" has an implementation of "),a("a",{attrs:{href:"https://github.com/polkadot-js/tools/tree/master/packages/signer-cli",target:"_blank",rel:"noopener noreferrer"}},[t._v("a very basic offline signer"),a("OutboundLink")],1),t._v(" where transactions are generated in one process and signatures in another non-connected process.")]),t._v(" "),a("h2",{attrs:{id:"i-would-like-to-send-a-root-transaction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#i-would-like-to-send-a-root-transaction"}},[t._v("#")]),t._v(" I would like to send a root transaction")]),t._v(" "),a("p",[t._v("Some calls in Polkadot/Substrate can only be submitted as root, these are indicated by "),a("code",[t._v("ensure_root(origin)")]),t._v(" in the Rust codebase. Root here does not refer to the actual account, i.e. "),a("code",[t._v("//Alice")]),t._v(" on  a "),a("code",[t._v("--dev")]),t._v(" chain, but rather that it cannot be submitted as a bare user transaction. This restriction applies to chain upgrades, changing balances or anything that modifies the state and/or chain operation.")]),t._v(" "),a("p",[t._v("To submit these transactions, it needs to be send as a "),a("router-link",{attrs:{to:"/start/api.tx.wrap.html#sudo-use"}},[t._v("wrapped transaction")]),t._v(" via either "),a("code",[t._v("sudo.sudo")]),t._v(" (assuming you have access on your chain) or "),a("code",[t._v("democracy.proposal")]),t._v(" (which would allow users of the chain to vote on it).")],1),t._v(" "),a("h2",{attrs:{id:"how-do-i-call-a-function-with-a-tuple-input"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-call-a-function-with-a-tuple-input"}},[t._v("#")]),t._v(" How do I call a function with a Tuple input")]),t._v(" "),a("p",[t._v("Tuples, as defined in the Polkadot/Substrate types appear as "),a("code",[t._v("(TypeA, TypeB)")]),t._v(". For instance we may have an "),a("code",[t._v("(AccountId, u64)")]),t._v(" input as defined in the metadata or as part of the user types. To specify a Tuple as an input, wrap it is an  array format, for instance to call "),a("code",[t._v("query.module.get((u32, u64))")]),t._v(" where a "),a("code",[t._v("(u32, u64)")]),t._v(" Tuple input is expected, you would do  "),a("code",[t._v("query.module.get([123, 456])")])]),t._v(" "),a("h2",{attrs:{id:"how-long-do-transactions-live"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-long-do-transactions-live"}},[t._v("#")]),t._v(" How long do transactions live")]),t._v(" "),a("p",[t._v("Polkadot/Substrate supports both immortal and mortal transactions. For immortal, this means that the transaction has an infinite lifetime, for mortals, the transactions expire after a defined period. By default the API sends mortal transactions when no explicit extrinsic era has been specified. This means that all transaction has a limited lifetime and will expire if not included in the period set.")]),t._v(" "),a("p",[t._v("The length for this transaction validity is set to 50 blocks, which translates to 5 minutes assuming a default of 6 second blocktimes. (10 blocks per minute in this default configuration).")])])}),[],!1,null,null,null);e.default=n.exports}}]);