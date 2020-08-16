import React from "react";
import { Avatar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import logo from "../../../assets/ghostlogo-white.png";
import FontSize from "../../../utils/FontSize";

const useStyles = makeStyles((theme) => ({
  logoArea: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    width: 25,
    height: 30,
  },
  logoText: {
    marginLeft: 17,
    fontSize: FontSize.size25,
  },
}));

const Logo = () => {
  const classes = useStyles();
  return (
    <div className={classes.logoArea}>
      <Avatar alt="Ghost Logo" src={logo} className={classes.logo} />
      <Typography className={classes.logoText}>Ghost</Typography>
    </div>
  );
};

export default Logo;
