import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import { Grid } from "@material-ui/core";

import StackGhostBg from "../../../assets/stackGhost/StakeGhostBg.svg";
import StakeGhostBgVector1 from "../../../assets/stackGhost/StakeGhostBgVector1.svg";
import StakeGhostBgVector2 from "../../../assets/stackGhost/StakeGhostBgVector2.svg";
import StackLeftSide from "./StackLeftSide";
import StackRightSide from "./StackRightSide";

const useStyles = makeStyles((theme) => ({
  body: {
    paddingTop: 115,
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      paddingTop: 50,
    },
  },
  mainarea: {
    [theme.breakpoints.up("md")]: {
      backgroundImage: `url(${StackGhostBg})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    },
  },
  maincontainer: {
    paddingTop: 250,
    paddingBottom: 250,
    [theme.breakpoints.down("xs")]: {
      paddingTop: 0,
      paddingBottom: 0,
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: 0,
      paddingBottom: 0,
    },
  },
  StakeGhostBgVector1: {
    position: "absolute",
    top: 600,
    right: 0,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  StakeGhostBgVector2: {
    position: "absolute",
    top: 690,
    right: 0,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const StackGhost = () => {
  const classes = useStyles();

  return (
    <div className={classes.body}>
      <div className={classes.mainarea}>
        <img
          src={StakeGhostBgVector1}
          alt="Overview"
          className={classes.StakeGhostBgVector1}
        />
        <img
          src={StakeGhostBgVector2}
          alt="Overview"
          className={classes.StakeGhostBgVector2}
        />
        <div className="container">
          <Grid container className={classes.maincontainer}>
            <Grid item md={6} sm={12} xs={12}>
              <StackLeftSide />
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
              <StackRightSide />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default StackGhost;
