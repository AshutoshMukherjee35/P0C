import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Error from "./Error";
import LoadingScreen from "./LoadingScreen";


const Dashboard = () => {
  const { user, logout, isAuthenticated, isLoading } = useAuth0();
  if(isLoading) {
    return <LoadingScreen />
  }

 return !isAuthenticated ? (<Error/>) : (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">Welcome, {user?.name}</h1>
      <p className="text-gray-600">{user?.email}</p>
      <button
        onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
        className="cursor-pointer mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-500"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
