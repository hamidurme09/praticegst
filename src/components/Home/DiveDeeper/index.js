import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import { Grid, Typography, Button } from "@material-ui/core";

import ghostDefiImg from "../../../assets/ghostReward/DiveDeeperImg/ghostDefiImg.svg";
import FontSize from "../../../utils/FontSize";

const useStyles = makeStyles((theme) => ({
  maincontainer: {
    paddingTop: 160,
    [theme.breakpoints.down("xs")]: {
      paddingTop: 50,
    },
  },
  container: {
    paddingTop: 62,
    [theme.breakpoints.down("xs")]: {
      paddingTop: 25,
    },
  },
  imgTextbtn: {
    [theme.breakpoints.down("xs")]: {
      paddingBottom: 25,
    },
  },
  header: {
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      textAlign: "left",
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
  subtitle: {
    fontSize: FontSize.m,
    color: theme.palette.secondary.textColor,
    marginTop: 8,
    [theme.breakpoints.down("md")]: {
      fontSize: FontSize.size16,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 13,
      marginTop: 0,
    },
  },
  ghostDefiImg: {
    borderRadius: 15,
    width: 335,
  },
  btn: {
    marginTop: 55,
    [theme.breakpoints.down("xs")]: {
      marginTop: 10,
    },
  },
  button: {
    backgroundColor: "rgba(239,69,101, 0.1)",
    border: "none",
    outline: "none",
    color: theme.palette.secondary.main,
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: FontSize.size16,
    borderRadius: 4,
    cursor: "pointer",
    marginRight: 10,
    [theme.breakpoints.down("xs")]: {
      padding: "10px 20px",
      fontSize: 12,
    },
  },
  defiTitle: {
    fontSize: FontSize.size25,
    width: 330,
    marginTop: 21,
    [theme.breakpoints.down("xs")]: {
      width: 250,
      lineHeight: 1.2,
      marginTop: 12,
      fontSize: 20,
    },
  },
  defiDescription: {
    fontSize: FontSize.m,
    width: 350,
    color: theme.palette.secondary.textColor,
    marginTop: 15,
    [theme.breakpoints.down("xs")]: {
      width: 250,
      marginTop: 10,
      fontSize: 13,
    },
  },
  time: {
    fontSize: FontSize.sm,
    color: "#72757E",
    marginTop: 15,
    [theme.breakpoints.down("xs")]: {
      marginTop: 10,
    },
  },

  learnMore: {
    textAlign: "center",
  },

  btnLearnMore: {
    height: 65,
    width: 200,
    borderRadius: 8,
    marginTop: 87,
    border: "1px solid #fff",
    fontSize: FontSize.size16,
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "rgba(255,255,255, 0.15)",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: 25,
      height: 55,
      width: 160,
    },
  },
}));

const arr = [
  {
    btn: "news",
  },
  {
    btn: "Update",
  },
  {
    btn: "Coming soon",
  },
];

const DiveDeeper = () => {
  const classes = useStyles();
  return (
    <div className={classes.maincontainer}>
      <div className="container">
        <div className={classes.header}>
          <Typography className={classes.title}>
            Want to dive deeper?
          </Typography>
          <Typography className={classes.subtitle}>
            Learn more about ghost community
          </Typography>
        </div>
        <Grid container className={classes.container}>
          {arr.map((data) => (
              <Grid item md={4} sm={6} xs={12} className={classes.imgTextbtn}>
                <img
                  src={ghostDefiImg}
                  alt="Ghost Defi Img"
                  className={classes.ghostDefiImg}
                />
                <div className={classes.btn}>
                  <button className={classes.button}>{data.btn}</button>
                </div>
                <Typography className={classes.defiTitle}>
                  Ghost is coming to DeFi privacy USD Stablecoin
                </Typography>
                <Typography className={classes.defiDescription}>
                  Aliquam, massa vitae neque sed volutpat nulla vulputate tempor
                  commodo. Aliquam turpis cursus vel amet odio...
                </Typography>
                <Typography className={classes.time}>July 16, 2020</Typography>
              </Grid>
          ))}
        </Grid>
      </div>
      <div className={classes.learnMore}>
        <Button
          variant="contained"
          color="primary"
          className={classes.btnLearnMore}
        >
          Learn more
        </Button>
      </div>
    </div>
  );
};

export default DiveDeeper;
