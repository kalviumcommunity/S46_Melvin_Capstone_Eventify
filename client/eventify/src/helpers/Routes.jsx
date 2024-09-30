import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "../Pages/Landing.jsx";
import Signup from "../Pages/Signup.jsx";
import Login from "../Pages/Login.jsx";
import OrganizerSignup from "../Pages/OrgSignup.jsx";
import OrganizerLogin from "../Pages/OrgLogin.jsx";
import CampusEventsPlatform from "../Pages/Home.jsx";
import DetailedEventPage from "../Pages/SingleEvent.jsx"; 

function Routing() {
  return (
    <Routes>
      <Route path="/dj" element={<Landing />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/organizer/signup" element={<OrganizerSignup />}></Route>
      <Route path="/organizer/login" element={<OrganizerLogin />}></Route>
      <Route path="/" element={<CampusEventsPlatform />}></Route>
      <Route path="/event-details" element={<DetailedEventPage />} /> {/* Add this route */}
    </Routes>
  );
}

export default Routing;
