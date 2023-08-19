import React, { useState } from 'react';
import './Login.css'; // You'll create this CSS file for styling
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();

    // Get existing user data from localStorage
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Find a user with matching email and password
    const user = existingUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      alert('Logged in successfully!');
      // You can also store the user data in a global context or state
      // to indicate that the user is logged in
      navigate('/');
    } else {
      alert('Invalid email or password.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
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

          <button type="submit">Login</button>
        </form>
        <p>
          New user?{' '}
          <Link to="/signup" style={{ color: 'blue' }}>
            Create an account here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
