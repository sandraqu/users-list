import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
const DobField = ({ setField }) => {
  const [dob, setDob] = useState({
    day: "",
    month: "",
    year: "",
  });

  const validate = (name, value) => {
    switch (name) {
      case "day":
        return validateDay(value);
      case "month":
        return validateMonth(value);
      case "year":
        return validateYear(value);
      default:
        return true;
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (value === "") {
      setDob((prevField) => {
        return {
          ...prevField,
          [name]: "",
        };
      });
    } else {
      const isFieldValid = validate(name, value);

      if (isFieldValid) {
        setDob((prevDob) => {
          return {
            ...prevDob,
            [name]: value,
          };
        });

        setField((prevField) => {
          return {
            ...prevField,
            dob: dob.year + "-" + dob.month + "-" + dob.day,
          };
        });
      }
    }
  };

  const validateDay = (value) => {
    const parsedValue = parseInt(value, 10);
    return !isNaN(parsedValue) && parsedValue >= 1 && parsedValue <= 31;
  };

  const validateMonth = (value) => {
    const parsedValue = parseInt(value, 10);
    return !isNaN(parsedValue) && parsedValue >= 1 && parsedValue <= 12;
  };

  const validateYear = (value) => {
    if (value.length > 0) {
      return value.length <= 4 && !isNaN(parseInt(value));
    }
    return false;
  };

  return (
    <div>
      <TextField
        id="month"
        label="Month"
        type="number"
        value={dob.month}
        name="month"
        onChange={handleChange}
      />
      <TextField
        id="day"
        label="Day"
        type="number"
        value={dob.day}
        name="day"
        onChange={handleChange}
      />

      <TextField
        id="year"
        label="Year"
        type="number"
        value={dob.year}
        name="year"
        onChange={handleChange}
      />
    </div>
  );
};

export default DobField;
