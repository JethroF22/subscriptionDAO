import { ReactElement } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

import { StyledBox } from "./StyledBox";

interface Props {
  name: string;
  iconUrl: string;
}

function CreatorListItem({ name, iconUrl }: Props): ReactElement<Props> {
  return (
    <Box
      sx={{
        width: "100%",
        height: "15%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        "&:hover": {
          backgroundColor: "#ebebeb",
        },
      }}
    >
      <Avatar
        src={iconUrl}
        sx={{
          width: 45,
          height: 45,
        }}
      />
      <Typography
        variant="h6"
        component="div"
        sx={{
          width: "100%",
          marginLeft: "12px",
        }}
        // color="text.secondary"
      >
        {name}
      </Typography>
    </Box>
  );
}

export default CreatorListItem;
