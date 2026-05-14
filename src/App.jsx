import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Moviedetails from "./Components/Moviedetails";
import Favourites from "./Components/Favourites";
import Login from "./Components/Login";
import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("user");
    if (saved) setCurrentUser(JSON.parse(saved));
  }, []);

  const handleLogout = () => {
    setCurrentUser(null);
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