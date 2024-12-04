import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Welcome from "./Welcome.jsx";
import React from "react";

// const element = <h1>Hello</h1>;
const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
