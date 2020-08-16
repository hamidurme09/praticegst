import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import { Grid, Typography } from "@material-ui/core";

import FontSize from "../../../utils/FontSize";

import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    paddingBottom: 280,
    [theme.breakpoints.down("xs")]: {
      paddingBottom: 100,
    },
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 42,
    position: "relative",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 80,
    [theme.breakpoints.down("xs")]: {
      paddingTop: 50,
    },
  },
  title: {
    fontSize: FontSize.l,
    [theme.breakpoints.down("xs")]: {
      fontSize: FontSize.size40,
    },
  },
  description: {
    color: "#94A1B2",
    fontSize: FontSize.ml,
    width: 510,
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      fontSize: FontSize.size16,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 13,
      paddingTop: 0,
    },
  },

  searchInput: {
    width: 480,
    height: 55,
    paddingLeft: 55,
    border: "1px solid #ccc",
    borderRadius: 8,
    boxSizing: "border-box",
    fontSize: 18,
    outline: "none",
    "&::placeholder": {
      color: "#94A1B2",
    },
    [theme.breakpoints.down("sm")]: {
      height: 40,
      paddingLeft: 40,
      fontSize: 14,
    },
  },
  searchIcon: {
    color: "#72757E",
    position: "absolute",
    top: 54,
    left: 330,
    fontSize: 35,
    [theme.breakpoints.down("sm")]: {
      top: 50,
      left: 8,
      fontSize: 25,
    },
  },
}));

const UserGuideHeader = () => {
  const classes = useStyles();
  return (
    <div className="container">
      <div className={classes.mainContainer}>
        <Grid item sm={12} xs={12} className={classes.header}>
          <Typography className={classes.title}>Ghost User Guides</Typography>
          <Typography className={classes.description}>
            How can we help you?
          </Typography>
        </Grid>

        <div className={classes.container}>
          <input className={classes.searchInput} placeholder="search" />
          <SearchIcon className={classes.searchIcon} />
        </div>
      </div>
    </div>
  );
};

export default UserGuideHeader;
