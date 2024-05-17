import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "../Pages/Landing.jsx";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Landing />}></Route>
    </Routes>
  );
}

export default Routing;
