// src/pages/AuthPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import SignInForm from '../components/LoginPage/SignInForm';
import SignUpForm from '../components/LoginPage/SignUpForm';
import MessageBox from '../components/LoginPage/MessageBox';

const AuthPage = () => {
  const navigate = useNavigate();
  const { login, lastClickedProfileId, clearLastClickedProfile } = useAuth();

  const [isSignupActive, setIsSignupActive] = useState(false);
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [showMessageBox, setShowMessageBox] = useState(false);

  const showMessage = (msg, error = false) => {
    setMessage(msg);
    setIsError(error);
    setShowMessageBox(true);
  };

  const hideMessageBox = () => {
    setShowMessageBox(false);
    setMessage('');
    setIsError(false);
  };

  const handleLoginSuccess = (msg, userData) => {
    showMessage(msg);
    login(userData);

    const redirectTo = lastClickedProfileId ? `/profile-view/${lastClickedProfileId}` : '/main-listings';
    clearLastClickedProfile();

    setTimeout(() => {
      navigate(redirectTo);
    }, 1000);
  };

  const handleLoginError = (msg) => {
    showMessage(msg, true);
  };

  const handleSignupSuccess = (msg, userData) => {
    showMessage(msg);
    login(userData);

    setTimeout(() => {
      navigate('/questionnaire');
    }, 1000);
  };

  const handleSignupError = (msg) => {
    showMessage(msg, true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 font-inter"
         style={{ backgroundImage: "url('https://i.pinimg.com/736x/63/eb/ad/63ebad35b5207c38dd8ba136246184ea.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', backgroundColor: '#e2e8f0' }}>

      <div
        id="container"
        className={`relative w-full max-w-xl bg-white rounded-auth-card shadow-xl overflow-hidden min-h-[600px] opacity-90 transition-all duration-700 ease-in-out
          ${isSignupActive ? 'active-signup' : ''}`}
      >
        <div
          id="signin-panel"
          className={`absolute top-0 w-full h-full flex flex-col items-center justify-center p-8 transition-transform duration-700 ease-in-out
            ${isSignupActive ? '-translate-x-full' : 'translate-x-0'} z-20`}
        >
          <SignInForm
            onShowSignup={() => setIsSignupActive(true)}
            onLoginSuccess={handleLoginSuccess}
            onLoginError={handleLoginError}
          />
        </div>

        <div
          id="signup-panel"
          className={`absolute top-0 w-full h-full flex flex-col items-center justify-center p-8 transition-transform duration-700 ease-in-out
            ${isSignupActive ? 'translate-x-0' : 'translate-x-full'} z-10`}
        >
          <SignUpForm
            onShowSignin={() => setIsSignupActive(false)}
            onSignupSuccess={handleSignupSuccess}
            onSignupError={handleSignupError}
          />
        </div>
      </div>
      <MessageBox message={message} isError={isError} show={showMessageBox} onClose={hideMessageBox} />
    </div>
  );
};

export default AuthPage;