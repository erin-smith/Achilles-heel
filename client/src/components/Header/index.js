import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  IconButton,
  Avatar,
} from "@material-ui/core";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import { withRouter } from "react-router-dom";
import API from "../../utils/API";
import { useStore } from "../../utils/globalState";
import LeaderBoardModal from "../LeaderBoardModal";
import AppBarImage from "../../assets/appbar2.png";
import BlackLogo from "../../assets/achilles_heel_logo_black_nobkgd.png";
import "./style.css";

const logo = {
  src: BlackLogo,
  width: "40px"
};

const appStyles = {
  backgroundImage: `url(${AppBarImage})`,
  width: "100%",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  margin: "0",
  padding: "0"
};

const font = "'Caesar Dressing', cursive";
const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    fontFamily: font,
    color: "black"
  }
}));

const Header = (props) => {
  const { history } = props;
  const [state, dispatch] = useStore();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [leaderboardOpen, setLeaderboardOpen] = useState(false);
  const open = Boolean(anchorEl);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  const logout = () => {
    window.localStorage.clear();
    window.location.href = "/";
  };

  useEffect(() => {
    console.log("calling useEffect");
    if (state.user.display_name === "") {
      console.log("display name is blank in state");
      const displayName = window.localStorage.getItem("displayName");
      if (displayName !== "") {
        console.log(`display name in localstorage is ${displayName}`);
        API.getUser(displayName).then((dbUser) => {
          if (dbUser.data.length === 1) {
            dispatch({ type: "SetUser", user: dbUser.data[0] });
            console.log("dbUser.data", dbUser.data);
          }
        });
      }
    }
  }, [state.user.display_name]);

  // useEffect(() => {
  //   // test code demonstrating how to set the user and world in store
  //   // const setNewUser = {
  //   //   email: "kennethMurphy@gmail.com",
  //   //   display_name: "KennethMurphy",
  //   //   avatar: "cat21.jpg",
  //   //   score: -17 }
  //   // API.createUser(setNewUser);
  //   // dispatch({type: "SetUser", user: setNewUser});
  //   // dispatch({type: "SetWorld", worldName: "Greece"});
  // }, []);

  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={appStyles} alt="stained stone" z-index={50000}>
        <Toolbar>
          <img edge="start" style={{ marginRight: "10px" }} width={logo.width} src={logo.src} alt="Achilles" />
          <Typography variant="h3" className={classes.title}>
            Achilles Heel
          </Typography>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
          >
            <Avatar src={state.user.avatar} />
          </IconButton>
          <Typography variant="h6" onClick={() => setLeaderboardOpen(true)}>
            <FlashOnIcon />
            {`${state.user.score}`}
          </Typography>

          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={open}
            onClose={() => setAnchorEl(null)}
          >
            <MenuItem onClick={() => handleMenuClick("/overworld")}>Home</MenuItem>
            {/* <MenuItem onClick={() => handleMenuClick("/")}>Login</MenuItem> */}
            <MenuItem onClick={() => handleMenuClick("/credits")}>Credits</MenuItem>
            <MenuItem onClick={() => handleMenuClick("/tos")}>Terms of Service</MenuItem>
            <MenuItem onClick={() => handleMenuClick("/privacy")}>Privacy</MenuItem>
            <MenuItem onClick={logout}>Logout</MenuItem>
          </Menu>
        </Toolbar>
        <LeaderBoardModal open={leaderboardOpen} close={() => { setLeaderboardOpen(false); }} />
      </AppBar>
    </div>
  );
};

export default withRouter(Header);
