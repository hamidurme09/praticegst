import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  btn: {
    height: 65,
    width: 250,
    borderRadius: 8,
  },
}));

const PrimaryButton = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        className={classes.btn}
        style={{ ...props.style }}
      >
        {props.title}
      </Button>
    </div>
  );
};

export default PrimaryButton;