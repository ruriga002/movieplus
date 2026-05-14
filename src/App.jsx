// import React hooks
import { useState, useEffect } from "react";
// imprting routing tools from react-router-dom
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import application components
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Moviedetails from "./Components/Moviedetails";
import Favourites from "./Components/Favourites";
import Login from "./Components/Login";
// import application styles
import "./App.css";

function App() {
  // store the currently logged-in user
  const [currentUser, setCurrentUser] = useState(null);

  // run once when the app loads
  useEffect(() => {
    //Get saved user from local storage and set it as the current user
    const saved = localStorage.getItem("user");
    if (saved) setCurrentUser(JSON.parse(saved));
  }, []);
  // function to handle user logout
  const handleLogout = () => {
    // clear user state
    setCurrentUser(null);
    // remove user from local storage
    localStorage.removeItem("user");
  };

  return (
    <BrowserRouter>
      <Navbar currentUser={currentUser} onLogout={handleLogout} />
      <Routes>
        <Route path="/login" element={<Login setCurrentUser={setCurrentUser} />} />
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Moviedetails currentUser={currentUser} />} />
        <Route path="/favourites" element={<Favourites currentUser={currentUser} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App