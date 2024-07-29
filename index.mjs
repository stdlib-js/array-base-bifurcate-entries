// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-resolve-getter@v0.2.1-esm/index.mjs";function t(t,s){var n,o,i,d,m,h;if(i=t.length,s.length!==i)throw new RangeError(r("1n3FI"));if(0===i)return[];for(n=e(t),o=e(s),d=[[],[]],h=0;h<i;h++)m=n(t,h),o(s,h)?d[0].push([h,m]):d[1].push([h,m]);return d}export{t as default};
//# sourceMappingURL=index.mjs.map
