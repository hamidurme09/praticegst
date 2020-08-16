import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import FontSize from "../../../utils/FontSize";
import BtnWithArrow from "../../../utils/BtnWithArrow";

const useStyles = makeStyles((theme) => ({
  constainer: {
    paddingLeft: 118,
    paddingTop: 250,
    paddingBottom: 250,
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 0,
      paddingTop: 50,
      paddingBottom: 0,
      textAlign: 'center'
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: 100,
      paddingBottom: 100,
      textAlign: 'center'
    },
  },
  title: {
    fontSize: FontSize.l,
    [theme.breakpoints.down("md")]: {
      fontSize: FontSize.size40,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: FontSize.size28,
    },
  },
  description: {
    fontSize: FontSize.m,
    color: theme.palette.secondary.textColor,
    width: 340,
    marginTop: 18,
    [theme.breakpoints.down("md")]: {
      fontSize: FontSize.size16,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 13,
      marginTop: 10,
      width: 240,
      margin: "auto"
    },
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
    },
  },
}));

const StackRightSide = () => {
  const classes = useStyles();
  return (
    <div className={classes.constainer}>
      <Typography className={classes.title}>Stake on Ghost</Typography>
      <Typography className={classes.description}>
        You can earn staking rewards by securing the network. It’s that easy!
      </Typography>
      <BtnWithArrow title="Stake your Ghost now" />
    </div>
  );
};

export default StackRightSide;
