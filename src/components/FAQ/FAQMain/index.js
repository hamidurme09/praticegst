import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button, Grid } from "@material-ui/core";
import FontSize from "../../../utils/FontSize";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingLeft: 160,
    paddingRight: 100,
    paddingTop: 90,
    paddingBottom: 127,
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 50,
      paddingBottom: 50,
      textAlign: "center",
    },
  },
  title: {
    fontSize: FontSize.l,
    width: 540,
    fontWeight: "bold",
    lineHeight: 1.2,
    [theme.breakpoints.down("md")]: {
      fontSize: FontSize.size40,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: FontSize.size40,
      width: 340,
    },
  },
  subtitle: {
    fontSize: FontSize.size25,
    width: 360,
    fontWeight: "bold",
    lineHeight: 1.2,
    [theme.breakpoints.down("xs")]: {
      marginLeft: -9,
    },
  },
  description: {
    fontSize: FontSize.m,
    width: 370,
    color: theme.palette.secondary.textColor,
    paddingTop: 22,
    [theme.breakpoints.down("xs")]: {
      marginLeft: -13,
      width: 355
    },
  },
  btn: {
    paddingTop: 73,
    paddingBottom: 140,
    [theme.breakpoints.down("xs")]: {
      paddingBottom: 50,
    },
  },
  button: {
    fontWeight: 300,
    marginRight: 25,
    cursor: "pointer",
    textTransform: "capitalize",
    [theme.breakpoints.down("xs")]: {
      marginBottom: 15,
    },
  },
}));

const FAQMain = () => {
  const classes = useStyles();
  return (
    <div className="container">
      <div className={classes.container}>
        <Typography className={classes.title}>
          Frequently Asked Questions
        </Typography>
        <div className={classes.btn}>
          <Link className="routerlink" to="/faq">
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              General
            </Button>
          </Link>
          <Link className="routerlink" to="/faq2">
            <Button
              color="inherit"
              className={classes.button}
              style={{ opacity: 0.5 }}
            >
              Staking
            </Button>
          </Link>
          <Button
            color="inherit"
            className={classes.button}
            style={{ opacity: 0.5 }}
          >
            Ghost Veterans
          </Button>
          <Button
            color="inherit"
            className={classes.button}
            style={{ opacity: 0.5 }}
          >
            Erc-20 Ghost Swap
          </Button>
          <Button
            color="inherit"
            className={classes.button}
            style={{ opacity: 0.5 }}
          >
            Exchanges / Wallets
          </Button>
        </div>
        <Grid container>
          <Grid sm={12} xs={12} md={6} style={{ paddingBottom: 78 }}>
            <Typography className={classes.subtitle}>What is Ghost?</Typography>
            <Typography className={classes.description}>
              Ghost is a Proof of Stake privacy coin to help make you nothing
              but a "ghost" when transacting online!
            </Typography>
          </Grid>
          <Grid sm={12} xs={12} md={6} style={{ paddingBottom: 78 }}>
            <Typography className={classes.subtitle}>
              What are the future plans for Ghost?
            </Typography>
            <Typography className={classes.description}>
              You can view more information about this in our{" "}
              <span style={{ color: "#EF4565" }}>Whitepaper</span> and{" "}
              <span style={{ color: "#EF4565" }}>Roadmap.</span>
            </Typography>
          </Grid>
          <Grid sm={12} xs={12} md={6} style={{ paddingBottom: 78 }}>
            <Typography className={classes.subtitle}>
              What is the average speed of a Ghost public/private transaction?
            </Typography>
            <Typography className={classes.description}>
              Transactions will show up in your wallet in less than a second.
              For the first confirmation it usually takes 1-2 minute.
            </Typography>
          </Grid>
          <Grid sm={12} xs={12} md={6} style={{ paddingBottom: 78 }}>
            <Typography className={classes.subtitle}>
              What are the fees for sending a transaction?
            </Typography>
            <Typography className={classes.description}>
              A fraction of a penny.
            </Typography>
          </Grid>
          <Grid sm={12} xs={12} md={6}>
            <Typography className={classes.subtitle}>
              Where can I see the status and transactions on the Ghost
              blockchain?
            </Typography>
            <Typography className={classes.description}>
              The status of the Ghost Blockchain, peers, blocks, and
              transactions can be found on{" "}
              <span style={{ color: "#EF4565" }}>https://ghostscan.io/</span>
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default FAQMain;
