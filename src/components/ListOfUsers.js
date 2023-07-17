import React, { useState } from "react";
import "./ListOfUsers.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const ListOfUsers = () => {
  const [allUsers, setAllUsers] = useState([]);
  const navigate = useNavigate();
  React.useEffect(() => {
    axios
      .get("https://panorbit.in/api/users.json")
      .then((res) => {
        setAllUsers(res.data.users);
      })
      .catch((error) => console.log(error));
  });
  const handleClick = (userDetails) => {
    localStorage.setItem("userDetailsState", JSON.stringify(userDetails));
    navigate("/profile");
  };
  return (
    <div className="container">
      <div className="box">
        <div className="heading">
          <h3>Select an account</h3>{" "}
        </div>
        <div className="user-container">
          {allUsers.length > 0 &&
            allUsers.map((user) => {
              return (
                <div className="user">
                  <img
                    className="profile"
                    src={user.profilepicture}
                    alt="avatar"
                  />
                  <Link
                    to={"/profile"}
                    onClick={() => handleClick(user)}
                    className="users"
                  >
                    {user.name}
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default ListOfUsers;
