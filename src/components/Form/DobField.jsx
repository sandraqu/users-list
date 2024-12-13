import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";

const MIN_AGE_REQUIRED = 18;

const DobField = ({ setField }) => {
  const [dateOfBirth, setDateOfBirth] = useState({
    day: "",
    month: "",
    year: "",
  });
  const [isValidAgeRange, setIsValidAgeRange] = useState(false);
  const [hasValidDob, setHasValidDob] = useState(false);

  useEffect(() => {
    const ageRangeIsValid = validateAgeRange(
      dateOfBirth.year,
      dateOfBirth.month,
      dateOfBirth.day
    );
    setIsValidAgeRange(ageRangeIsValid);
  }, [dateOfBirth]);

  const validateAgeRange = (year, month, day) => {
    if (!year || !month || !day) {
      return false;
    }

    if (year.length !== 4) {
      return false;
    }

    const birthDate = new Date(`${year}-${month}-${day}`);

    // Check if the birthDate is a valid date and not in the future
    if (isNaN(birthDate) || birthDate > new Date()) {
      return false;
    }

    const ageDiffMs = new Date() - birthDate;
    const ageInYears = new Date(ageDiffMs).getUTCFullYear() - 1970;

    return ageInYears >= MIN_AGE_REQUIRED && ageInYears <= 120;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (value === "") {
      setDateOfBirth((prev) => ({ ...prev, [name]: "" }));
      setHasValidDob(false);
    } else {
      const isValid = validateDob(name, value);
      setHasValidDob(isValid);

      if (isValid) {
        setDateOfBirth((prev) => ({ ...prev, [name]: value }));
        if (isValidAgeRange) {
          setField((prev) => ({
            ...prev,
            dob: `${dateOfBirth.year}-${dateOfBirth.month}-${dateOfBirth.day}`,
          }));
        }
      }
    }
  };

  const validateDob = (name, value) => {
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
        value={dateOfBirth.month}
        name="month"
        onChange={handleChange}
      />
      <TextField
        id="day"
        label="Day"
        type="number"
        value={dateOfBirth.day}
        name="day"
        onChange={handleChange}
      />
      <TextField
        id="year"
        label="Year"
        type="number"
        value={dateOfBirth.year}
        name="year"
        onChange={handleChange}
      />
    </div>
  );
};

export default DobField;
