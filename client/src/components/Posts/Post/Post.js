import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/core/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/core/icons/Delete";
import MoreHorizIcon from "@material-ui/core/icons/MoreHoriz";
import useStyles from "./styles";

const Post = ({ post }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={post.selectedFile}
        title={post.title}
      ></CardMedia>
    </Card>
  );
};

export default Post;
