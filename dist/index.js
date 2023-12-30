"use strict";var c=function(t,e){return function(){return e||t((e={exports:{}}).exports,e),e.exports}};var o=c(function(p,h){
var g=require('@stdlib/array-base-resolve-getter/dist');function f(t,e){var u,i,a,n,v,s,r;if(a=t.length,e.length!==a)throw new RangeError("invalid argument. The first and second arguments must have the same length.");if(a===0)return[];for(u=g(t),i=g(e),n=[[],[]],r=0;r<a;r++)s=u(t,r),v=i(e,r),v?n[0].push([r,s]):n[1].push([r,s]);return n}h.exports=f
});var l=o();module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
