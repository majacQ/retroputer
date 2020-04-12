parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Evmi":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=l;var e=n(require("react")),t=require("@mdx-js/react");function n(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}const r=e=>(function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,t.mdx)("div",n)}),a={},i="wrapper";function l({components:e,...n}){return(0,t.mdx)(i,o({},a,n,{components:e,mdxType:"MDXLayout"}),(0,t.mdx)("h1",null,"Tile Sets"),(0,t.mdx)("p",null,"The VGP can access tile sets at the base of any of the 32 available pages. Each tile set contains 256 tile definitions, with each definition being 64 bytes arranged in an 8x8 configuration. Each byte can specify a palette entry, the background color, transparency, or the foreground color. Depending upon the context, the foreground and background color may come from a tile page's color memory or from a sprite's configuration."),(0,t.mdx)("p",null,"The second tile of the first tile set defaults to the following:"),(0,t.mdx)("p",null,(0,t.mdx)("img",o({parentName:"p"},{src:"../../../images/tile-definition.png",alt:null}))),(0,t.mdx)("p",null,"If you squint a little, you might be able to make out the shape of a smiley-face, which is the second defined tile in the first tile set."),(0,t.mdx)("p",null,"In this example, ",(0,t.mdx)("inlineCode",{parentName:"p"},"0x00")," corresponds to the background color, and ",(0,t.mdx)("inlineCode",{parentName:"p"},"0xFF")," corresponds to the foreground color. Should either of those colors evaluate to ",(0,t.mdx)("inlineCode",{parentName:"p"},"0x00"),", then the corresponding pixel will be transparent."),(0,t.mdx)("p",null,"Any other value ","(",(0,t.mdx)("inlineCode",{parentName:"p"},"0x01–0xFE"),")"," is taken directly from the corresponding palette entry."),(0,t.mdx)("p",null,"A tile-based resource ","(","either tile pages or sprites",")"," can only use tiles from one set at a time. However, each tile-based resource can be configured to use any tile set independently. This means that one might reserve three tile sets for sprites, and another tile set for tile pages ","(","acting as text",")",". Or, one might have four slightly different font variations, making it easy to change the rendering of text."),(0,t.mdx)("h3",null,"Default Tile Set"),(0,t.mdx)("p",null,"Upon power-on, the system defaults to using the VGU's default tile set."),(0,t.mdx)("p",null,(0,t.mdx)("img",o({parentName:"p"},{src:"../../../images/character-map.png",alt:null}))))}l.isMDXComponent=!0;
},{"react":"SAdv","@mdx-js/react":"QaRW"}]},{},[], null)
//# sourceMappingURL=/tile-sets.5443f4c3.js.map