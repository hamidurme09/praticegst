import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  navbarText: {
    fontWeight: 300,
    marginRight: 25,
    cursor: "pointer",
    textTransform: "capitalize",
    [theme.breakpoints.down("xs")]: {
      marginRight: 0,
    },
  },
}));

const AboutMenu = () => {
  const classes = useStyles();
  return (
    <div>
      <Button color="inherit" className={classes.navbarText}>
        About
      </Button>
    </div>
  );
};

export default AboutMenu;
