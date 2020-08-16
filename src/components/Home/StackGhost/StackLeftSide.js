import React from "react";

// MUI stuff
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Typography, Card, Slider, Divider } from "@material-ui/core";

import logo from "../../../assets/ghostlogo-white.png";
import ghostPriceLogo from "../../../assets/stackGhost/ghostPriceLogo.svg";
import FontSize from "../../../utils/FontSize";

const PrettoSlider = withStyles({
  root: {
    color: "#27AE60",
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    color: "#2F2F35",
    height: 8,
    borderRadius: 4,
  },
})(Slider);

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: 250,
    paddingBottom: 250,
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      paddingTop: 0,
      paddingBottom: 0,
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: 0,
      paddingBottom: 0,
    },

  },
  cardsize: {
    height: 400,
    width: 540,
    backgroundColor: "rgba(22, 22, 26, 0.8);",
    borderRadius: 15,
    border: "1px solid #2D2D2D",
    padding: 60,
    marginRight: 120,
    boxSizing: "border-box",
    boxShadow: "none",
    color: theme.palette.primary.textColor,
    [theme.breakpoints.down("xs")]: {
      padding: 25,
      width: 335,
      height: 'auto',
    },
  },
  cardTitle: {
    fontSize: FontSize.ml,
    [theme.breakpoints.down("xs")]: {
      fontSize: FontSize.m,
    },
  },
  ghost: {
    display: "flex",
    alignItems: "center",
    marginTop: 43,
    [theme.breakpoints.down("xs")]: {
      marginTop: 5,
    },
  },
  ghostText1: {
    color: theme.palette.secondary.textColor,
    marginRight: 10,
    fontSize: FontSize.m,
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
    },
  },
  ghostText2: {
    color: theme.palette.primary.textColor,
    marginRight: 10,
    fontSize: FontSize.ml,
    [theme.breakpoints.down("xs")]: {
      fontSize: FontSize.m,
    },
  },
  ghostlogo: {
    height: 18,
    width: 18,
    marginTop: 3,
    [theme.breakpoints.down("xs")]: {
      height: 15,
      width: 15,
    },
  },
  sliderarea: {
    paddingTop: 25,
  },
  slidertext: {
    color: theme.palette.secondary.textColor,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 10,
    [theme.breakpoints.down("xs")]: {
      paddingTop: 5,
    },
  },
  divider: {
    backgroundColor: "#72757E",
    marginTop: 18,
    opacity: 0.2,
    [theme.breakpoints.down("xs")]: {
      marginTop: 10,
    },
  },
  priceMonthRewardText: {
    [theme.breakpoints.down("xs")]: {
      fontSize: 14
    },
  },
  priceMonthReward: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 26,
    color: theme.palette.secondary.textColor,
    [theme.breakpoints.down("xs")]: {
      marginTop: 15,
    },
  },
  price: {},
  priceTextLogo: {
    display: "flex",
    alignItems: "center",
  },
  priceText: {
    marginRight: 10,
    fontSize: FontSize.ml,
    [theme.breakpoints.down("xs")]: {
      fontSize: FontSize.m,
    },
  },
  monthPrice: {
    color: "#27AE60",
    fontSize: FontSize.ml,
    [theme.breakpoints.down("xs")]: {
      fontSize: FontSize.m,
    },
  },
  eachMonthCard: {
    position: "absolute",
    top: 570,
    left: 145,
    backgroundColor: "#27272D",
    width: 220,
    height: 185,
    borderRadius: 10,
    zIndex: 1000,
    padding: 30,
    boxSizing: "border-box",
    [theme.breakpoints.down("xs")]: {
      top: 208,
      left: 72,
      width: 180,
      height: 165,
      padding: 25,
    },
  },
  eachMonthTimePrice: {
    display: "flex",
    alignItems: "center",
    paddingBottom: 8,
  },
  eachMonthTime: {
    color: "#94A1B2",
    fontSize: 14,
    paddingRight: 15,
  },
  eachMonthPrice: {
    // color: "#94A1B2",
    fontSize: 18,
    fontWeight: "bold",
    color: "#27AE60",
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
    },
  },
}));

