import React, { useEffect } from "react";
import useAuthActions from "../utils/useAuthActions";

const Example = () => {
  const { handleLogin } = useAuthActions();

  return (
    <div className="flex justify-center items-center min-h-screen">
      <button
        onClick={handleLogin}
        className="cursor-pointer px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500"
      >
        Login / Signup
      </button>
    </div>
  );
};

export default Example;
