import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import PrivacyLeftSide from "./PrivacyLeftSide";
import FontSize from "../../../utils/FontSize";

import privacyFocusMainImg from "../../../assets/privacyfocused/privacyFocusMainImg.svg";

const useStyles = makeStyles((theme) => ({
  mainarea: {
    [theme.breakpoints.up("md")]: {
      backgroundImage: `url(${privacyFocusMainImg})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right",
    },
  },
  privacycontainer: {
    paddingTop: 70,
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      paddingTop: 25,
    },
  },
  exchange: {
    height: 73,
    marginRight: 20,
    marginTop: 117,
    [theme.breakpoints.down("sm")]: {
      marginTop: 50,
    },
  },
  exchangeText: {
    color: "#72757E",
    fontSize: FontSize.sm,
  },
  exchangeName: {
    display: "flex",
    marginTop: 20,
    [theme.breakpoints.down("xs")]: {
      marginTop: 5,
    },
  },
  exchangeLogo: {
    fontSize: FontSize.size25,
    color: "#72757E",
    marginRight: 25,
    fontWeight: 700,
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
    },
  },
}));

const PrivacyFocused = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.mainarea}>
        <div className="container">
          <Grid container className={classes.privacycontainer}>
            <Grid item lg={8} md={6} sm={12} xs={12}>
              <PrivacyLeftSide />
            </Grid>
          </Grid>
        </div>
        <div className="container">
          <Grid item sm={12} xs={12}>
            <div className={classes.exchange}>
              <Typography className={classes.exchangeText}>
                Exchanges which are working with Ghost
              </Typography>
              <div className={classes.exchangeName} style={{}}>
                <Typography className={classes.exchangeLogo}>
                  Changelly
                </Typography>
                <Typography className={classes.exchangeLogo}>HitBTC</Typography>
                <Typography className={classes.exchangeLogo}>MXC</Typography>
              </div>
            </div>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default PrivacyFocused;
