import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";



ReactDOM.createRoot(document.getElementById("root")).render(<Auth0Provider
    domain="dev-6mguncdaalrmu27g.us.auth0.com"
    clientId="PB4TcwzXxfS1fy8XxREwxu3xGMChx6Vx"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>);
