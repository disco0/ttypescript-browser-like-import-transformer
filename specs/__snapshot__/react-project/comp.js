function __ttsc_importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod
    };
}
const React = __ttsc_importDefault(globalThis.React).default;
const { useState } = __ttsc_importDefault(globalThis.React);
export function Comp() {
    const [s, sS] = useState('');
    return React.createElement("h1", null,
        "Hello, world ",
        s);
}
