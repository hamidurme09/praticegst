import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import PrivacyLeftSide from "./PrivacyLeftSide";
import PrivacyRightSide from "./PrivacyRightSide";

const useStyles = makeStyles((theme) => ({
    privacycontainer: {
        paddingTop: 70
    }
}));

const PrivacyFocused = () => {
  const classes = useStyles();
  return (
    <div className="maincontainer">
      <Grid container className={classes.privacycontainer}>
        <Grid item sm={8} xs={12} style={{ paddingLeft: 170 }}>
          <PrivacyLeftSide />
        </Grid>
        <Grid item sm={4} xs={12}>
          <PrivacyRightSide />
        </Grid>
      </Grid>
    </div>
  );
};

export default PrivacyFocused;
