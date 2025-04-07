import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";
import LoadingScreen from "../components/LoadingScreen";

const Example = lazy(() => import("../components/Example"));
const Dashboard = lazy(() => import("../components/Dashboard"));
const Error = lazy(() => import("../components/Error"));
const Admin = lazy(() => import("../components/Admin"));

const App = () => {
  return (
    <Suspense fallback={<LoadingScreen/>}>
    <Routes>
      <Route path="*" element={<Example />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/error" element={<Error />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
    </Suspense>
  );
};

export default App;

