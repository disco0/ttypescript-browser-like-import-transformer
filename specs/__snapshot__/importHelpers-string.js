import { __dynamicImportTransform as __dynamicImportTransform } from "/polyfill/ttsc-helper.js";
import { __UMDBindCheck as __UMDBindCheck } from "/polyfill/ttsc-helper.js";
import { moduleSpecifierTransform as moduleSpecifierTransform } from "/polyfill/ttsc-helper.js";
const __customImportHelper = (x, y) => y(x);
import { __customDynamicImportHelper as __customDynamicImportHelper } from "/polyfill/ttsc-helper.js";
__customImportHelper(x, __customDynamicImportHelper(__dynamicImportTransform, JSON.parse("{\"after\":true,\"importHelpers\":\"/polyfill/ttsc-helper.js\",\"dynamicImportPathRewrite\":{\"type\":\"custom\",\"function\":\"(x, y) => y(x)\"}}"), __dynamicImportNative, __UMDBindCheck, moduleSpecifierTransform));
function __dynamicImportNative(path) {
    return import(path);
}
