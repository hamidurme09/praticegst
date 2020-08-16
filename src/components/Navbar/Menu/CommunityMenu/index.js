import React from "react";

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import {

  Typography,

} from "@material-ui/core";

import HoverExtrapart from "../../../../utils/HoverExtrapart";
import FontSize from "../../../../utils/FontSize";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
    backgroundColor: "rgba(1,1,1,0)",
  },
  menubar: {
    display: "flex",
    alignItems: "center",
    position: "relative",
  },
  button: {
    height: 40,
    width: 120,
    cursor: "pointer",
    textTransform: "capitalize",
  },

  container: {
    position: "relative",
    position: "absolute",
    top: 50,
    left: 150,
    width: 190,
    height: 230,
    borderRadius: 12,
    backgroundColor: "rgba(39, 39, 45, 1)",
    zIndex: 100,
    boxSizing: "border-box",
    [theme.breakpoints.down("xs")]: {
      top: 165,
      left: 80,
      width: 150,
      height: 190,
    },
  },

  clippath: {
    backgroundColor: "rgba(39, 39, 45, 0.8)",
    position: "absolute",
    top: -15,
    right: 85,
    width: 8,
    height: 13,
    zIndex: -1,
    transform: "perspective(1px) rotateX(5deg)",
    borderTopLeftRadius: 500,
    borderTopRightRadius: 500,
    [theme.breakpoints.down("xs")]: {
      right: 70,
    },
  },
  navbarText: {
    fontWeight: 300,
    marginRight: 25,
    cursor: "pointer",
    textTransform: "capitalize",
    [theme.breakpoints.down("xs")]: {
      marginRight: 0,
    },
  },
  dropdownarea: {
    paddingLeft: 43,
    paddingTop: 53,
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 30,
      paddingTop: 30,
    },
  },
  logotitle: {
    display: "flex",
    alignItems: "center",
  },
  socilaIcon: {
    color: theme.palette.secondary.socialIconColor,
    fontSize: 20,
    marginRight: 12,
  },
  discordIcon: {
    marginRight: 14,
  },
  listarea: {
    cursor: "pointer",
    "&:hover": {
      color: "#fff",
    },
  },
  title: {
    textTransform: "capitalize",
    fontSize: FontSize.sm,
    color: theme.palette.secondary.textColor,
    paddingLeft: 14,
    width: "100%",
    "&:hover": {
      color: theme.palette.secondary.main,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
      paddingLeft: 10,
      textAlign: 'left'
    },
  },
  titleSvg: {
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
}));

