import React from "react";

import { makeStyles } from "@material-ui/core/styles";


import overview from "../../../../assets/privacyfocused/rightSideImage/overview.png";
import totalBalance from "../../../../assets/privacyfocused/rightSideImage/totalBalance.svg";
import sentBlind from "../../../../assets/privacyfocused/rightSideImage/sentBlind.svg";


const useStyles = makeStyles((theme) => ({
  privacyRight: {
    // position: "relative",
  },
  overviewImg: {
    // position: "absolute",
    // top: -125,
    // left: -262,
    width: 482,
    // height: 888
  },
  totalBalanceImg: {
    // position: "absolute",
    // top: 220,
    // left: -110,
  },
  sentBlindImg: {
    // position: "absolute",
    // bottom: -85,
    // left: 89,
  },
}));

const PrivacyRightSide = () => {
  const classes = useStyles();
  return (
    <div className={classes.privacyRight}>
      <img src={overview} alt="Overview" className={classes.overviewImg} />
      <img
        src={totalBalance}
        alt="Total Balance"
        className={classes.totalBalanceImg}
      />
      <img src={sentBlind} alt="Sent Blind" className={classes.sentBlindImg} />
    </div>
  );
};

export default PrivacyRightSide;
