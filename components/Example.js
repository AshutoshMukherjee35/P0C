import React from "react";
import useAuthActions from "../utils/useAuthActions";
import LoadingScreen from "./LoadingScreen";
import { useAuth0 } from "@auth0/auth0-react";

const Example = () => {
  const { handleLogin, isLoading } = useAuthActions();
  const { isAuthenticated } = useAuth0()

  if (isLoading || isAuthenticated === undefined) return <LoadingScreen />;

  if (isAuthenticated) return null;

  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-4">
      <button
        onClick={()=> handleLogin()}
        className="cursor-pointer px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition"
      >
        Login / Signup
      </button>
    </div>
  );
};

export default Example;
