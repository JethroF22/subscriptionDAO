import { ReactElement } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CreatorListItem from "./CreatorListItem";

const creators: { id: number; name: string; iconUrl: string }[] = [
  {
    id: 1,
    name: "Chicken Little",
    iconUrl:
      "https://cdn.pixabay.com/photo/2013/07/13/12/15/chicken-159496_960_720.png",
  },
  {
    id: 2,
    name: "Halle Beary",
    iconUrl:
      "https://cdn.pixabay.com/photo/2013/07/13/12/50/animal-160462_960_720.png",
  },
];

function Sidebar(): ReactElement {
  return (
    <Box
      sx={{
        height: "100%",
        width: "15%",
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
          }}
        >
          <Typography
            variant="h5"
            component="div"
            sx={{
              width: "100%",
              fontWeight: "600",
            }}
            gutterBottom
          >
            My Creators
          </Typography>
          {creators.map((creator) => (
            <CreatorListItem
              name={creator.name}
              iconUrl={creator.iconUrl}
              key={creator.id}
            />
          ))}
        </CardContent>
      </Card>
    </Box>
  );
}

export default Sidebar;
