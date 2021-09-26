import { IconButton } from "@mui/material";
import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import "./UserDashboard.css";

const UserDashboard = ({ userName, handleLogout, profileImage }) => {
  return (
    <div className="dashboardStyle">
      <img
        src={profileImage ? `data:image/jpeg;base64,${profileImage.image}` : ""}
        alt=""
        className="profileImage"
      />
      <b
        style={{
          alignItems: "center",
          display: "flex",
        }}
      >
        {userName}
      </b>
      <IconButton onClick={handleLogout}>
        <LogoutIcon />
      </IconButton>
    </div>
  );
};

export default UserDashboard;
