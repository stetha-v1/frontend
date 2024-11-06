import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DoctorOnboarding = () => {
  const [certificateNumber, setCertificateNumber] = useState('');
  const [areaOfPractice, setAreaOfPractice] = useState('');
  const [specialization, setSpecialization] = useState('');
  const navigate = useNavigate();

  const handleOnboardingComplete = () => {
    console.log('Doctor onboarding completed with data:', { certificateNumber, areaOfPractice, specialization });
    navigate('/doc/dashboard'); // Redirect to dashboard after onboarding
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 via-blue-100 to-white">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md md:max-w-lg lg:max-w-xl transform transition-all duration-500 hover:scale-105">
        <div className="flex justify-center mb-10">
          <img src="/assets/Stetha.png" alt="Stetha Logo" className="h-24" />
        </div>

        <div className="space-y-6">
          <input
            type="text"
            placeholder="Certificate Number"
            value={certificateNumber}
            onChange={(e) => setCertificateNumber(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
          />
          <input
            type="text"
            placeholder="Area of Practice"
            value={areaOfPractice}
            onChange={(e) => setAreaOfPractice(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
          />
          <input
            type="text"
            placeholder="Specialization"
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
          />

          <div className="flex items-center justify-between">
            <button
              onClick={handleOnboardingComplete}
              className="bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white font-bold py-2 px-6 rounded-lg transition-all shadow-lg"
            >
              Complete Onboarding
            </button>
            <button
              onClick={() => navigate('/doc/dashboard')} // Skip and go to dashboard
              className="text-blue-500 font-semibold py-2 px-6"
            >
              Fill Later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorOnboarding;
