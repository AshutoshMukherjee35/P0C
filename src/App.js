import React from "react";
import Example from "../components/Example";
import Dashboard from "../components/Dashboard";
import Error from "../components/Error";
import Admin from "../components/Admin";
import { Routes, Route } from "react-router";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Example />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/error" element={<Error />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
};

export default App;
