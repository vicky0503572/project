import React, { useState, useEffect } from 'react';
import './login-signup.css';
import { useNavigate, Link } from 'react-router-dom';
import LoginService from './utils/login'; // ✅ import login logic

// Create login instance and add demo user
const loginInstance = new LoginService();
loginInstance.users.push({
  username: 'vicky123',
  email: 'rinotruc@gmail.com',
  password: 'Pmev8084'
});

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/api/test')
      .then((res) => res.text())
      .then((msg) => console.log(msg));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const success = loginInstance.authenticate(email, password);

    if (success) {
      navigate('/home');
    } else {
      alert('Invalid email or password!');
    }
  };

  return (
    <div className="login-container">
      <h1>PRODIGY</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn login" type="submit">Login</button>
        <div className="or">OR</div>
        <div className="bot-btn">
          <Link to="/signup" className="btn signup">Create Account</Link>
          <Link to="/forgot-password" className="btn forgot">Forgot Password</Link>
          </div>
      </form>
    </div>
  );
}

export default Login;
