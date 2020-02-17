import React, { memo } from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    marginBottom: 8
  },
  media: {
    width: 250,
    height: 140
  },
  content: {
    flexGrow: 1
  },
  actions: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    flexBasis: 150
  },
  secondBtn: {
    marginTop: 8
  }
});

function Post({ post, history, onDelete }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={post.Image}
        title={post.Title}
      />
      <CardContent className={classes.content}>
        <Typography gutterBottom variant="h5" component="h2">
          {post.Title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Link: {post.Url}
        </Typography>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => history.push(`/schedule/${post.id}`)}
        >
          Schedule
        </Button>
        <Button
          variant="contained"
          className={classes.secondBtn}
          fullWidth
          onClick={() => onDelete(post.id)}
        >
          Dismiss
        </Button>
      </CardActions>
    </Card>
  );
}

export default memo(withRouter(Post));
