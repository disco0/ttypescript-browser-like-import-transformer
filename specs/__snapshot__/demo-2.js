import { __esModuleInterop as __esModuleInterop } from "https://unpkg.com/@magic-works/ttypescript-browser-like-import-transformer@1.1.0/es/ttsclib.js";
import { __UMDBindCheck as __UMDBindCheck } from "https://unpkg.com/@magic-works/ttypescript-browser-like-import-transformer@1.1.0/es/ttsclib.js";
const React = __UMDBindCheck(__esModuleInterop(globalThis.React), ["default"], "react", "globalThis.React", true).default;
const MUI = __UMDBindCheck(window.MaterialUI.core, [], "@material-ui/core", "window.MaterialUI.core", true);
const MUILab = __UMDBindCheck(window.MaterialUI.labs, [], "@material-ui/labs", "window.MaterialUI.labs", true);
import lodash from "https://cdn.pika.dev/lodash-es";
import * as AsyncCall from "https://unpkg.com/async-call-rpc@latest/?module";
import fs from 'std:fs';
import isarray from "/web_modules/isarray.js";
import "/web_modules/other-polyfill.js";
console.log(React, lodash, AsyncCall, fs, isarray, MUI, MUILab);
