import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  btn: {
    height: 65,
    width: 250,
    borderRadius: 8,
    "&:hover": {
      backgroundColor: "rgb(239,69,101, 0.15)",
    },
    [theme.breakpoints.down("md")]: {
      height: 55,
      width: 200,
      fontSize: 12
    },
    [theme.breakpoints.down("sm")]: {
      margin: 'auto',
    },
    [theme.breakpoints.down("xs")]: {
      width: 167
    },
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
