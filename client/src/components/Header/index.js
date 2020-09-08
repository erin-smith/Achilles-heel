import React, { useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Menu, MenuItem, IconButton, Avatar } from "@material-ui/core";
import { useStore } from "../../utils/globalState";
import { withRouter } from "react-router-dom";

const logo = {
  src:require('../../assets/achilles_heel_logo3.png'),
  width:"40px"
}

const appImg = {
  src:require('../../assets/appbar_img.png'),
  width:"40px"
}


const font =  "'Caesar Dressing', cursive";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
buttonBase: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
    marginRight: theme.spacing(110),
    marginLeft: theme.spacing(0),
    fontFamily: font, 
    fontSize: "50px", 
    color: "charcoal",
  },
  AppBar: {
backgroundImage: "url('../../assets/appbar_img.png')",
backgroundRepeat: "no-repeat",
backgroundPosition: "center center",
backgroundSize: "cover",
backgroundAttachment: "fixed",
height: "100%",
MuiAppBarcolor: appImg
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
    <AppBar position="static" src={appImg.src} alt="stained stone"  >
      <Toolbar >
        <img width={logo.width} src={logo.src} alt="Achilles" ></img>
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
                <Avatar src="https://avatars.dicebear.com/api/bottts/example.svg?options[colors][]=cyan" ></Avatar>
                </IconButton> 
          <Typography variant="h6" > Total Score: {`${state.user.score}`}</Typography>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={ () => setAnchorEl(null)} >
                  <MenuItem onClick={() => handleMenuClick("/")}>Home</MenuItem>
                  <MenuItem onClick={() => handleMenuClick("/login")}>My Profile</MenuItem>
                <MenuItem onClick={() => handleMenuClick("/about")}>About</MenuItem>
                <MenuItem onClick={() => handleMenuClick("/logout")}>Logout</MenuItem>
              </Menu>
      </Toolbar>
    </AppBar>
    </div>
  );
}

export default withRouter(Header);
