import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import ghostCreatedDistributedImg from "../../../assets/ghostCreatedDistributed/ghostCreatedDistributedImg.svg";
import CreatedDistributed from "./CreatedDistributed";

const useStyles = makeStyles((theme) => ({
  body: {
    paddingTop: 140,
    [theme.breakpoints.down("sm")]: {
      paddingTop: 50,
    },
  },
  ghostCreatedDistributedImg: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const GhostCreatedDistributed = () => {
  const classes = useStyles();
  return (
    <div className={classes.body}>
      <div className="container">
        <Grid container>
          {/* <Grid item md={6} sm={12} xs={12}> */}
          <Grid item md={6}>
            <img
              src={ghostCreatedDistributedImg}
              alt="Ghost Created Distributed Img"
              className={classes.ghostCreatedDistributedImg}
            />
          </Grid>
          {/* <Grid item md={6} sm={12} xs={12}> */}
          <Grid item md={6}>
            <CreatedDistributed />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default GhostCreatedDistributed;
