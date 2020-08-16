import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";
import FontSize from "../../../utils/FontSize";

import designDeveloperRightImg from "../../../assets/About/designdeveloper/designDeveloperRightImg.svg";
import BtnWithArrow from "../../../utils/BtnWithArrow";

const useStyles = makeStyles((theme) => ({
  titledescription: {
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: 'center'
    },
  },
  title: {
    fontSize: FontSize.m,
    color: theme.palette.secondary.main,
    fontWeight: "bold",
    lineHeight: 1.2,
  },
  subtitle: {
    fontSize: FontSize.l,
    paddingTop: 20,
    width: 410,
    lineHeight: 1.2,
    [theme.breakpoints.down("md")]: {
      fontSize: FontSize.size40,
    },
    [theme.breakpoints.down("xs")]: {
      width: 290,
      fontSize: 25,
      paddingTop: 15,
    },
  },
  description: {
    fontSize: FontSize.m,
    width: 400,
    color: theme.palette.secondary.textColor,
    paddingTop: 22,
    [theme.breakpoints.down("md")]: {
      fontSize: FontSize.size16,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 13,
      paddingTop: 15,
      width: 300,
    },
  },
  designDeveloperRightImg: {
    [theme.breakpoints.down("xs")]: {
      width: 330,
      paddingTop: 50
    },
  }
}));

const DesignDeveloper = () => {
  const classes = useStyles();
  return (
    <div>
      <div className="container">
        <Grid container>
          <Grid
            item
            md={6}
            sm={12}
            xs={12}
            className={classes.titledescription}
          >
            <Typography className={classes.title}>
              Designed for developers
            </Typography>
            <div>
              <Typography className={classes.subtitle}>
                The world’s most powerful and easy-to-use APIs
              </Typography>
            </div>

            <Typography className={classes.description}>
              We agonize over the right abstractions so your teams don’t need to
              stitch together disparate systems or spend months integrating
              payments functionality.
            </Typography>

            <BtnWithArrow title="Read the docs" />
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <img src={designDeveloperRightImg} alt="designDeveloperRightImg" className={classes.designDeveloperRightImg} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default DesignDeveloper;
