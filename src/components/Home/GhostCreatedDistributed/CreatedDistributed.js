import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import FontSize from "../../../utils/FontSize";

const useStyles = makeStyles((theme) => ({
  body: {
    padding: 30,
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },
  title: {
    fontSize: FontSize.l,
    marginBottom: 50,
    [theme.breakpoints.down("md")]: {
      fontSize: FontSize.size40,
    },
    [theme.breakpoints.down("xs")]: {
      width: 330,
      fontSize: FontSize.size28,
      lineHeight: 1.2,
      marginBottom: 40,
    },
  },
  list: {
    display: "flex",
    alignItems: "center",
    marginTop: 45,
    [theme.breakpoints.down("sm")]: {
    marginTop: 15,
    },
  },
  listNumber: {
    padding: "15px 20px",
    borderRadius: 4,
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
      padding: "7px 13px",
      },
  },
  listTitle: {
    fontSize: FontSize.m,
    width: 245,
    marginLeft: 25,
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
      lineHeight: 1.2
    },
  },
  listDescription: {
    width: 300,
    marginTop: 10,
    marginLeft: 80,
    color: theme.palette.secondary.textColor,
    fontSize: FontSize.sm,
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
      marginTop: 5,
      marginLeft: 60,
      width: 250,
    },
  },
}));

const CreatedDistributed = () => {
  const classes = useStyles();
  return (
    <div className={classes.body}>
      <Typography className={classes.title}>
        How is ghost created and distributed?
      </Typography>
      {/* list 1  */}
      <div>
        <div className={classes.list}>
          <Typography
            className={classes.listNumber}
            style={{
              backgroundColor: "rgba(239,69,101, 0.1)",
              color: "#EF4565",
            }}
          >
            1.
          </Typography>
          <div>
            <Typography className={classes.listTitle}>
              New Ghost tokens are minted each block
            </Typography>
          </div>
        </div>
        <Typography className={classes.listDescription}>
          In the beginning, 12 new Ghost tokens are minted each block (every 2
          minutes).
        </Typography>
      </div>

      {/* list 2  */}
      <div>
        <div className={classes.list}>
          <Typography
            className={classes.listNumber}
            style={{
              backgroundColor: "rgba(61,169,252, 0.1)",
              color: "#3DA9FC",
            }}
          >
            2.
          </Typography>
          <div>
            <Typography className={classes.listTitle}>
              Ghosts are split between Ghost Veterans
            </Typography>
          </div>
        </div>
        <Typography className={classes.listDescription}>
          6 Ghost are split between Ghost Veterans
        </Typography>
      </div>

      {/* list 3  */}
      <div>
        <div className={classes.list}>
          <Typography
            className={classes.listNumber}
            style={{
              backgroundColor: "rgba(239,69,101, 0.1)",
              color: "#EF4565",
            }}
          >
            3.
          </Typography>
          <div>
            <Typography className={classes.listTitle}>
              Ghost is awarded to the staker
            </Typography>
          </div>
        </div>
        <Typography className={classes.listDescription}>
          4 Ghost is awarded to the staker who mined the block
        </Typography>
      </div>

      {/* list 4  */}
      <div>
        <div className={classes.list}>
          <Typography
            className={classes.listNumber}
            style={{
              backgroundColor: "rgba(61,169,252, 0.1)",
              color: "#3DA9FC",
            }}
          >
            4.
          </Typography>
          <div>
            <Typography className={classes.listTitle}>
              Ghost goes into a pool
            </Typography>
          </div>
        </div>
        <Typography className={classes.listDescription}>
          2 Ghost goes into a pool used for future Ghost development and growt
        </Typography>
      </div>
    </div>
  );
};

export default CreatedDistributed;
