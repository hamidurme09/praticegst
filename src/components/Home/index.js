import React, { Fragment } from "react";

// MUI stuff
import { makeStyles } from "@material-ui/core/styles";
import PrivacyFocused from "./PrivacyFocused";
import SpeedSecurity from "./SpeedSecurity";
import StackGhost from "./StackGhost";
import GithubUpdate from "./GithubUpdate";
import GhostCreatedDistributed from "./GhostCreatedDistributed";
import GhostReward from "./GhostReward";

const useStyles = makeStyles((theme) => ({}));

const Home = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <PrivacyFocused />
      <SpeedSecurity />
      <StackGhost />
      <GithubUpdate />
      <GhostCreatedDistributed />
      <GhostReward />
    </Fragment>
  );
};

export default Home;
