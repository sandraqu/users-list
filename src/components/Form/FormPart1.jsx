import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../context/userContext";
import { Box, Button, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import DobField from "./DobField";
import axios from "axios";

const FormPart1 = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [field, setField] = useState({
    firstName: "",
    lastName: "",
    dob: "",
  });
  const [isDisabled, setIsDisabled] = useState(true);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setField((prevField) => {
      return {
        ...prevField,
        [name]: value,
      };
    });
  };

  const addUser = async () => {
    // post

    const response = await axios.post("/api/v1/users", user);
    const newUser = response.data;
    setUser(newUser);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setUser((prevUser) => {
      return {
        ...prevUser,
        firstName: field.firstName,
        lastName: field.lastName,
        dob: field.dob,
      };
    });

    // post
    addUser();
    navigate("/form/part/2");
  };

  useEffect(() => {
    if (field.firstName && field.lastName) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [field.firstName, field.lastName]);

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
            value={field.firstName}
            name="firstName"
            onChange={handleChange}
            sx={{ flex: 1 }}
          />
          <TextField
            id="last-name"
            label="Last Name"
            value={field.lastName}
            name="lastName"
            onChange={handleChange}
            sx={{ flex: 1 }}
            // helperText="Incorrect entry."
          />
        </div>
        <DobField setField={setField} />
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

export default FormPart1;
