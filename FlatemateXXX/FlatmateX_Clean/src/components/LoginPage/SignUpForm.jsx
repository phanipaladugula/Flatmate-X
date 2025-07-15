// src/components/LoginPage/SignUpForm.jsx
import React, { useState } from 'react';
import SocialAuthButtons from './SocialAuthButtons';

const SignUpForm = ({ onShowSignin, onSignupSuccess, onSignupError }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup form submitted!');

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !password || !confirmPassword) {
      onSignupError('Please fill in all signup fields.', true);
      return;
    }

    if (!emailPattern.test(email)) {
      onSignupError('Please enter a valid email format.', true);
      return;
    }

    if (password !== confirmPassword) {
      onSignupError('Passwords do not match. Please try again.', true);
      return;
    }

    onSignupSuccess(`Account created for ${name} with email ${email}!`, { name: name, email: email }); // Pass user data
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="w-full max-w-sm flex flex-col items-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Create Account</h2>
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
      <p className="text-gray-600 mb-6">or use your email for registration</p>
      <form className="w-full" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          className="w-full px-4 py-3 mb-4 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-auth-primary"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
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
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full px-4 py-3 mb-4 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-auth-primary"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-auth-primary text-white py-3 rounded-full hover:bg-auth-primary-dark transition-colors duration-300 shadow-md mt-4"
        >
          Sign Up
        </button>
        <p className="text-center text-gray-600 mt-6">
          Already have an account? <a href="#" onClick={onShowSignin} className="text-auth-primary hover:underline">Sign In</a>
        </p>
      </form>
    </div>
  );
};

export default SignUpForm;