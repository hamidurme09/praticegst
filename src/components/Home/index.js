import React, { Fragment } from "react";

// MUI stuff
import { makeStyles } from "@material-ui/core/styles";
import PrivacyFocused from "./PrivacyFocused";

const useStyles = makeStyles((theme) => ({}));

const Home = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <PrivacyFocused />
      <h2>section7</h2>
      <h2>section8</h2>
      <h2>section9</h2>
    </Fragment>
  );
};

export default Home;
