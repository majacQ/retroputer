parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"VHMq":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=t;var e=a(require("react")),n=require("@mdx-js/react");function a(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}const r=e=>(function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.mdx)("div",a)}),i={},m="wrapper";function t({components:e,...a}){return(0,n.mdx)(m,l({},i,a,{components:e,mdxType:"MDXLayout"}),(0,n.mdx)("h1",null,"Numbers"),(0,n.mdx)("p",null,"Numbers can be written in a variety of forms:"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Base 10",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Numbers without a radix are assumed to be base 10."),(0,n.mdx)("li",{parentName:"ul"},"Examples: ",(0,n.mdx)("inlineCode",{parentName:"li"},"100"),", ",(0,n.mdx)("inlineCode",{parentName:"li"},"-50"),", ",(0,n.mdx)("inlineCode",{parentName:"li"},"64"),", ",(0,n.mdx)("inlineCode",{parentName:"li"},"0")))),(0,n.mdx)("li",{parentName:"ul"},"Base 16",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Indicated by a ",(0,n.mdx)("inlineCode",{parentName:"li"},"0x")," prefix."),(0,n.mdx)("li",{parentName:"ul"},"Examples: ",(0,n.mdx)("inlineCode",{parentName:"li"},"0x01"),", ",(0,n.mdx)("inlineCode",{parentName:"li"},"0x02000")))),(0,n.mdx)("li",{parentName:"ul"},"Base 2",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Indicated by a ",(0,n.mdx)("inlineCode",{parentName:"li"},"0b")," prefix."),(0,n.mdx)("li",{parentName:"ul"},"Examples: ",(0,n.mdx)("inlineCode",{parentName:"li"},"0b1001"),", ",(0,n.mdx)("inlineCode",{parentName:"li"},"0b0000101100110"))))),(0,n.mdx)("p",null,"Numbers may contain separators ","(","underscores",")",":"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("inlineCode",{parentName:"li"},"100_000")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("inlineCode",{parentName:"li"},"0x0_20_00")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("inlineCode",{parentName:"li"},"0b1010_0011"))))}t.isMDXComponent=!0;
},{"react":"SAdv","@mdx-js/react":"QaRW"}]},{},[], null)
//# sourceMappingURL=/numbers.0a9b4806.js.map