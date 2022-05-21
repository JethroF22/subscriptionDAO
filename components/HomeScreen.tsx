import { ReactElement } from "react";
import Box from "@mui/material/Box";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Feed from "./Feed";

function HomeScreen(): ReactElement {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          height: "80vh",
          width: "100%",
          padding: "20px",
        }}
      >
        <Sidebar />
        <Feed />
      </Box>
    </>
  );
}

export default HomeScreen;
