import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import { Typography, IconButton } from "@material-ui/core";

import githubupdateBg from "../../../assets/githubupdate/githubupdateBg.svg";
import GithubCarousel from "./GithubCarousel";
import FontSize from "../../../utils/FontSize";

import arrowleft from "../../../assets/githubupdate/arrowleft.svg";
import arrowright from "../../../assets/githubupdate/arrowright.svg";

const useStyles = makeStyles((theme) => ({
  body: {
    paddingTop: 30,
    height: 675,
    [theme.breakpoints.down("xs")]: {
      height: 320,
    },
  },
  container: {
    [theme.breakpoints.up("md")]: {
      backgroundImage: `url(${githubupdateBg})`,
      backgroundRepeat: "no-repeat",
    },
  },
  header: {
    paddingBottom: 450,
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      paddingBottom: 170,
    },
  },
  title: {
    fontSize: FontSize.l,
    [theme.breakpoints.down("md")]: {
      fontSize: FontSize.size40,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: FontSize.size28,
    },
  },
  description: {
    color: "#94A1B2",
    fontSize: FontSize.m,
    width: 510,
    [theme.breakpoints.down("md")]: {
      fontSize: FontSize.size16,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 13,
    },
  },
  progress: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    marginRight: 170,
    marginTop: 66,
    [theme.breakpoints.down("xs")]: {
      marginRight: 0,
    },
  },
  rightarrow: {
    cursor: "pointer",
    marginLeft: 12,
  },
  leftarrow: {
    transform: "rotate(180deg)",
    cursor: "pointer",
    marginRight: 12,
  },
  arrowSize: {
    [theme.breakpoints.down("xs")]: {
      width: 20,
    },
  },

  progressline: {
    width: 60,
    height: 2,
    backgroundColor: "#2F2F35",
    borderRadius: "15px 0px 0px 15px",
    [theme.breakpoints.down("xs")]: {
      width: 30,
    },
  },
}));

const GithubUpdate = () => {
  const classes = useStyles();
  return (
    <div className={classes.body}>
      <div className={classes.container}>
        <div className="container">
          <div
            className={classes.header}
            // style={{ paddingBottom: 450, position: "relative" }}
          >
            <div>
              <Typography className={classes.title}>
                Latest Github updates
              </Typography>
              <Typography className={classes.description}>
                Stay informed about all latest news
              </Typography>
            </div>
            <GithubCarousel />
          </div>
          <div>
            {/* progress bar  */}
            <div className={classes.progress}>
              <IconButton>
                <img
                  src={arrowleft}
                  alt="arrow left"
                  className={classes.arrowSize}
                />
              </IconButton>
              <div
                className={classes.progressline}
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "15px 0px 0px 15px",
                }}
              />
              <div className={classes.progressline} />
              <IconButton>
                <img
                  src={arrowright}
                  alt="arrow right"
                  className={classes.arrowSize}
                />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GithubUpdate;
