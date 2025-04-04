import React from "react";
import ReactDOM from "react-dom/client";
import AuthProvider from "./AuthProvider";
import { BrowserRouter } from "react-router";
import App from "./App";

//The App which contains just 1 button now is wrapped with AuthProvider to provide the auth0 context and BrowserRouter to enable routing
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
);
