import { useAuth0 } from "@auth0/auth0-react"
import Error from "./Error";
import React, { useMemo } from "react";
import { useNavigate } from "react-router";
import LoadingScreen from "./LoadingScreen";

const Admin = () => {
    const {user, logout, isLoading} = useAuth0();
    const navigate = useNavigate();

    let role = useMemo(() => user?.["http://localhost:1234"]?.[0]);

    return isLoading ? (<LoadingScreen/>) : role!=='Admin' ? (<Error/>) : (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold">Admin Access Page</h1>
            <button
        onClick={() => navigate(-1)}
        className="cursor-pointer mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500"
      >
       <span> &larr;</span><span> Go Back</span>
      </button>
      <button
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
        className="cursor-pointer mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-500"
      >
        Logout
      </button>
        </div>
    )
}
export default Admin