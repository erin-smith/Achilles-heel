import React, { useEffect } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import {useStore} from "../../utils/GlobalState";


function Header() {
  const [state, dispatch] = useStore();
  useEffect(() => {

  // test code demonstrating how to set the user and world in store
  // const setNewUser = {
  //   email: "kennethMurphy@gmail.com",
  //   display_name: "KennethMurphy",
  //   avatar: "cat21.jpg",
  //   score: -17
  // }
  // dispatch({type: "SetUser", user: setNewUser});
  // dispatch({type: "SetWorld", worldName: "Greece"});

  }, [])

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Achilles Heel
        </Typography>
        <Typography>
          { `${state.user.display_name}:${state.currentWorld.name}`  }
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
