import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEthers } from "@usedapp/core";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const Login: NextPage = () => {
  const { activateBrowserWallet } = useEthers();
  const router = useRouter();

  const authenticate = (): void => {
    activateBrowserWallet();
    router.push("/");
  };

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
      <Button variant="outlined" size="large" onClick={authenticate}>
        Login
      </Button>
    </Box>
  );
};

export default Login;
