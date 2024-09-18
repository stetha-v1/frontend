import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineLocalHospital } from "react-icons/md";
import { BsDot } from "react-icons/bs";
import "./index.scss";

type DoctorProfileProps = {
  name: string;
  imageUrl: string;
  location: string;
  isOnline: boolean;
  specialty: string;
};

export const DoctorProfile: React.FC<DoctorProfileProps> = ({
  name,
  imageUrl,
  location,
  isOnline,
  specialty,
}) => {
  return (
    <div className="doctor-profile">
      <div className="doctor-profile__image">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="info">
        <p>
          <MdOutlineLocalHospital className="icon" />
          <span>{specialty}</span>
        </p>
        <p>
          <FaMapMarkerAlt className="icon" />
          <span>{location}</span>
        </p>

        {isOnline ? (
          <p className="online">
            <BsDot className="icon-online" />
            <span>Online</span>
          </p>
        ) : (
          <p className="offline">
            <BsDot className="icon-offline" />
            <span>Offline</span>
          </p>
        )}
      </div>
    </div>
  );
};
