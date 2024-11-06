import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState(''); // New state for phone number
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSignupSuccess, setIsSignupSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSignup = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSignupSuccess(true);
      setTimeout(() => {
        navigate('/user/login');
      }, 1500); // Redirects after success message
    }, 2000); // Simulates a delay for signup process
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 via-blue-100 to-white">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md md:max-w-lg lg:max-w-xl transform transition-all duration-500 hover:scale-105">
        {/* Logo */}
        <div className="flex justify-center mb-10">
          <img src="/assets/Stetha.png" alt="Stetha Logo" className="h-24" />
        </div>

        {/* Input Fields */}
        <div className="space-y-6">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
          />
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-500 hover:text-gray-700 transition-all"
            >
              {showPassword ? '🙈' : '👁️'}
            </button>
          </div>
        </div>

        {/* Sign up with Google and Apple */}
        <div className="flex flex-col space-y-4 my-8">
          <button className="w-full flex items-center justify-center py-3 border border-gray-300 rounded-lg shadow-sm text-gray-700 font-semibold hover:bg-gray-100 transition-all">
            <img
              src="/assets/google.png" // Replace with your custom Google icon path
              alt="Google logo"
              className="h-5 w-5 mr-2"
            />
            Sign up with Google
          </button>
          <button className="w-full flex items-center justify-center py-3 border border-gray-300 rounded-lg shadow-sm text-gray-700 font-semibold hover:bg-gray-100 transition-all">
            <img
              src="/assets/apple.png" // Replace with your custom Apple icon path
              alt="Apple logo"
              className="h-5 w-5 mr-2"
            />
            Sign up with Apple
          </button>
        </div>

        {/* Sign up and Doctor Signup */}
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          <button
            onClick={handleSignup}
            className="w-full sm:w-auto bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white font-bold py-2 px-6 rounded-lg transition-all shadow-lg"
          >
            {isLoading ? (
              <div className="flex items-center">
                <div className="loader mr-2"></div> {/* Loader element */}
                Signing up...
              </div>
            ) : isSignupSuccess ? (
              <div className="flex items-center">
                <div className="success-checkmark mr-2"></div> {/* Success checkmark */}
                Success!
              </div>
            ) : (
              'Sign up'
            )}
          </button>
          <button
            onClick={() => navigate('/doc/signup')}
            className="w-full sm:w-auto bg-gray-50 hover:bg-gray-100 text-blue-500 font-semibold py-2 px-6 rounded-lg border border-blue-400 transition-all shadow-md"
          >
            Sign up as a Doctor
          </button>
        </div>

        {/* Already have an account? Login */}
        <p
          onClick={() => navigate('/user/login')}
          className="mt-8 text-center text-sm text-blue-500 hover:underline hover:text-blue-700 cursor-pointer transition-all"
        >
          Already have an account? Login
        </p>

        {/* Privacy Policy */}
        <p className="text-center text-sm text-gray-500 mt-10">
          Read our <a href="/privacy-policy" className="text-blue-500 underline hover:text-blue-700 transition-all">privacy policy</a>
        </p>
      </div>

      {/* Inline Loader and Success Styles */}
      <style>
        {`
          .loader {
            border: 4px solid #f3f3f3; /* Light grey */
            border-top: 4px solid #3498db; /* Blue */
            border-radius: 50%;
            width: 20px;
            height: 20px;
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          .success-checkmark {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: #4CAF50; /* Green */
            position: relative;
          }
          .success-checkmark::after {
            content: '✓';
            font-size: 1rem;
            color: white;
            position: absolute;
            top: 0;
            left: 50%;
            transform: translate(-50%, 15%);
          }
        `}
      </style>
    </div>
  );
};

export default UserSignup;
