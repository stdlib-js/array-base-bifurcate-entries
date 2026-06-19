"use strict";var c=function(t,e){return function(){try{return e||t((e={exports:{}}).exports,e),e.exports}catch(a){throw e=0,a}}};var o=c(function(p,h){"use strict";var g=require("@stdlib/array-base-resolve-getter");function f(t,e){var a,i,n,s,v,u,r;if(n=t.length,e.length!==n)throw new RangeError("invalid argument. The first and second arguments must have the same length.");if(n===0)return[];for(a=g(t),i=g(e),s=[[],[]],r=0;r<n;r++)u=a(t,r),v=i(e,r),v?s[0].push([r,u]):s[1].push([r,u]);return s}h.exports=f});var l=o();module.exports=l;
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
