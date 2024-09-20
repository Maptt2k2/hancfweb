import React, { useState } from 'react';
import SignUpForm from '../../components/Login/SignUpForm';
import SignInForm from '../../components/Login/SignInForm';
import Toggle from '../../components/Login/Toggle';
import './Login.css';

const Login = () => {
  const [isActive, setIsActive] = useState(false);

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };

  return (
    <div className={`container ${isActive ? 'active' : ''}`} id="container">
      <SignUpForm />
      <SignInForm />
      <Toggle 
        onRegisterClick={handleRegisterClick} 
        onLoginClick={handleLoginClick} 
      />
    </div>
  );
};

export default Login;
