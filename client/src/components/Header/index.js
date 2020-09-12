import React, { useEffect, useState } from "react";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
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

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#282827 !important",
    }
  }
});

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    fontFamily: font
  }
}));

const Header = (props) => {
  const { history } = props;
  const [state] = useStore();
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

  useEffect(() => {
    // test code demonstrating how to set the user and world in store
    // const setNewUser = {
    //   email: "kennethMurphy@gmail.com",
    //   display_name: "KennethMurphy",
    //   avatar: "cat21.jpg",
    //   score: -17 }
    // API.createUser(setNewUser);
    // dispatch({type: "SetUser", user: setNewUser});
    // dispatch({type: "SetWorld", worldName: "Greece"});
  }, []);

  return (
    <div className={classes.root}>
      <AppBar position="static" style={appStyles} alt="stained stone">
        <Toolbar>
          <img edge="start" style={{ marginRight: "10px" }} width={logo.width} src={logo.src} alt="Achilles" />
          <ThemeProvider theme={theme}>
            <Typography color="primary" variant="h3" className={classes.title}>
              Achilles Heel
            </Typography>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <Avatar src={state.user.avatar} />
            </IconButton>
            <Typography className="score" color="primary" variant="h6" onClick={() => setLeaderboardOpen(true)}>
              <FlashOnIcon />
              {`${state.user.score}`}
            </Typography>
          </ThemeProvider>
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
            <MenuItem onClick={() => handleMenuClick("/overworld")}>WorldMap</MenuItem>
            <MenuItem onClick={() => handleMenuClick("/")}>Login</MenuItem>
            <MenuItem onClick={() => handleMenuClick("/credits")}>About</MenuItem>
            <MenuItem onClick={() => handleMenuClick("/logout")}>Logout</MenuItem>
          </Menu>
        </Toolbar>
        <LeaderBoardModal open={leaderboardOpen} close={() => { setLeaderboardOpen(false); }} />
      </AppBar>
    </div>
  );
};

export default withRouter(Header);
