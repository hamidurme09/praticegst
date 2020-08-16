import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";
import FontSize from "../../../utils/FontSize";

import stackRewardImg from "../../../assets/About/stackReward/stackRewardImg.png";
import BtnWithArrow from "../../../utils/BtnWithArrow";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: 60, 
    paddingBottom: 210,
    [theme.breakpoints.down("xs")]: {
      paddingTop: 0,
      paddingBottom: 50, 
    },
  },
  stackContainer: {
    paddingTop: 70,
    paddingLeft: 95,
    [theme.breakpoints.down("xs")]: {
      paddingTop: 50,
      paddingLeft: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: 'center'
    },
  },
  title: {
    fontSize: FontSize.m,
    color: theme.palette.secondary.main,
    fontWeight: "bold",
    lineHeight: 1.2
  },
  subtitle: {
    fontSize: FontSize.l,
    paddingTop: 20,
    width: 470,
    lineHeight: 1.2,
    [theme.breakpoints.down("md")]: {
      fontSize: FontSize.size40,
    },
    [theme.breakpoints.down("xs")]: {
      width: 260,
      fontSize: 25,
      paddingTop: 15,
    },
  },
  description: {
    fontSize: FontSize.m,
    width: 420,
    color: theme.palette.secondary.textColor,
    paddingTop: 31,
    [theme.breakpoints.down("md")]: {
      fontSize: FontSize.size16,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 13,
      paddingTop: 15,
      width: 290,
    },
  },
  stackRewardImg: {
    [theme.breakpoints.down("xs")]: {
      width: 330,
    },
  }
}));

const StackReward = () => {
  const classes = useStyles();
  return (
    <div>
      <div className="container">
        <Grid container className={classes.container}>
          <Grid item md={6} sm={12} xs={12}>
            <img src={stackRewardImg} alt="designDeveloperRightImg" className={classes.stackRewardImg} />
          </Grid>
          <Grid item md={6} sm={12} xs={12} className={classes.stackContainer}>
            <Typography className={classes.title}>Staking Rewards</Typography>
            <div>
              <Typography className={classes.subtitle}>
                Earn Rewards by staking coins and fiat
              </Typography>
            </div>
            <div>
              <Typography className={classes.description}>
                Staking is a great way to maximize your holdings in staking
                coins and fiat that would otherwise be sitting in your Kraken
                account.
              </Typography>
              <Typography className={classes.description}>
                Once you have staked your assets you can earn staking rewards on
                top of your holdings and grow them further by compounding those
                future rewards.
              </Typography>
            </div>
            <BtnWithArrow title="Start now" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default StackReward;
