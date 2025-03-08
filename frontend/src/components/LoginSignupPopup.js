import React, { useState } from "react";
import axios from "axios";
import "../styles.css";

const LoginSignupPopup = ({ closePopup, onLogin }) => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [ageGroup, setAgeGroup] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth", { mobileNumber, ageGroup });

      if (res && res.data) {
        alert(res.data.message);
        onLogin(mobileNumber); // Update phone number in Navbar
      } else {
        alert("Unexpected response from server");
      }
    } catch (error) {
      alert("Error: " + (error.response?.data?.message || "Server issue"));
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <span className="close-icon" onClick={closePopup}>&times;</span>
        <h3>Login / Signup</h3>
        <form onSubmit={handleSubmit}>
          <div className="phone-input">
            <span>📞 +91</span>
            <input 
              type="text" 
              placeholder="Enter Mobile Number" 
              value={mobileNumber} 
              onChange={(e) => setMobileNumber(e.target.value)} 
              required 
            />
          </div>
          <div className="age-input">
            <select value={ageGroup} onChange={(e) => setAgeGroup(e.target.value)} required>
              <option value="">Select Age Group</option>
              <option value="5-17">5-17</option>
              <option value="18-24">18-24</option>
              <option value="35+">35+</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
        <div className="popup-footer">We respect your privacy.</div>
      </div>
    </div>
  );
};

export default LoginSignupPopup;
