import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Example = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <div className="flex justify-center items-center min-h-screen">
      {!isAuthenticated ? (
        <button
          onClick={() => loginWithRedirect()}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500"
        >
          Login / Signup
        </button>
      ) : (
        <button
          onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-500"
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default Example;
