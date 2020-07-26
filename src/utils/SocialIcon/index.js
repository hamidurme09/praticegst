import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { IconButton, CardMedia } from "@material-ui/core";


import TwitterIcon from "@material-ui/icons/Twitter";
import DiscordIcon from "../../assets/group/Group27.png";
import RedditIcon from "@material-ui/icons/Reddit";
import TelegramIcon from "@material-ui/icons/Telegram";


const useStyles = makeStyles((theme) => ({
    discordIcon: {
        height: 22,
        width: 30,
        marginTop: 5,
      },
      socialIconGroup: {
        marginTop: 55,
      },
      socilaIcon: {
        color: theme.palette.secondary.socialIconColor,
        fontSize: 25,
      },
}));

const SocialIcon = () => {
  const classes = useStyles();
  return (
    <div>
      <IconButton>
        <TwitterIcon className={classes.socilaIcon} />
      </IconButton>
      <IconButton>
        <CardMedia
          className={classes.discordIcon}
          image={DiscordIcon}
          title="DiscordLogo"
        />
      </IconButton>
      <IconButton>
        <RedditIcon className={classes.socilaIcon} />
      </IconButton>
      <IconButton>
        <TelegramIcon className={classes.socilaIcon} />
      </IconButton>
    </div>
  );
};

export default SocialIcon;
