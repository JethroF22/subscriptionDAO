import { ReactElement } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

interface Props {
  name: string;
  avatarUrl: string;
  numSubscribers: number;
  subscriptionsTotal: number;
}

function ProfileSidebar({
  name,
  avatarUrl,
  numSubscribers,
  subscriptionsTotal,
}: Props): ReactElement<Props> {
  return (
    <Box
      sx={{
        width: "25%",
        marginTop: "20px",
        marginRight: "50px",
      }}
    >
      <Card
        variant="outlined"
        sx={{
          height: "100%",
        }}
      >
        <CardContent
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Avatar
            src={avatarUrl}
            sx={{
              width: 100,
              height: 100,
              marginBottom: "20px",
            }}
          />
          <Typography
            variant="h5"
            component="div"
            sx={{
              width: "100%",
              fontWeight: "600",
              fontSize: "28px",
              textAlign: "center",
            }}
            gutterBottom
          >
            {name}
          </Typography>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <Stack>
              <Typography
                variant="h5"
                component="div"
                sx={{
                  width: "100%",
                  fontWeight: "600",
                  fontSize: "24px",
                  textAlign: "center",
                }}
                gutterBottom
              >
                {numSubscribers}
              </Typography>
              <Typography
                variant="h5"
                component="div"
                sx={{
                  width: "100%",
                  fontSize: "20px",
                  textAlign: "center",
                }}
                gutterBottom
              >
                Subscribers
              </Typography>
            </Stack>
            <Divider variant="middle" orientation="vertical" />
            <Stack>
              {" "}
              <Typography
                variant="h5"
                component="div"
                sx={{
                  width: "100%",
                  fontWeight: "600",
                  fontSize: "24px",
                  textAlign: "center",
                }}
                gutterBottom
              >
                ${subscriptionsTotal}
              </Typography>
              <Typography
                variant="h5"
                component="div"
                sx={{
                  width: "100%",
                  fontSize: "20px",
                  textAlign: "center",
                }}
                gutterBottom
              >
                Monthly Revenue
              </Typography>
            </Stack>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default ProfileSidebar;
