import React, { Fragment } from "react";

import { makeStyles } from "@material-ui/core/styles";

import ResourceMenu from "./Menu/ResourceMenu/index";
import AboutMenu from "./Menu/AboutMenu/index";
import CommunityMenu from "./Menu/CommunityMenu/index";
import Logo from "./Logo";
import GetGhostBtn from "./GetGhostBtn";
import { Link } from "react-router-dom";
import LatestNews from "./Menu/LatestNews";
import Hamburger from "./Hamburger";

const useStyles = makeStyles((theme) => ({
  navContainer: {
    margin: "auto",
    maxWidth: 1110,
    minHeight: 80,
    color: "#fff",
    backgroundColor: "#16161A",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 20px",
    [theme.breakpoints.down("xs")]: {
      minHeight: 70,
      padding: "0 10px",
    },
  },
  menubar: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  getGhostBtn: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  }
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <Fragment>
      {/* <div className="nav-container"> */}
      <div className={classes.navContainer}>
        <Link className="routerlink" to="/">
          <Logo />
        </Link>
        <div className={classes.menubar}>
          <Link className="routerlink" to="/about">
            <AboutMenu />
          </Link>
          <Link className="routerlink" to="/news">
            <LatestNews />
          </Link>
          <CommunityMenu />
          <ResourceMenu />
        </div>
        <div className={classes.getGhostBtn}>
          <GetGhostBtn />
        </div>
        <Hamburger />
      </div>
    </Fragment>
  );
};

export default Navbar;
