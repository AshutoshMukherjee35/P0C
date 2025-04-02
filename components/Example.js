import React from "react";
import useAuthActions from "../utils/useAuthActions";
import LoadingScreen from "./LoadingScreen";

const Example = () => {
  const { handleLogin, isLoading } = useAuthActions();
console.log(handleLogin)
  return isLoading ? (
    <LoadingScreen />
  ) : (
    <div className="flex flex-col justify-center items-center min-h-screen gap-4">
      <button
        onClick={handleLogin}
        className="cursor-pointer px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition"
      >
        Login / Signup
      </button>
      <button
        onClick={handleLogin}
        className="cursor-pointer px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition"
      >
        Admin Button
      </button>
    </div>
  );
};

export default Example;
