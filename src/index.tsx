import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

// Taking control root element
const root = createRoot(document.getElementById("root"));

// Rendering root component
root.render(<App />);
