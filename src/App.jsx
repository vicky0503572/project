import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import SignUp from './signup';
import ForgotPassword from './ForgotPassword';
import HomePage from './HomePage';
import NewTask from './NewTask';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/new-task" element={<NewTask />} />
      </Routes>
    </Router>
  );
}

export default App;
