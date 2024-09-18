import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
/* import TimePicker from "react-time-picker"; */
import "./index.scss";

export const AppointmentBooking: React.FC = () => {
  const [date, setDate] = useState<Date | null>(null);
  /* const [time, setTime] = useState<string | null>("10:00"); */
  const [insurance, setInsurance] = useState<string>("none");
  const [insuranceDiscount, setInsuranceDiscount] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  // Static fee for simplicity
  const fee = 100; // Adjust this as needed

  const calculateTotal = () => {
    let discount = 0;
    if (insurance === "premium") {
      discount = 0.2 * fee;
    } else if (insurance === "basic") {
      discount = 0.1 * fee;
    }
    setInsuranceDiscount(discount);
    setTotal(fee - discount);
  };

  useEffect(() => {
    calculateTotal();
  }, [insurance]);

  return (
    <div className="appointment-booking">
      <div className="calendar-picker">
        <label>Select Date:</label>
        <DatePicker
          selected={date}
          onChange={(selectedDate) => setDate(selectedDate)}
          minDate={new Date()}
          dateFormat="dd/MM/yyyy"
          placeholderText="Pick a date"
        />
      </div>

      {/* <div className="time-picker">
        <label>Select Time:</label>
        <TimePicker onChange={setTime} value={time} />
      </div> */}

      <div className="charges">
        <label>Fee: KSH {fee}</label>
      </div>

      <div className="insurance">
        <label>Select Insurance:</label>
        <select
          value={insurance}
          onChange={(e) => setInsurance(e.target.value)}
        >
          <option value="none">None</option>
          <option value="basic">Basic - 10% off</option>
          <option value="premium">Premium - 20% off</option>
        </select>
      </div>

      <div className="summary">
        <p>Insurance Discount: KSH {insuranceDiscount}</p>
        <p>
          <strong>Total: KSH {total}</strong>
        </p>
      </div>

      <button className="book-btn">Book Appointment</button>
    </div>
  );
};


