// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).bifurcateEntries=r()}(this,(function(){"use strict";var e="function";var r={complex128:function(e,r){return e.get(r)},complex64:function(e,r){return e.get(r)},default:function(e,r){return e.get(r)}};function t(e){var t=r[e];return"function"==typeof t?t:r.default}var n={float64:function(e,r){return e[r]},float32:function(e,r){return e[r]},int32:function(e,r){return e[r]},int16:function(e,r){return e[r]},int8:function(e,r){return e[r]},uint32:function(e,r){return e[r]},uint16:function(e,r){return e[r]},uint8:function(e,r){return e[r]},uint8c:function(e,r){return e[r]},generic:function(e,r){return e[r]},default:function(e,r){return e[r]}};function i(e){var r=n[e];return"function"==typeof r?r:n.default}var o="function"==typeof Object.defineProperty?Object.defineProperty:null;var a=Object.defineProperty;function u(e){return"number"==typeof e}function f(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function l(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+f(i):f(i)+e,n&&(e="-"+e)),e}var c=String.prototype.toLowerCase,s=String.prototype.toUpperCase;function y(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!u(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=l(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=l(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===s.call(e.specifier)?s.call(t):c.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function h(e){return"string"==typeof e}var p=Math.abs,g=String.prototype.toLowerCase,m=String.prototype.toUpperCase,w=String.prototype.replace,b=/e\+(\d)$/,v=/e-(\d)$/,d=/^(\d+)$/,E=/^(\d+)e/,A=/\.0$/,T=/\.0*e/,_=/(\..*[^0])0*e/;function x(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!u(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":p(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=w.call(t,_,"$1e"),t=w.call(t,T,"e"),t=w.call(t,A,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=w.call(t,b,"e+0$1"),t=w.call(t,v,"e-0$1"),e.alternate&&(t=w.call(t,d,"$1."),t=w.call(t,E,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===m.call(e.specifier)?m.call(t):g.call(t)}function j(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function k(e,r,t){var n=r-e.length;return n<0?e:e=t?e+j(n):j(n)+e}var V=String.fromCharCode,L=isNaN,R=Array.isArray;function S(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function B(e){var r,t,n,i,o,a,u,f,c;if(!R(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",u=1,f=0;f<e.length;f++)if(h(n=e[f]))a+=n;else{if(r=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,c=0;c<t.length;c++)switch(i=t.charAt(c)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,L(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,L(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=y(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!L(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=L(o)?String(n.arg):V(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=x(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=l(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=k(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function C(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function F(e){var r,t,n,i;for(t=[],i=0,n=I.exec(e);n;)(r=e.slice(i,I.lastIndex-n[0].length)).length&&t.push(r),t.push(C(n)),i=I.lastIndex,n=I.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function O(e){return"string"==typeof e}function M(e){var r,t,n;if(!O(e))throw new TypeError(M("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=F(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return B.apply(null,t)}var U,N=Object.prototype,P=N.toString,Y=N.__defineGetter__,W=N.__defineSetter__,$=N.__lookupGetter__,G=N.__lookupSetter__;U=function(){try{return o({},"x",{}),!0}catch(e){return!1}}()?a:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===P.call(e))throw new TypeError(M("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===P.call(t))throw new TypeError(M("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&($.call(e,r)||G.call(e,r)?(n=e.__proto__,e.__proto__=N,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&Y&&Y.call(e,r,t.get),a&&W&&W.call(e,r,t.set),e};var Z=U;function X(e,r,t){Z(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var J="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function z(){return J&&"symbol"==typeof Symbol.toStringTag}var q=Object.prototype.toString;var D=Object.prototype.hasOwnProperty;function H(e,r){return null!=e&&D.call(e,r)}var K="function"==typeof Symbol?Symbol:void 0,Q="function"==typeof K?K.toStringTag:"";var ee=z()?function(e){var r,t,n;if(null==e)return q.call(e);t=e[Q],r=H(e,Q);try{e[Q]=void 0}catch(r){return q.call(e)}return n=q.call(e),r?e[Q]=t:delete e[Q],n}:function(e){return q.call(e)};var re=Array.isArray?Array.isArray:function(e){return"[object Array]"===ee(e)};function te(e){return null!==e&&"object"==typeof e}function ne(e){return te(e)&&(e._isBuffer||e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e))}function ie(){return/^\s*function\s*([^(]*)/i}X(te,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(M("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!re(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(te));var oe=/^\s*function\s*([^(]*)/i;function ae(e){var r,t,n;if(("Object"===(t=ee(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=oe.exec(n.toString()))return r[1]}return ne(e)?"Buffer":t}X(ie,"REGEXP",oe);var ue={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"},fe="function"==typeof Float64Array;var le="function"==typeof Float64Array?Float64Array:null;var ce="function"==typeof Float64Array?Float64Array:void 0;var se=function(){var e,r,t;if("function"!=typeof le)return!1;try{r=new le([1,3.14,-3.14,NaN]),t=r,e=(fe&&t instanceof Float64Array||"[object Float64Array]"===ee(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?ce:function(){throw new Error("not implemented")},ye="function"==typeof Float32Array;var he=Number.POSITIVE_INFINITY,pe="function"==typeof Float32Array?Float32Array:null;var ge="function"==typeof Float32Array?Float32Array:void 0;var me=function(){var e,r,t;if("function"!=typeof pe)return!1;try{r=new pe([1,3.14,-3.14,5e40]),t=r,e=(ye&&t instanceof Float32Array||"[object Float32Array]"===ee(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===he}catch(r){e=!1}return e}()?ge:function(){throw new Error("not implemented")},we="function"==typeof Uint32Array;var be="function"==typeof Uint32Array?Uint32Array:null;var ve="function"==typeof Uint32Array?Uint32Array:void 0;var de=function(){var e,r,t;if("function"!=typeof be)return!1;try{r=new be(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,e=(we&&t instanceof Uint32Array||"[object Uint32Array]"===ee(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?ve:function(){throw new Error("not implemented")},Ee="function"==typeof Int32Array;var Ae="function"==typeof Int32Array?Int32Array:null;var Te="function"==typeof Int32Array?Int32Array:void 0;var _e=function(){var e,r,t;if("function"!=typeof Ae)return!1;try{r=new Ae([1,3.14,-3.14,2147483648]),t=r,e=(Ee&&t instanceof Int32Array||"[object Int32Array]"===ee(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-2147483648===r[3]}catch(r){e=!1}return e}()?Te:function(){throw new Error("not implemented")},xe="function"==typeof Uint16Array;var je="function"==typeof Uint16Array?Uint16Array:null;var ke="function"==typeof Uint16Array?Uint16Array:void 0;var Ve=function(){var e,r,t;if("function"!=typeof je)return!1;try{r=new je(r=[1,3.14,-3.14,65536,65537]),t=r,e=(xe&&t instanceof Uint16Array||"[object Uint16Array]"===ee(t))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?ke:function(){throw new Error("not implemented")},Le="function"==typeof Int16Array;var Re="function"==typeof Int16Array?Int16Array:null;var Se="function"==typeof Int16Array?Int16Array:void 0;var Be=function(){var e,r,t;if("function"!=typeof Re)return!1;try{r=new Re([1,3.14,-3.14,32768]),t=r,e=(Le&&t instanceof Int16Array||"[object Int16Array]"===ee(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-32768===r[3]}catch(r){e=!1}return e}()?Se:function(){throw new Error("not implemented")},Ie="function"==typeof Uint8Array;var Ce="function"==typeof Uint8Array?Uint8Array:null;var Fe="function"==typeof Uint8Array?Uint8Array:void 0;var Oe=function(){var e,r,t;if("function"!=typeof Ce)return!1;try{r=new Ce(r=[1,3.14,-3.14,256,257]),t=r,e=(Ie&&t instanceof Uint8Array||"[object Uint8Array]"===ee(t))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?Fe:function(){throw new Error("not implemented")},Me="function"==typeof Uint8ClampedArray;var Ue="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var Ne="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;var Pe=function(){var e,r,t;if("function"!=typeof Ue)return!1;try{r=new Ue([-1,0,1,3.14,4.99,255,256]),t=r,e=(Me&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===ee(t))&&0===r[0]&&0===r[1]&&1===r[2]&&3===r[3]&&5===r[4]&&255===r[5]&&255===r[6]}catch(r){e=!1}return e}()?Ne:function(){throw new Error("not implemented")},Ye="function"==typeof Int8Array;var We="function"==typeof Int8Array?Int8Array:null;var $e="function"==typeof Int8Array?Int8Array:void 0;var Ge=function(){var e,r,t;if("function"!=typeof We)return!1;try{r=new We([1,3.14,-3.14,128]),t=r,e=(Ye&&t instanceof Int8Array||"[object Int8Array]"===ee(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-128===r[3]}catch(r){e=!1}return e}()?$e:function(){throw new Error("not implemented")};function Ze(e){return"number"==typeof e}var Xe=Number,Je=Xe.prototype.toString;var ze=z();function qe(e){return"object"==typeof e&&(e instanceof Xe||(ze?function(e){try{return Je.call(e),!0}catch(e){return!1}}(e):"[object Number]"===ee(e)))}function De(e){return Ze(e)||qe(e)}X(De,"isPrimitive",Ze),X(De,"isObject",qe);var He=Xe.NEGATIVE_INFINITY,Ke=Math.floor;function Qe(e){return Ke(e)===e}function er(e){return e<he&&e>He&&Qe(e)}function rr(e){return Ze(e)&&er(e)}function tr(e){return qe(e)&&er(e.valueOf())}function nr(e){return rr(e)||tr(e)}function ir(e){return rr(e)&&e>=0}function or(e){return tr(e)&&e.valueOf()>=0}function ar(e){return ir(e)||or(e)}X(nr,"isPrimitive",rr),X(nr,"isObject",tr),X(ar,"isPrimitive",ir),X(ar,"isObject",or);function ur(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&Qe(e.length)&&e.length>=0&&e.length<=4294967295}function fr(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&Qe(e.length)&&e.length>=0&&e.length<=9007199254740991}var lr="function"==typeof ArrayBuffer;function cr(e){return lr&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===ee(e)}function sr(e){return"object"==typeof e&&null!==e&&!re(e)}var yr=/./;function hr(e){return"boolean"==typeof e}var pr=Boolean,gr=Boolean.prototype.toString;var mr=z();function wr(e){return"object"==typeof e&&(e instanceof pr||(mr?function(e){try{return gr.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===ee(e)))}function br(e){return hr(e)||wr(e)}function vr(){return new Function("return this;")()}X(br,"isPrimitive",hr),X(br,"isObject",wr);var dr="object"==typeof self?self:null,Er="object"==typeof window?window:null,Ar="object"==typeof global?global:null,Tr="object"==typeof globalThis?globalThis:null;var _r=function(e){if(arguments.length){if(!hr(e))throw new TypeError(M("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return vr()}if(Tr)return Tr;if(dr)return dr;if(Er)return Er;if(Ar)return Ar;throw new Error("unexpected error. Unable to resolve global object.")}(),xr=_r.document&&_r.document.childNodes,jr=Int8Array;var kr="function"==typeof yr||"object"==typeof jr||"function"==typeof xr?function(e){return ae(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?ae(e).toLowerCase():r};function Vr(e){return"function"===kr(e)}function Lr(e,r){if(!(this instanceof Lr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Ze(e))throw new TypeError(M("invalid argument. Real component must be a number. Value: `%s`.",e));if(!Ze(r))throw new TypeError(M("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return Z(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),Z(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}X(Lr,"BYTES_PER_ELEMENT",8),X(Lr.prototype,"BYTES_PER_ELEMENT",8),X(Lr.prototype,"byteLength",16),X(Lr.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),X(Lr.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));var Rr="function"==typeof Math.fround?Math.fround:null,Sr=new me(1);var Br="function"==typeof Rr?Rr:function(e){return Sr[0]=e,Sr[0]};function Ir(e,r){if(!(this instanceof Ir))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Ze(e))throw new TypeError(M("invalid argument. Real component must be a number. Value: `%s`.",e));if(!Ze(r))throw new TypeError(M("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return Z(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Br(e)}),Z(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Br(r)}),this}function Cr(e){return e instanceof Lr||e instanceof Ir||"object"==typeof e&&null!==e&&"number"==typeof e.re&&"number"==typeof e.im}function Fr(e){return Qe(e/2)}function Or(){return"function"==typeof K&&"symbol"==typeof K("foo")&&H(K,"iterator")&&"symbol"==typeof K.iterator}X(Ir,"BYTES_PER_ELEMENT",4),X(Ir.prototype,"BYTES_PER_ELEMENT",4),X(Ir.prototype,"byteLength",8),X(Ir.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),X(Ir.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e}));var Mr=Or()?Symbol.iterator:null;function Ur(e,r,t){Z(e,r,{configurable:!1,enumerable:!1,get:t})}function Nr(e){return e.re}function Pr(e){return e.im}function Yr(e,r){return new me(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}function Wr(e,r){return new se(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}function $r(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(ur(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!Cr(n))return new TypeError(M("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));r.push(Nr(n),Pr(n))}return r}function Gr(e,r,t){var n,i,o,a;for(n=[],a=-1;!(i=e.next()).done;)if(a+=1,ur(o=r.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Cr(o))return new TypeError(M("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(Nr(o),Pr(o))}return n}function Zr(e,r){var t,n,i,o;for(t=r.length,o=0,i=0;i<t;i++){if(!Cr(n=r[i]))return null;e[o]=Nr(n),e[o+1]=Pr(n),o+=2}return e}var Xr=2*me.BYTES_PER_ELEMENT,Jr=Or();function zr(e){return e instanceof Kr||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function qr(e){return e===Kr||"Complex128Array"===e.name}function Dr(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===Xr}function Hr(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===2*Xr}function Kr(){var e,r,t,n;if(r=arguments.length,!(this instanceof Kr))return 0===r?new Kr:1===r?new Kr(arguments[0]):2===r?new Kr(arguments[0],arguments[1]):new Kr(arguments[0],arguments[1],arguments[2]);if(0===r)t=new me(0);else if(1===r)if(ir(arguments[0]))t=new me(2*arguments[0]);else if(fr(arguments[0]))if((n=(t=arguments[0]).length)&&re(t)&&Cr(t[0])){if(null===(t=Zr(new me(2*n),t))){if(!Fr(n))throw new RangeError(M("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new me(arguments[0])}}else{if(Dr(t))t=Yr(t,0);else if(Hr(t))t=Wr(t,0);else if(!Fr(n))throw new RangeError(M("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new me(t)}else if(cr(arguments[0])){if(!Qe((t=arguments[0]).byteLength/Xr))throw new RangeError(M("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Xr,t.byteLength));t=new me(t)}else{if(!sr(arguments[0]))throw new TypeError(M("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===Jr)throw new TypeError(M("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Vr(t[Mr]))throw new TypeError(M("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!Vr((t=t[Mr]()).next))throw new TypeError(M("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=$r(t))instanceof Error)throw t;t=new me(t)}else{if(!cr(t=arguments[0]))throw new TypeError(M("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!ir(e=arguments[1]))throw new TypeError(M("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",e));if(!Qe(e/Xr))throw new RangeError(M("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Xr,e));if(2===r){if(!Qe((n=t.byteLength-e)/Xr))throw new RangeError(M("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Xr,n));t=new me(t,e)}else{if(!ir(n=arguments[2]))throw new TypeError(M("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*Xr>t.byteLength-e)throw new RangeError(M("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*Xr));t=new me(t,e,2*n)}}return X(this,"_buffer",t),X(this,"_length",t.length/2),this}function Qr(e){return e.re}function et(e){return e.im}function rt(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(ur(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!Cr(n))return new TypeError(M("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));r.push(Qr(n),et(n))}return r}function tt(e,r,t){var n,i,o,a;for(n=[],a=-1;!(i=e.next()).done;)if(a+=1,ur(o=r.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Cr(o))return new TypeError(M("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(Qr(o),et(o))}return n}function nt(e,r){var t,n,i,o;for(t=r.length,o=0,i=0;i<t;i++){if(!Cr(n=r[i]))return null;e[o]=Qr(n),e[o+1]=et(n),o+=2}return e}X(Kr,"BYTES_PER_ELEMENT",Xr),X(Kr,"name","Complex64Array"),X(Kr,"from",(function(e){var r,n,o,a,u,f,l,c,s,y,h,p;if(!Vr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!qr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((n=arguments.length)>1){if(!Vr(o=arguments[1]))throw new TypeError(M("invalid argument. Second argument must be a function. Value: `%s`.",o));n>2&&(r=arguments[2])}if(zr(e)){if(c=e.length,o){for(u=(a=new this(c))._buffer,p=0,h=0;h<c;h++){if(Cr(y=o.call(r,e.get(h),h)))u[p]=Nr(y),u[p+1]=Pr(y);else{if(!(ur(y)&&y.length>=2))throw new TypeError(M("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",y));u[p]=y[0],u[p+1]=y[1]}p+=2}return a}return new this(e)}if(fr(e)){if(o){for(c=e.length,l=e.get&&e.set?t("default"):i("default"),h=0;h<c;h++)if(!Cr(l(e,h))){s=!0;break}if(s){if(!Fr(c))throw new RangeError(M("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,c));for(u=(a=new this(c/2))._buffer,h=0;h<c;h++)u[h]=o.call(r,l(e,h),h);return a}for(u=(a=new this(c))._buffer,p=0,h=0;h<c;h++){if(Cr(y=o.call(r,l(e,h),h)))u[p]=Nr(y),u[p+1]=Pr(y);else{if(!(ur(y)&&y.length>=2))throw new TypeError(M("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",y));u[p]=y[0],u[p+1]=y[1]}p+=2}return a}return new this(e)}if(sr(e)&&Jr&&Vr(e[Mr])){if(!Vr((u=e[Mr]()).next))throw new TypeError(M("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if((f=o?Gr(u,o,r):$r(u))instanceof Error)throw f;for(u=(a=new this(c=f.length/2))._buffer,h=0;h<c;h++)u[h]=f[h];return a}throw new TypeError(M("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))})),X(Kr,"of",(function(){var e,r;if(!Vr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!qr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),Ur(Kr.prototype,"buffer",(function(){return this._buffer.buffer})),Ur(Kr.prototype,"byteLength",(function(){return this._buffer.byteLength})),Ur(Kr.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),X(Kr.prototype,"BYTES_PER_ELEMENT",Kr.BYTES_PER_ELEMENT),X(Kr.prototype,"copyWithin",(function(e,r){if(!zr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),X(Kr.prototype,"entries",(function(){var e,r,t,n,i,o,a;if(!zr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,o=-1,a=-2,X(t={},"next",(function(){var r;if(o+=1,i||o>=n)return{done:!0};return r=new Ir(e[a+=2],e[a+1]),{value:[o,r],done:!1}})),X(t,"return",(function(e){if(i=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),Mr&&X(t,Mr,(function(){return r.entries()})),t})),X(Kr.prototype,"get",(function(e){var r;if(!zr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!ir(e))throw new TypeError(M("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return new Ir((r=this._buffer)[e*=2],r[e+1])})),Ur(Kr.prototype,"length",(function(){return this._length})),X(Kr.prototype,"set",(function(e){var r,t,n,i,o,a,u,f,l;if(!zr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!ir(t=arguments[1]))throw new TypeError(M("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(Cr(e)){if(t>=this._length)throw new RangeError(M("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=Nr(e),void(n[t+1]=Pr(e))}if(zr(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*Xr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new me(r.length),f=0;f<r.length;f++)i[f]=r[f];r=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!fr(e))throw new TypeError(M("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e));for(a=e.length,f=0;f<a;f++)if(!Cr(e[f])){o=!0;break}if(o){if(!Fr(a))throw new RangeError(M("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*Xr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new me(a),f=0;f<a;f++)i[f]=r[f];r=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=Nr(u),n[t+1]=Pr(u),t+=2}}));var it=2*se.BYTES_PER_ELEMENT,ot=Or();function at(e){return e instanceof ct||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function ut(e){return e===ct||"Complex64Array"===e.name}function ft(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===it/2}function lt(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===it}function ct(){var e,r,t,n;if(r=arguments.length,!(this instanceof ct))return 0===r?new ct:1===r?new ct(arguments[0]):2===r?new ct(arguments[0],arguments[1]):new ct(arguments[0],arguments[1],arguments[2]);if(0===r)t=new se(0);else if(1===r)if(ir(arguments[0]))t=new se(2*arguments[0]);else if(fr(arguments[0]))if((n=(t=arguments[0]).length)&&re(t)&&Cr(t[0])){if(null===(t=nt(new se(2*n),t))){if(!Fr(n))throw new RangeError(M("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new se(arguments[0])}}else{if(ft(t))t=Yr(t,0);else if(lt(t))t=Wr(t,0);else if(!Fr(n))throw new RangeError(M("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new se(t)}else if(cr(arguments[0])){if(!Qe((t=arguments[0]).byteLength/it))throw new RangeError(M("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",it,t.byteLength));t=new se(t)}else{if(!sr(arguments[0]))throw new TypeError(M("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===ot)throw new TypeError(M("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Vr(t[Mr]))throw new TypeError(M("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!Vr((t=t[Mr]()).next))throw new TypeError(M("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=rt(t))instanceof Error)throw t;t=new se(t)}else{if(!cr(t=arguments[0]))throw new TypeError(M("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!ir(e=arguments[1]))throw new TypeError(M("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",e));if(!Qe(e/it))throw new RangeError(M("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",it,e));if(2===r){if(!Qe((n=t.byteLength-e)/it))throw new RangeError(M("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",it,n));t=new se(t,e)}else{if(!ir(n=arguments[2]))throw new TypeError(M("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*it>t.byteLength-e)throw new RangeError(M("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*it));t=new se(t,e,2*n)}}return X(this,"_buffer",t),X(this,"_length",t.length/2),this}X(ct,"BYTES_PER_ELEMENT",it),X(ct,"name","Complex128Array"),X(ct,"from",(function(e){var r,n,o,a,u,f,l,c,s,y,h,p;if(!Vr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ut(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((n=arguments.length)>1){if(!Vr(o=arguments[1]))throw new TypeError(M("invalid argument. Second argument must be a function. Value: `%s`.",o));n>2&&(r=arguments[2])}if(at(e)){if(c=e.length,o){for(u=(a=new this(c))._buffer,p=0,h=0;h<c;h++){if(Cr(y=o.call(r,e.get(h),h)))u[p]=Qr(y),u[p+1]=et(y);else{if(!(ur(y)&&y.length>=2))throw new TypeError(M("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",y));u[p]=y[0],u[p+1]=y[1]}p+=2}return a}return new this(e)}if(fr(e)){if(o){for(c=e.length,l=e.get&&e.set?t("default"):i("default"),h=0;h<c;h++)if(!Cr(l(e,h))){s=!0;break}if(s){if(!Fr(c))throw new RangeError(M("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",c));for(u=(a=new this(c/2))._buffer,h=0;h<c;h++)u[h]=o.call(r,l(e,h),h);return a}for(u=(a=new this(c))._buffer,p=0,h=0;h<c;h++){if(Cr(y=o.call(r,l(e,h),h)))u[p]=Qr(y),u[p+1]=et(y);else{if(!(ur(y)&&y.length>=2))throw new TypeError(M("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",y));u[p]=y[0],u[p+1]=y[1]}p+=2}return a}return new this(e)}if(sr(e)&&ot&&Vr(e[Mr])){if(!Vr((u=e[Mr]()).next))throw new TypeError(M("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if((f=o?tt(u,o,r):rt(u))instanceof Error)throw f;for(u=(a=new this(c=f.length/2))._buffer,h=0;h<c;h++)u[h]=f[h];return a}throw new TypeError(M("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))})),X(ct,"of",(function(){var e,r;if(!Vr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ut(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),Ur(ct.prototype,"buffer",(function(){return this._buffer.buffer})),Ur(ct.prototype,"byteLength",(function(){return this._buffer.byteLength})),Ur(ct.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),X(ct.prototype,"BYTES_PER_ELEMENT",ct.BYTES_PER_ELEMENT),X(ct.prototype,"copyWithin",(function(e,r){if(!at(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),X(ct.prototype,"entries",(function(){var e,r,t,n,i,o,a;if(!at(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,o=-1,a=-2,X(t={},"next",(function(){var r;if(o+=1,i||o>=n)return{done:!0};return r=new Lr(e[a+=2],e[a+1]),{value:[o,r],done:!1}})),X(t,"return",(function(e){if(i=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),Mr&&X(t,Mr,(function(){return r.entries()})),t})),X(ct.prototype,"get",(function(e){var r;if(!at(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!ir(e))throw new TypeError(M("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return new Lr((r=this._buffer)[e*=2],r[e+1])})),Ur(ct.prototype,"length",(function(){return this._length})),X(ct.prototype,"set",(function(e){var r,t,n,i,o,a,u,f,l;if(!at(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!ir(t=arguments[1]))throw new TypeError(M("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(Cr(e)){if(t>=this._length)throw new RangeError(M("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=Qr(e),void(n[t+1]=et(e))}if(at(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*it,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new se(r.length),f=0;f<r.length;f++)i[f]=r[f];r=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!fr(e))throw new TypeError(M("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e));for(a=e.length,f=0;f<a;f++)if(!Cr(e[f])){o=!0;break}if(o){if(!Fr(a))throw new RangeError(M("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*it,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new se(a),f=0;f<a;f++)i[f]=r[f];r=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=Qr(u),n[t+1]=et(u),t+=2}}));var st=[se,me,_e,de,Be,Ve,Ge,Oe,Pe,Kr,ct],yt=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"],ht=yt.length;function pt(r){var n,o=function(e){var r;if(re(e))return"generic";if(ne(e))return null;for(r=0;r<ht;r++)if(e instanceof st[r])return yt[r];return ue[ae(e)]||null}(r);return typeof(n=r).get===e&&typeof n.set===e?t(o):i(o)}return function(e,r){var t,n,i,o,a,u;if(i=e.length,r.length!==i)throw new RangeError("invalid argument. The first and second arguments must have the same length.");if(0===i)return[];for(t=pt(e),n=pt(r),o=[[],[]],u=0;u<i;u++)a=t(e,u),n(r,u)?o[0].push([u,a]):o[1].push([u,a]);return o}}));
//# sourceMappingURL=index.js.map
