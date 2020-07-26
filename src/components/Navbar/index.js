import React, { Fragment } from "react";

// MUI stuff
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import logo from "../../assets/ghostlogo-white.png";
import { Avatar, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  logoArea: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    width: 25,
    height: 30,
  },
  logoText: {
    marginLeft: 17,
    fontSize: 25,
  },
  navbarText: {
    fontWeight: 300,
    marginRight: 25,
    cursor: "pointer",
    textTransform: "capitalize",
  },
  button: {
    height: 40,
    width: 120,
    cursor: "pointer",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className="nav-container">
      {/* logo area  */}
      <div className={classes.logoArea}>
        <Avatar alt="Ghost Logo" src={logo} className={classes.logo} />
        <Typography className={classes.logoText}>Ghost</Typography>
      </div>
      {/* navbar text  */}
      <div>
        <Button color="inherit" className={classes.navbarText}>
          About
        </Button>
        <Button color="inherit" className={classes.navbarText}>
          Latest{" "}
          <span style={{ textTransform: "lowercase", marginLeft: 8 }}>
            news
          </span>
        </Button>
        <Button color="inherit" className={classes.navbarText}>
          Community
        </Button>
        <Button color="inherit" className={classes.navbarText}>
          Resources
        </Button>
      </div>
      {/* get ghost btn  */}
      <Button variant="contained" color="secondary" className={classes.button}>
        Get Ghost
      </Button>
    </div>
  );
};

export default Navbar;
