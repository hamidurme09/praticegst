import React, { Fragment } from "react";

// MUI stuff
import { makeStyles } from "@material-ui/core/styles";

import StakeGhostBg from "../../assets/stackGhost/StakeGhostBg.svg";
import ghostPriceLogo from "../../assets/stackGhost/ghostPriceLogo.svg";

const useStyles = makeStyles((theme) => ({}));

const Home = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <div
        className="maincontainer"
        style={{
          backgroundImage: `url(${ghostPriceLogo})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          style={{
            backgroundImage: `url(${StakeGhostBg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container">
            <p>section7</p>
            <h2>section8</h2>
            <h2>section9</h2>
            <h2>section9</h2>
            <h2>section9</h2>
            <h2>section9</h2>
            <h2>section9</h2>
            <h2>section9</h2>
            <h2>section9</h2>
            <h2>section9</h2>
            <h2>section9</h2>
            <h2>section9</h2>
            <h2>section9</h2>
            <h2>section9</h2>
            <h2>section9</h2>
            <h2>section9</h2>
            <h2>section9</h2>
            <h2>section9</h2>
            <h2>section9</h2>
            <h2>section9</h2>
            <h2>section9</h2>
            <h2>section9</h2>
            <h2>section9</h2>
            <h2>section9</h2>
            <h2>section9</h2>
            <h2>section9</h2>
            <h2>section9</h2>
            <h2>section9</h2>
            <h2>section9</h2>
            <h2>section9</h2>
            <h2>section9</h2>
            <h2>section9</h2>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
