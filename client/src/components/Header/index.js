import React, { useEffect } from "react";
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
import { useStore } from "../../utils/globalState";

const logo = {
  src: require("../../assets/achilles_heel_logo2.png"),
  width: "40px"
};

const appImg = {
  src: require("../../assets/appbar_img.png"),
  width: "100%",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
  height: "100%",
};

const font = "'Caesar Dressing', cursive";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    fontFamily: font,
    fontSize: "40px",
    color: "charcoal",
  }
}));

const Header = (props) => {
  const { history } = props;
  const [state] = useStore();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
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
      <AppBar position="static" src={appImg.src} alt="stained stone">
        <Toolbar>
          <img edge="start" style={{ marginRight: "10px" }} width={logo.width} src={logo.src} alt="Achilles" />
          <Typography variant="h6" className={classes.title}>
            Achilles Heel
          </Typography>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <Avatar src={state.user.avatar}>{`${state.user.avatar}`}</Avatar>
          </IconButton>
          <Typography variant="h6">
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
            <MenuItem onClick={() => handleMenuClick("/overworld")}>WorldMap</MenuItem>
            <MenuItem onClick={() => handleMenuClick("/")}>Login</MenuItem>
            <MenuItem onClick={() => handleMenuClick("/credits")}>About</MenuItem>
            <MenuItem onClick={() => handleMenuClick("/logout")}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(Header);
