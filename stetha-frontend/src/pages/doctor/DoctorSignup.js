import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DoctorSignup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [yearsOfExperience, setYearsOfExperience] = useState('');
  const navigate = useNavigate();

  const handleSignup = () => {
    // Simulate signup process
    console.log('Doctor signing up with basic data:', { firstName, lastName, phone, yearsOfExperience });
    navigate('/doc/onboarding'); // Redirect to onboarding page
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 via-blue-100 to-white">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md md:max-w-lg lg:max-w-xl transform transition-all duration-500 hover:scale-105">
        {/* Logo */}
        <div className="flex justify-center mb-10">
          <img src="/assets/Stetha.png" alt="Stetha Logo" className="h-24" />
        </div>

        {/* Doctor Signup Form */}
        <div className="space-y-6">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
          />
          <input
            type="number"
            placeholder="Years of Experience"
            value={yearsOfExperience}
            onChange={(e) => setYearsOfExperience(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
          />
          <div className="flex justify-center">
            <button
              onClick={handleSignup}
              className="bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white font-bold py-2 px-6 rounded-lg transition-all shadow-lg"
            >
              Sign up as Doctor
            </button>
          </div>
        </div>

        {/* Already have an account? Login */}
        <p
          onClick={() => navigate('/doc/login')}
          className="mt-8 text-center text-sm text-blue-500 hover:underline hover:text-blue-700 cursor-pointer transition-all"
        >
          Already have an account? Login
        </p>
      </div>
    </div>
  );
};

export default DoctorSignup;
