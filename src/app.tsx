import React from "react";
import { createRoot } from "react-dom/client";

const App = () => {
    return <>
        HELLO SARA
    </>
}

const root = createRoot(document.getElementById('root'));

root.render(<App/>);