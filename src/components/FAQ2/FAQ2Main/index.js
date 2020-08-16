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
      paddingBottom: 0,
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
      marginLeft: -13,
    },
  },
  description: {
    fontSize: FontSize.m,
    width: 370,
    color: theme.palette.secondary.textColor,
    paddingTop: 22,
    [theme.breakpoints.down("xs")]: {
      marginLeft: -9,
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


const FAQ2Main = () => {
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
              color="inherit"
              className={classes.button}
              style={{ opacity: 0.5 }}
            >
              General
            </Button>
          </Link>
          <Link className="routerlink" to="/faq2">
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
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
          <Grid item sm={12} md={6} xs={12}>
            <div style={{ paddingBottom: 78 }}>
              <Typography className={classes.subtitle}>
                How does Staking work?
              </Typography>
              <Typography className={classes.description}>
                Here is a link to a really well written explanation of Proof of
                Stake,{" "}
                <span style={{ color: "#EF4565" }}>
                  Proof of Work VS Proof of Stake
                </span>
              </Typography>
            </div>
            <div style={{ paddingBottom: 78 }}>
              <Typography className={classes.subtitle}>
                My coins are not being staked, what's going on?
              </Typography>
              <Typography className={classes.description}>
                Public inputs (ghost coins) needs to have atleast 225
                confirmations before they become eligible for staking. This
                generally takes between 5-8hrs.
              </Typography>
            </div>
            <div style={{ paddingBottom: 78 }}>
              <Typography className={classes.subtitle}>
                How often will I get rewards for staking?
              </Typography>
              <Typography className={classes.description}>
                The amount you will recieve rewards depends on how many Ghost
                you have. There is a feature on the Ghost wallet that provides
                you with an estimated reward time.
              </Typography>
              <Typography className={classes.description}>
                If you have less than 1000 Ghost coins it’s recommended that you
                look into joining a pool as you will earn more consistent
                rewards this way.
              </Typography>
            </div>
            <div style={{ paddingBottom: 78 }}>
              <Typography className={classes.subtitle}>
                Will I be penalized if I stop staking?
              </Typography>
              <Typography className={classes.description}>
                No you will not be penalized if you stop staking via the wallet
                or cold staking.
              </Typography>
            </div>
            <div style={{ paddingBottom: 78 }}>
              <Typography className={classes.subtitle}>
                Is staking safe?
              </Typography>
              <Typography className={classes.description}>
                Yes, hot staking within the wallet is safe however it’s
                recommended to cold stake if possible.
              </Typography>
            </div>
          </Grid>
          <Grid item sm={12} md={6} xs={12}>
            <div style={{ paddingBottom: 78 }}>
              <Typography className={classes.subtitle}>
                What are the future plans for Ghost?
              </Typography>
              <Typography className={classes.description}>
                You can stake your Ghost in several different ways: 1. By having
                the Official Ghost Wallet open and running your Ghost coins will
                automatically be staking (“hot staking”) for as long as the
                Ghost application is running. Second, and the “best” option, is
                to setup a VPS (virtual private machine) that is linked to your
                wallet via our Cold Staking implementation that will stake your
                Ghost 24.7 without the need to have the Ghost Wallet running. 2.
                Finally, the easiest and simplest way, would be to join a
                Staking Pool. In this method you do not need to do anything
                highly technical. Several users pool their coins together and
                the pool operator generally takes a fee from the rewards to
                maintain the server and disperses the payouts to users who are
                joined in the pool.
              </Typography>
            </div>
            <div style={{ paddingBottom: 78 }}>
              <Typography className={classes.subtitle}>
                Why is my staking weight/time changing?
              </Typography>
              <Typography className={classes.description}>
                Your staking weight will fluctuate as more individuals stake
                their funds or remove their funds from being staked. In essence
                it shows how much your weight encompasses the network
                stakeweight.
              </Typography>
            </div>
            <div style={{ paddingBottom: 78 }}>
              <Typography className={classes.subtitle}>
                What is Cold Staking and how do I set it up?
              </Typography>
              <Typography className={classes.description}>
                We’ve created a cold staking guide that you can read through,
                here{" "}
                <span style={{ color: "#EF4565" }}>
                  https://medium.com/@GhostbyMcAfee/vps-cold-staking-setup-612d6f63242b
                </span>
              </Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default FAQ2Main;
