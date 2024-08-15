import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const UserDashboard = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Hardcoded credentials for simplicity
    const userEmail = 'user@example.com';
    const userPassword = 'user123';

    if (email === userEmail && password === userPassword) {
      navigate('/user-dashboard-content'); // Redirect to the actual user content page
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="container mt-4">
      <h1>User Dashboard Login</h1>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
        {error && <p className="text-danger mt-2">{error}</p>}
      </form>
    </div>
  );
};

export default UserDashboard;
