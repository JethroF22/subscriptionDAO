import { ReactElement } from "react";
import { alpha } from "@mui/material/styles";
import ImageList from "@mui/material/ImageList";
import Box from "@mui/material/Box";
import ImageListItem from "@mui/material/ImageListItem";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

import { Post } from "../types";
import FeedListItem from "./FeedListItem";
import SearchBar from "./SearchBar";

const posts: Post[] = [
  {
    id: "1",
    creatorName: "Chicken Little",
    creatorIconUrl:
      "https://cdn.pixabay.com/photo/2013/07/13/12/15/chicken-159496_960_720.png",
    postTitle: "The Sky Is Falling",
    postImage:
      "https://cdn.pixabay.com/photo/2018/05/30/00/24/thunderstorm-3440450_960_720.jpg",
    postTimestamp: new Date(),
  },
  {
    id: "2",
    creatorName: "Halle Beary",
    creatorIconUrl:
      "https://cdn.pixabay.com/photo/2013/07/13/12/50/animal-160462_960_720.png",
    postTitle: "Mountain Climbing for Dummies",
    postImage:
      "https://cdn.pixabay.com/photo/2022/05/16/01/15/road-7199274_960_720.jpg",
    postTimestamp: new Date(),
  },
  {
    id: "3",
    creatorName: "Chicken Little",
    creatorIconUrl:
      "https://cdn.pixabay.com/photo/2013/07/13/12/15/chicken-159496_960_720.png",
    postTitle: "The Sky Is Falling",
    postImage:
      "https://cdn.pixabay.com/photo/2018/05/30/00/24/thunderstorm-3440450_960_720.jpg",
    postTimestamp: new Date(),
  },
  {
    id: "4",
    creatorName: "Halle Beary",
    creatorIconUrl:
      "https://cdn.pixabay.com/photo/2013/07/13/12/50/animal-160462_960_720.png",
    postTitle: "Mountain Climbing for Dummies",
    postImage:
      "https://cdn.pixabay.com/photo/2022/05/16/01/15/road-7199274_960_720.jpg",
    postTimestamp: new Date(),
  },
  {
    id: "5",
    creatorName: "Chicken Little",
    creatorIconUrl:
      "https://cdn.pixabay.com/photo/2013/07/13/12/15/chicken-159496_960_720.png",
    postTitle: "The Sky Is Falling",
    postImage:
      "https://cdn.pixabay.com/photo/2018/05/30/00/24/thunderstorm-3440450_960_720.jpg",
    postTimestamp: new Date(),
  },
  {
    id: "6",
    creatorName: "Halle Beary",
    creatorIconUrl:
      "https://cdn.pixabay.com/photo/2013/07/13/12/50/animal-160462_960_720.png",
    postTitle: "Mountain Climbing for Dummies",
    postImage:
      "https://cdn.pixabay.com/photo/2022/05/16/01/15/road-7199274_960_720.jpg",
    postTimestamp: new Date(),
  },
];

function Feed(): ReactElement {
  return (
    <ImageList
      sx={{
        width: "40%",
        height: "100%",
        marginLeft: "50px",
        overflowX: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      cols={1}
    >
      <ImageListItem
        key="Subheader"
        cols={2}
        rows={1}
        sx={{ marginBottom: "20px", width: "100%" }}
      >
        <Stack
          direction="row"
          spacing={1}
          divider={<Divider orientation="vertical" flexItem />}
        >
          <Typography
            variant="h5"
            component="div"
            sx={{
              fontWeight: "500",
            }}
            gutterBottom
          >
            Posts
          </Typography>
          <Box width="30%">
            <SearchBar
              sx={{
                backgroundColor: alpha("#e5e5e5", 0.25),
                "&:hover": {
                  backgroundColor: alpha("#e5e5e5", 0.5),
                },
              }}
            />
          </Box>
        </Stack>
      </ImageListItem>
      {posts.map((post) => (
        <Box
          sx={{ height: "500px", width: "500px", marginBottom: "50px" }}
          key={post.id}
        >
          <FeedListItem {...post} />
        </Box>
      ))}
    </ImageList>
  );
}

export default Feed;
