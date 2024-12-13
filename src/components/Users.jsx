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
      const response = await axios.get("/api/v1/users");
      SetUsers(response.data);
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
        onClick={() => navigate("/form/part/1")}
      >
        Add New User
      </Button>
      <Divider />
      {users.map((user) => (
        <div key={user.id}>
          <p>
            {user.firstName} {user.lastName}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Users;
