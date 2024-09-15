import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import "../public/style.scss";

// Importing root component
import App from "./App";

// Taking control root element
const root = createRoot(document.getElementById("root"));

// Rendering root component
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
