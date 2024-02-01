// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-resolve-getter@v0.1.0-esm/index.mjs";function r(r,t){var n,s,a,h,i,o;if(a=r.length,t.length!==a)throw new RangeError("invalid argument. The first and second arguments must have the same length.");if(0===a)return[];for(n=e(r),s=e(t),h=[[],[]],o=0;o<a;o++)i=n(r,o),s(t,o)?h[0].push([o,i]):h[1].push([o,i]);return h}export{r as default};
//# sourceMappingURL=index.mjs.map
