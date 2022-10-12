import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import printSecurityMessage from "./utils/consoleSecurity";

printSecurityMessage(
  "Ne saisissez pas et ne copiez pas du code que vous ne comprenez pas au risque que des personnes malveillantes récupèrent vos informations"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>
);
