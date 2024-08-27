import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!name || !email || !password) {
      setMessage("All fields are required!");
      return;
    }

    axios
      .post("http://localhost:3000/register", { name, email, password })
      .then((res) => {
        console.log(res.data);
        navigate("/login")
      })
      .catch((err) => {
        setMessage("Registration failed: " + err.message);
        console.log(err.message);
      });
  };

  return (
    <div className="signup-container">
      <div className="signup-page">
        <h1 className="title">Signup Page</h1>

        <form onSubmit={handleSubmit}>
          <div className="input-section">
            <div className="input-box">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="true"
              />
            </div>
            <div className="input-box">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="true"
              />
            </div>
            <div className="input-box">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="true"
              />
            </div>
          </div>
          <div className="submit-section">
            <button type="submit">Submit</button>
            <p>
              Already have an account?{" "}
              <NavLink to="/login" className="login-link">
                Login
              </NavLink>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
