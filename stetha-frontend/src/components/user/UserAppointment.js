import React, { useState } from 'react';
import { Calendar, MapPin, Video } from 'lucide-react';


//// Sample doctors datathis will be implmented to pull from the datatabase
const doctors = [
    { id: 1, name: "Dr. Sarah Wilson", speciality: "Cardiologist", image: "/api/placeholder/150/150", rating: 4.8 },
    { id: 2, name: "Dr. John Smith", speciality: "Neurologist", image: "/api/placeholder/150/150", rating: 4.9 },
    { id: 3, name: "Dr. Emily Brown", speciality: "Pediatrician", image: "/api/placeholder/150/150", rating: 4.7 },
    { id: 4, name: "Dr. Michael Lee", speciality: "Dermatologist", image: "/api/placeholder/150/150", rating: 4.9 }
  ];

const UserAppointment = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [appointmentType, setAppointmentType] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [showDoctors, setShowDoctors] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);





  // Available time slots
  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM", "04:00 PM"
  ];

  const handleSubmit = () => {
    if (selectedDate && appointmentType && selectedTime) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setShowDoctors(true);
      }, 2000);
    }
  };

  const handleDoctorSelect = (doctor) => {
    setSelectedDoctor(doctor);
  };

  const confirmBooking = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setBookingConfirmed(true);
    }, 1500);
  };

  if (bookingConfirmed) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-semibold mb-2">Booking Confirmed!</h2>
        <p className="text-gray-600 mb-4">A confirmation has been sent to your email and the doctor has been notified.</p>
        <button 
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          onClick={() => window.location.reload()}
        >
          Book Another Appointment
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md mb-6">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">Schedule an Appointment</h2>
        </div>
        <div className="p-6">
          <div className="space-y-6">
            {/* Date Selection */}
            <div className="relative">
              <button
                className="w-full p-3 border rounded-lg flex items-center gap-2 hover:border-blue-500"
                onClick={() => setShowCalendar(!showCalendar)}
              >
                <Calendar className="w-5 h-5" />
                {selectedDate ? selectedDate.toLocaleDateString() : "Select Date"}
              </button>
              
              {showCalendar && (
                <div className="absolute z-10 mt-2 bg-white border rounded-lg shadow-lg p-4">
                  <div className="grid grid-cols-7 gap-2">
                    {Array.from({ length: 31 }, (_, i) => {
                      const date = new Date();
                      date.setDate(date.getDate() + i);
                      return (
                        <button
                          key={i}
                          className="p-2 hover:bg-blue-100 rounded"
                          onClick={() => {
                            setSelectedDate(date);
                            setShowCalendar(false);
                          }}
                        >
                          {date.getDate()}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Appointment Type */}
            <div className="grid grid-cols-2 gap-4">
              <button
                className={`p-4 border rounded-lg flex items-center gap-2 ${
                  appointmentType === 'physical' ? 'bg-blue-50 border-blue-500' : 'hover:border-blue-500'
                }`}
                onClick={() => setAppointmentType('physical')}
              >
                <MapPin className="w-5 h-5" />
                Physical Visit
              </button>
              <button
                className={`p-4 border rounded-lg flex items-center gap-2 ${
                  appointmentType === 'online' ? 'bg-blue-50 border-blue-500' : 'hover:border-blue-500'
                }`}
                onClick={() => setAppointmentType('online')}
              >
                <Video className="w-5 h-5" />
                Online Consultation
              </button>
            </div>

            {/* Time Selection */}
            <div className="space-y-2">
              <label className="block text-sm font-medium">Select Time</label>
              <div className="grid grid-cols-3 gap-2">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    className={`p-2 border rounded ${
                      selectedTime === time ? 'bg-blue-50 border-blue-500' : 'hover:border-blue-500'
                    }`}
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Booking Summary */}
            {(selectedDate || appointmentType || selectedTime) && (
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Booking Summary</h3>
                {selectedDate && (
                  <p className="text-sm">Date: {selectedDate.toLocaleDateString()}</p>
                )}
                {appointmentType && (
                  <p className="text-sm capitalize">Type: {appointmentType}</p>
                )}
                {selectedTime && (
                  <p className="text-sm">Time: {selectedTime}</p>
                )}
              </div>
            )}

            {/* Submit Button */}
            <button
              className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300"
              disabled={!selectedDate || !appointmentType || !selectedTime}
              onClick={handleSubmit}
            >
              Find Available Doctors
            </button>
          </div>
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="flex justify-center items-center py-8">
          <div className="animate-pulse flex space-x-4">
            <div className="w-12 h-12 bg-blue-400 rounded-full animate-bounce"></div>
            <div className="w-12 h-12 bg-blue-400 rounded-full animate-bounce delay-100"></div>
            <div className="w-12 h-12 bg-blue-400 rounded-full animate-bounce delay-200"></div>
          </div>
        </div>
      )}

      {/* Available Doctors */}
      {showDoctors && !loading && !selectedDoctor && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {doctors.map((doctor) => (
            <div 
              key={doctor.id} 
              className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:border-blue-500 border-2 border-transparent"
              onClick={() => handleDoctorSelect(doctor)}
            >
              <div className="flex items-center space-x-4">
                <img src={doctor.image} alt={doctor.name} className="w-16 h-16 rounded-full" />
                <div>
                  <h3 className="font-medium">{doctor.name}</h3>
                  <p className="text-sm text-gray-600">{doctor.speciality}</p>
                  <div className="flex items-center mt-1">
                    <span className="text-yellow-400">★</span>
                    <span className="text-sm ml-1">{doctor.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Doctor Confirmation */}
      {selectedDoctor && !bookingConfirmed && (
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-4">Confirm your booking</h3>
            <p className="mb-4">Would you like to book an appointment with {selectedDoctor.name}?</p>
            <div className="flex space-x-4">
              <button 
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                onClick={confirmBooking}
              >
                Confirm Booking
              </button>
              <button 
                className="px-6 py-2 border rounded-lg hover:bg-gray-50"
                onClick={() => setSelectedDoctor(null)}
              >
                Back
              </button>
            </div>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default UserAppointment;