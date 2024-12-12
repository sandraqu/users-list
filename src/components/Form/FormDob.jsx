import { useState, useContext, useEffect } from "react";
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

  useEffect(() => {
    if (firstName && lastName) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [firstName, lastName]);

  return (
    <div>
      <Button variant="text" component={Link} onClick={() => navigate(-1)}>
        go Back
      </Button>
      <h1>Add User: Part 1 of 2</h1>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": {
            m: 1,
          },
        }}
        autoComplete="off"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <TextField
            id="first-name"
            label="First Name"
            value={firstName}
            onChange={handleFirstNameChange}
            sx={{ flex: 1 }}
          />
          <TextField
            id="last-name"
            label="Last Name"
            value={lastName}
            onChange={handleLastNameChange}
            sx={{ flex: 1 }}
            // helperText="Incorrect entry."
          />
        </div>
        <DobField setDob={setDob} />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Button
            type="submit"
            disabled={isDisabled}
            variant="contained"
            color="primary"
            size="large"
            endIcon={<AddCircleRoundedIcon />}
            onClick={handleSubmit}
            sx={{ m: 1, flex: 1 }}
          >
            Add User: Continue
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default FormDob;
