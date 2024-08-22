import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import "./index.scss";

interface TableData {
  date: string;
  time: string;
  doctor: string;
  location: string;
}

interface TableComponentProps {
  data: TableData[];
  onEdit: (index: number) => void;
  onDelete: (index: number) => void;
}

export const TableComponent: React.FC<TableComponentProps> = ({
  data,
  onEdit,
  onDelete,
}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Time</th>
          <th>Doctor</th>
          <th>Location</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.date}</td>
            <td>{row.time}</td>
            <td>{row.doctor}</td>
            <td>{row.location}</td>
            <td className="actions">
              <FaEdit className="icon edit" onClick={() => onEdit(index)} />
              <FaTrashAlt
                className="icon delete"
                onClick={() => onDelete(index)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
