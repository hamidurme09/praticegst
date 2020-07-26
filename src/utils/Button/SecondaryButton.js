import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  btn: {
    height: 65,
    width: 200,
    borderRadius: 8,
    marginTop: 50,
    marginRight: 20,
    border: "1px solid #fff",
  },
}));

const SecondaryButton = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Button variant="contained" color="primary" className={classes.btn}>
        Ghost Github
      </Button>
    </div>
  );
};

export default SecondaryButton;
