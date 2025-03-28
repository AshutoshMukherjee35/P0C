import React from "react";
import Example from "../components/Example";
import Dashboard from "../components/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router";

const App = () => {
    return(
        <Router>
        <Routes>
          <Route path="/" element={<Example/>} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    )
}

export default App;