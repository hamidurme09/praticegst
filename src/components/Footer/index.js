import React from "react";
import { Grid, Typography } from "@material-ui/core";
import FooterLeftSide from "./FooterLeftSide";
import FooterRightSide from "./FooterRightSide";

import { makeStyles } from "@material-ui/core/styles";
import FontSize from "../../utils/FontSize";

const useStyles = makeStyles((theme) => ({
  copyright: {
    fontSize: FontSize.size13,
    color: theme.palette.secondary.textColor,
    paddingTop: 116,
    paddingBottom: 50,
    [theme.breakpoints.down("xs")]: {
      paddingTop: 50,
      marginBottom: 225
    },

  },
  divider: {
    backgroundColor: "#C4C4C4",
    marginBottom: 80,
    opacity: 0.1,
  },
}));

const Footer = (props) => {
  const classes = useStyles();
  return (
    <div style={{ ...props.style }}>
      <div className="container">
        {/* <Divider className={classes.divider} /> */}
        <Grid container>
          <Grid item md={6} sm={12} xs={12}>
            <FooterLeftSide />
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <FooterRightSide />
          </Grid>
        </Grid>
        <Typography className={classes.copyright}>© Copyright Ghost</Typography>
      </div>
    </div>
  );
};

export default Footer;
