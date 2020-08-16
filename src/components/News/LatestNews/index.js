import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import { Grid, Typography } from "@material-ui/core";

import latestNewsRightTop from "../../../assets/News/LatestNews/latestNewsRightTop.svg";
import latestNewsTopRightImg from "../../../assets/News/LatestNews/latestNewsTopRightImg.svg";
import latestNewsBottomLeftImg from "../../../assets/News/LatestNews/latestNewsBottomLeftImg.svg";
import latestNewsTopLeftImg from "../../../assets/News/LatestNews/latestNewsTopLeftImg.svg";
import ampersand from "../../../assets/News/LatestNews/ampersand.svg";

import FontSize from "../../../utils/FontSize";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    paddingTop: 72,
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      paddingTop: 50,
    },
  },
  latestNewsTopRightImg: {
    position: "absolute",
    top: 95,
    right: 70,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  latestNewsRightTop: {
    position: "absolute",
    top: 220,
    right: 205,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  latestNewsBottomLeftImg: {
    position: "absolute",
    top: 190,
    left: 70,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  latestNewsTopLeftImg: {
    position: "absolute",
    top: 36,
    left: 70,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  aboutcontainer: {
    textAlign: "center",
  },

  titlearea: {
    position: "relative",
    width: 340,
    margin: "0 auto",
  },

  title: {
    fontSize: FontSize.xl,
    margin: "0 auto",
    lineHeight: 1.2,
    [theme.breakpoints.down("xs")]: {
      fontSize: FontSize.size40,
    },
  },
  ampersand: {
    position: "absolute",
    top: 85,
    left: 18,
    [theme.breakpoints.down("xs")]: {
      top: 55,
      left: 70,
      height: 20,
    },
  },
  description: {
    fontSize: FontSize.m,
    width: 385,
    color: theme.palette.secondary.textColor,
    paddingTop: 10,
    margin: "0 auto",
    [theme.breakpoints.down("md")]: {
      fontSize: FontSize.size16,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 13,
      paddingTop: 15,
      width: 285,
    },
  },
}));

const LatestNews = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <img
        src={latestNewsTopLeftImg}
        alt="Overview"
        className={classes.latestNewsTopLeftImg}
      />
      <img
        src={latestNewsBottomLeftImg}
        alt="Overview"
        className={classes.latestNewsBottomLeftImg}
      />
      <img
        src={latestNewsRightTop}
        alt="Overview"
        className={classes.latestNewsRightTop}
      />
      <img
        src={latestNewsTopRightImg}
        alt="Overview"
        className={classes.latestNewsTopRightImg}
      />

      <div>
        <Grid container className="container">
          <Grid item md={12} sm={12} xs={12} className={classes.aboutcontainer}>
            <div className={classes.titlearea}>
              <Typography className={classes.title}>
                Latest news Updates
              </Typography>
              <img
                src={ampersand}
                alt="ampersand"
                className={classes.ampersand}
              />
            </div>
            <div>
              <Typography className={classes.description}>
                News, tips &amp; best practices and customer stories on planning
                and implementing analytics
              </Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default LatestNews;
