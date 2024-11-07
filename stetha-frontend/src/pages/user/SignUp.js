import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Phone } from 'lucide-react';

function UserSignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup submitted:', { email, password, phone });
    navigate('/me');
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
                src="../../st.png"
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
              {/* Email Input */}
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

              {/* Phone Input */}
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
            </div>

            {/* Social Login Section */}
            <div className="space-y-4">
              <div className="relative flex items-center">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="mx-4 flex-shrink text-gray-600">or continue with</span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white/50 px-4 py-3 backdrop-blur-sm transition-all hover:bg-white/80"
                >
                  <img
                    src="/assets/images/google.png"
                    alt="Google"
                    className="h-5 w-5 object-contain"
                  />
                  Google
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white/50 px-4 py-3 backdrop-blur-sm transition-all hover:bg-white/80"
                >
                  <img
                    src="/assets/images/apple.png"
                    alt="Apple"
                    className="h-5 w-5 object-contain"
                  />
                  Apple
                </button>
              </div>
            </div>

            {/* Sign up button */}
            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-4 py-3 font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:shadow-blue-500/40 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:ring-offset-2"
            >
              Create Account
            </button>

            {/* Login link */}
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Have an account?</span>
              <Link
                to="/me/login"
                className="rounded-lg bg-blue-50 px-6 py-2 font-medium text-blue-600 transition-colors hover:bg-blue-100"
              >
                Login
              </Link>
            </div>
          </form>

          {/* Privacy Policy */}
          <div className="mt-6 text-center text-sm text-gray-500">
            By signing up, you agree to our{' '}
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

export default UserSignUp;