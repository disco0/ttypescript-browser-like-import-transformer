import { __esModuleInterop as __esModuleInterop } from "https://unpkg.com/@magic-works/ttypescript-browser-like-import-transformer@1.1.0/es/ttsclib.js";
import { __UMDBindCheck as __UMDBindCheck } from "https://unpkg.com/@magic-works/ttypescript-browser-like-import-transformer@1.1.0/es/ttsclib.js";
const React = __UMDBindCheck(__esModuleInterop(globalThis.React), ["default"], "react", "globalThis.React", true).default;
const { useState } = __UMDBindCheck(globalThis.React, ["useState"], "react", "globalThis.React", true);
import { Comp } from "./comp.js";
export function App() {
    const [s, sS] = useState('');
    return (React.createElement("h1", null,
        "Hello, world ",
        s,
        React.createElement(Comp, null)));
}
