import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./components/Home.jsx";
import Welcome from "./components/Welcome.jsx";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/welcome' element={<Welcome />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
