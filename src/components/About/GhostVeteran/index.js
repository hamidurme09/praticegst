import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";
import FontSize from "../../../utils/FontSize";

import designDeveloperRightImg from "../../../assets/About/GhostVeteran/GhostVeteranImg.svg";
import BtnWithArrow from "../../../utils/BtnWithArrow";

const useStyles = makeStyles((theme) => ({
  maincontainer: {
    paddingBottom: 160,
    [theme.breakpoints.down("xs")]: {
      paddingBottom: 50,
    },
  },
  container: {
    [theme.breakpoints.down("xs")]: {
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
    lineHeight: 1.2,
  },
  subtitle: {
    fontSize: FontSize.l,
    paddingTop: 20,
    width: 490,
    lineHeight: 1.2,
    [theme.breakpoints.down("md")]: {
      fontSize: FontSize.size40,
    },
    [theme.breakpoints.down("xs")]: {
      width: 250,
      fontSize: 25,
      paddingTop: 15,
    },
  },
  description: {
    fontSize: FontSize.m,
    width: 420,
    color: theme.palette.secondary.textColor,
    paddingTop: 22,
    [theme.breakpoints.down("md")]: {
      fontSize: FontSize.size16,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 13,
      paddingTop: 15,
      width: 290,
    },
  },
  designDeveloperRightImg: {
    [theme.breakpoints.down("xs")]: {
      width: 330,
      paddingTop: 50
    },
  }
}));

const GhostVeteran = () => {
  const classes = useStyles();
  return (
    <div className="container">
      <div className={classes.maincontainer}>
        <Grid container>
          <Grid item md={6} sm={12} xs={12} className={classes.container}>
            <Typography className={classes.title}>Ghost Veterans</Typography>
            <div>
              <Typography className={classes.subtitle}>
                Earn a share of the transaction fees using the staking features
                for Ghost
              </Typography>
            </div>
            <div>
              <Typography className={classes.description}>
                Help secure the GHOST network and earn a share of the
                transaction fees using the staking features for GHOST.
              </Typography>
            </div>
            <BtnWithArrow title="Start now" />
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <img src={designDeveloperRightImg} alt="designDeveloperRightImg" className={classes.designDeveloperRightImg} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default GhostVeteran;
