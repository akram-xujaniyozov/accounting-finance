import React from "react";
import { createRoot } from "react-dom/client";

const App: React.FC = () => {
  return <h1>Webpack was runned</h1>;
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
