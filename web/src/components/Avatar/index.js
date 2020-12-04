import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

function ImageAvatar(props) {
  const classes = useStyles(props);

  return (
    <>
      <Avatar alt="Remy Sharp" src={props.image} className={classes.large} />
    </>
  );
}

export default ImageAvatar;

const useStyles = makeStyles((theme) => ({
  large: (props) => ({
    width: theme.spacing(props.width),
    height: theme.spacing(props.height),
  }),
}));
