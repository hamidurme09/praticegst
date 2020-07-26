import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Button,
  Avatar,
  CardMedia,
  IconButton,
} from "@material-ui/core";

import Font from "../../../../utils/FontSize";
import GitHubIcon from "@material-ui/icons/GitHub";
import PrimaryButton from "../../../../utils/Button/PrimaryButton";
import SocialIcon from "../../../../utils/SocialIcon";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: Font.xl,
    fontWeight: "bold",
  },
  title2: {
    fontSize: Font.xl,
  },
  description: {
    fontSize: Font.m,
    width: 430,
    color: theme.palette.secondary.textColor,
    marginTop: 20,
  },
  btnarea: {
    display: "flex",
  },
  btn: {
    height: 65,
    width: 200,
    borderRadius: 8,
    marginTop: 50,
    marginRight: 20,
    border: "1px solid #fff",
  },
  socialIconGroup: {
    marginTop: 55,
  },
}));

const PrivacyLeftSide = () => {
  const classes = useStyles();
  return (
    <div>
      <div>
        <Typography className={classes.title}>Privacy-focused &amp;</Typography>
        <Typography className={classes.title2}>
          Decentralized Ecosystem
        </Typography>
      </div>
      <Typography className={classes.description}>
        Proof of Stake privacy coin to help make you nothing but a "ghost" when
        transacting online!
      </Typography>

      <div className={classes.btnarea}>
        <PrimaryButton
          style={{
            marginTop: 50,
            marginRight: 20,
            textTransform: "capitalize",
          }}
          title="Download Ghost Wallet"
        />

        <Button variant="contained" color="primary" className={classes.btn}>
          <GitHubIcon style={{ marginRight: 10 }} />
          Ghost Github
        </Button>
      </div>
      <div className={classes.socialIconGroup}>
        <SocialIcon />
      </div>
    </div>
  );
};

export default PrivacyLeftSide;