const StackLeftSide = (props) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  // const handleClose = () => {
  //   setOpen(false);
  // };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.container}>
      {open && (
        <div className={classes.eachMonthCard}>
          <div className={classes.eachMonthTimePrice}>
            <Typography className={classes.eachMonthTime}>Еach Year</Typography>
            <Typography className={classes.eachMonthPrice}>$ 3.87</Typography>
          </div>
          <div className={classes.eachMonthTimePrice}>
            <Typography className={classes.eachMonthTime}>
              Each Month
            </Typography>
            <Typography className={classes.eachMonthPrice}>$ 0.32</Typography>
          </div>
          <div className={classes.eachMonthTimePrice}>
            <Typography className={classes.eachMonthTime}>Еach Week</Typography>
            <Typography className={classes.eachMonthPrice}>$ 0.32</Typography>
          </div>
          <div className={classes.eachMonthTimePrice}>
            <Typography className={classes.eachMonthTime}>Еach Day</Typography>
            <Typography className={classes.eachMonthPrice}>$ 0.01</Typography>
          </div>
        </div>
      )}
      <Card className={classes.cardsize}>
        <Typography className={classes.cardTitle}>
          Estimate your rewards
        </Typography>
        <div className={classes.ghost}>
          <Typography className={classes.ghostText1}>You stake</Typography>
          <Typography className={classes.ghostText2}>
            2,608,233 ghost
          </Typography>
          <img src={logo} alt="Logo" className={classes.ghostlogo} />
        </div>
        <div className={classes.sliderarea}>
          <PrettoSlider
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            defaultValue={20}
            style={{
              margin: 0,
              padding: 0,
            }}
          />
          <div className={classes.slidertext}>
            <Typography>0</Typography>
            <Typography>10m</Typography>
          </div>
          <Divider className={classes.divider} />
        </div>
        <div className={classes.priceMonthReward}>
          <div className={classes.price}>
            <Typography className={classes.priceMonthRewardText}>Ghost price</Typography>
            <div className={classes.priceTextLogo}>
              <Typography className={classes.priceText}>$ 15</Typography>
              <img src={ghostPriceLogo} alt="Ghost Price Logo" />
            </div>
          </div>
          <div>
            <div
              onClick={handleToggle}
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Typography className={classes.priceMonthRewardText} style={{ marginRight: 7 }}>Each Month</Typography>
              <svg
                width="8"
                height="6"
                viewBox="0 0 8 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.67063 5.8272C3.70733 5.88049 3.75644 5.92407 3.81372 5.95417C3.871 5.98427 3.93475 6 3.99946 6C4.06417 6 4.12791 5.98427 4.1852 5.95417C4.24248 5.92407 4.29158 5.88049 4.32828 5.8272L7.92857 0.627557C7.97024 0.567584 7.99468 0.497339 7.99923 0.424453C8.00377 0.351568 7.98826 0.27883 7.95436 0.214143C7.92047 0.149456 7.86949 0.0952928 7.80697 0.0575393C7.74445 0.0197859 7.67278 -0.00011453 7.59974 4.95827e-07H0.399176C0.326308 0.000301439 0.2549 0.0204577 0.192632 0.0583016C0.130364 0.0961456 0.079592 0.150245 0.0457757 0.214783C0.0119594 0.279321 -0.00362155 0.351854 0.000708374 0.424584C0.0050383 0.497313 0.0291153 0.567486 0.0703501 0.627557L3.67063 5.8272Z"
                  fill="#94A1B2"
                />
              </svg>
            </div>
            <Typography className={classes.monthPrice}>$ 15</Typography>
          </div>
          <div className={classes.reward}>
            <Typography className={classes.priceMonthRewardText}>Annual reward</Typography>
            <Typography className={classes.monthPrice}>7.74%</Typography>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default StackLeftSide;
