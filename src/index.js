import React from "react";
import ReactDOM from "react-dom/client";
import AuthProvider from "./AuthProvider";
import App from "./App";



ReactDOM.createRoot(document.getElementById("root")).render(<AuthProvider
    domain="dev-6mguncdaalrmu27g.us.auth0.com"
    clientId="PB4TcwzXxfS1fy8XxREwxu3xGMChx6Vx"
    authorizationParams={{
      redirect_uri: `${window.location.origin}/dashboard`,
    }}
  >
    <App />
  </AuthProvider>);
