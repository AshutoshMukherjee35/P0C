import React, { useMemo} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Error from "./Error";
import LoadingScreen from "./LoadingScreen";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const { user, logout, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();
 let role = useMemo(() => user?.["http://localhost:1234"]?.[0]);
  if (isLoading) {
    return <LoadingScreen />;
  }

  return !isAuthenticated ? (
    <Error />
  ) : (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">Welcome, {user?.name}</h1>
      <p className="text-gray-600">{user?.email}</p>
      <p className="text-gray-600">{user?.['http://localhost:1234']?.[0]}</p>
      <button
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
        className="cursor-pointer mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-500"
      >
        Logout
      </button>
      {role === "Admin" && (
        <button
          onClick={()=>navigate('/admin')}
          className="cursor-pointer px-6 py-3 mt-6 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition"
        >
          Go to Admin console
        </button>
      )}
    </div>
  );
};

export default Dashboard;
