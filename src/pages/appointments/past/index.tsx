import "./index.scss";
import { TableComponent } from "../../../components";

export const AppointmentsPastPage = () => {
  const tableData = [
    {
      date: "2024-08-22",
      time: "10:00 AM",
      doctor: "Dr. Smith",
      location: "Room 101",
    },
    {
      date: "2024-08-23",
      time: "11:30 AM",
      doctor: "Dr. Johnson",
      location: "Room 202",
    },
  ];

  const handleEdit = (index: number) => {
    console.log(`Edit row at index: ${index}`);
  };

  const handleDelete = (index: number) => {
    console.log(`Delete row at index: ${index}`);
  };
  return (
    <div className="appointments__page">
      <TableComponent
        data={tableData}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <div className="appointments__history">
        <h3>Appointment History</h3>
        <TableComponent
          data={tableData}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};
