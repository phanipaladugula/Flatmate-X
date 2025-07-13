import React, { useState } from 'react';
import './LoginSignup.css'; // Assuming you'll move your CSS here

const LoginSignup = () => {
    const [isSignUpActive, setIsSignUpActive] = useState(false);
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);

    // Function to show a message
    const showMessage = (msg, error = false) => {
        setMessage(msg);
        setIsError(error);
        const messageBox = document.getElementById('message-box');
        if (messageBox) {
            messageBox.classList.remove('hidden', 'error');
            messageBox.classList.add('show');
            if (error) {
                messageBox.classList.add('error');
            } else {
                messageBox.classList.remove('error');
            }

            // Hide the message after 3 seconds
            setTimeout(() => {
                messageBox.classList.remove('show');
                messageBox.classList.add('hidden');
                setMessage(''); // Clear message after hiding
            }, 3000);
        }
    };

    // Handle Login Form Submission
    const handleLogin = (event) => {
        event.preventDefault();
        console.log('Login form submitted!');
        const email = event.target[0].value;
        const password = event.target[1].value;

        if (email && password) {
            showMessage('Login successful for ' + email + '!');
        } else {
            showMessage('Please enter both email and password.', true);
        }
    };

    // Handle Signup Form Submission
    const handleSignup = (event) => {
        event.preventDefault();
        console.log('Signup form submitted!');
        const name = event.target[0].value;
        const email = event.target[1].value;
        const password = event.target[2].value;
        const cpassword = event.target[3].value;

        const emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (name && email && password && cpassword) {
            if (!emailpattern.test(email)) {
                showMessage('Please enter email in a valid format.', true);
                return;
            }

            if (password !== cpassword) {
                showMessage('Passwords do not match. Please try again', true);
                return;
            }
            showMessage('Account created for ' + name + ' with email ' + email + '!');
            // Optionally switch back to sign-in after successful signup
            setTimeout(() => {
                setIsSignUpActive(false);
            }, 1500);
        } else {
            showMessage('Please fill in all signup fields.', true);
        }
    };

    return (
        <div className="bg-gray-100 flex items-center justify-center min-h-screen p-4">
            <div id="container" className={`relative w-full max-w-xl bg-white rounded-2xl shadow-xl overflow-hidden min-h-[600px] opacity-80 ${isSignUpActive ? 'active-signup' : ''}`}>

                <div id="signin-panel" className="top-0 w-full h-full flex flex-col items-center justify-center p-8">
                    <h2 className="text-4xl font-bold text-gray-800 mb-6">Sign In</h2>
                    <div className="flex space-x-4 mb-6">
                        <button className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300">
                            <img src="https://cdn-icons-png.flaticon.com/128/2168/2168281.png" alt="Facebook" className="w-14 h-14 rounded-full" />
                        </button>
                        <button className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300">
                            <img src="https://cdn-icons-png.flaticon.com/128/10110/10110386.png" alt="Google" className="w-14 h-14 rounded-full" />
                        </button>
                        <button className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300">
                            <img src="https://cdn-icons-png.flaticon.com/128/1384/1384014.png" alt="LinkedIn" className="w-14 h-14 rounded-full" />
                        </button>
                    </div>
                    <p className="text-gray-600 mb-6 text-xl">or use your account</p>
                    <form className="w-full max-w-sm" onSubmit={handleLogin}>
                        <input type="email" placeholder="Email" className="w-full px-4 py-3 mb-4 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B19470]" required />
                        <input type="password" placeholder="Password" className="w-full px-4 py-3 mb-4 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B19470]" required />
                        <a href="#" className="text-m text-gray-600 hover:text-brown-600 transition-colors duration-300 mb-6 block text-right">Forgot your password?</a>
                        <button type="submit" className="w-full bg-[#B19470] text-white py-3 rounded-full hover:bg-[#a08565] transition-colors duration-400 shadow-md">Sign In</button>
                        <p className="text-center text-gray-600 mt-6">Don't have an account? <a href="#" id="show-signup" className="text-[#B19470] hover:underline" onClick={(e) => { e.preventDefault(); setIsSignUpActive(true); }}>Sign Up</a></p>
                    </form>
                </div>

                <div id="signup-panel" className="top-0 w-full h-full flex flex-col items-center justify-center p-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Create Account</h2>
                    <div className="flex space-x-4 mb-6">
                        <button className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300">
                            <img src="https://cdn-icons-png.flaticon.com/128/2168/2168281.png" alt="Facebook" className="w-14 h-14 rounded-full" />
                        </button>
                        <button className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300">
                            <img src="https://cdn-icons-png.flaticon.com/128/10110/10110386.png" alt="Google" className="w-14 h-14 rounded-full" />
                        </button>
                        <button className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300">
                            <img src="https://cdn-icons-png.flaticon.com/128/1384/1384014.png" alt="LinkedIn" className="w-14 h-14 rounded-full" />
                        </button>
                    </div>
                    <p className="text-gray-600 mb-6">or use your email for registration</p>
                    <form className="w-full max-w-sm" onSubmit={handleSignup}>
                        <input type="text" placeholder="Name" className="w-full px-4 py-3 mb-4 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B19470]" required />
                        <input type="email" placeholder="Email" className="w-full px-4 py-3 mb-4 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B19470]" required />
                        <input type="password" placeholder="Password" className="w-full px-4 py-3 mb-4 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B19470]" required />
                        <input type="password" placeholder="Confirm Password" className="w-full px-4 py-3 mb-4 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B19470]" required />
                        <button type="submit" className="w-full bg-[#B19470] text-white py-3 rounded-full hover:bg-[#a08565] transition-colors duration-300 shadow-md mt-4">Sign Up</button>
                        <p className="text-center text-gray-600 mt-6">Already have an account? <a href="#" id="show-signin" className="text-[#B19470] hover:underline" onClick={(e) => { e.preventDefault(); setIsSignUpActive(false); }}>Sign In</a></p>
                    </form>
                </div>
            </div>

            <div id="message-box" className={`message-box ${message ? 'show' : 'hidden'} ${isError ? 'error' : ''}`}>
                {message}
            </div>
        </div>
    );
};

export default LoginSignup;