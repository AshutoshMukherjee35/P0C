import { Auth0Provider } from "@auth0/auth0-react";
import { CLIENT_ID, AUTH_DOMAIN, REDIRECT_URI } from "../utils/constants";

//our app needs to be wrapped with the Auth0Provider as this will allow us to use the Auth0 context in our app. This component is present in the index.js file that wraps our root element. Here we can see it's taking the children props this means we can wrap any particular component in our application with the Auth0Provider and it will have access to the Auth0 context. The domain is the url in which the react application is running . The clientId is the id of the application in auth0. The redirectUri is the url in which the user will be redirected after the authentication process is complete. The scope is the permissions that the application needs to access the user. The domain and client id is provided in the auth0 dashboard which we need to use.
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