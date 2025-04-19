import React, { useState } from 'react';
import './login-signup.css'; // Shared style for login, signup, forgot password
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Placeholder: connect to backend later to send reset link
    alert(`Reset link sent to ${email}`);
    navigate('/');
  };

  return (
    <div className="login-container">
      <button className="back-btn" onClick={() => navigate('/')}>← Back</button>

      <h2 className="title">Forgot Your Password?</h2>

      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <p className="info-text">
          Please enter your email address, we will send you a link to reset password.
        </p>

        <button type="submit" className="btn confirm">Confirm</button>
      </form>
    </div>
  );
}

export default ForgotPassword;
