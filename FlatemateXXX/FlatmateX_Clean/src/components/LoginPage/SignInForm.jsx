// src/components/LoginPage/SignInForm.jsx
import React, { useState } from 'react';
import SocialAuthButtons from './SocialAuthButtons';

const SignInForm = ({ onShowSignup, onLoginSuccess, onLoginError }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login form submitted!');
    if (email && password) {
      onLoginSuccess(`Login successful for ${email}!`, { email: email }); // Pass user data
      setEmail('');
      setPassword('');
    } else {
      onLoginError('Please enter both email and password.', true);
    }
  };

  return (
    <div className="w-full max-w-sm flex flex-col items-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">Sign In</h2>
      <div className="flex space-x-4 mb-6">
        <button className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300">
          <img src="https://cdn-icons-png.flaticon.com/128/2168/2168281.png" alt="Facebook" className="w-14 h-14 rounded-full"></img>
        </button>
        <button className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300">
          <img src="https://cdn-icons-png.flaticon.com/128/10110/10110386.png" alt="Google" className="w-14 h-14 rounded-full"></img>
        </button>
        <button className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300">
          <img src="https://cdn-icons-png.flaticon.com/128/1384/1384014.png" alt="LinkedIn" className="w-14 h-14 rounded-full"></img>
        </button>
      </div>
      <p className="text-gray-600 mb-6 text-xl">or use your account</p>
      <form className="w-full" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-3 mb-4 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-auth-primary"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-3 mb-4 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-auth-primary"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <a href="#" className="text-m text-gray-600 hover:text-auth-primary transition-colors duration-300 mb-6 block text-right">
          Forgot your password?
        </a>
        <button
          type="submit"
          className="w-full bg-auth-primary text-white py-3 rounded-full hover:bg-auth-primary-dark transition-colors duration-400 shadow-md"
        >
          Sign In
        </button>
        <p className="text-center text-gray-600 mt-6">
          Don't have an account? <a href="#" onClick={onShowSignup} className="text-auth-primary hover:underline">Sign Up</a>
        </p>
      </form>
    </div>
  );
};

export default SignInForm;