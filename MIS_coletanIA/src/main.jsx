import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./components/styles/reset.css";
import "./components/styles/tokens.css";
import "./components/styles/layout.css";
import "./components/styles/sidebar.css";
import "./components/styles/components.css";
import "./components/styles/pages.css";
import "./components/styles/utilities.css";
import "./components/styles/dashborad.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
