import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../context/userContext";
import { Link, useNavigate } from "react-router-dom";
import PhoneField from "./PhoneField";
import { Box, Button } from "@mui/material";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";

/**
 * This component renders a form for the second part of the user creation form.
 * The form consists of a phone field and a submit button. When the form is
 * submitted, the phone number is added to the user's phones in the userContext
 * state and the user is navigated to the users list.
 *
 * @returns A JSX element representing the form.
 */
const FormPart2 = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (/^\d{10}$/.test(phoneNumber.replace(/-/g, ""))) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [phoneNumber]);

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
      <h1>Add Phone: Part 2 of 2</h1>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": {
            m: 1,
          },
          display: "flex",
          flexDirection: "column",
        }}
        autoComplete="off"
      >
        <PhoneField phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} />
        <Button
          type="submit"
          disabled={isDisabled}
          variant="contained"
          color="primary"
          size="large"
          endIcon={<AddCircleRoundedIcon />}
          onClick={handleSubmit}
          sx={{ m: 1 }}
        >
          Add User: Complete
        </Button>
      </Box>
    </div>
  );
};

export default FormPart2;
