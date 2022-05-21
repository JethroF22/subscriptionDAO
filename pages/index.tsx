import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEthers } from "@usedapp/core";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const LandingPage: NextPage = () => {
  const { account, activateBrowserWallet } = useEthers();
  const router = useRouter();

  const openApp = (): void => {
    if (!account) {
      activateBrowserWallet();
    }
    router.push("/home");
  };

  return (
    <Box
      sx={{
        width: "50vw",
        height: "100vh",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
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
      <Button variant="contained" size="large" onClick={openApp}>
        Open
      </Button>
    </Box>
  );
};

export default LandingPage;
