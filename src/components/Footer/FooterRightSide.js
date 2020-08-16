import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button } from "@material-ui/core";
import FontSize from "../../utils/FontSize";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.down("xs")]: {
      paddingTop: 50
    },
  },
  title: {
    fontSize: FontSize.m,
    width: 160,
    marginBottom: 16,
    lineHeight: 1.2,
    [theme.breakpoints.down("xs")]: {
      fontSize: 15,
      width: 130,
      marginBottom: 10,
    },
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  navbarText: {
    fontWeight: 300,
    cursor: "pointer",
    textTransform: "capitalize",
    margin: 0,
    padding: 0,
    marginBottom: 12,
    color: "rgba(255, 255, 255, 0.6)",
    [theme.breakpoints.down("xs")]: {
      fontSize: 13,
      marginBottom: 5,
    },
  },
}));

const FooterRightSide = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item md={4} sm={4} xs={4}>
        <Typography className={classes.title}>Want to dive deeper?</Typography>
        <div className={classes.nav}>
          <Link className="routerlink" to="/news">
            <Button color="inherit" className={classes.navbarText}>
              Latest News
            </Button>
          </Link>
          <Button color="inherit" className={classes.navbarText}>
            Status Report
          </Button>
          <Button color="inherit" className={classes.navbarText}>
            Get PART
          </Button>
          <Button color="inherit" className={classes.navbarText}>
            Ghost Wiki
          </Button>
        </div>
      </Grid>
      <Grid item md={4} sm={4} xs={4}>
        <Typography className={classes.title}>Resources</Typography>
        <div className={classes.nav}>
          <Button color="inherit" className={classes.navbarText}>
            Bounty Portal
          </Button>
          <Button color="inherit" className={classes.navbarText}>
            Block Explorer
          </Button>
          <Button
            color="inherit"
            className={classes.navbarText}
            style={{ marginLeft: -10 }}
          >
            Github
          </Button>
          <Button color="inherit" className={classes.navbarText}>
            Whitepaper
          </Button>
          <Link className="routerlink" to="/userguide">
            <Button color="inherit" className={classes.navbarText}>
              User Guides
            </Button>
          </Link>
          <Link className="routerlink" to="/faq">
            <Button
              color="inherit"
              className={classes.navbarText}
              style={{ marginLeft: -15 }}
            >
              FAQ
            </Button>
          </Link>
        </div>
      </Grid>
      <Grid item md={4} sm={4} xs={4}>
        <Typography className={classes.title}>Contact Us</Typography>
        <div className={classes.nav}>
          <Button color="inherit" className={classes.navbarText}>
            info@teamapp.com
          </Button>
          <Button color="inherit" className={classes.navbarText}>
            1-800-200-300
          </Button>
          <Button
            color="inherit"
            style={{ width: 140, textAlign: "left" }}
            className={classes.navbarText}
          >
            1010 Sunset Blv. Palo Alto, California
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};

export default FooterRightSide;
