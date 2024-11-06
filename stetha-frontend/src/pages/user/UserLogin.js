import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState(Array(6).fill(''));
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isOtpVerifying, setIsOtpVerifying] = useState(false);
  const [otpCounter, setOtpCounter] = useState(60);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowOtpInput(true);
      setOtpCounter(60);
    }, 2000); // Simulates login delay
  };

  const handleOtpChange = (index, value) => {
    if (value.match(/^[0-9]*$/) && (value.length <= 1)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to the next input if the current one is filled
      if (value && index < 5) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleVerifyOtp = () => {
    setIsOtpVerifying(true);
    setTimeout(() => {
      setIsOtpVerifying(false);
      navigate('/me'); // Redirect to '/me' after OTP verification
    }, 2000); // Simulates verification delay
  };

  useEffect(() => {
    if (showOtpInput && otpCounter > 0) {
      const timer = setInterval(() => {
        setOtpCounter((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [showOtpInput, otpCounter]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md md:max-w-lg lg:max-w-xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">User Login</h2>

        {/* Login Form */}
        {!showOtpInput ? (
          <div className="space-y-6">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
            />
            <button
              onClick={handleLogin}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-2 px-6 rounded-lg transition duration-200 ease-in-out"
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
            <p className="text-sm text-blue-500 hover:underline cursor-pointer text-center">
              Forgot Password?
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-center text-gray-800">Enter OTP</h3>
            <div className="flex justify-center space-x-2">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  className="w-12 h-12 text-center border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
                />
              ))}
            </div>
            {otpCounter > 0 ? (
              <p className="text-center text-sm text-gray-500">
                Resend OTP in {otpCounter} seconds
              </p>
            ) : (
              <p className="text-center text-sm text-blue-500 cursor-pointer hover:underline">
                Resend OTP
              </p>
            )}
            <button
              onClick={handleVerifyOtp}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-200 ease-in-out"
            >
              {isOtpVerifying ? 'Verifying...' : 'Verify OTP'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserLogin;
