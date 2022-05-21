import React from "react";
import Box from "@mui/material/Box";
import ProfileSidebar from "./ProfileSidebar";
import Posts from "./Posts";

const profileData = {
  name: "Dr Robotnik",
  avatarUrl: "",
  numSubscribers: 4,
  subscriptionsTotal: 123.45,
};

function ProfileScreen() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
        width: "100%",
        padding: "20px",
      }}
    >
      <ProfileSidebar {...profileData} />
      <Posts />
    </Box>
  );
}

export default ProfileScreen;
