import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import logo from "../../../assets/joinCommunity/joincommunitylogo.svg";
import { Typography, Button } from "@material-ui/core";

import TwitterIcon from "@material-ui/icons/Twitter";
import DiscordIcon from "../../../assets/joinCommunity/joinCommunityDiscordLogo.svg";
import RedditIcon from "@material-ui/icons/Reddit";
import TelegramIcon from "@material-ui/icons/Telegram";

import joinCommunityBg from "../../../assets/ghostReward/joinCommunity/joinCommunityBg.svg";
import FontSize from "../../../utils/FontSize";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    paddingTop: 350,
    [theme.breakpoints.up("md")]: {
      backgroundImage: `url(${joinCommunityBg})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: 100,
    },
  },
  mainarea: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {},
  title: {
    fontSize: FontSize.l,
    marginTop: 40,
    [theme.breakpoints.down("md")]: {
      fontSize: FontSize.size40,
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: 10,
      fontSize: FontSize.size28,
    },
  },
  description: {
    fontSize: FontSize.m,
    color: theme.palette.secondary.textColor,
    marginTop: 8,
    width: 550,
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      fontSize: FontSize.size16,
      width: 475,
      marginTop: 5,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 13,
      width: 340,
    },
  },
  btn: {
    display: "flex",
    alignItems: "center",
    marginTop: 35,
    paddingBottom: 315,
    [theme.breakpoints.down("xs")]: {
      paddingBottom: 70,
    },
  },
  button: {
    height: 52,
    width: 153,
    backgroundColor: "rgba(61, 169, 252, 0.05)",
    borderRadius: 8,
    border: "1px solid #3DA9FC",
    fontSize: FontSize.size16,
    textTransform: "capitalize",
    marginRight: 30,
    "&:hover": {
      backgroundColor: "rgba(61,169,252, 0.15)",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 10,
      height: 30,
      width: 80,
      marginRight: 10,
      borderRadius: 5,
      "&:last-child": {
        marginRight: 0,
      },
    },
  },
  icon: {
    marginRight: 10,
    [theme.breakpoints.down("xs")]: {
      fontSize: 15,
      marginRight: 3,
    },
  },
  discordIcon: {
    marginRight: 10,
    [theme.breakpoints.down("xs")]: {
      height: 12,
      width: 12,
      marginRight: 3,
      marginTop: -2
    },
  },
}));

const JoinCommunity = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.mainContainer}>
        <div className="container">
          <div className={classes.mainarea}>
            <img src={logo} alt="logo" className={classes.logo} />
            <Typography className={classes.title}>
              Join our Community
            </Typography>
            <Typography className={classes.description}>
              Learn more about the project. interact with the team, andtake a
              part in shaping the future of Ghost{" "}
            </Typography>
            <div className={classes.btn}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                <TelegramIcon className={classes.icon} />
                Telegram
              </Button>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                <img
                  src={DiscordIcon}
                  alt="Discord Icom"
                  className={classes.discordIcon}
                />
                Discord
              </Button>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                <TwitterIcon className={classes.icon} />
                Twitter
              </Button>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                <RedditIcon className={classes.icon} />
                Reddit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinCommunity;
