import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  extrapart: {
    position: "absolute",
    top: -21,
    right: 0,
    height: 21,
    backgroundColor: "transparent",
  },
}));

const HoverExtrapart = (props) => {
  const classes = useStyles();
  return <div className={classes.extrapart} style={{ ...props.style }} />;
};

export default HoverExtrapart;
