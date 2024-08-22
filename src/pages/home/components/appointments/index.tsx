import React from "react";
import "./index.scss";
import { FaPhoneAlt } from "react-icons/fa";
import { FaVideo } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MdVerified } from "react-icons/md";

// Define the type for a single appointment
interface Appointment {
  name: string;
  location: string;
  speciality: string;
  date: string;
  time: string;
  verified: boolean;
}

export const AppointmentList: React.FC = () => {
  // Random data for appointments
  const appointments: Appointment[] = [
    {
      name: "Dr. John Doe",
      location: "Nairobi, Kenya",
      speciality: "Cardiology",
      date: "2024-08-25",
      time: "10:00 AM",
      verified: true,
    },
    {
      name: "Dr. Jane Smith",
      location: "Mombasa, Kenya",
      speciality: "Dermatology",
      date: "2024-08-26",
      time: "2:00 PM",
      verified: false,
    },
    {
      name: "Dr. Alice Brown",
      location: "Kisumu, Kenya",
      speciality: "Neurology",
      date: "2024-08-27",
      time: "11:30 AM",
      verified: true,
    },
  ];

  return (
    <div className="appointment-list">
      {appointments.map((appointment, index) => (
        <AppointmentCard key={index} {...appointment} />
      ))}
    </div>
  );
};

const AppointmentCard: React.FC<Appointment> = ({
  name,
  location,
  speciality,
  date,
  time,
  verified,
}) => {
  return (
    <div className="appointment-card">
      <div className="appointment-card-profile-container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzVU17NQvjEPTXlVZJtdrG5o3VBkz6DQgV9Q&s"
          alt="doc-image"
          className="appointment-doc-profile"
        />
        <div className="card-info appointments">
          <h4>
            {name}{" "}
            <span>
              {verified ? <MdVerified className="verified-icon" /> : null}
            </span>
          </h4>
          <small>{location}</small>
        </div>
      </div>

      <div className="card-speciality">
        <h5>Clinical Officer</h5>
        <h5 className="doc-speciality">{speciality}</h5>
      </div>

      <div className="card-time">
        <div className="date">
          <h5>Date</h5>
          <small>{date}</small>
        </div>
        <div className="time">
          <h5>Time</h5>
          <small>{time}</small>
        </div>
      </div>

      <div className="card-footer">
        <Link to='appointments' className="card-btn">Appointment</Link>
        <div className="card-talk-to-doc">
          <Link to="#" className="card-talk-link">
            <FaPhoneAlt className="card-phone" />
          </Link>
          <Link to="#" className="card-talk-link">
            <FaVideo className="card-video" />
          </Link>
        </div>
      </div>
    </div>
  );
};
