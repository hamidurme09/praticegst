import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import { Grid, Typography } from "@material-ui/core";

import ghostDefiImg from "../../../assets/ghostReward/DiveDeeperImg/ghostDefiImg.svg";
import FontSize from "../../../utils/FontSize";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    paddingTop: 76,
    paddingBottom: 94,
    [theme.breakpoints.down("xs")]: {
      paddingTop: 50,
      paddingBottom: 50,
    },
  },
  container: {
    paddingTop: 62,
    [theme.breakpoints.down("xs")]: {
      paddingTop: 30,
    },
  },
  header: {
    textAlign: "center",
  },
  ghostDefiImg: {
    borderRadius: 15,
    [theme.breakpoints.down("xs")]: {
      width: 160,
    },
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
      marginBottom: 0,
    },
  },
  defiTitle: {
    fontSize: FontSize.size25,
    marginTop: 21,
    fontWeight: "bold",
    lineHeight: 1.2,
    width: 330,
    [theme.breakpoints.down("xs")]: {
      fontSize: 15,
      width: 195,
      paddingTop: 10,
      marginTop: 0,
    },
  },
  defiDescription: {
    fontSize: FontSize.m,
    color: theme.palette.secondary.textColor,
    marginTop: 15,
    [theme.breakpoints.down("md")]: {
      fontSize: FontSize.size16,
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: 10,
      fontSize: 13,
      width: 170,
    },
  },
  time: {
    fontSize: FontSize.sm,
    color: "#72757E",
    marginTop: 15,
    [theme.breakpoints.down("xs")]: {
      fontSize: 11,
      marginTop: 10,
    },
  },
  paginationarea: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 107,
    [theme.breakpoints.down("xs")]: {
      paddingTop: 50,
    },
  },
  pagination: {
    backgroundColor: "#16161A",
    color: "#72757E",
    margin: 10,
    outline: "none",
    border: "none",
    width: 45,
    height: 42,
    borderRadius: 4,
    cursor: "pointer",
  },
}));

const arr = [1, 2, 3, 4, 5, 6];

const NewsContainer = () => {
  const classes = useStyles();
  return (
    <div className="rewardcontainer" className={classes.mainContainer}>
      <div className="container">
        <Grid spacing={2} container>
          {arr.map((data) => (
            <Grid item md={4} sm={6} xs={6} className={classes.container}>
              <img
                src={ghostDefiImg}
                alt="Ghost Defi Img"
                className={classes.ghostDefiImg}
              />
              <div className={classes.btn}>
                <button className={classes.button}>News</button>
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
        <div className={classes.paginationarea}>
          <button
            className={classes.pagination}
            style={{
              backgroundColor: "rgba(44,45,49,0.5)",
            }}
          >
            1
          </button>
          <button className={classes.pagination}>2</button>
          <button className={classes.pagination}>3</button>
          <button className={classes.pagination}>4</button>
        </div>
      </div>
    </div>
  );
};

export default NewsContainer;
