import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { Button } from "@mui/material";
import LoginSignupPopup from "./LoginSignupPopup";
import "../styles.css";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  const handleLogin = (phone) => {
    setPhoneNumber(phone);
    setIsLoggedIn(true);
    setShowLoginPopup(false); // Close popup after successful login
  };

  return (
    <nav className="navbar">
      <div className="logo">FitHealth</div>
      <div className="nav-links">
        <button>Workouts</button>
        <button>Diet Plans</button>
        <button>College Store</button>
      </div>
      <div className="nav-icons">
        
        <Button variant="outline">Get Fit App</Button>

        {/* Show phone number if logged in, else show "Login" */}
        <div
          onClick={() => {
            if (!isLoggedIn) setShowLoginPopup(true);
          }}
          className="profile-icon"
        >
          <FaUser /> {isLoggedIn ? phoneNumber : "Login"}
        </div>

       
      </div>

      {showLoginPopup && (
        <LoginSignupPopup closePopup={() => setShowLoginPopup(false)} onLogin={handleLogin} />
      )}
    </nav>
  );
};

export default Navbar;
