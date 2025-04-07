import { Link } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";

const Error = () => {
  const { logout } = useAuth0();
  const handleLogout = (event) => {
    event.preventDefault(); // Prevent default navigation
    logout({ logoutParams: { returnTo: window.location.origin } });
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-3xl font-bold text-red-600">Access Denied</h1>
      <p className="text-gray-700 mt-2">
        You are not authorized to view this page.
      </p>
      <Link
        to="/"
        onClick={handleLogout}
        className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500"
      >
        Go to Login
      </Link>
    </div>
  );
};
export default Error;
