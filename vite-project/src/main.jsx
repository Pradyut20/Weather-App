import React from "react";
import ReactDOM from "react-dom/client"; // Correct import for React 18+
import { BrowserRouter } from "react-router-dom"; // Correct import statement
import App from "./App.jsx";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
