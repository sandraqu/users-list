import TextField from "@mui/material/TextField";

const PhoneField = ({ phoneNumber, setPhoneNumber }) => {
  const regex = /^\d{0,10}(-\d{0,4})?$/;

  const handleChange = (event) => {
    const value = event.target.value;
    // Basic validation: Allow only numbers and dashes
    if (regex.test(value)) {
      setPhoneNumber(value);
    }
  };

  return (
    <TextField
      id="phone-number"
      label="Phone Number"
      type="tel"
      value={phoneNumber}
      onChange={handleChange}
      error={!phoneNumber.match(regex)}
      helperText={
        !phoneNumber.match(regex) && "Please enter a valid phone number"
      }
      sx={{ m: 1 }}
    />
  );
};

export default PhoneField;
