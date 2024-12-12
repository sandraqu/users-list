import { useState } from "react";
import TextField from "@mui/material/TextField";
const DobField = ({ setDob }) => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const handleDayChange = (event) => {
    const newDay = event.target.value;

    // Check if newDay is a valid number between 1 and 31
    if (validateDay(newDay)) {
      setDay(newDay);
      setDob((prevDob) => ({ ...prevDob, day: newDay }));
    } else {
      console.error(`Invalid day entered: ${newDay}`);
      // Optionally display an error message to the user
    }
  };

  const validateDay = (value) => {
    const parsedValue = parseInt(value, 10);
    return !isNaN(parsedValue) && parsedValue >= 1 && parsedValue <= 31;
  };

  const handleMonthChange = (event) => {
    const newMonth = event.target.value;

    // Check if newMonth is a valid number between 1 and 31
    if (validateMonth(newMonth)) {
      setMonth(newMonth);
      setDob((prevDob) => ({ ...prevDob, month: newMonth }));
    } else {
      console.error(`Invalid day entered: ${newMonth}`);
      // Optionally display an error message to the user
    }
  };

  const validateMonth = (value) => {
    const parsedValue = parseInt(value, 10);
    return !isNaN(parsedValue) && parsedValue >= 1 && parsedValue <= 12;
  };

  const handleYearChange = (event) => {
    const newYear = event.target.value;

    // Check if newYear is a valid number between 1 and 31
    if (validateYear(newYear)) {
      setYear(newYear);
      setDob((prevDob) => ({ ...prevDob, year: newYear }));
    } else {
      console.error(`Invalid day entered: ${newYear}`);
      // Optionally display an error message to the user
    }
  };

  const validateYear = (value) => {
    const parsedValue = parseInt(value, 10);
    return !isNaN(parsedValue) && parsedValue >= 1000 && parsedValue <= 9999;
  };

  return (
    <div>
      <TextField
        id="month"
        label="Month"
        type="number"
        value={month}
        onChange={handleMonthChange}
      />
      <TextField
        id="day"
        label="Day"
        type="number"
        value={day}
        onChange={handleDayChange}
      />

      <TextField
        id="year"
        label="Year"
        type="number"
        value={year}
        onChange={handleYearChange}
      />
    </div>
  );
};

export default DobField;
