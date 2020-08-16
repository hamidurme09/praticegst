import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import { Grid, Typography } from "@material-ui/core";

import aboutbgleftbottom from "../../../assets/About/privatefast/aboutbgleftbottom.svg";
import aboutbglefttop from "../../../assets/About/privatefast/aboutbglefttop.svg";
import aboutbgright from "../../../assets/About/privatefast/aboutbgright.svg";
import FontSize from "../../../utils/FontSize";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    paddingTop: 95,
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      paddingTop: 30,
    },
  },
  container: {
    [theme.breakpoints.up("md")]: {
      backgroundImage: `url(${aboutbglefttop})`,
      backgroundRepeat: "no-repeat",
    },
  },
  aboutbgleftbottom: {
    position: "absolute",
    top: 265,
    left: 0,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  aboutbgright: {
    position: "absolute",
    top: 130,
    right: 0,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  aboutcontainer: {
    textAlign: "center",
    paddingBottom: 218,
    [theme.breakpoints.down("xs")]: {
      paddingBottom: 80,
    },
  },
  title: {
    fontSize: FontSize.m,
    color: theme.palette.secondary.main,
    fontWeight: "bold",
    lineHeight: 1.2,
  },
  subtitle: {
    fontSize: FontSize.xl,
    paddingTop: 5,
    lineHeight: 1.2,
    [theme.breakpoints.down("md")]: {
      fontSize: FontSize.size40,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 25,
      paddingTop: 15,
    },
  },
  subtitle2: {
    fontSize: FontSize.xl,
    fontWeight: "bold",
    lineHeight: 1.2,
    [theme.breakpoints.down("md")]: {
      fontSize: FontSize.size40,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 25,
    },
  },
  description: {
    fontSize: FontSize.m,
    width: 487,
    color: theme.palette.secondary.textColor,
    paddingTop: 22,
    margin: "0 auto",
    [theme.breakpoints.down("md")]: {
      fontSize: FontSize.size16,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 13,
      paddingTop: 15,
      width: 310,
    },
  },
}));

const AboutUs = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <div className={classes.container}>
        <img
          src={aboutbgleftbottom}
          alt="Overview"
          className={classes.aboutbgleftbottom}
        />
        <img
          src={aboutbgright}
          alt="Overview"
          className={classes.aboutbgright}
        />
        <Grid container className="container">
          <Grid item md={12} sm={12} xs={12} className={classes.aboutcontainer}>
            <Typography className={classes.title}>About Us</Typography>
            <div>
              <Typography className={classes.subtitle}>
                The company that makes
              </Typography>
              <Typography className={classes.subtitle2}>
                cryptocurrency privat and fast
              </Typography>
            </div>
            <div>
              <Typography className={classes.description}>
                A non-profit born at the intersection of blockchain and
                collective intelligence.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default AboutUs;
