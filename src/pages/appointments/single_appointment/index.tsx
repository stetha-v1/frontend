import "./index.scss";
import {
  AppointmentBooking,
  AppointmentChatWithDoctor,
  DoctorProfile,
} from "../../../components";

export const SingleAppointmentPage = () => {
  return (
    <div className="sa__page">
      <div className="book__appointment">
        <h1>Follow-up with Dr. John Smith</h1>
        <DoctorProfile
          name="Dr. John Smith"
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzVU17NQvjEPTXlVZJtdrG5o3VBkz6DQgV9Q&s"
          location="New York, USA"
          isOnline={true}
          specialty="Cardiologist"
        />

        <AppointmentBooking />
      </div>
      <AppointmentChatWithDoctor />
    </div>
  );
};
