import type { NextPage } from "next";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Home: NextPage = () => {
  return (
    <Box
      sx={{
        width: "50vw",
        height: "100vh",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h2"
        gutterBottom
        component="div"
        sx={{
          width: "100%",
          textAlign: "center",
        }}
      >
        Welcome to SubscriptionDAO
      </Typography>
    </Box>
  );
};

export default Home;
