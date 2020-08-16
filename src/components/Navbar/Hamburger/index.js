import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Modal, IconButton, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AboutMenu from "../Menu/AboutMenu";
import { Link } from "react-router-dom";
import LatestNews from "../Menu/LatestNews";
import CommunityMenu from "../Menu/CommunityMenu";
import ResourceMenu from "../Menu/ResourceMenu";
import GetGhostBtn from "../GetGhostBtn";

const useStyles = makeStyles((theme) => ({
  hamburger: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  modalContainer: {
    position: "absolute",
    top: 26,
    left: 25,
    // right: 200,
    width: 325,
    padding: "50px 0",
    color: "#fff",
    backgroundColor: "#1A1A1F",
    textAlign: "center",
    boxSizing: "border-box",
    outline: "none",
    borderRadius: 5,
  },
  closebtn: {
    position: "absolute",
    top: 0,
    right: 0,
    fontWeight: "bold",
    fontSize: 18,
    padding: "5px 10px",
    cursor: 'pointer'
  },
}));

const Hamburger = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.hamburger}>
      <IconButton onClick={handleOpen}>
        <MenuIcon style={{ fill: "#fff" }} />
      </IconButton>
      <Modal
        style={{ backgroundColor: "transparent" }}
        open={open}
        onClose={handleClose}
      >
        <div style={{}} className={classes.modalContainer}>
          <Typography className={classes.closebtn} onClick={handleClose}>
            X
          </Typography>
          <div>
            <Link onClick={handleClose} className="routerlink" to="/about">
              <AboutMenu />
            </Link>
            <Link onClick={handleClose} className="routerlink" to="/news">
              <LatestNews />
            </Link>
            <CommunityMenu />
            <ResourceMenu />
          </div>
          <div style={{paddingTop: 20}}>
            <GetGhostBtn />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Hamburger;
