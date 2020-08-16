import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import { Grid } from "@material-ui/core";

import ghostrewardbg from "../../../assets/ghostReward/ghostrewardbg.svg";
import ghostrewardbgVector from "../../../assets/ghostReward/ghostrewardbgVector.svg";

import RewardLeftSide from "./RewardSection/RewardLeftSide";
import RewardRightSide from "./RewardSection/RewardRightSide";
import DiveDeeper from "../DiveDeeper";
import JoinCommunity from "../JoinCommunity";
import Footer from "../../Footer";

const useStyles = makeStyles((theme) => ({
  maincontainer: {
    [theme.breakpoints.up("md")]: {
      backgroundImage: `url(${ghostrewardbg})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      minHeight: 783,
    },
  },
  container: {
    paddingTop: 300,
    [theme.breakpoints.down("xs")]: {
      paddingTop: 0,
    },
  },
  ghostrewardbgVector: {
    position: "absolute",
    top: 150,
    right: 0,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const GhostReward = () => {
  const classes = useStyles();
  return (
    <div style={{ paddingTop: 50, position: "relative" }}>
      <div className={classes.maincontainer}>
        <img
          src={ghostrewardbgVector}
          alt="Overview"
          className={classes.ghostrewardbgVector}
        />
        <div className={classes.container}>
          <div className="container">
            <Grid container>
              <Grid item md={6} sm={12} xs={12}>
                <RewardLeftSide />
              </Grid>

              <Grid item md={6} sm={12} xs={12}>
                <RewardRightSide />
              </Grid>
            </Grid>
          </div>
        </div>
        <DiveDeeper />
        <JoinCommunity />
        <Footer />
      </div>
    </div>
  );
};

export default GhostReward;
