import { Link } from "react-router-dom";

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://e-commerce-api-using-node-js.onrender.com/user/login",
        { email, password },
        { withCredentials: true }
      );
      console.log("Login response:", res.data);
      alert("Login successful");
      console.log("Cookies after login: ", document.cookie);

      navigate("/home");
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2 className="form-heading">Login</h2>
      <input
        type="email"
        className="form-input"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        className="form-input"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit" className="form-button">Login</button>
        <Link to="/"><h3>RegisterForm</h3></Link>
      
    </form>
  );
};

export default LoginForm;
