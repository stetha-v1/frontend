import "./index.scss";
import { useParams } from "react-router-dom";

export const SingleAppointmentPage = () => {
  const { id: appointment_id } = useParams();
  return (
    <div className="single__appointment__page">
      <h1>Single Appointment ID-{appointment_id}</h1>
    </div>
  );
};
