parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"gdzB":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=s;var e=t(require("react")),r=require("@mdx-js/react");function t(e){return e&&e.__esModule?e:{default:e}}function a(){return(a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}const n=e=>(function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",t)}),o={},i="wrapper";function s({components:e,...t}){return(0,r.mdx)(i,a({},o,t,{components:e,mdxType:"MDXLayout"}),(0,r.mdx)("h1",null,"Technical Overview"),(0,r.mdx)("p",null,"Retroputer emulates a machine with the following pieces of hardware:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"16KB of ROM ","(","KERNEL",")"," with 1KB of scratch space"),(0,r.mdx)("li",{parentName:"ul"},"512KB of RAM, of which 64KB can be used for executable instructions"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",a({parentName:"li"},{href:"6516-central-processing-unit/"}),"6516 16-bit processor")," capable of addressing 512KB of RAM in 4 banks of 64KB each"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",a({parentName:"li"},{href:"6448-video-generator-1/"}),"6448 video generator")," capable of generating display, sprites, and custom fonts"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",a({parentName:"li"},{href:"1125-sound-generator.md"}),"1125 sound generator")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",a({parentName:"li"},{href:"9800-persistent-storage-interface.md"}),"9800 persistent storage interface")," for long-term persistent storage your files and data.")))}s.isMDXComponent=!0;
},{"react":"SAdv","@mdx-js/react":"QaRW"}]},{},[], null)
//# sourceMappingURL=/README.41be4cf2.js.map