import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Success!") {
          navigate("/home");
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="login-container">
      <div className="login-page">
        <h1 className="title">Login Page</h1>
        <form action="">
          <div className="input-section">
            <div className="input-box">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email"
                autoComplete="false"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-box">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter Password"
                autoComplete="false"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="submit-section">
            <button type="submit" onClick={handleSubmit}>
              Login
            </button>
            <p>
              Don't have an account?{" "}
              <NavLink to="/signup" className="signup-link">
                Signup
              </NavLink>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
