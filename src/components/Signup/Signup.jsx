import React, { useState } from "react";
import "./Signup.css"; // You'll create this CSS file for styling
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (event) => {
    event.preventDefault();

    // Assuming you've validated the form inputs
    const newUser = {
      name,
      email,
      password,
    };

    // Get existing user data from localStorage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Add the new user to the array
    const userExists = existingUsers.some((user) => user.email === email);

    if (userExists) {
      alert("User with this email already exists.");
      return;
    }
    existingUsers.push(newUser);
    // Store updated user array in localStorage
    localStorage.setItem("users", JSON.stringify(existingUsers));

    // Navigate to the main page after successful signup
    navigate("/login");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Sign up</h2>
        <form onSubmit={handleSignup}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Signup</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
