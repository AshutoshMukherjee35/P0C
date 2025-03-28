import { Auth0Provider } from "@auth0/auth0-react";
import { CLIENT_ID, AUTH_DOMAIN } from "../utils/constants";

const AuthProvider = ({ children }) => {
    return(
        <Auth0Provider
    domain={AUTH_DOMAIN}
    clientId={CLIENT_ID}
    authorizationParams={{
      redirect_uri: `${window.location.origin}/dashboard`,
    }}
  >
    {children}
  </Auth0Provider>
    )
}
export default AuthProvider;