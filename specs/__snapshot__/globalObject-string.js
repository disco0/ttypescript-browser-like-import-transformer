import { __UMDBindCheck as __UMDBindCheck } from "https://unpkg.com/@magic-works/ttypescript-browser-like-import-transformer@1.3.0/es/ttsclib.js";
import { __dynamicImportTransform as __dynamicImportTransform } from "https://unpkg.com/@magic-works/ttypescript-browser-like-import-transformer@1.3.0/es/ttsclib.js";
const a = __UMDBindCheck(global.a, ["default"], "a", "global.a", false).default;
const b = __UMDBindCheck(global.b, ["default"], "b", "global.b", false).default;
const { c, d } = __UMDBindCheck(global.b, ["c", "d"], "b", "global.b", false);
const e = __UMDBindCheck(global.c, [], "c", "global.c", false);
const { c_1, d_1 } = __UMDBindCheck(global.b, ["c", "d"], "b", "global.b", false);
export { c_1 as c, d_1 as d };
const e_1 = __UMDBindCheck(global.c, [], "c", "global.c", false);
export { e_1 as e };
console.log('Should run after all imports', a, b, c, d, e, a1, b1, c1, d1, e1, a2, b2, c2, d2, e2);
"import \"d\" is eliminated because it expected to have no side effects in UMD transform.";
// relative import without ext name
import a1 from "./a.js";
import b1, { c1, d1 } from "./b.js";
import * as e1 from "/c.js";
import "./d.js";
// browser style import
import a2 from 'http://example.com/';
import b2, { c2, d2 } from 'https://example.com';
import * as e2 from 'http://example.com/';
import 'http://example.com/';
const x = 1;
export { x };
// relative import without ext name
export { c1, d1 } from "./b.js";
export * as e1 from "./c.js";
// browser style import
export { c2, d2 } from 'http://example.com/';
export * as e2 from 'http://example.com/';
// Static dynamic import
Promise.resolve(global.a);
import("./a.js");
import('https://example.com');
// dynamic dynamic import
const y = '';
__dynamicImportTransform(JSON.parse("{\"after\":true,\"globalObject\":\"global\"}"), y, __dynamicImportNative, __UMDBindCheck);
// invalid dynamic import (invalid currently)
__dynamicImport2Ary("@magic-works/ttypescript-browser-like-import-transformer: Transform rule for this dependencies found, but this dynamic import has more than 1 argument, transformer don't know how to transform that and keep it untouched.", y, 'second argument');
function __dynamicImportNative(path) {
    return import(path);
}
function __dynamicImport2Ary(reason, ...args) {
    console.warn(reason, ...args);
    return import(args[0], args[1]);
}
