import { useState, useContext } from "react";
import { UserContext } from "../../context/userContext";
import { Link, useNavigate } from "react-router-dom";
import PhoneField from "./PhoneField";
import { Box, Button } from "@mui/material";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";

const FormDetails = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // phones: [{ id: 90000, typeId: 3, countryCodeID: 1, number: '1112223344' }],
    setUser((prevUser) => ({
      ...prevUser,
      phones: [
        ...prevUser.phones,
        { id: prevUser.id, typeId: 3, countryCodeID: 1, number: phoneNumber },
      ],
    }));
    navigate("/");
  };

  return (
    <div>
      <Button variant="text" component={Link} onClick={() => navigate(-1)}>
        go Back
      </Button>
      <h1>FormDetails: Part 2 of 2</h1>
      <Box
        component="form"
        sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
        autoComplete="off"
      >
        <div>
          <PhoneField
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
          />
        </div>
        <Button
          type="submit"
          disabled={phoneNumber === ""}
          variant="contained"
          color="primary"
          size="large"
          endIcon={<AddCircleRoundedIcon />}
          onClick={handleSubmit}
        >
          Add User: Complete
        </Button>
      </Box>
    </div>
  );
};

export default FormDetails;
