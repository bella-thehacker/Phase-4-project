import React, { useState } from 'react';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import '../css/membership.css'; 

const Membership = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="membership-container">
      
      <div className="auth-toggle">
        <button onClick={() => setShowLogin(true)} className={showLogin ? 'active' : ''}>
          Login
        </button>
        <button onClick={() => setShowLogin(false)} className={!showLogin ? 'active' : ''}>
          Sign Up
        </button>
      </div>

      <div className={`form-container ${showLogin ? 'show-login' : 'show-register'}`}>
        {showLogin ? <LoginForm /> : <RegisterForm />}
      </div>
    </div>
  );
};

export default Membership;
