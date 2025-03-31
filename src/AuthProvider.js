import { Auth0Provider } from "@auth0/auth0-react";
import { CLIENT_ID, AUTH_DOMAIN, REDIRECT_URI } from "../utils/constants";

const AuthProvider = ({ children }) => {
    return(
        <Auth0Provider
    domain={AUTH_DOMAIN}
    clientId={CLIENT_ID}
    authorizationParams={{
      redirect_uri: REDIRECT_URI,
    }}
  >
    {children}
  </Auth0Provider>
    )
}
export default AuthProvider;