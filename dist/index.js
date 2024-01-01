"use strict";var c=function(t,e){return function(){return e||t((e={exports:{}}).exports,e),e.exports}};var o=c(function(p,h){"use strict";var g=require("@stdlib/array-base-resolve-getter");function f(t,e){var u,i,a,n,v,s,r;if(a=t.length,e.length!==a)throw new RangeError("invalid argument. The first and second arguments must have the same length.");if(a===0)return[];for(u=g(t),i=g(e),n=[[],[]],r=0;r<a;r++)s=u(t,r),v=i(e,r),v?n[0].push([r,s]):n[1].push([r,s]);return n}h.exports=f});var l=o();module.exports=l;
/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
