import React, { useState } from 'react';
import { loginUser } from '../auth';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginUser({ username, password });
      window.location.href = '/productlist';
    } catch (error) {
      alert('Login failed');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label>
            Username:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
        </div>
        <div className="form-group">
            <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
