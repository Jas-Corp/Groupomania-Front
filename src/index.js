import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import printSecurityMessage from "./core/utils/consoleSecurity";
import { AuthProvider } from "./contexts/auth-context";

printSecurityMessage(
  "Ne saisissez pas et ne copiez pas du code que vous ne comprenez pas au risque que des personnes malveillantes récupèrent vos informations"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <AuthProvider>
      <App />
    </AuthProvider>
  </Router>
);
