import { ReactElement } from "react";
import Image from "next/image";
import dayjs from "dayjs";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";

import { UserPost } from "../../types";

function FeedListItem(props: UserPost): ReactElement<UserPost> {
  const formattedDate = dayjs(props.postTimestamp).format(
    "ddd, MMM D, YYYY h:mm A"
  );
  return (
    <ImageListItem
      key={props.id}
      sx={{ height: "500px !important", width: "500px" }}
    >
      <Image
        src={`${props.postImage}`}
        alt={props.postTitle}
        loading="lazy"
        layout="fill"
      />
      <ImageListItemBar
        title={props.postTitle}
        subtitle={`${props.creatorName} - ${formattedDate}`}
        actionIcon={
          <IconButton
            sx={{ color: "rgba(255, 255, 255, 0.54)" }}
            aria-label={`info about ${props.postTitle}`}
          >
            <FavoriteBorder />
          </IconButton>
        }
      />
    </ImageListItem>
  );
}

export default FeedListItem;
