import React, { Fragment } from "react";

import { makeStyles } from "@material-ui/core/styles";
import AboutUs from "./AboutUs";
import DesignDeveloper from "./DesignDeveloper";
import StackReward from "./StackReward";
import GhostVeteran from "./GhostVeteran";
import Footer from "../Footer";
import FooterDivider from "../../utils/FooterDivider";

const useStyles = makeStyles((theme) => ({}));

const About = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <AboutUs />
      <DesignDeveloper />
      <StackReward />
      <GhostVeteran />
      <FooterDivider />
      <Footer />
    </Fragment>
  );
};

export default About;
