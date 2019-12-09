(window.webpackJsonp=window.webpackJsonp||[]).push([[315],{511:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"transactions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transactions"}},[t._v("#")]),t._v(" Transactions")]),t._v(" "),a("p",[t._v("Transaction endpoints are exposed, as determined by the metadata, on the "),a("code",[t._v("api.tx")]),t._v(" endpoint. These allow you to submit transactions for inclusion in blocks, be it transfers, setting information or anything else your chain supports.")]),t._v(" "),a("h2",{attrs:{id:"simple-transactions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simple-transactions"}},[t._v("#")]),t._v(" Simple transactions")]),t._v(" "),a("p",[t._v("To start off, let's make a balance transfer from Alice to Bob.")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Sign and send a transfer from Alice to Bob")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" txHash "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("balances\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("transfer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BOB")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12345")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("signAndSend")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("alice"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Show the hash")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("Submitted with hash ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("txHash"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("p",[t._v("We have already become familiar with the "),a("code",[t._v("Promise")]),t._v(" syntax that is used throughout the API, in this case it is no different. We construct a transaction by calling "),a("code",[t._v("balances.transfer(<accountId>, <value>)")]),t._v(" with the required params and then as a next step we submit it to the node.")]),t._v(" "),a("p",[t._v("As with all other API operations, the "),a("code",[t._v("to")]),t._v(' params just needs to be "account-like" and the value params needs to be "number-like", the API will take care of encoding and conversion into the correct format.')]),t._v(" "),a("p",[t._v("The result for this call (we will deal with subscriptions in a short while), is the transaction hash. This is a hash of the data and receiving this does not mean that transaction has been included, but rather only that it has been accepted for propagation by the node. (It can still fail on execution, we will handle this in some of our follow-up sections.)")]),t._v(" "),a("h2",{attrs:{id:"under-the-hood"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#under-the-hood"}},[t._v("#")]),t._v(" Under the hood")]),t._v(" "),a("p",[t._v("Despite the single-line format of "),a("code",[t._v("signAndSend")]),t._v(", there is a lot happening under the hood (and all of this can be manually provided) -")]),t._v(" "),a("ul",[a("li",[t._v("Based on the sender, the API will retrieve the "),a("code",[t._v("system.accountNonce")]),t._v(" to determine the next nonce to use")]),t._v(" "),a("li",[t._v("The API will retrieve the current block hash and use it to create a mortal transaction, i.e. the transaction will only be valid for a limited number of blocks (by default this is 5 mins at 6s block times)")]),t._v(" "),a("li",[t._v("It will construct a payload and sign this, this includes the "),a("code",[t._v("genesisHash")]),t._v(", the "),a("code",[t._v("blockHash")]),t._v(" for the start of the mortal era as well as the current chain "),a("code",[t._v("specVersion")])]),t._v(" "),a("li",[t._v("The transaction is submitted to the node")])]),t._v(" "),a("p",[t._v("As suggested, you can override all of this, i.e. by retrieving the nonce yourself and passing that as an option, i.e. "),a("code",[t._v("signAndSend(alice, { nonce: aliceNonce })")]),t._v(", this could be useful when manually tracking and submitting transactions in bulk.")]),t._v(" "),a("h2",{attrs:{id:"into-the-keyring-we-go"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#into-the-keyring-we-go"}},[t._v("#")]),t._v(" Into the keyring we go")]),t._v(" "),a("p",[t._v("With the examples above, the variable "),a("code",[t._v("alice")]),t._v(" seems to have appeared from thin air. To understand how transactions are signed, we will take a "),a("router-link",{attrs:{to:"/start/keyring.html"}},[t._v("brief diversion into the keyring")]),t._v(" before returning to our regularly scheduled program.")],1)])}),[],!1,null,null,null);e.default=n.exports}}]);