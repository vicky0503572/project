import React, { useState } from 'react';
import './login-signup.css';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
  });

  // 💡 Validators
  const isValidUsername = (name) => /^[a-zA-Z0-9]{8,}$/.test(name);
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPassword = (pass) => pass.length >= 8;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isValidUsername(username) && isValidEmail(email) && isValidPassword(password)) {
      alert("Account created successfully!");
      navigate('/');
    } else {
      alert("Please correct the errors before submitting.");
    }
  };

  // Live validation
  const handleChange = (field, value) => {
    if (field === 'username') {
      setUsername(value);
      setErrors((prev) => ({
        ...prev,
        username: isValidUsername(value) ? '' : 'Username must be at least 8 characters (letters/numbers).',
      }));
    } else if (field === 'email') {
      setEmail(value);
      setErrors((prev) => ({
        ...prev,
        email: isValidEmail(value) ? '' : 'Invalid email format.',
      }));
    } else if (field === 'password') {
      setPassword(value);
      setErrors((prev) => ({
        ...prev,
        password: isValidPassword(value) ? '' : 'Password must be at least 8 characters.',
      }));
    }
  };

  const isFormValid = isValidUsername(username) && isValidEmail(email) && isValidPassword(password);

  return (
    <div className="login-container">
      <button className="back-btn" onClick={() => navigate('/')}>← Back</button>

      <h2 className="title">Create New Account</h2>

      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          placeholder="Choose a username"
          onChange={(e) => handleChange('username', e.target.value)}
        />
        {errors.username && <p className="error">{errors.username}</p>}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          placeholder="Enter your email"
          onChange={(e) => handleChange('email', e.target.value)}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          placeholder="Create a password"
          onChange={(e) => handleChange('password', e.target.value)}
        />
        {errors.password && <p className="error">{errors.password}</p>}

        <button type="submit" className="btn signup" disabled={!isFormValid}>
          Create Account
        </button>
      </form>
    </div>
  );
}

export default SignUp;
