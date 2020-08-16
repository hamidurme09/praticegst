import React, { Fragment } from "react";

// MUI stuff
import { makeStyles } from "@material-ui/core/styles";
import LatestNews from "./LatestNews";
import USDStable from "./USDStable";
import NewsContainer from "./NewsContainer";

import Footer from "../Footer";
import FooterDivider from "../../utils/FooterDivider";

const useStyles = makeStyles((theme) => ({}));

const News = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <LatestNews />
      <USDStable />
      <NewsContainer />
      <FooterDivider />
      <Footer />
    </Fragment>
  );
};

export default News;
