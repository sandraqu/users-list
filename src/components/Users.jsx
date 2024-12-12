import { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/userContext";
import { Button, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import axios from "axios";

const Users = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [users, SetUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get("https://localhost:5176/api/v1/users");
      const data = await response.data;
      SetUsers(data);
    };

    getUsers();
  }, []);

  return (
    <div>
      <h1>Users: {user.firstName}</h1>
      <Button
        variant="contained"
        color="primary"
        size="large"
        endIcon={<AddCircleRoundedIcon />}
        onClick={() => navigate("/form/dob")}
      >
        Add New User
      </Button>
      <Divider />
    </div>
  );
};

export default Users;
