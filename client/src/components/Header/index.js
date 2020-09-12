import React, { useState } from "react";
import { makeStyles, createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
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

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

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

  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={appStyles} alt="stained stone" z-index={50000}>
        <ThemeProvider theme={theme}>
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
              <MenuItem onClick={() => handleMenuClick("/overworld")}>WorldMap</MenuItem>
              <MenuItem onClick={() => handleMenuClick("/")}>Login</MenuItem>
              <MenuItem onClick={() => handleMenuClick("/credits")}>About</MenuItem>
              <MenuItem onClick={() => handleMenuClick("/logout")}>Logout</MenuItem>
            </Menu>
          </Toolbar>
        </ThemeProvider>
        <LeaderBoardModal open={leaderboardOpen} close={() => { setLeaderboardOpen(false); }} />
      </AppBar>
    </div>
  );
};

export default withRouter(Header);
