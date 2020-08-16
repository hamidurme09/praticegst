import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";
import FontSize from "../../../utils/FontSize";

import USDStableLeftImg from "../../../assets/News/USDStable/USDStableLeftImg.svg";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: 175,
    [theme.breakpoints.down("xs")]: {
      paddingTop: 50,
    },
  },
  stackContainer: {
    paddingTop: 25,
    paddingLeft: 70,
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 0,
      paddingTop: 10,
    },
  },
  USDStableLeftImg: {
    [theme.breakpoints.down("xs")]: {
      width: 330,
    },
  },
  button: {
    backgroundColor: "rgba(239,69,101, 0.1)",
    border: "none",
    color: theme.palette.secondary.main,
    padding: "15px 28px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: FontSize.size16,
    borderRadius: 4,
    cursor: "pointer",
    marginRight: 10,
    marginBottom: 10,
    [theme.breakpoints.down("xs")]: {
      padding: "10px 20px",
      fontSize: 12,
      marginBottom: 0,
    },
  },
  title: {
    fontSize: 33,
    paddingTop: 15,
    width: 450,
    fontWeight: "bold",
    lineHeight: 1.2,
    [theme.breakpoints.down("xs")]: {
      fontSize: 25,
      width: 335,
      paddingTop: 10,
    },
  },
  description: {
    fontSize: FontSize.m,
    width: 400,
    color: theme.palette.secondary.textColor,
    paddingTop: 12,
    [theme.breakpoints.down("md")]: {
      fontSize: FontSize.size16,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 13,
      paddingTop: 10,
      width: 285,
    },
  },
  time: {
    fontSize: FontSize.sm,
    color: "#72757E",
    paddingTop: 20,
    [theme.breakpoints.down("xs")]: {
      fontSize: 11,
      paddingTop: 10,
    },
  },
}));

const USDStable = () => {
  const classes = useStyles();
  return (
    <div>
      <div className="container">
        <Grid container className={classes.container}>
          <Grid item md={6} sm={12} xs={12}>
            <img
              src={USDStableLeftImg}
              alt="USDStableLeftImg"
              className={classes.USDStableLeftImg}
            />
          </Grid>
          <Grid item md={6} sm={12} xs={12} className={classes.stackContainer}>
            <div className={classes.btn}>
              <button className={classes.button}>News</button>
            </div>
            <div>
              <Typography className={classes.title}>
                Ghost is coming to DeFi privacy USD Stablecoin
              </Typography>
            </div>
            <div>
              <Typography className={classes.description}>
                Aliquam, massa vitae neque sed volutpat nulla vulputate tempor
                commodo. Aliquam turpis cursus vel amet odio. Sagittis at massa
              </Typography>
            </div>

            <Typography className={classes.time}>July 16, 2020</Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default USDStable;
