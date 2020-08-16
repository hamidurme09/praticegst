import React from "react";
import { Grid, Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import latestNews from "../../../../assets/Menubar/Resource/latestNews.svg";
import rightarrow from "../../../../assets/Menubar/Resource/rightarrow.svg";
import FontSize from "../../../../utils/FontSize";

const useStyles = makeStyles((theme) => ({
  top: {
    display: "flex",
    alignItems: "center",
    paddingBottom: 13,
  },
  bottom: {
    display: "flex",
    alignItems: "center",
    paddingBottom: 3,
    marginLeft: -13,
  },
  title: {
    fontSize: FontSize.sm,
    color: theme.palette.secondary.textColor,
    paddingLeft: 14,
    width: "100%",
    "&:hover": {
      color: theme.palette.secondary.main,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
      paddingLeft: 7,
      textAlign: 'left'
    },
  },

  bottomTitle: {
    fontSize: FontSize.sm,
    color: theme.palette.secondary.socialIconColor,
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.secondary.main,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
    },
  },

  topTitleSvg: {
    display: "flex",
    alignItems: "center",
    fill: theme.palette.secondary.socialIconColor,
    color: theme.palette.secondary.textColor,
    cursor: "pointer",
    transform: "translateY(0)",
    transition: "all .2s",
    "&:hover": {
      transform: "translateY(3px)",
      color: theme.palette.secondary.main,
      fill: theme.palette.secondary.main,
    },
  },
  bottomTitleSvg: {
    display: "flex",
    alignItems: "center",
    fill: theme.palette.secondary.textColor,
    color: theme.palette.secondary.textColor,
    cursor: "pointer",
    transform: "translateY(0)",
    transition: "all .2s",
    "&:hover": {
      transform: "translateY(3px)",
      color: theme.palette.secondary.main,
      fill: theme.palette.secondary.main,
    },
  },
}));
const ResourceBottomPart = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.topTitleSvg} style={{ paddingBottom: 15 }}>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.25 0H5.25C4.78587 0 4.34075 0.184374 4.01256 0.512563C3.68437 0.840752 3.5 1.28587 3.5 1.75V11.375C3.5 11.6071 3.40781 11.8296 3.24372 11.9937C3.07962 12.1578 2.85706 12.25 2.625 12.25C2.39294 12.25 2.17038 12.1578 2.00628 11.9937C1.84219 11.8296 1.75 11.6071 1.75 11.375V6.125C1.75 5.89294 1.65781 5.67038 1.49372 5.50628C1.32962 5.34219 1.10706 5.25 0.875 5.25C0.642936 5.25 0.420376 5.34219 0.256282 5.50628C0.0921872 5.67038 0 5.89294 0 6.125V11.375C0 12.0712 0.276562 12.7389 0.768845 13.2312C1.26113 13.7234 1.92881 14 2.625 14H11.8125C12.3927 14 12.9491 13.7695 13.3593 13.3593C13.7695 12.9491 14 12.3927 14 11.8125V1.75C14 1.28587 13.8156 0.840752 13.4874 0.512563C13.1592 0.184374 12.7141 0 12.25 0ZM9.84375 11.375H5.6875V10.0625H9.84375V11.375ZM11.8125 8.75H5.6875V7.4375H11.8125V8.75ZM9.84375 6.125H5.6875V4.8125H9.84375V6.125ZM11.8125 3.5H5.6875V2.1875H11.8125V3.5Z" />
        </svg>
        <Typography className={classes.title}>Latest News</Typography>
      </div>
      <div>
        <div className={classes.bottomTitleSvg}>
          <Typography className={classes.bottomTitle}>
            Live Q&amp;A $500 in Ghost will be given away
          </Typography>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6.74965 5.03282C6.45715 5.32532 6.45715 5.79782 6.74965 6.09032L9.65965 9.00032L6.74965 11.9103C6.45715 12.2028 6.45715 12.6753 6.74965 12.9678C7.04215 13.2603 7.51465 13.2603 7.80715 12.9678L11.2496 9.52532C11.5421 9.23282 11.5421 8.76032 11.2496 8.46782L7.80715 5.02532C7.52215 4.74032 7.04215 4.74032 6.74965 5.03282Z" />
          </svg>
        </div>
        <div className={classes.bottomTitleSvg}>
          <Typography className={classes.bottomTitle}>
            Ghost available on Vision
          </Typography>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6.74965 5.03282C6.45715 5.32532 6.45715 5.79782 6.74965 6.09032L9.65965 9.00032L6.74965 11.9103C6.45715 12.2028 6.45715 12.6753 6.74965 12.9678C7.04215 13.2603 7.51465 13.2603 7.80715 12.9678L11.2496 9.52532C11.5421 9.23282 11.5421 8.76032 11.2496 8.46782L7.80715 5.02532C7.52215 4.74032 7.04215 4.74032 6.74965 5.03282Z" />
          </svg>
        </div>
        <div className={classes.bottomTitleSvg}>
          <Typography className={classes.bottomTitle}>
            Ghost Recap — How far we’ve come
          </Typography>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6.74965 5.03282C6.45715 5.32532 6.45715 5.79782 6.74965 6.09032L9.65965 9.00032L6.74965 11.9103C6.45715 12.2028 6.45715 12.6753 6.74965 12.9678C7.04215 13.2603 7.51465 13.2603 7.80715 12.9678L11.2496 9.52532C11.5421 9.23282 11.5421 8.76032 11.2496 8.46782L7.80715 5.02532C7.52215 4.74032 7.04215 4.74032 6.74965 5.03282Z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ResourceBottomPart;
