import React from "react";
import ReactDOM from "react-dom/client";
import AuthProvider from "./AuthProvider";
import { BrowserRouter } from "react-router";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
);
