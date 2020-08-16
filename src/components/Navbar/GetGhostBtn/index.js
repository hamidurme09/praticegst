import React from "react";
import { Typography, Button } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import ghostwallet from "../../../assets/Menubar/getghostbtn/ghostwallet.svg";
import exchange from "../../../assets/Menubar/getghostbtn/exchange.svg";
import FontSize from "../../../utils/FontSize";
import HoverExtrapart from "../../../utils/HoverExtrapart";

const useStyles = makeStyles((theme) => ({
  getbtnarea: {
    position: "relative",
  },
  getbtn: {
    height: 40,
    width: 120,
    cursor: "pointer",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "rgb(239,69,101, 0.15)",
    },
  },

  container: {
    position: "absolute",
    top: 60,
    right: 0,
    width: 350,
    height: 215,
    borderRadius: 12,
    backgroundColor: "rgba(39, 39, 45, 1)",
    zIndex: 100,
    padding: 43,
    boxSizing: "border-box",
    [theme.breakpoints.down("xs")]: {
      right: 20,
      width: 280,
      padding: 25,
      height: 160
    },
  },

  clippath: {
    backgroundColor: "rgba(39, 39, 45, 0.8)",
    position: "absolute",
    top: -15,
    right: 65,
    width: 8,
    height: 13,
    zIndex: -1,
    transform: "perspective(1px) rotateX(5deg)",
    borderTopLeftRadius: 500,
    borderTopRightRadius: 500,
    [theme.breakpoints.down("xs")]: {
      right: 130,
    },
  },
  getList: {
    display: "flex",
    alignItems: "center",
  },
  ghostwallet: {
    marginRight: 25,
    [theme.breakpoints.down("xs")]: {
      height: 30,
      width: 30,
    },
  },
  hoverEffect: {
    cursor: "pointer",
    color: theme.palette.secondary.textColor,
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
  title: {
    fontSize: FontSize.m,
    [theme.breakpoints.down("xs")]: {
      fontSize: 15,
      paddingLeft: 0,
      textAlign: "left",
    },
  },
  description: {
    fontSize: FontSize.sm,
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
      paddingLeft: 0,
      textAlign: "left",
    },
  },
}));

const GetGhostBtn = () => {
  const classes = useStyles();
  return (
    <div className={classes.getbtnarea}>
      <div className="menu">
        <Button
          variant="contained"
          color="secondary"
          className={classes.getbtn}
        >
          Get Ghost
        </Button>
        <div className="dropdown-menu">
          <div className={classes.container}>
            <HoverExtrapart style={{ width: 350 }} />
            <div className={classes.clippath} />
            <div className={classes.getList} style={{ marginBottom: 30 }}>
              <img
                src={ghostwallet}
                alt="ghost wallet"
                className={classes.ghostwallet}
              />
              <div className={classes.hoverEffect}>
                <Typography className={classes.title}>Ghost Wallet</Typography>
                <Typography className={classes.description}>
                  Ghost Desktop Client v2.0.7
                </Typography>
              </div>
            </div>
            <div className={classes.getList} style={{ marginBottom: 30 }}>
              <img
                src={exchange}
                alt="exchange"
                className={classes.ghostwallet}
              />
              <div className={classes.hoverEffect}>
                <Typography className={classes.title}>Exchanges</Typography>
                <Typography className={classes.description}>
                  Malesuada gravida tincidunt
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetGhostBtn;
