import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Phone } from 'lucide-react';
import { CheckCircle } from 'lucide-react';

function UserSignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isPhoneSignIn, setIsPhoneSignIn] = useState(false); // Toggle between email and phone sign-in
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [verified, setVerified] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isPhoneSignIn && !otpSent) {
      // Simulate sending OTP
      setOtpSent(true);
    } else if (isPhoneSignIn && otpSent && otp.length === 6) {
      // Simulate OTP verification process
      setVerifying(true);

      // Simulate OTP verification delay
      setTimeout(() => {
        // Simulate successful OTP verification (assuming OTP = '123456' for testing)
        if (otp === '123456') {
          setVerified(true);
          setTimeout(() => {
            navigate('/me'); // Redirect after successful OTP verification
          }, 1000); // Delay to show the success animation
        } else {
          alert('Invalid OTP');
          setVerifying(false);
        }
      }, 2000); // Simulated delay for verification
    } else if (!isPhoneSignIn) {
      // Handle email/password sign-in logic
      // Simulate successful login and redirect
      navigate('/me');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 px-4 py-8">
      <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center">
        {/* Main Container with Glassmorphism */}
        <div className="w-full max-w-[450px] overflow-hidden rounded-2xl border border-white/20 bg-white/30 p-8 shadow-2xl backdrop-blur-xl">
          {/* Logo Section */}
          <div className="mb-8 flex justify-center">
            <div className="flex items-center gap-3">
              <img
                src="../../st.png" // Adjust this path for your logo
                alt="Stetha Logo"
                className="h-12 w-12 object-contain"
              />
              <h1 className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-3xl font-bold text-transparent">
                Stetha
              </h1>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              {/* Toggle between Email and Phone Sign In */}
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setIsPhoneSignIn(false)}
                  className={`text-sm font-medium text-blue-600 ${!isPhoneSignIn ? 'text-blue-600' : ''}`}
                >
                  Sign in with Email
                </button>
                <button
                  type="button"
                  onClick={() => setIsPhoneSignIn(true)}
                  className={`text-sm font-medium text-gray-600 ${isPhoneSignIn ? 'text-blue-600' : ''}`}
                >
                  Sign in with Phone
                </button>
              </div>

              {/* Email Input (Only for email sign-in) */}
              {!isPhoneSignIn && (
                <>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full rounded-xl border border-gray-200 bg-white/50 px-4 py-3 pl-4 backdrop-blur-sm transition-all focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20"
                    />
                  </div>

                  {/* Password Input */}
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="w-full rounded-xl border border-gray-200 bg-white/50 px-4 py-3 backdrop-blur-sm transition-all focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </>
              )}

              {/* Phone Input (Only for phone sign-in) */}
              {isPhoneSignIn && !otpSent && (
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                    <Phone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="w-full rounded-xl border border-gray-200 bg-white/50 px-4 py-3 pl-12 backdrop-blur-sm transition-all focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20"
                  />
                </div>
              )}

              {/* OTP Input Section (Only for phone sign-in) */}
              {isPhoneSignIn && otpSent && !verified && (
                <div>
                  <div className="text-center text-gray-600 mt-4">
                    OTP sent to your phone! Please enter the code below.
                  </div>
                  <div className="relative mt-4">
                    <input
                      type="text"
                      placeholder="Enter OTP"
                      maxLength="6"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      className="w-full rounded-xl border border-gray-200 bg-white/50 px-4 py-3 pl-4 backdrop-blur-sm transition-all focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20"
                    />
                  </div>
                  {verifying && (
                    <div className="text-center text-gray-600 mt-4">
                      Verifying...
                    </div>
                  )}
                </div>
              )}

              {/* Success animation after OTP verification */}
              {verified && (
                <div className="text-center mt-4">
                  <CheckCircle className="h-10 w-10 text-green-500 animate-pulse" />
                  <p className="text-green-500">OTP Verified! Logging in...</p>
                </div>
              )}
            </div>

            {/* Sign In Button */}
            {!verified && (
              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-4 py-3 font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:shadow-blue-500/40 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:ring-offset-2"
              >
                {otpSent ? 'Verify OTP' : 'Sign In'}
              </button>
            )}

            {/* Forgot Password link */}
            <div className="flex items-center justify-between">
              <Link
                to="/me/forgot-password"
                className="rounded-lg bg-blue-50 px-6 py-2 font-medium text-blue-600 transition-colors hover:bg-blue-100"
              >
                Forgot Password?
              </Link>
            </div>
          </form>

          {/* Privacy Policy */}
          <div className="mt-6 text-center text-sm text-gray-500">
            By signing in, you agree to our{' '}
            <a href="#" className="font-medium text-blue-600 hover:underline">
              Terms
            </a>{' '}
            and{' '}
            <a href="#" className="font-medium text-blue-600 hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserSignIn;
