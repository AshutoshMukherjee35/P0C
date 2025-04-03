import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router";

const useAuthActions = () => {
  const { loginWithRedirect, isAuthenticated, isLoading, user } = useAuth0();
  const navigate = useNavigate();

  const handleLogin = async (redirectPath = "/dashboard") => {
    await loginWithRedirect({
      appState: { returnTo: redirectPath }
    });
  };

  useEffect(() => {
    if (isAuthenticated && user) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  return { handleLogin, isLoading };
};

export default useAuthActions;