const CommunityMenu = () => {
  const classes = useStyles();

  return (
    <div className="menu">
      <Button color="inherit" className={classes.navbarText}>
        Community
      </Button>
      <div className="dropdown-menu">
        <div className={classes.container}>
          <HoverExtrapart style={{ width: 190 }} />
          <div className={classes.clippath} />
          <div className={classes.dropdownarea}>
            <div className={classes.titleSvg} style={{ paddingBottom: 15 }}>
              <svg
                width="17"
                height="14"
                viewBox="0 0 17 14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.54387 9.15958L6.268 13.0398C6.6627 13.0398 6.83364 12.8703 7.03863 12.6667L8.88911 10.8982L12.7235 13.7062C13.4267 14.0981 13.9222 13.8918 14.1119 13.0593L16.6288 1.26567L16.6295 1.26497C16.8525 0.225425 16.2535 -0.181084 15.5684 0.0739397L0.774227 5.73796C-0.235443 6.12987 -0.220155 6.69273 0.60259 6.94776L4.38486 8.1242L13.1703 2.62695C13.5838 2.35317 13.9597 2.50465 13.6505 2.77844L6.54387 9.15958Z" />
              </svg>
              <Typography className={classes.title}>Telegram</Typography>
            </div>
            <div className={classes.titleSvg} style={{ paddingBottom: 15 }}>
              <svg
                width="18"
                height="12"
                viewBox="0 0 18 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.0319 0.0160151L11.0705 0.00176918H11.0459L11.0319 0.0160151ZM6.2757 0.000582388C6.2757 0.000582388 4.2883 -0.0753956 2.14415 1.50827C2.14415 1.50827 0 5.24069 0 9.84211C0 9.84211 1.18846 11.9078 4.44738 11.9861C4.44738 11.9861 4.92347 11.3534 5.40424 10.7966C3.57358 10.241 2.86121 9.12981 2.86121 9.12981L3.47298 9.44559C3.59131 9.49433 3.71008 9.54391 3.82971 9.59385C5.51957 10.2992 7.37955 11.0756 10.5301 10.5568C10.5465 10.5531 10.563 10.5494 10.5795 10.5457C11.2754 10.3892 11.9725 10.2325 12.6684 9.92164C12.7961 9.85617 12.932 9.7907 13.075 9.72182C13.4506 9.5409 13.875 9.33646 14.3283 9.04671C14.3283 9.04671 13.6147 10.1579 11.708 10.7135C12.1011 11.2667 12.6532 11.9006 12.6532 11.9006C15.3243 11.8423 16.6574 10.445 17.0911 9.99037C17.1867 9.89014 17.2386 9.83573 17.2515 9.8516C17.2515 5.25731 15.0944 1.51777 15.0944 1.51777C13.1667 0.0872445 11.3653 0.023138 11.0249 0.0219509L10.8073 0.2392C13.2696 0.951494 14.4616 2.06386 14.4616 2.06386C10.8892 0.278377 7.03019 0.176281 3.49638 1.58662C2.94075 1.82762 2.62258 1.98551 2.62258 1.98551C2.62258 1.98551 3.81221 0.795977 6.43596 0.160848L6.2757 0.000582388Z"
                />
                <path
                  d="M11.5684 8.41994C12.4549 8.41994 13.1768 7.69841 13.1768 6.80852C13.1768 5.92465 12.4586 5.20312 11.5684 5.20312V5.20673C10.6856 5.20673 9.96245 5.92586 9.95996 6.81574C9.95996 7.69841 10.6819 8.41994 11.5684 8.41994Z"
                  fill="#27272D"
                />
                <path
                  d="M5.82395 8.41994C6.5838 8.41994 7.20258 7.69841 7.20258 6.80852C7.20258 5.92465 6.58807 5.20312 5.82822 5.20312L5.82395 5.20673C5.06409 5.20673 4.44531 5.92586 4.44531 6.81574C4.44531 7.69841 5.06409 8.41994 5.82395 8.41994Z"
                  fill="#27272D"
                />
              </svg>
              <Typography className={classes.title}>Discord</Typography>
            </div>
            <div className={classes.titleSvg} style={{ paddingBottom: 15 }}>
              <svg
                width="17"
                height="14"
                viewBox="0 0 17 14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17 1.65738C16.3678 1.93846 15.6942 2.12477 14.9919 2.21523C15.7144 1.778 16.2658 1.09092 16.5251 0.262769C15.8514 0.669846 15.1077 0.957385 14.3151 1.11785C13.6754 0.427539 12.7638 0 11.7693 0C9.83981 0 8.28644 1.58738 8.28644 3.53339C8.28644 3.81339 8.30981 4.08262 8.36719 4.33892C5.46975 4.19569 2.90594 2.78815 1.18362 0.644C0.882937 1.17277 0.706563 1.778 0.706563 2.42954C0.706563 3.65292 1.32812 4.73738 2.25463 5.36523C1.69469 5.35446 1.14538 5.18969 0.68 4.93015C0.68 4.94092 0.68 4.95492 0.68 4.96892C0.68 6.68554 1.88806 8.11139 3.47225 8.43985C3.18856 8.51846 2.87937 8.55615 2.5585 8.55615C2.33538 8.55615 2.11012 8.54323 1.89869 8.49585C2.35025 9.89477 3.63163 10.9232 5.15525 10.9566C3.9695 11.8968 2.46394 12.4632 0.834063 12.4632C0.54825 12.4632 0.274125 12.4503 0 12.4148C1.54381 13.4238 3.37344 14 5.3465 14C11.7597 14 15.266 8.61539 15.266 3.948C15.266 3.79185 15.2607 3.64108 15.2533 3.49138C15.9449 2.99385 16.5261 2.37246 17 1.65738Z" />
              </svg>
              <Typography className={classes.title}>Twitter</Typography>
            </div>
            <div className={classes.titleSvg} style={{ paddingBottom: 15 }}>
              <svg
                width="17"
                height="14"
                viewBox="0 0 17 14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17 6.46157C17 5.27373 16.0511 4.30773 14.8843 4.30773C14.4177 4.30773 13.9745 4.4628 13.6127 4.74388C12.4321 3.90927 10.8855 3.41173 9.24051 3.28573L10.1281 1.16636L12.7103 1.7802C12.7928 2.59327 13.4614 3.23081 14.2813 3.23081C15.1561 3.23081 15.8681 2.50604 15.8681 1.61543C15.8681 0.724819 15.1561 5.28577e-05 14.2813 5.28577e-05C13.7269 5.28577e-05 13.2393 0.291898 12.9558 0.732358L9.93765 0.0140528C9.68164 -0.0451777 9.43093 0.0872833 9.32937 0.327436L8.10224 3.25666C6.32607 3.31912 4.63348 3.8285 3.35557 4.71588C3.00753 4.45311 2.57592 4.30773 2.11574 4.30773C0.948911 4.30773 0 5.27373 0 6.46157C0 7.24879 0.422091 7.96064 1.06951 8.32571C1.06105 8.42048 1.05787 8.51741 1.05787 8.61541C1.05787 11.5845 4.37959 14 8.46297 14C12.5453 14 15.8681 11.5845 15.8681 8.61541C15.8681 8.53141 15.8649 8.44848 15.8596 8.36556C16.5493 8.00802 17 7.27895 17 6.46157ZM14.2813 1.07697C14.5722 1.07697 14.8102 1.3182 14.8102 1.61543C14.8102 1.91266 14.5722 2.15389 14.2813 2.15389C13.9904 2.15389 13.7523 1.91266 13.7523 1.61543C13.7523 1.3182 13.9904 1.07697 14.2813 1.07697ZM4.76042 8.07695C4.76042 7.48356 5.23541 7.00003 5.8183 7.00003C6.40118 7.00003 6.87617 7.48356 6.87617 8.07695C6.87617 8.6714 6.40118 9.15386 5.8183 9.15386C5.23541 9.15386 4.76042 8.6714 4.76042 8.07695ZM10.9056 11.6491C10.1757 12.1865 9.31879 12.4557 8.46297 12.4557C7.60716 12.4557 6.75028 12.1865 6.02035 11.6491C5.78339 11.4746 5.73049 11.1375 5.90187 10.8974C6.07324 10.6572 6.40436 10.6034 6.64026 10.7768C7.73093 11.5791 9.19502 11.5812 10.2857 10.7768C10.5216 10.6034 10.8516 10.6551 11.0241 10.8974C11.1955 11.1386 11.1415 11.4746 10.9056 11.6491ZM11.1077 9.15386C10.5237 9.15386 10.0498 8.6714 10.0498 8.07695C10.0498 7.48356 10.5237 7.00003 11.1077 7.00003C11.6916 7.00003 12.1655 7.48356 12.1655 8.07695C12.1655 8.6714 11.6916 9.15386 11.1077 9.15386Z" />
              </svg>
              <Typography className={classes.title}>Reddit</Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityMenu;
