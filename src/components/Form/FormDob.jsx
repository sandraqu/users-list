import { useState, useContext } from "react";
import { UserContext } from "../../context/userContext";
import { Box, Button, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import DobField from "./DobField";

const FormDob = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState({
    day: "",
    month: "",
    year: "",
  });
  const [isDisabled, setIsDisabled] = useState(true);
  let fieldIssue = "";
  const handleDisabled = () => {
    if (firstName.trim() === "") {
      fieldIssue += "First name is required. ";
    }
    if (lastName.trim() === "") {
      fieldIssue += "Last name is required. ";
    }
    if (firstName === "First Name") {
      fieldIssue += "First name is required. ";
    }
    if (lastName === "Last Name") {
      fieldIssue += "Last name is required. ";
    }
    if (fieldIssue === "") setIsDisabled(false);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
    handleDisabled();
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
    handleDisabled();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setUser((prevUser) => {
      return {
        ...prevUser,
        firstName,
        lastName,
        dob: dob.year + "-" + dob.month + "-" + dob.day,
      };
    });
    navigate("/form/details");
  };

  return (
    <div>
      <Button variant="text" component={Link} onClick={() => navigate(-1)}>
        go Back
      </Button>
      <h1>Add User: Part 1 of 2</h1>
      <Box
        component="form"
        sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
        autoComplete="off"
      >
        <div>
          <TextField
            id="first-name"
            label="First Name"
            value={firstName}
            onChange={handleFirstNameChange}
          />
          <TextField
            id="last-name"
            label="Last Name"
            value={lastName}
            onChange={handleLastNameChange}
            // helperText="Incorrect entry."
          />
        </div>
        <DobField setDob={setDob} />
        <Button
          type="submit"
          disabled={isDisabled}
          variant="contained"
          color="primary"
          size="large"
          endIcon={<AddCircleRoundedIcon />}
          onClick={handleSubmit}
        >
          Add User: Continue
        </Button>
      </Box>
    </div>
  );
};

export default FormDob;
