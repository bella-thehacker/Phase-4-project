import React, { useState } from 'react';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import '../css/membership.css'; 

const Membership = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [userCredentials, setUserCredentials] = useState({ username: '', password: '' });

  return (
    <div className="membership-container">
      <div className='container-auth'>
      
      <div className="auth-toggle">
        <button onClick={() => setShowLogin(true)} className={showLogin ? 'active' : ''}>
          Login
        </button>
        <button onClick={() => setShowLogin(false)} className={!showLogin ? 'active' : ''}>
          Sign Up
        </button>
      </div>

      <div className={`form-container ${showLogin ? 'show-login' : 'show-register'}`}>
        {showLogin ? (
          <LoginForm userCredentials={userCredentials} />
        ) : (
          <RegisterForm setShowLogin={setShowLogin} setUserCredentials={setUserCredentials} />
        )}
      </div>
    </div>
    </div>
  );
};

export default Membership;
