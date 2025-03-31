import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router";

const useAuthActions = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: { returnTo: "/dashboard" }
    });
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  return { handleLogin };
};

export default useAuthActions;
