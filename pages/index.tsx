import { useEffect } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEthers } from "@usedapp/core";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Home: NextPage = () => {
  const { account, isLoading } = useEthers();
  const router = useRouter();

  useEffect(() => {
    if (!account) {
      router.push("/login");
    }
  }, [account, router]);

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
      {isLoading && (
        <Typography
          variant="h2"
          gutterBottom
          component="div"
          sx={{
            width: "100%",
            textAlign: "center",
          }}
        >
          Loading...
        </Typography>
      )}
      {!isLoading && (
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
      )}
    </Box>
  );
};

export default Home;
