import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import UserGuideHeader from "./UserGuideHeader";
import UserContainer from "./UserContainer";
import userGuidebg from "../../assets/UserGuide/userGuidebg.svg";
import Footer from "../Footer";
import FooterDivider from "../../utils/FooterDivider";

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.up("md")]: {
      backgroundImage: `url(${userGuidebg})`,
      backgroundRepeat: "no-repeat",
    },
  },
}));

const UserGuide = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <UserGuideHeader />
      <UserContainer />
      <FooterDivider />
      <Footer />
    </div>
  );
};

export default UserGuide;
